/**
 * Replacement Fission-related items for after NCN is removed.
 */

StartupEvents.registry("item", event => {
    event.create("phoenix_fission:light_radiation_shielding")
        .texture("phoenix_fission:item/light_radiation_shielding")

    event.create("phoenix_fission:heavy_radiation_shielding")
        .texture("phoenix_fission:item/heavy_radiation_shielding")
})
