ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:creative_tank_fabricator', [
            'EFE',
            'GCG',
            'LUL'
        ], {
        E: 'gtceu:zpm_emitter',
        F: 'gtceu:luv_field_generator',
        G: 'gtceu:zpm_field_generator',
        L: '#gtceu:circuits/luv',
        C: 'gtceu:atomic_casing',
        U: 'gtceu:uv_field_generator'
    }
    ).id('kubejs:shaped/creative_tank_fabricator')

    event.recipes.gtceu.creative_tank_fabricator('kubejs:creative_tank')
        .notConsumable('kubejs:creative_portable_tank_mold')
        .itemOutputs('gtceu:creative_tank')
        .duration(500)
        .EUt(100000)
})