/**
 * Recipe definitions for advanced microverse projector II missions.
 */
ServerEvents.recipes(event => {
    // T5MM mission
    microverse_mission(event, 5, 3).forEach(builder => {
        builder
            .itemInputs(
                "16x kubejs:quantum_flux",
                "16x kubejs:stabilized_americium",
                "kubejs:microversal_alchemy_kit",
                "4x gtceu:uhv_electric_pump",
                "8x kubejs:shattered_star_data"
            )
            .itemOutputs("32x kubejs:stabilized_einsteinium")
    })

    // T6MM mission (Previously HM-exclusive, no problem with making it available in NM)
    microverse_mission(event, 6, 3).forEach(builder => {
        builder
            .itemInputs(
                "16x kubejs:quantum_flux",
                "16x kubejs:stabilized_curium",
                "kubejs:microversal_alchemy_kit",
                "8x gtceu:mythril_ingot",
                "4x gtceu:void_empowered_block",
            )
            .itemOutputs(
                "minecraft:sculk_catalyst",
                "20x minecraft:sculk",
                "12x minecraft:sculk_vein"
            )
    })

    // T7MM missions
    microverse_mission(event, 7, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "64x gtceu:dilithium_gem",
                "3x kubejs:gem_sensor",
                "64x kubejs:deep_dark_data",
                "64x kubejs:deep_dark_data",
                "10x minecraft:sculk_catalyst"
            )
            .itemOutputs("kubejs:lair_of_the_warden_data")
    })

    microverse_mission(event, 7, 3, 240, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "16x kubejs:quantum_flux",
                "64x gtceu:dilithium_gem",
                "kubejs:blasting_kit",
                "8x kubejs:deep_dark_data"
            )
            .itemOutputs(
                "12x minecraft:sculk_catalyst",
                "64x minecraft:sculk",
                "40x minecraft:sculk_vein",
                "32x minecraft:gold_block",
                "32x gtceu:silver_block",
                "32x minecraft:diamond_block",
                "16x gtceu:platinum_block",
                "4x gtceu:ruthenium_block"
            )
    })

    microverse_mission(event, 7, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "16x kubejs:quantum_flux",
                "64x gtceu:dilithium_gem",
                "1x minecraft:sculk_catalyst",
                "12x kubejs:deep_dark_data"
            )
            .itemOutputs(
                "16x kubejs:warden_heart",
                "40x minecraft:sculk_catalyst",
                "64x kubejs:warden_horn",
            )
    })

    // T8MM missions
    microverse_mission(event, 8, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "32x kubejs:quantum_flux",
                "64x gtceu:dilithium_gem",
                "4x minecraft:sculk_catalyst",
                "kubejs:lair_of_the_warden_data"
            )
            .itemOutputs(
                "4x kubejs:hadal_shard",
                "64x minecraft:sculk_catalyst",
                "32x minecraft:sculk_catalyst",
                "64x kubejs:warden_horn",
                "64x kubejs:warden_horn",
                "64x kubejs:warden_horn",
                "64x kubejs:warden_horn"
            )
    })

    microverse_mission(event, 8, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "32x kubejs:quantum_flux",
                "64x gtceu:dilithium_gem",
                "16x kubejs:dragon_lair_data"
            )
            .itemOutputs(
                "64x minecraft:dragon_egg",
                "32x minecraft:dragon_egg",
                "64x kubejs:ender_dragon_scale",
                "32x kubejs:ender_dragon_scale",
                "64x minecraft:dragon_breath"
            )
    })

    microverse_mission(event, 8, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "32x kubejs:quantum_flux",
                "64x gtceu:dilithium_gem",
                "32x kubejs:wither_realm_data"
            )
            .itemOutputs(
                "32x gtceu:quantum_star",
                "16x gtceu:quantum_eye",
                "4x gtceu:gravi_star",
                "4x gtceu:neutronium_ingot"
            )
    })

    // T9MM missions
    microverse_mission(event, 9, 3).forEach(builder => {
        builder
            .inputFluids("gtceu:helium_plasma 5000")
            .itemInputs("gtceu:data_module", "gtceu:uv_sensor")
            .itemInputs(
                "64x kubejs:stellar_creation_data",
                "64x kubejs:stellar_creation_data",
                "64x kubejs:stellar_creation_data",
                "64x kubejs:stellar_creation_data"
            )
            .itemOutputs("kubejs:universe_creation_data")
    })

    microverse_mission(event, 9, 3).forEach(builder => {
        builder
            .inputFluids("gtceu:argon_plasma 5000")
            .itemInputs("kubejs:gravitational_amplifier", "kubejs:stellar_creation_data", "6x gtceu:neutron_reflector")
            .itemOutputs("32x gtceu:neutronium_ingot")
    })

    microverse_mission(event, 9, 3).forEach(builder => {
        builder
            .inputFluids("gtceu:oxygen_plasma 10000")
            .itemInputs("kubejs:gravitational_amplifier", "16x kubejs:shattered_star_data", "64x gtceu:gravi_star")
            .itemOutputs("16x kubejs:quasi_stable_neutron_star")
    })

    // T10MM missions
    microverse_mission(event, 10, 3).forEach(builder => {
        builder
            .itemInputs("kubejs:universal_collapse_device", "kubejs:universe_creation_data")
            .itemOutputs("kubejs:heart_of_a_universe")
    })
})
