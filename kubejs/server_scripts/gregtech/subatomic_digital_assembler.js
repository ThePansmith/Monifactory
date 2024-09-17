ServerEvents.recipes(event => {

    function sda_print(input, circuit, output, cwut) {
        event.recipes.gtceu.subatomic_digital_assembly(`kubejs:${input}_${circuit}`)
            .notConsumable(`kubejs:${input}`)
            .circuit(circuit)
            .itemOutputs(output)
            .CWUt(cwut)  // same for all recipes
            .duration(500) // same for all recipes
            .EUt(100000) // same for all recipes
    }


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
    }
    ).id('kubejs:shaped/subatomic_digital_assembler')

    sda_print('creative_storage_data', 1, 'functionalstorage:max_storage_upgrade', 128)
    sda_print('creative_storage_data', 2, 'megacells:bulk_item_cell', 128)
    sda_print('creative_computation_data', 1, 'gtceu:creative_computation_provider', 256)
    sda_print('creative_computation_data', 2, 'gtceu:creative_data_access_hatch', 256)
    sda_print('creative_energy_data', 1, 'enderio:creative_power', 256)
    sda_print('creative_energy_data', 2, 'ae2:creative_energy_cell', 256)
    sda_print('creative_energy_data', 3, 'gtceu:creative_energy', 256)

    event.recipes.gtceu.subatomic_digital_assembly('kubejs:corrupted_data')
        .itemInputs('kubejs:universe_creation_data')
        .itemOutputs('kubejs:corrupted_universe_data')
        .circuit(1)
        .CWUt(32)
        .duration(200)
        .EUt(16000)

    event.recipes.gtceu.subatomic_digital_assembly("shatteredstardata")
        .itemInputs('kubejs:stellar_creation_data')
        .itemOutputs('kubejs:shattered_star_data')
        .EUt(16000)
        .circuit(1)
        .CWUt(16)
        .duration(50)

    if (isNormalMode) {
        sda_print('creative_tank_data', 1, 'gtceu:creative_tank', 64)
        //sda_print('creative_tank_data', 2, 'ae2:creative_fluid_cell', 64) //The fluid cell can output items as a bug. See #8193 on the AE2 Github.
        sda_print('creative_storage_data', 3, 'gtceu:uev_quantum_chest', 32)
        sda_print('creative_storage_data', 4, 'gtceu:uev_quantum_tank', 32)
    }

    if (!isNormalMode) {
        event.recipes.gtceu.subatomic_digital_assembly("omnicdata")
        .notConsumable('kubejs:omnic_data')
        .itemOutputs('gtceu:omnium_nugget')
        .EUt(16000)
        .circuit(1)
        .CWUt(16)
        .duration(10)
    }

})