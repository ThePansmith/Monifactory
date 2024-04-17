/*
* This JavaScript file can be used to initialize your own solar panels.
* First off, all methods have return types (they are specified after the "=>")
* How-to: (or watch the tutorial https://youtu.be/WVr6-3E7lA8 ;3)
* 1. To create a new panel, you need to make a builder, call panel()=>SolarPanelBuilder to begin the builder chain.
* 2. Chain elements:
*    - .name("yourname")=>SolarPanelBuilder // mandatory
*    - .height(float)=>SolarPanelBuilder // optional, float value is between [0;1]
*    - .generation("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
*    - .capacity("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
*    - .transfer("amount")=>SolarPanelBuilder // mandatory, pass the number as a string
* 3. At the end of the chain, call .build()=>SolarPanel (alternatively, .buildAndRegister()=>SolarPanel, to skip step #5)
* 4. Languages: call after build chain end (operate on panel), start language chain with .langBuilder()=>LanguageBuilder
*    - .put("en_us", "Your Solar Panel Name")=>LanguageBuilder
*    After that, call as many lang assigns as you want:
*    - .put("lang", "Your Solar Panel Name")=>LanguageBuilder
*    End chain with .build()=>SolarPanel
* 5. Recipes: call after build chain end (operate on panel), start recipe chain with .recipeBuilder()=>RecipeBuilder
*    - .shape(string...)=>RecipeBuilder // Specify the needed string amount (1 string = 1 row)
*    After you specified the recipe shape, bind all ingredients:
*    - .bind('c', item("modid", "item_name"))=>RecipeBuilder
*    End chain with .build(AMOUNT)=>SolarPanel // AMOUNT is the int value (0;64] of items in the recipe output, if omitted, will be defaulted to 1.
* 6. To register the panel, append .register()=>SolarPanel after ending the chain.
* 7. Texturing: (all textures are stored in "textures" folder)
*      "yourname_base.png", optionally with "yourname_base.mcmeta" (for animations)
*      "yourname_top.png", optionally with "yourname_top.mcmeta" (for animations)
* 
* Additional methods & features:
*   - isModLoaded("modid")=>boolean // returns if the specified mod is loaded. Could be useful for setting up mod-dependent solar panels.
*   - you can have a line "import path.to.Class;"  to avoid using Java.type("path.to.Class") stuff. Created outside of any functions, declares a new variable with the simple class name.
*   - you can have a line "define a_key !value!" to make the compiler replace all a_key with !value! at runtime.
*/

// define english "en_us"

var ourMaterial = false;

/** This function is called when mod is being constructed */
function init()
{
	// Example: (textures are extracted in /textures/ by default), uncomment to try it out! (Requires game restart)

    /* Comment Start

    // You might need to use CraftTweaker or something else to make the material obtainable!
	ourMaterial = newMaterial("example")
	    .langBuilder()
            .put(english, "Example Material")
        .build();

	panel()
		.name("example")
		.height(8 / 16.0)
		.generation("8388608")
		.capacity("3355443200")
		.transfer("50331648")
	.buildAndRegister()
		.langBuilder()
			    .put(english, "Example Solar Panel")
			.build()
		.recipeBuilder()
			.shape("ppp", "8c8", "8h8")
			.bind('p', item("solarflux", "photovoltaic_cell_6"))
			.bind('8', item("solarflux:sp_8"))
			.bind('c', tag("forge", "storage_blocks/emerald"))
			.bind('h', ourMaterial) // Here we use the newly added material in the recipe!
		.build(2);

    Comment end*/

    // Wyvern
    panel()
    .name('wyvern')
    .height(0.5)
    .generation(32768)
    .capacity(25600000)
    .transfer(512000)

    // Draconic
    panel()
    .name('draconic')
    .height(0.5)
    .generation(131072)
    .capacity(512000000)
    .transfer(1024000)

    // Chaotic
    panel()
    .name('chaotic')
    .height(0.5)
    .generation(262144)
    .capacity(204800000)
    .transfer(4096000)
}

/*
* This method is used to register additional recipes
* Below listed all vanilla options for adding recipes.
*/

function registerRecipes($)
{
    // IF you have a mod with custom recipe type, register them with the following:
    // $.add(IRecipe<?>)
    // Just don't forget to import the recipe class.
    // To pass an ingredient to a recipe wrap your item()/tag() call in a ingredient().
    // Basically this will create Minecraft Ingredient: ingredient(tag("forge", "storage_blocks/emerald"))

    if(ourMaterial)
    {
        $.shaped() // Shaped recipe example
            .result(ourMaterial, 2)
            .shape("###", "#$#", "###")
            .map('$', item("solarflux", "ender_glass"))
            .map('#', tag("forge", "rods/blaze"))
            .register();

        $.shapeless() // Shapeless recipe example
            .result(ourMaterial, 1)
            .add(item("solarflux", "ender_glass"))
            .add(tag("forge", "rods/blaze"))
            .add(tag("forge", "rods/blaze"))
            .add(tag("forge", "rods/blaze"))
            .register();

        $.stoneCutting() // Stone cutting recipe example
            .result(ourMaterial, 1)
            .input(item("solarflux", "ender_glass"))
            .register();

        // $.blasting() can be replaced with the following: (they have exactly same construction options)
        //     $.smelting()
        //     $.campfire()
        //     $.smoking()
        $.blasting() // Blasting cutting recipe example
            .result(ourMaterial, 1)
            .input(item("solarflux", "ender_glass"))
            .cookTime(400) // 20 seconds
            .xp(10.0)
            .register();
    }
}