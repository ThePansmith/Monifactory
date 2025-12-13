/**
 * Custom recipes for Package Auto
 */
ServerEvents.recipes(event => {

    event.replaceInput({ id: /packaged/ }, "extendedcrafting:black_iron_ingot", "gtceu:black_steel_plate")
    event.replaceInput({ id: /packaged/ }, "extendedcrafting:frame", "gtceu:tungsten_carbide_block")

    event.remove({ output: "packagedauto:package_component" })
    event.recipes.gtceu.shaped("packagedauto:package_component", [
        "VTV",
        "TET",
        "VTV"
    ], {
        V: "gtceu:vibrant_alloy_plate",
        T: "gtceu:titanium_plate",
        E: "minecraft:ender_eye"
    }).addMaterialInfo()

    event.remove({ output: "packagedauto:recipe_holder" })
    event.shaped("3x packagedauto:recipe_holder", [
        "QPQ",
        "PRP",
        "TCT"
    ], {
        Q: "ae2:quartz_glass",
        P: "ae2:blank_pattern",
        R: "gtceu:diamatine_block",
        T: "gtceu:titanium_plate",
        C: "packagedauto:me_package_component"
    })

    event.remove({ output: "packagedauto:packager" })
    event.recipes.gtceu.shaped("packagedauto:packager", [
        "TCT",
        "EWE",
        "TIT"
    ], {
        T: "gtceu:titanium_plate",
        C: "packagedauto:me_package_component",
        E: "#gtceu:circuits/ev",
        W: "minecraft:crafting_table",
        I: "ae2:import_bus"
    }).addMaterialInfo()

    event.remove({ output: "packagedauto:unpackager" })
    event.recipes.gtceu.shaped("packagedauto:unpackager", [
        "TCT",
        "EWE",
        "TIT"
    ], {
        T: "gtceu:titanium_plate",
        C: "packagedauto:me_package_component",
        E: "#gtceu:circuits/ev",
        W: "minecraft:crafting_table",
        I: "ae2:export_bus"
    }).addMaterialInfo()

    event.remove({ output: "packagedauto:encoder" })
    event.recipes.gtceu.shaped("packagedauto:encoder", [
        "TCT",
        "EWE",
        "TIT"
    ], {
        T: "gtceu:titanium_plate",
        C: "packagedauto:me_package_component",
        E: "packagedauto:recipe_holder",
        W: "minecraft:crafting_table",
        I: "#gtceu:circuits/ev"
    }).addMaterialInfo()

    event.remove({ output: "packagedauto:packager_extension" })
    event.recipes.gtceu.shaped("packagedauto:packager_extension", [
        "TCT",
        "EWE",
        "TIT"
    ], {
        T: "gtceu:iron_plate",
        C: "packagedauto:me_package_component",
        E: "minecraft:glowstone_dust",
        W: "minecraft:crafting_table",
        I: "minecraft:piston"
    }).addMaterialInfo()

    event.remove({ output: "packagedauto:crafter" })
    event.recipes.gtceu.shaped("packagedauto:crafter", [
        "TCT",
        "EWE",
        "TIT"
    ], {
        T: "gtceu:iron_plate",
        C: "packagedauto:me_package_component",
        E: "minecraft:redstone",
        W: "minecraft:crafting_table",
        I: "minecraft:piston"
    }).addMaterialInfo()

    event.remove({ output: "packagedauto:fluid_package_filler" })
    event.shaped("packagedauto:fluid_package_filler", [
        "TCT",
        "EWE",
        "TIT"
    ], {
        T: "gtceu:titanium_plate",
        C: "packagedauto:me_package_component",
        E: "gtceu:fluid_cell",
        W: "minecraft:crafting_table",
        I: "#gtceu:circuits/ev"
    })

    // Packaged Ex Crafters
    let tiers = ["advanced", "elite", "ultimate"]
    tiers.forEach((tier) => {
        event.remove({ output: `packagedexcrafting:${tier}_crafter` })
        event.shaped(`packagedexcrafting:${tier}_crafter`, [
            "ACA",
            "BEB",
            "ACA"
        ], {
            A: `extendedcrafting:${tier}_component`,
            B: "gtceu:black_steel_plate",
            C: "packagedauto:me_package_component",
            E: `extendedcrafting:${tier}_auto_table`
        })
    })

    event.remove({ output: "packagedexexcrafting:epic_crafter" })
    event.shaped("packagedexexcrafting:epic_crafter", [
        "ACA",
        "BEB",
        "ACA"
    ], {
        A: "extendedcrafting:epic_component",
        B: "gtceu:black_steel_plate",
        C: "packagedauto:me_package_component",
        E: "extendedcrafting:epic_auto_table"
    })

    event.remove({ output: "packagedexcrafting:combination_crafter" })
    event.shaped("packagedexcrafting:combination_crafter", [
        "ACA",
        "BEB",
        "DCD"
    ], {
        A: "extendedcrafting:crystaltine_component",
        B: "gtceu:quantum_star",
        C: "packagedauto:me_package_component",
        D: "extendedcrafting:crystaltine_catalyst",
        E: "extendedcrafting:crafting_core"
    })
})
