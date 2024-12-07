//Bounty board recipes only accept oak. The dev has stated this is intended. https://github.com/ejektaflex/Bountiful/issues/271
ServerEvents.recipes(event => {
	if (isNormalMode) {
        event.replaceInput({ id: "bountiful:crafting/bountyboard" }, "minecraft:oak_log", "#minecraft:logs")
        event.replaceInput({ id: "bountiful:crafting/bountyboard" }, "minecraft:oak_planks", "#minecraft:planks")
    }
})
