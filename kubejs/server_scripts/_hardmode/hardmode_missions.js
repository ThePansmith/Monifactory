ServerEvents.recipes(event => {

    // Stabilized miners recipe
    function stabilized_miners(tier) {
        event.recipes.gtceu.assembly_line(`stable_t_${tier}`)
            .itemInputs(`kubejs:microminer_t${tier}`, 'kubejs:heart_of_a_universe', '4x kubejs:hadal_shard', '24x gtceu:uv_field_generator', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate')
            .inputFluids('gtceu:rocket_fuel 40800', 'gtceu:omnium 576', 'gtceu:neutronium 576')
            .itemOutputs(`kubejs:stabilized_microminer_t${tier}`)
            .duration(125)
            .EUt(1966080)
    }

    //Manual fix for half tier miners
    if (isHardMode) {
        event.recipes.gtceu.assembly_line(`stable_t4half`)
            .itemInputs(`kubejs:microminer_t4half`, 'kubejs:heart_of_a_universe', '4x kubejs:hadal_shard', '24x gtceu:uv_field_generator', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate')
            .inputFluids('gtceu:rocket_fuel 40800', 'gtceu:omnium 576', 'gtceu:neutronium 576')
            .itemOutputs(`kubejs:stabilized_microminer_t4half`)
            .duration(125)
            .EUt(1966080)

        event.recipes.gtceu.assembly_line(`stable_t8half`)
            .itemInputs(`kubejs:microminer_t8half`, 'kubejs:heart_of_a_universe', '4x kubejs:hadal_shard', '24x gtceu:uv_field_generator', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate')
            .inputFluids('gtceu:rocket_fuel 40800', 'gtceu:omnium 576', 'gtceu:neutronium 576')
            .itemOutputs(`kubejs:stabilized_microminer_t8half`)
            .duration(125)
            .EUt(1966080)
    }

    // Pristine matter recipe
    function pristine_matter(tier, microtier) {
        if (microtier == 1) {
            event.recipes.gtceu.basic_microverse(`pristine_${tier}`)
                .notConsumable(`kubejs:stabilized_microminer_t${tier}`)
                .itemOutputs(`kubejs:pristine_matter_t${tier}`)
                .duration(470.4*20)
                .EUt(30720)
        }
        if (microtier == 2) {
            event.recipes.gtceu.advanced_microverse(`pristine_${tier}`)
                .notConsumable(`kubejs:stabilized_microminer_t${tier}`)
                .itemOutputs(`kubejs:pristine_matter_t${tier}`)
                .duration(470.4*20)
                .EUt(30720)
        }
        if (microtier == 3) {
            event.recipes.gtceu.advanced_microverse_ii(`pristine_${tier}`)
                .notConsumable(`kubejs:stabilized_microminer_t${tier}`)
                .itemOutputs(`kubejs:pristine_matter_t${tier}`)
                .duration(470.4*20)
                .EUt(30720)
        }
    }

    if (isHardMode) {
        // T4.5  Microminer
        event.recipes.extendedcrafting.shaped_table(
            'kubejs:microminer_t4half', [
                '  LGL  ',
                'F ltl F',
                'AllcllA',
                ' llfll ',
                'ltctctl',
                'ldlfldl',
                '  TTT  '
            ], {
                L: 'kubejs:reinforced_mining_laser',
                G: 'kubejs:basic_micro_miner_guidance_system',
                F: 'redstone_arsenal:flux_sword',
                l: 'gtceu:double_lumium_plate',
                t: 'gtceu:double_tungsten_carbide_plate',
                A: 'gtceu:hv_robot_arm',
                c: 'kubejs:signalum_micro_miner_core',
                f: 'gtceu:hv_field_generator',
                d: 'thermal:dynamo_compression',
                T: 'kubejs:energetic_thruster'
            }
        ).id('kubejs:microminer/t4half')

        // T8.5  Microminer
        event.recipes.extendedcrafting.shaped_table(
            'kubejs:microminer_t8half', [
                '   AAA   ',
                '  ANNNA  ',
                ' GNTTTNG ',
                ' NNTFTNN ',
                ' NTECETN ',
                'NNTSFSTNN',
                'NTTQWQTTN',
                'NTTCWCTTN',
                ' XXX XXX '
            ], {
                A: 'kubejs:supercharged_laser_array',
                N: 'gtceu:double_naquadah_alloy_plate',
                G: 'kubejs:advanced_micro_miner_guidance_system',
                T: 'gtceu:double_trinium_plate',
                F: 'gtceu:zpm_field_generator',
                E: 'gtceu:zpm_emitter',
                C: 'kubejs:energy_core',
                S: 'gtceu:naquadah_alloy_frame',
                Q: 'gtceu:luv_quantum_chest',
                W: 'kubejs:warp_core',
                C: 'kubejs:warp_controller',
                X: 'kubejs:warp_engine'
            }
        ).id('kubejs:microminer/t8half')

        for (let i = 1; i <= 8; i++) {
            stabilized_miners(i)
        }
        for (let i = 1; i <= 3; i++) {
            pristine_matter(i, 1)
        }
        for (let i = 4; i <= 5; i++) {
            pristine_matter(i, 2)
        }
        for (let i = 6; i <= 8; i++) {
            pristine_matter(i, 3)
        }
        pristine_matter('4half', 2)
        pristine_matter('8half', 3)

        // Tier 4.5 missions
        event.recipes.gtceu.advanced_microverse_ii('t4half_one')
            .itemInputs(
                'kubejs:microminer_t4half',
                '8x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                'minecraft:oak_sapling'
            )
            .itemOutputs(
                '48x minecraft:skeleton_skull',
                '64x minecraft:bone',
                '64x minecraft:bone',
                '64x minecraft:bone',
                '48x minecraft:zombie_head',
                '64x minecraft:rotten_flesh',
                '64x minecraft:rotten_flesh',
                '64x minecraft:rotten_flesh',
                '48x minecraft:creeper_head',
                '64x minecraft:gunpowder',
                '64x minecraft:slime_block',
                '64x kubejs:guardian_scale'
            )
            .duration(40*20)
            .EUt(3750)

        event.recipes.gtceu.advanced_microverse_ii('t4half_two')
            .itemInputs(
                'kubejs:microminer_t4half',
                '8x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                'minecraft:netherrack'
            )
            .itemOutputs(
                '50x minecraft:blaze_rod',
                '50x minecraft:blaze_rod',
                '50x thermal:blizz_rod',
                '50x thermal:blizz_rod',
                '50x thermal:blitz_rod',
                '50x thermal:blitz_rod',
                '50x thermal:basalz_rod',
                '50x thermal:basalz_rod',
                '64x minecraft:ghast_tear',
                '48x minecraft:wither_skeleton_skull',
                '64x kubejs:wither_bone',
                '64x kubejs:wither_bone', // drops of evil aren't in the pack
                '64x minecraft:magma_cream',
                '64x minecraft:magma_cream'
            )
            .duration(50*20)
            .EUt(3750)

        event.recipes.gtceu.advanced_microverse_ii('t4half_three')
            .itemInputs(
                'kubejs:microminer_t4half',
                '8x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                'minecraft:end_stone'
            )
            .itemOutputs(
                '48x enderio:enderman_head',
                '64x gtceu:ender_pearl_block',
                '64x minecraft:shulker_shell',
                '64x minecraft:shulker_shell' // shulker pearls aren't in the pack
            )
            .duration(60*20)
            .EUt(3750)

        event.recipes.gtceu.advanced_microverse_ii('t4half_four')
            .itemInputs(
                'kubejs:microminer_t4half',
                '8x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                '16x minecraft:ender_eye'
            )
            .itemOutputs(
                '64x kubejs:dragon_lair_data',
                '64x kubejs:dragon_lair_data',
                '64x kubejs:dragon_lair_data',
                '64x kubejs:dragon_lair_data',
                '64x minecraft:dragon_breath',
                '64x kubejs:ender_dragon_scale',
                'minecraft:dragon_head'
            )
            .duration(100*20)
            .EUt(30720)

        event.recipes.gtceu.advanced_microverse_ii('t4half_five')
            .itemInputs(
                'kubejs:microminer_t4half',
                '16x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                '8x kubejs:dragon_lair_data'
            )
            .itemOutputs(
                '64x kubejs:ender_dragon_scale',
                '64x kubejs:ender_dragon_scale',
                '64x kubejs:ender_dragon_scale',
                '64x kubejs:ender_dragon_scale',
                '64x kubejs:ender_dragon_scale',
                '64x kubejs:ender_dragon_scale',
                '64x minecraft:dragon_breath',
                '64x minecraft:dragon_breath',
                '64x minecraft:dragon_breath',
                '64x minecraft:dragon_breath'
            )
            .duration(100*20)
            .EUt(30720)

        event.recipes.gtceu.advanced_microverse_ii('t4half_six')
            .itemInputs(
                'kubejs:microminer_t4half',
                '8x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                '64x kubejs:wither_bone'
            )
            .itemOutputs(
                '64x kubejs:wither_realm_data',
                '64x kubejs:wither_realm_data',
                '48x gtceu:nether_star_block'
            )
            .duration(100*20)
            .EUt(30720)

         event.recipes.gtceu.advanced_microverse_ii('t4half_seven')
            .itemInputs(
                'kubejs:microminer_t4half',
                '8x kubejs:quantum_flux',
                '64x kubejs:aerotheum_dust',
                '16x minecraft:sculk_catalyst'
            )
            .itemOutputs(
                '64x kubejs:deep_dark_data',
                '64x kubejs:deep_dark_data',
                '32x kubejs:warden_horn'
            )
            .duration(100*20)
            .EUt(30720)

        //Initial Sculk Catalyst Mission

        event.recipes.gtceu.advanced_microverse_ii('t6_five_hm')
        .itemInputs(
            'kubejs:microminer_t6',
            '16x kubejs:quantum_flux',
            '16x kubejs:stabilized_curium',
            '8x gtceu:manyullyn_ingot',
            '4x gtceu:void_empowered_block'
        )
        .itemOutputs(
            'minecraft:sculk_catalyst'
        )
        .duration(100*20)
        .EUt(30720)

        // Tier 8.5 missions
        event.recipes.gtceu.advanced_microverse_iii('t8half_one')
            .itemInputs(
                'kubejs:microminer_t8half',
                '8x gtceu:neutron_reflector',
                '24x gtceu:naquadah_block',
                'kubejs:warden_horn'
            )
            .itemOutputs(
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore'
            )
            .duration(450*20)
            .EUt(250000)

        event.recipes.gtceu.advanced_microverse_iii('t8half_two')
            .itemInputs(
                'kubejs:microminer_t8half',
                '8x kubejs:gem_sensor',
                '24x gtceu:naquadah_block',
                'kubejs:warden_horn'
            )
            .itemOutputs(
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore'
            )
            .duration(450*20)
            .EUt(250000)
    }
})
