//? Keep in sync with
//? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsEndgame.java

// custom icons
GTCEuStartupEvents.registry('gtceu:material_icon_set', event => {
    event.create('infinity').parent(GTMaterialIconSet.SHINY)
    // event.create('crystal_matrix').parent(GTMaterialIconSet.SHINY)  does not exist
})

GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("crystal_matrix")
        .ingot().fluid()
        .color(0x66ffff).iconSet('shiny')
        .flags(GTMaterialFlags.GENERATE_PLATE);

    event.create("draconic_superconductor")
        .ingot()
        .color(0xf5f0f4).iconSet('shiny')
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.NO_SMASHING)
        .cableProperties(2147483647, 4, 0, true)

    event.create('infinity')
        .ingot()
        .element(GTElements.get("infinity"))
        .color(0xffffff).iconSet('infinity')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD)
})