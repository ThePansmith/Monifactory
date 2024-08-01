ServerEvents.recipes(event => {
    event.shaped(
        'moni_multiblocks:hypogean_infuser',
        ['PLP',
            'CFC',
            'PHP'
        ], {
        P: 'gtceu:cryolobus_plate',
        F: 'kubejs:reverberation_core',
        C: 'gtceu:niobium_titanium_single_cable',
        L: 'gtceu:iv_field_generator',
        H: 'gtceu:hsse_frame'

    }
    ).id('kubejs:shaped/hypogean_infuser')

    event.recipes.gtceu.assembler('kubejs:cryolobus_casing')
        .itemInputs('6x gtceu:cryolobus_plate', 'gtceu:cryolobus_frame')
        .itemOutputs('2x kubejs:cryolobus_casing')
        .duration(50)
        .circuit(6)
        .EUt(16)

    event.recipes.gtceu.assembler('kubejs:cryococcus_casing')
        .itemInputs('6x gtceu:cryococcus_plate', 'gtceu:cryococcus_frame')
        .itemOutputs('2x kubejs:cryococcus_casing')
        .duration(50)
        .circuit(6)
        .EUt(16)

        event.recipes.gtceu.assembler('sculk_seed_bus')
        .itemInputs('gtceu:luv_machine_hull', '8x gtceu:cryolobus_plate', 'minecraft:chest')
        .itemOutputs('moni_multiblocks:sculk_seed_bus')
        .duration(100)
        .circuit(1)
        .EUt(120)
        
    const InitialEnergyCondition = Java.loadClass("com.monifactory.multiblocks.common.recipe.InitialEnergyCondition")
    const SculkGrowthMeterCondition = Java.loadClass("com.monifactory.multiblocks.common.recipe.SculkGrowthMeterCondition")
    function Reactor(id, output, input, temp, RF) {
        event.recipes.moni_multiblocks.hypogean_infuser(`kubejs:${id}`)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(5) //wip
            .addCondition(new InitialEnergyCondition(RF/4))
            .addCondition(new SculkGrowthMeterCondition(100))
    }


    Reactor('echo_reaction_casing', 'moni_multiblocks:bathyal_voltic_casing', ['moni_multiblocks:mesol_voltic_casing', 'kubejs:bathyal_core', '2x kubejs:mesol_core', 'gtceu:cryolobus_block', '4x minecraft:nether_star'], '0.1', 20480000)
    Reactor('bathyal_core', 'kubejs:bathyal_core', ['gtceu:emeradic_empowered_block', '4x kubejs:mesol_core', '2x gtceu:nether_star_block', '5x nuclearcraft:quartz_heat_sink'], '0.1', 175544000)
    Reactor('hadal_solar', '2x solarflux:sp_custom_hadal', ['kubejs:hadal_core', '2x solarflux:sp_custom_abyssal', '2x kubejs:abyssal_energy_core'], '0.000000000001', 13421760000)
    Reactor('nt_solar', 'solarflux:sp_custom_neutronium', ['solarflux:sp_custom_hadal', '4x kubejs:hadal_core', '4x gtceu:sculk_superconductor_single_wire', '2x gtceu:omnium_block'], '0.000000000001', 30000000000)
    Reactor('abyssal_solar', '2x solarflux:sp_custom_abyssal', ['kubejs:abyssal_energy_core', '4x solarflux:sp_custom_bathyal', '4x enderio:sculk_superconductor_conduit', '2x kubejs:bathyal_energy_core'], '0.00000001', 16777200000)
    Reactor('bathyal_solar', '2x solarflux:sp_custom_bathyal', ['kubejs:bathyal_energy_core', '4x solarflux:sp_8', '4x enderio:cryolobus_conduit', '2x gtceu:cryolobus_block'], '0.00001', 8388600000)
    Reactor('abyssal_reaction_casing', 'moni_multiblocks:hadal_voltic_casing', ['moni_multiblocks:abyssal_voltic_casing', '4x gtceu:neutronium_ingot', '4x kubejs:hadal_shard', '2x gtceu:crystal_matrix_block', '2x gtceu:void_empowered_block'], '0.00000001', 400000000)
    Reactor('kubejs_reaction_casing', 'moni_multiblocks:abyssal_voltic_casing', ['moni_multiblocks:bathyal_voltic_casing', '2x minecraft:nether_star', '2x kubejs:bathyal_core', '2x minecraft:dragon_egg'], '0.00001', 120000000)
    Reactor('abyssal_energy_core', 'kubejs:abyssal_energy_core', ['kubejs:bathyal_energy_core', '4x gtceu:cryococcus_ingot', '2x kubejs:abyssal_core', '2x gtceu:energy_module', '2x gtceu:restonia_empowered_block'], '0.00000001', 419430000)
    Reactor('cryococcus_block', '5x gtceu:cryococcus_block', ['5x gtceu:cryolobus_block', '4x kubejs:bathyal_core', '2x kubejs:warden_heart'], '0.00001', 24000000000)
    Reactor('abyssal_core', 'kubejs:abyssal_core', ['minecraft:nether_star', '4x kubejs:bathyal_core', '2x gtceu:cryococcus_block', 'kubejs:stabilized_einsteinium'], '0.00001', 3000000000)
    Reactor('hadal_core', 'kubejs:hadal_core', ['minecraft:nether_star', '4x kubejs:hadal_shard', '2x gtceu:neutronium_ingot', '2x gtceu:omnium_ingot'], '0.000000000001', 30000000000)
    Reactor('hadal_warp_engine', 'kubejs:hadal_warp_engine', ['gtceu:cryococcus_frame', 'kubejs:warp_engine', 'gtceu:cryococcus_plate', '2x gtceu:cryolobus_plate', 'kubejs:bathyal_core', 'gtceu:zpm_field_generator', 'kubejs:abyssal_energy_core', 'kubejs:hadal_shard'], '0.000000000001', 30000000000)
})
