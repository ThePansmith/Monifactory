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

    event.remove({ id: "ad_astra:space_helmet" })
    event.recipes.gtceu.assembler("space_helmet")
        .itemInputs("kubejs:unprepared_space_helmet", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("ad_astra:space_helmet")
        .duration(300)
        .EUt(30)

    event.remove({ id: "ad_astra:space_suit" })
    event.recipes.gtceu.assembler("space_chestplate")
        .itemInputs("kubejs:unprepared_space_chestpiece", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("ad_astra:space_suit")
        .duration(300)
        .EUt(30)

    event.remove({ id: "ad_astra:space_pants" })
    event.recipes.gtceu.assembler("space_leggings")
        .itemInputs("kubejs:unprepared_space_leggings", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("ad_astra:space_pants")
        .duration(300)
        .EUt(30)

    event.remove({ id: "ad_astra:space_boots" })
    event.recipes.gtceu.assembler("space_boots")
        .itemInputs("kubejs:unprepared_space_boots", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("ad_astra:space_boots")
        .duration(300)
        .EUt(30)

    // Rocket Scanner
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
        P: 'gtceu:cupronickel_plate',
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
        P: 'gtceu:tungsten_steel_plate',
        T: 'enderio:fluid_tank'
    })


    event.shaped(
        'ad_astra:ostrum_engine', [
        ' P ',
        'PPP',
        'TTT'
    ], {
        P: 'gtceu:double_titanium_tungsten_carbide_plate',
        T: 'kubejs:vibrant_thruster'
    })

    event.shaped(
        'ad_astra:ostrum_tank', [
        'PTP',
        'PTP',
        'PTP'
    ], {
        P: 'gtceu:hsse_plate',
        T: 'enderio:fluid_tank'
    })
    // Launch Pad
    event.remove({ id: 'ad_astra:launch_pad' })
    event.recipes.gtceu.assembler("ad_astra:launch_pad")
        .itemInputs("9x gtceu:dense_steel_plate", "9x gtceu:concrete_dust")
        .itemOutputs("ad_astra:launch_pad")
        .duration(300)
        .EUt(30)


    // Rockets
    event.remove({ id: /nasa_workbench/ })

    const rocket = [ // Plate mats currently just based on color of rocket for testing
        ['tier_1_rocket', "steel", 'steel'],
        ['tier_2_rocket', "desh", 'energetic_alloy'],
        ['tier_3_rocket', "ostrum", 'hsss'],
        ['tier_4_rocket', "calorite", 'tritanium'],
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
    const spacestations = [ "earth", "moon", "mars", "venus", "glacio", "mercury"]
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
