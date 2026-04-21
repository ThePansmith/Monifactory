/**
 * A fixed-parallel recipe modifier that does not affect energy consumption.
 * Made for use with Dischargers - using this on an EU-consuming machine would be OP.
 */

const MultiblockControllerMachine = Java.loadClass("com.gregtechceu.gtceu.api.machine.multiblock.MultiblockControllerMachine")
const ModifierFunction = Java.loadClass("com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction")
const ContentModifier = Java.loadClass("com.gregtechceu.gtceu.api.recipe.content.ContentModifier")
const ParallelLogic = Java.loadClass("com.gregtechceu.gtceu.api.recipe.modifier.ParallelLogic")

/**
 * @param {com.gregtechceu.gtceu.api.machine.MetaMachine}
 * @param {com.gregtechceu.gtceu.api.recipe.GTRecipe}
 * @returns {com.gregtechceu.gtceu.api.recipe.modifier.ModifierFunction}
 */
global.dischargerParallel = function (machine, recipe) {
    if (machine instanceof MultiblockControllerMachine && machine.isFormed()) {
        let parallels = ParallelLogic.getParallelAmount(machine, recipe, 8)

        if (parallels == 1) return ModifierFunction.IDENTITY;
        return ModifierFunction.builder()
            .modifyAllContents(ContentModifier.multiplier(parallels))
            // .eutMultiplier(parallels)
            .parallels(parallels)
            .build();
    }
    return ModifierFunction.IDENTITY;
}
