/**
 * Define recipes for Hardened/Naquadah casings and ICE
 */
ServerEvents.recipes(event => {
    event.shaped("2x kubejs:hardened_machine_casing", [
        "PHP",
        "PFP",
        "PWP"
    ], {
        P: "#forge:plates/naquadah",
        H: "#forge:tools/hammers",
        W: "#forge:tools/wrenches",
        F: "#forge:frames/enriched_naquadah",
    }).id("gtceu:shaped/hardened_machine_casing")

    event.recipes.gtceu.assembler("hardened_machine_casing")
        .itemInputs("6x #forge:plates/naquadah", "#forge:frames/enriched_naquadah")
        .itemOutputs("2x kubejs:hardened_machine_casing")
        .circuit(6)
        .duration(50)
        .EUt(16)

    event.shaped("2x kubejs:naquadah_pipe_casing", [
        "NPN",
        "PFP",
        "NPN"
    ], {
        N: "#forge:plates/naquadah",
        P: "gtceu:naquadah_normal_fluid_pipe",
        F: "#forge:frames/enriched_naquadah",
    }).id("gtceu:shaped/naquadah_pipe_casing")

    /*  // So it turns out that pipe casings don't have assembler recipes?
    event.recipes.gtceu.assembler("naquadah_pipe_casing")
        .itemInputs("4x #forge:plates/naquadah", "4x gtceu:naquadah_normal_fluid_pipe", "#forge:frames/enriched_naquadah")
        .itemOutputs("2x kubejs:naquadah_pipe_casing")
        .circuit(4)
        .duration(50)
        .EUt(16)
    */

    event.shaped("2x kubejs:naquadah_gearbox", [
        "PHP",
        "GFG",
        "PWP"
    ], {
        P: "#forge:plates/naquadah",
        H: "#forge:tools/hammers",
        W: "#forge:tools/wrenches",
        F: "#forge:frames/enriched_naquadah",
        G: "#forge:gears/naquadah",
    }).id("gtceu:shaped/naquadah_gearbox")

    event.recipes.gtceu.assembler("naquadah_gearbox")
        .itemInputs("4x #forge:plates/naquadah", "2x #forge:gears/naquadah", "#forge:frames/enriched_naquadah")
        .itemOutputs("2x kubejs:naquadah_gearbox")
        .circuit(4)
        .duration(50)
        .EUt(16)

    event.shaped("2x kubejs:insane_engine_intake_casing", [
        "PHP",
        "RCR",
        "PWP"
    ], {
        P: "gtceu:naquadah_normal_fluid_pipe",
        H: "#forge:tools/hammers",
        W: "#forge:tools/wrenches",
        C: "kubejs:hardened_machine_casing",
        R: "#forge:rotors/naquadah",
    }).id("gtceu:shaped/insane_engine_intake_casing")

    event.recipes.gtceu.assembler("insane_engine_intake_casing")
        .itemInputs("2x #forge:rotors/naquadah", "4x gtceu:naquadah_normal_fluid_pipe", "kubejs:hardened_machine_casing")
        .itemOutputs("2x kubejs:insane_engine_intake_casing")
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembly_line("insane_combustion_engine")
        .itemInputs(
            "kubejs:hardened_machine_casing",
            "3x #forge:gears/naquadah",
            "4x gtceu:luv_electric_piston",
            "2x gtceu:luv_electric_motor",
            "#gtceu:circuits/zpm",
            "2x gtceu:naquadah_single_cable"
        )
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:iridium 576")
        .itemOutputs("gtceu:insane_combustion_engine")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LuV])
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("gtceu:extreme_combustion_engine").EUt(GTValues.VA[GTValues.IV]).duration(1800))
});
