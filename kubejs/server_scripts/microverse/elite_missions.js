/**
 * Recipe definitions for advanced microverse projector II missions.
 */
ServerEvents.recipes(event => {
    // T6MM mission (Previously HM-exclusive, no problem with making it available in NM)
    microverse_mission(event, 6, 3).forEach(builder => {
        builder
            .itemInputs(
                "16x kubejs:stabilized_plutonium",
                "kubejs:microversal_alchemy_kit",
                "8x gtceu:mythril_ingot",
                "4x gtceu:void_block",
            )
            .damageRate((doComplexMicroverses ? -10 : 4))
            .itemOutputs(
                "minecraft:sculk_catalyst",
                "20x minecraft:sculk",
                "12x minecraft:sculk_vein"
            )
            .requiredMicroverse((doComplexMicroverses ? 5 : 1)) // Abyssal / Normal
    })

    // T7MM missions
    microverse_mission(event, 7, 3, 120, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "64x gtceu:dilithium_gem",
                "3x kubejs:gem_sensor",
                "64x kubejs:deep_dark_data",
                "64x kubejs:deep_dark_data",
                "10x minecraft:sculk_catalyst"
            )
            .damageRate((doComplexMicroverses ? -20 : (doHostileMicroverse ? -40 : 2)))
            .itemOutputs("kubejs:lair_of_the_warden_data")
            .requiredMicroverse((doComplexMicroverses ? 5 : (doHostileMicroverse ? 2 : 1))) // Abyssal : Hostile : Normal
    })

    microverse_mission(event, 7, 3, 240, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "64x gtceu:dilithium_gem",
                "kubejs:blasting_kit",
                "8x kubejs:deep_dark_data"
            )
            .damageRate((doComplexMicroverses ? -30 : (doHostileMicroverse ? -25 : 3)))
            .itemOutputs(
                "12x minecraft:sculk_catalyst",
                "64x minecraft:sculk",
                "40x minecraft:sculk_vein",
                "16x minecraft:gold_block",
                "16x gtceu:silver_block",
                "16x minecraft:diamond_block",
                "8x gtceu:platinum_block",
                "4x gtceu:ruthenium_block"
            )
            .requiredMicroverse((doComplexMicroverses ? 5 : (doHostileMicroverse ? 2 : 1))) // Abyssal : Hostile : Normal
    })

    microverse_mission(event, 7, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "64x gtceu:dilithium_gem",
                "1x minecraft:sculk_catalyst",
                "12x kubejs:deep_dark_data",
                "16x kubejs:warden_horn"
            )
            .damageRate((doComplexMicroverses ? -60 : (doHostileMicroverse ? -40 : 2)))
            .itemOutputs(
                "16x kubejs:warden_heart",
                "40x minecraft:sculk_catalyst",
                "64x kubejs:warden_horn",
            )
            .requiredMicroverse((doComplexMicroverses ? 5 : (doHostileMicroverse ? 2 : 1))) // Abyssal : Hostile : Normal
    })

    // T8MM missions
    if (doComplexMicroverses) {
        microverse_mission(event, 8, 3, 200, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "64x gtceu:dilithium_gem",
                    "4x minecraft:sculk_catalyst",
                    "kubejs:lair_of_the_warden_data"
                )
                .damageRate(-50)
                .itemOutputs(
                    "4x kubejs:hadal_shard",
                    "64x minecraft:sculk_catalyst",
                    "32x minecraft:sculk_catalyst",
                    "64x kubejs:warden_horn",
                    "64x kubejs:warden_horn",
                    "64x kubejs:warden_horn",
                    "64x kubejs:warden_horn"
                )
                .requiredMicroverse(5) // Abyssal
                .updateMicroverse(2, true) // Hostile, keep integrity
                .blacklistMicroverseParallels()
        })
    } else {
        microverse_mission(event, 8, 3, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "64x gtceu:dilithium_gem",
                    "4x minecraft:sculk_catalyst",
                    "kubejs:lair_of_the_warden_data"
                )
                .damageRate((doHostileMicroverse ? -10 : 12))
                .itemOutputs(
                    "4x kubejs:hadal_shard",
                    "64x minecraft:sculk_catalyst",
                    "32x minecraft:sculk_catalyst",
                    "64x kubejs:warden_horn",
                    "64x kubejs:warden_horn",
                    "64x kubejs:warden_horn",
                    "64x kubejs:warden_horn"
                )
                .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
        })
    }

    microverse_mission(event, 8, 3, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "64x gtceu:dilithium_gem",
                "16x kubejs:dragon_lair_data"
            )
            .damageRate((doHostileMicroverse ? -25 : 6))
            .itemOutputs(
                "64x minecraft:dragon_egg",
                "32x minecraft:dragon_egg",
                "64x kubejs:ender_dragon_scale",
                "32x kubejs:ender_dragon_scale",
                "64x minecraft:dragon_breath"
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    if (doParticleSynthesis) {
        microverse_mission(event, 8, 3, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "64x gtceu:dilithium_gem",
                    "32x kubejs:wither_realm_data"
                )
                .damageRate((doComplexMicroverses ? 25 : (doHostileMicroverse ? -40 : 2)))
                .itemOutputs(
                    "5x gtceu:neutronium_ingot"
                )
                .requiredMicroverse((doComplexMicroverses ? 7 : (doHostileMicroverse ? 2 : 1))) // Supercharged : Hostile : Normal
        })
    } else {
        microverse_mission(event, 8, 3, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "64x gtceu:dilithium_gem",
                    "32x kubejs:wither_realm_data"
                )
                .damageRate((doComplexMicroverses ? 25 : (doHostileMicroverse ? -40 : 2)))
                .itemOutputs(
                    "32x gtceu:quantum_star",
                    "16x gtceu:quantum_eye",
                    "4x gtceu:gravi_star",
                    "4x gtceu:neutronium_ingot"
                )
                .requiredMicroverse((doComplexMicroverses ? 7 : (doHostileMicroverse ? 2 : 1))) // Supercharged : Hostile : Normal
        })
    }

    // T9MM missions
    microverse_mission(event, 9, 3, (doComplexMicroverses ? 180 : 280)).forEach(builder => {
        builder
            .itemInputs("48x gtceu:flawless_dilithium_gem")
            .itemInputs("kubejs:gravitational_amplifier", "6x gtceu:neutron_reflector")
            .damageRate((doComplexMicroverses ? 25 : 8))
            .itemOutputs("32x gtceu:neutronium_ingot")
            .requiredMicroverse(1) // Normal
    })

    microverse_mission(event, 9, 3).forEach(builder => {
        builder
            .itemInputs("48x gtceu:flawless_dilithium_gem")
            .itemInputs("kubejs:elite_drilling_kit")
            .itemInputs("gtceu:duranium_drill_head")
            .itemInputs("4x gtceu:neutron_reflector",)
            .itemInputs("gtceu:ruridit_block")
            .damageRate((doComplexMicroverses ? 2 : 5))
            .itemOutputs(
                "64x gtceu:raw_darmstadtite",
                "64x gtceu:raw_darmstadtite",
                "64x gtceu:raw_darmstadtite"
            )
            .requiredMicroverse((doComplexMicroverses ? 3 : 1)) // Shattered / Normal
    })

    microverse_mission(event, 9, 3).forEach(builder => {
        builder
            .itemInputs("48x gtceu:flawless_dilithium_gem")
            .itemInputs("kubejs:elite_drilling_kit")
            .itemInputs("gtceu:duranium_drill_head")
            .itemInputs("4x kubejs:gem_sensor")
            .itemInputs("gtceu:naquadah_block")
            .damageRate((doComplexMicroverses ? 2 : 5))
            .itemOutputs(
                "64x gtceu:raw_dulysite",
                "64x gtceu:raw_dulysite",
                "64x gtceu:raw_dulysite",
                "32x gtceu:raw_dulysite",
            )
            .requiredMicroverse((doComplexMicroverses ? 3 : 1)) // Shattered / Normal
    })

    microverse_mission(event, 9, 3).forEach(builder => {
        builder
            .itemInputs("48x gtceu:flawless_dilithium_gem")
            .itemInputs("kubejs:elite_drilling_kit")
            .itemInputs("gtceu:duranium_drill_head")
            .itemInputs("4x nuclearcraft:plate_du")
            .itemInputs("gtceu:uranium_block")
            .damageRate(6)
            .itemOutputs(
                "64x gtceu:raw_plutonium",
                "64x gtceu:raw_plutonium",
                "64x gtceu:raw_plutonium",
                "64x gtceu:raw_plutonium",
                "64x gtceu:raw_plutonium",
                "64x gtceu:raw_plutonium",
            )
            .requiredMicroverse(3) // Shattered
    })

    // T10MM missions
    if(doComplexMicroverses) {
        microverse_mission(event, 10, 3, 160).forEach(builder => {
            builder
                .inputFluids("gtceu:helium_plasma 16000")
                .itemInputs("kubejs:universal_collapse_device")
                .damageRate(25)
                .itemOutputs("kubejs:heart_of_a_universe")
                .requiredMicroverse(3) // Shattered
                .updateMicroverse(6) // Necrosed, full health
                .blacklistMicroverseParallels()
        })
    } else {
        microverse_mission(event, 10, 3, 150).forEach(builder => {
            builder
                .inputFluids("gtceu:helium_plasma 16000")
                .itemInputs("kubejs:universal_collapse_device")
                .damageRate(50)
                .itemOutputs("kubejs:heart_of_a_universe")
                .requiredMicroverse(1) // Normal
                .updateMicroverse(3, true) // Shattered, keep integrity
                .blacklistMicroverseParallels()
        })
    }
})