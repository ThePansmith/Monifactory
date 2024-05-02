//Microminers

StartupEvents.registry('item', event => {
	// The microminers
    event.create('microminer_t1').maxStackSize(16)
    event.create('microminer_t2').maxStackSize(16)
    event.create('microminer_t3').maxStackSize(16)
    event.create('microminer_t4').maxStackSize(16)
    event.create('microminer_t5').maxStackSize(16)
    event.create('microminer_t6').maxStackSize(16)
    event.create('microminer_t7').maxStackSize(16)
    event.create('microminer_t8').maxStackSize(16)
    event.create('microminer_t9').maxStackSize(16)
    event.create('microminer_t10').maxStackSize(16)

    // Microminer Components
    event.create('basic_mining_laser').displayName("§eBasic Mining Laser")
    event.create('supercharged_laser_array').displayName("§eSupercharged Laser Array")
    event.create('basic_micro_miner_guidance_system').displayName("§eBasic Micro Miner Guidance System")
    event.create('advanced_micro_miner_guidance_system').displayName("§eAdvanced Micro Miner Guidance System")
    event.create('reinforced_mining_laser').displayName("§bReinforced Mining Laser")
    event.create('warp_engine').displayName("§dWarp Engine")
    event.create('universal_navigator').displayName("§dUniversal Navigator")
    event.create('quantum_fluxed_eternium_heavy_plating').displayName("§dQuantum Fluxed Eternium Heavy Plating")
    event.create('quantum_flux').displayName("§dQuantum Flux")
    event.create('gem_sensor').displayName("Gemstone Sensor")

    //Moni Coins
    event.create('moni_penny')
    event.create('moni_nickel')
    event.create('moni_quarter')
    event.create('moni_dollar').glow(true)

    //widgets
    event.create('wooden_widget').displayName("Wooden Widget")
    event.create('wooden_widget_left').displayName("Wooden Widget Left Part")
    event.create('wooden_widget_right').displayName("Wooden Widget Right Part")
    event.create('stone_widget').displayName("Stone Widget")
    event.create('stone_widget_up').displayName("Stone Widget Up Side")
    event.create('stone_widget_down').displayName("Stone Widget Down Side")
    event.create('alloy_widget').displayName("Alloy Widget")
    event.create('ender_widget').displayName("Ender Widget")

    //Space Items.
    event.create('radiation_layer').displayName("Radiaton Layer")
    event.create('pressure_layer').displayName("Pressure Layer")
    event.create('thermal_cloth').displayName("Thermal Cloth")
    event.create('unprepared_space_helmet').displayName("Unprepared Space Helmet")
    event.create('unprepared_space_chestpiece').displayName("Unprepared Space Chestpiece")
    event.create('unprepared_space_leggings').displayName("Unprepared Space Leggings")
    event.create('unprepared_space_boots').displayName("Unprepared Space Boots")

    //Data
    event.create('lair_of_the_chaos_guardian_data').displayName("§dLair Of The Chaos Guardian Data")
    event.create('stellar_creation_data').displayName("§bStellar Creation Data")
    event.create('universe_creation_data').displayName("§dUniverse Creation Data")
    event.create('impossible_realm_data').displayName("§bImpossible Realm Data")
    event.create('wither_realm_data').displayName("§dWither Realm Data")
    event.create('dragon_lair_data').displayName("§dDragon Lair Data")

    //Solidified Items
    event.create('solidified_argon').displayName("Solidified Argon")
    event.create('solidified_chlorine').displayName("Solidified Chlorine")
    event.create('solidified_fluorine').displayName("Solidified Fluorine")
    event.create('solidified_helium').displayName("Solidified Helium")
    event.create('solidified_hydrogen').displayName("Solidified Hydrogen")
    event.create('solidified_krypton').displayName("Solidified Krypton")
    event.create('solidified_mercury').displayName("Solidified Mercury")
    event.create('solidified_neon').displayName("Solidified Neon")
    event.create('solidified_nitrogen').displayName("Solidified Nitrogen")
    event.create('solidified_oxygen').displayName("Solidified Oxygen")
    event.create('solidified_radon').displayName("Solidified Radon")
    event.create('solidified_xenon').displayName("Solidified Xenon")

    //Stabilized Items
    const stabilized_elements = [
        ['einsteinium', '#ffea00'],
        ['berkelium', '#ff8400'],
        ['neptunium', '#2e66ff'],
        ['plutonium', '#ff0066'],
        ['uranium', '#04ff00'],
        ['curium', '#c800ff'],
        ['californium', '#ad0232'],
        ['americium', '#875800']
    ]

    for (const [element, elemColor] of stabilized_elements) {
        event.create(`stabilized_${element}`)
            .displayName(`Stabilized ${element.split('_').map(v => capitalize(v)).join(" ")}`)
            .textureJson({ layer0: 'kubejs:item/stabilized_element' })
            .color(0, elemColor);
    }

    //End Game Items
    event.create('heart_of_a_universe').displayName("§dHeart Of A Universe")
    event.create('creative_portable_tank_mold').displayName("Creative Quantum Tank Data")
    event.create('exotic_materials_catalyst').displayName("Exotic Materials Catalyst")
    event.create('eternal_catalyst').displayName("Eternal Catalyst")
    event.create('ultimate_gem').displayName("§dUltimate Gem").glow(true)
    event.create('mote_of_omnium').displayName("Mote of Omnium").glow(true).rarity("epic")
    event.create('creative_storage_component').displayName("Creative Storage Component").glow(true).rarity("epic")
    event.create('solidified_experience').displayName("Solidified Experience")

    //Misc Items
    event.create('grains_of_innocence').displayName("Grains of Innocence")
    event.create('radium_salt').displayName("Radium Salt").rarity('Epic')
    event.create('moon_dust').displayName("Moon Dust")
    event.create('dilithium_crystal').displayName("Dilithium Crystal")
    event.create('ender_star').displayName('§dEnder Star').glow(true)
    event.create('endest_star').displayName('§dEndest Star').glow(true)
    event.create('debug_laser').displayName('§dDebug Laser').glow(true)
    event.create('ender_energy_manipulator').displayName('Ender Energy Manipulator').glow(true)

    //Jetpack Units
    event.create('empty_fluxed_jetpack_unit').displayName('Empty Fluxed Jetpack Unit')
    event.create('empty_soularium_jetpack_unit').displayName('Empty Soularium Jetpack Unit')
    event.create('flight_control_unit').displayName('Ensouled Flight Control Unit')
    event.create('glowstone_elevation_unit').displayName('Glowstone Elevation Unit')
    event.create('cryotheum_coolant_unit').displayName('Cryotheum Coolant Unit')

    //TODO: GIVE CAPACITORS LORE AND NBT FOR THEM TO WORK
    event.create('compressed_octadic_capacitor').displayName("Compressed Octadic Capacitor")
    event.create('double_compressed_octadic_capacitor').displayName("Double Compressed Octadic Capacitor")
        // Core and North are part of the Crafting Nether Star mod.
    event.create('nether_star_north').displayName("Nether Star North Tip")
    event.create('nether_star_south').displayName("Nether Star South Tip")
    event.create('nether_star_east').displayName("Nether Star East Tip")
    event.create('nether_star_west').displayName("Nether Star West Tip")
    event.create('nether_star_center').displayName("Nether Star Center")
        // Hydrogen is part of Solidified Items section.
    event.create('dense_hydrogen').displayName("Dense Hydrogen").rarity('Uncommon')
    event.create('ultra_dense_hydrogen').displayName("Ultra Dense Hydrogen").rarity('Rare')

    //TODO: Add Hand Framing Tool
    event.create('hand_framing_tool').displayName("Hand Framing Tool [W.I.P]")

    //Add Thermal Series items that were missing
    event.create('aerotheum_dust').texture('kubejs:item/aerotheum_blend').displayName('§7Aerotheum Dust')
    event.create('cryotheum_dust').texture('kubejs:item/cryotheum_blend').displayName('§bCryotheum Dust')
    event.create('petrotheum_dust').texture('kubejs:item/petrotheum_blend').displayName('§8Petrotheum Dust')
    event.create('pyrotheum_dust').texture('kubejs:item/pyrotheum_blend').displayName('§6Pyrotheum Dust')
    event.create('primal_mana').displayName("Primal Mana Dust").rarity('epic')


    event.create('destabilized_clathrate').rarity('uncommon')
    event.create('energized_clathrate').rarity('uncommon')
    event.create('resonant_clathrate').rarity('rare')


    //PPC Stuff
    event.create('pulsating_mesh').displayName("Pulsating Mesh")
    event.create('pulsating_dust').displayName("Pulsating Dust")


    //I hate ArmorPlus
    //event.create('guardian_scale').rarity('rare').displayName("Guardian Scale")
    //event.create('ender_dragon_scale').rarity('epic').displayName("Ender Dragon Scale")
    //event.create('wither_bone').displayName("Wither Bone")
    //event.create('lava_crystal_charged').displayName("§6Infused Lava Crystal")


    //Thermal Augments
    //Very Hacky but whatever
    event.create('thermal:upgrade_augment_1');
    event.create('thermal:upgrade_augment_2');
    event.create('thermal:upgrade_augment_4');
    event.create('thermal:upgrade_augment_3');
    event.create('kubejs:redstone_transmission_coil')

    //Extra Utilities 2
    event.create('resonating_crystal').displayName("Resonating Redstone Crystal")
    event.create('ender_shard')

    //Glitch Armor
    event.create('glitch_fragment')
    event.create('glitch_heart')
    event.create('glitch_infused_ingot')
    event.create('glitch_infused_helmet', 'helmet').tier('glitch').displayName('§bGlitch Infused Helmet')
    event.create('glitch_infused_chestplate', 'chestplate').tier('glitch').displayName('§bGlitch Infused Chestplate')
    event.create('glitch_infused_leggings', 'leggings').tier('glitch').displayName('§bGlitch Infused Leggings')
    event.create('glitch_infused_boots', 'boots').tier('glitch').displayName('§bGlitch Infused Boots')

    //Ultimate Generator Components
    //event.create('survival_generator_component').textureJson({ layer0: 'gtceu:item/material_sets/dull/gear'}).color(0, '#70F00F')
    const generators = [
        ['survival', '#333333'],
        ['furnace', '#888888'],
        ['culinary', '#FFFFFF'],
        ['magmatic', '#630000'],
        ['heated_redstone', '#CF2600'],
        ['slimey', '#7EB53C'],
        ['ender', '#21593b'],
        ['disenchantment', '#30183B'],
        ['potion', '#6F348A'],
        ['death', '#E3CF81'],
        ['pink', '#E381A8'],
        ['frosty', '#81B1E3'],
        ['halitosis', '#A1688F'],
        ['nether_star', '#000000'],
        ['explosive', '#FF4800'],
        ['overclocked', '#1D24A1']
    ]

    for (const [genny, gennyColor] of generators) {
        event.create(`${genny}_generator_component`)
            .displayName(`${genny.split('_').map(v => capitalize(v)).join(" ")} Generator Component`)
            .textureJson({ layer0: 'gtceu:item/material_sets/dull/gear' })
            .color(0, gennyColor);
    }

    //Avaritia Replacements
    event.create('diamond_lattice')
    event.create('infinity_catalyst').rarity("epic")

    //Infinity Tools
    event.create('infinity_file').rarity("epic")
    event.create('infinity_hammer').rarity("epic")
    event.create('infinity_screwdriver').rarity("epic")
    event.create('infinity_wrench').rarity("epic")
    event.create('infinity_wire_cutter').rarity("epic")
    event.create('infinity_power_unit').rarity("epic")
    event.create('omni_motor').rarity("epic")

    // Ultimate Tools
    event.create('ultimate_core').texture('kubejs:item/ultimate/core')
    event.create('ultimate_file').texture('kubejs:item/ultimate/file').rarity("epic")
    event.create('ultimate_file_head').texture('kubejs:item/ultimate/file_head')
    event.create('ultimate_file_handle').texture('kubejs:item/ultimate/file_handle')
    event.create('ultimate_hammer').texture('kubejs:item/ultimate/hammer').rarity("epic")
    event.create('ultimate_hammer_head').texture('kubejs:item/ultimate/hammer_head')
    event.create('ultimate_hammer_handle').texture('kubejs:item/ultimate/hammer_handle')
    event.create('ultimate_screwdriver').texture('kubejs:item/ultimate/screwdriver').rarity("epic")
    event.create('ultimate_screwdriver_head').texture('kubejs:item/ultimate/screwdriver_head')
    event.create('ultimate_screwdriver_handle').texture('kubejs:item/ultimate/screwdriver_handle')
    event.create('ultimate_wrench').texture('kubejs:item/ultimate/wrench').rarity("epic")
    event.create('ultimate_wrench_head').texture('kubejs:item/ultimate/wrench_head')
    event.create('ultimate_wrench_handle').texture('kubejs:item/ultimate/wrench_handle')
    event.create('ultimate_wire_cutter').texture('kubejs:item/ultimate/wire_cutter').rarity("epic")
    event.create('ultimate_wire_cutter_head').texture('kubejs:item/ultimate/wire_cutter_head')
    event.create('ultimate_wire_cutter_handle').texture('kubejs:item/ultimate/wire_cutter_handle')

    // Netherite processing midproducts
    event.create('crushed_ancient_debris').texture('kubejs:item/netherite/crushed_ancient_debris')
    event.create('purified_ancient_debris').texture('kubejs:item/netherite/purified_ancient_debris')
    event.create('refined_ancient_debris').texture('kubejs:item/netherite/refined_ancient_debris')
    event.create('impure_netherite_dust').texture('kubejs:item/netherite/impure_netherite_dust')
    event.create('purified_netherite_dust').texture('kubejs:item/netherite/purified_netherite_dust')
    event.create('inert_netherite_scrap').texture('kubejs:item/netherite/inert_netherite_scrap')


    // Post tank circuits and whatnot
    const circs = [
        ['matter', 'processor_computer', "UHV"],
        ['matter', 'processor_assembly', "UV"],
        ['matter', 'processor', "ZPM"],
        ['dimensional', 'processor_computer', "UEV"],
        ['dimensional', 'processor_assembly', "UHV"],
        ['dimensional', 'processor', "UV"],
        ['monic', 'processor_computer', "UIV"],
        ['monic', 'processor_assembly',"UEV"],
        ['monic', 'processor',"UHV"]
    ]
    const mainframes = [
        ['matter', "UEV"],
        ['dimensional', "UIV"],
        ['monic', "MAX"],
    ]

    for (const [theme, type, volt] of circs) {
        event.create(`${theme}_${type}`)
            .displayName(`${theme.split('_').map(v => capitalize(v)).join(" ")} ${type.split('_').map(v => capitalize(v)).join(" ")}`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_${type}` })
            .tooltip(`${volt}-Tier Circuit`)
    }
    
    for (const [theme, volt] of mainframes) {
        event.create(`${theme}_processor_mainframe`)
            .displayName(`${theme.split('_').map(v => capitalize(v)).join(" ")} Processor Mainframe}`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_processor_mainframe_base`, layer1: "kubejs:item/circuits/processor_mainframe_lights" })
            .tooltip(`${volt}-Tier Circuit`)
    }

    const unit = [
        ['matter', '#f5f5f5'],
        ['dimensional', '#696969'],
        ['monic', '#1e90ff'],
    ]

    for (const [theme, color] of unit) {
        event.create(`${theme}_processing_unit`)
            .displayName(`${theme.split('_').map(v => capitalize(v)).join(" ")} Processing Unit`)
            .textureJson({ layer0: `gtceu:item/computer_monitor_cover` })
            .color(0, color)
    }
})

