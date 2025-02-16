// priority: 999
/**
 ! This script loads first before the other startup scripts
 * put your util or patches here so that you can access them at other scripts
 */

/**
 * # DO NOT USE THIS!!!!
 * @private
 * @param {string} char 0 - 6
 * @param {number} idx
 * @returns {Internal.MutableComponent}
 */
const ____rainbowify_idx_to_color = (char, idx) => {
    switch (idx) {
    case 0:
        return Text.red(char);
    case 1:
        return Text.gold(char); // orange
    case 2:
        return Text.yellow(char);
    case 3:
        return Text.green(char);
    case 4:
        return Text.aqua(char);
    case 5:
        return Text.blue(char);
    case 6:
        return Text.lightPurple(char);
    default:
        return char;
    }
}

/**
 * Rainbowify text
 * @param {string} text
 * @param {number} offset
 * @returns {Internal.MutableComponent}
 */
const rainbowify = (text, offset) => {
    const components = [];
    let idx = 0 + (offset || 0);
    for (const char of text) {
        idx++;
        components.push(____rainbowify_idx_to_color(char, (idx % 7)));
    }
    return Text.join(components);
}

/**
 * @param {string} text
 * @param {number} offset
 * @returns {Internal.MutableComponent}
 */
const rainbowifySingle = (text, offset) => {
    return ____rainbowify_idx_to_color(text, (offset % 7));
}

// Tier enums for easier data handling
const TIER_ULV = 0; // ulv
const TIER_LV = 1;
const TIER_MV = 2;
const TIER_HV = 3;
const TIER_EV = 4;
const TIER_IV = 5;
const TIER_LUV = 6;
const TIER_ZPM = 7;
const TIER_UV = 8;
const TIER_UHV = 9;
const TIER_UEV = 10;
const TIER_UIV = 11;
const TIER_MAX = 12;
const TIER_END = 13;
const TIER_ID_MAPPING = [
    "ULV", "LV", "MV", "HV", "EV", "IV", "LuV", "ZPM", "UV", "UHV", "UEV", "UIV", "MAX", "END"
]
