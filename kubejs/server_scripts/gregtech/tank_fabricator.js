ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:subatomic_digital_assembler', [
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
    ).id('kubejs:shaped/subatomic_digital_assembler')

    event.recipes.gtceu.subatomic_digital_assembly('kubejs:creative_tank')
        .notConsumable('kubejs:creative_portable_tank_mold')
        .itemOutputs('gtceu:creative_tank')
        .CWUt(64)
        .duration(500)
        .EUt(100000)
})