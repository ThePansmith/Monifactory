/**
 * Netherite processing line
 */

ServerEvents.recipes(event => {
    // We only use GT ores for the oreproc page and autogenned intermediates, not for the in-stone ore
    event.remove({ not: [{ input: "minecraft:ancient_debris" }, { input: "#forge:ores/netherite_scrap" }], output: "gtceu:crushed_netherite_scrap_ore" })
    event.remove([{ type: "minecraft:smelting", output: "minecraft:netherite_scrap", id: /gtceu:smelting\/.*netherite_scrap_ore.*/ }, { type: "minecraft:blasting", output: "minecraft:netherite_scrap", id: /gtceu:blasting\/.*netherite_scrap_ore.*/ }])
    event.remove({ id: "gtceu:alloy_smelt_netherite_scrap_to_nugget" })

    // Omnic Acid
    event.recipes.gtceu.large_chemical_reactor("omnic_acid")
        .itemInputs("5x gtceu:carbon_dust")
        .inputFluids(Fluid.of("water", 3000), "gtceu:omnium 576")
        .outputFluids("gtceu:omnic_acid 1000", Fluid.of("gtceu:hydrogen", 2000))
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    // Ancient Debris crushing
    event.recipes.gtceu.macerator("macerate_ancient_debris_to_crushed_ore")
        .itemInputs("minecraft:ancient_debris")
        .itemOutputs("2x gtceu:crushed_netherite_scrap_ore")
        .chancedOutput("gtceu:obsidian_dust", 1400, 850)
        .chancedOutput("gtceu:netherrack_dust", 1200, 800)
        .duration(400)
        .EUt(2)
        .category("gtceu:ore_crushing")

    // Omnic Acid Purifying
    event.recipes.gtceu.chemical_reactor("ancient_debris_purifying")
        .itemInputs("gtceu:netherite_scrap_dust")
        .inputFluids("gtceu:omnic_acid 1000")
        .itemOutputs("kubejs:purified_ancient_debris_dust")
        .chancedOutput("gtceu:platinum_dust", 3300, 0)
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.arc_furnace("ancient_debris_arc_smelting")
        .itemInputs("kubejs:purified_ancient_debris_dust")
        .inputFluids(Fluid.of("gtceu:oxygen", 1200))
        .chancedOutput("gtceu:palladium_dust", 1400, 850)
        .itemOutputs("kubejs:processed_ancient_debris_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace("netherite_scrap_blasting")
        .itemInputs("kubejs:processed_ancient_debris_dust", "8x kubejs:quantum_flux")
        .inputFluids(Fluid.of("gtceu:blaze", 1000))
        .itemOutputs("kubejs:inert_netherite_scrap")
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(12000)

    // Activated Nethline
    event.recipes.gtceu.forming_press("inert_nether_compound_ingot")
        .itemInputs("gtceu:hot_europium_ingot", "4x kubejs:wither_bone", "3x gtceu:dark_soularium_dust", "4x kubejs:primal_mana")
        .itemOutputs("kubejs:inert_nether_compound_ingot")
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.omnic_forge("netherite_ingot_final")
        .itemInputs("kubejs:inert_nether_compound_ingot", "2x kubejs:diamond_lattice", "4x kubejs:inert_netherite_scrap", "4x minecraft:gold_ingot")
        .itemOutputs("gtceu:activated_netherite_ingot")
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
})

ServerEvents.tags("item", event => {
    const oresToRemove = event.get("forge:ores/netherite_scrap").getObjectIds();
    if(!oresToRemove.add("gtceu:raw_netherite_scrap")) console.error("Could not add Raw Netherite Scrap from list of Netherite Scrap ores to nuke")

    event.removeAllTagsFrom(oresToRemove.filter((value) => {
        return ResourceLocation.of("minecraft:ancient_debris", ":").compareTo(value) != 0
    }))
})
