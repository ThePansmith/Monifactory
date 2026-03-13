/**
 * Recipe definitions for Hard Mode and Expert Mode-exclusive microverse projector missions.
 */
ServerEvents.recipes(event => {
    if(doHostileMicroverse) {
        microverse_mission(event, "2half", 1, 10, undefined, 100).forEach(builder => {
            builder
                .itemInputs("8x minecraft:tnt")
                .inputFluids("minecraft:lava 8000")
                .requiredMicroverse(1) // Normal
                .damageRate(50)
                .updateMicroverse(2) // Hostile
                .blacklistMicroverseParallels()
        })
        microverse_mission(event, "2half", 1, 10, undefined, 100).forEach(builder => {
            builder
                .itemInputs("2x gtceu:industrial_tnt")
                .inputFluids("minecraft:lava 4000")
                .requiredMicroverse(1) // Normal
                .damageRate(50)
                .updateMicroverse(2) // Hostile
                .blacklistMicroverseParallels()
        })
    }

    microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "minecraft:mossy_cobblestone",
            )
            .inputFluids("minecraft:lava 2000")
            .damageRate((doHostileMicroverse ? -30 : 0)) // heal microverse if hostile, damage if not
            .itemOutputs(
                "64x minecraft:bone",
                "64x minecraft:rotten_flesh",
                "16x minecraft:rotten_flesh",
                "32x minecraft:gunpowder",
                "24x minecraft:string",
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "minecraft:mud",
            )
            .inputFluids("minecraft:lava 2000")
            .damageRate((doHostileMicroverse ? -30 : 0))
            .itemOutputs(
                "48x minecraft:slime_ball",
                "24x kubejs:guardian_scale",
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "minecraft:redstone_block",
            )
            .inputFluids("minecraft:lava 4000")
            .damageRate((doHostileMicroverse ? -30 : 0))
            .itemOutputs(
                "16x minecraft:blaze_rod",
                "16x thermal:blizz_rod",
                "16x thermal:blitz_rod",
                "16x thermal:basalz_rod",
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "minecraft:netherrack",
            )
            .inputFluids("minecraft:lava 4000")
            .damageRate((doHostileMicroverse ? -30 : 0))
            .itemOutputs(
                "24x minecraft:ghast_tear",
                "48x kubejs:wither_bone",
                "64x minecraft:magma_cream",
                "32x minecraft:magma_cream"
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "minecraft:end_stone",
            )
            .inputFluids("minecraft:lava 6000")
            .damageRate((doHostileMicroverse ? -30 : 0))
            .itemOutputs(
                "16x enderio:enderman_head",
                "16x minecraft:ender_pearl",
                "16x minecraft:ender_pearl",
                "16x minecraft:shulker_shell",
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    if (doComplexMicroverses) {
        microverse_mission(event, "2half", 1, 20, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "minecraft:zombie_head",
                    "minecraft:skeleton_skull",
                    "minecraft:wither_skeleton_skull",
                )
                .inputFluids("minecraft:lava 2000", "gtceu:mana 250")
                .damageRate(20)
                .requiredMicroverse(2) // Hostile
        })

        microverse_mission(event, "2half", 1, 20, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "minecraft:creeper_head",
                    "enderio:enderman_head",
                    "minecraft:dragon_head",
                )
                .inputFluids("minecraft:lava 3000", "gtceu:mana 500")
                .damageRate(100)
                .requiredMicroverse(2) // Hostile
        })
    }

    // T3.5
    // A series of missions damaging Microverses by a flat 40% over 20s
    microverse_mission(event, "3half", 1, 20, GTValues.VA[GTValues.EV], 100).forEach(builder => {
        builder
            .damageRate(100)
            .requiredMicroverse(3) // Shattered
    })

    if (doComplexMicroverses) {
        microverse_mission(event, "3half", 1, 20, GTValues.VA[GTValues.EV], 100).forEach(builder => {
            builder
                .damageRate(100)
                .requiredMicroverse(1) // Normal
        })

        microverse_mission(event, "3half", 1, 20, GTValues.VA[GTValues.IV], 100).forEach(builder => {
            builder
                .damageRate(100)
                .requiredMicroverse(4) // Corrupted
        })

        microverse_mission(event, "3half", 1, 20, GTValues.VA[GTValues.UV], 100).forEach(builder => {
            builder
                .damageRate(100)
                .requiredMicroverse(6) // Necrosed (Not sure why you'd want that but hey...)
        })

        microverse_mission(event, "3half", 1, 20, GTValues.VA[GTValues.ZPM], 100).forEach(builder => {
            builder
                .damageRate(100)
                .requiredMicroverse(7) // Supercharged
        })

        // Hostile-type Microverses instead get their horde forcibly culled.
        microverse_mission(event, "3half", 1, 20, GTValues.VA[GTValues.EV], 100).forEach(builder => {
            builder
                .damageRate(-500)
                .requiredMicroverse(2) // Hostile
        })

        microverse_mission(event, "3half", 1, 20, GTValues.VA[GTValues.EV], 100).forEach(builder => {
            builder
                .damageRate(-500)
                .requiredMicroverse(5) // Abyssal
        })
    }

    // T4.5
    microverse_mission(event, "4half", 2, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "24x kubejs:aerotheum_dust",
                "16x minecraft:ender_eye",
            )
            .damageRate((doHostileMicroverse ? -20 : 2))
            .itemOutputs(
                "64x kubejs:dragon_lair_data",
                "64x kubejs:dragon_lair_data",
                "32x minecraft:dragon_breath",
                "32x kubejs:ender_dragon_scale",
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    microverse_mission(event, "4half", 2, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "24x kubejs:aerotheum_dust",
                "4x kubejs:dragon_lair_data",
            )
            .damageRate((doHostileMicroverse ? -20 : 2))
            .itemOutputs(
                "64x kubejs:ender_dragon_scale",
                "32x kubejs:ender_dragon_scale",
                "64x minecraft:dragon_breath",
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    microverse_mission(event, "4half", 2, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "24x kubejs:aerotheum_dust",
                "64x kubejs:wither_bone",
            )
            .damageRate((doHostileMicroverse ? -20 : 2))
            .itemOutputs(
                "64x kubejs:wither_realm_data",
                "16x minecraft:nether_star",
                "16x minecraft:nether_star",
                "16x minecraft:nether_star",
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    microverse_mission(event, "4half", 2, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "32x kubejs:aerotheum_dust",
                "16x minecraft:sculk_catalyst",
            )
            .damageRate((doComplexMicroverses ? -60 : (doHostileMicroverse ? -20 : 2)))
            .itemOutputs(
                "64x kubejs:deep_dark_data",
                "16x kubejs:warden_horn",
            )
            .requiredMicroverse((doComplexMicroverses ? 5 : (doHostileMicroverse ? 2 : 1))) // Abyssal : Hostile : Normal
    })

    if (doComplexMicroverses) {
        microverse_mission(event, "4half", 2, 10, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "12x kubejs:aerotheum_dust",
                    "4x kubejs:deep_dark_data",
                    "2x kubejs:warden_horn",
                )
                .inputFluids("enderio:xp_juice 500")
                .damageRate(50)
                .requiredMicroverse(5) // Abyssal
        })

        microverse_mission(event, "4half", 2, 10, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "16x kubejs:aerotheum_dust",
                    "8x kubejs:deep_dark_data",
                    "kubejs:warden_heart",
                )
                .inputFluids("enderio:xp_juice 1000")
                .damageRate(200)
                .requiredMicroverse(5) // Abyssal
        })
    }
})
