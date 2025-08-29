/**
 * Material Registry for Germanium processing.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("coal_fly_ash")
        .dust(1)
        .color(0xcf9c91).secondaryColor(0x524541)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("fly_ash_iron_mineral_mixture")
        .dust(1)
        .color(0xc9b28d).secondaryColor(0x8f807c)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("fly_ash_polymineral_mixture")
        .dust(1)
        .color(0xd7a6e0).secondaryColor(0x245454)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("fly_ash_aluminosilicate")
        .dust(1)
        .color(0x969fd9).secondaryColor(0x8a90ba)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("salt_roasted_aluminosilicate")
        .dust(1)
        .color(0x32568a).secondaryColor(0x4b4d2c)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("oxalic_acid_solution")
        .fluid()
        .color(0xf7f7f5)
        .components("2x hydrogen", "2x carbon", "4x oxygen", "hydrogen", "2x oxygen")
        .formula("(H2C2O4)H2O")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("oxalic_acid_silicon_solution")
        .fluid()
        .color(0x6a6b9b)
        .components("2x hydrogen", "2x carbon", "silicon", "4x oxygen", "hydrogen", "2x oxygen")
        .formula("(H2C2O4)(Si)H2O")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("oxalic_acid_nickel_solution")
        .fluid()
        .color(0x6e909c)
        .components("2x hydrogen", "2x carbon", "2x nickel", "4x oxygen", "hydrogen", "2x oxygen")
        .formula("(H2C2O4)(Ni2)H2O")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("polymineral_leachate")
        .fluid()
        .color(0x6b5a67)

    event.create("iron_mineral_solution")
        .fluid()
        .color(0x6b5a67)

    event.create("aluminosilicate_leachate")
        .liquid()
        .color(0x776E82)
        .components("4x lithium", "vanadium", "aluminium", "germanium")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})
