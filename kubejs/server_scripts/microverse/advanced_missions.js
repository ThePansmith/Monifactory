/**
 * Recipe definitions for advanced microverse projector missions.
 */
ServerEvents.recipes(event => {
    // T4MM missions
    advanced_microverse_mission(event, 4, 40, GTValues.VHA, GTValues.IV, 25, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x kubejs:quantum_flux')
        .itemInputs('16x kubejs:petrotheum_dust')
        .itemInputs('gtceu:cobalt_brass_drill_head')
        .itemInputs('4x kubejs:wither_realm_data')
        .itemOutputs(
            '64x gtceu:raw_pentlandite',
            '64x gtceu:raw_pentlandite',
            '64x gtceu:raw_chalcocite',
            '64x gtceu:raw_chalcocite',
            '64x gtceu:raw_cooperite',
            '64x gtceu:raw_cooperite',
            '64x gtceu:rock_salt_dust'
        )
    })

    advanced_microverse_mission(event, 4, 40, GTValues.VHA, GTValues.IV, 30, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x kubejs:quantum_flux')
        .itemInputs('64x kubejs:petrotheum_dust')
        .itemInputs('gtceu:steel_drill_head')
        .itemOutputs(
            '64x kubejs:dense_iron_ore',
            '64x kubejs:dense_copper_ore',
            '32x kubejs:dense_gold_ore'
        )
    })

    advanced_microverse_mission(event, 4, 40, GTValues.VHA, GTValues.IV, 30, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x kubejs:quantum_flux')
        .itemInputs('64x kubejs:petrotheum_dust')
        .itemInputs('gtceu:diamond_drill_head')
        .itemInputs('kubejs:gem_sensor')
        .itemOutputs(
            '64x kubejs:dense_diamond_ore',
            '32x kubejs:dense_lapis_ore',
            '32x kubejs:dense_coal_ore',
            '16x kubejs:dense_emerald_ore',
            '16x kubejs:dense_redstone_ore'
        )
    })

    advanced_microverse_mission(event, 4, 40, GTValues.VHA, GTValues.IV, 30, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x kubejs:quantum_flux')
        .itemInputs('64x kubejs:petrotheum_dust')
        .itemInputs('gtceu:damascus_steel_drill_head')
        .itemOutputs(
            '64x kubejs:dense_oilsands_ore',
            '64x kubejs:dense_oilsands_ore',
            '32x kubejs:compressed_infinity_dust_block'
        )
    })

    advanced_microverse_mission(event, 4, 30, GTValues.VHA, GTValues.IV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux')
        .itemInputs('64x kubejs:petrotheum_dust')
        .itemInputs(
            '64x kubejs:solidified_chlorine'
        )
        .itemOutputs(
            '64x kubejs:solidified_bromine'
        )
    })

    advanced_microverse_mission(event, 4, 40, GTValues.VHA, GTValues.IV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x kubejs:quantum_flux')
        .itemInputs('64x kubejs:petrotheum_dust')
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
    advanced_microverse_mission(event, 5, 50, GTValues.VA, GTValues.IV, 25, GTValues.MAX).forEach(builder => {
        if(isNormalMode) {
            builder
            .itemInputs('16x kubejs:quantum_flux')
            .itemInputs('32x kubejs:stabilized_plutonium')
            .itemInputs('gtceu:hsse_drill_head')
            .itemOutputs(
                '64x gtceu:raw_cooperite',
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
            .itemInputs('16x kubejs:quantum_flux')
            .itemInputs('32x kubejs:stabilized_plutonium')
            .itemInputs('gtceu:hsse_drill_head')
            .itemOutputs(
                '64x gtceu:raw_pollucite',
                '64x gtceu:raw_pollucite',
                '64x gtceu:raw_pollucite',
                '64x gtceu:raw_snowchestite',
                '64x gtceu:raw_snowchestite',
                '64x gtceu:raw_snowchestite',
                '64x gtceu:raw_snowchestite',
                '48x gtceu:raw_kaemanite'
            )
        }
    })

    advanced_microverse_mission(event, 5, 50, GTValues.VA, GTValues.IV, 20, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x kubejs:quantum_flux')
        .itemInputs('32x kubejs:stabilized_uranium')
        .itemInputs('gtceu:red_steel_drill_head')
        .itemOutputs(
            '64x gtceu:raw_palladium',
            '64x gtceu:raw_realgar',
            '64x gtceu:raw_monazite',
            '64x gtceu:raw_molybdenite',
            '32x gtceu:raw_powellite',
            '16x gtceu:raw_osmiridiumyes'
        )
    })

    advanced_microverse_mission(event, 5, 50, GTValues.VA, GTValues.IV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x kubejs:quantum_flux')
        .itemInputs('32x kubejs:stabilized_uranium')
        .itemInputs('gtceu:blue_steel_drill_head')
        .itemOutputs(
            '64x gtceu:raw_uraninite',
            '64x gtceu:raw_bastnasite',
            '64x gtceu:raw_sphalerite',
            '64x gtceu:raw_sphalerite',
            '64x gtceu:ender_pearl_block',
            '64x gtceu:boron_dust',
            '64x gtceu:raw_beryllium',
            '32x gtceu:raw_fluorite'
        )
    })

    // T6MM missions
    advanced_microverse_mission(event, 6, 60, GTValues.VHA, GTValues.LuV, 25, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x kubejs:quantum_flux')
        .itemInputs('32x kubejs:stabilized_uranium')
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

    advanced_microverse_mission(event, 6, 60, GTValues.VHA, GTValues.LuV, 75, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x kubejs:quantum_flux')
        .itemInputs('32x kubejs:stabilized_plutonium')
        .itemInputs('64x kubejs:wither_realm_data')
        .itemOutputs(
            '32x kubejs:stabilized_einsteinium'
        )
    })

    advanced_microverse_mission(event, 6, 60, GTValues.VHA, GTValues.LuV, 35, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x kubejs:quantum_flux')
        .itemInputs('32x kubejs:stabilized_curium')
        .itemInputs('gtceu:tungsten_carbide_drill_head')
        .itemInputs('64x kubejs:wither_realm_data')
        .itemOutputs(
            '64x gtceu:raw_nether_quartz',
            '64x gtceu:raw_nether_quartz',
            '64x gtceu:raw_nether_quartz',
            '64x minecraft:ancient_debris',
            '32x minecraft:ancient_debris',
        )
    })

    advanced_microverse_mission(event, 6, 60, GTValues.VHA, GTValues.LuV, 75, GTValues.MAX).forEach(builder => {
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