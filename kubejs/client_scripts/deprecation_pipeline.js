/**
 * This file implements some of the functionality necessary to fulfill the purpose of the deprecation pipeline
 * as described in KubeJS/startup_scripts/deprecation_pipeline.js.
 *
 * In particular, in this file each deprecated item is hidden in EMI/JEI and given a helpful tooltip
 * to indicate that it is deprecated.
 */

JEIEvents.hideItems(event => {
    Object.entries(global.deprecatedItems).forEach(([oldItemID, replacementItemID]) => {
        event.hide(oldItemID)
    })
    Object.entries(global.deprecatedFluids).forEach(([oldFluidID, replacementFluidID]) => {
        event.hide(oldFluidID.concat("_bucket"))
    })
    Object.entries(global.deprecatedBlocks).forEach(([oldBlockID, replacementBlockID]) => {
        event.hide(oldBlockID)
    })
})

ItemEvents.tooltip(event => {
    Object.entries(global.deprecatedItems).forEach(([oldItemID, replacementItemID]) => {
        event.add(oldItemID, Text.red(`Deprecated. Use in a crafting table to convert into ${Item.of(replacementItemID).getDisplayName().getString()}`).bold(true))
    })
    Object.entries(global.deprecatedBlocks).forEach(([oldBlockID, replacementBlockID]) => {
        event.add(oldBlockID, Text.red(`Deprecated. Use in a crafting table to convert into ${Item.of(replacementBlockID).getDisplayName().getString()}`).bold(true))
    })
})

JEIEvents.hideFluids(event => {
    Object.entries(global.deprecatedFluids).forEach(([oldFluidID, replacementFluidID]) => {
        event.hide(oldFluidID)
    })
})

// No corresponding tooltip event/api for fluids
