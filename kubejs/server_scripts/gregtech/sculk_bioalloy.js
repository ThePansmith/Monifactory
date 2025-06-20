/**
 * Sculk Bioalloy processing line
 */
ServerEvents.recipes(event => {

    event.recipes.gtceu.forming_press("sculk-compatible_trellis_microstructure_forging")
        .itemInputs("2x extendedcrafting:crystaltine_ingot", "kubejs:the_ultimate_material", "6x gtceu:lanthanum_dust", "9x gtceu:potassium_cyanide_dust")
        .itemOutputs("18x kubejs:sculk-compatible_trellis_microstructure")
        .duration(140)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.large_chemical_reactor("fibrinogenic_sculk_goo")
        .itemInputs("12x minecraft:sculk_vein", "4x kubejs:warden_horn", "8x gtceu:collagen_dust")
        .inputFluids("gtceu:raw_growth_medium 60", "gtceu:mutagen 90")
        .itemOutputs("7x kubejs:fibrinogenic_sculk_goo")
        .duration(540)
        .EUt(GTValues.VHA[GTValues.IV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.canner("sculk-saturated_microstructure_pulp_canning")
        .itemInputs("2x kubejs:sculk-compatible_trellis_microstructure", "1x kubejs:fibrinogenic_sculk_goo")
        .itemOutputs("2x kubejs:sculk-saturated_microstructure_pulp")
        .duration(150)
        .EUt(GTValues.VHA[GTValues.LuV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    event.recipes.gtceu.large_chemical_reactor("kubejs:animated_bioalloy_pulp_reacting")
        .itemInputs("1x kubejs:sculk-saturated_microstructure_pulp", "1x gtceu:small_prussian_blue_dust", "1x minecraft:sculk_catalyst")
        .inputFluids("enderio:xp_juice 5000")
        .itemOutputs("kubejs:animated_bioalloy_pulp")
        .duration(60)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.STERILE_CLEANROOM)
})
