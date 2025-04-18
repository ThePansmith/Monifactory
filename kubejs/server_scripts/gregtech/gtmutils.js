ServerEvents.recipes(event => {
    if (doQuantumCoolant) {
        event.recipes.gtceu.large_chemical_reactor("quantum_coolant")
            .notConsumable("gtceu:uv_emitter")
            .itemInputs("8x kubejs:quantum_flux", "8x kubejs:cryotheum_dust")
            .inputFluids("gtceu:liquid_helium 1000")
            .outputFluids("gtmutils:quantum_coolant 2000")
            .duration(80)
            .EUt(GTValues.VA[GTValues.LuV]);
    }
})