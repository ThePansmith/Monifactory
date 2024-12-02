ServerEvents.recipes(event => {
    // Assembly Line
    // Dimensional Superassembler
    event.recipes.gtceu.assembly_line('dimensional_superassembler')
            .itemInputs('gtceu:assembly_line', '4x #gtceu:circuits/uiv', '16x gtceu:infinity_plate', '4x kubejs:dimensional_stabilization_netherite_casing', '16x kubejs:omnic_matrix_machine_casing', '6x gtceu:uev_conveyor_module', '4x gtceu:uev_robot_arm', '4x gtceu:uev_emitter', '2x gtceu:infinity_frame', '24x gtceu:polyethyl_cyanoacrylate_plate')
            .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:omnium 5760')
            .itemOutputs('gtceu:dimensional_superassembler')
            .duration(6000)
            .EUt(13920000)

            .stationResearch(b => b
                .researchStack('gtceu:assembly_line')
                .CWUt(160, 1024000)
                .EUt(1200000)
            )

    if(!isNormalMode) {
        // Helical Fusion Reactor
        event.recipes.gtceu.assembly_line('gtceu:helical_fusion_reactor')
        .itemInputs('gtceu:uv_fusion_reactor', '4x #gtceu:circuits/uev', 'gtceu:gravi_star', '2x gtceu:double_activated_netherite_plate', '4x gtceu:uhv_field_generator', '64x kubejs:multidimensional_cpu_chip', '64x kubejs:multidimensional_cpu_chip', '64x gtceu:ruthenium_trinium_americium_neutronate_single_wire', '24x gtceu:polyethyl_cyanoacrylate_plate')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:omnium 5760')
        .itemOutputs('gtceu:helical_fusion_reactor')
        .duration(6000)
        .EUt(13920000)
        .stationResearch(b => b
            .researchStack('gtceu:uv_fusion_reactor')
            .CWUt(160, 1024000)
            .EUt(1200000)
        )
    }


    // Extra Large Chemical Reactor
    event.recipes.gtceu.assembly_line('extra_large_chemical_reactor')
        .itemInputs('gtceu:large_chemical_reactor', "8x gtceu:naquadah_large_fluid_pipe", '8x gtceu:luv_hermetic_casing', '4x gtceu:luv_field_generator', '8x gtceu:luv_electric_pump', '8x gtceu:luv_fluid_regulator', '4x #gtceu:circuits/zpm')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:polybenzimidazole 1152')
        .itemOutputs('gtceu:extra_large_chemical_reactor')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:large_chemical_reactor').EUt(7680).duration(600))
        .duration(1200)
        .EUt(131072)

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

    // Trinaquadalloy Mixer Recipe
    event.recipes.gtceu.mixer("mixer_trinaquadalloy")
        .itemInputs("6x gtceu:trinium_dust", "2x gtceu:naquadah_dust",  "gtceu:carbon_dust")
        .itemOutputs("9x gcyr:trinaquadalloy_dust")
        .circuit(1)
        .duration(300)
        .EUt(491250)

    // Fluxed Electrum Mixer Recipe
    event.recipes.gtceu.mixer("mixer_electrum_flux")
        .itemInputs("6x gtceu:electrum_dust", "gtceu:lumium_dust",  "gtceu:signalum_dust")
        .itemOutputs("8x gtceu:electrum_flux_dust")
        .circuit(2)
        .duration(300)
        .EUt(129)

    // Atomic Casing Buff
    event.remove({ id: 'gcyr:shaped/casing_atomic' })
    event.remove({ id: 'gcyr:assembler/casing_atomic' })

    event.shaped(
        '2x gtceu:atomic_casing', [
            'PHP',
            'PFP',
            'PWP'
        ], {
            P: 'gcyr:trinaquadalloy_plate',
            H: '#forge:tools/hammers',
            W: '#forge:tools/wrenches',
            F: 'gtceu:naquadah_alloy_frame',
        }
    ).id('gtceu:shaped/atomic_casing')

    event.recipes.gtceu.assembler("atomic_casing")
        .itemInputs("6x gcyr:trinaquadalloy_plate", "gtceu:naquadah_alloy_frame")
        .itemOutputs("2x gtceu:atomic_casing")
        .duration(100)
        .EUt(16)
        .circuit(6)

    // Sterilising Filter Casing
    event.shaped(
        '4x gtceu:sterilizing_filter_casing', [
            'PEP',
            'FBF',
            'MSR'
        ], {
            B: 'gtceu:blacklight',
            E: 'gtceu:luv_emitter',
            F: 'gtceu:item_filter',
            M: 'gtceu:luv_electric_motor',
            P: 'gtceu:polybenzimidazole_large_fluid_pipe',
            R: 'gtceu:iridium_rotor',
            S: 'gtceu:tritanium_frame'
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

    // Ultimate Material
    event.recipes.gtceu.assembly_line("kubejs:the_ultimate_material")
        .itemInputs('kubejs:warden_heart', '4x kubejs:guardian_scale', '8x kubejs:wither_bone', '12x kubejs:ender_dragon_scale')
        .itemOutputs('kubejs:the_ultimate_material')
        .duration(600)
        .EUt(491520)
        .stationResearch(b => b
            .researchStack('kubejs:warden_heart')
            .CWUt(96, 384000)
            .EUt(491520)
        )

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
    event.recipes.gtceu.omnic_forge('kubejs:flux_plating_assembly')
        .itemInputs('redstone_arsenal:flux_gem', '4x gtceu:electrum_flux_plate')
        .itemOutputs('4x redstone_arsenal:flux_plating')
        .duration(60)
        .EUt(7680)

	// Vacuum Freezer
	// kubejs Superconductor Wire
    event.recipes.gtceu.vacuum_freezer("sculk_superconductor")
        .itemInputs('gtceu:cryococcus_ingot')
        .itemOutputs('gtceu:sculk_superconductor_ingot')
        .inputFluids(Fluid.of('gtceu:nether_star', 144))
        .duration(100)
        .EUt(6000)

    // Chemical Reactor

    event.recipes.gtceu.chemical_reactor("cryolobus_dust")
        .itemInputs('gtceu:manyullyn_dust', 'minecraft:sculk_catalyst')
        .itemOutputs('gtceu:cryolobus_dust')
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
        .itemInputs('10x redstone_arsenal:flux_plating', 'gtceu:cryococcus_plate', '16x kubejs:quantum_flux')
        .inputFluids('gtceu:krypton 1000')
        .itemOutputs('kubejs:quantum_fluxed_eternium_heavy_plating')
        .duration(200)
        .EUt(250000)
        .blastFurnaceTemp(9000)

    event.recipes.gtceu.electric_blast_furnace("universe_resistant_neutronium_heavy_plating")
        .itemInputs('gtceu:neutronium_plate', '2x kubejs:mote_of_omnium', '16x gtceu:quantum_eye')
        .inputFluids('gtceu:xenon 1000')
        .itemOutputs('kubejs:universe_resistant_neutronium_heavy_plating')
        .duration(200)
        .EUt(250000)
        .blastFurnaceTemp(10000)

    event.recipes.gtceu.omnic_forge("elementally_infused_omnic_matrix_heavy_plating")
        .itemInputs('4x gtceu:omnium_plate', 'gtceu:dense_crystal_matrix_plate', 'gtceu:gravi_star', '4x gtceu:neutron_reflector', '16x kubejs:primal_mana')
        .itemOutputs('kubejs:elementally_infused_omnic_matrix_heavy_plating')
        .duration(100)
        .EUt(1000000)

    event.recipes.gtceu.omnic_forge("dimensionally_stabilized_infinity_heavy_plating")
        .itemInputs('gtceu:infinity_plate', 'gtceu:dense_activated_netherite_plate', 'kubejs:quasi_stable_neutron_star', '8x gtceu:neutron_reflector', '16x kubejs:the_ultimate_material')
        .itemOutputs('kubejs:dimensionally_stabilized_infinity_heavy_plating')
        .duration(100)
        .EUt(4000000)

    // Mote of omnium
    event.recipes.gtceu.implosion_compressor("implosion_compressor_ominium_nugget")
        .itemInputs('kubejs:mote_of_omnium', 'minecraft:tnt')
        .itemOutputs('gtceu:omnium_nugget')
        .duration(20)
        .EUt(30)

    event.recipes.gtceu.implosion_compressor("implosion_compressor_ominium_nugget_itnt")
        .itemInputs('4x kubejs:mote_of_omnium', 'gtceu:industrial_tnt')
        .itemOutputs('4x gtceu:omnium_nugget')
        .duration(20)
        .EUt(30)

    // Crystal Matrix Materials
    event.shaped(
        'kubejs:diamond_lattice', [
            'PBP',
            'BGB',
            'PBP'
        ], {
            P: 'minecraft:diamond',
            G: 'gtceu:diamond_perfect',
            B: 'gtceu:diamond_screw'
        }
    ).id('kubejs:diamond_lattice')
    event.recipes.gtceu.assembler('kubejs:diamond_lattice')
        .itemInputs('gtceu:diamond_perfect', '2x gtceu:diamond_plate', '4x gtceu:diamond_screw')
        .itemOutputs('kubejs:diamond_lattice')
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])

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
            "kubejs:resonating_crystal",
            "minecraft:emerald",
            "redstone_arsenal:flux_gem",
            "minecraft:diamond",
            "kubejs:resonant_clathrate"
		]
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

    //World Accelerators
    event.remove({ id: 'gtceu:shaped/lv_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/mv_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/hv_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/ev_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/iv_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/luv_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/zpm_world_accelerator' })
    event.remove({ id: 'gtceu:shaped/uv_world_accelerator' })

    event.recipes.gtceu.assembly_line('hv_world_accelerator')
        .itemInputs('gtceu:luv_machine_hull', '64x gtceu:luv_field_generator', '16x gtceu:luv_field_generator', '20x gtceu:luv_sensor', '20x gtceu:luv_emitter', '16x #gtceu:circuits/luv', '4x gtceu:double_iridium_plate', '2x gtceu:dense_cryolobus_plate')
        .inputFluids('gtceu:enderium 1152', 'gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:hv_world_accelerator')
        .stationResearch(b => b.researchStack('minecraft:clock').CWUt(4,16000))
        .duration(6000)
        .EUt(30720)

    event.recipes.gtceu.assembly_line('ev_world_accelerator')
        .itemInputs('gtceu:zpm_machine_hull', '64x gtceu:zpm_field_generator', '16x gtceu:zpm_field_generator', '20x gtceu:zpm_sensor', '20x gtceu:zpm_emitter', '16x #gtceu:circuits/zpm', '4x gtceu:double_europium_plate', '2x gtceu:dense_cryolobus_plate')
        .inputFluids('gtceu:enderium 1152', 'gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:ev_world_accelerator')
        .duration(6000)
        .EUt(122880)

        .stationResearch(b => b
            .researchStack('gtceu:hv_world_accelerator')
            .CWUt(32, 128000)
            .EUt(122880)
        )

    event.recipes.gtceu.assembly_line('iv_world_accelerator')
        .itemInputs('gtceu:uv_machine_hull', '64x gtceu:uv_field_generator', '16x gtceu:uv_field_generator', '20x gtceu:uv_sensor', '20x gtceu:uv_emitter', '16x #gtceu:circuits/uv', '4x gtceu:double_europium_plate', '2x gtceu:dense_neutronium_plate')
        .inputFluids('gtceu:enderium 1152', 'gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:iv_world_accelerator')
        .duration(6000)
        .EUt(491520)
        .stationResearch(b => b
            .researchStack('gtceu:ev_world_accelerator')
            .CWUt(64, 256000)
            .EUt(491520)
        )

    event.recipes.gtceu.assembly_line('luv_world_accelerator')
        .itemInputs('gtceu:uhv_machine_hull', '64x gtceu:uhv_field_generator', '16x gtceu:uhv_field_generator', '20x gtceu:uhv_sensor', '20x gtceu:uhv_emitter', '16x #gtceu:circuits/uhv', '4x gtceu:double_activated_netherite_plate', '2x gtceu:dense_neutronium_plate')
        .inputFluids('gtceu:omnium 1152', 'gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:luv_world_accelerator')
        .duration(6000)
        .EUt(1966080)
        .stationResearch(b => b
            .researchStack('gtceu:iv_world_accelerator')
            .CWUt(128, 512000)
            .EUt(1966080)
        )

    //Beyond this point we could probably just treat these like joke items
    event.recipes.gtceu.assembly_line('zpm_world_accelerator')
        .itemInputs('gtceu:uev_machine_hull', '64x gtceu:uev_field_generator', '16x gtceu:uev_field_generator', '20x gtceu:uev_sensor', '20x gtceu:uev_emitter', '16x #gtceu:circuits/uev', '4x gtceu:double_holmium_plate', '2x gtceu:dense_infinity_plate')
        .inputFluids('gtceu:omnium 1152', 'gtceu:soldering_alloy 1152')
        .itemOutputs('gtceu:zpm_world_accelerator')
        .duration(6000)
        .EUt(7864320)
        .stationResearch(b => b
            .researchStack('gtceu:luv_world_accelerator')
            .CWUt(128, 512000)
            .EUt(7864320)
        )

    event.recipes.gtceu.assembly_line('uv_world_accelerator')
        .itemInputs('gtceu:uiv_machine_hull', '64x gtceu:uiv_field_generator', '16x gtceu:uiv_field_generator', '20x gtceu:uiv_sensor', '20x gtceu:uiv_emitter', '16x #gtceu:circuits/uiv', '4x gtceu:double_monium_plate', '2x gtceu:dense_infinity_plate')
        .inputFluids('gtceu:omnium 11520', 'gtceu:soldering_alloy 11520')
        .itemOutputs('gtceu:uv_world_accelerator')
        .duration(6000)
        .EUt(31457280)
        .stationResearch(b => b
            .researchStack('gtceu:zpm_world_accelerator')
            .CWUt(256, 1024000)
            .EUt(31457280)
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
        }
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
        }
    )

    // Creative Chest
	event.recipes.extendedcrafting.shaped_table(
		'gtceu:max_machine_casing', [
            "ABBBA",
            "BCCCB",
            "BCDCB",
            "BCCCB",
            "ABBBA"
		], {
			A: 'kubejs:causality_exempt_monic_heavy_plating',
            B: 'kubejs:timeless_monic_heavy_plating',
			C: 'kubejs:dimensionally_stabilized_infinity_heavy_plating',
            D: 'kubejs:infinity_wrench'
		}
	).id('kubejs:endgame/max_casing')

    event.recipes.extendedcrafting.shaped_table(
		'gtceu:max_machine_hull', [
            "ABBBA",
            "BEFEB",
            "BDGDB",
            "BCCCB",
            "ABBBA"
		], {
			A: 'kubejs:causality_exempt_monic_heavy_plating',
            B: 'kubejs:timeless_monic_heavy_plating',
			C: 'gtceu:holmium_hex_wire',
            D: 'gtceu:monium_octal_wire',
            E: 'gtceu:monium_quadruple_wire',
            F: 'gtceu:monium_double_wire',
            G: 'gtceu:max_machine_casing'
		}
	).id('kubejs:endgame/max_hull')

    if (isNormalMode) {
        event.recipes.extendedcrafting.shaped_table(
            '2x gtceu:creative_chest', [
                'BMMMMMMMMMB',
                'MIWOPPPOYIM',
                'MIFNNNNNFIM',
                'MINCSSSCNIM',
                'RUSSAQASSUR',
                'REEMGHGMEER',
                'RUTTAQATTUR',
                'MINCTTTCNIM',
                'MIFNNNNNFIM',
                'MIXPPZPPVIM',
                'BMMMMMMMMMB'
            ], {
                A: 'kubejs:furious_infinity_catalyst',
                B: 'gtceu:monium_block',
                C: 'kubejs:serene_infinity_catalyst',
                E: 'kubejs:creative_energy_data',
                F: 'gtceu:uiv_field_generator',
                G: 'gtceu:monium_gear',
                H: 'gtceu:max_machine_hull',
                I: 'kubejs:elementally_infused_omnic_matrix_heavy_plating',
                M: 'kubejs:causality_exempt_monic_heavy_plating',
                N: 'kubejs:dimensionally_stabilized_infinity_heavy_plating',
                O: 'gtceu:uiv_sensor',
                P: 'kubejs:monic_processor_mainframe',
                Q: 'kubejs:field_stabilised_omnic_pulsar_compound',
                R: 'gtceu:uiv_robot_arm',
                S: 'kubejs:creative_storage_data',
                T: 'kubejs:creative_tank_data',
                U: 'gtceu:subatomic_digital_assembler',
                V: 'kubejs:infinity_file',
                W: 'kubejs:infinity_screwdriver',
                X: 'kubejs:infinity_wrench',
                Y: 'kubejs:infinity_hammer',
                Z: 'kubejs:infinity_wire_cutter'
            }
        )
    } else {
        event.recipes.extendedcrafting.shaped_table(
            '2x gtceu:creative_chest', [
                'BMMMMMMMMMB',
                'MIWOPPPOYIM',
                'MIFNNNNNFIM',
                'MINCSSSCNIM',
                'RUSSAQASSUR',
                'REEMGHGMEER',
                'RUTTAQATTUR',
                'MINCTTTCNIM',
                'MIFNNNNNFIM',
                'MIXPPZPPVIM',
                'BMMMMMMMMMB'
            ], {
                A: 'kubejs:furious_infinity_catalyst',
                B: 'gtceu:monium_block',
                C: 'kubejs:serene_infinity_catalyst',
                E: 'kubejs:creative_energy_data',
                F: 'gtceu:uiv_field_generator',
                G: 'gtceu:monium_gear',
                H: 'gtceu:max_machine_hull',
                I: 'kubejs:elementally_infused_omnic_matrix_heavy_plating',
                M: 'kubejs:causality_exempt_monic_heavy_plating',
                N: 'kubejs:dimensionally_stabilized_infinity_heavy_plating',
                O: 'gtceu:uiv_sensor',
                P: 'kubejs:monic_processor_mainframe',
                Q: 'kubejs:field_stabilised_omnic_pulsar_compound',
                R: 'gtceu:uiv_robot_arm',
                S: 'kubejs:creative_storage_data',
                T: 'kubejs:omnic_data',
                U: 'gtceu:subatomic_digital_assembler',
                V: 'kubejs:infinity_file',
                W: 'kubejs:infinity_screwdriver',
                X: 'kubejs:infinity_wrench',
                Y: 'kubejs:infinity_hammer',
                Z: 'kubejs:infinity_wire_cutter'
            }
        )
    }
})
