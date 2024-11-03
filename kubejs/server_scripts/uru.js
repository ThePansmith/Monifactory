ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer('reactive_dust_mixture_mixer')
        .itemInputs('12x extendedcrafting:luminessence', '7x gtceu:enriched_sunnarium_dust', '8x kubejs:primal_mana', '13x gtceu:cadmium_dust', '3x gtceu:nether_star_dust', '21x ae2:sky_dust')
        .itemOutputs('64x kubejs:reactive_dust_mixture')
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UHV])
    
    event.recipes.gtceu.large_chemical_reactor('literal_alchemy')
        .itemInputs('3x kubejs:reactive_dust_mixture')
        .notConsumable('extendedcrafting:ultimate_catalyst')
        .inputFluids('gtceu:chlorine_triflouride 200', 'kubejs:molten_primal_mana 150', 'gtceu:dragon_breath 100')
        .notConsumableFluid('gcyr:co_mn_br_catalyst 1000')
        .itemOutputs('2x kubejs:inert_dust_mixture')
        .outputFluids('gtceu:waste_gas_mixture 1000')
        .duration(15)
        .EUt(GTValues.VA[GTValues.UIV])

    
})