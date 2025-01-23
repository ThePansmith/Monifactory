ServerEvents.recipes(event => {
    // T2MM mission
    advanced_microverse_ii_mission(event, 2, 30, GTValues.VHA, GTValues.ZPM, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('gtceu:advanced_power_thruster', 'kubejs:gem_sensor', '64x kubejs:quantum_flux')
        .itemOutputs('64x gtceu:endstone_dilithium_ore',
            '64x gtceu:endstone_dilithium_ore',
            '64x gtceu:endstone_dilithium_ore',
            '64x gtceu:endstone_dilithium_ore',
            '64x gtceu:endstone_certus_quartz_ore',
            '64x gtceu:endstone_nether_quartz_ore',
            '64x gtceu:endstone_monazite_ore',
        )
    })

    // T5MM mission
    advanced_microverse_ii_mission(event, 5, 45, GTValues.VA, GTValues.ZPM, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x gtceu:uhv_electric_pump', '16x kubejs:stabilized_americium', '16x kubejs:quantum_flux', '8x kubejs:shattered_star_data',)
        .itemOutputs('32x kubejs:stabilized_oganesson')
    })

    // T7MM missions
    advanced_microverse_ii_mission(event, 7, 75, GTValues.VA, GTValues.LuV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs(
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            'kubejs:gem_sensor',
            '64x kubejs:deep_dark_data',
            '64x kubejs:deep_dark_data',
            '64x kubejs:deep_dark_data',
            '64x kubejs:deep_dark_data'
        )
        .itemOutputs('kubejs:lair_of_the_warden_data')
    })

    advanced_microverse_ii_mission(event, 7, 75, GTValues.VA, GTValues.LuV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs(
            '32x kubejs:quantum_flux',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '32x kubejs:deep_dark_data'
        )
        .itemOutputs(
            '32x kubejs:warden_heart',
            '64x minecraft:sculk_catalyst',
            '64x minecraft:sculk_catalyst',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x minecraft:gold_block',
            '64x minecraft:gold_block',
            '64x minecraft:gold_block',
            '64x gtceu:silver_block',
            '64x gtceu:silver_block',
            '64x minecraft:diamond_block',
            '64x minecraft:diamond_block',
            '64x gtceu:platinum_block',
            '16x gtceu:ruthenium_block'
        )
    })

    // T8MM missions
    advanced_microverse_ii_mission(event, 8, 75, GTValues.VHA, GTValues.ZPM, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs(
            '64x kubejs:quantum_flux',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            'kubejs:lair_of_the_warden_data'
        )
        .itemOutputs(
            '4x kubejs:hadal_shard',
            '64x minecraft:sculk_catalyst',
            '64x minecraft:sculk_catalyst',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn'
        )
    })

    advanced_microverse_ii_mission(event, 8, 90, GTValues.VHA, GTValues.ZPM, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs(
            '64x kubejs:quantum_flux',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dragon_lair_data'
        )
        .itemOutputs(
            '64x minecraft:dragon_egg',
            '64x minecraft:dragon_egg',
            '64x minecraft:dragon_egg',
            '64x minecraft:dragon_egg',
            '64x minecraft:dragon_egg',
            '64x minecraft:dragon_egg',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x minecraft:dragon_breath',
            '64x minecraft:dragon_breath',
            '64x minecraft:dragon_breath',
            '64x minecraft:dragon_breath'
        )
    })

    advanced_microverse_ii_mission(event, 8, 100, GTValues.VHA, GTValues.ZPM, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs(
            '64x kubejs:quantum_flux',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:wither_realm_data',
            '64x kubejs:wither_realm_data'
        )
        .itemOutputs(
            '32x gtceu:quantum_star',
            '64x gtceu:quantum_eye',
            '16x gtceu:neutronium_ingot',
            'gtceu:gravi_star'
        )
    })

    // T9MM missions
    advanced_microverse_ii_mission(event, 9, 150, GTValues.VA, GTValues.UV, 100, GTValues.MAX).forEach(builder => {
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

    advanced_microverse_ii_mission(event, 9, 150, GTValues.VA, GTValues.UV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x gtceu:neutron_reflector', '4x gtceu:cryococcus_block', 'kubejs:stellar_creation_data')
        .itemOutputs('64x gtceu:neutronium_ingot', '32x gtceu:neutronium_ingot')
    })

    advanced_microverse_ii_mission(event, 9, 150, GTValues.VHA, GTValues.UV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('64x gtceu:gravi_star', '64x gtceu:gravi_star', '16x kubejs:shattered_star_data')
        .itemOutputs('32x kubejs:quasi_stable_neutron_star')
    })

    // T10MM missions
    advanced_microverse_ii_mission(event, 10, 300, GTValues.VA, GTValues.UHV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x gtceu:cryococcus_block', 'kubejs:universe_creation_data')
        .itemOutputs('kubejs:heart_of_a_universe')
    })

    advanced_microverse_ii_mission(event, 10, 150, GTValues.VA, GTValues.UHV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x #forge:storage_blocks/activated_netherite', '64x kubejs:stellar_creation_data')
        .itemOutputs('kubejs:creative_storage_data')
    })
})