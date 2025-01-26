/**
 * Recipe definitions for basic microverse projector missions.
 * Builder method calls for inputs typically follow a certain order:
 * - Quantum Flux OR Data
 * - Fuel
 * - Drill head (if any)
 * - Gemstone Sensor/Power Thruster (if any)
 * - Anything else, in a multiline method call
 */
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
            '64x gtceu:raw_diamond',
            '64x gtceu:raw_apatite',
            '64x gtceu:raw_apatite',
            '64x gtceu:raw_tricalcium_phosphate',
            '64x gtceu:raw_tricalcium_phosphate',
            '64x gtceu:raw_quartzite'
        )
    })

    basic_microverse_mission(event, 1, 25, GTValues.VA, GTValues.HV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux', 'minecraft:chest')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs(
            '64x kubejs:dense_iron_ore',
            '64x gtceu:raw_nickel',
            '64x gtceu:raw_ilmenite',
            '64x gtceu:raw_ilmenite',
            '64x gtceu:raw_ilmenite',
            
        )
    })

    basic_microverse_mission(event, 1, 25, GTValues.VA, GTValues.HV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux', 'minecraft:chest')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs(
            '64x gtceu:raw_cassiterite',
            '64x gtceu:raw_chalcopyrite',
            '64x gtceu:raw_chalcopyrite',
            '64x gtceu:raw_galena',
            '64x gtceu:raw_galena'
        )
    })

    basic_microverse_mission(event, 1, 25, GTValues.VA, GTValues.HV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux', 'minecraft:chest')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs(
            '64x gtceu:raw_redstone',
            '64x gtceu:raw_redstone',
            '64x gtceu:raw_uraninite',
            '64x gtceu:raw_uraninite',
            '64x gtceu:raw_salt'
        )
    })

    basic_microverse_mission(event, 1, 25, GTValues.VA, GTValues.HV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux', 'minecraft:chest')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs(
            '64x gtceu:raw_molybdenum',
            '64x ad_astra:moon_sand',
            '64x gtceu:raw_dilithium',
            '64x gtceu:raw_fluorite'
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
            '64x gtceu:raw_scheelite',
            '64x gtceu:raw_scheelite',
            '64x gtceu:raw_tungstate',
            '64x gtceu:raw_tungstate'
        )
    })

    basic_microverse_mission(event, 2, 30, GTValues.VHA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemOutputs(
            '64x gtceu:raw_pyrochlore',
            '64x gtceu:raw_pyrochlore',
            '64x minecraft:raw_copper',
            '64x minecraft:raw_copper',
            '64x gtceu:raw_cassiterite',
            '64x kubejs:radium_salt'
        )
    })

    basic_microverse_mission(event, 2, 30, GTValues.VHA, GTValues.EV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemOutputs(
            '64x gtceu:raw_bauxite',
            '64x gtceu:raw_bauxite',
            '64x gtceu:raw_tantalite',
            '64x gtceu:raw_tantalite',
            '64x gtceu:raw_sphalerite',
            '64x gtceu:raw_sphalerite',
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
        .itemInputs('gtceu:advanced_power_thruster', 'kubejs:gem_sensor', '16x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemOutputs(
            '64x gtceu:raw_dilithium',
            '64x gtceu:raw_dilithium',
            '64x gtceu:raw_dilithium',
            '64x gtceu:raw_certus_quartz',
            '64x gtceu:raw_certus_quartz',
            '64x gtceu:raw_monazite',
        )
    })

    // T3MM missions
    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux', 'gtceu:mv_super_chest')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:raw_scheelite',
            '64x gtceu:raw_scheelite',
            '64x gtceu:raw_scheelite',
            '64x gtceu:raw_tungstate',
            '64x gtceu:raw_tungstate',
            '64x gtceu:raw_tungstate'
        )
    })

    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'gtceu:mv_super_chest')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:raw_vanadium_magnetite',
            '64x gtceu:raw_tetrahedrite',
            '64x gtceu:raw_cobaltite',
            '16x gtceu:raw_laurite',
            '8x gtceu:raw_cuprorhodsite'
        )
    })

    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'gtceu:mv_super_chest')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:raw_ilmenite',
            '64x gtceu:raw_cassiterite',
            '64x gtceu:raw_tin',
            '64x gtceu:raw_certus_quartz',
            '64x gtceu:raw_almandine',
            '64x gtceu:raw_lepidolite'
        )
    })

    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'kubejs:gem_sensor')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:raw_sapphire',
            '48x gtceu:raw_diamond',
            '32x gtceu:raw_ruby',
            '24x gtceu:raw_topaz',
            '16x gtceu:raw_emerald'  
        )
    })

    basic_microverse_mission(event, 3, 35, GTValues.VA, GTValues.EV, 12, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x minecraft:raw_gold',
            '64x minecraft:raw_gold',
            '64x gtceu:raw_silver',
            '64x gtceu:raw_silver',
            '64x gtceu:raw_redstone',
            '64x gtceu:raw_redstone'
        )
    })

    basic_microverse_mission(event, 3, 40, GTValues.VA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'gtceu:hv_super_chest')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:raw_salt',
            '64x gtceu:raw_salt',
            '64x gtceu:raw_barite',
            '64x gtceu:raw_apatite',
            '32x gtceu:raw_neodymium',
        )
    })

    basic_microverse_mission(event, 3, 40, GTValues.VA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux', 'gtceu:hv_super_chest')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemOutputs(
            '64x gtceu:raw_chromite',
            '64x gtceu:raw_chromite',
            '64x gtceu:raw_chromite',
            '64x gtceu:raw_pyrope',
            '64x gtceu:raw_pyrope'
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