//TODO: Take care of all Thermal stuff

ServerEvents.recipes(event => {
    event.remove({ output: ['systeams:steam_dynamo', 'steamdynamo:steam_dynamo', 'thermal:dynamo_compression', 'thermal:dynamo_magmatic', 'thermal:dynamo_numismatic', 'systeams:boiler_pipe', 'thermal:dynamo_fuel_augment', 'thermal:rf_coil', 'thermal:dynamo_output_augment'] })
    event.remove({ output: ['thermal:dynamo_throttle_augment', 'thermal:upgrade_augment_1', 'thermal:upgrade_augment_2', 'thermal:upgrade_augment_3'] })
    event.remove({ output: ['thermal:machine_frame', 'thermal:energy_cell_frame', 'thermal:fluid_cell_frame'] })
    event.remove({ output: ['thermal:machine_furnace', 'thermal:machine_sawmill', 'thermal:machine_pulverizer', 'thermal:machine_smelter', 'thermal:machine_centrifuge', 'thermal:machine_crucible', 'thermal:machine_chiller', 'thermal:machine_refinery', 'thermal:machine_pyrolyzer', 'thermal:machine_bottler', 'thermal:machine_brewer', 'thermal:machine_crystallizer', 'thermal:machine_crafter']})
    
    event.remove({ id: /thermal:[A-Za-z]+_dust_/ }) //I don't even know what recipes this line of code is supposed to target
    event.remove({ id: 'thermal:fire_charge/obsidian_glass_2' })
    event.remove({ id: 'thermal:fire_charge/signalum_glass_2' })
    event.remove({ id: 'thermal:fire_charge/lumium_glass_2' })
    event.remove({ id: 'thermal:fire_charge/enderium_glass_2' })

    event.smelting('gtceu:sticky_resin', 'thermal:tar');
        
    event.shaped(
        'systeams:boiler_pipe', [
            ' C ',
            'ABA',
            ' D '
        ], {
            A: 'gtceu:copper_plate',
            B: 'minecraft:bucket',
            C: 'gtceu:iron_gear',
            D: '#enderio:fused_quartz'
        }
    )

    event.shaped(
        'thermal:dynamo_fuel_augment', [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:wrought_iron_ingot',
            B: 'gtceu:wrought_iron_plate',
            C: 'thermal:rf_coil'
        }
    )

    event.shaped(
        'thermal:rf_coil', [
            ' BA',
            'BAB',
            'AB '
        ], {
            A: 'gtceu:gold_rod',
            B: 'minecraft:redstone'
        }
    )

    event.shaped(
        'kubejs:redstone_transmission_coil', [
            ' BA',
            'BAB',
            'AB '
        ], {
            A: 'gtceu:silver_rod',
            B: 'minecraft:redstone'
        }
    )

    //Upgrade Kits
    event.shaped(
        Item.of('thermal:upgrade_augment_1', '{AugmentData:{BaseMod:1.5f,Type:"Upgrade"}}'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:invar_gear',
            B: 'gtceu:invar_plate',
            C: 'gtceu:electrical_steel_block'
        }
    )

    event.shaped(
        Item.of('thermal:upgrade_augment_2', '{AugmentData:{BaseMod:2.5f,Type:"Upgrade"}}'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:electrum_gear',
            B: 'gtceu:electrum_plate',
            C: 'thermal:upgrade_augment_1'
        }
    )

    event.shaped(
        Item.of('thermal:upgrade_augment_4', '{AugmentData:{BaseMod:5.0f,Type:"Upgrade"}}'), [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'gtceu:restonia_gear',
            B: 'gtceu:signalum_plate',
            C: 'thermal:upgrade_augment_2'
        }
    )

    //FIXME: Temporary Recipe until DE comes out

    event.shaped(
        Item.of('thermal:upgrade_augment_3', '{AugmentData:{BaseMod:10.0f,Type:"Upgrade"}}'), [
            'ABD',
            'BCB',
            'DBA'
        ], {
            A: 'gtceu:draconium_plate',
            B: 'gtceu:enderium_plate',
            C: 'thermal:upgrade_augment_4',
            D: 'gtceu:tungsten_carbide_plate'
        }
    )

    //Power Augment

    //Item.of('thermal:dynamo_output_augment', '{AugmentData:{DynamoPower:3.0f,Type:"Dynamo"}}')
    event.recipes.gtceu.assembler('triple_power_augment')
        .itemInputs('6x gtceu:conductive_alloy_block', '6x gtceu:sterling_silver_ingot', '3x kubejs:redstone_transmission_coil', '12x gtceu:energetic_alloy_ingot')
        .itemOutputs(Item.of('thermal:dynamo_output_augment', '{AugmentData:{DynamoPower:3.0f,DynamoEnergy:0.7f,Type:"Dynamo"}}'))
        .duration(80)
        .EUt(32)

    //Dynamos
    event.shaped(
        'kubejs:excitationcoil', [
            ' B ',
            'BAB',
            'BAB'
        ], {
            A: 'thermal:rf_coil',
            B: 'gtceu:red_alloy_plate'
        }
    )

    event.shaped(
        'steamdynamo:steam_dynamo', [
            ' A ',
            'BCB',
            'DED'
        ], {
            A: 'kubejs:excitationcoil',
            B: 'gtceu:copper_plate',
            C: 'ironfurnaces:iron_furnace',
            D: 'gtceu:wrought_iron_gear',
            E: 'kubejs:redstone_transmission_coil'
        }
    )

    event.shaped(
        'systeams:steam_dynamo', [
            ' A ',
            'BCB',
            'DED'
        ], {
            A: 'kubejs:excitationcoil',
            B: 'gtceu:copper_plate',
            C: 'ironfurnaces:iron_furnace',
            D: 'gtceu:wrought_iron_gear',
            E: 'systeams:boiler_pipe'
        }
    )

    event.shaped(
        'thermal:dynamo_magmatic', [
            ' A ',
            'BCB',
            'DED'
        ], {
            A: 'kubejs:excitationcoil',
            B: 'gtceu:dark_steel_plate',
            C: 'ironfurnaces:copper_furnace',
            D: 'enderio:dark_bimetal_gear',
            E: 'kubejs:redstone_transmission_coil'
        }
    )

    event.shaped(
        'thermal:dynamo_numismatic', [
            ' A ',
            'BCB',
            'DED'
        ], {
            A: 'kubejs:excitationcoil',
            B: 'gtceu:vibrant_alloy_plate',
            C: 'ironfurnaces:diamond_furnace',
            D: 'enderio:vibrant_gear',
            E: 'kubejs:redstone_transmission_coil'
        }
    )

    event.shaped(
        'thermal:dynamo_compression', [
            ' A ',
            'BCB',
            'DED'
        ], {
            A: 'kubejs:excitationcoil',
            B: 'gtceu:energetic_alloy_plate',
            C: 'ironfurnaces:gold_furnace',
            D: 'enderio:energized_gear',
            E: 'kubejs:redstone_transmission_coil'
        }
    )


    event.shaped(
        'thermal:dynamo_throttle_augment', [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'minecraft:iron_ingot',
            B: 'gtceu:iron_plate',
            C: 'kubejs:excitationcoil'
        }
    )

    //Machines
    event.shaped(
        'thermal:machine_frame', [
            'SSS',
            'SMS',
            'SSS'
        ], {
            M: 'gtceu:mana_infused_metal_block',
            S: 'gtceu:stainless_steel_plate'
        }
    )

    event.shaped(
        'thermal:machine_press', [
            ' A ',
            'BCB',
            'DED'
        ], {
            A: 'minecraft:iron_block',
            B: 'gtceu:bronze_ingot',
            C: 'thermal:machine_frame',
            D: 'gtceu:copper_gear',
            E: 'thermal:rf_coil'
        }
    ).id('thermal:machine_press')

    event.shaped(
        'thermal:device_potion_diffuser', [
            ' A ',
            'BCB',
            'DED'
        ], {
            A: 'enderio:fused_quartz',
            B: 'gtceu:silver_ingot',
            C: 'thermal:machine_frame',
            D: 'gtceu:iron_gear',
            E: 'thermal:redstone_servo'
        }
    ).id('thermal:device_potion_diffuser')

    event.shaped(
        'thermal:machine_catalyst_augment', [
            ' A ',
            'BCB',
            ' A '
        ], {
            A: 'gtceu:bronze_gear',
            B: 'gtceu:lead_plate',
            C: 'thermal:redstone_servo'
        }
    ).id('thermal:augments/machine_catalyst_augment')

    event.shaped(
        'thermal:machine_cycle_augment', [
            'DAD',
            'BCB',
            'DAD'
        ], {
            A: 'gtceu:signalum_gear',
            B: 'gtceu:bronze_plate',
            C: 'thermal:redstone_servo',
            D: 'gtceu:silver_plate'
        }
    ).id('thermal:augments/machine_cycle_augment')

    //Diamond as Fuel
    event.recipes.thermal.numismatic_fuel('minecraft:diamond').energy(1200000)
    event.recipes.thermal.numismatic_fuel('gtceu:topaz_gem').energy(200000)
    event.recipes.thermal.numismatic_fuel('gtceu:malachite_gem').energy(200000)
    event.recipes.thermal.numismatic_fuel('minecraft:emerald').energy(200000)
    event.recipes.thermal.numismatic_fuel('minecraft:prismarine_shard').energy(150000)
    event.recipes.thermal.numismatic_fuel('minecraft:quartz').energy(40000)
    event.recipes.thermal.numismatic_fuel('gtceu:sapphire_gem').energy(200000)
    event.recipes.thermal.numismatic_fuel('gtceu:ruby_gem').energy(200000)
    event.recipes.thermal.numismatic_fuel('gtceu:apatite_gem').energy(40000)
    event.recipes.thermal.numismatic_fuel('redstone_arsenal:flux_gem').energy(1500000)
    event.recipes.thermal.numismatic_fuel('minecraft:lapis_lazuli').energy(80000)

    //Thermal Essences
    event.recipes.gtceu.chemical_reactor('elemental_reduction_fluid')
        .itemInputs('kubejs:pulsating_dust')
        .inputFluids(Fluid.of('gtceu:hydrofluoric_acid', 1000))
        .outputFluids('gtceu:elemental_reduction_fluid 1000')
        .duration(80)
        .EUt(90)

    //transformation
    event.recipes.gtceu.chemical_reactor('elemental_reduction_bazalz')
        .itemInputs('gtceu:coal_dust')
        .inputFluids(Fluid.of('gtceu:elemental_reduction_fluid', 100))
        .itemOutputs('thermal:basalz_powder')
        .duration(80)
        .EUt(90)

    event.recipes.gtceu.chemical_reactor('elemental_reduction_blaze')
        .itemInputs('gtceu:netherrack_dust')
        .inputFluids(Fluid.of('gtceu:elemental_reduction_fluid', 100))
        .itemOutputs('minecraft:blaze_powder')
        .duration(80)
        .EUt(90)

    event.recipes.gtceu.chemical_reactor('elemental_reduction_blitz')
        .itemInputs('gtceu:endstone_dust')
        .inputFluids(Fluid.of('gtceu:elemental_reduction_fluid', 100))
        .itemOutputs('thermal:blitz_powder')
        .duration(80)
        .EUt(90)

    event.recipes.gtceu.chemical_reactor('elemental_reduction_blizz')
        .itemInputs('minecraft:snow_block')
        .inputFluids(Fluid.of('gtceu:elemental_reduction_fluid', 100))
        .itemOutputs('thermal:blizz_powder')
        .duration(80)
        .EUt(90)

    event.shaped(
        '4x kubejs:primal_mana', [
            'AAB',
            'DEB',
            'DCC'
        ], {
            A: 'kubejs:aerotheum_dust',
            B: 'kubejs:pyrotheum_dust',
            C: 'kubejs:petrotheum_dust',
            D: 'kubejs:cryotheum_dust',
            E: 'gtceu:diamond_dust'
        }
    )


    event.shaped(
        '2x kubejs:petrotheum_dust', [
            'AA ',
            'BC ',
            '   '
        ], {
            A: 'thermal:basalz_powder',
            B: 'minecraft:redstone',
            C: 'gtceu:obsidian_dust'
        }
    ).noMirror().noShrink()

    event.shaped(
        '2x kubejs:pyrotheum_dust', [
            'AA ',
            'BC ',
            '   '
        ], {
            A: 'minecraft:blaze_powder',
            B: 'minecraft:redstone',
            C: 'gtceu:sulfur_dust'
        }
    ).noMirror().noShrink()


    event.shaped(
        '2x kubejs:aerotheum_dust', [
            'AA ',
            'BC ',
            '   '
        ], {
            A: 'thermal:blitz_powder',
            B: 'minecraft:redstone',
            C: 'gtceu:saltpeter_dust'
        }
    ).noMirror().noShrink()


    event.shaped(
        '2x kubejs:cryotheum_dust', [
            'AA ',
            'BC ',
            '   '
        ], {
            A: 'thermal:blizz_powder',
            B: 'minecraft:redstone',
            C: 'minecraft:snowball'
        }
    ).noMirror().noShrink()


    event.recipes.gtceu.chemical_reactor('energized_clathrate')
        .itemInputs('minecraft:quartz')
        .inputFluids(Fluid.of('gtceu:glowstone', 250))
        .itemOutputs('kubejs:energized_clathrate')
        .duration(120)
        .EUt(75)

    event.recipes.gtceu.chemical_reactor('destabilized_clathrate')
        .itemInputs('minecraft:quartz')
        .inputFluids(Fluid.of('gtceu:redstone', 250))
        .itemOutputs('kubejs:destabilized_clathrate')
        .duration(120)
        .EUt(75)

    //Thermal Dusts
    event.recipes.gtceu.macerator('dust_blitz')
        .itemInputs('thermal:blitz_rod')
        .itemOutputs('4x thermal:blitz_powder')
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.macerator('dust_blizz')
        .itemInputs('thermal:blizz_rod')
        .itemOutputs('4x thermal:blizz_powder')
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.macerator('dust_bazalz')
        .itemInputs('thermal:basalz_rod')
        .itemOutputs('4x thermal:basalz_powder')
        .duration(200)
        .EUt(16)
        // Devices
    event.remove({ output: ['thermal:device_collector'] })
    event.shaped(
        'thermal:device_collector', [
            'III',
            'IVI',
            'III'
        ], {
            I: 'gtceu:invar_plate',
            V: 'enderio:vacuum_chest',
        })

    event.remove({ output: ['thermal:item_filter_augment'] })
    event.shaped(
        'thermal:item_filter_augment', [
            ' I ',
            'IVI',
            ' I '
        ], {
            I: 'gtceu:invar_nugget',
            V: 'gtceu:item_filter',
        })
})