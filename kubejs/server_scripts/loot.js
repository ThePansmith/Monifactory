LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:chests/bastion_treasure").removeLoot('minecraft:netherite_ingot');
    event.addLootTableModifier("minecraft:chests/simple_dungeon")
            .randomChance(0.08)
            .addLoot("endercrop:ender_seeds");
});