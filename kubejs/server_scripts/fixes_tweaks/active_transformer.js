/**
 * Lowers the tiering of Active Transformers from LuV to IV - script 2 of 2.
 * - Changes recipes of High Power Casings and the Active Transformer machine to make them accessible earlier
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler("high_power_casing")
        .itemInputs(
            "#forge:frames/iridium",
            "6x #forge:plates/iridium",
            "#gtceu:circuits/ev",
            "16x #forge:fine_wires/cobalt",
            "16x #forge:fine_wires/copper",
            "2x gtceu:platinum_single_wire",
        )
        .itemOutputs("2x gtceu:high_power_casing")
        .duration(100).EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler("active_transformer")
        .itemInputs(
            "gtceu:iv_transformer_16a",
            "#gtceu:circuits/luv",
            "8x gtceu:samarium_iron_arsenic_oxide_single_wire",
            "2x gtceu:hpic_chip"
        )
        .inputFluids("gtceu:sodium_potassium 1000")
        .itemOutputs("gtceu:active_transformer")
        .duration(300).EUt(GTValues.VA[GTValues.IV])
    // Lowers the voltage at which the laser pipes can be made to post plat-line IV
    event.replaceInput({ output: "gtceu:normal_laser_pipe" }, "gtceu:osmiridium_foil", "gtceu:rhodium_foil")
})
