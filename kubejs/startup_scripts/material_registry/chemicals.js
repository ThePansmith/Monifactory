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

    event.create('hydrochloric_dragon_scale_solution')
        .fluid()
        .color(0x697898)
        .components('2x hydrogen', '2x chlorine', '2x manganese', '1x tantalum', '4x carbon')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('hydrochloric_manganese_solution')
        .fluid()
        .color(0x697898)
        .components('2x hydrogen', '2x chlorine', '2x manganese')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('graphitic_tantalum')
        .dust()
        .color(0x747499).secondaryColor(0x999974)
        .components('1x tantalum', '4x carbon')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('hydrofluoric_graphitic_tantalum_solution')
        .fluid()
        .color(0x424272)
        .components('2x hydrogen', '2x fluorine', '1x tantalum', '4x carbon')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('hydrofluoric_tantalum_solution')
        .fluid()
        .color(0x626299)
        .components('2x hydrogen', '2x fluorine', '1x tantalum')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

})

// modify material names etc here
GTCEuStartupEvents.materialModification(() => {
	GTMaterials.get('butanol').setFormula('C4H9OH');
	GTMaterials.get('tributyl_phosphate').setFormula('(C4H9O)3PO');
    GTMaterials.get('hydrochloric_dragon_scale_solution').setFormula('(HC)2Mn2TaC?');
    GTMaterials.get('hydrochloric_manganese_solution').setFormula('(HC)2Mn2');
    GTMaterials.get('graphitic_tantalum').setFormula('TaC')
    GTMaterials.get('hydrofluoric_graphitic_tantalum_solution').setFormula('(HF)2TaC')
    GTMaterials.get('hydrofluoric_tantalum_solution').setFormula('(HF)2Ta')
})