//! Hardcore mode chemicals

/**
 * Chemical Materials
 */
GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isExpertMode) {
        return;
    }

    event.create('tungsten_trioxide')
        .dust()
        .color(0xC7D300).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('tungsten', '3x oxygen')

    event.create('beryllium_oxide')
        .ingot()
        .color(0x54C757).iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_RING)
        .components('beryllium', 'oxygen')

    event.create('niobium_pentoxide')
        .dust()
        .color(0xBAB0C3).iconSet('rough')
        .components('2x niobium', '5x oxygen')

    event.create('tantalum_pentoxide')
        .dust()
        .color(0x72728A).iconSet('rough')
        .components('2x tantalum', '5x oxygen')

    event.create('manganese_difluoride')
        .dust()
        .color(0xEF4B3D).iconSet('rough')
        .components('manganese', '2x fluorine')

    event.create('molybdenum_trioxide')
        .dust()
        .color(0xCBCFDA).iconSet('rough')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('molybdenum', '3x oxygen')

    event.create('lead_chloride')
        .dust()
        .color(0xF3F3F3).iconSet('rough')
        .components('lead', '2x chlorine')

    event.create('wollastonite')
        .dust()
        .color(0xF7F7E7).iconSet('bright')
        .components('calcium', 'silicon', '3x oxygen')

    event.create('sodium_metavanadate')
        .dust()
        .color(0xe6bb22).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('sodium', 'vanadium', '3x oxygen')

    event.create('vanadium_pentoxide')
        .dust()
        .color(0xffcf33).iconSet('rough')
        .components('2x vanadium', '5x oxygen')

    event.create('ammonium_metavanadate')
        .dust()
        .color(0xf7e37e).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('nitrogen', '4x hydrogen', 'vanadium', '3x oxygen')

    event.create('phthalic_anhydride')
        .dust()
        .color(0xeeaaee).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('8x carbon', '4x hydrogen', '3x oxygen')

    event.create('ethylanthraquinone')
        .dust()
        .color(0xf1e181)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('16x carbon', '12x hydrogen', '2x oxygen')

    event.create('hydrazine') // is this a reference to the book 'Ignition! An Informal History of Liquid Rocket Propellants.' no way
        .fluid()
        .color(0xb50707)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x nitrogen', '4x hydrogen')

    event.create('acetone_azine')
        .fluid()
        .color(0xa1e1e1)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('6x carbon', '12x hydrogen', '2x nitrogen')

    event.create('graphene_oxide')
        .dust()
        .color(0x777777).iconSet('rough')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('graphene', 'oxygen')

    event.create('durene')
        .dust()
        .color(0x336040).iconSet('fine')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('10x carbon', '14x hydrogen')

    event.create('pyromellitic_dianhydride')
        .dust()
        .color(0xf0ead6).iconSet('rough')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('10x carbon', '2x hydrogen', '6x oxygen')

    event.create('dimethylformamide')
        .fluid()
        .color(0x42bdff)
        .components('3x carbon', '7x hydrogen', 'nitrogen', 'oxygen')

    event.create('aminophenol')
        .fluid()
        .color(0xff7f50)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('6x carbon', '7x hydrogen', 'nitrogen', 'oxygen')

    event.create('oxydianiline')
        .dust()
        .color(0xf0e130).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('12x carbon', '12x hydrogen', '2x nitrogen', 'oxygen')

    event.create('antimony_pentafluoride')
        .fluid()
        .color(0xe3f1f1)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('antimony', '5x fluorine')

    event.create('lead_metasilicate')
        .dust()
        .color(0xF7F7E7).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('lead', 'silicon', '3x oxygen')
})

// modify material names etc here
GTCEuStartupEvents.materialModification(() => {
    if (!isExpertMode) {
        return;
    }
	GTMaterials.get('phthalic_anhydride').setFormula('C6H4(CO)2O');
	GTMaterials.get('ethylanthraquinone').setFormula('C6H4(CO)2C6H3(CH2CH3)');
	GTMaterials.get('acetone_azine').setFormula('((CH3)2(CN))2');
	GTMaterials.get('durene').setFormula('C6H2(CH3)4');
    GTMaterials.get('pyromellitic_dianhydride').setFormula('C6H2(C2O3)2');
    GTMaterials.get('oxydianiline').setFormula('O(C6H4NH2)2');
})