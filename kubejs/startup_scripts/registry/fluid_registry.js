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

    // Antimatter
    const antimatter_types = ["bosonic", "hadronic", "fermionic"]
    antimatter_types.forEach(type => {
        event.create(`${type}_antimatter`)
            .bucketColor(Color.rgba(27, 12, 39, 255))
            .stillTexture(`kubejs:block/antimatter/${type}`)
        event.create(`refined_${type}_antimatter`)
            .stillTexture(`kubejs:block/antimatter/refined_${type}`)
            .bucketColor(Color.rgba(41, 19, 59, 255))
    })
    event.create("antimatter_fuel")
        .bucketColor(Color.rgba(99, 18, 110, 255))
        .stillTexture("kubejs:block/antimatter/fuel")

    event.create("hadal_sculk").stillTexture("kubejs:block/bioalloy/hadal_sculk")
    event.create("experience_concentrate").stillTexture("kubejs:block/bioalloy/experience_concentrate")
    event.create("experience_rich_growth_medium").stillTexture("kubejs:block/bioalloy/experience_rich_growth_medium")
})
