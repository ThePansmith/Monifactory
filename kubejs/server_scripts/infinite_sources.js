/**
 * Custom recipes for stuff that generates infinite amount of something
 */
ServerEvents.recipes(event => {
    event.remove({ id: "watercollector:watercollector" })
    event.remove({ id: "thermal:device_water_gen" })
    event.remove({ id: "thermal:device_rock_gen" })

    if (!doHarderRecipes) {
        event.recipes.gtceu.shaped("watercollector:watercollector", [
            "AAA",
            "B B",
            "AAA"
        ], {
            A: "gtceu:wrought_iron_plate",
            B: "minecraft:water_bucket"
        }).addMaterialInfo()

        event.recipes.gtceu.shaped("thermal:device_water_gen", [
            " B ",
            "CWC",
            "GSG"
        ], {
            G: "gtceu:iron_gear",
            B: "minecraft:bucket",
            W: "watercollector:watercollector",
            S: "enderio:fused_quartz",
            C: "#forge:ingots/copper"
        }).id("kubejs:device_water_gen").addMaterialInfo();

        event.recipes.gtceu.shaped("thermal:device_rock_gen", [
            " P ",
            "PNP",
            "GHG"
        ], {
            G: "gtceu:iron_gear",
            P: "#forge:plates/steel",
            N: "#forge:pistons",
            H: "minecraft:hopper"
        }).id("kubejs:device_rock_gen").addMaterialInfo();
    } else {
        event.recipes.gtceu.shaped("thermal:device_water_gen", [
            " B ",
            "CWC",
            "GSG"
        ], {
            G: "gtceu:iron_gear",
            B: "minecraft:bucket",
            W: "#enderio:fused_quartz",
            S: "thermal:redstone_servo",
            C: "#forge:ingots/copper"
        }).id("kubejs:device_water_gen").addMaterialInfo();

        event.recipes.gtceu.shaped("thermal:device_rock_gen", [
            " P ",
            "INI",
            "GSG"
        ], {
            G: "gtceu:iron_gear",
            S: "thermal:redstone_servo",
            P: "#forge:plates/steel",
            I: "#forge:plates/invar",
            N: "#forge:pistons"
        }).id("kubejs:device_rock_gen").addMaterialInfo();
    }

    // Infinite Cobble/Water cells
    event.replaceInput({ id: "expatternprovider:water_cell" }, "minecraft:water_bucket", "gtceu:infinite_water_cover")
    event.replaceInput({ id: "expatternprovider:cobblestone_cell" }, "minecraft:water_bucket", "gtceu:infinite_water_cover")
    event.replaceInput({ id: "expatternprovider:water_cell" }, "minecraft:diamond", "gtceu:mythril_plate")
    event.replaceInput({ id: "expatternprovider:cobblestone_cell" }, "minecraft:diamond", "gtceu:mythril_plate")

})
