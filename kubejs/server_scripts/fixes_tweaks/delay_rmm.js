/**
 * Forces players to build at least one (1) T4MM before getting IV hatches
 * and simultaneously delay the necessity to process Rarest Metal Mixture to LuV.
 *
 * Changes the IV voltage coil to use Neptunium Palladium Aluminium
 * Changes IV Sensor/Emitter to use Rhodium instead of Iridium.
 * Changes ABS casing recipes to require more pre-RMM Ru/Rh
 * Changes the RMM separation recipe to use 2A IV instead of 1A IV to force usage of the IV energy hatch.
 *
 * Also adds a mixer recipe for Neptunium Palladium Aluminium.
 */

ServerEvents.recipes(event => {
    event.replaceInput({ id: "gtceu:assembler/voltage_coil_iv" }, "gtceu:fine_iridium_wire", "gtceu:fine_neptunium_palladium_aluminium_wire")
    event.replaceInput([{ output: "gtceu:iv_sensor" }, { output: "gtceu:iv_emitter" }], "gtceu:iridium_rod", "gtceu:rhodium_rod")
    event.remove({ id: "gtceu:assembler/casing_high_temperature_smelting" })

    event.recipes.gtceu.assembler("casing_high_temperature_smelting")
        .itemInputs("2x gtceu:titanium_carbide_plate", "2x gtceu:ruthenium_plate", "2x gtceu:hsla_steel_plate", "gtceu:tungsten_carbide_frame")
        .itemOutputs("2x gtceu:high_temperature_smelting_casing")
        .circuit(6)
        .duration(50)
        .EUt(GTValues.VH[GTValues.LV]) //Yes, original recipe is VH, not VHA
    
    event.replaceInput([{ output: "gtceu:heat_vent"}], "gtceu:long_molybdenum_disilicide_rod", "gtceu:long_rhodium_rod")

    event.recipes.gtceu.mixer("neptunium_palladium_aluminium")
        .itemInputs("gtceu:neptunium_dust", "5x gtceu:palladium_dust", "2x gtceu:aluminium_dust")
        .circuit(1)
        .itemOutputs("8x gtceu:neptunium_palladium_aluminium_dust")
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])

    if(!doHarderProcessing) {
        event.recipes.gtceu.chemical_reactor("rarest_metal_mixture_separation")
            .itemInputs("7x gtceu:rarest_metal_mixture_dust")
            .inputFluids("gtceu:hydrochloric_acid 4000")
            .itemOutputs("5x gtceu:iridium_metal_residue_dust")
            .outputFluids("gtceu:acidic_osmium_solution 2000")
            .outputFluids("gtceu:hydrogen 3000")
            .duration(400)
            .EUt(GTValues.VHA[GTValues.LuV])
    }
})
