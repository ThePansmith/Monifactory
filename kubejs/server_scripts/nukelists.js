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
})
ServerEvents.tags("fluid", event => {
    event.removeAllTagsFrom(global.fluidNukeList)
})

ServerEvents.recipes(event => {
    global.itemNukeList.forEach(item => {
        event.remove([{ output: item }, { input: item }])
    })

    global.fluidNukeList.forEach(fluid => {
        event.remove([{ output: fluid }, { input: fluid }])
    })

    // Remove recipes that use items matching the unification patterns.
    // For definitions, see KubeJS/startup_scripts/unificationPatterns.js
    event.remove([{ output: global.unificationPattern }, { input: global.unificationPattern }])
    event.remove([{ output: global.nuclearcraftFuelPattern }, { input: global.nuclearcraftFuelPattern }])
    event.remove([{ output: global.nuclearcraftIsotopePattern }, { input: global.nuclearcraftIsotopePattern }])
})
