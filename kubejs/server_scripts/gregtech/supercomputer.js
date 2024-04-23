ServerEvents.recipes(event => {

    ////// Machine Recipe //////

    event.recipes.gtceu.assembly_line('simulation_supercomputer')
        .itemInputs('gtceu:atomic_casing', '6x gcyr:trinaquadalloy_plate', '4x hostilenetworks:sim_chamber', 'kubejs:heart_of_a_universe', '2x gtceu:uv_robot_arm', '2x gtceu:uv_field_generator', '4x gtceu:wetware_processor_mainframe', 'draconicevolution:draconic_energy_core')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:simulation_supercomputer')
        .duration(1200)
        .EUt(1966080)
        
    ////// Computer Recipes //////

    function supercomp(model, prediction, EUt) {
        event.recipes.gtceu.simulation_supercomputer(`kubejs:${model}`)
            .notConsumable(Item.of('hostilenetworks:data_model', '{data_model:{id:"hostilenetworks:' + model + '"}}')) // model nbts are still brokey
            .itemInputs('hostilenetworks:prediction_matrix')
            .itemOutputs('hostilenetworks:' + prediction + '_prediction')
            .chancedOutput(Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:' + model + '"}}'), 5000, 500)
            .duration(15.05 * 20) // same for all recipes
            .EUt(EUt)
    }

    supercomp('enderman', 'end', 512)

})