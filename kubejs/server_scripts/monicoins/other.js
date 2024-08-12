ServerEvents.recipes(event => {
    if (isNormalMode) {
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

    event.shaped(
        Item.of('gcyr:space_upgrade_smithing_template', 4), [
        'DDD',
        'DDD',
        'DDD'
    ], {
        D: 'kubejs:moni_quarter'
    }).noMirror().noShrink()
}
})
