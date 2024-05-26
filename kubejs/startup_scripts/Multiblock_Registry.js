const Tags = Java.loadClass('dev.latvian.mods.kubejs.util.Tags')

// Small Microverse Projector Recipe Type

GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('basic_microverse')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(4, 16, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);


    // Advanced Microverse Projector Recipe Type

    event.create('advanced_microverse')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(4, 16, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);


    // Advanced Microverse Projector II Recipe Type

    event.create('advanced_microverse_ii')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(8, 16, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING);

    // Advanced Microverse Projector III Recipe Type

    event.create('advanced_microverse_iii')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(12, 16, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
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

    // Sculk Reverberator
    // To be replaced with a coremod version with all the mechanics
    // https://ptb.discord.com/channels/914926812948234260/1229929078547550238/1241448205217169528
    event.create('sculk_reverberator')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 1, 0) //
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    // Subatomic Digital Assembler
    event.create('subatomic_digital_assembly')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0) //
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    // Simulation Supercomputer
    event.create('simulation_supercomputer')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 0, 0) //
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)
        .setSound(GTSoundEntries.ASSEMBLER)

    // Loot Superfabricator
    event.create('loot_superfabricator')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 1, 0, 0) //
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COMPUTATION)


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
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)

        //Quintessence Infuser
    event.create('quintessence_infuser')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(2, 2, 1, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.CENTRIFUGE)

        //Rock Cycle Simulator
    event.create('rock_cycle_simulator')
    .category('multiblock')
    .setEUIO('in')
    .setMaxIOSize(1, 1, 0, 0)
    .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
    .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    .setSound(GTSoundEntries.CENTRIFUGE)

})

