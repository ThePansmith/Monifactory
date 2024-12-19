GTCEuStartupEvents.registry('gtceu:world_gen_layer', event => {
    event.create('moon')
        .targets('#ad_astra:moon_stone_replaceables')
        .dimensions('ad_astra:moon')
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('Moon', 'ore')
        .stateSupplier(() => Block.getBlock('ad_astra:moon_stone').defaultBlockState())
        .baseModelLocation('ad_astra:block/moon_stone')
        .unificationEnabled(true)
        .materialIconType(GTMaterialIconType.ore)
        .generationCondition(ItemGenerationCondition.hasOreProperty)
})