/**
 * Create Dimension Markers for Ad Astra dimensions.
 * Dimension markers are the item-based icons to indicate dimensions for GregTech recipes in EMI.
 */
GTCEuStartupEvents.registry("gtceu:dimension_marker", event => {
    // Void Dim
    event.create("javd:void")
        .iconSupplier(() => Item.of("telepastries:custom_cake").getItem())
        .tier(0)
        .overrideName("Void Dimension")

    // Lost Cities
    event.create("lostcities:lostcity")
        .iconSupplier(() => Item.of("telepastries:lost_city_cake").getItem())
        .tier(0)
        .overrideName("Lost Cities")

    // Ad Astra dimensions
    event.create("ad_astra:moon")
        .iconSupplier(() => Item.of("ad_astra:moon_globe").getItem())
        .tier(0)
        .overrideName("Moon")
    event.create("ad_astra:mars")
        .iconSupplier(() => Item.of("ad_astra:mars_globe").getItem())
        .tier(0)
        .overrideName("Mars")
    event.create("ad_astra:mercury")
        .iconSupplier(() => Item.of("ad_astra:mercury_globe").getItem())
        .tier(0)
        .overrideName("Mercury")
    event.create("ad_astra:venus")
        .iconSupplier(() => Item.of("ad_astra:venus_globe").getItem())
        .tier(0)
        .overrideName("Venus")
    event.create("ad_astra:glacio")
        .iconSupplier(() => Item.of("ad_astra:glacio_globe").getItem())
        .tier(0)
        .overrideName("Glacio")
})
