ServerEvents.recipes(event => {
    //-- Saplings
        event.shaped(
        Item.of('minecraft:oak_sapling', 64), [
        'AAA',
        '   ',
        '   '
    ], {
        A: 'kubejs:moni_penny'
    }).noMirror().noShrink()


    event.shaped(
        Item.of('minecraft:dark_oak_sapling', 64), [
        'AA ',
        '   ',
        'A  '
    ], {
        A: 'kubejs:moni_penny'
    }).noMirror().noShrink()


    event.shaped(
        Item.of('minecraft:acacia_sapling', 64), [
        'AA ',
        '  A',
        '   '
    ], {
        A: 'kubejs:moni_penny'
    }).noMirror().noShrink()

    event.shaped(
        Item.of('minecraft:spruce_sapling', 64), [
        'AA ',
        '   ',
        ' A '
    ], {
        A: 'kubejs:moni_penny'
    }).noMirror().noShrink()

    event.shaped(
        Item.of('minecraft:birch_sapling', 64), [
        'AA ',
        'A  ',
        '   '
    ], {
        A: 'kubejs:moni_penny'
    }).noMirror().noShrink()

    event.shaped(
        Item.of('minecraft:cherry_sapling', 64), [
        'AA ',
        '   ',
        '  A'
    ], {
        A: 'kubejs:moni_penny'
    }).noMirror().noShrink()

    event.shaped(
        Item.of('minecraft:mangrove_propagule', 64), [
        'AA ',
        ' A ',
        '   '
    ], {
        A: 'kubejs:moni_penny'
    }).noMirror().noShrink()
})
