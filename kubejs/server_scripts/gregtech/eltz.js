/**
 * Eltz processing line
 */

ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer("reactive_dust_mixture_mixer")
        .itemInputs("12x extendedcrafting:luminessence", "7x gtceu:enriched_sunnarium_dust", "8x kubejs:primal_mana", "13x gtceu:cadmium_dust", "3x gtceu:nether_star_dust", "21x gtceu:ender_eye_dust")
        .itemOutputs("64x kubejs:reactive_dust_mixture")
        .duration(4800)
        .EUt(GTValues.VHA[GTValues.UHV])

    event.recipes.gtceu.large_chemical_reactor("literal_alchemy")
        .itemInputs("3x kubejs:reactive_dust_mixture")
        .notConsumable("extendedcrafting:ultimate_catalyst")
        .inputFluids("gtceu:chlorine_trifluoride 200", "gtceu:mana 150", "gtceu:dragon_breath 100")
        .itemOutputs("2x kubejs:inert_dust_mixture")
        .outputFluids("gtceu:waste_gas_mixture 1000")
        .duration(15)
        .EUt(GTValues.VA[GTValues.UIV])

    event.recipes.gtceu.sifter("inert_dust_mixture_sifting")
        .itemInputs("4x kubejs:inert_dust_mixture")
        .itemOutputs("1x kubejs:dusty_inert_powder", "2x kubejs:inert_clumps", "gtceu:monazite_gem")
        .chancedOutput("gtceu:impure_netherite_scrap_dust", 3500, 0)
        .chancedOutput("extendedcrafting:crystaltine_nugget", 5000, 0)
        .duration(640)
        .EUt(GTValues.VA[GTValues.IV])

    // Shiny metal powder half

    event.recipes.gtceu.large_chemical_reactor("inert_powder_reacting")
        .itemInputs("1x kubejs:dusty_inert_powder")
        .inputFluids("gtceu:omnic_acid 1000", "gtceu:enriched_naquadah 144")
        .itemOutputs("kubejs:shiny_powder_mixture")
        .chancedOutput("kubejs:cryotheum_dust", 1500, 0)
        .chancedOutput("kubejs:pyrotheum_dust", 1500, 0)
        .outputFluids("gtceu:depleted_uranium_hexafluoride 200")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.recipes.gtceu.centrifuge("shiny_powder_mixture_centrifuging")
        .itemInputs("4x kubejs:shiny_powder_mixture")
        .itemOutputs("kubejs:shiny_metal_powder", "monilabs:crystal_matrix_dust")
        .chancedOutput("kubejs:aerotheum_dust", 6000, 0)
        .chancedOutput("kubejs:petrotheum_dust", 6000, 0)
        .chancedOutput("kubejs:inert_dust_mixture", 100, 0)
        .duration(500)
        .EUt(GTValues.VHA[GTValues.EV])

    // Eltic actinate clump half
    event.recipes.gtceu.chemical_bath("inert_clump_bath")
        .itemInputs("4x kubejs:inert_clumps")
        .inputFluids("gtceu:distilled_water 125")
        .itemOutputs("kubejs:clean_inert_cluster")
        .outputFluids("gtceu:saturated_water 125")
        .duration(5000)
        .EUt(GTValues.VHA[GTValues.HV])

    event.recipes.gtceu.electromagnetic_separator("clean_cluster_separating")
        .itemInputs("kubejs:clean_inert_cluster")
        .chancedOutput("kubejs:eltic_crystal_seed", 2500, 0)
        .chancedOutput("kubejs:inert_dust_mixture", 500, 150)
        .duration(2500)
        .EUt(GTValues.VA[GTValues.LuV])

    // Converge here
    event.recipes.gtceu.autoclave("eltic_actinide_crystal_growing")
        .itemInputs("kubejs:eltic_crystal_seed", "2x kubejs:shiny_metal_powder")
        .inputFluids("gtceu:saturated_water 500")
        .itemOutputs("gtceu:eltic_actinate_gem")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.electric_blast_furnace("eltz_ingot_blasting")
        .itemInputs("gtceu:flawless_eltic_actinate_gem", "#forge:dusts/pulsating_alloy")
        .itemOutputs("1x monilabs:eltz_ingot", "2x gtceu:actinium_iron_oxide_dust")
        .duration(1540)
        .blastFurnaceTemp(11600)
        .EUt(GTValues.VA[GTValues.UEV])

})
