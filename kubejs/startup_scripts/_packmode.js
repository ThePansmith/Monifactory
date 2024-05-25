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
global.isNormalMode = packMode == 'normal';
global.isHarderMode = packMode == 'harder';
global.isHardMode = (packMode == 'hard') || global.isHarderMode;
//the !! is to cast the types into boolean since they get given a strange Java type from being a global
const isNormalMode = !!global.isNormalMode;
const isHarderMode = !!global.isHarderMode;
const isHardMode = !!global.isHardMode;