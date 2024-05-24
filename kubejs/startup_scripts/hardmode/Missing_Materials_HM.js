//Missing materials for HM
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isHardMode) {
        return;
    }
    GTMaterials.RhodiumSulfate.setProperty($PropertyKey.DUST, new $DustProperty());
})