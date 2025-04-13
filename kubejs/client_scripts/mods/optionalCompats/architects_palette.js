/**
 *
 * Hide a couple items from Architect's Palette.
 * Recipes replace these items
 *
 */
if (Platform.isLoaded("architects_palette")) {
    console.log("Architect's Palette found, loading client compat scripts...")

    JEIEvents.hideItems(event => {
        // Hide AP items removed from recipes.
        event.hide([
            "architects_palette:wardstone_blend",
            "architects_palette:withered_bone"
        ])
    })
}
