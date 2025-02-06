/**
 * Mana dust fixes
 */

ServerEvents.recipes(event => {
    event.findRecipes({ id: "gtceu:extractor/extract_mana_dust" }).forEach(recipe => {
        recipe.json
            .getAsJsonObject("outputs")
            .getAsJsonArray("fluid").get(0)
            .getAsJsonObject("content")
            // Liquid Primal Mana
            .add("amount", 250)
    })
})