#!/usr/bin/env node
/**
* Build script for monifactory-modern
*
* This script uses Juke Build, read the docs here:
* https://github.com/stylemistake/juke-build
*/

import fs from "fs";
import path, { resolve } from "path";
import Juke from "juke-build";
import { DownloadCF, GetModInfo } from "./lib/curseforge.js";
import { CodegenAllTarget } from "./codegen/target-all.js";
import { z } from "zod";
import { progressNumber } from "./lib/log.js"

Juke.chdir("..", import.meta.url);
Juke.setup({ file: import.meta.url }).then((code) => {
    // We're using the currently available quirk in Juke Build, which
    // prevents it from exiting on Windows, to wait on errors.
    if (code !== 0 && process.argv.includes("--wait-on-error")) {
        Juke.logger.error("Please inspect the error and close the window.");
        return;
    }
});

const includeList = [
    "config",
    "defaultconfigs",
    "config-overrides",
    "kubejs",
//  "mods"
]

/** All mods must be lower-case */
const clientMods = [
    "oculus",
    "zume",
    "watermedia",
    "embeddium",
    "embeddiumplus",
    "citresewn",
    "legendarytooltips",
    "fancymenu",
    "drippyloadingscreen",
    "badoptimizations"
]

/**
 * @param {fs.PathLike} ourDir
 * @param {fs.PathLike} newDir
 */
const symlinkSync = (ourDir, newDir) => {
    if (process.platform === "win32") {
        if (!fs.lstatSync(ourDir).isDirectory()) {
            fs.copyFileSync(ourDir, newDir);
            return;
        }
        fs.symlinkSync(ourDir, newDir, "junction")
        return;
    }
    fs.symlinkSync(ourDir, newDir)
}

/**
 * @param {fs.PathLike} ourDir
 * @param {fs.PathLike} newDir
 * @param {(file: string) => boolean} filter
 */
const cpSyncFiltered = (ourDir, newDir, filter) => {
    for (const file of fs.readdirSync(ourDir, { recursive:false })) {
        if (!filter(file)) continue;
        fs.copyFileSync(path.join(ourDir, file), path.join(newDir, file))
    }
}

async function packMod(group) {
    fs.copyFileSync("manifest.json", `dist/${group}/manifest.json`)
    fs.copyFileSync("dist/modlist.html", `dist/${group}/modlist.html`)
    fs.copyFileSync("LICENSE.md", `dist/${group}/LICENSE.md`)
    // Turns out you cant package bat files in CF releases anymore.
    // fs.copyFileSync('pack-mode-switcher.bat', `dist/${group}/overrides/pack-mode-switcher.bat`)
    // fs.copyFileSync('pack-mode-switcher.sh', `dist/${group}/overrides/pack-mode-switcher.sh`)

    try {
        if (process.platform === "win32") {
            // Switch build to NM if mode is unset
            if (!fs.existsSync("config/packmode.json")) {
                const packSwitchPath = `dist/${group}${group !== "server" ? "/overrides" : ""}`; // to account for server build not being in overrides
                await Juke.exec("cmd.exe", ["/c", resolve("pack-mode-switcher.bat"), "-r", "-s", "n"], {
                    cwd: packSwitchPath
                });
            }

            await Juke.exec("powershell", [
                "Compress-Archive",
                `-Path "${resolve(`dist\\${group}\\*`)}"`,
                `-DestinationPath "${resolve(`dist\\${group}.zip`)}"`,
            ])
            return;
        }

        // Switch build to NM if mode is unset
        if (!fs.existsSync("config/packmode.json")) {
            const packSwitchPath = `dist/${group}${group !== "server" ? "/overrides" : ""}`; // to account for server build not being in overrides
            await Juke.exec("./pack-mode-switcher.sh", ["-r", "-s", "n"], {
                cwd: packSwitchPath
            });
        }

        let hasZipCmd = false;
        try {
            await Juke.exec("zip", ["--help"], { silent: true });
            hasZipCmd = true;
        } catch { /* noop */ }

        if (hasZipCmd) {
            await Juke.exec("zip", [
                "-qyr",
                `../${group}.zip`,  // file out
                ".", // include everything
            ], {
                cwd: `dist/${group}`,
            })
            return;
        }
    } catch (error) {
        Juke.logger.error(error);
        throw new Juke.ExitCode(1);
    }
}

// for --mode=beta/release
export const ModeParameter = new Juke.Parameter({
    type: "string"
})

