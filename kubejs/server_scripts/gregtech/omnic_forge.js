ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_table(
        'gtceu:omnic_forge', [
            'ASESA',
            'SCRCS',
            'EVTVE',
            'SCRCS',
            'ASESA'
        ], {
            A: '#gtceu:circuits/uhv',
            S: 'gtceu:double_neutronium_plate',
            E: 'gtceu:uv_field_generator',
            C: 'kubejs:omnic_matrix_machine_casing',
            R: 'gtceu:uv_robot_arm',
            V: 'gtceu:uv_conveyor_module',
            T: 'gtceu:uv_machine_hull'
        }
    )
    event.recipes.gtceu.assembler('kubejs:omnic_matrix_machine_casing')
        .itemInputs('12x gtceu:omnium_plate', '2x gtceu:crystal_matrix_frame', '2x gtceu:zpm_field_generator', '2x #gtceu:circuits/uv')
        .itemOutputs('2x kubejs:omnic_matrix_machine_casing')
        .duration(2000)
        .EUt(65520)
    
    event.recipes.gtceu.omnic_forge('kubejs:omnic_matrix_machine_casing_forge')
        .itemInputs('6x gtceu:omnium_plate', 'gtceu:crystal_matrix_frame', 'gtceu:zpm_field_generator', '#gtceu:circuits/uv')
        .itemOutputs('2x kubejs:omnic_matrix_machine_casing')
        .duration(1000)
        .EUt(65520)

    event.recipes.gtceu.omnic_forge('kubejs:omnic_matrix_coil')
        .itemInputs('8x gtceu:omnium_double_wire', '8x gtceu:crystal_matrix_foil')
        .itemOutputs('kubejs:omnic_matrix_coil_block')
        .duration(1000)
        .EUt(65520)
        
    event.remove({output: 'gcyr:dyson_sphere_casing'})
    event.recipes.gtceu.omnic_forge('kubejs:dyson_casing')
        .itemInputs('32x gcyr:bisalloy_400_plate', '12x gtceu:netherite_frame', '12x gtceu:dense_naquadah_alloy_plate', '12x gtceu:omnium_rod')
        .itemOutputs('3x gcyr:dyson_sphere_casing')
        .duration(2000)
        .EUt(65520)
   
    event.recipes.gtceu.omnic_forge('kubejs:netherite_casing')
        .itemInputs('16x gtceu:neutronium_plate', '12x gtceu:large_scale_assembler_casing', '12x gtceu:dense_netherite_plate', '12x gtceu:tungsten_steel_rod')
        .itemOutputs('3x kubejs:dimensional_stabilization_netherite_casing')
        .duration(2000)
        .EUt(65520)

    event.recipes.gtceu.omnic_forge('kubejs:resonant_fusion_coil')
        .itemInputs('2x gtceu:fusion_coil', '8x gtceu:dense_cryococcus_plate', '2x gtceu:netherite_frame', '2x #gtceu:circuits/uhv', 'gtceu:uhv_field_generator')
        .itemOutputs('2x kubejs:resonant_fusion_coil')
        .duration(2000)
        .EUt(65520)
    
    event.recipes.gtceu.omnic_forge('kubejs:resonant_fusion_casing')
        .itemInputs('gtceu:uiv_machine_hull', '2x kubejs:resonant_fusion_coil', '12x gtceu:cryococcus_plate', '4x gtceu:fusion_casing_mk3', 'gtceu:uev_field_generator')
        .itemOutputs('4x kubejs:resonant_fusion_casing')
        .duration(2000)
        .EUt(65520)

    //Buffed Catalyst Recycling
    event.recipes.gtceu.omnic_forge('kubejs:fury_enhanced_infinity_catalyst_recycling')
        .itemInputs('kubejs:dormant_fury_enhanced_infinity_catalyst', 'kubejs:heart_of_a_universe')
        .itemOutputs('kubejs:fury_enhanced_infinity_catalyst')
        .duration(2000)
        .EUt(65520)

    event.recipes.gtceu.omnic_forge('kubejs:serenity_enhanced_infinity_catalyst_recycling')
        .itemInputs('kubejs:dormant_serenity_enhanced_infinity_catalyst', 'kubejs:heart_of_a_universe')
        .itemOutputs('kubejs:serenity_enhanced_infinity_catalyst')
        .duration(2000)
        .EUt(65520)

    //Enhanced Infinity Catalyst Crafting
    event.recipes.gtceu.omnic_forge('kubejs:fury_enhanced_infinity_catalyst_crafting')
        .itemInputs('kubejs:infinity_catalyst', 'kubejs:heart_of_a_universe', 'gtceu:infinity_frame', '2x gtceu:uiv_emitter')
        .itemOutputs('kubejs:fury_enhanced_infinity_catalyst')
        .duration(1000)
        .EUt(1966080)

    event.recipes.gtceu.omnic_forge('kubejs:serenity_enhanced_infinity_catalyst_crafting')
        .itemInputs('kubejs:infinity_catalyst', 'kubejs:heart_of_a_universe', 'gtceu:monium_frame', '8x kubejs:contained_singularity')
        .itemOutputs('kubejs:serenity_enhanced_infinity_catalyst')
        .duration(1000)
        .EUt(1966080)

})
