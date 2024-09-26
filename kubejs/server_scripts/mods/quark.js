ServerEvents.recipes(event => {
    event.shapeless('2x minecraft:tuff', ['minecraft:cobblestone', 'minecraft:gravel']).id('kubejs:shapeless/tuff')

    event.shaped(
        '4x quark:tuff_bricks', [
            'TT',
            'TT'
        ], {
            T: 'quark:polished_tuff'
        }
    ).id('kubejs:shaped/quark_tuff_bricks')
})
