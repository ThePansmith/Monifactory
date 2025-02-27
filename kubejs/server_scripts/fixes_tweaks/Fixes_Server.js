/** some mod tags the charcoal recipe incorrectly */
ServerEvents.recipes(event => {
    event.replaceInput({ id: "minecraft:coal_block" }, "#minecraft:coals", "minecraft:coal")

    event.replaceOutput({ id: "minecraft:charcoal" }, "#minecraft:coals", "minecraft:charcoal")
    // thanks greg
    event.replaceOutput({ id: "gtceu:shapeless/block_decompress_charcoal" }, "minecraft:coal", "minecraft:charcoal")
    event.replaceOutput({ id: "thermal:storage/charcoal_from_block" }, "minecraft:coal", "minecraft:charcoal")
    event.replaceOutput({ id: "thermal:machines/press/unpacking/press_charcoal_unpacking" }, "minecraft:coal", "minecraft:charcoal")
    event.replaceOutput({ type: "gtceu:pyrolyse_oven" }, "minecraft:coal", "20x minecraft:charcoal");
    event.replaceOutput({ id: "gtceu:forge_hammer/hammer_charcoal_block_to_gem" }, "minecraft:coal", "9x minecraft:charcoal")
    event.replaceOutput({ id: "gtceu:coke_oven/log_to_charcoal" }, "minecraft:coal", "minecraft:charcoal")
})
