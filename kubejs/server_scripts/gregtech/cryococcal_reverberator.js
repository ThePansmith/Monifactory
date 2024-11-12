ServerEvents.recipes(event => {
    event.shaped(
        'gtceu:cryococcal_reverberator',
        [
            'PLP',
            'CFC',
            'PHP'
        ], {
        P: 'gcyr:double_trinaquadalloy_plate',
        F: 'kubejs:dischargement_core',
        C: 'gtceu:activated_netherite_hex_wire',
        L: 'gtceu:uhv_field_generator',
        H: 'gtceu:naquadah_alloy_frame'

    }).id('kubejs:shaped/reverberator')
    
    //Other casings/coils made in omnic forge
    event.recipes.gtceu.assembler('kubejs:cryococcus_casing')
        .itemInputs('6x gtceu:cryococcus_plate', 'gtceu:cryococcus_frame')
        .itemOutputs('2x kubejs:cryococcus_casing')
        .duration(50)
        .circuit(6)
        .EUt(16)


    function Reverberate(id, input, EU, duration) {
        event.recipes.gtceu.reverberation(`kubejs:${id}`)
            .itemInputs(input)
            .EUt(-EU)
            .duration(duration)
    }

    Reverberate('omnic_acid_resonating', ['1x gtceu:cryococcus_block', '20x gtceu:omnic_acid_dust'], 0.5*GTValues.V[GTValues.UIV], 15*60*20)
    Reverberate('infinity_resonating', ['2x gtceu:cryococcus_block', '1x gtceu:infinity_ingot'], 8*GTValues.V[GTValues.UIV], 30*60*20)
    Reverberate('fsopc_resonating', ['4x gtceu:cryococcus_block', '1x kubejs:field_stabilised_omnic_pulsar_compound'], 128*GTValues.V[GTValues.UIV], 1*60*60*20)
    Reverberate('singularity_resonating', ['8x gtceu:cryococcus_block', '8x kubejs:contained_singularity'], 2048*GTValues.V[GTValues.UIV], 2*60*60*20)
})
