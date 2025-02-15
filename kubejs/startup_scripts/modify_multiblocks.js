/**
 * Multiblock modification.
 * Only used for one thing at the moment.
 */

GTCEuStartupEvents.registry('gtceu:machine', event => {
    GCYMMachines.MEGA_BLAST_FURNACE.setRecipeTypes([GTRecipeTypes.BLAST_RECIPES, GTRecipeTypes.get("alloy_blast_smelter")])
})
