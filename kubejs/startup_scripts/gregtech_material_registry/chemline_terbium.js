/**
 * Material Registry for Terbium processing.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("ammonium_oxalate")
        .dust()
        .color(0x2596be)
        .components("2x ammonia", "2x carbon", "4x oxygen", "2x hydrogen")
        .formula("(NH4)2C2O4")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("oxalic_acid_dihydrate")
        .dust()
        .color(0xfafaf7)
        .components("6x hydrogen", "6x oxygen", "2x carbon")
        .formula("(COOH)2(H2O)2")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("oxalic_acid")
        .dust()
        .color(0xf7f7f5)
        .components("2x hydrogen", "2x carbon", "4x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("ammonium_carbonate")
        .dust()
        .color(0x91918e)
        .components("2x ammonia", "1x carbon_dioxide", "1x water")
        .formula("(NH4)2CO3")

    event.create("ammonium_nitrate")
        .dust()
        .color(0xF5F5F5)
        .components("1x ammonia", "1x nitric_acid")
        .formula("(NH4)NO3")

    event.create("thorium_hydroxide")
        .dust()
        .color(0x243e1c)
        .components("1x thorium", "4x oxygen", "4x hydrogen")
        .formula("Th(OH)4")

    event.create("terbium_salt")
        .dust()
        .color(0x7f7367)
        .components("1x terbium", "3x chlorine")
        .flags(GTMaterialFlags.NO_SMASHING, GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("magnetic_terbium")
        .ingot()
        .components("terbium")
        .color(0xcedab4).secondaryColor(0x263640)
        .iconSet(GTMaterialIconSet.MAGNETIC)
        .ingotSmeltInto(GTMaterials.get("gtceu:terbium"))
        .arcSmeltInto(GTMaterials.get("terbium"))
        .macerateInto(GTMaterials.get("terbium"))
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.IS_MAGNETIC)
})