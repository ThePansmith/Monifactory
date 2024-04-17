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

    // Draconic Reactor
    event.create('draconic_reactor')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(9, 1, 0, 0) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)

    // Creative Tank Fabricator
    event.create('creative_tank_fabricator')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0) // 
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.COOLING)
    })
    
// Basic Microverse Projector
GTCEuStartupEvents.registry('gtceu:machine', event => {
    event.create('basic_microverse_projector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('basic_microverse')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CMC", "CVC", "CCC")
            .aisle("CCC", "GDG", "CCC")
            .aisle("CSC", "CGC", "CCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('chisel:space/diamond_block'))
            .where('C', Predicates.blocks("kubejs:microverse_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('M', Predicates.abilities(PartAbility.MUFFLER))
            .where('V', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .build())
        .workableCasingRenderer("kubejs:block/microverse_casing",
            "gtceu:block/multiblock/implosion_compressor", false)



    // Advanced Microverse Projector

    event.create('advanced_microverse_projector', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('advanced_microverse')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCCCC", "CGGGC", "CGGGC", "CGGGC", "CCCCC")
            .aisle("CVCVC", "GDDDG", "GDDDG", "GDDDG", "CVCVC")
            .aisle("CCCCC", "GDDDG", "GD#DG", "GDDDG", "CCCCC")
            .aisle("CVCVC", "GDDDG", "GDDDG", "GDDDG", "CVCVC")
            .aisle("CCSCC", "CGGGC", "CGGGC", "CGGGC", "CCCCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('chisel:space/diamond_block'))
            .where('C', Predicates.blocks("kubejs:microverse_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('V', Predicates.blocks(GTBlocks.CASING_GRATE.get()))
            .where('#', Predicates.air())
            .build())
        .workableCasingRenderer("kubejs:block/microverse_casing",
            "gtceu:block/multiblock/implosion_compressor", false)


    // Advanced Microverse Projecctor II 

    event.create('advanced_microverse_projector_ii', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('advanced_microverse_ii')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("#########", "#########", "##CCCCC##", "##CVCVC##", "##CCCCC##", "##CVCVC##", "##CCCCC##", "#########", "#########")
            .aisle("#########", "##CGGGC##", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "##CGGGC##", "#########")
            .aisle("##CCCCC##", "#CDDDDDC#", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "#CDDDDDC#", "##CCCCC##")
            .aisle("##CGGGC##", "#GDDDDDG#", "CDDDDDDDC", "GDD###DDG", "GDD###DDG", "GDD###DDG", "CDDDDDDDC", "#GDDDDDG#", "##CGGGC##")
            .aisle("##CGGGC##", "#GDDDDDG#", "CDDDDDDDC", "GDD###DDG", "GDD###DDG", "GDD###DDG", "CDDDDDDDC", "#GDDDDDG#", "##CGGGC##")
            .aisle("##CGGGC##", "#GDDDDDG#", "CDDDDDDDC", "GDD###DDG", "GDD###DDG", "GDD###DDG", "CDDDDDDDC", "#GDDDDDG#", "##CGGGC##")
            .aisle("##CCCCC##", "#CDDDDDC#", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "CDDDDDDDC", "#CDDDDDC#", "##CCCCC##")
            .aisle("#########", "##CGGGC##", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "#CDDDDDC#", "##CGGGC##", "#########")
            .aisle("#########", "#########", "##CCSCC##", "##CGGGC##", "##CGGGC##", "##CGGGC##", "##CCCCC##", "#########", "#########")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blocks('chisel:space/diamond_block'))
            .where('C', Predicates.blocks("kubejs:microverse_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('V', Predicates.blocks(GTBlocks.CASING_TITANIUM_PIPE.get()))
            .where('#', Predicates.air())
            .build())
        .workableCasingRenderer("kubejs:block/microverse_casing",
            "gtceu:block/multiblock/implosion_compressor", false)


    // Naquadah Reactor I

    event.create('naquadah_reactor_i', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('naquadah_reactor_i')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "PGP", "PGP", "PGP", "CCC")
            .aisle("CCC", "GNG", "GNG", "GOG", "CCC")
            .aisle("CSC", "PGP", "PGP", "PGP", "CCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            .where('C', Predicates.blocks("gtceu:reaction_safe_mixing_casing")
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
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "PGP", "PGP", "PGP", "PGP", "CCC")
            .aisle("CCC", "GNG", "GNG", "GNG", "GOG", "CCC")
            .aisle("CSC", "PGP", "PGP", "PGP", "PGP", "CCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.FUSION_GLASS.get()))
            .where('C', Predicates.blocks("gtceu:reaction_safe_mixing_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('P', Predicates.blocks("ae2:spatial_pylon"))
            .where('N', Predicates.blocks("gtceu:taranium_block"))
            .where('O', Predicates.blocks("extendedcrafting:the_ultimate_block"))
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
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "CGC", "CGC","CGC","CCC",)
            .aisle("CDC", "G#G", "G#G","G#G","CGC",)
            .aisle("CSC", "CGC", "CGC","CGC","CCC",)
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blockTag(Tags.block("minecraft:dirt")))
            .where('C', Predicates.blocks("gtceu:solid_machine_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("gtceu:block/casings/solid/machine_casing_solid_steel",
            "gtceu:block/multiblock/implosion_compressor", false)

// Draconic Reactor
// WIP 
event.create('draconic_reactor', 'multiblock')
.rotationState(RotationState.NON_Y_AXIS)
.recipeTypes('draconic_reactor')
.appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
.pattern(definition => FactoryBlockPattern.start()
.aisle("CCCCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC")
.aisle("CCCCC", "G#I#G", "GIIIG", "G#I#G", "CCCCC")
.aisle("CCCCC", "G###G", "G###G", "G###G", "CCCCC")
.aisle("CCCCC", "G###G", "G#F#G", "G###G", "CCCCC")
.aisle("CCCCC", "G###G", "G###G", "G###G", "CCCCC")
.aisle("CCCCC", "G#I#G", "GIIIG", "G#I#G", "CCCCC")
.aisle("CCSCC", "CCCCC", "CCCCC", "CCCCC", "CCCCC")
.where('S', Predicates.controller(Predicates.blocks(definition.get())))
.where('C', Predicates.blocks('gtceu:clean_machine_casing')
    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
.where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
.where('I', Predicates.blocks('gtceu:nether_star_block'))
.where('F', Predicates.blocks('avaritia:crystal_matrix_block'))
.where('#', Predicates.air())
    .build())
.workableCasingRenderer("gtceu:block/casings/solid/machine_casing_clean_stainless_steel",
    "gtceu:block/multiblock/implosion_compressor", false)

// Creative Tank Fabricator
// TODO: Cooler Design, thinking about some kind of computer that fabricates the tanks from the data
    event.create('creative_tank_fabricator', 'multiblock')
        .rotationState(RotationState.NON_Y_AXIS)
        .recipeTypes('creative_tank_fabricator')
        .appearanceBlock(GTBlocks.CASING_STAINLESS_CLEAN)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "GGG", "CCC")
            .aisle("CCC", "G#G", "CCC")
            .aisle("CSC", "GGG", "CCC")
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
            .where('C', Predicates.blocks("kubejs:microverse_casing")
                .or(Predicates.autoAbilities(definition.getRecipeTypes())))
                .where('#', Predicates.any())
            .build())
        .workableCasingRenderer("kubejs:block/microverse_casing",
            "gtceu:block/multiblock/implosion_compressor", false)

})