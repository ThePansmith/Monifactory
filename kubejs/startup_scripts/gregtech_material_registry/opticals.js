// priority: -1
/**
 * Material Registry for materials related to Optical Circuits.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("lithium_niobate")
        .liquid()
        .gem()
        .color(0xffe26c)
        .flags(GTMaterialFlags.DECOMPOSITION_BY_ELECTROLYZING, GTMaterialFlags.CRYSTALLIZABLE, GTMaterialFlags.GENERATE_LENS)
        .components("1x lithium", "1x niobium", "3x oxygen")

    event.create("dielectric_mirror_solution")
        .liquid()
        .color(0xe2fff9)
        // .flags(GTMaterialFlags.DECOMPOSITION_BY_CENTRIFUGING)
        .components("7x silicon_dioxide", "1x enderium", "2x tantalum_pentoxide", "5x rutile", "11x polyethylene", "3x germanium")
})
