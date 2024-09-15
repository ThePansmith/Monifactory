if (Platform.isLoaded('railways')) {
	console.log("Create: Steam and Rails found, loading compat scripts...")
	ServerEvents.tags('item', event => {
		event.add('kubejs:create_tracks', 'create:track');
		event.add('kubejs:create_tracks', 'railways:track_oak');
		event.add('kubejs:create_tracks', 'railways:track_birch');
		event.add('kubejs:create_tracks', 'railways:track_acacia');
		event.add('kubejs:create_tracks', 'railways:track_dark_oak');
		event.add('kubejs:create_tracks', 'railways:track_jungle');
		event.add('kubejs:create_tracks', 'railways:track_spruce');
		event.add('kubejs:create_tracks', 'railways:track_mangrove');
		event.add('kubejs:create_tracks', 'railways:track_warped');
		event.add('kubejs:create_tracks', 'railways:track_crimson');
		event.add('kubejs:create_tracks', 'railways:track_blackstone');
		event.add('kubejs:create_tracks', 'railways:track_ender');
		event.add('kubejs:create_tracks', 'railways:track_tieless');
		event.add('kubejs:create_tracks', 'railways:track_phantom');
		event.add('kubejs:create_tracks', 'railways:track_cherry');
		event.add('kubejs:create_tracks', 'railways:track_bamboo');
		event.add('kubejs:create_tracks', 'railways:track_stripped_bamboo');
		event.add('kubejs:create_tracks', 'railways:track_monorail');
		event.add('kubejs:create_tracks', 'railways:track_create_andesite_wide');
		event.add('kubejs:create_tracks', 'railways:track_acacia_wide');
		event.add('kubejs:create_tracks', 'railways:track_birch_wide');
		event.add('kubejs:create_tracks', 'railways:track_dark_oak_wide');
		event.add('kubejs:create_tracks', 'railways:track_jungle_wide');
		event.add('kubejs:create_tracks', 'railways:track_oak_wide');
		event.add('kubejs:create_tracks', 'railways:track_spruce_wide');
		event.add('kubejs:create_tracks', 'railways:track_mangrove_wide');
		event.add('kubejs:create_tracks', 'railways:track_warped_wide');
		event.add('kubejs:create_tracks', 'railways:track_crimson_wide');
		event.add('kubejs:create_tracks', 'railways:track_blackstone_wide');
		event.add('kubejs:create_tracks', 'railways:track_ender_wide');
		event.add('kubejs:create_tracks', 'railways:track_tieless_wide');
		event.add('kubejs:create_tracks', 'railways:track_cherry_wide');
		event.add('kubejs:create_tracks', 'railways:track_bamboo_wide');
		event.add('kubejs:create_tracks', 'railways:track_stripped_bamboo_wide');
		event.add('kubejs:create_tracks', 'railways:track_create_andesite_narrow');
		event.add('kubejs:create_tracks', 'railways:track_acacia_narrow');
		event.add('kubejs:create_tracks', 'railways:track_birch_narrow');
		event.add('kubejs:create_tracks', 'railways:track_dark_oak_narrow');
		event.add('kubejs:create_tracks', 'railways:track_jungle_narrow');
		event.add('kubejs:create_tracks', 'railways:track_oak_narrow');
		event.add('kubejs:create_tracks', 'railways:track_spruce_narrow');
		event.add('kubejs:create_tracks', 'railways:track_mangrove_narrow');
		event.add('kubejs:create_tracks', 'railways:track_warped_narrow');
		event.add('kubejs:create_tracks', 'railways:track_crimson_narrow');
		event.add('kubejs:create_tracks', 'railways:track_blackstone_narrow');
		event.add('kubejs:create_tracks', 'railways:track_ender_narrow');
		event.add('kubejs:create_tracks', 'railways:track_tieless_narrow');
		event.add('kubejs:create_tracks', 'railways:track_cherry_narrow');
		event.add('kubejs:create_tracks', 'railways:track_bamboo_narrow');
		event.add('kubejs:create_tracks', 'railways:track_stripped_bamboo_narrow');
		if (Platform.isLoaded('biomesoplenty')) {
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_dead');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_fir');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_hellbark');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_jacaranda');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_magic');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_mahogany');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_palm');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_redwood');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_umbran');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_willow');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_dead_wide');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_fir_wide');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_hellbark_wide');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_jacaranda_wide');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_magic_wide');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_mahogany_wide');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_palm_wide');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_redwood_wide');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_umbran_wide');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_willow_wide');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_dead_narrow');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_fir_narrow');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_hellbark_narrow');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_jacaranda_narrow');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_magic_narrow');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_mahogany_narrow');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_palm_narrow');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_redwood_narrow');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_umbran_narrow');
			event.add('kubejs:create_tracks', 'railways:track_biomesoplenty_willow_narrow');
		}
	})
	ServerEvents.recipes(event => {
		event.remove({ output: '#kubejs:create_tracks'})
		let normalTrackRecipes = function (sleeperItem, outputItem, railItem, outputCount) {
		/* 	
			This function makes normal-gauge track recipes for shaped crafting and the Gregtech Assembler based on 4 arguments:
			[STRING] sleeperItem is the item used as the sleeper for the track, typically a slab.
			[STRING] outputItem is the track that the recipe gives.
			[STRING] railItem is the item used for the rails themselves, typically iron or gold nuggets.
			[INT]	 outputCount is the amount of tracks given from the recipe.
		*/
			event.shaped(
				`${outputCount}x ${outputItem}`, [
					'   ',
					'IHI',
					'SSS'
				], {
					H: "#forge:tools/hammers",
					I: `${railItem}`,
					S: `${sleeperItem}`
				}
			);
			event.recipes.gtceu.assembler(`kubejs:${outputItem.replace(/^.*:/,'')}`)
				.itemInputs(
					`3x ${sleeperItem}`,
					`2x ${railItem}`
				)
				.itemOutputs(`${outputCount * 2}x ${outputItem}`)
				.duration(5)
				.EUt(16);
		};
		let wideTrackRecipes = function (inputTrackItem, sleeperItem, outputItem, outputCount) {
		/* 	
			This function makes wide-gauge track recipes for shaped crafting and the Gregtech Assembler based on 4 arguments:
			[STRING] inputTrackItem is the track used in the recipe. 
			[STRING] sleeperItem is the item used as the sleeper for the track, typically a slab.
			[STRING] outputItem is the track that the recipe gives.
			[INT]	 outputCount is the amount of tracks given from the recipe.
		*/
			event.shaped(
				`${outputCount}x ${outputItem}`, [
					'   ',
					' H ',
					'STS'
				], {
					H: "#forge:tools/hammers",
					S: `${sleeperItem}`,
					T: `${inputTrackItem}`
				}
			);
			event.recipes.gtceu.assembler(`kubejs:${outputItem.replace(/^.*:/,'')}`)
				.itemInputs(
					`2x ${sleeperItem}`,
					`1x ${inputTrackItem}`
				)
				.itemOutputs(`${outputCount * 2}x ${outputItem}`)
				.duration(5)
				.EUt(16);
		};
		let narrowTrackRecipes = function (inputTrackItem, outputItem, sleeperOutputItem, outputCount) {
		/* 	
			This function makes narrow-gauge track recipes for shaped crafting and the Gregtech Assembler based on 3 arguments:
			[STRING] inputTrackItem is the track used in the recipe.
			[STRING] outputItem is the track that the recipe gives.
			[STRING] sleeperOutputItem is the sleeper that the recipe can give back as an output.
			[INT] 	 outputCount is the amount of tracks given from the recipe.
		*/
			event.shaped(
				`${outputCount}x ${outputItem}`, [
					'   ',
					' H ',
					' T '
				], {
					H: "#forge:tools/saws",
					T: `${inputTrackItem}`,
				}
			);
			event.recipes.gtceu.cutter(`kubejs:${outputItem.replace(/^.*:/,'')}`)
				.itemInputs(`${inputTrackItem}`)
				.itemOutputs(`${outputCount}x ${outputItem}`)
				.chancedOutput(`${sleeperOutputItem}`, 3000, 500)
				.duration(5)
				.EUt(16);
		};
		{
			/* normal tracks */{
				// normalTrackRecipes('#create:sleepers', 'create:track', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('minecraft:acacia_slab', 'railways:track_acacia', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('minecraft:birch_slab', 'railways:track_birch', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('minecraft:dark_oak_slab', 'railways:track_dark_oak', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('minecraft:jungle_slab', 'railways:track_jungle', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('minecraft:oak_slab', 'railways:track_oak', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('minecraft:spruce_slab', 'railways:track_spruce', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('minecraft:mangrove_slab', 'railways:track_mangrove', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('minecraft:warped_slab', 'railways:track_warped', 'minecraft:gold_nugget', 1);
				normalTrackRecipes('minecraft:crimson_slab', 'railways:track_crimson', 'minecraft:gold_nugget', 1);
				normalTrackRecipes('minecraft:blackstone_slab', 'railways:track_blackstone', 'minecraft:gold_nugget', 1);
				normalTrackRecipes('minecraft:end_stone_brick_slab', 'railways:track_ender', 'gtceu:enderium_nugget' /* just for shits and giggles */, 1);
				normalTrackRecipes('minecraft:glass_pane', 'railways:track_tieless', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('minecraft:phantom_membrane', 'railways:track_phantom', 'minecraft:iron_ingot', 16);
				normalTrackRecipes('minecraft:cherry_slab', 'railways:track_cherry', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('minecraft:bamboo', 'railways:track_bamboo', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('minecraft:bamboo_slab', 'railways:track_stripped_bamboo', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('create:metal_bracket', 'railways:track_monorail', '#forge:plates/iron', 6)
			}
			/* wide tracks */{
				wideTrackRecipes('create:track', '#create:sleepers', 'railways:track_create_andesite_wide', 1);
				wideTrackRecipes('railways:track_acacia', 'minecraft:acacia_slab', 'railways:track_acacia_wide', 1);
				wideTrackRecipes('railways:track_birch', 'minecraft:birch_slab', 'railways:track_birch_wide', 1);
				wideTrackRecipes('railways:track_dark_oak', 'minecraft:dark_oak_slab', 'railways:track_dark_oak_wide', 1);
				wideTrackRecipes('railways:track_jungle', 'minecraft:jungle_slab', 'railways:track_jungle_wide', 1);
				wideTrackRecipes('railways:track_oak', 'minecraft:oak_slab', 'railways:track_oak_wide', 1);
				wideTrackRecipes('railways:track_spruce', 'minecraft:spruce_slab', 'railways:track_spruce_wide', 1);
				wideTrackRecipes('railways:track_mangrove', 'minecraft:mangrove_slab', 'railways:track_mangrove_wide', 1);
				wideTrackRecipes('railways:track_warped', 'minecraft:warped_slab', 'railways:track_warped_wide', 1);
				wideTrackRecipes('railways:track_crimson', 'minecraft:crimson_slab', 'railways:track_crimson_wide', 1);
				wideTrackRecipes('railways:track_blackstone', 'minecraft:blackstone_slab', 'railways:track_blackstone_wide', 1);
				wideTrackRecipes('railways:track_ender', 'minecraft:end_stone_brick_slab', 'railways:track_ender_wide', 1);
				wideTrackRecipes('railways:track_tieless', 'minecraft:glass_pane', 'railways:track_tieless_wide', 1);
				wideTrackRecipes('railways:track_cherry', 'minecraft:cherry_slab', 'railways:track_cherry_wide', 1);
				wideTrackRecipes('railways:track_bamboo', 'minecraft:bamboo', 'railways:track_bamboo_wide', 1);
				wideTrackRecipes('railways:track_stripped_bamboo', 'minecraft:bamboo_slab', 'railways:track_stripped_bamboo_wide', 1);
			}
			/* narrow tracks */{
				narrowTrackRecipes('create:track', 'railways:track_create_andesite_narrow', 'minecraft:stone_slab', 1);
				narrowTrackRecipes('railways:track_acacia', 'railways:track_acacia_narrow', 'minecraft:acacia_slab', 1);
				narrowTrackRecipes('railways:track_birch', 'railways:track_birch_narrow', 'minecraft:birch_slab', 1);
				narrowTrackRecipes('railways:track_dark_oak', 'railways:track_dark_oak_narrow', 'minecraft:dark_oak_slab', 1);
				narrowTrackRecipes('railways:track_jungle', 'railways:track_jungle_narrow', 'minecraft:jungle_slab', 1);
				narrowTrackRecipes('railways:track_oak', 'railways:track_oak_narrow', 'minecraft:oak_slab', 1);
				narrowTrackRecipes('railways:track_spruce', 'railways:track_spruce_narrow', 'minecraft:spruce_slab', 1);
				narrowTrackRecipes('railways:track_mangrove', 'railways:track_mangrove_narrow', 'minecraft:mangrove_slab', 1);
				narrowTrackRecipes('railways:track_warped', 'railways:track_warped_narrow', 'minecraft:warped_slab', 1);
				narrowTrackRecipes('railways:track_crimson', 'railways:track_crimson_narrow', 'minecraft:crimson_slab', 1);
				narrowTrackRecipes('railways:track_blackstone', 'railways:track_blackstone_narrow', 'minecraft:blackstone_slab', 1);
				narrowTrackRecipes('railways:track_ender', 'railways:track_ender_narrow', 'minecraft:end_stone_brick_slab', 1);
				narrowTrackRecipes('railways:track_tieless', 'railways:track_tieless_narrow', 'minecraft:glass_pane', 1);
				narrowTrackRecipes('railways:track_cherry', 'railways:track_cherry_narrow', 'minecraft:cherry_slab', 1);
				narrowTrackRecipes('railways:track_bamboo', 'railways:track_bamboo_narrow', 'minecraft:bamboo', 1);
				narrowTrackRecipes('railways:track_stripped_bamboo', 'railways:track_stripped_bamboo_narrow', 'minecraft:bamboo_slab', 1);
			}

			if (Platform.isLoaded('biomesoplenty')) { // fuck it, we BoP
				normalTrackRecipes('biomesoplenty:dead_slab', 'railways:track_biomesoplenty_dead', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('biomesoplenty:fir_slab', 'railways:track_biomesoplenty_fir', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('biomesoplenty:hellbark_slab', 'railways:track_biomesoplenty_hellbark', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('biomesoplenty:jacaranda_slab', 'railways:track_biomesoplenty_jacaranda', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('biomesoplenty:magic_slab', 'railways:track_biomesoplenty_magic', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('biomesoplenty:mahogany_slab', 'railways:track_biomesoplenty_mahogany', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('biomesoplenty:palm_slab', 'railways:track_biomesoplenty_palm', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('biomesoplenty:redwood_slab', 'railways:track_biomesoplenty_redwood', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('biomesoplenty:umbran_slab', 'railways:track_biomesoplenty_umbran', 'minecraft:iron_nugget', 1);
				normalTrackRecipes('biomesoplenty:willow_slab', 'railways:track_biomesoplenty_willow', 'minecraft:iron_nugget', 1);

				wideTrackRecipes('railways:track_biomesoplenty_dead', 'biomesoplenty:dead_slab', 'railways:track_biomesoplenty_dead_wide', 1);
				wideTrackRecipes('railways:track_biomesoplenty_fir', 'biomesoplenty:fir_slab', 'railways:track_biomesoplenty_fir_wide', 1);
				wideTrackRecipes('railways:track_biomesoplenty_hellbark', 'biomesoplenty:hellbark_slab', 'railways:track_biomesoplenty_hellbark_wide', 1);
				wideTrackRecipes('railways:track_biomesoplenty_jacaranda', 'biomesoplenty:jacaranda_slab', 'railways:track_biomesoplenty_jacaranda_wide', 1);
				wideTrackRecipes('railways:track_biomesoplenty_magic', 'biomesoplenty:magic_slab', 'railways:track_biomesoplenty_magic_wide', 1);
				wideTrackRecipes('railways:track_biomesoplenty_mahogany', 'biomesoplenty:mahogany_slab', 'railways:track_biomesoplenty_mahogany_wide', 1);
				wideTrackRecipes('railways:track_biomesoplenty_palm', 'biomesoplenty:palm_slab', 'railways:track_biomesoplenty_palm_wide', 1);
				wideTrackRecipes('railways:track_biomesoplenty_redwood', 'biomesoplenty:redwood_slab', 'railways:track_biomesoplenty_redwood_wide', 1);
				wideTrackRecipes('railways:track_biomesoplenty_umbran', 'biomesoplenty:umbran_slab', 'railways:track_biomesoplenty_umbran_wide', 1);
				wideTrackRecipes('railways:track_biomesoplenty_willow', 'biomesoplenty:willow_slab', 'railways:track_biomesoplenty_willow_wide', 1);

				narrowTrackRecipes('railways:track_biomesoplenty_dead', 'railways:track_biomesoplenty_dead_narrow', 'biomesoplenty:dead_slab', 1);
				narrowTrackRecipes('railways:track_biomesoplenty_fir', 'railways:track_biomesoplenty_fir_narrow', 'biomesoplenty:fir_slab', 1);
				narrowTrackRecipes('railways:track_biomesoplenty_hellbark', 'railways:track_biomesoplenty_hellbark_narrow', 'biomesoplenty:hellbark_slab', 1);
				narrowTrackRecipes('railways:track_biomesoplenty_jacaranda', 'railways:track_biomesoplenty_jacaranda_narrow', 'biomesoplenty:jacaranda_slab', 1);
				narrowTrackRecipes('railways:track_biomesoplenty_magic', 'railways:track_biomesoplenty_magic_narrow', 'biomesoplenty:magic_slab', 1);
				narrowTrackRecipes('railways:track_biomesoplenty_mahogany', 'railways:track_biomesoplenty_mahogany_narrow', 'biomesoplenty:mahogany_slab', 1);
				narrowTrackRecipes('railways:track_biomesoplenty_palm', 'railways:track_biomesoplenty_palm_narrow', 'biomesoplenty:palm_slab', 1);
				narrowTrackRecipes('railways:track_biomesoplenty_redwood', 'railways:track_biomesoplenty_redwood_narrow', 'biomesoplenty:redwood_slab', 1);
				narrowTrackRecipes('railways:track_biomesoplenty_umbran', 'railways:track_biomesoplenty_umbran_narrow', 'biomesoplenty:umbran_slab', 1);
				narrowTrackRecipes('railways:track_biomesoplenty_willow', 'railways:track_biomesoplenty_willow_narrow', 'biomesoplenty:willow_slab', 1);
			};
		}
	});
	console.log("Create: Steam and Rails compat scripts successfully loaded!")
} else { console.log("Create: Steam and Rails was not found, skipping its compat scripts.")};