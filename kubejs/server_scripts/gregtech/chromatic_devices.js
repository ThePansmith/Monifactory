/**
 * Recipes for the devices used to manipulate chroma the Prismatic Crucible
 */

ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line("chromatic_stabilizer")
        .itemInputs("gtceu:superconducting_coil", "gtceu:dense_rhodium_plated_palladium_plate", "2x #gtceu:circuits/uhv", "kubejs:chromatically_inert_frame")
        .inputFluids("gtceu:omnium 288", "gtceu:polyether_ether_ketone 288")
        .itemOutputs("kubejs:chromatic_stabilizer")
        .duration(20 * 10)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b
            .researchStack("kubejs:chromatically_inert_frame")
            .CWUt(144)
            .EUt(GTValues.VA[GTValues.UHV])
        )

    event.recipes.gtceu.assembly_line("chromatic_capacitor")
        .itemInputs("gtceu:neutronium_small_fluid_pipe", "gtceu:uhv_field_generator", "4x gtceu:crystal_matrix_foil", "2x gtceu:uhv_sensor", "6x gtceu:stainless_steel_ring")
        .inputFluids("gtceu:omnium 288", "gtceu:polyethyl_cyanoacrylate 288")
        .itemOutputs("kubejs:chromatic_capacitor_empty")
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b
            .researchStack("gtceu:neutronium_small_fluid_pipe")
            .CWUt(144)
            .EUt(GTValues.VA[GTValues.UHV])
        )
})
