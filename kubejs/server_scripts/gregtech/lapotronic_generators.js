/**
 * Lapotronic Generator multiblock
 */

ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler("energetic_titanium_casing")
        .itemInputs("2x gtceu:double_titanium_plate", "gtceu:energium_block", "gtceu:titanium_frame")
        .itemOutputs("2x monilabs:energetic_titanium_casing")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)

    event.recipes.gtceu.assembler("lapotronic_tungstensteel_casing")
        .itemInputs("2x gtceu:double_tungsten_steel_plate", "gtceu:lapotron_block", "gtceu:tungsten_steel_frame")
        .itemOutputs("2x monilabs:lapotronic_tungstensteel_casing")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
})