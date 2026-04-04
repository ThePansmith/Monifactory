/**
 * Material Registry for various modifications to materials, mostly ones from base GregTech.
 */

const $PropertyKey = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.PropertyKey")
const $IngotProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.IngotProperty")
const $FluidProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidProperty")
const $FluidAttributes = Java.loadClass("com.gregtechceu.gtceu.api.fluids.attribute.FluidAttributes")
const $FluidStorageKeys = Java.loadClass("com.gregtechceu.gtceu.api.fluids.store.FluidStorageKeys")
const $FluidPipeProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.FluidPipeProperties")
const $WireProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.WireProperties")
const $BlastProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.BlastProperty")
const $OreProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.OreProperty")
const $FluidBuilder = Java.loadClass("com.gregtechceu.gtceu.api.fluids.FluidBuilder");
const $DustProperty = Java.loadClass("com.gregtechceu.gtceu.api.data.chemical.material.properties.DustProperty");

// AE2 ItemLike suppliers
const $AEItems = Java.loadClass("appeng.core.definitions.AEItems")
const $AEBlocks = Java.loadClass("appeng.core.definitions.AEBlocks")


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

    GTMaterials.Germanium.setProperty($PropertyKey.DUST, new $DustProperty())
    GTMaterials.Germanium.setMaterialARGB(0x66806d)
    GTMaterials.Germanium.setMaterialSecondaryARGB(0x5d5e3a)

    GTMaterials.Terbium.setProperty($PropertyKey.INGOT, new $IngotProperty())
    GTMaterials.Terbium.setMaterialARGB(0x8C8F7A)
    GTMaterials.Terbium.setProperty($PropertyKey.BLAST, new $BlastProperty(7200, "higher", 524288, 900, -1, -1));
    GTMaterials.Terbium.addFlags(GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING)

    // Existing materials that get new material forms
    GTMaterials.Neutronium.addFlags(GTMaterialFlags.GENERATE_FOIL, GTMaterialFlags.GENERATE_ROTOR, GTMaterialFlags.GENERATE_LONG_ROD, GTMaterialFlags.GENERATE_RING, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_BOLT_SCREW, GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.Graphite.addFlags(GTMaterialFlags.GENERATE_PLATE)
    GTMaterials.MagnesiumDiboride.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.RutheniumTriniumAmericiumNeutronate.addFlags(GTMaterialFlags.GENERATE_FINE_WIRE)
    GTMaterials.VanadiumGallium.addFlags(GTMaterialFlags.GENERATE_BOLT_SCREW)
    GTMaterials.Trinium.addFlags(GTMaterialFlags.GENERATE_SPRING)
    GTMaterials.Tritanium.addFlags(GTMaterialFlags.GENERATE_SPRING)
    GTMaterials.Iridium.addFlags(GTMaterialFlags.GENERATE_DENSE)
    GTMaterials.Platinum.addFlags(GTMaterialFlags.GENERATE_FRAME)

    // Gears for Thermal Expansion
    GTMaterials.Nickel.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Copper.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Silver.addFlags(GTMaterialFlags.GENERATE_GEAR)
    GTMaterials.Lead.addFlags(GTMaterialFlags.GENERATE_GEAR)

    // Radioactive materials that get liquid forms and/or a new color
    addFluid(GTMaterials.Berkelium, $FluidStorageKeys.LIQUID, 1259);
    GTMaterials.Berkelium.setMaterialARGB(0xa33f20);
    GTMaterials.Berkelium.setMaterialSecondaryARGB(0x87001c);
    addFluid(GTMaterials.Californium, $FluidStorageKeys.LIQUID, 1173);
    GTMaterials.Californium.setMaterialARGB(0x7d0222);
    GTMaterials.Californium.setMaterialSecondaryARGB(0x410022);
    addFluid(GTMaterials.Neptunium, $FluidStorageKeys.LIQUID, 913);
    GTMaterials.Neptunium.setMaterialARGB(0x486d7b);
    GTMaterials.Neptunium.setMaterialSecondaryARGB(0x003064);
    GTMaterials.Neptunium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.Curium, $FluidStorageKeys.LIQUID, 1618);
    GTMaterials.Curium.setMaterialARGB(0x58307f);
    GTMaterials.Curium.setMaterialSecondaryARGB(0x221255);
    GTMaterials.Curium.setProperty(PropertyKey.DUST, new $DustProperty());
    GTMaterials.Curium.setProperty($PropertyKey.INGOT, new $IngotProperty());
    addFluid(GTMaterials.NetherStar, $FluidStorageKeys.LIQUID, 1337);
    addFluid(GTMaterials.Actinium, $FluidStorageKeys.LIQUID, 1324);
    GTMaterials.Americium.setMaterialSecondaryARGB(0x083946);

    // Liquid Sculk
    let liquid_sculk_prop = new $FluidProperty();
    liquid_sculk_prop.getStorage().enqueueRegistration($FluidStorageKeys.LIQUID, new $FluidBuilder().temperature(310).customStill())
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

    // Give Zincite an ore form
    let zincite_ore_prop = new $OreProperty(2, 2);
    zincite_ore_prop.setOreByProducts(GTMaterials.Iron, GTMaterials.Manganese)
    GTMaterials.Zincite.setProperty($PropertyKey.ORE, zincite_ore_prop)

    // Give Borax an ore form
    let borax_ore_prop = new $OreProperty(1, 2);
    borax_ore_prop.setOreByProducts(GTMaterials.Salt, GTMaterials.Boron, GTMaterials.RockSalt)
    GTMaterials.Borax.setProperty($PropertyKey.ORE, borax_ore_prop)

    // Give Iron II Chloride a dust form to replace fluid & recolor to match IRL anhydride.
    // Removing the FluidProperty causes errors in GT's hard-coded recipes so we add the fluid to the nukelist instead
    GTMaterials.Iron2Chloride.setProperty($PropertyKey.DUST, new $DustProperty());
    GTMaterials.Iron2Chloride.setMaterialARGB(0xC5E1A5)

    // HM-exclusive modifications
    if (doHarderProcessing) {
        // GTMaterials.Berkelium.setProperty(PropertyKey.INGOT, new $IngotProperty());
        GTMaterials.RhodiumSulfate.setProperty($PropertyKey.DUST, new $DustProperty());
    }
})

