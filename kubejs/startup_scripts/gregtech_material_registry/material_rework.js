GTCEuStartupEvents.registry("gtceu:element", event => {
    /*event.create("omnium")
        .protons(130)
        .neutrons(234)
        .symbol("Nm");
    event.create("infinity")
        .protons(168)
        .neutrons(316)
        .symbol("∞");*/
})

// Omnium, Infinity, and Monium have animations and thus custom material icon sets.
GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
    event.create("magic").parent(GTMaterialIconSet.METALLIC)
    /*event.create("omnium").parent(GTMaterialIconSet.SHINY)
    event.create("sculk_alloy").parent(GTMaterialIconSet.DULL)*/
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("manyullyn")
        .ingot().fluid()
        .color(0xc05cff).secondaryColor(0xff00e0).iconSet("magic")
        .blastTemp(9200, "highest")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR)
        .components("4x ardite", "4x cobalt", "mana")

    /*event.create("crystal_matrix")
        .ingot().fluid()
        .element(GTElements.get("crystal_matrix"))
        .color(0x66ffff)
        .blastTemp(6800, "highest")
        .iconSet("shiny")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE);

    event.create("omnium")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("omnium"))
        .color(0xffffff).iconSet("omnium")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_SMALL_GEAR)
        .cableProperties(GTValues.V[GTValues.UEV], 64, 8, false)

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
        .cableProperties(GTValues.V[GTValues.UEV], 16, 0, true)
        .fluidPipeProperties(11000, 8500, true, false, true, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SPRING)

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
        .cableProperties(GTValues.V[GTValues.MAX], 134217727, 0, true)*/
})
