/**
 * Bad Snowchestite recipe for your first Naquadah.
 */
ServerEvents.recipes(event => {
    if (doHarderProcessing) {
        event.recipes.gtceu.electric_blast_furnace("snowchestite_bad")
            .itemInputs("12x gtceu:purified_snowchestite_ore")
            .itemInputs("16x gtceu:sodium_hydroxide_dust")
            .itemOutputs("7x gtceu:naquadah_hydroxide_dust")
            .inputFluids(Fluid.of("gtceu:hydrogen", 2000))
            .outputFluids(Fluid.of("gtceu:steam", 16000))
            .duration(700)
            .EUt(GTValues.VHA[GTValues.LuV])
            .blastFurnaceTemp(4800)
    }
})
