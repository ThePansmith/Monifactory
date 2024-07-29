//Pre Release
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line('kubejs_fusion_crafting_core')
        .itemInputs('gtceu:hsse_frame', '6x gtceu:tungsten_carbide_plate', '4x kubejs:mesol_core', '4x minecraft:nether_star', '2x gtceu:iv_sensor', '#gtceu:circuits/iv', '8x #forge:storage_blocks/diamatine_empowered')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:reverberation_core')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('kubejs:mesol_core').EUt(480).duration(1200))
        .duration(1200)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('sculk_reaction_casing')
        .itemInputs('gtceu:assembly_line_unit', 'gtceu:enori_empowered_block', 'gtceu:europium_plate', '2x kubejs:mesol_core', '4x enderio:ender_crystal')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('moni_multiblocks:mesol_coil_block')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:enori_empowered_block').EUt(480).duration(1200))
        .duration(600)
        .EUt(30720)


    event.shaped('kubejs:mesol_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: "gtceu:cryolobus_ingot",
        B: "gtceu:tungsten_carbide_ingot",
        C: "gtceu:palis_empowered_block"
    }).id('kubejs:components/mesol_core')

    event.recipes.gtceu.assembler("kubejs:mesol_core_assembler")
    .itemInputs("gtceu:palis_empowered_block", "4x gtceu:tungsten_carbide_ingot", "4x gtceu:cryolobus_ingot")
    .itemOutputs("kubejs:mesol_core")
    .duration(100)
    .EUt(30)

    event.shaped('kubejs:bathyal_energy_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: "kubejs:bathyal_core",
        B: "gtceu:restonia_empowered_block",
        C: "gtceu:lapotronic_energy_orb"
    }).id('kubejs:components/bathyal_energy_core')

event.recipes.gtceu.assembler("kubejs:bathyal_energy_core_assembler")
    .itemInputs("gtceu:lapotronic_energy_orb", "4x gtceu:restonia_empowered_block", "4x kubejs:bathyal_core")
    .itemOutputs("kubejs:bathyal_energy_core")
    .duration(100)
    .EUt(30)

})