/**
 * Material Registry for harder Naquadah processing.
 * NOT harder Naqline.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {
    
    if (doHarderProcessing) {
        event.create("naquadah_oxide")
            .dust()
            .color(0x17ddd3).iconSet("rough")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("2x naquadah", "3x oxygen")
            .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

        event.create("pyromorphite")
            .dust()
            .color(0xd3ed28).iconSet("rough")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("5x lead", "3x phosphate", "chlorine")
            .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

        event.create("naquadah_hydroxide")
            .dust()
            .color(0x1941a6).iconSet("dull")
            .components("naquadah", "3x hydrogen", "3x oxygen")
            .formula("Nq(OH)3")
            .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

        event.create("caesium_hydroxide")
            .dust()
            .color(0xbd8340).iconSet("dull")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("caesium", "oxygen", "hydrogen")
            .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

        event.create("neocryolite")
            .liquid()
            .color(0x3fd1aa)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("3x caesium", "naquadah", "6x fluorine")

        event.create("naquadah_oxide_petro_solution")
            .liquid()
            .color(0x595c70)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("naquadah_oxide_aero_solution")
            .liquid()
            .color(0x6f7059)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("hot_naquadah_oxide_neocryolite_solution")
            .liquid()
            .color(0x658280)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    }
})