ItemEvents.modification(event => {
    // Making Infinity (and later Ultimate) tools work as unbreakable crafting tools
    event.modify('kubejs:infinity_file', item => {
        item.craftingRemainder = Item.of('kubejs:infinity_file').item
    })
    event.modify('kubejs:infinity_hammer', item => {
        item.craftingRemainder = Item.of('kubejs:infinity_hammer').item
    })
    event.modify('kubejs:infinity_screwdriver', item => {
        item.craftingRemainder = Item.of('kubejs:infinity_screwdriver').item
    })
    event.modify('kubejs:infinity_wrench', item => {
        item.craftingRemainder = Item.of('kubejs:infinity_wrench').item
    })
    event.modify('kubejs:infinity_wire_cutter', item => {
        item.craftingRemainder = Item.of('kubejs:infinity_wire_cutter').item
    })
})

ItemEvents.armorTierRegistry(event => {
    event.add("glitch", (tier) => {
        tier.durabilityMultiplier = 120;
        tier.equipSound = 'minecraft:item.armor.equip_iron';
        tier.toughness = 4.0;
        tier.slotProtections = [3, 10, 6, 3];
    })
})

ItemEvents.toolTierRegistry(event => {
	event.add("glitch", tier => {
		tier.attackDamageBonus = 10;
		tier.speed = 1.6;
		tier.uses = 2200;
	})

    event.add("dev", (tier) => {
        tier.enchantmentValue = 42
        tier.level = 42
        tier.uses = 42690
        tier.speed = 12
    })
})