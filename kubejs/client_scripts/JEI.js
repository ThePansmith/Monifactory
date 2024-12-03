// /kjs inventory will be your friend.

JEIEvents.hideItems(event => {

    //Enderio cleanup
    event.hide(/enderio:clear_glass_.*_.*/)
    event.hide(/enderio:fused_quartz_.*_.*/)
    event.hide(/enderio:powdered_.*/)
    event.hide(/enderio:.*_ingot/)
    event.hide(/enderio:.*_nugget/)
    event.hide(/enderio:.*_block/)
    event.hide('enderio:broken_spawner')

    //Hides useless items
    event.hide(['hammerlib:gears/netherite', 'hammerlib:gears/gold', 'hammerlib:gears/copper', 'hammerlib:gears/wooden', 'hammerlib:gears/stone', 'thermal:constantan_coin'])

    // Iron Furnace
    event.hide('ironfurnaces:million_furnace') // rainbow furnace
    event.hide(['ironfurnaces:item_spooky', 'ironfurnaces:item_xmas']) // cosmetic items
    // TODO renable this again. why in the fuck did we disable this?
    // No upgrade consumables to go from diamond to obsidian or iron to silver without re-enabling more furnaces
    event.hide(['ironfurnaces:upgrade_iron', 'ironfurnaces:upgrade_gold', 'ironfurnaces:upgrade_diamond', 'ironfurnaces:upgrade_emerald', 'ironfurnaces:upgrade_obsidian', 'ironfurnaces:upgrade_crystal', 'ironfurnaces:upgrade_netherite', 'ironfurnaces:upgrade_copper', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_silver', 'ironfurnaces:upgrade_obsidian2', 'ironfurnaces:upgrade_iron2', 'ironfurnaces:upgrade_gold2', 'ironfurnaces:upgrade_silver2'])
    event.hide(['ironfurnaces:crystal_furnace', 'ironfurnaces:emerald_furnace', 'ironfurnaces:item_linker', 'ironfurnaces:rainbow_core', 'ironfurnaces:rainbow_plating', 'ironfurnaces:rainbow_coal', 'ironfurnaces:allthemodium_furnace', 'ironfurnaces:vibranium_furnace', 'ironfurnaces:unobtainium_furnace', 'ironfurnaces:upgrade_allthemodium', 'ironfurnaces:upgrade_vibranium', 'ironfurnaces:upgrade_unobtainium', 'ironfurnaces:item_heater', 'ironfurnaces:augment_blasting', 'ironfurnaces:augment_smoking', 'ironfurnaces:heater', 'ironfurnaces:augment_generator'])

    //dml
    event.hide(['hostilenetworks:twilight_prediction', 'hostilenetworks:deep_learner'])

    //snad
    event.hide('snad:soul_snad')
    if(isExpertMode) {
        event.hide(['snad:snad', 'snad:red_snad'])
    }

    //Extended Crafting
    event.hide([Item.of('extendedcrafting:recipe_maker', '{Shapeless:0b,Type:"CraftTweaker"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:tin"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:copper"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:iron"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:coal"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:steel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:invar"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:silver"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:platinum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lead"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:glowstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:lapis_lazuli"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:electrum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:redstone"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:aluminum"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:diamond"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:nickel"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:gold"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:emerald"}'), Item.of('extendedcrafting:singularity', '{Id:"extendedcrafting:bronze"}')])
    event.hide(['extendedcrafting:enhanced_ender_catalyst', 'extendedcrafting:enhanced_redstone_catalyst', 'extendedcrafting:enhanced_redstone_component', 'extendedcrafting:enhanced_ender_component', 'extendedcrafting:ender_component', 'extendedcrafting:black_iron_block', 'extendedcrafting:black_iron_ingot', 'extendedcrafting:redstone_ingot_block', 'extendedcrafting:redstone_ingot', 'extendedcrafting:enhanced_redstone_ingot_block', 'extendedcrafting:enhanced_redstone_ingot', 'extendedcrafting:ender_ingot_block', 'extendedcrafting:ender_ingot', 'extendedcrafting:enhanced_ender_ingot_block', 'extendedcrafting:enhanced_ender_ingot', 'extendedcrafting:ender_star_block', 'extendedcrafting:ender_star', 'extendedcrafting:flux_star_block', 'extendedcrafting:flux_star', 'extendedcrafting:frame', 'extendedcrafting:compressor', 'extendedcrafting:ender_alternator', 'extendedcrafting:ender_crafter', 'extendedcrafting:auto_ender_crafter', 'extendedcrafting:flux_crafter', 'extendedcrafting:black_iron_slate', 'extendedcrafting:ender_catalyst'])
    event.hide(['extendedcrafting:black_iron_nugget', 'extendedcrafting:redstone_nugget', 'extendedcrafting:enhanced_redstone_nugget', 'extendedcrafting:ender_nugget', 'extendedcrafting:enhanced_ender_nugget'])
    
    // PEX
    event.hide('packagedexcrafting:ender_crafter')

    //Thermal
    event.hide(['thermal:dynamo_stirling', 'thermal:dynamo_gourmand', 'thermal:dynamo_disenchantment', 'thermal:dynamo_lapidary', 'systeams:numismatic_boiler', 'systeams:magmatic_boiler', 'systeams:compression_boiler', 'systeams:gourmand_boiler', 'systeams:lapidary_boiler', 'systeams:disenchantment_boiler'])
    //event.hide(['thermal:upgrade_augment_1', 'thermal:upgrade_augment_2', 'thermal:upgrade_augment_3', 'thermal:upgrade_augment_4', 'thermal:dynamo_output_augment'])
    event.hide(['thermal:coal_coke', 'thermal:coal_coke_block'])
    event.hide(['thermal:machine_furnace', 'thermal:machine_sawmill', 'thermal:machine_pulverizer', 'thermal:machine_smelter', 'thermal:machine_centrifuge', 'thermal:machine_crucible', 'thermal:machine_chiller', 'thermal:machine_refinery', 'thermal:machine_pyrolyzer', 'thermal:machine_bottler', 'thermal:machine_brewer', 'thermal:machine_crystallizer', 'thermal:device_xp_condenser'])
    //Thermal unused items
    event.hide(/thermal:.*_block/)
    event.hide(/thermal:.*_ingot/)
    event.hide(/thermal:.*_dust/)
    event.hide(/thermal:.*_plate/)
    event.hide(/thermal:.*_nugget/)
    event.hide(/thermal:.*_gear/)
    event.hide('thermal:creosote_bucket')
    event.hide(/thermal:.*_cast/)

    //EnderIO
    event.hide(['enderio:conduit', 'enderio:energy_conduit', 'enderio:plant_matter_green', 'enderio:plant_matter_brown', 'enderio:clayed_glowstone', 'enderio:flour', 'enderio:organic_green_dye', 'enderio:organic_brown_dye', 'enderio:industrial_insulation_block', "enderio:primitive_alloy_smelter", "enderio:alloy_smelter", "enderio:sag_mill", "enderio:stirling_generator"])
    //EnderIO (grinding balls)
    event.hide(['enderio:soularium_grinding_ball', 'enderio:conductive_alloy_grinding_ball', 'enderio:pulsating_alloy_grinding_ball', 'enderio:redstone_alloy_grinding_ball', 'enderio:energetic_alloy_grinding_ball', 'enderio:vibrant_alloy_grinding_ball', 'enderio:copper_alloy_grinding_ball', 'enderio:dark_steel_grinding_ball', 'enderio:end_steel_grinding_ball'])
    // Guidebook is just placeholder text
    event.hide([Item.of('patchouli:guide_book', '{"patchouli:book":"enderio:guide"}')])


    //TelePastries
    event.hide(['telepastries:custom_cake2', 'telepastries:custom_cake3', 'telepastries:twilight_cake'])

    //Jetpacks
    event.hide([Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:dark_soularium"}').strongNBT(), Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:fluxed"}').strongNBT(), 'ironjetpacks:capacitor', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:creative"}').strongNBT()])
    event.hide(['ironjetpacks:basic_coil', 'ironjetpacks:advanced_coil', 'ironjetpacks:elite_coil', 'ironjetpacks:ultimate_coil'])
    event.hide(/ironjetpacks:thruster/)

    // Chisels&Bits
    event.hide('chiselsandbits:block_bit')

    // antiblocks (is this even needed?)
    // event.hide([/^antiblocksrechiseled:pressure_plate_.+$/, /^antiblocksrechiseled:button_.+$/, /^antiblocksrechiseled:stair_.+$/, /^antiblocksrechiseled:slab_.+$/, /^antiblocksrechiseled:border_.+$/, /^antiblocksrechiseled:wool_.+$/])

    // Solar Flux
    event.hide(/solarflux:.*_upgrade/)
    event.hide(/solarflux:.*_glass/)
    event.hide('solarflux:blazing_coating')

    // AE
    event.hide(['ae2:facade', 'ae2:vibration_chamber'])
    event.hide(/megacells:.*mega_interface/)
    event.hide(/megacells:.*mega_pattern_provider/)
    event.hide(/megacells:sky_steel/)
    event.hide("megacells:mega_crafting_accelerator")
    event.hide("megacells:bulk_storage_component")

    //AA
    event.hide(['gtceu:flawless_palis_empowered_gem', 'gtceu:flawless_diamatine_empowered_gem', 'gtceu:flawless_emeradic_empowered_gem', 'gtceu:restonia_empowered_rod', 'gtceu:enori_empowered_rod', 'gtceu:void_empowered_rod', 'gtceu:palis_empowered_rod', 'gtceu:diamatine_empowered_rod', 'gtceu:emeradic_empowered_rod', 'gtceu:restonia_empowered_perfect', 'gtceu:enori_empowered_perfect', 'gtceu:void_empowered_perfect', 'gtceu:palis_empowered_perfect', 'gtceu:diamatine_empowered_perfect', 'gtceu:emeradic_empowered_perfect', 'gtceu:exquisite_restonia_empowered_gem', 'gtceu:exquisite_enori_empowered_gem', 'gtceu:exquisite_void_empowered_gem', 'gtceu:exquisite_palis_empowered_gem', 'gtceu:exquisite_diamatine_empowered_gem', 'gtceu:exquisite_emeradic_empowered_gem', 'gtceu:restonia_empowered_dust', 'gtceu:enori_empowered_dust', 'gtceu:void_empowered_dust', 'gtceu:palis_empowered_dust', 'gtceu:diamatine_empowered_dust', 'gtceu:emeradic_empowered_dust', 'gtceu:tiny_restonia_empowered_dust', 'gtceu:tiny_enori_empowered_dust', 'gtceu:tiny_void_empowered_dust', 'gtceu:tiny_palis_empowered_dust', 'gtceu:tiny_diamatine_empowered_dust', 'gtceu:tiny_emeradic_empowered_dust', 'gtceu:flawless_restonia_empowered_gem', 'gtceu:flawless_enori_empowered_gem', 'gtceu:flawless_void_empowered_gem'])
    event.hide(['gtceu:small_emeradic_empowered_dust', 'gtceu:small_diamatine_empowered_dust', 'gtceu:small_palis_empowered_dust', 'gtceu:small_void_empowered_dust', 'gtceu:small_enori_empowered_dust', 'gtceu:small_restonia_empowered_dust'])
    event.hide(['gtceu:diamatine_perfect', 'gtceu:exquisite_diamatine_gem', 'gtceu:diamatine_dust', 'gtceu:tiny_diamatine_dust', 'gtceu:flawless_diamatine_gem', 'gtceu:diamatine_rod', 'gtceu:diamatine_plate', 'gtceu:small_diamatine_dust', 'gtceu:void_perfect', 'gtceu:exquisite_void_gem', 'gtceu:void_dust', 'gtceu:tiny_void_dust', 'gtceu:flawless_void_gem', 'gtceu:void_rod', 'gtceu:void_plate', 'gtceu:small_void_dust', 'gtceu:emeradic_perfect', 'gtceu:exquisite_emeradic_gem', 'gtceu:emeradic_dust', 'gtceu:tiny_emeradic_dust', 'gtceu:flawless_emeradic_gem', 'gtceu:emeradic_rod', 'gtceu:emeradic_plate', 'gtceu:small_emeradic_dust', 'gtceu:enori_perfect', 'gtceu:exquisite_enori_gem', 'gtceu:enori_dust', 'gtceu:tiny_enori_dust', 'gtceu:flawless_enori_gem', 'gtceu:enori_rod', 'gtceu:enori_plate', 'gtceu:small_enori_dust'])
    event.hide(['gtceu:restonia_perfect', 'gtceu:exquisite_restonia_gem', 'gtceu:restonia_dust', 'gtceu:tiny_restonia_dust', 'gtceu:flawless_restonia_gem', 'gtceu:restonia_rod', 'gtceu:restonia_plate', 'gtceu:small_restonia_dust', 'gtceu:palis_perfect', 'gtceu:exquisite_palis_gem', 'gtceu:palis_dust', 'gtceu:tiny_palis_dust', 'gtceu:flawless_palis_gem', 'gtceu:palis_rod', 'gtceu:palis_plate', 'gtceu:small_palis_dust'])

    //NuclearCraft
    event.hide(['nuclearcraft:diosmeter', 'nuclearcraft:steel_frame', 'nuclearcraft:rock_crusher', 'nuclearcraft:decay_hastener', 'nuclearcraft:irradiator', 'nuclearcraft:nuclear_furnace', 'nuclearcraft:extractor', 'nuclearcraft:electrolyzer', 'nuclearcraft:pressurizer', 'nuclearcraft:alloy_smelter', 'nuclearcraft:centrifuge', 'nuclearcraft:manufactory', 'nuclearcraft:gas_scrubber', 'nuclearcraft:fluid_enricher', 'nuclearcraft:isotope_separator', 'nuclearcraft:fluid_infuser', 'nuclearcraft:chemical_reactor', 'nuclearcraft:analyzer', 'nuclearcraft:ingot_former', 'nuclearcraft:pump', 'nuclearcraft:fuel_reprocessor', 'nuclearcraft:leacher', 'nuclearcraft:crystallizer', 'nuclearcraft:assembler', 'nuclearcraft:steam_turbine', 'nuclearcraft:melter'])
    event.hide(['nuclearcraft:nitrogen_collector', 'nuclearcraft:compact_nitrogen_collector', 'nuclearcraft:lava_collector', 'nuclearcraft:dense_nitrogen_collector', 'nuclearcraft:compact_helium_collector', 'nuclearcraft:helium_collector', 'nuclearcraft:dense_helium_collector'])
    event.hide(['nuclearcraft:magnesium_deepslate_ore', 'nuclearcraft:thorium_deepslate_ore', 'nuclearcraft:uranium_deepslate_ore', 'nuclearcraft:magnesium_ore', 'nuclearcraft:boron_deepslate_ore', 'nuclearcraft:cobalt_ore', 'nuclearcraft:platinum_deepslate_ore', 'nuclearcraft:silver_deepslate_ore', 'nuclearcraft:lead_ore', 'nuclearcraft:lithium_ore', 'nuclearcraft:thorium_ore', 'nuclearcraft:tin_ore', 'nuclearcraft:cobalt_deepslate_ore', 'nuclearcraft:silver_ore', 'nuclearcraft:uranium_ore', 'nuclearcraft:zinc_ore', 'nuclearcraft:boron_ore', 'nuclearcraft:lithium_deepslate_ore'])
    event.hide(['nuclearcraft:foursmore', 'nuclearcraft:evenmoresmore', 'nuclearcraft:moresmore', 'nuclearcraft:smore'])
    event.hide(/^nuclearcraft:.*_bucket/i)
    event.hide(/nuclearcraft:upgrade_.*/)
    event.hide(/nuclearcraft:.*_ingot/)
    event.hide(/nuclearcraft:.*_.*_ingot/)
    event.hide(/nuclearcraft:.*_plate/)
    event.hide(/nuclearcraft:.*_.*_.*_.*_.*_tr/)
    event.hide(/nuclearcraft:.*_.*_.*_.*_tr/)
    event.hide(/nuclearcraft:.*_.*_.*_tr/)
    event.hide(/nuclearcraft:.*_dust/)
    event.hide(/nuclearcraft:.*_.*_dust/)
    event.hide(/nuclearcraft:.*_nugget/)
    event.hide(/nuclearcraft:.*_gem/)
    // Hides all unused isotopes and fuels
    event.hide(['nuclearcraft:fuel_mixed_mix_239', 'nuclearcraft:fuel_mixed_mix_241', 'nuclearcraft:thorium_230', 'nuclearcraft:plutonium_241', 'nuclearcraft:lithium_6', 'nuclearcraft:lithium_7', 'nuclearcraft:boron_10', 'nuclearcraft:boron_11', 'nuclearcraft:plutonium_239', 'nuclearcraft:uranium_235', 'nuclearcraft:uranium_238',])
    event.hide(/nuclearcraft:.*_.*_ox/)
    event.hide(/nuclearcraft:.*_.*_za/)
    event.hide(/nuclearcraft:.*_.*_ni/)
    // Hides unused or duplicate machines
    event.hide(/nuclearcraft:solar_panel.*/)
    event.hide(/nuclearcraft:.*_voltaic_pile/)
    event.hide(/nuclearcraft:.*_battery/)
    event.hide(/nuclearcraft:.*_barrel/)
    event.hide(/nuclearcraft:.*bscco.*/)
    event.hide(/nuclearcraft:turbine.*/)
    event.hide(/nuclearcraft:.*_container/)
    event.hide(/nuclearcraft:niobium_tin_.*/)
    event.hide(/nuclearcraft:fusion.*/)
    event.hide(/water_collector/);
    event.hide(/nuclearcraft:.*electromagnet.*/)
    // Hides all unused blocks
    event.hide(['nuclearcraft:empty_active_heat_sink', 'nuclearcraft:villiaumite_heat_sink', 'nuclearcraft:carobbiite_heat_sink', 'nuclearcraft:empty_frame', 'nuclearcraft:supercooler', 'nuclearcraft:steel_block', 'nuclearcraft:electrum_block', 'nuclearcraft:supercold_ice_block', 'nuclearcraft:magnesium_block', 'nuclearcraft:cobalt_block', 'nuclearcraft:aluminum_block', 'nuclearcraft:lead_block', 'nuclearcraft:bronze_block', 'nuclearcraft:californium250_block', 'nuclearcraft:lithium_block', 'nuclearcraft:platinum_block', 'nuclearcraft:thorium_block', 'nuclearcraft:americium241_block', 'nuclearcraft:plutonium238_block', 'nuclearcraft:tin_block', 'nuclearcraft:uranium238_block', 'nuclearcraft:silver_block', 'nuclearcraft:uranium_block', 'nuclearcraft:zirconium_block', 'nuclearcraft:zinc_block', 'nuclearcraft:boron_block',])
    // Hides all unused items
    event.hide(['nuclearcraft:rad_x', 'nuclearcraft:research_paper', 'nuclearcraft:plate_extreme', 'nuclearcraft:gelatin', 'nuclearcraft:actuator', 'nuclearcraft:basic_electric_circuit', 'nuclearcraft:sic_fiber', 'nuclearcraft:tough_helmet', 'nuclearcraft:tough_chest', 'nuclearcraft:tough_pants', 'nuclearcraft:tough_boots', 'nuclearcraft:spaxelhoe_tough', 'nuclearcraft:spaxelhoe_thorium', 'nuclearcraft:multitool', 'nuclearcraft:qnp', 'nuclearcraft:lithium_ion_cell', 'nuclearcraft:dps', 'nuclearcraft:servo', 'nuclearcraft:bioplastic', 'nuclearcraft:empty_sink', 'nuclearcraft:radaway_slow', 'nuclearcraft:motor', 'nuclearcraft:salt', 'nuclearcraft:cocoa_butter', 'nuclearcraft:sawdust', 'nuclearcraft:flour', 'nuclearcraft:dominos', 'nuclearcraft:radaway'])

    //JAVD
    event.hide(["javd:portal_block"])

    //Ender Storage
    event.hide(['endertanks:ender_bucket'])

    //Backpacks
    event.hide('sophisticatedbackpacks:copper_backpack')

    // Angel Ring
    event.hide('better_angel_ring:ring')

    // Wireless Chargers
    event.hide(['wirelesschargers:basic_wireless_block_charger', 'wirelesschargers:advanced_wireless_block_charger'])

    //Sophisticated Limited Drawers
    event.hide(/^sophisticatedstorage:limited.+barrel.+$/)

    //Copper tier sophisticated storage (unused)
    event.hide('sophisticatedstorage:copper_barrel')
    event.hide('sophisticatedstorage:copper_chest')
    event.hide('sophisticatedstorage:copper_shulker_box')
    
    //Sophisticated iron tier upgrades
    event.hide(/^sophisticatedstorage:.*copper.*tier_upgrade$/)

    //Unused Sophisticated stack upgrades
    event.hide("sophisticatedstorage:stack_upgrade_tier_1_plus")
    event.hide("sophisticatedbackpacks:stack_upgrade_starter_tier")

    //Sophisticated compacting upgrades
    if(isExpertMode) {
        event.hide(/^sophisticated.*(compacting|compression)_upgrade$/)
    }

    //Sophisticated Experience
    event.hide(/xp_pump_upgrade/)

    // Temp remove packing tape (involved in a dupe glitch)
    event.hide(/sophisticatedstorage:packing_tape/)

    //Greg Milk
    event.hide('gtceu:milk')

    // Posttank stuff
    event.hide(/gtceu:uxv/)
    event.hide(/gtceu:opv/)
    event.hide(/gcyr:uxv/)
    event.hide(/gcyr:opv/)

    //Greg Hot MV ingots
    event.hide(['gtceu:hot_kanthal_ingot', 'gtceu:hot_silicon_ingot'])

    // AE2 stuff
    event.hide(['ae2:fluix_dust', 'ae2:fluix_crystal', 'ae2:fluix_block', 'ae2:certus_quartz_crystal', 'ae2:charged_certus_quartz_crystal'])

    //Steel Machine Casing
    event.hide('gtceu:steel_machine_casing')

    //Laserio
    event.hide(['laserio:logic_chip_raw', 'laserio:logic_chip'])

    // PEX
    event.hide(['packagedexcrafting:flux_crafter', 'packagedexcrafting:basic_crafter'])

   // GCYr
   event.hide(/gcyr:dyson/)
   event.hide(/gcyr:.*_marker/)
   event.hide(/gcyr:.*_casing/)
   event.hide(['gcyr:beam_receiver', 'gcyr:space_elevator_support', 'gcyr:drone_hangar', 'gcyr:space_elevator'])

    // Hide debug item(s)
    event.hide('kubejs:debug_ctm_block')
    
    // Hide GT ores to prevent clutter
    GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
        event.hide([
          `gtceu:granite_${id.name}_ore`,
          `gtceu:diorite_${id.name}_ore`,
          `gtceu:andesite_${id.name}_ore`,
          `gtceu:red_granite_${id.name}_ore`,
          `gtceu:marble_${id.name}_ore`,
          `gtceu:deepslate_${id.name}_ore`,
          `gtceu:tuff_${id.name}_ore`,
          `gtceu:sand_${id.name}_ore`,
          `gtceu:red_sand_${id.name}_ore`,
          `gtceu:gravel_${id.name}_ore`,
          `gtceu:basalt_${id.name}_ore`,
          `gtceu:blackstone_${id.name}_ore`,
          `gtceu:moon_${id.name}_ore`,
          `gtceu:venus_${id.name}_ore`,
          `gtceu:mercury_${id.name}_ore`,
          `gtceu:mars_${id.name}_ore`
        ])
      })

    
    // Hides GCYR ores as its not part of GTMaterialRegistry
    event.hide(/gcyr:(!netherrack|endstone).*_ore/)
})

