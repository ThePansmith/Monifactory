/**
 * Recipe definitions for hyperbolic microverse projector missions.
 */
ServerEvents.recipes(event => {
    // T8MM mission
    if (doComplexMicroverses) {
        microverse_mission(event, 8, 4, 200, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "64x gtceu:dilithium_gem",
                    "64x gtceu:dilithium_gem",
                    Item.of("kubejs:hadal_energy_core", "{Damage:8000000}").weakNBT(),
                    "kubejs:lair_of_the_warden_data"
                )
                .damageRate(-70)
                .itemOutputs(
                    "64x kubejs:hadal_shard",
                    "64x kubejs:warden_heart",
                    "64x kubejs:warden_heart",
                    "32x kubejs:warden_heart",
                    "64x kubejs:warden_horn",
                    "48x kubejs:warden_horn"
                )
                .requiredMicroverse(5) // Abyssal
                .updateMicroverse(1, true) // Normal, keep integrity
                .blacklistMicroverseParallels()
        })
    } else {
        microverse_mission(event, 8, 4, undefined, undefined, 100).forEach(builder => {
            builder
                .itemInputs(
                    "64x gtceu:dilithium_gem",
                    "64x gtceu:dilithium_gem",
                    Item.of("kubejs:hadal_energy_core", "{Damage:8000000}").weakNBT(),
                    "kubejs:lair_of_the_warden_data"
                )
                .damageRate(20)
                .itemOutputs(
                    "48x kubejs:hadal_shard",
                    "64x kubejs:warden_heart",
                    "64x kubejs:warden_heart",
                    "32x kubejs:warden_heart",
                    "64x kubejs:warden_horn",
                    "48x kubejs:warden_horn"
                )
                .requiredMicroverse(4) // Corrupted
        })
    }

    // T10MM missions
    microverse_mission(event, 10, 4, 180).forEach(builder => {
        builder
            .inputFluids("gtceu:helium_plasma 16000")
            .itemInputs("kubejs:universal_collapse_device", "2x kubejs:active_prismatic_core")
            .damageRate(75)
            .itemOutputs("16x kubejs:heart_of_a_universe")
            .requiredMicroverse(4) // Corrupted
            .updateMicroverse((doComplexMicroverses ? 8 : 0)) // Degenerate / None
            .blacklistMicroverseParallels()
    })

    // T11MM missions
    if (doComplexMicroverses) {
        microverse_mission(event, 11, 4).forEach(builder => {
            builder
                .itemInputs("kubejs:universal_navigator", "gtceu:neutronium_drill_head", "kubejs:elite_drilling_kit")
                .inputFluids("gtceu:crude_naquadah_fuel 500")
                .damageRate(3)
                .itemOutputs(
                    "64x kubejs:alien_scrap",
                    "64x kubejs:alien_scrap"
                )
                .requiredMicroverse(6) // Necrosed
        })
    } else {
        microverse_mission(event, 11, 4).forEach(builder => {
            builder
                .itemInputs("kubejs:universal_navigator", "gtceu:neutronium_drill_head", "kubejs:elite_drilling_kit")
                .inputFluids("gtceu:crude_naquadah_fuel 500")
                .damageRate(2)
                .itemOutputs(
                    "64x kubejs:alien_scrap",
                    "64x kubejs:alien_scrap",
                    "64x kubejs:alien_scrap",
                    "64x kubejs:alien_scrap",
                    "64x kubejs:alien_scrap"
                )
                .requiredMicroverse(3) // Shattered
        })
    }
    if (doParticleSynthesis) {
        microverse_mission(event, 11, 4, 100).forEach(builder => {
            builder
                .itemInputs(
                    "kubejs:gravitational_amplifier",
                    "64x gtceu:gravi_star"
                )
                .inputFluids("gtceu:crude_naquadah_fuel 500", "kubejs:higgs_g3 6400")
                .damageRate(2)
                .itemOutputs(
                    "64x kubejs:quasi_stable_neutron_star"
                )
                .requiredMicroverse((doComplexMicroverses ? 6 : 3)) // Necrosed / Shattered
        })
    } else {
        microverse_mission(event, 11, 4, 100).forEach(builder => {
            builder
                .itemInputs(
                    "kubejs:gravitational_amplifier",
                    "64x gtceu:gravi_star"
                )
                .inputFluids("gtceu:crude_naquadah_fuel 500")
                .damageRate(2)
                .itemOutputs(
                    "64x kubejs:quasi_stable_neutron_star"
                )
                .requiredMicroverse((doComplexMicroverses ? 6 : 3)) // Necrosed / Shattered
        })
    }

    if (doComplexMicroverses) {
        microverse_mission(event, 12, 4, 60).forEach(builder => {
            builder
                .itemInputs(
                    "monilabs:shard_of_causality",
                    "kubejs:field_stabilized_prismatic_pulsar_compound",
                    "64x gtceu:infinity_ingot",
                    "64x gtceu:meta_null_ingot"
                )
                .inputFluids("kubejs:quark_gluon_plasma 2000")
                .damageRate(20)
                .itemOutputs("64x gtceu:monium_ingot", "64x gtceu:monium_ingot")
                .requiredMicroverse(7) // Supercharged
                .updateMicroverse(8) // Degenerate
                .blacklistMicroverseParallels()
        })
    } else {
        microverse_mission(event, 12, 4, 90).forEach(builder => {
            builder
                .itemInputs("kubejs:field_stabilized_prismatic_pulsar_compound", "32x gtceu:infinity_ingot", "32x gtceu:meta_null_ingot")
                .damageRate(75)
                .itemOutputs("32x gtceu:monium_ingot")
                .requiredMicroverse(4) // Corrupted
                .updateMicroverse(0)
                .blacklistMicroverseParallels()
        })
    }
})
