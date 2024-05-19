ServerEvents.recipes(event => {

        //quField_Stabilised_Omnic compound
        event.recipes.gtceu.omnic_forge('fieldstabilizedCompound')
        .itemInputs('5x gtceu:uiv_field_generator', '12x gtceu:omnic_acid_dust', '3x gtceu:uhv_field_generator', '4x gtceu:uev_field_generator', '10x kubejs:quasi_stable_neutron_star')      
        .itemOutputs('kubejs:field_stabilised_omnic_pulsar_compound')       
        .duration(255)
        .EUt(16380)

        event.recipes.gtceu.subatomic_digital_assembly("shatteredstardata")
        .itemInputs('kubejs:stellar_creation_data')
        .itemOutputs('kubejs:shattered_star_data')
        .EUt(16000)
        .CWUt(32)
        .duration(50)

        event.recipes.gtceu.omnic_forge('singularity_containment_unit')
        .itemInputs('8x gtceu:monium_plate', '4x gtceu:neutron_reflector', '2x gtceu:uiv_sensor', '2x gtceu:uev_sensor', 'gtceu:uiv_field_generator')      
        .itemOutputs('64x kubejs:singularity_containment_unit')       
        .duration(300)
        .EUt(16380)
        
})