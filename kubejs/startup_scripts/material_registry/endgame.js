
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
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME); // yeah you can smash the plates
        
    event.create("omnium")
        .ingot()
        .element(GTElements.get("omnium"))
        .color(0xffffff).iconSet('omnium') // custom icon set
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND)
        .cableProperties(2147483647, 64, 0, true)
        .liquid(new GTFluidBuilder().state(GTFluidState.LIQUID).customStill())

    event.create("draconic_superconductor")
        .ingot().fluid()
        .element(GTElements.get("draconic_superconductor"))
        .color(0xffffff)
        .iconSet('shiny')
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_SMASHING)
        .cableProperties(2147483647, 4, 0, true)

    event.create('infinity')
        .ingot()
        .element(GTElements.get("infinity"))
        .color(0xffffff)
        .iconSet('infinity')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME)
        
    event.create('monium')
        .ingot()
        .element(GTElements.get("monium"))
        .color(0xffffff)
        .iconSet('monium')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_GEAR)

    event.create('netherite') //Not actually endgame but will see use in matter circuits
        .ingot()
        .element(GTElements.get("netherite"))
        .color(0x4C484C)
        .iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME)

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
})