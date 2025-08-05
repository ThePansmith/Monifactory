/**
 ? Misc modern materials we have to add
 ? Place non-nomifactory materials here
 */

const PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey");

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
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("enori")
        .gem()
        .color(0xEDE6FF)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("void")
        .gem()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.ROUGH)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("palis")
        .gem()
        .color(0x1C1C89)
        .iconSet(GTMaterialIconSet.LAPIS)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("diamatine")
        .gem()
        .color(0x8B8DF3)
        .iconSet(GTMaterialIconSet.FINE)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("emeradic")
        .gem()
        .color(0x09E103)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .ignoredTagPrefixes([
            TagPrefix.dust,
            TagPrefix.dustSmall,
            TagPrefix.dustTiny,
            TagPrefix.gemExquisite,
            TagPrefix.gemFlawless,
            TagPrefix.rod,
        ])

    event.create("black_quartz")
        .gem()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.QUARTZ)
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
        .components("2x ammonia", "2x carbon", "4x oxygen", "2x hydrogen")
        .formula("(NH4)2C2O4")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("sucrose_solution")
        .fluid()
        .color(0x818582)
        .components("12x carbon", "24x hydrogen", "12x oxygen")
        .formula("(C12H22O11)H2O")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("sucrose")
        .dust()
        .color(0xe0ddda)
        .components("12x carbon", "22x hydrogen", "11x oxygen")
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

// Germanium

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

})

// Advanced Solder
// TODO: mixer, ABS | processing lines
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("advanced_soldering_alloy")
        .ingot()
        .fluid()
        .color(0x74b59b)
        .iconSet("dull")
        .components("15x bismuth", "11x tin", "9x zinc", "4x germanium")

    event.create("living_soldering_alloy")
        .ingot()
        .liquid(310)
        .color(0xFF0000b)
        .iconSet("dull")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components(GTMaterials.RoseGold.multiply(5), GTMaterials.TinAlloy.multiply(12), GTMaterials.Gallium.multiply(10), GTMaterials.Molybdenum.multiply(10), GTMaterials.Sculk.multiply(3))
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

    event.create("necrosiderite_oxide")
        .dust()
        .color(0xD29092)
        .components("2x necrosiderite", "3x oxygen")

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

// Netherite & Ardite Processing
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("ardite_sand")
        .dust()
        .color(0x9C3C1C)
        .iconSet(GTMaterialIconSet.SAND)
    event.create("ardite_salt")
        .dust()
        .color(0xE6734C)
    event.create("nether_conduit")
        .dust()
        .color(0x664D4D)
    event.create("ardite_slurry")
        .fluid()
        .color(0xAD2F05)
    event.create("impure_molten_ardite")
        .fluid()
        .color(0xAD6639)
})

GTCEuStartupEvents.materialModification(event => {
    // Change materials' components
    GTMaterials.EchoShard.setComponents(GTMaterials.Quartzite.multiply(3), GTMaterials.Sculk.multiply(2))

    GTMaterials.Glowstone.setComponents(GTMaterials.TricalciumPhosphate.multiply(1), GTMaterials.Gold.multiply(1))
    GTMaterials.Glowstone.setFormula("AuCa3(PO4)2", true)

    GTMaterials.RhodiumPlatedPalladium.setComponents(GTMaterials.Palladium.multiply(3), GTMaterials.Rhodium.multiply(1), "2x lumium")
    GTMaterials.RhodiumPlatedPalladium.setFormula("Pd3Rh(SnFe)4(CuAg4)2", true)

    // We keep Ingots in the material definition so we can replace it in the Ore Processing Diagram with vanilla Netherite Scrap, then remove it here.
    TagPrefix.ingot.setIgnored(GTMaterials.get("netherite_scrap"), Ingredient.of("minecraft:netherite_scrap"))

    GTMaterials.Neutronium.getProperty(PropertyKey.FLUID_PIPE).setThroughput(400)
    GTMaterials.Neutronium.getProperty(PropertyKey.FLUID_PIPE).setMaxFluidTemperature(10000)
    GTMaterials.Ultimet.getProperty(PropertyKey.ITEM_PIPE).setTransferRate(4)
    GTMaterials.Osmiridium.getProperty(PropertyKey.ITEM_PIPE).setTransferRate(12)
    GTMaterials.Americium.getProperty(PropertyKey.ITEM_PIPE).setTransferRate(20)
})
