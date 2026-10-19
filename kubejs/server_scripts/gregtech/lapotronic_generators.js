/**
 * Lapotronic Generator multiblock
 */

ServerEvents.recipes(event => {

    // LLG
    event.recipes.gtceu.shaped("monilabs:large_lapotronic_generator", [
        "WCW",
        "LHL",
        "GEG"
    ], {
        W: "gtceu:platinum_quadruple_wire",
        C: "#gtceu:circuits/iv",
        L: "gtceu:energium_block",
        H: "gtceu:ev_machine_hull",
        G: "gtceu:titanium_gear",
        E: "gtceu:ev_emitter"
    }).addMaterialInfo()

    // ELG
    event.recipes.gtceu.shapedshaped("monilabs:extreme_lapotronic_generator", [
        "WCW",
        "LHL",
        "GEG"
    ], {
        W: "gtceu:neptunium_palladium_aluminium_quadruple_wire",
        C: "#gtceu:circuits/luv",
        L: "gtceu:lapotron_block",
        H: "gtceu:iv_machine_hull",
        G: "gtceu:tungsten_steel_gear",
        E: "gtceu:iv_emitter"
    }).addMaterialInfo()

    event.recipes.gtceu.assembler("energetic_titanium_casing")
        .itemInputs("2x gtceu:double_titanium_plate", "gtceu:energium_block", "gtceu:titanium_frame")
        .itemOutputs("2x monilabs:energetic_titanium_casing")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)

    event.recipes.gtceu.assembler("lapotronic_tungstensteel_casing")
        .itemInputs("2x gtceu:double_tungsten_steel_plate", "gtceu:lapotron_block", "gtceu:tungsten_steel_frame")
        .itemOutputs("2x monilabs:lapotronic_tungstensteel_casing")
        .EUt(GTValues.VA[GTValues.LV])
        .duration(50)
})
