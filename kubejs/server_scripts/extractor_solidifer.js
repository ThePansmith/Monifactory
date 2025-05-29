/**
 * Extraction and solidification recipes for NC and GT
 */
ServerEvents.recipes(event => {
    // Solidified to Gas
    extractgas("neon", "kubejs:solidified_neon", Fluid.of("gtceu:neon", 1000));
    extractgas("krypton", "kubejs:solidified_krypton", Fluid.of("gtceu:krypton", 1000));
    extractgas("xenon", "kubejs:solidified_xenon", Fluid.of("gtceu:xenon", 1000));
    extractgas("argon", "kubejs:solidified_argon", Fluid.of("gtceu:argon", 1000));

    extractisotope("neptunium", "kubejs:neptunium", Fluid.of("gtceu:neptunium", 144));
    extractisotope("curium", "kubejs:curium", Fluid.of("gtceu:curium", 144));
    extractisotope("berkelium", "kubejs:berkelium", Fluid.of("gtceu:berkelium", 144));
    extractisotope("californium", "kubejs:californium", Fluid.of("gtceu:californium", 144))
    extractisotope("einsteinium", "kubejs:einsteinium", Fluid.of("gtceu:einsteinium", 144))

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