GTCEuStartupEvents.materialModification(event => {
    // Change materials' components
    GTMaterials.EchoShard.setComponents(GTMaterials.Quartzite.multiply(3), GTMaterials.Sculk.multiply(2))

    GTMaterials.Glowstone.setComponents(GTMaterials.TricalciumPhosphate.multiply(1), GTMaterials.Gold.multiply(1))
    GTMaterials.Glowstone.setFormula("AuCa3(PO4)2", true)

    GTMaterials.RhodiumPlatedPalladium.setComponents(GTMaterials.Palladium.multiply(3), GTMaterials.Rhodium.multiply(1), "2x lumium")
    GTMaterials.RhodiumPlatedPalladium.setFormula("Pd3Rh(SnFe)4(CuAg4)2", true)

    GTMaterials.Sugar.setComponents(GTMaterials.Carbon.multiply(12), GTMaterials.Water.multiply(11))
    GTMaterials.Sugar.setFormula("C12H22O11", true)

    // We keep Ingots in the material definition so we can replace it in the Ore Processing Diagram with vanilla Netherite Scrap, then remove it here.
    TagPrefix.ingot.setIgnored(GTMaterials.get("netherite_scrap"), Ingredient.of("minecraft:netherite_scrap"))

    // Reduce the abnormal spike in base GTM pipe properties as progression continues
    GTMaterials.Neutronium.getProperty(PropertyKey.FLUID_PIPE).setThroughput(400)
    GTMaterials.Neutronium.getProperty(PropertyKey.FLUID_PIPE).setMaxFluidTemperature(10000)
    GTMaterials.Ultimet.getProperty(PropertyKey.ITEM_PIPE).setTransferRate(4)
    GTMaterials.Osmiridium.getProperty(PropertyKey.ITEM_PIPE).setTransferRate(12)
    GTMaterials.Americium.getProperty(PropertyKey.ITEM_PIPE).setTransferRate(20)

    // SetIgnoreds for AE2 materials
    TagPrefix.gem.setIgnored(GTMaterials.CertusQuartz, $AEItems.CERTUS_QUARTZ_CRYSTAL)
    TagPrefix.gem.setIgnored(GTMaterials.get("charged_certus_quartz"), $AEItems.CERTUS_QUARTZ_CRYSTAL_CHARGED)
    TagPrefix.gem.setIgnored(GTMaterials.get("fluix"), $AEItems.FLUIX_CRYSTAL)

    TagPrefix.dust.setIgnored(GTMaterials.CertusQuartz, $AEItems.CERTUS_QUARTZ_DUST)
    TagPrefix.dust.setIgnored(GTMaterials.get("fluix"), $AEItems.FLUIX_DUST)

    TagPrefix.block.setIgnoredBlock(GTMaterials.CertusQuartz, $AEBlocks.QUARTZ_BLOCK.block())
    TagPrefix.block.setIgnoredBlock(GTMaterials.get("fluix"), $AEBlocks.FLUIX_BLOCK.block())

    // Change Fluix block to only have 4 gems instead of 9
    TagPrefix.block.modifyMaterialAmount(GTMaterials.get("fluix"), 4)

    // Buff turbine durability across the board to make turbine replacement play like maintenance - rare enough to be *nearly* negligible.
    // Preferential treatment is given to rotors with lower durability and low power or efficiency but high durability.
    GTMaterials.Ultimet.getProperty(PropertyKey.ROTOR).setDurability(6500)              // Now 240000, Previously 113600
    GTMaterials.Iron.getProperty(PropertyKey.ROTOR).setDurability(1650)                 // Now 98400,  Previously 28800
    GTMaterials.Osmiridium.getProperty(PropertyKey.ROTOR).setDurability(13000)          // Now 377600, Previously 149600
    GTMaterials.Steel.getProperty(PropertyKey.ROTOR).setDurability(2750)                // Now 137600, Previously 45600
    GTMaterials.Tritanium.getProperty(PropertyKey.ROTOR).setDurability(14350)           // Now 402400, Previously 323200
    GTMaterials.Osmium.getProperty(PropertyKey.ROTOR).setDurability(3750)               // Now 168000, Previously 83200
    GTMaterials.BlackBronze.getProperty(PropertyKey.ROTOR).setDurability(1900)          // Now 108000, Previously 28800
    GTMaterials.CobaltBrass.getProperty(PropertyKey.ROTOR).setDurability(2000)          // Now 111200, Previously 28800
    GTMaterials.Chromium.getProperty(PropertyKey.ROTOR).setDurability(2400)             // Now 125600, Previously 45600
    GTMaterials.RoseGold.getProperty(PropertyKey.ROTOR).setDurability(1200)             // Now 80000,  Previously 20800
    GTMaterials.Tungsten.getProperty(PropertyKey.ROTOR).setDurability(11250)            // Now 343200, Previously 131200
    GTMaterials.VanadiumSteel.getProperty(PropertyKey.ROTOR).setDurability(8750)        // Now 292000, Previously 108800
    GTMaterials.Naquadah.getProperty(PropertyKey.ROTOR).setDurability(4500)             // Now 188800, Previously 83200
    GTMaterials.Brass.getProperty(PropertyKey.ROTOR).setDurability(800)                 // Now 61600,  Previously 20800
    GTMaterials.Invar.getProperty(PropertyKey.ROTOR).setDurability(2500)                // Now 128800, Previously 45600
    GTMaterials.RhodiumPlatedPalladium.getProperty(PropertyKey.ROTOR).setDurability(4500) // Now 188800, Previously 72000
    GTMaterials.HSSG.getProperty(PropertyKey.ROTOR).setDurability(7800)                 // Now 270400, Previously 175200
    GTMaterials.Manganese.getProperty(PropertyKey.ROTOR).setDurability(4000)            // Now 175200, Previously 45600
    GTMaterials.Magnalium.getProperty(PropertyKey.ROTOR).setDurability(2250)            // Now 120000, Previously 28800
    GTMaterials.Molybdenum.getProperty(PropertyKey.ROTOR).setDurability(4000)           // Now 175200, Previously 45600
    GTMaterials.StainlessSteel.getProperty(PropertyKey.ROTOR).setDurability(1800)       // Now 104000, Previously 44000
    GTMaterials.Neutronium.getProperty(PropertyKey.ROTOR).setDurability(34000)          // Now 704800, Previously 4828000. Deliberately nerfed because Neutronium is kinda nutty in several ways
    GTMaterials.SterlingSilver.getProperty(PropertyKey.ROTOR).setDurability(1500)       // Now 92800,  Previously 24000
    GTMaterials.HSSS.getProperty(PropertyKey.ROTOR).setDurability(4000)                 // Now 175200, Previously 145600
    GTMaterials.Bronze.getProperty(PropertyKey.ROTOR).setDurability(1350)               // Now 86400,  Previously 24000
    GTMaterials.HSSE.getProperty(PropertyKey.ROTOR).setDurability(6000)                 // Now 228000, Previously 205600
    GTMaterials.NaquadahAlloy.getProperty(PropertyKey.ROTOR).setDurability(11650)       // Now 351200, Previously 205600
    GTMaterials.Iridium.getProperty(PropertyKey.ROTOR).setDurability(11350)             // Now 345600, Previously 131200
    GTMaterials.TungstenSteel.getProperty(PropertyKey.ROTOR).setDurability(8100)        // Now 277600, Previously 131200
    GTMaterials.WroughtIron.getProperty(PropertyKey.ROTOR).setDurability(1750)          // Now 102400, Previously 37600
    GTMaterials.Neodymium.getProperty(PropertyKey.ROTOR).setDurability(4000)            // Now 175200, Previously 45600
    GTMaterials.Aluminium.getProperty(PropertyKey.ROTOR).setDurability(1000)            // Now 71200,  Previously 18400
    GTMaterials.Titanium.getProperty(PropertyKey.ROTOR).setDurability(7350)             // Now 260000, Previously 96000
    GTMaterials.BismuthBronze.getProperty(PropertyKey.ROTOR).setDurability(1350)        // Now 86400,  Previously 28800
    GTMaterials.TungstenCarbide.getProperty(PropertyKey.ROTOR).setDurability(4000)      // Now 175200, Previously 83200
})
