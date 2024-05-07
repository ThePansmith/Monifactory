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
    
    //Omnic Forge
    event.create('omnic_forge')
        .category('multiblock')
        .setEUIO('in')
        .setMaxIOSize(6, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.SOLIDIFIER_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
    })

// Basic Microverse Projector
GTCEuStartupEvents.registry('gtceu:machine', event => {
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
        .appearanceBlock(GTBlocks.CASING_STEEL_SOLID)
        .pattern(definition => FactoryBlockPattern.start()
            .aisle("CCC", "CGC", "CGC","CGC","CCC",)
            .aisle("CDC", "G#G", "G#G","G#G","CGC",)
            .aisle("CSC", "CGC", "CGC","CGC","CCC",)
            .where('S', Predicates.controller(Predicates.blocks(definition.get())))
            .where('D', Predicates.blockTag(Tags.block("minecraft:dirt")))
            .where('C', Predicates.blocks("gtceu:solid_machine_casing").setMinGlobalLimited(20)
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
.appearanceBlock(() => Block.getBlock('kubejs:draconium_casing'))
.pattern(definition => FactoryBlockPattern.start()
.aisle("#CCC#", "#GGG#", "#GGG#", "#GGG#", "#GGG#", "#GGG#", "#CCC#")
.aisle("CCCCC", "CAIAC", "GAAAG", "GAAAG", "GAAAG", "CAIAC", "CCCCC")
.aisle("CCCCC", "CIMIC", "CAAAC", "CIFIC", "CAAAC", "CIMIC", "CCCCC")
.aisle("CCCCC", "CAIAC", "GAAAG", "GAAAG", "GAAAG", "CAIAC", "CCCCC")
.aisle("#CSC#", "#GGG#", "#GGG#", "#GGG#", "#GGG#", "#GGG#", "#CCC#")
.where('S', Predicates.controller(Predicates.blocks(definition.get())))
.where('C', Predicates.blocks('kubejs:draconium_casing').setMinGlobalLimited(50)
    .or(Predicates.autoAbilities(definition.getRecipeTypes())))
.where('G', Predicates.blocks(GTBlocks.CASING_LAMINATED_GLASS.get()))
.where('I', Predicates.blocks('gtceu:hsse_frame'))
.where('M', Predicates.blocks('gtceu:assembly_line_unit'))
.where('F', Predicates.blocks('gtceu:crystal_matrix_block'))
.where('A', Predicates.air())
.where('#', Predicates.any())
    .build())
.workableCasingRenderer("kubejs:block/draconium/casing",
    "gtceu:block/multiblock/implosion_compressor", false)

// Creative Tank Fabricator
// TODO: Cooler Design, thinking about some kind of computer that fabricates the tanks from the data
event.create('creative_tank_fabricator', 'multiblock')
    .rotationState(RotationState.NON_Y_AXIS)
    .recipeTypes('creative_tank_fabricator')
    .appearanceBlock(GCyMBlocks.CASING_ATOMIC)
    .pattern(definition => FactoryBlockPattern.start()
        .aisle("CCC", "GGG", "CCC")
        .aisle("CCC", "G#G", "CCC")
        .aisle("CSC", "GGG", "CCC")
        .where('S', Predicates.controller(Predicates.blocks(definition.get())))
        .where('G', Predicates.blocks(GTBlocks.CASING_TEMPERED_GLASS.get()))
        .where('C', Predicates.blocks("gtceu:atomic_casing").setMinGlobalLimited(10)
            .or(Predicates.autoAbilities(definition.getRecipeTypes())))
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
                .where('N', Predicates.blocks('gtceu:draconic_superconductor_block'))
                .where('D', Predicates.blocks('gtceu:draconium_frame'))
                .where('G', Predicates.blocks('gtceu:fusion_glass'))
                .where('O', Predicates.blocks('kubejs:omnic_matrix_machine_casing'))
                .where('C', Predicates.blocks('kubejs:omnic_matrix_machine_casing')
                    .or(Predicates.autoAbilities(definition.getRecipeTypes()))
                    .or(Predicates.abilities(PartAbility.PARALLEL_HATCH))
                )
                .where('A', Predicates.air())
                .where('#', Predicates.any())
                .build())
        .workableCasingRenderer(new ResourceLocation('kubejs', 'block/omnium/casing'),
            "gtceu:block/multiblock/implosion_compressor", false)
})
