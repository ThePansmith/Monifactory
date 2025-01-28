/**
 * Script for generating recipes for pristine matters and stabilized microminers.
 */
ServerEvents.recipes(event => {
    if(isNormalMode) return;

    // Pristine Matter & corresponding projector tier
    const pristine_matter = [
        ['1', 1],
        ['2', 1],
        ['2half', 1],
        ['3', 1],
        ['4', 2],
        ['4half', 2],
        ['5', 2],
        ['6', 2],
        ['7', 3],
        ['8', 3],
        ['8half', 3]
    ]

    /**
     * Function for making a stabilized miner assembly line recipe.
     * @param {string} minerTier The tier of miner to generate a stabilized matter recipe for. Typically a string representation of a number.
     */
    function stabilized_miner_recipe(minerTier) {
        event.recipes.gtceu.assembly_line(`stable_t_${minerTier}`)
            .itemInputs(`kubejs:microminer_t${minerTier}`, 'kubejs:heart_of_a_universe', '4x kubejs:hadal_shard', '24x gtceu:uv_field_generator', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate')
            .inputFluids('gtceu:rocket_fuel 40800', 'gtceu:omnium 576', 'gtceu:neutronium 576')
            .itemOutputs(`kubejs:stabilized_microminer_t${minerTier}`)
            .duration(120)
            .EUt(GTValues.VA[GTValues.UHV])
    }

    /**
     * Function for making a pristine matter recipe
     * @param {string} minerTier
     * @param {number} projectorTier
     */
    function pristine_matter_recipe(minerTier, projectorTier) {
        event.recipes.gtceu.microverse(`pristine_${minerTier}`)
            .addData("Microverse_Tier", projectorTier)
            .notConsumable(`kubejs:stabilized_microminer_t${minerTier}`)
            .itemOutputs(`kubejs:pristine_matter_t${minerTier}`)
            .duration(470.4 * 20)
            .EUt(GTValues.VA[GTValues.LuV])
    }

    // Apply recipe generation functions to each pristine matter tier
    pristine_matter.forEach(([minerTier, projectorTier]) => {
        pristine_matter_recipe(minerTier, projectorTier);
        stabilized_miner_recipe(minerTier);
    });
})
