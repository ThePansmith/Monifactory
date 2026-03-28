// noinspection JSUnresolvedReference

/**
 * Virtual Particle Synthesis is real now (not clickbait)
 */

ServerEvents.recipes(event => {
    if (doParticleSynthesis) {
        // EV Recipes
        event.recipes.gtceu.virtual_particle_synthesis("particle_soup")
            .itemInputs("8x kubejs:quantum_flux", "2x gtceu:uranium_235_dust")
            .inputFluids("gtceu:mana 250", "gtceu:radon 1000")
            .duration(40)
            .outputFluids("kubejs:particle_soup 1000")
            .EUt(GTValues.VA[GTValues.EV])
            .quantumRule(QuantumRule.QUANTUM_POLARIZATION, IO.OUT)

        event.remove({ output: "gtceu:quantum_eye" })
        event.recipes.gtceu.virtual_particle_synthesis("quantum_eye")
            .itemInputs("minecraft:ender_eye", "kubejs:quantum_flux")
            .inputFluids("kubejs:particle_soup 400")
            .circuit(1)
            .duration(200)
            .itemOutputs("gtceu:quantum_eye")
            .EUt(GTValues.VA[GTValues.EV])
            .quantumRule(QuantumRule.QUANTUM_POLARIZATION, IO.IN)

        event.recipes.gtceu.virtual_particle_synthesis("quantum_flux_vps")
            .itemInputs("minecraft:diamond")
            .inputFluids("gtceu:mana 200", "kubejs:particle_soup 200")
            .itemOutputs(
                "8x kubejs:quantum_flux",
                "4x kubejs:quantum_flux",
                "2x kubejs:quantum_flux",
                "kubejs:quantum_flux"
            )
            .duration(100)
            .EUt(GTValues.VA[GTValues.EV])
            .quantumRule(QuantumRule.QUANTUM_FIELDS, IO.OUT)

        // IV recipes
        event.recipes.gtceu.virtual_particle_synthesis("particle_soup_separation")
            .inputFluids("kubejs:particle_soup 1000")
            .outputFluids("kubejs:bosonic_matter 1000", "kubejs:hadronic_matter 1000")
            .circuit(2)
            .duration(40)
            .EUt(GTValues.VA[GTValues.IV])
            .quantumRule(QuantumRule.QUANTUM_POLARIZATION, IO.OUT)

        event.remove({ output: "gtceu:quantum_star" })
        event.recipes.gtceu.virtual_particle_synthesis("quantum_star")
            .itemInputs("minecraft:nether_star", "gtceu:quantum_eye")
            .inputFluids("kubejs:bosonic_matter 720", "kubejs:hadronic_matter 720")
            .duration(200)
            .itemOutputs("gtceu:quantum_star")
            .EUt(GTValues.VA[GTValues.IV])
            .quantumRule(QuantumRule.QUANTUM_POLARIZATION, IO.IN)

        event.recipes.gtceu.virtual_particle_synthesis("more_quantum_flux_vps")
            .itemInputs("minecraft:diamond", "gtceu:quantum_eye")
            .inputFluids("kubejs:bosonic_matter 400", "kubejs:hadronic_matter 400", "gtceu:dragon_breath 500")
            .itemOutputs(
                "64x kubejs:quantum_flux",
                "32x kubejs:quantum_flux",
                "16x kubejs:quantum_flux",
                "8x kubejs:quantum_flux"
            )
            .duration(100)
            .EUt(GTValues.VA[GTValues.IV])
            .quantumRule(QuantumRule.QUANTUM_POLARIZATION, IO.IN)
            .quantumRule(QuantumRule.QUANTUM_FIELDS, IO.OUT)

        // LuV recipes
        event.recipes.gtceu.virtual_particle_synthesis("higgs_g1")
            .itemInputs("gtceu:quantum_eye")
            .inputFluids("kubejs:bosonic_matter 1000")
            .outputFluids("kubejs:higgs_g1 250", "kubejs:higgs_g1 250", "kubejs:degenerate_matter 250", "kubejs:degenerate_matter 250")
            .duration(80)
            .EUt(GTValues.VA[GTValues.LuV])
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.OUT)

        event.recipes.gtceu.virtual_particle_synthesis("more_particle_soup")
            .itemInputs(
                "64x kubejs:quantum_flux",
                "64x kubejs:quantum_flux",
                "16x gtceu:quantum_eye",
                "16x gtceu:small_enriched_naquadah_dust"
            )
            .inputFluids("gtceu:mana 1000")
            .duration(40)
            .outputFluids("kubejs:particle_soup 20000")
            .EUt(GTValues.VA[GTValues.LuV])
            .quantumRule(QuantumRule.QUANTUM_FIELDS, IO.IN)
        
        event.recipes.gtceu.virtual_particle_synthesis("degenerate_recycling_LuV")
            .itemInputs("4x kubejs:quantum_flux")
            .inputFluids("kubejs:degenerate_matter 1000")
            .duration(40)
            .outputFluids("kubejs:particle_soup 250", "kubejs:particle_soup 250", "kubejs:bosonic_matter 250", "kubejs:hadronic_matter 250")
            .EUt(GTValues.VA[GTValues.LuV])
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.OUT)
        
        // ZPM Recipes
        event.recipes.gtceu.virtual_particle_synthesis("higgs_g2_gluon_g1")
            .itemInputs("2x gtceu:quantum_star", "2x gtceu:enriched_naquadah_dust")
            .inputFluids("kubejs:higgs_g1 800", "kubejs:bosonic_matter 1600")
            .duration(80)
            .outputFluids("kubejs:higgs_g2 400", "kubejs:gluon_g1 250", "kubejs:w_z_g1 500", "kubejs:degenerate_matter 800")
            .EUt(GTValues.VA[GTValues.ZPM])
            .quantumRule(QuantumRule.QUANTUM_POLARIZATION, IO.IN)
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.OUT)

        event.remove({ output: "gtceu:gravi_star" })
        event.recipes.gtceu.virtual_particle_synthesis("gravi_star")
            .itemInputs("gtceu:quantum_star")
            .inputFluids("gtceu:neutronium 288", "kubejs:higgs_g2 200")
            .duration(200)
            .itemOutputs("gtceu:gravi_star")
            .EUt(GTValues.VA[GTValues.ZPM])
            .quantumRule(QuantumRule.QUANTUM_ENTANGLEMENT, IO.OUT)
        
        event.recipes.gtceu.virtual_particle_synthesis("degenerate_recycling_zpm")
            .itemInputs("4x gtceu:quantum_eye")
            .inputFluids("kubejs:degenerate_matter 1000")
            .duration(40)
            .outputFluids("kubejs:bosonic_matter 300", "kubejs:hadronic_matter 300", "kubejs:higgs_g1 200", "kubejs:higgs_g1 200")
            .EUt(GTValues.VA[GTValues.ZPM])
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.OUT)
        
        // UV Recipes
        event.recipes.gtceu.virtual_particle_synthesis("meson_g1")
            .itemInputs("2x gtceu:enriched_naquadah_dust", "8x kubejs:protomatter")
            .inputFluids(
                "kubejs:bosonic_matter 400",
                "kubejs:hadronic_matter 400",
                "kubejs:w_z_g1 400"
            )
            .duration(120)
            .outputFluids("kubejs:meson_g1 800")
            .EUt(GTValues.VA[GTValues.UV])
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.IN)

        event.recipes.gtceu.virtual_particle_synthesis("gluon_g2")
            .inputFluids("kubejs:gluon_g1 800", "kubejs:meson_g1 800", "gtceu:neutronium 288")
            .duration(120)
            .outputFluids("kubejs:gluon_g2 400", "kubejs:w_z_g1 400", "kubejs:degenerate_matter 800")
            .EUt(GTValues.VA[GTValues.UV])
            .quantumRule(QuantumRule.QUANTUM_POLARIZATION, IO.BOTH)

        event.recipes.gtceu.virtual_particle_synthesis("degenerate_recycling_uv")
            .itemInputs("4x gtceu:quantum_star")
            .inputFluids("kubejs:degenerate_matter 1000")
            .duration(40)
            .outputFluids("kubejs:higgs_g1 400", "kubejs:w_z_g1 300", "kubejs:higgs_g2 200", "kubejs:gluon_g1 100")
            .EUt(GTValues.VA[GTValues.UV])
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.OUT)

        // UHV Recipes
        event.recipes.gtceu.virtual_particle_synthesis("exotic_particle_solution")
            .inputFluids("gtceu:purified_heavy_residue 400", "kubejs:meson_g1 400")
            .duration(40)
            .outputFluids("gtceu:exotic_particle_solution 400")
            .EUt(GTValues.VA[GTValues.UHV])
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.BOTH)

        event.recipes.gtceu.virtual_particle_synthesis("higgs_g3")
            .inputFluids("kubejs:higgs_g2 800", "kubejs:gluon_g2 400", "gtceu:exotic_particle_solution 400")
            .duration(120)
            .outputFluids("kubejs:higgs_g3 400", "kubejs:w_z_g2 600", "kubejs:degenerate_matter 600")
            .EUt(GTValues.VA[GTValues.UHV])
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.BOTH)

        event.recipes.gtceu.virtual_particle_synthesis("strange_matter_plasma")
            .itemInputs("64x gtceu:gravi_star")
            .inputFluids("kubejs:hadronic_matter 8000", "kubejs:higgs_g2 2000")
            .duration(200)
            .outputFluids("kubejs:strange_matter_plasma 2000", "kubejs:degenerate_matter 2000", "kubejs:degenerate_matter 2000", "kubejs:degenerate_matter 2000")
            .EUt(GTValues.VA[GTValues.UHV])
            .quantumRule(QuantumRule.QUANTUM_ENTANGLEMENT, IO.IN)
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.OUT)

        event.recipes.gtceu.virtual_particle_synthesis("even_more_particle_soup")
            .itemInputs(
                "16x gtceu:gravi_star",
                "64x gtceu:quantum_star",
                "64x gtceu:quantum_eye",
                "64x gtceu:quantum_eye",
                "64x kubejs:quantum_flux",
                "64x kubejs:quantum_flux"
            )
            .inputFluids("gtceu:mana 2000", "gtceu:iron_plasma 2592")
            .duration(40)
            .outputFluids(
                "kubejs:particle_soup 160000",
                "kubejs:particle_soup 80000",
                "kubejs:particle_soup 40000",
                "kubejs:particle_soup 20000"
            )
            .EUt(GTValues.VA[GTValues.UHV])
            .quantumRule(QuantumRule.QUANTUM_FIELDS, IO.IN)
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.OUT)
        
        // No more recycling
        // UEV Recipes
        event.recipes.gtceu.virtual_particle_synthesis("meson_g2")
            .itemInputs("2x gtceu:actinium_dust", "8x kubejs:protomatter")
            .inputFluids(
                "kubejs:meson_g1 400",
                "kubejs:bosonic_matter 400",
                "kubejs:hadronic_matter 400",
                "kubejs:w_z_g2 400"
            )
            .duration(120)
            .outputFluids(
                "kubejs:meson_g2 200",
                "kubejs:meson_g2 200",
                "kubejs:meson_g2 200",
                "kubejs:meson_g2 200"
            )
            .EUt(GTValues.VA[GTValues.UEV])
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.BOTH)
        
        event.recipes.gtceu.virtual_particle_synthesis("hyperdegenerate_matter")
            .inputFluids("gtceu:superheavy_atomic_residue 400", "kubejs:degenerate_matter 400", "kubejs:meson_g2 400")
            .duration(80)
            .outputFluids("gtceu:hyperdegenerate_matter 400")
            .EUt(GTValues.VA[GTValues.UEV])
            .quantumRule(QuantumRule.QUANTUM_POLARIZATION, IO.BOTH)

        event.recipes.gtceu.virtual_particle_synthesis("gluon_g3")
            .inputFluids("kubejs:gluon_g2 480", "kubejs:higgs_g3 240", "gtceu:hyperdegenerate_matter 240")
            .duration(120)
            .outputFluids("kubejs:gluon_g3 240", "kubejs:w_z_g2 360", "gtceu:exotic_particle_solution 240")
            .EUt(GTValues.VA[GTValues.UEV])
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.BOTH)
        
        // --- QUARK GLUON PLASMA ---
        event.recipes.gtceu.virtual_particle_synthesis("quark_gluon_plasma")
            .inputFluids("kubejs:strange_matter_plasma 256", "kubejs:gluon_g3 256", "kubejs:w_z_g2 256", "gtceu:hyperdegenerate_matter 256")
            .duration(80)
            .outputFluids("kubejs:quark_gluon_plasma 512")
            .EUt(GTValues.VA[GTValues.UEV])
            .quantumRule(QuantumRule.QUANTUM_WAVES, IO.IN)
            .quantumRule(QuantumRule.QUANTUM_POLARIZATION, IO.OUT)
    }
})