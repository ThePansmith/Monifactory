// Infinity Toolset recipes and subrecipes



ServerEvents.recipes(event => {

    // Infinity File
    event.recipes.extendedcrafting.shaped_table(
		'kubejs:infinity_file', [
			'  A      ',
			' BCA     ',
			'ACBCA    ',
			' ACBCA   ',
			'  ACBCE  ',
			'   ACDE  ',
			'    EEEE ',
			'      EEE',
			'       EE',
		], {
			A: 'gtceu:neutronium_plate',
			B: 'gtceu:infinity_plate',
			C: 'kubejs:ultimate_file',
			D: 'kubejs:infinity_power_unit',
			E: 'gtceu:omnium_ingot'
		}
	);
	// Infinity Hammer
	event.recipes.extendedcrafting.shaped_table(
		'kubejs:infinity_hammer', [
			'    B    ',
			'   BCA   ',
			'  BCBCA  ',
			'   ACBCA ',
			'   EDCBCB',
			'  EEEACB ',
			' EEE  B  ',
			'EEE      ',
			'EE       ',
		], {
			A: 'gtceu:neutronium_ingot',
			B: 'gtceu:infinity_ingot',
			C: 'kubejs:ultimate_hammer',
			D: 'kubejs:infinity_power_unit',
			E: 'gtceu:omnium_ingot'
		}
	);
    // Infinity Screwdriver

	event.recipes.extendedcrafting.shaped_table(
		'kubejs:infinity_screwdriver', [
			'       BC',
			'      BCB',
			'     BCB ',
			'    BCB  ',
			'  AACB   ',
			' ECDA    ',
			' ECCA    ',
			'EEEE     ',
			'EE       ',
		], {
			A: 'gtceu:neutronium_rod',
			B: 'gtceu:infinity_rod',
			C: 'kubejs:ultimate_screwdriver',
			D: 'kubejs:infinity_power_unit',
			E: 'gtceu:omnium_ingot'
		}
	);
	// Infinity Wrench
	event.recipes.extendedcrafting.shaped_table(
		'kubejs:infinity_wrench', [
			'    A  A ',
			'   AB  BA',
			'   AB  BA',
			'   ABDBCA',
			'   ACCCA ',
			'  ACAAA  ',
			' ACA     ',
			'ACA      ',
			'CA       ',
        ], {
			A: 'gtceu:neutronium_plate',
			B: 'gtceu:infinity_plate',
			C: 'kubejs:ultimate_wrench',
			D: 'kubejs:infinity_power_unit'
		}
    );
	// Infinity Wire Cutter
	event.recipes.extendedcrafting.shaped_table(
		'kubejs:infinity_wire_cutter', [
			'  AA AA  ',
			' ACB BCA ',
			' ACB BCA ',
			' ACB BCA ',
			' ACBABCA ',
			'  AADAA  ',
			'  EEEEE  ',
			' EEE EEE ',
			' EE   EE ',
		], {
			A: 'gtceu:neutronium_plate',
			B: 'gtceu:infinity_plate',
			C: 'kubejs:ultimate_wire_cutter',
			D: 'kubejs:infinity_power_unit',
			E: 'gtceu:omnium_ingot'
		}
	);

    // Ultimate File
	event.recipes.extendedcrafting.shaped_table(
        'kubejs:ultimate_file', [
            '  A      ',
            ' AEA     ',
            'AEAEA    ',
            ' AEBEA   ',
            '  AEAEF  ',
            '   AEDF  ',
            '    FFFF ',
            '      FCF',
            '       FF',
        ], {
            A: 'armorplus:the_ultimate_material',
            B: 'kubejs:ultimate_file_head',
            C: 'kubejs:ultimate_file_handle',
            D: 'kubejs:ultimate_core',
            E: 'kubejs:ultimate_gem',
            F: 'gtceu:crystal_matrix_ingot'
        }
    );

    // Ultimate Hammer
    event.recipes.extendedcrafting.shaped_table(
		'kubejs:ultimate_hammer', [
			'    A    ',
			'   AEA   ',
			'  AEAEA  ',
			'   AEBEA ',
			'   FDEAEA',
			'  FFFAEA ',
			' FCF  A  ',
			'FFF      ',
			'FF       ',
		], {
			A: 'armorplus:the_ultimate_material',
            B: 'kubejs:ultimate_hammer_head',
            C: 'kubejs:ultimate_hammer_handle',
            D: 'kubejs:ultimate_core',
            E: 'kubejs:ultimate_gem',
            F: 'gtceu:crystal_matrix_ingot'
		}
	);

    // Ultimate Screwdriver
    event.recipes.extendedcrafting.shaped_table(
		'kubejs:ultimate_screwdriver', [
			'       AA',
			'      AEA',
			'     AEA ',
			'    ABA  ',
			'  AAEA   ',
			' FEDA    ',
			' FCEA    ',
			'FFFF     ',
			'FF       ',
		], {
			A: 'armorplus:the_ultimate_material',
            B: 'kubejs:ultimate_screwdriver_head',
            C: 'kubejs:ultimate_screwdriver_handle',
            D: 'kubejs:ultimate_core',
            E: 'kubejs:ultimate_gem',
            F: 'gtceu:crystal_matrix_ingot'
		}
	);
    
	// Ultimate Wrench
	event.recipes.extendedcrafting.shaped_table(
		'kubejs:ultimate_wrench', [
			'    A  A ',
			'   AE  EA',
			'   AE  EA',
			'   AEDEAA',
			'   AABAA ',
			'  AAAAA  ',
			' ACA     ',
			'AAA      ',
			'AA       ',
        ], {
			A: 'armorplus:the_ultimate_material',
            B: 'kubejs:ultimate_wrench_head',
            C: 'kubejs:ultimate_wrench_handle',
            D: 'kubejs:ultimate_core',
            E: 'kubejs:ultimate_gem'
		}
    );

	// Ultimate Wire Cutter
	event.recipes.extendedcrafting.shaped_table(
		'kubejs:ultimate_wire_cutter', [
			'  AA AA  ',
			' AEA AEA ',
			' AEA AEA ',
			' AEA AEA ',
			' AEABAEA ',
			'  AADAA  ',
			'  FFCFF  ',
			' FFF FFF ',
			' FF   FF ',
		], {
			A: 'armorplus:the_ultimate_material',
            B: 'kubejs:ultimate_wire_cutter_head',
            C: 'kubejs:ultimate_wire_cutter_handle',
            D: 'kubejs:ultimate_core',
            E: 'kubejs:ultimate_gem',
            F: 'gtceu:crystal_matrix_ingot'
		}
	);

    // Ultimate Core
    event.recipes.extendedcrafting.shaped_table(
		'kubejs:ultimate_core', [
			'    A    ',
			'  KBCBK  ',
			' KABDBAK ',
			' BBEIFBB ',
			'AGHIJIHGA',
			' BBFIEBB ',
			' KABDBAK ',
			'  KBCBK  ',
			'    A    ',
		], {
			A: 'armorplus:the_ultimate_material',
            B: 'enderio:reinforced_obsidian_block',
            C: 'gtceu:dense_blue_alloy_plate',
            D: 'gcyr:dense_bisalloy_400_plate',
            E: 'gtceu:dense_dark_soularium_plate',
            F: 'gtceu:dense_zeron_100_plate',
            G: 'gtceu:dense_manyullyn_plate',
            H: 'gtceu:dense_enriched_sunnarium_plate',
            I: 'kubejs:ender_star',
            J: 'gtceu:gravi_star',
            K: 'armorplus:wither_bone'
		}
	)

	// Ultimate File Head
	event.recipes.gtceu.assembly_line('infinity_toolset/ultimate_file_head')
		.itemInputs('2x armorplus:the_ultimate_material', '10x enderio:reinforced_obsidian_block', '4x gtceu:gravi_star', '4x kubejs:abyssal_core', 'gtceu:aluminium_file', 'gtceu:iron_file', 'gtceu:titanium_file', 'gtceu:neutronium_file', 'gtceu:duranium_file', 'gtceu:bronze_file', 'gtceu:diamond_file', 'gtceu:invar_file', 'gtceu:sterling_silver_file', 'gtceu:rose_gold_file', 'gtceu:stainless_steel_file', 'gtceu:steel_file')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:neutronium 1152', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:ultimate_file_head')
		// requires research ()
		.duration(300)
        .EUt(1966080)
	
	// Ultimate File Handle
	event.recipes.gtceu.assembly_line('infinity_toolset/ultimate_file_handle')
		.itemInputs('2x armorplus:the_ultimate_material', '10x enderio:reinforced_obsidian_block', '4x gtceu:gravi_star', '4x kubejs:abyssal_core', 'gtceu:ultimet_file', 'gtceu:wrought_iron_file', 'gtceu:tungsten_carbide_file', 'gtceu:damascus_steel_file', 'gtceu:tungsten_steel_file', 'gtceu:cobalt_brass_file', 'gtceu:vanadium_steel_file', 'gtceu:naquadah_alloy_file', 'gtceu:red_steel_file', 'gtceu:blue_steel_file', 'gtceu:hsse_file', 'gcyr:bisalloy_400_file')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:neutronium 1152', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:ultimate_file_handle')
		// requires research ()
		.duration(300)
		.EUt(1966080)

	// Ultimate Hammer Head
	event.recipes.gtceu.assembly_line('infinity_toolset/ultimate_hammer_head')
		.itemInputs('2x armorplus:the_ultimate_material', '10x enderio:reinforced_obsidian_block', '4x gtceu:gravi_star', '4x kubejs:abyssal_core', 'gtceu:aluminium_hammer', 'gtceu:iron_hammer', 'gtceu:titanium_hammer', 'gtceu:neutronium_hammer', 'gtceu:duranium_hammer', 'gtceu:bronze_hammer', 'gtceu:diamond_hammer', 'gtceu:invar_hammer', 'gtceu:sterling_silver_hammer', 'gtceu:rose_gold_hammer', 'gtceu:stainless_steel_hammer', 'gtceu:steel_hammer')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:neutronium 1152', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:ultimate_hammer_head')
		// requires research ()
		.duration(300)
        .EUt(1966080)
	// Ultimate Hammer Handle
	event.recipes.gtceu.assembly_line('infinity_toolset/ultimate_hammer_handle')
		.itemInputs('2x armorplus:the_ultimate_material', '10x enderio:reinforced_obsidian_block', '4x gtceu:gravi_star', '4x kubejs:abyssal_core', 'gtceu:ultimet_hammer', 'gtceu:wrought_iron_hammer', 'gtceu:tungsten_carbide_hammer', 'gtceu:damascus_steel_hammer', 'gtceu:tungsten_steel_hammer', 'gtceu:cobalt_brass_hammer', 'gtceu:vanadium_steel_hammer', 'gtceu:naquadah_alloy_hammer', 'gtceu:red_steel_hammer', 'gtceu:blue_steel_hammer', 'gtceu:hsse_hammer', 'gcyr:bisalloy_400_hammer')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:neutronium 1152', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:ultimate_hammer_handle')
		// requires research ()
		.duration(300)
		.EUt(1966080)

	// Ultimate Screwdriver Head
	event.recipes.gtceu.assembly_line('infinity_toolset/ultimate_screwdriver_head')
		.itemInputs('2x armorplus:the_ultimate_material', '10x enderio:reinforced_obsidian_block', '4x gtceu:gravi_star', '4x kubejs:abyssal_core', 'gtceu:aluminium_screwdriver', 'gtceu:iron_screwdriver', 'gtceu:titanium_screwdriver', 'gtceu:neutronium_screwdriver', 'gtceu:duranium_screwdriver', 'gtceu:bronze_screwdriver', 'gtceu:diamond_screwdriver', 'gtceu:invar_screwdriver', 'gtceu:sterling_silver_screwdriver', 'gtceu:rose_gold_screwdriver', 'gtceu:stainless_steel_screwdriver', 'gtceu:steel_screwdriver')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:neutronium 1152', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:ultimate_screwdriver_head')
		// requires research ()
		.duration(300)
        .EUt(1966080)
	// Ultimate Screwdriver Handle
	event.recipes.gtceu.assembly_line('infinity_toolset/ultimate_screwdriver_handle')
		.itemInputs('2x armorplus:the_ultimate_material', '10x enderio:reinforced_obsidian_block', '4x gtceu:gravi_star', '4x kubejs:abyssal_core', 'gtceu:ultimet_screwdriver', 'gtceu:wrought_iron_screwdriver', 'gtceu:tungsten_carbide_screwdriver', 'gtceu:damascus_steel_screwdriver', 'gtceu:tungsten_steel_screwdriver', 'gtceu:cobalt_brass_screwdriver', 'gtceu:vanadium_steel_screwdriver', 'gtceu:naquadah_alloy_screwdriver', 'gtceu:red_steel_screwdriver', 'gtceu:blue_steel_screwdriver', 'gtceu:hsse_screwdriver', 'gcyr:bisalloy_400_screwdriver')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:neutronium 1152', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:ultimate_screwdriver_handle')
		// requires research ()
		.duration(300)
		.EUt(1966080)

	// Ultimate Wrench Head
		event.recipes.gtceu.assembly_line('infinity_toolset/ultimate_wrench_head')
		.itemInputs('2x armorplus:the_ultimate_material', '10x enderio:reinforced_obsidian_block', '4x gtceu:gravi_star', '4x kubejs:abyssal_core', 'gtceu:aluminium_wrench', 'gtceu:iron_wrench', 'gtceu:titanium_wrench', 'gtceu:neutronium_wrench', 'gtceu:duranium_wrench', 'gtceu:bronze_wrench', 'gtceu:diamond_wrench', 'gtceu:invar_wrench', 'gtceu:sterling_silver_wrench', 'gtceu:rose_gold_wrench', 'gtceu:stainless_steel_wrench', 'gtceu:steel_wrench')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:neutronium 1152', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:ultimate_wrench_head')
		// requires research ()
		.duration(300)
        .EUt(1966080)
	// Ultimate Wrench Handle
	event.recipes.gtceu.assembly_line('infinity_toolset/ultimate_wrench_handle')
		.itemInputs('2x armorplus:the_ultimate_material', '10x enderio:reinforced_obsidian_block', '4x gtceu:gravi_star', '4x kubejs:abyssal_core', 'gtceu:ultimet_wrench', 'gtceu:wrought_iron_wrench', 'gtceu:tungsten_carbide_wrench', 'gtceu:damascus_steel_wrench', 'gtceu:tungsten_steel_wrench', 'gtceu:cobalt_brass_wrench', 'gtceu:vanadium_steel_wrench', 'gtceu:naquadah_alloy_wrench', 'gtceu:red_steel_wrench', 'gtceu:blue_steel_wrench', 'gtceu:hsse_wrench', 'gcyr:bisalloy_400_wrench')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:neutronium 1152', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:ultimate_wrench_handle')
		// requires research ()
		.duration(300)
		.EUt(1966080)

	// Ultimate Wire Cutter Head
	event.recipes.gtceu.assembly_line('infinity_toolset/ultimate_wire_cutter_head')
		.itemInputs('2x armorplus:the_ultimate_material', '10x enderio:reinforced_obsidian_block', '4x gtceu:gravi_star', '4x kubejs:abyssal_core', 'gtceu:aluminium_wire_cutter', 'gtceu:iron_wire_cutter', 'gtceu:titanium_wire_cutter', 'gtceu:neutronium_wire_cutter', 'gtceu:duranium_wire_cutter', 'gtceu:bronze_wire_cutter', 'gtceu:diamond_wire_cutter', 'gtceu:invar_wire_cutter', 'gtceu:sterling_silver_wire_cutter', 'gtceu:rose_gold_wire_cutter', 'gtceu:stainless_steel_wire_cutter', 'gtceu:steel_wire_cutter')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:neutronium 1152', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:ultimate_wire_cutter_head')
		// requires research ()
		.duration(300)
        .EUt(1966080)
	// Ultimate Wire Cutter Handle
	event.recipes.gtceu.assembly_line('infinity_toolset/ultimate_wire_cutter_handle')
		.itemInputs('2x armorplus:the_ultimate_material', '10x enderio:reinforced_obsidian_block', '4x gtceu:gravi_star', '4x kubejs:abyssal_core', 'gtceu:ultimet_wire_cutter', 'gtceu:wrought_iron_wire_cutter', 'gtceu:tungsten_carbide_wire_cutter', 'gtceu:damascus_steel_wire_cutter', 'gtceu:tungsten_steel_wire_cutter', 'gtceu:cobalt_brass_wire_cutter', 'gtceu:vanadium_steel_wire_cutter', 'gtceu:naquadah_alloy_wire_cutter', 'gtceu:red_steel_wire_cutter', 'gtceu:blue_steel_wire_cutter', 'gtceu:hsse_wire_cutter', 'gcyr:bisalloy_400_wire_cutter')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:neutronium 1152', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:ultimate_wire_cutter_handle')
		// requires research ()
		.duration(300)
		.EUt(1966080)

    // Infinity Power Unit
    event.recipes.gtceu.assembly_line('infinity_toolset/infinity_power_unit')
        .itemInputs('kubejs:infinity_catalyst', '32x gtceu:polybenzimidazole_plate', '16x gtceu:darmstadtium_plate', '16x gtceu:enriched_naquadah_trinium_europium_duranide_plate', '16x #gtceu:circuits/uv', '8x #gtceu:circuits/uhv', '16x kubejs:resonant_energy_core', '4x gtceu:max_battery', '8x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire', '32x gtceu:uev_electric_motor')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:polybenzimidazole 1152', 'gtceu:omnium 5760', 'gtceu:crystal_matrix 1152')
        .itemOutputs('kubejs:infinity_power_unit')
        // requires research (sim chamber with data module)
        .duration(1200)
        .EUt(1966080)
    
    // Dense Obsidian Plate for Reinforced Obsidian
    event.recipes.gtceu.implosion_compressor('infinity_toolset/dense_obsidian_plate')
        .itemInputs('9x gtceu:obsidian_plate', 'minecraft:tnt')
        .itemOutputs('gtceu:dense_obsidian_plate')
        .duration(20)
        .EUt(30)
    
    event.remove({ output: "enderio:dark_steel_bars" })

    event.shaped(
        "3x enderio:dark_steel_bars", [
            'RRR',
            'RRR'
        ], {
            R: "gtceu:dark_steel_rod"
        }
    )
    event.shaped(
        "enderio:reinforced_obsidian_block", [
            'IBI',
            'BPB',
            'IBI'
        ], {
            P: "gtceu:dense_obsidian_plate",
            B: "enderio:dark_steel_bars",
            I: "gtceu:double_titanium_tungsten_carbide_plate"
        }
    )

	event.shapeless('armorplus:lava_crystal', ['kubejs:infinity_file', 'kubejs:infinity_hammer', 'kubejs:infinity_screwdriver', 'kubejs:infinity_wrench', 'kubejs:infinity_wire_cutter'])
})
