/**
 * Recipe definitions for Hard Mode and Expert Mode-exclusive microverse projector missions.
 */
ServerEvents.recipes(event => {
    if (isHardMode) {
        microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "8x kubejs:quantum_flux",
                    "minecraft:mossy_cobblestone"
                )
                .inputFluids("minecraft:lava 4000")
                .itemOutputs(
                    "64x minecraft:bone",
                    "64x minecraft:rotten_flesh",
                    "32x minecraft:rotten_flesh",
                    "32x minecraft:gunpowder",
                    "16x minecraft:string"
                )
        })

        microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "8x kubejs:quantum_flux",
                    "minecraft:mud"
                )
                .inputFluids("minecraft:lava 4000")
                .itemOutputs(
                    "48x minecraft:slime_ball",
                    "24x kubejs:guardian_scale"
                )
        })

        microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "8x kubejs:quantum_flux",
                    "minecraft:redstone_block"
                )
                .inputFluids("minecraft:lava 8000")
                .itemOutputs(
                    "25x minecraft:blaze_rod",
                    "25x thermal:blizz_rod",
                    "25x thermal:blitz_rod",
                    "25x thermal:basalz_rod"
                )
        })

        microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "8x kubejs:quantum_flux",
                    "minecraft:netherrack"
                )
                .inputFluids("minecraft:lava 8000")
                .itemOutputs(
                    "24x minecraft:ghast_tear",
                    "48x kubejs:wither_bone", // drops of evil aren"t in the pack
                    "32x minecraft:magma_cream"
                )
        })

        microverse_mission(event, "2half", 1, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "8x kubejs:quantum_flux",
                    "minecraft:end_stone"
                )
                .inputFluids("minecraft:lava 12000")
                .itemOutputs(
                    "12x enderio:enderman_head",
                    "16x gtceu:ender_pearl_block",
                    "32x minecraft:shulker_shell" // shulker pearls aren"t in the pack
                )
        })

        microverse_mission(event, "4half", 2, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "8x kubejs:quantum_flux",
                    "32x kubejs:aerotheum_dust",
                    "16x minecraft:ender_eye"
                )
                .itemOutputs(
                    "64x kubejs:dragon_lair_data",
                    "64x kubejs:dragon_lair_data",
                    "32x minecraft:dragon_breath",
                    "32x kubejs:ender_dragon_scale",
                )
        })

        microverse_mission(event, "4half", 2, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "8x kubejs:quantum_flux",
                    "32x kubejs:aerotheum_dust",
                    "4x kubejs:dragon_lair_data"
                )
                .itemOutputs(
                    "64x kubejs:ender_dragon_scale",
                    "32x kubejs:ender_dragon_scale",
                    "64x minecraft:dragon_breath"
                )
        })

        microverse_mission(event, "4half", 2, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "8x kubejs:quantum_flux",
                    "32x kubejs:aerotheum_dust",
                    "64x kubejs:wither_bone"
                )
                .itemOutputs(
                    "64x kubejs:wither_realm_data",
                    "16x gtceu:nether_star_block"
                )
        })

        microverse_mission(event, "4half", 2, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "8x kubejs:quantum_flux",
                    "64x kubejs:aerotheum_dust",
                    "16x minecraft:sculk_catalyst"
                )
                .itemOutputs(
                    "64x kubejs:deep_dark_data",
                    "16x kubejs:warden_horn"
                )
        })

        microverse_mission(event, "8half", 3).forEach(builder => {
            builder
                .itemInputs("16x kubejs:quantum_flux")
                .itemInputs("64x gtceu:dilithium_gem")
                .itemInputs("kubejs:advanced_drilling_kit_ii")
                .itemInputs("gtceu:duranium_drill_head")
                .itemInputs("4x gtceu:neutron_reflector",)
                .itemInputs(
                    "6x gtceu:ruridit_block",
                    "4x kubejs:warden_horn"
                )
                .itemOutputs(
                    "64x gtceu:raw_darmstadtite",
                    "64x gtceu:raw_darmstadtite",
                    "64x gtceu:raw_darmstadtite",
                    "64x gtceu:raw_darmstadtite"
                )
        })

        microverse_mission(event, "8half", 3).forEach(builder => {
            builder
                .itemInputs("16x kubejs:quantum_flux")
                .itemInputs("64x gtceu:dilithium_gem")
                .itemInputs("kubejs:advanced_drilling_kit_ii")
                .itemInputs("gtceu:duranium_drill_head")
                .itemInputs("4x kubejs:gem_sensor")
                .itemInputs(
                    "6x gtceu:naquadah_block",
                    "4x kubejs:warden_horn"
                )
                .itemOutputs(
                    "64x gtceu:raw_dulysite",
                    "64x gtceu:raw_dulysite",
                    "64x gtceu:raw_dulysite"
                )
        })

        microverse_mission(event, "8half", 3).forEach(builder => {
            builder
                .itemInputs("16x kubejs:quantum_flux")
                .itemInputs("64x gtceu:dilithium_gem")
                .itemInputs("kubejs:advanced_drilling_kit_ii")
                .itemInputs("gtceu:duranium_drill_head")
                .itemInputs("4x nuclearcraft:plate_du")
                .itemInputs(
                    "6x gtceu:uranium_block",
                    "4x kubejs:warden_horn"
                )
                .itemOutputs(
                    "64x gtceu:raw_plutonium",
                    "64x gtceu:raw_plutonium"
                )
        })

        microverse_mission(event, "8half", 3).forEach(builder => {
            builder
                .itemInputs("16x kubejs:quantum_flux")
                .itemInputs("64x gtceu:dilithium_gem")
                .itemInputs("kubejs:advanced_drilling_kit_ii")
                .itemInputs("gtceu:duranium_drill_head")
                .itemInputs("3x gtceu:tritanium_block")
                .itemOutputs(
                    "64x gtceu:raw_electrotine",
                    "64x gtceu:raw_electrotine",
                    "64x gtceu:raw_electrotine",
                    "64x gtceu:raw_electrotine",
                    "64x gtceu:raw_electrotine"
                )
        })
    }
})
