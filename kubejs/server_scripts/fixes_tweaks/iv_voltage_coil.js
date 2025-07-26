/**
 * Changes the IV voltage coil to use Neptunium Palladium Aluminium,
 * to force players to build at least one(1) fission reactor for LEU-235 before entering IV
 * and simultaneously delay the necessity to process Rarest Metal Mixture to LuV.
 *
 * Also adds a mixer recipe for Neptunium Palladium Aluminium.
 */

ServerEvents.recipes(event => {
    event.replaceInput({ id: "gtceu:assembler/voltage_coil_iv" }, "gtceu:fine_iridium_wire", "gtceu:fine_neptunium_palladium_aluminium_wire")

    event.recipes.gtceu.mixer("neptunium_palladium_aluminium")
        .itemInputs("gtceu:neptunium_dust", "5x gtceu:palladium_dust", "2x gtceu:aluminium_dust")
        .circuit(1)
        .itemOutputs("8x gtceu:neptunium_palladium_aluminium_dust")
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.EV])
})
