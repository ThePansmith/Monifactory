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
        .stillTexture("kubejs:block/mod/thermal/elemental_dusts/pyrotheum_still")
        .flowingTexture("kubejs:block/mod/thermal/elemental_dusts/pyrotheum_flow");
    event.create("molten_cryotheum")
        .bucketColor(Color.rgba(67, 244, 247, 255))
        .displayName("§bGelid Cryotheum") // aqua
        .temperature(5)
        .stillTexture("kubejs:block/mod/thermal/elemental_dusts/cryotheum_still")
        .flowingTexture("kubejs:block/mod/thermal/elemental_dusts/cryotheum_flow");
    event.create("molten_petrotheum")
        .bucketColor(Color.rgba(26, 19, 16, 255))
        .displayName("§8Tectonic Petrotheum") // darkGray
        .stillTexture("kubejs:block/mod/thermal/elemental_dusts/petrotheum_still")
        .flowingTexture("kubejs:block/mod/thermal/elemental_dusts/petrotheum_flow");
    event.create("molten_aerotheum")
        .bucketColor(Color.rgba(200, 218, 148, 255))
        .displayName("§7Zephyrean Aerotheum") // gray
        .stillTexture("kubejs:block/mod/thermal/elemental_dusts/aerotheum_still")
        .flowingTexture("kubejs:block/mod/thermal/elemental_dusts/aerotheum_flow");

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
})
