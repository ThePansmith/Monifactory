// Infinity Toolset recipes and subrecipes



ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line('infinity_power_unit')
        .itemInputs('kubejs:infinity_catalyst', '32x gtceu:polybenzimidazole_plate', '16x gtceu:darmstadtium_plate', '16x gtceu:enriched_naquadah_trinium_europium_duranide_plate', '16x #gtceu:circuits/uv', '8x #gtceu:circuits/uhv', '16x draconicevolution:draconic_energy_core', '4x gtceu:max_battery', '8x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire', '32x kubejs:omni_motor')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:omnium 5760', 'gtceu:crystal_matrix 1152')
        .itemOutputs('kubejs:infinity_power_unit')
        // requires research (sim chamber with data module)
        .duration(1200)
        .EUt(1966080)
    event.recipes.gtceu.assembly_line('omni_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', 'gtceu:omnium_long_rod')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:omni_motor')
        // requires research (sim chamber with data module)
        .duration(1200)
        .EUt(1966080)
})
