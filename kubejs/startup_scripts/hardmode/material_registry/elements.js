/**
 * Registration of hardmore-only chemical elements
 */

GTCEuStartupEvents.registry("gtceu:element", event => {
    if (doStoneline) {
        event.create("taranium")
            .protons(149)
            .neutrons(264)
            .symbol("Tn");
    }
    if (doHarderNaqFuel) {
        event.create("quadium")
            .protons(1)
            .neutrons(3)
            .symbol("Qd")
            .isIsotope(true);
        event.create("hyperdegenerate_matter")
            .protons(250)
            .neutrons(1000)
            .symbol("Ω");
    }
})

GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
    if (doHarderNaqFuel) {
        event.create("hyperdegenerate_matter").parent(GTMaterialIconSet.RADIOACTIVE)
    }
})


GTCEuStartupEvents.registry("gtceu:material", event => {
    if (doStoneline) {
        event.create("taranium")
            .ingot().fluid()
            .element(GTElements.get("taranium"))
            .color(0xff00ff).iconSet("bright")
            .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)
            .blastTemp(10800, "highest")
    }
    if (doHarderNaqFuel) {
        event.create("quadium")
            .gas()
            .element(GTElements.get("quadium"))
            .color(0x7c5bff)

        event.create("hyperdegenerate_matter")
            .element(GTElements.get("hyperdegenerate_matter"))
            .color(0xffffff).iconSet("hyperdegenerate_matter")
            .liquid(new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())
    }
})
