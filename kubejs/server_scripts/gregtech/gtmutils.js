/** GTMUtils recipes */
ServerEvents.recipes(event => {
    if (doQuantumCoolant) {
        event.recipes.gtceu.large_chemical_reactor("quantum_coolant")
            .notConsumable("gtceu:luv_emitter")
            .itemInputs("8x kubejs:quantum_flux", "8x kubejs:cryotheum_dust")
            .inputFluids("gtceu:liquid_helium 1000", "gtceu:pcb_coolant 500")
            .outputFluids("gtmutils:quantum_coolant 2000")
            .duration(80)
            .EUt(GTValues.VA[GTValues.LuV]);
    }

    event.recipes.gtceu.assembly_line("sterile_cleaning_maintenance_hatch")
        .itemInputs("gtceu:auto_maintenance_hatch", "2x gtceu:uev_robot_arm", "6x gtceu:eltz_spring", "32x gtceu:fine_holmium_wire", "4x gtceu:neutronium_normal_fluid_pipe", "2x gtceu:blacklight", "1x gtceu:uev_field_generator", "4x #gtceu:circuits/uev")
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:lubricant 4000", "gtceu:crystal_matrix 5760", "gtceu:naquadria 2304")
        .itemOutputs("gtmutils:sterile_cleaning_maintenance_hatch")
        .EUt(GTValues.VA[GTValues.UIV])
        .duration(400)
        .stationResearch(b => b
            .researchStack("gtceu:cleaning_maintenance_hatch")
            .CWUt(128, 512000)
            .EUt(GTValues.VA[GTValues.UHV]))
})
