GTCEuStartupEvents.registry('gtceu:element', event => {
    if (!isHardMode) {
        return;
    }
    event.create('taranium', 149, 264, -1, null, 'Tn', false)
    event.create('quadium', 1, 3, -1, null, 'Qd', true)
    event.create('hyperdegenerate_matter', 250, 1000, -1, null, 'Ω', false);
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    if (!isHardMode) {
        return;
    }

    event.create('hyperdegenerate_matter').parent(GTMaterialIconSet.RADIOACTIVE)
})


GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isHardMode) {
        return;
    }

    event.create('taranium')
        .ingot().fluid()
        .element(GTElements.get("taranium"))
        .color(0xff00ff).iconSet('bright')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)
        .blastTemp(10800, 'highest')

    event.create('quadium')
        .gas()
        .element(GTElements.get("quadium"))
        .color(0x7c5bff)

    event.create('hyperdegenerate_matter')
        .element(GTElements.get("hyperdegenerate_matter"))
        .color(0xffffff).iconSet('hyperdegenerate_matter')
        .liquid(new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())
        
})