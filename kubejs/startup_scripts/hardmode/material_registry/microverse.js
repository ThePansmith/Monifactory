/**
 * Registration of hardmode-only materials
 */

GTCEuStartupEvents.registry("gtceu:material", event => {
    // if (doCreativeTank) {
    //     return;
    // }

    event.create("darmstadtite") // Hardmode only
        .dust().ore(2, 1)
        .iconSet("dull")
        .color(0x99AA87)
        .components("2x darmstadtium", "3x sulfur")
        .addOreByproducts("rare_earth", "rhodium_sulfate", "darmstadtium")

    event.create("dulysite") // Hardmode only
        .gem().ore(2, 1)
        .iconSet(GTMaterialIconSet.DIAMOND)
        .color(0xF5EFC0)
        .components("duranium", "3x chlorine")
        .addOreByproducts("sphalerite", "duranium", "europium")

    // Snowchestite is in naqline.js
})