export const BuildModlistTarget = new Juke.Target({
    inputs: ["manifest.json"],
    outputs: ["dist/modlist.html"],
    executes: async () => {
        fs.mkdirSync("dist", { recursive: true })
        const {files} = z.object({
            files: z.object({
                projectID: z.number()
            }).array()
        }).parse(
            JSON.parse(fs.readFileSync("manifest.json", "utf-8"))
        );
        const total = progressNumber(files.length)
        let html = "<ul>\n"
        for (const [i, {projectID}] of files.entries()) {
            const modInfo = await GetModInfo(projectID);
            Juke.logger.info(`Downloaded: (${total(i)}) Mod info "${modInfo.name}"`)
            html += `<li><a href=${modInfo.links.websiteUrl}>${modInfo.name} (by ${modInfo.authors[0].name})</a></li>\n`;
        }
        html += "</ul>"
        fs.writeFileSync("dist/modlist.html", html);
    }
})

export const DownloadModsTarget = new Juke.Target({
    inputs: ["manifest.json"],
    outputs: () => [], // always run, we have internal logic to check mods now
    executes: async () => {
        const manifest = JSON.parse(fs.readFileSync("manifest.json", "utf-8"));

        fs.mkdirSync("dist/modcache", { recursive: true })

        // get old jsondata files cache
        let dataKeys = {};
        const mIdToDownload = [];
        if (fs.existsSync("dist/cache.json")) {
            Juke.logger.info("Modmeta cache hit")
            // diff new & old data
            const oldData = JSON.parse(fs.readFileSync("dist/cache.json", "utf-8"));
            const newData = {}
            for (const key in manifest.files) {
                const data = manifest.files[key];
                const { projectID, fileID, required } = data;
                newData[`${projectID}`] = { fileID, required }
            }

            const oldDataKeys = Object.keys(oldData);
            const newDataKeys = Object.keys(newData);

            // filter returns changed mods, lets see now who owns them
            for (const pid of oldDataKeys.filter(pid => !newDataKeys.includes(pid))
                .concat(newDataKeys.filter(x => !oldDataKeys.includes(x)))) {
                const fromOldData = oldData[`${pid}`];
                if (fromOldData) {
                    // from old, which means this is removed
                    Juke.rm(`dist/modcache/${fromOldData["file"]}`)
                    Juke.logger.info(`Mod was removed from modpack: ${pid}`)
                    delete oldData[`${pid}`]
                    continue;
                }
                if (newData[`${pid}`] && !mIdToDownload.includes(`${pid}`)) { // new mod added
                    mIdToDownload.push(`${pid}`);
                    Juke.logger.info(`Mod was added from modpack: ${pid}`)
                    oldData[`${pid}`] = {...newData[`${pid}`]} // copy
                }
            }

            // now filter changed *fileids*, could prolly b optimized and use 1 loop instead of 2
            for (const pid of oldDataKeys.filter(pid => (
                newData[pid] && oldData[pid]["fileID"] !== newData[pid]["fileID"]))) {
                const fromOldData = oldData[`${pid}`];
                // from old, which means this is updated
                if (fromOldData) {
                    Juke.rm(`dist/modcache/${fromOldData["file"]}`)
                    Juke.logger.info(`Mod was updated from modpack: ${pid}`)
                    if (!mIdToDownload.includes(`${pid}`)) mIdToDownload.push(`${pid}`);
                    oldData[`${pid}`] = {
                        file: undefined,
                        fileID: newData[pid]["fileID"],
                        required: newData[pid]["required"]
                    }
                }
            }
            dataKeys = oldData;
        } else {
            Juke.logger.info("Modmeta remapping")
            for (const key in manifest.files) {
                const data = manifest.files[key];
                const { projectID, fileID, required } = data;
                dataKeys[`${projectID}`] = { fileID, required }
                mIdToDownload.push(`${projectID}`);
            }
        }

        for (const modID of mIdToDownload) {
            const file = dataKeys[modID];
            const res = await DownloadCF({
                modID,
                modFileID: file.fileID
            }, "dist/modcache/");
            dataKeys[modID]["file"] = res.fileName;
        }
        fs.writeFileSync("dist/cache.json", JSON.stringify(dataKeys))
    }
});

export * from "./codegen/target-all.js";

