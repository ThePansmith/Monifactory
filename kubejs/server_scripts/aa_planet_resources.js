/**
 * Maceration recipes for Ad Astra planetary rock dusts
 * Makes planetary rock dusts drop from ores
 * Centrifuge recipes for converting planetary rock dusts into valuable resources
 */

ServerEvents.recipes(event => {
    // Regolith dusts
    let regolithDustResources = [
        [["moon_sand", "moon_cobblestone", "moon_stone"], "moon_dust", "minecraft:diamond"],
        [["mars_sand", "mars_cobblestone", "mars_stone"], "mars_dust", "gtceu:monazite_gem"],
        [["venus_sand", "venus_cobblestone", "venus_stone"], "venus_dust", "gtceu:olivine_gem"],
        [["mercury_cobblestone", "mercury_stone"], "mercury_dust", "gtceu:cinnabar_gem"],
        [["glacio_cobblestone", "glacio_stone"], "glacio_dust", "gtceu:sodalite_gem"]
    ]

    regolithDustResources.forEach((planetResources, fluxCount) => {
        // Planetary dust maceration recipe
        planetResources[0].forEach(rocksToMacerate => {
            event.recipes.gtceu.macerator(rocksToMacerate)
                .itemInputs(`ad_astra:${rocksToMacerate}`)
                .itemOutputs(`kubejs:${planetResources[1]}`)
                .duration(200)
                .EUt(GTValues.VHA[GTValues.HV])
        })

        // Recipes to make quantum flux from planets' rock dusts
        event.shaped(`${fluxCount + 1}x kubejs:quantum_flux`, [
            " B ",
            "BAB",
            " B "
        ], {
            A: planetResources[2],
            B: `kubejs:${planetResources[1]}`
        }).id(`kubejs:quantum_flux_from_${planetResources[1]}`)
    })

    // Rock dust centrifuging
    event.recipes.gtceu.centrifuge("moon_dust_centrifuging")
        .itemInputs("kubejs:moon_dust")
        .chancedOutput("gtceu:stone_dust", 2500, 0)
        .chancedOutput("gtceu:glass_dust", 2000, 0)
        .chancedOutput("gtceu:bauxite_dust", 2300, 0)
        .chancedOutput("gtceu:quicklime_dust", 1400, 0)
        .chancedOutput("gtceu:magnesia_dust", 1000, 50)
        .chancedOutput("gtceu:extraterrestrial_metal_mixture_dust", 700, 70)
        .outputFluids(Fluid.of("gtceu:deuterium", 100))
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.centrifuge("mars_dust_centrifuging")
        .itemInputs("kubejs:mars_dust")
        .chancedOutput("gtceu:silicon_dioxide_dust", 4000, 0)
        .chancedOutput("gtceu:pyrope_dust", 2300, 0)
        .chancedOutput("gtceu:hematite_dust", 2000, 0)
        .chancedOutput("gtceu:soapstone_dust", 900, 90)
        .chancedOutput("gtceu:calcium_perchlorate_dust", 700, 0)
        .chancedOutput("gtceu:extraterrestrial_metal_mixture_dust", 825, 80)
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge("venus_dust_centrifuging")
        .itemInputs("kubejs:venus_dust")
        .chancedOutput("gtceu:quartz_sand_dust", 3000, 0)
        .chancedOutput("gtceu:pyrite_dust", 2600, 260)
        .chancedOutput("gtceu:calcium_carbonate_dust", 1800, 0)
        .chancedOutput("gtceu:apatite_dust", 1400, 140)
        .chancedOutput("gtceu:garnierite_dust", 1100, 110)
        .chancedOutput("gtceu:extraterrestrial_metal_mixture_dust", 1000, 80)
        .outputFluids(Fluid.of("gtceu:sulfur_dioxide", 100))
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.centrifuge("mercury_dust_centrifuging")
        .itemInputs("kubejs:mercury_dust")
        .chancedOutput("gtceu:stone_dust", 2900, 0)
        .chancedOutput("gtceu:basaltic_mineral_sand_dust", 2700, 0)
        .chancedOutput("gtceu:garnet_sand_dust", 2000, 0)
        .chancedOutput("gtceu:fullers_earth_dust", 1650, 0)
        .chancedOutput("minecraft:redstone", 1100, 130)
        .chancedOutput("gtceu:extraterrestrial_metal_mixture_dust", 1000, 80)
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.centrifuge("glacio_dust_centrifuging")
        .itemInputs("kubejs:glacio_dust")
        .chancedOutput("gtceu:granitic_mineral_sand_dust", 4500, 0)
        .chancedOutput("gtceu:kyanite_dust", 3750, 0)
        .chancedOutput("gtceu:alunite_dust", 2500, 0)
        .chancedOutput("gtceu:oilsands_dust", 1750, 175)
        .chancedOutput("gtceu:bastnasite_dust", 1350, 130)
        .chancedOutput("gtceu:extraterrestrial_metal_mixture_dust", 1200, 80)
        .duration(200)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.centrifuge("extraterrestrial_metal_mixture_centrifuging")
        .itemInputs("gtceu:extraterrestrial_metal_mixture_dust")
        .chancedOutput("gtceu:ilmenite_dust", 4000, 0)
        .chancedOutput("gtceu:chromite_dust", 2500, 0)
        .chancedOutput("gtceu:pyrolusite_dust", 2000, 0)
        .chancedOutput("gtceu:wulfenite_dust", 1500, 70)
        .chancedOutput("gtceu:tungstate_dust", 1100, 110)
        .duration(1000)
        .EUt(GTValues.VA[GTValues.IV])

    // Dilithium
    event.recipes.gtceu.autoclave("dilithium_helium")
        .itemInputs("4x gtceu:dilithium_dust")
        .inputFluids("gtceu:helium 1000")
        .itemOutputs("4x gtceu:dilithium_gem")
        .duration(400)
        .EUt(110)
})

