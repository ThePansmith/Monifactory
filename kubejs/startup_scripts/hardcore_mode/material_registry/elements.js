GTCEuStartupEvents.registry('gtceu:element', event => {
    if (!isExpertMode) {
        return;
    }
    event.create('taranium', 149, 264, -1, null, 'Tn', false)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isExpertMode) {
        return;
    }

    event.create('taranium')
        .ingot().fluid()
        .element(GTElements.get("taranium"))
        .color(0xff00ff).iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)
        .blastTemp(10800, 'highest')
})
