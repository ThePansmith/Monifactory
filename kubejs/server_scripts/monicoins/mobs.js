/**
 * Registration of Monicoin trades for spawn eggs
 */

ServerEvents.recipes(event => {
    if (doMonicoins) {
        event.shaped(Item.of("minecraft:chicken_spawn_egg", 2), [
            " A ",
            "   ",
            "  A"
        ], {
            A: "kubejs:moni_quarter"
        }).noMirror().noShrink()

        event.shaped(Item.of("minecraft:cow_spawn_egg", 2), [
            "   ",
            "AA ",
            "   "
        ], {
            A: "kubejs:moni_quarter"
        }).noMirror().noShrink()

        event.shaped(Item.of("minecraft:pig_spawn_egg", 2), [
            "A  ",
            "  A",
            "   "
        ], {
            A: "kubejs:moni_quarter"
        }).noMirror().noShrink()

        event.shaped(Item.of("minecraft:sheep_spawn_egg", 2), [
            "AAA",
            "A  ",
            " A "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("minecraft:bee_spawn_egg", 2), [
            "AAA",
            "  A",
            " A "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        // To jumpstart HNN
        event.shaped(Item.of("minecraft:rotten_flesh", 32), [
            "   ",
            " PP",
            "   "
        ], {
            P: "kubejs:moni_penny"
        }).noMirror().noShrink()

        // Bonemeal
        event.shaped(Item.of("minecraft:bone", 32), [
            " PP",
            "   ",
            " P "
        ], {
            P: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("minecraft:honeycomb", 32), [
            "PPP",
            "P  ",
            "   "
        ], {
            P: "kubejs:moni_penny"
        }).noMirror().noShrink()
    }
})
