ServerEvents.recipes(event => {
    // Assembly Line
    // Dimensional Superassembler
    event.recipes.gtceu.assembly_line('dimensional_superassembler')
            .itemInputs('gtceu:assembly_line', '4x kubejs:dimensional_processor_mainframe', '16x gtceu:infinity_plate', '4x kubejs:dimensional_stabilization_netherite_casing', '16x kubejs:omnic_matrix_machine_casing', '12x gtceu:uiv_conveyor_module', '8x gtceu:uiv_robot_arm', '8x gtceu:uiv_emitter', '2x gtceu:infinity_frame')
            .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:omnium 5760', 'gtceu:polybenzimidazole 11520')
            .itemOutputs('gtceu:dimensional_superassembler')
            .duration(6000)
            .EUt(13920000)

            .stationResearch(b => b
                .researchStack('gtceu:assembly_line')
                .CWUt(160, 1024000)
                .EUt(1200000)
            )
    // Extra Large Chemical Reactor
    event.recipes.gtceu.assembly_line('extra_large_chemical_reactor')
            .itemInputs('gtceu:large_chemical_reactor', "16x gtceu:duranium_large_fluid_pipe", '8x gtceu:uv_hermetic_casing', '4x gtceu:uv_field_generator', '8x gtceu:uv_electric_pump', '8x gtceu:uv_fluid_regulator', '4x #gtceu:circuits/uhv')
            .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:polybenzimidazole 1152')
            .itemOutputs('gtceu:extra_large_chemical_reactor')
            .duration(1200)
            .EUt(1000000)
    
    .stationResearch(b => b
        .researchStack('gtceu:large_chemical_reactor')
        .CWUt(96, 288000)
        .EUt(30720)
    )
    // UEV/UIV/MAX Hulls and Casing

    event.recipes.gtceu.assembler('uev_hull')
        .itemInputs('gtceu:uev_machine_casing', '2x gtceu:single_omnium_wire')
        .inputFluids('gtceu:polybenzimidazole 576')
        .itemOutputs('gtceu:uev_machine_hull')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('uev_casing')
        .itemInputs('8x gtceu:omnium_plate')
        .itemOutputs('gtceu:uev_machine_casing')
        .circuit(8)
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('uiv_hull')
        .itemInputs('gtceu:uev_machine_casing', '2x gtceu:omnium_single_wire')
        .inputFluids('gtceu:polybenzimidazole 576')
        .itemOutputs('gtceu:uiv_machine_hull')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('uiv_casing')
        .itemInputs('8x gtceu:infinity_plate')
        .itemOutputs('gtceu:uiv_machine_casing')
        .circuit(8)
        .duration(50)
        .EUt(16)

        event.recipes.gtceu.assembler('max_hull')
        .itemInputs('gtceu:max_machine_casing', '2x gtceu:holmium_single_wire')
        .inputFluids('gtceu:omnium 1152')
        .itemOutputs('gtceu:max_machine_hull')
        .duration(50)
        .EUt(16)

    event.recipes.gtceu.assembler('max_casing')
        .itemInputs('8x gtceu:monium_plate')
        .itemOutputs('gtceu:max_machine_casing')
        .circuit(8)
        .duration(50)
        .EUt(16)

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
	// kubejs Superconductor Wire
    event.recipes.gtceu.vacuum_freezer("sculk_superconductor_wire")
        .itemInputs('gtceu:sculk_compound_single_wire')
        .itemOutputs('gtceu:sculk_superconductor_single_wire')
        .inputFluids(Fluid.of('gtceu:nether_star', 144))
        .duration(100)
        .EUt(6000)

    // Chemical Reactor

    event.recipes.gtceu.chemical_reactor("sculk_compound_dust")
        .itemInputs('gtceu:manyullyn_dust', 'minecraft:sculk_catalyst')
        .itemOutputs('gtceu:sculk_compound_dust')
        .duration(500)
        .EUt(2000)

    //kubejs Stem Cells
    event.remove({ id: 'gtceu:chemical_reactor/stem_cells' })
    event.remove({ id: 'gtceu:large_chemical_reactor/stem_cells' })
    event.recipes.gtceu.chemical_reactor("kubejs_stem_cells")
        .itemInputs('minecraft:dragon_egg')
        .inputFluids('gtceu:sterilized_growth_medium 500', 'gtceu:bacteria 500')
        .itemOutputs('64x gtceu:stem_cells', '64x gtceu:stem_cells')
        .outputFluids('gtceu:bacterial_sludge 500')
        .duration(6000)
        .EUt(30720)
        .cleanroom(CleanroomType.STERILE_CLEANROOM)

    //Blast Furnace
    event.recipes.gtceu.electric_blast_furnace("quantum_fluxed_eternium_heavy_plating")
        .itemInputs('10x redstone_arsenal:flux_plating', 'gtceu:resonant_sculk_compound_plate', '16x kubejs:quantum_flux')
        .inputFluids('gtceu:krypton 1000')
        .itemOutputs('kubejs:quantum_fluxed_eternium_heavy_plating')
        .duration(200)
        .EUt(250000)
        .blastFurnaceTemp(9000)

    // Mote of omnium
    event.recipes.gtceu.implosion_compressor("implosion_compressor_ominium_nugget")
        .itemInputs('kubejs:mote_of_omnium', 'minecraft:tnt')
        .itemOutputs('gtceu:omnium_nugget')
        .duration(20)
        .EUt(30)

    // Crystal Matrix Materials
    event.shaped(
        'kubejs:diamond_lattice', [
            'PBP',
            'BGB',
            'PBP'
        ], {
            B: 'minecraft:diamond_block',
            G: 'gtceu:diamond_perfect',
            P: 'gtceu:diamond_plate'
        }
    ).id('kubejs:diamond_lattice')

    event.recipes.extendedcrafting.shaped_table(
        'gtceu:crystal_matrix_ingot', [
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
            L: 'kubejs:diamond_lattice',
            S: 'minecraft:nether_star'
        }
    )

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
        }, 4
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
        }, 4
    )

    //! Creative Items !//

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
            I: 'kubejs:infinity_catalyst',
            L: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:leadstone"}').weakNBT(),
            N: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:energetic"}').weakNBT(),
            R: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:reinforced"}').weakNBT(),
            S: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:electrical_steel"}').weakNBT(),
            V: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:vibrant"}').weakNBT()
        }, 4
    )

    //Creative Solar Panel
    event.recipes.extendedcrafting.shaped_table(
        'solarflux:sp_custom_infinity', [
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
            I: 'kubejs:infinity_catalyst',
            N: 'gtceu:neutronium_plate',
            P: 'gtceu:infinity_plate',
            S: 'solarflux:sp_custom_neutronium'

        }, 4
    )

    // Creative Efficiency Upgrade
    event.recipes.extendedcrafting.shaped_table(
        'thermal:machine_efficiency_creative_augment', [
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
            U: 'kubejs:ultimate_power_storage',
            P: 'thermal:upgrade_augment_3',
            C: 'thermal:upgrade_augment_4',
            G: 'thermal:upgrade_augment_2',
            S: 'thermal:machine_speed_augment',
            R: 'thermal:machine_speed_augment',
            O: 'thermal:machine_efficiency_augment',
            I: 'kubejs:infinity_catalyst'
        }, 4
    )

    // Creative Chest
    event.recipes.extendedcrafting.shaped_table(
        '2x gtceu:creative_chest', [
            'BMMMMMMMMMB',
            'MIPOPPPOPIM',
            'MIFNNNNNFIM',
            'GUNNEEENNUG',
            'RDEEQQQEEDR',
            'RSSSSHSSSSR',
            'RDTTQQQTTDR',
            'GUNNTTTNNUG',
            'MIFNNNNNFIM',
            'MIPVWXYZPIM',
            'BMMMMMMMMMB'
        ], {
            B: 'gtceu:monium_block',
            M: 'gtceu:monium_plate',
            D: 'gtceu:double_monium_plate',
            G: 'gtceu:monium_gear',
            I: 'gtceu:infinity_block',
            N: 'gtceu:dense_netherite_plate',
            S: 'kubejs:creative_storage_data',
            E: 'kubejs:creative_energy_data',
            T: 'kubejs:creative_tank_data',
            Q: 'kubejs:field_stabilised_omnic_pulsar_compound',
            U: 'gtceu:subatomic_digital_assembler',
            R: 'gtceu:uiv_robot_arm',
            F: 'gtceu:uiv_field_generator',
            O: 'gtceu:uiv_sensor',
            P: 'kubejs:monic_processor_mainframe',
            H: 'gtceu:max_machine_hull',
            V: 'kubejs:infinity_file',
            W: 'kubejs:infinity_screwdriver',
            X: 'kubejs:infinity_wrench',
            Y: 'kubejs:infinity_hammer',
            Z: 'kubejs:infinity_wire_cutter'            
        }
    )

    // Creative Catalyst augment
    event.recipes.extendedcrafting.shaped_table(
        'thermal:machine_catalyst_creative_augment', [
            'TTTTTTTTT',
            'TNNIIINNT',
            'TNINNNINT',
            'TNINCIIIT',
            'TNICRCINT',
            'TIIICNINT',
            'TNINNNINT',
            'TNNIIINNT',
            'TTTTTTTTT'
        ], {
            I: 'gtceu:infinity_plate',
            R: 'kubejs:infinity_catalyst',
            N: 'gtceu:neutronium_plate',
            T: 'gtceu:titanium_plate',
            C: 'thermal:machine_catalyst_augment'
        }, 4
    )
})
