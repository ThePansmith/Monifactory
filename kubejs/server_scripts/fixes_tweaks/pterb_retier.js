/**
 * Re-tiers the PTERB to late LuV - script 1 of 2.
 * - Replaces UV components with LuV components.
 */
ServerEvents.recipes(event => {
    event.remove({ id: "gtceu:assembly_line/pterb" })

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
    .outputItems("gtmutils:pterb_machine")
    .stationResearch(b => b
                .researchStack("gtceu:active_transformer")
                .CWUt(16, 64000)
                .EUt(30720)
            )
 })
