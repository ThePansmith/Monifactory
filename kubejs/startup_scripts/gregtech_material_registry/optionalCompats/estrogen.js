/**
 *
 * Create: Estrogen Compatibility
 * Custom Items and Fluids for the Estrogen Line
 * Why? For the Funnies.
 *
 */

if (Platform.isLoaded("estrogen")) {
    GTCEuStartupEvents.registry("gtceu:material", event => {
        // Item Registration
        event.create("cholestrol")
            .dust()
            .color(0xF6CA9F).iconSet("sand")
            .flags(GTMaterialFlags.FLAMMABLE)
            .components("27x carbon", "44x hydrogen", "oxygen")
            .formula("C27H46O")

        event.create("testosterone")
            .dust()
            .color(0xFADC7D).iconSet("rough")
            .flags(GTMaterialFlags.FLAMMABLE)
            .components("19x carbon", "28x hydrogen", "2x oxygen")

        // Fluids Registration
        event.create("boldione")
            .fluid()
            .color(0xFFDB33)
            .components("19x carbon", "24x hydrogen", "2x oxygen")
            .formula("C19H24O2")

        event.create("tetralin")
            .fluid()
            .color(0xFCD4FE)
            .components("10x carbon", "12x hydrogen")
            .formula("C10H12")

        event.create("impure_estrogen")
            .fluid()
            .color(0x90AFBF)
            .components("18x carbon", "24x hydrogen", "2x oxygen")
            .formula("C18H24O2")
    })
}
