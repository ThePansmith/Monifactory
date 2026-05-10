/**
 * Recipes for Ender Tanks and Ender Chests.
 */

ServerEvents.recipes(event => {
    // Ender Chest and Tank (gives the full slot version)
    // event.remove({ output: ["endertanks:ender_tank", "enderchests:ender_chest"] })

    // Chest
    event.shaped("enderchests:ender_chest", [
        "ABA",
        "DED",
        "AFA"
    ], {
        A: "minecraft:blaze_rod",
        B: "#minecraft:wool",
        D: "minecraft:obsidian",
        E: "gtceu:steel_crate",
        F: "gtceu:ender_pearl_block"
    }).id("enderchests:ender_chest")

    // Pouch
    event.shaped("enderchests:ender_bag", [
        "ABA",
        "DED",
        "AFA"
    ], {
        A: "minecraft:blaze_powder",
        B: "#minecraft:wool",
        D: "gtceu:obsidian_plate",
        E: "enderchests:ender_pouch",
        F: "gtceu:ender_pearl_plate"
    }).id("enderchests:ender_bag")

    // Tank
    event.shaped("endertanks:ender_tank", [
        "ABA",
        "DED",
        "AFA"
    ], {
        A: "minecraft:blaze_rod",
        B: "#minecraft:wool",
        D: "minecraft:obsidian",
        E: "enderio:pressurized_fluid_tank",
        F: "gtceu:ender_pearl_block"
    }).id("endertanks:tank")

    // Bucket
    event.shaped("endertanks:ender_bucket", [
        "ABA",
        "DED",
        "AFA"
    ], {
        A: "minecraft:blaze_powder",
        B: "#minecraft:wool",
        D: "gtceu:obsidian_plate",
        E: "minecraft:bucket",
        F: "gtceu:ender_pearl_plate"
    }).id("endertanks:bucket")
})
