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
    // Replace MaterialInfo for the above replaceInputs for correct decomposition recipes
    $ItemMaterialData.clearMaterialInfo(GTItems.VOLTAGE_COIL_IV)
    $ItemMaterialData.clearMaterialInfo(GTItems.SENSOR_IV)
    $ItemMaterialData.clearMaterialInfo(GTItems.EMITTER_IV)
    $ItemMaterialData.registerMaterialInfo(GTItems.VOLTAGE_COIL_IV, new $ItemMaterialInfo(
        new $MaterialStack(GTMaterials.get("neptunium_palladium_aluminium"), GTValues.M * 2),
        new $MaterialStack(GTMaterials.Neodymium, GTValues.M / 2)
    ))
    $ItemMaterialData.registerMaterialInfo(GTItems.SENSOR_IV, new $ItemMaterialInfo(
        new $MaterialStack(GTMaterials.TungstenSteel, GTValues.M * 4),
        new $MaterialStack(GTMaterials.Rhodium, GTValues.M / 2)
    ))
    $ItemMaterialData.registerMaterialInfo(GTItems.EMITTER_IV, new $ItemMaterialInfo(
        new $MaterialStack(GTMaterials.Rhodium, GTValues.M * 2),
        new $MaterialStack(GTMaterials.Rubber, GTValues.M * 2),
        new $MaterialStack(GTMaterials.Tungsten, GTValues.M)
    ))

    event.remove({ id: "gtceu:assembler/casing_high_temperature_smelting" })
    event.remove({ output: "gtceu:heat_vent"})
    event.remove({ id: "gtceu:assembler/casing_palladium_substation"})

    event.recipes.gtceu.assembler("casing_high_temperature_smelting")
        .itemInputs("2x gtceu:titanium_carbide_plate", "2x gtceu:ruthenium_plate", "2x gtceu:hsla_steel_plate", "gtceu:tungsten_carbide_frame")
        .itemOutputs("2x gtceu:high_temperature_smelting_casing")
        .circuit(6)
        .duration(50)
        .EUt(GTValues.VH[GTValues.LV]) // Yes, original recipes are VH, not VHA
        .addMaterialInfo(true)

    event.recipes.gtceu.assembler("heat_vent")
        .itemInputs("3x #forge:plates/tantalum_carbide", "2x #forge:double_plates/molybdenum_disilicide", "#forge:rotors/titanium", "#forge:rods/long/rhodium")
        .itemOutputs("2x gtceu:heat_vent")
        .duration(50)
        .EUt(GTValues.VH[GTValues.LV])
        .addMaterialInfo(true)

    event.recipes.gtceu.assembler("casing_palladium_substation")
        .itemInputs("6x #forge:plates/palladium", "#forge:frames/platinum")
        .itemOutputs("2x gtceu:palladium_substation")
        .circuit(6)
        .duration(50)
        .EUt(GTValues.VH[GTValues.LV])
        .addMaterialInfo(true)

    // Downtier PSS fully into EV and fix material info at the same time
    event.recipes.gtceu.shaped("gtceu:power_substation", [
        "LML",
        "IPI",
        "LML"
    ], {
        L: "gtceu:lapotron_crystal",
        M: "gtceu:mpic_chip",
        I: "#gtceu:circuits/iv",
        P: "gtceu:palladium_substation"
    }).id("gtceu:shaped/power_substation").addMaterialInfo()


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
            .duration(100)
            .EUt(GTValues.VHA[GTValues.LuV])
    }
})
