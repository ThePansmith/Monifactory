ServerEvents.recipes(event => {

    //Components
    event.remove({ output: 'extendedcrafting:basic_component' })
    event.shaped(
        'extendedcrafting:basic_component', [
        'SL ',
        'AB ',
        '   '
    ], {
        S: 'gtceu:black_steel_plate',
        L: 'extendedcrafting:luminessence',
        A: 'gtceu:nether_quartz_plate',
        B: 'gtceu:iron_plate'
    })

    event.remove({ output: 'extendedcrafting:advanced_component' })
    event.shaped(
        'extendedcrafting:advanced_component', [
        'SL ',
        'AB ',
        '   '
    ], {
        S: 'gtceu:black_steel_plate',
        L: 'extendedcrafting:luminessence',
        A: 'gtceu:electrum_plate',
        B: 'gtceu:glowstone_plate'
    })

    event.remove({ output: 'extendedcrafting:elite_component' })
    event.shaped(
        'extendedcrafting:elite_component', [
        'SL ',
        'AB ',
        '   '
    ], {
        S: 'gtceu:black_steel_plate',
        L: 'extendedcrafting:luminessence',
        A: 'gtceu:aluminium_plate',
        B: 'gtceu:ender_pearl_plate'
    })

    event.remove({ output: 'extendedcrafting:ultimate_component' })
    event.shaped(
        'extendedcrafting:ultimate_component', [
        'SL ',
        'AB ',
        '   '
    ], {
        S: 'gtceu:black_steel_plate',
        L: 'extendedcrafting:luminessence',
        A: 'gtceu:uranium_plate',
        B: 'gtceu:emerald_plate'
    })

    event.remove({ output: 'extendedcrafting:crystaltine_component' })
    event.shaped(
        'extendedcrafting:crystaltine_component', [
        'SL ',
        'AB ',
        '   '
    ], {
        S: 'gtceu:black_steel_plate',
        L: 'extendedcrafting:luminessence',
        A: 'gtceu:osmiridium_plate',
        B: 'extendedcrafting:crystaltine_ingot'
    })

    event.remove({ output: 'extendedcrafting:redstone_component' })
    event.shaped(
        'extendedcrafting:redstone_component', [
        'SL ',
        'AB ',
        '   '
    ], {
        S: 'gtceu:black_steel_plate',
        L: 'extendedcrafting:luminessence',
        A: 'gtceu:copper_plate',
        B: 'gtceu:redstone_plate'
    })

    event.replaceInput({ id: /extendedcrafting/ }, 'extendedcrafting:black_iron_ingot', 'gtceu:black_steel_plate')

    //Catalysts
    event.remove({ output: 'extendedcrafting:the_ultimate_catalyst' })
    event.shaped(
        'extendedcrafting:the_ultimate_catalyst', [
        ' B ',
        'ACE',
        ' U '
    ], {
        A: 'extendedcrafting:advanced_catalyst',
        B: 'extendedcrafting:basic_catalyst',
        C: 'extendedcrafting:crystaltine_catalyst',
        E: 'extendedcrafting:elite_catalyst',
        U: 'extendedcrafting:ultimate_catalyst',
    })

    // Tables
    event.remove({ output: 'extendedcrafting:basic_table' })

    event.remove({ output: 'extendedcrafting:advanced_table' })
    event.shaped(
        'extendedcrafting:advanced_table', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'extendedcrafting:advanced_component',
        B: 'extendedcrafting:basic_catalyst',
        C: 'craftingstation:crafting_station',
        D: 'extendedcrafting:advanced_catalyst'
    })

    event.remove({ output: 'extendedcrafting:elite_table' })
    event.recipes.extendedcrafting.shaped_table(
        'extendedcrafting:elite_table', [
        'ASESA',
        'SCCCS',
        'ECTCE',
        'SCCCS',
        'ASESA'
    ], {
        A: 'gtceu:aluminium_block',
        S: 'gtceu:black_steel_plate',
        E: 'extendedcrafting:elite_catalyst',
        C: 'extendedcrafting:elite_component',
        T: 'extendedcrafting:advanced_table'
    }, 2
    )
    event.remove({ output: 'extendedcrafting:ultimate_table' })
    event.recipes.extendedcrafting.shaped_table(
        'extendedcrafting:ultimate_table', [
        'ESSCSSE',
        'SUUUUUS',
        'SUSRSUS',
        'CURTRUC',
        'SUSRSUS',
        'SUUUUUS',
        'ESSCSSE'
    ], {
        E: 'minecraft:emerald_block',
        S: 'gtceu:black_steel_plate',
        C: 'extendedcrafting:the_ultimate_catalyst',
        U: 'extendedcrafting:ultimate_component',
        R: 'extendedcrafting:crystaltine_component',
        T: 'extendedcrafting:elite_table'
    }, 3
    )

    event.remove({ output: 'extendedcrafting:crafting_core' })
    event.shaped(
        'extendedcrafting:crafting_core', [
        'ABA',
        'CDC',
        'ABA'
    ], {
        A: 'gtceu:black_steel_plate',
        B: 'extendedcrafting:elite_catalyst',
        C: 'extendedcrafting:elite_component',
        D: 'gtceu:tungsten_carbide_block'
    })
    
    //        let tables = ['extendedcrafting:advanced_table', 'extendedcrafting:elite_table', 'extendedcrafting:ultimate_table']
    //        tables.forEach(table => {
    //            event.shapeless(2x table, [table])
    //        });

    // Combination Crafts
    event.recipes.extendedcrafting.combination(
        "gtceu:restonia_empowered_block",
        "gtceu:restonia_block", ["gtceu:red_alloy_ingot", "gtceu:almandine_gem", Item.of('gtceu:glass_vial', '{Fluid:{Amount:1000,FluidName:"gtceu:sulfuric_acid"}}'), "extendedcrafting:the_ultimate_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:diamatine_empowered_block",
        "gtceu:diamatine_block", ["extendedcrafting:ender_star", "extendedcrafting:crystaltine_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:nitrogen_dioxide"}}'), "extendedcrafting:crystaltine_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:emeradic_empowered_block",
        "gtceu:emeradic_block", ["kubejs:stabilized_uranium", "gtceu:vibrant_alloy_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:argon"}}').strongNBT(), "extendedcrafting:ultimate_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:enori_empowered_block",
        "gtceu:enori_block", ["gtceu:apatite_gem", "gtceu:end_steel_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:helium"}}').strongNBT(), "extendedcrafting:basic_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:palis_empowered_block",
        "gtceu:palis_block", ["gtceu:sapphire_gem", "gtceu:mana_infused_metal_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(), "extendedcrafting:elite_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:void_empowered_block",
        "gtceu:void_block", ["gtceu:black_quartz_gem", "gtceu:dark_steel_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:oil"}}').strongNBT(), "extendedcrafting:advanced_component"],
        4000000, 400000
    )

    //Luminessence
    event.remove({ id: 'extendedcrafting:luminessence' })

    event.recipes.gtceu.chemical_reactor('phosphoric_acid_apatite')
        .itemInputs('9x gtceu:apatite_dust')
        .inputFluids('water 10000', 'gtceu:sulfuric_acid 5000')
        .itemOutputs('40x gtceu:gypsum_dust')
        .outputFluids('gtceu:hydrochloric_acid 1000', 'gtceu:phosphoric_acid 3000')
        .duration(320)
        .EUt(30)

    event.recipes.gtceu.mixer('luminessence')
        .itemInputs('minecraft:redstone', 'minecraft:glowstone_dust', '2x gtceu:aluminium_dust')
        .inputFluids('gtceu:phosphoric_acid 4000')
        .itemOutputs('8x extendedcrafting:luminessence')
        .duration(20)
        .EUt(30)





})