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
if (config.mode == 'none') {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.log(`Overwrote ${configName}, because the mode 'none' was found. Valid modes are 'normal', 'expert' and 'omega'.`);
}

let packMode = config.mode;

global.packmode = packMode;
global.isNormalMode = packMode == 'normal';
global.isExpertMode = packMode == 'expert';
global.isOmegaMode = packMode == 'omega';
const isNormalMode = packMode == 'normal';
const isExpertMode = packMode == 'expert';
const isOmegaMode = packMode == 'omega';