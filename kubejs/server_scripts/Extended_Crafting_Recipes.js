/**
 * Anything that is an extended crafting recipe comes here
 ! DO NOT PUT CREATIVE STUFF, PUT IT ON END_GAME.js
 ? For end game intermediates (ingots plates..) that uses ectendedcrafting, put it here
 */

ServerEvents.recipes(event => {
    // Angel Ring
    event.recipes.extendedcrafting.shaped_table("better_angel_ring:angel_ring", [
        " AAA ",
        "A B A",
        "AC CA",
        "A B A",
        " AAA "
    ], {
        A: "gtceu:rose_gold_ingot",
        B: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:energetic"}').weakNBT(),
        C: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:reinforced"}').weakNBT(),
    }).id("kubejs:extended/angel_ring")
})
