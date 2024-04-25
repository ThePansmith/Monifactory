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
			' ACB BCA ',
			'  AAEAA  ',
			'  EEDEE  ',
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
            ' BEA     ',
            'AEAEA    ',
            ' AECEA   ',
            '  AEAEF  ',
            '   AEDF  ',
            '    FFFF ',
            '      FFF',
            '       FF',
        ], {
            A: 'armorplus:the_ultimate_material',
            B: 'kubejs:ultimate_file_point',
            C: 'kubejs:ultimate_file_belly',
            D: 'kubejs:ultimate_file_core',
            E: 'kubejs:ultimate_gem',
            F: 'gtceu:crystal_matrix_ingot'
        }
    )

    // Ultimate Hammer
    event.recipes.extendedcrafting.shaped_table(
		'kubejs:ultimate_hammer', [
			'    A    ',
			'   AEA   ',
			'  AEBEA  ',
			'   AECEA ',
			'   FAEDEA',
			'  FFFAEA ',
			' FFF  A  ',
			'FFF      ',
			'FF       ',
		], {
			A: 'armorplus:the_ultimate_material',
            B: 'kubejs:ultimate_hammer_left',
            C: 'kubejs:ultimate_hammer_core',
            D: 'kubejs:ultimate_hammer_right',
            E: 'kubejs:ultimate_gem',
            F: 'gtceu:crystal_matrix_ingot'
		}
	);

    // Ultimate Screwdriver
    event.recipes.extendedcrafting.shaped_table(
		'kubejs:ultimate_screwdriver', [
			'       AA',
			'      ABA',
			'     AEA ',
			'    ACA  ',
			'  AAEA   ',
			' FEDA    ',
			' FEEA    ',
			'FFFF     ',
			'FF       ',
		], {
			A: 'armorplus:the_ultimate_material',
            B: 'kubejs:ultimate_screwdriver_tip',
            C: 'kubejs:ultimate_screwdriver_shaft',
            D: 'kubejs:ultimate_screwdriver_core',
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
			'   ABEEAA',
			'   AAACA ',
			'  AAAAA  ',
			' ADA     ',
			'AAA      ',
			'AA       ',
        ], {
			A: 'armorplus:the_ultimate_material',
            B: 'kubejs:ultimate_wrench_left',
            C: 'kubejs:ultimate_wrench_right',
            D: 'kubejs:ultimate_wrench_core',
            E: 'kubejs:ultimate_gem'
		}
    );

	// Ultimate Wire Cutter
	event.recipes.extendedcrafting.shaped_table(
		'kubejs:ultimate_wire_cutter', [
			'  AA AA  ',
			' AEA AEA ',
			' AEA AEA ',
			' ABA ACA ',
			' AEA AEA ',
			'  AAFAA  ',
			'  FFDFF  ',
			' FFF FFF ',
			' FF   FF ',
		], {
			A: 'armorplus:the_ultimate_material',
            B: 'kubejs:ultimate_wire_cutter_left',
            C: 'kubejs:ultimate_wire_cutter_right',
            D: 'kubejs:ultimate_wire_cutter_core',
            E: 'kubejs:ultimate_gem',
            F: 'gtceu:crystal_matrix_ingot'
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
})
