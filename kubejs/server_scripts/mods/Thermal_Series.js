ServerEvents.recipes(event => {
    event.remove({ output: ['systeams:steam_dynamo', 'steamdynamo:steam_dynamo', 'thermal:dynamo_compression', 'thermal:dynamo_magmatic', 'thermal:dynamo_numismatic', 'systeams:boiler_pipe', 'thermal:dynamo_fuel_augment', 'thermal:rf_coil', 'thermal:dynamo_output_augment'] })
    event.remove({ output: ['thermal:dynamo_throttle_augment', 'thermal:upgrade_augment_1', 'thermal:upgrade_augment_2', 'thermal:upgrade_augment_3'] })
    event.remove({ output: ['thermal:machine_frame', 'thermal:energy_cell_frame', 'thermal:fluid_cell_frame'] })
    event.remove({ output: ['thermal:machine_furnace', 'thermal:machine_sawmill', 'thermal:machine_pulverizer', 'thermal:machine_smelter', 'thermal:machine_centrifuge', 'thermal:machine_crucible', 'thermal:machine_chiller', 'thermal:machine_refinery', 'thermal:machine_pyrolyzer', 'thermal:machine_bottler', 'thermal:machine_brewer', 'thermal:machine_crystallizer']})

    event.remove({ id: /thermal:[A-Za-z]+_dust_/ }) //I don't even know what recipes this line of code is supposed to target
    event.remove({ id: 'thermal:fire_charge/obsidian_glass_2' })
    event.remove({ id: 'thermal:fire_charge/signalum_glass_2' })
    event.remove({ id: 'thermal:fire_charge/lumium_glass_2' })
    event.remove({ id: 'thermal:fire_charge/enderium_glass_2' })

    //Unify Thermal with GT rubber
    event.smelting('gtceu:sticky_resin', 'thermal:tar');
    event.replaceInput({ id: /thermal:*/ }, ['thermal:cured_rubber'], ['gtceu:rubber_plate'])

    //Centrifuging Recipes for Arboreal Extractor products
    event.recipes.gtceu.centrifuge('kubejs:latex_centrifuging')
        .inputFluids(Fluid.of('thermal:latex', 500))
        .itemOutputs('2x gtceu:raw_rubber_dust')
        .outputFluids(Fluid.of('minecraft:water', 400))
        .duration(60).EUt(6)

    event.recipes.gtceu.centrifuge('kubejs:resin_centrifuging')
        .inputFluids(Fluid.of('thermal:resin', 400))
        .itemOutputs('gtceu:sticky_resin')
        .chancedOutput('thermal:rosin', 5000, 500)
        .outputFluids(Fluid.of('minecraft:water', 150), Fluid.of('thermal:tree_oil', 100))
        .duration(200).EUt(20)

    event.recipes.gtceu.centrifuge('kubejs:sap_centrifuging')
        .inputFluids(Fluid.of('thermal:sap', 200))
        .chancedOutput('minecraft:sugar', 200, 50)
        .outputFluids(Fluid.of('minecraft:water', 190), Fluid.of('thermal:syrup', 10))
        .duration(2000).EUt(2)

    event.remove({ id: 'thermal:redstone_servo' });
    event.shaped('thermal:redstone_servo', [
        'ABA',
        ' B ',
        'ABA'
    ], {
        A: 'kubejs:resonating_crystal',
        B: '#forge:plates/electrical_steel'
    }).id('kubejs:redstone_servo');

    event.remove({ id: 'thermal:drill_head' });
    event.shapeless('thermal:drill_head', [
        'gtceu:vanadium_steel_drill_head'
    ]).id('kubejs:drill_head');

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

    /*=== AUGMENTS/UPGRADES ===*/
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
            A: 'gtceu:cryolobus_plate',
            B: 'gtceu:enderium_plate',
            C: 'thermal:upgrade_augment_4',
            D: 'gtceu:tungsten_carbide_plate'
        }
    )

    //Item.of('thermal:dynamo_output_augment', '{AugmentData:{DynamoPower:3.0f,Type:"Dynamo"}}')
    event.recipes.gtceu.assembler('triple_power_augment')
        .itemInputs('6x gtceu:conductive_alloy_block', '6x gtceu:sterling_silver_ingot', '3x kubejs:redstone_transmission_coil', '12x gtceu:energetic_alloy_ingot')
        .itemOutputs(Item.of('thermal:dynamo_output_augment', '{AugmentData:{DynamoPower:3.0f,DynamoEnergy:0.7f,Type:"Dynamo"}}'))
        .duration(80)
        .EUt(32)

    event.remove({ id: 'thermal:augments/machine_speed_augment'})
    event.shaped('thermal:machine_speed_augment', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:ingots/mythril',
        B: '#forge:plates/mythril',
        C: 'thermal:rf_coil'
    }).id('kubejs:machine_speed_augment');

    event.remove({ id: 'thermal:augments/machine_output_augment'})
    event.shaped('thermal:machine_output_augment', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:ingots/mythril',
        B: '#forge:plates/mythril',
        C: 'thermal:redstone_servo'
    }).id('kubejs:machine_output_augment');

    // null augment
    event.remove({ id: 'thermal:augments/machine_null_augment'})
    event.shaped('thermal:machine_null_augment', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:ingots/mythril',
        B: '#forge:nuggets/mythril',
        C: 'minecraft:cactus' // since we use cactus to delete items now
    }).id('kubejs:machine_null_augment');

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
            M: 'gtceu:mythril_block',
            S: 'gtceu:stainless_steel_plate'
        }
    )

    event.remove({ id: 'thermal:machine_press' })
    event.shaped('thermal:machine_press', [
            ' A ',
            'BCB',
            'DED'
        ], {
            A: 'minecraft:piston',
            B: '#forge:ingots/bronze',
            C: 'thermal:machine_frame',
            D: '#forge:gears/copper',
            E: 'thermal:rf_coil'
        }
    ).id('kubejs:machine_press');

    // energetic infuser
    event.remove({ id: 'thermal:charge_bench' });
    event.shaped('thermal:charge_bench', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: '#forge:gears/lead',
        B: 'kubejs:redstone_transmission_coil',
        C: 'thermal:machine_frame',
        D: '#forge:gears/copper',
        E: 'thermal:rf_coil'
    }).id('kubejs:charge_bench')

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

    // energy cell
    event.shaped('thermal:energy_cell_frame', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: '#forge:plates/lead',
        B: '#forge:rods/electrum',
        C: 'enderio:advanced_capacitor_bank'
    }).id('kubejs:energy_cell_frame')
    event.remove('thermal:energy_cell');
    event.recipes.gtceu.canner('kubejs:energy_cell')
        .itemInputs('thermal:energy_cell_frame', '#forge:storage_blocks/redstone')
        .itemOutputs('thermal:energy_cell')
        .duration(500)
        .EUt(30);

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

    event.recipes.gtceu.mixer("mixer_primal_mana")
    .itemInputs("2x kubejs:petrotheum_dust", "2x kubejs:pyrotheum_dust", "2x kubejs:aerotheum_dust", "2x kubejs:cryotheum_dust", "1x gtceu:diamond_dust")
    .itemOutputs("4x kubejs:primal_mana")
    .duration(100)
    .EUt(100)

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

    event.recipes.gtceu.mixer("mixer_petrotheum")
    .itemInputs("2x thermal:basalz_powder", "minecraft:redstone",  "gtceu:obsidian_dust")
    .itemOutputs("2x kubejs:petrotheum_dust")
    .duration(40)
    .EUt(20)

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

    event.recipes.gtceu.mixer("mixer_pyrotheum")
    .itemInputs("2x minecraft:blaze_powder", "minecraft:redstone",  "gtceu:sulfur_dust")
    .itemOutputs("2x kubejs:pyrotheum_dust")
    .duration(40)
    .EUt(20)

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

    event.recipes.gtceu.mixer("mixer_aerotheum")
    .itemInputs("2x thermal:blitz_powder", "minecraft:redstone",  "gtceu:saltpeter_dust")
    .itemOutputs("2x kubejs:aerotheum_dust")
    .duration(40)
    .EUt(20)

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

    event.recipes.gtceu.mixer("mixer_cryotheum")
    .itemInputs("2x thermal:blizz_powder", "minecraft:redstone",  "minecraft:snowball")
    .itemOutputs("2x kubejs:cryotheum_dust")
    .duration(40)
    .EUt(20)

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
        .EUt(16);

    // Thermal Mobdrops (for HM nether star recipe mostly)
    event.recipes.gtceu.compressor('blitz_rod')
        .itemInputs('4x thermal:blitz_powder')
        .itemOutputs('thermal:blitz_rod')
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.compressor('blizz_rod')
        .itemInputs('4x thermal:blizz_powder')
        .itemOutputs('thermal:blizz_rod')
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.compressor('basalz_rod')
        .itemInputs('4x thermal:basalz_powder')
        .itemOutputs('thermal:basalz_rod')
        .duration(200)
        .EUt(2)

    // Devices
    event.remove({ type: "thermal:rock_gen", not: { output: "minecraft:cobblestone" } })

    event.remove({ id: 'thermal:device_nullifier' });
    event.shaped('thermal:device_nullifier', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'minecraft:lava_bucket',
        B: '#chipped:bricks',
        C: 'thermal:machine_frame', // casing
        D: '#forge:gears/iron',
        E: 'thermal:redstone_servo'
    }).id('kubejs:device_nullifier');

    event.remove({ id: 'thermal:device_fisher' });
    event.shaped('thermal:device_fisher', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'fishing_rod',
        B: 'iron_bars',
        C: 'thermal:machine_frame', // casing
        D: '#forge:gears/iron',
        E: 'thermal:redstone_servo'
    }).id('kubejs:device_fisher');

    event.remove({ id: 'thermal:device_collector' });
    event.shaped('thermal:device_collector', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'minecraft:hopper',
        B: '#forge:ingots/tin',
        C: 'enderio:vacuum_chest', // casing
        D: '#forge:gears/iron',
        E: 'thermal:redstone_servo'
    }).id('kubejs:device_collector');

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

    /*=== THERMAL TOOLS ===*/
    event.remove({ id: 'thermal:tools/wrench' })
    event.shaped('thermal:wrench', [
        'A A',
        ' B ',
        ' A '
    ], {
        A: '#forge:ingots/iron',
        B: '#forge:ingots/tin'
    }).id('kubejs:tools/wrench');

    // detonator, locked to mv
    event.replaceInput({ id: 'thermal:tools/detonator' }, ['#forge:gears/signalum'], ['#gtceu:circuits/mv'])

    event.remove({ id: 'thermal:flux_drill' })
    event.shaped('thermal:flux_drill', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:drill_head',
        B: '#forge:ingots/silver',
        C: 'gtceu:lv_power_unit',
        D: '#forge:ingots/tin',
        E: '#forge:gears/iron'
    }).id('kubejs:flux_drill');

    event.remove({ id: 'thermal:flux_saw' })
    event.shaped('thermal:flux_saw', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'thermal:saw_blade',
        B: '#forge:ingots/silver',
        C: 'gtceu:lv_power_unit',
        D: '#forge:ingots/tin',
        E: '#forge:gears/iron'
    }).id('kubejs:flux_saw');

    event.remove({ id: 'thermal:flux_capacitor' });
    event.shaped('thermal:flux_capacitor', [
        ' A ',
        'BCB',
        'ADA'
    ], {
        A: '#forge:dusts/redstone',
        B: '#forge:ingots/lead',
        C: '#forge:ingots/copper',
        D: '#forge:dusts/sulfur'
    }).id('kubejs:flux_capacitor');

    // revert this change so it only requires redstone
    event.replaceInput({ id: 'thermal:flux_magnet' }, ['thermal:rf_coil'], ['#forge:dusts/redstone']);

    // lock
    event.remove({ id: 'thermal:tools/lock' });
    event.shaped('thermal:lock', [
        ' A ',
        'ABA',
        'AAA'
    ], {
        A: '#forge:nuggets/signalum',
        B: '#forge:ingots/signalum'
    }).id('kubejs:lock');

    /*=== misc thermals ===*/
    event.remove({ output: 'thermal:phytogro' });
    event.shapeless('16x thermal:phytogro', [
        '2x #forge:dusts/wood',
        '#forge:dusts/charcoal',
        '#forge:dusts/saltpeter',
        '2x #forge:gems/apatite' // ok idk HOW thermal manages to make tag recipe requirement AND regular item
    ]).id('kubejs:phytogro_charcoal_gems_apatite');
    event.shapeless('16x thermal:phytogro', [
        '2x #forge:dusts/wood',
        '#forge:dusts/charcoal',
        '#forge:dusts/saltpeter',
        '2x #forge:dusts/apatite'
    ]).id('kubejs:phytogro_charcoal_dusts_apatite');
    event.shapeless('16x thermal:phytogro', [
        '2x #forge:dusts/wood',
        '#forge:dusts/coal',
        '#forge:dusts/saltpeter',
        '2x #forge:gems/apatite'
    ]).id('kubejs:phytogro_coal_gems_apatite');
    event.shapeless('16x thermal:phytogro', [
        '2x #forge:dusts/wood',
        '#forge:dusts/coal',
        '#forge:dusts/saltpeter',
        '2x #forge:dusts/apatite'
    ]).id('kubejs:phytogro_coal_dusts_apatite');
});
