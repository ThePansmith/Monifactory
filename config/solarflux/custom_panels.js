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

/** This function is called when mod is being constructed */
function init()
{
    /*Monifactory Custom solars*/

    // Bathyal
    panel()
            .name('bathyal')
            .height(0.5)
            .generation(32768)
            .capacity(1200000)
            .transfer(300000)
        .build()
        .langBuilder()
            .put("en_us", "Bathyal Solar Panel")
        .build()
        .register()

    // Abyssal
    panel()
            .name('abyssal')
            .height(0.5)
            .generation(131072)
            .capacity(4000000)
            .transfer(1000000)
        .build()
        .langBuilder()
            .put("en_us", "Abyssal Solar Panel")
        .build()
        .register()

    // Hadal
    panel()
            .name('hadal')
            .height(0.5)
            .generation(524288)
            .capacity(12000000)
            .transfer(3000000)
        .build()
        .langBuilder()
            .put("en_us", "Hadal Solar Panel")
        .build()
        .register()
    
    // Neutronium
    panel()
            .name("neutronium")
            .generation(2500000)
            .capacity(200000000)
            .transfer(50000000)
        .build()
        .langBuilder()
            .put("en_us", "Neutronium Solar Panel")
        .build()
        .register()

    // Infinity
    panel()
            .name("infinity")
            .generation(99999999)
            .capacity(999999999)
            .transfer(999999999)
        .build()
        .langBuilder()
            .put("en_us", "Infinity Solar Panel")
        .build()
        .register()
}
