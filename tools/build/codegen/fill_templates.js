//@ts-check
import fs from 'fs';

/**
 * Replaces all specified marker substrings in a string.
 * @param {string} template Original string that contains markers.
 * @param {Record<string, {toString(): string}>} filler Dictionary of markers and corresponding fillers.
 * @returns {string} Modified string with all specified markers replaced.
 */
export const fillTemplates = (template, filler) =>
  Object.entries(filler)
    .reduce((t, [key, value]) => t.replaceAll(key, value.toString()), template);

/**
 * Replaces all specified marker substrings in a file and saves to another file.
 * @param {string} templateFilePath Template file path that contains markers.
 * @param {string} saveFilePath Path to the output file.
 * @param {Record<string, {toString(): string}>} filler Dictionary of markers and corresponding fillers.
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
