/**
 * Definitions for new ore veins using the GregTech: Modern API & tweaks for existing veins.
 */

GTCEuServerEvents.oreVeins(event => {
    // Overworld veins
    event.add("kubejs:overworld/uraninite", vein => {
        vein.weight(30)
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

    event.add("kubejs:overworld/tetrahedrite", vein => {
        vein.weight(50)
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
    event.add("kubejs:moon/diamond", vein => {
        vein.weight(20)
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
	
    event.add("kubejs:moon/gold", vein => {
        vein.weight(40)
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

    event.add("kubejs:moon/manganese", vein => {
        vein.weight(30)
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
	
    event.add("kubejs:moon/molybdenum", vein => {
        vein.weight(20)
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
	
    event.add("kubejs:moon/quartz", vein => {
        vein.weight(40)
        vein.clusterSize(45)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(40, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.NetherQuartz).size(1, 3))
                .layer(l => l.weight(3).mat(GTMaterials.CertusQuartz).size(1, 2))
				.layer(l => l.weight(2).mat(GTMaterials.get('dilithium')).size(1, 1))
            )
        )
		vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.NetherQuartz)
			.placement("above")
		)
    })
	
	event.add("kubejs:moon/tungsten", vein => {
        vein.weight(45)
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
	
    event.add("kubejs:moon/tetrahedrite", vein => {
        vein.weight(30)
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

    event.add("kubejs:moon/fluorite", vein => {
        vein.weight(40)
        vein.clusterSize(25)
        vein.layer("moon")
        vein.dimensions("ad_astra:moon")
        vein.heightRangeUniform(-40, 50)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(5).mat(GTMaterials.get('fluorite')).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Sphalerite).size(2, 4))
                .layer(l => l.weight(2).mat(GTMaterials.Bastnasite).size(2, 4))
            )
        )
        vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.get('fluorite'))
			.placement("above")
		)
	})

    event.add("kubejs:moon/bauxite_vein_moon", vein => {
        vein.weight(40)
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
    event.add("kubejs:mars/tungstate_vein_mars", vein => {
        vein.weight(50)
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
    
    event.add("kubejs:mars/iron_vein_mars", vein => {
        vein.weight(40)
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
    
    event.add("kubejs:mars/nickel_vein_mars", vein => {
        vein.weight(40)
        vein.clusterSize(30)
        vein.layer("mars")
        vein.dimensions("ad_astra:mars")
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
    
    event.add("kubejs:mars/rare_earth_metal_vein_mars", vein => {
        vein.weight(40)
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
    
    event.add("kubejs:mars/copper_vein_mars", vein => {
        vein.weight(30)
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
    
    event.add("kubejs:mars/zinc_vein_mars", vein => {
        vein.weight(45)
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
    
    // Venus veins
    event.add("kubejs:venus/tungstotitanate_vein_venus", vein => {
        vein.weight(40)
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
    
    event.add("kubejs:venus/sulfur_vein_venus", vein => {
        vein.weight(40)
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
    
    event.add("kubejs:venus/copper_vein_venus", vein => {
        vein.weight(40)
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
    
    event.add("kubejs:venus/iron_vein_venus", vein => {
        vein.weight(40)
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
    
    // Mercury veins
    event.add("kubejs:mercury/mercury_vein_mercury", vein => {
        vein.weight(40)
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
    
    // Increase vein density
    event.modifyAll((id, vein) => {
        vein.density(0.5)
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
