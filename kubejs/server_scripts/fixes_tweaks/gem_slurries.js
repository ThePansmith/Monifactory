/**
 * GTNH-inspired recipes
 * for easier processing of some gem ores
 * as compared to electrolysis or GTM's default slurry recipes.
 *
 * This was motivated by gems being time-consuming to process
 * with little benefit in return.
 */

ServerEvents.recipes(event => {

    const gems = [
        // Corundums
        "sapphire",
        "green_sapphire",
        "ruby",
        // Garnets
        "pyrope",
        "almandine",
        "spessartine",
        "grossular",
        // Mixed Garnets
        "red_garnet",
        "yellow_garnet",
        // Other
        "malachite",
        "olivine"
    ]

    gems.forEach(gem => {
        event.recipes.gtceu.mixer(`${gem}_slurry_from_crushed_${gem}`)
            .itemInputs(`2x gtceu:crushed_${gem}_ore`)
            .itemInputs("gtceu:tiny_sodium_hydroxide_dust")
            .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:distilled_water 500")
            .outputFluids(`gtceu:${gem}_slurry 3000`)
            .duration(14 * 20)
            .EUt(100)

        event.recipes.gtceu.mixer(`${gem}_slurry_from_washed_${gem}`)
            .itemInputs(`2x gtceu:purified_${gem}_ore`)
            .itemInputs("gtceu:tiny_sodium_hydroxide_dust")
            .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:distilled_water 500")
            .outputFluids(`gtceu:${gem}_slurry 3000`)
            .duration(14 * 20)
            .EUt(100)
    })

    // Corundums
    event.recipes.gtceu.centrifuge("sapphire_slurry_centrifuging")
        .inputFluids("gtceu:sapphire_slurry 3000")
        .itemOutputs("2x gtceu:aluminium_dust")
        .chancedOutput("gtceu:rutile_dust", 1000, 0)
        .chancedOutput("gtceu:iron_dust", 1500, 0)
        .chancedOutput("gtceu:vanadium_dust", 1000, 0)
        .chancedOutput("gtceu:magnesium_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.centrifuge("green_sapphire_slurry_centrifuging")
        .inputFluids("gtceu:green_sapphire_slurry 3000")
        .itemOutputs("2x gtceu:aluminium_dust")
        .chancedOutput("gtceu:beryllium_dust", 1000, 0)
        .chancedOutput("gtceu:rutile_dust", 1000, 0)
        .chancedOutput("gtceu:iron_dust", 1500, 0)
        .chancedOutput("gtceu:vanadium_dust", 1000, 0)
        .chancedOutput("gtceu:manganese_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.centrifuge("ruby_slurry_centrifuging")
        .inputFluids("gtceu:ruby_slurry 3000")
        .itemOutputs("2x gtceu:aluminium_dust", "gtceu:chromium_dust")
        .chancedOutput("gtceu:rutile_dust", 1000, 0)
        .chancedOutput("gtceu:iron_dust", 1500, 0)
        .chancedOutput("gtceu:vanadium_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])

    // Garnets
    event.recipes.gtceu.centrifuge("pyrope_slurry_centrifuging")
        .inputFluids("gtceu:pyrope_slurry 3000")
        .itemOutputs("gtceu:aluminium_dust", "gtceu:magnesium_dust")
        .chancedOutput("gtceu:silver_dust", 1500, 0)
        .chancedOutput("gtceu:chromium_dust", 1000, 0)
        .chancedOutput("gtceu:manganese_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.centrifuge("almandine_slurry_centrifuging")
        .inputFluids("gtceu:almandine_slurry 3000")
        .itemOutputs("gtceu:aluminium_dust", "gtceu:iron_dust")
        .chancedOutput("gtceu:gold_dust", 1500, 0)
        .chancedOutput("gtceu:vanadium_dust", 1000, 0)
        .chancedOutput("gtceu:rutile_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.centrifuge("spessartine_slurry_centrifuging")
        .inputFluids("gtceu:spessartine_slurry 3000")
        .itemOutputs("gtceu:aluminium_dust", "gtceu:manganese_dust")
        .chancedOutput("gtceu:calcite_dust", 1500, 0)
        .chancedOutput("gtceu:magnesium_dust", 1500, 0)
        .chancedOutput("gtceu:tantalite_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.centrifuge("grossular_slurry_centrifuging")
        .inputFluids("gtceu:grossular_slurry 3000")
        .itemOutputs("gtceu:calcium_dust", "gtceu:aluminium_dust")
        .chancedOutput("gtceu:chromium_dust", 1500, 0)
        .chancedOutput("gtceu:calcite_dust", 1500, 0)
        .chancedOutput("gtceu:vanadium_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])

    // Mixed Garnets
    event.recipes.gtceu.centrifuge("red_garnet_slurry_centrifuging")
        .inputFluids("gtceu:red_garnet_slurry 6000")
        .itemOutputs("2x gtceu:aluminium_dust", "gtceu:magnesium_dust", "gtceu:iron_dust", "gtceu:manganese_dust")
        .outputFluids("gtceu:diluted_hydrochloric_acid 3800")
        .duration(16 * 20)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.centrifuge("yellow_garnet_slurry_centrifuging")
        .inputFluids("gtceu:yellow_garnet_slurry 6000")
        .itemOutputs("2x gtceu:calcium_dust", "gtceu:iron_dust", "gtceu:aluminium_dust", "gtceu:chromium_dust")
        .outputFluids("gtceu:diluted_hydrochloric_acid 3800")
        .duration(16 * 20)
        .EUt(GTValues.VHA[GTValues.MV])

    // Other
    event.recipes.gtceu.centrifuge("malachite_slurry_centrifuging")
        .inputFluids("gtceu:malachite_slurry 3000")
        .itemOutputs("2x gtceu:copper_dust")
        .chancedOutput("gtceu:calcite_dust", 1500, 0)
        .chancedOutput("gtceu:iron_dust", 1500, 0)
        .chancedOutput("gtceu:phosphate_dust", 1500, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.centrifuge("olivine_slurry_centrifuging")
        .inputFluids("gtceu:olivine_slurry 3000")
        .itemOutputs("gtceu:magnesium_dust", "gtceu:iron_dust")
        .chancedOutput("gtceu:calcium_dust", 1500, 0)
        .chancedOutput("gtceu:aluminium_dust", 1000, 0)
        .chancedOutput("gtceu:nickel_dust", 1500, 0)
        .chancedOutput("gtceu:chromium_dust", 500, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])
})
