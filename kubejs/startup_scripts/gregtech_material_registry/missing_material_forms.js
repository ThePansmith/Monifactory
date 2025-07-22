/**
 * Missing Material Forms.
 * Some GT materials need a fluid, plate, wire, gear, plasma,
 * or other variant of that material.
 * This file adds them.
 */
const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")
const $IngotProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty")
const $FluidProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty")
const $FluidStorageKeys = Java.loadClass("com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys")
const $FluidPipeProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties")
const $WireProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties")
const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty")
const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty")
const $FluidBuilder = Java.loadClass("com.gregtechceu.gtceu.api.fluids.FluidBuilder");

let addFluid = (mat, key, temp) => {
    let prop = new $FluidProperty()
    prop.getStorage().enqueueRegistration(key, new $FluidBuilder().temperature(temp))
    mat.setProperty(PropertyKey.FLUID, prop)
}

GTCEuStartupEvents.registry("gtceu:material", event => {
    // Existing materials that get an item form
    GTMaterials.Lutetium.setProperty($PropertyKey.INGOT, new $IngotProperty())

    GTMaterials.Actinium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Actinium.setMaterialARGB(0xaa3399)
    GTMaterials.Actinium.addFlags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_SPRING, GTMaterialFlags.GENERATE_BOLT_SCREW)

    GTMaterials.Germanium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Germanium.setMaterialARGB(0x66806d)
    GTMaterials.Germanium.setMaterialSecondaryARGB(0x5d5e3a)
    GTMaterials.Germanium.addFlags(GTMaterialFlags.GENERATE_PLATE)

    GTMaterials.Terbium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Terbium.setMaterialARGB(0x8C8F7A)
    GTMaterials.Terbium.setProperty($PropertyKey.BLAST, new $BlastProperty(7200, "higher", 524288, 900, -1, -1));
    GTMaterials.Terbium.addFlags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)

    // Existing materials that get new material forms
    GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROTOR)
    GTMaterials.Iridium.addFlags(GTMaterialFlags.GENERATE_ROTOR)
    GTMaterials.Graphite.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.MagnesiumDiboride.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_ROUND, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.VanadiumGallium.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)

    // Small Springs for Power Transformer recipes
    GTMaterials.RedAlloy.addFlags(GTMaterialFlags.GENERATE_SPRING_SMALL)
    GTMaterials.Europium.addFlags(GTMaterialFlags.GENERATE_SPRING_SMALL)

    // Gears for Thermal Expansion
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Silver.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Lead.addFlags(GTMaterialFlags.GENERATE_GEAR)

    // Radioactive materials that get liquid forms and/or a new color
    addFluid(GTMaterials.Einsteinium, $FluidStorageKeys.LIQUID, 1133);
    addFluid(GTMaterials.Berkelium, $FluidStorageKeys.LIQUID, 1259);
    GTMaterials.Berkelium.setMaterialARGB(0xa33f20);
    addFluid(GTMaterials.Californium, $FluidStorageKeys.LIQUID, 1173);
    GTMaterials.Californium.setMaterialARGB(0x7d0222)
    addFluid(GTMaterials.Neptunium, $FluidStorageKeys.LIQUID, 913);
    GTMaterials.Neptunium.setMaterialARGB(0x486d7b)
    addFluid(GTMaterials.Curium, $FluidStorageKeys.LIQUID, 1618);
    GTMaterials.Curium.setMaterialARGB(0x58307f)
    addFluid(GTMaterials.NetherStar, $FluidStorageKeys.LIQUID, 1337);
    GTMaterials.Thorium.setMaterialARGB(0x273420)
    addFluid(GTMaterials.Actinium, $FluidStorageKeys.LIQUID, 1324);

    // Liquid Sculk
    let liquid_sculk_prop = new $FluidProperty();
    liquid_sculk_prop.getStorage().enqueueRegistration($FluidStorageKeys.LIQUID, new $FluidBuilder().temperature(310).disableBucket().customStill())
    GTMaterials.Sculk.setProperty($PropertyKey.FLUID, liquid_sculk_prop)

    let liquid_meat_prop = new $FluidProperty();
    liquid_meat_prop.getStorage().enqueueRegistration($FluidStorageKeys.LIQUID, new $FluidBuilder()
        .temperature(310)
        .textures(true, true)
        .name("blood")
    )
    GTMaterials.Meat.setProperty($PropertyKey.FLUID, liquid_meat_prop)

    // Osmiridium Ore (to go with Iridosmine ore)
    let osmiridium_ore_prop = new $OreProperty();
    osmiridium_ore_prop.setOreByProducts(GTMaterials.Iridium, GTMaterials.Osmium, GTMaterials.Ruthenium)
    GTMaterials.Osmiridium.setProperty($PropertyKey.ORE, osmiridium_ore_prop)
})
