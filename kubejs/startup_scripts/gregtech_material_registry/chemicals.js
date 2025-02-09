// priority: 3
/**
 * Gregtech Chemical Materials Registry.
 * This file is for custom fluids (And some solids!)
 * used in custom chemlines like JEAN and Polyethyl Cyanoacrylate.
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


    // Scaleline (Breaks Ender Dragon Scales down into useful materials)
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


    // Guardian Scaleline (Breaks Guardian Scales down into useful materials)
    event.create('guardian_scale_slurry')
        .fluid()
        .color(0x8bbeaf)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)


    // JEAN gasoline ingredients
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
        .components('1x lead', '8x carbon', '20x hydrogen')

    event.create('sodium_lead_alloy')
        .ingot()
        .color(0x58649B)
        .components('1x lead', '1x sodium')

    // Crystal Matrix Line
    event.create('acetylene')
        .gas()
        .color(0xFF4F4F)
        .components('2x carbon', '2x hydrogen')

    event.create('calcium_carbide')
        .dust()
        .color(0xCFC870)
        .components('1x calcium', '2x carbon')

    // Ingredients to create Polyethyl Cyanoacrylate, (PECA) a post-tank polymer
    event.create('sodium_cyanide')
        .dust()
        .color(0x7FB4C7)
        .components('1x sodium', '1x carbon', '1x nitrogen')

    event.create('chloroacetic_mixture')
        .fluid()
        .color(0x2D80B5)

    event.create('chloroacetate')
        .dust()
        .color(0x2D8BAE)
        .components('1x chlorine', '2x carbon', '3x hydrogen', '2x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('dichloroacetate')
        .fluid()
        .color(0x2D8BBE)
        .components('1x chlorine', '1x chloroacetate')

    event.create('trichloroacetate')
        .fluid()
        .color(0x2D8BCE)
        .components('1x chlorine', '1x dichloroacetate')

    event.create('cyanoacetic_acid')
        .dust()
        .color(0x5B8988)
        .components('1x nitrogen', '3x carbon', '3x hydrogen', '2x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('ethyl_cyanoacetate')
        .liquid()
        .color(0x488176)
        .components('1x nitrogen', '5x carbon', '7x hydrogen', '2x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('uncracked_ethyl_cyanoacrylate')
        .liquid()
        .color(0x616863)
        .components('1x nitrogen', '6x carbon', '7x hydrogen', '2x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('ethyl_cyanoacrylate')
        .liquid()
        .color(0x516863)
        .components('1x nitrogen', '6x carbon', '7x hydrogen', '2x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('polyethyl_cyanoacrylate')
        .polymer()
        .color(0x708787)
        .components('1x nitrogen', '6x carbon', '7x hydrogen', '2x oxygen')
        .fluidPipeProperties(3000, 12000, true, true, true, false)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    // Dimethyl sulfoxide sub-chain (PECA catalyst)
    event.create('dimethyl_sulfoxide')
        .liquid()
        .color(0xBFB178)
        .components('2x carbon', '6x hydrogen', '1x sulfur', '1x oxygen')

    event.create('dimethyl_sulfide')
        .liquid()
        .color(0xACB279)
        .components('2x carbon', '6x hydrogen', '1x sulfur')

    // Saturated water (Eltz line midproduct)
    event.create('saturated_water')
        .liquid()
        .color(0x857049)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})

// Modify materials' compositions
GTCEuStartupEvents.materialModification(() => {
    GTMaterials.get('butanol').setFormula('C4H9OH')
    GTMaterials.get('tributyl_phosphate').setFormula('(C4H9O)3PO')

    // Scaleline intermediates
    GTMaterials.get('hydrochloric_dragon_scale_solution').setFormula('(HCl)2Mn2TaC?')
    GTMaterials.get('hydrochloric_manganese_solution').setFormula('(HCl)2Mn2')
    GTMaterials.get('graphitic_tantalum').setFormula('TaC')
    GTMaterials.get('hydrofluoric_graphitic_tantalum_solution').setFormula('(HF)2TaC')
    GTMaterials.get('hydrofluoric_tantalum_solution').setFormula('(HF)2Ta')

    // JEAN gasoline intermediates
    GTMaterials.get('tetraethyllead').setFormula('Pb(CH3CH2)4')

    // PECA intermediates
    GTMaterials.get('chloroacetate').setFormula('ClCH2CO2H')
    GTMaterials.get('dichloroacetate').setFormula('Cl2CH2CO2H')
    GTMaterials.get('trichloroacetate').setFormula('Cl3CH2CO2H')
    GTMaterials.get('cyanoacetic_acid').setFormula('C3H3NO2')
    GTMaterials.get('ethyl_cyanoacetate').setFormula('C5H7NO2')
    GTMaterials.get('ethyl_cyanoacrylate').setFormula('C6H7NO2')
    GTMaterials.get('polyethyl_cyanoacrylate').setFormula('C6H7NO2')
})
