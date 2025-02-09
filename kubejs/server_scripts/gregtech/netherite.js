/**
 * Netherite processing line
 */

ServerEvents.recipes(event => {


    // Omnic Acid
    event.recipes.gtceu.large_chemical_reactor('omnic_acid')
        .itemInputs('5x gtceu:carbon_dust', '4x kubejs:mote_of_omnium')
        .inputFluids(Fluid.of('water', 3000))
        .itemOutputs('gtceu:omnic_acid_dust')
        .outputFluids(Fluid.of('gtceu:hydrogen', 2000))
        .duration(300)
        .EUt(65520)

    // Scrapline
    event.recipes.gtceu.macerator('ancient_debris_crushing')
        .itemInputs('minecraft:ancient_debris')
        .itemOutputs('2x kubejs:crushed_ancient_debris')
        .chancedOutput('kubejs:crushed_ancient_debris', 1000, 500)
        .itemOutputs('gtceu:obsidian_dust')
        .duration(300)
        .EUt(32)

    event.recipes.gtceu.chemical_reactor('ancient_debris_purifying')
        .itemInputs('kubejs:crushed_ancient_debris', 'gtceu:omnic_acid_dust')
        .inputFluids(Fluid.of('water', 2000))
        .itemOutputs('kubejs:purified_ancient_debris')
        .chancedOutput('gtceu:platinum_dust', 3300, 0)
        .duration(300)
        .EUt(16380)

    event.recipes.gtceu.thermal_centrifuge('ancient_debris_refining')
        .itemInputs('kubejs:purified_ancient_debris')
        .itemOutputs('kubejs:refined_ancient_debris')
        .chancedOutput('gtceu:iridium_dust', 3300, 0)
        .itemOutputs('gtceu:obsidian_dust')
        .duration(300)
        .EUt(16380)

    event.recipes.gtceu.macerator('ancient_debris_refined_crushing')
        .itemInputs('kubejs:refined_ancient_debris')
        .itemOutputs('kubejs:impure_ancient_debris_dust')
        .chancedOutput('gtceu:osmium_dust', 3300, 0)
        .itemOutputs('gtceu:obsidian_dust')
        .duration(300)
        .EUt(16380)

    event.recipes.gtceu.centrifuge('ancient_debris_dust_purifying')
        .itemInputs('kubejs:impure_ancient_debris_dust')
        .itemOutputs('kubejs:purified_ancient_debris_dust', 'gtceu:obsidian_dust')
        .duration(300)
        .EUt(16380)

    event.recipes.gtceu.arc_furnace('ancient_debris_arc_smelting')
        .itemInputs('kubejs:purified_ancient_debris_dust')
        .inputFluids(Fluid.of('gtceu:oxygen', 1200))
        .chancedOutput('gtceu:palladium_dust', 1400, 850)
        .itemOutputs('kubejs:processed_ancient_debris_dust')
        .duration(300)
        .EUt(16380)

    event.recipes.gtceu.electric_blast_furnace('netherite_scrap_blasting')
        .itemInputs('kubejs:processed_ancient_debris_dust', '16x kubejs:quantum_flux')
        .inputFluids(Fluid.of('gtceu:tritium', 1000))
        .itemOutputs('kubejs:inert_netherite_scrap')
        .duration(200)
        .EUt(250000)
        .blastFurnaceTemp(12000)

    // Activated Nethline
    event.recipes.gtceu.forming_press('inert_nether_compound_ingot')
        .itemInputs('gtceu:hot_europium_ingot', '16x kubejs:wither_bone', '4x gtceu:dark_soularium_dust', '4x kubejs:primal_mana')
        .itemOutputs('kubejs:inert_nether_compound_ingot')
        .duration(300)
        .EUt(16380)

    event.recipes.gtceu.omnic_forge('netherite_ingot_final')
        .itemInputs('kubejs:inert_nether_compound_ingot', '3x kubejs:diamond_lattice', '4x kubejs:inert_netherite_scrap', '4x minecraft:gold_ingot')
        .itemOutputs('gtceu:activated_netherite_ingot')
        .duration(200)
        .EUt(250000)

    // Regular Netherite
    // Recipe is handled in alloys_recipes.js
    event.remove({ output: "minecraft:netherite_ingot" })
    event.smelting('minecraft:netherite_scrap', 'kubejs:crushed_ancient_debris')

})
