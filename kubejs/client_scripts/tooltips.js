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
    tooltip.add('kubejs:universal_navigator', Text.translatable('kubejs.universal_navigator.tooltip'))

    // Endgame Items
    tooltip.add('kubejs:ultimate_gem', Text.translatable('kubejs.ultimate_gem.tooltip'))

    //Hardmode+ Stuff
    if (!isNormalMode) {
        tooltip.add('gtceu:assembly_line', Text.translatable('gtceu.assembly_line.tooltip.hardmode'))
        tooltip.add('kubejs:meowni_plush', Text.translatable('kubejs.meowni_plush.tooltip.hardmode.1'))
        tooltip.add('kubejs:meowni_plush', Text.translatable('kubejs.meowni_plush.tooltip.hardmode.2'))
    } else {
        tooltip.add('gtceu:assembly_line', Text.translatable('gtceu.assembly_line.tooltip.normal'))
        tooltip.add('kubejs:meowni_plush', Text.translatable('kubejs.meowni_plush.tooltip.normal.1'))
        tooltip.add('kubejs:meowni_plush', Text.translatable('kubejs.meowni_plush.tooltip.normal.2'))
    }

    // Questbook
    tooltip.addAdvanced(`ftbquests:book`, (item, adv, text) => { text.add(2, Text.gray(Text.translatable('ftbquests.book.tooltip'))) })

    // Redstone Clock 
    tooltip.add('redstoneclock:redstone_clock', Text.translatable('redstoneclock.redstone_clock.tooltip'))

    // DML Data Model
    tooltip.add('hostilenetworks:blank_data_model', Text.translatable('hostilenetworks.blank_data_model.tooltip'))
    tooltip.add('hostilenetworks:data_model', Text.translatable('hostilenetworks.data_model.tooltip'))

    // DML Matters
    tooltip.add('hostilenetworks:overworld_prediction', Text.translatable('hostilenetworks.overworld_prediction.tooltip'))
    tooltip.add('hostilenetworks:nether_prediction', Text.translatable('hostilenetworks.nether_prediction.tooltip'))
    tooltip.add('hostilenetworks:end_prediction', Text.translatable('hostilenetworks.end_prediction.tooltip'))

    // Conduits
    tooltip.add('enderio:conductive_conduit', Text.translatable('enderio.conductive_conduit.tooltip'))
    tooltip.add('enderio:energetic_conduit', Text.translatable('enderio.energetic_conduit.tooltip'))
    tooltip.add('enderio:vibrant_conduit', Text.translatable('enderio.vibrant_conduit.tooltip'))
    tooltip.add('enderio:endsteel_conduit', Text.translatable('enderio.endsteel_conduit.tooltip'))
    tooltip.add('enderio:lumium_conduit', Text.translatable('enderio.lumium_conduit.tooltip'))
    tooltip.add('enderio:signalum_conduit', Text.translatable('enderio.signalum_conduit.tooltip'))
    tooltip.add('enderio:enderium_conduit', Text.translatable('enderio.enderium_conduit.tooltip'))
    tooltip.add('enderio:cryolobus_conduit', Text.translatable('enderio.cryolobus_conduit.tooltip'))
    tooltip.add('enderio:sculk_superconductor_conduit', Text.translatable('enderio.sculk_superconductor_conduit.tooltip'))

    tooltip.add('thermal:device_rock_gen', Text.translatable('thermal.device_rock_gen.tooltip'))
    tooltip.add('thermal:device_water_gen', Text.translatable('thermal.device_water_gen.tooltip'))

    tooltip.add(['thermal:upgrade_augment_1', 'thermal:upgrade_augment_2', 'thermal:upgrade_augment_4', 'thermal:upgrade_augment_3', 'thermal:dynamo_output_augment'], Text.translatable('§athermal.emi.tooltip.'))

    // Circuits
    tooltip.addAdvanced(`kubejs:matter_processor_mainframe`, (item, adv, text) => { text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uev_tier_circuit'), Math.round(Client.lastNanoTime / 1000000000))) })
    tooltip.addAdvanced(`kubejs:matter_processor_computer`, (item, adv, text) => { text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uhv_tier_circuit'), Math.round(Client.lastNanoTime / 1000000000))) })
    tooltip.addAdvanced(`kubejs:matter_processor_assembly`, (item, adv, text) => { text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uv_tier_circuit'), Math.round(Client.lastNanoTime / 1000000000))) })
    tooltip.addAdvanced(`kubejs:matter_processor`, (item, adv, text) => { text.add(1, rainbowifySingle(Text.translatable('item.kubejs.zpm_tier_circuit'), Math.round(Client.lastNanoTime / 1000000000))) })
    tooltip.addAdvanced(`kubejs:dimensional_processor_mainframe`, (item, adv, text) => { text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uiv_tier_circuit'), Math.round(Client.lastNanoTime / 100000000))) })
    tooltip.addAdvanced(`kubejs:dimensional_processor_computer`, (item, adv, text) => { text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uev_tier_circuit'), Math.round(Client.lastNanoTime / 100000000))) })
    tooltip.addAdvanced(`kubejs:dimensional_processor_assembly`, (item, adv, text) => { text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uhv_tier_circuit'), Math.round(Client.lastNanoTime / 100000000))) })
    tooltip.addAdvanced(`kubejs:dimensional_processor`, (item, adv, text) => { text.add(1, rainbowifySingle(Text.translatable('item.kubejs.uv_tier_circuit'), Math.round(Client.lastNanoTime / 100000000))) })
    tooltip.addAdvanced(`kubejs:monic_processor_mainframe`, (item, adv, text) => { text.add(1, Text.blue(Text.translatable('item.kubejs.max_tier_circuit'))) })
    tooltip.addAdvanced(`kubejs:monic_processor_computer`, (item, adv, text) => { text.add(1, Text.blue(Text.translatable('item.kubejs.uiv_tier_circuit'))) })
    tooltip.addAdvanced(`kubejs:monic_processor_assembly`, (item, adv, text) => { text.add(1, Text.blue(Text.translatable('item.kubejs.uev_tier_circuit'))) })
    tooltip.addAdvanced(`kubejs:monic_processor`, (item, adv, text) => { text.add(1, Text.blue(Text.translatable('item.kubejs.uhv_tier_circuit'))) })

    tooltip.addAdvanced([`kubejs:matter_processor_mainframe`, `kubejs:matter_processor_computer`, `kubejs:matter_processor_assembly`, `kubejs:matter_processor`], (item, adv, text) => { text.add(1, Text.gray(Text.translatable('item.kubejs.matter_circuit.tooltip'))) })
    tooltip.addAdvanced([`kubejs:dimensional_processor_mainframe`, `kubejs:dimensional_processor_computer`, `kubejs:dimensional_processor_assembly`, `kubejs:dimensional_processor`], (item, adv, text) => { text.add(1, Text.gray(Text.translatable('item.kubejs.dimensional_circuit.tooltip'))) })
    tooltip.addAdvanced(`kubejs:monic_processor_mainframe`, (item, adv, text) => { text.add(1, Text.gray(Text.translatable('item.kubejs.monic_processor_mainframe.tooltip'))) })
    tooltip.addAdvanced(`kubejs:monic_processor_computer`, (item, adv, text) => { text.add(1, Text.gray(Text.translatable('item.kubejs.monic_processor_computer.tooltip'))) })
    tooltip.addAdvanced(`kubejs:monic_processor_assembly`, (item, adv, text) => { text.add(1, Text.gray(Text.translatable('item.kubejs.monic_processor_assembly.tooltip'))) })
    tooltip.addAdvanced(`kubejs:monic_processor`, (item, adv, text) => { text.add(1, Text.gray(Text.translatable('item.kubejs.monic_processor.tooltip'))) })

    // Multiblocks
    tooltip.add('gtceu:discharger', Text.translatable('gtceu.multiblock.discharger.description'))
    tooltip.add('gtceu:greenhouse', Text.translatable('gtceu.multiblock.greenhouse.description'))
    tooltip.add('gtceu:basic_microverse_projector', Text.translatable('gtceu.multiblock.basic_microverse_projector.description'))
    tooltip.add('gtceu:advanced_microverse_projector', Text.translatable('gtceu.multiblock.advanced_microverse_projector.description'))
    tooltip.add('gtceu:advanced_microverse_projector_ii', Text.translatable('gtceu.multiblock.advanced_microverse_projector_ii.description'))
    tooltip.add('gtceu:subatomic_digital_assembler', Text.translatable('gtceu.multiblock.subatomic_digital_assembler.description'))
    tooltip.add('gtceu:actualization_chamber', Text.translatable('gtceu.multiblock.actualization_chamber.description'))

    //Singleblocks
    tooltip.addAdvanced([`gtceu:lv_atomic_reconstructor`, `gtceu:mv_atomic_reconstructor`, `gtceu:hv_atomic_reconstructor`, `gtceu:ev_atomic_reconstructor`], (item, adv, text) => { text.add(1, Text.gray(Text.translatable('block.gtceu.lvev_atomic_reconstructor.desc'))) })
    tooltip.addAdvanced([`gtceu:iv_atomic_reconstructor`, `gtceu:luv_atomic_reconstructor`, `gtceu:zpm_atomic_reconstructor`], (item, adv, text) => { text.add(1, Text.gray(Text.translatable('block.gtceu.ivzpm_atomic_reconstructor.desc'))) })
    tooltip.addAdvanced([`gtceu:uv_atomic_reconstructor`, `gtceu:uhv_atomic_reconstructor`, `gtceu:uev_atomic_reconstructor`, `gtceu:uiv_atomic_reconstructor`], (item, adv, text) => { text.add(1, Text.gray(Text.translatable('block.gtceu.uvuiv_atomic_reconstructor.desc'))) })

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

    tooltip.add(/^gtceu:.*a_energy_converter$/, Text.translatable("gtceu.energy_converter.tooltip"));
    tooltip.add(['gtceu:item_tag_filter', 'gtceu:fluid_tag_filter'], Text.red(Text.translatable("gtceu.negation_operator.tooltip")));
    tooltip.add('gtceu:basic_tape', Text.translatable('gtceu.basic_tape.tooltip'));
    tooltip.add('gtceu:ender_fluid_link_cover', Text.translatable('gtceu.ender_fluid_link_cover.tooltip'));
    tooltip.add('gtceu:nightvision_goggles', Text.translatable('gtceu.nightvision_goggles.tooltip'));

    // GCYR
    tooltip.add('gcyr:rocket_scanner', Text.translatable('gcyr.rocket_scanner.tooltip'));
    tooltip.add('gcyr:space_chestplate', Text.translatable('gcyr.space_chestplate.tooltip'));

    // Sophisticated Storage
    tooltip.add('functionalstorage:storage_controller', Text.translatable('functionalstorage.storage_controller.tooltip'));
    tooltip.add('functionalstorage:framed_storage_controller', Text.translatable('functionalstorage.framed_storage_controller.tooltip'));

    // AE2
    tooltip.add('ae2:facade', Text.gray(Text.translatable('ae2.facade.tooltip')));
    tooltip.add('ae2:memory_card', Text.gray(Text.translatable('ae2.memory_card.tooltip')));
    tooltip.add('ae2:creative_fluid_cell', Text.red(Text.translatable('ae2.creative_fluid_cell.tooltip.1')));
    tooltip.add('ae2:creative_fluid_cell', Text.red(Text.translatable('ae2.creative_fluid_cell.tooltip.2')));

    // EIO Cap Banks
    tooltip.add(/^enderio:.*_bank$/, Text.translatable("enderio.cap_bank.tooltip"));

    // Misc
    tooltip.add('kubejs:eternal_catalyst', Text.darkGray(Text.translatable('kubejs.eternal_catalyst.tooltip')));
    tooltip.add('kubejs:infinity_catalyst', Text.darkGray(Text.translatable('kubejs.infinity_catalyst.tooltip')));
    tooltip.add('gtceu:infinity_ingot', Text.darkGray(Text.translatable('gtceu.infinity_ingot.tooltip')));
    tooltip.add('gtceu:monium_ingot', Text.darkGray(Text.translatable('gtceu.monium_ingot.tooltip')));
    tooltip.add('extendedcrafting:the_ultimate_catalyst', Text.darkGray(Text.translatable("extendedcrafting.the_ultimate_catalyst.tooltip")));
    tooltip.add('extendedcrafting:the_ultimate_component', Text.darkGray(Text.translatable("extendedcrafting.the_ultimate_component.tooltip")));

    tooltip.add('extendedcrafting:auto_flux_crafter', Text.translatable('extendedcrafting.auto_flux_crafter.tooltip'));
    tooltip.add('extendedcrafting:flux_alternator', Text.translatable('extendedcrafting.flux_alternator.tooltip'));
    tooltip.addAdvanced(['extendedcrafting:basic_auto_table', 'extendedcrafting:advanced_auto_table', 'extendedcrafting:elite_auto_table', 'extendedcrafting:ultimate_auto_table', 'extendedcrafting:epic_auto_table', 'extendedcrafting:auto_flux_crafter'], (item, adv, text) => {
        text.add(1, Text.translatable('extendedcrafting.auto_table.tooltip.1'))
        text.add(2, Text.translatable('extendedcrafting.auto_table.tooltip.2'))
    })

    tooltip.add('kubejs:excitationcoil', Text.translatable('kubejs.excitationcoil.tooltip'));
    tooltip.add('gtceu:terminal', Text.translatable('gtceu.terminal.tooltip'));

    tooltip.add(['gtceu:prospector.lv', 'gtceu:prospector.hv', 'gtceu:prospector.luv'], Text.translatable("gtceu.prospector.tooltip.1"));
    tooltip.add(['gtceu:prospector.lv', 'gtceu:prospector.hv', 'gtceu:prospector.luv'], Text.translatable("gtceu.prospector.tooltip.2"));

    // TelePastries
    const TelePastries = ['nether', 'overworld', 'end', 'custom', 'lost_city']
    TelePastries.forEach(dim => {
        tooltip.addAdvanced(`telepastries:${dim}_cake`, (item, adv, text) => {
            text.add(1, Text.translatable(`telepastries.${dim}_cake.tooltip.1`))
            text.add(2, Text.translatable(`telepastries.${dim}_cake.tooltip.2`))
        })
    })

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
    tooltip.add(['gtceu:lp_steam_macerator', 'gtceu:hp_steam_macerator', 'gtceu:steam_grinder', 'gtceu:lv_macerator', 'gtceu:mv_macerator'], Text.translatable("gtceu.macerator_byrproduct_warning.tooltip"))

    // Wooden pipe, tank warning
    tooltip.add([
        'gtceu:wood_small_fluid_pipe',
        'gtceu:treated_wood_small_fluid_pipe',
        'gtceu:wood_normal_fluid_pipe',
        'gtceu:treated_wood_normal_fluid_pipe',
        'gtceu:wood_large_fluid_pipe',
        'gtceu:treated_wood_large_fluid_pipe',
        'gtceu:wooden_multiblock_tank'
    ], Text.translatable("gtceu.wood_pipe_warning.tooltip"))

    // Chipped workbenches
    tooltip.addAdvanced([
        'chipped:botanist_workbench',
        'chipped:glassblower',
        'chipped:carpenters_table',
        'chipped:loom_table',
        'chipped:mason_table',
        'chipped:alchemy_bench',
        'chipped:tinkering_table'],  (item, adv, text) => {
        text.add(1, Text.translatable('chipped.workbenches.tooltip.1'))
        text.add(2, Text.translatable('chipped.workbenches.tooltip.2'))
    })

    // Note about PEX crafter speed
    tooltip.add([
        'packagedexcrafting:advanced_crafter',
        'packagedexcrafting:elite_crafter',
        'packagedexcrafting:ultimate_crafter',
        'packagedexexcrafting:epic_crafter'
        ], Text.translatable("packagedexcrafting.crafterspeed.tooltip"))
    
    // Tempad
    if (Platform.isLoaded('tempad')) {
        tooltip.add('tempad:tempad', Text.translatable("tempad.tempad.tooltip"))
    }
})
