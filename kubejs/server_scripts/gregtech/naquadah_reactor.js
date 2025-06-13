/**
 * Naquadah Reactor multiblock
 */

ServerEvents.recipes(event => {
    // Naquadah Reactor Crafting
    event.recipes.gtceu.assembly_line("kubejs:naquadah_reactor")
        .itemInputs("gtceu:computer_monitor_cover", "3x ae2:spatial_pylon", "#gtceu:circuits/zpm", "gtceu:superconducting_coil",)
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:duranium 288")
        .itemOutputs("gtceu:naquadah_reactor")
        .duration(1500)
        .EUt(122880)
        .stationResearch(b => b.researchStack(Item.of("kubejs:empty_fuel_rod")).EUt(30720).CWUt(16, 64000))

    // Naquadah Reactor usage
    event.recipes.gtceu.naquadah_reactor("kubejs:process_naquadah")
        .itemInputs("4x kubejs:naquadah_fuel_rod")
        .itemOutputs("3x kubejs:hot_naquadah_fuel_rod", "1x kubejs:hot_depleted_naquadah_fuel_rod")
        .duration(3750)
        .EUt(-3 * GTValues.V[GTValues.ZPM])

    // Large Naquadah Reactor recipe
    event.recipes.gtceu.assembly_line("kubejs:large_naquadah_reactor")
        .itemInputs("gtceu:computer_monitor_cover", "4x ae2:spatial_pylon", "2x #gtceu:circuits/uhv", "gtceu:fusion_coil", "2x gtceu:neutron_reflector", "gtceu:naquadah_alloy_frame", "gtceu:uv_sensor", "2x gtceu:uv_field_generator", "gtceu:uv_emitter", "64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:omnium 576")
        .itemOutputs("gtceu:large_naquadah_reactor")
        .duration(1500)
        .EUt(491520)
        .stationResearch(b => b.researchStack(Item.of("gtceu:naquadah_reactor")).EUt(524288).CWUt(128, 512000))

    // Refinery Recipe
    event.recipes.gtceu.assembly_line("kubejs:naquadah_refinery")
        .itemInputs("gtceu:large_mixer", "4x #gtceu:circuits/uhv", "8x nuclearcraft:plate_elite", "4x gtceu:uhv_field_generator", "4x gtceu:uhv_hermetic_casing", "2x kubejs:empty_fuel_rod", "2x gtceu:uhv_electric_pump", "2x gtceu:neutronium_huge_fluid_pipe", "4x kubejs:cryotheum_coolant_unit", "16x gtceu:double_tritanium_plate")
        .inputFluids("gtceu:omnium 1152", "gtceu:soldering_alloy 1152", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtceu:naquadah_refinery")
        .duration(1500)
        .EUt(491520)
        .stationResearch(b => b.researchStack(Item.of("gtceu:large_mixer")).EUt(524288).CWUt(128, 512000))

    // Large Naquadah Reactor usage
    event.recipes.gtceu.large_naquadah_reactor("kubejs:process_t1_fuel")
        .inputFluids("gtceu:naq_fuel_t1 10")
        .outputFluids("gtceu:naq_fuel_t1_depleted 10")
        .duration(20)
        .EUt(-GTValues.V[GTValues.UIV])

    event.recipes.gtceu.large_naquadah_reactor("kubejs:process_t2_fuel")
        .inputFluids("gtceu:naq_fuel_t2 10")
        .outputFluids("gtceu:naq_fuel_t2_depleted 10")
        .duration(20)
        .EUt(-GTValues.V[GTValues.OpV])

    event.recipes.gtceu.large_naquadah_reactor("kubejs:process_superfuel")
        .inputFluids("gtceu:naquadah_superfuel 10")
        .outputFluids("gtceu:naquadah_superfuel_depleted 10")
        .duration(20)
        .EUt(-4 * GTValues.V[GTValues.MAX])
})
