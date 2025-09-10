/**
 * Recipe definitions for Hard Mode and Expert Mode-exclusive microverse projector missions.
 */
ServerEvents.recipes(event => {
    if(doHostileMicroverse) {
        microverse_mission(event, "2half", 1, 10, undefined, 100).forEach(builder => {
            builder
                .itemInputs("8x minecraft:tnt")
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
            .inputFluids("minecraft:lava 4000")
            .damageRate((doHostileMicroverse ? -30 : 0)) // heal microverse if hostile, damage if not
            .itemOutputs(
                "64x minecraft:bone",
                "64x minecraft:rotten_flesh",
                "32x minecraft:rotten_flesh",
                "32x minecraft:gunpowder",
                "16x minecraft:string",
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "minecraft:mud",
            )
            .inputFluids("minecraft:lava 4000")
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
            .inputFluids("minecraft:lava 8000")
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
            .inputFluids("minecraft:lava 8000")
            .damageRate((doHostileMicroverse ? -30 : 0))
            .itemOutputs(
                "24x minecraft:ghast_tear",
                "48x kubejs:wither_bone", // drops of evil aren"t in the pack
                "32x minecraft:magma_cream",
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "minecraft:end_stone",
            )
            .inputFluids("minecraft:lava 12000")
            .damageRate((doHostileMicroverse ? -30 : 0))
            .itemOutputs(
                "16x enderio:enderman_head",
                "16x minecraft:ender_pearl",
                "16x minecraft:ender_pearl",
                "16x minecraft:shulker_shell", // shulker pearls aren"t in the pack
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    // T4.5
    microverse_mission(event, "4half", 2, undefined, undefined, 100).forEach(builder => {
        builder
            .itemInputs(
                "32x kubejs:aerotheum_dust",
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
                "32x kubejs:aerotheum_dust",
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
                "32x kubejs:aerotheum_dust",
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
                "64x kubejs:aerotheum_dust",
                "16x minecraft:sculk_catalyst",
            )
            .damageRate((doHostileMicroverse ? -20 : 2))
            .itemOutputs(
                "64x kubejs:deep_dark_data",
                "16x kubejs:warden_horn",
            )
            .requiredMicroverse((doHostileMicroverse ? 2 : 1)) // Hostile : Normal
    })

    // T8.5
    microverse_mission(event, "8half", 3).forEach(builder => {
        builder
            .itemInputs("64x gtceu:dilithium_gem")
            .itemInputs("kubejs:elite_drilling_kit")
            .itemInputs("gtceu:duranium_drill_head")
            .itemInputs("4x gtceu:neutron_reflector",)
            .itemInputs(
                "6x gtceu:ruridit_block",
                "4x kubejs:warden_horn",
            )
            .damageRate(10)
            .itemOutputs(
                "64x gtceu:raw_darmstadtite",
                "64x gtceu:raw_darmstadtite",
                "64x gtceu:raw_darmstadtite",
                "64x gtceu:raw_darmstadtite",
                "64x gtceu:raw_darmstadtite",
                "64x gtceu:raw_darmstadtite",
                "64x gtceu:raw_darmstadtite"
            )
            .requiredMicroverse(1) // Normal
    })

    microverse_mission(event, "8half", 3).forEach(builder => {
        builder
            .itemInputs("64x gtceu:dilithium_gem")
            .itemInputs("kubejs:elite_drilling_kit")
            .itemInputs("gtceu:duranium_drill_head")
            .itemInputs("4x kubejs:gem_sensor")
            .itemInputs(
                "6x gtceu:naquadah_block",
                "4x kubejs:warden_horn",
            )
            .damageRate(10)
            .itemOutputs(
                "64x gtceu:raw_dulysite",
                "64x gtceu:raw_dulysite",
                "64x gtceu:raw_dulysite",
                "64x gtceu:raw_dulysite"
            )
            .requiredMicroverse(1) // Normal
    })

    microverse_mission(event, "8half", 3).forEach(builder => {
        builder
            .itemInputs("64x gtceu:dilithium_gem")
            .itemInputs("kubejs:elite_drilling_kit")
            .itemInputs("gtceu:duranium_drill_head")
            .itemInputs("4x nuclearcraft:plate_du")
            .itemInputs(
                "6x gtceu:uranium_block",
                "4x kubejs:warden_horn",
            )
            .damageRate(10)
            .itemOutputs(
                "64x gtceu:raw_plutonium",
                "64x gtceu:raw_plutonium",
            )
            .requiredMicroverse(1) // Normal
    })

    microverse_mission(event, "8half", 3).forEach(builder => {
        builder
            .itemInputs("64x gtceu:dilithium_gem")
            .itemInputs("kubejs:elite_drilling_kit")
            .itemInputs("gtceu:duranium_drill_head")
            .itemInputs("gtceu:osmium_dust")
            .damageRate(10)
            .itemOutputs(
                "32x gtceu:raw_iridosmine",
            )
            .requiredMicroverse(3) // Shattered
    })

    microverse_mission(event, "8half", 3).forEach(builder => {
        builder
            .itemInputs("64x gtceu:dilithium_gem")
            .itemInputs("kubejs:elite_drilling_kit")
            .itemInputs("gtceu:duranium_drill_head")
            .itemInputs("gtceu:iridium_dust")
            .damageRate(10)
            .itemOutputs(
                "32x gtceu:raw_osmiridium",
            )
            .requiredMicroverse(3) // Shattered
    })
})
