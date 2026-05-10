/**
 * Gem slurries for gem slurry processing
 */

GTCEuStartupEvents.registry("gtceu:material", event => {

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

    // Other
    event.create("malachite_slurry")
        .liquid()
        .color(0x488264)
    event.create("olivine_slurry")
        .liquid()
        .color(0x82c882)
})