// Basic Microverse Projector
GTCEuStartupEvents.registry('gtceu:machine', event => {

    GCyMMachines.LARGE_MATERIAL_PRESS.setRecipeTypes([GTRecipeTypes.BENDER_RECIPES, GTRecipeTypes.COMPRESSOR_RECIPES, GTRecipeTypes.FORGE_HAMMER_RECIPES, GTRecipeTypes.FORMING_PRESS_RECIPES, GTRecipeTypes.get('large_material_press')])

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



    event.create('naquadah_reactor_ii', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('naquadah_reactor_ii')
        .appearanceBlock(GCyMBlocks.CASING_REACTION_SAFE)
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
            .aisle("CCC", "CGC", "CGC", "CGC", "CCC",)
            .aisle("CDC", "G#G", "G#G", "G#G", "CGC",)
            .aisle("CSC", "CGC", "CGC", "CGC", "CCC",)
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blockTag(Tags.block("minecraft:dirt")))
            .where('C', Predicates.blocks("gtceu:solid_machine_casing").setMinGlobalLimited(20)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor", false)

    // Sculk Reverberator
    event.create('sculk_reverberator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('sculk_reverberator')
        .appearanceBlock(() => Block.getBlock('kubejs:sculk_compound_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#CCC#", "#GGG#", "#GGG#", "#GGG#", "#GGG#", "#GGG#", "#CCC#")
            .aisle("CCCCC", "CAIAC", "GAAAG", "GAAAG", "GAAAG", "CAIAC", "CCCCC")
            .aisle("CCCCC", "CIMIC", "CAAAC", "CIFIC", "CAAAC", "CIMIC", "CCCCC")
            .aisle("CCCCC", "CAIAC", "GAAAG", "GAAAG", "GAAAG", "CAIAC", "CCCCC")
            .aisle("#CSC#", "#GGG#", "#GGG#", "#GGG#", "#GGG#", "#GGG#", "#CCC#")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('C', Predicates.blocks('kubejs:sculk_compound_casing').setMinGlobalLimited(50)
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
            .where('I', Predicates.blocks('gtceu:hsse_frame'))
            .where('M', Predicates.blocks('gtceu:assembly_line_unit'))
            .where('F', Predicates.blocks('gtceu:crystal_matrix_block'))
            .where('A', Predicates.air())
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/sculk_compound/casing",
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

    // Super Computer
    event.create('simulation_supercomputer', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('simulation_supercomputer')
        .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "VEEEV", "VEEEV", "VEEEV", "CCCCC")
            .aisle("CCCCC", "QOOOQ", "VOOOV", "QOOOQ", "CCCCC")
            .aisle("CCCCC", "QOOOQ", "VO#OV", "QOOOQ", "CCMCC")
            .aisle("CCCCC", "QOOOQ", "VOOOV", "QOOOQ", "CCCCC")
            .aisle("CCSCC", "VEQEV", "VQQQV", "VEQEV", "CCCCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('V', Predicates.blocks('gtceu:vibration_safe_casing'))
            .where('E', Predicates.blocks('gtceu:enderium_block'))
            .where('O', Predicates.blocks('gtceu:omnium_block'))
            .where('Q', Predicates.blocks('ae2:quartz_vibrant_glass'))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('C', Predicates.blocks("gtceu:atomic_casing").setMinGlobalLimited(40)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))) // tried putting maint hatch here, but its going to be optional and not required for the multiblock then
            .where('M', Predicates.abilities(PartAbility.MAINTENANCE)) // temporary bandaid, someone make it so that it can be placed anywhere
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
            .aisle("CCCCC", "QOOOQ", "VO#OV", "QOOOQ", "CCMCC")
            .aisle("CCCCC", "QOOOQ", "VOOOV", "QOOOQ", "CCCCC")
            .aisle("CCSCC", "VEQEV", "VQQQV", "VEQEV", "CCCCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('V', Predicates.blocks('gtceu:shock_proof_cutting_casing'))
            .where('E', Predicates.blocks('gtceu:energetic_alloy_block'))
            .where('O', Predicates.blocks('gtceu:omnium_block'))
            .where('Q', Predicates.blocks('ae2:quartz_vibrant_glass'))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('C', Predicates.blocks("gtceu:atomic_casing").setMinGlobalLimited(40)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))) // tried putting maint hatch here, but its going to be optional and not required for the multiblock then
            .where('M', Predicates.abilities(PartAbility.MAINTENANCE)) // temporary bandaid, someone make it so that it can be placed anywhere
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing",
            "gtceu:block/multiblock/implosion_compressor", false)

    event.create('omnic_forge', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('omnic_forge')
        .appearanceBlock(() => Block.getBlock('kubejs:omnic_matrix_machine_casing'))
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
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
            .where('D', Predicates.blocks('gtceu:sculk_compound_frame'))
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
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
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
            .where('N', Predicates.blocks("gtceu:netherite_frame"))
            .where('V', Predicates.blocks("ae2:quartz_vibrant_glass"))
            .where('W', Predicates.blocks("kubejs:warp_core"))
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
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
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

    // Sculk Reactor
    event.create('sculk_reactor', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('sculk_reverberator')
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
        .appearanceBlock(() => Block.getBlock('kubejs:sculk_compound_casing'))
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("####KKKKKKK####", "####KKKKKKK####", "####NN###NN####", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "######CCC######", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "####NN###NN####", "####KKKKKKK####", "####KKKKKKK####")
            .aisle("##KKKKKKKKKKK##", "##KKKKKKKKKKK##", "##TNN#DDD#NNT##", "##TNN##D##NNT##", "##T####D####T##", "###############", "###############", "###############", "###############", "###############", "###############", "######WWW######", "####CCFFFCC####", "######WWW######", "###############", "###############", "###############", "###############", "###############", "###############", "##T####D####T##", "##TNN##D##NNT##", "##TNN#DDD#NNT##", "##KKKKKKKKKKK##", "##KKKKKKKKKKK##")
            .aisle("#KKKKKKKKKKKKK#", "#KKKKKKKKKKKKK#", "#TT##DDFDD##TT#", "#TT###DFD###TT#", "#TT###DFD###TT#", "##T####D####T##", "##T####D####T##", "##TN#######NT##", "##TN#######NT##", "##TT##TTT##TT##", "##T#########T##", "##T#WW#W#WW#T##", "##TCFFWFWFFCT##", "##T#WW#W#WW#T##", "##T#########T##", "##TT##TTT##TT##", "##TN#######NT##", "##TN#######NT##", "##T####D####T##", "##T####D####T##", "#TT###DFD###TT#", "#TT###DFD###TT#", "#TT##DDFDD##TT#", "#KKKKKKKKKKKKK#", "#KKKKKKKKKKKKK#")
            .aisle("#KKKKKKKKKKKKK#", "#KKKKKKKKKKKKK#", "#N####DDD####N#", "#N#####D#####N#", "#######D#######", "######DFD######", "######DFD######", "##N####D####N##", "##NNN##D##NNN##", "##TTTTTDTTTTT##", "#######D#######", "###W###D###W###", "##CFCCWFWCCFC##", "###W###D###W###", "#######D#######", "##TTTTTDTTTTT##", "##NNN##D##NNN##", "##N####D####N##", "######DFD######", "######DFD######", "#######D#######", "#N#####D#####N#", "#N####DDD####N#", "#KKKKKKKKKKKKK#", "#KKKKKKKKKKKKK#")
            .aisle("KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK", "NN###########NN", "#N###########N#", "###############", "#######D#######", "#######D#######", "######DFD######", "###N##DFD##N###", "###TTTDFDTTT###", "######DFD######", "##W###DFD###W##", "#CFC##DFD##CFC#", "##W###DFD###W##", "######DFD######", "###TTTDFDTTT###", "###N##DFD##N###", "######DFD######", "#######D#######", "#######D#######", "###############", "#N###########N#", "NN###########NN", "KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK")
            .aisle("KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK", "N#D#########D#N", "###############", "###############", "###############", "###############", "#######D#######", "#######D#######", "###TTTTDTTTT###", "#######D#######", "##W####D####W##", "#CFC###D###CFC#", "##W####D####W##", "#######D#######", "###TTTTDTTTT###", "#######D#######", "#######D#######", "###############", "###############", "###############", "###############", "N#D#########D#N", "KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK")
            .aisle("KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK", "#DDD#######DDD#", "##D#########D##", "##D#########D##", "###D#######D###", "###D#######D###", "####D#####D####", "####D#####D####", "##TTDTTTTTDTT##", "####D#####D####", "#W##D#####D##W#", "CFWWD#####DWWFC", "#W##D#####D##W#", "####D#####D####", "##TTDTTTTTDTT##", "####D#####D####", "####D#####D####", "###D#######D###", "###D#######D###", "##D#########D##", "##D#########D##", "#DDD#######DDD#", "KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK")
            .aisle("KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK", "#DFD#######DFD#", "#DFD#######DFD#", "#DFD#######DFD#", "##DFD#####DFD##", "##DFD#####DFD##", "###DFD###DFD###", "###DFD###DFD###", "##TDFDTTTDFDT##", "###DFD###DFD###", "#WWDFD###DFDWW#", "CFFFFD###DFFFFC", "#WWDFD###DFDWW#", "###DFD###DFD###", "##TDFDTTTDFDT##", "###DFD###DFD###", "###DFD###DFD###", "##DFD#####DFD##", "##DFD#####DFD##", "#DFD#######DFD#", "#DFD#######DFD#", "#DFD#######DFD#", "KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK")
            .aisle("KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK", "#DDD#######DDD#", "##D#########D##", "##D#########D##", "###D#######D###", "###D#######D###", "####D#####D####", "####D#####D####", "##TTDTTTTTDTT##", "####D#####D####", "#W##D#####D##W#", "CFWWD#####DWWFC", "#W##D#####D##W#", "####D#####D####", "##TTDTTTTTDTT##", "####D#####D####", "####D#####D####", "###D#######D###", "###D#######D###", "##D#########D##", "##D#########D##", "#DDD#######DDD#", "KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK")
            .aisle("KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK", "N#D#########D#N", "###############", "###############", "###############", "###############", "#######D#######", "#######D#######", "###TTTTDTTTT###", "#######D#######", "##W####D####W##", "#CFC###D###CFC#", "##W####D####W##", "#######D#######", "###TTTTDTTTT###", "#######D#######", "#######D#######", "###############", "###############", "###############", "###############", "N#D#########D#N", "KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK")
            .aisle("KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK", "NN###########NN", "#N###########N#", "###############", "#######D#######", "#######D#######", "######DFD######", "###N##DFD##N###", "###TTTDFDTTT###", "######DFD######", "##W###DFD###W##", "#CFC##DFD##CFC#", "##W###DFD###W##", "######DFD######", "###TTTDFDTTT###", "###N##DFD##N###", "######DFD######", "#######D#######", "#######D#######", "###############", "#N###########N#", "NN###########NN", "KKKKKKKKKKKKKKK", "KKKKKKKKKKKKKKK")
            .aisle("#KKKKKKKKKKKKK#", "#KKKKKKKKKKKKK#", "#N####DDD####N#", "#N#####D#####N#", "#######D#######", "######DFD######", "######DFD######", "##N####D####N##", "##NNN##D##NNN##", "##TTTTTDTTTTT##", "#######D#######", "###W###D###W###", "##CFCCWFWCCFC##", "###W###D###W###", "#######D#######", "##TTTTTDTTTTT##", "##NNN##D##NNN##", "##N####D####N##", "######DFD######", "######DFD######", "#######D#######", "#N#####D#####N#", "#N####DDD####N#", "#KKKKKKKKKKKKK#", "#KKKKKKKKKKKKK#")
            .aisle("#KKKKKKKKKKKKK#", "#KKKKKKKKKKKKK#", "#TT##DDFDD##TT#", "#TT###DFD###TT#", "#TT###DFD###TT#", "##T####D####T##", "##T####D####T##", "##TN#######NT##", "##TN#######NT##", "##TT##TTT##TT##", "##T#########T##", "##T#WW#W#WW#T##", "##TCFFWFWFFCT##", "##T#WW#W#WW#T##", "##T#########T##", "##TT##TTT##TT##", "##TN#######NT##", "##TN#######NT##", "##T####D####T##", "##T####D####T##", "#TT###DFD###TT#", "#TT###DFD###TT#", "#TT##DDFDD##TT#", "#KKKKKKKKKKKKK#", "#KKKKKKKKKKKKK#")
            .aisle("##KKKKKKKKKKK##", "##KKKKKKKKKKK##", "##TNN#DDD#NNT##", "##TNN##D##NNT##", "##T####D####T##", "###############", "###############", "###############", "###############", "###############", "###############", "######WWW######", "####CCFFFCC####", "######WWW######", "###############", "###############", "###############", "###############", "###############", "###############", "##T####D####T##", "##TNN##D##NNT##", "##TNN#DDD#NNT##", "##KKKKKKKKKKK##", "##KKKKKKKKKKK##")
            .aisle("####KKKKKKK####", "####KKKSKKK####", "####NN###NN####", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "######CCC######", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "###############", "####NN###NN####", "####KKKKKKK####", "####KKKKKKK####")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('T', Predicates.blocks('gtceu:atomic_casing'))
            .where('K', Predicates.blocks('gtceu:atomic_casing').setMinGlobalLimited(750)
                .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                .or(Predicates.abilities(PartAbility.PARALLEL_HATCH).setMaxGlobalLimited(1))
            )
            .where('W', Predicates.blocks('kubejs:resonant_sculk_compound_casing'))
            .where('F', Predicates.blocks('kubejs:resonant_fusion_casing'))
            .where('C', Predicates.blocks('kubejs:resonant_fusion_coil'))
            .where('D', Predicates.blocks('kubejs:sculk_compound_casing'))
            .where('N', Predicates.blocks('gtceu:naquadah_alloy_frame'))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/gcym/atomic_casing",
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
            .aisle("CCSCCCC", "ACPPPCA", "AGKKKGA", "AGKKKGA", "ACPPPCA", "CCSCCCC")
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
        .recipeModifiers([GTRecipeModifiers.PARALLEL_HATCH, GTRecipeModifiers.ELECTRIC_OVERCLOCK.apply(OverclockingLogic.PERFECT_OVERCLOCK)])
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
               .or(Predicates.autoAbilities(definition.getRecipeTypes())))
           .where('#', Predicates.any())
           .build())
       .workableCasingRenderer("gtceu:block/casings/gcym/high_temperature_smelting_casing",
           "gtceu:block/multiblock/implosion_compressor", false)

})

