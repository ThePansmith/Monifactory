/**
 * Processing line to reprocess Rotten Flesh into other useful products
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer("saline_solution")
        .itemInputs("3x gtceu:salt_dust", "gtceu:iodine_dust")
        .inputFluids("gtceu:distilled_water 10000")
        .outputFluids("gtceu:saline_antiseptic 10000")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.macerator("rotten_meat")
        .itemInputs("minecraft:rotten_flesh")
        .itemOutputs("gtceu:rotten_meat_dust", "gtceu:tiny_bone_dust")
        .duration(102)
        .EUt(2)

    event.recipes.gtceu.chemical_bath("sanitize_rotten_meat")
        .itemInputs("16x gtceu:rotten_meat_dust")
        .inputFluids("gtceu:saline_antiseptic 8000")
        .itemOutputs("6x gtceu:meat_dust", "2x gtceu:collagen_dust")
        .outputFluids("gtceu:rotten_sludge 12000")
        .duration(1600)
        .EUt(GTValues.VA[GTValues.HV])

    // This recipe violates the conservation of mass because the waste gets voided automatically, like certain other distillation recipes.
    event.recipes.gtceu.distillation_tower("rotten_sludge")
        .inputFluids("gtceu:rotten_sludge 10000")
        .outputFluids("gtceu:fermented_biomass 1750", "gtceu:blood 1000", "gtceu:bacteria 1250")
        .itemOutputs("gtceu:fertilizer")
        .duration(300)
        .EUt(GTValues.VA[GTValues.HV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
})
