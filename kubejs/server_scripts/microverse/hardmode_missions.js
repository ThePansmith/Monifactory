/**
 * Recipe definitions for Hard Mode and Expert Mode-exclusive microverse projector missions.
 */
ServerEvents.recipes(event => {
    if (isHardMode) {
        basic_microverse_mission(event, "2half", 40, GTValues.VHA, GTValues.IV, 25, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                'minecraft:oak_sapling'
            )
            .inputFluids('minecraft:lava 4000')
            .itemOutputs(
                '64x minecraft:bone',
                '64x minecraft:bone',
                '64x minecraft:rotten_flesh',
                '64x minecraft:rotten_flesh',
                '64x minecraft:gunpowder'
            )
        })

        basic_microverse_mission(event, "2half", 40, GTValues.VHA, GTValues.IV, 25, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                'minecraft:oak_sapling'
            )
            .inputFluids('minecraft:lava 4000')
            .itemOutputs(
                '64x minecraft:slime_block',
                '48x kubejs:guardian_scale'
            )
        })

        basic_microverse_mission(event, "2half", 50, GTValues.VHA, GTValues.IV, 25, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                'minecraft:netherrack'
            )
            .inputFluids('minecraft:lava 8000')
            .itemOutputs(
                '32x minecraft:ghast_tear',
                '64x kubejs:wither_bone',
                '32x kubejs:wither_bone', // drops of evil aren't in the pack
                '64x minecraft:magma_cream'
            )
        })

        basic_microverse_mission(event, "2half", 50, GTValues.VHA, GTValues.IV, 25, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                'minecraft:redstone_block'
            )
            .inputFluids('minecraft:lava 8000')
            .itemOutputs(
                '50x minecraft:blaze_rod',
                '50x thermal:blizz_rod',
                '50x thermal:blitz_rod',
                '50x thermal:basalz_rod'
            )
        })

        basic_microverse_mission(event, "2half", 60, GTValues.VHA, GTValues.IV, 30, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                'minecraft:end_stone'
            )
            .inputFluids('minecraft:lava 12000')
            .itemOutputs(
                '24x enderio:enderman_head',
                '32x gtceu:ender_pearl_block',
                '64x minecraft:shulker_shell' // shulker pearls aren't in the pack
            )
        })

        advanced_microverse_mission(event, "4half", 100, GTValues.VHA, GTValues.IV, 40, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                '32x kubejs:aerotheum_dust',
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

        advanced_microverse_mission(event, "4half", 100, GTValues.VHA, GTValues.IV, 60, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                '32x kubejs:aerotheum_dust',
                '4x kubejs:dragon_lair_data'
            )
            .itemOutputs(
                '64x kubejs:ender_dragon_scale',
                '64x kubejs:ender_dragon_scale',
                '64x kubejs:ender_dragon_scale',
                '64x minecraft:dragon_breath',
                '64x minecraft:dragon_breath'
            )
        })

        advanced_microverse_mission(event, "4half", 100, GTValues.VHA, GTValues.IV, 40, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '8x kubejs:quantum_flux',
                '32x kubejs:aerotheum_dust',
                '64x kubejs:wither_bone'
            )
            .itemOutputs(
                '64x kubejs:wither_realm_data',
                '64x kubejs:wither_realm_data',
                '48x gtceu:nether_star_block'
            )
        })

        advanced_microverse_mission(event, "4half", 100, GTValues.VHA, GTValues.IV, 40, GTValues.MAX).forEach(builder => {
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

        advanced_microverse_ii_mission(event, "8half", 450, GTValues.VHA, GTValues.UV, 20, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '4x gtceu:neutron_reflector',
                '12x gtceu:naquadah_block',
                'kubejs:warden_horn'
            )
            .itemOutputs(
                '64x gtceu:raw_darmstadtite',
                '64x gtceu:raw_darmstadtite',
                '64x gtceu:raw_darmstadtite',
                '64x gtceu:raw_darmstadtite',
                '64x gtceu:raw_darmstadtite',
                '64x gtceu:raw_darmstadtite',
                '64x gtceu:raw_darmstadtite',
                '64x gtceu:raw_darmstadtite'
            )
        })

        advanced_microverse_ii_mission(event, "8half", 450, GTValues.VHA, GTValues.UV, 20, GTValues.MAX).forEach(builder => {
            builder
            .itemInputs(
                '4x kubejs:gem_sensor',
                '12x gtceu:naquadah_block',
                'kubejs:warden_horn'
            )
            .itemOutputs(
                '64x gtceu:raw_dulysite',
                '64x gtceu:raw_dulysite',
                '64x gtceu:raw_dulysite',
                '64x gtceu:raw_dulysite',
                '64x gtceu:raw_dulysite',
                '64x gtceu:raw_dulysite'
            )
        })
    }
})