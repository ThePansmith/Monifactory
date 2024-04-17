ServerEvents.recipes(event => {
    // Blacklight
    event.shaped(
        'gtceu:blacklight', [
            'BPB',
            ' S ',
            'CPW'
        ], {
            B: 'gtceu:tungsten_carbide_screw',
            C: '#gtceu:circuits/iv',
            P: 'gtceu:tungsten_carbide_plate',
            S: 'gtceu:hssg_spring',
            W: 'gtceu:platinum_single_cable'
        }
    ).id('gtceu:shaped/blacklight')

    // Sterilising Filter Casing
    event.shaped(
        'gtceu:sterilizing_filter_casing', [
            'PEP',
            'FBF',
            'MSR'
        ], {
            B: 'gtceu:blacklight',
            E: 'gtceu:luv_emitter',
            F: 'gtceu:item_filter',
            M: 'gtceu:luv_electric_motor',
            P: 'gtceu:polybenzimidazole_large_fluid_pipe',
            R: 'gtceu:osmiridium_rotor', // TODO: replace with iridium rotor if possible
            S: 'gtceu:black_steel_frame'
        }
    ).id('gtceu:shaped/filter_casing_sterile')

    // FLux Gem
    event.remove({ id: 'redstone_arsenal:materials/flux_gem' })
    event.recipes.gtceu.autoclave("flux_gem")
        .itemInputs('minecraft:diamond')
        .inputFluids('gtceu:redstone 720')
        .itemOutputs('redstone_arsenal:flux_gem')
        .duration(200)
        .EUt(400)

    // Flux Plating
    event.shaped(
        '4x redstone_arsenal:flux_plating', [
            ' P ',
            'PGP',
            ' P '
        ], {
            G: 'redstone_arsenal:flux_gem',
            P: 'gtceu:electrum_flux_plate'
        }
    ).id('redstone_arsenal:materials/flux_plating')

	// Vacuum Freezer
	// Draconic Superconductor Wire
    event.recipes.gtceu.vacuum_freezer("draconic_superconductor_wire")
        .itemInputs('gtceu:draconium_single_wire')
        .itemOutputs('gtceu:draconic_superconductor_single_wire')
        .inputFluids(Fluid.of('gtceu:nether_star', 144))
        .duration(100)
        .EUt(6000)

    // Chemical Reactor

    event.recipes.gtceu.chemical_reactor("draconium_dust")
        .itemInputs('gtceu:manyullyn_dust', 'minecraft:dragon_breath')
        .itemOutputs('gtceu:draconium_dust')
        .duration(500)
        .EUt(2000)

    //Draconic Stem Cells
    event.remove({ id: 'gtceu:chemical_reactor/stem_cells' })
    event.remove({ id: 'gtceu:large_chemical_reactor/stem_cells' })
    event.recipes.gtceu.chemical_reactor("draconic_stem_cells")
        .itemInputs('minecraft:dragon_egg')
        .inputFluids('gtceu:sterilized_growth_medium 500', 'gtceu:bacteria 500')
        .itemOutputs('64x gtceu:stem_cells', '64x gtceu:stem_cells')
        .outputFluids('gtceu:bacterial_sludge 500')
        .duration(6000)
        .EUt(30720)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    //Blast Furnace
    event.recipes.gtceu.electric_blast_furnace("quantum_fluxed_eternium_heavy_plating")
        .itemInputs('10x redstone_arsenal:flux_plating', 'gtceu:draconium_awakened_plate', '16x kubejs:quantum_flux')
        .inputFluids('gtceu:krypton 1000')
        .itemOutputs('kubejs:quantum_fluxed_eternium_heavy_plating')
        .duration(200)
        .EUt(250000)
        .blastFurnaceTemp(9000)

    // Mote of omnium
    event.recipes.gtceu.implosion_compressor("implosion_compressor_ominium_nugget")
        .itemInputs('kubejs:mote_of_omnium', 'minecraft:tnt')
        .itemOutputs('extendedcrafting:the_ultimate_nugget')
        .duration(20)
        .EUt(30)

    // Crystal Matrix Materials
    event.shaped(
        'avaritia:diamond_lattice', [
            'PBP',
            'BGB',
            'PBP'
        ], {
            B: 'minecraft:diamond_block',
            G: 'gtceu:diamond_perfect',
            P: 'gtceu:diamond_plate'
        }
    ).id('avaritia:diamond_lattice')

    event.remove({id: 'avaritia:crystal_matrix_ingot' })
    event.recipes.extendedcrafting.shaped_table(
        'avaritia:crystal_matrix_ingot', [
            '         ',
            '      DDD',
            '   DDDSLD',
            'DDDLSLLSD',
            'DLSSLSSLD',
            'DSLLSLDDD',
            'DLSDDD   ',
            'DDD      ',
            '         '
        ], {
            D: 'minecraft:diamond',
            L: 'avaritia:diamond_lattice',
            S: 'minecraft:nether_star'
        }
    )

	// Handled by gregtech, left here incase of emergency
    // event.recipes.gtceu.bender("crystal_matrix_plate")
    //     .itemInputs('avaritia:crystal_matrix_ingot')
    //     .itemOutputs('kubejs:crystal_matrix_plate')
    //     .duration(98)
    //     .EUt(24)
    //     .circuit(1)

    // Ultimate Gem
	event.recipes.extendedcrafting.shapeless_table(
		'kubejs:ultimate_gem',
		[
            "kubejs:destabilized_clathrate",
            "gtceu:enori_empowered_gem",
            "enderio:ender_crystal",
            "enderio:vibrant_crystal",
            "kubejs:dilithium_crystal",
            "enderio:enticing_crystal",
            "enderio:weather_crystal",
            "enderio:prescient_crystal",
            "enderio:pulsating_crystal",
            "minecraft:prismarine_shard",
            "gtceu:cinnabar_gem",
            "kubejs:energized_clathrate",
            "minecraft:quartz",
            "gtceu:certus_quartz_gem",
            "gtceu:fluix_gem",
            "gtceu:restonia_empowered_gem",
            "gtceu:palis_empowered_gem",
            "gtceu:diamatine_empowered_gem",
            "gtceu:void_empowered_gem",
            "gtceu:emeradic_empowered_gem",
            "armorplus:infused_lava_crystal",
            "minecraft:emerald",
            "redstone_arsenal:flux_gem",
            "minecraft:diamond",
            "kubejs:resonant_clathrate"
		]
	)

    // Ultimate Generator
	event.recipes.extendedcrafting.shapeless_table(
		'kubejs:ultimate_generator',
		[
			// Row 1
            "solarflux:sp_1",
            "solarflux:sp_2",
            "solarflux:sp_3",
            "solarflux:sp_4",
            "gtceu:steam_large_turbine",
            "solarflux:sp_5",
            "solarflux:sp_6",
            "solarflux:sp_7",
            "solarflux:sp_8",
            // Row 2
            "solarflux:sp_de.wyvern",
            "solarflux:sp_de.draconic",
            "gtceu:bronze_large_boiler" ,
            "gtceu:lv_steam_turbine" ,
            "gtceu:mv_steam_turbine" ,
            "gtceu:hv_steam_turbine" ,
            "gtceu:steel_large_boiler" ,
            "solarflux:sp_de.chaotic",
            "solarflux:sp_avaritia.neutronium",
            // Row 3
            "thermal:upgrade_augment_3",
            "nuclearcraft:enderium_heat_sink",
            "kubejs:survival_generator_component", // Survival Generator
            "kubejs:furnace_generator_component", // Furnace Generator
            "kubejs:culinary_generator_component", // Culinary Generator
            "kubejs:magmatic_generator_component", // Magmatic Generator
            "kubejs:heated_redstone_generator_component", //Heated Redstone Generator
            "nuclearcraft:enderium_heat_sink",
            "thermal:upgrade_augment_3",
            // Row 4
            "gtceu:lv_combustion",
            "gtceu:luv_fusion_reactor",
            "kubejs:slimey_generator_component", // Slimey Generator
            "steamdynamo:steam_dynamo",
            "nuclearcraft:fission_reactor_controller",
            "steamdynamo:steam_dynamo",
            "kubejs:ender_generator_component", // Ender Generator
            "gtceu:uv_fusion_reactor",
            "gtceu:lv_combustion",
            // Row 5
            "gtceu:mv_combustion",
            "draconicevolution:reactor_stabilizer",
            "kubejs:disenchantment_generator_component", // Disenchantment Generator
            "thermal:dynamo_magmatic",
            "draconicevolution:reactor_core",
            "thermal:dynamo_magmatic",
            "kubejs:potion_generator_component", // Potion Generator
            "draconicevolution:reactor_stabilizer",
            "gtceu:mv_combustion",
            // Row 6
            "gtceu:hv_combustion",
            "gtceu:zpm_fusion_reactor",
            "kubejs:death_generator_component", // Death Generator
            "thermal:dynamo_numismatic",
            "draconicevolution:generator",
            "thermal:dynamo_numismatic",
            "kubejs:pink_generator_component", // Pink Generator
            "gtceu:draconic_reactor",
            "gtceu:hv_combustion",
            // Row 7
            "thermal:upgrade_augment_3",
            "nuclearcraft:enderium_heat_sink",
            "kubejs:frosty_generator_component",
            "kubejs:halitosis_generator_component",
            "kubejs:nether_star_generator_component",
            "kubejs:explosive_generator_component",
            "kubejs:overclocked_generator_component",
            "nuclearcraft:enderium_heat_sink",
            "thermal:upgrade_augment_3",
            // Row 8
            "solarflux:sp_de.wyvern",
            "solarflux:sp_de.draconic",
            "gtceu:titanium_large_boiler",
            "gtceu:lv_gas_turbine",
            "gtceu:mv_gas_turbine",
            "gtceu:hv_gas_turbine",
            "gtceu:tungstensteel_large_boiler",
            "solarflux:sp_de.chaotic",
            "solarflux:sp_avaritia.neutronium",
            // Row 9
            "solarflux:sp_1",
            "solarflux:sp_2",
            "solarflux:sp_3",
            "solarflux:sp_4",
            "gtceu:gas_large_turbine",
            "solarflux:sp_5",
            "solarflux:sp_6",
            "solarflux:sp_7",
            "solarflux:sp_8"
		]
	)

    event.recipes.extendedcrafting.shaped_table(
        'kubejs:ultimate_power_storage', [
            'ABCDEDCBA',
            'BCDEFEDCB',
            'CDEFGFEDC',
            'DEFGHGFED',
            'EFGHIHGFE',
            'DEFGHGFED',
            'CDEFGFEDC',
            'BCDEFEDCB',
            'ABCDEDCBA'
        ], {
            A: 'gtceu:lv_lithium_battery',
            B: 'gtceu:mv_lithium_battery',
            C: 'gtceu:energy_crystal',
            D: 'gtceu:lapotron_crystal',
            E: 'gtceu:lapotronic_energy_orb',
            F: 'gtceu:lapotronic_energy_orb_cluster',
            G: 'gtceu:zero_point_module',
            H: 'gtceu:energy_cluster',
            I: 'gtceu:max_battery'
        }
    )

    event.recipes.extendedcrafting.shaped_table(
        'gtceu:zero_point_module', [
            '  PPPPP  ',
            '  PBCBP  ',
            '  PCBCP  ',
            '  PBCBP  ',
            '   ZZZ   ',
            '   ZFZ   ',
            '   ZFZ   ',
            '   ZZZ   ',
            '   PPP   '
        ], {
            B: 'kubejs:stabilized_berkelium',
            C: 'kubejs:stabilized_californium',
            F: 'gtceu:zpm_field_generator',
            P: 'nuclearcraft:plate_elite',
            Z: '#gtceu:circuits/zpm'
        }
    )

    //! Creative Items !//

    //Creative Vending Upgrade
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:creative_storage_component', [
            'ABCDEDCBA',
            'BCDEFEDCB',
            'CDEFGFEDC',
            'DEFGHGFED',
            'EFGHIHGFE',
            'DEFGHGFED',
            'CDEFGFEDC',
            'BCDEFEDCB',
            'ABCDEDCBA'
        ], {
            A: 'functionalstorage:netherite_upgrade',
            B: 'sophisticatedstorage:gold_barrel',
            C: 'sophisticatedstorage:diamond_barrel',
            D: 'gtceu:tungsten_steel_crate',
            E: 'gtceu:luv_quantum_chest',
            F: 'gtceu:zpm_quantum_chest',
            G: 'gtceu:uv_quantum_chest',
            H: 'gtceu:uhv_quantum_chest',
            I: 'avaritia:infinity_catalyst'
        }
    )

    //Creative Energy Cell (AE2)
    event.recipes.extendedcrafting.shaped_table(
        'ae2:creative_energy_cell', [
            'ABCDEDCBA',
            'BCDEFEDCB',
            'CDEFGFEDC',
            'DEFGHGFED',
            'EFGHIHGFE',
            'DEFGHGFED',
            'CDEFGFEDC',
            'BCDEFEDCB',
            'ABCDEDCBA'
        ], {
            A: 'kubejs:ultimate_power_storage',
            B: 'gtceu:hv_battery_buffer_16x',
            C: 'gtceu:ev_battery_buffer_16x',
            D: 'gtceu:iv_battery_buffer_16x',
            E: 'gtceu:luv_battery_buffer_16x',
            F: 'gtceu:zpm_battery_buffer_16x',
            G: 'gtceu:uv_battery_buffer_16x',
            H: 'gtceu:uhv_battery_buffer_16x',
            I: 'avaritia:infinity_catalyst'
        }
    )

    //Creative Jetpack
    event.recipes.extendedcrafting.shaped_table(
        Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:creative"}').weakNBT(), [
            '  C   L  ',
            ' CCC LLL ',
            ' CVCFLEL ',
            ' CVCILEL ',
            ' CVCDLEL ',
            ' CVC LEL ',
            ' SSS HHH ',
            '  N   R  ',
            ' NNN RRR '
        ], {
            C: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:conductive_iron"}').weakNBT(),
            D: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:dark_soularium"}').weakNBT(),
            E: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:resonant"}').weakNBT(),
            F: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:fluxed"}').weakNBT(),
            H: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:hardened"}').weakNBT(),
            I: 'avaritia:infinity_catalyst',
            L: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:leadstone"}').weakNBT(),
            N: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:energetic"}').weakNBT(),
            R: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:reinforced"}').weakNBT(),
            S: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:electrical_steel"}').weakNBT(),
            V: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:vibrant"}').weakNBT()
        }
    )

    //Creative Solar Panel
    event.recipes.extendedcrafting.shaped_table(
        'solarflux:sp_avaritia.infinity', [
            'SNNNNNNNS',
            'NPPPNPPPN',
            'NPPPNPPPN',
            'NPPPNPPPN',
            'NNNNINNNN',
            'NPPPNPPPN',
            'NPPPNPPPN',
            'NPPPNPPPN',
            'SNNNNNNNS'
        ], {
            I: 'avaritia:infinity_catalyst',
            N: 'gtceu:neutronium_plate',
            P: 'kubejs:infinity_plate',
            S: 'solarflux:sp_avaritia.neutronium'

        }
    )

    //GT CREATIVE EU SOURCE
    event.recipes.extendedcrafting.shaped_table(
        'gtceu:creative_energy', [
            'ABCDEDCBA',
            'BCDEFEDCB',
            'CDEFGFEDC',
            'DEFGHGFED',
            'EFGHIHGFE',
            'DEFGHGFED',
            'CDEFGFEDC',
            'BCDEFEDCB',
            'ABCDEDCBA',
        ], {
            A: 'gtceu:mercury_barium_calcium_cuprate_hex_wire',
            B: 'gtceu:uranium_triplatinum_hex_wire',
            C: 'gtceu:samarium_iron_arsenic_oxide_hex_wire',
            D: 'gtceu:indium_tin_barium_titanium_cuprate_hex_wire',
            E: 'gtceu:uranium_rhodium_dinaquadide_hex_wire',
            F: 'gtceu:enriched_naquadah_trinium_europium_duranide_hex_wire',
            G: 'gtceu:ruthenium_trinium_americium_neutronate_hex_wire',
            H: 'gtceu:omnium_hex_wire',
            I: 'draconicevolution:creative_op_capacitor'
        }
    )

    //CREATIVE RF SOURCE
    event.recipes.extendedcrafting.shaped_table(
        'draconicevolution:creative_op_capacitor', [
            "UPPCGCPPU",
            'PPCGSGCPP',
            'PCGSRSGCP',
            'CGSRORSGC',
            'GSROIORSG',
            'CGSRORSGC',
            'PCGSRSGCP',
            'PPCGSGCPP',
            "UPPCGCPPU",
        ], {
            U: 'kubejs:ultimate_generator',
            P: 'draconicevolution:energy_pylon',
            C: 'draconicevolution:energy_core',
            G: 'draconicevolution:particle_generator',
            S: 'draconicevolution:energy_core_stabilizer',
            R: 'draconicevolution:reactor_stabilizer',
            O: 'draconicevolution:reactor_core',
            I: 'avaritia:infinity_catalyst'
        }, 4
    )

    // Creative Chest
    event.recipes.extendedcrafting.shaped_table(
        'gtceu:creative_chest', [
            'ABBBBBBBA',
            'BCTEDETCB',
            'BFSGHGSFB',
            'BUJXIXJUB',
            'BNSWKWSNB',
            'BUJXLXJUB',
            'BFSGMGSFB',
            'BCTEDETCB',
            'ABBBBBBBA'
        ], {
            A: "kubejs:creative_storage_component",
            B: "avaritia:infinity_ingot",
            C: "enderio:creative_power",
            D: "minecraft:bedrock",
            E: "minecraft:bedrock",
            F: "minecraft:bedrock",
            G: "minecraft:bedrock",
            H: "avaritia:infinity_helmet",
            I: "avaritia:infinity_chestplate",
            J: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:creative",Throttle:1.0d}').weakNBT(),
            K: "avaritia:infinity_sword",
            L: "avaritia:infinity_leggings",
            M: "avaritia:infinity_boots",
            N: "minecraft:bedrock",
            S: "solarflux:sp_avaritia.infinity",
            T: "gtceu:creative_tank",
            U: "ae2:creative_energy_cell",
            W: "minecraft:bedrock",
            X: "minecraft:bedrock"
        }, 4
    )

	//! avaritia endgame items
	// skullfire sword
	event.recipes.extendedcrafting.shaped_table(
		'avaritia:skullfire_sword', [
			'       B ',
			'      BIB',
			'     BHB ',
			'    BGB  ',
			' D BFB   ',
			'  DEB    ',
			'  CD     ',
			' C  D    ',
			'A        ',
		], {
			A: 'nether_star',
			B: 'avaritia:crystal_matrix_ingot',
			C: '#minecraft:logs',
			D: 'armorplus:wither_bone',
			E: 'armorplus:redstone_sword',
			F: 'armorplus:lapis_sword',
			G: 'armorplus:emerald_sword',
			H: 'armorplus:guardian_sword',
			I: 'armorplus:infused_lava_sword',
			// J: 'nano_saber' // missing
		}
	);
	// sword of the cosmos
	event.recipes.extendedcrafting.shaped_table(
		'avaritia:infinity_sword', [
			'       BB',
			'      BIB',
			'     B B ',
			'    B B  ',
			' D BFB   ',
			'  DEB    ',
			'  CD     ',
			' C  D    ',
			'A        ',
		], {
			A: 'avaritia:infinity_catalyst',
			B: 'avaritia:infinity_ingot',
			C: 'avaritia:neutronium_ingot',
			D: 'avaritia:crystal_matrix_ingot',
			E: 'armorplus:super_star_sword',
			F: 'armorplus:ender_dragon_sword',
			// G: 'draconicevolution:wyvern_sword', 	// not yet finished
			// H: 'draconicevolution:draconic_sword', 	// same as this
			I: 'avaritia:skullfire_sword'
		}
	);
	// infinity helmet
	event.recipes.extendedcrafting.shaped_table(
		'avaritia:infinity_helmet', [
			'  AAAAA  ',
			' ABBDBBA ',
			' ACCECCA ',
			' ABBFBBA ',
			' ABBEBBA ',
			'   B B   ',
			'         ',
			'         ',
			'         ',
		], {
			// TODO readd the items once they exist
			A: 'avaritia:neutronium_ingot',
			B: 'barrier', // the ultimate helmet
			C: 'avaritia:infinity_ingot',
			D: 'barrier', // draconic helm
			E: 'barrier', // quarktech helmet
			F: 'barrier' // wyvern helmet
		}, 4 // explicitly make this t4 only, as this can fit into a t3 table
	);
	// infinity chestplate
	event.recipes.extendedcrafting.shaped_table(
		'avaritia:infinity_chestplate', [
			' AA   AA ',
			'AAA   AAA',
			'AAAA AAAA',
			' AEBGBFA ',
			' ABBCBBA ',
			' ABCDCBA ',
			' ABBCBBA ',
			' ABBBBBA ',
			'  AAAAA  ',
		], {
			A: 'avaritia:neutronium_ingot',
			B: 'barrier', // the ultimate chestplate
			C: 'avaritia:infinity_ingot',
			D: 'avaritia:infinity_block',
			E: 'barrier', // draconic chestplate
			F: 'barrier', // wyvern chestplate
			G: 'barrier', // quarktech chestplate
		}
	);
	// infinity leggings
	event.recipes.extendedcrafting.shaped_table(
		'avaritia:infinity_leggings', [
			'AAAAAAAAA',
			'AEBBBBBFA',
			'ABA   ABA',
			'ABA   ABA',
			'ADA   ADA',
			'ACA   ACA',
			'ABA   ABA',
			'ABA   ABA',
			'AAA   AAA',
        ], {
			// TODO readd the items once they exist
			A: 'avaritia:neutronium_ingot',
			B: 'barrier', // the ultimate leggings
			C: 'avaritia:infinity_ingot',
			D: 'barrier', // quarktech leggings
			E: 'barrier', // draconic leggings
			F: 'barrier', // wyvern leggings
		}
    );
	// infinity boots
	event.recipes.extendedcrafting.shaped_table(
		'avaritia:infinity_boots', [
			' AAA AAA ',
			' ADA ADA ',
			' AEA AFA ',
			'AABA ABAA',
			'ABBA ABBA',
			'AAAC CAAA',
			'         ',
			'         ',
			'         ',
		], {
			A: 'avaritia:neutronium_ingot',
			B: 'barrier', // the ultimate boots
			C: 'avaritia:infinity_ingot',
			D: 'barrier', //quarktech boots
			E: 'barrier', // draconic boots
			F: 'barrier', // wyvern boots
		}, 4
	);
})
