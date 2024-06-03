ServerEvents.recipes(event => {
    //Reactor Crafting
    event.recipes.gtceu.assembly_line('kubejs:naquadah_reactor_i')
        .itemInputs('gtceu:computer_monitor_cover', '3x ae2:spatial_pylon', '#gtceu:circuits/zpm', '2x gtceu:fusion_glass')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 32')
        .itemOutputs('gtceu:naquadah_reactor_i')
        .duration(1500)
        .EUt(122880)
        .stationResearch(b => b.researchStack(Item.of('gtceu:naquadah_bolt')).EUt(131072).CWUt(2048))

    event.recipes.gtceu.assembly_line('kubejs:naquadah_reactor_ii')
        .itemInputs('gtceu:computer_monitor_cover', '3x ae2:spatial_pylon', '#gtceu:circuits/uv', '2x gtceu:fusion_glass')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 288')
        .itemOutputs('gtceu:naquadah_reactor_ii')
        .duration(1500)
        .EUt(122880)
        .stationResearch(b => b.researchStack(Item.of('gtceu:naquadah_reactor_i')).EUt(131072).CWUt(2048))

    //Reactor usage
    //TODO: Make recipes not overclockable. I looked through the GregTech KJS integration but am too stupid to figure it out -Ciggy
    event.recipes.gtceu.naquadah_reactor_i('kubejs:process_naquadah_i')
        .itemInputs('gtceu:enriched_naquadah_nugget') // TODO: Add bolts - or maybe even 'fuel rods', that would be cool I think
        .itemOutputs('gtceu:lead_nugget')
        .duration(938)
        .EUt(-393216)

    event.recipes.gtceu.naquadah_reactor_i('kubejs:process_naquadria_i')
        .itemInputs('gtceu:naquadria_nugget')
        .itemOutputs('gtceu:lead_nugget')
        .duration(3750)
        .EUt(-393216)

    event.recipes.gtceu.naquadah_reactor_ii('kubejs:process_naquadah_ii')
        .itemInputs('gtceu:enriched_naquadah_nugget')
        .itemOutputs('gtceu:lead_nugget')
        .duration(1875)
        .EUt(-1572864)

    event.recipes.gtceu.naquadah_reactor_ii('kubejs:process_naquadria_ii')
        .itemInputs('gtceu:naquadria_nugget')
        .itemOutputs('gtceu:lead_nugget')
        .duration(7500)
        .EUt(-1572864)
})