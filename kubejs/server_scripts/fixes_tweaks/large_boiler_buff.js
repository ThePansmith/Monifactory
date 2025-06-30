/**
 * Large Boilers fuel rebalance
 * Balance is based on adjusting to be balanced with singleblock boilers.
 * High Pressure Steam Boiler consumes 1 coal in 960s, produces 15mb/t, total production = 288,000 mb steam
 * By Default: Large Bronze Boiler consumes 1 coal in 1s, producing 800mb/t, total production = 16,000 mb steam
 * Thus, LBBs produce steam 53x as fast as HP steam singleblocks, but are 1/18 as fuel-efficient.
 * Therefore, we chose to multiply their efficiency by x9 for balancing.
 * This makes Large Boilers consume 2x as much fuel per unit steam compared to singleblocks in exchange for the extra speed.
 */
ServerEvents.recipes(event => {

    event.findRecipes({ id: /^gtceu:large_boiler\/.*/, type: "gtceu:large_boiler" }).forEach(large_boiler_recipe => {
        let recipe_duration = large_boiler_recipe.json.getAsJsonPrimitive("duration").asInt
        large_boiler_recipe.json.remove("duration")
        large_boiler_recipe.json.add("duration", recipe_duration * 9)
    })
})
