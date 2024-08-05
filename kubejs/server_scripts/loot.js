LootJS.modifiers((event) => {
    event.addBlockLootModifier("minecraft:chests/bastion_treasure").removeLoot('minecraft:netherite_ingot');
});