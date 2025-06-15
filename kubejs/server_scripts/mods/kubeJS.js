/**
 * Custom recipes for Monifactory
 */
ServerEvents.recipes(event => {
    // Stablized
    event.recipes.gtceu.fusion_reactor("einsteinium_fusion")
        .inputFluids(Fluid.of("gtceu:berkelium", 16), Fluid.of("gtceu:californium", 16))
        .outputFluids(Fluid.of("gtceu:einsteinium", 16))
        .duration(100)
        .EUt(15360)
        .fusionStartEU(400000000)

    solidify("stabilized_einsteinium", Fluid.of("gtceu:einsteinium", 144), "16x kubejs:stabilized_einsteinium");
    solidify("stabilized_berkelium", Fluid.of("gtceu:berkelium", 144), "8x kubejs:stabilized_berkelium");
    solidify("stabilized_neptunium", Fluid.of("gtceu:neptunium", 144), "2x kubejs:stabilized_neptunium");
    solidify("stabilized_plutonium", Fluid.of("gtceu:plutonium", 144), "2x kubejs:stabilized_plutonium");
    solidify("stabilized_plutonium_1", Fluid.of("gtceu:plutonium_241", 144), "2x kubejs:stabilized_plutonium");
    solidify("stabilized_uranium", Fluid.of("gtceu:uranium", 144), "kubejs:stabilized_uranium");
    solidify("stabilized_uranium_1", Fluid.of("gtceu:uranium_235", 144), "kubejs:stabilized_uranium");
    solidify("stabilized_curium", Fluid.of("gtceu:curium", 144), "4x kubejs:stabilized_curium");
    solidify("stabilized_californium", Fluid.of("gtceu:californium", 144), "8x kubejs:stabilized_californium");
    solidify("stabilized_americium", Fluid.of("gtceu:americium", 144), "4x kubejs:stabilized_americium");
    solidify("solidified_argon", Fluid.of("gtceu:argon"), "kubejs:solidified_argon");
    solidify("solidified_chlorine", Fluid.of("gtceu:chlorine"), "kubejs:solidified_chlorine");
    solidify("solidified_fluorine", Fluid.of("gtceu:fluorine"), "kubejs:solidified_fluorine");
    solidify("solidified_helium", Fluid.of("gtceu:helium"), "kubejs:solidified_helium");
    solidify("solidified_hydrogen", Fluid.of("gtceu:hydrogen"), "kubejs:solidified_hydrogen");
    solidify("solidified_krypton", Fluid.of("gtceu:krypton"), "kubejs:solidified_krypton");
    solidify("solidified_mercury", Fluid.of("gtceu:mercury"), "kubejs:solidified_mercury");
    solidify("solidified_neon", Fluid.of("gtceu:neon"), "kubejs:solidified_neon");
    solidify("solidified_nitrogen", Fluid.of("gtceu:nitrogen"), "kubejs:solidified_nitrogen");
    solidify("solidified_oxygen", Fluid.of("gtceu:oxygen"), "kubejs:solidified_oxygen");
    solidify("solidified_radon", Fluid.of("gtceu:radon"), "kubejs:solidified_radon");
    solidify("solidified_xenon", Fluid.of("gtceu:xenon"), "kubejs:solidified_xenon");


    function solidify(recipename, input, output) {
        event.recipes.gtceu.fluid_solidifier(recipename)
            .inputFluids(input)
            .itemOutputs(output)
            .notConsumable("gtceu:ball_casting_mold")
            .duration(500)
            .EUt(16)
    }

    // Thermal Fluids
    thermalextract("primal_mana", "kubejs:primal_mana", Fluid.of("gtceu:mana", 250));
    thermalextract("cryotheum", "kubejs:cryotheum_dust", Fluid.of("kubejs:molten_cryotheum", 250));
    thermalextract("pyrotheum", "kubejs:pyrotheum_dust", Fluid.of("kubejs:molten_pyrotheum", 250));
    thermalextract("aerotheum", "kubejs:aerotheum_dust", Fluid.of("kubejs:molten_aerotheum", 250));
    thermalextract("petrotheum", "kubejs:petrotheum_dust", Fluid.of("kubejs:molten_petrotheum", 250));

    function thermalextract(recipename, input, output) {
        event.recipes.gtceu.extractor(recipename)
            .itemInputs(input)
            .outputFluids(output)
            .duration(40)
            .EUt(30)
    }

    // Endest Star
    event.shaped("kubejs:endest_star", [
        " E ",
        "ESE",
        " E "
    ], {
        E: "minecraft:ender_eye",
        S: "minecraft:nether_star"
    })
})
