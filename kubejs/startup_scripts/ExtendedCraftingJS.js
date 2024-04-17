const $RecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.RecipeSchema');
const $ShapedRecipeSchema = Java.loadClass('dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapedRecipeSchema');
const $ShapelessRecipeSchema = Java.loadClass("dev.latvian.mods.kubejs.recipe.schema.minecraft.ShapelessRecipeSchema");
const $ItemComponents = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.ItemComponents');
const $NumberComponent = Java.loadClass('dev.latvian.mods.kubejs.recipe.component.NumberComponent');

StartupEvents.recipeSchemaRegistry(event =>{
    //Extended Crafting
    event.register("extendedcrafting:shaped_ender_crafter", new $RecipeSchema(
        $ShapedRecipeSchema.RESULT,
        $ShapedRecipeSchema.PATTERN,
        $ShapedRecipeSchema.KEY,
        $NumberComponent.INT.key("craftingTime").defaultOptional().preferred("craftingTime")
        )
    );
    event.register("extendedcrafting:shapeless_ender_crafter", new $RecipeSchema(
        $ShapelessRecipeSchema.RESULT,
        $ShapelessRecipeSchema.INGREDIENTS,
        $NumberComponent.INT.key("craftingTime").defaultOptional().preferred("craftingTime")
        )
    );
    event.register("extendedcrafting:combination", new $RecipeSchema(
        $ItemComponents.OUTPUT.key("result"),
        $ItemComponents.INPUT.key('input'),
        $ItemComponents.UNWRAPPED_INPUT_ARRAY.key("ingredients"),
        $NumberComponent.INT.key("powerCost").optional(500000).preferred("powerCost"),
        $NumberComponent.INT.key("powerRate").defaultOptional().preferred("powerRate")
        )
    );
    event.register("extendedcrafting:compressor", new $RecipeSchema(
        $ItemComponents.OUTPUT.key("result"),
        $ItemComponents.INPUT.key("catalyst"),
        $ItemComponents.INPUT.key("ingredient"),
        $NumberComponent.INT.key("inputCount"),
        $NumberComponent.INT.key("powerCost").optional(5000000).preferred("powerCost"),
        $NumberComponent.INT.key("powerRate").defaultOptional().preferred("powerRate")
        )
    );
    event.register("extendedcrafting:shaped_flux_crafter", new $RecipeSchema(
        $ShapedRecipeSchema.RESULT,
        $ShapedRecipeSchema.PATTERN,
        $ShapedRecipeSchema.KEY,
        $NumberComponent.INT.key("powerRequired").optional(100000).preferred("powerRequired"),
        $NumberComponent.INT.key("powerRate").defaultOptional().preferred("powerRate")
        )
    );
    event.register('extendedcrafting:shapeless_flux_crafter', new $RecipeSchema(
        $ShapelessRecipeSchema.RESULT,
        $ShapelessRecipeSchema.INGREDIENTS,
        $NumberComponent.INT.key("powerRequired").optional(100000).preferred("powerRequired"),
        $NumberComponent.INT.key("powerRate").defaultOptional().preferred("powerRate")
        )
    );
    event.register("extendedcrafting:shaped_table", new $RecipeSchema(
        $ShapedRecipeSchema.RESULT,
        $ShapedRecipeSchema.PATTERN,
        $ShapedRecipeSchema.KEY,
        $NumberComponent.INT.key("tier").defaultOptional().preferred("tier")
        )
    );
    event.register("extendedcrafting:shapeless_table", new $RecipeSchema(
        $ShapelessRecipeSchema.RESULT,
        $ShapelessRecipeSchema.INGREDIENTS,
        $NumberComponent.INT.key("tier").defaultOptional().preferred("tier")
        )
    );
});