/**
 * A little bit of software wizardry that alters any "superconducting_coil" recipes in the Assembler
 * to use 1/2 of the Trinium they normally do.
 */
ServerEvents.recipes(event => {
    // Get all GTCEu Assembler recipes with an ID matching the regex
    event.findRecipes({ id: /gtceu:assembler\/superconducting_coil/, type: "gtceu:assembler" }).forEach(supercon_coil_recipe => {
        // Get the JSON array object representing all of the fluid ingredients
        let fluidIngredients = supercon_coil_recipe.json.getAsJsonObject("inputs").getAsJsonArray("fluid")
        for (let i = 0; i < fluidIngredients.size(); i++) {
            // Fluid ingredient to alter if it includes "forge:trinium" as a tag
            let curFluidIngredient = fluidIngredients.get(i).getAsJsonObject("content")

            // Get the original Trinium fluid amount
            let fluidAmount = curFluidIngredient.getAsJsonPrimitive("amount").asInt

            // Confirm that we are indeed altering a fluid ingredient that contains the "forge:trinium" tag
            let fluidIngredient = curFluidIngredient.getAsJsonArray("value")
            for (let j = 0; j < fluidIngredient.size(); j++) {
                if (fluidIngredient.get(j).getAsJsonPrimitive("tag").asString == "forge:trinium") {
                    // Change fluid ingredient to 1/2 the amount if it does match
                    curFluidIngredient.remove("amount")
                    curFluidIngredient["addProperty(java.lang.String,java.lang.Number)"]("amount", fluidAmount / 2)
                }
            }
        }
    })
})
