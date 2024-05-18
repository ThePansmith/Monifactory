//Pre Release
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line('kubejs_fusion_crafting_core')
        .itemInputs('gtceu:hsse_frame', '6x gtceu:tungsten_carbide_plate', '4x kubejs:sculk_core', '4x minecraft:nether_star', '2x gtceu:iv_sensor', '#gtceu:circuits/iv', '8x #forge:storage_blocks/lapis')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:crafting_core')
        .duration(1200)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('sculk_reaction_casing')
        .itemInputs('gtceu:assembly_line_unit', 'gtceu:enori_empowered_block', 'gtceu:europium_plate', '2x kubejs:sculk_core', '4x enderio:ender_crystal')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:sculk_reaction_casing')
        .duration(600)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('resonant_energy_core')
        .itemInputs('gtceu:tungsten_carbide_frame', '6x gtceu:sculk_compound_plate', 'kubejs:echo_core', '4x kubejs:echo_energy_core', '2x gtceu:iv_field_generator', '12x gtceu:vanadium_gallium_single_wire')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:energy_core')
        .duration(1200)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('particle_generator')
        .itemInputs('gtceu:tungsten_carbide_frame', '6x gtceu:sculk_compound_plate', 'kubejs:sculk_core', '10x minecraft:blaze_rod', '3x gtceu:ev_emitter', '4x gtceu:restonia_empowered_block')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:particle_generator')
        .duration(1200)
        .EUt(30720)

    event.shaped('kubejs:sculk_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: "gtceu:sculk_compound_ingot",
        B: "gtceu:tungsten_carbide_ingot",
        C: "gtceu:palis_empowered_block"
    }).id('kubejs:components/sculk_core')

    event.shaped('kubejs:echo_energy_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: "kubejs:sculk_core",
        B: "gtceu:restonia_empowered_block",
        C: "gtceu:lapotronic_energy_orb"
    }).id('kubejs:components/echo_energy_core')
})