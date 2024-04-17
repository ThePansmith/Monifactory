ItemEvents.tooltip(tooltip => {
    //Microminers
    tooltip.add('kubejs:microminer_t1', Text.translatable('item.kubejs.microminer_t1.desc'))
    tooltip.add('kubejs:microminer_t2', Text.translatable('item.kubejs.microminer_t2.desc'))
    tooltip.add('kubejs:microminer_t3', Text.translatable('item.kubejs.microminer_t3.desc'))
    tooltip.add('kubejs:microminer_t4', Text.translatable('item.kubejs.microminer_t4.desc'))
    tooltip.add('kubejs:microminer_t5', Text.translatable('item.kubejs.microminer_t5.desc'))
    tooltip.add('kubejs:microminer_t6', Text.translatable('item.kubejs.microminer_t6.desc'))
    tooltip.add('kubejs:microminer_t7', Text.translatable('item.kubejs.microminer_t7.desc'))
    tooltip.add('kubejs:microminer_t8', Text.translatable('item.kubejs.microminer_t8.desc'))
    tooltip.add('kubejs:microminer_t9', Text.translatable('item.kubejs.microminer_t9.desc'))
    tooltip.add('kubejs:microminer_t10', Text.translatable('item.kubejs.microminer_t10.desc'))

    //Microminer Components
    tooltip.add('kubejs:universal_navigator', '§9See You Later, navigator!')

    //Endgame Items
    tooltip.add('kubejs:ultimate_gem', '§eRecipe is shapeless.')

    //DML Matters
    tooltip.add('hostilenetworks:overworld_prediction', '§7Experience per item: 10')
    tooltip.add('hostilenetworks:nether_prediction', '§7Experience per item: 20')
    tooltip.add('hostilenetworks:end_prediction', '§7Experience per item: 25')

    //Conduits
    tooltip.add('enderio:conductive_conduit', '§7Max Output 512 RF/t')
    tooltip.add('enderio:energetic_conduit', '§7Max Output 2,048 RF/t')
    tooltip.add('enderio:vibrant_conduit', '§7Max Output 8,192 RF/t')
    tooltip.add('enderio:endsteel_conduit', '§7Max Output 32,768 RF/t')
    tooltip.add('enderio:lumium_conduit', '§7Max Output 131,072 RF/t')
    tooltip.add('enderio:signalum_conduit', '§7Max Output 524,288 RF/t')
    tooltip.add('enderio:enderium_conduit', '§7Max Output 2,097,152 RF/t')
    tooltip.add('enderio:draconium_conduit', '§7Max Output 8,388,608 RF/t')
    tooltip.add('enderio:draconic_superconductor_conduit', '§7Max Output 134,217,728 RF/t')

    tooltip.add("thermal:device_rock_gen", "§7Must be placed next to lava and water to produce cobblestone.")
    tooltip.add("thermal:device_water_gen", "§7Must be placed next to two water source blocks to work.")

    tooltip.add(['thermal:upgrade_augment_1', 'thermal:upgrade_augment_2', 'thermal:upgrade_augment_4', 'thermal:upgrade_augment_3', 'thermal:dynamo_output_augment'], '§aDo not take the items from EMI! Use the crafting recipe to get the correct NBT data.')

    /*
    tooltip.addAdvanced('kubejs:dev_tool', (item, advanced, text) => {
		text[0] = rainbowify('The Holy Pickaxe', Math.round(Client.lastNanoTime/100000000))
        text[1] = "§9Leclo§fwndu§c93150§f's §6Tool";
    })
    */

    // Backpacks, this extra bit of code will made it so that this line will be the first line displayed after the item name (if curios didn't exist lol)
    tooltip.addAdvanced(/simplybackpacks:/, (item, advanced, text) => {
        text.add(1, [Text.red('Deprecated, switch out for a sophisticated backpack.').bold()])
    })

	// Fix gtceu text
    tooltip.addAdvanced(['gtceu:creative_energy', 'gtceu:creative_tank', 'gtceu:creative_chest'], (item, adv, text) => {
        text.remove(3);
        text.remove(2);
        text.remove(1);
        text.add(Text.join(Text.translatable('gtceu.creative_tooltip.1'), rainbowify(Text.translatable('gtceu.creative_tooltip.2').getString(), Math.round(Client.lastNanoTime / 100000000)), Text.translatable('gtceu.creative_tooltip.3')))
    });

	// Debug laser
    tooltip.addAdvanced('kubejs:debug_laser', (item, adv, text) => {
        text.add(Text.join('You need to be a ', rainbowify('dev', Math.round(Client.lastNanoTime / 100000000)), ' to use this'))
    });

	// dml glitch armor
	tooltip.add('kubejs:glitch_fragment', Text.translatable('item.kubejs.glitch_fragment.desc'))
	tooltip.add('kubejs:glitch_infused_ingot', Text.translatable('item.kubejs.glitch_infused_ingot.desc'))
})