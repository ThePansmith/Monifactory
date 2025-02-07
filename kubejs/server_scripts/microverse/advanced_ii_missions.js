/**
 * Recipe definitions for advanced microverse projector II missions.
 */
ServerEvents.recipes(event => {
    // T5MM mission
    microverse_mission(event, 5, 3).forEach(builder => {
        builder
            .itemInputs(
                '16x kubejs:quantum_flux',
                '16x kubejs:stabilized_americium',
                'kubejs:microversal_alchemy_kit',
                '4x gtceu:uhv_electric_pump',
                '8x kubejs:shattered_star_data'
            )
            .itemOutputs('32x kubejs:stabilized_oganesson')
    })

    // T7MM missions
    microverse_mission(event, 7, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                '64x gtceu:dilithium_gem',
                '3x kubejs:gem_sensor',
                '64x kubejs:deep_dark_data',
                '64x kubejs:deep_dark_data',
                '64x kubejs:deep_dark_data'
            )
            .itemOutputs('kubejs:lair_of_the_warden_data')
    })

    microverse_mission(event, 7, 3, 240, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                '16x kubejs:quantum_flux',
                '64x gtceu:dilithium_gem',
                'kubejs:blasting_kit',
                '16x kubejs:deep_dark_data'
            )
            .itemOutputs(
                '64x minecraft:sculk_catalyst',
                '64x minecraft:gold_block',
                '64x gtceu:silver_block',
                '64x minecraft:diamond_block',
                '32x gtceu:platinum_block',
                '8x gtceu:ruthenium_block'
            )
    })

    microverse_mission(event, 7, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                '16x kubejs:quantum_flux',
                '64x gtceu:dilithium_gem',
                '4x minecraft:sculk_catalyst',
                '24x kubejs:deep_dark_data'
            )
            .itemOutputs(
                '16x kubejs:warden_heart',
                '48x minecraft:sculk_catalyst',
                '64x kubejs:warden_horn',
                '64x kubejs:warden_horn',
                '64x kubejs:warden_horn',
            )
    })

    // T8MM missions
    microverse_mission(event, 8, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                '32x kubejs:quantum_flux',
                '64x gtceu:dilithium_gem',
                '8x minecraft:sculk_catalyst',
                'kubejs:lair_of_the_warden_data'
            )
            .itemOutputs(
                '6x kubejs:hadal_shard',
                '64x minecraft:sculk_catalyst',
                '48x minecraft:sculk_catalyst',
                '64x kubejs:warden_horn',
                '64x kubejs:warden_horn',
                '64x kubejs:warden_horn',
                '64x kubejs:warden_horn',
                '64x kubejs:warden_horn'
            )
    })

    microverse_mission(event, 8, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                '32x kubejs:quantum_flux',
                '64x gtceu:dilithium_gem',
                '32x kubejs:dragon_lair_data'
            )
            .itemOutputs(
                '64x minecraft:dragon_egg',
                '64x minecraft:dragon_egg',
                '64x minecraft:dragon_egg',
                '64x kubejs:ender_dragon_scale',
                '64x kubejs:ender_dragon_scale',
                '64x kubejs:ender_dragon_scale',
                '64x minecraft:dragon_breath',
                '64x minecraft:dragon_breath'
            )
    })

    microverse_mission(event, 8, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                '32x kubejs:quantum_flux',
                '64x gtceu:dilithium_gem',
                '64x kubejs:wither_realm_data'
            )
            .itemOutputs(
                '16x gtceu:quantum_star',
                '32x gtceu:quantum_eye',
                '1x gtceu:gravi_star',
                '8x gtceu_neutronium_ingot'
            )
    })

    // T9MM missions
    microverse_mission(event, 9, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                '4x gtceu:cryococcus_block',
                '64x kubejs:stellar_creation_data',
                '64x kubejs:stellar_creation_data',
                '64x kubejs:stellar_creation_data',
                '64x kubejs:stellar_creation_data'
            )
            .itemOutputs('kubejs:universe_creation_data')
    })

    microverse_mission(event, 9, 3, undefined, undefined, 50).forEach(builder => {
        builder
            .itemInputs('8x gtceu:neutron_reflector', '4x gtceu:cryococcus_block', 'kubejs:stellar_creation_data')
            .itemOutputs('64x gtceu:neutronium_ingot')
    })

    microverse_mission(event, 9, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs('64x gtceu:gravi_star', '64x gtceu:gravi_star', '16x kubejs:shattered_star_data')
            .itemOutputs('32x kubejs:quasi_stable_neutron_star')
    })

    // T10MM missions
    microverse_mission(event, 10, 3, undefined, undefined, 50).forEach(builder => {
        builder
            .itemInputs('8x gtceu:cryococcus_block', 'kubejs:universe_creation_data')
            .itemOutputs('kubejs:heart_of_a_universe')
    })

    microverse_mission(event, 10, 3, undefined, undefined, 0).forEach(builder => {
        builder
            .itemInputs('16x #forge:storage_blocks/activated_netherite', '64x kubejs:stellar_creation_data')
            .itemOutputs('kubejs:creative_storage_data')
    })
})
