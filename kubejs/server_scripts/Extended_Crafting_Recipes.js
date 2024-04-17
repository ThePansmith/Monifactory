//Anything that is an extended crafting recipe comes here
//! DO NOT PUT CREATIVE STUFF, PUT IT ON END_GAME.js
//? For end game intermediates (ingots plates..) that uses ectendedcrafting, put it here

ServerEvents.recipes(event => {
    //ETERNAL CATALYST
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:eternal_catalyst', [
            '    A    ',
            ' A  A  A ',
            '  AAPAA  ',
            '  ARWEA  ',
            'AAVXUYDAA',
            '  AEZRA  ',
            '  AAIAA  ',
            ' A  A  A ',
            '    A    '
        ], {
            A: 'kubejs:mote_of_omnium',
            P: 'gtceu:palis_empowered_gear',
            R: 'gtceu:restonia_empowered_gear',
            V: 'gtceu:void_empowered_gear',
            E: 'gtceu:emeradic_empowered_gear',
            I: 'gtceu:enori_empowered_gear',
            D: 'gtceu:diamatine_empowered_gear',
            W: 'kubejs:ender_star',
            X: 'gtceu:gravi_star',
            Z: 'gtceu:quantum_star',
            Y: 'kubejs:endest_star',
            U: 'armorplus:the_ultimate_material'
        }).id('kubejs:extended/eternal_catalyst');

    //INFINITY CATALYST
    event.recipes.extendedcrafting.shaped_table(
        "avaritia:infinity_catalyst", [
            'PPPPEPPPP',
            'PEPPEPPEP',
            'PPEEEEEPP',
            'PPEECEEPP',
            'EEECHCEEE',
            'PPEECEEPP',
            'PPEEEEEPP',
            'PEPPEPPEP',
            'PPPPEPPPP',
        ], {
            P: 'avaritia:pile_of_neutrons',
            E: "kubejs:eternal_catalyst",
            C: 'draconicevolution:chaotic_core',
            H: 'kubejs:heart_of_a_universe'
        }).id('kubejs:extended/infinity_catalyst');

	// infinity ingot
	event.recipes.extendedcrafting.shaped_table(
		'avaritia:infinity_ingot', [
            '         ',
            '     BAAA',
            '  BAAADCA',
            'AAACDCCDA',
            'ACDDEDDCA',
            'ADCCDCAAA',
            'ACDAAAB  ',
            'AAAB     ',
            '         '
		], {
			A: 'avaritia:neutronium_ingot',
			B: 'avaritia:neutronium_nugget',
			C: 'kubejs:omnium_ingot',
			D: 'kubejs:eternal_catalyst',
			E: 'avaritia:infinity_catalyst',
		}
	).id('kubejs:extended/infinity_ingot')


	// mote of omnium
	event.recipes.extendedcrafting.shapeless_table(
		'kubejs:mote_of_omnium', [
			'gtceu:tiny_nether_star_dust',
			'kubejs:solidified_hydrogen',
			'kubejs:solidified_helium',
			'gtceu:lithium_dust',
			'gtceu:beryllium_ingot',
			'gtceu:boron_dust',
			'gtceu:carbon_dust',
			'kubejs:solidified_nitrogen',
			'gtceu:tiny_nether_star_dust',
			'kubejs:solidified_oxygen',
			'kubejs:solidified_fluorine',
			'kubejs:solidified_neon',
			'gtceu:sodium_dust',
			'gtceu:magnesium_dust',
			'gtceu:aluminium_ingot',
			'gtceu:silicon_dust',
			'gtceu:phosphorus_dust',
			'gtceu:sulfur_dust',
			'kubejs:solidified_chlorine',
			'kubejs:solidified_argon',
			'gtceu:potassium_dust',
			'gtceu:calcium_dust',
			'gtceu:titanium_ingot',
			'gtceu:vanadium_ingot',
			'gtceu:chromium_ingot',
			'gtceu:manganese_ingot',
			'iron_ingot',
			'gtceu:cobalt_ingot',
			'gtceu:nickel_ingot',
			'copper_ingot',
			'gtceu:zinc_ingot',
			'gtceu:gallium_ingot',
			'gtceu:arsenic_dust',
			'kubejs:solidified_krypton',
			'gtceu:yttrium_ingot',
			'gtceu:niobium_ingot',
			'gtceu:molybdenum_ingot',
			'gtceu:ruthenium_ingot',
			'gtceu:rhodium_ingot',
			'gtceu:palladium_ingot',
			'kubejs:exotic_materials_catalyst',
			'gtceu:silver_ingot',
			'gtceu:cadmium_dust',
			'gtceu:indium_ingot',
			'gtceu:tin_ingot',
			'gtceu:antimony_ingot',
			'kubejs:solidified_xenon',
			'gtceu:caesium_dust',
			'gtceu:barium_dust',
			'gtceu:lanthanum_dust',
			'gtceu:cerium_dust',
			'gtceu:neodymium_ingot',
			'gtceu:samarium_ingot',
			'gtceu:europium_ingot',
			'gtceu:lutetium_ingot',
			'gtceu:tantalum_ingot',
			'gtceu:tungsten_ingot',
			'gtceu:osmium_ingot',
			'gtceu:iridium_ingot',
			'gtceu:platinum_ingot',
			'gold_ingot',
			'kubejs:solidified_mercury',
			'gtceu:lead_ingot',
			'kubejs:solidified_radon',
			'gtceu:thorium_ingot',
			'kubejs:stabilized_uranium',
			'kubejs:stabilized_neptunium',
			'kubejs:stabilized_plutonium',
			'gtceu:americium_ingot',
			'kubejs:stabilized_curium',
			'kubejs:stabilized_berkelium',
			'kubejs:stabilized_californium',
			'gtceu:tiny_nether_star_dust',
			'kubejs:stabilized_einsteinium',
			'gtceu:darmstadtium_ingot',
			'gtceu:tritanium_ingot',
			'gtceu:duranium_ingot',
			'gtceu:trinium_ingot',
			'gtceu:draconium_ingot',
			'gtceu:naquadah_ingot',
			'gtceu:tiny_nether_star_dust',
		]
	).id('kubejs:extended/mote_of_omnium')

	// exotic material catalyst
	event.recipes.extendedcrafting.shaped_table(
		'kubejs:exotic_materials_catalyst', [
            "A  B  C",
            " D E F ",
            "  GHI  ",
            "JKLMNOP",
            "  QRS  ",
            " T U V ",
            "W  X  Y"
		], {
			A: 'gtceu:nichrome_ingot',
			B: 'gtceu:red_steel_ingot',
			C: 'gtceu:kanthal_ingot',
			D: 'gtceu:magnalium_ingot',
			E: 'gtceu:mana_infused_metal_ingot',
			F: 'gtceu:manyullyn_ingot',
			G: 'gtceu:enderium_ingot',
			H: 'gtceu:blue_steel_ingot',
			I: 'gtceu:microversium_ingot',
			J: 'gtceu:vanadium_steel_ingot',
			K: 'gtceu:rhodium_plated_palladium_ingot',
			L: 'gtceu:electrum_flux_ingot',
			M: 'gtceu:dark_soularium_ingot',
			N: 'avaritia:crystal_matrix_ingot',
			O: 'gtceu:end_steel_ingot',
			P: 'gtceu:electrical_steel_ingot',
			Q: 'gtceu:signalum_ingot',
			R: 'gtceu:vibrant_alloy_ingot',
			S: 'gtceu:soularium_ingot',
			T: 'gtceu:hsse_ingot',
			U: 'gtceu:dark_steel_ingot',
			V: 'gtceu:hssg_ingot',
			W: 'gtceu:ruridit_ingot',
			X: 'gtceu:hsss_ingot',
			Y: 'gtceu:energetic_alloy_ingot'
		}
	).id('kubejs:extended/exotic_materials_catalyst')

	// Angel Ring
    event.remove({ id: 'miniutilities:angel_ring_crafting' })
	event.recipes.extendedcrafting.shaped_table(
		'miniutilities:angel_ring', [
            " AAA ",
            "A B A",
            "AC CA",
            "A B A",
            " AAA "
		], {
			A: 'gtceu:rose_gold_ingot',
			B: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:reinforced"}').weakNBT(),
			C: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:vibrant"}').weakNBT(),
		} //, 2 // remove this comment to force t2 crafting only.
	).id('kubejs:extended/angel_ring')
})
