import Juke from 'juke-build';
import fs from 'fs';
import https from 'https';

export const GetModInfo = async (key, modID) => {
    const modData = await fetch(`https://api.curseforge.com/v1/mods/${modID}`, {
        redirect: "follow",
        headers: {
            "X-Api-Key": key,
            Accept: "application/json"
        }
    });

    if (modData.status !== 200) {
        if (modData.status == 403) {
            Juke.logger.error(`Failed to fetch mod info at ${modData.url}: Bad CF Token`);
        } else {
            Juke.logger.error(`Failed to fetch mod info at ${modData.url}: ${modData.status}`);
        }
        throw new Juke.ExitCode(1);
    }
    return (await modData.json()).data;
}

export const DownloadCF = async (key, modInfo = {}, dest, retrycount) => {
    if (retrycount === null || retrycount === undefined) {
        retrycount = 5;
    }
    const { modID, modFileID } = modInfo;
    if (!modID || !modFileID) {
        Juke.logger.error(`Bad DownloadCF modInfo args. modID: ${modID} | modFileID: ${modFileID}`);
        throw new Juke.ExitCode(1);
    }
    const headers = {
        "X-Api-Key": key
    }

    const modData = await fetch(`https://api.curseforge.com/v1/mods/${modID}/files/${modFileID}`, {
        redirect: "follow",
        headers: {...headers, Accept: "application/json"}
    });

    if (modData.status !== 200) {
        if (modData.status == 403) {
            Juke.logger.error(`Failed to fetch download url at ${modData.url}: Bad CF Token`);
            throw new Juke.ExitCode(1); // explicitly dont retry if this is the error
        } else {
            Juke.logger.error(`Failed to fetch download url at ${modData.url}: ${modData.status}`);
        }
        if (retrycount <= 0) {
            Juke.logger.error('Exhausted retries, exiting download');
            throw new Juke.ExitCode(1);
        }
        retrycount--;
        return await DownloadCF(key, modInfo, dest, retrycount);
    }
    const modDataJson = (await modData.json()).data;

    dest = `${dest}${modDataJson.fileName}`
    // TODO hash chk
    // let's see if the file exists
    if (fs.existsSync(dest) && fs.statSync(dest).size === modDataJson.fileLength) {
        Juke.logger.info(`Skipped: ${modDataJson.fileName}`)
        return modDataJson;
    }

    Juke.logger.info(`Downloading: ${modDataJson.fileName}`)

    try {
        await download_file(modDataJson.downloadUrl, { headers: headers }, dest);
    } catch {
        Juke.logger.warn(`Download failed ${modDataJson.fileName}`)
        if (retrycount <= 0) {
            Juke.logger.error('Exhausted retries, exiting download');
            throw new Juke.ExitCode(1);
        }
        retrycount--;
        return await DownloadCF(key, modInfo, dest, retrycount);
    }

    if (!fs.existsSync(dest) || fs.statSync(dest).size !== modDataJson.fileLength) {
        Juke.logger.warn(`Download failed ${modDataJson.fileName}`)
        if (retrycount <= 0) {
            Juke.logger.error('Exhausted retries, exiting download');
            throw new Juke.ExitCode(1);
        }
        retrycount--;
        return await DownloadCF(key, modInfo, dest, retrycount);
    }
    return modDataJson;
};

async function download_file(url, options = {}, file) {
    return new Promise((resolve, reject) => {
        let file_stream = fs.createWriteStream(file);
        https.get(url, options, function(response) {
            if (response.statusCode === 302) {
                file_stream.close();
                download_file(response.headers.location, options, file)
                    .then(() => resolve());
                return;
            }
            if (response.statusCode !== 200) {
                Juke.logger.error(`Failed to download ${url}: Status ${response.statusCode}`);
                file_stream.close();
                reject()
                return
            }
            response.pipe(file_stream);

            // after download completed close filestream
            file_stream.on("finish", () => {
                file_stream.close();
                resolve()
            });

        }).on("error", (err) => {
            file_stream.close();
            Juke.rm(file);
            Juke.logger.error(`Failed to download ${url}: ${err.message}`);
            reject()
        });
    });
}
