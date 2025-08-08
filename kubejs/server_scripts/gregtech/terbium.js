/**
 * Terbium / Terbium Alloys processing line
 */
ServerEvents.recipes(event => {

    // Terbium
    event.recipes.gtceu.electrolyzer("rare_earth_sulfate_electrolyze")
        .itemInputs("gtceu:rare_earth_dust")
        .inputFluids(Fluid.of("gtceu:sulfuric_acid", 100))
        .itemOutputs("kubejs:rare_earth_sulfate", "gtceu:thorium_hydroxide_dust")
        .duration(300)
        .EUt(7680)

    event.recipes.gtceu.electric_blast_furnace("rare_earth_sulfate_blast")
        .itemInputs("kubejs:rare_earth_sulfate", "gtceu:ammonium_oxalate_dust")
        .itemOutputs("kubejs:rare_earth_oxide")
        .outputFluids(Fluid.of("gtceu:ammonia", 2000))
        .duration(400)
        .blastFurnaceTemp(4500)
        .EUt(32720)

    event.recipes.gtceu.autoclave("rare_earth_oxide_autoclave")
        .itemInputs("kubejs:rare_earth_oxide")
        .inputFluids(Fluid.of("gtceu:nitric_acid", 100))
        .itemOutputs("kubejs:rare_earth_salt", "gtceu:cerium_dust")
        .duration(300)
        .EUt(480)

    event.recipes.gtceu.centrifuge("rare_earth_salt_electrolyzer")
        .itemInputs("kubejs:rare_earth_salt", "gtceu:ammonium_nitrate_dust")
        .inputFluids(Fluid.of("gtceu:hypochlorous_acid", 2000))
        .itemOutputs("gtceu:terbium_salt_dust")
        .duration(300)
        .EUt(1200)

    event.recipes.gtceu.autoclave("terbium_salt_autoclave")
        .itemInputs("2x gtceu:terbium_salt_dust", "3x gtceu:calcium_dust")
        .inputFluids(Fluid.of("gtceu:steam", 3840))
        .itemOutputs("2x gtceu:terbium_dust", "3x gtceu:calcium_chloride_dust")
        .outputFluids(Fluid.of("water", 24))
        .duration(300)
        .EUt(480)

    // Misc
    event.recipes.gtceu.chemical_reactor("ammonium_oxalate")
        .itemInputs("gtceu:ammonium_carbonate_dust", "gtceu:oxalic_acid_dust")
        .outputFluids("gtceu:carbon_dioxide 1000", "minecraft:water 1000")
        .itemOutputs("gtceu:ammonium_oxalate_dust")
        .duration(120).EUt(7)

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

    event.recipes.gtceu.chemical_reactor("ammonium_nitrate")
        .inputFluids("gtceu:ammonia 1000", "gtceu:nitric_acid 1000")
        .circuit(5)
        .itemOutputs("gtceu:ammonium_nitrate_dust")
        .duration(120).EUt(7)

    event.recipes.gtceu.chemical_reactor("ammonium_carbonate")
        .inputFluids("gtceu:ammonia 2000", "gtceu:carbon_dioxide 1000", "minecraft:water 1000")
        .itemOutputs("gtceu:ammonium_carbonate_dust")
        .duration(160).EUt(30)

    event.recipes.gtceu.polarizer("terbium_polarize")
        .itemInputs("gtceu:long_terbium_rod")
        .itemOutputs("gtceu:long_magnetic_terbium_rod")
        .duration(200)
        .EUt(122880)
})
