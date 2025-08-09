/**
 * Recipe definitions for repairing microminers.
 */

/**
 * Durations for repairs of a given microminer tier.
 * Compare with missionDurations of mission_utils.js.
 */
const repairDurations = {
    "2half": 20,
    "4half": 60,
    "6": 80,
    "7": 90,
    "8": 100
}

ServerEvents.recipes(event => {
    /**
     * Starts a recipe builder for a given microminer tier. Must be completed with more chanced input items.
     * The miner tier determines the duration of the recipe.
     * @param {number|string} minerTier Miner tier index. Typically 1 through 12.
     * @param {string[]} doublePlateList List of the names of the double plate materials used to repair the hull.
     * @param {string[]} heavyPlatingList List of the names of the heavy plating materials used to repair the hull.
     */
    function repairing(minerTier, doublePlateList) {
        let minerTierNumber;

        if(minerTier == "2half") minerTierNumber = 2.5;
        else if(minerTier == "4half") minerTierNumber = 4.5;
        else minerTierNumber = minerTier;

        const builder = event.recipes.gtceu.assembler(`kubejs:repair_t${minerTier}`)
            .itemInputs(`kubejs:microminer_t${minerTier}_damaged`)
            .itemOutputs(`kubejs:microminer_t${minerTier}`)
            .inputFluids(Fluid.of("gtceu:soldering_alloy", 36 * minerTierNumber))
            .duration(20 * repairDurations[minerTier])

        if(doublePlateList != undefined) {
            doublePlateList.forEach((name, index) => {
                builder.chancedInput(`2x gtceu:double_${name}_plate`, 9000 - 1000 * index, -1000 + 200 * index)
            })
        }

        return builder;
    }

    repairing(6, ["enderium"])
        .EUt(GTValues.VHA[GTValues.LuV])
        .chancedInput("kubejs:supercharged_laser_array", 2800, -700)
        .chancedInput("kubejs:resonant_thruster", 3000, -1500)
        .chancedInput("kubejs:advanced_micro_miner_guidance_system", 3000, -1500)
        .chancedInput("kubejs:enderium_micro_miner_core", 1800, -600)

    repairing(7, ["cryolobus", "naquadah"])
        .EUt(GTValues.VA[GTValues.LuV])
        .chancedInput("kubejs:supercharged_laser_array", 4000, -1000)
        .chancedInput("kubejs:warp_engine", 2100, -700)
        .chancedInput("kubejs:advanced_micro_miner_guidance_system", 3600, -1800)
        .chancedInput("kubejs:enderium_micro_miner_core", 1800, -600)
        .chancedInput(Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT(), 1200, -400)

    repairing(8, ["crystal_matrix", "rhodium_plated_palladium", "duranium"])
        .EUt(GTValues.VA[GTValues.ZPM])
        .chancedInput("kubejs:supercharged_laser_array", 4500, -900)
        .chancedInput("kubejs:warp_engine", 5100, -1700)
        .chancedInput("kubejs:advanced_micro_miner_guidance_system", 4000, -2000)
        .chancedInput("kubejs:warp_core", 2400, -600)
        .chancedInput("kubejs:warp_controller", 2400, -600)

    // Combat miners always need repairs for engaging in combat
    repairing("2half", ["dark_steel"])
        .EUt(GTValues.VHA[GTValues.EV])
        .chancedInput("minecraft:crossbow", 1600, -400)
        .chancedInput("kubejs:hardened_thruster", 2000, -1000)
        .chancedInput("kubejs:basic_micro_miner_guidance_system", 1500, -1500)

    repairing("4half", ["lumium", "hsse"])
        .EUt(GTValues.VHA[GTValues.IV])
        .chancedInput("redstone_arsenal:flux_sword", 2400, -600)
        .chancedInput("kubejs:energetic_thruster", 2000, -1000)
        .chancedInput("kubejs:basic_micro_miner_guidance_system", 3000, -3000)
        .chancedInput("kubejs:signalum_micro_miner_core", 1800, -600)
})
