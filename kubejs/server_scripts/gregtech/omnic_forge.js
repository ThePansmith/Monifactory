/**
 * Omnic Forge multiblock
 */
ServerEvents.recipes(event => {
    event.recipes.extendedcrafting.shaped_table("gtceu:omnic_forge", [
        "ASESA",
        "SCRCS",
        "EVTVE",
        "SCRCS",
        "ASESA"
    ], {
        A: "#gtceu:circuits/uhv",
        S: "gtceu:double_neutronium_plate",
        E: "gtceu:uv_field_generator",
        C: "kubejs:omnic_matrix_machine_casing",
        R: "gtceu:uv_robot_arm",
        V: "gtceu:uv_conveyor_module",
        T: "gtceu:uv_machine_hull"
    })

    event.recipes.gtceu.assembler("kubejs:omnic_matrix_machine_casing")
        .itemInputs("12x gtceu:omnium_plate", "2x gtceu:crystal_matrix_frame", "1x gtceu:zpm_field_generator", "2x #gtceu:circuits/uv")
        .itemOutputs("2x kubejs:omnic_matrix_machine_casing")
        .duration(200)
        .EUt(65520)

    event.recipes.gtceu.omnic_forge("kubejs:omnic_matrix_machine_casing_forge")
        .itemInputs("6x gtceu:omnium_plate", "gtceu:crystal_matrix_frame", "gtceu:zpm_field_generator", "#gtceu:circuits/uv")
        .itemOutputs("2x kubejs:omnic_matrix_machine_casing")
        .duration(100)
        .EUt(65520)

    event.recipes.gtceu.omnic_forge("kubejs:omnic_matrix_coil")
        .itemInputs("8x gtceu:omnium_double_wire", "8x gtceu:crystal_matrix_foil")
        .itemOutputs("kubejs:omnic_matrix_coil_block")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.omnic_forge("kubejs:netherite_casing")
        .itemInputs("8x gtceu:neutronium_plate", "8x gtceu:large_scale_assembler_casing", "2x gtceu:dense_activated_netherite_plate", "6x gtceu:tungsten_steel_rod")
        .itemOutputs("4x kubejs:dimensional_stabilization_netherite_casing")
        .duration(100)
        .EUt(65520)

    event.recipes.gtceu.omnic_forge("kubejs:bioalloy_casing")
        .itemInputs("4x gtceu:sculk_bioalloy_plate", "2x gtceu:cryolobus_frame", "4x kubejs:warden_horn", "6x gtceu:actinium_rod")
        .itemOutputs("2x kubejs:bioalloy_casing")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.omnic_forge("kubejs:bioalloy_fusion_casing")
        .itemInputs("gtceu:uhv_machine_hull", "2x kubejs:bioalloy_casing", "12x gtceu:cryococcus_plate", "4x gtceu:fusion_casing_mk3", "gtceu:uhv_field_generator")
        .itemOutputs("4x kubejs:bioalloy_fusion_casing")
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.omnic_forge("kubejs:timeless_monic_heavy_plating")
        .itemInputs("10x gtceu:monium_plate", "8x kubejs:quantum_fluxed_eternium_heavy_plating", "4x kubejs:universe_resistant_neutronium_heavy_plating", "4x kubejs:elementally_infused_omnic_matrix_heavy_plating", "2x kubejs:dimensionally_stabilized_infinity_heavy_plating", "16x kubejs:contained_singularity")
        .itemOutputs("kubejs:timeless_monic_heavy_plating")
        .duration(800)
        .EUt(134217728)

    // Buffed Catalyst Recycling
    event.recipes.gtceu.omnic_forge("kubejs:furious_infinity_catalyst_recycling")
        .itemInputs("kubejs:dormant_furious_infinity_catalyst", "kubejs:heart_of_a_universe")
        .itemOutputs("kubejs:furious_infinity_catalyst")
        .duration(2000)
        .EUt(65520)

    event.recipes.gtceu.omnic_forge("kubejs:serene_infinity_catalyst_recycling")
        .itemInputs("kubejs:inert_serene_infinity_catalyst", "kubejs:heart_of_a_universe")
        .itemOutputs("kubejs:serene_infinity_catalyst")
        .duration(2000)
        .EUt(65520)

    // Enhanced Infinity Catalyst Crafting
    event.recipes.gtceu.omnic_forge("kubejs:furious_infinity_catalyst_crafting")
        .itemInputs("kubejs:infinity_catalyst", "kubejs:heart_of_a_universe", "gtceu:infinity_frame", "2x gtceu:uev_emitter", "64x gtceu:holmium_foil")
        .itemOutputs("kubejs:furious_infinity_catalyst")
        .duration(1000)
        .EUt(1966080)

    event.recipes.gtceu.omnic_forge("kubejs:serene_infinity_catalyst_crafting")
        .itemInputs("kubejs:infinity_catalyst", "kubejs:heart_of_a_universe", "gtceu:monium_frame", "16x kubejs:contained_singularity")
        .itemOutputs("kubejs:serene_infinity_catalyst")
        .duration(1000)
        .EUt(1966080)

    // Simplified Crafting
    event.recipes.gtceu.omnic_forge("kubejs:omnic_forge_dark_soularium_thruster")
        .itemInputs("4x gtceu:dark_soularium_plate", "6x gtceu:vibrant_alloy_plate", "2x enderio:ender_crystal", "2x enderio:prescient_crystal", "laserio:energy_overclocker_card_tier_8", "kubejs:flight_control_unit")
        .itemOutputs("kubejs:dark_soularium_thruster")
        .duration(100)
        .EUt(7680)

    event.recipes.gtceu.omnic_forge("kubejs:omnic_forge_flux_thruster")
        .itemInputs("3x redstone_arsenal:flux_plating", "4x gtceu:enderium_plate", "2x gtceu:signalum_plate", "thermal:dynamo_numismatic", "kubejs:glowstone_elevation_unit", "kubejs:cryotheum_coolant_unit")
        .itemOutputs("kubejs:fluxed_thruster")
        .duration(50)
        .EUt(7680)

    event.recipes.gtceu.omnic_forge("kubejs:omnic_forge_quantum_flux")
        .itemInputs("redstone_arsenal:flux_gem", "4x kubejs:primal_mana", "2x minecraft:dragon_breath", "gtceu:nether_star_dust")
        .itemOutputs("64x kubejs:quantum_flux")
        .duration(50)
        .EUt(1920)

    event.recipes.gtceu.omnic_forge("fieldstabilizedcompound")
        .itemInputs("4x gtceu:uiv_field_generator", "3x gtceu:uev_field_generator", "2x gtceu:uhv_field_generator", "12x gtceu:omnium_block", "10x kubejs:quasi_stable_neutron_star") // TODO: REPLACE OMNIUM BLOCK WITH PRISMATIC STUFF
        .itemOutputs("kubejs:field_stabilised_omnic_pulsar_compound")
        .duration(255)
        .EUt(16380)

    event.recipes.gtceu.omnic_forge("singularity_containment_unit")
        .itemInputs("4x gtceu:monium_plate", "4x gtceu:neutron_reflector", "1x gtceu:uev_sensor", "2x gtceu:uhv_sensor", "gtceu:uev_field_generator")
        .itemOutputs("64x kubejs:singularity_containment_unit")
        .duration(300)
        .EUt(16380)
})
