ServerEvents.recipes(event => {

    // Motors
    event.recipes.gtceu.assembly_line('uhv_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:long_neutronium_rod', '8x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '32x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:tritanium_quadruple_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_motor')
        // requires research (UV motor with data module, 96 CWU/t)
        .duration(600)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('uev_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:long_omnium_rod', '8x gtceu:omnium_ring', '16x gtceu:omnium_round', '64x gtceu:fine_netherite_wire', '64x gtceu:fine_netherite_wire', '64x gtceu:fine_netherite_wire', '4x gtceu:tritanium_octal_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_electric_motor')
        // requires research (UHV motor with data module, 128 CWU/t)
        .duration(600)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('uiv_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '12x gtceu:long_infinity_rod', '12x gtceu:infinity_ring', '24x gtceu:infinity_round', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '4x gtceu:tritanium_hex_cable')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_electric_motor')
        // requires research (UEV motor with data module, 144 CWU/t)
        .duration(1200)
        .EUt(3932160)

    // Pistons
    event.recipes.gtceu.assembly_line('uhv_piston')
        .itemInputs('gtceu:uhv_electric_motor', '4x gtceu:neutronium_plate', '4x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '4x gtceu:neutronium_rod', 'gtceu:neutronium_gear', '2x gtceu:small_neutronium_gear', '2x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_piston')
        // requires research (UV piston with data module, 96 CWU/t)
        .duration(600)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('uev_piston')
        .itemInputs('gtceu:uev_electric_motor', '4x gtceu:omnium_plate', '4x gtceu:omnium_ring', '16x gtceu:omnium_round', '4x gtceu:omnium_rod', 'gtceu:omnium_gear', '2x gtceu:small_omnium_gear', '2x gtceu:netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_electric_piston')
        // requires research (UHV piston with data module, 128 CWU/t)
        .duration(600)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('uiv_piston')
        .itemInputs('gtceu:uiv_electric_motor', '4x gtceu:infinity_plate', '4x gtceu:infinity_ring', '16x gtceu:infinity_round', '4x gtceu:infinity_rod', 'gtceu:infinity_gear', '2x gtceu:small_infinity_gear', '2x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_electric_piston')
        // requires research (UEV piston with data module, 144 CWU/t)
        .duration(1200)
        .EUt(3932160)
})