ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:creative_tank_fabricator', [
            'EFE',
            'FCF',
            'LUL'
        ], {
        E: 'gtceu:zpm_emitter',
        F: 'gtceu:zpm_field_generator',
        L: 'gtceu:luv_emitter',
        C: 'kubejs:microverse_casing',
        U: 'gtceu:uv_field_generator'
    }
    ).id('kubejs:shaped/creative_tank_fabricator')

    event.recipes.gtceu.creative_tank_fabricator('kubejs:creative_tank')
        .notConsumable('kubejs:creative_portable_tank_mold')
        .itemOutputs('gtceu:creative_tank')
        .duration(500)
        .EUt(100000)
})