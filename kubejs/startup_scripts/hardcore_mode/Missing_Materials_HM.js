//Missing materials for HM
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isExpertMode) {
        return;
    }
    GTMaterials.RhodiumSulfate.setProperty($PropertyKey.DUST, new $DustProperty());
    GTMaterials.Iridium.addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.Berkelium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Berkelium.addFlags(GTMaterialFlags.GENERATE_FRAME)
})