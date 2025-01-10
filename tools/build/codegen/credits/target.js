//@ts-check
import Juke from '../../juke/index.js';
import fs from 'fs';
import { randomUUID } from 'crypto';
import { fileURLToPath } from 'url';

import { readDatafileJSON } from '../../lib/json_datafile.js';
import { fillTemplateFile, fillTemplates } from '../fill_templates.js';

/**
 * @param {string} f
 */
const resolveNeighbourFilePath = (f) => fileURLToPath(import.meta.resolve('./' + f));

const contributorsFilePath = resolveNeighbourFilePath('contributors.json');

const devCapesFilePath = 'kubejs/client_scripts/Dev_Capes.js';
const devCapeTemplateFilePath = resolveNeighbourFilePath('Dev_Cape.template.js');
const devCapesTemplateFilePath = resolveNeighbourFilePath('Dev_Capes.template.js');

const creditScreenLayoutFilePath = 'config/fancymenu/customization/pack_credit_screen_layout.txt';
const creditScreenLayoutTemplateFilePath = resolveNeighbourFilePath('pack_credit_screen_layout.template.txt');
const creditScreenContributorTemplateFilePath = resolveNeighbourFilePath('pack_credit_screen_contributor.template.txt');

export const CodegenCreditsTarget = new Juke.Target({
  inputs: [
    devCapeTemplateFilePath,
    devCapesTemplateFilePath,

    creditScreenLayoutTemplateFilePath,
    creditScreenContributorTemplateFilePath,

    contributorsFilePath,
  ],
  outputs: [
    devCapesFilePath,
    creditScreenLayoutFilePath,
  ],
  executes: () => {
    /* TODO: Replace JSDoc by a schema validator with static type inference. */
    /**
     * @typedef Contributor
     * @prop {string?} mcuuid
     * @prop {"dev"|"contributor"|"dev-alt"|"contributor-alt"} role
     * @prop {string?} description
     * @prop {string?} link
     */
    /**
     * @typedef ContributorsFile
     * @prop {Record<string, Contributor>} people
     * @prop {Record<Contributor["role"], string>} cape_name_of_role
     * @prop {Pick<Contributor, "role"|"description"> & {skin: string}} defaults
     */

    /** @type {ContributorsFile} */
    const { cape_name_of_role, people, defaults } = readDatafileJSON(contributorsFilePath);

    // Apply default values to all people
    for (const [name, data] of Object.entries(people)) {
      people[name] = Object.assign(Object.create(null), defaults, data);
    }

    // ----------- Dev_Capes.js -----------
    const devCapeTemplate = fs.readFileSync(
      devCapeTemplateFilePath,
      { encoding: 'utf8' },
    );

    const getCapesByRole = (/** @type {Contributor["role"]} */ role) =>
      Object
        .entries(people)
        .filter(([_, data]) => data.mcuuid && data.role.includes(role))
        .map(([name, data]) =>
          fillTemplates(
            devCapeTemplate,
            {
              '{{NAME}}': name,
              // @ts-ignore See filter above
              '{{UUID}}': data.mcuuid,
              '{{CAPE}}': cape_name_of_role[data.role],
            },
          )
        )
        .join('\n');

    fillTemplateFile(
      devCapesTemplateFilePath,
      devCapesFilePath,
      {
        '//{{CODEGEN_DEVS}}': getCapesByRole('dev'),
        '//{{CODEGEN_CONTRIBUTORS}}': getCapesByRole('contributor'),
      },
    );

    // ----------- pack_credit_screen_layout.txt -----------
    const startX = 25, startY = 20;
    const stepX = 25, stepY = 50;
    const maxX = 450;
    const hoverOffsetX = -6, hoverOffsetY = 5;
    let x = startX, y = startY;

    const creditScreenContributorTemplate = fs.readFileSync(
      creditScreenContributorTemplateFilePath,
      { encoding: 'utf8' },
    );

    const creditScreenContributors = Object
      .entries(people)
      .filter(([_, data]) => !data.role.includes('alt'))
      // Bubble up people with skins, as they would be more interesting
      .sort((a, b) => Number(!!b[1].mcuuid) - Number(!!a[1].mcuuid))
      .map(([name, data]) => {
        const elements = fillTemplates(
          creditScreenContributorTemplate,
          {
            '{{MC_UUID}}': data.mcuuid ?? defaults.skin,
            '{{V4_UUID}}': data.mcuuid ?? randomUUID(),
            '{{PLAYERNAME}}': name,
            // "NAME - DESC" if description exists, just "NAME" otherwise
            '{{DESCRIPTION}}': [name, data.description].filter((s) => s).join(' - '),
            '{{X_SKIN}}': x,
            '{{Y_SKIN}}': y,
            '{{X_BUTTON}}': x + hoverOffsetX,
            '{{Y_BUTTON}}': y + hoverOffsetY,
            '{{IF_HAS_LINK}}([^]*?){{IF_HAS_LINK_END}}\n': data.link ? (_, match) => match : '',
            '{{LINK}}': data.link ?? '',
            '{{BUTTON_EXEC_ACTION_UUID}}': randomUUID(),
            '{{BUTTON_EXEC_BLOCK_UUID}}': randomUUID(),
          },
        );
        x += stepX;
        if (x > maxX) {
          // Next row
          x = startX;
          y += stepY;
        }
        return elements;
      })
      .join('');

    fillTemplateFile(
      creditScreenLayoutTemplateFilePath,
      creditScreenLayoutFilePath,
      {
        '{{CODEGEN}}': creditScreenContributors,
      },
    );
  },
});

export default CodegenCreditsTarget;
