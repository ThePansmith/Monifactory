ServerEvents.recipes(event => {
    if (isNormalMode) {
    //remove dml iems
    event.remove({ output: ['hostilenetworks:blank_data_model', 'hostilenetworks:deep_learner', 'hostilenetworks:loot_fabricator', 'hostilenetworks:sim_chamber'] })

    //Issue #84
    event.recipes.gtceu.assembler('bones_to_skull')
        .itemInputs('4x minecraft:bone')
        .itemOutputs('minecraft:skeleton_skull')
        .circuit(13)
        .duration(20)
        .EUt(16)

    event.shaped(
        'minecraft:wither_skeleton_skull', [
            "AA ",
            "AB ",
            "   "
        ], {
            A: 'minecraft:skeleton_skull',
            B: 'hostilenetworks:nether_prediction'
        }
    ).noMirror().noShrink()

    event.recipes.gtceu.compressor('calcium_to_bonemeal')
        .itemInputs('2x gtceu:calcium_dust')
        .itemOutputs('minecraft:bone_meal')
        .duration(20)
        .EUt(4)



    event.shaped(
        'hostilenetworks:blank_data_model', [
            'BBA',
            'DCA',
            'BBA'
        ], {
            A: 'gtceu:fine_gold_wire',
            B: 'gtceu:electrical_steel_plate',
            C: '#gtceu:circuits/lv',
            D: 'kubejs:pulsating_mesh'
        }
    )

    event.shaped(
        'kubejs:dark_steel_machine_hull', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'gtceu:dark_steel_plate',
            B: 'gtceu:lv_machine_hull'
        }
    )

		event.recipes.gtceu.assembler('dark_steel_machine_hull')
        .itemInputs('gtceu:lv_machine_hull', '8x #forge:plates/dark_steel')
        .itemOutputs('kubejs:dark_steel_machine_hull')
        .duration(50)
        .EUt(16)
				.circuit(8)

    event.shaped(
        'hostilenetworks:sim_chamber', [
            'ACA',
            'BDB',
            'ABA'
        ], {
            A: 'kubejs:pulsating_mesh',
            B: '#gtceu:circuits/lv',
            C: 'minecraft:glass_pane',
            D: 'kubejs:dark_steel_machine_hull'
        }
    )

    event.shaped(
        'hostilenetworks:loot_fabricator', [
            'ACA',
            'BDB',
            'AHA'
        ], {
            A: 'gtceu:energetic_alloy_plate',
            B: '#gtceu:circuits/mv',
            C: 'minecraft:glass_pane',
            D: 'kubejs:dark_steel_machine_hull',
            H: 'minecraft:hopper'
        }
    )

    event.replaceInput({ id: 'hostilenetworks:living_matter/nether_to_ender' }, 'minecraft:end_stone', 'minecraft:ender_pearl')


    //PPC
    event.remove({ output: 'hostilenetworks:prediction_matrix' })

    event.recipes.gtceu.alloy_smelter('pulsating_polymer_clay')
        .itemInputs(['kubejs:pulsating_dust', 'minecraft:clay'])
        .itemOutputs('4x hostilenetworks:prediction_matrix')
        .duration(240)
        .EUt(7)

    event.recipes.gtceu.electrolyzer('gt_quartz')
        .itemInputs('4x minecraft:glass')
        .itemOutputs('minecraft:quartz')
        .duration(100)
        .EUt(20)

    event.recipes.gtceu.alloy_smelter('carbon_fiber_mesh_coal')
        .itemInputs(['4x minecraft:string', 'gtceu:coal_dust'])
        .itemOutputs('gtceu:carbon_fiber_mesh')
        .duration(100)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter('carbon_fiber_mesh_carbon')
        .itemInputs(['4x minecraft:string', 'gtceu:carbon_dust'])
        .itemOutputs('gtceu:carbon_fiber_mesh')
        .duration(100)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter('pulsating_mesh')
        .itemInputs(['gtceu:carbon_fiber_mesh', '4x kubejs:pulsating_dust'])
        .itemOutputs('kubejs:pulsating_mesh')
        .duration(200)
        .EUt(16)

        //IMPOSSIBLE REALM DATA
        let predictions = [
            ['overworld', 1],
            ['nether', 2],
            ['end', 4]
        ]
        predictions.forEach(item => {
            event.shaped(
                Item.of('kubejs:impossible_realm_data', item[1]), [
                    'ABA',
                    'BAB',
                    'ABA'
                ], {
                    A: `hostilenetworks:${item[0]}_prediction`,
                    B: 'kubejs:solidified_experience'
                }
            )
        })
        
        event.shaped(
            '2x kubejs:impossible_realm_data', [
                'ABA',
                'BAB',
                'ABA'
            ], {
                A: 'hostilenetworks:nether_prediction',
                B: 'kubejs:solidified_experience'
            }
        )
        event.shaped(
            '4x kubejs:impossible_realm_data', [
                'ABA',
                'BAB',
                'ABA'
            ], {
                A: 'hostilenetworks:end_prediction',
                B: 'kubejs:solidified_experience'
            }
        )

        event.recipes.gtceu.extractor('extract_quantum_flux')
            .itemInputs('kubejs:impossible_realm_data')
            .itemOutputs('kubejs:quantum_flux')
            .duration(100)
            .EUt(3000)

        //LAIR DATA
        let lairs = [
            ['deep_dark', 'overworld', 'deepslate'],
            ['wither_realm', 'nether', 'netherrack'],
            ['dragon_lair', 'end', 'endstone']
        ]
        lairs.forEach(item =>{
            event.shaped(
                `kubejs:${item[0]}_data`, [
                    'ABB',
                    'BBB',
                    'BBB'
                ], {
                    A: 'kubejs:impossible_realm_data',
                    B: `hostilenetworks:${item[1]}_prediction`
                }
            )
            event.recipes.gtceu.canner(`canning_${item[0]}_data`)
                .itemInputs('1x kubejs:impossible_realm_data', `6x hostilenetworks:${item[1]}_prediction`)
                .inputFluids(Fluid.of('enderio:xp_juice', 140))
                .itemOutputs(`1x kubejs:${item[0]}_data`)
                .duration(20)
                .EUt(60)
            event.recipes.gtceu.canner(`advanced_canning_${item[0]}_data`)
                .itemInputs([`3x gtceu:small_${item[2]}_dust`, `8x hostilenetworks:${item[1]}_prediction`])
                .inputFluids(Fluid.of('enderio:xp_juice', 500))
                .itemOutputs(`2x kubejs:${item[0]}_data`)
                .duration(20)
                .EUt(960)
        })


    }
})

