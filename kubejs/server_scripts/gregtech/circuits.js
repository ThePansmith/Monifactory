ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev' })
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev_soldering_alloy' })

    //Using event.replaceInput on gregtech recipes causes the ingredient order to be mixed up.
    //We redeclare the recipe instead to preserve ingredient order
    event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/workstation_ev')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            '2x gtceu:micro_processor_assembly',
            '4x #gtceu:diodes',
            '4x gtceu:ram_chip',
            '16x #forge:fine_wires/electrum',
            '16x #forge:bolts/vibrant_alloy'
        )
        .inputFluids(Fluid.of('gtceu:tin', 288))
        .itemOutputs('gtceu:micro_processor_computer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(120)
    event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/workstation_ev_soldering_alloy')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            '2x gtceu:micro_processor_assembly',
            '4x #gtceu:diodes',
            '4x gtceu:ram_chip',
            '16x #forge:fine_wires/electrum',
            '16x #forge:bolts/vibrant_alloy'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('gtceu:micro_processor_computer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(120)
        

        // WIP: Matter Circuits
        event.recipes.gtceu.circuit_assembler('matter_circuit_board')
            .itemInputs('16x gtceu:omnium_plate', '32x gtceu:netherite_foil', '32x gtceu:crystal_matrix_foil', '#gtceu:circuits/zpm', 'gtceu:luv_emitter', '8x gtceu:omnic_acid_dust')
            .inputFluids('minecraft:water 500')
            .itemOutputs('16x kubejs:matter_circuit_board')
            .duration(1200)
            .EUt(250000)
<
        event.recipes.gtceu.assembler('matter_processing_unit')
            .itemInputs('2x kubejs:matter_circuit_board', '2x gtceu:crystal_matrix_plate', '2x gtceu:netherite_double_wire', 'gtceu:highly_advanced_soc')
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('2x kubejs:matter_processing_unit')
            .duration(100)
            .EUt(250000)

        event.recipes.gtceu.circuit_assembler('matter_processor')
            .itemInputs('kubejs:matter_processing_unit', '8x gtceu:advanced_smd_capacitor', '4x gtceu:advanced_smd_transistor', '4x gtceu:qbit_cpu_chip', '4x gtceu:fine_naquadria_wire')
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs('4x kubejs:matter_processor')
            .duration(160)
            .EUt(250000)

        event.recipes.gtceu.assembly_line('matter_processor_assembly')
            .itemInputs('kubejs:matter_processing_unit', '3x kubejs:matter_processor', '64x gtceu:qbit_cpu_chip', '16x gtceu:advanced_smd_capacitor', '16x gtceu:advanced_smd_transistor', '16x gtceu:advanced_smd_diode', '16x gtceu:advanced_smd_resistor', '4x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire')
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('kubejs:matter_processor_assembly')
            .duration(160)
            .EUt(250000)

        event.recipes.gtceu.assembly_line('matter_processor_computer')
            .itemInputs('kubejs:matter_processing_unit', '4x kubejs:matter_processor_assembly', '64x gtceu:qbit_cpu_chip', '32x gtceu:advanced_smd_capacitor', '32x gtceu:advanced_smd_transistor', '32x gtceu:advanced_smd_diode', '32x gtceu:advanced_smd_resistor', '16x gtceu:uhpic_chip', '4x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire')
            .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 144')
            .itemOutputs('kubejs:matter_processor_computer')
            .duration(200)
            .EUt(250000)

        event.recipes.gtceu.assembly_line('matter_processor_mainframe')
            .itemInputs('2x gtceu:netherite_frame', '2x kubejs:matter_processor_computer', '64x gtceu:advanced_smd_capacitor', '64x gtceu:advanced_smd_transistor', '64x gtceu:advanced_smd_diode', '64x gtceu:advanced_smd_resistor', '64x gtceu:advanced_smd_inductor', '64x gtceu:ram_chip', 'kubejs:heart_of_a_universe', '8x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire', '8x gtceu:crystal_matrix_plate') // could replace with omnium frame
            .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 288')
            .itemOutputs('kubejs:matter_processor_mainframe')
            .duration(1200)
            .EUt(1000000)

        // WIP: Dimensional Circuits
        event.recipes.gtceu.circuit_assembler('dimensional_circuit_board')
            .itemInputs('16x kubejs:matter_circuit_board', '32x gtceu:holmium_foil', '#gtceu:circuits/uv', 'gtceu:zpm_field_generator', '8x gtceu:nether_star_lens')
            .inputFluids('gtceu:omnium 288')
            .itemOutputs('16x kubejs:dimensional_circuit_board')
            .duration(1200)
            .EUt(500000)

        event.recipes.gtceu.assembler('dimensional_processing_unit')
            .itemInputs('2x kubejs:dimensional_circuit_board', 'gtceu:infinity_plate', '2x armorplus:the_ultimate_material', '2x gtceu:netherite_double_wire', 'gtceu:flawless_monazite_gem',  'gtceu:flawless_glass_gem')
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('2x kubejs:dimensional_processing_unit')
            .duration(100)
            .EUt(1966080)

        const smds = [
            ['transistor', 'gtceu:diamond_plate', '8x gtceu:fine_holmium_wire'],
            ['resistor', 'gtceu:netherite_dust', '4x gtceu:fine_holmium_wire'],
            ['capacitor', 'gtceu:neutronium_foil', 'gtceu:holmium_foil'],
            ['diode', 'gtceu:ruthenium_trinium_americium_neutronate_dust', '16x gtceu:fine_holmium_wire'],
            ['inductor', 'gtceu:tritanium_ring', '16x gtceu:fine_holmium_wire']
        ]
    
        for (const [item, primary, secondary] of smds) {
            event.recipes.gtceu.assembler(`complex_smd_${item}`)
            .itemInputs(primary, secondary)
            .itemOutputs(`32x kubejs:complex_smd_${item}`)
            .duration(160)
            .EUt(245760)
        }

        event.recipes.gtceu.circuit_assembler('dimensional_processor')
            .itemInputs('kubejs:dimensional_processing_unit', '8x kubejs:complex_smd_capacitor', '4x kubejs:complex_smd_transistor', '4x gtceu:qbit_cpu_chip', '4x gtceu:fine_holmium_wire')
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs('4x kubejs:dimensional_processor')
            .duration(160)
            .EUt(1966080)

        event.recipes.gtceu.assembly_line('dimensional_processor_assembly')
            .itemInputs('kubejs:dimensional_processing_unit', '3x kubejs:dimensional_processor', '32x gtceu:qbit_cpu_chip', '16x kubejs:complex_smd_capacitor', '16x kubejs:complex_smd_transistor', '16x kubejs:complex_smd_diode', '16x kubejs:complex_smd_resistor', '4x gtceu:ruthenium_trinium_americium_neutronate_single_wire')
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('kubejs:dimensional_processor_assembly')
            .duration(160)
            .EUt(1966080)

        event.recipes.gtceu.assembly_line('dimensional_processor_computer')
            .itemInputs('kubejs:dimensional_processing_unit', '4x kubejs:dimensional_processor_assembly', '64x gtceu:qbit_cpu_chip', '32x kubejs:complex_smd_capacitor', '32x kubejs:complex_smd_transistor', '32x kubejs:complex_smd_diode', '32x kubejs:complex_smd_resistor', '16x gtceu:uhpic_chip', '4x gtceu:ruthenium_trinium_americium_neutronate_double_wire')
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('kubejs:dimensional_processor_computer')
            .duration(200)
            .EUt(1966080)

        event.recipes.gtceu.assembly_line('dimensional_processor_mainframe')
            .itemInputs('2x gtceu:infinity_frame', '2x kubejs:dimensional_processor_computer', '64x kubejs:complex_smd_capacitor', '64x kubejs:complex_smd_transistor', '64x kubejs:complex_smd_diode', '64x kubejs:complex_smd_resistor', '64x kubejs:complex_smd_inductor', '64x gtceu:ram_chip', '8x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '4x gtceu:double_holmium_plate') // could replace with omnium frame
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('kubejs:dimensional_processor_mainframe')
            .duration(1200)
            .EUt(3932160)

        // Monic Circuits
        event.recipes.gtceu.circuit_assembler('monic_circuit_board')
            .itemInputs('16x kubejs:dimensional_circuit_board', '16x gtceu:netherite_plate', '8x gtceu:holmium_plate', '#gtceu:circuits/uhv', 'gtceu:uv_field_generator', '4x kubejs:quasi_stable_neutron_star')
            .inputFluids('gtceu:omnium 576')
            .itemOutputs('16x kubejs:monic_circuit_board')
            .duration(1200)
            .EUt(2000000)

        event.recipes.gtceu.assembler('monic_processing_unit')
            .itemInputs('2x kubejs:monic_circuit_board', '2x gtceu:monium_plate', '4x gtceu:holmium_double_wire', 'kubejs:ultimate_gem',  'gtceu:exquisite_glass_gem')
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('2x kubejs:monic_processing_unit')
            .duration(100)
            .EUt(3932160)

            event.recipes.gtceu.circuit_assembler('monic_processor')
            .itemInputs('kubejs:monic_processing_unit', '8x kubejs:complex_smd_capacitor', '4x kubejs:complex_smd_transistor', '4x kubejs:contained_singularity', '4x gtceu:fine_holmium_wire')
            .inputFluids('gtceu:soldering_alloy 144')
            .itemOutputs('4x kubejs:monic_processor')
            .duration(160)
            .EUt(1966080)

        event.recipes.gtceu.assembly_line('monic_processor_assembly')
            .itemInputs('kubejs:monic_processing_unit', '3x kubejs:monic_processor', '16x kubejs:contained_singularity', '16x kubejs:complex_smd_capacitor', '16x kubejs:complex_smd_transistor', '16x kubejs:complex_smd_diode', '16x kubejs:complex_smd_resistor', '4x gtceu:netherite_single_wire')
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('kubejs:monic_processor_assembly')
            .duration(160)
            .EUt(1966080)

        event.recipes.gtceu.assembly_line('monic_processor_computer')
            .itemInputs('kubejs:monic_processing_unit', '4x kubejs:monic_processor_assembly', '32x kubejs:contained_singularity', '32x kubejs:complex_smd_capacitor', '32x kubejs:complex_smd_transistor', '32x kubejs:complex_smd_diode', '32x kubejs:complex_smd_resistor', '16x gtceu:uhpic_chip', '4x gtceu:netherite_double_wire')
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('kubejs:monic_processor_computer')
            .duration(200)
            .EUt(1966080)

        event.recipes.gtceu.assembly_line('monic_processor_mainframe')
            .itemInputs('4x gtceu:monium_frame', '2x kubejs:monic_processor_computer', '64x kubejs:complex_smd_capacitor', '64x kubejs:complex_smd_transistor', '64x kubejs:complex_smd_diode', '64x kubejs:complex_smd_resistor', '64x kubejs:complex_smd_inductor', '64x kubejs:contained_singularity', '64x kubejs:contained_singularity', '8x gtceu:sculk_superconductor_double_wire', '4x gtceu:double_infinity_plate') // could replace with omnium frame
            .inputFluids('gtceu:soldering_alloy 1152')
            .itemOutputs('kubejs:monic_processor_mainframe')
            .duration(1200)
            .EUt(2147483647)
    })
