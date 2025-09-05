/**
 * Material registry for Jollahs revamped rare earth processing
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    event.create("rare_earth_sulfate_soln")
        .fluid()
        .color(0xb56e3c)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("re_oxalate_solution")
        .fluid()
        .color(0xf5cb9a)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("oxidized_re_mixture")
        .fluid()
        .color(0x331b01)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("light_rare_earths")
        .liquid()
        .color(0x857f10)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("heavy_rare_earths")
        .liquid()
        .color(0x9c2214)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("lutetium_solution")
        .liquid()
        .color(0x007550)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("terbium_solution")
        .liquid()
        .color(0x4f7823)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("europium_oxide")
        .dust()
        .color(0x807e32)
        .components("2x europium", "3x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("europium_ii_oxide")
        .dust()
        .color(0x615e00)
        .components("1x europium", "1x oxygen")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("lutetium_fluoride")
        .dust()
        .color(0xfcfceb)
        .components("1x lutetium", "3x fluorine")

    event.create("cuprous_oxide")
        .dust()
        .color(0xd1291d)
        .components("2x copper", "1x oxygen")
})