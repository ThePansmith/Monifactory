/**
 * Definitions for new ore veins using the GregTech: Modern API & tweaks for existing veins.
 */

const WorldGenLayers = Java.loadClass("com.gregtechceu.gtceu.api.data.worldgen.WorldGenLayers")

GTCEuServerEvents.oreVeins(event => {
    // Overworld veins
    event.add("overworld/uraninite", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Pitchblende).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Uraninite).size(2, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Uraninite)
            .placement("above")
        )
    })

    event.add("overworld/tetrahedrite", vein => {
        vein.weight(50)
        vein.density(0.25)
        vein.clusterSize(40)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Tetrahedrite).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Copper).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(1, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tetrahedrite)
            .placement("above")
        )
    })

    // Moon veins
    event.add("moon/diamond", vein => {
        vein.weight(20)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-40, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(6).mat(GTMaterials.Diamond).size(1, 3))
                .layer(l => l.weight(4).mat(GTMaterials.Graphite).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Diamond)
            .placement("above")
        )
    })

    event.add("moon/gold", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Magnetite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.VanadiumMagnetite).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Chromite).size(1, 2))
                .layer(l => l.weight(5).mat(GTMaterials.Gold).size(1, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Gold)
            .placement("above")
        )
    })

    event.add("moon/manganese", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(70)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(20, 100)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Grossular, 3)
            .oreBlock(GTMaterials.Spessartine, 3)
            .oreBlock(GTMaterials.Pyrolusite, 3)
            .oreBlock(GTMaterials.Tantalite, 1)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10)
            .maxEdgeRoundoff(0.2)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Pyrolusite)
            .placement("above")
        )
    })

    event.add("moon/molybdenum", vein => {
        vein.weight(20)
        vein.density(0.25)
        vein.clusterSize(80)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(20, 100)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Wulfenite, 3)
            .oreBlock(GTMaterials.Chalcopyrite, 3)
            .oreBlock(GTMaterials.Molybdenite, 2)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.3)
            .minRichness(0.3)
            .maxRichness(0.5)
            .edgeRoundoffBegin(10)
            .maxEdgeRoundoff(0.2)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Molybdenite)
            .placement("above")
        )
    })

    event.add("moon/quartz", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(45)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(40, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.NetherQuartz).size(1, 3))
                .layer(l => l.weight(3).mat(GTMaterials.CertusQuartz).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.get("dilithium")).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.NetherQuartz)
            .placement("above")
        )
    })

    event.add("moon/tungsten", vein => {
        vein.weight(45)
        vein.density(0.25)
        vein.clusterSize(15)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-40, 20)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(6).mat(GTMaterials.Scheelite).size(1, 4))
                .layer(l => l.weight(4).mat(GTMaterials.Tungstate).size(1, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Scheelite)
            .placement("above")
        )
    })

    event.add("moon/tetrahedrite", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(40, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Tetrahedrite).size(1, 3))
                .layer(l => l.weight(2).mat(GTMaterials.Copper).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tetrahedrite)
            .placement("above")
        )
    })

    event.add("moon/fluorite", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-40, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.get("fluorite")).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Sphalerite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Bastnasite).size(2, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("fluorite"))
            .placement("above")
        )
    })

    event.add("moon/bauxite", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Bauxite).size(1, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Ilmenite).size(1, 2))
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Bauxite)
            .placement("above")
        )
    })

    // Mars veins
    event.add("mars/tungstate", vein => {
        vein.weight(50)
        vein.density(0.25)
        vein.clusterSize(35)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(10, 80)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Tungstate, 2, 18, 80)
            .withBlock(GTMaterials.Scheelite, 2, 15, 80)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tungstate)
            .placement("above")
        )
    })

    event.add("mars/iron", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(50)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(10, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Iron, 4)
            .oreBlock(GTMaterials.Hematite, 3)
            .rareBlock(GTMaterials.Gold, 1)
            .oreBlock(GTMaterials.Pyrite, 3)
            .rareBlockChance(0.33)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.4)
            .minRichness(0.3)
            .maxRichness(0.6)
            .edgeRoundoffBegin(12)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Hematite)
            .placement("above")
        )
    })

    event.add("mars/rare_earth_metal", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(10, 80)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Monazite, 2, 18, 80)
            .withBlock(GTMaterials.Molybdenite, 2, 16, 80)
            .withBlock(GTMaterials.Bastnasite, 2, 14, 80)
            .withBlock(GTMaterials.Neodymium, 1, 12, 80)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Molybdenite)
            .placement("above")
        )
    })

    event.add("mars/copper", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(45)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(10, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Copper, 4)
            .oreBlock(GTMaterials.Tetrahedrite, 3)
            .oreBlock(GTMaterials.Chalcopyrite, 2)
            .oreBlock(GTMaterials.Pyrite, 1)
            .rareBlockChance(0.33)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.4)
            .minRichness(0.4)
            .maxRichness(0.7)
            .edgeRoundoffBegin(12)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Chalcopyrite)
            .placement("above")
        )
    })

    event.add("mars/zinc", vein => {
        vein.weight(45)
        vein.density(0.25)
        vein.clusterSize(40)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(10, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Tetrahedrite, 4)
            .oreBlock(GTMaterials.Copper, 3)
            .rareBlock(GTMaterials.Stibnite, 1)
            .rareBlockChance(0.33)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.4)
            .minRichness(0.4)
            .maxRichness(0.5)
            .edgeRoundoffBegin(12)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Stibnite)
            .placement("above")
        )
    })

    event.add("mars/beryllium", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(70)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(-20, 5)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Emerald, 3, -20, 5)
            .withBlock(GTMaterials.Beryllium, 3, -20, 5)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Emerald)
            .placement("above")
        )
    })

    event.add("mars/cassiterite", vein => {
        vein.weight(65)
        vein.density(0.25)
        vein.clusterSize(60)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
        vein.heightRangeUniform(20, 120)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Tin, 4)
            .oreBlock(GTMaterials.Zeolite, 2)
            .rareBlock(GTMaterials.Cassiterite, 2)
            .rareBlock(GTMaterials.Realgar, 1)
            .rareBlockChance(0.4)
            .veininessThreshold(0.01)
            .maxRichnessThreshold(0.175)
            .minRichness(0.7)
            .maxRichness(1.0)
            .edgeRoundoffBegin(3)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cassiterite)
            .placement("above")
        )
    })

    // Venus veins
    event.add("venus/tungstotitanate", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(50)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(10, 80)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Tungstate, 8, 18, 80)
            .withBlock(GTMaterials.Scheelite, 4, 15, 80)
            .withBlock(GTMaterials.Bauxite, 2, 15, 80)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Tungstate)
            .placement("above")
        )
    })

    event.add("venus/sulfur", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(75)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(10, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Sulfur, 5)
            .oreBlock(GTMaterials.Tetrahedrite, 1)
            .rareBlock(GTMaterials.Sphalerite, 1)
            .rareBlockChance(0.33)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.4)
            .minRichness(0.3)
            .maxRichness(0.7)
            .edgeRoundoffBegin(12)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sulfur)
            .placement("above")
        )
    })

    event.add("venus/copper", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(60)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(10, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Copper, 4)
            .oreBlock(GTMaterials.Tetrahedrite, 3)
            .oreBlock(GTMaterials.Chalcopyrite, 2)
            .oreBlock(GTMaterials.Pyrite, 1)
            .rareBlockChance(0.33)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.4)
            .minRichness(0.4)
            .maxRichness(0.5)
            .edgeRoundoffBegin(12)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Chalcopyrite)
            .placement("above")
        )
    })

    event.add("venus/iron", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(40)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(10, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Iron, 4)
            .oreBlock(GTMaterials.Hematite, 3)
            .rareBlock(GTMaterials.Gold, 1)
            .oreBlock(GTMaterials.Pyrite, 3)
            .rareBlockChance(0.33)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.4)
            .minRichness(0.4)
            .maxRichness(0.6)
            .edgeRoundoffBegin(12)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Hematite)
            .placement("above")
        )
    })

    event.add("venus/tricalcium_phosphate", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(45)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Apatite).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.TricalciumPhosphate).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Pyrochlore).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.TricalciumPhosphate)
            .placement("above")
        )
    })

    event.add("venus/galena", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(50)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(-15, 45)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Galena).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Silver).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Lead).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Galena)
            .placement("above")
        )
    })

    event.add("venus/sheldonite", vein => {
        vein.weight(10)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(-50, 0)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.get("cuprorhodsite")).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Cooperite).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Platinum).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Palladium).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cooperite)
            .placement("above")
        )
    })

    event.add("venus/lubricant", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(0, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Soapstone).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Talc).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.GlauconiteSand).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Olivine).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Soapstone)
            .placement("above")
        )
    })

    event.add("venus/nickel", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(10, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Nickel).size(1, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Garnierite).size(1, 8))
                .layer(l => l.weight(2).mat(GTMaterials.Pentlandite).size(1, 5))
                .layer(l => l.weight(2).mat(GTMaterials.Cobaltite).size(1, 16))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Garnierite)
            .placement("above")
        )
    })

    event.add("venus/dilithium", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(50)
        vein.layer("venus")
        vein.dimensions("ad_astra:venus")
        vein.heightRangeUniform(30, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.get("dilithium")).size(2, 4))
                .layer(l => l.weight(3).mat(GTMaterials.Lepidolite).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Spodumene).size(1, 2))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("dilithium"))
            .placement("above")
        )
    })

    // Mercury veins
    event.add("mercury/mercury", vein => {
        vein.weight(100)
        vein.density(0.25)
        vein.clusterSize(60)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(10, 80)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.Redstone, 4)
            .oreBlock(GTMaterials.Cinnabar, 3)
            .oreBlock(GTMaterials.Cinnabar, 2)
            .oreBlock(GTMaterials.Ruby, 1)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.4)
            .minRichness(0.5)
            .maxRichness(0.9)
            .edgeRoundoffBegin(12)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Cinnabar)
            .placement("above")
        )
    })

    event.add("mercury/fluorite", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(25)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-40, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.get("fluorite")).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.BlueTopaz).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Topaz).size(2, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("fluorite"))
            .placement("above")
        )
    })

    event.add("mercury/mineral_sands", vein => {
        vein.weight(60)
        vein.density(0.25)
        vein.clusterSize(40)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(15, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.BasalticMineralSand).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.FullersEarth).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Gypsum).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.BasalticMineralSand)
            .placement("above")
        )
    })

    event.add("mercury/lithium_salts", vein => {
        vein.weight(50)
        vein.density(0.25)
        vein.clusterSize(40)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(30, 70)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.RockSalt).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Salt).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Lepidolite).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Spodumene).size(2, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Lepidolite)
            .placement("above")
        )
    })

    event.add("mercury/garnet_tin", vein => {
        vein.weight(70)
        vein.density(0.25)
        vein.clusterSize(40)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(20, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.CassiteriteSand).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.GarnetSand).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Asbestos).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.GarnetSand)
            .placement("above")
        )
    })

    event.add("mercury/platinum_group", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-50, 0)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Barite, 1, -50, -15)
            .withBlock(GTMaterials.get("laurite"), 2, -30, 0)
            .withBlock(GTMaterials.get("cuprorhodsite"), 1, -50, -25)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("laurite"))
            .placement("above")
        )
    })

    event.add("mercury/titanotungstate", vein => {
        vein.weight(50)
        vein.density(0.25)
        vein.clusterSize(50)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-50, -20)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Wulfenite, 8, -50, -30)
            .withBlock(GTMaterials.Ilmenite, 4, -40, -20)
            .withBlock(GTMaterials.Bauxite, 2, -50, -20)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Wulfenite)
            .placement("above")
        )
    })

    event.add("mercury/thorium", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(50)
        vein.layer("mercury")
        vein.dimensions("ad_astra:mercury")
        vein.heightRangeUniform(-60, -30)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(4).mat(GTMaterials.Thorium).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Plutonium239).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Thorium)
            .placement("above")
        )
    })

    // Glacio Veins
    event.add("glacio/oilsands", vein => {
        vein.weight(20)
        vein.density(0.25)
        vein.clusterSize(35)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(30, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Oilsands).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.GraniticMineralSand).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Oilsands)
            .placement("above")
        )
    })

    event.add("glacio/electrotine", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(5, 45)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Saltpeter).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Electrotine).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Alunite).size(1, 1))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Electrotine)
            .placement("above")
        )
    })

    event.add("glacio/osmiridium", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(50)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(10, 90)
        vein.veinedVeinGenerator(generator => generator
            .oreBlock(GTMaterials.get("osmiridium"), 4)
            .oreBlock(GTMaterials.get("iridosmine"), 3)
            .veininessThreshold(0.1)
            .maxRichnessThreshold(0.4)
            .minRichness(0.5)
            .maxRichness(0.9)
            .edgeRoundoffBegin(12)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.get("iridosmine"))
            .placement("above")
        )
    })

    event.add("glacio/rare_earth_phosphate", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(30)
        vein.layer("glacio")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(10, 80)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Monazite, 2, 18, 80)
            .withBlock(GTMaterials.Apatite, 2, 16, 80)
            .withBlock(GTMaterials.Bastnasite, 2, 14, 80)
            .withBlock(GTMaterials.Neodymium, 1, 10, 80)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Monazite)
            .placement("above")
        )
    })

    // Glacio Deepslate Veins
    event.add("glacio/sodalite", vein => {
        vein.weight(40)
        vein.density(0.25)
        vein.clusterSize(100)
        vein.layer("glacio_deepslate")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(-60, 10)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Lapis, 3, -40, 10)
            .withBlock(GTMaterials.Sodalite, 2, -50, 0)
            .withBlock(GTMaterials.Lazurite, 1, -60, -10)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Sodalite)
            .placement("above")
        )
    })

    event.add("glacio/pollucite", vein => {
        vein.weight(20)
        vein.density(0.25)
        vein.clusterSize(50)
        vein.layer("glacio_deepslate")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(-40, -10)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Kyanite).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Mica).size(1, 1))
                .layer(l => l.weight(1).mat(GTMaterials.Pollucite).size(2, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Pollucite)
            .placement("above")
        )
    })

    let naqMaterial = !doHarderProcessing ? GTMaterials.Naquadah : GTMaterials.get("snowchestite")
    event.add("glacio/naquadah", vein => {
        vein.weight(30)
        vein.density(0.25)
        vein.clusterSize(60)
        vein.layer("glacio_deepslate")
        vein.dimensions("ad_astra:glacio")
        vein.heightRangeUniform(-45, 10)
        vein.cuboidVeinGenerator(generator => generator
            .top(b => b.mat(naqMaterial).size(2))
            .middle(b => b.mat(naqMaterial).size(3))
            .bottom(b => b.mat(naqMaterial).size(2))
            .spread(b => b.mat(GTMaterials.get("kaemanite")))
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(naqMaterial)
            .placement("above")
        )
    })

    // End Veins
    event.add("end/magnesite", vein => {
        vein.weight(20)
        vein.density(0.25)
        vein.clusterSize(60)
        vein.layer(WorldGenLayers.ENDSTONE)
        vein.dimensions("minecraft:the_end")
        vein.heightRangeUniform(20, 55)
        vein.dikeVeinGenerator(generator => generator
            .withBlock(GTMaterials.Magnesite, 3, 20, 60)
            .withBlock(GTMaterials.Cobaltite, 2, 35, 55)
            .withBlock(GTMaterials.Cobalt, 1, 20, 40)
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
            .surfaceRock(GTMaterials.Magnesite)
            .placement("above")
        )
    })

    // Increase vein density
    event.modifyAll((id, vein) => {
        vein.density(Math.sqrt(vein.density()))
        vein.discardChanceOnAirExposure(0.3)
    })
})

// Remove Naquadah veins
GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:naquadah_vein")
})


GTCEuServerEvents.oreVeins(event => {
    // Make End Magnetite veins more rich in Chromite
    event.modify("gtceu:magnetite_vein_end", vein => {
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.VanadiumMagnetite).size(1, 2))
                .layer(l => l.weight(2).mat(GTMaterials.Chromite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.Gold).size(1, 2))
                .build()
            )
        )
    })
})
