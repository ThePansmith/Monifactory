// priority: 10
/**
 * This file offers utility functions to deprecate old items & fluids
 * in such a way that they can be replaced with out the players' items or fluids getting voided.
 *
 * To use this:
 * 1. Remove all the item or fluid in every way possible (tags, recipes, tooltip, definition, extra functionality)
 * 2. Use either of the utility functions below to **autogenerate a replacement item or fluid
 *    with the old ID** alongside a recipe to convert it to the new item or fluid and a proper tooltip
 * 3. When fully removing the deprecated item or fluid, delete the call to the utility function to fully remove the old item.
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
 * Generates an item with:
 *   The same ID as a previously removed item
 *   A recipe to convert to the new item
 *   A tooltip indicating that the item is deprecated
 *
 * This allows the player to load their world and the generated item will replace the deprecated item,
 * which can then be converted to the new, replacement item.
 * @param {String} name
 * @param {ResourceLocation} oldItemID
 * @param {ResourceLocation} replacementItemID
 */
function deprecateItem(name, oldItemID, replacementItemID) {
    StartupEvents.registry("item", event => {
        event.create(oldItemID).displayName(`${name} §c[DEPRECATED]`);
    })
    global.deprecatedItems[oldItemID] = replacementItemID
}

/**
 * Generates a fluid with:
 *   The same ID as a previously removed fluid
 *   A recipe to convert to the new fluid
 *   A tooltip indicating that the fluid is deprecated
 *
 * This allows the player to load their world and the generated fluid will replace the deprecated fluid,
 * which can then be converted to the new, replacement fluid.
 * @param {String} name
 * @param {ResourceLocation} oldFluidID
 * @param {ResourceLocation} replacementFluidID
 */
function deprecateFluid(name, oldFluidID, replacementFluidID) {
    StartupEvents.registry("fluid", event => {
        event.create(oldFluidID).displayName(`${name} §c[DEPRECATED]`);
    })
    global.deprecatedFluids[oldFluidID] = replacementFluidID
}
