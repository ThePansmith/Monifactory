// @ts-check
import fs from 'fs';
import Juke from 'juke-build';

/**
 * Reads JSON from a file.
 * @param {string} path File path.
 * @returns Parsed JSON as a JS object.
 */
export const readDatafileJSON = (path) => {
    try {
        return JSON.parse(fs.readFileSync(path, {
            encoding: 'utf8',
        }));
    } catch {
        Juke.logger.error('Failed to read JSON at ' + path);
        throw new Juke.ExitCode(1);
    }
};

/**
 * Writes JSON to a file.
 * @param {string} path File path.
 * @param {*} data JSON
 */
export const writeDatafileJSON = (path, data) => 
    fs.writeFileSync(path, JSON.stringify(data, null, 2), 'utf8');
