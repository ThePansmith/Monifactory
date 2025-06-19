/**
 * Subatomic Digital Assembler multiblock
 */
ServerEvents.recipes(event => {

    function sda_print(input, circuit, output, cwut) {
        event.recipes.gtceu.subatomic_digital_assembly(`kubejs:${input}_${circuit}`)
            .notConsumable(`kubejs:${input}`)
            .circuit(circuit)
            .itemOutputs(output)
            .CWUt(cwut)
            .totalCWU(cwut * 500)  // cwu/t multiplied by duration
            .EUt(100000) // same for all recipes
    }


    event.recipes.extendedcrafting.shaped_table("gtceu:subatomic_digital_assembler", [
        "ECFCE",
        "CALAC",
        "GLRLG",
        "CALAC",
        "ECUCE"
    ], {
        E: "gtceu:zpm_emitter",
        C: "ae2:controller",
        F: "gtceu:luv_field_generator",
        A: "gtceu:atomic_casing",
        L: "#gtceu:circuits/luv",
        G: "gtceu:zpm_field_generator",
        R: "gtceu:research_station",
        U: "gtceu:uv_field_generator"
    }).id("kubejs:shaped/subatomic_digital_assembler")

    sda_print("creative_computation_data", 1, "gtceu:creative_data_access_hatch", 256)
    sda_print("creative_computation_data", 2, "gtceu:creative_computation_provider", 256)
    sda_print("creative_energy_data", 1, "enderio:creative_power", 256)
    sda_print("creative_energy_data", 2, "ae2:creative_energy_cell", 256)
    sda_print("creative_energy_data", 3, "gtceu:creative_energy", 256)

    event.recipes.gtceu.subatomic_digital_assembly("kubejs:corrupted_data")
        .itemInputs("kubejs:universe_creation_data")
        .itemOutputs("kubejs:shattered_universe_data")
        .EUt(16000)
        .circuit(1)
        .totalCWU(6400)
        .CWUt(32)

    event.recipes.gtceu.subatomic_digital_assembly("shatteredstardata")
        .itemInputs("kubejs:stellar_creation_data")
        .itemOutputs("kubejs:shattered_star_data")
        .EUt(16000)
        .circuit(1)
        .totalCWU(800)
        .CWUt(16)

    event.recipes.gtceu.subatomic_digital_assembly("omnicdata")
        .notConsumable("kubejs:omnic_data")
        .itemOutputs("gtceu:omnium_ingot")
        .EUt(16000)
        .circuit(1)
        .totalCWU(160)
        .CWUt(16)

})
