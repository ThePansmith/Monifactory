//priority: 1000

const defaultConfig = {
    mode: 'normal',
    message: 'This tells KubeJS what mode the pack is currently in, packmode is changed in pack-mode-switcher'
};
const configName = 'config/packmode.json';
let config = JsonIO.read(configName);
if (!config || !config.mode) {
    JsonIO.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
    config = defaultConfig;
}
if (config.mode === 'none') {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.log(`Overwrote ${configName}, because the mode 'none' was found. Valid modes are 'normal', 'hard' and 'harder'.`);
}

let packMode = config.mode;

global.packmode = packMode;
global.isNormalMode = packMode == 'normal';
global.isHardMode = (packMode == 'hard') || global.isHarderMode;
global.isHarderMode = packMode == 'harder';
const isNormalMode = packMode == 'normal';
const isHardMode = (packMode == 'hard') || isHarderMode;
const isHarderMode = packMode == 'harder';

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