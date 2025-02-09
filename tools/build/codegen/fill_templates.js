// @ts-check
import fs from 'fs';

/**
 * @typedef {Record<string, ((sub: string, match: string) => string) | string | number>} Filler
 */

/**
 * Replaces all specified marker substrings in a string.
 * @param {string} template Original string that contains markers.
 * @param {Filler} filler Dictionary of markers' regular expressions and corresponding fillers.
 * @returns {string} Modified string with all matches replaced.
 */
export const fillTemplates = (template, filler) =>
    Object.entries(filler)
        .reduce((t, [key, value]) => {
            const regex = new RegExp(key, 'g');
            // TS does not allow for ternary inside replaceAll
            if (typeof value === 'function') {
                return t.replaceAll(regex, value);
            }
            return t.replaceAll(regex, value.toString());
        }, template);

/**
 * Replaces all specified marker substrings in a file and saves to another file.
 * @param {string} templateFilePath Template file path that contains markers.
 * @param {string} saveFilePath Path to the output file.
 * @param {Filler} filler Dictionary of markers and corresponding fillers.
 * @returns {void}
 */
export const fillTemplateFile = (templateFilePath, saveFilePath, filler) =>
    fs.writeFileSync(
        saveFilePath,
        fillTemplates(
            fs.readFileSync(templateFilePath, { encoding: 'utf8' }),
            filler,
        ),
    );
