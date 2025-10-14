// priority: 800
/**
 * This file defines RegEx patterns that match with large quantities of certain items.
 *
 * These items are "removed" in KubeJS/client_scripts/nukelists.js and KubeJS/server_scripts/nukelists.js
 * in a fashion similar to itemNukeList.
 */

/**
 * All gears, blocks, ingots, nuggets, etc. we don't want to remove
 */
global.unificationExcludedItems = [
    "enderio:dark_bimetal_gear",
    "enderio:energized_gear",
    "enderio:iron_gear",
    "enderio:reinforced_obsidian_block",
    "enderio:stone_gear",
    "enderio:vibrant_gear",
    "enderio:wood_gear",
    "enderio:infinity_rod",
    "enderio:experience_rod",
    "extendedcrafting:luminessence_block",
    "nuclearcraft:beryllium_block",
    "nuclearcraft:ferroboron_ingot",
    "nuclearcraft:ferroboron_dust",
    "nuclearcraft:graphite_block",
    "nuclearcraft:hard_carbon_ingot",
    "nuclearcraft:hard_carbon_dust",
    "nuclearcraft:tough_alloy_ingot",
    "nuclearcraft:supercold_ice_block",
    "thermal:apple_block",
    "thermal:beetroot_block",
    "thermal:carrot_block",
    "thermal:potato_block",
    "thermal:sugar_cane_block",
];

/**
 * A RegEx pattern that matches with all gears, blocks, ingots, nuggets, and other often-unified items
 * from NuclearCraft, Thermal Series, EnderIO, Ad Astra, and ExtendedCrafting.
 */
global.unificationPattern = new RegExp(`^(?!(${global.unificationExcludedItems.join("|")})).*(nuclearcraft|thermal|enderio|ad_astra|extendedcrafting):((powdered_|raw_).*|.*(_block|_plate|_ingot|_nugget|_gear|_dust|_rod|_gem|_ore))`, "i")


/**
 * All NuclearCraft fuels we don't want to remove
 */
global.nuclearCraftFuelsToKeep = [
    "nuclearcraft:depleted_fuel_americium_hea_242",
    "nuclearcraft:depleted_fuel_americium_lea_242",
    "nuclearcraft:depleted_fuel_neptunium_hen_236",
    "nuclearcraft:depleted_fuel_neptunium_len_236",
    "nuclearcraft:depleted_fuel_plutonium_hep_239",
    "nuclearcraft:depleted_fuel_plutonium_hep_241",
    "nuclearcraft:depleted_fuel_plutonium_lep_239",
    "nuclearcraft:depleted_fuel_plutonium_lep_241",
    "nuclearcraft:depleted_fuel_thorium_tbu",
    "nuclearcraft:depleted_fuel_uranium_heu_233",
    "nuclearcraft:depleted_fuel_uranium_heu_235",
    "nuclearcraft:depleted_fuel_uranium_leu_233",
    "nuclearcraft:depleted_fuel_uranium_leu_235",
    "nuclearcraft:fuel_americium_hea_242",
    "nuclearcraft:fuel_americium_lea_242",
    "nuclearcraft:fuel_neptunium_hen_236",
    "nuclearcraft:fuel_neptunium_len_236",
    "nuclearcraft:fuel_plutonium_hep_239",
    "nuclearcraft:fuel_plutonium_hep_239",
    "nuclearcraft:fuel_plutonium_hep_241",
    "nuclearcraft:fuel_plutonium_lep_239",
    "nuclearcraft:fuel_plutonium_lep_241",
    "nuclearcraft:fuel_thorium_tbu",
    "nuclearcraft:fuel_uranium_heu_233",
    "nuclearcraft:fuel_uranium_heu_235",
    "nuclearcraft:fuel_uranium_leu_233",
    "nuclearcraft:fuel_uranium_leu_235",
]

/**
 * A RegEx pattern that matches with NuclearCraft fuels and depleted fuels except the ones in the above list.
 */
global.nuclearcraftFuelPattern = new RegExp(`^(?!(?:${global.nuclearCraftFuelsToKeep.join("|")})$).*nuclearcraft:(fuel|depleted_fuel).*`, "i")


/**
 * A RegEx pattern that matches with all NuclearCraft isotopes.
 */
global.nuclearcraftIsotopePattern = /^nuclearcraft:.*(_ni|_za|_ox)$/
