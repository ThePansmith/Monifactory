//priority: 1000

const defaultConfig = {
    mode: 'normal',
    message: 'Valid modes are normal, hardcore and omega.'
};
const configName = 'mode.json';
let config = JsonIO.read(configName);
if (!config || !config.mode) {
    JsonIO.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
    config = defaultConfig;
}
if (config.mode == 'none') {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.log(`Overwrote ${configName}, because the mode 'none' was found. Valid modes are 'normal', 'hardcore' and 'omega'.`);
}

let packMode = config.mode;

global.packmode = packMode;
global.isNormalMode = packMode == 'normal';
global.isHardcoreMode = packMode == 'hardcore';
global.isOmegaMode = packMode == 'omega';
const isNormalMode = packMode == 'normal';
const isHardcoreMode = packMode == 'hardcore';
const isOmegaMode = packMode == 'omega';