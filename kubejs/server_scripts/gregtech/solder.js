/**
 * Recipes for advanced Soldering Alloys.
 */

ServerEvents.recipes(event => {
    // Advanced Soldering Alloy
    event.recipes.gtceu.mixer("advanced_soldering_alloy")
        .itemInputs("5x gtceu:bismuth_dust", "4x gtceu:tin_dust", "3x gtceu:zinc_dust", "1x gtceu:germanium_dust")
        .itemOutputs("13x gtceu:advanced_soldering_alloy_dust")
        .duration(240)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(3)

    event.recipes.gtceu.alloy_blast_smelter("advanced_soldering_alloy")
        .itemInputs("5x gtceu:bismuth_dust", "4x gtceu:tin_dust", "3x gtceu:zinc_dust", "1x gtceu:germanium_dust")
        .outputFluids("gtceu:advanced_soldering_alloy 1872")
        .duration(180)
        .EUt(GTValues.VA[GTValues.HV])
        .circuit(10)
        .blastFurnaceTemp(1211)

    // Living Soldering Alloy
    event.recipes.gtceu.mixer("living_solder_base")
        .itemInputs("5x gtceu:rose_gold_dust", "12x gtceu:tin_alloy_dust", "11x gtceu:gallium_dust", "7x gtceu:molybdenum_dust")
        .itemOutputs("35x gtceu:living_solder_base_dust")
        .duration(67.5 * 20)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(3)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.alloy_blast_smelter("living_solder_base")
        .itemInputs("5x gtceu:rose_gold_dust", "12x gtceu:tin_alloy_dust", "11x gtceu:gallium_dust", "7x gtceu:molybdenum_dust")
        .outputFluids("gtceu:living_solder_base 5040")
        .duration(130 * 20)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(10)
        .blastFurnaceTemp(1916)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.alloy_blast_smelter("living_solder_base_gas")
        .itemInputs("5x gtceu:rose_gold_dust", "12x gtceu:tin_alloy_dust", "11x gtceu:gallium_dust", "7x gtceu:molybdenum_dust")
        .inputFluids("gtceu:xenon 10")
        .outputFluids("gtceu:living_solder_base 5040")
        .duration(97.5 * 20)
        .EUt(GTValues.VA[GTValues.IV])
        .circuit(10)
        .blastFurnaceTemp(1916)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.sculk_vat("living_soldering_alloy_dust")
        .itemInputs("8x gtceu:living_solder_base_dust", "3x gtceu:stem_cells")
        .inputFluids("gtceu:blood 3000")
        .outputFluids("gtceu:living_soldering_alloy 1728")
        .duration(240)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.sculk_vat("living_soldering_alloy_fluid")
        .itemInputs("3x gtceu:stem_cells")
        .inputFluids("gtceu:living_solder_base 1152", "gtceu:blood 3000")
        .outputFluids("gtceu:living_soldering_alloy 1728")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])
})
