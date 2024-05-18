//Pre Release
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line('draconic_fusion_crafting_core')
        .itemInputs('gtceu:hsse_frame', '6x gtceu:tungsten_carbide_plate', '4x kubejs:draconium_core', '4x minecraft:nether_star', '2x gtceu:iv_sensor', '#gtceu:circuits/iv', '8x #forge:storage_blocks/lapis')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:crafting_core')
        .duration(1200)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('basic_crafting_injector')
        .itemInputs('gtceu:assembly_line_unit', 'gtceu:enori_empowered_block', 'gtceu:europium_plate', '2x kubejs:draconium_core', '4x enderio:ender_crystal')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:basic_crafting_injector')
        .duration(600)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('draconic_energy_core')
        .itemInputs('gtceu:tungsten_carbide_frame', '6x gtceu:draconium_plate', 'kubejs:wyvern_core', '4x kubejs:wyvern_energy_core', '2x gtceu:iv_field_generator', '12x gtceu:vanadium_gallium_single_wire')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:energy_core')
        .duration(1200)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('particle_generator')
        .itemInputs('gtceu:tungsten_carbide_frame', '6x gtceu:draconium_plate', 'kubejs:draconium_core', '10x minecraft:blaze_rod', '3x gtceu:ev_emitter', '4x gtceu:restonia_empowered_block')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:particle_generator')
        .duration(1200)
        .EUt(30720)

    event.shaped('kubejs:draconium_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: "gtceu:draconium_ingot",
        B: "gtceu:tungsten_carbide_ingot",
        C: "gtceu:palis_empowered_block"
    }).id('kubejs:components/draconium_core')

    event.recipes.gtceu.assembly_line('reactor_stabilizer_focus_ring')
        .itemInputs('gtceu:draconium_awakened_frame', 'kubejs:awakened_core', '4x gtceu:draconium_awakened_ring', '4x #forge:plates/crystal_matrix', '4x gtceu:sunnarium_plate')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:reactor_prt_focus_ring')
        .duration(1200)
        .EUt(30720)

    event.shaped('kubejs:reactor_prt_in_rotor', [
        'AAA',
        'GDD',
        '   '
    ], {
        A: "gtceu:draconium_awakened_plate",
        D: "gtceu:draconium_plate",
        G: "gtceu:draconium_gear"
    }).id('kubejs:machines/reactor_prt_in_rotor')

    event.shaped('kubejs:reactor_prt_out_rotor', [
        'AAA',
        'GDD',
        '   '
    ], {
        A: "#forge:plates/crystal_matrix",
        D: "gtceu:draconium_plate",
        G: "gtceu:draconium_gear"
    }).id('kubejs:machines/reactor_prt_out_rotor')

    event.recipes.gtceu.assembly_line('reactor_stabilizer_rotor_assembly')
        .itemInputs('gtceu:draconium_awakened_frame', 'gtceu:draconium_awakened_gear', '2x gtceu:draconium_awakened_plate', '2x kubejs:reactor_prt_in_rotor', '2x kubejs:reactor_prt_out_rotor')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:reactor_prt_rotor_full')
        .duration(600)
        .EUt(491520)

    event.recipes.gtceu.assembly_line('reactor_stabilizer_frame')
        .itemInputs('gtceu:draconium_awakened_frame', 'gtceu:draconium_awakened_gear', 'kubejs:awakened_core', '2x gtceu:zpm_sensor', '2x gtceu:zpm_emitter', '6x nuclearcraft:plate_elite')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:reactor_prt_stab_frame')
        .duration(750)
        .EUt(491520)

    event.shaped('kubejs:wyvern_energy_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: "kubejs:draconium_core",
        B: "gtceu:restonia_empowered_block",
        C: "gtceu:lapotronic_energy_orb"
    }).id('kubejs:components/wyvern_energy_core')
})