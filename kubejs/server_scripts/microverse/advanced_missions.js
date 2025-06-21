/**
 * Recipe definitions for advanced microverse projector missions.
 */
ServerEvents.recipes(event => {
    // T4MM missions
    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:cobalt_brass_drill_head")
            .itemInputs("4x kubejs:wither_realm_data")
            .itemOutputs(
                "64x gtceu:raw_cooperite",
                "32x gtceu:raw_bornite",
                "64x gtceu:raw_pentlandite",
                "64x gtceu:raw_chalcocite",
            )
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:steel_drill_head")
            .itemOutputs(
                "64x minecraft:raw_iron",
                "64x minecraft:raw_iron",
                "64x minecraft:raw_iron",
                "64x minecraft:raw_copper",
                "64x minecraft:raw_copper",
                "64x minecraft:raw_copper",
                "64x minecraft:raw_gold",
                "32x minecraft:raw_gold",
            )
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:diamond_drill_head")
            .itemOutputs(
                "64x gtceu:raw_lapis",
                "64x gtceu:raw_lapis",
                "32x gtceu:raw_lapis",
                "64x gtceu:raw_coal",
                "64x gtceu:raw_coal",
                "32x gtceu:raw_coal",
                "64x gtceu:raw_redstone",
            )
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:damascus_steel_drill_head")
            .itemOutputs(
                "64x gtceu:raw_oilsands",
                "64x gtceu:raw_oilsands",
                "64x gtceu:raw_oilsands",
                "64x gtceu:raw_oilsands",
                "64x gtceu:raw_oilsands",
                "64x gtceu:raw_oilsands",
                "64x enderio:grains_of_infinity",
                "64x enderio:grains_of_infinity",
            )
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:wrought_iron_drill_head")
            .itemOutputs(
                "64x gtceu:raw_thorium",
                "48x gtceu:raw_thorium",
                "32x gtceu:raw_pitchblende",
            )
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("4x kubejs:quantum_flux")
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("gtceu:data_stick")
            .itemInputs("2x kubejs:ultra_dense_hydrogen")
            .itemOutputs(
                "5x kubejs:stellar_creation_data",
            )
    })

    // T5MM missions
    microverse_mission(event, 5, 2).forEach(builder => {
        if(!doHarderRecipes) {
            builder
                .itemInputs("8x kubejs:quantum_flux")
                .itemInputs("16x kubejs:stabilized_plutonium")
                .itemInputs("kubejs:advanced_drilling_kit")
                .itemInputs("gtceu:hsse_drill_head")
                .itemOutputs(
                    "64x gtceu:raw_cooperite",
                    "32x gtceu:raw_cooperite",
                    "64x gtceu:raw_naquadah",
                    "64x gtceu:raw_naquadah",
                    "24x gtceu:raw_kaemanite",
                )
        } else {
            builder
                .itemInputs("8x kubejs:quantum_flux")
                .itemInputs("16x kubejs:stabilized_plutonium")
                .itemInputs("kubejs:advanced_drilling_kit")
                .itemInputs("gtceu:hsse_drill_head")
                .itemOutputs(
                    "36x gtceu:raw_pollucite",
                    "32x gtceu:raw_cooperite",
                    "64x gtceu:raw_snowchestite",
                    "64x gtceu:raw_snowchestite",
                    "24x gtceu:raw_kaemanite",
                )
        }
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("8x kubejs:quantum_flux")
            .itemInputs("16x kubejs:stabilized_uranium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:red_steel_drill_head")
            .itemOutputs(
                "32x gtceu:raw_palladium",
                "32x gtceu:raw_monazite",
                "32x gtceu:raw_molybdenite",
                "16x gtceu:raw_powellite",
                "8x gtceu:rarest_metal_mixture_dust",
            )
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("8x kubejs:quantum_flux")
            .itemInputs("16x kubejs:stabilized_uranium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:blue_steel_drill_head")
            .itemOutputs(
                "32x gtceu:raw_realgar",
                "64x gtceu:raw_sphalerite",
                "16x gtceu:raw_fluorite",
            )
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("8x kubejs:quantum_flux")
            .itemInputs("16x kubejs:stabilized_uranium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:damascus_steel_drill_head")
            .itemOutputs(
                "32x gtceu:raw_bastnasite",
                "16x minecraft:ender_pearl",
                "16x minecraft:ender_pearl",
                "16x minecraft:ender_pearl",
                "64x gtceu:raw_beryllium",
            )
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("8x kubejs:quantum_flux")
            .itemInputs("16x kubejs:stabilized_uranium")
            .itemInputs("gtceu:data_orb")
            .itemInputs("9x kubejs:ultra_dense_hydrogen")
            .itemInputs("3x kubejs:ultra_dense_helium")
            .itemOutputs(
                "20x kubejs:stellar_creation_data",
            )
    })

    // T6MM missions
    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:quantum_flux")
            .itemInputs("32x kubejs:stabilized_uranium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:naquadah_alloy_drill_head")
            .itemInputs("16x kubejs:wither_realm_data")
            .itemOutputs(
                "64x gtceu:raw_uraninite",
                "32x gtceu:raw_uraninite",
                "32x gtceu:raw_plutonium",
                "32x gtceu:rarest_metal_mixture_dust",
            )
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:quantum_flux")
            .itemInputs("32x kubejs:stabilized_plutonium")
            .itemInputs("kubejs:microversal_alchemy_kit")
            .itemInputs("32x kubejs:wither_realm_data")
            .outputFluids(
                "gtceu:einsteinium 16000",
            )
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:quantum_flux")
            .itemInputs("32x kubejs:stabilized_curium")
            .itemInputs("kubejs:blasting_kit")
            .itemInputs("64x kubejs:wither_realm_data")
            .itemOutputs(
                "64x gtceu:raw_nether_quartz",
                "64x gtceu:raw_nether_quartz",
                "64x minecraft:ancient_debris",
                "64x minecraft:ancient_debris",
                "64x minecraft:ancient_debris",
            )
    })

    microverse_mission(event, 6, 2, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs("16x kubejs:quantum_flux")
            .itemInputs("32x kubejs:stabilized_plutonium")
            .itemInputs("8x kubejs:dragon_lair_data")
            .itemOutputs(
                "32x minecraft:dragon_egg",
                "64x kubejs:ender_dragon_scale",
                "32x minecraft:dragon_breath",
            )
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:quantum_flux")
            .itemInputs("32x kubejs:stabilized_neptunium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:tungsten_carbide_drill_head")
            .itemOutputs(
                "32x gtceu:raw_monazite",
                "64x gtceu:raw_neodymium",
                "64x gtceu:raw_neodymium",
                "32x gtceu:raw_bastnasite",
                "16x gtceu:raw_redstone"
            )
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:quantum_flux")
            .itemInputs("32x kubejs:stabilized_plutonium")
            .itemInputs("gtceu:data_module")
            .itemInputs("64x kubejs:ultra_dense_hydrogen", "64x kubejs:ultra_dense_hydrogen")
            .itemOutputs(
                "64x kubejs:stellar_creation_data",
                "64x kubejs:stellar_creation_data"
            )
    })
})
