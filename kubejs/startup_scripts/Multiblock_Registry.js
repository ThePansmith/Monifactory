const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags')

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {

    // Normal mode-exclusive Multis
    if (!isHardMode) {
        // Simulation Supercomputer
        event.create('simulation_supercomputer')
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(2, 2, 0, 0) //
            .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
            .setProgressBar(new ResourceTexture("kubejs:textures/gui/progress_bar_simulation.png"), FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.COMPUTATION)
            .setSound(GTSoundEntries.ASSEMBLER)


        // Loot Superfabricator
        event.create('loot_superfabricator')
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(2, 1, 0, 0) //
            .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
            .setProgressBar(new ResourceTexture("kubejs:textures/gui/progress_bar_simulation.png"), FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.COMPUTATION)
    }

    // Hard mode-exclusive Multis
    if (isHardMode) {

        // Actualization Chamber
        event.create('actualization_chamber')
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(2, 20, 0, 0) //
            .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
            .setProgressBar(new ResourceTexture("kubejs:textures/gui/progress_bar_simulation.png"), FillDirection.LEFT_TO_RIGHT)
            .setSound(GTSoundEntries.COOLING)


        // Universal Crystallizer
        event.create('universal_crystallizer')
            .category('multiblock')
            .setEUIO('in')
            .setMaxIOSize(9, 1, 1, 0) //
            .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
            .setProgressBar(new ResourceTexture("kubejs:textures/gui/progress_bar_crystallization.png"), FillDirection.LEFT_TO_RIGHT) // unused gtm texture, moved here in case it gets removed
            .setSound(GTSoundEntries.COMPUTATION)
    }


    // Small Microverse Projector Recipe Type
    event.create('basic_microverse')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(4, 20, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(new ResourceTexture("kubejs:textures/gui/progress_bar_rocket.png"), FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);
        

    // Advanced Microverse Projector Recipe Type
    event.create('advanced_microverse')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(4, 16, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(new ResourceTexture("kubejs:textures/gui/progress_bar_rocket.png"), FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);


    // Advanced Microverse Projector II Recipe Type
    event.create('advanced_microverse_ii')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(8, 16, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(new ResourceTexture("kubejs:textures/gui/progress_bar_rocket.png"), FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);


    // Advanced Microverse Projector III Recipe Type
    event.create('advanced_microverse_iii')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(12, 16, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(new ResourceTexture("kubejs:textures/gui/progress_bar_rocket.png"), FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);


    // Naquadah Reactor I Recipe type
    event.create('naquadah_reactor_i')
        .category('multiblock')
        .setEUIO('out')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);


    // Naqudah Reactor II Recipe Type
    event.create('naquadah_reactor_ii')
        .category('multiblock')
        .setEUIO('out')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);


    // Empowerer
    // event.create('empowerment')
    //     .category('multiblock')
    //     .setEUIO('in')
    //     .setMaxIOSize(5, 1, 0, 0)
    //     .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    //     .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    //     .setSound(GTSoundEntries.COOLING);


    // Greenhouse
    event.create('greenhouse')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(3, 3, 1, 0) //
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    // Subatomic Digital Assembler
    event.create('subatomic_digital_assembly')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0) //
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(new ResourceTexture("kubejs:textures/gui/progress_bar_subatomic.png"), FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    // Large Material Press
    event.create('large_material_press')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_COMPRESS, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPRESSOR)
        .setIconSupplier(() => Item.of('gtceu:large_material_press'))


    //Omnic Forge
    event.create('omnic_forge')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_CRYSTALLIZATION, FillDirection.LEFT_TO_RIGHT)

    //Quintessence Infuser
    event.create('quintessence_infuser')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(new ResourceTexture("kubejs:textures/gui/progress_bar_xp.png"), FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE)

    //Rock Cycle Simulator
    event.create('rock_cycle_simulator')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_MACERATE, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE)

    //Discharger
    event.create('discharger')
        .category('multiblock')
        .setEUIO('out')
        .setMaxIOSize(9, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

GTCEuStartupEvents.registry('gtceu:machine', event => {


    GCyMMachines.LARGE_MATERIAL_PRESS.setRecipeTypes([GTRecipeTypes.BENDER_RECIPES, GTRecipeTypes.COMPRESSOR_RECIPES, GTRecipeTypes.FORGE_HAMMER_RECIPES, GTRecipeTypes.FORMING_PRESS_RECIPES, GTRecipeTypes.get('large_material_press')])


    // Normal mode-exclusive multis            
    if (!isHardMode) {
        // Super Computer
        event.create('simulation_supercomputer', 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeTypes('simulation_supercomputer')
            .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
            .pattern(definition => FactoryBlockPattern.start()
                .aisle("CCCCC", "VEEEV", "VEEEV", "VEEEV", "CCCCC")
                .aisle("CCCCC", "QOOOQ", "VOOOV", "QOOOQ", "CCCCC")
                .aisle("CCCCC", "QOOOQ", "VO#OV", "QOOOQ", "CCCCC")
                .aisle("CCCCC", "QOOOQ", "VOOOV", "QOOOQ", "CCCCC")
                .aisle("CCSCC", "VEQEV", "VQQQV", "VEQEV", "CCCCC")
                .where('S', Predicates.controller(Predicates.blocks(definition.get())))
                .where('V', Predicates.blocks('gtceu:vibration_safe_casing'))
                .where('E', Predicates.blocks('gtceu:enderium_block'))
                .where('O', Predicates.blocks('gtceu:omnium_block'))
                .where('Q', Predicates.blocks('ae2:quartz_vibrant_glass'))
                .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
                .where('C', Predicates.blocks("gtceu:atomic_casing").setMinGlobalLimited(40)
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where('#', Predicates.any())
                .build())
            .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing",
                "gtceu:block/multiblock/implosion_compressor", false)

        // Super Fabricator
        event.create('loot_superfabricator', 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeTypes('loot_superfabricator')
            .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
            .pattern(definition => FactoryBlockPattern.start()
                .aisle("CCCCC", "VEEEV", "VEEEV", "VEEEV", "CCCCC")
                .aisle("CCCCC", "QOOOQ", "VOOOV", "QOOOQ", "CCCCC")
                .aisle("CCCCC", "QOOOQ", "VO#OV", "QOOOQ", "CCCCC")
                .aisle("CCCCC", "QOOOQ", "VOOOV", "QOOOQ", "CCCCC")
                .aisle("CCSCC", "VEQEV", "VQQQV", "VEQEV", "CCCCC")
                .where('S', Predicates.controller(Predicates.blocks(definition.get())))
                .where('V', Predicates.blocks('gtceu:shock_proof_cutting_casing'))
                .where('E', Predicates.blocks('gtceu:energetic_alloy_block'))
                .where('O', Predicates.blocks('gtceu:omnium_block'))
                .where('Q', Predicates.blocks('ae2:quartz_vibrant_glass'))
                .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
                .where('C', Predicates.blocks("gtceu:atomic_casing").setMinGlobalLimited(40)
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where('#', Predicates.any())
                .build())
            .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing",
                "gtceu:block/multiblock/implosion_compressor", false)
    }

    // Expert mode-exclusive multis            
    if (isHardMode) {

        //Actualization Chamber
        event.create('actualization_chamber', 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeTypes('actualization_chamber')
            .appearanceBlock(GTBlocks.FUSION_CASING)
            .pattern(definition => FactoryBlockPattern.start()
                .aisle("XXX", "GGG", "XXX")
                .aisle("XXX", "GOG", "XXX")
                .aisle("XSX", "GGG", "XXX")
                .where('S', Predicates.controller(Predicates.blocks(definition.get())))
                .where('X', Predicates.blocks("gtceu:fusion_casing").setMinGlobalLimited(9)
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where('G', Predicates.blocks("gtceu:fusion_glass"))
                .where('O', Predicates.blocks("gtceu:fusion_coil"))
                .build())
            .workableCasingRenderer("gtceu:block/casings/fusion/fusion_casing",
                "gtceu:block/multiblock/implosion_compressor", false)

        // Universal Crystallizer
        event.create('universal_crystallizer', 'multiblock')
            .rotationState(RotationState.NON_Y_AXIS)
            .recipeTypes('universal_crystallizer')
            .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
            .appearanceBlock(GCyMBlocks.CASING_LASER_SAFE_ENGRAVING)
            .pattern(definition => FactoryBlockPattern.start()
                .aisle("XXXXXXX", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XXXXXXX")
                .aisle("XXXXXXX", "G#####G", "G#####G", "F#####F", "G#####G", "G#####G", "XGGGGGX")
                .aisle("XXXXXXX", "G#CCC#G", "F#C#C#F", "FTC#CTF", "F#C#C#F", "G#CCC#G", "XGGGGGX")
                .aisle("XXXXXXX", "F#CCC#F", "FT###TF", "FTBRBTF", "FT###TF", "F#CCC#F", "XGGGGGX")
                .aisle("XXXXXXX", "G#CCC#G", "F#C#C#F", "FTC#CTF", "F#C#C#F", "G#CCC#G", "XGGGGGX")
                .aisle("XXXXXXX", "G#####G", "G#####G", "F#####F", "G#####G", "G#####G", "XGGGGGX")
                .aisle("XXXSXXX", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XGGGGGX", "XXXXXXX")
                .where('S', Predicates.controller(Predicates.blocks(definition.get())))
                .where('X', Predicates.blocks("gtceu:laser_safe_engraving_casing").setMinGlobalLimited(80)
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
                .where('#', Predicates.air())
                .where('C', Predicates.blocks("gtceu:fusion_coil"))
                .where('F', Predicates.blocks("gtceu:berkelium_frame"))
                .where('G', Predicates.blocks("gtceu:fusion_glass"))
                .where('T', Predicates.blocks("gtceu:taranium_block"))
                .where('B', Predicates.blocks("kubejs:omnic_matrix_machine_casing"))
                .where('R', Predicates.blocks("kubejs:enderium_micro_miner_core"))
                .build())
            .workableCasingRenderer("gtceu:block/casings/gcym/laser_safe_engraving_casing",
                "gtceu:block/multiblock/implosion_compressor", false)
    }


    // Basic Microverse Projector
    event.create('basic_microverse_projector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('basic_microverse')
        .appearanceBlock(() => Block.getBlock('kubejs:microverse_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CMC", "CVC", "CCC")
            .aisle("CCC", "GDG", "CCC")
            .aisle("CSC", "CGC", "CCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('kubejs:starry_diamond_block'))
            .where('C', Predicates.blocks("kubejs:microverse_casing").setMinGlobalLimited(12)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('V', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .build())
        .workableCasingRenderer("kubejs:block/microverse/casing",
            "gtceu:block/multiblock/implosion_compressor", false)


    // Advanced Microverse Projector
    event.create('advanced_microverse_projector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('advanced_microverse')
        .appearanceBlock(() => Block.getBlock('kubejs:microverse_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "CGGGC", "CGGGC", "CGGGC", "CCCCC")
            .aisle("CVCVC", "GDDDG", "GDDDG", "GDDDG", "CVCVC")
            .aisle("CCCCC", "GDDDG", "GD#DG", "GDDDG", "CCCCC")
            .aisle("CVCVC", "GDDDG", "GDDDG", "GDDDG", "CVCVC")
            .aisle("CCSCC", "CGGGC", "CGGGC", "CGGGC", "CCCCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('kubejs:starry_diamond_block'))
            .where('C', Predicates.blocks("kubejs:microverse_casing").setMinGlobalLimited(48)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('V', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where('#', Predicates.air())
            .build())
        .workableCasingRenderer("kubejs:block/microverse/casing",
            "gtceu:block/multiblock/implosion_compressor", false)


    // Advanced Microverse Projecctor II
    event.create('advanced_microverse_projector_ii', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('advanced_microverse_ii')
        .appearanceBlock(() => Block.getBlock('kubejs:microverse_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#########", "#########", "##CCCCC##", "##CVCVC##", "##CCCCC##", "##CVCVC##", "##CCCCC##", "#########", "#########")
            .aisle("#########", "##CGGGC##", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "##CGGGC##", "#########")
            .aisle("##CCCCC##", "#CDDDDDC#", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "#CDDDDDC#", "##CCCCC##")
            .aisle("##CGGGC##", "#GDDDDDG#", "CDDDDDDDC", "GDDAAADDG", "GDDAAADDG", "GDDAAADDG", "CDDDDDDDC", "#GDDDDDG#", "##CGGGC##")
            .aisle("##CGGGC##", "#GDDDDDG#", "CDDDDDDDC", "GDDAAADDG", "GDDAAADDG", "GDDAAADDG", "CDDDDDDDC", "#GDDDDDG#", "##CGGGC##")
            .aisle("##CGGGC##", "#GDDDDDG#", "CDDDDDDDC", "GDDAAADDG", "GDDAAADDG", "GDDAAADDG", "CDDDDDDDC", "#GDDDDDG#", "##CGGGC##")
            .aisle("##CCCCC##", "#CDDDDDC#", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "#CDDDDDC#", "##CCCCC##")
            .aisle("#########", "##CGGGC##", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "##CGGGC##", "#########")
            .aisle("#########", "#########", "##CCSCC##", "##CGGGC##", "##CGGGC##", "##CGGGC##", "##CCCCC##", "#########", "#########")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('kubejs:starry_diamond_block'))
            .where('C', Predicates.blocks("kubejs:microverse_casing").setMinGlobalLimited(128)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('V', Predicates.blocks(GTBlocks.CASING_TITANIUM_PIPE.get()))
            .where('A', Predicates.air())
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/microverse/casing",
            "gtceu:block/multiblock/implosion_compressor", false)


    // Naquadah Reactor I
    event.create('naquadah_reactor_i', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('naquadah_reactor_i')
        .appearanceBlock(GCyMBlocks.CASING_REACTION_SAFE)
        .generator(true)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH]) //required to function.. Probably so it can output energy and take items in at the same time? Not entirely sure. But it made it functional! Yippie
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "PGP", "PGP", "PGP", "CCC")
            .aisle("CCC", "GNG", "GNG", "GOG", "CCC")
            .aisle("CSC", "PGP", "PGP", "PGP", "CCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            .where('C', Predicates.blocks("gtceu:reaction_safe_mixing_casing").setMinGlobalLimited(12)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('P', Predicates.blocks("ae2:spatial_pylon"))
            .where('N', Predicates.blocks("gtceu:duranium_block"))
            .where('O', Predicates.blocks("gtceu:black_steel_block"))
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/reaction_safe_mixing_casing",
            "gtceu:block/multiblock/implosion_compressor", false)


    // Naquadah Reactor II
    event.create('naquadah_reactor_ii', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('naquadah_reactor_ii')
        .appearanceBlock(GCyMBlocks.CASING_REACTION_SAFE)
        .generator(true)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "PGP", "PGP", "PGP", "PGP", "CCC")
            .aisle("CCC", "GNG", "GNG", "GNG", "GOG", "CCC")
            .aisle("CSC", "PGP", "PGP", "PGP", "PGP", "CCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            .where('C', Predicates.blocks("gtceu:reaction_safe_mixing_casing").setMinGlobalLimited(12)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('P', Predicates.blocks("ae2:spatial_pylon"))
            .where('N', Predicates.blocks('gtceu:ruthenium_trinium_americium_neutronate_block'))
            .where('O', Predicates.blocks("gtceu:omnium_block"))
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/reaction_safe_mixing_casing",
            "gtceu:block/multiblock/implosion_compressor", false)


    //Swapped out in favor of just giving the crafting core early
    // Code may be recycled for a lategame empowerer?

    // event.create('empowerment', 'multiblock')
    //     .rotationState(RotationState.NON_Y_AXIS)
    //     .recipeTypes('empowerment')
    //     .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
    //     .pattern(definition => FactoryBlockPattern.start()
    //         .aisle("###E###", "###I###")
    //         .aisle("###W###", "#######")
    //         .aisle("###W###", "#######")
    //         .aisle("EWWOWWE", "I##I##I")
    //         .aisle("###W###", "#######")
    //         .aisle("###W###", "#######")
    //         .aisle("###C###", "###I###")
    //         .where('C', Predicates.controller(Predicates.blocks(definition.get())))
    //         .where('W', Predicates.blocks("gtceu:aluminium_quadruple_wire"))
    //         .where('E', Predicates.blocks("kubejs:empowerer_casing")
    //             .or(Predicates.blocks("gtceu:mv_energy_input_hatch").setExactLimit(1)))
    //         .where('I', Predicates.blocks("gtceu:ulv_input_bus"))
    //         .where('O', Predicates.blocks("gtceu:ulv_output_bus"))
    //         .where('#', Predicates.any())
    //         .build())
    //     .workableCasingRenderer("kubejs:block/empowerer_casing",
    //         "gtceu:block/multiblock/implosion_compressor", false)


    // Greenhouse
    event.create('greenhouse', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('greenhouse')
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("AAAAA", "UBBBU", "UBBBU", "UUBUU", "#UUU#")
            .aisle("ACCCA", "B###B", "B###B", "BB#BB", "#BBB#")
            .aisle("ACCCA", "B###B", "B###B", "BB#BB", "#BBB#")
            .aisle("ACCCA", "B###B", "B###B", "BB#BB", "#BBB#")
            .aisle("ACCCA", "B###B", "B###B", "BB#BB", "#BBB#")
            .aisle("ACCCA", "B###B", "B###B", "BB#BB", "#BBB#")
            .aisle("AA@AA", "UBBBU", "UBBBU", "UUBUU", "#UUU#")
            .where('A', Predicates.blocks("gtceu:solid_machine_casing").setMinGlobalLimited(8)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('U', Predicates.blocks("gtceu:solid_machine_casing"))
            .where('B', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get())
                .or(Predicates.blockTag(Tags.block("minecraft:doors")).setMaxGlobalLimited(4)))
            .where('C', Predicates.blockTag(Tags.block("minecraft:dirt"))
                .or(Predicates.blocks("minecraft:farmland")))
            .where("#", Predicates.any())
            .where("@", Predicates.controller(Predicates.blocks(definition.get())))
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor", false)

    // Omnic Forge
    event.create('omnic_forge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('omnic_forge')
        .appearanceBlock(() => Block.getBlock('kubejs:omnic_matrix_machine_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#########", "#########", "####O####", "###CCC###", "##OCCCO##", "###CCC###", "####O####", "#########", "#########")
            .aisle("#########", "####O####", "##GGOGG##", "##GODOG##", "#OODNDOO#", "##GODOG##", "##GGOGG##", "####O####", "#########")
            .aisle("####O####", "##GGOGG##", "#GAAAAAG#", "#GAAAAAG#", "OOAADAAOO", "#GAAAAAG#", "#GAAAAAG#", "##GGOGG##", "####O####")
            .aisle("###CCC###", "##GODOG##", "#GAAAAAG#", "COAAAAAOC", "CDAADAADC", "COAAAAAOC", "#GAAAAAG#", "##GODOG##", "###CCC###")
            .aisle("##OCCCO##", "#OODNDOO#", "OOAADAAOO", "CDAADAADC", "CNDDBDDNC", "CDAADAADC", "OOAADAAOO", "#OODNDOO#", "##OCCCO##")
            .aisle("###CCC###", "##GODOG##", "#GAAAAAG#", "COAAAAAOC", "CDAADAADC", "COAAAAAOC", "#GAAAAAG#", "##GODOG##", "###CCC###")
            .aisle("####O####", "##GGOGG##", "#GAAAAAG#", "#GAAAAAG#", "OOAADAAOO", "#GAAAAAG#", "#GAAAAAG#", "##GGOGG##", "####O####")
            .aisle("#########", "####O####", "##GGOGG##", "##GODOG##", "#OODNDOO#", "##GODOG##", "##GGOGG##", "####O####", "#########")
            .aisle("#########", "#########", "####O####", "###CCC###", "##OCSCO##", "###CCC###", "####O####", "#########", "#########")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('B', Predicates.blocks('gtceu:crystal_matrix_block'))
            .where('N', Predicates.blocks('gtceu:sculk_superconductor_block'))
            .where('D', Predicates.blocks('gtceu:cryolobus_frame'))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('O', Predicates.blocks('kubejs:omnic_matrix_machine_casing'))
            .where('C', Predicates.blocks('kubejs:omnic_matrix_machine_casing')
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1))
            )
            .where('A', Predicates.air())
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer(new ResourceLocation('kubejs', 'block/omnium/casing'),
            "gtceu:block/multiblock/implosion_compressor", false)


    // Microverse Projector III
    // Also a parrelizable Projector for the previous tiers
    event.create('hyperbolic_microverse_projector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(['basic_microverse', 'advanced_microverse', 'advanced_microverse_ii', 'advanced_microverse_iii'])
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('kubejs:microverse_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("###CCCCC###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###CCCCC###")
            .aisle("#CCCCVCCCC#", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "#CCCCVCCCC#")
            .aisle("#CVCCCCCVC#", "###CGGGC###", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###CGGGC###", "#CVCCCCCVC#")
            .aisle("CCCCCCCCCCC", "N#CCDDDCC#N", "N##CGGGC##N", "N#########N", "N#########N", "N#########N", "N#########N", "N#########N", "N##CGGGC##N", "N#CCDDDCC#N", "CCCCCCCCCCC")
            .aisle("CCCCCCCCCCC", "##GDDDDDG##", "###GYDYG###", "####YGY####", "####YGY####", "####YGY####", "####YGY####", "####YGY####", "###GYDYG###", "##GDDDDDG##", "CCCCCCCCCCC")
            .aisle("CVCCCWCCCVC", "##GDDDDDG##", "###GDDDG###", "####GDG####", "####GDG####", "####GDG####", "####GDG####", "####GDG####", "###GDDDG###", "##GDDDDDG##", "CVCCCWCCCVC")
            .aisle("CCCCCCCCCCC", "##GDDDDDG##", "###GYDYG###", "####YGY####", "####YGY####", "####YGY####", "####YGY####", "####YGY####", "###GYDYG###", "##GDDDDDG##", "CCCCCCCCCCC")
            .aisle("CCCCCCCCCCC", "N#CCDDDCC#N", "N##CGGGC##N", "N#########N", "N#########N", "N#########N", "N#########N", "N#########N", "N##CGGGC##N", "N#CCDDDCC#N", "CCCCCCCCCCC")
            .aisle("#CVCCCCCVC#", "###CGGGC###", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###CGGGC###", "#CVCCCCCVC#")
            .aisle("#CCCCVCCCC#", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "###########", "#CCCCVCCCC#")
            .aisle("###CCSCC###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###N###N###", "###CCCCC###")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('kubejs:starry_diamond_block'))
            .where('C', Predicates.blocks("kubejs:microverse_casing").setMinGlobalLimited(200)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1)))
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            .where('N', Predicates.blocks("gtceu:omnium_frame"))
            .where('V', Predicates.blocks("ae2:quartz_vibrant_glass"))
            .where('W', Predicates.blocks("kubejs:universal_warp_core"))
            .where('Y', Predicates.blocks("gcyr:dyson_sphere_casing"))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/microverse/casing",
            "gtceu:block/multiblock/implosion_compressor", false)


    // Advanced Assembly line
    // Could have it's own recipes as well
    event.create('dimensional_superassembler', 'multiblock')
        .rotationState(RotationState.ALL)
        .recipeTypes('assembly_line')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('kubejs:dimensional_stabilization_netherite_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#########", "###CCC###", "##CCCCC##", "#CCCCCCC#", "#CCCCCCC#", "#CCCCCCC#", "##CCCCC##", "###CCC###", "#########")
            .aisle("##CCCCC##", "#CCCCCCC#", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", "#CCCCCCC#", "##CCCCC##")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("#########", "#I#####I#", "##LLOLL##", "##GFAFG##", "##GFAFG##", "##RLLLR##", "##LM#ML##", "#I#####I#", "#########")
            .aisle("##CCCCC##", "#CCCCCCC#", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", "CCCCCCCCC", "#CCCCCCC#", "##CCCCC##")
            .aisle("#########", "###CCC###", "##CCCCC##", "#CCCCCCC#", "#CCCSCCC#", "#CCCCCCC#", "##CCCCC##", "###CCC###", "#########")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks("kubejs:dimensional_stabilization_netherite_casing").setMinGlobalLimited(200)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1)))
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            .where('L', Predicates.blocks(GCyMBlocks.CASING_LARGE_SCALE_ASSEMBLING.get()))
            .where('O', Predicates.blocks(GTBlocks.CASING_ASSEMBLY_LINE.get()))
            .where('F', Predicates.blocks(GTBlocks.FUSION_CASING_MK3.get()))
            .where('R', Predicates.blocks(GTBlocks.CASING_GRATE.get())
                .or(Predicates.abilities(PartAbility.DATA_ACCESS).setExactLimit(1)))
            .where('M', Predicates.blocks("kubejs:omnic_matrix_machine_casing"))
            .where('I', Predicates.blocks("gtceu:infinity_frame"))
            .where('A', Predicates.air())
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/netherite/casing",
            "gtceu:block/multiblock/implosion_compressor", false)

    //Extra Large Chemical Reactor

    event.create('extra_large_chemical_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('large_chemical_reactor')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('gtceu:inert_machine_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("ACCCCCA", "A#AAA#A", "A#AAA#A", "A#AAA#A", "A#AAA#A", "ACCCCCA")
            .aisle("CCCCCCC", "#CCCCC#", "#GGGGG#", "#GGGGG#", "#CCCCC#", "CCCCCCC")
            .aisle("CCCCCCC", "ACPPPCA", "AGKKKGA", "AGKKKGA", "ACPPPCA", "CCCCCCC")
            .aisle("CCCCCCC", "ACPPPCA", "AGKPKGA", "AGKPKGA", "ACPPPCA", "CCCCCCC")
            .aisle("CCCCCCC", "ACPPPCA", "AGKKKGA", "AGKKKGA", "ACPPPCA", "CCCCCCC")
            .aisle("CCCCCCC", "#CCCCC#", "#GGGGG#", "#GGGGG#", "#CCCCC#", "CCCCCCC")
            .aisle("ACCSCCA", "A#AAA#A", "A#AAA#A", "A#AAA#A", "A#AAA#A", "ACCCCCA")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('gtceu:inert_machine_casing').setMinGlobalLimited(43)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1)))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('P', Predicates.blocks('gtceu:ptfe_pipe_casing'))
            .where('#', Predicates.blocks('gtceu:naquadah_alloy_frame'))
            .where('K', Predicates.blocks('gtceu:trinium_coil_block'))
            .where('A', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_inert_ptfe",
            "gtceu:block/multiblock/implosion_compressor", false)

    //Quintessence Infuser
    event.create('quintessence_infuser', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('quintessence_infuser')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('kubejs:dark_soularium_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#CCC#", "CCCCC", "HGGGH", "HGGGH", "HGGGH", "CCCCC", "#CCC#")
            .aisle("CCCCC", "COOOC", "G#O#G", "G#O#G", "G#O#G", "C#O#C", "CCCCC")
            .aisle("CCCCC", "COPOC", "GOPOG", "GOPOG", "GOPOG", "COPOC", "CCMCC")
            .aisle("CCCCC", "COOOC", "G#O#G", "G#O#G", "G#O#G", "C#O#C", "CCCCC")
            .aisle("#CSC#", "CCCCC", "HGGGH", "HGGGH", "HGGGH", "CCCCC", "#CCC#")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('H', Predicates.blocks('enderio:ensouled_chassis'))
            .where('O', Predicates.blocks('gtceu:tungsten_frame'))
            .where('G', Predicates.blocks('gtceu:fusion_glass'))
            .where('P', Predicates.blocks('gtceu:tungstensteel_pipe_casing'))
            .where('C', Predicates.blocks('kubejs:dark_soularium_casing').setMinGlobalLimited(40)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1)))
            .where('M', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/soularium/casing",
            "gtceu:block/multiblock/implosion_compressor", false)

    // Rock Cycle Simulator

    event.create('rock_cycle_simulator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('rock_cycle_simulator')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('gtceu:high_temperature_smelting_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCCCC", "CCCCCCC", "CCCCCCC", "CCCCCCC")
            .aisle("CCCCCCC", "TMMOIIT", "TMCCCIT", "CCCCCCC")
            .aisle("CCCSCCC", "CTTTTTC", "CTCHCTC", "CCCCCCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('I', Predicates.blocks("minecraft:blue_ice"))
            .where('M', Predicates.blocks("minecraft:magma_block"))
            .where('O', Predicates.blocks("gtceu:titanium_pipe_casing"))
            .where('T', Predicates.blocks("gtceu:tempered_glass"))
            .where('H', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('C', Predicates.blocks("gtceu:high_temperature_smelting_casing").setMinGlobalLimited(20)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1)))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/high_temperature_smelting_casing",
            "gtceu:block/multiblock/implosion_compressor", false)

    // Atmospheric Accumulator

    event.create('atmospheric_accumulator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes(GTRecipeTypes.GAS_COLLECTOR_RECIPES)
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('gtceu:corrosion_proof_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCHCC", "C###C", "CCCCC", "C###C", "CCCCC", "C###C", "CCCCC")
            .aisle("CCCCC", "#GIG#", "CGGGC", "#GIG#", "CCCCC", "#GIG#", "CIIIC")
            .aisle("CCCCC", "#IOI#", "CGOGC", "#IOI#", "CCOCC", "#IOI#", "CIOIC")
            .aisle("CCCCC", "#GIG#", "CGGGC", "#GIG#", "CCCCC", "#GIG#", "CIIIC")
            .aisle("CCSCC", "C###C", "CCCCC", "C###C", "CCCCC", "C###C", "CCCCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('I', Predicates.blocks("gtceu:engine_intake_casing"))
            .where('G', Predicates.blocks("gtceu:assembly_line_grating"))
            .where('H', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('O', Predicates.blocks("gtceu:titanium_pipe_casing"))
            .where('C', Predicates.blocks("gtceu:corrosion_proof_casing").setMinGlobalLimited(70)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1)))
            .where('#', Predicates.air())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/high_temperature_smelting_casing",
            "gtceu:block/multiblock/implosion_compressor", false)

    // Matter Alterator

        event.create('matter_alterator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('atomic_reconstruction')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.NON_PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('gtceu:laser_safe_engraving_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#CHC#######", "#CGC#######", "#CGC#######", "#CGC#######", "#CCC#######",)
            .aisle("CCCCC#F###F", "C###CCCCCCC", "C###CGGGGGC", "C###CCCCCCC", "CCCCC######",)
            .aisle("CCCCC######", "G#CCCCCCCCC", "G#F######PC", "G#CCCGGGGGC", "CCCCC######",)
            .aisle("CCCCC#F###F", "C###CCCCCCC", "C###CGGGGGC", "C###CCCCCCC", "CCCCC######",)
            .aisle("#CSC#######", "#CGC#######", "#CGC#######", "#CGC#######", "#CCC#######",)
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks("gtceu:laminated_glass"))
            .where('H', Predicates.abilities(PartAbility.MAINTENANCE))
            .where('P', Predicates.blocks("gtceu:palis_block"))
            .where('F', Predicates.blocks("gtceu:hastelloy_c_276_frame"))
            .where('C', Predicates.blocks("gtceu:laser_safe_engraving_casing").setMinGlobalLimited(50)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setExactLimit(1)))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/laser_safe_engraving_casing",
            "gtceu:block/multiblock/implosion_compressor", false)

    // Subatomic Digital Assembler
    event.create('subatomic_digital_assembler', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('subatomic_digital_assembly')
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#CCCCC#", "#CCCCC#", "#CGGGC#", "#CGGGC#", "#CGGGC#", "#CGGGC#", "#CGGGC#", "#CCCCC#", "#CCCCC#")
            .aisle("CCCCCCC", "CHMMMHC", "CHAAAHC", "CHAAAHC", "CHAAAHC", "CHAAAHC", "CHAAAHC", "CHMMMHC", "CCCCCCC")
            .aisle("CCCCCCC", "CMXYXMC", "GAXYXAG", "GAXYXAG", "GAXYXAG", "GAXYXAG", "GAXYXAG", "CMXYXMC", "CCCCCCC")
            .aisle("CCCCCCC", "CMYYYMC", "GAYYYAG", "GAYYYAG", "GAYYYAG", "GAYYYAG", "GAYYYAG", "CMYYYMC", "CCCCCCC")
            .aisle("CCCCCCC", "CMXYXMC", "GAXYXAG", "GAXYXAG", "GAXYXAG", "GAXYXAG", "GAXYXAG", "CMXYXMC", "CCCCCCC")
            .aisle("CCCCCCC", "CHMMMHC", "CHAAAHC", "CHAAAHC", "CHAAAHC", "CHAAAHC", "CHAAAHC", "CHMMMHC", "CCCCCCC")
            .aisle("CCCCCCC", "CCCCCCC", "#CCCCC#", "#CCCCC#", "#CCCCC#", "#CCCCC#", "#CCCCC#", "CCCCCCC", "CCCCCCC")
            .aisle("CCCCCCC", "#CCCCC#", "#CCCCC#", "#CNNNC#", "###N###", "###N###", "###N###", "#CNNNC#", "CCCCCCC")
            .aisle("#CCCCC#", "##CSC##", "##CCC##", "#######", "#######", "#######", "#######", "#######", "#CCCCC#")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.CLEANROOM_GLASS.get()))
            .where('H', Predicates.blocks(GTBlocks.HIGH_POWER_CASING.get()))
            .where('M', Predicates.blocks("gtceu:crystal_matrix_frame"))
            .where('N', Predicates.blocks("gtceu:naquadah_alloy_frame"))
            .where('X', Predicates.blocks(GTBlocks.COMPUTER_CASING.get()))
            .where('Y', Predicates.blocks(GTBlocks.ADVANCED_COMPUTER_CASING.get()))
            .where('C', Predicates.blocks("gtceu:atomic_casing").setMinGlobalLimited(220)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.COMPUTATION_DATA_RECEPTION).setExactLimit(1)))
            .where('A', Predicates.any())
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing",
            "gtceu:block/multiblock/implosion_compressor", false)
        
    // Discharger
    event.create('discharger', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('discharger')
        .appearanceBlock(() => Block.getBlock('kubejs:cryolobus_casing'))
        .generator(true)
        .pattern(definition => FactoryBlockPattern.start()
        .aisle("    CCC    ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "    CCC    ")
        .aisle("  CCCCCCC  ", "    GGG    ", "    GGG    ", "    GGG    ", "    GGG    ", "    GGG    ", "    GGG    ", "    GGG    ", "  CCCCCCC  ")
        .aisle(" CNCCCCCNC ", "  NG c GN  ", "  NG c GN  ", "  NG   GN  ", "  NG   GN  ", "  NG   GN  ", "  NG c GN  ", "  NG c GN  ", " CNCCCCCNC ")
        .aisle(" CCCCCCCCC ", "  G     G  ", "  G     G  ", "  G     G  ", "  G     G  ", "  G     G  ", "  G     G  ", "  G     G  ", " CCCCCCCCC ")
        .aisle("CCCCCCCCCCC", " G  cFc  G ", " G       G ", " G       G ", " G       G ", " G       G ", " G       G ", " G  cFc  G ", "CCCCCCCCCCC")
        .aisle("CCCCCCCCCCC", " Gc FcF cG ", " Gc  c  cG ", " G   c   G ", " G   T   G ", " G   c   G ", " Gc  c  cG ", " Gc FcF cG ", "CCCCCCCCCCC")
        .aisle("CCCCCCCCCCC", " G  cFc  G ", " G       G ", " G       G ", " G       G ", " G       G ", " G       G ", " G  cFc  G ", "CCCCCCCCCCC")
        .aisle(" CCCCCCCCC ", "  G     G  ", "  G     G  ", "  G     G  ", "  G     G  ", "  G     G  ", "  G     G  ", "  G     G  ", " CCCCCCCCC ")
        .aisle(" CNCCCCCNC ", "  NG c GN  ", "  NG c GN  ", "  NG   GN  ", "  NG   GN  ", "  NG   GN  ", "  NG c GN  ", "  NG c GN  ", " CNCCCCCNC ")
        .aisle("  CCCCCCC  ", "    GGG    ", "    GGG    ", "    GGG    ", "    GGG    ", "    GGG    ", "    GGG    ", "    GGG    ", "  CCCCCCC  ")
        .aisle("    CYC    ", "           ", "           ", "           ", "           ", "           ", "           ", "           ", "    CCC    ")
            .where('Y', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks("kubejs:cryolobus_casing").setMinGlobalLimited(160)
            .or(Predicates.autoAbilities(definition.getRecipeTypes()))
            .or(Predicates.abilities(PartAbility.MAINTENANCE).setExactLimit(1)))
            .where('c', Predicates.blocks("kubejs:cryolobus_casing"))
            .where('N', Predicates.blocks(GCyMBlocks.CASING_NONCONDUCTING.get()))
            .where('F', Predicates.blocks("gtceu:cryolobus_frame"))
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .where('T', Predicates.blocks("minecraft:sculk_catalyst"))
            .where(' ', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/cryolobus/cryolobus_casing",
            "gtceu:block/multiblock/implosion_compressor", false)

})

