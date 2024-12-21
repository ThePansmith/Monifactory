GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('moon')
        .targets('#ad_astra:moon_stone_replaceables')
        .dimensions('ad_astra:moon')

    event.create('mars')
        .targets('#ad_astra:mars_stone_replaceables')
        .dimensions('ad_astra:mars')

        event.create('mercury')
        .targets('#ad_astra:mercury_stone_replaceables')
        .dimensions('ad_astra:mercury')

        event.create('venus')
        .targets('#ad_astra:venus_stone_replaceables')
        .dimensions('ad_astra:venus')
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('Moon', 'ore')
        .stateSupplier(() => Block.getBlock('ad_astra:moon_stone').defaultBlockState())
        .baseModelLocation('ad_astra:block/moon_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)

        event.create('Mars', 'ore')
        .stateSupplier(() => Block.getBlock('ad_astra:mars_stone').defaultBlockState())
        .baseModelLocation('ad_astra:block/mars_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)

        event.create('Mercury', 'ore')
        .stateSupplier(() => Block.getBlock('ad_astra:mercury_stone').defaultBlockState())
        .baseModelLocation('ad_astra:block/mercury_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)

        event.create('Venus', 'ore')
        .stateSupplier(() => Block.getBlock('ad_astra:venus_stone').defaultBlockState())
        .baseModelLocation('ad_astra:block/venus_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})