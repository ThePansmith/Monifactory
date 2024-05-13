//? Misc modern materials we have to add
//? Place non-nomifactory materials here

//AE2 Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('fluix')
        .gem()
        .dust()
        .color(0x7f5bb3)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create('charged_certus_quartz')
        .gem()
        .dust()
        .color(0x9fd5e8)
        .iconSet(GTMaterialIconSet.QUARTZ)
})

//Space Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("dilithium")
        .dust()
        .color(0xd1b5b4)
        .iconSet(GTMaterialIconSet.CERTUS)
})

//PERFECT GEMS
GTCEuStartupEvents.registry('gtceu:material_icon_type', event => {
    event.create('perfect')
})

GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('perfect').parent(GTMaterialIconSet.SHINY)
})

GTCEuStartupEvents.registry('gtceu:tag_prefix', event => {
    event.create('perfect')
        .unificationEnabled(true)
        .generateItem(true)
        .materialIconType(GTMaterialIconType.getByName('perfect'))
        .generationCondition(ItemGenerationCondition.hasGemProperty)
})

// AA gems
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('restonia')
        .gem()
        .color(0xA60000)
        .iconSet(GTMaterialIconSet.OPAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('enori')
        .gem()
        .color(0xEDE6FF)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('void')
        .gem()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('palis')
        .gem()
        .color(0x1C1C89)
        .iconSet(GTMaterialIconSet.OPAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('diamatine')
        .gem()
        .color(0x8B8DF3)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('emeradic')
        .gem()
        .color(0x09E103)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('black_quartz')
        .gem()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.QUARTZ)
})

// AA empowered gems
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('restonia_empowered')
        .gem().fluid()
        .color(0xA60000)
        .iconSet(GTMaterialIconSet.OPAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('enori_empowered')
        .gem().fluid()
        .color(0xEDE6FF)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('void_empowered')
        .gem().fluid()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('palis_empowered')
        .gem().fluid()
        .color(0x1C1C89)
        .iconSet(GTMaterialIconSet.OPAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('diamatine_empowered')
        .gem().fluid()
        .color(0x8B8DF3)
        .iconSet(GTMaterialIconSet.FINE)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('emeradic_empowered')
        .gem().fluid()
        .color(0x09E103)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)
})

// Sunnarium
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('sunnarium')
        .dust()
        .color(0xDDD692)
        .flags(GTMaterialFlags.PHOSPHORESCENT, GTMaterialFlags.GENERATE_PLATE)

    event.create('enriched_sunnarium')
        .dust()
        .color(0xACFFC2)
        .flags(GTMaterialFlags.PHOSPHORESCENT, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE)
})

// Misc
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('elemental_reduction_fluid')
        .fluid()
        .color(0xbbddbd)
        .iconSet('elemental_reduction_fluid')
        
        event.create('holmium_oxide')
        .dust()
        .color(0xD29092)
        .components('2x holmium', '3x oxygen')
})
