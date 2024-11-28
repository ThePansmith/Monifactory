ServerEvents.recipes(event => {
    //Reactor Crafting
    event.recipes.gtceu.assembly_line('kubejs:naquadah_reactor')
        .itemInputs('gtceu:computer_monitor_cover', '3x ae2:spatial_pylon', '#gtceu:circuits/zpm', 'gtceu:superconducting_coil',)
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:duranium 288')
        .itemOutputs('gtceu:naquadah_reactor')
        .duration(1500)
        .EUt(122880)
        .stationResearch(b => b.researchStack(Item.of('gtceu:naquadah_bolt')).EUt(30720).CWUt(16, 64000))

    event.recipes.gtceu.assembly_line('kubejs:large_naquadah_reactor')
        .itemInputs('gtceu:computer_monitor_cover', '4x ae2:spatial_pylon', '#gtceu:circuits/uhv', 'gtceu:fusion_coil', '2x gtceu:neutron_reflector', 'gtceu:naquadah_alloy_frame', 'gtceu:uv_sensor', 'gtceu:uv_field_generator', 'gtceu:uv_emitter', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 576')
        .itemOutputs('gtceu:large_naquadah_reactor')
        .duration(1500)
        .EUt(491520)
        .stationResearch(b => b.researchStack(Item.of('gtceu:naquadah_reactor')).EUt(524288).CWUt(128, 512000))

    //Reactor usage
    //TODO: Make recipes not overclockable. I looked through the GregTech KJS integration but am too stupid to figure it out -Ciggy
    // @ Ciggy from 3x1t_5tyl3; In startup you just don't add a "GTRecipeModifier" for overclockables. See other multiblocks. As long as ya don't add it it's fine uwu
    event.recipes.gtceu.naquadah_reactor('kubejs:process_naquadah')
        .itemInputs('gtceu:enriched_naquadah_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(938)
        .EUt(-393216)

    event.recipes.gtceu.naquadah_reactor('kubejs:process_naquadria')
        .itemInputs('gtceu:naquadria_bolt')
        .itemOutputs('gtceu:lead_bolt')
        .duration(3750)
        .EUt(-393216)

    //Fluid Large Reactor Recipes
    if (!isNormalMode) {

        event.recipes.gtceu.large_naquadah_reactor('kubejs:process_t1_fuel')
            .inputFluids('gtceu:naq_fuel_t1 20')
            .perTick(true)
            .inputFluids('gtceu:tritium 1')
            .perTick(false)
            .outputFluids('gtceu:naq_fuel_t1_depleted 10')
            .duration(1000)
            .EUt(-2097152)

    }

    //Solid Large Reactor Recipes
    event.recipes.gtceu.large_naquadah_reactor('kubejs:process_solid_fuel')
        .itemInputs('4x kubejs:naquadah_fuel_rod')
        .itemOutputs('4x kubejs:hot_depleted_naquadah_fuel_rod')
        .duration(24000)
        .EUt(-33554432)
})
