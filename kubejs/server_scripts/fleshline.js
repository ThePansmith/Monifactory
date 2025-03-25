/**
 * Processing line to reprocess Rotten Flesh into other useful products
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator("rotten_meat")
        .itemInputs("minecraft:rotten_flesh")
        .itemOutputs("gtceu:rotten_meat_dust", "gtceu:tiny_bone_dust")
        .duration(102)
        .EUt(2)

    // This recipe violates the conservation of mass because the waste sludge gets voided automatically! :D
    event.recipes.gtceu.chemical_bath("sanitize_rotten_meat")
        .itemInputs("16x gtceu:rotten_meat_dust", "gtceu:iodine_dust")
        .inputFluids("gtceu:distilled_water 8000")
        .itemOutputs("6x gtceu:meat_dust")
        .outputFluids("gtceu:fermented_biomass 500")
        .duration(1600)
        .EUt(GTValues.VA[GTValues.HV])
})
