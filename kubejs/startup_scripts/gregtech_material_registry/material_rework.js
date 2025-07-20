// priority: 0
/**
 * Material Rework related material declarations
 */
GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("meta_null")
        .protons(0)
        .neutrons(0)
        .symbol("∅");
    event.create("transcendental_matrix")
        .protons(6)
        .neutrons(32)
        .symbol("ᛝ")
})

GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
    event.create("meta_null").parent(GTMaterialIconSet.SHINY)
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    // UHV hull
    event.create("manyullyn")
        .ingot().fluid()
        .color(0xc05cff).secondaryColor(0xff00e0).iconSet("magic")
        .blastTemp(9200, "highest", GTValues.VA[GTValues.UV], 1200)
        .components("4x ardite", "4x cobalt", "mana")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROTOR)

    // UHV motor + UEV cable
    event.create("darconite")
        .ingot().fluid()
        .color(0x3221fb).secondaryColor(0x26872b)
        .iconSet("metallic")
        .blastTemp(11000, "highest", GTValues.VHA[GTValues.UV], 800)
        .components("3x darmstadtium", "4x cobalt", "2x nitrogen")
        .cableProperties(GTValues.V[GTValues.UEV], 1, 32, false)
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_SPRING_SMALL)

    // UEV moni + gt Supercon
    event.create("hyperdegenerate_darconite")
        .ingot().fluid()
        .color(0x6442fb).secondaryColor(0x26872b)
        .iconSet("metallic") // "hyperdegenerate"
        .blastTemp(11000, "highest", GTValues.VHA[GTValues.UV], 800)
        .components("3x darmstadtium", "4x cobalt", "2x nitrogen", "1x hyperdegenerate_matter")
        .cableProperties(GTValues.V[GTValues.UEV], 64, 0, true)
        .flags(GTMaterialFlags.DISABLE_ALLOY_BLAST, GTMaterialFlags.NO_SMASHING, GTMaterialFlags.NO_WORKING, GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_FINE_WIRE)

    // UEV pipe/insulator
    event.create("meta_null")
        .ingot()
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .color(0xffffff)
        .iconSet("meta_null")
        .element(GTElements.get("meta_null"))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROTOR)
        .fluidPipeProperties(200000, 20000, true, true, true, true)

    // UEV emitter foil + infinity base
    event.create("transcendental_matrix")
        .ingot().fluid()
        .color(0xffffff).secondaryColor(0x000000)
        .iconSet("shiny")
        .element(GTElements.get("transcendental_matrix"))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL)

    // UEV glass base
    event.create("lyso_ce")
        .dust()
        .color(0xc7eefc)
        .formula("Lu3Y2(Si2O5)5:Ce")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.NO_SMASHING, GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES)

    // LYSO:Ce intermediates
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
