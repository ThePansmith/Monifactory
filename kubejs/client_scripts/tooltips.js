const FusionReactorMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.FusionReactorMachine")

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
        text.add(1, Text.translatable('item.kubejs.stabilized_microminer.tooltip.1'))
        text.add(2, Text.translatable('item.kubejs.stabilized_microminer.tooltip.2'))
        text.add(3, Text.translatable('item.kubejs.stabilized_microminer.tooltip.3'))
    })

    tooltip.addAdvanced(['/kubejs:pristine_matter/'], (item, adv, text) => {
        text.add(1, Text.translatable('item.kubejs.pristine_matter.desc'))
    })

    //Microminer Components
    tooltip.add('kubejs:universal_navigator', '§9See You Later, navigator!')

    //Endgame Items
    tooltip.add('kubejs:ultimate_gem', '§eRecipe is shapeless.')

    //DML Data Model
    tooltip.add('hostilenetworks:blank_data_model', '§7use it in the crafting table instead!')
    tooltip.add('hostilenetworks:data_model', '§7Upgrades when used in the §3Simulation Chamber')
    
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
    tooltip.add('gtceu:discharger', Text.translatable('gtceu.discharger.desc'))
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
    tooltip.add('gtceu:implosion_collider', Text.translatable('gtceu.implosion_collider.desc'))
    tooltip.addAdvanced('gtceu:helical_fusion_reactor', (item, adv, text) => {
        text.add(1, Text.translatable('gtceu.machine.fusion_reactor.capacity', Math.trunc(FusionReactorMachine.calculateEnergyStorageFactor(GTValues.UHV, 16) / 1000000)))
        text.add(2, Text.translatable('gtceu.multiblock.parallelizable.tooltip'))
        text.add(3, Text.translatable('gtceu.multiblock.helical_fusion_reactor.description'))
    })

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

    tooltip.add('gtceu:uhv_uhv_parallel_hatch', Text.translatable('gtceu.giga_parallel_hatch.desc'))
    tooltip.add('gtceu:uev_uev_parallel_hatch', Text.translatable('gtceu.omega_parallel_hatch.desc'))

    tooltip.add('gcyr:rocket_scanner', Text.darkGray('Rotate the multiblock if your rocket doesnt build.'))
    tooltip.add(['gtceu:hyperbolic_microverse_projector', 'gtceu:dimensional_superassembler', 'gtceu:quintessence_infuser', 'gtceu:implosion_collider'], 'Can parallelize with Parallel Control Hatches.')
    tooltip.add('gtceu:basic_tape', 'Useful to wrap up Crates for transport instead')

    //Sophisticated Storage
    tooltip.add(['sophisticatedstorage:diamond_barrel', 'sophisticatedstorage:diamond_chest', 'sophisticatedstorage:diamond_shulker_box'], 'Use an Iron to Aluminium Tier Upgrade on the previous tier to obtain')
    tooltip.add(['sophisticatedstorage:netherite_barrel', 'sophisticatedstorage:netherite_chest', 'sophisticatedstorage:netherite_shulker_box'], 'Use an Aluminium to Stainless Steel Tier Upgrade on the previous tier to obtain')
    tooltip.add('functionalstorage:storage_controller', 'Previously known as a Storage Controller')
    tooltip.add('functionalstorage:framed_storage_controller', 'Previously known as a Framed Storage Controller')

    // AE2
    tooltip.add('ae2:facade', Text.gray('Crafted with Cable Anchors'))

    // Misc
    tooltip.add('kubejs:eternal_catalyst', Text.darkGray('Gaze into the Abyss...'))
    tooltip.add('kubejs:infinity_catalyst', Text.darkGray('One is all, and all is one.'))
    tooltip.add('gtceu:infinity_ingot', Text.darkGray('The fury of the universe in the palm of your hand.'))
    tooltip.add('gtceu:monium_ingot', Text.darkGray('The serenity of the universe in the palm of your hand.'))
    tooltip.add('extendedcrafting:the_ultimate_catalyst', Text.darkGray("I'm the real ultimate catalyst..."))
    tooltip.add('extendedcrafting:auto_flux_crafter',("Uses large amounts of energy to convert Sculk into Sculk Cores."))
    tooltip.add('extendedcrafting:flux_alternator', ("Provides Energy to the Sculk Charger, from up to 3 blocks away."))
    tooltip.add('extendedcrafting:the_ultimate_component', Text.darkGray("There is none better than I..."))
    tooltip.add(['extendedcrafting:basic_auto_table', 'extendedcrafting:advanced_auto_table', 'extendedcrafting:elite_auto_table','extendedcrafting:ultimate_auto_table', 'extendedcrafting:epic_auto_table'], ['Cannot be inserted into!', 'Put them in an inventory atop the table instead.'])
    tooltip.add('kubejs:excitationcoil', 'Crafting Component Only')
    tooltip.add('gtceu:terminal', 'Can autobuild multiblocks by shift-rightclicking a controller.')


    // NuclearCraft tooltips
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

    let benches = ['chipped:botanist_workbench', 'chipped:glassblower', 'chipped:carpenters_table', 'chipped:loom_table', 'chipped:mason_table', 'chipped:alchemy_bench', 'chipped:tinkering_table'];
    benches.forEach(bench => {
        tooltip.add(bench, ['Recipes can also be performed in the §3Stonecutter§f,', 'which can be automated with §bAE2§f\'s §3Molecular Assemblers§f.'])
    })

    if (Platform.isLoaded('tempad')) {
        tooltip.add('tempad:tempad', '§6Uses Monipennies as fuel');
    }
})