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

    function print(input, circuit, output) {
        event.recipes.gtceu.subatomic_digital_assembly(`kubejs:${input}_${circuit}`)
            .notConsumable(`kubejs:${input}`)
            .circuit(circuit)
            .itemOutputs(output)
            .CWUt(64)  // same for all recipes
            .duration(500) // same for all recipes
            .EUt(100000) // same for all recipes
    }

    print('creative_tank_data', 1, 'gtceu:creative_tank')
    print('creative_tank_data', 2, 'ae2:creative_fluid_cell')
    print('creative_storage_data', 1, 'kubejs:creative_storage_component')
    print('creative_storage_data', 2, 'gtceu:uhv_quantum_chest')
    print('creative_storage_data', 3, 'gtceu:uhv_quantum_tank')
    print('creative_data_hatch_data', 1, 'gtceu:creative_data_access_hatch')
    print('creative_energy_data', 1, 'gtceu:creative_energy')
    print('creative_energy_data', 2, 'draconicevolution:creative_op_capacitor')
    print('creative_energy_data', 3, 'ae2:creative_energy_cell')

    event.recipes.gtceu.subatomic_digital_assembly('kubejs:corrupted_data')
        .itemInputs('kubejs:universe_creation_data')
        .itemOutputs('kubejs:corrupted_universe_data')
        .circuit(1)
        .CWUt(64)
        .duration(200)
        .EUt(16000)
})