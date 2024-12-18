/**
 * Endgame Material Registry.
 * Used for registering Gregtech Materials
 * that are related post-tank content.
 */
//? Keep in sync with
//? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsEndgame.java

/*
Note: Some GTCEuM recipes handlers calculate duration based on mass.
This led to the infamous recipe bug where Infinity Screws in the Lathe had integer limit duration,
because the Infinity material had infinite mass.
*/
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('omnium', 130, 234, -1, null, 'Nm', false)
    event.create('infinity', 168, 316, -1, null, '∞', false);
    event.create('monium', 69, 420, -1, null, 'Mu', false);
    event.create('crystal_matrix', 6, 6, -1, null, 'C*', false);
    event.create('eltz', 15, 15, -1, null, 'Ez', false)
})

// Omnium, Infinity, and Monium have animations and thus custom material icon sets.
GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('omnium').parent(GTMaterialIconSet.SHINY)
    event.create('sculk_alloy').parent(GTMaterialIconSet.DULL)
    event.create('infinity').parent(GTMaterialIconSet.SHINY)
    event.create('eltz').parent(GTMaterialIconSet.SHINY)
    event.create('monium').parent(GTMaterialIconSet.SHINY)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("crystal_matrix")
        .ingot().fluid()
        .element(GTElements.get("crystal_matrix"))
        .color(0x66ffff)
        .blastTemp(6800, 'highest')
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE);

    event.create("omnium")
        .ingot()
        .element(GTElements.get("omnium"))
        .color(0xffffff).iconSet('omnium')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(GTValues.V[GTValues.UEV], 64, 8, false)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create('omnic_acid')
        .dust()
        .color(0xff00ff)
        .iconSet('shiny')
        .components('5x carbon', '4x hydrogen', '3x oxygen', '4x omnium')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("sculk_superconductor")
        .ingot().fluid()
        .element(GTElements.get("sculk_superconductor"))
        .color(0xffffff)
        .iconSet('shiny')
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_SMASHING)
        .cableProperties(GTValues.V[GTValues.UHV], 8, 0, true)
    
    event.create('activated_netherite')
        .ingot()
        .element(GTElements.get("activated_netherite"))
        .color(0x4C484C)
        .iconSet('dull')
        .cableProperties(GTValues.V[GTValues.UEV], 16, 0, true)
        .fluidPipeProperties(11000, 8500, true, false, true, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SPRING)

    event.create('sculk_bioalloy')
        .ingot()
        .color(0xffffff)
        .iconSet('sculk_alloy')
        .flags(GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_BY_HAND_RECIPES, GTMaterialFlags.EXCLUDE_BLOCK_CRAFTING_RECIPES, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_WORKING)

    event.create('infinity')
        .ingot()
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet('infinity')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE)

    event.create('eltz')
        .ingot()
        .element(GTElements.get('eltz'))
        .color(0xffffff)
        .iconSet('eltz')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.PHOSPHORESCENT)
       
    event.create('eltic_actinate')
        .gem()
        .color(0xbb9966).secondaryColor(0x881105)
        .iconSet(GTMaterialIconSet.GEM_HORIZONTAL)
        .components('1x eltz', '2x actinium', '6x oxygen')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.NO_SMASHING)

    event.create('actinium_iron_oxide')
        .dust()
        .color(0xC3D1FF)    //Old actinium color for fun
        .components('1x actinium', '2x iron', '3x oxygen')

    event.create('monium')
        .ingot()
        .element(GTElements.get("monium"))
        .color(0xffffff)
        .iconSet('monium')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SPRING)
        .cableProperties(GTValues.V[GTValues.MAX], 134217727, 0, true)
})