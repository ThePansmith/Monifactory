// Elements
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('draconium', 149, 234, -1, null, 'Dc', false)
    event.create('draconium_awakened', 149, 264, -1, null, 'Dc*', false)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("draconium")
        .ingot().fluid().ore()
        .element(GTElements.get("draconium"))
        .color(0xbe49ed).iconSet('metallic')
        .blastTemp(6800, 'higher')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(524288, 1, 0, true);

    event.create("draconium_awakened")
        .ingot().fluid()
        .element(GTElements.get("draconium_awakened"))
        .color(0xf58742).iconSet('metallic')
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_DENSE)
})
