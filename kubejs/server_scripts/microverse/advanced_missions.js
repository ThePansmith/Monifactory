/**
 * Recipe definitions for advanced microverse projector missions.
 */
ServerEvents.recipes(event => {
    // T4MM missions
    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:cobalt_brass_drill_head")
            .itemInputs("4x kubejs:wither_realm_data")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x gtceu:raw_cooperite",
                "32x gtceu:raw_bornite",
                "64x gtceu:raw_pentlandite",
                "64x gtceu:raw_chalcocite",
            )
            .damageRate(1)
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:steel_drill_head")
            .requiredMicroverse(1) // Normal
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
            .damageRate(1)
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:diamond_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x gtceu:raw_lapis",
                "64x gtceu:raw_lapis",
                "32x gtceu:raw_lapis",
                "64x gtceu:raw_coal",
                "64x gtceu:raw_coal",
                "32x gtceu:raw_coal",
                "64x gtceu:raw_redstone",
            )
            .damageRate(1)
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:damascus_steel_drill_head")
            .requiredMicroverse(1) // Normal
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
            .damageRate(1)
    })

    microverse_mission(event, 4, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:petrotheum_dust")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:wrought_iron_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "64x gtceu:raw_thorium",
                "64x gtceu:raw_thorium",
                "64x gtceu:raw_thorium",
                "16x gtceu:raw_thorium",
                "32x gtceu:raw_pitchblende",
            )
            .damageRate(1)
    })

    // T5MM missions
    microverse_mission(event, 5, 2).forEach(builder => {
        if(!doHarderRecipes) {
            builder
                .itemInputs("16x kubejs:stabilized_plutonium")
                .itemInputs("kubejs:advanced_drilling_kit")
                .itemInputs("gtceu:hsse_drill_head")
                .requiredMicroverse(1) // Normal
                .itemOutputs(
                    "64x gtceu:raw_cooperite",
                    "32x gtceu:raw_cooperite",
                    "64x gtceu:raw_naquadah",
                    "64x gtceu:raw_naquadah",
                    "24x gtceu:raw_kaemanite",
                )
                .damageRate(2)
        } else {
            builder
                .itemInputs("16x kubejs:stabilized_plutonium")
                .itemInputs("kubejs:advanced_drilling_kit")
                .itemInputs("gtceu:hsse_drill_head")
                .requiredMicroverse(1) // Normal
                .itemOutputs(
                    "36x gtceu:raw_pollucite",
                    "32x gtceu:raw_cooperite",
                    "64x gtceu:raw_snowchestite",
                    "64x gtceu:raw_snowchestite",
                    "24x gtceu:raw_kaemanite",
                )
                .damageRate(2)
        }
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_uranium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:red_steel_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "32x gtceu:raw_palladium",
                "32x gtceu:raw_monazite",
                "32x gtceu:raw_molybdenite",
                "16x gtceu:raw_powellite",
                "8x gtceu:rarest_metal_mixture_dust",
            )
            .damageRate(2)
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_uranium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:blue_steel_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "32x gtceu:raw_realgar",
                "64x gtceu:raw_sphalerite",
                "16x gtceu:raw_fluorite",
            )
            .damageRate(2)
    })

    microverse_mission(event, 5, 2).forEach(builder => {
        builder
            .itemInputs("16x kubejs:stabilized_uranium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:damascus_steel_drill_head")
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "32x gtceu:raw_bastnasite",
                "16x minecraft:ender_pearl",
                "16x minecraft:ender_pearl",
                "16x minecraft:ender_pearl",
                "64x gtceu:raw_beryllium",
            )
            .damageRate(2)
    })

    // T6MM missions
    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("32x kubejs:stabilized_uranium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:naquadah_alloy_drill_head")
            .itemInputs("16x kubejs:wither_realm_data")
            .damageRate(4)
            .itemOutputs(
                "64x gtceu:raw_uraninite",
                "32x gtceu:raw_uraninite",
                "32x gtceu:raw_plutonium",
                "32x gtceu:rarest_metal_mixture_dust",
            )
            .requiredMicroverse(1) // Normal
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("32x kubejs:stabilized_plutonium")
            .itemInputs("kubejs:microversal_alchemy_kit")
            .itemInputs("32x kubejs:wither_realm_data")
            .damageRate(4)
            .requiredMicroverse(1) // Normal
            .itemOutputs(
                "16x kubejs:stabilized_einsteinium",
            )
            .requiredMicroverse(1) // Normal
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("32x kubejs:stabilized_curium")
            .itemInputs("kubejs:blasting_kit")
            .itemInputs("64x kubejs:wither_realm_data")
            .damageRate(4)
            .itemOutputs(
                "64x gtceu:raw_nether_quartz",
                "64x gtceu:raw_nether_quartz",
                "64x minecraft:ancient_debris",
                "64x minecraft:ancient_debris",
                "64x minecraft:ancient_debris",
            )
            .requiredMicroverse(1) // Normal
    })

    microverse_mission(event, 6, 2, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs("16x kubejs:quantum_flux")
            .itemInputs("32x kubejs:stabilized_plutonium")
            .itemInputs("8x kubejs:dragon_lair_data")
            .damageRate((doHostileMicroverse ? -40 : 4))
            .itemOutputs(
                "32x minecraft:dragon_egg",
                "64x kubejs:ender_dragon_scale",
                "32x minecraft:dragon_breath",
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    microverse_mission(event, 6, 2).forEach(builder => {
        builder
            .itemInputs("32x kubejs:stabilized_neptunium")
            .itemInputs("kubejs:advanced_drilling_kit")
            .itemInputs("gtceu:tungsten_carbide_drill_head")
            .damageRate(4)
            .itemOutputs(
                "32x gtceu:raw_monazite",
                "64x gtceu:raw_neodymium",
                "64x gtceu:raw_neodymium",
                "32x gtceu:raw_bastnasite",
                "16x gtceu:raw_redstone"
            )
            .requiredMicroverse(1) // Normal
    })
})
