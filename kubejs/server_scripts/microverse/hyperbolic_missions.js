/**
 * Recipe definitions for hyperbolic microverse projector missions.
 */
ServerEvents.recipes(event => {
    // T4MM mission
    hyperbolic_microverse_mission(event, 4, 30, GTValues.VHA, GTValues.UV, 50, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs(
            '64x kubejs:ultra_dense_hydrogen',
            '64x kubejs:ultra_dense_hydrogen',
            '64x kubejs:ultra_dense_hydrogen',
            '64x kubejs:ultra_dense_hydrogen',
            '1x gtceu:data_module',
            '1x gtceu:uhv_sensor'
        )
        .itemOutputs(
            '64x kubejs:stellar_creation_data',
            '64x kubejs:stellar_creation_data',
            '64x kubejs:stellar_creation_data',
            '64x kubejs:stellar_creation_data'
        )
    })

    // T8MM mission
    hyperbolic_microverse_mission(event, 8, 30, GTValues.VHA, GTValues.UV, 30, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs(
            '16x kubejs:quantum_flux',
            '64x kubejs:dilithium_crystal',
            '16x minecraft:sculk_catalyst',
            'kubejs:corrupted_universe_data',
            'kubejs:lair_of_the_warden_data'
        )
        .itemOutputs(
            '64x kubejs:hadal_shard',
            '64x kubejs:warden_heart',
            '64x kubejs:warden_heart',
            '64x kubejs:warden_heart',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn'
        )
    })

    // T9MM mission
    hyperbolic_microverse_mission(event, 9, 50, GTValues.VHA, GTValues.UV, 40, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:shattered_universe_data', '64x kubejs:shattered_star_data')
        .itemOutputs('kubejs:corrupted_universe_data')
    })

    // T10MM missions
    hyperbolic_microverse_mission(event, 10, 150, GTValues.VA, GTValues.UHV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x kubejs:infinity_catalyst', 'kubejs:corrupted_universe_data')
        .itemOutputs('16x kubejs:heart_of_a_universe')
    })

    hyperbolic_microverse_mission(event, 10, 20, GTValues.VA, GTValues.UHV, 50, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('64x kubejs:singularity_containment_unit', 'kubejs:shattered_universe_data',) // could be increased
        .itemOutputs('64x kubejs:contained_singularity')
    })

    // T11MM missions
    hyperbolic_microverse_mission(event, 11, 30, GTValues.VA, GTValues.UHV, 25, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:infinity_catalyst', 'gtceu:neutronium_drill_head', 'kubejs:shattered_universe_data')
        .itemOutputs(
            '64x kubejs:alien_scrap',
            '64x kubejs:alien_scrap',
            '64x kubejs:alien_scrap',
            '64x kubejs:alien_scrap',
            '64x kubejs:alien_scrap',
            '64x kubejs:alien_scrap'
        )
    })

    hyperbolic_microverse_mission(event, 11, 30, GTValues.VHA, GTValues.UHV, 50, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs(
            '64x gtceu:gravi_star',
            '64x gtceu:gravi_star',
            '64x gtceu:gravi_star',
            '64x gtceu:gravi_star',
            'kubejs:corrupted_universe_data'
        )
        .itemOutputs(
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star'
        )
    })

    hyperbolic_microverse_mission(event, 11, 30, GTValues.VA, GTValues.UEV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs(
            '16x gtceu:holmium_block',
            '8x gtceu:network_switch',
            '8x gtceu:data_bank',
            '16x gtceu:advanced_data_access_hatch',
            '16x gtceu:computation_receiver_hatch',
            '64x kubejs:stellar_creation_data'
        )
        .itemOutputs('kubejs:creative_computation_data')
    })

    hyperbolic_microverse_mission(event, 12, 60, GTValues.VA, GTValues.UIV, 40, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('64x gtceu:infinity_ingot', '4x kubejs:universe_creation_data')
        .itemOutputs('64x gtceu:monium_ingot')
    })

    hyperbolic_microverse_mission(event, 12, 60, GTValues.VA, GTValues.UIV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x gtceu:eltz_block', '4x gtceu:max_battery', '2x solarflux:sp_custom_infinity', 'gtceu:uiv_4096a_laser_source_hatch', '4x kubejs:universe_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data') // could be increased
        .itemOutputs('kubejs:creative_energy_data')
    })

    hyperbolic_microverse_mission(event, 12, 60, GTValues.VA, GTValues.UXV, 75, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x kubejs:timeless_monic_heavy_plating', '4x kubejs:universe_creation_data', '2x kubejs:shattered_universe_data', '2x kubejs:corrupted_universe_data')
        .itemOutputs('4x kubejs:causality_exempt_monic_heavy_plating')
    })
})