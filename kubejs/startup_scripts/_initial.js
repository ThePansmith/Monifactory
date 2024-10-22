//priority: 999
//! This script loads first before the other startup scripts
/**
 * This script loads first before the other startup scripts.
 * Put your utility functions or global vars here so that you can access them in other scripts
 */

// Spoof our custom items' mod name
Platform.mods.kubejs.name = "Moni Labs"

/**
 * Capitalizes the first char of the string
 * @param {string} word
 * @returns {string}
 */
const capitalize = (word) => (word[0].toUpperCase() + word.substring(1));

/**
 * Creates a placeholder item
 * @param {Registry.Item} registry
 * @param {ResourceLocation_ | string} name - item (id)
 */
const placeHolder = (registry, name) => {
    registry.create(name).texture('kubejs:item/barrier').displayName(`§eT. B. I. §r- §d${name.split('_').map(v => capitalize(v))}`);
}


// Unification regexes
// MODS TO FIX: (cool line name tbd), THERMAL SERIES, NUCLEARCRAFT
global.manualUnification = ['hammerlib:gears/netherite', 'hammerlib:gears/wooden', 'hammerlib:gears/stone', 'hammerlib:gears/copper', 'hammerlib:gears/iron', 'hammerlib:gears/gold', 'hammerlib:gears/diamond', 'kubejs:cryolobus_ingot', 'kubejs:cryolobus_nugget', 'kubejs:cryolobus_dust', 'kubejs:cryococcus_ingot', 'kubejs:cryococcus_nugget', 'kubejs:cryococcus_dust', 'hammerlib:gears/stone', 'hammerlib:gears/wooden', 'extendedcrafting:the_ultimate_nugget', 'extendedcrafting:the_ultimate_ingot', 'extendedcrafting:the_ultimate_block']
global.UnificationExcludedItems = ['nuclearcraft:hard_carbon_ingot', 'nuclearcraft:ferroboron_ingot', 'nuclearcraft:tough_alloy_ingot', 'enderio:wood_gear', 'enderio:stone_gear', 'enderio:iron_gear', 'enderio:energized_gear', 'enderio:vibrant_gear', 'enderio:dark_bimetal_gear']
//DO NOT ADD NUCLEARCRAFT TO THIS REGEX OR IT WILL CRASH MULTIPLAYER SERVERS. Singleplayer will load in fine but it will crash anyone trying to join MP
global.unificationPattern = new RegExp(`^(?!(${global.UnificationExcludedItems.join('|')})).*(thermal|enderio):(powdered_.*|.*(_block|_plate|_ingot|_nugget|_gear|_dust))`, 'i')

global.NuclearCraftUnificationExcludedItems = ['nuclearcraft:depleted_fuel_curium_hecm_245', 'nuclearcraft:fuel_curium_hecm_245', 'nuclearcraft:fuel_plutonium_hep_239', 'nuclearcraft:fuel_thorium_tbu', 'nuclearcraft:depleted_fuel_thorium_tbu', 'nuclearcraft:fuel_uranium_leu_233', 'nuclearcraft:depleted_fuel_uranium_leu_233', 'nuclearcraft:fuel_uranium_heu_233', 'nuclearcraft:depleted_fuel_uranium_heu_233', 'nuclearcraft:fuel_uranium_leu_235', 'nuclearcraft:depleted_fuel_uranium_leu_235', 'nuclearcraft:fuel_uranium_heu_235', 'nuclearcraft:depleted_fuel_uranium_heu_235', 'nuclearcraft:fuel_neptunium_len_236', 'nuclearcraft:depleted_fuel_neptunium_len_236', 'nuclearcraft:fuel_americium_hea_242', 'nuclearcraft:depleted_fuel_americium_hea_242', 'nuclearcraft:fuel_americium_lea_242', 'nuclearcraft:depleted_fuel_americium_lea_242', 'nuclearcraft:fuel_plutonium_hep_241', 'nuclearcraft:depleted_fuel_plutonium_hep_241', 'nuclearcraft:fuel_plutonium_lep_241', 'nuclearcraft:depleted_fuel_plutonium_lep_241', '2x nuclearcraft:fuel_plutonium_hep_239', 'nuclearcraft:depleted_fuel_plutonium_hep_239', 'nuclearcraft:fuel_plutonium_lep_239', 'nuclearcraft:depleted_fuel_plutonium_lep_239', 'nuclearcraft:fuel_neptunium_hen_236', 'nuclearcraft:depleted_fuel_neptunium_hen_236', 'nuclearcraft:fuel_curium_lecm_243', 'nuclearcraft:depleted_fuel_curium_lecm_243', 'nuclearcraft:fuel_curium_hecm_243', 'nuclearcraft:depleted_fuel_curium_hecm_243', 'nuclearcraft:fuel_curium_lecm_245', 'nuclearcraft:depleted_fuel_curium_lecm_245', 'nuclearcraft:fuel_curium_lecm_247', 'nuclearcraft:depleted_fuel_curium_lecm_247', 'nuclearcraft:fuel_curium_hecm_247', 'nuclearcraft:depleted_fuel_curium_hecm_247', 'nuclearcraft:fuel_berkelium_leb_248', 'nuclearcraft:depleted_fuel_berkelium_leb_248', 'nuclearcraft:fuel_californium_hecf_251', 'nuclearcraft:depleted_fuel_californium_hecf_251', 'nuclearcraft:fuel_californium_lecf_251', 'nuclearcraft:depleted_fuel_californium_lecf_251', 'nuclearcraft:fuel_californium_hecf_249', 'nuclearcraft:depleted_fuel_californium_hecf_249', 'nuclearcraft:fuel_californium_lecf_249', 'nuclearcraft:depleted_fuel_californium_lecf_249', 'nuclearcraft:fuel_berkelium_heb_248', 'nuclearcraft:depleted_fuel_berkelium_heb_248']
global.nuclearcraftFuelPattern = new RegExp(`^(?!(?:${global.NuclearCraftUnificationExcludedItems.join('|')})$).*nuclearcraft:(fuel|depleted_fuel).*`, 'i')
global.nuclearcraftMaterialPattern = /^nuclearcraft:.*(_ni|_za|_ox)$/i

/*
Unused as of now - will eventually be used to list all item IDs and regexes
that should both have recipes & uses removed
and hidden in JEI.

This essentially obliterates the item in every way possible short of removing it from the registry,
hence the name.
*/
global.nukeList = [];