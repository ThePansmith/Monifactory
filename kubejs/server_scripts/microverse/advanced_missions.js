/**
 * Recipe definitions for advanced microverse projector missions.
 */
ServerEvents.recipes(event => {
    // T4MM missions
    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs('4x kubejs:quantum_flux')
            .itemInputs('16x kubejs:petrotheum_dust')
            .itemInputs('kubejs:advanced_drilling_kit')
            .itemInputs('gtceu:cobalt_brass_drill_head')
            .itemInputs('4x kubejs:wither_realm_data')
            .itemOutputs(
                '64x gtceu:raw_cooperite',
                '64x gtceu:raw_cooperite',
                '64x gtceu:raw_bornite',
                '64x gtceu:raw_pentlandite',
                '64x gtceu:raw_pentlandite',
                '64x gtceu:raw_chalcocite',
                '64x gtceu:raw_chalcocite'
            )
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs('4x kubejs:quantum_flux')
            .itemInputs('16x kubejs:petrotheum_dust')
            .itemInputs('kubejs:advanced_drilling_kit')
            .itemInputs('gtceu:steel_drill_head')
            .itemOutputs(
                '32x kubejs:dense_iron_ore',
                '32x kubejs:dense_copper_ore',
                '16x kubejs:dense_gold_ore'
            )
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs('4x kubejs:quantum_flux')
            .itemInputs('16x kubejs:petrotheum_dust')
            .itemInputs('kubejs:advanced_drilling_kit')
            .itemInputs('gtceu:diamond_drill_head')
            .itemInputs('2x kubejs:gem_sensor')
            .itemOutputs(
                '32x kubejs:dense_diamond_ore',
                '16x kubejs:dense_lapis_ore',
                '16x kubejs:dense_coal_ore',
                '8x kubejs:dense_emerald_ore',
                '8x kubejs:dense_redstone_ore'
            )
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs('4x kubejs:quantum_flux')
            .itemInputs('16x kubejs:petrotheum_dust')
            .itemInputs('kubejs:advanced_drilling_kit')
            .itemInputs('gtceu:damascus_steel_drill_head')
            .itemOutputs(
                '64x kubejs:dense_oilsands_ore',
                '16x kubejs:compressed_infinity_dust_block'
            )
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs('4x kubejs:quantum_flux')
            .itemInputs('kubejs:microversal_alchemy_kit')
            .itemInputs('16x kubejs:petrotheum_dust')
            .itemInputs(
                '64x kubejs:solidified_chlorine'
            )
            .itemOutputs(
                '64x kubejs:solidified_bromine'
            )
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs('4x kubejs:quantum_flux')
            .itemInputs('16x kubejs:petrotheum_dust')
            .itemInputs('kubejs:advanced_drilling_kit')
            .itemInputs('gtceu:wrought_iron_drill_head')
            .itemOutputs(
                '64x gtceu:raw_thorium',
                '64x gtceu:raw_thorium',
                '64x gtceu:raw_thorium',
                '64x gtceu:raw_thorium',
                '32x gtceu:raw_uraninite',
            )
    })

    // T5MM missions
    microverse_mission(event, 5, 2).forEach(builder => {
        if(isNormalMode) {
            builder
                .itemInputs('8x kubejs:quantum_flux')
                .itemInputs('16x kubejs:stabilized_plutonium')
                .itemInputs('kubejs:advanced_drilling_kit')
                .itemInputs('gtceu:hsse_drill_head')
                .itemOutputs(
                    '64x gtceu:raw_cooperite',
                    '64x gtceu:raw_cooperite',
                    '64x gtceu:raw_cooperite',
                    '64x gtceu:raw_naquadah',
                    '64x gtceu:raw_naquadah',
                    '64x gtceu:raw_naquadah',
                    '48x gtceu:raw_kaemanite'
                )
        } else {
            builder
                .itemInputs('8x kubejs:quantum_flux')
                .itemInputs('16x kubejs:stabilized_plutonium')
                .itemInputs('kubejs:advanced_drilling_kit')
                .itemInputs('gtceu:hsse_drill_head')
                .itemOutputs(
                    '64x gtceu:raw_pollucite',
                    '64x gtceu:raw_pollucite',
                    '32x gtceu:raw_pollucite',
                    '64x gtceu:raw_snowchestite',
                    '64x gtceu:raw_snowchestite',
                    '64x gtceu:raw_snowchestite',
                    '64x gtceu:raw_snowchestite',
                    '48x gtceu:raw_kaemanite'
                )
        }
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs('8x kubejs:quantum_flux')
            .itemInputs('16x kubejs:stabilized_uranium')
            .itemInputs('kubejs:advanced_drilling_kit')
            .itemInputs('gtceu:red_steel_drill_head')
            .itemOutputs(
                '64x gtceu:raw_bastnasite',
                '64x gtceu:raw_palladium',
                '64x gtceu:raw_monazite',
                '64x gtceu:raw_molybdenite',
                '32x gtceu:raw_powellite',
                '16x gtceu:raw_osmiridiumyes'
            )
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs('8x kubejs:quantum_flux')
            .itemInputs('16x kubejs:stabilized_uranium')
            .itemInputs('kubejs:advanced_drilling_kit')
            .itemInputs('gtceu:blue_steel_drill_head')
            .itemOutputs(
                '64x gtceu:raw_realgar',
                '64x gtceu:raw_sphalerite',
                '64x gtceu:raw_sphalerite',
                '64x gtceu:ender_pearl_block',
                '64x gtceu:boron_dust',
                '64x gtceu:raw_beryllium',
                '32x gtceu:raw_fluorite'
            )
    })

    // T6MM missions
    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs('16x kubejs:quantum_flux')
            .itemInputs('32x kubejs:stabilized_uranium')
            .itemInputs('kubejs:advanced_drilling_kit')
            .itemInputs('gtceu:naquadah_alloy_drill_head')
            .itemInputs('16x kubejs:wither_realm_data')
            .itemOutputs(
                '64x gtceu:raw_uraninite',
                '64x gtceu:raw_uraninite',
                '64x gtceu:raw_osmiridiumyes',
                '64x gtceu:raw_osmiridiumyes',
                '64x gtceu:raw_iridosmineyes',
                '64x gtceu:raw_iridosmineyes',
                '64x gtceu:raw_iridosmineyes'
            )
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs('16x kubejs:quantum_flux')
            .itemInputs('32x kubejs:stabilized_plutonium')
            .itemInputs('kubejs:microversal_alchemy_kit')
            .itemInputs('64x kubejs:wither_realm_data')
            .itemOutputs(
                '32x kubejs:stabilized_einsteinium'
            )
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs('16x kubejs:quantum_flux')
            .itemInputs('32x kubejs:stabilized_curium')
            .itemInputs('kubejs:blasting_kit')
            .itemInputs('64x kubejs:wither_realm_data')
            .itemOutputs(
                '64x gtceu:raw_nether_quartz',
                '64x gtceu:raw_nether_quartz',
                '64x gtceu:raw_nether_quartz',
                '64x minecraft:ancient_debris',
                '64x minecraft:ancient_debris',
                '32x minecraft:ancient_debris',
            )
    })

    microverse_mission(event, 6, 2, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs('16x kubejs:quantum_flux')
            .itemInputs('32x kubejs:stabilized_plutonium')
            .itemInputs('16x kubejs:dragon_lair_data')
            .itemOutputs(
                '64x minecraft:dragon_egg',
                '64x kubejs:ender_dragon_scale',
                '64x kubejs:ender_dragon_scale',
                '64x minecraft:dragon_breath'
            )
    })
})
