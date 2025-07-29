/**
 ? Keep in sync with
 ? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsEIO.java
 */

// EnderIO Materials
GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("dark_steel")
        .ingot().fluid()
        .color(0x414751).iconSet("dull")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("iron", "obsidian")

    // Conductive Iron
    event.create("conductive_alloy")
        .ingot().fluid()
        .color(0xf7b29b).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
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
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .blastTemp(1350, "low", 120, 400)
        .components("energetic_alloy", "ender_pearl")
        .cableProperties(512, 2, 0, true)
        .formula("Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)(BeK4N5)");

    // Pulsating Iron
    event.create("pulsating_alloy")
        .ingot().fluid()
        .color(0x2AB38F).iconSet("shiny")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components("iron")
        .cableProperties(8, 1, 0, true)

    event.create("electrical_steel")
        .ingot().fluid()
        .color(0xb2c0c1).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .components("steel", "silicon")

    event.create("soularium")
        .ingot().fluid()
        .color(0x7c674d).iconSet("metallic")
        .components("gold")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("end_steel")
        .ingot().fluid()
        .color(0xd6d980).iconSet("metallic")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
        .blastTemp(2700, "mid", 480, 900)
        .toolStats(new ToolProperty(4.0, 3.5, 1024, 3, []))
        .cableProperties(2048, 2, 0, true)
        .components("dark_steel", "endstone", "vibrant_alloy")
        .formula("Fe(SiO2)(Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)(BeK4N5))");

    event.create("dark_soularium")
        .ingot()
        .color(0x7c674d).iconSet("metallic")
        .components("soularium", "dark_steel", "tritium")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.DISABLE_DECOMPOSITION)
})
