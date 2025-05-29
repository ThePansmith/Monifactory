/**
 * Recipes for running the endgame creative multis
 */

ServerEvents.recipes(event => {
    event.recipes.gtceu.omnidimensional_power_singularity("kubejs:superfuel_infinite_power")
        .inputFluids("gtceu:naquadah_superfuel 10")
        .duration(20)
})
