ServerEvents.recipes(event => {

    // Ender Gem

    event.recipes.gtceu.mixer('ender_gem_mixture_mix')
        .itemInputs('enderio:pulsating_powder', 'enderio:ender_crystal_powder', 'enderio:prescient_powder', 'enderio:vibrant_powder', 'kubejs:grains_of_innocence')
        .itemOutputs('5x kubejs:ender_gem_dust')
        .duration(480)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.recipes.gtceu.autoclave('ender_gem_autoclave')
        .itemInputs('15x kubejs:ender_gem_dust')
        .inputFluids('gtceu:naquadria 144')
        .itemOutputs('kubejs:ender_gem')
        .duration(900)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.recipes.gtceu.large_chemical_reactor('gem_of_the_end')
        .itemInputs('kubejs:ender_gem', '2x kubejs:ender_star', 'kubejs:endest_star')
        .inputFluids('kubejs:molten_aerotheum 1500')
        .itemOutputs('kubejs:gem_of_the_end')
        .duration(600)
        .EUt(GTValues.VHA[GTValues.UHV])

    // Abyss Crystal

    event.recipes.gtceu.large_chemical_reactor('abyss_crystal_base')
        .itemInputs('4x gtceu:black_quartz_dust')
        .notConsumable('gtceu:blacklight')
        .inputFluids('gtceu:void_empowered 576')
        .itemOutputs('kubejs:abyss_crystal_base')
        .duration(900)
        .EUt(GTValues.VHA[GTValues.LuV])

    event.recipes.gtceu.mixer('abyss_crystal_solution')
        .itemInputs('6x kubejs:abyss_crystal_base')
        .inputFluids('kubejs:molten_petrotheum 100')
        .outputFluids('gtceu:abyss_crystal_mixture 1000')
        .duration(300)
        .EUt(GTValues.VHA[GTValues.UEV])

    event.recipes.gtceu.fluid_solidifier('uncut_abyss_crystal')
        .inputFluids('gtceu:abyss_crystal_mixture 3000')
        .notConsumable('gtceu:cylinder_casting_mold')
        .itemOutputs('kubejs:uncut_abyss_crystal')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.EV])

    function AbyssCrystalCut(name, fluid, time) {
        event.recipes.gtceu.cutter(name)
            .itemInputs('kubejs:uncut_abyss_crystal')
            .inputFluids(fluid)
            .itemOutputs('kubejs:abyss_crystal')
            .duration(time)
            .EUt(GTValues.VHA[GTValues.UV])
    }

    AbyssCrystalCut("abyss_lubricant", 'gtceu:lubricant 10', 20);
    AbyssCrystalCut("abyss_distilled", 'gtceu:distilled_water 30', 20);
    AbyssCrystalCut("abyss_water", 'minecraft:water 40', 20);

    // Pure Gem

    event.recipes.gtceu.mixer('pure_shards')
        .itemInputs('4x gtceu:diamond_dust', '8x gtceu:lapis_dust', '7x minecraft:redstone', '3x gtceu:emerald_dust', '4x gtceu:nether_quartz_dust', '2x minecraft:prismarine_crystals')
        .itemOutputs('kubejs:pure_shards')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.IV])

    function DimPureCrystal(name, explosive) {
        event.recipes.gtceu.implosion_compressor(name)
            .itemInputs('9x kubejs:pure_shards')
            .itemInputs(explosive)
            .itemOutputs('kubejs:blank_pure_crystal')
            .duration(30)
            .EUt(GTValues.VHA[GTValues.LV])
    }

    DimPureCrystal("pure_crystal_dynamite", '2x gtceu:dynamite');
    DimPureCrystal("pure_crystal_industrial_tnt", 'gtceu:industrial_tnt');
    DimPureCrystal("pure_crystal_tnt", '4x minecraft:tnt');
    DimPureCrystal("pure_crystal_powderbarrel", '8x gtceu:powderbarrel');

    event.recipes.gtceu.laser_engraver('blank_to_dim_pure_crystal')
        .itemInputs('kubejs:blank_pure_crystal')
        .notConsumable('#forge:lenses/red')
        .itemOutputs('kubejs:dim_pure_crystal')
        .duration(1200)
        .EUt(GTValues.VHA[GTValues.UV])

    event.recipes.gtceu.laser_engraver('dim_to_pale_pure_crystal')
        .itemInputs('kubejs:dim_pure_crystal')
        .notConsumable('#forge:lenses/blue')
        .itemOutputs('kubejs:pale_pure_crystal')
        .duration(1800)
        .EUt(GTValues.VHA[GTValues.UHV])

    event.recipes.gtceu.laser_engraver('pale_to_bright_pure_crystal')
        .itemInputs('kubejs:pale_pure_crystal')
        .notConsumable('#forge:lenses/green')
        .itemOutputs('kubejs:bright_pure_crystal')
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.UEV])

    event.recipes.gtceu.chemical_bath('pure_crystal_final')
        .itemInputs('kubejs:bright_pure_crystal')
        .inputFluids('gtceu:restonia_empowered 288')
        .itemOutputs('kubejs:pure_crystal')
        .duration(3000)
        .EUt(GTValues.VHA[GTValues.ZPM])

    // Extreme Energy Crystal

    event.recipes.gtceu.mixer('extreme_energy_blend')
        .itemInputs('3x gtceu:lapotron_dust', '3x gtceu:europium_dust', '9x gtceu:darmstadtium_dust')
        .inputFluids('gtceu:einsteinium 432', 'gtceu:americium 432')
        .itemOutputs('15x kubejs:extreme_energy_blend')
        .duration(1500)
        .EUt(GTValues.VHA[GTValues.LuV])

    event.recipes.gtceu.autoclave('extreme_energy_crystal')
        .itemInputs('15x kubejs:extreme_energy_blend')
        .inputFluids('gtceu:palis_empowered 288')
        .itemOutputs('kubejs:extreme_energy_crystal')
        .duration(2000)
        .EUt(GTValues.VHA[GTValues.UV])

    event.recipes.gtceu.forming_press('wrapped_extreme_energy_crystal')
        .itemInputs('kubejs:extreme_energy_crystal', '2x kubejs:diamond_lattice')
        .itemOutputs('kubejs:wrapped_extreme_energy_crystal')
        .duration(900)
        .EUt(GTValues.VHA[GTValues.IV])

    event.recipes.extendedcrafting.shaped_flux_crafter('kubejs:energized_extreme_energy_crystal', [
        '   ',
        ' B ',
        '   '
    ], {
        B: "kubejs:wrapped_extreme_energy_crystal",
    }, 500000000).powerRate(500000000);

    // Final Combination

    event.recipes.extendedcrafting.combination(
        "kubejs:ultimate_gem",
        "kubejs:ultimate_core", ["kubejs:gem_of_the_end", "kubejs:abyss_crystal", "kubejs:pure_crystal", "kubejs:energized_extreme_energy_crystal"],
        400000000, 40000000
    )
})