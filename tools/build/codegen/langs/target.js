//@ts-check
import { basename, dirname, join } from 'path';
import Juke from '../../juke/index.js';
import fs from 'fs';
import { readDatafileJSON, writeDatafileJSON } from '../../lib/json_datafile.js';
import { UDTransform } from './en_ud.js';

/**
 * @param {string} name Input lang file name
 * @param {string} newName Output lang file name
 * @returns {{in: string; out: string;}[]} List of full input files paths and output file paths
 */
const getAllInputLangsAndOutputLangs = (name, newName) =>
  fs
    .readdirSync('../../', { recursive: true, encoding: 'utf8' })
    .filter((filePath) => basename(filePath) === name)
    .map((filePath) => ({
      in: filePath,
      out: join(dirname(filePath), newName),
    }));

const UDLocal = getAllInputLangsAndOutputLangs('en_us.local', 'en_ud.local');
const UDJSON = getAllInputLangsAndOutputLangs('en_us.json', 'en_ud.json');

const allFiles = [
  UDLocal,
  UDJSON,
].flat();

export const CodegenLangsTarget = new Juke.Target({
  inputs: allFiles.map((f) => f.in),
  outputs: allFiles.map((f) => f.out),
  executes: () => {
    for (const { in: original, out: generated } of UDLocal) {
      // Transforms *.local fancymenu translation files
      const UD = fs
        .readFileSync(original, { encoding: 'utf8' })
        // This regex matches translation values and captures them trimmed
        .replaceAll(/(?<=^[^\s]+\s+=\s)\s*(.+)$/gm, (_, english) => UDTransform(english));
      fs.writeFileSync(generated, UD, { encoding: 'utf8' });
    }

    for (const { in: original, out: generated } of UDJSON) {
      // Transforms *.json translation files
      /** @type {Record<string, string>} */
      const translations = readDatafileJSON(original);
      writeDatafileJSON(
        generated,
        Object.fromEntries(
          Object.entries(translations).map(([k, v]) => [k, UDTransform(v)]),
        ),
      );
    }
  },
});

export default CodegenLangsTarget;
