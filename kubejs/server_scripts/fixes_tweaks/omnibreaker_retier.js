/**
 * Re-tier Omnibreaker to require Naquadah,
 * putting it later in IV to give the IV power unit some time to shine.
 */
ServerEvents.recipes(event => {
    // Recipe automatically overwrites the previous recipe with the same ID
    event.recipes.gtceu.assembler("omnibreaker")
        .itemInputs(
            "gtceu:iv_power_unit",
            "2x #gtceu:circuits/iv",
            "gtceu:iv_emitter",
            "3x gtceu:platinum_quadruple_cable",
            "2x gtceu:naquadah_plate",
            "4x gtceu:naquadah_screw"
        )
        .itemOutputs("gtmutils:omnibreaker")
        .duration(60 * 20)
        .EUt(GTValues.VA[GTValues.IV])
})
