/**
 * Processing line for base of prismatic core
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.mixer("radiant_blend")
        .itemInputs("2x minecraft:glow_berries", "4x minecraft:glow_ink_sac", "3x gtceu:lumium_dust")
        .outputFluids("gtceu:radiant_blend 2000")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.autoclave("chromatically_reactive_cluster")
        .itemInputs("gtceu:omnium_dust")
        .inputFluids("gtceu:radiant_blend 125")
        .itemOutputs("kubejs:chromatically_reactive_cluster")
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.forge_hammer("chromatically_reactive_shard")
        .itemInputs("kubejs:chromatically_reactive_cluster")
        .itemOutputs("3x kubejs:chromatically_reactive_shard")
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.chemical_bath("chromatically_inert_frame")
        .itemInputs("gtceu:small_neutronium_gear")
        .inputFluids("gtceu:trinaquadalloy 288")
        .itemOutputs("kubejs:chromatically_inert_frame")
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler("inert_prismatic_core")
        .itemInputs("kubejs:chromatically_inert_frame", "12x kubejs:chromatically_reactive_shard", "4x kubejs:hadal_energy_core", "kubejs:heart_of_a_universe")
        .itemOutputs("kubejs:inert_prismatic_core")
        .duration(400)
        .EUt(GTValues.VA[GTValues.UHV])
})
