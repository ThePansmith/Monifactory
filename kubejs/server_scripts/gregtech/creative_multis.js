/**
 * Creative Multiblock Recipes
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line("kubejs:creative_power")
        .itemInputs("4x #gtceu:circuits/uev", "16x gtceu:monium_plate", "4x monilabs:dimensional_stabilization_netherite_casing", "8x gtceu:uhv_field_generator", "8x gtceu:uhv_emitter", "4x gtceu:max_battery", "2x solarflux:sp_custom_infinity")
        .inputFluids("gtceu:advanced_soldering_alloy 1152", "gtceu:polyethyl_cyanoacrylate 1152")
        .itemOutputs("monilabs:creative_energy_multi")
        .stationResearch(b => b
            .researchStack("gtceu:large_naquadah_reactor")
            .EUt(1966080)
            .CWUt(128, 512000)
        )
        .duration(1200)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line("omniscience_research_beacon")
        .itemInputs("gtceu:computation_receiver_hatch", "8x gtceu:europium_hex_cable", "4x gtceu:research_station", "16x gtceu:advanced_computer_casing", "16x #gtceu:circuits/uhv", "3x gtceu:uhv_sensor", "kubejs:universal_navigator", "4x gtceu:uhv_field_generator", "4x monilabs:sculk_bioalloy_plate", "64x gtceu:normal_optical_pipe", "64x gtceu:fine_ruridit_wire", "32x gtceu:ruthenium_trinium_americium_neutronate_single_wire")
        .inputFluids("gtceu:advanced_soldering_alloy 2304", "gtceu:omnium 4608", "gtceu:polyethyl_cyanoacrylate 2304")
        .itemOutputs("monilabs:creative_data_multi")
        .stationResearch(b => b
            .researchStack("gtceu:network_switch")
            .EUt(1966080)
            .CWUt(96, 57600)
        )
        .duration(1200)
        .EUt(7864320)

    // Recipes used to run the creative multiblocks
    event.recipes.gtceu.creative_energy_multi("kubejs:superfuel_infinite_power")
        .inputFluids("gtceu:naquadah_superfuel 500")
        .duration(20)

    event.recipes.gtceu.creative_data_multi("kubejs:infinite_research")
        .inputFluids("gtceu:pcb_coolant 1080")
        .EUt(GTValues.VA[GTValues.UHV])
        .CWUt(256)
        .duration(20)
})
