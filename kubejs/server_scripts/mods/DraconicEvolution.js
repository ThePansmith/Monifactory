//Pre Release
ServerEvents.recipes(event => {
    const excludedItems = ['draconicevolution:dislocation_inhibitor', 'draconicevolution:draconium_chest', 'draconicevolution:generator', 'draconicevolution:dislocator_pedestal', 'draconicevolution:creative_op_capacitor', 'draconicevolution:particle_generator', 'draconicevolution:grinder', 'draconicevolution:flux_gate', 'draconicevolution:reactor_prt_rotor_full', 'draconicevolution:fluid_gate', 'draconicevolution:crafting_core', 'draconicevolution:basic_crafting_injector', 'draconicevolution:wyvern_crafting_injector', 'draconicevolution:awakened_crafting_injector', 'draconicevolution:chaotic_crafting_injector', 'draconicevolution:energy_core', 'draconicevolution:energy_core_stabilizer', 'draconicevolution:energy_pylon', 'draconicevolution:reactor_core', 'draconicevolution:reactor_stabilizer', 'draconicevolution:infused_obsidian', 'draconicevolution:draconium_core', 'draconicevolution:wyvern_core', 'draconicevolution:awakened_core', 'draconicevolution:chaotic_core', 'draconicevolution:wyvern_energy_core', 'draconicevolution:draconic_energy_core', 'draconicevolution:dragon_heart', 'draconicevolution:chaos_shard', 'draconicevolution:large_chaos_frag', 'draconicevolution:medium_chaos_frag', 'draconicevolution:small_chaos_frag', 'draconicevolution:reactor_prt_stab_frame', 'draconicevolution:reactor_prt_in_rotor', 'draconicevolution:reactor_prt_out_rotor', 'draconicevolution:reactor_prt_focus_ring', 'draconicevolution:magnet', 'draconicevolution:advanced_magnet', Item.of('draconicevolution:dislocator', '{Damage:0}'), 'draconicevolution:advanced_dislocator', 'draconicevolution:wyvern_capacitor', 'draconicevolution:draconic_capacitor', 'draconicevolution:creative_capacitor']
    const regexPattern = new RegExp(`^(?!(${excludedItems.join('|')})$)draconicevolution:`, 'i')

    event.remove({ output: regexPattern })

    event.remove({output:['solarflux:sp_de.draconic', 'solarflux:sp_de.chaotic', 'solarflux:sp_de.wyvern', 'draconicevolution:energy_core_stabilizer', 'draconicevolution:draconic_energy_core', 'draconicevolution:wyvern_core']})

    event.remove({ id: 'draconicevolution:machines/grinder'})

    event.shaped('draconicevolution:advanced_magnet', [
        'D D',
        'RMR',
        'ETE'
    ], {
        D: 'gtceu:draconium_ingot',
        E: 'gtceu:europium_ingot',
        M: 'draconicevolution:magnet',
        R: 'minecraft:redstone',
        T: 'draconicevolution:advanced_dislocator'
    }).id('draconicevolution:tools/advanced_magnet')

    event.shaped('draconicevolution:generator', [
        'AAA',
        'AZA',
        'BBB'
    ], {
        A: "gtceu:draconium_plate",
        B: "gtceu:stellite_100_block",
        Z: "gtceu:lv_machine_hull"
    }).id('draconicevolution:machines/generator')

    event.remove({ id: 'draconicevolution:machines/crafting_core'})
    event.recipes.gtceu.assembly_line('draconic_fusion_crafting_core')
        .itemInputs('gtceu:hsse_frame', '6x gtceu:tungsten_carbide_plate', '4x draconicevolution:draconium_core', '4x minecraft:nether_star', '2x gtceu:iv_sensor', '#gtceu:circuits/iv', '8x #forge:storage_blocks/lapis')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('draconicevolution:crafting_core')
        .duration(1200)
        .EUt(30720)

    event.remove({ id: 'draconicevolution:machines/basic_crafting_injector'})
    event.recipes.gtceu.assembly_line('basic_crafting_injector')
        .itemInputs('gtceu:assembly_line_unit', 'gtceu:enori_empowered_block', 'gtceu:europium_plate', '2x draconicevolution:draconium_core', '4x enderio:ender_crystal')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('draconicevolution:basic_crafting_injector')
        .duration(600)
        .EUt(30720)

    event.remove({ id: 'draconicevolution:machines/energy_core'})
    event.recipes.gtceu.assembly_line('draconic_energy_core')
        .itemInputs('gtceu:tungsten_carbide_frame', '6x gtceu:draconium_plate', 'draconicevolution:wyvern_core', '4x draconicevolution:wyvern_energy_core', '2x gtceu:iv_field_generator', '12x gtceu:vanadium_gallium_single_wire')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('draconicevolution:energy_core')
        .duration(1200)
        .EUt(30720)

    event.remove({ id: 'draconicevolution:machines/particle_generator'})
    event.recipes.gtceu.assembly_line('particle_generator')
        .itemInputs('gtceu:tungsten_carbide_frame', '6x gtceu:draconium_plate', 'draconicevolution:draconium_core', '10x minecraft:blaze_rod', '3x gtceu:ev_emitter', '4x gtceu:restonia_empowered_block')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('draconicevolution:particle_generator')
        .duration(1200)
        .EUt(30720)

    event.shaped('draconicevolution:draconium_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: "gtceu:draconium_ingot",
        B: "gtceu:tungsten_carbide_ingot",
        C: "gtceu:palis_empowered_block"
    }).id('draconicevolution:components/draconium_core')

    event.remove({ id: 'draconicevolution:machines/reactor_prt_focus_ring'})
    event.recipes.gtceu.assembly_line('reactor_stabilizer_focus_ring')
        .itemInputs('gtceu:draconium_awakened_frame', 'draconicevolution:awakened_core', '4x gtceu:draconium_awakened_ring', '4x #forge:plates/crystal_matrix', '4x gtceu:sunnarium_plate')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('draconicevolution:reactor_prt_focus_ring')
        .duration(1200)
        .EUt(30720)

    event.shaped('draconicevolution:reactor_prt_in_rotor', [
        'AAA',
        'GDD',
        '   '
    ], {
        A: "gtceu:draconium_awakened_plate",
        D: "gtceu:draconium_plate",
        G: "gtceu:draconium_gear"
    }).id('draconicevolution:machines/reactor_prt_in_rotor')

    event.shaped('draconicevolution:reactor_prt_out_rotor', [
        'AAA',
        'GDD',
        '   '
    ], {
        A: "#forge:plates/crystal_matrix",
        D: "gtceu:draconium_plate",
        G: "gtceu:draconium_gear"
    }).id('draconicevolution:machines/reactor_prt_out_rotor')

    event.remove({ id: 'draconicevolution:machines/reactor_prt_rotor_full'})
    event.recipes.gtceu.assembly_line('reactor_stabilizer_rotor_assembly')
        .itemInputs('gtceu:draconium_awakened_frame', 'gtceu:draconium_awakened_gear', '2x gtceu:draconium_awakened_plate', '2x draconicevolution:reactor_prt_in_rotor', '2x draconicevolution:reactor_prt_out_rotor')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('draconicevolution:reactor_prt_rotor_full')
        .duration(600)
        .EUt(491520)

    event.remove({ id: 'draconicevolution:machines/reactor_prt_stab_frame'})
    event.recipes.gtceu.assembly_line('reactor_stabilizer_frame')
        .itemInputs('gtceu:draconium_awakened_frame', 'gtceu:draconium_awakened_gear', 'draconicevolution:awakened_core', '2x gtceu:zpm_sensor', '2x gtceu:zpm_emitter', '6x nuclearcraft:plate_elite')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('draconicevolution:reactor_prt_stab_frame')
        .duration(750)
        .EUt(491520)

    event.shaped('draconicevolution:wyvern_energy_core', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: "draconicevolution:draconium_core",
        B: "gtceu:restonia_empowered_block",
        C: "gtceu:lapotronic_energy_orb"
    }).id('draconicevolution:components/wyvern_energy_core')
})