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

    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', oldItemID)
        event.add('forge:viewers/hidden_from_recipe', oldItemID)
    })
});

Object.entries(global.deprecatedFluids).forEach(([oldFluidID, replacementFluidID]) => {
    ServerEvents.recipes(event => {
        event.shapeless(replacementFluidID.concat("_bucket"), [oldFluidID.concat("_bucket")]).id(`${oldFluidID.concat("_bucket")}_legacy_updater`);

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

    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', oldFluidID.concat("_bucket"))
        event.add('forge:viewers/hidden_from_recipe', oldFluidID.concat("_bucket"))
    })

    ServerEvents.tags('fluid', event => {
        event.add('c:hidden_from_recipe_viewers', oldFluidID)
        event.add('forge:viewers/hidden_from_recipe', oldFluidID)
    })
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

    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', oldBlockID)
        event.add('forge:viewers/hidden_from_recipe', oldBlockID)
    })
});
