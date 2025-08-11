/**
 * Recipes for Dragon Scale and Guardian Scale recycling.
 */
ServerEvents.recipes(event => {
    // Dragon Scale recycling
    event.recipes.gtceu.macerator("dragon_scale_crushing")
        .itemInputs("kubejs:ender_dragon_scale")
        .itemOutputs("kubejs:ender_dragon_scale_dust")
        .chancedOutput("kubejs:ender_dragon_scale_dust", 5000, 0)
        .chancedOutput("gtceu:graphite_dust", 4000, 0)
        .chancedOutput("gtceu:small_ilmenite_dust", 4000, 0)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LV])
        .category("gtceu:macerator_recycling")

    event.recipes.gtceu.mixer("scale_dust_acid_mix")
        .itemInputs("2x kubejs:ender_dragon_scale_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .outputFluids("gtceu:hydrochloric_dragon_scale_solution 2000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.centrifuge("scale_acid_centrifuge")
        .inputFluids("gtceu:hydrochloric_dragon_scale_solution 1000")
        .itemOutputs("gtceu:graphitic_tantalum_dust")
        .outputFluids("gtceu:hydrochloric_manganese_solution 1000")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.electrolyzer("manganese_acid_separation")
        .inputFluids("gtceu:hydrochloric_manganese_solution 1000")
        .itemOutputs("gtceu:manganese_dust")
        .outputFluids("gtceu:hydrogen 1000", "gtceu:chlorine 1000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer("graphitic_tantalum_acid_mix")
        .itemInputs("4x gtceu:graphitic_tantalum_dust")
        .inputFluids("gtceu:hydrofluoric_acid 2000")
        .outputFluids("gtceu:hydrofluoric_graphitic_tantalum_solution 2000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.centrifuge("tantalum_acid_graphite_centrifuge")
        .inputFluids("gtceu:hydrofluoric_graphitic_tantalum_solution 1000")
        .itemOutputs("gtceu:graphite_dust")
        .outputFluids("gtceu:hydrofluoric_tantalum_solution 1000")
        .duration(120)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.electrolyzer("tantalum_acid_separation")
        .inputFluids("gtceu:hydrofluoric_tantalum_solution 1000")
        .itemOutputs("gtceu:tantalum_dust")
        .outputFluids("gtceu:hydrogen 1000", "gtceu:fluorine 1000")
        .duration(240)
        .EUt(GTValues.VA[GTValues.MV])

    // Guardian Scale recycling
    event.recipes.gtceu.mixer("guardian_scale_slurry_mix")
        .itemInputs("2x kubejs:guardian_scale")
        .inputFluids("gtceu:aqua_regia 4000")
        .outputFluids("gtceu:guardian_scale_slurry 4000")
        .duration(280)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge("guardian_scale_slurry_centrifuge")
        .inputFluids("gtceu:guardian_scale_slurry 4000")
        .itemOutputs("2x gtceu:malachite_dust", "gtceu:cobalt_oxide_dust")
        .chancedOutput("gtceu:antimony_trifluoride_dust", 7000, 0)
        .chancedOutput("gtceu:emerald_dust", 4000, 0)
        .outputFluids("gtceu:nitrosyl_chloride 1000", "minecraft:water 2000")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.EV])
})
