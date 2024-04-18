ServerEvents.recipes(event => {
    //-- Other stuff

    // To jumpstart HNN
    event.shaped(
        Item.of('minecraft:rotten_flesh', 32), [
        ' PP',
        '   ',
        '   '
    ], {
        P: 'kubejs:moni_penny'
    }).noMirror().noShrink()
})
