ServerEvents.recipes(event => {
    // T4MM missions
    advanced_microverse_mission(event, 4, 40, GTValues.VHA, GTValues.IV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x kubejs:quantum_flux', '4x kubejs:wither_realm_data', '64x kubejs:petrotheum_dust')
        .itemOutputs(
            '64x gtceu:netherrack_pentlandite_ore',
            '64x gtceu:netherrack_pentlandite_ore',
            '64x gtceu:netherrack_chalcocite_ore',
            '64x gtceu:netherrack_chalcocite_ore',
            '64x gtceu:netherrack_cooperite_ore',
            '64x gtceu:netherrack_cooperite_ore',
            '64x gtceu:rock_salt_dust',
            '64x gtceu:rock_salt_dust'
        )
    })

    advanced_microverse_mission(event, 4, 40, GTValues.VHA, GTValues.IV, 40, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x kubejs:quantum_flux', '64x kubejs:petrotheum_dust')
        .itemOutputs(
            '64x kubejs:dense_iron_ore',
            '64x kubejs:dense_copper_ore',
            '32x kubejs:dense_gold_ore'
        )
    })

    advanced_microverse_mission(event, 4, 40, GTValues.VHA, GTValues.IV, 40, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x kubejs:quantum_flux', 'kubejs:gem_sensor', '64x kubejs:petrotheum_dust')
        .itemOutputs(
            '64x kubejs:dense_diamond_ore',
            '32x kubejs:dense_lapis_ore',
            '32x kubejs:dense_coal_ore',
            '16x kubejs:dense_emerald_ore',
            '16x kubejs:dense_redstone_ore'
        )
    })

    advanced_microverse_mission(event, 4, 40, GTValues.VHA, GTValues.IV, 40, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('8x kubejs:quantum_flux', 'gtceu:advanced_power_thruster', '64x kubejs:petrotheum_dust')
        .itemOutputs(
            '64x kubejs:dense_oilsands_ore',
            '64x kubejs:dense_oilsands_ore',
            '32x kubejs:compressed_infinity_dust_block'
        )
    })

    advanced_microverse_mission(event, 4, 30, GTValues.VA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', '64x kubejs:solidified_chlorine', '64x kubejs:petrotheum_dust')
        .itemOutputs(
            '64x kubejs:solidified_bromine'
        )
    })

    // T5MM missions
    advanced_microverse_mission(event, 5, 50, GTValues.VA, GTValues.IV, 15, GTValues.MAX).forEach(builder => {
        if(isNormalMode) {
            builder
            .itemInputs('16x kubejs:quantum_flux', '32x kubejs:stabilized_plutonium')
            .itemOutputs(
                '64x gtceu:endstone_cooperite_ore',
                '64x gtceu:endstone_cooperite_ore',
                '64x gtceu:naquadah_ore',
                '64x gtceu:naquadah_ore',
                '64x gtceu:naquadah_ore',
                '48x gtceu:kaemanite_ore'
            )
        } else {
            builder
            .itemInputs('16x kubejs:quantum_flux', '32x kubejs:stabilized_plutonium')
            .itemOutputs(
                '64x gtceu:pollucite_ore',
                '64x gtceu:pollucite_ore',
                '64x gtceu:pollucite_ore',
                '64x gtceu:snowchestite_ore',
                '64x gtceu:snowchestite_ore',
                '64x gtceu:snowchestite_ore',
                '64x gtceu:snowchestite_ore',
                '48x gtceu:kaemanite_ore'
            )
        }
    })

    advanced_microverse_mission(event, 5, 50, GTValues.VA, GTValues.IV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x kubejs:quantum_flux', '32x kubejs:stabilized_uranium')
        .itemOutputs(
            '64x gtceu:palladium_ore',
            '64x gtceu:realgar_ore',
            '64x gtceu:monazite_ore',
            '64x gtceu:molybdenite_ore',
            '16x gtceu:osmiridiumyes_ore'
        )
    })

    advanced_microverse_mission(event, 5, 50, GTValues.VA, GTValues.IV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x kubejs:quantum_flux', '32x kubejs:stabilized_uranium')
        .itemOutputs(
            '64x gtceu:uraninite_ore',
            '64x gtceu:bastnasite_ore',
            '64x gtceu:sphalerite_ore',
            '64x gtceu:ender_pearl_block',
            '64x gtceu:boron_dust',
            '64x gtceu:beryllium_ore',
            '32x gtceu:fluorite_ore'
        )
    })

    // T6MM missions
    advanced_microverse_mission(event, 6, 60, GTValues.VHA, GTValues.LuV, 20, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x kubejs:quantum_flux', '32x kubejs:stabilized_uranium', '16x kubejs:wither_realm_data')
        .itemOutputs(
            '64x gtceu:uraninite_ore',
            '64x gtceu:uraninite_ore',
            '64x gtceu:uraninite_ore',
            '64x gtceu:uraninite_ore',
            '64x gtceu:osmiridiumyes_ore',
            '64x gtceu:osmiridiumyes_ore',
            '64x gtceu:iridosmineyes_ore',
            '64x gtceu:iridosmineyes_ore',
            '64x gtceu:iridosmineyes_ore'
        )
    })

    advanced_microverse_mission(event, 6, 60, GTValues.VHA, GTValues.LuV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs(
            '8x kubejs:stabilized_californium',
            'kubejs:gem_sensor',
            '8x kubejs:quantum_flux',
        )
        .itemOutputs(
            '64x gtceu:diamond_ore',
            '64x gtceu:diamond_ore',
            '32x gtceu:diamond_ore',
            '64x gtceu:ruby_ore',
            '64x gtceu:ruby_ore',
            '64x gtceu:cinnabar_ore'
        )
    })

    advanced_microverse_mission(event, 6, 60, GTValues.VHA, GTValues.LuV, 75, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x kubejs:quantum_flux', '32x kubejs:stabilized_plutonium', '64x kubejs:wither_realm_data')
        .itemOutputs('32x kubejs:stabilized_einsteinium')
    })

    advanced_microverse_mission(event, 6, 60, GTValues.VHA, GTValues.LuV, 75, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x kubejs:quantum_flux', '32x kubejs:stabilized_plutonium', '16x kubejs:dragon_lair_data')
        .itemOutputs(
            '64x minecraft:dragon_egg',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x minecraft:dragon_breath'
        )
    })
})