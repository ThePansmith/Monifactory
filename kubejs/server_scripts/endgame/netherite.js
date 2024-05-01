ServerEvents.recipes(event => {
    event.recipes.gtceu.chemical_reactor("omnic_acid")
        .itemInputs('5x gtceu:carbon_dust', '4x kubejs:mote_of_omnium')
        .inputFluids(Fluid.of('water', 3000))
        .itemOutputs('gtceu:omnic_acid')
        .outputFluids(Fluid.of('gtceu:hydrogen', 2000))
        .duration(1200)
        .EUt(32760)
})