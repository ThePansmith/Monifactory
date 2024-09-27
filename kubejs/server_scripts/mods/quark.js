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

    event.shaped(
        '4x quark:polished_jasper', [
            'TT',
            'TT'
        ], {
            T: 'quark:jasper'
        }
    ).id('kubejs:shaped/quark_polished_jasper')

    event.shaped(
        '4x quark:polished_limestone', [
            'TT',
            'TT'
        ], {
            T: 'quark:limestone'
        }
    ).id('kubejs:shaped/quark_polished_limestone')

    event.shaped(
        '4x quark:polished_shale', [
            'TT',
            'TT'
        ], {
            T: 'quark:shale'
        }
    ).id('kubejs:shaped/quark_polished_shale')

    event.shaped(
        '4x quark:polished_myalite', [
            'TT',
            'TT'
        ], {
            T: 'quark:myalite'
        }
    ).id('kubejs:shaped/quark_polished_myalite')
})
