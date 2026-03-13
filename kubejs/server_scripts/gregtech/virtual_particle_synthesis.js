/**
 * Virtual Particle Synthesis is real now (not clickbait)
 */

ServerEvents.recipes(event => {
    if (doComplexCircuits) {
        event.recipes.gtceu.virtual_particle_synthesis("parallel_test")
            .itemInputs("minecraft:stone")
            .itemOutputs("minecraft:deepslate")
            .duration(400)
            .EUt(GTValues.VA[GTValues.EV])
    
        event.recipes.gtceu.virtual_particle_synthesis("quantum_entanglement_test")
            .itemInputs("minecraft:granite")
            .itemOutputs("minecraft:diorite", "minecraft:andesite")
            .duration(40)
            .EUt(GTValues.VA[GTValues.EV])
            .quantumRule(QuantumRule.QUANTUM_ENTANGLEMENT)

        event.recipes.gtceu.virtual_particle_synthesis("quantum_entanglement_fluid_test")
            .itemInputs("minecraft:obsidian")
            .outputFluids("minecraft:water 1000", "minecraft:lava 1000")
            .duration(40)
            .EUt(GTValues.VA[GTValues.EV])
            .quantumRule(QuantumRule.QUANTUM_POLARIZATION)
    
        event.recipes.gtceu.virtual_particle_synthesis("quantum_waves_test")
            .itemInputs("kubejs:quantum_flux")
            .itemOutputs("minecraft:iron_ingot", "minecraft:gold_ingot", "minecraft:diamond", "minecraft:emerald")
            .duration(40)
            .EUt(GTValues.VA[GTValues.EV])
            .quantumRule(QuantumRule.QUANTUM_WAVES)
    }
})