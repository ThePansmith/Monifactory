ServerEvents.recipes(event => {

        //quField_Stabilised_Omnic compound
        event.recipes.gtceu.omnic_forge('fieldstabilizedCompound')
        .itemInputs('5x gtceu:uiv_field_generator', '12x gtceu:omnic_acid_dust', '3x gtceu:uhv_field_generator', '4x gtceu:uev_field_generator', '10x kubejs:Quasi-Stable_Neutron_Star')      
        .itemOutputs('kubejs:Field_Stabilised_Omnic-Pulsar_Compound')       
        .duration(255)
        .EUt(16380)

        event.recipes.gtceu.advanced_microverse_iii('neutronstars')
        .itemInputs ('kubejs:microminer_t9', '40x gtceu:gravi_star', '10x kubejs:shattered_star_data')
        .itemOutputs( '10x kubejs:Quasi-Stable_Neutron_Star')
        .duration(900)
        .EUt(194387)

        event.recipes.gtceu.subatomic_digital_assembly("shatteredstardata")
        .itemInputs('64x kubejs:stellar_creation_data')
        .itemOutputs('64x kubejs:shattered_star_data')
        .EUt(662600)
        .duration(500)
        
})