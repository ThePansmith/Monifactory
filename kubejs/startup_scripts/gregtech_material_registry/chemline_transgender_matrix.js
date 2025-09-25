/**
 * Material Registry for trans matrix processing.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("mystic_tar")
        .fluid()
        .color(0x002D2E)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("mystic_essence")
        .fluid()
        .color(0x850085)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("sunny_dew")
        .fluid()
        .color(0xD0E800)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("starry_dew")
        .fluid()
        .color(0x2E00B5)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("radiant_dew")
        .fluid()
        .color(0xFBE851)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("infused_residue")
        .fluid()
        .color(0xA380C2)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("infused_oils")
        .fluid()
        .color(0xED842D)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("supercharged_powder")
        .dust()
        .color(0xD1CF5A)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("transcendental_will")
        .ingot()
        .color(0xC2F2FF).secondaryColor(0xFFC2F4)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})
