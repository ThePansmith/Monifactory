// priority: 1
/**
 * Utility functions for registering microminer missions,
 * actualization chamber counterparts,
 * and lower-tier projector missions more succinctly.
 */

// Array to keep track of how many missions are available for each microminer tier
global.mission_counts = {
    "1": 0,
    "2": 0,
    "2half": 0,
    "3": 0,
    "4": 0,
    "4half": 0,
    "5": 0,
    "6": 0,
    "7": 0,
    "8": 0,
    "8half": 0,
    "9": 0,
    "10": 0,
    "11": 0,
    "12": 0
}

/**
 * Registers a basic microverse mission and equivalent actualization chamber recipe
 * @param {Internal.RecipesEventJS} event Parameter used in consumer for ServerEvents.recipes().
 * @param {number|string} minerTier Miner tier index. Typically 1 through 12.
 * @param {number} duration Recipe duration in seconds
 * @param {number[]} voltageArray
 * @param {number} voltageTier Voltage tier. ULV is 0, LV is 1, and so on. Refer to the GTValues class.
 * @param {number} minerReturnChance Chance a damaged miner is returned, in percent. [Integer 0-100]
 * @returns {Internal.GTRecipeSchema$GTRecipeJS[]} Microverse recipe builders. Use this to add item and fluid I/O.
 */
function microverse_mission(event, minerTier, projectorTier, duration, voltageArray, voltageTier, minerReturnChance) {
    // Increase global mission counter
    global.mission_counts[minerTier]++;

    // Convert miner return chance from percentage to GTM's hundredth-of-a-percent format
    minerReturnChance = Math.floor(minerReturnChance*100)

    // We return an array of GT recipe builders for the caller to act upon with a .forEach
    // rather than a long parameter list, multiple overloads, or varargs
    const builders = [];

    // Register basic microverse mission
    builders[0] = event.recipes.gtceu.microverse(`kubejs:mission_t${minerTier}_${global.mission_counts[minerTier]}`)
        .addData("projector_tier", projectorTier)
        .itemInputs(`kubejs:microminer_t${minerTier}`)
        .duration(Math.round(duration*20))
        .EUt(voltageArray[voltageTier])

    // Only return the miner if the chance to return it is positive
    if(minerReturnChance > 0) {
        builders[0].chancedOutput(`kubejs:damaged_microminer_t${minerTier}`, minerReturnChance, minerReturnChance == 10000 ? 0 : 500)
    }
    
    // Register actualization chamber counterparts in Hard Mode and Expert Mode except for T9+
    if(isHardMode && minerTier < 9) {
        builders[1] = event.recipes.gtceu.actualization_chamber(`kubejs:pristine_t${minerTier}_${global.mission_counts[minerTier]}`)
            .itemInputs(`kubejs:pristine_matter_t${minerTier}`)
            .circuit(global.mission_counts[minerTier])
            .duration(800)
            .EUt(GTValues.VA[GTValues.LuV])
    }

    return builders;
}