export const BuildClientTarget = new Juke.Target({
    dependsOn: [CodegenAllTarget, BuildModlistTarget],
    inputs: [
        ...includeList,
        "dist/modlist.html"
    ],
    outputs: () => ([
        "dist/client/",
        "dist/client.zip",
        ...includeList.map(v => `dist/client/overrides/${v}`),
        // "dist/client/mods",
    ]),
    executes: async () => {
        fs.mkdirSync("dist/client/overrides", { recursive: true })
        for (const folders of includeList) {
            fs.cpSync(folders, `dist/client/overrides/${folders}`, { recursive: true })
        }

        await packMod("client");
    }
})

export const BuildServerTarget = new Juke.Target({
    dependsOn: [CodegenAllTarget, BuildModlistTarget, DownloadModsTarget],
    inputs: [
        ...includeList,
        "dist/modlist.html"
    ],
    outputs: () => ([
        "dist/server/",
        "dist/server.zip",
        ...includeList.map(v => `dist/server/${v}`),
        "dist/server/mods"
    ]),
    executes: async () => {
        fs.mkdirSync("dist/server", { recursive: true })
        for (const folders of includeList) {
            fs.cpSync(folders, `dist/server/${folders}`, { recursive: true })
        }

        fs.mkdirSync("dist/server/mods")
        cpSyncFiltered("dist/modcache/", "dist/server/mods", file => {
            const fillet = file.toLowerCase();
            return (
                fillet.includes(".jar")
                && !clientMods.find(modName => fillet.includes(modName))
            )
        })

        await packMod("server");
    }
})

export const BuildDevTarget = new Juke.Target({
    dependsOn: [BuildModlistTarget, DownloadModsTarget],
    inputs: [
    // weird bug with symlinked config and mods folder
        ...includeList,
        "dist/modlist.html"
    ],
    outputs: () => ([
        "dist/dev/",
        "dist/.devtmp/",
        "dist/dev.zip",
        ...includeList.map(v => `dist/dev/overrides/${v}`),
        "dist/dev/overrides/mods",
    ]),
    executes: async () => {
        Juke.rm("dist/.devtmp", { recursive: true })

        if (fs.existsSync("dist/dev")) {
            Juke.logger.info("Only updating mods as dist/dev exists");

            fs.mkdirSync("dist/dev/overrides", { recursive: true });
            fs.cpSync("dist/modcache", "dist/.devtmp", { recursive: true });
            fs.cpSync("mods", "dist/.devtmp", { recursive: true });
            return;
        }

        fs.mkdirSync("dist/dev/overrides", { recursive: true });
        fs.mkdirSync("dist/.devtmp", { recursive: true });
        for (const folders of includeList.filter(v => !(v === "mods" || v === "config"))) {
            symlinkSync(resolve(folders), resolve(`dist/dev/overrides/${folders}`));
        }

        // "merge" both mod folders
        fs.cpSync("dist/modcache", "dist/.devtmp", { recursive: true });
        fs.cpSync("mods", "dist/.devtmp", { recursive: true, force: true });
        symlinkSync(resolve("dist/.devtmp"), resolve("dist/dev/overrides/mods"));
        // fs.cpSync('dist/.devtmp', 'dist/dev/mods', { recursive: true });
        fs.cpSync("config", "dist/dev/overrides/config", { recursive: true });

        // todo find the mod to blame, or just remove this and the filters up there if this ever gets fixed
        Juke.logger.warn("Due to a bug with moonlight, symlinking the config folder causes errors which breaks game startup.")
        Juke.logger.warn("When updating, the config folder requires manual copy.")
        await packMod("dev")
    }
})

export const BuildAllTarget = new Juke.Target({
    dependsOn: [BuildServerTarget, BuildClientTarget]
})

export const UploadTarget = new Juke.Target({
    dependsOn: [BuildAllTarget],
    parameters: [ModeParameter],
    inputs: [
        "dist/client.zip",
        "dist/server.zip",
    ],
    executes: async ({ get }) => {
        get(ModeParameter);
    },
})

export const CleanCacheTarget = new Juke.Target({
    executes: async () => {
        Juke.rm("dist/modcache", { recursive: true });
        Juke.rm("dist/modlist.html");
    },
})

export const CleanBuildTarget = new Juke.Target({
    executes: async () => {
        Juke.rm("dist/client", { recursive: true });
        Juke.rm("dist/dev", { recursive: true });
        Juke.rm("dist/server", { recursive: true });
        Juke.rm("dist/.devtmp", { recursive: true });
        Juke.rm("dist/*.zip");
    },
})

export const CleanAllTarget = new Juke.Target({
    dependsOn: [CleanCacheTarget, CleanBuildTarget],
});

export default BuildDevTarget;
