ServerEvents.recipes(event => {

    event.shapeless('gtceu:red_alloy_dust', ['gtceu:copper_dust', '4x minecraft:redstone']).id('kubejs:shapeless/red_alloy_dust')

    event.shapeless('gtceu:conductive_alloy_dust', ['minecraft:redstone', 'gtceu:iron_dust']).id('kubejs:shapeless/conductive_alloy_dust')

    event.recipes.gtceu.extractor('one_experience_fluid')
        .itemInputs('kubejs:solidified_experience')
        .outputFluids(Fluid.of('enderio:xp_juice', 140))
        .duration(80)
        .EUt(32)

    //Sunnarium plates
    event.remove({ id: 'gtceu:compressor/compress_plate_dust_sunnarium_'})
    event.shaped(
        '4x gtceu:sunnarium_plate', [
            'PPP',
            'PSP',
            'PPP'
        ], {
            P: 'gtceu:hastelloy_c_276_plate',
            S: 'gtceu:sunnarium_dust'
        }
    )

    event.remove({ id: 'gtceu:compressor/compress_plate_dust_enriched_sunnarium_'})
    event.shaped(
        'gtceu:enriched_sunnarium_plate', [
            ' A ',
            'ABA',
            ' A '
        ], {
            A: 'gtceu:enriched_sunnarium_dust',
            B: 'gtceu:sunnarium_plate'
        }
    )

    //Cutting Perfect Gemstones
    event.recipes.gtceu.cutter('cut_perfect_diamond')
        .itemInputs('gtceu:diamond_perfect')
        .inputFluids('gtceu:lubricant 100')
        .itemOutputs('2x gtceu:exquisite_diamond_gem')
        .duration(100)
        .EUt(1920)

    event.recipes.gtceu.cutter('cut_perfect_emerald')
        .itemInputs('gtceu:emerald_perfect')
        .inputFluids('gtceu:lubricant 100')
        .itemOutputs('2x gtceu:exquisite_emerald_gem')
        .duration(100)
        .EUt(1920)

    event.recipes.gtceu.cutter('cut_perfect_ruby')
        .itemInputs('gtceu:ruby_perfect')
        .inputFluids('gtceu:lubricant 100')
        .itemOutputs('2x gtceu:exquisite_ruby_gem')
        .duration(100)
        .EUt(1920)

    event.recipes.gtceu.cutter('cut_perfect_topaz')
        .itemInputs('gtceu:topaz_perfect')
        .inputFluids('gtceu:lubricant 100')
        .itemOutputs('2x gtceu:exquisite_topaz_gem')
        .duration(100)
        .EUt(1920)

        event.recipes.gtceu.cutter('cut_perfect_cinnabar')
        .itemInputs('gtceu:cinnabar_perfect')
        .inputFluids('gtceu:lubricant 100')
        .itemOutputs('2x gtceu:exquisite_cinnabar_gem')
        .duration(100)
        .EUt(1920)

    //DML MATTERS
    event.recipes.gtceu.extractor('overworld_fluid')
        .itemInputs('hostilenetworks:overworld_prediction')
        .outputFluids(Fluid.of('enderio:xp_juice', 200))
        .duration(40)
        .EUt(32)
    event.recipes.gtceu.extractor('nether_experience_fluid')
        .itemInputs('hostilenetworks:nether_prediction')
        .outputFluids(Fluid.of('enderio:xp_juice', 400))
        .duration(80)
        .EUt(32)
    event.recipes.gtceu.extractor('ender_experience_fluid')
        .itemInputs('hostilenetworks:end_prediction')
        .outputFluids(Fluid.of('enderio:xp_juice', 500))
        .duration(100)
        .EUt(32)

    event.recipes.gtceu.fluid_solidifier('one_experience_solid')
        .itemOutputs('kubejs:solidified_experience')
        .inputFluids(Fluid.of('enderio:xp_juice', 140))
        .notConsumable('gtceu:ball_casting_mold')
        .duration(500)
        .EUt(16)

    //NETHER STAR RECIPES
    event.remove({ id: "hostilenetworks:living_matter/extraterrestrial/nether_star" })
    event.remove({ id: "gtceu:implosion_compressor/implodedust_nether_star_tnt" })

    event.recipes.gtceu.forge_hammer('nether_star_block_to_star')
        .itemInputs('gtceu:nether_star_block')
        .itemOutputs('9x minecraft:nether_star')
        .duration(100)
        .EUt(24)

    event.recipes.gtceu.implosion_compressor('implosion_star_tnt')
        .itemInputs('4x gtceu:nether_star_dust', '2x minecraft:tnt', 'gtceu:dark_ash_small_dust')
        .itemOutputs('3x minecraft:nether_star')
        .duration(20)
        .EUt(30)


    //SPACE STUFF

    event.recipes.gtceu.centrifuge('moon_deuterium')
        .itemInputs('kubejs:moon_dust')
        .outputFluids(Fluid.of('gtceu:deuterium', 100))
        .duration(200)
        .EUt(20)

    event.shaped(
        'kubejs:quantum_flux', [
            ' B ',
            'BAB',
            ' B '
        ], {
            A: 'enderio:pulsating_crystal',
            B: 'hostilenetworks:end_prediction'
        }
    )


    event.shaped(
        'kubejs:quantum_flux', [
            ' B ',
            'BAB',
            ' B '
        ], {
            A: 'minecraft:diamond',
            B: 'kubejs:moon_dust'
        }
    )

    //Hot MV ingots
    event.remove({ input: ['gtceu:hot_kanthal_ingot', "gtceu:hot_silicon_ingot"]})
    event.replaceOutput(
        { output: 'gtceu:hot_silicon_ingot' },
        'gtceu:hot_silicon_ingot',
        'gtceu:silicon_ingot'
    )

    //Steel Machine Casing
    event.remove({input: 'gtceu:steel_machine_casing'})
    event.remove({output: 'gtceu:steel_machine_casing'})

    //Ender Pearl dust Electrolysis
    //event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_ender_pearl' })

    // rock breaker
    event.recipes.gtceu.rock_breaker('kubejs:rock_breaker_calcite')
        .notConsumable('minecraft:calcite')
        .itemOutputs('minecraft:calcite')
        .duration(16)
        .EUt(60)
        .addData('fluidA', 'minecraft:lava')
        .addData('fluidB', 'minecraft:water')
})
