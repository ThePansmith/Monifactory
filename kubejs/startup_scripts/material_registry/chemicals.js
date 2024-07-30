// priority: 3
//! Regular mode chemicals

/**
 * Chemical Materials
 */
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('butanol')
        .fluid()
        .color(0xc7af2e)
        .components('4x carbon', '10x hydrogen', '1x oxygen')

    event.create('phosphorus_trichloride')
        .fluid()
        .color(0xe8c474)
        .components('1x phosphorus', '3x chlorine')

    event.create('phosphoryl_chloride')
        .fluid()
        .color(0xe8bb5b)
        .components('1x phosphorus', '1x oxygen', '3x chlorine')

    event.create('tributyl_phosphate')
        .fluid()
        .color(0xe8c474)
        .components('12x carbon', '27x hydrogen', '4x oxygen', '1x phosphorus')

    event.create('chlorine_triflouride')
        .gas()
        .color(0xCBC4EF)
        .components('1x chlorine', '3x fluorine')

    event.create('chloroethane')
        .gas()
        .color(0xDEEDE6)    
        .components('2x carbon', '5x hydrogen', '1x chlorine')

    event.create('tetraethyllead')
        .fluid()
        .color(0x6E6F9E)
        .components('1x lead','8x carbon', '20x hydrogen')

    event.create('sodium_lead_alloy')
        .ingot()
        .color(0x58649B)
        .components('1x lead','1x sodium')
    
})

// modify material names etc here
GTCEuStartupEvents.materialModification(() => {
	GTMaterials.get('butanol').setFormula('C4H9OH');
	GTMaterials.get('tributyl_phosphate').setFormula('(C4H9O)3PO');
    GTMaterials.get('tetraethyllead').setFormula('Pb(CH3CH2)4');
})