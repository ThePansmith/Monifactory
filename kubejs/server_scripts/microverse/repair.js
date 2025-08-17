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
    function repairing(minerTier) {
        let minerTierNumber;

        if(minerTier == "2half") minerTierNumber = 2.5;
        else if(minerTier == "4half") minerTierNumber = 4.5;
        else minerTierNumber = minerTier;

        const builder = event.recipes.gtceu.assembler(`kubejs:repair_t${minerTier}`)
            .itemInputs(`kubejs:microminer_t${minerTier}_damaged`)
            .itemOutputs(`kubejs:microminer_t${minerTier}`)
            .inputFluids(Fluid.of("gtceu:soldering_alloy", 36 * minerTierNumber))
            .duration(20 * repairDurations[minerTier])

        return builder;
    }

    // TODO: Rework those to exclude chance boosting too
    repairing(6)
        .EUt(GTValues.VHA[GTValues.LuV])
        .chancedInput("2x gtceu:double_enderium_plate", 9000, 0)
        .chancedInput("kubejs:supercharged_laser_array", 2800, -700)
        .chancedInput("kubejs:resonant_thruster", 3000, -1500)
        .chancedInput("kubejs:advanced_micro_miner_guidance_system", 3000, -1500)
        .chancedInput("kubejs:enderium_micro_miner_core", 1800, -600)

    repairing(7)
        .EUt(GTValues.VA[GTValues.LuV])
        .chancedInput("2x gtceu:double_cryolobus_plate", 9000, 0)
        .chancedInput("2x gtceu:double_naquadah_plate", 8000, 0)
        .chancedInput("kubejs:supercharged_laser_array", 4000, -1000)
        .chancedInput("kubejs:warp_engine", 2100, -700)
        .chancedInput("kubejs:advanced_micro_miner_guidance_system", 3600, -1800)
        .chancedInput("kubejs:enderium_micro_miner_core", 1800, -600)
        .chancedInput(Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT(), 1200, -400)

    repairing(8)
        .EUt(GTValues.VA[GTValues.ZPM])
        .chancedInput("2x gtceu:double_crystal_matrix_plate", 9000, 0)
        .chancedInput("2x gtceu:double_rhodium_plated_palladium_plate", 9000, 0)
        .chancedInput("2x gtceu:double_duranium_plate", 9000, 0)
        .chancedInput("kubejs:supercharged_laser_array", 4500, -900)
        .chancedInput("kubejs:warp_engine", 5100, -1700)
        .chancedInput("kubejs:advanced_micro_miner_guidance_system", 4000, -2000)
        .chancedInput("kubejs:warp_core", 2400, -600)
        .chancedInput("kubejs:warp_controller", 2400, -600)

    // Combat miners always need repairs for engaging in combat
    repairing("2half")
        .EUt(GTValues.VHA[GTValues.EV])
        .chancedInput("2x gtceu:double_dark_steel_plate", 7000, 0)
        .chancedInput("minecraft:crossbow", 3000, 0)
        .chancedItemInputLogic(ChanceLogic.XOR)

    repairing("4half")
        .EUt(GTValues.VHA[GTValues.IV])
        .chancedInput("2x gtceu:double_lumium_plate", 3500, 0)
        .chancedInput("2x gtceu:double_hsse_plate", 3300, 0)
        .chancedInput("redstone_arsenal:flux_sword", 3200, 0)
        .chancedItemInputLogic(ChanceLogic.XOR)
})
