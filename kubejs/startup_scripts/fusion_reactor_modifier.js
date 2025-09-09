/*
Adds the Efficiency Modifier to Fusion Reactors.
*/
const $RecipeModifierList = Java.loadClass("com.gregtechceu.gtceu.api.recipe.modifier.RecipeModifierList")
const $EfficiencyModifier = Java.loadClass("com.gregtechceu.gtceu.api.recipe.modifier.EfficiencyModifier")

StartupEvents.postInit(event => {
    GTMultiMachines.FUSION_REACTOR.forEach((reactor) => {
        if(reactor != null) reactor.setRecipeModifier(new $RecipeModifierList(reactor.getRecipeModifier(), $EfficiencyModifier.of(0.997)))
    })
})
