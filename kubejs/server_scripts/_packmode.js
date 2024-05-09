//priority: 1000

const defaultConfig = {
    mode: 'normal',
    message: 'Valid modes are normal, expert and omega.'
};
const configName = 'mode.json';
let config = JsonIO.read(configName);
if (!config || !config.mode) {
    JsonIO.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
    config = defaultConfig;
}
if (config.mode === 'none') {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.log(`Overwrote ${configName}, because the mode 'none' was found. Valid modes are 'normal', 'expert' and 'omega'.`);
}

let packMode = config.mode;

global.packmode = packMode;
global.isNormalMode = packMode == 'normal';
global.isExpertMode = (packMode == 'expert') || global.isOmegaMode;
global.isOmegaMode = packMode == 'omega';
const isNormalMode = packMode == 'normal';
const isExpertMode = (packMode == 'expert') || isOmegaMode;
const isOmegaMode = packMode == 'omega';

PlayerEvents.loggedIn(event => {
    // devmode stuff so we can switch modes in runtime (not recommended)
    // let foundOldGameStage = false;
    // event.player.stages.all.filter(e => e.includes('mode_')).forEach(ev => {
    //     if (ev === `mode_${global.packmode}`) return;
    //     event.removeGameStage(ev) // remove old stages
    //     foundOldGameStage = true;
    // });
    // if (foundOldGameStage) {
    //     event.player.tell(Text.yellow('Pack mode swapped'))
    // }

    if (!event.hasGameStage(`mode_${global.packmode}`))
        event.addGameStage(`mode_${global.packmode}`);
})