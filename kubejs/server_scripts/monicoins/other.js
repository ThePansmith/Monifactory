ServerEvents.recipes(event => {
    if (isNormalMode) {
        //-- Other stuff

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
