ServerEvents.recipes(event => {

    // All of the event.remove() here should REALLY be moved to Remove_Recipes.js for consistency

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
    
    event.remove({ output: 'extendedcrafting:epic_component' })
    event.shaped(
        'extendedcrafting:epic_component', [
        'SL ',
        'AB ',
        '   '
    ], {
        S: 'gtceu:black_steel_plate',
        L: 'extendedcrafting:luminessence',
        A: 'gtceu:activated_netherite_plate',
        B: 'gtceu:red_steel_plate'
    })

    event.remove({ output: 'extendedcrafting:the_ultimate_component' })
    event.shaped(
        'extendedcrafting:the_ultimate_component', [
        ' B ',
        'ACE',
        ' U '
    ], {
        A: 'extendedcrafting:advanced_component',
        B: 'extendedcrafting:basic_component',
        C: 'extendedcrafting:crystaltine_component',
        E: 'extendedcrafting:elite_component',
        U: 'extendedcrafting:ultimate_component',
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
        A: 'gtceu:hssg_plate',
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
    event.shaped(
        'extendedcrafting:basic_table', [
        ' B ',
        'BCB',
        ' B '
    ], {
        B: 'extendedcrafting:basic_component',
        C: 'craftingstation:crafting_station',
    })

    event.remove({ output: 'extendedcrafting:advanced_table' })
    event.shaped(
        'extendedcrafting:advanced_table', [
        'EAE',
        'ABA',
        'EAE'
    ], {
        A: 'extendedcrafting:advanced_component',
        B: 'extendedcrafting:basic_table',
        E: 'gtceu:electrum_ingot'
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
    }
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
    }
    )


    event.remove({ output: 'extendedcrafting:epic_table' })
    event.recipes.extendedcrafting.shaped_table(
        'extendedcrafting:epic_table', [
        'ESSSCSSSE',
        'SUUUUUUUS',
        'SUSSRSSUS',
        'SUSSRSSUS',
        'CURRTRRUC',
        'SUSSRSSUS',
        'SUSSRSSUS',
        'SUUUUUUUS',
        'ESSSCSSSE'
    ], {
        E: '#forge:storage_blocks/activated_netherite',
        S: 'gtceu:double_black_steel_plate',
        C: 'extendedcrafting:the_ultimate_catalyst',
        U: 'extendedcrafting:epic_component',
        R: 'extendedcrafting:crystaltine_component',
        T: 'extendedcrafting:ultimate_table'
    }
    )

    //Table duping. Only for more nested, higher-tier tables
    let dupable_tables = [
        ['elite', 'aluminium'],
        ['ultimate', 'emerald'],
        ['epic', 'activated_netherite']
    ]
    dupable_tables.forEach((value) => {
        event.shaped(
            `2x extendedcrafting:${value[0]}_table`, [
                'ABA',
                'BCB',
                'ABA'
            ], {
                A: `#forge:storage_blocks/${value[1]}`,
                B: `extendedcrafting:${value[0]}_catalyst`,
                C: `extendedcrafting:${value[0]}_table`
            }
        ).id(`${value[0]}_table_dupe`)
    })

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

    event.shaped(
        'extendedcrafting:pedestal', [
            ' P ',
            ' P ',
            'PBP'
        ], {
            P: 'gtceu:black_steel_plate',
            B: 'gtceu:black_steel_block'
        })

    // Combination Crafts
    event.recipes.extendedcrafting.combination(
        "gtceu:restonia_empowered_block",
        "gtceu:restonia_block", ["gtceu:red_alloy_ingot", "gtceu:almandine_gem", Item.of('gtceu:glass_vial', '{Fluid:{Amount:1000,FluidName:"gtceu:sulfuric_acid"}}').weakNBT(), "extendedcrafting:the_ultimate_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:diamatine_empowered_block",
        "gtceu:diamatine_block", ["kubejs:endest_star", "extendedcrafting:crystaltine_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:nitrogen_dioxide"}}').weakNBT(), "extendedcrafting:crystaltine_component"],
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
        "gtceu:palis_block", ["gtceu:sapphire_gem", "gtceu:mythril_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"minecraft:water"}}').strongNBT(), "extendedcrafting:elite_component"],
        4000000, 400000
    )

    event.recipes.extendedcrafting.combination(
        "gtceu:void_empowered_block",
        "gtceu:void_block", ["gtceu:black_quartz_gem", "gtceu:dark_steel_ingot", Item.of('gtceu:fluid_cell', '{Fluid:{Amount:1000,FluidName:"gtceu:oil"}}').strongNBT(), "extendedcrafting:advanced_component"],
        4000000, 400000
    )

    //Luminessence
    event.remove({ id: 'extendedcrafting:luminessence' })
    event.remove({id: /phosphoric_acid_from_apatite/ })

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
