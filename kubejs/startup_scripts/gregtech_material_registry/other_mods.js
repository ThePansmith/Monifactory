// priority: 3
/**
 * Material Registry for content from mods other than GregTech.
 */


// Thermal

GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("lumium")
        .ingot().fluid()
        .color(0xf6ff99).secondaryColor(0xff7400)
        .iconSet("magic")
        .blastTemp(4500, "mid", GTValues.VA[GTValues.EV], 1000)
        .cableProperties(8192, 3, 0, true)
        .fluidPipeProperties(4500, 256, true, true, true, false)
        .components("4x tin_alloy", "2x sterling_silver", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create("signalum")
        .ingot().fluid()
        .color(0xff6b0f).secondaryColor(0xc32e00)
        .iconSet("magic")
        .blastTemp(4000, "high", GTValues.VA[GTValues.IV], 1400)
        .cableProperties(32768, 3, 0, true)
        .components("4x annealed_copper", "2x red_steel", "2x red_alloy", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)

    event.create("enderium")
        .ingot().fluid()
        .color(0x1f6b62).secondaryColor(0x16455f)
        .iconSet("magic")
        .blastTemp(6400, "highest", GTValues.VA[GTValues.LuV], 1600)
        .cableProperties(131072, 4, 0, true)
        .components("4x lead", "2x platinum", "blue_steel", "osmium", "tantalum", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FINE_WIRE)
})


// EnderIO

GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("dark_steel")
        .ingot().fluid()
        .color(0x414751).iconSet("dull")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("iron", "obsidian")

    event.create("conductive_alloy") // Conductive Iron
        .ingot().fluid()
        .color(0xf7b29b).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .components("iron", "redstone")
        .cableProperties(32, 1, 0, true)

    event.create("energetic_alloy")
        .ingot().fluid()
        .color(0xffb545).iconSet("shiny")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .blastTemp(1250, "low", 120, 400)
        .components("2x gold", "redstone", "glowstone")
        .cableProperties(128, 1, 0, true)
        .formula("Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)");

    event.create("vibrant_alloy")
        .ingot().fluid()
        .color(0xa4ff70).iconSet("shiny")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .blastTemp(1350, "low", 120, 400)
        .components("energetic_alloy", "ender_pearl")
        .cableProperties(512, 2, 0, true)
        .formula("Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)(BeK4N5)");

    event.create("pulsating_alloy") // Pulsating Iron
        .ingot().fluid()
        .color(0x2AB38F).iconSet("shiny")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("iron")
        .cableProperties(8, 1, 0, true)

    event.create("electrical_steel")
        .ingot().fluid()
        .color(0xb2c0c1).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .components("steel", "silicon")

    event.create("end_steel")
        .ingot().fluid()
        .color(0xd6d980).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .blastTemp(2700, "mid", 480, 900)
        .toolStats(new ToolProperty(4.0, 3.5, 1024, 3, []))
        .cableProperties(2048, 2, 0, true)
        .components("dark_steel", "endstone", "vibrant_alloy")
        .formula("Fe(SiO2)(Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)(BeK4N5))");

    event.create("soularium")
        .ingot().fluid()
        .color(0x7c674d).iconSet("metallic")
        .components("gold")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("dark_soularium")
        .ingot()
        .color(0x7c674d).iconSet("metallic")
        .components("soularium", "dark_steel", "tritium")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_DECOMPOSITION)
})


// Actually Additions

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


// AE2

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


// IC2 Advanced Solars

GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("sunnarium")
        .dust()
        .color(0xDDD692)
        .flags(GTMaterialFlags.PHOSPHORESCENT, GTMaterialFlags.GENERATE_PLATE)

    event.create("enriched_sunnarium")
        .dust()
        .color(0xACFFC2)
        .flags(GTMaterialFlags.PHOSPHORESCENT, GTMaterialFlags.GENERATE_PLATE)
})


// One-offs/Miscellaneous

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Fluxed Electrum is from Redtone Arsenal.

    event.create("electrum_flux")
        .ingot().fluid()
        .color(0xf7be20).secondaryColor(0xffc400)
        .iconSet("metallic")
        .blastTemp(1100, "low")
        .components("6x electrum", "lumium", "signalum")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)

    // Mythril isn't from any mod in specific to my knwoledge, but it's used mostly exclusively for crafting Thermal machines.
    // Also it was originally in thermal.js and I don't know where else I'd put it.

    event.create("mythril")
        .ingot().liquid()
        .color(0x00d5ff).secondaryColor(0x0067ff)
        .iconSet("magic")
        .blastTemp(2141, null)
        .components("titanium", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)

    // Trinaquadalloy is, to my knowledge, from a GregTech addon that has since been removed from the pack.

    event.create("trinaquadalloy")
        .fluid()
        .ingot()
        .color(0x281832)
        .iconSet("bright")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)
        .components("6x trinium", "2x naquadah", "1x carbon")
        .blastTemp(8747, "higher", 131072, 1200)

    // Microversium is *technically* original to OmNoMoniTM, but it's a fairly direct riff on Modularium.

    event.create("microversium")
        .ingot().liquid()
        .color(0x9b61b8).iconSet("dull")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("2x steel", "glowstone", "redstone", "deuterium")
        .blastTemp(1700, "mid", 120, 600)
        .cableProperties(128, 4, 2, false)
        .formula("Fe2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)D");

    // Ardite isn't here since it's more closely related to nethline than actually being a TiC material.
})
