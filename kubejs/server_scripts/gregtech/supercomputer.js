ServerEvents.recipes(event => {

    ////// Machine Recipe //////

    event.recipes.gtceu.assembly_line('simulation_supercomputer')
        .itemInputs('gtceu:atomic_casing', '6x gcyr:trinaquadalloy_plate', '4x hostilenetworks:sim_chamber', 'kubejs:heart_of_a_universe', '2x gtceu:uv_robot_arm', '2x gtceu:uv_field_generator', '4x gtceu:wetware_processor_mainframe', 'draconicevolution:draconic_energy_core')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:simulation_supercomputer')
        .duration(1200)
        .EUt(1966080)
        
    ////// Computer Recipes //////

            // event.recipes.gtceu.simulation_supercomputer('kubejs:enderman')
            //     .notConsumable(Item.of('hostilenetworks:data_model', '{data_model:{data:6,id:"hostilenetworks:enderman"}}'))
            //     .itemInput('hostilenetworks:prediction_matrix')
            //     .chancedOutput(Item.of('hostilenetworks:prediction', '{data_model:{id:"hostilenetworks:enderman"}}'), 5000, 500)
            //     .Output(Item.of("hostilenetworks:prediction_enderman_prediction"))
            //     .duration(512)
            //     .EUt(10)
})