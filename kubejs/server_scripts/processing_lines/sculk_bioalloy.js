/**
 * Sculk Bioalloy processing line
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer("experience_attuned_dust")
        .itemInputs("7x gtceu:amethyst_dust", "2x gtceu:dark_soularium_dust", "4x gtceu:lapis_dust")
        .itemOutputs("gtceu:experience_attuned_dust")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    event.remove({ id: "gtceu:extractor/extract_experience_attuned_dust"})
    event.recipes.gtceu.chemical_bath("experience_attuned_vapor")
        .itemInputs("gtceu:experience_attuned_dust")
        .inputFluids("gtceu:americium_plasma 144")
        .itemOutputs("gtceu:americium_dust")
        .outputFluids("gtceu:experience_attuned 144")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.mixer("sculk_agar")
        .itemInputs("4x gtceu:potassium_cyanide_dust", "7x gtceu:biotite_dust", "9x gtceu:collagen_dust")
        .inputFluids("enderio:xp_juice 1500", "gtceu:experience_attuned 288")
        .itemOutputs("32x gtceu:sculk_agar_dust")
        .duration(20 * 20)
        .EUt(GTValues.VA[GTValues.LV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.discharger("amalgamated_sculk")
        .itemInputs("3x gtceu:sculk_agar_dust", "4x gtceu:echo_shard_dust", Item.of("kubejs:hadal_energy_core", "{Damage:8000000}").weakNBT())
        .inputFluids("kubejs:hadal_sculk")
        .itemOutputs("kubejs:amalgamated_sculk")
        .duration(10)

    event.recipes.gtceu.alloy_blast_smelter("sculk_bioalloy")
        .itemInputs("kubejs:amalgamated_sculk", "4x gtceu:blue_alloy_dust", "2x gtceu:lead_dust", "1x gtceu:lutetium_dust")
        .outputFluids("gtceu:sculk_bioalloy 1440")
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(2836)

    event.recipes.gtceu.alloy_blast_smelter("sculk_bioalloy_gas")
        .itemInputs("kubejs:amalgamated_sculk", "4x gtceu:blue_alloy_dust", "2x gtceu:lead_dust", "1x gtceu:lutetium_dust")
        .inputFluids("gtceu:xenon 10")
        .outputFluids("gtceu:sculk_bioalloy 1440")
        .duration(75)
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(2836)
})
