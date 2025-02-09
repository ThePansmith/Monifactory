/**
 * Terbium processing line
 */
ServerEvents.recipes(event => {

    // Terbium
    event.recipes.gtceu.electrolyzer('rare_earth_sulfate_electrolyze')
        .itemInputs('gtceu:rare_earth_dust')
        .inputFluids(Fluid.of('gtceu:sulfuric_acid', 100))
        .itemOutputs('kubejs:rare_earth_sulfate', 'gtceu:thorium_hydroxide_dust')
        .duration(600)
        .EUt(37020)

    event.recipes.gtceu.electric_blast_furnace('rare_earth_sulfate_blast')
        .itemInputs('kubejs:rare_earth_sulfate', 'gtceu:ammonium_oxalate_dust')
        .itemOutputs('kubejs:rare_earth_oxide')
        .duration(600)
        .blastFurnaceTemp(7200)
        .EUt(122880)

    event.recipes.gtceu.autoclave('rare_earth_oxide_autoclave')
        .itemInputs('kubejs:rare_earth_oxide')
        .inputFluids(Fluid.of('gtceu:nitric_acid', 100))
        .itemOutputs('kubejs:rare_earth_salt', 'gtceu:cerium_dust')
        .duration(300)
        .EUt(480)

    event.recipes.gtceu.electrolyzer('rare_earth_salt_electrolyzer')
        .itemInputs('kubejs:rare_earth_salt', 'gtceu:ammonium_nitrate_dust')
        .itemOutputs('gtceu:terbium_salt_dust')
        .duration(300)
        .EUt(1200)

    event.recipes.gtceu.autoclave('terbium_salt_autoclave')
        .itemInputs('2x gtceu:terbium_salt_dust', '3x gtceu:calcium_dust')
        .inputFluids(Fluid.of('gtceu:steam', 3840))
        .itemOutputs('2x gtceu:terbium_dust', '3x gtceu:calcium_chloride_dust')
        .outputFluids(Fluid.of('water', 24))
        .duration(300)
        .EUt(480)

    // Misc
    event.recipes.gtceu.chemical_reactor('ammonium_oxalate')
        .itemInputs('2x gtceu:carbon_dust')
        .inputFluids('gtceu:ammonia 1000', 'gtceu:oxygen 4000')
        .circuit(5)
        .itemOutputs('gtceu:ammonium_oxalate_dust')
        .duration(120).EUt(7)

    event.recipes.gtceu.chemical_reactor('ammonium_nitrate')
        .inputFluids('gtceu:ammonia 1000', 'gtceu:nitric_acid 1000')
        .circuit(5)
        .itemOutputs('gtceu:ammonium_nitrate_dust')
        .duration(120).EUt(7)

    event.recipes.gtceu.polarizer('terbium_polarize')
        .itemInputs('gtceu:long_terbium_rod')
        .itemOutputs('gtceu:long_magnetic_terbium_rod')
        .duration(200)
        .EUt(122880)
})
