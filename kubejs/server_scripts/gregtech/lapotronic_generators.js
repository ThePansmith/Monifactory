/**
 * Lapotronic Generator multiblock
 */

ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler("energetic_titanium_casing")
        .itemInputs("2x gtceu:titanium_plate", "gtceu:titanium_frame")
        .itemOutputs("2x monilabs:energetic_titanium_casing")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
})