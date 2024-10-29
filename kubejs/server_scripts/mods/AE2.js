ServerEvents.recipes(event => {

    // Base AE2
    // ME Controller
    event.remove({ id: 'ae2:network/blocks/controller' })
    event.shaped(
        Item.of('ae2:controller'), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:dark_steel_plate',
        B: 'gtceu:fluix_plate',
        C: 'ae2:energy_acceptor'
    }
    ).id('kubejs:ae2/controller')

    // Energy Acceptor
    event.remove({ id: 'ae2:network/blocks/energy_energy_acceptor' })
    event.shaped(
        Item.of('ae2:energy_acceptor'), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:electrical_steel_plate',
        B: 'gtceu:fluix_plate',
        C: 'gtceu:lv_machine_hull'
    }
    ).id('kubejs:ae2/energy_acceptor')

    // ME Chest
    event.remove({ id: 'ae2:network/blocks/storage_chest' })
    event.shaped(
        Item.of('ae2:chest'), [
        'ABA',
        'CDE',
        'FGF'
    ], {
        A: 'ae2:quartz_glass',
        B: '#ae2:illuminated_panel',
        C: 'gtceu:certus_quartz_plate',
        D: 'gtceu:aluminium_crate',
        E: 'gtceu:fluix_plate',
        F: 'gtceu:dark_steel_block',
        G: 'gtceu:nether_quartz_plate'
    }
    ).id('kubejs:ae2/chest')

    // ME Drive
    event.remove({ id: 'ae2:network/blocks/storage_drive' })
    event.shaped(
        Item.of('ae2:drive'), [
        'ABA',
        'CDC',
        'AEA'
    ], {
        A: 'gtceu:aluminium_plate',
        B: 'gtceu:mv_emitter',
        C: '#gtceu:circuits/lv',
        D: 'ae2:chest',
        E: 'gtceu:mv_sensor'
    }
    ).id('kubejs:ae2/storage_drive')

    // Inscriber
    event.remove({ id: 'ae2:network/blocks/inscribers' })
    event.shaped(
        Item.of('ae2:inscriber'), [
        'ABA',
        'CDA',
        'ABA'
    ], {
        A: 'gtceu:dark_steel_plate',
        B: 'gtceu:mv_electric_piston',
        C: 'gtceu:fluix_gem',
        D: 'gtceu:mv_machine_hull'
    }
    ).id('kubejs:ae2/inscriber')

    // Patterns
    event.remove({ id: 'ae2:network/crafting/patterns_blank' })
    event.shaped(
        Item.of('ae2:blank_pattern', 8), [
        'AAA',
        'BCB',
        'BBB'
    ], {
        A: 'gtceu:fine_silver_wire',
        B: 'gtceu:polyethylene_plate',
        C: '#gtceu:circuits/hv'
    }
    ).id('kubejs:ae2/blank_pattern')

    // Pattern Provider
    event.remove({ id: 'ae2:network/blocks/pattern_providers_interface' })
    event.shaped(
        Item.of('ae2:pattern_provider'), [
        'ABA',
        'CDE',
        'AAA'
    ], {
        A: 'gtceu:aluminium_plate',
        B: 'gtceu:mv_robot_arm',
        C: 'ae2:annihilation_core',
        D: 'gtceu:mv_machine_hull',
        E: 'ae2:formation_core'
    }
    ).id('kubejs:ae2/pattern_provider')

    // Molecular Assembler
    event.remove({ id: 'ae2:network/crafting/molecular_assembler' })
    event.shaped(
        Item.of('ae2:molecular_assembler'), [
        'ABA',
        'CDE',
        'ABA'
    ], {
        A: 'gtceu:aluminium_plate',
        B: 'ae2:quartz_glass',
        C: 'ae2:annihilation_core',
        D: 'minecraft:crafting_table',
        E: 'ae2:formation_core'
    }
    ).id('kubejs:ae2/molecular_assembler')

    // Interface
    event.remove({ id: 'ae2:network/blocks/interfaces_interface' })
    event.shaped(
        Item.of('ae2:interface'), [
        'ABA',
        'CDE',
        'AAA'
    ], {
        A: 'gtceu:aluminium_plate',
        B: 'gtceu:mv_conveyor_module',
        C: 'ae2:annihilation_core',
        D: 'gtceu:mv_machine_hull',
        E: 'ae2:formation_core'
    }
    ).id('kubejs:ae2/interface')

    // Requester
    event.remove({ id: 'merequester:requester' })
    event.shaped(
        Item.of('merequester:requester'), [
        'ABA',
        'CDC',
        'AAA'
    ], {
        A: 'gtceu:rhodium_plated_palladium_plate',
        B: 'gtceu:luv_robot_arm',
        C: '#gtceu:circuits/luv',
        D: 'gtceu:luv_machine_hull',
    }
    ).id('kubejs:ae2/requster')

    // Quantum Ring
    event.remove({ id: 'ae2:network/blocks/quantum_ring' })
    event.shaped(
        Item.of('ae2:quantum_ring'), [
        'ABA',
        'DCD',
        'ABA'
    ], {
        A: 'gtceu:stainless_steel_plate',
        B: 'ae2:calculation_processor',
        C: 'gtceu:quantum_star',
        D: 'ae2:engineering_processor'
    }
    ).id('kubejs:ae2/quantum_ring')

    // Quantum Link Chamber
    event.remove({ id: 'ae2:network/blocks/quantum_link' })
    event.shaped(
        Item.of('ae2:quantum_link'), [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'ae2:quartz_glass',
        B: 'ae2:fluix_pearl',
        C: 'gtceu:certus_quartz_plate'
    }
    ).id('kubejs:ae2/quantum_link')

    // Storage Cell Removal
    event.remove({ id: 'ae2:network/cells/item_storage_cell_1k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_4k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_16k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_64k' })
    event.remove({ id: 'ae2:network/cells/item_storage_cell_256k' })

    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_1k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_4k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_16k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_64k' })
    event.remove({ id: 'ae2:network/cells/fluid_storage_cell_256k' })

    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_2_cubed' })
    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_16_cubed' })
    event.remove({ id: 'ae2:network/cells/spatial_storage_cell_128_cubed' })

    event.remove({ id: 'ae2:network/cells/view_cell' })

    // Storage Housing
    event.remove({ id: 'ae2:network/cells/item_cell_housing' })
    event.shaped(
        Item.of('ae2:item_cell_housing'), [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'gtceu:fine_red_alloy_wire',
        B: 'gtceu:electrical_steel_plate'
    }
    ).id('kubejs:ae2/item_cell_housing')

    event.remove({ id: 'ae2:network/cells/fluid_cell_housing' })
    event.shaped(
        Item.of('ae2:fluid_cell_housing'), [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'gtceu:fine_red_alloy_wire',
        B: 'gtceu:energetic_alloy_plate'
    }
    )

    // CPUs
    event.remove({ id: 'ae2:network/crafting/cpu_crafting_unit' })
    event.shaped(
        Item.of('ae2:crafting_unit'), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'gtceu:aluminium_plate',
        B: 'ae2:calculation_processor',
        C: 'ae2:fluix_glass_cable',
        D: 'ae2:logic_processor'
    }
    ).id('kubejs:ae2/cpu_crafting_unit')

    // Charger
    event.remove({ id: 'ae2:network/blocks/crystal_processing_charger' })
    event.shaped(
        Item.of('ae2:charger'), [
        'ABA',
        'A  ',
        'ABA'
    ], {
        A: 'gtceu:dark_steel_plate',
        B: 'gtceu:certus_quartz_plate'
    }
    ).id('kubejs:ae2/charger')

    // Charged Certus

    event.remove({ id: 'ae2:charger/charged_certus_quartz_crystal' })
    event.remove({ id: 'ae2:transform/certus_quartz_crystals' })
    event.custom({
        "type": "ae2:charger",
        "ingredient": {
            "item": "gtceu:certus_quartz_gem"
        },
        "result": {
            "item": 'gtceu:charged_certus_quartz_gem'
        }
    }).id('kubejs:ae2/charged_certus_quartz_gem')

    event.recipes.gtceu.autoclave("charged_autoclave")
        .itemInputs(["gtceu:certus_quartz_gem"])
        .inputFluids("gtceu:distilled_water 100")
        .itemOutputs('gtceu:charged_certus_quartz_gem')
        .duration(20)
        .EUt(480)

    // Matter Condenser
    event.remove({ id: 'ae2:network/blocks/io_condenser' })
    event.shaped(
        Item.of('ae2:condenser'), [
        'AAA',
        'ABA',
        'AAA'
    ], {
        A: 'gtceu:titanium_plate',
        B: 'gtceu:quantum_star'
    }
    ).id('kubejs:ae2/matter_condensor')

    // Storage Components
    const storage_tiers = [
        '1k',
        '4k',
        '16k',
        '64k',
        '256k',
        '1m',
        '4m',
        '16m',
        '64m',
        '256m'
    ]
    const storage_component_ingredients = [
        ['mv', 'minecraft:glass', 'ae2:calculation_processor', 'gtceu:polyethylene', 1],
        ['hv', 'minecraft:glass', 'ae2:engineering_processor', 'gtceu:polyethylene', 1],
        ['ev', 'ae2:logic_processor', 'ae2:engineering_processor', 'gtceu:polyethylene', 1],
        ['iv', 'ae2:logic_processor', 'ae2:engineering_processor', 'gtceu:polytetrafluoroethylene', 1],
        ['iv', 'ae2:engineering_processor', 'megacells:accumulation_processor', 'gtceu:polytetrafluoroethylene', 2],
        ['luv', 'ae2:engineering_processor', 'megacells:accumulation_processor', 'gtceu:polytetrafluoroethylene', 2],
        ['luv', 'megacells:accumulation_processor', 'gtceu:quantum_eye', 'gtceu:polytetrafluoroethylene', 2],
        ['zpm', 'megacells:accumulation_processor', 'gtceu:quantum_eye', 'gtceu:polybenzimidazole', 2],
        ['zpm', 'megacells:accumulation_processor', 'gtceu:quantum_eye', 'gtceu:polybenzimidazole', 2],
    ]
    for (let index = 0; index < storage_component_ingredients.length; index++) {
        let curTier;
        if(index < 4) curTier = Item.of('ae2:cell_component_' + storage_tiers[index+1])
        else curTier = Item.of('megacells:cell_component_' + storage_tiers[index+1])

        let curIngredients = storage_component_ingredients[index];

        let toRemove;
        if(index < 4) toRemove = `ae2:network/cells/item_storage_components_cell_${storage_tiers[index+1]}_part`
        else toRemove = `megacells:cells/cell_component_${storage_tiers[index+1]}`

        let prevTier;
        if(index <= 4) prevTier = Item.of('ae2:cell_component_' + storage_tiers[index])
        else prevTier = Item.of('megacells:cell_component_' + storage_tiers[index])
        
        event.remove({ id: toRemove })
        event.shaped(
            Item.of(curTier), [
            'ABA',
            'SCS',
            'ASA'
        ], {
            A: curIngredients[1],
            B: curIngredients[2],
            C: '#gtceu:circuits/' + curIngredients[0],
            S: Item.of(prevTier)
        }
        ).id('kubejs:ae2/storage_component_' + storage_tiers[index+1])

        //Cheaper ramp up to reduce exponential effect
        event.recipes.gtceu.assembler(`kubejs:ae2/${storage_tiers[index+1]}_storage_assembler`)
            .itemInputs(
                Item.of(prevTier, 2),
                Item.of(curIngredients[1], 2),
                Item.of(curIngredients[2], 1),
                '#gtceu:circuits/' + curIngredients[0]
            )
            .inputFluids(Fluid.of(curIngredients[3], 144*curIngredients[4]))
            .itemOutputs(curTier)
            .EUt(240)
            .duration(200)
            .cleanroom(CleanroomType.CLEANROOM)
    }

    // 1K Storage Component recipes
    event.remove({ id: 'ae2:network/cells/item_storage_components_cell_1k_part' })
    for (let index = 0; index < 5; index++) {
        let circuit = '#gtceu:circuits/'  + GTValues.VN[index+1].toLowerCase()
        let glass = index == 0 ? 'minecraft:glass' : 'gtceu:tempered_glass'
        event.shaped(
            Item.of('ae2:cell_component_1k', Math.pow(2, index)), 
            [
                'ABA',
                'BCB',
                'ABA'
            ], {
                A: glass,
                B: 'gtceu:red_alloy_plate',
                C: circuit
            }
        ).id('kubejs:ae2/storage_component_1k_' + Math.pow(2, index))
    }

    // Wireless Receiver
    event.remove({ id: 'ae2:network/wireless_part' })
    event.shaped(
        Item.of('ae2:wireless_receiver'), [
        ' A ',
        'BCB',
        ' B '
    ], {
        A: 'gtceu:ev_emitter',
        B: 'gtceu:titanium_plate',
        C: 'ae2:fluix_pearl'
    }
    ).id('kubejs:ae2/wirelss_receiver')

    // AE2 Cards
    event.remove({ id: 'ae2:materials/basiccard' })
    event.shaped(
        'ae2:basic_card', [
        'AB ',
        'ACB',
        'AB '
    ], {
        A: 'gtceu:fine_copper_wire',
        B: 'gtceu:iron_plate',
        C: 'ae2:calculation_processor'
    }
    ).id('kubejs:ae2/basic_card')
    event.remove({ id: 'ae2:materials/advancedcard' })
    event.shaped(
        'ae2:advanced_card', [
        'AB ',
        'ACB',
        'AB '
    ], {
        A: 'gtceu:fine_aluminium_wire',
        B: 'gtceu:electrical_steel_plate',
        C: 'ae2:calculation_processor'
    }
    ).id('kubejs:ae2/advanced_card')
    event.remove({ id: 'ae2:tools/network_memory_card' })
    event.shapeless('ae2:memory_card', ['#gtceu:circuits/hv', 'ae2:basic_card']).id('kubejs:ae2/memory_card')

    //Level Emitter
    event.remove({ id: 'ae2:network/parts/level_emitter' })
    event.shapeless('ae2:level_emitter', ['minecraft:redstone_torch', 'gtceu:aluminium_plate', 'ae2:calculation_processor', '#forge:rods/stainless_steel']).id('kubejs:ae2/level_emitter')

    //Energy level Emitter
    event.remove({ id: 'ae2:network/parts/energy_level_emitter' })
    event.shapeless('ae2:energy_level_emitter', ['ae2:level_emitter', '#forge:gems/certus_quartz']).id('kubejs:ae2/energy_level_emitter').id('kubejs:ae2/energy_level_emitter')

    // Processors
    event.remove({ id: 'ae2:inscriber/calculation_processor_print' })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": "gtceu:certus_quartz_gem"
            },
            "top": {
                "item": "ae2:calculation_processor_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "item": "ae2:printed_calculation_processor"
        }
    }).id('kubejs:ae2/calculation_processor_print')

    event.remove({ id: 'ae2:inscriber/silicon_print' })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": "ae2:silicon"
            },
            "top": {
                "item": "ae2:silicon_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "item": "ae2:printed_silicon"
        }
    }).id('kubejs:ae2/silicon_print')

    event.remove({ id: 'ae2:inscriber/logic_processor' })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "tag": "gtceu:circuits/lv"
            },
            "top": {
                "item": "ae2:printed_logic_processor"
            }
        },
        "mode": "press",
        "result": {
            "item": "ae2:logic_processor"
        }
    }).id('kubejs:ae2/logic_processor')

    event.remove({ id: 'ae2:inscriber/calculation_processor' })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "tag": "gtceu:circuits/lv"
            },
            "top": {
                "item": "ae2:printed_calculation_processor"
            }
        },
        "mode": "press",
        "result": {
            "item": "ae2:calculation_processor"
        }
    }).id('kubejs:ae2/calculation_processor')

    event.remove({ id: 'ae2:inscriber/engineering_processor' })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "tag": "gtceu:circuits/lv"
            },
            "top": {
                "item": "ae2:printed_engineering_processor"
            }
        },
        "mode": "press",
        "result": {
            "item": "ae2:engineering_processor"
        }
    }).id('kubejs:ae2/engineering_processor')

    //Storage bus
    event.remove({ id: 'ae2:network/parts/storage_bus' })
    event.shapeless('ae2:storage_bus', ['ae2:interface', 'gtceu:mv_electric_piston', 'gtceu:mv_electric_pump']).id('kubejs:ae2/storage_bus')

    //busses
    event.remove({ id: 'ae2:network/parts/import_bus' })
    event.shaped(
        'ae2:export_bus', [
        ' A ',
        'DBD',
        ' C '
    ], {
        A: 'gtceu:mv_electric_pump',
        B: 'ae2:formation_core',
        C: 'gtceu:mv_electric_piston',
        D: 'gtceu:aluminium_plate'
    }).id('kubejs:ae2/export_bus')
    event.remove({ id: 'ae2:network/parts/export_bus' })
    event.shaped(
        'ae2:import_bus', [
        ' A ',
        'DBD',
        ' C '
    ], {
        A: 'gtceu:mv_electric_pump',
        B: 'ae2:annihilation_core',
        C: 'gtceu:mv_electric_piston',
        D: 'gtceu:aluminium_plate'
    }).id('kubejs:ae2/import_bus')

    //P2P
    event.remove({ id: 'ae2:network/parts/tunnels_me' })
    event.shaped(
        'ae2:me_p2p_tunnel', [
        ' A ',
        'ABA',
        'CCC'
    ], {
        A: 'gtceu:stainless_steel_plate',
        B: 'ae2:engineering_processor',
        C: 'gtceu:fluix_plate'
    }).id('kubejs:ae2/p2p_tunnel')

    //cables

    event.remove({ id: 'ae2:network/parts/quartz_fiber_part' })
    event.remove({ id: 'gtceu:shapeless/gem_to_gem_flawedgem_nether_quartz' })
    event.remove({ id: "ae2:network/cables/glass_fluix" })

    event.recipes.gtceu.wiremill('kubejs:ae2/quartz_fiber')
        .itemInputs('gtceu:certus_quartz_gem')
        .itemOutputs('ae2:quartz_fiber')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter('kubejs:ae2/fluix_cable')
        .itemInputs(['gtceu:fluix_dust', 'ae2:quartz_fiber'])
        .itemOutputs('2x ae2:fluix_glass_cable')
        .duration(50)
        .EUt(16)


    // Skystone
    event.recipes.gtceu.macerator('sky_stone_dust')
        .itemInputs('ae2:sky_stone_block')
        .itemOutputs('ae2:sky_dust')
        .duration(120)
        .EUt(GTValues.VA[GTValues.ULV])
    
    //Certus

    event.remove({ id: /^ae2:transform.*budding_quartz$/ })
    event.replaceInput(
        {},
        'ae2:charged_certus_quartz_crystal',
        'gtceu:charged_certus_quartz_gem'
    )

    event.custom({
        "type": "ae2:transform",
        "ingredients": [
            {
                "item": "gtceu:charged_certus_quartz_gem"
            },
            {
                "tag": "forge:storage_blocks/certus_quartz"
            }
        ],
        "result": {
            "count": 1,
            "item": "ae2:damaged_budding_quartz"
        }
    })
    event.custom({
        "type": "ae2:transform",
        "ingredients": [
            {
                "item": "gtceu:charged_certus_quartz_gem"
            },
            {
                "item": "ae2:damaged_budding_quartz"
            }
        ],
        "result": {
            "count": 1,
            "item": "ae2:chipped_budding_quartz"
        }
    })
    event.custom({
        "type": "ae2:transform",
        "ingredients": [
            {
                "item": "gtceu:charged_certus_quartz_gem"
            },
            {
                "item": "ae2:chipped_budding_quartz"
            }
        ],
        "result": {
            "count": 1,
            "item": "ae2:flawed_budding_quartz"
        }
    })
    event.custom({
        "type": "ae2:transform",
        "ingredients": [
            {
                "item": "gtceu:charged_certus_quartz_block"
            },
            {
                "item": "ae2:flawed_budding_quartz"
            }
        ],
        "result": {
            "count": 1,
            "item": "ae2:flawless_budding_quartz"
        }
    })

            
    // Fluix

    event.remove({ id: 'ae2:transform/fluix_crystal' })
    event.remove({ id: 'ae2:transform/fluix_crystals' })
    event.remove({ id: 'ae2:misc/deconstruction_fluix_block' })
    event.custom({
        "type": "ae2:transform",
        "ingredients": [
            {
                "item": "gtceu:charged_certus_quartz_gem"
            },
            {
                "item": "minecraft:redstone"
            },
            {
                "item": "minecraft:quartz"
            }
        ],
        "result": {
            "count": 2,
            "item": "gtceu:fluix_gem"
        }
    }).id('kubejs:ae2/fluix_gem')
    event.replaceInput({ id: /ae2/ }, 'ae2:fluix_block', 'gtceu:fluix_block')

    event.recipes.gtceu.mixer('fluix')
        .itemInputs('gtceu:charged_certus_quartz_gem', 'minecraft:redstone', 'minecraft:quartz')
        .inputFluids(Fluid.of('minecraft:water', 100))
        .itemOutputs('2x gtceu:fluix_gem')
        .duration(20)
        .EUt(7)
        .circuit(3)

    // cable recipes
    event.remove({ id: "ae2:network/cables/covered_fluix" })
    event.remove({ id: "ae2qolrecipes:covered_cable/white_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/orange_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/magenta_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/light_blue_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/yellow_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/lime_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/pink_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/gray_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/light_gray_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/cyan_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/purple_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/blue_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/brown_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/green_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/red_covered_cable" })
    event.remove({ id: "ae2qolrecipes:covered_cable/black_covered_cable" })

    event.recipes.gtceu.assembler("kubejs:ae2/fluix_covered_cable_rubber")
        .itemInputs("#ae2:glass_cable")
        .inputFluids('gtceu:rubber 144')
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.assembler("kubejs:ae2/fluix_covered_cable_silicone")
        .itemInputs("#ae2:glass_cable")
        .inputFluids('gtceu:silicone_rubber 72')
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(100)
        .EUt(7)
    event.recipes.gtceu.assembler("kubejs:ae2/fluix_covered_cable_styrene_butadiene")
        .itemInputs("#ae2:glass_cable")
        .inputFluids('gtceu:styrene_butadiene_rubber 36')
        .itemOutputs("ae2:fluix_covered_cable")
        .duration(100)
        .EUt(7)

    // Presses
    function pressengrave(name, press, lens) {
        event.recipes.gtceu.laser_engraver(name)
            .itemInputs('gtceu:vanadium_steel_block')
            .notConsumable(lens)
            .itemOutputs(press)
            .duration(1600)
            .EUt(120)
    }

    pressengrave("kubejs:ae2/engineering_processor_press", 'ae2:engineering_processor_press', '#forge:lenses/red');
    pressengrave("kubejs:ae2/calculation_processor_press", 'ae2:calculation_processor_press', '#forge:lenses/blue');
    pressengrave("kubejs:ae2/silicon_press", "ae2:silicon_press", '#forge:lenses/light_blue');
    pressengrave("kubejs:ae2/logic_processor_press", 'ae2:logic_processor_press', '#forge:lenses/green');
    pressengrave("kubejs:ae2/name_press", 'ae2:name_press', '#forge:lenses/white');

    //MEGA cells

    event.remove({ id: 'megacells:inscriber/accumulation_processor_press' })
    event.recipes.gtceu.laser_engraver("kubejs:mega/accumulation_processor_press")
        .itemInputs('gtceu:stainless_steel_block')
        .notConsumable('#forge:lenses/magenta')
        .itemOutputs('megacells:accumulation_processor_press')
        .duration(1600)
        .EUt(240)
        .cleanroom(CleanroomType.CLEANROOM)

    event.remove({ id: "megacells:inscriber/accumulation_processor_print" })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": "gtceu:black_steel_ingot"
            },
            "top": {
                "item": "megacells:accumulation_processor_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "item": "megacells:printed_accumulation_processor"
        }
    }).id('kubejs:mega/accumulation_processor_print')

    event.remove({ id: "megacells:inscriber/accumulation_processor" })
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "bottom": {
                "item": "ae2:printed_silicon"
            },
            "middle": {
                "tag": "gtceu:circuits/hv"
            },
            "top": {
                "item": "megacells:printed_accumulation_processor"
            }
        },
        "mode": "press",
        "result": {
            "item": "megacells:accumulation_processor"
        }
    }).id('kubejs:mega/accumulation_processor')

    event.remove({ id: /megacells:cells\/standard\/.*storage_cell.*m$/ })

    event.remove({ id: "megacells:cells/mega_item_cell_housing" })
    event.shaped(
        Item.of('megacells:mega_item_cell_housing'), [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'gtceu:fine_lumium_wire',
        B: 'gtceu:naquadah_plate'
    }
    ).id('kubejs:mega/item_cell_housing')

    event.remove({ id: "megacells:cells/mega_fluid_cell_housing" })
    event.shaped(
        Item.of('megacells:mega_fluid_cell_housing'), [
        'ABA',
        'B B',
        'ABA'
    ], {
        A: 'gtceu:fine_lumium_wire',
        B: 'gtceu:crystal_matrix_plate'
    }
    ).id('kubejs:mega/fluid_cell_housing')

    event.remove({ id: "megacells:cells/standard/bulk_item_cell" }) //recipe in SDA
    event.remove({ id: "megacells:crafting/bulk_cell_component" })

    event.remove({ id: "megacells:network/cell_dock"})
    event.recipes.gtceu.assembler("kubejs:mega/cell_dock")
        .itemInputs("4x gtceu:stainless_steel_plate", "8x gtceu:aluminium_plate", "gtceu:mv_emitter", "gtceu:mv_sensor", "2x #gtceu:circuits/mv")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("8x megacells:cell_dock")
        .EUt(240)
        .duration(200)

    event.remove({ id: "megacells:crafting/mega_crafting_unit"})
    event.shaped(
        Item.of('megacells:mega_crafting_unit'), [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'gtceu:black_steel_plate',
        B: 'ae2:logic_processor',
        C: 'ae2:crafting_unit',
        D: 'megacells:accumulation_processor'
    }
    ).id('kubejs:mega/cpu_crafting_unit')

    //Remove duplicates
    event.remove({ id: "megacells:crafting/mega_crafting_accelerator" })
    event.remove({ id: /megacells:network\/mega_interface/ })
    event.remove({ id: /megacells:network\/mega_pattern_provider/ })
    event.remove({ output: /megacells:sky_steel/ })

    //MAE2 compat stuff
    event.remove({ id: /mae2/, not: { id: /crafting_accelerator/ } })

    event.shaped(
        'mae2:item_multi_p2p_tunnel', [
        ' A ',
        'ABA',
        'CDC'
    ], {
        A: 'gtceu:black_steel_plate',
        B: 'megacells:accumulation_processor',
        C: 'gtceu:sapphire_plate',
        D: 'gtceu:fluix_plate'
    }).id('kubejs:ae2/multi_p2p_tunnel')


    //Greg circuits
    event.recipes.gtceu.forming_press("ae2_printed_silicon_greg")
        .notConsumable("ae2:silicon_press")
        .itemInputs("4x ae2:silicon")
        .itemOutputs("4x ae2:printed_silicon")
        .duration(10)
        .EUt(2048)

    event.recipes.gtceu.forming_press("ae2_printed_engineering_greg")
        .notConsumable("ae2:engineering_processor_press")
        .itemInputs("4x minecraft:diamond")
        .itemOutputs("4x ae2:printed_engineering_processor")
        .duration(10)
        .EUt(2048)

    event.recipes.gtceu.forming_press("ae2_printed_logic_greg")
        .notConsumable("ae2:logic_processor_press")
        .itemInputs("4x minecraft:gold_ingot")
        .itemOutputs("4x ae2:printed_logic_processor")
        .duration(10)
        .EUt(2048)

    event.recipes.gtceu.forming_press("ae2_printed_calcuation_greg")
        .notConsumable("ae2:calculation_processor_press")
        .itemInputs("4x gtceu:certus_quartz_gem")
        .itemOutputs("4x ae2:printed_calculation_processor")
        .duration(10)
        .EUt(2048)

    event.recipes.gtceu.forming_press("mega_printed_accumulation_greg")
        .notConsumable("megacells:accumulation_processor_press")
        .itemInputs("4x gtceu:black_steel_plate")
        .itemOutputs("4x megacells:printed_accumulation_processor")
        .duration(10)
        .EUt(2048)

    //Processors
    event.recipes.gtceu.circuit_assembler("ae2_engineering_processor_greg_1x")
        .itemInputs("ae2:printed_engineering_processor", "ae2:printed_silicon", "#gtceu:circuits/lv")
        .inputFluids("gtceu:soldering_alloy 72")
        .itemOutputs("ae2:engineering_processor")
        .duration(10)
        .EUt(2560)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.circuit_assembler("ae2_logic_processor_greg_1x")
        .itemInputs("ae2:printed_logic_processor", "ae2:printed_silicon", "#gtceu:circuits/lv")
        .inputFluids("gtceu:soldering_alloy 72")
        .itemOutputs("ae2:logic_processor")
        .duration(10)
        .EUt(2560)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.circuit_assembler("ae2_calculation_processor_greg_1x")
        .itemInputs("ae2:printed_calculation_processor", "ae2:printed_silicon", "#gtceu:circuits/lv")
        .inputFluids("gtceu:soldering_alloy 72")
        .itemOutputs("ae2:calculation_processor")
        .duration(10)
        .EUt(2560)
        .cleanroom(CleanroomType.CLEANROOM)
    
    event.recipes.gtceu.circuit_assembler("mega_accumulation_processor_greg_1x")
        .itemInputs("megacells:printed_accumulation_processor", "ae2:printed_silicon", "#gtceu:circuits/hv")
        .inputFluids("gtceu:soldering_alloy 72")
        .itemOutputs("megacells:accumulation_processor")
        .duration(10)
        .EUt(2560)
        .cleanroom(CleanroomType.CLEANROOM)

    // ExtendedAE

    //Pattern Modifier (NAE2's Pattern Multitool)
    event.remove({ id: 'expatternprovider:pattern_modifier' })
    event.shapeless('expatternprovider:pattern_modifier', ['ae2:calculation_processor', 'ae2:blank_pattern', 'ae2:logic_processor']).id('kubejs:epp/pattern_modifier')

    //Extended Pattern Provider
    event.remove({ id: 'expatternprovider:epp' })
    event.recipes.gtceu.assembler("kubejs:epp/ex_pattern_provider")
        .itemInputs("2x ae2:pattern_provider", "2x ae2:capacity_card", "4x gtceu:aluminium_plate")
        .itemOutputs("expatternprovider:ex_pattern_provider")
        .duration(180)
        .EUt(128)
        .circuit(4)

	event.remove({ id: 'expatternprovider:epp_upgrade' })
	event.recipes.gtceu.assembler("kubejs:epp/ex_pattern_provider_upgrade")
		.itemInputs("ae2:pattern_provider", "2x ae2:capacity_card", "4x gtceu:aluminium_plate")
		.itemOutputs("expatternprovider:pattern_provider_upgrade")
		.duration(180)
		.EUt(128)
        .circuit(3)

    // Extended Interface
    event.remove({ id: 'expatternprovider:ei' })
    event.recipes.gtceu.assembler("kubejs:epp/ex_interface")
        .itemInputs("2x ae2:interface", "2x ae2:capacity_card", "4x gtceu:aluminium_plate")
        .itemOutputs("expatternprovider:ex_interface")
        .duration(180)
        .EUt(128)
        .circuit(4)

    event.remove({ id: 'expatternprovider:ei_upgrade' })
    event.recipes.gtceu.assembler("kubejs:epp/ex_interface_upgrade")
        .itemInputs("ae2:interface", "2x ae2:capacity_card", "4x gtceu:aluminium_plate")
        .itemOutputs("expatternprovider:interface_upgrade")
        .duration(180)
        .EUt(128)
        .circuit(3)

    // Extended MA
    event.remove({ id: 'expatternprovider:ex_molecular_assembler' })
    event.recipes.gtceu.assembler("kubejs:epp/ex_molecular_assembler")
        .itemInputs("8x ae2:molecular_assembler", "8x gtceu:fluix_plate", "8x ae2:capacity_card")
        .itemOutputs("expatternprovider:ex_molecular_assembler")
        .duration(240)
        .EUt(512)

    //Extended Inscriber
    event.remove({ id: 'expatternprovider:ex_inscriber' })
    event.recipes.gtceu.assembler("kubejs:epp/ex_inscriber")
        .itemInputs("4x ae2:inscriber", "2x ae2:capacity_card")
        .itemOutputs("expatternprovider:ex_inscriber")
        .duration(180)
        .EUt(32)

    //Extended Charger
    event.remove({ id: 'expatternprovider:ex_charger' })
    event.recipes.gtceu.assembler("kubejs:epp/ex_charger")
        .itemInputs("4x ae2:charger", "2x ae2:capacity_card")
        .itemOutputs("expatternprovider:ex_charger")
        .duration(180)
        .EUt(32)

    //ME packing tape
    event.shapeless('expatternprovider:me_packing_tape', ['gtceu:basic_tape', 'gtceu:fluix_dust']).id('expatternprovider:tape')

    //Misc stuff
    event.shaped('expatternprovider:ingredient_buffer',
        [
            'ISI',
            'GCG',
            'ISI'
        ], {
            I: 'gtceu:iron_plate',
            S: 'ae2:cell_component_1k',
            G: 'ae2:quartz_glass',
            C: 'gtceu:lv_hermetic_casing'
        }
    ).id('expatternprovider:ingredient_buffer')

    event.replaceInput({ id: 'expatternprovider:crystal_fixer' }, 'minecraft:iron_ingot', 'gtceu:iron_plate')

    event.remove({ id: 'expatternprovider:ex_drive' })
    event.recipes.gtceu.assembler("kubejs:epp/ex_drive")
        .itemInputs("2x ae2:drive", "4x gtceu:fluix_plate", "ae2:capacity_card")
        .itemOutputs("expatternprovider:ex_drive")
        .duration(240)
        .EUt(128)
        .circuit(4)

    event.remove({ id: 'expatternprovider:ex_drive_upgrade' })
    event.recipes.gtceu.assembler('kubejs:epp/ex_drive_upgrade')
        .itemInputs("1x ae2:drive", "4x gtceu:fluix_plate", "ae2:capacity_card")
        .itemOutputs('expatternprovider:drive_upgrade')
        .duration(240)
        .EUt(128)
        .circuit(3)

    // qbridge card
    event.remove({ id: 'ae2wtlib:quantum_bridge_card' })
    event.custom({
        type: 'ae2:inscriber',
        ingredients: {
            bottom: {
                item: "ae2:singularity"
            },
            middle: {
                item: "ae2:advanced_card"
            },
            top: {
                item: "ae2:singularity"
            }
        },
        mode: "press",
        result: { item: "ae2wtlib:quantum_bridge_card" }
    }).id('kubejs:ae2wtlib/quantum_bridge_card')

    //Fluix Dust Inscriber 
    // event.remove({ id: 'jei:ae2/inscriber/fluix_dust' }) (I don't know what's wrong with that recipe but it doesn't want to be removed or replaceoutput)
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": "gtceu:fluix_gem"
            }
        },
        "mode": "inscribe",
        "result": {
            "item": "gtceu:fluix_dust"
        }
    }).id('kubejs:ae2/fluix_dust_inscriber')

    //Certus Quartz Crystal
    event.remove({ input: 'ae2:certus_quartz_crystal'})
    event.replaceOutput(
        { output: 'ae2:certus_quartz_crystal' },
        'ae2:certus_quartz_crystal',
        'gtceu:certus_quartz_gem'
    )

    // Certus Quartz Block
    event.remove({ output:'gtceu:certus_quartz_block'})
    event.recipes.gtceu.compressor("kubejs:certus_quartz_block")
        .itemInputs(["4x gtceu:certus_quartz_gem"])
        .itemOutputs('gtceu:certus_quartz_block')
        .duration(300)
        .EUt(2)

    event.shaped(
        Item.of('gtceu:certus_quartz_block'),[
        'AA',
        'AA'
    ],{
        A: '#forge:gems/certus_quartz'
    }
    ).id('kubejs:gtceu/certus_quartz_block')
    
    // Vibrant Quartz Glass
    event.remove({output: 'ae2:quartz_vibrant_glass'})
    event.recipes.gtceu.alloy_smelter('kubejs:vibrant_quartz_glass')
        .itemInputs('ae2:quartz_glass', 'gtceu:vibrant_alloy_dust')
        .itemOutputs('ae2:quartz_vibrant_glass')
        .duration('200')
        .EUt('128')

    // Terminal
        event.remove({id: 'ae2:network/parts/terminals'})
        event.shapeless('ae2:terminal', ['#ae2:illuminated_panel', '#gtceu:circuits/lv']).id('kubejs:ae2_terminal')

    // Cable stuff

    const colors = ['black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'light_gray', 'lime','magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow']

    function washToFluix(wash) {
        event.shaped(
            `8x ae2:fluix_${wash}_cable`,
            [
                'CCC',
                'CDC',
                'CCC'
            ], {
                C: `#ae2:${wash}_cable`,
                D: '#ae2:can_remove_color'
            }
        )
    }
    
    function coloredCoveredCable(color) {
        event.shapeless(
            `ae2:${color}_covered_cable`,
            [
              `ae2:${color}_glass_cable`,
              `minecraft:${color}_wool`
            ]
          )
    }

    function coveredDenseCable(color) {
        event.shaped(
            `ae2:${color}_covered_dense_cable`, 
            [
                'CC',
                'CC'
            ], {
                C: `ae2:${color}_covered_cable`
            }
        )
    }

    function smartDenseCable(color) {
        event.shaped(
            `ae2:${color}_smart_dense_cable`, 
            [
                'CC',
                'CC'
            ], {
                C: `ae2:${color}_smart_cable`
            }
        )
    }

    washToFluix('covered')
    washToFluix('covered_dense')
    washToFluix('smart_dense')
    washToFluix('glass')
    washToFluix('smart')

    colors.forEach(coloredCoveredCable)
    colors.forEach(coveredDenseCable)
    colors.forEach(smartDenseCable)
})
