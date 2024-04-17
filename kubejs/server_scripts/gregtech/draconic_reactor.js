ServerEvents.recipes(event => {

    // The crafting core is expensive enough as is, dont need to throw extra circuits on top
    event.shaped(
        'gtceu:draconic_reactor',
        ['PPP',
            'PFP',
            'PPP'
        ], {
        P: 'gtceu:stainless_steel_plate',
        F: 'draconicevolution:crafting_core'
    }
    ).id('kubejs:shaped/draconic_reactor')

    function Reactor(id, output, input, tier, RF) {
        event.recipes.gtceu.draconic_reactor(`kubejs:${id}`)
            .notConsumable('10x #moni:' + tier + '_injector_tier')
            .itemInputs(input)
            .itemOutputs(output)
            .duration(200) //wip
            .EUt(61440)
    }

    Reactor('wyvern_crafting_injector', 'draconicevolution:wyvern_crafting_injector', ['draconicevolution:basic_crafting_injector', 'draconicevolution:wyvern_core', '2x draconicevolution:draconium_core', 'gtceu:draconium_block', '4x minecraft:nether_star'], 'basic', 20480000)
    Reactor('wyvern_core', 'draconicevolution:wyvern_core', ['gtceu:emeradic_empowered_block', '4x draconicevolution:draconium_core', '2x gtceu:nether_star_block', '2x armorplus:compressed_infused_lava_crystal'], 'basic', 175544000)
    Reactor('chaotic_solar', '2x solarflux:sp_de.chaotic', ['draconicevolution:chaotic_core', '2x solarflux:sp_de.draconic', '2x draconicevolution:draconic_energy_core'], 'chaotic', 13421760000)
    Reactor('nt_solar', 'solarflux:sp_avaritia.neutronium', ['solarflux:sp_de.chaotic', '4x gtceu:draconic_superconductor_single_wire', '2x gtceu:omnium_block'], 'chaotic', 134217600000)
    Reactor('draconic_solar', '2x solarflux:sp_de.draconic', ['draconicevolution:draconic_energy_core', '4x solarflux:sp_de.wyvern', '4x enderio:draconic_superconductor_conduit', '2x draconicevolution:wyvern_energy_core'], 'awakened', 16777200000)
    Reactor('wyvern_solar', '2x solarflux:sp_de.wyvern', ['draconicevolution:wyvern_energy_core', '4x solarflux:sp_8', '4x enderio:draconium_conduit', '2x gtceu:draconium_block'], 'wyvern', 8388600000)
    Reactor('reactor_core', 'draconicevolution:reactor_core', ['extendedcrafting:the_ultimate_catalyst', '4x gtceu:draconium_awakened_block', '4x draconicevolution:chaos_shard', '2x kubejs:stabilized_einsteinium'], 'awakened', 26000000000)
    Reactor('chaotic_crafting_injector', 'draconicevolution:chaotic_crafting_injector', ['draconicevolution:awakened_crafting_injector', '4x avaritia:neutronium_ingot', '4x draconicevolution:chaos_shard', '2x avaritia:crystal_matrix_block'], 'awakened', 30000000000)
    Reactor('draconic_crafting_injector', 'draconicevolution:awakened_crafting_injector', ['draconicevolution:wyvern_crafting_injector', '2x minecraft:nether_star', '2x draconicevolution:wyvern_core', '2x minecraft:dragon_egg'], 'wyvern', 6000000000)
    Reactor('energy_core_stabilizer', 'draconicevolution:energy_core_stabilizer', ['draconicevolution:particle_generator', '8x gtceu:diamatine_empowered_block'], 'wyvern', 320000000)
    Reactor('reactor_stabilizer', 'draconicevolution:reactor_stabilizer', ['draconicevolution:reactor_prt_stab_frame', 'draconicevolution:reactor_prt_stab_frame', 'draconicevolution:reactor_prt_focus_ring', '2x draconicevolution:draconic_energy_core', '4x draconicevolution:awakened_core'], 'awakened', 56320000000)
    Reactor('draconic_energy_core', 'draconicevolution:draconic_energy_core', ['draconicevolution:wyvern_energy_core', '4x gtceu:draconium_awakened_ingot', '2x draconicevolution:awakened_core', '2x gtceu:energy_module', 'gtceu:energy_module', '4x gtceu:restonia_empowered_block'], 'awakened', 419430000)
    Reactor('draconium_awakened_block', '5x gtceu:draconium_awakened_block', ['5x gtceu:draconium_block', '4x draconicevolution:wyvern_core', '2x draconicevolution:dragon_heart'], 'wyvern', 24000000000)
    Reactor('awakened_core', 'draconicevolution:awakened_core', ['minecraft:nether_star', '4x draconicevolution:wyvern_core', '2x gtceu:draconium_awakened_block'], 'wyvern', 3000000000)
    Reactor('chaotic_core', 'draconicevolution:chaotic_core', ['minecraft:nether_star', '4x draconicevolution:chaos_shard', '2x avaritia:neutronium_ingot', '2x gtceu:omnium_ingot'], 'chaotic', 30000000000)
    Reactor('draconium_infused_obsidian', 'draconicevolution:infused_obsidian', ['2x gtceu:draconium_dust', '2x kubejs:pyrotheum_dust', '2x armorplus:compressed_obsidian', '2x armorplus:infused_lava_crystal', 'gtceu:dark_steel_block'], 'basic', 104857000)
    Reactor('ender_energy_manipulator', 'kubejs:ender_energy_manipulator', ['1x minecraft:wither_skeleton_skull', '4x draconicevolution:draconium_core', '3x minecraft:ender_eye', '3x draconicevolution:wyvern_core'], 'wyvern', 320000000)

    event.remove({ id: 'draconicevolution:infused_obsidian' })
})