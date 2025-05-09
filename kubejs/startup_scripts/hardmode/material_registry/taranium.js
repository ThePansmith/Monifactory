/**
 ! Hardcore Mode mode taranium line
 ? Keep in sync with
 ? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsTaraniumLine.java
 */

GTCEuStartupEvents.registry("gtceu:material", event => {
    if (doStoneline) {
        event.create("hexafluorosilicic_acid")
            .fluid()
            .color(0xd00010)
            .components("2x hydrogen", "silicon", "6x fluorine")

        event.create("dirty_hexafluorosilicic_acid")
            .fluid()
            .color(0xe00030)
            .components("2x hydrogen", "silicon", "6x fluorine", "rare_earth")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("ultraacidic_residue")
            .fluid()
            .color(0xb0babf)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("xenic_acid")
            .fluid()
            .color(0xa567db)
            .components("xenon", "water", "3x oxygen")
            .formula("H2XeO4");

        event.create("dusty_helium")
            .gas()
            .color(0xa040af)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("helium_3", "rare_earth")

        event.create("taranium_enriched_helium")
            .gas().plasma()
            .color(0x10c050)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("taranium_depleted_helium")
            .gas()
            .color(0x006010)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("tritium_hydride")
            .gas()
            .color(0xd01010)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("tritium", "hydrogen")

        event.create("helium_hydride")
            .gas()
            .color(0xe6d62e)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("helium_3", "hydrogen")

        event.create("dioxygen_difluoride")
            .fluid() // 80
            .colorAverage()
            .components("2x oxygen", "2x fluorine")

        event.create("stone_residue")
            .dust()
            .color(0x4d4d4d).iconSet("rough")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("uncommon_residue")
            .dust()
            .color(0x4d4ded).iconSet("fine")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("oxidised_residue")
            .dust()
            .color(0xad4d4d).iconSet("fine")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("refined_residue")
            .dust()
            .color(0x2a8a21).iconSet("shiny")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION);

        event.create("clean_inert_residue")
            .dust()
            .color(0x3bbd2f).iconSet("shiny")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    }
})
