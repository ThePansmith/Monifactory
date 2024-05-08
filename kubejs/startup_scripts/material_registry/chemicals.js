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
})

// modify material names etc here
GTCEuStartupEvents.materialModification(() => {
	GTMaterials.get('butanol').setFormula('C4H9OH');
	GTMaterials.get('tributyl_phosphate').setFormula('(C4H9O)3PO');
})