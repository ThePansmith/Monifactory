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
        D: "double_yttrium_barium_cuprate_plate"
    })

    // Decomp recipes
    function decomp(name, fuel, ing1, ing2) {
        event.recipes.gtceu.thermal_centrifuge(name + "decomp")
            .itemInputs(fuel)
            .itemOutputs(ing1, ing2)
            .duration(3200)
            .EUt(48)
    }

    function decomp_single(name, fuel, ing) {
        event.recipes.gtceu.thermal_centrifuge(name + "decomp")
            .itemInputs(fuel)
            .itemOutputs(ing)
            .duration(3200)
            .EUt(48)
    }

    decomp_single("tbu_fuel", "kubejs:tbu_fuel", "9x kubejs:thorium_232");
    decomp("leu_233", "kubejs:leu_233", "8x gtceu:uranium_dust", "kubejs:uranium_233");
    decomp("leu_235", "kubejs:leu_235", "8x gtceu:uranium_dust", "gtceu:uranium_235_dust");
    decomp("len_236", "kubejs:len_236", "8x kubejs:neptunium_237", "kubejs:neptunium_236");
    decomp("lep_239", "kubejs:lep_239", "8x kubejs:plutonium_242", "gtceu:plutonium_dust");
    decomp("lep_241", "kubejs:lep_241", "8x kubejs:plutonium_242", "gtceu:plutonium_241_dust");
    decomp("lea_242", "kubejs:lea_242", "8x kubejs:americium_243", "kubejs:americium_242");
    decomp("lecm_243", "kubejs:lecm_243", "8x kubejs:curium_246", "kubejs:curium_243");
    decomp("lecm_245", "kubejs:lecm_245", "8x kubejs:curium_246", "kubejs:curium_245");
    decomp("lecm_247", "kubejs:lecm_247", "8x kubejs:curium_246", "kubejs:curium_247");
    decomp("leb_248", "kubejs:leb_248", "8x kubejs:berkelium_247", "kubejs:berkelium_248");
    decomp("lecf_249", "kubejs:lecf_249", "8x kubejs:californium_252", "kubejs:californium_249");
    decomp("lecf_251", "kubejs:lecf_251", "8x kubejs:californium_252", "kubejs:californium_251");

    function decompdepleted(fuelType, out, out2, out3, out4, voltageTier) {

        event.recipes.gtceu.centrifuge(fuelType + "decompdepleted")
            .itemInputs("kubejs:depleted_" + fuelType)
            .itemOutputs(out, out2, out3, out4)
            .duration(400)
            .EUt(GTValues.VHA[voltageTier])
    }

    decompdepleted("thorium_tbu", "2x kubejs:uranium_233", "8x gtceu:uranium_235_nugget", "kubejs:neptunium_236", "4x kubejs:neptunium_237", GTValues.IV)
    decompdepleted("leu_233", "4x kubejs:plutonium_242", "4x gtceu:plutonium_nugget", "4x gtceu:plutonium_241_nugget", "3x kubejs:americium_243", GTValues.IV)
    decompdepleted("leu_235", "kubejs:neptunium_237", "40x gtceu:uranium_nugget", "8x gtceu:plutonium_nugget", "8x gtceu:plutonium_241_nugget", GTValues.IV)
    decompdepleted("len_236", "kubejs:neptunium_237", "4x kubejs:plutonium_242", "kubejs:americium_242", "3x kubejs:americium_243", GTValues.LuV)
    decompdepleted("lep_239", "3x kubejs:plutonium_242", "kubejs:curium_243", "8x gtceu:plutonium_nugget", "3x kubejs:curium_246", GTValues.LuV)
    decompdepleted("lep_241", "kubejs:plutonium_242", "kubejs:plutonium_242", "kubejs:americium_243", "6x kubejs:curium_246", GTValues.LuV)
    decompdepleted("lea_242", "kubejs:curium_243", "kubejs:curium_245", "5x kubejs:curium_246", "kubejs:curium_247", GTValues.LuV)
    decompdepleted("lecm_243", "4x kubejs:curium_246", "2x kubejs:berkelium_247", "kubejs:berkelium_248", "kubejs:californium_249", GTValues.ZPM)
    decompdepleted("lecm_245", "5x kubejs:berkelium_247", "kubejs:berkelium_248", "kubejs:californium_249", "2x kubejs:californium_252", GTValues.ZPM)
    decompdepleted("lecm_247", "3x kubejs:berkelium_247", "kubejs:berkelium_248", "kubejs:californium_251", "4x kubejs:californium_252", GTValues.ZPM)
    decompdepleted("leb_248", "kubejs:californium_249", "kubejs:californium_251", "3x kubejs:californium_252", "3x kubejs:californium_252", GTValues.ZPM)
    decompdepleted("lecf_249", "2x kubejs:californium_250", "kubejs:californium_251", "2x kubejs:californium_252", "2x gtceu:actinium_nugget", GTValues.ZPM)
    decompdepleted("lecf_251", "kubejs:californium_251", "2x kubejs:californium_252", "2x kubejs:californium_252", "2x gtceu:actinium_nugget", GTValues.ZPM)

    event.recipes.gtceu.thermal_centrifuge("thoriumdecomp")
        .itemInputs("gtceu:thorium_dust")
        .itemOutputs("kubejs:thorium_232")
        .duration(1100)
        .EUt(48)

    // Fuel Crafting
    event.shaped("kubejs:tbu_fuel", ["AAA", "AAA", "AAA"], { A: "kubejs:thorium_232" })
    event.shaped("kubejs:leu_233", ["ABB", "BBB", "BBB"], { A: "kubejs:uranium_233", B: "gtceu:uranium_ingot" })
    event.shaped("kubejs:leu_235", ["ABB", "BBB", "BBB"], { A: "gtceu:uranium_235_ingot", B: "gtceu:uranium_ingot" })
    event.shaped("kubejs:len_236", ["ABB", "BBB", "BBB"], { A: "kubejs:neptunium_236", B: "kubejs:neptunium_237" })
    event.shaped("kubejs:lep_239", ["ABB", "BBB", "BBB"], { A: "gtceu:plutonium_ingot", B: "kubejs:plutonium_242" })
    event.shaped("kubejs:lep_241", ["ABB", "BBB", "BBB"], { A: "gtceu:plutonium_241_ingot", B: "kubejs:plutonium_242" })
    event.shaped("kubejs:lea_242", ["ABB", "BBB", "BBB"], { A: "kubejs:americium_242", B: "kubejs:americium_243" })
    event.shaped("kubejs:lecm_243", ["ABB", "BBB", "BBB"], { A: "kubejs:curium_243", B: "kubejs:curium_246" })
    event.shaped("kubejs:lecm_245", ["ABB", "BBB", "BBB"], { A: "kubejs:curium_245", B: "kubejs:curium_246" })
    event.shaped("kubejs:lecm_247", ["ABB", "BBB", "BBB"], { A: "kubejs:curium_247", B: "kubejs:curium_246" })
    event.shaped("kubejs:leb_248", ["ABB", "BBB", "BBB"], { A: "kubejs:berkelium_248", B: "kubejs:berkelium_247" })
    event.shaped("kubejs:lecf_249", ["ABB", "BBB", "BBB"], { A: "kubejs:californium_249", B: "kubejs:californium_252" })
    event.shaped("kubejs:lecf_251", ["ABB", "BBB", "BBB"], { A: "kubejs:californium_251", B: "kubejs:californium_252" })

    // Fission Recipes
    function fissionRecipe(fuel, duration, EUt) {
        event.recipes.gtceu.fission_reactor(fuel)
            .itemInputs("kubejs:" + fuel)
            .itemOutputs("kubejs:depleted_" + fuel)
            .duration(duration)
            .EUt(EUt)
    }

    // Temp values, obv
    fissionRecipe("tbu_fuel", 150, "-576");
    fissionRecipe("leu_233", 150, "-576");
    fissionRecipe("leu_235", 150, "-576");
    fissionRecipe("len_236", 150, "-576");
    fissionRecipe("lep_239", 150, "-576");
    fissionRecipe("lep_241", 150, "-576");
    fissionRecipe("lea_242", 150, "-576");
    fissionRecipe("lecm_243", 150, "-576");
    fissionRecipe("lecm_245", 150, "-576");
    fissionRecipe("lecm_247", 150, "-576");
    fissionRecipe("leb_248", 150, "-576");
    fissionRecipe("lecf_249", 150, "-576");
    fissionRecipe("lecf_251", 150, "-576");
})
