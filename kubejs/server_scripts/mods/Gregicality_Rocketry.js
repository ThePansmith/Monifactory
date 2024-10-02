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

    event.remove({ id: "gcyr:shaped/space_helmet" })
    event.recipes.gtceu.assembler("space_helmet")
        .itemInputs("kubejs:unprepared_space_helmet", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("gcyr:space_helmet")
        .duration(300)
        .EUt(30)

    event.remove({ id: "gcyr:shaped/space_chest" })
    event.recipes.gtceu.assembler("space_chestplate")
        .itemInputs("kubejs:unprepared_space_chestpiece", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("gcyr:space_chestplate")
        .duration(300)
        .EUt(30)

    event.remove({ id: "gcyr:shaped/space_legs" })
    event.recipes.gtceu.assembler("space_leggings")
        .itemInputs("kubejs:unprepared_space_leggings", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("gcyr:space_leggings")
        .duration(300)
        .EUt(30)

    event.remove({ id: "gcyr:shaped/space_boots" })
    event.recipes.gtceu.assembler("space_boots")
        .itemInputs("kubejs:unprepared_space_boots", "2x kubejs:pressure_layer", "2x kubejs:radiation_layer")
        .itemOutputs("gcyr:space_boots")
        .duration(300)
        .EUt(30)

    // ID Chip
    event.shaped(
        'gcyr:id_chip', [
            'VEC',
            'VPC',
            'VSC'
        ], {
            E: 'gtceu:mv_emitter',
            S: 'gtceu:mv_sensor',
            V: 'gtceu:vibrant_alloy_plate',
            P: 'gtceu:glass_plate',
            C: '#gtceu:circuits/mv'
        }).id('gcyr:shapeless/id_chip')

    // Rocket Scanner
    event.recipes.extendedcrafting.shaped_table(
        'gcyr:rocket_scanner', [
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
    ).id('gcyr:shaped/rocket_scanner')

    // Space Station Packager
    event.recipes.extendedcrafting.shaped_table(
        'gcyr:space_station_packager', [
            "RPEPR",
            "PXCXP",
            "PCACP",
            "PXCXP",
            "RPEPR"
        ], {
            P: 'gtceu:double_titanium_plate',
            R: 'gtceu:ev_robot_arm',
            X: 'gtceu:ev_machine_casing',
            A: 'gtceu:ev_assembler',
            E: 'gtceu:ev_emitter',
            C: '#gtceu:circuits/ev'
        }
    ).id('gcyr:shaped/space_station_packager')

    //Motors and Tanks
    event.remove({ output: /gcyr:.*_rocket_motor/ })
    event.remove({ output: /gcyr:.*_fuel_tank/ })
    event.shaped(
        'gcyr:basic_rocket_motor', [
            ' P ',
            'PPP',
            'TTT'
        ], {
            P: 'gtceu:double_steel_plate',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrical_steel"}').weakNBT()
        })

    
    event.shaped(
        'gcyr:basic_fuel_tank', [
            'PTP',
            'PTP',
            'PTP'
        ], {
            P: 'gtceu:cupronickel_plate',
            T: 'enderio:fluid_tank'
        })

        event.shaped(
            'gcyr:advanced_rocket_motor', [
                ' P ',
                'PPP',
                'TTT'
            ], {
                P: 'gtceu:double_tungsten_carbide_plate',
                T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:energetic"}').weakNBT()
            })
    
        event.shaped(
            'gcyr:advanced_fuel_tank', [
                'PTP',
                'PTP',
                'PTP'
            ], {
                P: 'gtceu:tungsten_steel_plate',
                T: 'enderio:fluid_tank'
            })
        /*
        event.shaped(
            'gcyr:elite_rocket_motor', [
                ' P ',
                'PPP',
                'TTT'
            ], {
                P: 'gtceu:double_titanium_tungsten_carbide_plate',
                T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:vibrant"}').weakNBT()
            })

        event.shaped(
            'gcyr:elite_fuel_tank', [
                'PTP',
                'PTP',
                'PTP'
            ], {
                P: 'gtceu:hsse_plate',
                T: 'enderio:fluid_tank'
            })
        */
    // Launch Pad           
    event.remove({id: 'gcyr:assembler/launch_pad'})
    event.shaped(
        '9x gcyr:launch_pad', [
            'CCC',
            'CCC',
            'CCC'
        ], {
            C: 'gtceu:concrete_dust'
        })

    // Seat
    event.shaped(
        'gcyr:seat', [
            'CCC',
        ], {
            C: 'minecraft:white_wool'
        })
})