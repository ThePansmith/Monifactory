/**
 ! Hardcore mode platinum line
 ? Keep in sync with
 ? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsPlatLine.java
 */

GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isHardMode) {
        return;
    }

    event.create('iridium_dioxide_residue')
        .dust()
        .color(0x17182e).iconSet('rough')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('iridium', '2x oxygen', 'rare_earth');

    event.create('chloroplatinic_acid')
        .fluid()
        .color(0xfef0c2)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x hydrogen', 'platinum', '6x chlorine')

    event.create('palladium_rich_ammonia')
        .fluid()
        .color(0x808080)
        .components('2x ammonia', 'palladium', 'chlorine')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create('rhodium_sulfate_solution')
        .fluid()
        .color(0xffbb66)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('rhodium_sulfate', 'water');

    event.create('acidic_iridium_dioxide_solution')
        .fluid()
        .color(0x27284e)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('iridium_dioxide_residue', '4x hydrochloric_acid')

    event.create('platinum_palladium_leachate')
        .fluid()
        .color(0xffffc5)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('platinum', 'palladium', 'aqua_regia')

    event.create('methyl_formate')
        .fluid()
        .color(0xffaaaa)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x carbon', '4x hydrogen', '2x oxygen')

    event.create('platinum_metallic')
        .dust()
        .color(0xfffbc5).iconSet('metallic')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('platinum', 'rare_earth')

    event.create('palladium_metallic')
        .dust()
        .color(0x808080).iconSet('metallic')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('palladium', 'rare_earth')

    event.create('ammonium_hexachloroplatinate')
        .dust()
        .color(0xfef0c2).iconSet('metallic')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x nitrogen', '8x hydrogen', 'platinum', '6x chlorine')

    event.create('potassium_bisulfate')
        .dust()
        .color(0xfdbd68)
        .components('potassium', 'hydrogen', 'sulfur', '4x oxygen')

    event.create('potassium_pyrosulfate')
        .dust()
        .color(0xfbbb66)
        .components('2x potassium', '2x sulfur', '7x oxygen')

    event.create('zinc_sulfate')
        .dust()
        .color(0x846649).iconSet('fine')
        .components('zinc', 'sulfur', '4x oxygen')

    event.create('sodium_nitrate')
        .dust()
        .color(0x846684).iconSet('rough')
        .components('sodium', 'nitrogen', '3x oxygen')

    event.create('rhodium_nitrate')
        .dust()
        .color(0x776649).iconSet('fine')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('rhodium', '3x nitrogen', '9x oxygen')

    event.create('sodium_ruthenate')
        .dust()
        .color(0x3a40cb).iconSet('shiny')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x sodium', 'ruthenium', '4x oxygen')

    event.create('sodium_peroxide')
        .dust()
        .color(0xecff80).iconSet('rough')
        .components('2x sodium', '2x oxygen')

    event.create('ammonium_hexachloroiridiate')
        .dust()
        .color(0x644629).iconSet('rough')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x nitrogen', '2x hydrogen', 'iridium', '6x chlorine');

    event.create('platinum_group_residue')
        .dust()
        .color(0x64632e).iconSet('rough')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('iridium', 'osmium', 'rhodium', 'ruthenium', 'rare_earth');

    event.create('crude_platinum_residue')
        .dust()
        .color(0xfffbc5).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('platinum_raw');

    event.create('crude_palladium_residue')
        .dust()
        .color(0x909090).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('palladium_raw');

    event.create('iridium_group_sludge')
        .dust()
        .color(0x644629).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('iridium', 'osmium', 'ruthenium', 'rare_earth');

    event.create('crude_rhodium_residue')
        .dust()
        .color(0x666666).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x rhodium', 'water');

    event.create('rhodium_salt')
        .dust()
        .color(0x848484).iconSet('shiny')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x salt', '2x rhodium', '6x chlorine');

    event.create('sodium_methoxide')
        .dust()
        .color(0xd0d0f0).iconSet('dull')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('carbon', '3x hydrogen', 'oxygen', 'sodium');
});

GTCEuStartupEvents.materialModification(() => {
    if (!isHardMode) {
        return;
    }
    GTMaterials.get('ammonium_hexachloroplatinate').setFormula('(NH4)2PtCl6');
    GTMaterials.get('rhodium_nitrate').setFormula('Rh(NO3)3');
    GTMaterials.get('ammonium_hexachloroiridiate').setFormula('(NH4)2IrCl6');
    GTMaterials.get('rhodium_salt').setFormula('(NaCl)2(RhCl3)2');
})
