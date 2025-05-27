/**
 * Extraction and solidification recipes for NC and GT
 */
ServerEvents.recipes(event => {
    // Solidified to Gas
    extractgas("neon", "kubejs:solidified_neon", Fluid.of("gtceu:neon", 1000));
    extractgas("krypton", "kubejs:solidified_krypton", Fluid.of("gtceu:krypton", 1000));
    extractgas("xenon", "kubejs:solidified_xenon", Fluid.of("gtceu:xenon", 1000));
    extractgas("argon", "kubejs:solidified_argon", Fluid.of("gtceu:argon", 1000));

    extractisotope("thorium_232", "kubejs:thorium_232", Fluid.of("gtceu:thorium", 144));
    extractisotope("uranium_233", "kubejs:uranium_233", Fluid.of("gtceu:uranium_235", 144));
    extractisotope("neptunium_236", "kubejs:neptunium_236", Fluid.of("gtceu:neptunium", 144));
    extractisotope("neptunium_237", "kubejs:neptunium_237", Fluid.of("gtceu:neptunium", 144));
    extractisotope("plutonium_242", "kubejs:plutonium_242", Fluid.of("gtceu:plutonium_241", 144));
    extractisotope("curium_243", "kubejs:curium_243", Fluid.of("gtceu:curium", 144));
    extractisotope("curium_245", "kubejs:curium_245", Fluid.of("gtceu:curium", 144));
    extractisotope("curium_246", "kubejs:curium_246", Fluid.of("gtceu:curium", 144));
    extractisotope("curium_247", "kubejs:curium_247", Fluid.of("gtceu:curium", 144));
    extractisotope("americium_241", "kubejs:americium_241", Fluid.of("gtceu:americium", 144));
    extractisotope("americium_242", "kubejs:americium_242", Fluid.of("gtceu:americium", 144));
    extractisotope("americium_243", "kubejs:americium_243", Fluid.of("gtceu:americium", 144));
    extractisotope("berkelium_247", "kubejs:berkelium_247", Fluid.of("gtceu:berkelium", 144));
    extractisotope("berkelium_248", "kubejs:berkelium_248", Fluid.of("gtceu:berkelium", 144));
    extractisotope("californium_249", "kubejs:californium_249", Fluid.of("gtceu:californium", 144));
    extractisotope("californium_250", "kubejs:californium_250", Fluid.of("gtceu:californium", 144));
    extractisotope("californium_251", "kubejs:californium_251", Fluid.of("gtceu:californium", 144));
    extractisotope("californium_252", "kubejs:californium_252", Fluid.of("gtceu:californium", 144));

    function extractgas(recipename, input, output) {
        event.recipes.gtceu.extractor(recipename)
            .itemInputs(input)
            .outputFluids(output)
            .duration(200)
            .EUt(30)
    }
    function extractisotope(recipename, input, output) {
        event.recipes.gtceu.extractor(recipename)
            .itemInputs(input)
            .outputFluids(output)
            .duration(180)
            .EUt(6)
    }
})
