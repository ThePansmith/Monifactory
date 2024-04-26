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
    )

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
            C: 'gtceu:dense_indium_tin_barium_titanium_cuprate_plate',
            D: 'gtceu:dense_blue_alloy_plate',
            E: 'gtceu:dense_dark_soularium_plate',
            F: 'gtceu:dense_draconium_awakened_plate',
            G: 'gtceu:dense_manyullyn_plate',
            H: 'gtceu:dense_enriched_sunnarium_plate',
            I: 'kubejs:endest_star',
            J: 'gtceu:gravi_star',
            k: 'armorplus:wither_bone'
		}
	);

    // Infinity Power Unit and Omni Motor
    event.recipes.gtceu.assembly_line('infinity_power_unit')
        .itemInputs('kubejs:infinity_catalyst', '32x gtceu:polybenzimidazole_plate', '16x gtceu:darmstadtium_plate', '16x gtceu:enriched_naquadah_trinium_europium_duranide_plate', '16x #gtceu:circuits/uv', '8x #gtceu:circuits/uhv', '16x draconicevolution:draconic_energy_core', '4x gtceu:max_battery', '8x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire', '32x kubejs:omni_motor')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:omnium 5760', 'gtceu:crystal_matrix 1152')
        .itemOutputs('kubejs:infinity_power_unit')
        // requires research (sim chamber with data module)
        .duration(1200)
        .EUt(1966080)
    event.recipes.gtceu.assembly_line('omni_motor')
        .itemInputs('gtceu:long_magnetic_samarium_rod', '8x gtceu:long_omnium_rod', '8x gtceu:omnium_ring', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '32x gtceu:fine_ruthenium_trinium_americium_neutronate_wire', '4x gtceu:tritanium_quadruple_cable')
        .inputFluids('gtceu:soldering_alloy 5760', 'gtceu:lubricant 2000', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 1152')
        .itemOutputs('kubejs:omni_motor')
        // requires research (sim chamber with data module)
        .duration(1200)
        .EUt(1966080)
    
    // Dense Obsidian Plate for Reinforced Obsidian
    event.recipes.gtceu.implosion_compressor("dense_obsidian_plate")
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
            I: "gtceu:tungsten_steel_ingot"
        }
    )
})
