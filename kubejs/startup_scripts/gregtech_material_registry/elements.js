/**
 * Registration of custom chemical elements
 */

// Elements
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('cryolobus')
        .protons(149)
        .neutrons(234)
        .symbol('Cy')
    event.create('cryococcus')
        .protons(149)
        .neutrons(264)
        .symbol('Cy*')
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("cryolobus")
        .ingot().fluid()
        .element(GTElements.get("cryolobus"))
        .color(0x022C34).iconSet('metallic')
        .blastTemp(6800, 'higher')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(524288, 4, 0, true);

    event.create("cryococcus")
        .ingot().fluid()
        .element(GTElements.get("cryococcus"))
        .color(0x088286).secondaryColor(0x022C34).iconSet('metallic')
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_DENSE)
})
