ServerEvents.recipes(event => {

    function decomp(name, fuel, ing1, ing2) {
        event.recipes.gtceu.thermal_centrifuge(name + "decomp")
            .itemInputs(fuel)
            .itemOutputs(ing1, ing2)
            .duration(3200)
            .EUt(48)
    }

    function decomp_single(name, fuel, ing) {
        event.recipes.gtceu.thermal_centrifuge(name + "decomp")
            .itemInputs(fuel)
            .itemOutputs(ing)
            .duration(3200)
            .EUt(48)
    }

    decomp_single("tbu_fuel", "kubejs:tbu_fuel", "9x kubejs:thorium_232");
    decomp("leu_233", "kubejs:leu_233", "8x gtceu:uranium_dust", "kubejs:uranium_233");
    decomp("leu_235", "kubejs:leu_235", "8x gtceu:uranium_dust", "gtceu:uranium_235_dust");
    decomp("len_236", "kubejs:len_236", "8x kubejs:neptunium_237", "kubejs:neptunium_236");
    decomp("lep_239", "kubejs:lep_239", "8x kubejs:plutonium_242", "gtceu:plutonium_dust");
    decomp("lep_241", "kubejs:lep_241", "8x kubejs:plutonium_242", "gtceu:plutonium_241_dust");
    decomp("lea_242", "kubejs:lea_242", "8x kubejs:americium_243", "kubejs:americium_242");
    decomp("lecm_243", "kubejs:lecm_243", "8x kubejs:curium_246", "kubejs:curium_243");
    decomp("lecm_245", "kubejs:lecm_245", "8x kubejs:curium_246", "kubejs:curium_245");
    decomp("lecm_247", "kubejs:lecm_247", "8x kubejs:curium_246", "kubejs:curium_247");
    decomp("leb_248", "kubejs:leb_248", "8x kubejs:berkelium_247", "kubejs:berkelium_248");
    decomp("lecf_249", "kubejs:lecf_249", "8x kubejs:californium_252", "kubejs:californium_249");
    decomp("lecf_251", "kubejs:lecf_251", "8x kubejs:californium_252", "kubejs:californium_251");

    function decompdepleted(fuelType, out, out2, out3, out4, voltageTier) {
        
        event.recipes.gtceu.centrifuge(fuelType + "decompdepleted")
            .itemInputs('kubejs:depleted_' + fuelType)
            .itemOutputs(out, out2, out3, out4)
            .duration(400)
            .EUt(GTValues.VHA[voltageTier])
    }

    decompdepleted('thorium_tbu', '2x kubejs:uranium_233', '8x gtceu:uranium_235_nugget', 'kubejs:neptunium_236', '4x kubejs:neptunium_237', GTValues.IV)
    decompdepleted('leu_233', '4x kubejs:plutonium_242', '4x gtceu:plutonium_nugget', '4x gtceu:plutonium_241_nugget', '3x kubejs:americium_243', GTValues.IV)
    decompdepleted('leu_235', 'kubejs:neptunium_237', '40x gtceu:uranium_nugget', '8x gtceu:plutonium_nugget', '8x gtceu:plutonium_241_nugget', GTValues.IV)
    decompdepleted('len_236', 'kubejs:neptunium_237', '4x kubejs:plutonium_242', 'kubejs:americium_242', '3x kubejs:americium_243', GTValues.LuV)
    decompdepleted('lep_239', '3x kubejs:plutonium_242', 'kubejs:curium_243', '8x gtceu:plutonium_nugget', '3x kubejs:curium_246', GTValues.LuV)
    decompdepleted('lep_241', 'kubejs:plutonium_242', 'kubejs:plutonium_242', 'kubejs:americium_243', '6x kubejs:curium_246', GTValues.LuV)
    decompdepleted('americium_lea_242', 'kubejs:curium_243', 'kubejs:curium_245', '5x kubejs:curium_246', 'kubejs:curium_247', GTValues.LuV)
    decompdepleted('curium_lecm_243', '4x kubejs:curium_246', '2x kubejs:berkelium_247', 'kubejs:berkelium_248', 'kubejs:californium_249', GTValues.ZPM)
    decompdepleted('curium_lecm_245', '5x kubejs:berkelium_247', 'kubejs:berkelium_248', 'kubejs:californium_249', '2x kubejs:californium_252', GTValues.ZPM)
    decompdepleted('curium_lecm_247', '3x kubejs:berkelium_247', 'kubejs:berkelium_248', 'kubejs:californium_251', '4x kubejs:californium_252', GTValues.ZPM)
    decompdepleted('berkelium_leb_248', 'kubejs:californium_249', 'kubejs:californium_251', '3x kubejs:californium_252', '3x kubejs:californium_252', GTValues.ZPM)
    decompdepleted('californium_lecf_249', '2x kubejs:californium_250', 'kubejs:californium_251', '2x kubejs:californium_252', '2x gtceu:actinium_nugget', GTValues.ZPM)
    decompdepleted('californium_lecf_251', 'kubejs:californium_251', '2x kubejs:californium_252', '2x kubejs:californium_252', '2x gtceu:actinium_nugget', GTValues.ZPM)

    event.recipes.gtceu.thermal_centrifuge("thoriumdecomp")
        .itemInputs('gtceu:thorium_dust')
        .itemOutputs('kubejs:thorium_232')
        .duration(1100)
        .EUt(48)

    event.shaped('kubejs:tbu_fuel', ['AAA', 'AAA', 'AAA'], { A: 'kubejs:thorium_232' })
    event.shaped('kubejs:leu_233', ['ABB', 'BBB', 'BBB'], { A: 'kubejs:uranium_233', B: 'gtceu:uranium_ingot' })
    event.shaped('kubejs:leu_235', ['ABB', 'BBB', 'BBB'], { A: 'gtceu:uranium_235_ingot', B: 'gtceu:uranium_ingot' })
    event.shaped('kubejs:len_236', ['ABB', 'BBB', 'BBB'], { A: 'kubejs:neptunium_236', B: 'kubejs:neptunium_237' })
    event.shaped('kubejs:lep_239', ['ABB', 'BBB', 'BBB'], { A: 'gtceu:plutonium_ingot', B: 'kubejs:plutonium_242' })
    event.shaped('kubejs:lep_241', ['ABB', 'BBB', 'BBB'], { A: 'gtceu:plutonium_241_ingot', B: 'kubejs:plutonium_242' })
    event.shaped('kubejs:lea_242', ['ABB', 'BBB', 'BBB'], { A: 'kubejs:americium_242', B: 'kubejs:americium_243' })
    event.shaped('kubejs:lecm_243', ['ABB', 'BBB', 'BBB'], { A: 'kubejs:curium_243', B: 'kubejs:curium_246' })   
    event.shaped('kubejs:lecm_245', ['ABB', 'BBB', 'BBB'], { A: 'kubejs:curium_245', B: 'kubejs:curium_246' })
    event.shaped('kubejs:lecm_247', ['ABB', 'BBB', 'BBB'], { A: 'kubejs:curium_247', B: 'kubejs:curium_246' })
    event.shaped('kubejs:leb_248', ['ABB', 'BBB', 'BBB'], { A: 'kubejs:berkelium_248', B: 'kubejs:berkelium_247' })
    event.shaped('kubejs:lecf_249', ['ABB', 'BBB', 'BBB'], { A: 'kubejs:californium_249', B: 'kubejs:californium_252' })
    event.shaped('kubejs:lecf_251', ['ABB', 'BBB', 'BBB'], { A: 'kubejs:californium_251', B: 'kubejs:californium_252' })

    event.recipes.gtceu.chemical_reactor('rhodochrosite_dust')
        .itemInputs('12x gtceu:redstone_ore')
        .inputFluids('gtceu:sulfuric_acid 6000')
        .itemOutputs('kubejs:rhodochrosite_dust')
        .outputFluids('gtceu:redstone 19008')
        .EUt(2000)
        .duration(200)

    function extractisotope(recipename, input, output) {
        event.recipes.gtceu.extractor(recipename)
            .itemInputs(input)
            .outputFluids(output)
            .duration(180)
            .EUt(6)
    }
    
    extractisotope('thorium_232', 'nuclearcraft:thorium_232', Fluid.of('gtceu:thorium', 144));
    extractisotope('uranium_233', 'nuclearcraft:uranium_233', Fluid.of('gtceu:uranium_235', 144));
    extractisotope('neptunium_236', 'nuclearcraft:neptunium_236', Fluid.of('gtceu:neptunium', 144));
    extractisotope('neptunium_237', 'nuclearcraft:neptunium_237', Fluid.of('gtceu:neptunium', 144));
    extractisotope('plutonium_242', 'nuclearcraft:plutonium_242', Fluid.of('gtceu:plutonium_241', 144));
    extractisotope('curium_243', 'nuclearcraft:curium_243', Fluid.of('gtceu:curium', 144));
    extractisotope('curium_245', 'nuclearcraft:curium_245', Fluid.of('gtceu:curium', 144));
    extractisotope('curium_246', 'nuclearcraft:curium_246', Fluid.of('gtceu:curium', 144));
    extractisotope('curium_247', 'nuclearcraft:curium_247', Fluid.of('gtceu:curium', 144));
    extractisotope('americium_241', 'nuclearcraft:americium_241', Fluid.of('gtceu:americium', 144));
    extractisotope('americium_242', 'nuclearcraft:americium_242', Fluid.of('gtceu:americium', 144));
    extractisotope('americium_243', 'nuclearcraft:americium_243', Fluid.of('gtceu:americium', 144));
    extractisotope('berkelium_247', 'nuclearcraft:berkelium_247', Fluid.of('gtceu:berkelium', 144));
    extractisotope('berkelium_248', 'nuclearcraft:berkelium_248', Fluid.of('gtceu:berkelium', 144));
    extractisotope('californium_249', 'nuclearcraft:californium_249', Fluid.of('gtceu:californium', 144));
    extractisotope('californium_250', 'nuclearcraft:californium_250', Fluid.of('gtceu:californium', 144));
    extractisotope('californium_251', 'nuclearcraft:californium_251', Fluid.of('gtceu:californium', 144));
    extractisotope('californium_252', 'nuclearcraft:californium_252', Fluid.of('gtceu:californium', 144));

   
    event.recipes.gtceu.fission_reactor('tbu_fuel')
        .itemInputs('kubejs:tbu_fuel')
        .inputFluids('gtceu:distilled_water 576')
        .itemOutputs('kubejs:depleted_tbu_fuel')
        .outputFluids('gtceu:high_pressure_steam 92160')
        .duration(150)
        .EUt(0)

    event.recipes.gtceu.fission_reactor('leu_233')
        .itemInputs('kubejs:leu_233')
        .inputFluids('gtceu:distilled_water 576')
        .itemOutputs('kubejs:depleted_leu_233')
        .outputFluids('gtceu:high_pressure_steam 92160')
        .duration(150)
        .EUt(0)

    event.recipes.gtceu.fission_reactor('leu_235')
        .itemInputs('kubejs:leu_235')
        .inputFluids('gtceu:distilled_water 576')
        .itemOutputs('kubejs:depleted_leu_235')
        .outputFluids('gtceu:high_pressure_steam 92160')
        .duration(150)
        .EUt(0)

    function largereactor(recipename, inputi, inputf, outputi, outputf, dur) {
        event.recipes.gtceu.large_fission_reactor(recipename)
            .itemInputs(inputi)
            .inputFluids(inputf)
            .itemOutputs(outputi)
            .outputFluids(outputf)
            .duration(dur)
            .EUt(0)

    }
    
    largereactor('len_236', 'kubejs:len_236', 'gtceu:distilled_water 720', 'kubejs:depleted_len_236', 'gtceu:high_pressure_steam 115200', '130')
    largereactor('lep_239', 'kubejs:lep_239', 'gtceu:distilled_water 864', 'kubejs:depleted_lep_239', 'gtceu:high_pressure_steam 124416', '110')
    largereactor('lep_241', 'kubejs:lep_241', 'gtceu:distilled_water 864', 'kubejs:depleted_lep_241', 'gtceu:high_pressure_steam 124416', '110')
    largereactor('lea_242', 'kubejs:lea_242', 'gtceu:distilled_water 864', 'kubejs:depleted_lea_242', 'gtceu:high_pressure_steam 124416', '110')
    largereactor('lecm_243', 'kubejs:lecm_243', 'gtceu:distilled_water 1008', 'kubejs:depleted_lecm_243', 'gtceu:high_pressure_steam 161280', '90')
    largereactor('lecm_245', 'kubejs:lecm_245', 'gtceu:distilled_water 1008', 'kubejs:depleted_lecm_245', 'gtceu:high_pressure_steam 161280', '90')
    largereactor('lecm_247', 'kubejs:lecm_247', 'gtceu:distilled_water 1008', 'kubejs:depleted_lecm_247', 'gtceu:high_pressure_steam 161280', '90')
    largereactor('leb_248', 'kubejs:leb_248', 'gtceu:distilled_water 1152', 'kubejs:depleted_leb_248', 'gtceu:high_pressure_steam 184320', '70')
    largereactor('lecf_249', 'kubejs:lecf_249', 'gtceu:distilled_water 1152', 'kubejs:depleted_lecf_249', 'gtceu:high_pressure_steam 184320', '70')
    largereactor('lecf_251', 'kubejs:lecf_251', 'gtceu:distilled_water 1152', 'kubejs:depleted_lecf_251', 'gtceu:high_pressure_steam 184320', '70')
})