/**
 * Recipe definitions for basic microverse projector missions.
 * Builder method calls for inputs typically follow a certain order:
 * - Quantum Flux
 * - Fuel
 * - Drill head (if any)
 * - Gemstone Sensor/Power Thruster (if any)
 * - Anything else, in a multiline method call (if any)
 * - Data of any kind
 */
ServerEvents.recipes(event => {
    // T1MM missions
    microverse_mission(event, 1, 1, 10, GTValues.VA, GTValues.HV, 50, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:ultra_dense_hydrogen')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemOutputs('kubejs:stellar_creation_data')
    })

    microverse_mission(event, 1, 1, 50, GTValues.VA, GTValues.HV, 25, GTValues.LuV).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemInputs('gtceu:diamond_drill_head')
        .itemInputs('kubejs:gem_sensor')
        .itemOutputs(
            '64x gtceu:raw_diamond',
            '64x gtceu:raw_apatite',
            '48x gtceu:raw_apatite',
            '64x gtceu:raw_tricalcium_phosphate',
            '64x gtceu:raw_quartzite'
        )
    })

    microverse_mission(event, 1, 1, 50, GTValues.VA, GTValues.HV, 20, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemInputs('gtceu:invar_drill_head')
        .itemOutputs(
            '64x minecraft:raw_iron',
            '64x minecraft:raw_iron',
            '32x minecraft:raw_iron',
            '64x gtceu:raw_yellow_limonite',
            '64x gtceu:raw_yellow_limonite',
            '64x gtceu:raw_garnierite',
            '64x gtceu:raw_nickel',
        )
    })

    microverse_mission(event, 1, 1, 50, GTValues.VA, GTValues.HV, 25, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemInputs('gtceu:bronze_drill_head')
        .itemOutputs(
            '64x gtceu:raw_cassiterite',
            '64x gtceu:raw_chalcopyrite',
            '64x gtceu:raw_chalcopyrite',
            '32x gtceu:raw_chalcopyrite',
            '32x gtceu:raw_realgar'
        )
    })

    microverse_mission(event, 1, 1, 50, GTValues.VA, GTValues.HV, 25, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemInputs('gtceu:sterling_silver_drill_head')
        .itemOutputs(
            '64x gtceu:raw_silver',
            '32x gtceu:raw_silver',
            '64x gtceu:raw_galena',
            '48x gtceu:raw_galena',
            '64x gtceu:raw_lead'
        )
    })

    microverse_mission(event, 1, 1, 50, GTValues.VA, GTValues.HV, 20, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemInputs('gtceu:rose_gold_drill_head')
        .itemInputs('kubejs:gem_sensor')
        .itemOutputs(
            '64x gtceu:raw_redstone',
            '64x gtceu:raw_redstone',
            '32x gtceu:raw_redstone',
            '64x gtceu:raw_ruby',
            '64x gtceu:raw_ruby',
            '64x gtceu:raw_ruby',
            '64x gtceu:raw_cinnabar'
        )
    })

    microverse_mission(event, 1, 1, 50, GTValues.VA, GTValues.HV, 20, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemInputs('gtceu:wrought_iron_drill_head')
        .itemOutputs(
            '64x gtceu:raw_uraninite',
            '64x gtceu:raw_uraninite',
            '64x gtceu:raw_pitchblende',
            '24x gtceu:raw_pitchblende'
        )
    })

    microverse_mission(event, 1, 1, 50, GTValues.VA, GTValues.HV, 25, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemInputs('gtceu:iron_drill_head')
        .itemOutputs(
            '64x gtceu:raw_salt',
            '64x gtceu:raw_salt',
            '32x gtceu:raw_salt',
            '64x gtceu:raw_rock_salt',
            '32x gtceu:raw_rock_salt',
        )
    })

    microverse_mission(event, 1, 1, 50, GTValues.VA, GTValues.HV, 30, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemInputs('gtceu:steel_drill_head')
        .itemInputs('gtceu:power_thruster')
        .itemOutputs(
            '64x gtceu:raw_molybdenum',
            '64x ad_astra:moon_sand',
            '64x gtceu:raw_dilithium',
            '64x gtceu:raw_fluorite'
        )
    })

    microverse_mission(event, 1, 1, 50, GTValues.VA, GTValues.HV, 40, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('3x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemInputs('gtceu:aluminium_drill_head')
        .itemInputs('gtceu:advanced_power_thruster')
        .itemOutputs(
            '64x gtceu:raw_ilmenite',
            '64x gtceu:raw_ilmenite',
            '64x gtceu:raw_ilmenite',
            '64x gtceu:raw_bauxite',
            '64x gtceu:raw_bauxite',
            '32x gtceu:raw_aluminium'
        )
    })

    // T2MM missions
    microverse_mission(event, 2, 1, 12, GTValues.VHA, GTValues.EV, 50, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:ultra_dense_hydrogen')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemOutputs('4x kubejs:stellar_creation_data')
    })

    microverse_mission(event, 2, 1, 60, GTValues.VHA, GTValues.EV, 30, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('3x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemInputs('gtceu:titanium_drill_head')
        .itemInputs('gtceu:advanced_power_thruster')
        .itemOutputs(
            '64x gtceu:raw_scheelite',
            '64x gtceu:raw_scheelite',
            '64x gtceu:raw_scheelite',
            '64x gtceu:raw_tungstate',
            '64x gtceu:raw_tungstate',
            '64x gtceu:raw_tungstate'
        )
    })

    microverse_mission(event, 2, 1, 60, GTValues.VHA, GTValues.EV, 25, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemInputs('gtceu:bronze_drill_head')
        .itemOutputs(
            '64x gtceu:raw_pyrochlore',
            '64x gtceu:raw_pyrochlore',
            '64x minecraft:raw_copper',
            '64x minecraft:raw_copper',
            '64x gtceu:raw_tin',
            '64x kubejs:radium_salt'
        )
    })

    microverse_mission(event, 2, 1, 60, GTValues.VHA, GTValues.EV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemInputs('gtceu:stainless_steel_drill_head')
        .itemOutputs(
            '64x gtceu:raw_tantalite',
            '64x gtceu:raw_tantalite',
            '64x gtceu:raw_pyrolusite',
            '32x gtceu:raw_grossular',
        )
    })

    microverse_mission(event, 2, 1, 60, GTValues.VHA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemInputs(
            '1x gtceu:hv_electric_pump',
            '16x kubejs:cryotheum_dust'
        )
        .itemOutputs(
            '32x kubejs:solidified_neon',
            '32x kubejs:solidified_krypton',
            '32x kubejs:solidified_xenon'
        )
    })

    microverse_mission(event, 2, 1, 60, GTValues.VHA, GTValues.EV, 30, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('3x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemInputs('gtceu:diamond_drill_head')
        .itemInputs('kubejs:gem_sensor', 'gtceu:power_thruster')
        .itemOutputs(
            '64x gtceu:raw_dilithium',
            '64x gtceu:raw_dilithium',
            '64x gtceu:raw_dilithium',
            '64x gtceu:raw_dilithium',
            '64x gtceu:raw_certus_quartz',
            '64x gtceu:raw_certus_quartz',
            '64x gtceu:raw_monazite',
        )
    })

    microverse_mission(event, 2, 1, 60, GTValues.VHA, GTValues.EV, 10, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemInputs('gtceu:red_steel_drill_head')
        .itemOutputs(
            '64x gtceu:raw_hematite',
            '32x gtceu:raw_hematite',
            '64x gtceu:raw_goethite',
            '64x gtceu:raw_goethite',
            '64x gtceu:raw_malachite',
        )
    })

    microverse_mission(event, 2, 1, 60, GTValues.VHA, GTValues.EV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 3000')
        .itemInputs('gtceu:blue_steel_drill_head')
        .itemInputs('kubejs:gem_sensor')
        .itemOutputs(
            '64x gtceu:raw_lapis',
            '64x gtceu:raw_lapis',
            '32x gtceu:raw_lapis',
            '48x gtceu:raw_sodalite',
            '64x gtceu:raw_lazurite',
            '48x gtceu:raw_calcite',
        )
    })

    // T3MM missions
    microverse_mission(event, 3, 1, 60, GTValues.VA, GTValues.EV, 20, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('2x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemInputs('gtceu:vanadium_steel_drill_head')
        .itemOutputs(
            '64x gtceu:raw_magnetite',
            '48x gtceu:raw_magnetite',
            '64x gtceu:raw_vanadium_magnetite',
            '64x gtceu:raw_vanadium_magnetite',
            '64x gtceu:raw_chromite',
            '64x gtceu:raw_chromite',
            '64x minecraft:raw_gold',
        )
    })

    microverse_mission(event, 3, 1, 60, GTValues.VA, GTValues.EV, 25, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemInputs('gtceu:cobalt_brass_drill_head')
        .itemOutputs(
            '64x gtceu:raw_tetrahedrite',
            '32x gtceu:raw_tetrahedrite',
            '64x gtceu:raw_cobaltite',
            '16x gtceu:raw_magnesite',
            '32x gtceu:raw_sphalerite',
            '24x gtceu:raw_stibnite',
        )
    })

    microverse_mission(event, 3, 1, 60, GTValues.VA, GTValues.EV, 20, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemInputs('gtceu:diamond_drill_head')
        .itemInputs('kubejs:gem_sensor')
        .itemOutputs(
            '64x gtceu:raw_sapphire',
            '48x gtceu:raw_diamond',
            '32x gtceu:raw_almandine',
            '24x gtceu:raw_topaz',
            '16x gtceu:raw_emerald'  
        )
    })

    microverse_mission(event, 3, 1, 60, GTValues.VA, GTValues.EV, 15, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemInputs('gtceu:aluminium_drill_head')
        .itemOutputs(
            '64x minecraft:glowstone',
            '64x minecraft:glowstone',
            '32x minecraft:glowstone',
            '32x gtceu:raw_redstone',
            '32x gtceu:raw_coal'
        )
    })

    microverse_mission(event, 3, 1, 60, GTValues.VA, GTValues.EV, 40, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemInputs('gtceu:ultimet_drill_head')
        .itemInputs('gtceu:advanced_power_thruster')
        .itemOutputs(
            '64x gtceu:raw_barite',
            '64x gtceu:raw_apatite',
            '32x gtceu:raw_neodymium',
            '16x gtceu:raw_laurite',
            '8x gtceu:raw_cuprorhodsite'
        )
    })

    microverse_mission(event, 3, 1, 60, GTValues.VA, GTValues.EV, 30, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('4x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemInputs('gtceu:tungsten_carbide_drill_head')
        .itemOutputs(
            '64x kubejs:dense_magma_block',
            '64x kubejs:dense_magma_block'
        )
    })

    microverse_mission(event, 3, 1, 60, GTValues.VA, GTValues.EV, 25, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('16x kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 5000')
        .itemInputs('gtceu:tungsten_steel_drill_head')
        .itemInputs('16x kubejs:wither_realm_data')
        .itemOutputs(
            '8x minecraft:ancient_debris',
            '32x kubejs:dense_nether_quartz_ore',
            '48x minecraft:gilded_blackstone',
            '8x minecraft:gold_block',
        )
    })

    microverse_mission(event, 3, 1, 60, GTValues.VA, GTValues.EV, 20, GTValues.MAX).forEach(builder => {
        builder
        .itemInputs('kubejs:quantum_flux')
        .inputFluids('gtceu:rocket_fuel 2000')
        .itemInputs('gtceu:iron_drill_head')
        .itemOutputs(
            '64x gtceu:raw_salt',
            '64x gtceu:raw_salt',
            '64x gtceu:raw_rock_salt',
            '64x gtceu:raw_lepidolite',
            '32x gtceu:raw_lepidolite',
            '48x gtceu:raw_spodumene'
        )
    })
})