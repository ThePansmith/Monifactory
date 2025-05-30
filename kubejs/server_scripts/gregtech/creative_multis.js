/**
 * Creative Multiblock Recipes
 */
ServerEvents.recipes(event => {


    event.recipes.gtceu.assembly_line("kubejs:creative_power")
        .itemInputs("4x #gtceu:circuits/uiv", "16x gtceu:monium_plate", "4x kubejs:dimensional_stabilization_netherite_casing", "8x gtceu:uev_field_generator", "8x gtceu:uev_emitter", "4x gtceu:max_battery", "2x solarflux:sp_custom_infinity", "32x gtceu:polyethyl_cyanoacrylate_plate")
        .inputFluids("gtceu:soldering_alloy 1152")
        .itemOutputs("monilabs:creative_energy_multi")
        .stationResearch(b => b
            .researchStack("gtceu:large_naquadah_reactor")
            .EUt(1966080)
            .CWUt(128, 512000)
        )
        .duration(1200)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line("kubejs:creative_data")
        .itemInputs("4x #gtceu:circuits/uiv", "16x gtceu:holmium_plate", "4x kubejs:dimensional_stabilization_netherite_casing", "4x gtceu:uev_emitter", "8x gtceu:advanced_data_access_hatch", "4x gtceu:network_switch", "32x gtceu:polyethyl_cyanoacrylate_plate")
        .inputFluids("gtceu:soldering_alloy 1152")
        .itemOutputs("monilabs:creative_data_multi")
        .stationResearch(b => b
            .researchStack("gtceu:network_switch")
            .EUt(1966080)
            .CWUt(128, 512000)
        )
        .duration(1200)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line("monilabs:omnic_synthesizer")
        .itemInputs("gtceu:atomic_casing", "6x gtceu:trinaquadalloy_plate", "kubejs:heart_of_a_universe", "4x #gtceu:circuits/uhv", "2x gtceu:uv_robot_arm", "2x gtceu:uv_field_generator", "kubejs:abyssal_energy_core")
        .inputFluids("gtceu:soldering_alloy 1152")
        .itemOutputs("monilabs:omnic_synthesizer")
        .stationResearch(b => b
            .researchStack("gtceu:research_station")
            .EUt(1966080)
            .CWUt(128, 512000)
        )
        .duration(1200)
        .EUt(1966080)
})
