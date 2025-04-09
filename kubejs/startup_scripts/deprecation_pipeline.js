// priority: 10
/**
 * This file offers utility functions to deprecate old items & fluids or change IDs
 * in such a way that they can be replaced without players' items or fluids getting voided.
 *
 * To use this:
 * 1. Remove references to the item or fluid in every way possible, including
 *    tags, recipes, tooltip, definition, lang, or other extra functionality.
 * 2. Use either of the utility functions below to specify the old and new IDs.
 *    If the item or fluid is created through KJS, delete the regular definition.
 *    The functions below create a replacement that is automatically substituted for the old one
 *    if you provide the correct ID.
 * 3. When fully removing the deprecated item or fluid, delete the call to the utility function to fully remove the old item.
 *
 * TODO: add functionality for blocks
 */

/**
 * @type {Dictionary<ResourceLocation, ResourceLocation>}
 * Dictionary of deprecated items and their replacements.
 * Used for tooltip & recipe generation for the deprecation pipeline.
 */
global.deprecatedItems = {};

/**
 * @type {Dictionary<ResourceLocation, ResourceLocation>}
 * Dictionary of deprecated fluids and their replacements.
 * Used for tooltip & recipe generation for the deprecation pipeline.
 */
global.deprecatedFluids = {};

/**
 * For a given item ID:
 *   Creates an item with that ID if none exists
 *   Creates a recipe to convert the old item to the new item
 *   Applies a tooltip to the old item indicating that it's deprecated
 *
 * This allows the player to load their world and the generated item will replace the deprecated item,
 * which can then be converted to the new, replacement item.
 * @param {ResourceLocation} oldItemID
 * @param {ResourceLocation} replacementItemID
 * @param {String} oldItemName
 */
function deprecateItem(oldItemID, replacementItemID, oldItemName) {
    StartupEvents.registry("item", event => {
        if(!Item.exists(oldItemID))
            event.create(oldItemID).displayName(`${oldItemName} §c[DEPRECATED]`);
    })
    global.deprecatedItems[oldItemID] = replacementItemID
}

/**
 * For a given fluid ID:
 *   Creates an fluid with that ID if none exists
 *   Creates a recipe to convert the old fluid to the new fluid
 *   Applies a tooltip to the old fluid indicating that it's deprecated
 *
 * This allows the player to load their world and the generated fluid will replace the deprecated fluid,
 * which can then be converted to the new, replacement fluid.
 * @param {ResourceLocation} oldFluidID
 * @param {ResourceLocation} replacementFluidID
 * @param {String} oldFluidName
 */
function deprecateFluid(oldFluidID, replacementFluidID, oldFluidName) {
    StartupEvents.registry("fluid", event => {
        if(!Fluid.exists(oldFluidID))
            event.create(oldFluidID).displayName(`${oldFluidName} §c[DEPRECATED]`);
    })
    global.deprecatedFluids[oldFluidID] = replacementFluidID
}
