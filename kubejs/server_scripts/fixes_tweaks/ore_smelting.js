/**
 * Rework for ore smelting recipes
 */

ServerEvents.recipes(event => {
    // Remvoe overlapping ore blocks to ingot/dust recipes
    event.remove({ id: "minecraft:nuclearcraft_lithium_ore" })
    event.remove({ id: "minecraft:nuclearcraft_cobalt_ore" })
    event.remove({ id: "minecraft:copper_ingot_from_smelting_copper_ore" })
    event.remove({ id: "minecraft:gold_ingot_from_smelting_deepslate_gold_ore" })
    event.remove({ id: "minecraft:iron_ingot_from_smelting_deepslate_iron_ore" })
    event.remove({ id: "thermal:smelting/lead_ingot_from_deepslate_ore_smelting" })
    event.remove({ id: "minecraft:nuclearcraft_lead_ore" })
    event.remove({ id: "thermal:smelting/nickel_ingot_from_deepslate_ore_smelting" })
    event.remove({ id: "minecraft:nuclearcraft_platinum_ore" })
    event.remove({ id: "minecraft:nuclearcraft_silver_ore" })
    event.remove({ id: "thermal:smelting/silver_ingot_from_deepslate_ore_smelting" })
    event.remove({ id: "thermal:smelting/sulfur_from_smelting" })
    event.remove({ id: "minecraft:nuclearcraft_thorium_ore" })
    event.remove({ id: "minecraft:nuclearcraft_tin_ore" })
    event.remove({ id: "thermal:smelting/tin_ingot_from_deepslate_ore_smelting" })
    event.remove({ id: "thermal:smelting/cinnabar_from_smelting" })
    event.remove({ id: "minecraft:coal_from_smelting_coal_ore" })
    event.remove({ id: "minecraft:diamond_from_smelting_deepslate_diamond_ore" })
    event.remove({ id: "minecraft:emerald_from_smelting_deepslate_emerald_ore" })
    event.remove({ id: "minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore" })
    event.remove({ id: "thermal:smelting/apatite_from_smelting" })

    // Remove overlapping raw ore to ingot recipes
    event.remove({ id: "minecraft:nuclearcraft_silver_raw" })
    // event.remove({ id: "" })

    // redstone and lapis ores now drop multiple raw ore per ore block. They are tedious to smelt so we speed them up
    const quickSmelt = (oreName, output) => {
        event.remove({ id: `gtceu:smelting/smelt_raw_${oreName}_ore_to_ingot` })
        event.remove({ id: `gtceu:blasting/smelt_raw_${oreName}_ore_to_ingot` })
        event.smelting(output, `gtceu:raw_${oreName}`)
            .id(`gtceu:smelting/smelt_raw_${oreName}_ore_to_ingot`)
            .cookingTime(50).xp(0.9)
        event.blasting(output, `gtceu:raw_${oreName}`)
            .id(`gtceu:blasting/smelt_raw_${oreName}_ore_to_ingot`)
            .cookingTime(50).xp(0.9)
    }
    quickSmelt("redstone", "3x minecraft:redstone")
    quickSmelt("electrotine", "gtceu:electrotine_dust")

    quickSmelt("lapis", "minecraft:lapis_lazuli")
    quickSmelt("lazurite", "gtceu:lazurite_gem")
    quickSmelt("sodalite", "gtceu:sodalite_gem")
})
