/**
 *
 * Compat Script for Create: Estrogen
 * Mainly removes Horse Urine :uncanny:
 *
 */

if (Platform.isLoaded("estrogen")) {
    console.log("Create: Estrogen found, loading client compat scripts...")

    JEIEvents.hideItems(event => {
        event.hide([
            // Please get this out of this pack
            "estrogen:horse_urine",
            "estrogen:filtrated_horse_urine",
            "estrogen:horse_urine_bucket",
            "estrogen:horse_urine_bottle",
            "estrogen:filtrated_horse_urine_bucket",
            "estrogen:used_filter",
            // More normal items
            "estrogen:centrifuge",
            "estrogen:testosterone_chunk",
            "estrogen:molten_slime",
            "estrogen:molten_slime_bucket",
            "estrogen:molten_amethyst",
            "estrogen:molten_amethyst_bucket",
        ])
    })
}
