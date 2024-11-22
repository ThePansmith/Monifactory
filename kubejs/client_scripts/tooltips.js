const FusionReactorMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.FusionReactorMachine")

ItemEvents.tooltip(tooltip => {
    // Microminers
    function microminer_tooltip(tier) {
        tooltip.add(`kubejs:microminer_t${tier}`, Text.translatable(`item.kubejs.microminer_t${tier}.desc`))
    }
    for (let i = 1; i <= 12; i++) {
        microminer_tooltip(i)
    }

    tooltip.add('kubejs:microminer_t4half', Text.translatable('item.kubejs.microminer_t4half.desc'))
    tooltip.add('kubejs:microminer_t8half', Text.translatable('item.kubejs.microminer_t8half.desc'))

    tooltip.addAdvanced(['/kubejs:stabilized_microminer/'], (item, adv, text) => {
        text.add(1, Text.translatable('item.kubejs.stabilized_microminer.tooltip.1'))
        text.add(2, Text.translatable('item.kubejs.stabilized_microminer.tooltip.2'))
        text.add(3, Text.translatable('item.kubejs.stabilized_microminer.tooltip.3'))
    })

    tooltip.addAdvanced(['/kubejs:pristine_matter/'], (item, adv, text) => {
        text.add(1, Text.translatable('item.kubejs.pristine_matter.desc'))
    })

    // Microminer Components
    tooltip.add('kubejs:universal_navigator', '§9See You Later, navigator!')

    // Endgame Items
    tooltip.add('kubejs:ultimate_gem', '§eRecipe is shapeless.')

    // Funny
    tooltip.addAdvanced(['kubejs:meowni_plush'], (item, adv, text) => {
        text.add(1, Text.blue('Requires nearly all the coins that you can possibly gather.'))
        text.add(2, Text.blue('Exclusive to Hardmode and Expertmode players.'))
    })

    // Questbook
    tooltip.addAdvanced(`ftbquests:book`, (item, adv, text) => {text.add(2, Text.gray('The quest window can also be opened with a keybind.'))})

    // Redstone Clock 
    tooltip.add('redstoneclock:redstone_clock', '§7Needs a redstone signal on a dotted side to work.')
    
    // DML Data Model
    tooltip.add('hostilenetworks:blank_data_model', '§7use it in the crafting table instead!')
    tooltip.add('hostilenetworks:data_model', '§7Upgrades when used in the §3Simulation Chamber')
    
    // DML Matters
    tooltip.add('hostilenetworks:overworld_prediction', '§7Experience per item: 10')
    tooltip.add('hostilenetworks:nether_prediction', '§7Experience per item: 20')
    tooltip.add('hostilenetworks:end_prediction', '§7Experience per item: 25')

    // Conduits
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

    // Circuits
    tooltip.addAdvanced(`kubejs:matter_processor_mainframe`, (item, adv, text) => {text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uev_tier_circuit'), Math.round(Client.lastNanoTime / 1000000000)))})
    tooltip.addAdvanced(`kubejs:matter_processor_computer`, (item, adv, text) => {text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uhv_tier_circuit'), Math.round(Client.lastNanoTime / 1000000000)))})
    tooltip.addAdvanced(`kubejs:matter_processor_assembly`, (item, adv, text) => {text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uv_tier_circuit'), Math.round(Client.lastNanoTime / 1000000000)))})
    tooltip.addAdvanced(`kubejs:matter_processor`, (item, adv, text) => {text.add(1, rainbowifySingle(Text.translatable('item.kubejs.zpm_tier_circuit'), Math.round(Client.lastNanoTime / 1000000000)))})
    tooltip.addAdvanced(`kubejs:dimensional_processor_mainframe`, (item, adv, text) => {text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uiv_tier_circuit'), Math.round(Client.lastNanoTime / 100000000)))})
    tooltip.addAdvanced(`kubejs:dimensional_processor_computer`, (item, adv, text) => {text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uev_tier_circuit'), Math.round(Client.lastNanoTime / 100000000)))})
    tooltip.addAdvanced(`kubejs:dimensional_processor_assembly`, (item, adv, text) => {text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uhv_tier_circuit'), Math.round(Client.lastNanoTime / 100000000)))})
    tooltip.addAdvanced(`kubejs:dimensional_processor`, (item, adv, text) => {text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uv_tier_circuit'), Math.round(Client.lastNanoTime / 100000000)))})
    tooltip.addAdvanced(`kubejs:monic_processor_mainframe`, (item, adv, text) => {text.add(1, Text.blue(Text.translatable('item.kubejs.max_tier_circuit')))})
    tooltip.addAdvanced(`kubejs:monic_processor_computer`, (item, adv, text) => {text.add(1, Text.blue(Text.translatable('item.kubejs.uiv_tier_circuit')))})
    tooltip.addAdvanced(`kubejs:monic_processor_assembly`, (item, adv, text) => {text.add(1, Text.blue(Text.translatable('item.kubejs.uev_tier_circuit')))})
    tooltip.addAdvanced(`kubejs:monic_processor`, (item, adv, text) => {text.add(1, Text.blue(Text.translatable('item.kubejs.uhv_tier_circuit')))})


    // Multiblocks
    tooltip.add('gtceu:discharger', Text.translatable('gtceu.multiblock.discharger.description'))
    tooltip.add('gtceu:greenhouse', Text.translatable('gtceu.multiblock.greenhouse.description'))
    tooltip.add('gtceu:basic_microverse_projector', Text.translatable('gtceu.multiblock.basic_microverse_projector.description'))
    tooltip.add('gtceu:advanced_microverse_projector', Text.translatable('gtceu.multiblock.advanced_microverse_projector.description'))
    tooltip.add('gtceu:advanced_microverse_projector_ii', Text.translatable('gtceu.multiblock.advanced_microverse_projector_ii.description'))
    tooltip.add('gtceu:subatomic_digital_assembler', Text.translatable('gtceu.multiblock.subatomic_digital_assembler.description'))
    tooltip.add('gtceu:actualization_chamber', Text.translatable('gtceu.multiblock.actualization_chamber.description'))

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


    // Parallel multiblocks
    const parallelMultis = [
        'simulation_supercomputer',
        'loot_superfabricator',
        'rock_cycle_simulator',
        'atmospheric_accumulator',
        'matter_alterator',
        'implosion_collider',
        'extra_large_chemical_reactor',
        'quintessence_infuser',
        'hyperbolic_microverse_projector',
        'dimensional_superassembler',
        'universal_crystallizer'
    ]

    parallelMultis.forEach(multi => {
        tooltip.addAdvanced('gtceu:' + multi, (item, adv, text) => {
            text.add(1, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
            text.add(2, Text.translatable('gtceu.multiblock.' + multi + '.description'))
        })
    })

    tooltip.addAdvanced('gtceu:helical_fusion_reactor', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.machine.fusion_reactor.capacity', Math.trunc(FusionReactorMachine.calculateEnergyStorageFactor(GTValues.UHV, 16) / 1000000)))
        text.add(2, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
        text.add(3, Text.translatable('gtceu.multiblock.helical_fusion_reactor.description'))
    })


    // Parallel hatches
    tooltip.add('gtceu:uhv_uhv_parallel_hatch', Text.translatable('gtceu.giga_parallel_hatch.desc'))
    tooltip.add('gtceu:uev_uev_parallel_hatch', Text.translatable('gtceu.omega_parallel_hatch.desc'))

    //Converters
    tooltip.add(/^gtceu:.*a_energy_converter$/, "§7Cannot be extracted from in EU->FE mode!\nUse an FE buffer for this to push into.")
    
    // Gregtech
    tooltip.add(['gtceu:item_tag_filter', 'gtceu:fluid_tag_filter'], Text.red("Negation operator [!] is nonfunctional."))
    tooltip.add('gtceu:basic_tape', '§7Used to wrap up Crates for transport.')
    tooltip.add('gtceu:ender_fluid_link_cover', '§4Not yet implemented.')
    tooltip.add('gtceu:nightvision_goggles', '§7Toggle with the [Armor Mode Switch] key.')

    // GCYR
    tooltip.add('gcyr:rocket_scanner', '§7Rotate the multiblock if your rocket doesnt build.')
    tooltip.add('gcyr:space_chestplate', '§7Fill with Oxygen in a Canner.')

    // Sophisticated Storage
    tooltip.add('functionalstorage:storage_controller', '§7Previously known as a Storage Controller')
    tooltip.add('functionalstorage:framed_storage_controller', '§7Previously known as a Framed Storage Controller')

    // AE2
    tooltip.add('ae2:facade', Text.gray('Crafted with Cable Anchors'))
    tooltip.add('ae2:memory_card', Text.gray('Hold in offhand to set additional inputs on Multi P2Ps.'))
    tooltip.add('ae2:creative_fluid_cell', Text.red('Cannot be made using Creative Tank data!\nAE2 devs will not fix a bug that allows this to make items as well.'))

    //EIO Cap Banks
    tooltip.add(/^enderio:.*_bank$/, "§4Currently TPS intensive, look into other options for power storage.")

    // Misc
    tooltip.add('kubejs:eternal_catalyst', Text.darkGray('Gaze into the Abyss...'))
    tooltip.add('kubejs:infinity_catalyst', Text.darkGray('One is all, and all is one.'))
    tooltip.add('gtceu:infinity_ingot', Text.darkGray('The fury of the universe in the palm of your hand.'))
    tooltip.add('gtceu:monium_ingot', Text.darkGray('The serenity of the universe in the palm of your hand.'))
    tooltip.add('extendedcrafting:the_ultimate_catalyst', Text.darkGray("I'm the real ultimate catalyst..."))
    tooltip.add('extendedcrafting:the_ultimate_component', Text.darkGray("There is none better than I..."))

    tooltip.add('extendedcrafting:auto_flux_crafter',("§7Uses large amounts of energy to convert Sculk into Sculk Cores."))
    tooltip.add('extendedcrafting:flux_alternator', ("§7Provides Energy to the Sculk Charger, from up to 3 blocks away."))
    tooltip.add(['extendedcrafting:basic_auto_table', 'extendedcrafting:advanced_auto_table', 'extendedcrafting:elite_auto_table','extendedcrafting:ultimate_auto_table', 'extendedcrafting:epic_auto_table', 'extendedcrafting:auto_flux_crafter'], ['§7Cannot be inserted into!', '§7Put items in an inventory atop the table instead.'])
    
    tooltip.add('kubejs:excitationcoil', '§7Used for Crafting.')
    tooltip.add('gtceu:terminal', '§7Can autobuild multiblocks by shift-right-clicking a controller.')

    tooltip.add(['gtceu:prospector.lv', 'gtceu:prospector.hv', 'gtceu:prospector.luv'], "§7Only shows ores in the immediate vicinity.\nIf you're looking for a specific ore, you may need to go exploring!")

    // TelePastries
    tooltip.add('telepastries:nether_cake', '§6Teleports you to the Nether\n§7Refill by right-clicking with 2 or more Obsidian.')
    tooltip.add('telepastries:overworld_cake', '§6Teleports you to the Overworld\n§7Refill by right-clicking with 2 or more vanilla Saplings.')
    tooltip.add('telepastries:end_cake', '§6Teleports you to the End\n§7Refill by right-clicking with 2 or more Eyes of Ender.')
    tooltip.add('telepastries:custom_cake', '§6Teleports you to the Void World\n§7Refill by right-clicking with 2 or more Pulsating Dust.')
    tooltip.add('telepastries:lost_city_cake', '§6Teleports you to the Lost Cities\n§7Teleport without consuming by right-clicking with a Diamond.')


    // NuclearCraft
    tooltip.add('nuclearcraft:rhodochrosite_dust', '§eMnCO₃');
    tooltip.add('nuclearcraft:tough_alloy_ingot', '§eLiFeB');
    tooltip.add('nuclearcraft:ferroboron_ingot', '§eFeB');
    tooltip.add('nuclearcraft:hard_carbon_ingot', '§eFe₃C');
    tooltip.add('nuclearcraft:uranium_233', '§eU²³³');
    tooltip.add('nuclearcraft:plutonium_238', '§ePu²³⁸');
    tooltip.add('nuclearcraft:plutonium_242', '§ePu²⁴²');
    tooltip.add('nuclearcraft:neptunium_236', '§eNp²³⁶');
    tooltip.add('nuclearcraft:neptunium_237', '§eNp²³⁷');
    tooltip.add('nuclearcraft:americium_241', '§eAm²⁴¹');
    tooltip.add('nuclearcraft:americium_242', '§eAm²⁴²');
    tooltip.add('nuclearcraft:americium_243', '§eAm²⁴³');
    tooltip.add('nuclearcraft:curium_243', '§eCm²⁴³');
    tooltip.add('nuclearcraft:curium_245', '§eCm²⁴⁵');
    tooltip.add('nuclearcraft:curium_246', '§eCm²⁴⁶');
    tooltip.add('nuclearcraft:curium_247', '§eCm²⁴⁷');
    tooltip.add('nuclearcraft:berkelium_247', '§eBk²⁴⁷');
    tooltip.add('nuclearcraft:berkelium_248', '§eBk²⁴⁸');
    tooltip.add('nuclearcraft:californium_249', '§eCf²⁴⁹');
    tooltip.add('nuclearcraft:californium_251', '§eCf²⁵¹');
    tooltip.add('nuclearcraft:californium_252', '§eCf²⁵²');

    tooltip.addAdvanced(['/^kubejs:.+infinity_dust_block$/', 'kubejs:infinity_dust_block'], (item, adv, text) => {
        text.add(1, Text.translatable('item.kubejs.infinity_dust_block.tooltip'))
    })

    // Macerator byproduct warning
    tooltip.add(['gtceu:lp_steam_macerator', 'gtceu:hp_steam_macerator', 'gtceu:steam_grinder', 'gtceu:lv_macerator', 'gtceu:mv_macerator'], '§4You must use a HV-tier macerator or higher for byproducts.')

    // Wooden pipe, tank warning
    tooltip.add([
        'gtceu:wood_small_fluid_pipe',
        'gtceu:treated_wood_small_fluid_pipe',
        'gtceu:wood_normal_fluid_pipe',
        'gtceu:treated_wood_normal_fluid_pipe',
        'gtceu:wood_large_fluid_pipe',
        'gtceu:treated_wood_large_fluid_pipe',
        'gtceu:wooden_multiblock_tank'
    ], '§4Can\'t hold Steam or other gases!')

    // Chipped workbenches
    tooltip.add([
        'chipped:botanist_workbench',
        'chipped:glassblower',
        'chipped:carpenters_table',
        'chipped:loom_table',
        'chipped:mason_table',
        'chipped:alchemy_bench',
        'chipped:tinkering_table'
    ], '§7Recipes can also be performed in the §3Stonecutter§7,\nwhich can be automated with §bAE2§7\'s §3Molecular Assemblers§7.')

    // Tempad
    if (Platform.isLoaded('tempad')) {
        tooltip.add('tempad:tempad', '§6Uses Monipennies as fuel');
    }
})
