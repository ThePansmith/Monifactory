//? Keep in sync with
//? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsEndgame.java

GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isHardcoreMode) {
        return;
    }

    event.create("kapton_k")
        .ingot().fluid()
        .color(0xffce52).iconSet('dull')
        .flags(GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('22x carbon', '10x hydrogen', '2x nitrogen', '5x oxygen')

})

GTCEuStartupEvents.materialModification(() => {
    if (!isHardcoreMode) {
        return;
    }
	GTMaterials.get('kapton_k').setFormula('C6H2((CO)2N)2C6H4OC6H4');
})