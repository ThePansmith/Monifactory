ServerEvents.recipes(event => {
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
                T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:energetic"}').weakNBT()
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
                C: 'draconicevolution:draconic_energy_core',
                S: 'draconicevolution:reactor_prt_stab_frame',
                Q: 'gtceu:luv_quantum_chest',
                W: 'kubejs:warp_core',
                C: 'kubejs:warp_controller',
                X: 'kubejs:warp_engine'
            }
        ).id('kubejs:microminer/t8half')


        function stabilized_miners(tier) {
            event.recipes.gtceu.assembly_line(`stable_t_${tier}`)
                .itemInputs(`kubejs:microminer_t${tier}`, 'kubejs:heart_of_a_universe', '4x draconicevolution:chaos_shard', '24x gtceu:uv_field_generator', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate', '7x gtceu:dense_iridium_plate')
                .inputFluids('gtceu:rocket_fuel 40800', 'gtceu:omnium 576', 'gtceu:neutronium 576')
                .itemOutputs(`kubejs:stabilized_microminer_t${tier}`)
                .duration(125)
                .EUt(1966080)
        }

        for (let i = 1; i <= 8; i++) {
            stabilized_miners(i)
        }        
})