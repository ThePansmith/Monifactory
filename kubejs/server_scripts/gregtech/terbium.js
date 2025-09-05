/**
 * Terbium / Terbium Alloys processing line
 */
ServerEvents.recipes(event => {

    // Terbium
    event.recipes.gtceu.large_chemical_reactor("oxalic_acid_dihydrate")
        .notConsumable(doHarderProcessing ? "gtceu:vanadium_pentoxide_dust" : "gtceu:vanadium_dust")
        .itemInputs("minecraft:sugar")
        .inputFluids(Fluid.of("gtceu:nitric_acid", 12000), "minecraft:water")
        .itemOutputs("6x gtceu:oxalic_acid_dihydrate_dust")
        .outputFluids("gtceu:nitric_oxide 12000")
        .duration(600).EUt(30)

    event.recipes.gtceu.electric_blast_furnace("oxalic_acid")
        .itemInputs("gtceu:oxalic_acid_dihydrate_dust")
        .itemOutputs("gtceu:oxalic_acid_dust")
        .outputFluids(Fluid.of("gtceu:steam", 19200))
        .duration(400)
        .blastFurnaceTemp(1700)
        .EUt(120)

    event.recipes.gtceu.electrolyzer("sugar_electrolysis")
        .itemInputs("23x minecraft:sugar")
        .itemOutputs("12x gtceu:carbon_dust")
        .outputFluids(Fluid.of("minecraft:water", 11000))
        .duration(3.2 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.polarizer("terbium_polarize")
        .itemInputs("gtceu:long_terbium_rod")
        .itemOutputs("gtceu:long_magnetic_terbium_rod")
        .duration(200)
        .EUt(122880)
})
