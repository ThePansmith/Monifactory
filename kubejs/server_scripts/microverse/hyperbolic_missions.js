/**
 * Recipe definitions for hyperbolic microverse projector missions.
 */
ServerEvents.recipes(event => {
    // T4MM mission
    microverse_mission(event, 4, 4, 160).forEach(builder => {
        builder
            .itemInputs(
                "64x kubejs:ultra_dense_hydrogen",
                "64x kubejs:ultra_dense_hydrogen",
                "64x kubejs:ultra_dense_hydrogen",
                "64x kubejs:ultra_dense_hydrogen",
                "1x gtceu:data_module",
                "1x gtceu:uhv_sensor",
                "kubejs:blasting_kit"
            )
            .itemOutputs(
                "64x kubejs:stellar_creation_data",
                "64x kubejs:stellar_creation_data",
                "64x kubejs:stellar_creation_data",
                "64x kubejs:stellar_creation_data"
            )
    })

    // T8MM mission
    microverse_mission(event, 8, 4, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "64x kubejs:quantum_flux",
                "64x gtceu:dilithium_gem",
                "64x gtceu:dilithium_gem",
                "1x kubejs:hadal_energy_core",
                "kubejs:corrupted_universe_data",
                "kubejs:lair_of_the_warden_data"
            )
            .itemOutputs(
                "64x kubejs:hadal_shard",
                "64x kubejs:warden_heart",
                "64x kubejs:warden_heart",
                "64x kubejs:warden_heart",
                "64x kubejs:warden_horn",
                "64x kubejs:warden_horn"
            )
    })

    // T9MM mission
    microverse_mission(event, 9, 4).forEach(builder => {
        builder
            .inputFluids("gtceu:nitrogen_plasma 15000")
            .itemInputs("kubejs:shattered_universe_data", "64x kubejs:shattered_star_data")
            .itemOutputs("kubejs:corrupted_universe_data")
    })

    // T10MM missions
    microverse_mission(event, 10, 4).forEach(builder => {
        builder
            .itemInputs("8x kubejs:infinity_catalyst", "kubejs:corrupted_universe_data")
            .itemOutputs("16x kubejs:heart_of_a_universe")
    })

    microverse_mission(event, 10, 4).forEach(builder => {
        builder
            .itemInputs("64x kubejs:singularity_containment_unit", "kubejs:shattered_universe_data",)
            .itemOutputs("64x kubejs:contained_singularity")
    })

    // T11MM missions
    microverse_mission(event, 11, 4).forEach(builder => {
        builder
            .itemInputs("kubejs:infinity_catalyst", "gtceu:neutronium_drill_head", "kubejs:shattered_universe_data")
            .itemOutputs(
                "64x kubejs:alien_scrap",
                "64x kubejs:alien_scrap",
                "64x kubejs:alien_scrap",
                "64x kubejs:alien_scrap",
                "64x kubejs:alien_scrap"
            )
    })

    microverse_mission(event, 11, 4).forEach(builder => {
        builder
            .itemInputs(
                "64x gtceu:gravi_star",
                "64x gtceu:gravi_star",
                "64x gtceu:gravi_star",
                "64x gtceu:gravi_star",
                "kubejs:corrupted_universe_data"
            )
            .itemOutputs(
                "64x kubejs:quasi_stable_neutron_star",
                "64x kubejs:quasi_stable_neutron_star",
                "64x kubejs:quasi_stable_neutron_star",
                "64x kubejs:quasi_stable_neutron_star",
                "64x kubejs:quasi_stable_neutron_star",
                "64x kubejs:quasi_stable_neutron_star",
                "64x kubejs:quasi_stable_neutron_star",
                "64x kubejs:quasi_stable_neutron_star"
            )
    })

    microverse_mission(event, 11, 4).forEach(builder => {
        builder
            .itemInputs(
                "16x gtceu:holmium_block",
                "8x gtceu:network_switch",
                "8x gtceu:data_bank",
                "16x gtceu:advanced_data_access_hatch",
                "16x gtceu:computation_receiver_hatch",
                "64x kubejs:stellar_creation_data"
            )
            .itemOutputs("kubejs:creative_computation_data")
    })

    microverse_mission(event, 12, 4).forEach(builder => {
        builder
            .itemInputs("64x gtceu:infinity_ingot", "4x kubejs:universe_creation_data")
            .itemOutputs("64x gtceu:monium_ingot")
    })

    microverse_mission(event, 12, 4).forEach(builder => {
        builder
            .itemInputs(
                "16x gtceu:eltz_block",
                "4x gtceu:max_battery",
                "2x solarflux:sp_custom_infinity",
                "gtceu:uiv_4096a_laser_source_hatch",
                "4x kubejs:universe_creation_data",
                "64x kubejs:stellar_creation_data",
                "64x kubejs:stellar_creation_data",
                "64x kubejs:stellar_creation_data"
            )
            .itemOutputs("kubejs:creative_energy_data")
    })

    microverse_mission(event, 12, 4, undefined, GTValues.VA[GTValues.UXV]).forEach(builder => {
        builder
            .itemInputs("8x kubejs:timeless_monic_heavy_plating", "4x kubejs:universe_creation_data", "2x kubejs:shattered_universe_data", "2x kubejs:corrupted_universe_data")
            .itemOutputs("4x kubejs:causality_exempt_monic_heavy_plating")
    })
})
