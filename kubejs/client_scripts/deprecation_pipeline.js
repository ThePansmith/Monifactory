/**
 * This file implements some of the functionality necessary to fulfill the purpose of the deprecation pipeline
 * as described in KubeJS/startup_scripts/deprecation_pipeline.js.
 *
 * In particular, in this file each deprecated item is hidden in EMI/JEI and given a helpful tooltip
 * to indicate that it is deprecated.
 *
 * All of these recipes are hidden by RegEx in assets/emi/recipe/filters/hiderecipes.json.
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
        event.add(oldItemID, Text.red(`Deprecated. Put this in a Crafting Table or Atomic Reconstructor to convert into ${Item.of(replacementItemID).getDisplayName().getString()}`).bold(true))
    })
    Object.entries(global.deprecatedFluids).forEach(([oldFluidID, replacementFluidID]) => {
        event.add(oldFluidID.concat("_bucket"), Text.red(`Deprecated. Put the fluid in a Distillery, Distillation Tower, Chemical Reactor or LCR or the bucket in a Crafting Table to convert into ${Fluid.of(replacementFluidID).getId()}`).bold(true))
    })
    Object.entries(global.deprecatedBlocks).forEach(([oldBlockID, replacementBlockID]) => {
        event.add(oldBlockID, Text.red(`Deprecated. Put this in a Crafting Table or Atomic Reconstructor to convert into ${Item.of(replacementBlockID).getDisplayName().getString()}`).bold(true))
    })
})

JEIEvents.hideFluids(event => {
    Object.entries(global.deprecatedFluids).forEach(([oldFluidID, replacementFluidID]) => {
        event.hide(oldFluidID)
    })
})

// No corresponding tooltip event/api for fluids
