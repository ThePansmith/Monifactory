if (Platform.isLoaded('tempad')) {
    console.log("Tempad found and script loaded")
    LootJS.modifiers((event) => {
        event.addLootTableModifier("minecraft:chests/simple_dungeon")
            .randomChance(0.02)
            .addLoot("tempad:tempad");
    })
    ServerEvents.tags('item', event => {
        event.add('tempad:tempad_fuel', 'kubejs:moni_penny')
    })
}