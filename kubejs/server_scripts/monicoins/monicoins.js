ServerEvents.recipes(event => {
    if (isNormalMode) {
        event.shapeless('5x kubejs:moni_penny', 'kubejs:moni_nickel')
        event.shaped('kubejs:moni_nickel', [
                ' A ',
                'AAA',
                ' A '
            ], {
                A: 'kubejs:moni_penny'
            }
        )
    }

    event.shapeless('5x kubejs:moni_nickel', 'kubejs:moni_quarter')
    event.shaped('kubejs:moni_quarter', [
            ' A ',
            'AAA',
            ' A '
        ], {
            A: 'kubejs:moni_nickel'
        }
    )

    event.shapeless('4x kubejs:moni_quarter', 'kubejs:moni_dollar')
    event.shaped('kubejs:moni_dollar', [
            'A A',
            '   ',
            'A A'
        ], {
            A: 'kubejs:moni_quarter'
        }
    )
})
