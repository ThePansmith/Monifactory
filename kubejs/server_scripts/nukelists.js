// priority: -10
/**
 * Removes all tags from objects on the nukelists and deletes all recipes & uses for them.
 *
 * Also does the same for items matching the Unification Patterns.
 */
ServerEvents.tags("item", event => {
    event.removeAllTagsFrom(global.itemNukeList)

    // Remove tags from items matching the unification patterns.
    // For definitions, see KubeJS/startup_scripts/unificationPatterns.js
    event.removeAllTagsFrom(global.unificationPattern)
    event.removeAllTagsFrom(global.nuclearcraftFuelPattern)
    event.removeAllTagsFrom(global.nuclearcraftIsotopePattern)

    let hideItem = itemID => {
        event.add('c:hidden_from_recipe_viewers', itemID)
        event.add('forge:viewers/hidden_from_recipe', itemID)
    }

    let hideItemList = itemIDList => {
        itemIDList.forEach(hideItem)
    }

    // Nukelist hiding
    hideItemList(global.itemNukeList)

    // Unification pattern hiding
    hideItem(global.unificationPattern)
    hideItem(global.nuclearcraftFuelPattern)
    hideItem(global.nuclearcraftIsotopePattern)

    global.fluidNukeList.forEach(fluidID => {
        event.add('c:hidden_from_recipe_viewers', fluidID.concat("_bucket"))
        event.add('forge:viewers/hidden_from_recipe', fluidID.concat("_bucket"))
    })
})
ServerEvents.tags("fluid", event => {
    event.removeAllTagsFrom(global.fluidNukeList)
    global.fluidNukeList.forEach(fluidID => {
        event.add('c:hidden_from_recipe_viewers', fluidID)
        event.add('forge:viewers/hidden_from_recipe', fluidID)
    })
})

ServerEvents.recipes(event => {

    let ignoreTypes = [
        { type: "nuclearcraft:fission_reactor_controller" },
        { type: "nuclearcraft:fission_boiling" },
        { type: "nuclearcraft:isotope_separator" },
        { type: "nuclearcraft:fuel_reprocessor" },
        { type: "minecraft:crafting" },
        { type: "minecraft:smelting" }
    ];

    global.itemNukeList.forEach(item => {
        event.remove([{ output: item }, { input: item }])
    })

    global.fluidNukeList.forEach(fluid => {
        event.remove([
            {not: ignoreTypes, output: fluid},
            {not: ignoreTypes, input: fluid}
        ])

        // Get rid of recipes involving the buckets too
        event.remove([{ output: fluid.concat("_bucket") }, { input: fluid.concat("_bucket") }])
    })

    // Remove recipes that use items matching the unification patterns.
    // For definitions, see KubeJS/startup_scripts/unificationPatterns.js
    event.remove([{ output: global.unificationPattern }, { input: global.unificationPattern }])
    event.remove([{ output: global.nuclearcraftFuelPattern }, { input: global.nuclearcraftFuelPattern }])
    event.remove([{ output: global.nuclearcraftIsotopePattern }, { input: global.nuclearcraftIsotopePattern }])
})
