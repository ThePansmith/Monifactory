// priority: 0
/**
 * Material Registry for ores.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("dilithium")
        .dust()
        .gem()
        .ore(2, 1)
        .element(GTElements.get("dilithium"))
        .color(0xfdd2df).secondaryColor(0xfa52b5)
        .iconSet("dilithium")
        .addOreByproducts("lithium", "cobalt", "platinum")

    event.create("fluorite")
        .gem()
        .ore()
        .color(0x0c9949)
        .iconSet("diamond")
        .components("1x calcium", "2x fluorine")
        .addOreByproducts("calcite", "barite")

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

    event.create("darmstadtite")
        .dust().ore(2, 1)
        .iconSet("dull")
        .color(0x99AA87)
        .components("2x darmstadtium", "3x sulfur")
        .addOreByproducts("rare_earth", "rhodium_sulfate", "darmstadtium")

    event.create("dulysite")
        .gem().ore(2, 1)
        .iconSet(GTMaterialIconSet.DIAMOND)
        .color(0xF5EFC0)
        .components("duranium", "3x chlorine")
        .addOreByproducts("sphalerite", "duranium", "europium")

    // Snowchestite is part of harder Naquadah Processing
    if (doHarderProcessing) {
        event.create("snowchestite")
            .dust().ore()
            .color(0x274c9f).iconSet("shiny")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("3x naquadah_oxide", "pyromorphite")
            .addOreByProducts("chalcopyrite", "vanadium_magnetite", "naquadah_hydroxide")
    }
})
