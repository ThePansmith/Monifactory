ServerEvents.recipes(event => {
    // Item and Fluid Conduits //

    // Make lowest tier fluid conduit pressurized
    event.remove({ id: "enderio:fluid_conduit" })
    if (isNormalMode) {
        // Manual item conduit
        event.shaped(
            "4x enderio:item_conduit", [
            'BBB',
            'WWW',
            'BBB'
        ], {
            B: "enderio:conduit_binder",
            W: "gtceu:pulsating_alloy_single_wire"
        }
        ).id('kubejs:item_conduit')

        event.shaped(
            "4x enderio:pressurized_fluid_conduit", [
            'BBB',
            'GGG',
            'BBB'
        ], {
            B: "enderio:conduit_binder",
            G: '#forge:glass/colorless'
        }
        ).id('kubejs:pressurized_fluid_conduit')

        // Manual ender fluid conduit
        event.shaped(
            "4x enderio:ender_fluid_conduit", [
            'BBB',
            'WPW',
            'BBB'
        ], {
            B: "enderio:conduit_binder",
            W: "gtceu:vibrant_alloy_single_wire",
            P: "enderio:pressurized_fluid_conduit"
        }
        ).id("kubejs:ender_fluid_conduit_upgrade")

        event.remove({ id: "enderio:ender_fluid_conduit_upgrade" })

        // Assembler item conduit
        event.recipes.gtceu.assembler("kubejs:efficent_item_conduit")
            .itemInputs("3x gtceu:pulsating_alloy_single_wire", "6x enderio:conduit_binder")
            .itemOutputs("8x enderio:item_conduit")
            .duration(80)
            .EUt(16)

        // Assembler ender fluid conduit
        event.recipes.gtceu.assembler("kubejs:efficent_ender_conduit")
            .itemInputs("2x gtceu:vibrant_alloy_single_wire", "enderio:pressurized_fluid_conduit", "6x enderio:conduit_binder")
            .itemOutputs("8x enderio:ender_fluid_conduit")
            .duration(80)
            .EUt(16)
    }
    if (isHardMode) {
        if (!isHarderMode) {
        // Manual item conduit
        event.shaped(
            "4x enderio:item_conduit", [
            'BPB',
            'WWW',
            'BPB'
        ], {
            B: "enderio:conduit_binder",
            W: "gtceu:pulsating_alloy_single_wire",
            P: "gtceu:polyvinyl_chloride_foil"
        }
        ).id('kubejs:item_conduit')

        event.shaped(
            "4x enderio:pressurized_fluid_conduit", [
            'BBB',
            'GGG',
            'BBB'
        ], {
            B: "enderio:conduit_binder",
            G: '#forge:glass/colorless'
        }
        ).id('kubejs:pressurized_fluid_conduit')

        // Manual ender fluid conduit
        event.shaped(
            "4x enderio:ender_fluid_conduit", [
            'BCB',
            'WPW',
            'BCB'
        ], {
            B: "enderio:conduit_binder",
            W: "gtceu:vibrant_alloy_single_wire",
            P: "enderio:pressurized_fluid_conduit",
            C: "gtceu:polyvinyl_chloride_foil"
        }
        ).id("kubejs:ender_fluid_conduit_upgrade")

        event.remove({ id: "enderio:ender_fluid_conduit_upgrade" })

        // Assembler item conduit
        event.recipes.gtceu.assembler("kubejs:efficent_item_conduit")
            .itemInputs("3x gtceu:pulsating_alloy_single_wire", "6x enderio:conduit_binder", "2x gtceu:polyvinyl_chloride_foil")
            .itemOutputs("8x enderio:item_conduit")
            .duration(80)
            .EUt(16)

        // Assembler ender fluid conduit
        event.recipes.gtceu.assembler("kubejs:efficent_ender_conduit")
            .itemInputs("2x gtceu:vibrant_alloy_single_wire", "enderio:pressurized_fluid_conduit", "6x enderio:conduit_binder", "2x gtceu:polyvinyl_chloride_foil")
            .itemOutputs("8x enderio:ender_fluid_conduit")
            .duration(80)
            .EUt(16)
    }
}
if (isHarderMode) {

    event.remove({ id: "enderio:ender_fluid_conduit_upgrade" })
    event.remove({ output: "enderio:pressurized_fluid_conduit" })
}


    // Energy Conduits //

    //Conductive Iron
    event.shaped(
        '3x enderio:conductive_conduit', [
        'AAA',
        'BBB',
        'AAA'
    ], {
        A: 'enderio:conduit_binder',
        B: 'gtceu:conductive_alloy_single_wire'
    }
    ).id("kubejs:conductive_conduit")

    event.recipes.gtceu.assembler('kubejs:conductive_conduit')
        .itemInputs('3x gtceu:conductive_alloy_single_wire', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:conductive_conduit')
        .duration(80)
        .EUt(16)

    //Energetic Alloy
    event.shaped(
        '3x enderio:energetic_conduit', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'enderio:conduit_binder',
        B: 'gtceu:energetic_alloy_single_wire',
        C: 'enderio:conductive_conduit'
    }
    ).id("kubejs:energetic_conduit")

    event.recipes.gtceu.assembler('kubejs:energetic_conduit')
        .itemInputs('2x gtceu:energetic_alloy_single_wire', 'enderio:conductive_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:energetic_conduit')
        .duration(80)
        .EUt(16)

    //Vibrant Alloy

    event.shaped(
        '3x enderio:vibrant_conduit', [
        'AAA',
        'BCB',
        'AAA'
    ], {
        A: 'enderio:conduit_binder',
        B: 'gtceu:vibrant_alloy_single_wire',
        C: 'enderio:energetic_conduit'
    }
    ).id("kubejs:vibrant_conduit")

    event.recipes.gtceu.assembler('kubejs:vibrant_conduit')
        .itemInputs('2x gtceu:vibrant_alloy_single_wire', 'enderio:energetic_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:vibrant_conduit')
        .duration(80)
        .EUt(16)

    //Endsteel
    event.recipes.gtceu.assembler('kubejs:endsteel_conduit')
        .itemInputs('2x gtceu:end_steel_single_wire', 'enderio:vibrant_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:endsteel_conduit')
        .duration(80)
        .EUt(16)

    //Lumium
    event.recipes.gtceu.assembler('kubejs:lumium_conduit')
        .itemInputs('2x gtceu:lumium_single_wire', 'enderio:endsteel_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:lumium_conduit')
        .duration(80)
        .EUt(16)

    //Signalum
    event.recipes.gtceu.assembler('kubejs:signalum_conduit')
        .itemInputs('2x gtceu:signalum_single_wire', 'enderio:lumium_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:signalum_conduit')
        .duration(80)
        .EUt(16)

    //Enderium
    event.recipes.gtceu.assembler('kubejs:enderium_conduit')
        .itemInputs('2x gtceu:enderium_single_wire', 'enderio:signalum_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:enderium_conduit')
        .duration(80)
        .EUt(16)

    //cryolobus
    event.recipes.gtceu.assembler('kubejs:cryolobus_conduit')
        .itemInputs('2x gtceu:cryolobus_single_wire', 'enderio:enderium_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:cryolobus_conduit')
        .duration(80)
        .EUt(16)

    //kubejs Superconductor
    event.recipes.gtceu.assembler('kubejs:sculk_superconductor_conduit')
        .itemInputs('2x gtceu:sculk_superconductor_single_wire', 'enderio:cryolobus_conduit', '6x enderio:conduit_binder')
        .itemOutputs('4x enderio:sculk_superconductor_conduit')
        .duration(80)
        .EUt(16)

    event.remove({ output: ['enderio:iron_gear', 'enderio:energized_gear', 'enderio:vibrant_gear', 'enderio:dark_bimetal_gear'] })

    // Infinity Bimetal Gear
    event.recipes.gtceu.alloy_smelter('kubejs:infinity_gear')
        .itemInputs('gtceu:iron_gear', '2x enderio:grains_of_infinity')
        .itemOutputs('enderio:iron_gear')
        .duration(100)
        .EUt(16)

    // Energized Bimetal Gear
    event.recipes.gtceu.alloy_smelter('kubejs:energetic_gear')
        .itemInputs('enderio:iron_gear', '4x gtceu:energetic_alloy_ingot')
        .itemOutputs('enderio:energized_gear')
        .duration(150)
        .EUt(16)

    // Vibrant Bimetal Gear
    event.recipes.gtceu.alloy_smelter('kubejs:vibrant_gear')
        .itemInputs('enderio:energized_gear', '4x gtceu:vibrant_alloy_ingot')
        .itemOutputs('enderio:vibrant_gear')
        .duration(200)
        .EUt(16)

    // Dark Bimetal Gear
    event.recipes.gtceu.alloy_smelter('kubejs:dark_bimetal_gear')
        .itemInputs('enderio:iron_gear', '4x gtceu:dark_steel_ingot')
        .itemOutputs('enderio:dark_bimetal_gear')
        .duration(200)
        .EUt(16)


    event.remove({ output: ['enderio:pulsating_crystal', 'enderio:vibrant_crystal'] })

    event.recipes.gtceu.autoclave('kubejs:vibrant_crystal')
        .itemInputs('minecraft:emerald')
        .inputFluids(Fluid.of('gtceu:pulsating_alloy', 144))
        .itemOutputs('enderio:vibrant_crystal')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.autoclave('kubejs:pulsating_crystal')
        .itemInputs('minecraft:diamond')
        .inputFluids(Fluid.of('gtceu:pulsating_alloy', 144))
        .itemOutputs('enderio:pulsating_crystal')
        .duration(100)
        .EUt(30)

    // Disable EnderIO machinery

    event.remove({ id: "enderio:primitive_alloy_smelter" })
    event.remove({ id: "enderio:alloy_smelter" })
    event.remove({ id: "enderio:sag_mill" })
    event.remove({ id: "enderio:stirling_generator" })

    // Capacitors
    event.remove({ output: 'enderio:basic_capacitor' })

    const capacitorCores = [
        ['#gtceu:circuits/ulv', 1],
        ['gtceu:capacitor', 2],
        ['gtceu:smd_capacitor', 3],
        ['gtceu:advanced_smd_capacitor', 12]
    ]

    capacitorCores.forEach(core => {
        event.shaped(
            core[1] + 'x enderio:basic_capacitor', [
            ' N ',
            'NCN',
            'W W'
        ], {
            N: '#forge:ingots/electrical_steel',
            C: core[0],
            W: 'gtceu:tin_single_wire'
        }
        ).id(`kubejs:basic_capacitor_${Item.of(core[0]).idLocation.path}`)
    })

    // Compressed caps
    event.shaped(
        'kubejs:compressed_octadic_capacitor', [
        'CCC',
        'CCC',
        'CCC'
    ], {
        C: 'enderio:octadic_capacitor'
    }
    ).id('kubejs:compressed_octadic_capacitor')

    event.shaped(
        'kubejs:double_compressed_octadic_capacitor', [
        'CCC',
        'CCC',
        'CCC'
    ], {
        C: 'kubejs:compressed_octadic_capacitor'
    }
    ).id('kubejs:double_compressed_octadic_capacitor')

    // make it use tags
    event.replaceInput({ id: 'enderio:octadic_capacitor' }, 'minecraft:glowstone', '#forge:storage_blocks/glowstone')

    // capacitor banks
    event.remove({ id: 'enderio:advanced_capacitor_bank' })
    event.remove({ id: 'enderio:vibrant_capacitor_bank_upgrade' })

    event.replaceInput({ id: 'enderio:basic_capacitor_bank' }, "#forge:ingots/iron", "#forge:plates/iron")
    event.replaceInput({ id: 'enderio:advanced_capacitor_bank_upgrade' }, "#forge:ingots/energetic_alloy", "#forge:plates/electrical_steel")
    event.replaceInput({ id: 'enderio:vibrant_capacitor_bank' }, ["#forge:ingots/vibrant_alloy", 'enderio:octadic_capacitor'], "#forge:plates/vibrant_alloy")

    // Fused Quartz
    event.recipes.gtceu.alloy_smelter("kubejs:fused_quartz")
        .itemInputs('3x minecraft:quartz')
        .notConsumable('gtceu:block_casting_mold')
        .itemOutputs('enderio:fused_quartz')
        .duration(80)
        .EUt(16)

    // Clear Glass
    event.recipes.gtceu.alloy_smelter("kubejs:clear_glass_soda_ash")
        .itemInputs('minecraft:glass', 'gtceu:tiny_soda_ash_dust')
        .itemOutputs('enderio:clear_glass')
        .duration(80)
        .EUt(16)
    event.recipes.gtceu.alloy_smelter("kubejs:clear_glass_quicklime")
        .itemInputs('minecraft:glass', 'gtceu:tiny_quicklime_dust')
        .itemOutputs('enderio:clear_glass')
        .duration(80)
        .EUt(16)

    // Enlightened fused quartz
    event.recipes.gtceu.alloy_smelter("kubejs:enlightened_fused_quartz")
        .itemInputs('#enderio:fused_quartz', 'minecraft:glowstone')
        .itemOutputs('enderio:fused_quartz_e')
        .duration(160)
        .EUt(16)

    // dark fused quartz
    event.recipes.gtceu.alloy_smelter("kubejs:dark_fused_quartz")
        .itemInputs('#enderio:fused_quartz', 'gtceu:black_quartz_gem')
        .itemOutputs('enderio:fused_quartz_d')
        .duration(200)
        .EUt(32)

    // Enlightened clear glass
    event.recipes.gtceu.alloy_smelter("kubejs:enlightened_clear_glass")
        .itemInputs('#enderio:clear_glass', 'minecraft:glowstone')
        .itemOutputs('enderio:clear_glass_e')
        .duration(160)
        .EUt(16)

    // dark clear glass
    event.recipes.gtceu.alloy_smelter("kubejs:dark_clear_glass")
        .itemInputs('#enderio:clear_glass', 'gtceu:black_quartz_gem')
        .itemOutputs('enderio:clear_glass_d')
        .duration(200)
        .EUt(32)

    // Remove useless/op conduit recipes from enderio
    event.remove({ input: '#enderio:fused_quartz', output: 'enderio:pressurized_fluid_conduit' })
    event.remove({ input: 'gtceu:vibrant_alloy_ingot', output: 'enderio:ender_fluid_conduit' })
    event.remove({ input: 'gtceu:pulsating_alloy_nugget', output: 'enderio:item_conduit' })

    // chasis. "industrial machine chassis"
    event.recipes.gtceu.alloy_smelter('kubejs:void_chassis')
        .itemInputs('gtceu:lv_machine_hull', '#forge:dusts/grains_of_infinity')
        .itemOutputs('enderio:void_chassis')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.alloy_smelter('kubejs:ensouled_chassis')
        .itemInputs('enderio:void_chassis', '#forge:dusts/soularium')
        .itemOutputs('enderio:ensouled_chassis')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.alloy_smelter('kubejs:infinity_rod')
        .itemInputs('gtceu:dark_steel_rod', 'enderio:grains_of_infinity')
        .itemOutputs('enderio:infinity_rod')
        .duration(200)
        .EUt(30)

    // Conduit Binder Composite Mixer Recipe
    event.recipes.gtceu.mixer("kubejs:conduit_binder_composite")
        .itemInputs('2x minecraft:clay_ball', '3x minecraft:gravel', '2x #minecraft:smelts_to_glass')
        .itemOutputs('8x enderio:conduit_binder_composite')
        .duration(64)
        .EUt(7)


    // Enchanter
    event.remove({ output: ['enderio:enchanter'] })
    event.shaped(
        'enderio:enchanter', [
        'DCD',
        'BBB',
        ' A '
    ], {
        A: 'gtceu:void_block',
        B: 'gtceu:dark_steel_ingot',
        C: 'minecraft:book',
        D: 'minecraft:diamond'
    }
    ).id('kubejs:enchanter')

    // Enchanter
    event.remove({ output: ['enderio:yeta_wrench'] })
    event.shaped(
        'enderio:yeta_wrench', [
        'I I',
        ' G ',
        ' I '
    ], {
        I: '#forge:ingots/iron',
        G: '#forge:gears/iron'
    }
    ).id('kubejs:yeta_wrench')
    event.remove({ output: 'enderio:void_chassis' })

    //Redstone Conduit
    event.replaceInput({ id: 'enderio:redstone_conduit' }, 'gtceu:red_alloy_ingot', 'gtceu:red_alloy_single_wire')

    // Soul Vials

    //Villager Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:villager"}}}}').strongNBT(), [
        ' E ',
        'EVE',
        ' E '
    ], {
        E: 'minecraft:emerald',
        V: 'enderio:empty_soul_vial'
    }).id('kubejs:villager_soul_vial')

    //Enderman Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:enderman"}}}}').strongNBT(), [
        ' E ',
        'EVE',
        ' E '
    ], {
        E: 'enderio:enderman_head',
        V: 'enderio:empty_soul_vial'
    }).id('kubejs:enderman_soul_vial')

    //Shulker Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:shulker"}}}}').strongNBT(), [
        ' E ',
        'EVE',
        ' E '
    ], {
        E: 'minecraft:shulker_shell',
        V: 'enderio:empty_soul_vial'
    }).id('kubejs:shulker_soul_vial')

    //Zombie Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:zombie"}}}}').strongNBT(), [
        ' E ',
        'EVE',
        ' E '
    ], {
        E: 'minecraft:zombie_head',
        V: 'enderio:empty_soul_vial'
    }).id('kubejs:zombie_soul_vial')

    //Ghast Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:ghast"}}}}').strongNBT(), [
        ' E ',
        'EVE',
        ' E '
    ], {
        E: 'minecraft:ghast_tear',
        V: 'enderio:empty_soul_vial'
    }).id('kubejs:ghast_soul_vial')

    //Witch Soul Vial
    event.shaped(Item.of('enderio:filled_soul_vial', '{BlockEntityTag: {EntityStorage: {Entity: {id: "minecraft:witch"}}}}').strongNBT(), [
        'GEG',
        'EVE',
        'GEG'
    ], {
        E: 'minecraft:redstone',
        G: 'minecraft:glowstone_dust',
        V: 'enderio:empty_soul_vial'
    }).id('kubejs:witch_soul_vial')

    //Grains
    event.recipes.gtceu.macerator('kubejs:grains_of_prescience')
        .itemInputs('enderio:prescient_crystal')
        .itemOutputs('enderio:prescient_powder')
        .duration(400)
        .EUt(16)

    event.recipes.gtceu.macerator('kubejs:grains_of_vibrancy')
        .itemInputs('enderio:vibrant_crystal')
        .itemOutputs('enderio:vibrant_powder')
        .duration(300)
        .EUt(16)

    event.recipes.gtceu.macerator('kubejs:grains_of_piezallity')
        .itemInputs('enderio:pulsating_crystal')
        .itemOutputs('enderio:pulsating_powder')
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.macerator('kubejs:grains_of_the_end')
        .itemInputs('enderio:ender_crystal')
        .itemOutputs('enderio:ender_crystal_powder')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.macerator('kubejs:grains_of_innocence')
        .itemInputs('enderio:enticing_crystal')
        .itemOutputs('kubejs:grains_of_innocence')
        .duration(200)
        .EUt(16)

    // Fluid of the Void (TODO: actually use EnderIO machines when they are totally definitely for sure ported to 1.20.1)

    event.recipes.gtceu.chemical_reactor('kubejs:dew_of_the_void')
        .itemInputs('enderio:pulsating_powder', 'enderio:vibrant_powder')
        .inputFluids('thermal:ender 4000')
        .outputFluids('enderio:dew_of_the_void 2000')
        .duration(84)
        .EUt(15)

    event.recipes.gtceu.chemical_reactor('kubejs:ender_star')
        .itemInputs('minecraft:nether_star')
        .inputFluids('enderio:dew_of_the_void 8000')
        .itemOutputs('kubejs:ender_star')
        .duration(2000)
        .EUt(400)

    //Painting Machine
    event.remove({ id: 'enderio:painting_machine' })
    event.shaped('enderio:painting_machine', [
        'QDQ',
        'GHG',
        'RRR'
    ], {
        D: 'minecraft:diamond',
        G: 'enderio:iron_gear', // DO NOT CONVERT TO GT, THIS EXPLICITLY USES ENDERIO
        H: 'gtceu:lv_machine_hull',
        Q: 'minecraft:quartz',
        R: '#forge:ingots/electrical_steel'
    }).id('kubejs:painting_machine')

    // Crafter
    event.remove({ id: 'enderio:crafter' })
    event.shaped('enderio:crafter', [
        'RCR',
        'GFG',
        'SSS'
    ], {
        C: 'minecraft:crafting_table',
        F: 'gtceu:lv_machine_hull',
        G: 'enderio:iron_gear',
        R: 'kubejs:resonating_crystal',
        S: 'enderio:item_conduit'
    }).id('kubejs:crafter')

    //Z-Logic Controller
    event.shaped('enderio:z_logic_controller', [
        'SHS',
        'SCS',
        'WBW'
    ], {
        B: 'gtceu:red_alloy_block',
        C: '#gtceu:circuits/mv',
        H: 'minecraft:zombie_head',
        S: '#forge:ingots/soularium',
        W: 'gtceu:silicon_wafer'
    }).id('kubejs:z_logic_controller')

    event.shaped('2x enderio:z_logic_controller', [
        'SHS',
        'SCS',
        'WBW'
    ], {
        B: 'gtceu:red_alloy_block',
        C: '#gtceu:circuits/mv',
        H: 'minecraft:zombie_head',
        S: '#forge:ingots/soularium',
        W: 'gtceu:phosphorus_wafer'
    }).id('kubejs:z_logic_controller_2x')

    event.shaped('4x enderio:z_logic_controller', [
        'SHS',
        'SCS',
        'WBW'
    ], {
        B: 'gtceu:red_alloy_block',
        C: '#gtceu:circuits/mv',
        H: 'minecraft:zombie_head',
        S: '#forge:ingots/soularium',
        W: 'gtceu:naquadah_wafer'
    }).id('kubejs:z_logic_controller_4x')

    event.shaped('8x enderio:z_logic_controller', [
        'SHS',
        'SCS',
        'WBW'
    ], {
        B: 'gtceu:red_alloy_block',
        C: '#gtceu:circuits/mv',
        H: 'minecraft:zombie_head',
        S: '#forge:ingots/soularium',
        W: 'gtceu:neutronium_wafer'
    }).id('kubejs:z_logic_controller_8x')

    // glider wing
    event.replaceInput({ id: 'enderio:glider_wing' }, '#forge:ingots/dark_steel', '#forge:nuggets/dark_steel')

    // staff of traveling
    event.replaceInput({ id: 'enderio:staff_of_travelling' }, '#forge:ingots/dark_steel', '#forge:rods/dark_steel')
    event.replaceInput({ id: 'enderio:staff_of_travelling' }, 'enderio:ender_crystal', 'enderio:vibrant_crystal')

    // travel anchor
    event.replaceInput({ id: 'enderio:travel_anchor' }, 'enderio:conduit_binder', '#forge:plates/vibrant_alloy')
    event.replaceInput({ id: 'enderio:travel_anchor' }, 'iron_ingot', '#forge:plates/dark_steel')

    // coordinate selector
    event.remove({ id: 'enderio:coordinate_selector' })
    event.shaped('enderio:coordinate_selector', [
        'ABC',
        ' DC',
        '  C'
    ], {
        A: 'gtceu:mv_emitter',
        B: '#forge:storage_blocks/emerald',
        C: '#forge:plates/electrical_steel',
        D: 'enderio:vibrant_gear'
    }).id('kubejs:coordinate_selector')

    // soul binder
    event.remove({ id: 'enderio:soul_binder' })
    event.recipes.extendedcrafting.shaped_table('enderio:soul_binder', [
        'AAAAA',
        'ABCBA',
        'ADGEA',
        'ABFBA',
        'AAAAA',
    ], {
        A: '#forge:plates/soularium',
        B: '#forge:plates/tungsten_steel',
        C: 'enderio:enderman_head',
        D: 'minecraft:creeper_head',
        E: 'minecraft:zombie_head',
        F: 'minecraft:skeleton_skull',
        G: 'enderio:ensouled_chassis'
    }).id('kubejs:soul_binder')

    // powered spawner
    event.remove({ id: 'enderio:powered_spawner' })
    event.shaped('enderio:powered_spawner', [
        'ABA',
        'ACA',
        'DED'
    ], {
        A: '#forge:ingots/electrical_steel',
        B: 'enderio:broken_spawner',
        C: 'enderio:ensouled_chassis',
        D: '#forge:gems/vibrant_crystal',
        E: 'enderio:z_logic_controller'
    }).modifyResult((grid, result) => {
        let input = grid.find('enderio:broken_spawner')
        return result.withNBT(input.nbt)
    }).id('kubejs:powered_spawner')

    // slicensplice
    event.replaceInput({ id: 'enderio:slice_and_splice' }, '#forge:ingots/soularium', '#forge:plates/tungsten_steel')
    event.replaceInput({ id: 'enderio:slice_and_splice' }, 'iron_bars', 'enderio:dark_steel_bars')

    // impulse hopper
    event.replaceInput({ id: 'enderio:impulse_hopper' }, '#forge:gears/iron', 'enderio:energized_gear')

    // wired charger
    event.remove({ id: 'enderio:wired_charger' })
    event.shaped('enderio:wired_charger', [
        'ABA',
        'CDC',
        'ECE'
    ], {
        A: '#forge:plates/dark_steel',
        B: 'ae2:charger',
        C: 'enderio:conductive_conduit',
        D: 'enderio:void_chassis',
        E: '#forge:plates/electrical_steel'
    }).id('kubejs:wired_charger')

    // xp obelisk
    event.remove({ id: 'enderio:xp_obelisk' })
    event.shaped('enderio:xp_obelisk', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'enderio:experience_rod',
        B: '#forge:ingots/energetic_alloy',
        C: 'enderio:fluid_tank',
        D: '#forge:ingots/soularium',
        E: 'enderio:ensouled_chassis'
    })

    //Whatever
    event.replaceInput({ input: '#forge:ingots/copper_alloy' }, 'enderio:copper_alloy_ingot', 'gtceu:pulsating_iron_ingot')

    //Clear tanks
    event.shapeless('enderio:fluid_tank', ['enderio:fluid_tank'])
    event.shapeless('enderio:pressurized_fluid_tank', ['enderio:pressurized_fluid_tank'])

    //Cheaper me conduit recipes
    event.recipes.gtceu.assembler("kubejs:dense_me_conduit")
        .itemInputs("4x enderio:me_conduit", "5x enderio:conduit_binder")
        .itemOutputs("2x enderio:dense_me_conduit")
        .duration(80)
        .EUt(16)
    event.recipes.gtceu.assembler("kubejs:me_conduit")
        .itemInputs("3x ae2:fluix_covered_cable", "6x enderio:conduit_binder")
        .itemOutputs("8x enderio:me_conduit")
        .duration(100)
        .EUt(16)

    event.replaceInput({ output: 'enderio:extraction_speed_upgrade_3' }, 'gtceu:soularium_ingot', 'gtceu:aluminium_ingot')
})