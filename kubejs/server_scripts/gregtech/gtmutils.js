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
})
