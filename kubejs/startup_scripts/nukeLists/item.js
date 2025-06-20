// priority: 900
/*
The itemNukeList is used to list all IDs and regexes matching IDs of items that should be removed from the game, or "nuked".
While this makes it far more difficult to access the items and effectively obliterates them in most cases,
it doesn't remove them entirely and does not guarantee that they are unobtainable, unusable, or hidden in EMI/JEI.

Examples of such cases are:
- Items that may drop from a loot table (not unobtainable)
- Items that provide right-click functionality (not unusable)
- ExtendedCrafting Singularities, which have a special recipe page which cannot be hidden by normal means (not hidden in EMI/JEI)

If you seek to hide an item but not remove it, use KubeJS/client_scripts/JEI.js.
If you seek to remove a recipe but not hide any items, use the relevant file in KubeJS/server_scripts.
*/
global.itemNukeList = [
    // Ad Astra
    "ad_astra:cable_duct",
    "ad_astra:coal_generator",
    "ad_astra:compressor",
    "ad_astra:cryo_freezer",
    "ad_astra:desh_cable",
    "ad_astra:desh_fluid_pipe",
    "ad_astra:energizer",
    "ad_astra:energizer",
    "ad_astra:engine_frame",
    "ad_astra:etrionic_blast_furnace",
    "ad_astra:etrionic_capacitor",
    "ad_astra:etrionic_core",
    "ad_astra:fan",
    "ad_astra:fluid_pipe_duct",
    "ad_astra:fuel_refinery",
    "ad_astra:ostrum_fluid_pipe",
    "ad_astra:photovoltaic_etrium_cell",
    "ad_astra:photovoltaic_vesnium_cell",
    "ad_astra:solar_panel",
    "ad_astra:steel_cable",
    "ad_astra:water_pump",
    /^ad_astra:.*_bucket$/,

    // Applied Energistics 2
    "ae2:certus_quartz_crystal",
    "ae2:charged_certus_quartz_crystal",
    "ae2:fluix_block",
    "ae2:fluix_crystal",
    "ae2:fluix_dust",
    "ae2:vibration_chamber",

    // Better Angel Ring
    "better_angel_ring:ring",

    // Chisels & Bits
    "chiselsandbits:block_bit",

    // EnderIO
    "enderio:alloy_smelter",
    "enderio:clayed_glowstone",
    "enderio:cloud_seed_bucket",
    "enderio:cloud_seed_concentrated_bucket",
    "enderio:conductive_alloy_grinding_ball",
    "enderio:conduit",
    "enderio:confusing_powder",
    "enderio:copper_alloy_grinding_ball",
    "enderio:dark_steel_grinding_ball",
    "enderio:end_steel_grinding_ball",
    "enderio:energetic_alloy_grinding_ball",
    "enderio:energy_conduit",
    "enderio:fire_water_bucket",
    "enderio:flour",
    "enderio:hootch_bucket",
    "enderio:industrial_insulation_block",
    "enderio:liquid_sunshine_bucket",
    "enderio:nethercotta",
    "enderio:nutrient_distillation_bucket",
    "enderio:organic_black_dye",
    "enderio:organic_brown_dye",
    "enderio:organic_green_dye",
    "enderio:plant_matter_brown",
    "enderio:plant_matter_green",
    "enderio:primitive_alloy_smelter",
    "enderio:pulsating_alloy_grinding_ball",
    "enderio:redstone_alloy_grinding_ball",
    "enderio:rocket_fuel_bucket",
    "enderio:sag_mill",
    "enderio:silicon",
    "enderio:soul_powder",
    "enderio:soularium_grinding_ball",
    "enderio:stirling_generator",
    "enderio:vapor_of_levity_bucket",
    "enderio:vibrant_alloy_grinding_ball",
    "enderio:withering_powder",
    /^enderio:painted_/,
    /^enderio:powdered_/,

    // Ender Storage
    // TODO: Need to add greggy recipes for these
    "endertanks:ender_bucket",
    "enderchests:ender_bag",

    // ExtendedAE
    "expatternprovider:silicon_block",
    "expatternprovider:circuit_cutter",
    /expatternprovider.*cutter/,

    // Extended Crafting
    "extendedcrafting:auto_ender_crafter",
    "extendedcrafting:black_iron_slate",
    "extendedcrafting:compressor",
    "extendedcrafting:ender_alternator",
    "extendedcrafting:ender_catalyst",
    "extendedcrafting:ender_component",
    "extendedcrafting:ender_crafter",
    "extendedcrafting:ender_star",
    "extendedcrafting:enhanced_ender_catalyst",
    "extendedcrafting:enhanced_ender_component",
    "extendedcrafting:enhanced_redstone_catalyst",
    "extendedcrafting:enhanced_redstone_component",
    "extendedcrafting:flux_crafter",
    "extendedcrafting:flux_star",
    "extendedcrafting:frame",
    "extendedcrafting:recipe_maker",
    "extendedcrafting:singularity",

    // GTCEu: Modern
    "gtceu:ender_fluid_link_cover", // Not Yet Implemented. Remove when GTM makes it work.
    "gtceu:hot_kanthal_ingot",
    "gtceu:hot_silicon_ingot",
    "gtceu:milk",
    "gtceu:steel_machine_casing",
    /^gtceu:uxv/,
    /^gtceu:opv/,
    /^gtmutils:uxv/,
    /^gtmutils:opv/,

    // Hammerlib
    /^hammerlib:/,

    // HNN
    "hostilenetworks:deep_learner",
    "hostilenetworks:twilight_prediction",

    // Iron Furnaces
    "ironfurnaces:augment_blasting",
    "ironfurnaces:augment_generator",
    "ironfurnaces:augment_smoking",
    "ironfurnaces:heater",
    "ironfurnaces:item_heater",
    "ironfurnaces:item_spooky",
    "ironfurnaces:item_xmas",
    "ironfurnaces:rainbow_coal",
    "ironfurnaces:rainbow_core",
    "ironfurnaces:rainbow_plating",
    "ironfurnaces:allthemodium_furnace",
    "ironfurnaces:vibranium_furnace",
    "ironfurnaces:unobtainium_furnace",
    "ironfurnaces:million_furnace",
    "ironfurnaces:upgrade_allthemodium",
    "ironfurnaces:upgrade_vibranium",
    "ironfurnaces:upgrade_unobtainium",

    // TODO renable this again. why in the fuck did we disable this?
    // No upgrade consumables to go from diamond to obsidian or iron to silver without re-enabling more furnaces
    "ironfurnaces:upgrade_iron",
    "ironfurnaces:upgrade_gold",
    "ironfurnaces:upgrade_diamond",
    "ironfurnaces:upgrade_emerald",
    "ironfurnaces:upgrade_obsidian",
    "ironfurnaces:upgrade_crystal",
    "ironfurnaces:upgrade_netherite",
    "ironfurnaces:upgrade_copper",
    "ironfurnaces:upgrade_obsidian2",
    "ironfurnaces:upgrade_silver",
    "ironfurnaces:upgrade_obsidian2",
    "ironfurnaces:upgrade_iron2",
    "ironfurnaces:upgrade_gold2",
    "ironfurnaces:upgrade_silver2",
    "ironfurnaces:crystal_furnace",
    "ironfurnaces:emerald_furnace",
    "ironfurnaces:item_linker",

    // Iron Jetpacks
    "ironjetpacks:advanced_coil",
    "ironjetpacks:basic_coil",
    "ironjetpacks:capacitor",
    "ironjetpacks:cell",
    "ironjetpacks:elite_coil",
    "ironjetpacks:thruster",
    "ironjetpacks:ultimate_coil",

    // Just Another Void Dimension (JAVD)
    "javd:portal_block",

    // KubeJS
    "kubejs:debug_ctm_block",

    // LaserIO
    "laserio:logic_chip",
    "laserio:logic_chip_raw",

    // Megacells
    "megacells:mega_crafting_accelerator",
    /^megacells:.*mega_interface$/,
    /^megacells:.*mega_pattern_provider$/,
    /^megacells:sky_steel/,

    // PackagedExCrafting
    "packagedexcrafting:basic_crafter",
    "packagedexcrafting:ender_crafter",
    "packagedexcrafting:flux_crafter",

    // Solar Flux
    /^solarflux:.*_upgrade$/,
    /^solarflux:.*_glass$/,
    "solarflux:blazing_coating",

    // Looking for removed Sophisticated Storage items?
    // Look in configs/sophisticatedcore-common.toml.
    // SophStorage offers a way to remove items from the registry with config.

    // Systeams
    "systeams:compression_boiler",
    "systeams:disenchantment_boiler",
    "systeams:gourmand_boiler",
    "systeams:lapidary_boiler",
    "systeams:magmatic_boiler",
    "systeams:numismatic_boiler",
    "systeams:steamier_bucket",
    "systeams:steamiest_bucket",
    "systeams:steamiester_bucket",
    "systeams:steamiestest_ball",

    // Telepastries
    "telepastries:custom_cake2",
    "telepastries:custom_cake3",
    "telepastries:twilight_cake",

    // Thermal Series
    "thermal:apatite",
    "thermal:bitumen",
    "thermal:cinnabar",
    "thermal:coal_coke_block",
    "thermal:coal_coke",
    "thermal:constantan_coin",
    "thermal:creosote_bucket",
    "thermal:crude_oil_bucket",
    "thermal:cured_rubber",
    "thermal:drill_head",
    "thermal:dynamo_disenchantment",
    "thermal:dynamo_lapidary",
    "thermal:dynamo_stirling",
    "thermal:glowstone_bucket",
    "thermal:heavy_oil_bucket",
    "thermal:light_oil_bucket",
    "thermal:niter",
    "thermal:oil_red_sand",
    "thermal:oil_sand",
    "thermal:raw_rubber",
    "thermal:redstone_bucket",
    "thermal:rubber",
    "thermal:ruby",
    "thermal:sapphire",
    "thermal:saw_blade",
    "thermal:sawdust",
    "thermal:sulfur",
    "thermal:tar",
    /^thermal:.*_cast$/,

    // Thermal Series Machines
    "thermal:machine_furnace",
    "thermal:machine_sawmill",
    "thermal:machine_pulverizer",
    "thermal:machine_smelter",
    "thermal:machine_centrifuge",
    "thermal:machine_crucible",
    "thermal:machine_chiller",
    "thermal:machine_refinery",
    "thermal:machine_pyrolyzer",
    "thermal:machine_bottler",
    "thermal:machine_brewer",
    "thermal:machine_crystallizer",
    "thermal:device_xp_condenser",

    // Wireless Chargers
    "wirelesschargers:basic_wireless_block_charger",
    "wirelesschargers:advanced_wireless_block_charger",

    // NuclearCraft
    /^nuclearcraft:.*_cooler$/,
    "nuclearcraft:synthrotron_controller",
    "nuclearcraft:accelerator_beam_port",
    "nuclearcraft:accelerator_casing",
    "nuclearcraft:accelerator_ion_source_port",
    "nuclearcraft:accelerator_port",
    "nuclearcraft:accelerator_casing_glass",
    "nuclearcraft:linear_accelerator_controller",
    "nuclearcraft:accelerator_beam",
    "nuclearcraft:xenorium298",
    "nuclearcraft:quantite",
    "nuclearcraft:portal",
    "nuclearcraft:wasteland_earth",
    "nuclearcraft:feral_ghoul_spawn_egg"
];

// Create Compat
// Removes machines related to processing
if (Platform.isLoaded("create")) {
    global.itemNukeList.push(
        "create:millstone",
        "create:crushing_wheel",
        "create:mechanical_plough",
        "create:mechanical_crafter",
        "create:mechanical_mixer",
        "create:mechanical_saw",
        "create:mechanical_drill",
        "create:mechanical_harvester",
        "create:mechanical_press",
        "create:mechanical_roller",
        "create:encased_fan"
    );
}
