/**
 * Gem slurries for gem slurry processing
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

    // Beryl
    event.create("emerald_slurry")
        .liquid()
        .color(0x17ff6c)

    // Garnets
    event.create("pyrope_slurry")
        .liquid()
        .color(0xc85064)
    event.create("almandine_slurry")
        .liquid()
        .color(0x823232)
    event.create("spessartine_slurry")
        .liquid()
        .color(0xc88232)
    event.create("grossular_slurry")
        .liquid()
        .color(0xc88264)

    // Mixed Garnets
    event.create("red_garnet_slurry")
        .liquid()
        .color(0x823232)
    event.create("yellow_garnet_slurry")
        .liquid()
        .color(0xc8c864)

    // Ad Astra gem ores
    event.create("anorthite_slurry")
        .liquid()
        .color(0xddd4af)
    event.create("titanite_slurry")
        .liquid()
        .color(0xa3ba3d)

    // Other
    event.create("malachite_slurry")
        .liquid()
        .color(0x488264)
    event.create("olivine_slurry")
        .liquid()
        .color(0x82c882)
})
