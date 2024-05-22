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
if (config.mode == 'none') {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.log(`Overwrote ${configName}, because the mode 'none' was found. Valid modes are 'normal', 'hard' and 'omega'.`);
}

let packMode = config.mode;

global.packmode = packMode;
global.isNormalMode = packMode == 'normal';
global.isHardMode = (packMode == 'hard') || global.isOmegaMode;
global.isOmegaMode = packMode == 'omega';
const isNormalMode = packMode == 'normal';
const isHardMode = (packMode == 'hard') || isOmegaMode;
const isOmegaMode = packMode == 'omega';