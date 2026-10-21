/**
 * Lapotron and Energium fixes
 */

ServerEvents.recipes(event => {
    event.remove({ output: "gtceu:energy_crystal" })
    event.remove({ output: "gtceu:lapotron_gem" })
    event.remove({ output: "gtceu:lapotron_crystal" })

    event.recipes.gtceu.autoclave("energium_red_alloy")
        .itemInputs("gtceu:energium_dust")
        .inputFluids("gtceu:red_alloy 72")
        .itemOutputs("gtceu:energium_gem")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(50)

    event.recipes.gtceu.autoclave("energium_red_steel")
        .itemInputs("gtceu:energium_dust")
        .inputFluids("gtceu:red_steel 36")
        .itemOutputs("gtceu:energium_gem")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(15)

    event.recipes.gtceu.laser_engraver("energy_crystal")
        .itemInputs("gtceu:energium_block", "#gtceu:circuits/mv")
        .itemOutputs("gtceu:energy_crystal")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(150)

    event.recipes.gtceu.autoclave("lapotron_blue_alloy")
        .itemInputs("gtceu:lapotron_dust")
        .inputFluids("gtceu:blue_alloy 72")
        .itemOutputs("gtceu:lapotron_gem")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(50)

    event.recipes.gtceu.autoclave("lapotron_blue_steel")
        .itemInputs("gtceu:lapotron_dust")
        .inputFluids("gtceu:blue_steel 36")
        .itemOutputs("gtceu:lapotron_gem")
        .EUt(GTValues.VA[GTValues.HV])
        .duration(15)

    event.recipes.gtceu.compressor("lapotron_block")
        .itemInputs("15x gtceu:lapotron_gem")
        .itemOutputs("gtceu:lapotron_block")
        .EUt(GTValues.VHA[GTValues.MV])
        .duration(300)

    event.recipes.gtceu.laser_engraver("lapotron_crystal")
        .itemInputs("gtceu:lapotron_block", "2x #gtceu:circuits/hv")
        .itemOutputs("gtceu:lapotron_crystal")
        .EUt(GTValues.VA[GTValues.EV])
        .duration(600)
})
