// priority: 0
/**
 * Material Rework related material declarations
 */
GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("empty_space")
        .protons(0)
        .neutrons(0)
        .symbol("∅");
})


GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("manyullyn")
        .ingot().fluid()
        .color(0xc05cff).secondaryColor(0xff00e0).iconSet("magic")
        .blastTemp(9200, "highest", GTValues.VA[GTValues.UV], 1200)
        .components("4x ardite", "4x cobalt", "mana")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROTOR)

    event.create("darconite")
        .ingot().fluid()
        .color(0x3221fb).secondaryColor(0x26872b)
        .iconSet("metallic")
        .blastTemp(11000, "highest", GTValues.VHA[GTValues.UV], 800, 1200)
        .components("3x darmstadtium", "4x cobalt", "2x nitrogen")
        .cableProperties(GTValues.V[GTValues.UEV], 1, 32, false)

    event.create("osmium_taranium_einsteinium_caesium_omnide")
        .ingot().fluid()
        .color(0x3221fb).secondaryColor(0x89a223)
        .iconSet("metallic")
        .blastTemp(11000, "highest", GTValues.VHA[GTValues.UV], 800)
        .components("3x darmstadtium", "4x cobalt", "2x nitrogen")
        .cableProperties(GTValues.V[GTValues.UEV], 32, 0, true)

    event.create("hyperdegenerate_darconite")
        .ingot().fluid()
        .color(0x6442fb).secondaryColor(0x26872b)
        .iconSet("metallic") // "hyperdegenerate"
        .blastTemp(11000, "highest", GTValues.VHA[GTValues.UV], 800)
        .components("3x darmstadtium", "4x cobalt", "2x nitrogen")
        .cableProperties(GTValues.V[GTValues.UIV], 1, 0, true)
 
    event.create("eltic_neptunium_antimony_terbium_germanium_carbide")
        .ingot().fluid()
        .color(0x89a223).secondaryColor(0x3221fb)
        .iconSet("magic")
        .blastTemp(11000, "highest", GTValues.VHA[GTValues.UV], 800)
        .components("3x darmstadtium", "4x cobalt", "2x nitrogen")
        .cableProperties(GTValues.V[GTValues.UIV], 64, 0, true)

    event.create("empty_space")
        .ingot().fluid()
        .color(0x000000).secondaryColor(0x24142c)
        .iconSet("metallic")
        .element(GTElements.get("empty_space"))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL)
        .fluidPipeProperties(200000, 20000, true, true, true, true)
})
