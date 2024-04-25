// Elements
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('infinity', Infinity, Infinity, -1, null, '∞', false);
    event.create('omnium', 130, 234, -1, null, 'Nm', false)
    event.create('draconium', 149, 234, -1, null, 'Dc', false)
    event.create('draconium_awakened', 149, 264, -1, null, 'Dc*', false)
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('omnium').parent(GTMaterialIconSet.SHINY)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("draconium")
        .ingot().fluid().ore()
        .element(GTElements.get("draconium"))
        .color(0xbe49ed).iconSet('metallic')
        .blastTemp(6800, 'higher')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE)
        .cableProperties(524288, 1, 0, true);

    event.create("draconium_awakened")
        .ingot().fluid()
        .element(GTElements.get("draconium_awakened"))
        .color(0xf58742).iconSet('metallic')
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_RING)

    event.create("omnium")
        .ingot().fluid()
        .element(GTElements.get("omnium"))
        .color(0xffffff).iconSet('omnium') // custom icon set
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)
        .cableProperties(2147483647, 64, 0, true);
})
