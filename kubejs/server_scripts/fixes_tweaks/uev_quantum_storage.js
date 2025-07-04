/**
 * Recipes for UEV Hermetic Casing, Quantum Chest, Quantum Tank.
 * Even with post-UV content enabled, GTM doesn't generate these items or recipes.
 */
ServerEvents.recipes(event => {
    event.shaped("gtceu:uev_hermetic_casing", [
        "PPP",
        "PFP",
        "PPP"
    ], {
        P: "#forge:plates/infinity",
        F: "gtceu:activated_netherite_huge_fluid_pipe"
    })

    event.shaped("gtceu:uev_quantum_tank", [
        "CFC",
        "PHP",
        "CEC"
    ], {
        P: "#forge:plates/infinity",
        F: "gtceu:uv_field_generator",
        C: "#gtceu:circuits/uev",
        H: "gtceu:uev_hermetic_casing",
        E: "gtceu:uhv_electric_pump"
    })

    event.shaped("gtceu:uev_quantum_chest", [
        "CPC",
        "PHP",
        "CFC"
    ], {
        P: "#forge:plates/infinity",
        F: "gtceu:uv_field_generator",
        C: "#gtceu:circuits/uev",
        H: "gtceu:uev_machine_hull",
    })
})
