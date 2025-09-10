/**
 * Registration of Monicoin trades for ULV covers
 */
ServerEvents.recipes(event => {
    if (doMonicoins && Platform.isLoaded("ulvcovm")) {
        // -- ULV Covers
        event.shaped(Item.of("ulvcovm:ulv_conveyor_module", 2), [
            "   ",
            "   ",
            "A A"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("ulvcovm:ulv_electric_pump", 2), [
            "   ",
            "   ",
            " AA"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("ulvcovm:ulv_robot_arm"), [
            "   ",
            " A ",
            "  A"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("ulvcovm:ulv_fluid_regulator"), [
            "   ",
            "  A",
            "  A"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()
    }
})
