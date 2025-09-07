import fs from "fs"

type Filler = Record<string, ((sub: string, match: string) => string) | string | number>

/**
 * Replaces all specified marker substrings in a string.
 * @param template Original string that contains markers.
 * @param filler Dictionary of markers' regular expressions and corresponding fillers.
 * @returns Modified string with all matches replaced.
 */
export const fillTemplates = (template: string, filler: Filler): string =>
    Object.entries(filler)
        .reduce((t, [key, value]) => {
            const regex = new RegExp(key, "g")
            // TS does not allow for ternary inside replaceAll
            if (typeof value === "function") {
                return t.replaceAll(regex, value)
            }
            return t.replaceAll(regex, value.toString())
        }, template)

/**
 * Replaces all specified marker substrings in a file and saves to another file.
 * @param templateFilePath Template file path that contains markers.
 * @param saveFilePath Path to the output file.
 * @param filler Dictionary of markers and corresponding fillers.
 */
export const fillTemplateFile = (templateFilePath: string, saveFilePath: string, filler: Filler) =>
    fs.writeFileSync(
        saveFilePath,
        fillTemplates(
            fs.readFileSync(templateFilePath, { encoding: "utf8" }),
            filler,
        ),
    )
