// priority: 1
/**
 * Endgame Material Registry.
 * Used for registering Gregtech Materials
 * that are related post-tank content.
 */
// ? Keep in sync with
// ? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsEndgame.java

/*
Note: Some GTCEuM recipes handlers calculate duration based on mass.
This led to the infamous recipe bug where Infinity Screws in the Lathe had integer limit duration,
because the Infinity material had infinite mass.
*/
GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("omnium")
        .protons(130)
        .neutrons(234)
        .symbol("Nm");
    event.create("infinity")
        .protons(168)
        .neutrons(316)
        .symbol("∞");
    event.create("monium")
        .protons(169)
        .neutrons(317)
        .symbol("Mu");
    event.create("crystal_matrix")
        .protons(6)
        .neutrons(6)
        .symbol("C*");
    event.create("eltz")
        .protons(15)
        .neutrons(15)
        .symbol("Ez")
    event.create("necrosiderite")
        .protons(67)
        .neutrons(-26)
        .symbol("Ns")
})

// Omnium, Infinity, Monium, and others have animations and thus custom material icon sets.
GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
    event.create("omnium").parent(GTMaterialIconSet.SHINY)
    event.create("sculk_alloy").parent(GTMaterialIconSet.DULL)
    event.create("infinity").parent(GTMaterialIconSet.SHINY)
    event.create("eltz").parent(GTMaterialIconSet.SHINY)
    event.create("monium").parent(GTMaterialIconSet.SHINY)
    event.create("dilithium").parent(GTMaterialIconSet.DULL)
    event.create("mana").parent(GTMaterialIconSet.SHINY)
    event.create("necrosiderite").parent(GTMaterialIconSet.METALLIC)
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("crystal_matrix")
        .ingot().fluid()
        .element(GTElements.get("crystal_matrix"))
        .color(0x66ffff)
        .secondaryColor(0x004590)
        .blastTemp(6800, "highest")
        .iconSet("shiny")
        .flags(GTMaterialFlags.NO_SMASHING, GTMaterialFlags.NO_WORKING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE);

    event.create("omnium")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("omnium"))
        .color(0xffffff).iconSet("omnium")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_SMALL_GEAR)
        .cableProperties(GTValues.V[GTValues.UEV], 8, 8, false)

    event.create("omnic_acid")
        .fluid()
        .color(0xff00ff)
        .iconSet("shiny")
        .components("5x carbon", "4x hydrogen", "3x oxygen", "4x omnium")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("sculk_superconductor")
        .element(GTElements.get("sculk_superconductor"))
        .color(0xffffff)
        .iconSet("shiny")
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_SMASHING, GTMaterialFlags.NO_WORKING, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .cableProperties(GTValues.V[GTValues.UHV], 8, 0, true)

    event.create("netherite_scrap")
        .dust().ingot().ore(1, 3)
        .color(0x6D473E)
        .iconSet("dull")
        .addOreByproducts(GTMaterials.Obsidian, GTMaterials.Obsidian, GTMaterials.RarestMetalMixture)
        .ignoredTagPrefixes([TagPrefix.nugget, TagPrefix.block, TagPrefix.dustTiny, TagPrefix.rawOre, TagPrefix.rawOreBlock])

    event.create("activated_netherite")
        .ingot()
        .element(GTElements.get("activated_netherite"))
        .color(0x4C484C)
        .iconSet("dull")
        .fluidPipeProperties(11000, 8500, true, false, true, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SPRING)

    event.create("sculk_bioalloy")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xffffff)
        .iconSet("sculk_alloy")
        .flags(GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_WORKING)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall, TagPrefix.dust])

    event.create("infinity")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet("infinity")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR)

    event.create("eltz")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("eltz"))
        .color(0xffffff)
        .iconSet("eltz")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.PHOSPHORESCENT)

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

    event.create("monium")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("monium"))
        .color(0xffffff)
        .iconSet("monium")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SPRING)
        .cableProperties(GTValues.V[GTValues.MAX], 134217727, 0, true)

    event.create("necrosiderite")
        .ingot()
        .color(0xffffff)
        .iconSet("necrosiderite")
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SPRING)
        .cableProperties(33554432, 64, 8, false)
        .blastTemp(12200, "highest", 1000000, 1000)
        .element(GTElements.get("necrosiderite"))
})
