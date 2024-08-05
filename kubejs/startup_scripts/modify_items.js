const $ItemBuilder = Java.loadClass("dev.latvian.mods.kubejs.item.custom.BasicItemJS$Builder")

ItemEvents.modification(event => {
    event.modify('minecraft:sugar_cane', item => { item.burnTime = 300 })

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
        //'kubejs:dev_tool'
    ]

    itemsToModify.forEach(itemName => {
        event.modify(itemName, item => {
            const builder = new $ItemBuilder(itemName).glow(true)
            item.setItemBuilder(builder)
        })
    })

    event.modify('minecraft:ender_pearl', item => {
        item.maxStackSize = 64
    })

    // Making Infinity (and later Ultimate) tools work as unbreakable crafting tools
    event.modify('kubejs:infinity_file', item => {
        item.craftingRemainder = Item.of('kubejs:infinity_file').item
    })
    event.modify('kubejs:infinity_hammer', item => {
        item.craftingRemainder = Item.of('kubejs:infinity_hammer').item
    })
    event.modify('kubejs:infinity_screwdriver', item => {
        item.craftingRemainder = Item.of('kubejs:infinity_screwdriver').item
    })
    event.modify('kubejs:infinity_wrench', item => {
        item.craftingRemainder = Item.of('kubejs:infinity_wrench').item
    })
    event.modify('kubejs:infinity_wire_cutter', item => {
        item.craftingRemainder = Item.of('kubejs:infinity_wire_cutter').item
    })
})
