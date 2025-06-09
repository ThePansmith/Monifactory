// priority: 3
/**
 * Gregtech Chemical Materials Registry.
 * This file is for custom fluids (And some solids!)
 * used in custom chemlines like JEAN and Polyethyl Cyanoacrylate.
 */
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("butanol")
        .fluid()
        .color(0xc7af2e)
        .components("4x carbon", "10x hydrogen", "1x oxygen")
        .formula("C4H9OH")

    event.create("phosphorus_trichloride")
        .fluid()
        .color(0xe8c474)
        .components("1x phosphorus", "3x chlorine")

    event.create("phosphoryl_chloride")
        .fluid()
        .color(0xe8bb5b)
        .components("1x phosphorus", "1x oxygen", "3x chlorine")

    event.create("tributyl_phosphate")
        .fluid()
        .color(0xe8c474)
        .components("12x carbon", "27x hydrogen", "4x oxygen", "1x phosphorus")
        .formula("(C4H9O)3PO")


    // Scaleline (Breaks Ender Dragon Scales down into useful materials)
    event.create("hydrochloric_dragon_scale_solution")
        .fluid()
        .color(0x697898)
        .components("2x hydrogen", "2x chlorine", "2x manganese", "1x tantalum", "4x carbon")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("(HCl)2Mn2TaC?")

    event.create("hydrochloric_manganese_solution")
        .fluid()
        .color(0x697898)
        .components("2x hydrogen", "2x chlorine", "2x manganese")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("(HCl)2Mn2")

    event.create("graphitic_tantalum")
        .dust()
        .color(0x747499).secondaryColor(0x999974)
        .components("1x tantalum", "4x carbon")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("TaC")

    event.create("hydrofluoric_graphitic_tantalum_solution")
        .fluid()
        .color(0x424272)
        .components("2x hydrogen", "2x fluorine", "1x tantalum", "4x carbon")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("(HF)2TaC")

    event.create("hydrofluoric_tantalum_solution")
        .fluid()
        .color(0x626299)
        .components("2x hydrogen", "2x fluorine", "1x tantalum")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("(HF)2Ta")


    // Guardian Scaleline (Breaks Guardian Scales down into useful materials)
    event.create("guardian_scale_slurry")
        .fluid()
        .color(0x8bbeaf)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)


    // JEAN gasoline ingredients
    event.create("chlorine_triflouride")
        .gas()
        .color(0xCBC4EF)
        .components("1x chlorine", "3x fluorine")

    event.create("chloroethane")
        .gas()
        .color(0xDEEDE6)
        .components("2x carbon", "5x hydrogen", "1x chlorine")
        .formula("C2H5Cl")

    event.create("tetraethyllead")
        .fluid()
        .color(0x6E6F9E)
        .components("1x lead", "8x carbon", "20x hydrogen")
        .formula("Pb(CH3CH2)4")

    event.create("sodium_lead_alloy")
        .ingot()
        .color(0x58649B)
        .components("1x lead", "1x sodium")

    // Crystal Matrix Line
    event.create("acetylene")
        .gas()
        .color(0xFF4F4F)
        .components("2x carbon", "2x hydrogen")

    event.create("calcium_carbide")
        .dust()
        .color(0xCFC870)
        .components("1x calcium", "2x carbon")

    // Ingredients to create Polyethyl Cyanoacrylate, (PECA) a post-tank polymer
    event.create("sodium_cyanide")
        .dust()
        .color(0x7FB4C7)
        .components("1x sodium", "1x carbon", "1x nitrogen")

    event.create("chloroacetic_mixture")
        .fluid()
        .color(0x2D80B5)

    event.create("chloroacetate")
        .dust()
        .color(0x2D8BAE)
        .components("1x chlorine", "2x carbon", "3x hydrogen", "2x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("ClCH2CO2H")

    event.create("dichloroacetate")
        .fluid()
        .color(0x2D8BBE)
        .components("1x chlorine", "1x chloroacetate")
        .formula("Cl2CH2CO2H")

    event.create("trichloroacetate")
        .fluid()
        .color(0x2D8BCE)
        .components("1x chlorine", "1x dichloroacetate")
        .formula("Cl3CH2CO2H")

    event.create("cyanoacetic_acid")
        .dust()
        .color(0x5B8988)
        .components("1x nitrogen", "3x carbon", "3x hydrogen", "2x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("C3H3NO2")
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("ethyl_cyanoacetate")
        .liquid()
        .color(0x488176)
        .components("1x nitrogen", "5x carbon", "7x hydrogen", "2x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("C5H7NO2")

    event.create("uncracked_ethyl_cyanoacrylate")
        .liquid()
        .color(0x616863)
        .components("1x nitrogen", "6x carbon", "7x hydrogen", "2x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("ethyl_cyanoacrylate")
        .liquid()
        .color(0x516863)
        .components("1x nitrogen", "6x carbon", "7x hydrogen", "2x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("C6H7NO2")

    event.create("polyethyl_cyanoacrylate")
        .polymer().liquid()
        .color(0x708787)
        .components("1x nitrogen", "6x carbon", "7x hydrogen", "2x oxygen")
        .fluidPipeProperties(3000, 12000, true, true, true, false)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)
        .formula("C6H7NO2");

    // Dimethyl sulfoxide sub-chain (PECA catalyst)
    event.create("dimethyl_sulfoxide")
        .liquid()
        .color(0xBFB178)
        .components("2x carbon", "6x hydrogen", "1x sulfur", "1x oxygen")

    event.create("dimethyl_sulfide")
        .liquid()
        .color(0xACB279)
        .components("2x carbon", "6x hydrogen", "1x sulfur")

    // Uranic Solution (Actinium line)
    event.create("uranic_solution")
        .liquid()
        .color(0xD3B53B)

    // Lead Chloride (Actinium byproduct)
    event.create("lead_chloride")
        .dust()
        .color(0x776E82).iconSet("rough")
        .components("lead", "2x chlorine")

    // Aluminosilicate Leachate (Germanium midproduct)
    event.create("aluminosilicate_leachate")
        .liquid()
        .color(0x776E82)
        .components("4x lithium", "vanadium", "aluminium", "germanium")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // Saturated water (Eltz line midproduct)
    event.create("saturated_water")
        .liquid()
        .color(0x857049)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    // PEEK
    event.create("nitrotoluene")
        .liquid()
        .color(0x8c6029)
        .components("7x carbon", "7x hydrogen", "1x nitrogen", "2x oxygen")

    event.create("analine")
        .liquid()
        .color(0x78663a)
        .components("5x carbon", "7x hydrogen", "1x nitrogen")
        .formula("C6H5NH2")

    event.create("nitrous_acid")
        .liquid()
        .color(0xffc129)
        .components("1x hydrogen", "1x nitrogen", "2x oxygen")

    event.create("fluoroboric_acid")
        .liquid()
        .color(0xaffad7)
        .components("1x hydrogen", "1x boron", "4x fluorine")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("boron_trifluoride")
        .gas()
        .color(0xcdfaaf)
        .components("1x boron", "3x fluorine")

    event.create("p-toluidine")
        .liquid()
        .color(0x693815)
        .components("7x carbon", "9x hydrogen", "1x nitrogen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("4-fluorotoluene")
        .liquid()
        .color(0x632a18)
        .components("7x carbon", "7x hydrogen", "1x fluorine")

    event.create("fluorotoluene_mixture")
        .liquid()
        .color(0x593f36)

    event.create("activated_fluorotoluene_mixture")
        .liquid()
        .color(0x593636)

    event.create("4-fluorotrichlorotoluene")
        .liquid()
        .color(0x00a666)
        .components("7x carbon", "4x hydrogen", "3x chlorine", "1x fluorine")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("4-fluorobenzoyl_chloride")
        .liquid()
        .color(0x518f9e)
        .components("1x fluorine", "7x carbon", "4x hydrogen", "1x oxygen", "1x chlorine")
        .formula("FC6H4COCl")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("benzenediazonium_chloride")
        .dust()
        .color(0x5e4b54)
        .components("6x carbon", "5x hydrogen", "2x nitrogen", "1x chlorine")
        .formula("C6H5ClN2")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("benzenediazonium_fluoroborate")
        .dust()
        .color(0x613d4e)
        .components("6x carbon", "5x hydrogen", "2x nitrogen", "1x boron", "4x fluorine")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("fluorobenzene")
        .liquid()
        .color(0x3d613f)
        .components("6x carbon", "5x hydrogen", "1x fluorine")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("fluorobenzene_gas_mixture")
        .liquid()
        .color(0x29B9CF)
        .components("1x fluorobenzene", "1x boron_trifluoride", "2x nitrogen")

    event.create("4-4-difluorobenzophenone")
        .dust()
        .color(0x7d470a)
        .components("13x carbon", "8x hydrogen", "1x oxygen", "2x fluorine")
        .formula("(FC6H4)2CO")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("hydroquinone")
        .dust()
        .color(0xdedede)
        .components("6x carbon", "6x hydrogen", "2x oxygen")
        .formula("C6H4(OH)2")

    event.create("sodium_fluoride")
        .dust()
        .color(0xa6a6a6)
        .components("1x sodium", "1x fluorine")

    event.create("sulfolene")
        .liquid()
        .color(0xfaf7a7)
        .components("4x carbon", "6x hydrogen", "1x sulfur", "2x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("sulfolane")
        .liquid()
        .color(0xfffdd1)
        .components("4x carbon", "8x hydrogen", "1x sulfur", "2x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("polyether_ether_ketone")
        .liquid().dust().polymer()
        .color(0x272a2e)
        .components("19x carbon", "12x hydrogen", "3x oxygen")
        .formula("(C6H4O2)(C13H8O)")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)

    event.create("radiant_blend")
        .liquid()
        .color(0xfff25e)
})
