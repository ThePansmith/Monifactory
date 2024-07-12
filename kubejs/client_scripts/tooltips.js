ItemEvents.tooltip(tooltip => {
    //Microminers
    function microminer_tooltip(tier) {
        tooltip.add(`kubejs:microminer_t${tier}`, Text.translatable(`item.kubejs.microminer_t${tier}.desc`))
    }
    for (let i = 1; i <= 12; i++) {
        microminer_tooltip(i)
    }
    
    tooltip.add('kubejs:microminer_t4half', Text.translatable('item.kubejs.microminer_t4half.desc'))
    tooltip.add('kubejs:microminer_t8half', Text.translatable('item.kubejs.microminer_t8half.desc'))
    
    tooltip.addAdvanced(['/kubejs:stabilized_microminer/'], (item, adv, text) => {
        text.add(1, '§7§oA stabilized version, injected with a Heart of a Universe.')
        text.add(2, '§7§oLasts indefinitely. Reusable. Totally not overpowered.')
        text.add(3, '§7§oIt looks oddly familiar.')
    })

    tooltip.addAdvanced(['/kubejs:pristine_matter/'], (item, adv, text) => {
        text.add(1, '§7§oAn infinite and incomprehensible abyss of materials.')
    })

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
    tooltip.add('enderio:cryolobus_conduit', '§7Max Output 8,388,608 RF/t')
    tooltip.add('enderio:sculk_superconductor_conduit', '§7Max Output 134,217,728 RF/t')

    tooltip.add("thermal:device_rock_gen", "§7Must be placed next to lava and water to produce cobblestone.")
    tooltip.add("thermal:device_water_gen", "§7Must be placed next to two water source blocks to work.")

    tooltip.add(['thermal:upgrade_augment_1', 'thermal:upgrade_augment_2', 'thermal:upgrade_augment_4', 'thermal:upgrade_augment_3', 'thermal:dynamo_output_augment'], '§aDo not take the items from EMI! Use the crafting recipe to get the correct NBT data.')


    // Depreciation
    tooltip.addAdvanced(/storagedrawers:/, (item, advanced, text) => {
        text.add(1, [Text.red('Deprecated').bold()])
    })

	// Fix gtceu text
    tooltip.addAdvanced(['gtceu:creative_energy', 'gtceu:creative_tank', 'gtceu:creative_chest', 'gtceu:creative_data_access_hatch'], (item, adv, text) => {
        text.remove(3);
        text.remove(2);
        text.remove(1);
        text.add(Text.join(Text.translatable('gtceu.creative_tooltip.1'), rainbowify(Text.translatable('gtceu.creative_tooltip.2').getString(), Math.round(Client.lastNanoTime / 100000000)), Text.translatable('gtceu.creative_tooltip.3')))
    });

	// Debug laser
    tooltip.addAdvanced('kubejs:debug_laser', (item, adv, text) => {
        text.add(Text.join('You need to be a ', rainbowify('dev', Math.round(Client.lastNanoTime / 100000000)), ' to use this'))
    });


    // Multiblocks
    tooltip.add('gtceu:sculk_reverberator', Text.translatable('gtceu.sculk_reverberator.desc'))
    tooltip.add('gtceu:sculk_reactor', Text.translatable('gtceu.sculk_reactor.desc'))
    tooltip.add('gtceu:simulation_supercomputer', Text.translatable('gtceu.simulation_supercomputer.desc'))
    tooltip.add('gtceu:loot_superfabricator', Text.translatable('gtceu.loot_superfabricator.desc'))
    tooltip.add('gtceu:greenhouse', Text.translatable('gtceu.greenhouse.desc'))
    tooltip.add('gtceu:basic_microverse_projector', Text.translatable('gtceu.basic_microverse_projector.desc'))
    tooltip.add('gtceu:advanced_microverse_projector', Text.translatable('gtceu.advanced_microverse_projector.desc'))
    tooltip.add('gtceu:advanced_microverse_projector_ii', Text.translatable('gtceu.advanced_microverse_projector_ii.desc'))
    tooltip.add('gtceu:dimensional_superassembler', Text.translatable('gtceu.dimensional_superassembler.desc'))
    tooltip.add('gtceu:hyperbolic_microverse_projector', Text.translatable('gtceu.hyperbolic_microverse_projector.desc'))
    tooltip.add('gtceu:hyperbolic_microverse_projector', Text.translatable('gtceu.hyperbolic_microverse_projector_2.desc'))
    tooltip.add('gtceu:subatomic_digital_assembler', Text.translatable('gtceu.subatomic_digital_assembler.desc'))
    tooltip.add('gtceu:quintessence_infuser', Text.translatable('gtceu.quintessence_infuser.desc'))
    tooltip.add('gtceu:actualization_chamber', Text.translatable('gtceu.actualization_chamber.desc'))

    tooltip.addAdvanced('gtceu:universal_crystallizer', (item, adv, text) => {
        text.add(1, Text.darkGray('An immense device, capable of turning raw materials into complex matters'))
        text.add(2, [Text.gray('Can be parallelized with '), Text.aqua('Parallel Control Hatches')])
    })

    tooltip.addAdvanced('gtceu:naquadah_reactor_i', (item, adv, text) => {
        text.add(1, Text.gray('An advanced reactor that produces energy from the decay of Enriched Naquadah and Naquadria bolts'))
        text.add(2, [Text.white('Produces exactly 3 amps of '), Text.red('ZPM'), Text.white('.')])
        text.add(3, rainbowifySingle('Does not overclock!', Math.round(Client.lastNanoTime / 1000000000)))
    })

    tooltip.addAdvanced('gtceu:naquadah_reactor_ii', (item, adv, text) => {
        text.add(1, Text.gray('An elite reactor capable of capturing more energy from the decay of Enriched Naquadah and Naquadria bolt'))
        text.add(2, [Text.white('Produces exactly 3 amps of '), Text.translatable('\u00a73UV'), Text.white('.')])
        text.add(3, rainbowifySingle('Does not overclock!', Math.round(Client.lastNanoTime / 1000000000)))
    })

    tooltip.add('gcyr:rocket_scanner', Text.darkGray('Rotate the multiblock if your rocket doesnt build.'))
    tooltip.add(['gtceu:hyperbolic_microverse_projector', 'gtceu:dimensional_superassembler', 'gtceu:sculk_reactor', 'gtceu:quintessence_infuser'], 'Can parallelize with Parallel Control Hatches.')

    //Sophisticated Storage
    tooltip.add(['sophisticatedstorage:diamond_barrel', 'sophisticatedstorage:diamond_chest', 'sophisticatedstorage:diamond_shulker_box'], 'Use an Iron to Aluminium Tier Upgrade on the previous tier to obtain')
    tooltip.add(['sophisticatedstorage:netherite_barrel', 'sophisticatedstorage:netherite_chest', 'sophisticatedstorage:netherite_shulker_box'], 'Use an Aluminium to Stainless Steel Tier Upgrade on the previous tier to obtain')

    // AE2
    tooltip.add('ae2:facade', Text.gray('Crafted with Cable Anchors'))

    // Misc
    tooltip.add('kubejs:eternal_catalyst', Text.darkGray('Gaze into the Abyss...'))
    tooltip.add('kubejs:infinity_catalyst', Text.darkGray('One is all, and all is one.'))
    tooltip.add('gtceu:infinity_ingot', Text.darkGray('The fury of the universe in the palm of your hand.'))
    tooltip.add('gtceu:monium_ingot', Text.darkGray('The serenity of the universe in the palm of your hand.'))
    tooltip.add('extendedcrafting:the_ultimate_catalyst', Text.darkGray("I'm the real ultimate catalyst..."))
    tooltip.add('extendedcrafting:the_ultimate_component', Text.darkGray("There is none better than I..."))
    tooltip.add('kubejs:excitationcoil', 'Crafting Component Only')

    tooltip.addAdvanced(['/^kubejs:.+infinity_dust_block$/', 'kubejs:infinity_dust_block'], (item, adv, text) => {
        text.add(1, Text.gray('Not quite solid'))
    })
})