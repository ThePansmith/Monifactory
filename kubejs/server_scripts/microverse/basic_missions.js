ServerEvents.recipes(event => {
    // T1MM missions
    basic_microverse_mission(event, 1, 5, GTValues.VA, GTValues.HV, 50, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:ultra_dense_hydrogen')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs('kubejs:stellar_creation_data')
    })

    basic_microverse_mission(event, 1, 25, GTValues.VA, GTValues.HV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux', 'kubejs:gem_sensor')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs(
            '64x gtceu:diamond_ore',
            '64x gtceu:apatite_ore',
            '64x gtceu:apatite_ore',
            '64x gtceu:tricalcium_phosphate_ore',
            '64x gtceu:tricalcium_phosphate_ore',
            '64x gtceu:quartzite_ore'
        )
    })

    basic_microverse_mission(event, 1, 25, GTValues.VA, GTValues.HV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux', 'minecraft:chest')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs(
            '64x kubejs:dense_iron_ore',
            '64x gtceu:nickel_ore',
            '64x gtceu:ilmenite_ore',
            '64x gtceu:ilmenite_ore',
            '64x gtceu:ilmenite_ore',
            
        )
    })

    basic_microverse_mission(event, 1, 25, GTValues.VA, GTValues.HV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux', 'minecraft:chest')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs(
            '64x gtceu:cassiterite_ore',
            '64x gtceu:chalcopyrite_ore',
            '64x gtceu:chalcopyrite_ore',
            '64x gtceu:galena_ore',
            '64x gtceu:galena_ore'
        )
    })

    basic_microverse_mission(event, 1, 25, GTValues.VA, GTValues.HV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux', 'minecraft:chest')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs(
            '64x gtceu:redstone_ore',
            '64x gtceu:redstone_ore',
            '64x gtceu:uraninite_ore',
            '64x gtceu:uraninite_ore',
            '64x gtceu:salt_ore'
        )
    })

    basic_microverse_mission(event, 1, 25, GTValues.VA, GTValues.HV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux', 'minecraft:chest')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs(
            '64x gtceu:molybdenum_ore',
            '64x ad_astra:moon_sand',
            '64x gtceu:dilithium_ore',
            '64x gtceu:fluorite_ore'
        )
    })

    // T2MM missions
    basic_microverse_mission(event, 2, 6, GTValues.VHA, GTValues.EV, 50, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:ultra_dense_hydrogen')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemOutputs('4x kubejs:stellar_creation_data')
    })

    basic_microverse_mission(event, 2, 30, GTValues.VHA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemOutputs(
            '64x gtceu:endstone_scheelite_ore',
            '32x gtceu:endstone_scheelite_ore',
            '64x gtceu:endstone_tungstate_ore',
            '32x gtceu:endstone_tungstate_ore'
        )
    })

    basic_microverse_mission(event, 2, 30, GTValues.VHA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemOutputs(
            '64x gtceu:endstone_pyrochlore_ore',
            '64x gtceu:endstone_copper_ore',
            '32x gtceu:endstone_cassiterite_ore',
            '64x kubejs:radium_salt'
        )
    })

    basic_microverse_mission(event, 2, 30, GTValues.VHA, GTValues.EV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemOutputs(
            '64x gtceu:endstone_bauxite_ore',
            '64x gtceu:endstone_bauxite_ore',
            '64x gtceu:endstone_tantalite_ore',
            '64x gtceu:endstone_tantalite_ore',
            '64x gtceu:endstone_sphalerite_ore',
            '64x gtceu:endstone_sphalerite_ore',
        )
    })

    basic_microverse_mission(event, 2, 35, GTValues.VHA, GTValues.EV, 5, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('1x gtceu:hv_electric_pump', '16x kubejs:cryotheum_dust')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemOutputs(
            '32x kubejs:solidified_neon',
            '32x kubejs:solidified_krypton',
            '32x kubejs:solidified_xenon'
        )
    })

    basic_microverse_mission(event, 2, 30, GTValues.VHA, GTValues.EV, 30, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('gtceu:advanced_power_thruster', 'kubejs:gem_sensor', '32x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemOutputs(
            '64x gtceu:endstone_dilithium_ore',
            '64x gtceu:endstone_dilithium_ore',
            '64x gtceu:endstone_dilithium_ore',
            '64x gtceu:endstone_certus_quartz_ore',
            '64x gtceu:endstone_certus_quartz_ore',
            '64x gtceu:endstone_monazite_ore',
        )
    })

    // T3MM missions
    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'gtceu:mv_super_chest')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:netherrack_scheelite_ore',
            '64x gtceu:netherrack_scheelite_ore',
            '64x gtceu:netherrack_scheelite_ore',
            '64x gtceu:netherrack_tungstate_ore',
            '64x gtceu:netherrack_tungstate_ore',
            '64x gtceu:netherrack_tungstate_ore'
        )
    })

    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'gtceu:mv_super_chest')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:netherrack_vanadium_magnetite_ore',
            '64x gtceu:netherrack_tetrahedrite_ore',
            '64x gtceu:netherrack_cobaltite_ore',
            '16x gtceu:netherrack_laurite_ore',
            '8x gtceu:netherrack_cuprorhodsite_ore'
        )
    })

    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'gtceu:mv_super_chest')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:netherrack_ilmenite_ore',
            '64x gtceu:netherrack_cassiterite_ore',
            '64x gtceu:netherrack_tin_ore',
            '64x gtceu:netherrack_certus_quartz_ore',
            '64x gtceu:netherrack_almandine_ore',
            '64x gtceu:netherrack_lepidolite_ore'
        )
    })

    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'kubejs:gem_sensor')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '48x gtceu:diamond_ore',
            '32x gtceu:ruby_ore',
            '24x gtceu:topaz_ore',
            '16x gtceu:emerald_ore',
            '32x gtceu:netherrack_sapphire_ore'
        )
    })

    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 12, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:netherrack_gold_ore',
            '64x gtceu:netherrack_gold_ore',
            '64x gtceu:netherrack_silver_ore',
            '64x gtceu:netherrack_silver_ore',
            '64x gtceu:netherrack_redstone_ore',
            '64x gtceu:netherrack_redstone_ore'
        )
    })

    basic_microverse_mission(event, 3, 40, GTValues.VA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'gtceu:hv_super_chest')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:netherrack_salt_ore',
            '64x gtceu:netherrack_salt_ore',
            '64x gtceu:netherrack_barite_ore',
            '64x gtceu:netherrack_apatite_ore',
            '32x gtceu:netherrack_neodymium_ore',
        )
    })

    basic_microverse_mission(event, 3, 40, GTValues.VA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'gtceu:hv_super_chest')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:netherrack_chromite_ore',
            '64x gtceu:netherrack_chromite_ore',
            '64x gtceu:netherrack_chromite_ore',
            '64x gtceu:netherrack_pyrope_ore',
            '64x gtceu:netherrack_pyrope_ore'
        )
    })

    basic_microverse_mission(event, 3, 40, GTValues.VA, GTValues.EV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'minecraft:magma_cream')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x kubejs:dense_magma_block',
            '64x kubejs:dense_magma_block'
        )
    })

    basic_microverse_mission(event, 3, 30, GTValues.VA, GTValues.EV, 25, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', '16x kubejs:wither_realm_data')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '8x minecraft:ancient_debris',
            '32x kubejs:dense_nether_quartz_ore'
        )
    })
})