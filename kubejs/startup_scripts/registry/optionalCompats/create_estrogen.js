/**
 *
 * Create: Estrogen Compatibility
 * Custom Items and Fluids for the Estrogen Line
 * Why? For the Funnies.
 *
 */

if (Platform.isLoaded("estrogen")) {
    // Item Registration
    StartupEvents.registry("item", event => {
        event.create("cholestrol").displayName("Cholestrol").formula(C27H46O)
    })

    // Fluid Registration
    StartupEvents.registry("fluid", event => {
        event.create("pregnenolone")
            .bucketColor(Color.rgba(192,201,206,255))
            .displayName("Pregnenolone")
            .thinTexture(Color.rgba(192,201,206,255))
            .formula(C21H32O2)

        event.create("androstenedione")
            .bucketColor(Color.rgba(80,130,160,255))
            .displayName("Androstenedione")
            .thinTexture(Color.rgba(80,130,160,255))
            .formula(C19H26O2)
    })
}
