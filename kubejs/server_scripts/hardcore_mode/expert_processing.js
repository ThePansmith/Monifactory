ServerEvents.recipes(event => {
    if (!isExpertMode) {
        return;
    }

    // Tungsten
    event.remove({id: 'gtceu:electrolyzer/tungstic_acid_electrolysis'})

    event.recipes.gtceu.extractor('kubejs:tungsten_trioxide_dust')
        .itemInputs('7x #forge:dusts/tungstic_acid')
        .itemOutputs('4x gtceu:tungsten_trioxide_dust')
        .outputFluids(Fluid.of('minecraft:water', 1000))
        .duration(160).EUt(16)

    event.recipes.gtceu.electric_blast_furnace('kubejs:hot_tungsten_ingot')
        .itemInputs('8x #forge:dusts/tungsten_trioxide', '3x #forge:dusts/carbon')
        .itemOutputs('2x gtceu:hot_tungsten_ingot')
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 3000))
        .blastFurnaceTemp(3600)
        .duration(2400).EUt(1920)

    event.recipes.gtceu.chemical_reactor('kubejs:tungsten_dust')
        .itemInputs('4x #forge:dusts/tungsten_trioxide')
        .inputFluids(Fluid.of('gtceu:hydrogen', 6000))
        .itemOutputs('gtceu:tungsten_dust')
        .outputFluids(Fluid.of('water', 3000))
        .duration(210).EUt(960)

    // Phthalic Anhydride
    event.remove({ id: 'gtceu:large_chemical_reactor/phthalic_acid_from_naphthalene' })
    event.remove({ id: 'gtceu:large_chemical_reactor/phthalic_acid_from_naphthalene_9' })

    event.recipes.gtceu.chemical_reactor('kubejs:phthalic_anhydride_dust')
        .itemInputs('#forge:tiny_dusts/vanadium_pentoxide')
        .inputFluids(Fluid.of('gtceu:naphthalene', 1000), Fluid.of('gtceu:oxygen', 5000))
        .itemOutputs('15x gtceu:phthalic_anhydride_dust')
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
        .duration(125).EUt(30)

    event.recipes.gtceu.large_chemical_reactor('kubejs:phthalic_anhydride_dust')
        .itemInputs('#forge:dusts/vanadium_pentoxide')
        .inputFluids(Fluid.of('gtceu:naphthalene', 9000), Fluid.of('gtceu:oxygen', 45000))
        .itemOutputs('64x gtceu:phthalic_anhydride_dust', '64x gtceu:phthalic_anhydride_dust', '7x gtceu:phthalic_anhydride_dust')
        .outputFluids(Fluid.of('gtceu:carbon_dioxide', 9000))
        .duration(1125).EUt(30)

    event.recipes.gtceu.chemical_reactor('kubejs:phthalic_acid')
        .itemInputs('15x #forge:dusts/phthalic_anhydride')
        .inputFluids(Fluid.of('water', 1000))
        .outputFluids(Fluid.of('gtceu:phthalic_acid', 1000))
        .duration(100).EUt(30)

    event.recipes.gtceu.distillery('kubejs:phthalic_acid')
        .inputFluids(Fluid.of('gtceu:phthalic_acid', 1000))
        .circuit(1)
        .itemOutputs('15x gtceu:phthalic_anhydride_dust')
        .outputFluids(Fluid.of('water', 1000))
        .duration(100).EUt(30)

    event.recipes.gtceu.large_chemical_reactor('kubejs:polytetrafluoroethylene')
        .inputFluids(Fluid.of('gtceu:tetrafluoroethylene', 2160), Fluid.of('gtceu:oxygen', 7500))
        .itemInputs('#forge:dusts/phthalic_anhydride')
        .circuit(7)
        .outputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 4320))
        .duration(800).EUt(30)

    event.recipes.gtceu.large_chemical_reactor('kubejs:polyvinyl_chloride')
        .inputFluids(Fluid.of('gtceu:vinyl_chloride', 2160), Fluid.of('gtceu:oxygen', 7500))
        .itemInputs('#forge:dusts/phthalic_anhydride')
        .circuit(7)
        .outputFluids(Fluid.of('gtceu:polyvinyl_chloride', 4320))
        .duration(800).EUt(30)

    event.recipes.gtceu.large_chemical_reactor('kubejs:polyethylene')
        .inputFluids(Fluid.of('gtceu:ethylene', 2160), Fluid.of('gtceu:oxygen', 7500))
        .itemInputs('#forge:dusts/phthalic_anhydride')
        .circuit(7)
        .outputFluids(Fluid.of('gtceu:polyethylene', 4320))
        .duration(800).EUt(30)

});
