/**
 * Creative Multiblock Recipes
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line("kubejs:creative_power")
        .itemInputs("4x #gtceu:circuits/uev", "16x gtceu:monium_plate", "4x monilabs:dimensional_stabilization_netherite_casing", "8x gtceu:uhv_field_generator", "8x gtceu:uhv_emitter", "4x gtceu:max_battery", "2x solarflux:sp_custom_infinity")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:polyethyl_cyanoacrylate 1152")
        .itemOutputs("gtceu:omnidimensional_power_singularity")
        .stationResearch(b => b
            .researchStack("gtceu:large_naquadah_reactor")
            .EUt(1966080)
            .CWUt(128, 512000)
        )
        .duration(1200)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line("kubejs:creative_data")
        .itemInputs("4x #gtceu:circuits/uhv", "16x #forge:plates/necrosiderite", "4x monilabs:dimensional_stabilization_netherite_casing", "4x gtceu:uv_emitter", "8x gtceu:advanced_data_access_hatch", "4x gtceu:network_switch")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:polyethyl_cyanoacrylate 1152")
        .itemOutputs("gtceu:creative_data_multi")
        .stationResearch(b => b
            .researchStack("gtceu:network_switch")
            .EUt(1966080)
            .CWUt(128, 512000)
        )
        .duration(1200)
        .EUt(1966080)

    // Recipes used to run the creative multiblocks
    event.recipes.gtceu.omnidimensional_power_singularity("kubejs:superfuel_infinite_power")
        .inputFluids("gtceu:naquadah_superfuel 500")
        .duration(20)

    event.recipes.gtceu.omniscience_research_beacon("kubejs:infinite_research")
        .inputFluids("gtceu:pcb_coolant 1080")
        .EUt(GTValues.VA[GTValues.UHV])
        .CWUt(256)
        .duration(20)
})
