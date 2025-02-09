/**
 * Missing Material Forms: Hardmode+
 * Some GT materials need a fluid, plate, wire, gear, plasma,
 * or other variant of that material for Hardmode-specific content.
 * This file adds them.
 */
const $DustProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty');

GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isHardMode) return;
    GTMaterials.RhodiumSulfate.setProperty($PropertyKey.DUST, new $DustProperty());
    GTMaterials.Iridium.addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.Berkelium.setProperty(PropertyKey.INGOT, new $IngotProperty());
    GTMaterials.Berkelium.addFlags(GTMaterialFlags.GENERATE_FRAME)
    addFluid(GTMaterials.Oganesson, $FluidStorageKeys.GAS, 7777);
    GTMaterials.Oganesson.setMaterialARGB(0x443936)
})
