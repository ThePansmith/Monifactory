/**
 * Large Boilers fuel rebalance
 *
 * High Pressure Steam Boiler consumes 1 coal in 960s, produces 15mB/t, total production = 288,000 mB steam
 * Thermal Systeams Steam Boiler consumes 1 coal in 80s, produces 120mB/t, total production = 192,000 mB steam
 * By Default: Large Bronze Boiler consumes 1 coal in 1s, producing 800mB/t, total production = 16,000 mB steam
 * Post-buff: Large Bronze Boiler consumes 1 coal in 6s, producing 800mB/t, total production = 96,000 mB steam
 *
 * This makes Large Bronze Boilers consume 3x as much fuel per unit steam compared to singleblock HPs for being 53.3x faster,
 * and consume 2x as much fuel per unit steam compared to Thermal Systeams boilers for being 6.67x faster.
 */
ServerEvents.recipes(event => {

    event.findRecipes({ id: /^gtceu:large_boiler\/.*/, type: "gtceu:large_boiler" }).forEach(large_boiler_recipe => {
        let recipe_duration = large_boiler_recipe.json.getAsJsonPrimitive("duration").asInt
        large_boiler_recipe.json.remove("duration")
        large_boiler_recipe.json.add("duration", recipe_duration * 6)
    })
})
