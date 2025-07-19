/**
 * Microverse Material Registry.
 * Used for registering Gregtech Materials
 * that are related Microverse projectors, Microminers, or Microminer missions.
 */
// ? Keep in sync with
// ? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsMicroverse.java

// Microverse Materials
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("microversium")
        .ingot().liquid()
        .color(0x9b61b8).iconSet("dull")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("2x steel", "glowstone", "redstone", "deuterium")
        .blastTemp(1700, "mid", 120, 600)
        .cableProperties(128, 4, 2, false)
        .formula("Fe2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)D");

    event.create("iridosmine")
        .dust().ore()
        .color(0x54afff).secondaryColor(0x1b5651).iconSet("metallic")
        .components("2x osmium", "1x iridium")
        .addOreByproducts("osmium", "iridium", "rhodium")

    event.create("kaemanite")
        .dust().ore()
        .color(0xe7413c).iconSet("bright")
        .components("trinium", "tantalum", "4x oxygen")
        .addOreByproducts("niobium", "trinium_sulfide", "trinium")

    event.create("laurite")
        .dust().ore()
        .color(0x6f2c23).iconSet("diamond")
        .components("ruthenium", "2x sulfur")
        .addOreByproducts("pyrite", "ruthenium", "rhodium")

    event.create("cuprorhodsite")
        .dust().ore()
        .color(0xc1aa82).iconSet("bright")
        .components("copper", "iron", "4x rhodium", "8x sulfur")
        .addOreByproducts("chalcocite", "platinum", "ruthenium")
})
