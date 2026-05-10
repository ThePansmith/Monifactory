/**
 * GTNH-inspired recipes
 * for easier processing of gem-like ores
 * as compared to electrolysis or GTM's default slurry recipes
 */

ServerEvents.recipes(event => {
    const gems = [
        "sapphire",
        "green_sapphire",
        "ruby"
    ]

    const oreproc_forms = [
        ["crushed", "ore"],
        ["purified", "ore"],
        ["impure", "dust"],
        ["pure", "dust"]
    ]

    gems.forEach(gem => {
        event.remove({ id: `gtceu:mixer/${gem}_slurry_from_crushed_${gem}`})
        event.remove({ id: `gtceu:mixer/${gem}_slurry_from_washed_${gem}`})
        oreproc_forms.forEach(OreprocMidproduct => {
            event.recipes.gtceu.mixer(`${gem}_slurry_from_${OreprocMidproduct[0]}`)
                .itemInputs(`2x gtceu:${OreprocMidproduct[0]}_${gem}_${OreprocMidproduct[1]}`)
                .itemInputs("gtceu:tiny_sodium_hydroxide_dust")
                .inputFluids("gtceu:hydrochloric_acid 1000", "gtceu:distilled_water 500")
                .outputFluids(`gtceu:${gem}_slurry 3000`)
                .duration(14 * 20)
                .EUt(100)
        })
    })

    event.recipes.gtceu.centrifuge("sapphire_slurry_centrifuging")
        .inputFluids("gtceu:sapphire_slurry 3000")
        .itemOutputs("2x gtceu:aluminium_dust")
        .chancedOutput("gtceu:titanium_dust", 800, 0)
        .chancedOutput("gtceu:iron_dust", 1500, 0)
        .chancedOutput("gtceu:vanadium_dust", 1000, 0)
        .chancedOutput("gtceu:magnesium_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.centrifuge("green_sapphire_slurry_centrifuging")
        .inputFluids("gtceu:green_sapphire_slurry 3000")
        .itemOutputs("2x gtceu:aluminium_dust")
        .chancedOutput("gtceu:beryllium_dust", 1000, 0)
        .chancedOutput("gtceu:titanium_dust", 800, 0)
        .chancedOutput("gtceu:iron_dust", 1500, 0)
        .chancedOutput("gtceu:vanadium_dust", 1000, 0)
        .chancedOutput("gtceu:manganese_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.centrifuge("ruby_slurry_centrifuging")
        .inputFluids("gtceu:ruby_slurry 3000")
        .itemOutputs("2x gtceu:aluminium_dust", "gtceu:chromium_dust")
        .chancedOutput("gtceu:titanium_dust", 800, 0)
        .chancedOutput("gtceu:iron_dust", 1500, 0)
        .chancedOutput("gtceu:vanadium_dust", 1000, 0)
        .outputFluids("gtceu:diluted_hydrochloric_acid 1900")
        .duration(8 * 20)
        .EUt(GTValues.VHA[GTValues.HV])
})
