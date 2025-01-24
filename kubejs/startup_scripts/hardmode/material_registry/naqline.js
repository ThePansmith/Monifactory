/**
 ! Hardcore mode naquadah line
 ? Keep in sync with
 ? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsNaqLine.java
 */

GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isHardMode) {
        return;
    }

    event.create('naquadah_oxide')
        .dust()
        .color(0x17ddd3).iconSet('rough')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x naquadah', '3x oxygen')

    event.create('pyromorphite')
        .dust()
        .color(0xd3ed28).iconSet('rough')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('5x lead', '3x phosphate', 'chlorine')

    event.create('naquadah_hydroxide')
        .dust()
        .color(0x1941a6).iconSet('dull')
        .components('naquadah', '3x hydrogen', '3x oxygen')

    event.create('caesium_hydroxide')
        .dust()
        .color(0xbd8340).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('caesium', 'oxygen', 'hydrogen')

    event.create('neocryolite')
        .liquid()
        .color(0x3fd1aa)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('3x caesium', 'naquadah', '6x fluorine')

    event.create('naquadah_oxide_petro_solution')
        .liquid()
        .color(0x595c70)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('naquadah_oxide_aero_solution')
        .liquid()
        .color(0x6f7059)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('hot_naquadah_oxide_neocryolite_solution')
        .liquid()
        .color(0x658280)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("snowchestite") // Hardmode only
        .dust().ore()
        .color(0x274c9f).iconSet('shiny')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('3x naquadah_oxide', 'pyromorphite')

})

GTCEuStartupEvents.materialModification(() => {
    if (!isHardMode) {
        return;
    }
    GTMaterials.get('naquadah_hydroxide').setFormula('Nq(OH)3');
    // Use `.setOreByProducts` here instead of `.addOreByproducts` because of https://github.com/GregTechCEu/GregTech-Modern/issues/2633
    GTMaterials.get('snowchestite').getProperty(PropertyKey.ORE)
        .setOreByProducts('chalcopyrite', 'vanadium_magnetite', 'naquadah_hydroxide')
})
