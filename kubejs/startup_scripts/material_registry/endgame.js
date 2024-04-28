//? Keep in sync with
//? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsEndgame.java

// custom icons
GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('infinity').parent(GTMaterialIconSet.SHINY)
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("crystal_matrix")
        .ingot().fluid()
        .color(0x66ffff)
        .iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE); // yeah you can smash the plates
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
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
    
    // Adding a bunch of parts to existing elements for Endgame purpose
    
    GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.Zeron100.addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.get('gcyr:bisalloy_400').addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.BlueAlloy.addFlags(GTMaterialFlags.GENERATE_DENSE)
})