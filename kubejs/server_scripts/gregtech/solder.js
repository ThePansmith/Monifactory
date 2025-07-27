/**
 * Recipes for advanced Soldering Alloys.
 */

ServerEvents.recipes(event => {
    // Advanced Soldering Alloy
    event.recipes.gtceu.mixer("advanced_soldering_alloy")
        .itemInputs("15x gtceu:bismuth_dust", "11x gtceu:tin_dust", "9x gtceu:zinc_dust", "4x gtceu:germanium_dust")
        .itemOutputs("39x gtceu:advanced_soldering_alloy_dust")
        .duration(700)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(3)

    event.recipes.gtceu.alloy_blast_smelter("advanced_soldering_alloy")
        .itemInputs("15x gtceu:bismuth_dust", "11x gtceu:tin_dust", "9x gtceu:zinc_dust", "4x gtceu:germanium_dust")
        .outputFluids("gtceu:advanced_soldering_alloy 5616")
        .duration(525)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(10)
        .blastFurnaceTemp(1850)

    // Living Soldering Alloy
    event.recipes.gtceu.mixer("living_soldering_alloy")
        .itemInputs("5x gtceu:rose_gold_dust", "12x gtceu:tin_alloy_dust", "11x gtceu:gallium_dust", "7x gtceu:molybdenum_dust", "8x gtceu:stem_cells")
        .inputFluids("gtceu:blood 8000")
        .itemOutputs("43x gtceu:living_soldering_alloy_dust")
        .duration(900)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(3)

    event.recipes.gtceu.alloy_blast_smelter("living_soldering_alloy")
        .itemInputs("5x gtceu:rose_gold_dust", "12x gtceu:tin_alloy_dust", "11x gtceu:gallium_dust", "7x gtceu:molybdenum_dust", "8x gtceu:stem_cells")
        .inputFluids("gtceu:blood 8000")
        .outputFluids("gtceu:living_soldering_alloy 6192")
        .duration(675)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(10)
        .blastFurnaceTemp(3000)
})
