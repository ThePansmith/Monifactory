ServerEvents.recipes(event => {
    if (isNormalMode) {
        //-- Other stuff
        event.shaped(Item.of(Item.of('minecraft:enchanted_book').enchant('ensorcellation:air_affinity', 1), 1), [
            ' A ',
            'A A',
            ' A '
        ], {
            A: 'kubejs:moni_dollar'
        }).noMirror().noShrink()
        
    }
})
