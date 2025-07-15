/**
 * This file implements some of the functionality necessary to fulfill the purpose of the deprecation pipeline
 * as described in KubeJS/startup_scripts/deprecation_pipeline.js.
 *
 * In particular, the recipes to convert deprecated items to their replacement are defined here.
 */

Object.entries(global.deprecatedItems).forEach(([oldItemID, replacementItemID]) => {
    ServerEvents.recipes(event => {
        event.shapeless(replacementItemID, [oldItemID]).id(`${oldItemID}_legacy_updater`);

        event.recipes.gtceu.atomic_reconstruction(`${oldItemID}_legacy_updater`)
            .itemInputs(oldItemID)
            .itemOutputs(replacementItemID)
            .duration(20)
            .EUt(GTValues.VA[GTValues.ULV])
    });
});

Object.entries(global.deprecatedFluids).forEach(([oldFluidID, replacementFluidID]) => {
    ServerEvents.recipes(event => {
        event.recipes.gtceu.chemical_reactor(`${oldFluidID}_legacy_updater`)
            .inputFluids(`${oldFluidID} 1000`)
            .outputFluids(`${replacementFluidID} 1000`)
            .duration(20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.distillation_tower(`${oldFluidID}_legacy_updater`)
            .inputFluids(`${oldFluidID} 1000`)
            .outputFluids(`${replacementFluidID} 1000`)
            .duration(20)
            .EUt(GTValues.VA[GTValues.ULV])
    });
});

Object.entries(global.deprecatedBlocks).forEach(([oldBlockID, replacementBlockID]) => {
    ServerEvents.recipes(event => {
        event.shapeless(replacementBlockID, [oldBlockID]).id(`${oldBlockID}_legacy_updater`);

        event.recipes.gtceu.atomic_reconstruction(`${oldBlockID}_legacy_updater`)
            .itemInputs(oldBlockID)
            .itemOutputs(replacementBlockID)
            .duration(20)
            .EUt(GTValues.VA[GTValues.ULV])
    });
});
