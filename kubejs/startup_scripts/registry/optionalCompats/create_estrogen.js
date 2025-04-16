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
        event.create("cholestrol").displayName("Cholestrol")
    })

    // Fluid Registration
    StartupEvents.registry("fluid", event => {
        event.create("pregnenolone")
            .bucketColor(Color.rgba(192,201,206,255))
            .displayName("Pregnenolone")
            .thinTexture(Color.rgba(192,201,206,255))

        event.create("androstenedione")
            .bucketColor(Color.rgba(200,139,139,255))
            .displayName("Androstenedione")
            .thinTexture(Color.rgba(200,139,139,255))
    })
}
