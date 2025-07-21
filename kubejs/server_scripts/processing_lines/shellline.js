/**
 * Recipes for Shulker Shell recycling.
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.forge_hammer("hammer_shulker_shell")
        .itemInputs("minecraft:shulker_shell")
        .itemOutputs("kubejs:crushed_shulker_shell")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.sifter("sift_crushed_shulker_shell")
        .itemInputs("kubejs:crushed_shulker_shell")
        .itemOutputs("gtceu:purified_lepidolite_ore", "minecraft:popped_chorus_fruit")
        .chancedOutput("minecraft:popped_chorus_fruit", 7000, 0)
        .itemOutputs("2x kubejs:niobium_palladium_grit")
        .duration(5 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.electromagnetic_separator("separate_niobium_palladium_grit")
        .itemInputs("kubejs:niobium_palladium_grit")
        .itemOutputs("gtceu:palladium_raw_dust")
        .chancedOutput(doHarderProcessing ? "gtceu:niobium_pentoxide_dust" : "gtceu:niobium_dust", doHarderProcessing ? 3500 : 1000, 0)
        .chancedOutput("gtceu:niobium_nugget", 2000, 0)
        .duration(10 * 20)
        .EUt(GTValues.VA[GTValues.MV])
})
