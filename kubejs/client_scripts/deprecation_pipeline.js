/**
 * This file implements some of the functionality necessary to fulfill the purpose of the deprecation pipeline
 * as described in KubeJS/startup_scripts/deprecation_pipeline.js.
 *
 * In particular, in this file each deprecated item is given a helpful tooltip
 * to indicate that it is deprecated.
 */

ItemEvents.tooltip(event => {
    Object.entries(global.deprecatedItems).forEach(([oldItemID, replacementItemID]) => {
        event.add(oldItemID, Text.red(`Deprecated. Use in a crafting table to convert into ${Item.of(replacementItemID).getDisplayName().getString()}`).bold(true))
    })
})

// No corresponding tooltip event/api for fluids
