/**
 * Item modification.
 * Used to modify items not added by KJS
 * except for the Infinity/Ultimate crafting tools.
 */
const $ItemBuilder = Java.loadClass("dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder")

const $Rarity = Java.loadClass("net.minecraft.world.item.Rarity")
const $UnaryOperator = Java.loadClass("java.util.function.UnaryOperator")
const $UtilsJS = Java.loadClass("dev.latvian.mods.kubejs.util.UtilsJS")
const $Style = Java.loadClass("net.minecraft.network.chat.Style")

// All Items that need to have a different rarity
let itemRarityMap = Utils.newMap()
itemRarityMap.put("functionalstorage:copper_upgrade", createRarity("bronze", 0xa47b47))
itemRarityMap.put("functionalstorage:gold_upgrade", createRarity("steel", 0x69696b))
itemRarityMap.put("functionalstorage:diamond_upgrade", createRarity("aluminum", 0x4e748b))
itemRarityMap.put("functionalstorage:netherite_upgrade", createRarity("stainless_steel", 0x9695a3))

ItemEvents.modification(event => {

    // Make it so Sugar Cane can be used as fuel in the Furnace
    event.modify("minecraft:sugar_cane", item => { item.burnTime = 300 })


    // Make some items glint like enchanted items
    const itemsToModify = [
        "gtceu:dark_soularium_nugget",
        "gtceu:dark_soularium_dust",
        "gtceu:tiny_dark_soularium_dust",
        "gtceu:dark_soularium_block",
        "gtceu:dark_soularium_ingot",
        "gtceu:small_dark_soularium_dust",
        "hostilenetworks:prediction",
        /activated_netherite/
    ]


    // Change rarities
    itemRarityMap.forEach((item, rarity) => {
        event.modify(item, i => i.rarity = rarity)
    })

    itemsToModify.forEach(itemName => {
        event.modify(itemName, item => {
            const builder = new $ItemBuilder(itemName).glow(true)
            item.setItemBuilder(builder)
        })
    })


    // Increase the maximum stack size of Ender Pearls up to 64
    event.modify("minecraft:ender_pearl", item => {
        item.maxStackSize = 64
    })


    // Make Infinity and Ultimate tools work as unbreakable crafting tools
    const toolTypes = [
        "file",
        "hammer",
        "screwdriver",
        "wrench",
        "wire_cutter"
    ]
    toolTypes.forEach(type => {
        event.modify(`kubejs:infinity_${type}`, item => { item.craftingRemainder = Item.of(`kubejs:infinity_${type}`).item })
        event.modify(`kubejs:ultimate_${type}`, item => { item.craftingRemainder = Item.of(`kubejs:ultimate_${type}`).item })
    })
})

const withColorMethod = $Style.EMPTY.class.declaredMethods.filter((method) => method.name.includes("m_131148_"))[0]
function createRarity (/** @type {string} */ name, /** @type {number} */ colorCode) {
    let color = $UtilsJS.makeFunctionProxy("startup", $UnaryOperator, (style) => {
        return withColorMethod.invoke(style, Color.of(colorCode).createTextColorJS())
    })
    return $Rarity["create(java.lang.String,java.util.function.UnaryOperator)"](name, color)
}
