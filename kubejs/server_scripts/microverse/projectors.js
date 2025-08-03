/**
 * Recipes for crafting Microverse Projectors, Microversium, and Microversium casing.
 */
ServerEvents.recipes(event => {
    // Microversium Dust
    event.recipes.gtceu.mixer("microversium")
        .itemInputs("2x gtceu:steel_dust", "glowstone_dust", "redstone")
        .inputFluids("gtceu:deuterium 1000")
        .itemOutputs("5x gtceu:microversium_dust")
        .duration(300)
        .EUt(GTValues.VA[GTValues.MV])

    // Microverse Casing
    event.shaped("2x monilabs:microverse_casing", [
        "PPP",
        "PWP",
        "PPP"
    ], {
        P: "gtceu:microversium_plate",
        W: "#forge:tools/wrenches"
    }).id("kubejs:shapeless/microverse_casing")

    event.recipes.gtceu.assembler("monilabs:microverse_casing")
        .itemInputs("4x gtceu:microversium_plate")
        .itemOutputs("monilabs:microverse_casing")
        .duration(50)
        .circuit(6)
        .EUt(16)

    // Single-recipe microverse projectors
    let projector = [
        ["basic_microverse_projector", "#gtceu:circuits/hv"],
        ["advanced_microverse_projector", "#gtceu:circuits/ev"],
        ["elite_microverse_projector", "#gtceu:circuits/iv"]
    ]

    projector.forEach(projector => {
        event.shaped(`monilabs:${projector[0]}`, [
            "CMC",
            "MAM",
            "CMC"
        ], {
            C: projector[1],
            M: "monilabs:microverse_casing",
            A: "gtceu:computer_monitor_cover"
        }).id(`kubejs:${projector[0]}`)
    })

    // Hyperbolic Microverse Projector
    event.recipes.extendedcrafting.shaped_table("monilabs:hyperbolic_microverse_projector", [
        "EPFPE",
        "PALAP",
        "FLRLF",
        "PALAP",
        "EPFPE"
    ], {
        E: "gtceu:uv_field_generator",
        P: "gtceu:double_microversium_plate",
        F: "gtceu:uhv_emitter",
        L: "monilabs:microverse_casing",
        A: "#gtceu:circuits/uhv",
        R: "gtceu:computer_monitor_cover"
    }).id("kubejs:shaped/hyperbolic_microverse_projector")

    // Microverse Stability Sensor Hatch
    event.recipes.gtceu.assembler("microverse_stability_sensor_hatch")
        .itemInputs("gtceu:ev_machine_hull", "2x gtceu:microversium_plate", "gtceu:ev_sensor", "3x gtceu:red_alloy_screw")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("monilabs:microverse_stability_sensor_hatch")
        .duration(20 * 3)
        .EUt(GTValues.VA[GTValues.EV])
})
