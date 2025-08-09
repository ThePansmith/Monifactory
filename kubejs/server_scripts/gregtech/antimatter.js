/**
 * Antimatter-related recipes
 */
ServerEvents.recipes(event => {
    // Antimatter Creation
    const types = ["bosonic", "hadronic", "fermionic"]
    types.forEach((type, index) => {
        event.recipes.gtceu.antimatter_manipulator(`${type}_upgrade`)
            .inputFluids(`kubejs:${type}_antimatter 144`, `kubejs:${types[(index + 1) % types.length]}_antimatter 72`)
            .outputFluids(`kubejs:refined_${type}_antimatter 72`)
            .addData("antimatterRandom", true)
            .duration(200)
            .EUt(GTValues.VA[GTValues.ZPM])

        event.recipes.gtceu.antimatter_manipulator(`${type}_downgrade`)
            .itemInputs("4x kubejs:protomatter")
            .inputFluids(`kubejs:refined_${type}_antimatter 36`)
            .outputFluids(`kubejs:${type}_antimatter 144`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.ZPM])
    })

    event.recipes.gtceu.centrifuge("protomatter_separation")
        .itemInputs("16x kubejs:protomatter")
        .outputFluids("kubejs:bosonic_antimatter 4", "kubejs:hadronic_antimatter 4", "kubejs:fermionic_antimatter 4")
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.microverse("protomatter_stellar")
        .itemInputs("kubejs:microminer_t9", "kubejs:microversal_alchemy_kit")
        .inputFluids("gtceu:hydrogen 16000")
        .itemOutputs("kubejs:microminer_t9", "16x kubejs:protomatter")
        .addData("projector_tier", 3)
        .requiredMicroverse(1) // Normal
        .damageRate(50)
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.microverse("protomatter_universal")
        .itemInputs("kubejs:microminer_t10", "kubejs:microversal_alchemy_kit")
        .inputFluids("gtceu:hydrogen 32000")
        .itemOutputs("kubejs:microminer_t10", "64x kubejs:protomatter")
        .addData("projector_tier", 3)
        .requiredMicroverse(4) // Corrupted
        .damageRate(40)
        .duration(400)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.antimatter_manipulator("antimatter_fuel")
        .inputFluids("kubejs:refined_bosonic_antimatter 72", "kubejs:refined_hadronic_antimatter 72", "kubejs:refined_fermionic_antimatter 72")
        .outputFluids("kubejs:antimatter_fuel 10")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UEV])

    // Controller Recipes
    event.recipes.gtceu.assembly_line("antimatter_manipulator")
        .itemInputs("kubejs:bioalloy_fusion_casing", "#gtceu:circuits/uhv", "2x gtceu:uhv_field_generator", "2x gtceu:double_sculk_bioalloy_plate", "2x gtceu:uhv_emitter", "2x gtceu:uhv_electric_pump", "6x gtceu:neutronium_large_fluid_pipe", "32x gtceu:fine_ruthenium_trinium_americium_neutronate_wire")
        .inputFluids("gtceu:advanced_soldering_alloy 2304", "gtceu:omnium 576", "gtceu:polyethyl_cyanoacrylate 1152")
        .itemOutputs("gtceu:antimatter_manipulator")
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b
            .researchStack("kubejs:bioalloy_fusion_casing")
            .CWUt(96, 28800)
            .EUt(GTValues.VA[GTValues.UV])
        )

    event.recipes.gtceu.assembly_line("antimatter_collider")
        .itemInputs("6x kubejs:bioalloy_fusion_casing", "8x #gtceu:circuits/uhv", "16x gtceu:double_sculk_bioalloy_plate", "24x gtceu:hsse_frame", "12x solarflux:sp_custom_hadal", "4x gtceu:uhv_field_generator", "6x gtceu:uhv_emitter", "10x gtceu:uhv_electric_pump", "10x gtceu:superconducting_coil", "10x gtceu:neutronium_huge_fluid_pipe", "64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire", "64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire")
        .inputFluids("gtceu:advanced_soldering_alloy 4608", "gtceu:omnium 1152", "gtceu:polyethyl_cyanoacrylate 2304")
        .itemOutputs("gtceu:antimatter_collider")
        .duration(600)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b
            .researchStack("gtceu:implosion_collider")
            .CWUt(96, 28800)
            .EUt(GTValues.VA[GTValues.UV])
        )

    // Powergen Recipes
    event.recipes.gtceu.anti_collider("annihilation_neutronium")
        .inputFluids("kubejs:antimatter_fuel 1", "gtceu:neutronium 1")
        .duration(1)
        .EUt(-536870912)

    event.recipes.gtceu.anti_collider("annihilation_infinity")
        .inputFluids("kubejs:antimatter_fuel 1", "gtceu:infinity 1")
        .duration(1)
        .EUt(-536870912 * 4)
})
