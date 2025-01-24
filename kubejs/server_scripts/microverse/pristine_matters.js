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
     * Function for making recipes given a miner tier.
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
     * 
     * @param {(string | number)[]} minerTier 
     * @param {number} projectorTier 
     */
    function pristine_matter_recipe(minerTier, projectorTier) {
        var builder;

        switch (projectorTier) {
            case 1:
                builder = event.recipes.gtceu.basic_microverse(`pristine_${minerTier}`);
                break;
            case 2:
                builder = event.recipes.gtceu.advanced_microverse(`pristine_${minerTier}`);
                break;
            case 3:
                builder = event.recipes.gtceu.advanced_microverse_ii(`pristine_${minerTier}`);
                break;
            case 4:
                builder = event.recipes.gtceu.advanced_microverse_iii(`pristine_${minerTier}`);
                break;
            default: throw new Error("Invalid Operation. Only projector tiers 1-4 are accepted.")
        }
        builder
            .notConsumable(`kubejs:stabilized_microminer_t${minerTier}`)
            .itemOutputs(`kubejs:pristine_matter_t${minerTier}`)
            .duration(470.4 * 20)
            .EUt(GTValues.VA[GTValues.LuV])
    }

    // Apply recipe generation functions to each pristine matter tier
    pristine_matter.forEach((value) => {pristine_matter_recipe(value[0], value[1]);});
    pristine_matter.forEach((value) => {stabilized_miner_recipe(value[0]);});
})