import fs from "fs"
import Juke from "juke-build"
import { resolve } from "path"
import { getPackModeSwitchTarget } from "../deps/pack_mode_switcher.ts"

export const getZipModPackTarget = (
    group: "server" | "client" | "dev",
    dependsOn?: Juke.Target[],
) => Juke.createTarget({

    inputs: [
        "manifest.json",
        "dist/modlist.html",
        "LICENSE.md",
        `dist/${group}`,
    ],

    outputs: [
        `dist/${group}.zip`,
    ],

    dependsOn: () => [
        // Automatically switch to normal mode if no other mode was previously set
        getPackModeSwitchTarget(
            "normal",
            {
                cwd: `dist/${group}${group !== "server" ? "/overrides" : ""}`,
                onlyWhen: () => !fs.existsSync("config/packmode.json"),
                dependsOn,
            }
        ),
    ],

    executes: async () => {
        fs.copyFileSync("manifest.json", `dist/${group}/manifest.json`)
        fs.copyFileSync("dist/modlist.html", `dist/${group}/modlist.html`)
        fs.copyFileSync("LICENSE.md", `dist/${group}/LICENSE.md`)

        if (process.platform === "win32") {
            await Juke.exec("powershell", [
                "Compress-Archive",
                `-Path "${resolve(`dist\\${group}\\*`)}"`,
                `-DestinationPath "${resolve(`dist\\${group}.zip`)}"`,
            ])
        } else {
            Juke.logger.info("Running zip. This might take a while.")
            await Juke.exec("zip", [
                "-qyr", // how queer
                `../${group}.zip`,  // file out
                ".", // include everything
            ], {
                cwd: `dist/${group}`,
            })
        }
    }

})
