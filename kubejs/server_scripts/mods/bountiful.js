ServerEvents.recipes(event => {
    event.shaped(
        'kubejs:wooden_widget_left', [
        'SPP',
        'APP',
        'SPP'
    ], {
        P: '#minecraft:planks',
        S: '#minecraft:wooden_slabs',
        A: '#forge:tools/saws'
    }).noMirror().id("kubejs:bountiful/wooden_widget_left")
    event.shaped(
        'kubejs:wooden_widget_right', [
        'PPS',
        'PPA',
        'PPS'
    ], {
        P: '#minecraft:planks',
        S: '#minecraft:wooden_slabs',
        A: '#forge:tools/saws',
    }).noMirror().id("kubejs:bountiful/wooden_widget_right")
    event.shaped(
        'kubejs:wooden_widget', [
        'LGR'
    ], {
        L: 'kubejs:wooden_widget_left',
        G: 'enderio:wood_gear',
        R: 'kubejs:wooden_widget_right'
    }).noMirror().id("kubejs:bountiful/wooden_widget")

    event.shaped(
        'kubejs:stone_widget_up', [
        'SAS',
        'PPP',
        'PPP'
    ], {
        P: 'minecraft:stone',
        S: 'minecraft:stone_slab',
        A: '#forge:tools/hammers'
    }).id("kubejs:bountiful/stone_widget_up")
    event.shaped(
        'kubejs:stone_widget_down', [
        'PPP',
        'PPP',
        'SAS'
    ], {
        P: 'minecraft:stone',
        S: 'minecraft:stone_slab',
        A: '#forge:tools/hammers',
    }).id("kubejs:bountiful/stone_widget_down")
    event.shaped(
        'kubejs:stone_widget', [
        'U',
        'G',
        'D'
    ], {
        U: 'kubejs:stone_widget_up',
        G: 'enderio:stone_gear',
        D: 'kubejs:stone_widget_down'
    }).id("kubejs:bountiful/stone_widget")
    event.shaped(
        'kubejs:alloy_widget', [
        'WPW',
        'PGP',
        'WPW'
    ], {
        P: 'gtceu:cupronickel_plate',
        W: 'gtceu:copper_single_cable',
        G: 'gtceu:invar_gear'
    }).id("kubejs:bountiful/alloy_widget")
    event.shaped(
        'kubejs:ender_widget', [
        'APB',
        'PGP',
        'CPD'
    ], {
        P: 'gtceu:vibrant_alloy_plate',
        G: 'gtceu:electrical_steel_gear',
        A: 'enderio:item_conduit',
        B: 'enderio:redstone_conduit',
        C: 'enderio:conductive_conduit',
        D: 'enderio:pressurized_fluid_conduit'
    }).id("kubejs:bountiful/ender_widget")
})
