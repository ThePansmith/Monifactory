ServerEvents.recipes(event => {
    const converter = [
        ['uev', 'omnium', 'activated_netherite', '1966080'],
        ['uiv', 'holmium', 'holmium', '3932160'],
        ['max', 'monium', 'monium', '80000000'],
    ]
    // no MAX tier laserhatch :1984:
    const laserhatch = [
        ['uev', 'activated_netherite', '1966080'],
        ['uiv', 'holmium', '3932160'],
    ]

        converter.forEach(([tier, mat1, mat2, eut]) => {
            event.remove({ output:[`gtceu:${tier}_1a_energy_converter`, `gtceu:${tier}_4a_energy_converter`, `gtceu:${tier}_8a_energy_converter`, `gtceu:${tier}_16a_energy_converter` ] })
            event.shaped(Item.of(`gtceu:${tier}_1a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_single_wire`,
                B: `gtceu:${mat2}_single_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })


            event.shaped(Item.of(`gtceu:${tier}_4a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_quadruple_wire`,
                B: `gtceu:${mat2}_quadruple_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })

            event.shaped(Item.of(`gtceu:${tier}_8a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_octal_wire`,
                B: `gtceu:${mat2}_octal_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`
            })

            event.shaped(Item.of(`gtceu:${tier}_16a_energy_converter`), [
                ' BB',
                'AHC',
                ' BB'
            ], {
                A: `gtceu:red_alloy_hex_wire`,
                B: `gtceu:${mat2}_hex_wire`,
                H: `gtceu:${tier}_machine_hull`,
                C: `#gtceu:circuits/${tier}`


            })


            event.remove({ output:[`gtceu:${tier}_energy_output_hatch`, `gtceu:${tier}_energy_output_hatch_4a`, `gtceu:${tier}_energy_output_hatch_16a`] })
            event.recipes.gtceu.assembly_line(`gtceu:${tier}_energy_output_hatch`)
                .itemInputs(`gtceu:${tier}_machine_hull`, `4x gtceu:${mat2}_spring`, `2x gtceu:uhpic_chip`, `#gtceu:circuits/${tier}`, `2x gtceu:${mat1}_double_wire`)
                .itemOutputs(`gtceu:${tier}_energy_output_hatch`)
                .inputFluids('gtceu:crystal_matrix 11520', 'gtceu:soldering_alloy 5760')
                .duration(1000)
                .EUt(eut)

                event.recipes.gtceu.assembler(`gtceu:${tier}_energy_output_hatch_4a`)
               .itemInputs(`gtceu:${tier}_energy_output_hatch`, `2x gtceu:${mat1}_plate`, `2x gtceu:${mat2}_quadruple_wire`)
                .itemOutputs(`gtceu:${tier}_energy_output_hatch_4a`)
               .duration(100)
               .EUt(eut)

               event.recipes.gtceu.assembler(`gtceu:${tier}_energy_output_hatch_16a`)
               .itemInputs(`gtceu:${tier}_energy_output_hatch_4a`, `2x gtceu:${mat1}_plate`, `2x gtceu:${mat2}_octal_wire`)
                .itemOutputs(`gtceu:${tier}_energy_output_hatch_16a`)
               .duration(100)
               .EUt(eut)


            event.remove({ output:[`gtceu:${tier}_energy_input_hatch`, `gtceu:${tier}_energy_input_hatch_4a`, `gtceu:${tier}_energy_input_hatch_16a`] })
            event.recipes.gtceu.assembly_line(`gtceu:${tier}_energy_input_hatch`)
                .itemInputs(`gtceu:${tier}_machine_hull`, `4x gtceu:${mat2}_single_wire`, '16x gtceu:uhpic_chip', `#gtceu:circuits/${tier}`, `2x gtceu:${mat2}_double_wire`)
                .itemOutputs(`gtceu:${tier}_energy_input_hatch`)
                .inputFluids('gtceu:sodium_potassium 12000', 'gtceu:omnium 1152', 'gtceu:soldering_alloy 576')
                .duration(100)
                .EUt(eut)

                event.recipes.gtceu.assembler(`gtceu:${tier}_energy_input_hatch_4a`)
               .itemInputs(`gtceu:${tier}_energy_input_hatch`, `2x gtceu:${mat1}_plate`, `2x gtceu:${mat2}_quadruple_wire`)
                .itemOutputs(`gtceu:${tier}_energy_input_hatch_4a`)
               .duration(100)
               .EUt(eut)

               event.recipes.gtceu.assembler(`gtceu:${tier}_energy_input_hatch_16a`)
               .itemInputs(`2x gtceu:${tier}_energy_input_hatch_4a`, `4x gtceu:${mat1}_plate`, `2x gtceu:${mat2}_octal_wire`, `2x gtceu:uhpic_chip`)
               .itemOutputs(`gtceu:${tier}_energy_input_hatch_16a`)
               .duration(100)
               .EUt(eut)
        })




    laserhatch.forEach(([tier, mat1, eut]) => {
        event.recipes.gtceu.assembler(`${tier}_256a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, 'gtceu:diamond_lens', `gtceu:${tier}_emitter`, `gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_256a_laser_target_hatch`)
            .circuit(1)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_256a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, 'gtceu:diamond_lens', `gtceu:${tier}_sensor`, `gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_256a_laser_target_hatch`)
            .circuit(1)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_1024a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '2x gtceu:diamond_lens', `2x gtceu:${tier}_emitter`, `2x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_single_wire`)
            .itemOutputs(`gtceu:${tier}_1024a_laser_target_hatch`)
            .circuit(2)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_1024a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '2x gtceu:diamond_lens', `2x gtceu:${tier}_sensor`, `2x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_double_wire`)
            .itemOutputs(`gtceu:${tier}_1024a_laser_target_hatch`)
            .circuit(2)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_4096a_laser_target_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '4x gtceu:diamond_lens', `4x gtceu:${tier}_emitter`, `4x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_quadruple_wire`)
            .itemOutputs(`gtceu:${tier}_4096a_laser_target_hatch`)
            .circuit(3)
            .duration(400)
            .EUt(eut)

        event.recipes.gtceu.assembler(`${tier}_4096a_laser_source_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, '4x gtceu:diamond_lens', `4x gtceu:${tier}_sensor`, `4x gtceu:${tier}_electric_pump`, `4x gtceu:${mat1}_quadruple_wire`)
            .itemOutputs(`gtceu:${tier}_4096a_laser_target_hatch`)
            .circuit(3)
            .duration(400)
            .EUt(eut)


    })


    // UEV/UIV/MAX Hulls and Casing
    event.remove({ id: 'gtceu:shaped/uev_machine_hull'})
    event.remove({ id: 'gtceu:shaped/uiv_machine_hull'})
    event.remove({ id: 'gtceu:shaped/opv_machine_hull'})
    
    event.recipes.gtceu.assembler('uev_hull')
        .itemInputs('gtceu:uev_machine_casing', '2x gtceu:omnium_single_wire', '2x gtceu:polyethyl_cyanoacrylate_plate')
        .itemOutputs('gtceu:uev_machine_hull')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('uev_casing')
        .itemInputs('8x gtceu:omnium_plate')
        .itemOutputs('gtceu:uev_machine_casing')
        .circuit(8)
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('uiv_hull')
        .itemInputs('gtceu:uiv_machine_casing', '2x gtceu:activated_netherite_single_wire', '2x gtceu:polyethyl_cyanoacrylate_plate')
        .itemOutputs('gtceu:uiv_machine_hull')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('uiv_casing')
        .itemInputs('8x gtceu:infinity_plate')
        .itemOutputs('gtceu:uiv_machine_casing')
        .circuit(8)
        .duration(50)
        .EUt(16)

    // Motors
    event.recipes.gtceu.assembly_line('uhv_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:long_neutronium_rod', '8x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '32x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:tritanium_quadruple_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_motor')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_electric_motor')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line('uev_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:long_omnium_rod', '8x gtceu:omnium_ring', '16x gtceu:omnium_round', '64x gtceu:fine_activated_netherite_wire', '64x gtceu:fine_activated_netherite_wire', '64x gtceu:fine_activated_netherite_wire', '4x gtceu:tritanium_octal_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_electric_motor')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_electric_motor')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line('uiv_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '12x gtceu:long_infinity_rod', '12x gtceu:infinity_ring', '24x gtceu:infinity_round', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '4x gtceu:tritanium_hex_cable')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_electric_motor')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_electric_motor')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Pistons
    event.recipes.gtceu.assembly_line('uhv_piston')
        .itemInputs('gtceu:uhv_electric_motor', '4x gtceu:neutronium_plate', '4x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '4x gtceu:neutronium_rod', 'gtceu:neutronium_gear', '2x gtceu:small_neutronium_gear', '2x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_piston')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_electric_piston')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line('uev_piston')
        .itemInputs('gtceu:uev_electric_motor', '4x gtceu:omnium_plate', '4x gtceu:omnium_ring', '16x gtceu:omnium_round', '4x gtceu:omnium_rod', 'gtceu:omnium_gear', '2x gtceu:small_omnium_gear', '2x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_electric_piston')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_electric_piston')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line('uiv_piston')
        .itemInputs('gtceu:uiv_electric_motor', '4x gtceu:infinity_plate', '4x gtceu:infinity_ring', '16x gtceu:infinity_round', '4x gtceu:infinity_rod', 'gtceu:infinity_gear', '2x gtceu:small_infinity_gear', '2x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_electric_piston')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_electric_piston')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Robot Arms
    event.recipes.gtceu.assembly_line('uhv_robot_arm')
        .itemInputs('4x gtceu:long_neutronium_rod', 'gtceu:neutronium_gear', '3x gtceu:small_neutronium_gear', '3x gtceu:uhv_electric_motor', 'gtceu:uhv_electric_piston', '#gtceu:circuits/uhv', '2x #gtceu:circuits/uv', '4x #gtceu:circuits/zpm', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_robot_arm')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_robot_arm')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line('uev_robot_arm')
        .itemInputs('4x gtceu:long_omnium_rod', 'gtceu:omnium_gear', '3x gtceu:small_omnium_gear', '3x gtceu:uev_electric_motor', 'gtceu:uev_electric_piston', '#gtceu:circuits/uev', '2x #gtceu:circuits/uhv', '4x #gtceu:circuits/uv', '4x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_robot_arm')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_robot_arm')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line('uiv_robot_arm')
        .itemInputs('4x gtceu:long_infinity_rod', 'gtceu:infinity_gear', '3x gtceu:small_infinity_gear', '3x gtceu:uiv_electric_motor', 'gtceu:uiv_electric_piston', '#gtceu:circuits/uiv', '2x #gtceu:circuits/uev', '4x #gtceu:circuits/uhv', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_robot_arm')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_robot_arm')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Sensors
    event.recipes.gtceu.assembly_line('uhv_sensor')
        .itemInputs('gtceu:neutronium_frame', 'gtceu:uhv_electric_motor', '4x gtceu:neutronium_plate', '2x gtceu:gravi_star', '#gtceu:circuits/uhv', '64x gtceu:naquadria_foil', '32x gtceu:naquadria_foil', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_sensor')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_sensor')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line('uev_sensor')
        .itemInputs('gtceu:omnium_frame', 'gtceu:uev_electric_motor', '4x gtceu:omnium_plate', 'kubejs:quasi_stable_neutron_star', '#gtceu:circuits/uev', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_sensor')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_sensor')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line('uiv_sensor')
        .itemInputs('gtceu:infinity_frame', 'gtceu:uiv_electric_motor', '4x gtceu:infinity_plate', '2x kubejs:quasi_stable_neutron_star', '#gtceu:circuits/uiv', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_sensor')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_sensor')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Emitters
    event.recipes.gtceu.assembly_line('uhv_emitter')
        .itemInputs('gtceu:neutronium_frame', 'gtceu:uhv_electric_motor', '4x gtceu:neutronium_rod', '2x gtceu:gravi_star', '#gtceu:circuits/uhv', '64x gtceu:naquadria_foil', '32x gtceu:naquadria_foil', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_emitter')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_emitter')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line('uev_emitter')
        .itemInputs('gtceu:omnium_frame', 'gtceu:uev_electric_motor', '4x gtceu:omnium_rod', 'kubejs:quasi_stable_neutron_star', '#gtceu:circuits/uev', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_emitter')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_emitter')
            .CWUt(128, 512000)
            .EUt(524288)
        )


    event.recipes.gtceu.assembly_line('uiv_emitter')
        .itemInputs('gtceu:infinity_frame', 'gtceu:uiv_electric_motor', '4x gtceu:infinity_rod', '2x kubejs:quasi_stable_neutron_star', '#gtceu:circuits/uiv', '64x gtceu:crystal_matrix_foil', '32x gtceu:crystal_matrix_foil', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_emitter')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_emitter')
            .CWUt(144, 576000)
            .EUt(1048576)
        )


    // Field Generators
    event.recipes.gtceu.assembly_line('uhv_field_generator')
        .itemInputs('gtceu:neutronium_frame', '6x gtceu:neutronium_plate', '2x gtceu:gravi_star', '2x gtceu:uhv_emitter', '2x #gtceu:circuits/uhv', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_field_generator')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_field_generator')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line('uev_field_generator')
        .itemInputs('gtceu:omnium_frame', '6x gtceu:omnium_plate', 'kubejs:quasi_stable_neutron_star', '2x gtceu:uev_emitter', '2x #gtceu:circuits/uev', '64x gtceu:fine_activated_netherite_wire', '64x gtceu:fine_activated_netherite_wire', '4x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_field_generator')
        .duration(600)
        .EUt(1966080)

        
        .stationResearch(b => b
            .researchStack('gtceu:uhv_field_generator')
            .CWUt(128, 512000)
            .EUt(524288)
        )


    event.recipes.gtceu.assembly_line('uiv_field_generator')
        .itemInputs('gtceu:infinity_frame', '6x gtceu:infinity_plate', '2x kubejs:quasi_stable_neutron_star', '2x gtceu:uiv_emitter', '2x #gtceu:circuits/uiv', '64x gtceu:fine_holmium_wire', '64x gtceu:fine_holmium_wire', '4x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_field_generator')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_field_generator')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Conveyors
    event.recipes.gtceu.assembly_line('uhv_conveyor')
        .itemInputs('2x gtceu:uhv_electric_motor', '2x gtceu:neutronium_plate', '4x gtceu:neutronium_ring', '16x gtceu:neutronium_round', '4x gtceu:neutronium_screw', '2x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:styrene_butadiene_rubber 5760', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_conveyor_module')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_conveyor_module')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line('uev_conveyor')
        .itemInputs('2x gtceu:uev_electric_motor', '2x gtceu:omnium_plate', '4x gtceu:omnium_ring', '16x gtceu:omnium_round', '4x gtceu:omnium_screw', '2x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:styrene_butadiene_rubber 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_conveyor_module')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_conveyor_module')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line('uiv_conveyor')
        .itemInputs('2x gtceu:uiv_electric_motor', '2x gtceu:infinity_plate', '4x gtceu:infinity_ring', '16x gtceu:infinity_round', '4x gtceu:infinity_screw', '2x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:styrene_butadiene_rubber 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_conveyor_module')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_conveyor_module')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Pumps
    event.recipes.gtceu.assembly_line('uhv_pump')
        .itemInputs('gtceu:uhv_electric_motor', 'gtceu:crystal_matrix_huge_fluid_pipe', '2x gtceu:neutronium_plate', '8x gtceu:neutronium_screw', '32x gtceu:neutronium_ring', 'gtceu:crystal_matrix_rotor', '2x gtceu:europium_double_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 1152', 'gtceu:naquadria 576')
        .itemOutputs('gtceu:uhv_electric_pump')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('gtceu:uv_electric_pump')
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line('uev_pump')
        .itemInputs('gtceu:uev_electric_motor', 'gtceu:activated_netherite_huge_fluid_pipe', '2x gtceu:omnium_plate', '8x gtceu:omnium_screw', '48x gtceu:omnium_ring', 'gtceu:activated_netherite_rotor', '2x gtceu:activated_netherite_double_wire')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 3000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('gtceu:uev_electric_pump')
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack('gtceu:uhv_electric_pump')
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line('uiv_pump')
        .itemInputs('gtceu:uiv_electric_motor', 'gtceu:holmium_huge_fluid_pipe', '2x gtceu:infinity_plate', '8x gtceu:infinity_screw', '64x gtceu:infinity_ring', 'gtceu:holmium_rotor', '2x gtceu:holmium_double_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:lubricant 4000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('gtceu:uiv_electric_pump')
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack('gtceu:uev_electric_pump')
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Fluid Regulators
    event.recipes.gtceu.assembler('uhv_fluid_regulator')
        .itemInputs('gtceu:uhv_electric_pump', '2x #gtceu:circuits/uhv')
        .circuit(1)
        .itemOutputs('gtceu:uhv_fluid_regulator')
        .duration(50)
        .EUt(1966080)

    event.recipes.gtceu.assembler('uev_fluid_regulator')
        .itemInputs('gtceu:uev_electric_pump', '2x #gtceu:circuits/uev')
        .circuit(1)
        .itemOutputs('gtceu:uev_fluid_regulator')
        .duration(50)
        .EUt(3932160)

    event.recipes.gtceu.assembler('uiv_fluid_regulator')
        .itemInputs('gtceu:uiv_electric_pump', '2x #gtceu:circuits/uiv')
        .circuit(1)
        .itemOutputs('gtceu:uiv_fluid_regulator')
        .duration(50)
        .EUt(15728640)
})
