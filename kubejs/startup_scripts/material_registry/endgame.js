
//? Keep in sync with
//? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsEndgame.java
GTCEuStartupEvents.registry('gtceu:element', event => {
    event.create('omnium', 130, 234, -1, null, 'Nm', false)
    event.create('infinity', Infinity, Infinity, -1, null, '∞', false);
    event.create('monium', 69, 420, -1, null, 'Mu', false);
})

// custom icons
GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('omnium').parent(GTMaterialIconSet.SHINY)
    event.create('infinity').parent(GTMaterialIconSet.SHINY)
    event.create('monium').parent(GTMaterialIconSet.SHINY)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("crystal_matrix")
        .ingot().fluid()
        .color(0x66ffff)
        .iconSet('shiny')
        .fluidPipeProperties(100000, 64000, true, true, true, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_ROTOR); // yeah you can smash the plates
        
    event.create("omnium")
        .ingot()
        .element(GTElements.get("omnium"))
        .color(0xffffff).iconSet('omnium') // custom icon set
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(2147483647, 64, 0, true)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create("sculk_superconductor")
        .ingot().fluid()
        .element(GTElements.get("sculk_superconductor"))
        .color(0xffffff)
        .iconSet('shiny')
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_SMASHING)
        .cableProperties(2147483647, 4, 0, true)

    event.create('infinity')
        .ingot()
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet('infinity')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD,  GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_FRAME)
        
    event.create('monium')
        .ingot()
        .element(GTElements.get("monium"))
        .color(0xffffff)
        .iconSet('monium')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR)

    event.create('netherite')
        .ingot()
        .element(GTElements.get("netherite"))
        .color(0x4C484C)
        .iconSet('dull')
        .cableProperties(2147483647, 64, 0, true)
        .fluidPipeProperties(120000, 96000, true, true, true, true)
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_ROTOR)

    event.create('omnic_acid')
        .dust()
        .color(0xff00ff)
        .iconSet('shiny')
        .components('5x carbon', '4x hydrogen', '3x oxygen', '4x omnium') //Replace Nitrogen with Omnium when we find out how
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    
    // Adding a bunch of parts to existing elements for Endgame purpose
    
    GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.Zeron100.addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.get('gcyr:bisalloy_400').addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.BlueAlloy.addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW)
})