/**
 * Remove the stronghold biome tag so that there are no biomes that can generate strongholds
 * The same is done for Ad Astra's moon dungeons and Oil wells (contain unused materials)
 */
ServerEvents.tags('worldgen/biome', event => {
    event.removeAll('minecraft:has_structure/stronghold');
    event.removeAll('ad_astra:has_structure/moon_dungeon');
    event.removeAll('ad_astra:has_structure/oil_well');
});

// Add the eye trim as an ender dragon drop
LootJS.modifiers((event) => {
    event.addEntityLootModifier("minecraft:ender_dragon").addLoot("minecraft:eye_armor_trim_smithing_template");
});
