/**
 * Recipes for running the endgame creative multis
 */

ServerEvents.recipes(event => {
    event.recipes.gtceu.omnidimensional_power_singularity("kubejs:superfuel_infinite_power")
        .inputFluids("gtceu:naquadah_superfuel 500")
        .duration(20)

    event.recipes.gtceu.omniscience_research_beacon("kubejs:infinite_research")
        .inputFluids("gtceu:pcb_coolant 1080")
        .EUt(GTValues.VA[GTValues.UHV])
        .CWUt(256)
        .duration(20)
})
