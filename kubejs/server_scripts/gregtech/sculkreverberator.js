ServerEvents.recipes(event => {

    event.shaped(
        'gtceu:sculk_reverberator',
        ['PLP',
            'CFC',
            'PHP'
        ], {
        P: 'gtceu:sculk_compound_plate',
        F: 'kubejs:reverberation_core',
        C: 'gtceu:niobium_titanium_single_cable',
        L: 'gtceu:iv_field_generator',
        H: 'gtceu:hsse_frame'

    }
    ).id('kubejs:shaped/sculk_reverberator')

    event.recipes.gtceu.assembler('kubejs:sculk_compound_casing')
        .itemInputs('6x gtceu:sculk_compound_plate', 'gtceu:sculk_compound_frame')
        .itemOutputs('2x kubejs:sculk_compound_casing')
        .duration(50)
        .circuit(6)
        .EUt(16)

    event.recipes.gtceu.assembler('kubejs:resonant_sculk_compound_casing')
        .itemInputs('6x gtceu:resonant_sculk_compound_plate', 'gtceu:resonant_sculk_compound_frame')
        .itemOutputs('2x kubejs:resonant_sculk_compound_casing')
        .duration(50)
        .circuit(6)
        .EUt(16)

    function Reactor(id, output, input, tier, RF) {
        event.recipes.gtceu.sculk_reverberator(`kubejs:${id}`)
            .notConsumable('10x #moni:' + tier + '_injector_tier')
            .itemInputs(input)
            .itemOutputs(output)
            .duration(200) //wip
            .EUt(61440)
    }

    Reactor('echo_reaction_casing', 'kubejs:echo_reaction_casing', ['kubejs:sculk_reaction_casing', 'kubejs:echo_core', '2x kubejs:sculk_core', 'gtceu:sculk_compound_block', '4x minecraft:nether_star'], 'basic', 20480000)
    Reactor('echo_core', 'kubejs:echo_core', ['gtceu:emeradic_empowered_block', '4x kubejs:sculk_core', '2x gtceu:nether_star_block', '2x armorplus:compressed_infused_lava_crystal'], 'basic', 175544000)
    Reactor('abyssal_solar', '2x solarflux:sp_custom_abyssal', ['kubejs:abyssal_core', '2x solarflux:sp_custom_resonant', '2x kubejs:resonant_energy_core'], 'abyssal', 13421760000)
    Reactor('nt_solar', 'solarflux:sp_custom_neutronium', ['solarflux:sp_custom_abyssal', '4x kubejs:abyssal_core', '4x gtceu:sculk_superconductor_single_wire', '2x gtceu:omnium_block'], 'abyssal', 134217600000)
    Reactor('resonant_solar', '2x solarflux:sp_custom_resonant', ['kubejs:resonant_energy_core', '4x solarflux:sp_custom_echo', '4x enderio:sculk_superconductor_conduit', '2x kubejs:echo_energy_core'], 'resonant', 16777200000)
    Reactor('echo_solar', '2x solarflux:sp_custom_echo', ['kubejs:echo_energy_core', '4x solarflux:sp_8', '4x enderio:sculk_compound_conduit', '2x gtceu:sculk_compound_block'], 'echo', 8388600000)
    Reactor('reactor_core', 'kubejs:reactor_core', ['extendedcrafting:the_ultimate_catalyst', '4x gtceu:resonant_sculk_compound_block', '4x kubejs:abyss_shard', '2x kubejs:stabilized_einsteinium'], 'resonant', 26000000000)
    Reactor('abyssal_reaction_casing', 'kubejs:abyssal_reaction_casing', ['kubejs:resonant_reaction_casing', '4x gtceu:neutronium_ingot', '4x kubejs:abyss_shard', '2x gtceu:crystal_matrix_block'], 'resonant', 30000000000)
    Reactor('kubejs_reaction_casing', 'kubejs:resonant_reaction_casing', ['kubejs:echo_reaction_casing', '2x minecraft:nether_star', '2x kubejs:echo_core', '2x minecraft:dragon_egg'], 'echo', 6000000000)
    Reactor('energy_core_stabilizer', 'kubejs:energy_core_stabilizer', ['kubejs:particle_generator', '8x gtceu:diamatine_empowered_block'], 'echo', 320000000)
    Reactor('reactor_stabilizer', 'kubejs:reactor_stabilizer', ['kubejs:reactor_prt_stab_frame', '2x kubejs:resonant_energy_core', '4x kubejs:resonant_core'], 'resonant', 56320000000)
    Reactor('resonant_energy_core', 'kubejs:resonant_energy_core', ['kubejs:echo_energy_core', '4x gtceu:resonant_sculk_compound_ingot', '2x kubejs:resonant_core', '2x gtceu:energy_module', '2x gtceu:restonia_empowered_block'], 'resonant', 419430000)
    Reactor('sculk_compound_resonant_block', '5x gtceu:resonant_sculk_compound_block', ['5x gtceu:sculk_compound_block', '4x kubejs:echo_core', '2x kubejs:warden_heart'], 'echo', 24000000000)
    Reactor('resonant_core', 'kubejs:resonant_core', ['minecraft:nether_star', '4x kubejs:echo_core', '2x gtceu:resonant_sculk_compound_block'], 'echo', 3000000000)
    Reactor('abyssal_core', 'kubejs:abyssal_core', ['minecraft:nether_star', '4x kubejs:abyss_shard', '2x gtceu:neutronium_ingot', '2x gtceu:omnium_ingot'], 'abyssal', 30000000000)
    Reactor('sculk_compound_infused_obsidian', 'kubejs:infused_obsidian', ['2x gtceu:sculk_compound_dust', '2x kubejs:pyrotheum_dust', '2x armorplus:compressed_obsidian', '2x armorplus:infused_lava_crystal', 'gtceu:dark_steel_block'], 'basic', 104857000)
    Reactor('ender_energy_manipulator', 'kubejs:ender_energy_manipulator', ['1x minecraft:wither_skeleton_skull', '4x kubejs:sculk_core', '3x minecraft:ender_eye', '3x kubejs:echo_core'], 'echo', 320000000)

})