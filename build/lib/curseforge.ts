import Juke from "juke-build"
import fs from "fs"
import https from "https"
import { z } from "zod"
import type { ManifestFileEntry } from "./manifest.ts"

const zCFModInfo = z.object({
    data: z.object({
        name: z.string(),
        links: z.object({
            websiteUrl: z.url(),
        }),
        authors: z.object({
            name: z.string(),
        }).array().nonempty(),
    }),
})

export const GetModInfo = async (modID: number) => {
    const modData = await fetch(`https://api.curse.tools/v1/cf/mods/${modID}`, {
        redirect: "follow",
        headers: {
            Accept: "application/json"
        }
    })

    if (modData.status !== 200) {
        if (modData.status == 403) {
            Juke.logger.error(`Failed to fetch mod info at ${modData.url}: Bad CF Token`)
        } else {
            Juke.logger.error(`Failed to fetch mod info at ${modData.url}: ${modData.status}`)
        }
        throw new Juke.ExitCode(1)
    }
    return zCFModInfo.parse(await modData.json()).data
}

const zCFModData = z.object({
    data: z.object({
        fileName: z.string().regex(/\.(?:jar|zip)$/),
        fileLength: z.number().int().positive(),
        downloadUrl: z.string().url(),
    }),
})
type CFModData = z.infer<typeof zCFModData>

export const DownloadCF = async (modInfo: Partial<ManifestFileEntry> = {}, dest: string, retrycount?: number): Promise<CFModData["data"]> => {
    if (retrycount === null || retrycount === undefined) {
        retrycount = 5
    }
    const { projectID: modID, fileID: modFileID } = modInfo
    if (!modID || !modFileID) {
        Juke.logger.error(`Bad DownloadCF modInfo args. modID: ${modID} | modFileID: ${modFileID}`)
        throw new Juke.ExitCode(1)
    }

    const modData = await fetch(`https://api.curse.tools/v1/cf/mods/${modID}/files/${modFileID}`, {
        redirect: "follow",
        headers: {Accept: "application/json"}
    })

    if (modData.status !== 200) {
        if (modData.status == 403) {
            Juke.logger.error(`Failed to fetch download url at ${modData.url}: Bad CF Token`)
            throw new Juke.ExitCode(1) // explicitly dont retry if this is the error
        } else {
            Juke.logger.error(`Failed to fetch download url at ${modData.url}: ${modData.status}`)
        }
        if (retrycount <= 0) {
            Juke.logger.error("Exhausted retries, exiting download")
            throw new Juke.ExitCode(1)
        }
        retrycount--
        return await DownloadCF(modInfo, dest, retrycount)
    }
    const { data: modDataJson } = zCFModData.parse(await modData.json())

    dest = `${dest}${modDataJson.fileName}`
    // TODO hash chk
    // let's see if the file exists
    if (fs.existsSync(dest) && fs.statSync(dest).size === modDataJson.fileLength) {
        Juke.logger.info(`Skipped: ${modDataJson.fileName}`)
        return modDataJson
    }

    Juke.logger.info(`Downloading: ${modDataJson.fileName}`)

    try {
        await download_file(modDataJson.downloadUrl, {}, dest)
    } catch {
        Juke.logger.warn(`Download failed ${modDataJson.fileName}`)
        if (retrycount <= 0) {
            Juke.logger.error("Exhausted retries, exiting download")
            throw new Juke.ExitCode(1)
        }
        retrycount--
        return await DownloadCF(modInfo, dest, retrycount)
    }

    if (!fs.existsSync(dest) || fs.statSync(dest).size !== modDataJson.fileLength) {
        Juke.logger.warn(`Download failed ${modDataJson.fileName}`)
        if (retrycount <= 0) {
            Juke.logger.error("Exhausted retries, exiting download")
            throw new Juke.ExitCode(1)
        }
        retrycount--
        return await DownloadCF(modInfo, dest, retrycount)
    }
    return modDataJson
}

async function download_file(url: string, options = {}, file: string) {
    return new Promise<void>((resolve, reject) => {
        const file_stream = fs.createWriteStream(file)
        https.get(url, options, function(response) {
            if (response.statusCode === 302) {
                file_stream.close()
                response.resume()
                download_file(response.headers.location, options, file)
                    .then(resolve)
                    .catch(reject)
                return
            }
            if (response.statusCode !== 200) {
                Juke.logger.error(`Failed to download ${url}: Status ${response.statusCode}`)
                file_stream.close()
                response.resume()
                // eslint-disable-next-line @typescript-eslint/prefer-promise-reject-errors
                reject()
                return
            }
            response.pipe(file_stream)

            // after download completed close filestream
            file_stream.on("finish", () => {
                file_stream.close()
                resolve()
            })

        }).on("error", (err) => {
            file_stream.close()
            Juke.rm(file)
            Juke.logger.error(`Failed to download ${url}: ${err.message}`)
            reject(err)
        })
    })
}
