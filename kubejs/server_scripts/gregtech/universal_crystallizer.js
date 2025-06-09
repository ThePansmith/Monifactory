/**
 * Universal Crystallizer multiblock
 */

ServerEvents.recipes(event => {
    // //// Machine Recipe //////
    event.recipes.gtceu.assembly_line("universal_crystallizer")
        .itemInputs("24x gtceu:large_autoclave", "24x packagedexcrafting:combination_crafter", "24x gtceu:uv_emitter", "24x gtceu:uv_field_generator", "64x #gtceu:circuits/uhv", "8x #gtceu:circuits/uev", "64x gtceu:tritanium_coil_block", "24x kubejs:universal_warp_controller", "32x kubejs:hadal_energy_core")
        .inputFluids("kubejs:molten_cryotheum 36864", "gtceu:diamatine_empowered 18432", "gtceu:naquadria 63216", (doStoneline ? "gtceu:taranium" : "gtceu:actinium") + " 4608")
        .itemOutputs("gtceu:universal_crystallizer")
        .stationResearch(b => b
            .researchStack("gtceu:tritanium_coil_block")
            .CWUt(128, 512000)
            .EUt(30720)
        )
        .duration(45)
        .EUt(1966080)


    // //// Crystallization recipes /////
    event.recipes.gtceu.universal_crystallizer("diamond_crystallization")
        .itemInputs("64x gtceu:carbon_dust", "64x gtceu:carbon_dust", "64x gtceu:carbon_dust", "64x gtceu:carbon_dust", "64x gtceu:carbon_dust", "64x gtceu:carbon_dust", "64x gtceu:carbon_dust", "64x gtceu:carbon_dust")
        .inputFluids("gtceu:enriched_naquadah 3")
        .itemOutputs("32x minecraft:diamond")
        .duration(60)
        .EUt(1179648)

    event.recipes.gtceu.universal_crystallizer("enori_crystallization")
        .itemInputs("63x gtceu:iron_dust", "gtceu:apatite_gem", "gtceu:end_steel_ingot", "extendedcrafting:basic_component")
        .inputFluids("gtceu:helium 1000", "gtceu:enriched_naquadah 3")
        .itemOutputs("7x gtceu:enori_empowered_block")
        .duration(7)
        .EUt(1000000)

    event.recipes.gtceu.universal_crystallizer("restonia_crystallization")
        .itemInputs("63x minecraft:redstone", "gtceu:red_alloy_ingot", "gtceu:almandine_gem", "extendedcrafting:the_ultimate_component")
        .inputFluids("gtceu:sulfuric_acid 1000", "gtceu:enriched_naquadah 3")
        .itemOutputs("7x gtceu:restonia_empowered_block")
        .duration(7)
        .EUt(1000000)

    event.recipes.gtceu.universal_crystallizer("palis_crystallization")
        .itemInputs("63x gtceu:lapis_dust", "gtceu:sapphire_gem", "gtceu:mythril_ingot", "extendedcrafting:elite_component")
        .inputFluids("minecraft:water 1000", "gtceu:enriched_naquadah 3")
        .itemOutputs("7x gtceu:palis_empowered_block")
        .duration(7)
        .EUt(1000000)

    event.recipes.gtceu.universal_crystallizer("void_crystallization")
        .itemInputs("63x gtceu:coal_dust", "gtceu:black_quartz_gem", "gtceu:dark_steel_ingot", "extendedcrafting:advanced_component")
        .inputFluids("gtceu:oil 1000", "gtceu:enriched_naquadah 3")
        .itemOutputs("7x gtceu:void_empowered_block")
        .duration(7)
        .EUt(1000000)

    event.recipes.gtceu.universal_crystallizer("diamatine_crystallization")
        .itemInputs("63x gtceu:diamond_dust", "kubejs:endest_star", "extendedcrafting:crystaltine_ingot", "extendedcrafting:crystaltine_component")
        .inputFluids("gtceu:nitrogen_dioxide 1000", "gtceu:enriched_naquadah 3")
        .itemOutputs("7x gtceu:diamatine_empowered_block")
        .duration(7)
        .EUt(1000000)

    event.recipes.gtceu.universal_crystallizer("emeradic_crystallization")
        .itemInputs("63x gtceu:emerald_dust", "kubejs:stabilized_uranium", "gtceu:vibrant_alloy_ingot", "extendedcrafting:ultimate_component")
        .inputFluids("gtceu:argon 1000", "gtceu:enriched_naquadah 3")
        .itemOutputs("7x gtceu:emeradic_empowered_block")
        .duration(7)
        .EUt(1000000)

    event.recipes.gtceu.universal_crystallizer("empowered_gem_crystallization")
        .itemInputs("gtceu:restonia_empowered_gem", "gtceu:enori_empowered_gem", "gtceu:void_empowered_gem", "gtceu:palis_empowered_gem", "gtceu:diamatine_empowered_gem", "gtceu:emeradic_empowered_gem")
        .inputFluids("gtceu:crystal_matrix 432", "gtceu:enriched_naquadah 3")
        .itemOutputs("gtceu:gemstone_empowered_block")
        .duration(100)
        .EUt(10000000)

    event.recipes.gtceu.universal_crystallizer("empowered_flux_crystallization")
        .itemInputs("63x gtceu:gemstone_empowered_gem", "redstone_arsenal:flux_gem", "gtceu:actinium_ingot", "extendedcrafting:epic_component")
        .inputFluids("gtceu:electrum_flux 576", "gtceu:enriched_naquadah 3")
        .itemOutputs("7x gtceu:empowered_flux_block")
        .duration(100)
        .EUt(10000000)
})
