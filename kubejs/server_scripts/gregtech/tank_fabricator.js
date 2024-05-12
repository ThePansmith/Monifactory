ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_table(
        'gtceu:subatomic_digital_assembler', [
            'ECFCE',
            'CALAC',
            'GLRLG',
            'CALAC',
            'ECUCE'
        ], {
            E: 'gtceu:zpm_emitter',
            C: 'ae2:controller',
            F: 'gtceu:luv_field_generator',
            A: 'gtceu:atomic_casing',
            L: '#gtceu:circuits/luv',
            G: 'gtceu:zpm_field_generator',
            R: 'gtceu:research_station',
            U: 'gtceu:uv_field_generator'
        }, 2
    ).id('kubejs:shaped/subatomic_digital_assembler')

    event.recipes.gtceu.subatomic_digital_assembly('kubejs:creative_tank')
        .notConsumable('kubejs:creative_portable_tank_mold')
        .itemOutputs('gtceu:creative_tank')
        .CWUt(64)
        .duration(500)
        .EUt(100000)

        event.recipes.gtceu.subatomic_digital_assembly('kubejs:corrupted_data')
        .itemInputs('kubejs:universe_creation_data')
        .itemOutputs('kubejs:corrupted_universe_data')
        .CWUt(64)
        .duration(200)
        .EUt(16000)
})