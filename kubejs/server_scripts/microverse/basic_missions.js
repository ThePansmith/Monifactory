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
    microverse_mission(event, 1, 1).forEach(builder => {
        builder
            .itemInputs("kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 2000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:diamond_drill_head")
            .itemInputs("kubejs:gem_sensor")
            .itemOutputs(
                "48x gtceu:raw_diamond",
                "32x gtceu:raw_apatite",
                "48x gtceu:raw_tricalcium_phosphate",
                "32x gtceu:raw_nether_quartz",
            )
    })

    microverse_mission(event, 1, 1).forEach(builder => {
        builder
            .itemInputs("kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 2000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:invar_drill_head")
            .itemOutputs(
                "64x minecraft:raw_iron",
                "48x minecraft:raw_iron",
                "64x gtceu:raw_yellow_limonite",
                "32x gtceu:raw_garnierite",
                "32x gtceu:raw_nickel",
            )
    })

    microverse_mission(event, 1, 1).forEach(builder => {
        builder
            .itemInputs("kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 2000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:bronze_drill_head")
            .itemOutputs(
                "32x gtceu:raw_cassiterite",
                "64x gtceu:raw_chalcopyrite",
                "48x gtceu:raw_chalcopyrite",
                "16x gtceu:raw_realgar",
            )
    })

    microverse_mission(event, 1, 1).forEach(builder => {
        builder
            .itemInputs("kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 2000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:sterling_silver_drill_head")
            .itemOutputs(
                "48x gtceu:raw_silver",
                "56x gtceu:raw_galena",
                "32x gtceu:raw_lead",
            )
    })

    microverse_mission(event, 1, 1).forEach(builder => {
        builder
            .itemInputs("kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 2000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:rose_gold_drill_head")
            .itemInputs("kubejs:gem_sensor")
            .itemOutputs(
                "64x gtceu:raw_redstone",
                "48x gtceu:raw_redstone",
                "64x gtceu:raw_ruby",
                "32x gtceu:raw_ruby",
                "32x gtceu:raw_cinnabar",
            )
    })

    microverse_mission(event, 1, 1).forEach(builder => {
        builder
            .itemInputs("kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 2000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:wrought_iron_drill_head")
            .itemOutputs(
                "64x gtceu:raw_uraninite",
                "48x gtceu:raw_pitchblende",
            )
    })

    microverse_mission(event, 1, 1).forEach(builder => {
        builder
            .itemInputs("kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 2000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:iron_drill_head")
            .itemOutputs(
                "48x gtceu:raw_salt",
                "48x gtceu:raw_rock_salt",
                "48x gtceu:raw_saltpeter",
            )
    })

    microverse_mission(event, 1, 1).forEach(builder => {
        builder
            .itemInputs("2x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 2000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:steel_drill_head")
            .itemInputs("gtceu:power_thruster")
            .itemOutputs(
                "32x gtceu:raw_molybdenite",
                "32x ad_astra:moon_sand",
                "32x gtceu:raw_dilithium",
                "32x gtceu:raw_fluorite",
            )
    })

    microverse_mission(event, 1, 1).forEach(builder => {
        builder
            .itemInputs("3x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 2000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:aluminium_drill_head")
            .itemInputs("gtceu:advanced_power_thruster")
            .itemOutputs(
                "64x gtceu:raw_ilmenite",
                "64x gtceu:raw_bauxite",
                "16x gtceu:raw_aluminium",
            )
    })

    // T2MM missions
    microverse_mission(event, 2, 1).forEach(builder => {
        builder
            .itemInputs("3x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 3000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:titanium_drill_head")
            .itemInputs("gtceu:advanced_power_thruster")
            .itemOutputs(
                "64x gtceu:raw_scheelite",
                "64x gtceu:raw_scheelite",
                "64x gtceu:raw_tungstate",
                "64x gtceu:raw_tungstate",
            )
    })

    microverse_mission(event, 2, 1).forEach(builder => {
        builder
            .itemInputs("2x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 3000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:bronze_drill_head")
            .itemOutputs(
                "64x gtceu:raw_pyrochlore",
                "64x minecraft:raw_copper",
                "32x gtceu:raw_tin",
                "32x kubejs:radium_salt",
            )
    })

    microverse_mission(event, 2, 1).forEach(builder => {
        builder
            .itemInputs("2x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 3000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:stainless_steel_drill_head")
            .itemOutputs(
                "64x gtceu:raw_pyrolusite",
                "64x gtceu:raw_tantalite",
                "64x gtceu:raw_tantalite",
            )
    })

    microverse_mission(event, 2, 1).forEach(builder => {
        builder
            .itemInputs("kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 3000")
            .itemInputs("kubejs:microversal_alchemy_kit")
            .itemInputs("16x kubejs:cryotheum_dust")
            .outputFluids(
                "gtceu:neon 16000",
                "gtceu:krypton 16000",
                "gtceu:argon 16000",
            )
    })

    microverse_mission(event, 2, 1).forEach(builder => {
        builder
            .itemInputs("3x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 3000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:diamond_drill_head")
            .itemInputs("kubejs:gem_sensor", "gtceu:power_thruster")
            .itemOutputs(
                "64x gtceu:raw_dilithium",
                "64x gtceu:raw_certus_quartz",
                "32x gtceu:raw_quartzite",
            )
    })

    microverse_mission(event, 2, 1).forEach(builder => {
        builder
            .itemInputs("2x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 3000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:red_steel_drill_head")
            .itemOutputs(
                "64x gtceu:raw_goethite",
                "32x gtceu:raw_goethite",
                "64x gtceu:raw_hematite",
                "48x gtceu:raw_malachite",
            )
    })

    microverse_mission(event, 2, 1).forEach(builder => {
        builder
            .itemInputs("2x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 3000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:blue_steel_drill_head")
            .itemInputs("kubejs:gem_sensor")
            .itemOutputs(
                "64x gtceu:raw_lapis",
                "24x gtceu:raw_sodalite",
                "32x gtceu:raw_lazurite",
                "24x gtceu:raw_calcite",
            )
    })

    // T3MM missions
    microverse_mission(event, 3, 1).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 5000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:vanadium_steel_drill_head")
            .itemOutputs(
                "64x gtceu:raw_magnetite",
                "64x gtceu:raw_vanadium_magnetite",
                "64x gtceu:raw_chromite",
                "32x minecraft:raw_gold",
            )
    })

    microverse_mission(event, 3, 1).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 5000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:cobalt_brass_drill_head")
            .itemOutputs(
                "48x gtceu:raw_tetrahedrite",
                "32x gtceu:raw_cobaltite",
                "8x gtceu:raw_magnesite",
                "16x gtceu:raw_sphalerite",
                "20x gtceu:raw_stibnite",
            )
    })

    microverse_mission(event, 3, 1).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 5000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:diamond_drill_head")
            .itemInputs("2x kubejs:gem_sensor")
            .itemOutputs(
                "64x gtceu:raw_diamond",
                "64x gtceu:raw_diamond",
                "64x gtceu:raw_diamond",
                "64x gtceu:raw_emerald",
                "64x gtceu:raw_emerald",
            )
    })

    microverse_mission(event, 3, 1).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 5000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:steel_drill_head")
            .itemInputs("kubejs:gem_sensor")
            .itemOutputs(
                "64x gtceu:raw_sapphire",
                "32x gtceu:raw_sapphire",
                "64x gtceu:raw_almandine",
                "32x gtceu:raw_almandine",
                "64x gtceu:raw_topaz",
                "32x gtceu:raw_topaz",
            )
    })

    microverse_mission(event, 3, 1).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 5000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:aluminium_drill_head")
            .itemOutputs(
                "64x minecraft:glowstone",
                "64x minecraft:glowstone",
                "16x gtceu:raw_redstone",
                "32x gtceu:raw_coal",
            )
    })

    microverse_mission(event, 3, 1).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 5000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:stainless_steel_drill_head")
            .itemInputs("gtceu:power_thruster")
            .itemOutputs(
                "48x gtceu:raw_apatite",
                "24x gtceu:raw_neodymium",
                "32x gtceu:raw_monazite",
            )
    })

    microverse_mission(event, 3, 1).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 5000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:ultimet_drill_head")
            .itemInputs("gtceu:advanced_power_thruster")
            .itemOutputs(
                "8x gtceu:raw_barite",
                "12x gtceu:raw_laurite",
                "6x gtceu:raw_cuprorhodsite",
            )
    })

    microverse_mission(event, 3, 1).forEach(builder => {
        builder
            .itemInputs("3x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 5000")
            .itemInputs("kubejs:blasting_kit")
            .itemOutputs(
                "64x minecraft:magma_block",
                "64x minecraft:magma_block",
                "64x minecraft:magma_block",
                "64x minecraft:magma_block",
                "64x minecraft:magma_block",
                "64x minecraft:magma_block",
            )
    })

    microverse_mission(event, 3, 1).forEach(builder => {
        builder
            .itemInputs("8x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 5000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:tungsten_steel_drill_head")
            .itemInputs("16x kubejs:wither_realm_data")
            .itemOutputs(
                "4x minecraft:ancient_debris",
                "64x minecraft:quartz",
                "32x minecraft:quartz",
                "24x minecraft:gilded_blackstone",
                "4x minecraft:gold_block",
            )
    })

    microverse_mission(event, 3, 1).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .inputFluids("gtceu:rocket_fuel 5000")
            .itemInputs("kubejs:basic_drilling_kit")
            .itemInputs("gtceu:iron_drill_head")
            .itemOutputs(
                "64x gtceu:raw_salt",
                "32x gtceu:raw_rock_salt",
                "64x gtceu:raw_lepidolite",
                "24x gtceu:raw_spodumene",
            )
    })
})
