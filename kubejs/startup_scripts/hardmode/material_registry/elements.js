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
})