// Add regolith dusts to ores' loot pool
LootJS.modifiers((event) => {
    const moonDust = LootEntry.of("kubejs:moon_dust").when(c => c.randomChance(0.50))
    const moonDustFortune = LootEntry.of("kubejs:moon_dust")
        .limitCount(0, 2)
        .when(c => c.randomTableBonus("minecraft:fortune", [0, 0.60, 1.2, 2.0]))
        .applyOreBonus("minecraft:fortune")

    const marsDust = LootEntry.of("kubejs:mars_dust").when(c => c.randomChance(0.50))
    const marsDustFortune = LootEntry.of("kubejs:mars_dust")
        .limitCount(0, 2)
        .when(c => c.randomTableBonus("minecraft:fortune", [0, 0.60, 1.2, 2.0]))
        .applyOreBonus("minecraft:fortune")

    const venusDust = LootEntry.of("kubejs:venus_dust").when(c => c.randomChance(0.50))
    const venusDustFortune = LootEntry.of("kubejs:venus_dust")
        .limitCount(0, 2)
        .when(c => c.randomTableBonus("minecraft:fortune", [0, 0.60, 1.2, 2.0]))
        .applyOreBonus("minecraft:fortune")

    const mercuryDust = LootEntry.of("kubejs:mercury_dust").when(c => c.randomChance(0.50))
    const mercuryDustFortune = LootEntry.of("kubejs:mercury_dust")
        .limitCount(0, 2)
        .when(c => c.randomTableBonus("minecraft:fortune", [0, 0.60, 1.2, 2.0]))
        .applyOreBonus("minecraft:fortune")

    const glacioDust = LootEntry.of("kubejs:glacio_dust").when(c => c.randomChance(0.50))
    const glacioDustFortune = LootEntry.of("kubejs:glacio_dust")
        .limitCount(0, 2)
        .when(c => c.randomTableBonus("minecraft:fortune", [0, 0.60, 1.2, 2.0]))
        .applyOreBonus("minecraft:fortune")

    event.addBlockLootModifier(/.*moon_.*_ore$/).addSequenceLoot(moonDust, moonDustFortune);
    event.addBlockLootModifier(/.*mars_.*_ore$/).addSequenceLoot(marsDust, marsDustFortune);
    event.addBlockLootModifier(/.*venus_.*_ore$/).addSequenceLoot(venusDust, venusDustFortune);
    event.addBlockLootModifier(/.*mercury_.*_ore$/).addSequenceLoot(mercuryDust, mercuryDustFortune);
    event.addBlockLootModifier(/.*glacio_.*_ore$/).addSequenceLoot(glacioDust, glacioDustFortune);
});
