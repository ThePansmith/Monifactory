//! Regular mode platinum line
//? Keep in sync with
//? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsPlatLine.java

// Platline Stuff
GTCEuStartupEvents.registry('gtceu:material', event => {
    // yet another "it should be in hardcore mode but its being referened in regular mode" material
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

    event.create('formic_acid')
        .fluid()
        .color(0xffffc5)
		.flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('carbon', '2x hydrogen', '2x oxygen')
})

GTCEuStartupEvents.materialModification(() => {
	GTMaterials.get('formic_acid').setFormula("HCOOH");
})