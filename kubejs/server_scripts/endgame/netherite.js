ServerEvents.recipes(event => {


    // Omnic Acid
    event.recipes.gtceu.chemical_reactor('omnic_acid')
        .itemInputs('5x gtceu:carbon_dust', '4x kubejs:mote_of_omnium')
        .inputFluids(Fluid.of('water', 3000))
        .itemOutputs('gtceu:omnic_acid_dust')
        .outputFluids(Fluid.of('gtceu:hydrogen', 2000))
        .duration(1200)
        .EUt(65520)
    
    // Scrapline
    event.remove({ output: "minecraft:netherite_scrap" })
    event.recipes.gtceu.macerator('ancient_debris_crushing')
        .itemInputs('minecraft:ancient_debris')
        .itemOutputs('2x kubejs:crushed_ancient_debris')
        .chancedOutput('kubejs:crushed_ancient_debris', 1000, 500)
        .chancedOutput('gtceu:palladium_dust', 1400, 850)
        .itemOutputs('gtceu:obsidian_dust')
        .duration(1200)
        .EUt(16380)

    event.recipes.gtceu.chemical_reactor('ancient_debris_purifying')
        .itemInputs('kubejs:crushed_ancient_debris', 'gtceu:omnic_acid_dust')
        .inputFluids(Fluid.of('water', 2000))
        .itemOutputs('kubejs:purified_ancient_debris')
        .chancedOutput('gtceu:platinum_dust', 3300, 0)
        .duration(1200)
        .EUt(16380)

    event.recipes.gtceu.thermal_centrifuge('ancient_debris_refining')
        .itemInputs('kubejs:purified_ancient_debris')
        .itemOutputs('kubejs:refined_ancient_debris')
        .chancedOutput('gtceu:iridium_dust', 3300, 0)
        .itemOutputs('gtceu:obsidian_dust')
        .duration(1200)
        .EUt(16380)

    event.recipes.gtceu.macerator('ancient_debris_refined_crushing')
        .itemInputs('kubejs:refined_ancient_debris')
        .itemOutputs('kubejs:impure_netherite_dust')
        .chancedOutput('gtceu:osmium_dust', 3300, 0)
        .itemOutputs('gtceu:obsidian_dust')
        .duration(1200)
        .EUt(16380)
    
    event.recipes.gtceu.centrifuge('ancient_debris_dust_purifying')
        .itemInputs('kubejs:impure_netherite_dust')
        .itemOutputs('kubejs:purified_netherite_dust', 'gtceu:obsidian_dust')
        .duration(1200)
        .EUt(16380)

    event.recipes.gtceu.arc_furnace('ancient_debris_arc_smelting')
        .itemInputs('kubejs:purified_netherite_dust')
        .inputFluids(Fluid.of('gtceu:oxygen', 1200))
        .itemOutputs('kubejs:inert_netherite_scrap')
        .duration(1200)
        .EUt(16380)

    event.recipes.gtceu.electric_blast_furnace('netherite_scrap_activation')
        .itemInputs('kubejs:inert_netherite_scrap', '16x kubejs:quantum_flux')
        .inputFluids(Fluid.of('gtceu:tritium', 1000))
        .itemOutputs('minecraft:netherite_scrap')
        .duration(400)
        .EUt(250000)
        .blastFurnaceTemp(12000)
    
    //Nethline
    event.remove({ input: "minecraft:netherite_scrap" })

    event.recipes.gtceu.large_material_press('inert_nether_compound_ingot')
        .itemInputs('gtceu:hot_europium_ingot', '4x gtceu:dark_soularium_dust', '4x kubejs:primal_mana')
        .itemOutputs('kubejs:inert_nether_compound_ingot')
        .duration(600)
        .EUt(16380)

    event.recipes.gtceu.omnic_forge('netherite_ingot_final')
        .itemInputs('kubejs:inert_nether_compound_ingot', '4x kubejs:diamond_lattice', '4x minecraft:netherite_scrap')
        .itemOutputs('gtceu:netherite_ingot')
        .duration(400)
        .EUt(250000)

})