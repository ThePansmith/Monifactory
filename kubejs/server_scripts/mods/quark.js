ServerEvents.recipes(event => {
    // add missing recipes
    event.shaped(
        '4x quark:tuff_bricks', [
            'TT',
            'TT'
        ], {
            T: 'quark:polished_tuff'
        }
    ).id('kubejs:shaped/quark_tuff_bricks')
})
