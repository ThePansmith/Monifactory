/**
 * Recipes for Wither Bone Recycling.
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.macerator("macerate_wither_bone")
        .itemInputs("kubejs:wither_bone")
        .itemOutputs("2x enderio:withering_powder", "3x minecraft:bone_meal")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])
        .category("gtceu:macerator_recycling")
    event.recipes.gtceu.macerator("macerate_wither_rose")
        .itemInputs("minecraft:wither_rose")
        .chancedOutput("enderio:withering_powder", 200, 0)
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV])
        .category("gtceu:macerator_recycling")

    event.recipes.gtceu.centrifuge("centrifuge_withering_powder")
        .itemInputs("8x enderio:withering_powder")
        .inputFluids("gtceu:formic_acid 2500")
        .itemOutputs("4x gtceu:coal_dust", "3x gtceu:plumbate_dust", "gtceu:arsenic_trioxide_dust")
        .chancedOutput("1x gtceu:biphenyl_dust", 5000, 0)
        .duration(22 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.chemical_bath("tungstic_acid_from_plumbate")
        .itemInputs("6x gtceu:plumbate_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .itemOutputs("7x gtceu:tungstic_acid_dust", "3x gtceu:lead_chloride_dust")
        .duration(10.5 * 20)
        .EUt(GTValues.VHA[GTValues.EV])
})
