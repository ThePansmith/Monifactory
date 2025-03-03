/**
 * Makes Ad Astra rock dusts drop from ores
 * Also centrifuge recipes for dusts
 */

ServerEvents.recipes(event => {
    // Regolith dusts
    let regolithDustResources = [
        [["moon_sand", "moon_cobblestone", "moon_stone"], "moon_dust", "minecraft:diamond"],
        [["mars_sand", "mars_cobblestone", "mars_stone"], "mars_dust", "gtceu:monazite_gem"],
        [["venus_sand", "venus_cobblestone", "venus_stone"], "venus_dust", "gtceu:olivine_gem"],
        [["mercury_cobblestone", "mercury_stone"], "mercury_dust", "gtceu:cinnabar_gem"]
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
        })
    })

    // Rock dust centrifuging
    event.recipes.gtceu.centrifuge("moon_dust_centrifuging")
        .itemInputs("kubejs:moon_dust")
        .chancedOutput("gtceu:small_stone_dust", 2500, 0)
        .chancedOutput("gtceu:small_aluminium_dust", 1700, 20)
        .chancedOutput("gtceu:small_quicklime_dust", 950, 15)
        .chancedOutput("gtceu:small_glass_dust", 700, 30)
        .chancedOutput("gtceu:small_pyrolusite_dust", 700, 10)
        .chancedOutput("gtceu:small_iron_dust", 550, 5)
        .outputFluids(Fluid.of("gtceu:deuterium", 100))
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.centrifuge("mars_dust_centrifuging")
        .itemInputs("kubejs:mars_dust")
        .chancedOutput("gtceu:small_stone_dust", 2500, 0)
        .chancedOutput("gtceu:small_hematite_dust", 1500, 20)
        .chancedOutput("gtceu:small_calcium_perchlorate_dust", 100, 10)
        .chancedOutput("gtceu:small_ice_dust", 300, 35)
        .chancedOutput("gtceu:small_silicon_dioxide_dust", 3000, 50)
        .outputFluids(Fluid.of("gtceu:carbon_dioxide", 150))
        .duration(200)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.centrifuge("venus_dust_centrifuging")
        .itemInputs("kubejs:venus_dust")
        .chancedOutput("gtceu:small_basaltic_mineral_sand_dust", 2500, 0)
        .chancedOutput("gtceu:small_olivine_dust", 700, 15)
        .chancedOutput("gtceu:small_biotite_dust", 950, 25)
        .chancedOutput("gtceu:small_silicon_dioxide_dust", 3000, 50)
        .chancedOutput("gtceu:small_garnierite_dust", 550, 10)
        .outputFluids(Fluid.of("gtceu:sulfur_dioxide", 100))
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.centrifuge("mercury_dust_centrifuging")
        .itemInputs("kubejs:mercury_dust")
        .chancedOutput("gtceu:small_stone_dust", 2500, 0)
        .chancedOutput("gtceu:small_carbon_dust", 1000, 25)
        .chancedOutput("gtceu:small_sulfur_dust", 750, 15)
        .chancedOutput("gtceu:small_magnesium_dust", 550, 5)
        .chancedOutput("gtceu:small_ilmenite_dust", 100, 10)
        .chancedOutput("gtceu:small_silicon_dioxide_dust", 2750, 50)
        .outputFluids(Fluid.of("gtceu:sodium_persulfate", 50))
        .duration(200)
        .EUt(GTValues.VA[GTValues.EV])


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

    event.addBlockLootModifier(/.*moon_.*_ore$/).addSequenceLoot(moonDust, moonDustFortune);
    event.addBlockLootModifier(/.*mars_.*_ore$/).addSequenceLoot(marsDust, marsDustFortune);
    event.addBlockLootModifier(/.*venus_.*_ore$/).addSequenceLoot(venusDust, venusDustFortune);
    event.addBlockLootModifier(/.*mercury_.*_ore$/).addSequenceLoot(mercuryDust, mercuryDustFortune);
});
