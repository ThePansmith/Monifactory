ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev' })
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_computer_iv_asmd' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_computer_iv_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_computer_iv_asmd_soldering_alloy' })
    event.remove({ id: 'gtceu:circuit_assembler/nano_computer_iv' })
    event.remove({ id: 'gtceu:circuit_assembler/crystal_computer_zpm' })
    event.remove({ id: 'gtceu:circuit_assembler/crystal_computer_zpm_soldering_alloy' })

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

    //Nano Supercomputer Recipe Modification
    event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/nano_computer_iv_soldering_alloy')
        .itemInputs(
            'gtceu:epoxy_printed_circuit_board',
            '2x gtceu:nano_processor_assembly',
            '4x gtceu:nor_memory_chip',
            '8x #forge:fine_wires/lumium',
            '16x #forge:fine_wires/tungsten_steel',
            '8x gtceu:smd_diode'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('gtceu:nano_processor_computer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(200)
        .EUt(600)
    event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/nano_computer_iv')
        .itemInputs(
            'gtceu:epoxy_printed_circuit_board',
            '2x gtceu:nano_processor_assembly',
            '4x gtceu:nor_memory_chip',
            '8x #forge:fine_wires/lumium',
            '16x #forge:fine_wires/tungsten_steel',
            '8x gtceu:smd_diode'
        )
        .inputFluids(Fluid.of('gtceu:tin', 288))
        .itemOutputs('gtceu:nano_processor_computer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(200)
        .EUt(600)
    event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/nano_computer_iv_asmd_soldering_alloy')
        .itemInputs(
            'gtceu:epoxy_printed_circuit_board',
            '2x gtceu:nano_processor_assembly',
            '4x gtceu:nor_memory_chip',
            '8x #forge:fine_wires/lumium',
            '16x #forge:fine_wires/tungsten_steel',
            '2x gtceu:advanced_smd_diode'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('gtceu:nano_processor_computer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(200)
        .EUt(600)
    event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/nano_computer_iv_asmd')
        .itemInputs(
            'gtceu:epoxy_printed_circuit_board',
            '2x gtceu:nano_processor_assembly',
            '4x gtceu:nor_memory_chip',
            '8x #forge:fine_wires/lumium',
            '16x #forge:fine_wires/tungsten_steel',
            '2x gtceu:advanced_smd_diode'
        )
        .inputFluids(Fluid.of('gtceu:tin', 288))
        .itemOutputs('gtceu:nano_processor_computer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(200)
        .EUt(600)

    //Crystal Supercomputer Modification
    event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/crystal_computer_zpm_soldering_alloy')
        .itemInputs(
            'gtceu:multilayer_fiber_reinforced_printed_circuit_board',
            '2x gtceu:crystal_processor_assembly',
            '4x gtceu:ram_chip',
            '32x gtceu:nor_memory_chip',
            '64x gtceu:nand_memory_chip',
            '32x #forge:fine_wires/enderium'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('gtceu:crystal_processor_computer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(9600)
    event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/crystal_computer_zpm')
        .itemInputs(
            'gtceu:multilayer_fiber_reinforced_printed_circuit_board',
            '2x gtceu:crystal_processor_assembly',
            '4x gtceu:ram_chip',
            '32x gtceu:nor_memory_chip',
            '64x gtceu:nand_memory_chip',
            '32x #forge:fine_wires/enderium'
        )
        .inputFluids(Fluid.of('gtceu:tin', 288))
        .itemOutputs('gtceu:crystal_processor_computer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(9600)

    // Wetware tweaks
    event.remove({output: 'gtceu:neuro_processing_unit'})
    event.recipes.gtceu.circuit_assembler('neuro_processing_unit')
        .itemInputs('gtceu:wetware_printed_circuit_board', '4x gtceu:stem_cells', '8x gtceu:polybenzimidazole_small_fluid_pipe', '4x gtceu:enderium_plate', '16x gtceu:silicone_rubber_foil', '8x gtceu:hsse_bolt')
        .inputFluids('gtceu:sterilized_growth_medium 100')
        .itemOutputs('gtceu:neuro_processing_unit')
        .duration(600)
        .EUt(80000)
        .cleanroom(CleanroomType.CLEANROOM)

    // WIP: Matter Circuits
    event.recipes.gtceu.circuit_assembler('matter_circuit_board')
        .itemInputs('16x gtceu:omnium_plate', '32x gtceu:activated_netherite_foil', '32x gtceu:crystal_matrix_foil', '#gtceu:circuits/luv', 'gtceu:iv_emitter', 
            '8x gtceu:omnic_acid_dust')
        .inputFluids('minecraft:water 500')
        .itemOutputs('16x kubejs:matter_circuit_board')
        .duration(1200)
        .EUt(250000)

    event.recipes.gtceu.circuit_assembler('matter_processing_unit')
        .itemInputs('2x kubejs:matter_circuit_board', '2x gtceu:crystal_matrix_plate', '2x gtceu:activated_netherite_double_wire', 'gtceu:highly_advanced_soc')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x kubejs:matter_processing_unit')
        .duration(100)
        .EUt(250000)

    event.recipes.gtceu.circuit_assembler('matter_processor')
        .itemInputs('kubejs:matter_processing_unit', '8x gtceu:advanced_smd_capacitor', '4x gtceu:advanced_smd_transistor', 
            '4x kubejs:multidimensional_cpu_chip', '4x gtceu:fine_naquadria_wire')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('8x kubejs:matter_processor')
        .duration(160)
        .EUt(250000)

    event.recipes.gtceu.circuit_assembler('matter_processor_assembly')
        .itemInputs('kubejs:matter_processing_unit', '4x kubejs:matter_processor', '12x kubejs:multidimensional_cpu_chip', 
            '12x gtceu:advanced_smd_capacitor', '6x gtceu:advanced_smd_transistor', '4x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x kubejs:matter_processor_assembly')
        .duration(160)
        .EUt(250000)

    event.recipes.gtceu.assembly_line('matter_processor_computer')
        .itemInputs('kubejs:matter_processing_unit', '2x kubejs:matter_processor_assembly', '24x kubejs:multidimensional_cpu_chip', 
            '12x gtceu:advanced_smd_capacitor', '8x gtceu:advanced_smd_transistor', '8x gtceu:advanced_smd_diode', '8x gtceu:advanced_smd_resistor', 
            '8x gtceu:uhpic_chip', '4x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire', '8x gtceu:polyethyl_cyanoacrylate_foil')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 144')
        .itemOutputs('kubejs:matter_processor_computer')
        .duration(200)
        .EUt(250000)

    event.recipes.gtceu.assembly_line('matter_processor_mainframe')
        .itemInputs('4x gtceu:activated_netherite_frame', '16x kubejs:matter_processor_computer', '24x gtceu:advanced_smd_capacitor', 
            '24x gtceu:advanced_smd_transistor', '24x gtceu:advanced_smd_diode', '24x gtceu:advanced_smd_resistor', '24x gtceu:advanced_smd_inductor', 
            '32x gtceu:ram_chip', '16x gtceu:polyethyl_cyanoacrylate_foil', '8x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire', 
            '8x gtceu:crystal_matrix_plate') // could replace with omnium frame
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 288')
        .itemOutputs('kubejs:matter_processor_mainframe')
        .duration(1200)
        .EUt(1000000)

    // WIP: Dimensional Circuits
    event.recipes.gtceu.circuit_assembler('dimensional_circuit_board')
        .itemInputs('16x kubejs:matter_circuit_board', '32x gtceu:holmium_foil', '#gtceu:circuits/zpm', 'gtceu:luv_field_generator', 
            '8x gtceu:nether_star_lens')
        .inputFluids('gtceu:omnium 288')
        .itemOutputs('16x kubejs:dimensional_circuit_board')
        .duration(1200)
        .EUt(500000)

    event.recipes.gtceu.circuit_assembler('dimensional_processing_unit')
        .itemInputs('4x kubejs:dimensional_circuit_board', 'gtceu:infinity_plate', '4x kubejs:the_ultimate_material', 
            '4x gtceu:activated_netherite_double_wire', '2x gtceu:flawless_monazite_gem',  '2x gtceu:flawless_glass_gem')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('4x kubejs:dimensional_processing_unit')
        .duration(100)
        .EUt(1966080)

    const smds = [
        ['transistor', 'gtceu:enriched_naquadah_foil', '8x gtceu:fine_holmium_wire', 2],
        ['resistor', 'gtceu:crystal_matrix_dust', '4x gtceu:fine_holmium_wire', 4],
        ['capacitor', 'gtceu:polybenzimidazole_foil', 'gtceu:holmium_foil', 1],
        ['diode', 'gtceu:indium_gallium_phosphide_dust', '8x gtceu:fine_holmium_wire', 2],
        ['inductor', 'gtceu:tritanium_ring', '4x gtceu:fine_holmium_wire', 2]
    ]
    
    //PECA foil to replace fluid polymer cost
    for (const [item, primary, secondary, foil_amount] of smds) {
        event.recipes.gtceu.assembler(`complex_smd_${item}`)
        .itemInputs(primary, secondary, Item.of('gtceu:polyethyl_cyanoacrylate_foil', foil_amount))
        .itemOutputs(`32x kubejs:complex_smd_${item}`)
        .duration(160)
        .EUt(245760)
    }

    event.recipes.gtceu.circuit_assembler('dimensional_processor')
        .itemInputs('kubejs:dimensional_processing_unit', '4x kubejs:complex_smd_capacitor', '2x kubejs:complex_smd_transistor', 
            '4x kubejs:multidimensional_cpu_chip', '2x gtceu:fine_holmium_wire')
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('16x kubejs:dimensional_processor')
        .duration(160)
        .EUt(1966080)

    event.recipes.gtceu.circuit_assembler('dimensional_processor_assembly')
        .itemInputs('kubejs:dimensional_processing_unit', '4x kubejs:dimensional_processor', '2x kubejs:multidimensional_cpu_chip', 
            '8x kubejs:complex_smd_capacitor', '8x kubejs:complex_smd_resistor', '4x gtceu:ruthenium_trinium_americium_neutronate_single_wire')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('4x kubejs:dimensional_processor_assembly')
        .duration(160)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('dimensional_processor_computer')
        .itemInputs('kubejs:dimensional_processing_unit', '4x kubejs:dimensional_processor_assembly', '8x kubejs:multidimensional_cpu_chip', 
            '16x kubejs:complex_smd_capacitor', '16x kubejs:complex_smd_transistor', '8x kubejs:complex_smd_diode', '8x kubejs:complex_smd_resistor', 
            '16x gtceu:uhpic_chip', '4x gtceu:ruthenium_trinium_americium_neutronate_double_wire',  '16x gtceu:polyethyl_cyanoacrylate_foil')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:dimensional_processor_computer')
        .duration(200)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('dimensional_processor_mainframe')
        .itemInputs('4x gtceu:infinity_frame', '16x kubejs:dimensional_processor_computer', '32x kubejs:complex_smd_capacitor', 
            '32x kubejs:complex_smd_transistor', '32x kubejs:complex_smd_diode', '32x kubejs:complex_smd_resistor', '32x kubejs:complex_smd_inductor', 
            '32x kubejs:hyperdynamic_ram_chip', '32x gtceu:polyethyl_cyanoacrylate_foil', '8x gtceu:ruthenium_trinium_americium_neutronate_double_wire', '4x gtceu:double_holmium_plate') // could replace with omnium frame
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:dimensional_processor_mainframe')
        .duration(1200)
        .EUt(3932160)

    // Monic Circuits
    event.recipes.gtceu.circuit_assembler('monic_circuit_board')
        .itemInputs('16x kubejs:dimensional_circuit_board', '16x gtceu:activated_netherite_plate', '8x gtceu:holmium_plate', 
            '#gtceu:circuits/uv', 'gtceu:zpm_field_generator', '4x kubejs:quasi_stable_neutron_star')
        .inputFluids('gtceu:omnium 576')
        .itemOutputs('16x kubejs:monic_circuit_board')
        .duration(1200)
        .EUt(2000000)

    event.recipes.gtceu.circuit_assembler('monic_processing_unit')
        .itemInputs('8x kubejs:monic_circuit_board', '1x gtceu:monium_plate', '16x gtceu:holmium_double_wire', '4x kubejs:ultimate_gem',  
            '4x gtceu:exquisite_glass_gem')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('8x kubejs:monic_processing_unit')
        .duration(100)
        .EUt(3932160)

    event.recipes.gtceu.circuit_assembler('monic_processor')
        .itemInputs('kubejs:monic_processing_unit', '16x kubejs:complex_smd_capacitor', '8x kubejs:complex_smd_transistor', 
            'kubejs:contained_singularity', '16x gtceu:fine_holmium_wire')
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('32x kubejs:monic_processor')
        .duration(160)
        .EUt(1966080)

    event.recipes.gtceu.circuit_assembler('monic_processor_assembly')
        .itemInputs('kubejs:monic_processing_unit', '8x kubejs:monic_processor', '2x kubejs:contained_singularity', '12x kubejs:complex_smd_capacitor', 
            '12x kubejs:complex_smd_transistor', '8x gtceu:activated_netherite_single_wire')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('8x kubejs:monic_processor_assembly')
        .duration(160)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('monic_processor_computer')
        .itemInputs('kubejs:monic_processing_unit', '2x kubejs:monic_processor_assembly', '4x kubejs:contained_singularity', 
            '16x kubejs:complex_smd_capacitor', '16x kubejs:complex_smd_transistor', '16x kubejs:complex_smd_diode', '16x kubejs:complex_smd_resistor', 
            '16x gtceu:uhpic_chip', '4x gtceu:activated_netherite_double_wire',  '32x gtceu:polyethyl_cyanoacrylate_foil')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x kubejs:monic_processor_computer')
        .duration(200)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('monic_processor_mainframe')
        .itemInputs('8x gtceu:monium_frame', '2x kubejs:monic_processing_unit', '16x kubejs:monic_processor_computer', '64x kubejs:complex_smd_capacitor', '64x kubejs:complex_smd_transistor',
            '64x kubejs:complex_smd_diode', '64x kubejs:complex_smd_resistor', '64x kubejs:complex_smd_inductor', 
            '64x kubejs:contained_singularity', '64x kubejs:contained_singularity', '64x kubejs:multidimensional_cpu_chip', 
            '64x kubejs:hyperdynamic_ram_chip', '64x gtceu:polyethyl_cyanoacrylate_foil', '64x kubejs:quantum_soc_chip', '4x gtceu:double_infinity_plate', '8x gtceu:sculk_superconductor_double_wire') // could replace with omnium frame
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:monic_processor_mainframe')
        .duration(1200)
        .EUt(134217728)
    })
