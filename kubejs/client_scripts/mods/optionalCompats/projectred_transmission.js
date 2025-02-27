/**
 * Hide items from Project Red: Transmission if the mod is loaded.
 * Requires both the core and addon to be loaded to take effect.
 */
if (Platform.isLoaded("projectred_transmission")) {
    console.log("Project Red: Transmission found, loading client compat scripts...")
    JEIEvents.hideItems(event => {
        // Hide ProjectRed unused items
        event.hide([
            "projectred_core:silicon",
            "projectred_core:sand_coal_comp",
            "projectred_core:red_iron_comp",
            "projectred_core:electrotine_iron_comp",
            "projectred_core:peridot",
            "projectred_core:sapphire",
            "projectred_core:ruby",
            "projectred_core:electrotine_dust",
            "projectred_core:electrotine_generator",
            "projectred_core:electrotine_ingot",
            "projectred_core:red_ingot",
            "projectred_core:sail",
            "projectred_core:woven_cloth",
            "projectred_core:motor",
            "projectred_core:gold_coil",
            "projectred_core:iron_coil",
            "projectred_core:copper_coil",
            "projectred_core:electrotine_silicon_comp",
            "projectred_core:electrotine_silicon",
            "projectred_core:boule",
            "projectred_transmission:low_load_framed_power_wire",
            "projectred_core:screwdriver",
            "projectred_core:draw_plate",
            "projectred_transmission:low_load_power_wire"
        ])

        // Hide CBMultipart blocks
        event.hide(/cb_microblock:.*/)
    })
}
