/**
 * Custom recipes for the redstoneclock mod
 */
ServerEvents.recipes(event => {
    event.replaceInput({ id: 'redstoneclock:redstone_clock' }, 'minecraft:bell', '#forge:storage_blocks/redstone')
})
