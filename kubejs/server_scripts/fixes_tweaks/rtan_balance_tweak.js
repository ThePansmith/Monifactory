/**
 * Changes Ruthenium Trinium Americium Neutronate to not count the Oxygen in its molar mass calculations,
 * reducing output of recipes & thereby making it more expensive
 */

ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer("ruthenium_trinium_americium_neutronate").duration(170).EUt(GTValues.VA[GTValues.UV])
        .itemInputs("gtceu:ruthenium_dust", "2x gtceu:trinium_dust", "gtceu:americium_dust", "2x gtceu:neutronium_dust")
        .inputFluids("gtceu:oxygen 8000")
        .circuit(4)
        .itemOutputs("6x gtceu:ruthenium_trinium_americium_neutronate_dust")

    event.recipes.gtceu.alloy_blast_smelter("ruthenium_trinium_americium_neutronate")
        .itemInputs("gtceu:ruthenium_dust", "2x gtceu:trinium_dust", "gtceu:americium_dust", "2x gtceu:neutronium_dust")
        .inputFluids("gtceu:oxygen 8000")
        .circuit(5)
        .outputFluids("gtceu:molten_ruthenium_trinium_americium_neutronate 864")
        .duration(225 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(10800)

    event.recipes.gtceu.alloy_blast_smelter("ruthenium_trinium_americium_neutronate_gas")
        .itemInputs("gtceu:ruthenium_dust", "2x gtceu:trinium_dust", "gtceu:americium_dust", "2x gtceu:neutronium_dust")
        .inputFluids("gtceu:oxygen 8000", "gtceu:neon 350")
        .circuit(15)
        .outputFluids("gtceu:molten_ruthenium_trinium_americium_neutronate 864")
        .duration(225 * 20 * 0.75)
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(10800)

    // recipe name and a half right there
    event.recipes.gtceu.electrolyzer("decomposition_electrolyzing_ruthenium_trinium_americium_neutronate")
        .itemInputs("6x gtceu:ruthenium_trinium_americium_neutronate_dust")
        .itemOutputs("gtceu:ruthenium_dust", "2x gtceu:trinium_dust", "gtceu:americium_dust", "2x gtceu:trinium_dust")
        .outputFluids("gtceu:oxygen 8000")
        .duration(44.8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])
})
