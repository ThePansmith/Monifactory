ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:discharger',
        [
            'PLP',
            'CFC',
            'PHP'
        ], {
        P: 'gtceu:cryolobus_plate',
        F: 'kubejs:reverberation_core',
        C: 'gtceu:niobium_titanium_single_cable',
        L: 'gtceu:iv_field_generator',
        H: 'gtceu:hsse_frame'

    }).id('kubejs:shaped/discharger')
    
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



    function Discharge(id, output, input, refund) {
        event.recipes.gtceu.discharger(`kubejs:${id}`)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(10) //wip
            .EUt(-(refund / 4))
    }

    Discharge('hadal_solar', '2x solarflux:sp_custom_hadal', ['kubejs:hadal_energy_core', '2x solarflux:sp_custom_abyssal', '2x kubejs:abyssal_energy_core'], 1000000)
    Discharge('nt_solar', 'solarflux:sp_custom_neutronium', ['solarflux:sp_custom_hadal', '4x kubejs:hadal_energy_core', '4x gtceu:sculk_superconductor_single_wire', '2x gtceu:omnium_block'], 100000000)
    Discharge('abyssal_solar', '2x solarflux:sp_custom_abyssal', ['kubejs:abyssal_energy_core', '4x solarflux:sp_custom_bathyal', '4x enderio:sculk_superconductor_conduit', '2x kubejs:bathyal_energy_core'], 20000000)
    Discharge('bathyal_solar', '2x solarflux:sp_custom_bathyal', ['kubejs:bathyal_energy_core', '4x solarflux:sp_8', '4x enderio:cryolobus_conduit', '2x gtceu:cryolobus_block'], 20000000)
    Discharge('cryococcus_block', '5x gtceu:cryococcus_block', ['5x gtceu:cryolobus_block', '4x kubejs:bathyal_energy_core', '2x kubejs:warden_heart'], 40000000)
    Discharge('hadal_warp_engine', 'kubejs:hadal_warp_engine', ['gtceu:cryococcus_frame', 'kubejs:warp_engine', 'gtceu:cryococcus_plate', '2x gtceu:cryolobus_plate', 'kubejs:hadal_energy_core', 'gtceu:zpm_field_generator', 'kubejs:abyssal_energy_core', 'kubejs:hadal_shard'], 40000000)
})