ItemEvents.rightClicked(event => {
    if (event.item.id === 'hostilenetworks:overworld_prediction') {
        event.player.xp += 10
        event.item.count--
    }
    if (event.item.id === 'hostilenetworks:nether_prediction') {
        event.player.xp += 20
        event.item.count--
    }
    if (event.item.id === 'hostilenetworks:end_prediction') {
        event.player.xp += 25
        event.item.count--
    }
})

// Crafting recipes for the models
ServerEvents.recipes(event => {
    if (isNormalMode) {
    var dataModelData = [
        ['blaze', 'minecraft:blaze_powder', 'nether', true],
        ['creeper', 'minecraft:gunpowder', 'overworld', true],
        ['ender_dragon', 'kubejs:dragon_lair_data', 'end', true],
        ['enderman', 'minecraft:ender_pearl', 'end', true],
        ['ghast', 'minecraft:ghast_tear', 'nether', true],
        ['guardian', 'minecraft:prismarine_shard', 'overworld', true],
        ['shulker', 'minecraft:diamond', 'end', true],
        ['skeleton', 'minecraft:bone', 'overworld', false],
        ['slime', 'minecraft:slime_ball', 'overworld', false],
        ['spider', 'minecraft:spider_eye', 'overworld', true],
        ['warden', 'kubejs:deep_dark_data', 'overworld', true],
        ['witch', 'minecraft:glass_bottle', 'overworld', true],
        ['wither', 'minecraft:nether_star', 'nether', false],
        ['wither_skeleton', 'minecraft:wither_skeleton_skull', 'nether', true],
        ['zombie', 'minecraft:rotten_flesh', 'overworld', false],
        ['thermal/thermal_elemental', ['kubejs:aerotheum_dust', 'kubejs:cryotheum_dust', 'kubejs:petrotheum_dust', 'kubejs:pyrotheum_dust'], 'overworld', true]
    ]

    dataModelData.forEach(modeldata => {
        // Is this hacky? Yes. Do i care? No.
        var recipeIngredients = [
            'hostilenetworks:blank_data_model',
            modeldata[1]
        ]

        if (modeldata[3]) {
            recipeIngredients.push('7x hostilenetworks:' + modeldata[2] + '_prediction')
        }

        event.shapeless(
            Item.of('hostilenetworks:data_model', '{data_model:{data:6,id:\"hostilenetworks:' + modeldata[0] + '\"}}'),
            recipeIngredients
        )
    })
    }
})
