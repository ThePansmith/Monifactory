/**
 * Fission Material Registry.
 */


GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("ferroboron")
        .ingot().fluid()
        .color(0x676767).iconSet("dull")
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components("steel", "boron")

    event.create("tough_alloy")
        .ingot().fluid()
        .color(0x30e19).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components("ferroboron", "lithium")

})
