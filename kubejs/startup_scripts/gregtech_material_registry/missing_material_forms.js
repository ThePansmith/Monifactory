/**
 * Missing Material Forms.
 * Some GT materials need a fluid, plate, wire, gear, plasma,
 * or other variant of that material.
 * This file adds them.
 */
const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')
const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')
const $FluidPipeProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties')
const $WireProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties')
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');

let addFluid = (mat, key, temp) => {
    let prop = new $FluidProperty()
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder().temperature(temp))
    mat.setProperty(PropertyKey.FLUID, prop)
}

GTCEuStartupEvents.registry('gtceu:material', event => {
    GTMaterials.Lutetium.setProperty($PropertyKey.INGOT, new $IngotProperty())

    GTMaterials.Holmium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Holmium.setProperty($PropertyKey.WIRE, new $WireProperty(33554432, 64, 0, true))
    GTMaterials.Holmium.setProperty($PropertyKey.FLUID_PIPE, new $FluidPipeProperty(120000, 128000, true, true, true, true))
    GTMaterials.Holmium.setProperty($PropertyKey.BLAST, new $BlastProperty(12500, 'highest', 1000000, 1000, -1, -1));
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SPRING)

    GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_FOIL)
    GTMaterials.Iridium.addFlags(GTMaterialFlags.GENERATE_ROTOR)
    GTMaterials.NaquadahEnriched.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)
    GTMaterials.Graphite.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.MagnesiumDiboride.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.Zeron100.addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.get('gcyr:bisalloy_400').addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.BlueAlloy.addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_DENSE)
    
    //Gears for Thermal Expansion
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Silver.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Lead.addFlags(GTMaterialFlags.GENERATE_GEAR)

    addFluid(GTMaterials.Einsteinium, $FluidStorageKeys.LIQUID, 1133);
    GTMaterials.Americium.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.PLASMA, new GTFluidBuilder())
    addFluid(GTMaterials.Berkelium, $FluidStorageKeys.LIQUID, 1259);
    GTMaterials.Berkelium.setMaterialARGB(0xa33f20);
    addFluid(GTMaterials.Californium, $FluidStorageKeys.LIQUID, 1173);
    GTMaterials.Californium.setMaterialARGB(0x7d0222)
    addFluid(GTMaterials.Neptunium, $FluidStorageKeys.LIQUID, 913);
    GTMaterials.Neptunium.setMaterialARGB(0x486d7b)
    addFluid(GTMaterials.Curium, $FluidStorageKeys.LIQUID, 1618);
    GTMaterials.Curium.setMaterialARGB(0x58307f)
    addFluid(GTMaterials.Ruridit, $FluidStorageKeys.LIQUID, 1515);
    addFluid(GTMaterials.NetherStar, $FluidStorageKeys.LIQUID, 1337);
})
