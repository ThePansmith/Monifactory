/**
 * Material Registry for Eltz processing.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("hexafluorosilicic_acid")
        .fluid()
        .color(0xd00010)
        .components(GTMaterials.Hydrogen.multiply(2), GTMaterials.Silicon.multiply(1), GTMaterials.Fluorine.multiply(6))

    event.create("aluminosilicate_residue")
        .dust()
        .color(0xd1cac0).iconSet("rough")

    // Processing line
    event.create("dirty_hexafluorosilicic_solution")
        .fluid()
        .color(0xe00030)
        .components("hexafluorosilicic_acid", GTMaterials.Water.multiply(2), "aluminosilicate_residue")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("dusty_helium")
        .gas()
        .color(0xa040af)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components(GTMaterials.Helium, "aluminosilicate_residue")

    event.create("eltz-enriched_helium")
        .gas()
        .color(0x10c050)
        .components(GTMaterials.Helium.multiply(1), GTMaterials.get("monilabs:eltz").multiply(1), "aluminosilicate_residue")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("eltz-depleted_helium")
        .gas()
        .color(0x006010)
        .components(GTMaterials.Helium.multiply(3), GTMaterials.MetalMixture.multiply(1))
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("eltic_sludge")
        .dust()
        .color(0x857049)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("impure_eltic")
        .gem()
        .color(0xbb9966).secondaryColor(0x881105)
        .iconSet("dilithium")
        .components("monilabs:eltz", GTMaterials.SiliconDioxide, GTMaterials.Sapphire)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.NO_SMASHING)

    // Byproducts
    event.create("lithium_oxide")
        .dust()
        .color(0xdfdfdf)
        .components(GTMaterials.Lithium.multiply(2), GTMaterials.Oxygen.multiply(1))

    event.create("manganese_oxide")
        .dust()
        .color(0x425142)
        .components(GTMaterials.Manganese.multiply(1), GTMaterials.Oxygen.multiply(1))

    event.create("ferrous_oxide")
        .dust()
        .color(0x231e1e)
        .components(GTMaterials.Iron.multiply(1), GTMaterials.Oxygen.multiply(1))

    // Also used in Snowchestiteline (HM only)
    event.create("caesium_hydroxide")
        .dust()
        .color(0xbd8340).iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("caesium", "oxygen", "hydrogen")
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    // Also used in the Magnetron
    event.create("beryllium_oxide")
        .ingot()
        .color(0x54C757).iconSet("dull")
        .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_RING)
        .components("beryllium", "oxygen")
})
