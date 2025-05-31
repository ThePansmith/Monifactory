/**
 ? Misc modern materials we have to add
 ? Place non-nomifactory materials here
 */

// AE2 Materials

GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("dilithium")
        .protons(119)
        .neutrons(229)
        .symbol("Dl")
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("charged_certus_quartz")
        .gem()
        .dust()
        .color(0x9fd5e8)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("certus_quartz")

    event.create("fluix")
        .gem()
        .dust()
        .color(0x7f5bb3)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components("charged_certus_quartz", "redstone", "nether_quartz")
})


// Space Materials
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("dilithium")
        .dust()
        .gem()
        .ore(2, 1)
        .element(GTElements.get("dilithium"))
        .color(0xfdd2df).secondaryColor(0xfa52b5)
        .iconSet("dilithium")
        .addOreByproducts("lithium", "cobalt", "platinum")

    event.create("calcium_perchlorate")
        .dust()
        .color(0xf9fbda)
        .components("1x calcium", "2x chlorine", "8x oxygen")

    event.create("extraterrestrial_metal_mixture")
        .dust()
        .color(0x734120).secondaryColor(0x555B60).iconSet(GTMaterialIconSet.METALLIC)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("fluorite")
        .gem()
        .ore()
        .color(0x0c9949)
        .iconSet("diamond")
        .components("1x calcium", "2x fluorine")
        .addOreByproducts("calcite", "barite")
})


// Actually Additions Crystals
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("restonia")
        .gem()
        .color(0xA60000)
        .iconSet(GTMaterialIconSet.RUBY)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ])

    event.create("enori")
        .gem()
        .color(0xEDE6FF)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ])

    event.create("void")
        .gem()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ])

    event.create("palis")
        .gem()
        .color(0x1C1C89)
        .iconSet(GTMaterialIconSet.LAPIS)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ])

    event.create("diamatine")
        .gem()
        .color(0x8B8DF3)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ])

    event.create("emeradic")
        .gem()
        .color(0x09E103)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.plate,
            TagPrefix.rod,
        ])

    event.create("black_quartz")
        .gem()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.QUARTZ)
})


// Actually Additions empowered crystals
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("restonia_empowered")
        .gem().fluid()
        .color(0xA60000)
        .iconSet(GTMaterialIconSet.RUBY)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("enori_empowered")
        .gem().fluid()
        .color(0xEDE6FF)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("void_empowered")
        .gem().fluid()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("palis_empowered")
        .gem().fluid()
        .color(0x1C1C89)
        .iconSet(GTMaterialIconSet.LAPIS)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("diamatine_empowered")
        .gem().fluid()
        .color(0x8B8DF3)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("emeradic_empowered")
        .gem().fluid()
        .color(0x09E103)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])
})


// Sunnarium
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("sunnarium")
        .dust()
        .color(0xDDD692)
        .flags(GTMaterialFlags.PHOSPHORESCENT, GTMaterialFlags.GENERATE_PLATE)

    event.create("enriched_sunnarium")
        .dust()
        .color(0xACFFC2)
        .flags(GTMaterialFlags.PHOSPHORESCENT, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)
})

// Terbium
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("ammonium_oxalate")
        .dust()
        .color(0x2596be)
        .components("2x ammonia", "2x carbon", "4x oxygen")

    event.create("ammonium_nitrate")
        .dust()
        .color(0xF5F5F5)
        .components("1x ammonia", "1x nitric_acid")

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
        .components("1x terbium")
        .color(0x8C8F7A)
        .iconSet(GTMaterialIconSet.MAGNETIC)
        .ingotSmeltInto(GTMaterials.get("terbium"))
        .arcSmeltInto(GTMaterials.get("terbium"))
        .macerateInto(GTMaterials.get("terbium"))
        .flags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.IS_MAGNETIC)
})
// Misc
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("elemental_reduction_fluid")
        .fluid()
        .color(0xbbddbd)
        .iconSet("elemental_reduction_fluid")

    event.create("dragon_breath")
        .fluid()
        .color(0xFF6AB9)

    event.create("jean_gasoline")
        .fluid()
        .color(0xF16AA5)

    event.create("holmium_oxide")
        .dust()
        .color(0xD29092)
        .components("2x holmium", "3x oxygen")

    event.create("waste_gas_mixture")
        .fluid()
        .color(0x666677)
        .components("10x carbon_monoxide", "5x chloroethane", "7x ammonium_formate", "9x dinitrogen_tetroxide", "2x neon", "1x tritium")
        .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)

    event.create("trinaquadalloy")
        .fluid()
        .ingot()
        .color(0x281832)
        .iconSet("bright")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)
        .components("6x trinium", "2x naquadah", "1x carbon")
        .blastTemp(8747, "higher", 131072, 1200)

    event.create("rotten_meat")
        .dust(1)
        .color(0xe8543a).secondaryColor(0x684a09).iconSet(GTMaterialIconSet.SAND)
        .ignoredTagPrefixes([TagPrefix.dustTiny, TagPrefix.dustSmall])

    event.create("saline_antiseptic")
        .fluid()
        .color(0x99dce5)

    event.create("rotten_sludge")
        .fluid()
        .color(0x997700)
})

GTCEuStartupEvents.materialModification(event => {
    GTMaterials.RhodiumPlatedPalladium.setComponents("3x palladium", "1x rhodium", "2x lumium")
    GTMaterials.RhodiumPlatedPalladium.setFormula("Pd3Rh(SnFe)4(CuAg4)2", true)

    GTMaterials.Glowstone.setComponents("1x tricalcium_phosphate", "1x gold")
    GTMaterials.Glowstone.setFormula("AuCa3(PO4)2", true)

    // We keep Ingots in the material definition so we can replace it in the Ore Processing Diagram with vanilla Netherite Scrap, then remove it here.
    TagPrefix.ingot.setIgnored(GTMaterials.get("netherite_scrap"), Ingredient.of("minecraft:netherite_scrap"))
})
