/** GTMUtils recipes */
ServerEvents.recipes(event => {
    if (doQuantumCoolant) {
        if (doParticleSynthesis) {
            event.recipes.gtceu.virtual_particle_synthesis("quantum_coolant")
                .notConsumable("gtceu:luv_emitter")
                .itemInputs("12x kubejs:quantum_flux", "12x kubejs:cryotheum_dust")
                .inputFluids("gtceu:liquid_helium 1600", "gtceu:pcb_coolant 1600")
                .outputFluids("gtmutils:quantum_coolant 3200")
                .duration(80)
                .EUt(GTValues.VA[GTValues.LuV])
                .quantumRule(QuantumRule.QUANTUM_POLARIZATION, IO.IN)
        } else {
            event.recipes.gtceu.large_chemical_reactor("quantum_coolant")
                .notConsumable("gtceu:luv_emitter")
                .itemInputs("8x kubejs:quantum_flux", "8x kubejs:cryotheum_dust")
                .inputFluids("gtceu:liquid_helium 1000", "gtceu:pcb_coolant 500")
                .outputFluids("gtmutils:quantum_coolant 2000")
                .duration(80)
                .EUt(GTValues.VA[GTValues.LuV])
        }
    }
})
