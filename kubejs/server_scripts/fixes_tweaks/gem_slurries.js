/**
 * GTNH-inspired recipes
 * for easier processing of some gem ores
 * as compared to electrolysis or GTM's default slurry recipes.
 *
 * This was motivated by gems being time-consuming to process
 * with little benefit in return.
 *
 * They are especially useful for gathering Chromium, Manganese, and earlygame Vanadium.
 */

ServerEvents.recipes(event => {

    const gems = [
        // Corundums
        {
            name: "sapphire",
            products: [
                {name: "aluminium", chance: 9500},
                {name: "magnesium", chance: 1000},
                {name: "rutile", chance: 1000},
                {name: "iron", chance: 1500},
                {name: "vanadium", chance: 1000},
            ]
        },
        {
            name: "green_sapphire",
            products: [
                {name: "aluminium", chance: 9500},
                {name: "beryllium", chance: 800},
                {name: "rutile", chance: 800},
                {name: "iron", chance: 2000},
                {name: "vanadium", chance: 1000},
            ]
        },
        {
            name: "ruby",
            products: [
                {name: "aluminium", chance: 5000},
                {name: "chromium", chance: 6666},
                {name: "rutile", chance: 800},
                {name: "iron", chance: 1200},
                {name: "vanadium", chance: 500},
            ]
        },
        // Beryl
        {
            name: "emerald",
            products: [
                {name: "aluminium", chance: 6666},
                {name: "beryllium", chance: 3333},
                {name: "thorium", chance: 800},
                {name: "vanadium", chance: 500},
            ]
        },
        // Garnets
        {
            name: "pyrope",
            products: [
                {name: "aluminium", chance: 5000},
                {name: "magnesium", chance: 9500},
                {name: "silver", chance: 1000},
                {name: "chromium", chance: 1000},
                {name: "manganese", chance: 1000},
            ]
        },
        {
            name: "almandine",
            products: [
                {name: "aluminium", chance: 9500},
                {name: "iron", chance: 5000},
                {name: "gold", chance: 1000},
                {name: "rutile", chance: 800},
                {name: "vanadium", chance: 500},
            ]
        },
        {
            name: "spessartine",
            products: [
                {name: "aluminium", chance: 5000},
                {name: "manganese", chance: 9500},
                {name: "calcite", chance: 1500},
                {name: "magnesium", chance: 1500},
                {name: "tantalite", chance: 500},
            ]
        },
        {
            name: "grossular",
            products: [
                {name: "calcium", chance: 9500},
                {name: "aluminium", chance: 5000},
                {name: "chromium", chance: 1000},
                {name: "calcite", chance: 1500},
                {name: "vanadium", chance: 500},
            ]
        },
        // Mixed Garnets
        {
            name: "red_garnet",
            products: [
                {name: "aluminium", chance: 5000},
                {name: "magnesium", chance: 1000},
                {name: "iron", chance: 1500},
                {name: "manganese", chance: 2500},
            ]
        },
        {
            name: "yellow_garnet",
            products: [
                {name: "calcium", chance: 5000},
                {name: "iron", chance: 1500},
                {name: "aluminium", chance: 2500},
                {name: "chromium", chance: 1000},
            ]
        },
        // Ad Astra gem ores
        {
            name: "anorthite",
            products: [
                {name: "aluminium", chance: 5000},
                {name: "sodium", chance: 9500},
                {name: "calcium", chance: 2500},
                {name: "chromium", chance: 1500},
                {name: "vanadium", chance: 500},
            ]
        },
        {
            name: "titanite",
            products: [
                {name: "rutile", chance: 9500},
                {name: "calcium", chance: 5000},
                {name: "iron", chance: 1500},
                {name: "rare_earth", chance: 800},
                {name: "vanadium", chance: 500},
            ]
        },
        // Other
        {name: "malachite"},
        {name: "olivine"}
    ]

    gems.forEach(gem => {
        event.recipes.gtceu.mixer(`${gem.name}_slurry_from_crushed_${gem.name}`)
            .itemInputs(`2x gtceu:crushed_${gem.name}_ore`)
            .itemInputs("gtceu:tiny_sodium_hydroxide_dust")
            .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:distilled_water 500")
            .outputFluids(`gtceu:${gem.name}_slurry 3000`)
            .duration(5 * 20)
            .EUt(100)

        event.recipes.gtceu.mixer(`${gem.name}_slurry_from_washed_${gem.name}`)
            .itemInputs(`2x gtceu:purified_${gem.name}_ore`)
            .itemInputs("gtceu:tiny_sodium_hydroxide_dust")
            .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:distilled_water 750")
            .outputFluids(`gtceu:${gem.name}_slurry 3000`)
            .duration(5 * 20)
            .EUt(100)

        // Autogenerated centrifuge recipes for every gem except those in the "other" category
        if(gem.products != null) {
            let centrifuge_recipe = event.recipes.gtceu.centrifuge(`${gem.name}_slurry_centrifuging`)
                .inputFluids(`gtceu:${gem.name}_slurry 3000`)
                .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
                .duration(8 * 20)
                .EUt(GTValues.VHA[GTValues.MV])

            gem.products.forEach(product => {
                centrifuge_recipe.chancedOutput(`gtceu:${product.name}_dust`, product.chance, 0)
            })
        }
    })

    // Other centrifuging recipes
    event.recipes.gtceu.centrifuge("malachite_slurry_centrifuging")
        .inputFluids("gtceu:malachite_slurry 3000")
        .itemOutputs("2x gtceu:copper_dust")
        .chancedOutput("gtceu:calcite_dust", 6000, 0)
        .chancedOutput("gtceu:iron_dust", 1500, 0)
        .chancedOutput("gtceu:phosphate_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.centrifuge("olivine_slurry_centrifuging")
        .inputFluids("gtceu:olivine_slurry 3000")
        .itemOutputs("gtceu:magnesium_dust", "gtceu:iron_dust")
        .chancedOutput("gtceu:calcium_dust", 1500, 0)
        .chancedOutput("gtceu:aluminium_dust", 1000, 0)
        .chancedOutput("gtceu:nickel_dust", 1500, 0)
        .chancedOutput("gtceu:manganese_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.MV])
})
