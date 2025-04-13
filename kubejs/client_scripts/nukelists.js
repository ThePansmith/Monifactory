// priority: -10
/**
 * Hides all objects on the nukeLists and items matching the Unification Patterns from JEI/EMI.
 */
JEIEvents.hideItems(event => {
    global.itemNukeList.forEach(item => {
        event.hide(item);
    })

    // Hide items matching the unification patterns.
    // For definitions, see KubeJS/startup_scripts/unificationPatterns.js
    event.hide(global.unificationPattern)
    event.hide(global.nuclearcraftFuelPattern)
    event.hide(global.nuclearcraftIsotopePattern)
})

JEIEvents.hideFluids(event => {
    global.fluidNukeList.forEach(fluid => {
        event.hide(fluid)
    })
})
