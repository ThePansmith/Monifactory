ServerEvents.recipes(event => {
    if (isHardMode) {
        basic_microverse_mission(event, "2half", 40, GTValues.VHA, GTValues.IV, 100, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                'minecraft:oak_sapling'
            )
            .inputFluids('minecraft:lava 4000')
            .itemOutputs(
                '64x minecraft:bone',
                '64x minecraft:bone',
                '64x minecraft:bone',
                '64x minecraft:bone',
                '64x minecraft:rotten_flesh',
                '64x minecraft:rotten_flesh',
                '64x minecraft:rotten_flesh',
                '64x minecraft:rotten_flesh',
                '64x minecraft:gunpowder',
                '64x minecraft:gunpowder',
                '64x minecraft:slime_block',
                '64x kubejs:guardian_scale'
            )
        })

        advanced_microverse_mission(event, "4half", 50, GTValues.VHA, GTValues.IV, 100, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                'minecraft:netherrack'
            )
            .itemOutputs(
                '50x minecraft:blaze_rod',
                '50x minecraft:blaze_rod',
                '50x thermal:blizz_rod',
                '50x thermal:blizz_rod',
                '50x thermal:blitz_rod',
                '50x thermal:blitz_rod',
                '50x thermal:basalz_rod',
                '50x thermal:basalz_rod',
                '64x minecraft:ghast_tear',
                '64x kubejs:wither_bone',
                '64x kubejs:wither_bone',
                '64x kubejs:wither_bone', // drops of evil aren't in the pack
                '64x minecraft:magma_cream',
                '64x minecraft:magma_cream'
            )
        })

        advanced_microverse_mission(event, "4half", 60, GTValues.VHA, GTValues.IV, 100, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                'minecraft:end_stone'
            )
            .itemOutputs(
                '48x enderio:enderman_head',
                '64x gtceu:ender_pearl_block',
                '64x minecraft:shulker_shell',
                '64x minecraft:shulker_shell' // shulker pearls aren't in the pack
            )
        })

        advanced_microverse_mission(event, "4half", 100, GTValues.VHA, GTValues.IV, 100, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                '16x minecraft:ender_eye'
            )
            .itemOutputs(
                '64x kubejs:dragon_lair_data',
                '64x kubejs:dragon_lair_data',
                '64x kubejs:dragon_lair_data',
                '64x kubejs:dragon_lair_data',
                '64x minecraft:dragon_breath',
                '64x kubejs:ender_dragon_scale',
            )
        })

        advanced_microverse_mission(event, "4half", 100, GTValues.VHA, GTValues.IV, 100, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '16x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                '8x kubejs:dragon_lair_data'
            )
            .itemOutputs(
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

        advanced_microverse_mission(event, "4half", 100, GTValues.VHA, GTValues.IV, 100, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                '64x kubejs:wither_bone'
            )
            .itemOutputs(
                '64x kubejs:wither_realm_data',
                '64x kubejs:wither_realm_data',
                '48x gtceu:nether_star_block'
            )
        })

        advanced_microverse_mission(event, "4half", 100, GTValues.VHA, GTValues.IV, 100, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                '16x minecraft:sculk_catalyst'
            )
            .itemOutputs(
                '64x kubejs:deep_dark_data',
                '64x kubejs:deep_dark_data',
                '32x kubejs:warden_horn'
            )
        })

        advanced_microverse_ii_mission(event, 6, 100, GTValues.VHA, GTValues.IV, 100, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '16x kubejs:quantum_flux',
                '16x kubejs:stabilized_curium',
                '8x gtceu:manyullyn_ingot',
                '4x gtceu:void_empowered_block'
            )
            .itemOutputs(
                'minecraft:sculk_catalyst'
            )
        })

        advanced_microverse_ii_mission(event, "8half", 450, GTValues.VHA, GTValues.UV, 100, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x gtceu:neutron_reflector',
                '24x gtceu:naquadah_block',
                'kubejs:warden_horn'
            )
            .itemOutputs(
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore'
            )
        })

        advanced_microverse_ii_mission(event, "8half", 450, GTValues.VHA, GTValues.UV, 100, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:gem_sensor',
                '24x gtceu:naquadah_block',
                'kubejs:warden_horn'
            )
            .itemOutputs(
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore'
            )
        })
    }
})