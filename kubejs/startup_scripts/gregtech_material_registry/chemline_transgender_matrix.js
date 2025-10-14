/**
 * Material Registry for Transcendental Matrix processing.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("sludge_of_memory")
        .fluid()
        .color(0x002D2E)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("essence_of_knowledge")
        .fluid()
        .color(0x850085)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("logical_residue")
        .fluid()
        .color(0xA380C2)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("considerate_oils")
        .fluid()
        .color(0xED842D)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("transcendental_spirit")
        .fluid()
        .color(0xC2F2FF).secondaryColor(0xFFC2F4)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
})