JEIEvents.addItems(event => {
    // AE2 stuff
    event.add(Item.of('ae2:facade', { item: "gtceu:infinity_block" }))

    //EnderIO
    event.add('enderio:broken_spawner')
    event.add('enderio:reinforced_obsidian_block')

    //NuclearCraft
    event.add(['nuclearcraft:tough_alloy_ingot', 'nuclearcraft:hard_carbon_ingot', 'nuclearcraft:ferroboron_ingot', 'nuclearcraft:rhodochrosite_dust', 'nuclearcraft:beryllium_block', 'nuclearcraft:graphite_block'])
})

JEIEvents.hideFluids(event => {

    //EnderIO
    let eioUseless = ['enderio:nutrient_distillation', 'enderio:vapor_of_levity', 'enderio:hootch', 'enderio:rocket_fuel', 'enderio:fire_water', 'enderio:liquid_sunshine', 'enderio:cloud_seed', 'enderio:cloud_seed_concentrated']
    eioUseless.forEach(liquid => { event.hide(liquid) })

    // hiding NuclearCraft Fluids
    // get all nc fluids from index
    let ncFluids = Fluid.getTypes().filter(id => id.includes("nuclearcraft"))

    // list of used fluids to not remove
    let ncUsedFluid = ['nuclearcraft:hydrated_gelatin', 'nuclearcraft:gelatin', 'nuclearcraft:sugar', 'nuclearcraft:marshmallow', 'nuclearcraft:cocoa_butter', 'nuclearcraft:chocolate_liquor', 'nuclearcraft:unsweetened_chocolate', 'nuclearcraft:dark_chocolate', 'nuclearcraft:milk_chocolate', 'nuclearcraft:technical_water', 'nuclearcraft:high_pressure_steam', 'nuclearcraft:exhaust_steam']

    // adds flowing fluid variants to the l ist so they aren't hidden
    ncUsedFluid.forEach(fluid => { ncUsedFluid.push(fluid + "_flowing") })

    // remove used fluids from the full list
    ncFluids = ncFluids.filter((el) => !ncUsedFluid.includes(el))

    // loops through the list and hides all the unwanted fluids for nc
    ncFluids.forEach(element => {
        event.hide(element)
    })

    //Hide Thermal fluids
    event.hide("thermal:creosote")
    event.hide("cofh_core:experience")

    //Hide Soph Core fluids
    event.hide("sophisticatedcore:xp_still")
})
