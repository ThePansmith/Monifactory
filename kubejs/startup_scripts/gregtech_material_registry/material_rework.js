// priority: 0
/**
 * Material Rework related material declarations
 */
GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("meta_null")
        .protons(0)
        .neutrons(0)
        .symbol("∅");
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
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE)

    // UEV Moni Supercon
    event.create("fluxed_ardite")
        .ingot().fluid()
        .color(0xd07856).secondaryColor(0x771f05)
        .iconSet("magic")
        .blastTemp(11000, "highest", GTValues.VHA[GTValues.UHV], 1200)
        .components("4x ardite", "2x electrum_flux", "mana")
        .cableProperties(GTValues.V[GTValues.UEV], 1, 0, true)

    // UEV GT Supercon
    event.create("osmium_tantalum_einsteinium_caesium_omnide")
        .ingot().fluid()
        .color(0x3221fb).secondaryColor(0x89a223)
        .iconSet("metallic")
        .blastTemp(11000, "highest", GTValues.VHA[GTValues.UV], 800)
        .components("2x osmium", "3x tantalum", "4x einsteinium", "5x caesium", "2x omnium")
        .formula("Os2Ta3Es4Cs5Nm2")
        .cableProperties(GTValues.V[GTValues.UEV], 32, 0, true)

    // UIV Moni Supercon
    event.create("hyperdegenerate_darconite")
        .ingot().fluid()
        .color(0x6442fb).secondaryColor(0x26872b)
        .iconSet("metallic") // "hyperdegenerate"
        .blastTemp(11000, "highest", GTValues.VHA[GTValues.UV], 800)
        .components("3x darmstadtium", "4x cobalt", "2x nitrogen")
        .cableProperties(GTValues.V[GTValues.UIV], 1, 0, true)
        .flags(GTMaterialFlags.DISABLE_ALLOY_BLAST)

    // UIV GT Supercon
    event.create("eltic_neptunium_antimony_terbium_germanium_carbide")
        .ingot().fluid()
        .color(0x89a223).secondaryColor(0x3221fb)
        .iconSet("magic")
        .blastTemp(11000, "highest", GTValues.VHA[GTValues.UV], 800)
        .components("4x eltz", "2x neptunium", "1x antimony", "1x terbium", "1x germanium", "2x carbon")
        .cableProperties(GTValues.V[GTValues.UIV], 64, 0, true)

    // UIV pipe/insulator
    event.create("meta_null")
        .ingot().fluid()
        .color(0x000000).secondaryColor(0x24142c)
        .iconSet("shiny")
        .element(GTElements.get("meta_null"))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROTOR)
        .fluidPipeProperties(200000, 20000, true, true, true, true)
})
