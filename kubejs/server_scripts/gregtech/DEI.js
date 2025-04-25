ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer("darconite_dust")
        .itemInputs("3x gtceu:darmstadtium_dust", "4x gtceu:cobalt_dust")
        .inputFluids("gtceu:nitrogen 2000")
        .itemOutputs("9x gtceu:darconite_dust")
        .duration(40)
        .EUt(GTValues.VA[GTValues.IV])
})