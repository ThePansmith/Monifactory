/**
 * Material Registry for content that directly modifies base GregTech Modern progression, such as advanced solders.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Neptunium Palladium Aluminium
    event.create("neptunium_palladium_aluminium")
        .fluid().ingot()
        .color(0x69595A)
        .flags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING)
        .components(GTMaterials.Neptunium.multiply(1), GTMaterials.Palladium.multiply(5), GTMaterials.Aluminium.multiply(2))
        .blastTemp(3600, "mid")
        .cableProperties(GTValues.VA[GTValues.LuV], 8, 8, false);

    // Advanced Solders
    // TODO: mixer, ABS | processing lines
    event.create("gtceu:advanced_soldering_alloy")
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
