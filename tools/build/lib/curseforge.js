import Juke from '../juke/index.js';
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
  } catch (error) {
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

/**
 * Upload to curseforge, see [old curseforge api doc](https://support.curseforge.com/en/support/solutions/articles/9000197321-curseforge-upload-api#Project-Upload-File-API)
 * @param {string} key api key
 * @param {{
 *  mcVersion?: string;
 *  file: any;
 *  displayName: string;
 *  projectID: number | string;
 *  releaseType: 'release' | 'beta' | 'alpha';
 *  parentFileID?: number | string;
 *  changelog?: string;
 * }} options
 * @returns
 */
export const UploadCF = async (key, options = {}) => {
  const {
    mcVersion,
    file,
    displayName,
    projectID,
    releaseType = 'beta',
    parentFileID,
    changelog = ""
  } = options;
  if (!file || !displayName || !projectID) {
    Juke.logger.error(`UploadCF missing values in options.`);
    throw new Juke.ExitCode(1);
  }

  const headers = {
    "X-Api-Key": key,
    Accept: "application/json"
  }

  let gameVersions = undefined;
  // dont bother fetching if parentFileID exists, gameVersions gets ignored anyways
  if (parentFileID) {
    if (!mcVersion) {
      Juke.logger.error(`UploadCF missing mcVersion in options.`);
      throw new Juke.ExitCode(1);
    }
    // doc says this requires keys, its lying
    const gameVerApi = await fetch(`https://api.curseforge.com/v1/minecraft/version/${mcVersion}`, {
      headers,
      redirect: "follow",
    });
    if (gameVerApi.status !== 200) {
      if (gameVerApi.status == 403) {
        Juke.logger.error(`Failed to fetch gameVerApi at ${gameVerApi.url}: Bad CF Token`);
      } else {
        Juke.logger.error(`Failed to fetch gameVerApi at ${gameVerApi.url}: ${gameVerApi.status}`);
      }
      throw new Juke.ExitCode(1);
    }

    gameVersions = (await gameVerApi.json()).data.gameVersionTypeID;
  }

  const formData = new FormData();
  formData.append('metadata',
    JSON.stringify({
      changelog,
      changelogType: ["markdown"],
      releaseType,
      parentFileID,
      gameVersions,
      displayName
    }))
  formData.append('file', fs.createReadStream(file));

  const uploadResponse = await fetch(`https://minecraft.curseforge.com/api/projects/${projectID}/upload-file`, {
    method: 'post',
    headers: {
      ...headers,
      "Content-Type": "multipart/form-data",
    },
    redirect: "follow",
    body: formData
  });

  if (uploadResponse.status !== 200) {
    if (uploadResponse.status == 403) {
      Juke.logger.error(`Failed to upload at ${uploadResponse.url}: Bad CF Token`);
    } else {
      Juke.logger.error(`Failed to upload at ${uploadResponse.url}: ${uploadResponse.status}`);
    }
    throw new Juke.ExitCode(1);
  }

  return (await gameVerApi.json());
}

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
