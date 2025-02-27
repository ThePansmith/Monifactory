/**
 * Remove Ore generation from Nuclearcraft: Neoteric and Ad Astra
 * Ad Astra is weird and generates it on multiple steps, so it requires the additional events
 * Thanks Ghosti for figuring this one out
 */
WorldgenEvents.remove(event => {
    event.removeFeatureById("underground_ores", [
        "nuclearcraft:boron_placed",
        "nuclearcraft:cobalt_placed",
        "nuclearcraft:lead_placed",
        "nuclearcraft:lithium_placed",
        "nuclearcraft:magnesium_placed",
        "nuclearcraft:platinum_placed",
        "nuclearcraft:silver_placed",
        "nuclearcraft:thorium_placed",
        "nuclearcraft:tin_placed",
        "nuclearcraft:uranium_placed",
        "nuclearcraft:zinc_placed",
        "ad_astra:moon_iron_ore",
        "ad_astra:deepslate_desh_ore",
        "ad_astra:moon_desh_ore",
        "ad_astra:moon_cheese_ore",
        "ad_astra:moon_ice_shard_ore",
        "ad_astra:mars_diamond_ore",
        "ad_astra:mars_ice_shard_ore",
        "ad_astra:mars_iron_ore",
        "ad_astra:mars_ostrum_ore",
        "ad_astra:mercury_iron_ore",
        "ad_astra:glacio_ice_shard_ore",
        "ad_astra:glacio_coal_ore",
        "ad_astra:glacio_copper_ore",
        "ad_astra:glacio_iron_ore",
        "ad_astra:glacio_lapis_ore",
        "ad_astra:venus_coal_ore",
        "ad_astra:venus_gold_ore",
        "ad_astra:venus_diamond_ore",
        "ad_astra:venus_calorite_ore"
    ])
})

WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            "ad_astra:mars_diamond_ore",
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:mars_iron_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:glacio_ice_shard_ore",
            "ad_astra:glacio_coal_ore",
            "ad_astra:glacio_copper_ore",
            "ad_astra:glacio_iron_ore",
            "ad_astra:glacio_lapis_ore",
            "ad_astra:venus_coal_ore",
            "ad_astra:venus_gold_ore",
            "ad_astra:venus_diamond_ore",
            "ad_astra:venus_calorite_ore"
        ]
    })
})

WorldgenEvents.remove(event => {
    event.removeOres(props => {
        props.blocks = [
            "ad_astra:moon_iron_ore",
            "ad_astra:deepslate_desh_ore",
            "ad_astra:moon_desh_ore",
            "ad_astra:moon_cheese_ore",
            "ad_astra:moon_ice_shard_ore",
            "ad_astra:mars_diamond_ore",
            "ad_astra:mars_ice_shard_ore",
            "ad_astra:mars_iron_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mars_ostrum_ore",
            "ad_astra:mercury_iron_ore",
            "ad_astra:glacio_ice_shard_ore",
            "ad_astra:glacio_coal_ore",
            "ad_astra:glacio_copper_ore",
            "ad_astra:glacio_iron_ore",
            "ad_astra:glacio_lapis_ore",
            "ad_astra:venus_coal_ore",
            "ad_astra:venus_gold_ore",
            "ad_astra:venus_diamond_ore",
            "ad_astra:venus_calorite_ore"
        ]
    })
})
