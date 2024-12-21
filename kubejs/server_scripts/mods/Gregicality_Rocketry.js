ServerEvents.recipes(event => {
    // Space Suit
    event.shaped(
        '4x kubejs:thermal_cloth', [
        'SSS',
        'SSS',
        'SSS'
    ], {
        S: 'minecraft:string'
    })

    event.shaped(
        'kubejs:unprepared_space_helmet', [
        'TTT',
        'T T',
        '   '
    ], {
        T: 'kubejs:thermal_cloth'
    })

    event.shaped(
        'kubejs:unprepared_space_chestpiece', [
        'T T',
        'TTT',
        'TTT'
    ], {
        T: 'kubejs:thermal_cloth'
    })

    event.shaped(
        'kubejs:unprepared_space_leggings', [
        'TTT',
        'T T',
        'T T'
    ], {
        T: 'kubejs:thermal_cloth'
    })

    event.shaped(
        'kubejs:unprepared_space_boots', [
        '   ',
        'T T',
        'T T'
    ], {
        T: 'kubejs:thermal_cloth'
    })

    event.shaped(
        'kubejs:pressure_layer', [
        'CPC',
        'CPC',
        'CPC'
    ], {
        C: 'kubejs:thermal_cloth',
        P: 'gtceu:black_steel_plate'
    })

    event.shaped(
        'kubejs:radiation_layer', [
        'CPC',
        'CPC',
        'CPC'
    ], {
        C: 'kubejs:thermal_cloth',
        P: 'gtceu:lead_plate'
    })

    const spacesuit = ['helmet', 'suit', 'pants', 'boots']
    spacesuit.forEach(part => {
        event.remove({ id: `ad_astra:space_${part}` })
        event.recipes.gtceu.assembler(`space_${part}`)
            .itemInputs(`kubejs:unprepared_space_${part}`, "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
            .itemOutputs(`ad_astra:space_${part}`)
            .duration(300)
            .EUt(30)

        event.remove({ id: `ad_astra:netherite_space_${part}` })
        event.recipes.gtceu.assembler(`netherite_space_${part}`)
            .itemInputs(`ad_astra:space_${part}`, "4x minecraft:netherite_scrap", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
            .itemOutputs(`ad_astra:netherite_space_${part}`)
            .duration(400)
            .EUt(128)
    })

    const jetsuit = ['helmet', 'pants', 'boots']
    jetsuit.forEach(part => {
        event.remove({ id: `ad_astra:jet_suit_${part}` })
        event.recipes.gtceu.assembler(`jet_suit_${part}`)
            .itemInputs(`ad_astra:netherite_space_${part}`, "4x gtceu:titanium_carbide_plate", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
            .itemOutputs(`ad_astra:jet_suit_${part}`)
            .duration(400)
            .EUt(480)
    })

    event.remove({ id: `ad_astra:jet_suit` })
    event.recipes.gtceu.assembler(`jet_suit`)
        .itemInputs(`ad_astra:netherite_space_suit`, "4x gtceu:titanium_carbide_plate", "2x kubejs:vibrant_thruster", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs(`ad_astra:jet_suit`)
        .duration(400)
        .EUt(480)



    // Nasa Work Bench
    event.recipes.extendedcrafting.shaped_table(
        'ad_astra:nasa_workbench', [
        "RPEPR",
        "PXCXP",
        "PCACP",
        "PXCXP",
        "RPEPR"
    ], {
        P: 'gtceu:double_steel_plate',
        R: 'gtceu:hv_robot_arm',
        X: 'gtceu:hv_machine_casing',
        A: 'gtceu:mv_assembler',
        E: 'gtceu:hv_emitter',
        C: '#gtceu:circuits/hv'
    }
    ).id('ad_astra:nasa_workbench')

    //Engines and Tanks
    event.remove({ output: /ad_astra:.*_engine/ })
    event.remove({ output: /ad_astra:.*_tank/ })
    event.shaped(
        'ad_astra:steel_engine', [
        ' P ',
        'PPP',
        'TTT'
    ], {
        P: 'gtceu:double_steel_plate',
        T: 'kubejs:electrical_steel_thruster'
    })

    event.shaped(
        'ad_astra:steel_tank', [
        'PTP',
        'PTP',
        'PTP'
    ], {
        P: 'gtceu:double_steel_plate',
        T: 'enderio:fluid_tank'
    })

    event.shaped(
        'ad_astra:desh_engine', [
        ' P ',
        'PPP',
        'TTT'
    ], {
        P: 'gtceu:double_tungsten_carbide_plate',
        T: 'kubejs:energetic_thruster'
    })

    event.shaped(
        'ad_astra:desh_tank', [
        'PTP',
        'PTP',
        'PTP'
    ], {
        P: 'gtceu:double_tungsten_carbide_plate',
        T: 'enderio:fluid_tank'
    })


    event.shaped(
        'ad_astra:ostrum_engine', [
        ' P ',
        'PPP',
        'TTT'
    ], {
        P: 'gtceu:double_lumium_plate',
        T: 'kubejs:vibrant_thruster'
    })

    event.shaped(
        'ad_astra:ostrum_tank', [
        'PTP',
        'PTP',
        'PTP'
    ], {
        P: 'gtceu:double_lumium_plate',
        T: 'enderio:fluid_tank'
    })

    event.shaped(
        'ad_astra:calorite_engine', [
        ' P ',
        'PPP',
        'TTT'
    ], {
        P: 'gtceu:double_cryolobus_plate',
        T: 'kubejs:dark_soularium_thruster'
    })

    event.shaped(
        'ad_astra:calorite_tank', [
        'PTP',
        'PTP',
        'PTP'
    ], {
        P: 'gtceu:double_cryolobus_plate',
        T: 'enderio:fluid_tank'
    })

    event.recipes.gtceu.assembler('gas_tank')
        .itemInputs('gtceu:fluid_cell', '4x gtceu:steel_plate')
        .itemOutputs('ad_astra:gas_tank')
        .duration(100)
        .EUt(32)

    event.recipes.gtceu.assembler('large_gas_tank')
        .itemInputs('3x gtceu:fluid_cell', '12x gtceu:steel_plate')
        .itemOutputs('ad_astra:large_gas_tank')
        .duration(100)
        .EUt(32)
    event.replaceInput({ id: /ad_astra:.*_flag/ }, 'ad_astra:steel_rod', 'gtceu:steel_rod')


    // Launch Pad
    event.remove({ id: 'ad_astra:launch_pad' })
    event.recipes.gtceu.assembler("ad_astra:launch_pad")
        .itemInputs("9x gtceu:dense_steel_plate", "9x gtceu:concrete_dust")
        .itemOutputs("ad_astra:launch_pad")
        .duration(300)
        .EUt(30)

    event.remove({ id: /oxygen_from_oxygen_loading_water/ })
    event.remove({ id: 'ad_astra:oxygen_distributor' })
    event.shaped(
        'ad_astra:oxygen_distributor', [
        'BRB',
        'PHP',
        'BCB'
    ], {
        R: 'gtceu:steel_rotor',
        H: 'gtceu:hv_machine_hull',
        P: 'gtceu:hv_electric_pump',
        B: 'minecraft:iron_bars',
        C: '#gtceu:circuits/hv'
    })

    event.remove({ id: 'ad_astra:oxygen_loader' })
    event.shaped(
        'ad_astra:oxygen_loader', [
        'BCB',
        'PHP',
        'BRB'
    ], {
        R: 'gtceu:steel_rotor',
        H: 'gtceu:lv_machine_hull',
        P: 'gtceu:lv_electric_pump',
        B: 'minecraft:iron_bars',
        C: '#gtceu:circuits/lv'
    })

    event.remove({ id: 'ad_astra:gravity_normalizer' })
    event.shaped(
        'ad_astra:gravity_normalizer', [
        'BEB',
        'CHC',
        'BBB'
    ], {
        E: 'gtceu:ev_emitter',
        H: 'gtceu:ev_machine_hull',
        B: 'gtceu:titanium_plate',
        C: '#gtceu:circuits/ev'
    })

    event.remove({ id: 'ad_astra:oxygen_sensor' })
    event.shaped(
        'ad_astra:oxygen_sensor', [
        'RRR',
        'TOT',
        'RRR'
    ], {
        R: 'gtceu:red_alloy_plate',
        T: 'gtceu:lv_sensor',
        O: 'ad_astra:oxygen_loader'
    })
    Item.of('ad_astra:tier_1_rover', '{BotariumData:{StoredFluids:[{Amount:0L,Fluid:"minecraft:empty"}]}}')

    event.remove({ id: "ad_astra:tier_1_rover" })
    event.recipes.gtceu.assembler("ad_astra:tier_1_rover")
        .itemInputs(['8x gtceu:steel_plate', '4x ad_astra:wheel', '2x gtceu:lv_electric_motor', 'ad_astra:radio', 'gtceu:lv_sensor'])
        .itemOutputs("ad_astra:tier_1_rover")
        .duration(600)
        .EUt(32)

    const decormaterials = ['iron', 'etrium', 'steel', 'desh', 'ostrum', 'calorite']
    decormaterials.forEach(material => {
        event.stonecutting(`ad_astra:${material}_plateblock`, `ad_astra:${material}_panel`)
        event.stonecutting(`ad_astra:encased_${material}_block`, `ad_astra:${material}_panel`)
        event.stonecutting(`ad_astra:${material}_factory_block`, `ad_astra:${material}_panel`)
    })

    event.shaped(
        '64x ad_astra:etrium_panel', [
        'PDP',
        'DDD',
        'PDP'
    ], {
        D: 'minecraft:diamond',
        P: 'gtceu:diamond_plate'
    })

    // Rockets
    event.remove({ id: /nasa_workbench/ })
    const rocket = [ // Plate mats currently just based on color of rocket for testing
        ['tier_1_rocket', "steel", 'steel'],
        ['tier_2_rocket', "desh", 'tungsten_carbide'],
        ['tier_3_rocket', "ostrum", 'lumium'],
        ['tier_4_rocket', "calorite", 'cryolobus'],
    ]

    rocket.forEach(([rocket, tier, platematerial]) => {
        event.custom({
            "type": "ad_astra:nasa_workbench",
            "ingredients": [
                {
                    "item": "ad_astra:rocket_nose_cone"
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
                },
                {
                    "item": `gtceu:double_${platematerial}_plate`
                },
                {
                    "item": "ad_astra:rocket_fin"
                },
                {
                    "item": `ad_astra:${tier}_tank`
                },
                {
                    "item": `ad_astra:${tier}_tank`
                },
                {
                    "item": "ad_astra:rocket_fin"
                },
                {
                    "item": "ad_astra:rocket_fin"
                },
                {
                    "item": `ad_astra:${tier}_engine`
                },
                {
                    "item": "ad_astra:rocket_fin"
                }
            ],
            "result": {
                "count": 1,
                "id": `ad_astra:${rocket}`
            }
        })
    })

    // Space Stations
    event.remove({ id: /space_station/ })
    const spacestations = ["earth", "moon", "mars", "venus", "glacio", "mercury"]
    spacestations.forEach(dim => {
        event.custom({
            "type": "ad_astra:space_station_recipe",
            "dimension": `ad_astra:${dim}_orbit`,
            "ingredients": [
                {
                    "count": 16,
                    "ingredient": {
                        "item": "gtceu:double_titanium_plate"
                    }
                },
                {
                    "count": 8,
                    "ingredient": {
                        "tag": "gtceu:circuits/ev"
                    }
                },
                {
                    "count": 4,
                    "ingredient": {
                        "item": "gtceu:ev_robot_arm"
                    }
                },
                {
                    "count": 2,
                    "ingredient": {
                        "item": "gtceu:ev_emitter"
                    }
                }
            ],
            "structure": "ad_astra:space_station"
        })
    })
})  
