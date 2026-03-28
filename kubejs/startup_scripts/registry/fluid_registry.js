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

    if (doParticleSynthesis) {
        event.create("particle_soup")
            .bucketColor(Color.rgba(80, 80, 80, 255))
            .stillTexture("kubejs:block/vps/particle_soup")
        event.create("hadronic_matter")
            .bucketColor(Color.rgba(90, 90, 60, 255))
            .stillTexture("kubejs:block/vps/hadronic_matter")
        event.create("bosonic_matter")
            .bucketColor(Color.rgba(90, 60, 90, 255))
            .stillTexture("kubejs:block/vps/bosonic_matter")

        event.create("higgs_g1")
            .bucketColor(Color.rgba(0, 16, 160, 255))
            .stillTexture("kubejs:block/vps/higgs_g1")
        event.create("higgs_g2")
            .bucketColor(Color.rgba(0, 24, 200, 255))
            .stillTexture("kubejs:block/vps/higgs_g2")
        event.create("higgs_g3")
            .bucketColor(Color.rgba(40, 80, 255, 255))
            .stillTexture("kubejs:block/vps/higgs_g3")

        event.create("gluon_g1")
            .bucketColor(Color.rgba(160, 16, 100, 255))
            .stillTexture("kubejs:block/vps/gluon_g1")
        event.create("gluon_g2")
            .bucketColor(Color.rgba(255, 24, 200, 255))
            .stillTexture("kubejs:block/vps/gluon_g2")
        event.create("gluon_g3")
            .bucketColor(Color.rgba(255, 80, 200, 255))
            .stillTexture("kubejs:block/vps/gluon_g3")

        event.create("w_z_g1")
            .bucketColor(Color.rgba(0, 200, 24, 255))
            .stillTexture("kubejs:block/vps/w_z_g1")
        event.create("w_z_g2")
            .bucketColor(Color.rgba(40, 255, 80, 255))
            .stillTexture("kubejs:block/vps/w_z_g2")

        event.create("meson_g1")
            .bucketColor(Color.rgba(200, 200, 0, 255))
            .stillTexture("kubejs:block/vps/meson_g1")
        event.create("meson_g2")
            .bucketColor(Color.rgba(255, 255, 24, 255))
            .stillTexture("kubejs:block/vps/meson_g2")

        event.create("strange_matter_plasma")
            .bucketColor(Color.rgba(200, 90, 10, 255))
            .stillTexture("kubejs:block/vps/strange_matter_plasma")
        event.create("quark_gluon_plasma")
            .bucketColor(Color.rgba(255, 40, 40, 255))
            .stillTexture("kubejs:block/vps/quark_gluon_plasma")

        event.create("degenerate_matter")
            .bucketColor(Color.rgba(128, 0, 0, 255))
            .stillTexture("kubejs:block/vps/degenerate_matter")
    }
})
