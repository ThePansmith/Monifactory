// priority: 0
/**
 * Material Rework related material declarations
 */
GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("null")
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

    // UEV GT Supercon
    event.create("osmium_einsteinium_caesium_omnide")
        .ingot().fluid()
        .color(0x3221fb).secondaryColor(0x89a223)
        .iconSet("metallic")
        .blastTemp(11000, "highest", GTValues.VHA[GTValues.UV], 800)
        .components("2x osmium", "4x einsteinium", "5x caesium", "2x omnium")
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
        .components("2x neptunium", "1x antimony", "1x terbium", "1x germanium", "4x eltz", "2x carbon")
        .cableProperties(GTValues.V[GTValues.UIV], 64, 0, true)

    // UIV pipe/insulator
    event.create("null")
        .ingot().fluid()
        .color(0x000000).secondaryColor(0x24142c)
        .iconSet("shiny")
        .element(GTElements.get("null"))
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROTOR)
        .fluidPipeProperties(200000, 20000, true, true, true, true)

    // Ethylene-propylene diene monomer (EPDM)
    // Endgame rubber
    event.create("ethylene_propylene_diene_monomer")
        .polymer().liquid()
        .color(0x354444)
        .fluidPipeProperties(3000, 12000, true, true, true, false)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.STICKY)
        .formula("C6H7NO2");
})
