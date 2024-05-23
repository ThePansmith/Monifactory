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
let invalidConfig = function (configMode) {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.error(`Overwrote ${configName}, because the mode ${configMode} was found. Valid modes are 'normal', 'hard' and 'harder'.`);
}

let packMode = config.mode;
switch (packMode) {
	case 'normal': case 'hard': case 'harder': break;
	default: invalidConfig(); packMode= config.mode;
}

global.packmode = packMode;
const isNormalMode = global.isNormalMode = packMode == 'normal';
const isHarderMode = global.isHarderMode = packMode == 'harder';
const isHardMode = global.isHardMode = (packMode == 'hard') || global.isHarderMode;