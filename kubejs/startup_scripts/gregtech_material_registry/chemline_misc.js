/**
 * Material Registry for Processing Lines that register enough materials to get their own registry file.
 */

// Wetware Tweaks
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("rotten_meat")
        .dust(1)
        .color(0xe8543a).secondaryColor(0x684a09).iconSet(GTMaterialIconSet.SAND)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("saline_antiseptic")
        .fluid()
        .color(0x99dce5)

    event.create("rotten_sludge")
        .fluid()
        .color(0x997700)
})

// Netherite & Ardite Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("ardite_sand")
        .dust()
        .color(0x9C3C1C)
        .iconSet(GTMaterialIconSet.SAND)

    event.create("ardite_salt")
        .dust()
        .color(0xE6734C)

    event.create("nether_conduit")
        .dust()
        .color(0x664D4D)

    event.create("ardite_slurry")
        .fluid()
        .color(0xAD2F05)

    event.create("impure_molten_ardite")
        .fluid()
        .color(0xAD6639)

    event.create("netherite_scrap")
        .dust().ingot().ore(1, 3)
        .color(0x6D473E)
        .iconSet("dull")
        .addOreByproducts(GTMaterials.Obsidian, GTMaterials.Obsidian, GTMaterials.RarestMetalMixture)
        .ignoredTagPrefixes([TagPrefix.nugget, TagPrefix.block, TagPrefix.dustTiny, TagPrefix.rawOre, TagPrefix.rawOreBlock])
})

// Space Rock Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("calcium_perchlorate")
        .dust()
        .color(0xf9fbda)
        .components("1x calcium", "2x chlorine", "8x oxygen")

    event.create("extraterrestrial_metal_mixture")
        .dust()
        .color(0x734120).secondaryColor(0x555B60).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])
})

// Necrosiderite Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("necrosiderite_oxide")
        .dust()
        .color(0xD29092)
        .components("2x necrosiderite", "3x oxygen")
})


// Dragon Scale Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

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
})

// Guardian Scale Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("guardian_scale_slurry")
        .fluid()
        .color(0x8bbeaf)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})

// Wither Bone Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("plumbate")
        .dust()
        .color(0x494351)
        .components("1x lead", "1x tungsten", "4x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .formula("Pb(WO3)O")
})

// JEAN Chemline
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("chlorine_trifluoride")
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

    event.create("dragon_breath")
        .fluid()
        .color(0xFF6AB9)

    event.create("jean_gasoline")
        .fluid()
        .color(0xF16AA5)

})

// Primal Mana ...Chemline?
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("elemental_reduction_fluid")
        .fluid()
        .color(0xbbddbd)
        .iconSet("elemental_reduction_fluid")

    event.create("mana")
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("mana"))
        .iconSet("mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})

// Eltz Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("eltic_actinate")
        .gem()
        .color(0xbb9966).secondaryColor(0x881105)
        .iconSet("dilithium")
        .components("4x eltz", "1x actinium", "3x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.NO_SMASHING)

    event.create("actinium_iron_oxide")
        .dust()
        .color(0xC3D1FF)    // Old actinium color for fun
        .components("1x actinium", "4x iron", "3x oxygen")
})

// Prism Glass Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("lyso_ce")
        .dust()
        .color(0xc7eefc)
        .formula("Lu3Y2(Si2O5)5:Ce")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.NO_SMASHING, GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES)

    event.create("yttria")
        .dust()
        .color(0xc6cead)
        .components("2x yttrium", "3x oxygen")
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)

    event.create("cerium_nitrate")
        .dust()
        .color(0xef411f)
        .components("1x cerium", "1x nitrogen", "3x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})

// Sculk Bioalloy Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("experience_attuned")
        .dust().gas()
        .color(0x70486e)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .components("7x amethyst", "2x dark_soularium", "4x lapis")

    event.create("sculk_agar")
        .dust()
        .color(0x0a3538)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.STICKY, GTMaterialFlags.PHOSPHORESCENT)
        .components(GTMaterials.PotassiumCyanide.multiply(4), GTMaterials.Biotite.multiply(7), GTMaterials.GelatinMixture.multiply(9), GTMaterials.get("experience_attuned").multiply(2))

})

// Omnic Acid doesn't really have a "Processing Line", but there's nowhere better to really put it.
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("omnic_acid")
        .fluid()
        .color(0xff00ff)
        .iconSet("shiny")
        .components("5x carbon", "4x hydrogen", "3x oxygen", "4x omnium")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

})

// Optical Circuits
GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("lithium_niobate")
        .liquid()
        .gem()
        .color(0xffe26c)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING, GTMaterialFlags.CRYSTALLIZABLE, GTMaterialFlags.GENERATE_LENS)
        .components("1x lithium", "1x niobium", "3x oxygen")

    event.create("dielectric_mirror_solution")
        .liquid()
        .color(0xe2fff9)
        // .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .components("7x silicon_dioxide", "1x enderium", doHarderProcessing ? "4x tantalum_pentoxide" : "1x tantalum", "5x rutile", "11x polyethylene", "3x germanium")

})
