/**
 * Item modification.
 * Used to modify items not added by KJS
 * except for the Infinity/Ultimate crafting tools.
 */
const $ItemBuilder = Java.loadClass("dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder")

ItemEvents.modification(event => {

    // Make it so Sugar Cane can be used as fuel in the Furnace
    event.modify('minecraft:sugar_cane', item => { item.burnTime = 300 })


    // Make some items glint like enchanted items
    const itemsToModify = [
        'gtceu:dark_soularium_nugget',
        'gtceu:dark_soularium_dust',
        'gtceu:tiny_dark_soularium_dust',
        'gtceu:dark_soularium_block',
        'gtceu:dark_soularium_ingot',
        'gtceu:small_dark_soularium_dust',
        'hostilenetworks:prediction',
        /empowered/,
        /activated_netherite/
    ]

    itemsToModify.forEach(itemName => {
        event.modify(itemName, item => {
            const builder = new $ItemBuilder(itemName).glow(true)
            item.setItemBuilder(builder)
        })
    })


    // Increase the maximum stack size of Ender Pearls up to 64
    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })


    // Make Infinity and Ultimate tools work as unbreakable crafting tools
    const toolTypes = [
        'file',
        'hammer',
        'screwdriver',
        'wrench',
        'wire_cutter'
    ]
    toolTypes.forEach(type => {
        event.modify('kubejs:infinity_' + type, item => { item.craftingRemainder = Item.of('kubejs:infinity_' + type).item })
        event.modify('kubejs:ultimate_' + type, item => { item.craftingRemainder = Item.of('kubejs:ultimate_' + type).item })
    })
})
