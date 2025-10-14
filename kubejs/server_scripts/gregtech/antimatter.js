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
            .itemInputs("kubejs:protomatter")
            .inputFluids(`kubejs:refined_${type}_antimatter 36`)
            .outputFluids(`kubejs:${type}_antimatter 144`)
            .duration(200)
            .EUt(GTValues.VA[GTValues.ZPM])
    })

    event.recipes.gtceu.centrifuge("protomatter_separation")
        .itemInputs("4x kubejs:protomatter")
        .outputFluids("kubejs:bosonic_antimatter 4", "kubejs:hadronic_antimatter 4", "kubejs:fermionic_antimatter 4")
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    microverse_mission(event, 10, 3, 100).forEach(builder => {
        builder
            .inputFluids("gtceu:oxygen_plasma 16000")
            .itemInputs("kubejs:microversal_alchemy_kit")
            .inputFluids("gtceu:hydrogen 160000")
            .inputFluids("gtceu:helium 40000")
            .damageRate(15)
            .itemOutputs("64x kubejs:protomatter")
            .requiredMicroverse(4) // Corrupted
    })

    event.recipes.gtceu.antimatter_manipulator("antimatter_fuel")
        .inputFluids("kubejs:refined_bosonic_antimatter 72", "kubejs:refined_hadronic_antimatter 72", "kubejs:refined_fermionic_antimatter 72")
        .outputFluids("kubejs:antimatter_fuel 36")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV])

    // Controller Recipes
    event.recipes.gtceu.assembly_line("antimatter_manipulator")
        .itemInputs("monilabs:dimensional_stabilization_netherite_casing", "#gtceu:circuits/uv", "2x gtceu:uv_field_generator", "2x gtceu:double_activated_netherite_plate", "2x gtceu:uv_emitter", "2x gtceu:uv_electric_pump", "3x gtceu:neutronium_normal_fluid_pipe", "32x gtceu:fine_enriched_naquadah_trinium_europium_duranide_wire")
        .inputFluids("gtceu:advanced_soldering_alloy 2304", "gtceu:omnium 576", "gtceu:polybenzimidazole 1152")
        .itemOutputs("gtceu:antimatter_manipulator")
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])
        .stationResearch(b => b
            .researchStack("kubejs:protomatter")
            .CWUt(96, 28800)
            .EUt(GTValues.VA[GTValues.UV])
        )

    event.recipes.gtceu.assembly_line("antimatter_collider")
        .itemInputs("6x monilabs:dimensional_stabilization_netherite_casing", "8x #gtceu:circuits/uv", "16x gtceu:double_activated_netherite_plate", "24x gtceu:hsse_frame", "4x gtceu:uv_field_generator", "6x gtceu:uv_emitter", "10x gtceu:uv_electric_pump", "10x gtceu:superconducting_coil", "10x gtceu:neutronium_large_fluid_pipe", "64x gtceu:fine_enriched_naquadah_trinium_europium_duranide_wire", "64x gtceu:fine_enriched_naquadah_trinium_europium_duranide_wire")
        .inputFluids("gtceu:advanced_soldering_alloy 4608", "gtceu:omnium 1152", "gtceu:polybenzimidazole 2304")
        .itemOutputs("gtceu:antimatter_collider")
        .duration(600)
        .EUt(GTValues.VA[GTValues.UHV])
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
        .EUt(-536870912 * 16)
})
