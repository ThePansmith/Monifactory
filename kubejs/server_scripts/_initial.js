// priority: 999
/**
 ! This script loads first before the other startup scripts
 * put your util or patches here so that you can access them at other scripts
 */

// see quest_scripts.js
const cake_reset_time = 60; // in seconds

/**
 * Capitalizes the first char of the string
 * @param {string} word
 * @returns
 */
const capitalize = (word) => (word[0].toUpperCase() + word.substring(1));

/**
 * helper for compressing/decompress crafting
 * @param {Internal.RecipesEventJS_} ev
 * @param {OutputItem_} output output
 * @param {InputItem_} input input
 * @param {boolean} make_uncompacting make uncompacting recipie (default true)
 * @returns {Internal.RecipeTypeFunction}
 */
const compacting = (ev, output, input, make_uncompacting) => {
    // kubejs doesnt support nullish coalescing :(
    if (make_uncompacting === undefined || make_uncompacting === null) {
        make_uncompacting = true;
    }

    if (make_uncompacting) ev.shapeless(`9x ${input}`, [output]);

    return ev.shaped(output, [
        "aaa",
        "aaa",
        "aaa"
    ], { a: input });
}

// Java Classes
// used to create FluidIngredientJS objects
const JSONObject = Java.loadClass("com.google.gson.JsonObject")
// Required to use fluid tags in gregtech recipes
const FluidIngredientJS = Java.loadClass("com.gregtechceu.gtceu.integration.kjs.recipe.components.GTRecipeComponents$FluidIngredientJS")
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
const TIER_MAX = 11;
const TIER_END = 12;
const TIER_ID_MAPPING = [
    "ULV", "LV", "MV", "HV", "EV", "IV", "LuV", "ZPM", "UV", "UHV", "UEV", "MAX", "END"
]
