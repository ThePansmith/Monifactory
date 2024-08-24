//Missing ingots
const $PropertyKey = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey')
const $IngotProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty')

//const $GemProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.GemProperty')

const $FluidProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty')
const $FluidStorageKeys = Java.loadClass('com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys')
const $FluidPipeProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties')
const $WireProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties')
const $BlastProperty = Java.loadClass('com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty')
const $FluidBuilder = Java.loadClass('com.gregtechceu.gtceu.api.fluids.FluidBuilder');

let addFluid = (mat, key) => {
    let prop = new $FluidProperty()
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder())
    mat.setProperty(PropertyKey.FLUID, prop)
}

GTCEuStartupEvents.registry('gtceu:material', event => {
    GTMaterials.Lutetium.setProperty($PropertyKey.INGOT, new $IngotProperty())

    GTMaterials.Holmium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Holmium.setProperty($PropertyKey.WIRE, new $WireProperty(33554432, 64, 0, true))
    GTMaterials.Holmium.setProperty($PropertyKey.FLUID_PIPE, new $FluidPipeProperty(120000, 128000, true, true, true, true))
    GTMaterials.Holmium.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_SPRING)

    GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_FOIL)
    GTMaterials.Iridium.addFlags(GTMaterialFlags.GENERATE_ROTOR)
    GTMaterials.NaquadahEnriched.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)


    addFluid(GTMaterials.Einsteinium, $FluidStorageKeys.LIQUID);
    // GTMaterials.Einsteinium.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())

    GTMaterials.Americium.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.PLASMA, new GTFluidBuilder())

    addFluid(GTMaterials.Berkelium, $FluidStorageKeys.LIQUID);
    // GTMaterials.Berkelium.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())

    addFluid(GTMaterials.Californium, $FluidStorageKeys.LIQUID);
    // GTMaterials.Californium.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())

    addFluid(GTMaterials.Neptunium, $FluidStorageKeys.LIQUID);
    // GTMaterials.Neptunium.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())

    addFluid(GTMaterials.Curium, $FluidStorageKeys.LIQUID);
    // GTMaterials.Curium.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())
    
    addFluid(GTMaterials.Ruridit, $FluidStorageKeys.LIQUID);
    // GTMaterials.Ruridit.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())

    addFluid(GTMaterials.NetherStar, $FluidStorageKeys.LIQUID);
    // GTMaterials.NetherStar.getProperty($PropertyKey.FLUID).storage.enqueueRegistration($FluidStorageKeys.LIQUID, new GTFluidBuilder())
	
	GTMaterials.Graphite.addFlags(GTMaterialFlags.GENERATE_PLATE)
	
	GTMaterials.MagnesiumDiboride.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)


    // GTMaterials.Aluminium.getProperty($PropertyKey.BLAST).setProperty($BlastProperty(1700, 'low', 128, 400));
    GTMaterials.Holmium.setProperty($PropertyKey.BLAST, new $BlastProperty(12500, 'highest', 1000000, 1000));


    //GTMaterials.NetherQuartz.setProperty($PropertyKey.GEM, new $GemProperty())

    const missingGears = ['Electrum', 'Lead', 'Silver', 'Nickel', 'Ruby', 'Sapphire', 'Gold', 'Copper', 'Lapis', 'Emerald', 'NetherQuartz']
    missingGears.forEach(missingGears => {
        GTMaterials[missingGears].addFlags(GTMaterialFlags.GENERATE_GEAR)
    })

    
})
