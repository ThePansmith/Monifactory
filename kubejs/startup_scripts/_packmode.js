// priority: 1000
/**
 * Handles the interpretation of mode.json
 * to determine the global pack mode booleans: isNormalMode, isHardMode, and isExpertMode.
 * These are used in other scripts to define pack mode-specific behavior.
 */

// Packmode config path & name
const configName = 'config/packmode.json';


// Default mode.json
const defaultConfig = {
    mode: 'Normal',
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
    console.error(`Overwrote ${configName}, because the mode ${configMode} was found. Valid modes are 'Normal', 'Hard' and 'Expert'.`);
}

let packMode = config.mode;
switch (packMode) {
case 'Normal': case 'Hard': case 'Expert': break;
default: invalidConfig(); packMode = config.mode;
}


// String representation of the current packmode
global.packmode = packMode;

// Global mode booleans. Note that isHardMode is also true if the pack is in Expert
global.isNormalMode = packMode == 'Normal';
global.isExpertMode = packMode == 'Expert';
global.isHardMode = (packMode == 'Hard') || global.isExpertMode;
// The !! is to cast the types into boolean since they got transformed into Java Objects from being globals
const isNormalMode = !!global.isNormalMode;
const isExpertMode = !!global.isExpertMode;
const isHardMode = !!global.isHardMode;
