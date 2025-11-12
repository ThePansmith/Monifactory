/** whitelisting jei items. */

JEIEvents.addItems(event => {
    // Iron Jetpacks' Cells are hard to selectively remove due to NBT shenanigans
    event.add(Item.of("ironjetpacks:cell", {Id: "ironjetpacks:hardened"}))
    event.add(Item.of("ironjetpacks:cell", {Id: "ironjetpacks:reinforced"}))
    event.add(Item.of("ironjetpacks:cell", {Id: "ironjetpacks:resonant"}))

    // NuclearCraft
    event.add(["nuclearcraft:tough_alloy_ingot", "nuclearcraft:hard_carbon_ingot", "nuclearcraft:ferroboron_ingot", "nuclearcraft:rhodochrosite_dust"])

    // Thermal
    event.add("thermal:nuke_tnt")
})
