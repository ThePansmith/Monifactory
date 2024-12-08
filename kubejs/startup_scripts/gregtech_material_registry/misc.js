//? Misc modern materials we have to add
//? Place non-nomifactory materials here

// AE2 Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('charged_certus_quartz')
        .gem()
        .dust()
        .color(0x9fd5e8)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('certus_quartz')

    event.create('fluix')
        .gem()
        .dust()
        .color(0x7f5bb3)
        .iconSet(GTMaterialIconSet.CERTUS)
        .flags(GTMaterialFlags.GENERATE_PLATE)
        .components('charged_certus_quartz', 'redstone', 'nether_quartz')
})


// Space Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("dilithium")
        .dust()
        .ore(2, 1)
        .color(0xd1b5b4)
        .iconSet(GTMaterialIconSet.CERTUS)
        .components('2x lithium')
        .addOreByproducts('lithium', 'cobalt', 'platinum')

    event.create('calcium_perchlorate')
        .dust()
        .color(0xf9fbda)
        .components('1x calcium', '2x chlorine', '8x oxygen')
})


// GT Perfect Gem material type
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


// Actually Additions Crystals
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('restonia')
        .gem()
        .color(0xA60000)
        .iconSet(GTMaterialIconSet.RUBY)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('enori')
        .gem()
        .color(0xEDE6FF)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('void')
        .gem()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('palis')
        .gem()
        .color(0x1C1C89)
        .iconSet(GTMaterialIconSet.LAPIS)
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


// Actually Additions empowered crystals
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create('restonia_empowered')
        .gem().fluid()
        .color(0xA60000)
        .iconSet(GTMaterialIconSet.RUBY)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('enori_empowered')
        .gem().fluid()
        .color(0xEDE6FF)
        .iconSet(GTMaterialIconSet.GEM_VERTICAL)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('void_empowered')
        .gem().fluid()
        .color(0x0F0F0F)
        .iconSet(GTMaterialIconSet.ROUGH)
        .flags(GTMaterialFlags.GENERATE_GEAR)

    event.create('palis_empowered')
        .gem().fluid()
        .color(0x1C1C89)
        .iconSet(GTMaterialIconSet.LAPIS)
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

    event.create("dragon_breath")
        .fluid()
        .color(0xFF6AB9)

    event.create("jean_gasoline")
        .fluid()
        .color(0xF16AA5)

    event.create('holmium_oxide')
        .dust()
        .color(0xD29092)
        .components('2x holmium', '3x oxygen')

})

GTCEuStartupEvents.materialModification(event => {
    GTMaterials.RhodiumPlatedPalladium.setComponents("3x palladium", "1x rhodium", "2x lumium")
    GTMaterials.RhodiumPlatedPalladium.setFormula('Pd3Rh(SnFe)4(CuAg4)2', true)

    GTMaterials.Glowstone.setComponents("1x tricalcium_phosphate", "1x gold")
    GTMaterials.Glowstone.setFormula('AuCa3(PO4)2', true)

    GTMaterials.get('energetic_alloy').setFormula('Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)');
    GTMaterials.get('vibrant_alloy').setFormula('Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)(BeK4N5)');
    GTMaterials.get('end_steel').setFormula('Fe(SiO2)(Au2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)(BeK4N5))');

    GTMaterials.get('microversium').setFormula('Fe2(Si(FeS2)5(CrAl2O3)Hg3)(AuCa3(PO4)2)D')
})

