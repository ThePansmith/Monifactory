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

    // Kapton K Wetwares
    event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/wetware_hm')
        .itemInputs(
            '16x gcyr:kapton_k_plate',
            'gtceu:petri_dish',
            'gtceu:luv_electric_pump',
            'gtceu:iv_sensor',
            '#gtceu:circuits/iv',
            '16x gtceu:niobium_titanium_foil'
        )
        .inputFluids(Fluid.of('gtceu:tin', 288))
        .itemOutputs('16x gtceu:wetware_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(30720)

        //Commented out in favor of GCYM's chain

        // event.recipes.gtceu.chemical_reactor('kubejs:chemical_reactor/durene_hm')
        // .inputFluids(Fluid.of('gtceu:dimethylbenzene', 1000), Fluid.of('gtceu:chloromethane', 1000))
        // .itemOutputs('24x gtceu:durene_dust')
        // .outputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))
        // .EUt(120)
        // .duration(120)

        // event.recipes.gtceu.chemical_reactor('kubejs:chemical_reactor/pyrom_hm')
        // .inputFluids(Fluid.of('gtceu:oxygen', 6000))
        // .itemInputs('24x gtceu:durene_dust')
        // .outputFluids(Fluid.of('minecraft:water', 3000))
        // .itemOutputs('9x gcyr:pyrometillic_dianhydride_dust')
        // .EUt(480)
        // .duration(100)

        // event.recipes.gtceu.chemical_reactor('kubejs:chemical_reactor/aminophenol_hm')
        // .inputFluids(Fluid.of('gtceu:nitrobenzene', 1000), Fluid.of('gtceu:hydrogen', 4000))
        // .outputFluids(Fluid.of('gtceu:aminophenol', 1000), Fluid.of('minecraft:water', 1000))
        // .circuit(1)
        // .EUt(30)
        // .duration(300)

        // event.recipes.gtceu.large_chemical_reactor("kubejs:large_chemical_reactor/oxydianiline_dust")
        // .notConsumable("gtceu:saltpeter_dust")
        // .inputFluids(Fluid.of('gtceu:aminophenol', 1000), Fluid.of('gtceu:nitrochlorobenzene', 1000), Fluid.of('gtceu:water', 1000))
        // .outputFluids(Fluid.of('gtceu:oxygen', 3000), Fluid.of('gtceu:hydrochloric_acid', 1000))
        // .itemOutputs('27x gtceu:oxydianiline_dust')
        // .duration(200)
        // .EUt(21000)

        // event.recipes.gtceu.alloy_smelter('kubejs:kaptonk')
        // .itemInputs('3x gtceu:oxydianiline_dust', '2x gcyr:pyrometillic_dianhydride_dust')
        // .itemOutputs('gtceu:kapton_k_ingot')
        // .duration(30)
        // .EUt(7680)

});
