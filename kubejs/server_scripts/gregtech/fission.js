/**
 * Fission reactor recipes
 */

ServerEvents.recipes(event => {
    // Block Recipes
    event.recipes.gtceu.assembler("lead_shield_casing")
        .itemInputs("4x gtceu:lead_plate", "2x gtceu:tough_alloy_plate", "gtceu:tungsten_steel_frame")
        .itemOutputs("2x kubejs:lead_shield_casing")
        .circuit(6)
        .duration(100)
        .EUt(GTValues.VA[GTValues.MV])

    event.shaped("kubejs:fuel_cell", [
        "TST",
        "S S",
        "TST"
    ], {
        T: "gtceu:lead_plate",
        S: "gtceu:tempered_glass",
    })

    event.shaped("kubejs:moderation_cell", [
        "TST",
        "S S",
        "TST"
    ], {
        T: "gtceu:ferroboron_plate",
        S: "gtceu:tempered_glass",
    })

    event.shaped("gtceu:fission_reactor", [
        "DED",
        "EFE",
        "DED"
    ], {
        F: "kubejs:lead_shield_casing",
        E: "#gtceu:circuits/ev",
        D: "gtceu:double_yttrium_barium_cuprate_plate"
    })

    /** Rhino moment */
    const apply = (obj, fnKey, args) => obj[fnKey].apply(obj, args)

    // Decomp recipes
    function decomp(fuel, ingreditents) {
        apply(
            event.recipes.gtceu.thermal_centrifuge(fuel + "decomp")
                .itemInputs("kubejs" + fuel),
            "itemOutputs", ingreditents
        )
            .duration(3200)
            .EUt(48)
    }

    decomp("tbu", ["9x kubejs:thorium_232"])
    decomp("leu_235", ["8x gtceu:uranium_dust", "gtceu:uranium_235_dust"])
    decomp("heu_235", ["6x gtceu:uranium_dust", "3x gtceu:uranium_235_dust"])
    decomp("le_mox", ["8x kubejs:uranium_dust", "gtceu:plutonium_dust"])
    decomp("he_mox", ["6x kubejs:plutonium_241_dust", "3x kubejs:californium"])

    function decompdepleted(fuelType, outA, outB, voltageTier) {
        apply(
            event.recipes.gtceu.centrifuge(fuelType + "_decompdepleted")
                .itemInputs("kubejs:depleted_" + fuelType)
                .inputFluids("gtceu:nitric_acid 2000"),
            "itemOutputs", outA
        )
            .duration(400)
            .EUt(GTValues.VHA[voltageTier])

        apply(
            event.recipes.gtceu.centrifuge(fuelType + "_waste_processing")
                .itemInputs("kubejs:waste_" + fuelType)
                .inputFluids("gtceu:phosphoric_acid 2000"),
            "itemOutputs", outB
        )
            .duration(400)
            .EUt(GTValues.VHA[voltageTier])
    }

    decompdepleted("tbu", ["2x gtceu:uranium_nugget", "8x gtceu:uranium_235_nugget", "3x kubejs:waste_tbu"], ["8x gtceu:lead_nugget", "4x gtceu:thorium_nugget", "5x kubejs:neptunium"], GTValues.IV)
    decompdepleted("leu_235", ["40x gtceu:uranium_nugget", "6x gtceu:uranium_235_nugget", "8x gtceu:plutonium_nugget", "4x gtceu:plutonium_241_nugget", "3x kubejs:waste_leu_235"], ["6x gtceu:lead_nugget", "2x kubejs:neptunium", "8x gtceu:americium_nugget", "4x kubejs:curium"], GTValues.IV)
    decompdepleted("mox", ["20x gtceu:uranium_nugget", "4x gtceu:plutonium_nugget", "16x gtceu:plutonium_241_nugget", "3x kubejs:waste_mox"], ["4x gtceu:lead_nugget", "8x kubejs:curium", "4x kubejs:berkelium", "2x kubejs:californium"], GTValues.LuV)
    decompdepleted("mac", ["6x gtceu:plutonium_nugget", "12x gtceu:plutonium_241_nugget", "3x kubejs:waste_mac"], ["2x gtceu:lead_nugget", "4x gtceu:actinium_nugget", "6x kubejs:berkelium", "4x kubejs:californium", "2x kubejs:einsteinium"], GTValues.ZPM)

    // Fuel Crafting
    event.recipes.gtceu.forming_press("tbu_forming")
        .itemInputs("9x gtceu:thorium_dust")
        .itemOutputs("kubejs:tbu")
        .notConsumable("gtceu:cylinder_casting_mold")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.forming_press("leu_235_forming")
        .itemInputs("8x gtceu:uranium_dust", "gtceu:uranium_235_dust")
        .itemOutputs("kubejs:leu_235")
        .notConsumable("gtceu:cylinder_casting_mold")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.forming_press("mox_forming")
        .itemInputs("8x gtceu:uranium_dust", "gtceu:plutonium_dust")
        .itemOutputs("kubejs:mox")
        .notConsumable("gtceu:cylinder_casting_mold")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.IV])

    event.recipes.gtceu.forming_press("mac_forming")
        .itemInputs("3x gtceu:uranium_dust", "3x gtceu:plutonium_241_dust", "1x kubejs:curium", "1x kubejs:berkelium", "1x kubejs:californium")
        .itemOutputs("kubejs:mac")
        .notConsumable("gtceu:cylinder_casting_mold")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.LuV])

    // Fission Recipes
    function fissionRecipe(fuel, duration, EUt) {
        event.recipes.gtceu.fission_reactor(fuel)
            .itemInputs("kubejs:" + fuel)
            .itemOutputs("kubejs:depleted_" + fuel)
            .duration(duration * 20)
            .EUt(EUt * 0.75)
    }

    // Temp values, obv
    fissionRecipe("tbu", 720, -1200);
    fissionRecipe("leu_235", 240, -2400);
    fissionRecipe("mox", 189, -3300);
    fissionRecipe("mac", 100, -4500)
})
