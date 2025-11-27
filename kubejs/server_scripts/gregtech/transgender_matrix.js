/**
 * Transgender processing line
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.cracker("mystic_tar_cracking")
        .inputFluids("gtceu:pcb_coolant 200", "gtceu:tritanium 144")
        .outputFluids("gtceu:sludge_of_memory 1296", "gtceu:logical_residue 144")
        .itemInputs("kubejs:crushed_circuit")
        .duration(300)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.recipes.gtceu.cracker("mystic_tar_cracking_essence")
        .inputFluids("gtceu:pcb_coolant 200", "gtceu:essence_of_knowledge 144")
        .outputFluids("gtceu:sludge_of_memory 500", "gtceu:logical_residue 500")
        .itemInputs("kubejs:crushed_circuit")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.recipes.gtceu.brewery("mystic_essence_brewing")
        .inputFluids("gtceu:sludge_of_memory 1000")
        .itemInputs("gtceu:duranium_dust")
        .outputFluids("gtceu:essence_of_knowledge 1000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.LuV])

    event.recipes.gtceu.brewery("mystic_essence_brewing_supercharged")
        .inputFluids("gtceu:sludge_of_memory 1000")
        .itemInputs("kubejs:sparks_of_conscience")
        .outputFluids("gtceu:essence_of_knowledge 4000")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM])

    event.recipes.gtceu.mixer("infused_oils_mixer")
        .inputFluids("gtceu:logical_residue 300", "gtceu:essence_of_knowledge 1000")
        .outputFluids("gtceu:considerate_oils 500")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LuV])

    event.recipes.gtceu.autoclave("supercharged_powder_autoclave")
        .inputFluids("gtceu:considerate_oils 300")
        .itemInputs("gtceu:platinum_dust")
        .itemOutputsRanged("kubejs:sparks_of_conscience", 1, 2)
        .duration(100)
        .EUt(GTValues.VHA[GTValues.UV])

    event.recipes.gtceu.mixer("trans_will_mixer")
        .inputFluids("gtceu:essence_of_knowledge 1000")
        .itemInputs("kubejs:sparks_of_conscience")
        .outputFluids("gtceu:transcendental_spirit 48")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.UV])

    event.recipes.gtceu.quintessence_infuser("trans_matrix_infusion")
        .itemInputs("kubejs:transcendental_soul_vial", "monilabs:crystal_matrix_ingot")
        .inputFluids("gtceu:considerate_oils 200")
        .itemOutputs("monilabs:transcendental_matrix_ingot", "enderio:empty_soul_vial")
        .duration(128)
        .EUt(GTValues.VHA[GTValues.ZPM])

    // this is horrible but i can't figure out how to get it to work more efficiently
    event.recipes.gtceu.macerator("crushed_circuit_ev")
        .itemInputs("#gtceu:circuits/ev")
        .itemOutputs(Item.of("kubejs:crushed_circuit", 1))
        .duration(20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.macerator("crushed_circuit_iv")
        .itemInputs("#gtceu:circuits/iv")
        .itemOutputs(Item.of("kubejs:crushed_circuit", 2))
        .duration(20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.macerator("crushed_circuit_luv")
        .itemInputs("#gtceu:circuits/luv")
        .itemOutputs(Item.of("kubejs:crushed_circuit", 4))
        .duration(20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.macerator("crushed_circuit_zpm")
        .itemInputs("#gtceu:circuits/zpm")
        .itemOutputs(Item.of("kubejs:crushed_circuit", 8))
        .duration(20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.macerator("crushed_circuit_uv")
        .itemInputs("#gtceu:circuits/uv")
        .itemOutputs(Item.of("kubejs:crushed_circuit", 16))
        .duration(20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.macerator("crushed_circuit_uhv")
        .itemInputs("#gtceu:circuits/uhv")
        .itemOutputs(Item.of("kubejs:crushed_circuit", 32))
        .duration(20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.macerator("crushed_circuit_uev")
        .itemInputs("#gtceu:circuits/uev")
        .itemOutputs(Item.of("kubejs:crushed_circuit", 64))
        .duration(20)
        .EUt(GTValues.VA[GTValues.HV])

    // Discharger function doesn't support fluids. 3:<
    event.recipes.gtceu.discharger("kubejs:transcendental_soul")
        .itemInputs("4x enderio:empty_soul_vial", "3x gtceu:dark_soularium_plate", Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT(), Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT())
        .inputFluids("gtceu:transcendental_spirit 192")
        .itemOutputs("4x kubejs:transcendental_soul_vial")
        .duration(10)
})
