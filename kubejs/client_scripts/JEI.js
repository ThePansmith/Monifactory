// /kjs inventory will be your friend.

JEIEvents.hideItems(event => {
    //Hides useless items
    event.hide(['hammerlib:gears/netherite', 'hammerlib:gears/gold', 'hammerlib:gears/copper'])

    //i really hate these kind of mods
    event.hide('ironfurnaces:million_furnace') // rainbow furnace
	event.hide(['ironfurnaces:item_spooky', 'ironfurnaces:item_xmas']) // cosmetic items
	// TODO renable this again. why in the fuck did we disable this?
	event.hide(['ironfurnaces:upgrade_iron', 'ironfurnaces:upgrade_gold', 'ironfurnaces:upgrade_diamond', 'ironfurnaces:upgrade_emerald', 'ironfurnaces:upgrade_obsidian', 'ironfurnaces:upgrade_crystal', 'ironfurnaces:upgrade_netherite', 'ironfurnaces:upgrade_copper', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_silver', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_iron2', 'ironfurnaces:upgrade_gold2', 'ironfurnaces:upgrade_silver2'])
    event.hide(['ironfurnaces:crystal_furnace', 'ironfurnaces:emerald_furnace', 'ironfurnaces:item_linker', 'ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_plating', 'ironfurnaces:rainbow_coal', 'ironfurnaces:allthemodium_furnace', 'ironfurnaces:vibranium_furnace', 'ironfurnaces:unobtainium_furnace', 'ironfurnaces:upgrade_allthemodium', 'ironfurnaces:upgrade_vibranium', 'ironfurnaces:upgrade_unobtainium', 'ironfurnaces:item_heater', 'ironfurnaces:augment_blasting', 'ironfurnaces:augment_smoking', 'ironfurnaces:heater', 'ironfurnaces:augment_generator'])

    //dml
    event.hide(['hostilenetworks:twilight_prediction'])

    //Extended Crafting
    event.hide([Item.of('extendedcrafting:recipe_maker', '{Shapeless:0b,Type:"CraftTweaker"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:steel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:invar"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electrum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:bronze"}')])
    event.hide(['extendedcrafting:the_ultimate_component', 'extendedcrafting:enhanced_ender_catalyst', 'extendedcrafting:enhanced_redstone_catalyst', 'extendedcrafting:enhanced_redstone_component', 'extendedcrafting:enhanced_ender_component', 'extendedcrafting:ender_component', 'extendedcrafting:black_iron_block', 'extendedcrafting:black_iron_ingot', 'extendedcrafting:redstone_ingot_block', 'extendedcrafting:redstone_ingot', 'extendedcrafting:enhanced_redstone_ingot_block', 'extendedcrafting:enhanced_redstone_ingot', 'extendedcrafting:ender_ingot_block', 'extendedcrafting:ender_ingot', 'extendedcrafting:enhanced_ender_ingot_block', 'extendedcrafting:enhanced_ender_ingot', 'extendedcrafting:ender_star_block', 'extendedcrafting:ender_star', 'extendedcrafting:flux_star_block', 'extendedcrafting:flux_star', 'extendedcrafting:frame', 'extendedcrafting:basic_table', 'extendedcrafting:basic_auto_table', 'extendedcrafting:compressor', 'extendedcrafting:ender_alternator', 'extendedcrafting:ender_crafter', 'extendedcrafting:auto_ender_crafter', 'extendedcrafting:flux_alternator', 'extendedcrafting:flux_crafter', 'extendedcrafting:auto_flux_crafter', 'extendedcrafting:black_iron_slate', 'extendedcrafting:ender_catalyst'])
    event.hide(['extendedcrafting:black_iron_nugget', 'extendedcrafting:redstone_nugget', 'extendedcrafting:enhanced_redstone_nugget', 'extendedcrafting:ender_nugget', 'extendedcrafting:enhanced_ender_nugget'])

    //Avaritia
    event.hide(['avaritia:extreme_crafting_table', 'avaritia:neutron_collector', 'avaritia:neutronium_compressor', 'avaritia:infinity_shovel', 'avaritia:infinity_axe', 'avaritia:infinity_pickaxe', 'avaritia:record_fragment', 'avaritia:endest_pearl', 'avaritia:infinity_bow']);
    event.hide(/^avaritia:.+_singularity$/);

    //Thermal
    event.hide(['thermal:dynamo_gourmand', 'thermal:dynamo_disenchantment', 'thermal:dynamo_lapidary', 'systeams:numismatic_boiler', 'systeams:magmatic_boiler', 'systeams:compression_boiler', 'systeams:gourmand_boiler', 'systeams:lapidary_boiler', 'systeams:disenchantment_boiler'])
    //event.hide(['thermal:upgrade_augment_1', 'thermal:upgrade_augment_2', 'thermal:upgrade_augment_3', 'thermal:upgrade_augment_4', 'thermal:dynamo_output_augment'])
    event.hide(['thermal:coal_coke', 'thermal:coal_coke_block'])

    //EnderIO
    event.hide(['enderio:energy_conduit', 'enderio:plant_matter_green', 'enderio:plant_matter_brown', 'enderio:clayed_glowstone', 'enderio:flour', 'enderio:organic_green_dye', 'enderio:organic_brown_dye', 'enderio:industrial_insulation_block', "enderio:primitive_alloy_smelter", "enderio:alloy_smelter", "enderio:sag_mill", "enderio:stirling_generator"])
    //EnderIO (grinding balls) haha grind my balls -clown
    event.hide(['enderio:soularium_grinding_ball', 'enderio:conductive_alloy_grinding_ball', 'enderio:pulsating_alloy_grinding_ball', 'enderio:redstone_alloy_grinding_ball', 'enderio:energetic_alloy_grinding_ball', 'enderio:vibrant_alloy_grinding_ball', 'enderio:copper_alloy_grinding_ball', 'enderio:dark_steel_grinding_ball', 'enderio:end_steel_grinding_ball'])

    //GT Steam Age
    const gtMachines = ['extractor', 'macerator', 'compressor', 'forge_hammer', 'furnace', 'alloy_smelter']
    gtMachines.forEach(machine => {
        event.hide(['gtceu:lp_steam_' + machine, 'gtceu:hp_steam_' + machine])
    })

    //TelePastries
    event.hide(['telepastries:lost_city_cake', 'telepastries:custom_cake2', 'telepastries:custom_cake3', 'telepastries:twilight_cake'])

    //Jetpacks
    event.hide([Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:dark_soularium"}').strongNBT(), Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:fluxed"}').strongNBT(), 'ironjetpacks:capacitor', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:creative"}').strongNBT()])
    event.hide(['ironjetpacks:basic_coil', 'ironjetpacks:advanced_coil', 'ironjetpacks:elite_coil', 'ironjetpacks:ultimate_coil'])

	// Chisel
	event.hide('chiselsandbits:block_bit');

	// antiblocks (is this even needed?)
	// event.hide([/^antiblocksrechiseled:pressure_plate_.+$/, /^antiblocksrechiseled:button_.+$/, /^antiblocksrechiseled:stair_.+$/, /^antiblocksrechiseled:slab_.+$/, /^antiblocksrechiseled:border_.+$/, /^antiblocksrechiseled:wool_.+$/])

	// AE
    event.hide(['ae2:facade', 'ae2:vibration_chamber'])

	//AA
    event.hide(['gtceu:flawless_palis_empowered_gem', 'gtceu:flawless_diamatine_empowered_gem', 'gtceu:flawless_emeradic_empowered_gem', 'gtceu:restonia_empowered_rod', 'gtceu:enori_empowered_rod', 'gtceu:void_empowered_rod', 'gtceu:palis_empowered_rod', 'gtceu:diamatine_empowered_rod', 'gtceu:emeradic_empowered_rod', 'gtceu:restonia_empowered_perfect', 'gtceu:enori_empowered_perfect', 'gtceu:void_empowered_perfect', 'gtceu:palis_empowered_perfect', 'gtceu:diamatine_empowered_perfect', 'gtceu:emeradic_empowered_perfect', 'gtceu:exquisite_restonia_empowered_gem', 'gtceu:exquisite_enori_empowered_gem', 'gtceu:exquisite_void_empowered_gem', 'gtceu:exquisite_palis_empowered_gem', 'gtceu:exquisite_diamatine_empowered_gem', 'gtceu:exquisite_emeradic_empowered_gem', 'gtceu:restonia_empowered_dust', 'gtceu:enori_empowered_dust', 'gtceu:void_empowered_dust', 'gtceu:palis_empowered_dust', 'gtceu:diamatine_empowered_dust', 'gtceu:emeradic_empowered_dust', 'gtceu:tiny_restonia_empowered_dust', 'gtceu:tiny_enori_empowered_dust', 'gtceu:tiny_void_empowered_dust', 'gtceu:tiny_palis_empowered_dust', 'gtceu:tiny_diamatine_empowered_dust', 'gtceu:tiny_emeradic_empowered_dust', 'gtceu:flawless_restonia_empowered_gem', 'gtceu:flawless_enori_empowered_gem', 'gtceu:flawless_void_empowered_gem'])
    event.hide(['gtceu:small_emeradic_empowered_dust', 'gtceu:small_diamatine_empowered_dust', 'gtceu:small_palis_empowered_dust', 'gtceu:small_void_empowered_dust', 'gtceu:small_enori_empowered_dust', 'gtceu:small_restonia_empowered_dust'])
    event.hide(['gtceu:diamatine_perfect', 'gtceu:exquisite_diamatine_gem', 'gtceu:diamatine_dust', 'gtceu:tiny_diamatine_dust', 'gtceu:flawless_diamatine_gem', 'gtceu:diamatine_rod', 'gtceu:diamatine_plate', 'gtceu:small_diamatine_dust', 'gtceu:void_perfect', 'gtceu:exquisite_void_gem', 'gtceu:void_dust', 'gtceu:tiny_void_dust', 'gtceu:flawless_void_gem', 'gtceu:void_rod', 'gtceu:void_plate', 'gtceu:small_void_dust', 'gtceu:emeradic_perfect', 'gtceu:exquisite_emeradic_gem', 'gtceu:emeradic_dust', 'gtceu:tiny_emeradic_dust', 'gtceu:flawless_emeradic_gem', 'gtceu:emeradic_rod', 'gtceu:emeradic_plate', 'gtceu:small_emeradic_dust', 'gtceu:enori_perfect', 'gtceu:exquisite_enori_gem', 'gtceu:enori_dust', 'gtceu:tiny_enori_dust', 'gtceu:flawless_enori_gem', 'gtceu:enori_rod', 'gtceu:enori_plate', 'gtceu:small_enori_dust'])
    event.hide(['gtceu:restonia_perfect', 'gtceu:exquisite_restonia_gem', 'gtceu:restonia_dust', 'gtceu:tiny_restonia_dust', 'gtceu:flawless_restonia_gem', 'gtceu:restonia_rod', 'gtceu:restonia_plate', 'gtceu:small_restonia_dust', 'gtceu:palis_perfect', 'gtceu:exquisite_palis_gem', 'gtceu:palis_dust', 'gtceu:tiny_palis_dust', 'gtceu:flawless_palis_gem', 'gtceu:palis_rod', 'gtceu:palis_plate', 'gtceu:small_palis_dust'])

    //NuclearCraft
    event.hide(['nuclearcraft:rock_crusher', 'nuclearcraft:decay_hastener', 'nuclearcraft:irradiator', 'nuclearcraft:nuclear_furnace', 'nuclearcraft:extractor', 'nuclearcraft:electrolyzer', 'nuclearcraft:pressurizer', 'nuclearcraft:alloy_smelter', 'nuclearcraft:centrifuge', 'nuclearcraft:manufactory', 'nuclearcraft:gas_scrubber', 'nuclearcraft:fluid_enricher', 'nuclearcraft:isotope_separator', 'nuclearcraft:fluid_infuser', 'nuclearcraft:chemical_reactor', 'nuclearcraft:analyzer', 'nuclearcraft:ingot_former', 'nuclearcraft:pump', 'nuclearcraft:fuel_reprocessor', 'nuclearcraft:leacher', 'nuclearcraft:crystallizer', 'nuclearcraft:assembler', 'nuclearcraft:steam_turbine', 'nuclearcraft:melter'])
    event.hide(['nuclearcraft:nitrogen_collector', 'nuclearcraft:compact_nitrogen_collector', 'nuclearcraft:lava_collector', 'nuclearcraft:dense_nitrogen_collector', 'nuclearcraft:compact_helium_collector', 'nuclearcraft:helium_collector', 'nuclearcraft:dense_helium_collector'])
    event.hide(['nuclearcraft:magnesium_deepslate_ore', 'nuclearcraft:thorium_deepslate_ore', 'nuclearcraft:uranium_deepslate_ore', 'nuclearcraft:magnesium_ore', 'nuclearcraft:boron_deepslate_ore', 'nuclearcraft:cobalt_ore', 'nuclearcraft:platinum_deepslate_ore', 'nuclearcraft:silver_deepslate_ore', 'nuclearcraft:lead_ore', 'nuclearcraft:lithium_ore', 'nuclearcraft:thorium_ore', 'nuclearcraft:tin_ore', 'nuclearcraft:cobalt_deepslate_ore', 'nuclearcraft:silver_ore', 'nuclearcraft:uranium_ore', 'nuclearcraft:zinc_ore', 'nuclearcraft:boron_ore', 'nuclearcraft:lithium_deepslate_ore'])
    event.hide(['nuclearcraft:foursmore', 'nuclearcraft:evenmoresmore', 'nuclearcraft:moresmore', 'nuclearcraft:smore'])
    event.hide(/^nuclearcraft:.*_bucket/i)

    //JAVD
    event.hide(["javd:portal_block"])

    //Ender Storage
    event.hide(['endertanks:ender_bucket'])

    //Backpacks
    event.hide('sophisticatedbackpacks:copper_backpack')

	//ext crafting
	event.hide('extendedcrafting:the_ultimate_ingot')

    //Leave me alone
    //event.hide('kubejs:dev_tool')

    // Wireless Chargers
    event.hide(['wirelesschargers:basic_wireless_block_charger', 'wirelesschargers:advanced_wireless_block_charger'])
})

JEIEvents.hideFluids(event => {
    event.hide(/^nuclearcraft:.+/)
})