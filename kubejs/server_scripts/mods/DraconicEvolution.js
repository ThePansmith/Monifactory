//Pre Release
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line('kubejs_fusion_crafting_core')
        .itemInputs('gtceu:hsse_frame', '6x gtceu:tungsten_carbide_plate', '4x kubejs:sculk_core', '4x minecraft:nether_star', '2x gtceu:iv_sensor', '#gtceu:circuits/iv', '8x #forge:storage_blocks/lapis')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:reverberation_core')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('kubejs:sculk_core').EUt(480).duration(1200))
        .duration(1200)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('sculk_reaction_casing')
        .itemInputs('gtceu:assembly_line_unit', 'gtceu:enori_empowered_block', 'gtceu:europium_plate', '2x kubejs:sculk_core', '4x enderio:ender_crystal')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:sculk_reaction_casing')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:enori_empowered_block').EUt(480).duration(1200))
        .duration(600)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('resonant_energy_core')
        .itemInputs('gtceu:tungsten_carbide_frame', '6x gtceu:sculk_compound_plate', 'kubejs:echo_core', '4x kubejs:echo_energy_core', '2x gtceu:iv_field_generator', '12x gtceu:vanadium_gallium_single_wire')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:energy_core')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('kubejs:echo_energy_core').EUt(480).duration(1200))
        .duration(1200)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('reactor_prt_stab_frame')
        .itemInputs('6x nuclearcraft:plate_elite', 'kubejs:resonant_core', 'gtceu:resonant_sculk_compound_gear', 'gtceu:resonant_sculk_compound_frame', '2x gtceu:zpm_emitter', '2x gtceu:zpm_sensor')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:reactor_prt_stab_frame')
        .stationResearch(b => b.researchStack('gtceu:resonant_sculk_compound_frame').CWUt(96,384000))
        .duration(750)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('particle_generator')
        .itemInputs('gtceu:tungsten_carbide_frame', '6x gtceu:sculk_compound_plate', 'kubejs:sculk_core', '10x minecraft:blaze_rod', '3x gtceu:ev_emitter', '4x gtceu:restonia_empowered_block')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:particle_generator')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:restonia_empowered_block').EUt(480).duration(1200))
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

    event.shaped('kubejs:advanced_magnet', [
        'R R',
        'S S',
        'SWS'
    ], {
        R: "minecraft:redstone_block",
        S: "gtceu:sculk_compound_ingot",
        W: "waystones:warp_stone"
    }).id('kubejs:advanced_magnet')

    event.shaped('kubejs:dislocation_inhibitor', [
        'III',
        'BMB',
        'III'
    ], {
        I: "minecraft:iron_ingot",
        B: "minecraft:iron_bars",
        M: "kubejs:advanced_magnet"
    }).id('kubejs:dislocation_inhibitor')
})