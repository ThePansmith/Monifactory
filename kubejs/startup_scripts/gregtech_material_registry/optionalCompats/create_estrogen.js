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
        event.create("pregnenolone")
            .fluid()
            .color(0xC0C9CE)
            .components("21x carbon", "32x hydrogen", "2x oxygen")
            .formula("C31H32O2")

        event.create("androstenedione")
            .fluid()
            .color(0x508282)
            .components("19x carbon", "26x hydrogen", "2x oxygen")
            .formula("C19H26O2")
    })
}
