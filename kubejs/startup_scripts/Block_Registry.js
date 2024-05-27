StartupEvents.registry("block", event => {
    event.create('excitationcoil', 'cardinal').displayName("Excitation Coil").soundType('metal').renderType('cutout').box(3, 0, 3, 13, 1, 13).tag("mineable/pickaxe").box(4, 1, 4, 12, 9, 12);
    event.create('dust', 'falling').soundType('sand').hardness(0.4).resistance(0.4).tag("mineable/shovel").displayName("Dust Block").property(BlockProperties.FALLING);
    event.create('starry_diamond_block').displayName("Starry Diamond Block").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true).textureAll('kubejs:block/microverse/starry_diamond_block');
    event.create('dark_steel_machine_hull').displayName("Dark Steel Machine Hull").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true);
    event.create('infinity_dust_block', 'falling').displayName('Infinity Dust Block').soundType('sand').resistance(6).hardness(5).tagBlock("mineable/shovel").requiresTool(true);
    event.create('compressed_infinity_dust_block', 'falling').displayName('Compressed Infinity Dust Block').soundType('sand').resistance(6).hardness(5).tagBlock("mineable/shovel").requiresTool(true);
    event.create('double_compressed_infinity_dust_block', 'falling').displayName('Double Compressed Infinity Dust Block').soundType('sand').resistance(6).hardness(5).tagBlock("mineable/shovel").requiresTool(true);
    event.create('dense_oilsands_ore').displayName('Dense Oilsands Ore').soundType('stone').resistance(6).hardness(5).tagBlock("mineable/shovel").requiresTool(true);
    event.create('empowerer_casing').displayName("Empowerer Casing").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true);
    event.create('compressed_sand').displayName("Compressed Sand").soundType('sand').resistance(1).hardness(1).tagBlock("mineable/shovel").requiresTool(true).property(BlockProperties.FALLING);
    event.create('double_compressed_sand').displayName("Double Compressed Sand").soundType('sand').resistance(2).hardness(2).tagBlock("mineable/shovel").requiresTool(true).property(BlockProperties.FALLING);
    event.create('compressed_red_sand').displayName("Compressed Red Sand").soundType('sand').resistance(1).hardness(1).tagBlock("mineable/shovel").requiresTool(true).property(BlockProperties.FALLING);
    event.create('double_compressed_red_sand').displayName("Double Compressed Red Sand").soundType('sand').resistance(2).hardness(2).tagBlock("mineable/shovel").requiresTool(true).property(BlockProperties.FALLING);
    event.create('warp_core').displayName("Warp Core").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true);
    event.create('warp_controller').displayName("Warp Controller").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true);
    event.create('sculk_reaction_casing').displayName("Sculk Reaction Casing").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true);
    event.create('echo_reaction_casing').displayName("Echo Reaction Casing").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true);
    event.create('resonant_reaction_casing').displayName("Resonant Reaction Casing").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true);
    event.create('abyssal_reaction_casing').displayName("Abyssal Reaction Casing").soundType('metal').resistance(6).hardness(5).tagBlock("mineable/pickaxe").requiresTool(true);
  
    // Micro Miner Cores
    event.create('electrum_micro_miner_core')
        .displayName("Electrum Micro Miner Engine Core")
        .soundType('metal')
        .resistance(3)
        .hardness(3)
        .tagBlock("mineable/pickaxe")
        .requiresTool(true)
        .defaultCutout();

    event.create('signalum_micro_miner_core')
        .displayName("Signalum Micro Miner Engine Core")
        .soundType('metal')
        .resistance(4)
        .hardness(4)
        .tagBlock("mineable/pickaxe")
        .requiresTool(true)
        .defaultCutout();

    event.create('enderium_micro_miner_core')
        .displayName("Enderium Micro Miner Engine Core")
        .soundType('metal')
        .resistance(5)
        .hardness(5)
        .tagBlock("mineable/pickaxe")
        .requiresTool(true)
        .defaultCutout();

    event.create('electrum_micro_miner_frame')
        .displayName("Electrum Micro Miner Engine Frame")
        .soundType('metal')
        .resistance(3)
        .hardness(3)
        .tagBlock("mineable/pickaxe")
        .requiresTool(true)
        .defaultCutout();

    event.create('signalum_micro_miner_frame')
        .displayName("Signalum Micro Miner Engine Frame")
        .soundType('metal')
        .resistance(4)
        .hardness(4)
        .tagBlock("mineable/pickaxe")
        .requiresTool(true)
        .defaultCutout();

    event.create('enderium_micro_miner_frame')
        .displayName("Enderium Micro Miner Engine Frame")
        .soundType('metal')
        .resistance(5)
        .hardness(5)
        .tagBlock("mineable/pickaxe")
        .requiresTool(true)
        .defaultCutout();

    //Dense Ores
    const ores = [
        "redstone_ore",
        'diamond_ore',
        'emerald_ore',
        'gold_ore',
        'lapis_ore',
        'iron_ore',
        'coal_ore',
        'nether_quartz_ore',
        'copper_ore'
    ]

	for (const ore of ores) {
		// split '_' then capitalize then rejoin
		event.create('dense_' + ore)
			.displayName(`Dense ${ore.split('_').map(v => capitalize(v)).join(" ")}`)
			.soundType('stone')
			.resistance(6)
			.hardness(5)
			.tagBlock('mineable/pickaxe')
			.tagBlock('forge:ores/dense_' + ore)
			.requiresTool(true);
	}

    //EMERGENCY FIX
    event.create('gtceu:dilithium_ore')
		.soundType('stone')
		.hardness(2)
		.resistance(2)
		.tagBlock("mineable/pickaxe")
		.requiresTool();

    //Casing stuff

    event.create("microverse_casing", 'gtceu:renderer')
        .displayName("Microverse Casing")
        .soundType('metal')
        .hardness(2.5)
        .resistance(2.5)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .textureOverrideRenderer('minecraft:block/cube_all', {'all': new ResourceLocation('kubejs', 'block/microverse/casing')})

    
    event.create('sculk_compound_casing', 'gtceu:renderer')
        .displayName("Sculk Compound Casing")
        .soundType('metal')
        .resistance(6)
        .hardness(5)
        .tagBlock("mineable/pickaxe")
        .requiresTool(true)
        .textureOverrideRenderer('minecraft:block/cube_all', {'all': new ResourceLocation('kubejs', 'block/sculk_compound/casing')})

    event.create('resonant_sculk_compound_casing', 'gtceu:renderer')
        .displayName("Resonant Sculk Compound Casing")
        .soundType('metal')
        .resistance(6)
        .hardness(5)
        .tagBlock("mineable/pickaxe")
        .requiresTool(true)
        .textureOverrideRenderer('minecraft:block/cube_all', {'all': new ResourceLocation('kubejs', 'block/sculk_compound/resonant_casing')})

    event.create('resonant_fusion_casing', 'gtceu:renderer')
        .displayName("Resonant Fusion Casing")
        .soundType('metal')
        .resistance(6)
        .hardness(5)
        .tagBlock("mineable/pickaxe")
        .requiresTool(true)
        .textureOverrideRenderer('minecraft:block/cube_all', {'all': new ResourceLocation('kubejs', 'block/sculk_compound/fusion')})

    event.create('resonant_fusion_coil', 'gtceu:renderer')
        .displayName("Resonant Fusion Coil")
        .soundType('metal')
        .resistance(6)
        .hardness(5)
        .tagBlock("mineable/pickaxe")
        .requiresTool(true)
        .textureOverrideRenderer('minecraft:block/cube_all', {'all': new ResourceLocation('kubejs', 'block/sculk_compound/coil')})

        event.create("dark_soularium_casing", 'gtceu:renderer')
        .displayName("Dark Soularium Casing")
        .soundType('metal')
        .hardness(2.5)
        .resistance(2.5)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .textureOverrideRenderer('minecraft:block/cube_all', {'all': new ResourceLocation('kubejs', 'block/soularium/casing')})
    
    // Post-Tank MB blocks
    event.create('omnic_matrix_machine_casing', 'gtceu:renderer')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .textureOverrideRenderer('minecraft:block/cube_all', {'all': new ResourceLocation('kubejs', 'block/omnium/casing')})
        
    event.create('dimensional_stabilization_netherite_casing', 'gtceu:renderer')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
        .textureOverrideRenderer('minecraft:block/cube_all', {'all': new ResourceLocation('kubejs', 'block/netherite/casing')})

    event.create('omnic_matrix_coil_block', 'gtceu:coil')
        .temperature(12500)
        .level(24)
        .energyDiscount(16)
        .tier(9)
        .coilMaterial(() => GTMaterials.get('omnium'))
        .texture('kubejs:block/omnium/coil')
        .hardness(5)
        .requiresTool(true)
        .material('metal')
});

// StartupEvents.registry('block', event => {
//     event.create('small_storage_crate')
//         .property(BlockProperties.CHEST_TYPE)
//         .resistance(2)
//         .soundType('oak_plank')
//         .blockEntity(entityInfo => {
//             entityInfo.inventory(13, 9)
//             entityInfo.rightClickOpensInventory()
//         })
// })
