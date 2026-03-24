/**
 * Processing line for Prismarine (Previously Guardian Scales)
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer("guardian_scale_slurry_mix")
        .itemInputs("2x kubejs:guardian_scale")
        .inputFluids("gtceu:aqua_regia 3000",)
        .outputFluids("gtceu:guardian_scale_slurry 4000")
        .duration(14 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // Malachite and Cobalt Oxide are the useful minerals from which Guardian Scales derive their hue
    // Antimony Trifluoride added as a nice byproduct to have
    event.recipes.gtceu.centrifuge("guardian_scale_slurry_centrifuge")
        .inputFluids("gtceu:guardian_scale_slurry 4000")
        .itemOutputs("gtceu:malachite_dust")
        .chancedOutput("gtceu:cobalt_oxide_dust", 6666, 0)
        .chancedOutput("gtceu:antimony_trifluoride_dust", 3333, 0)
        .outputFluids("gtceu:chitinous_mixture 3000")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.cracker("crack_chitinous_mixture")
        .inputFluids("gtceu:chitinous_mixture", "gtceu:hydrogen 2000")
        .outputFluids("gtceu:cracked_chitinous_mixture")
        .duration(6 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    // Acetic Acid and Glucosamine come from breaking up Chitin via hydrogenolysis in the Cracker
    // Nitrosyl Chloride and Diluted Hydrochloric Acid are the products of Aqua Regia transformed in the reaction
    event.recipes.gtceu.distillation_tower("chitinous_mixture_distillation")
        .inputFluids("gtceu:cracked_chitinous_mixture 3000")
        .itemOutputs("gtceu:glucosamine_dust")
        .outputFluids("gtceu:acetic_acid 1000", "gtceu:hydrochloric_acid 1000", "minecraft:water 1000", "gtceu:nitrosyl_chloride 1000")
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])
})
