/**
 * Re-tiers the PTERB to late LuV - script 1 of 2.
 * - Replaces UV components with LuV components.
 */
ServerEvents.recipes(event => {
    event.remove({ id: "gtceu:assembly_line/pterb" })
    event.remove({ id: "gtceu:research_station/1_x_gtceu_active_transformer" })

    event.recipes.gtceu.assembly_line("pterb")
        .itemInputs("gtceu:active_transformer")
        .itemInputs("32x gtceu:europium_plate")
        .itemInputs("8x gtceu:luv_sensor")
        .itemInputs("8x gtceu:luv_emitter")
        .itemInputs("4x gtceu:luv_field_generator")
        .itemInputs("2x #gtceu:circuits/zpm")
        .itemInputs("4x gtceu:europium_large_fluid_pipe")
        .itemInputs("8x gtceu:niobium_titanium_quadruple_cable")
        .itemInputs("8x gtceu:normal_laser_pipe")
        .inputFluids("gtceu:soldering_alloy 4608")
        .EUt(GTValues.VA[GTValues.ZPM])
        .duration(1200)
        .itemOutputs("gtmutils:pterb_machine")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b
            .researchStack("gtceu:active_transformer")
            .duration(2400)
            .EUt(7680)
        )
})
