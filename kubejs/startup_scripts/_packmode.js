//priority: 1000
/**
 * Handles the interpretation of mode.json 
 * to determine the global pack mode booleans: isNormalMode, isHardMode, and isHarderMode.
 * These are used in other scripts to define pack mode-specific behavior.
 */

// Packmode config path & name
const configName = 'config/packmode.json';


// Default mode.json
const defaultConfig = {
    mode: 'normal',
    message: 'This tells KubeJS what mode the pack is currently in, packmode is changed in pack-mode-switcher'
};


// Handle the possibility that there may not be a mode.json
let config = JsonIO.read(configName);
if (!config || !config.mode) {
    JsonIO.write(configName, defaultConfig);
    console.log(`Created new ${configName}`);
    config = defaultConfig;
}

let invalidConfig = function (configMode) {
    JsonIO.write(configName, defaultConfig);
    config.mode = defaultConfig.mode;
    console.error(`Overwrote ${configName}, because the mode ${configMode} was found. Valid modes are 'normal', 'hard' and 'expert'.`);
}

let packMode = config.mode;
switch (packMode) {
    case 'normal': case 'hard': case 'expert': break;
    default: invalidConfig(); packMode = config.mode;
}


// String representation of the current packmode
global.packmode = packMode;

// Global mode booleans. Note that isHardMode is also true if the pack is in Expert
global.isNormalMode = packMode == 'normal';
global.isHarderMode = packMode == 'expert';
global.isHardMode = (packMode == 'hard') || global.isHarderMode;
// The !! is to cast the types into boolean since they got transformed into Java Objects from being globals
const isNormalMode = !!global.isNormalMode;
const isHarderMode = !!global.isHarderMode;
const isHardMode = !!global.isHardMode;