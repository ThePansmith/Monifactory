/**
 * Fluid Registry - defines ID, name,
 * color, and temperature of custom fluids.
 */
StartupEvents.registry("fluid", event => {

    // Thermal Expansion Fluids
    event.create("molten_pyrotheum")
        .bucketColor(Color.rgba(247, 219, 58, 255))
        .displayName("§6Blazing Pyrotheum") // orange
        .temperature(8190)
        .stillTexture("kubejs:block/pyrotheum_still")
        .flowingTexture("kubejs:block/pyrotheum_flow");
    event.create("molten_cryotheum")
        .bucketColor(Color.rgba(67, 244, 247, 255))
        .displayName("§bGelid Cryotheum") // aqua
        .temperature(5)
        .stillTexture("kubejs:block/cryotheum_still")
        .flowingTexture("kubejs:block/cryotheum_flow");
    event.create("molten_petrotheum")
        .bucketColor(Color.rgba(26, 19, 16, 255))
        .displayName("§8Tectonic Petrotheum") // darkGray
        .stillTexture("kubejs:block/petrotheum_still")
        .flowingTexture("kubejs:block/petrotheum_flow");
    event.create("molten_aerotheum")
        .bucketColor(Color.rgba(200, 218, 148, 255))
        .displayName("§7Zephyrean Aerotheum") // gray
        .stillTexture("kubejs:block/aerotheum_still")
        .flowingTexture("kubejs:block/aerotheum_flow");
})
