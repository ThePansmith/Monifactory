ServerEvents.recipes(event => {
    // T1MM missions
    basic_microverse_mission(event, 1, 5, GTValues.VA, GTValues.HV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:ultra_dense_hydrogen')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs('kubejs:stellar_creation_data')
    })

    basic_microverse_mission(event, 1, 25, GTValues.VA, GTValues.HV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux', 'kubejs:gem_sensor')
        .inputFluids('gtceu:rocket_fuel 8000')
        .itemOutputs(
            '64x gtceu:diamond_ore',
            '64x gtceu:apatite_ore',
            '64x gtceu:tricalcium_phosphate_ore',
            '64x gtceu:quartzite_ore'
        )
    })

    basic_microverse_mission(event, 1, 25, GTValues.VA, GTValues.HV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux', 'minecraft:chest')
        .inputFluids('gtceu:rocket_fuel 8000')
        .itemOutputs(
            '64x kubejs:dense_iron_ore',
            '64x gtceu:cassiterite_ore',
            '64x gtceu:redstone_ore',
            '64x gtceu:nickel_ore',
            '64x gtceu:ilmenite_ore',
            '64x gtceu:ilmenite_ore',
            '64x gtceu:ilmenite_ore',
            '64x gtceu:uraninite_ore',
            '64x gtceu:galena_ore',
            '64x gtceu:galena_ore',
            '64x gtceu:molybdenum_ore',
            '64x ad_astra:moon_sand',
            '64x gtceu:dilithium_ore',
            '64x gtceu:salt_ore'
        )
    })

    // T2MM missions
    basic_microverse_mission(event, 2, 6, GTValues.VHA, GTValues.EV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:ultra_dense_hydrogen')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemOutputs('4x kubejs:stellar_creation_data')
    })

    basic_microverse_mission(event, 2, 30, GTValues.VHA, GTValues.EV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 12000')
        .itemOutputs(
            '64x gtceu:endstone_bauxite_ore',
            '64x gtceu:endstone_pyrochlore_ore',
            '64x gtceu:endstone_pyrochlore_ore',
            '64x gtceu:endstone_tantalite_ore',
            '64x gtceu:endstone_copper_ore',
            '64x gtceu:endstone_copper_ore',
            '64x gtceu:endstone_sphalerite_ore',
            '64x gtceu:endstone_cassiterite_ore',
            '64x gtceu:endstone_scheelite_ore',
            '64x gtceu:endstone_scheelite_ore',
            '64x gtceu:endstone_scheelite_ore',
            '64x gtceu:endstone_tungstate_ore',
            '64x gtceu:endstone_tungstate_ore',
            '64x gtceu:endstone_tungstate_ore',
            '64x kubejs:radium_salt',
            '64x kubejs:radium_salt'
        )
    })

    basic_microverse_mission(event, 2, 35, GTValues.VHA, GTValues.EV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x gtceu:hv_electric_pump', '64x kubejs:cryotheum_dust')
        .inputFluids('gtceu:rocket_fuel 12000')
        .itemOutputs(
            '10x kubejs:solidified_neon',
            '10x kubejs:solidified_krypton',
            '10x kubejs:solidified_xenon'
        )
    })

    // T3MM missions
    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'gtceu:mv_super_chest')
        .inputFluids('gtceu:rocket_fuel 20000')
        .itemOutputs(
            '64x gtceu:netherrack_scheelite_ore',
            '64x gtceu:netherrack_scheelite_ore',
            '64x gtceu:netherrack_scheelite_ore',
            '64x gtceu:netherrack_scheelite_ore',
            '64x gtceu:netherrack_tungstate_ore',
            '64x gtceu:netherrack_tungstate_ore',
            '64x gtceu:netherrack_tungstate_ore',
            '64x gtceu:netherrack_tungstate_ore',
            '64x gtceu:netherrack_ilmenite_ore',
            '64x gtceu:netherrack_vanadium_magnetite_ore',
            '64x gtceu:netherrack_tetrahedrite_ore',
            '64x gtceu:netherrack_cassiterite_ore',
            '64x gtceu:netherrack_tin_ore',
            '64x gtceu:netherrack_redstone_ore',
            '64x gtceu:netherrack_certus_quartz_ore',
            '64x gtceu:netherrack_almandine_ore',
            '64x gtceu:netherrack_lepidolite_ore',
            '64x gtceu:netherrack_cobaltite_ore',
            '16x gtceu:netherrack_laurite_ore',
            '8x gtceu:netherrack_cuprorhodsite_ore',
        )
    })

    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'kubejs:gem_sensor')
        .inputFluids('gtceu:rocket_fuel 20000')
        .itemOutputs(
            '64x gtceu:diamond_ore',
            '32x gtceu:diamond_ore',
            '64x gtceu:ruby_ore',
            '48x gtceu:topaz_ore',
            '32x gtceu:emerald_ore',
            '64x gtceu:netherrack_sapphire_ore',
            '64x gtceu:netherrack_gold_ore',
            '64x gtceu:netherrack_silver_ore'
        )
    })

    basic_microverse_mission(event, 3, 40, GTValues.VA, GTValues.EV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'gtceu:hv_super_chest')
        .inputFluids('gtceu:rocket_fuel 24000')
        .itemOutputs(
            '64x gtceu:netherrack_salt_ore',
            '64x gtceu:netherrack_salt_ore',
            '64x gtceu:netherrack_salt_ore',
            '64x gtceu:netherrack_salt_ore',
            '64x gtceu:netherrack_barite_ore',
            '64x gtceu:netherrack_barite_ore',
            '64x gtceu:netherrack_apatite_ore',
            '64x gtceu:netherrack_apatite_ore',
            '64x gtceu:netherrack_neodymium_ore',
            '64x gtceu:netherrack_chromite_ore',
            '64x gtceu:netherrack_chromite_ore',
            '64x gtceu:netherrack_chromite_ore',
            '64x gtceu:netherrack_pyrope_ore',
            '64x gtceu:netherrack_pyrope_ore'
        )
    })

    basic_microverse_mission(event, 3, 40, GTValues.VA, GTValues.EV, 100, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'minecraft:magma_cream')
        .inputFluids('gtceu:rocket_fuel 20000')
        .itemOutputs(
            '64x kubejs:dense_magma_block',
            '64x kubejs:dense_magma_block'
        )
    })
})