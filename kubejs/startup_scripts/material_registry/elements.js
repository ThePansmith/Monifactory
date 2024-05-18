// Elements
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('sculk_compound', 149, 234, -1, null, 'Sc', false)
    event.create('resonant_sculk_compound', 149, 264, -1, null, 'Sc*', false)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("sculk_compound")
        .ingot().fluid()
        .element(GTElements.get("sculk_compound"))
        .color(0x042228).iconSet('metallic')
        .blastTemp(6800, 'higher')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(524288, 1, 0, true);

    event.create("resonant_sculk_compound")
        .ingot().fluid()
        .element(GTElements.get("resonant_sculk_compound"))
        .color(0x008F92).iconSet('metallic')
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_DENSE)
})