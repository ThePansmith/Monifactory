/**
 * Maceration recipes for Ad Astra planetary rock dusts
 * Makes planetary rock dusts drop from ores
 * Centrifuge recipes for converting planetary rock dusts into valuable resources
 * Maceration recipes for converting other blocks found on planets to resources
 */

ServerEvents.recipes(event => {
    // Regolith dusts
    let regolithDustResources = [
        ["moon", ["moon_sand"], "diamond"],
        ["mars", ["mars_sand"], "monazite"],
        ["venus", ["venus_sandstone", "venus_sandstone_bricks", "cracked_venus_sandstone_bricks", "venus_sand"], "olivine"],
        ["mercury", [], "cinnabar"],
        ["glacio", [], "sodalite"]
    ]

    regolithDustResources.forEach((planetResources, fluxCount) => {
        let stone_variants = [
            `${planetResources[0]}_stone`,
            `${planetResources[0]}_cobblestone`,
            `${planetResources[0]}_stone_bricks`,
            `cracked_${planetResources[0]}_stone_bricks`,
            `chiseled_${planetResources[0]}_stone_bricks`,
            `polished_${planetResources[0]}_stone`,
            `${planetResources[0]}_pillar`,
            `${planetResources[0]}_stone_brick_wall`
        ]

        // Planetary dust maceration recipe: stone variants
        stone_variants.forEach(variant => {
            event.recipes.gtceu.macerator(`macerate_${variant}`)
                .itemInputs(`ad_astra:${variant}`)
                .itemOutputs(`kubejs:${planetResources[0]}_dust`)
                .duration(200)
                .EUt(GTValues.VHA[GTValues.HV])
        })

        // Planetary dust maceration recipe: others
        planetResources[1].forEach(variant => {
            event.recipes.gtceu.macerator(`macerate_${variant}`)
                .itemInputs(`ad_astra:${variant}`)
                .itemOutputs(`kubejs:${planetResources[0]}_dust`)
                .duration(200)
                .EUt(GTValues.VHA[GTValues.HV])
        })

        // Recipes to make quantum flux from planets' rock dusts
        event.shaped(`${fluxCount + 1}x kubejs:quantum_flux`, [
            " B ",
            "BAB",
            " B "
        ], {
            A: `#forge:gems/${planetResources[2]}`,
            B: `kubejs:${planetResources[0]}_dust`
        }).id(`kubejs:quantum_flux_from_${planetResources[0]}_dust`)

        event.recipes.gtceu.mixer(`quantum_flux_from_${planetResources[0]}_dust`)
            .itemInputs(`4x kubejs:${planetResources[0]}_dust`, `#forge:gems/${planetResources[2]}`)
            .itemOutputs(`${fluxCount + 1}x kubejs:quantum_flux`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.HV])
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
        .chancedOutput("gtceu:ilmenite_dust", 6000, 0)
        .chancedOutput("gtceu:chromite_dust", 4000, 0)
        .chancedOutput("gtceu:pyrolusite_dust", 3500, 0)
        .chancedOutput("gtceu:wulfenite_dust", 2200, 70)
        .chancedOutput("gtceu:tungstate_dust", 1700, 110)
        .duration(1000)
        .EUt(GTValues.VA[GTValues.IV])

    // Maceration recycling for other extraterrestrial materials
    event.recipes.gtceu.macerator("macerate_conglomerate")
        .itemInputs("ad_astra:conglomerate")
        .chancedOutput("gtceu:mirabilite_dust", 2500, 0)
        .chancedOutput("gtceu:redrock_dust", 2500, 0)
        .chancedOutput("gtceu:biotite_dust", 2500, 0)
        .chancedOutput("gtceu:gypsum_dust", 2500, 0)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.MV])

    event.recipes.gtceu.macerator("macerate_infernal_spire")
        .itemInputs("ad_astra:infernal_spire_block")
        .chancedOutput("minecraft:blaze_powder", 5000, 0)
        .chancedOutput("gtceu:bauxite_dust", 2000, 200)
        .chancedOutput("gtceu:scheelite_dust", 1500, 150)
        .chancedOutput("gtceu:sulfur_dust", 500, 100)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.IV])

    event.recipes.gtceu.macerator("macerate_permafrost")
        .itemInputs("ad_astra:permafrost")
        .chancedOutput("gtceu:ice_dust", 5000, 0)
        .chancedOutput("minecraft:dirt", 5000, 0)
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ULV])

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
