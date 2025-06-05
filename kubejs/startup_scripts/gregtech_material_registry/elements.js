// priority: 2
/**
 * Registration of custom chemical elements
 */

// Elements
GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("cryolobus")
        .protons(149)
        .neutrons(234)
        .symbol("Cy")
    event.create("cryococcus")
        .protons(149)
        .neutrons(264)
        .symbol("Cy*")
    event.create("mana")
        .symbol("ᛗ")
    event.create("necrosiderite")
        .symbol("Ns")
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("cryolobus")
        .ingot().fluid()
        .element(GTElements.get("cryolobus"))
        .color(0x022C34).iconSet("metallic")
        .blastTemp(6800, "higher")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(524288, 4, 0, true);

    event.create("cryococcus")
        .ingot().fluid()
        .element(GTElements.get("cryococcus"))
        .color(0x088286).secondaryColor(0x022C34).iconSet("metallic")
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_DENSE)

    event.create("mana")
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())
        .element(GTElements.get("mana"))
        .iconSet("mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("necrosiderite")
        .ingot()
        .color(0xe59274).secondaryColor(0x715774)
        .iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SPRING)
        .cableProperties(33554432, 64, 8, false)
        .blastTemp(12200, "highest", 1000000, 1000)
        .fluidPipeProperties(10000, 18000, true, false, true, true)
        .element(GTElements.get("necrosiderite"))
})
