import Juke from "juke-build"
import { cacheFolderByManifestFileEntry, createDownloadModTarget } from "./mods.ts"
import { readManifest } from "../lib/manifest.ts"
import { join, resolve } from "path"
import { readDatafileJSON } from "../lib/json_datafile.ts"

const CORE_MOD_PROJECT_ID = 1266569

const getCoreModManifestFileEntry = () => readManifest()
    .files
    .find(file => file.projectID === CORE_MOD_PROJECT_ID)

export type TPackMode = "normal" | "hard" | "expert"

let mutex = false

export const getPackModeSwitchTarget = (
    mode: TPackMode,
    { cwd, dependsOn, onlyWhen }: {
        cwd: string,
        dependsOn?: Juke.Target[],
        onlyWhen?: Juke.OnlyWhenFn,
    }
) => Juke.createTarget({
    name: "switch-pack-mode-to-" + mode,

    onlyWhen: async ctx => {
        if (!await onlyWhen(ctx)) return false
        try {
            const { mode: existingMode } = readDatafileJSON(join(cwd, "config/packmode.json")) as { mode?: string }
            return mode !== existingMode.toLowerCase()
        } catch {
            return true
        }
    },

    // Needs the core mod jar
    dependsOn: () => [createDownloadModTarget(getCoreModManifestFileEntry()), ...dependsOn],

    executes: async () => {
        while (mutex) {
            await new Promise(r => setTimeout(r, 1000))
        }
        mutex = true
        try {
            const coreModFolder = cacheFolderByManifestFileEntry(getCoreModManifestFileEntry())
            const [coreModJarPath] = Juke.glob(join(coreModFolder, "*.jar"))
            if (!coreModJarPath) throw new Error("Core mod not found")

            // Core mod performs pack switching when executed standalone
            await Juke.exec(
                "java",
                ["-jar", resolve(coreModJarPath), mode, "--relative"],
            )
        } finally {
            mutex = false
        }
    }

})
