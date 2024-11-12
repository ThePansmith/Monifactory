//Remove the stronghold biome tag so that there are no biomes that can generate strongholds
ServerEvents.tags('worldgen/biome', event => {
	event.removeAll('minecraft:has_structure/stronghold');
});

//Add the eye trim as an ender dragon drop
LootJS.modifiers((event) => {
	event.addEntityLootModifier("minecraft:ender_dragon").addLoot("minecraft:eye_armor_trim_smithing_template");
});