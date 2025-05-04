/**
 * Netherite processing line
 */

ServerEvents.recipes(event => {
    // We only use GT ores for the oreproc page and autogenned intermediates, not for the in-stone ore
    event.remove({ not: [{ input: "minecraft:ancient_debris" }, { input: "#forge:ores/netherite_scrap" }], output: "gtceu:crushed_netherite_scrap_ore" })
    event.remove([{ type: "minecraft:smelting", output: "minecraft:netherite_scrap", id: /gtceu:smelting\/.*netherite_scrap_ore.*/ }, { type: "minecraft:blasting", output: "minecraft:netherite_scrap", id: /gtceu:blasting\/.*netherite_scrap_ore.*/ }])
    event.remove({ id: "gtceu:alloy_smelt_netherite_scrap_to_nugget" })

    // Ancient Debris Processing
    event.recipes.gtceu.chemical_bath("ancient_debris_ardite_path")
        .itemInputs("gtceu:netherite_scrap_dust")
        .inputFluids("kubejs:molten_petrotheum")
        .itemOutputs("kubejs:dusty_pure_netherite_scrap", "gtceu:ardite_sand_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.autoclave("dusty_pure_netherite_scrap")
        .itemInputs("kubejs:dusty_pure_netherite_scrap")
        .inputFluids("kubejs:molten_aerotheum")
        .itemOutputs("kubejs:pure_netherite_scrap", "kubejs:ardite_sponge")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.electric_blast_furnace("ancient_debris_netherite_path")
        .itemInputs("gtceu:netherite_scrap_dust")
        .inputFluids("kubejs:molten_pyrotheum")
        .itemOutputs("kubejs:pure_netherite_scrap")
        .outputFluids("gtceu:impure_molten_ardite")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])
        .blastFurnaceTemp(7000)

    event.recipes.gtceu.vacuum_freezer("impure_molten_ardite")
        .itemInputs("kubejs:cryotheum_dust")
        .inputFluids("gtceu:impure_molten_ardite")
        .itemOutputs("gtceu:ardite_sand_dust", "kubejs:pure_netherite_shards")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer("ardite_slurry")
        .itemInputs("gtceu:ardite_sand_dust")
        .inputFluids("gtceu:nitric_acid")
        .outputFluids("gtceu:ardite_slurry")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.compressor("pure_netherite_scrap")
        .itemInputs("4x kubejs:pure_netherite_shards")
        .itemOutputs("kubejs:pure_netherite_scrap")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.macerator("ardite_sand")
        .itemInputs("4x kubejs:ardite_sponge")
        .itemOutputs("gtceu:ardite_sand_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    // Activated Nethline
    event.recipes.gtceu.forming_press("inert_nether_compound_ingot")
        .itemInputs("gtceu:hot_europium_ingot", "4x kubejs:wither_bone", "3x gtceu:dark_soularium_dust", "4x kubejs:primal_mana")
        .itemOutputs("kubejs:inert_nether_compound_ingot")
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.omnic_forge("netherite_ingot_final")
        .itemInputs("kubejs:inert_nether_compound_ingot", "gtceu:crystal_matrix_frame", "4x kubejs:inert_netherite_scrap", "4x minecraft:gold_ingot")
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
