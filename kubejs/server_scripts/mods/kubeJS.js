ServerEvents.recipes(event => {

    //stabilized stuff

    //einsteinium



    event.recipes.gtceu.fusion_reactor('einsteinium_fusion')
        .inputFluids(Fluid.of('gtceu:berkelium', 16), Fluid.of('gtceu:californium', 16))
        .outputFluids(Fluid.of('gtceu:einsteinium', 16))
        .duration(100)
        .EUt(15360)
        .fusionStartEU(400000000)

    event.recipes.gtceu.fluid_solidifier('stabilized_einsteinium')
        .inputFluids(Fluid.of('gtceu:einsteinium', 144))
        .itemOutputs('16x kubejs:stabilized_einsteinium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.fluid_solidifier('stabilized_berkelium')
        .inputFluids(Fluid.of('gtceu:berkelium', 144))
        .itemOutputs('8x kubejs:stabilized_berkelium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.fluid_solidifier('stabilized_neptunium')
        .inputFluids(Fluid.of('gtceu:neptunium', 144))
        .itemOutputs('2x kubejs:stabilized_neptunium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.fluid_solidifier('stabilized_plutonium')
        .inputFluids(Fluid.of('gtceu:plutonium', 144))
        .itemOutputs('2x kubejs:stabilized_plutonium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.fluid_solidifier('stabilized_plutonium_1')
        .inputFluids(Fluid.of('gtceu:plutonium_241', 144))
        .itemOutputs('2x kubejs:stabilized_plutonium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.fluid_solidifier('stabilized_uranium')
        .inputFluids(Fluid.of('gtceu:uranium', 144))
        .itemOutputs('kubejs:stabilized_uranium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.fluid_solidifier('stabilized_uranium_1')
        .inputFluids(Fluid.of('gtceu:uranium_235', 144))
        .itemOutputs('kubejs:stabilized_uranium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.fluid_solidifier('stabilized_curium')
        .inputFluids(Fluid.of('gtceu:curium', 144))
        .itemOutputs('4x kubejs:stabilized_curium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.fluid_solidifier('stabilized_californium')
        .inputFluids(Fluid.of('gtceu:californium', 144))
        .itemOutputs('8x kubejs:stabilized_californium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.fluid_solidifier('stabilized_americium')
        .inputFluids(Fluid.of('gtceu:americium', 144))
        .itemOutputs('4x kubejs:stabilized_americium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    //SOLIDIFIED STUFF

    event.recipes.gtceu.fluid_solidifier('solidified_argon')
        .inputFluids(Fluid.of('gtceu:argon'))
        .itemOutputs('kubejs:solidified_argon')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)


    event.recipes.gtceu.fluid_solidifier('solidified_chlorine')
        .inputFluids(Fluid.of('gtceu:chlorine'))
        .itemOutputs('kubejs:solidified_chlorine')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)


    event.recipes.gtceu.fluid_solidifier('solidified_fluorine')
        .inputFluids(Fluid.of('gtceu:fluorine'))
        .itemOutputs('kubejs:solidified_fluorine')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)


    event.recipes.gtceu.fluid_solidifier('solidified_helium')
        .inputFluids(Fluid.of('gtceu:helium'))
        .itemOutputs('kubejs:solidified_helium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)


    event.recipes.gtceu.fluid_solidifier('solidified_hydrogen')
        .inputFluids(Fluid.of('gtceu:hydrogen'))
        .itemOutputs('kubejs:solidified_hydrogen')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)


    event.recipes.gtceu.fluid_solidifier('solidified_krypton')
        .inputFluids(Fluid.of('gtceu:krypton'))
        .itemOutputs('kubejs:solidified_krypton')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)


    event.recipes.gtceu.fluid_solidifier('solidified_mercury')
        .inputFluids(Fluid.of('gtceu:mercury'))
        .itemOutputs('kubejs:solidified_mercury')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)


    event.recipes.gtceu.fluid_solidifier('solidified_neon')
        .inputFluids(Fluid.of('gtceu:neon'))
        .itemOutputs('kubejs:solidified_neon')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)


    event.recipes.gtceu.fluid_solidifier('solidified_nitrogen')
        .inputFluids(Fluid.of('gtceu:nitrogen'))
        .itemOutputs('kubejs:solidified_nitrogen')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)


    event.recipes.gtceu.fluid_solidifier('solidified_oxygen')
        .inputFluids(Fluid.of('gtceu:oxygen'))
        .itemOutputs('kubejs:solidified_oxygen')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)


    event.recipes.gtceu.fluid_solidifier('solidified_radon')
        .inputFluids(Fluid.of('gtceu:radon'))
        .itemOutputs('kubejs:solidified_radon')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.fluid_solidifier('solidified_xenon')
        .inputFluids(Fluid.of('gtceu:xenon'))
        .itemOutputs('kubejs:solidified_xenon')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    event.recipes.gtceu.fluid_solidifier('solidified_bromine')
        .inputFluids(Fluid.of('gtceu:bromine'))
        .itemOutputs('kubejs:solidified_bromine')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)
    
    event.recipes.gtceu.fluid_solidifier('mote_of_omnium')
        .inputFluids(Fluid.of('gtceu:omnium', 16))
        .itemOutputs('kubejs:mote_of_omnium')
        .notConsumable('gtceu:ball_casting_mold')
        .duration(20)
        .EUt(7)

    //Thermal Fluids
    event.recipes.gtceu.extractor('primal_mana')
        .itemInputs('kubejs:primal_mana')
        .outputFluids(Fluid.of('kubejs:molten_primal_mana', 250))
        .duration(40)
        .EUt(30)

    event.recipes.gtceu.extractor('cryotheum')
        .itemInputs('kubejs:cryotheum_dust')
        .outputFluids(Fluid.of('kubejs:molten_cryotheum', 250))
        .duration(40)
        .EUt(30)

    event.recipes.gtceu.extractor('pyrotheum')
        .itemInputs('kubejs:pyrotheum_dust')
        .outputFluids(Fluid.of('kubejs:molten_pyrotheum', 250))
        .duration(40)
        .EUt(30)

    event.recipes.gtceu.extractor('aerotheum')
        .itemInputs('kubejs:aerotheum_dust')
        .outputFluids(Fluid.of('kubejs:molten_aerotheum', 250))
        .duration(40)
        .EUt(30)

    event.recipes.gtceu.extractor('petrotheum')
        .itemInputs('kubejs:petrotheum_dust')
        .outputFluids(Fluid.of('kubejs:molten_petrotheum', 250))
        .duration(40)
        .EUt(30)

    // Endest Star
    event.shaped(
        'kubejs:endest_star', [
        ' E ',
        'ESE',
        ' E '
    ], {
        E: 'minecraft:ender_eye',
        S: 'minecraft:nether_star'
    }
    )

    //Space Stuff

    event.recipes.gtceu.macerator('moon_dust')
        .itemInputs('gcyr:moon_sand')
        .itemOutputs('kubejs:moon_dust')
        .duration(200)
        .EUt(400)

    event.recipes.gtceu.macerator('moon_stone')
        .itemInputs('gcyr:moon_stone')
        .itemOutputs('kubejs:moon_dust')
        .duration(200)
        .EUt(400)

    event.recipes.gtceu.autoclave('dilithium_helium')
        .itemInputs('4x gtceu:dilithium_dust')
        .inputFluids('gtceu:helium 1000')
        .itemOutputs('4x kubejs:dilithium_crystal')
        .duration(400)
        .EUt(110)

})
