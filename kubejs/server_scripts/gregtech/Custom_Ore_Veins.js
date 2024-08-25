/*
GTCEuServerEvents.oreVeins(event => {
  event.add("kubejs:custom_vein", vein => {
    // Basic vein generation properties
    vein.weight(200) // [*] 
    vein.clusterSize(40) // [*] 
    vein.density(0.25) // [*] 
    vein.discardChanceOnAirExposure(0) // 

    // Define where the vein can generate
    vein.layer("deepslate") // [*] 
    vein.dimensions("minecraft:overworld") // 
    vein.biomes("#minecraft:is_overworld") // 

    // Define a height range:
    // You must choose EXACTLY ONE of these options! [*]
    vein.heightRangeUniform(-60, 20)
    // Define the vein's generator:
    vein.generator(/* ... *//*) // [*] 
// Add one or more type of surface indicator to the vein:
vein.addIndicator(/* ... *//*) 
})
})
*/

GTCEuServerEvents.oreVeins(event => {
    event.add("kubejs:overworld/uraninite", vein => {
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Pitchblende).size(1, 1))
                .layer(l => l.weight(3).mat(GTMaterials.Uraninite).size(2, 4))
            )
        )
    })

    event.add("kubejs:overworld/tetrahedrite", vein => {
        vein.weight(50)
        vein.clusterSize(40)
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")
        vein.heightRangeUniform(30, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Tetrahedrite).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Copper).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(1, 4))
            )
        )
    })
	
	// Moon veins
    event.add("kubejs:luna/diamond", vein => {
        vein.weight(20)
        vein.clusterSize(25)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.biomes("gcyr:moon")
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
			.density(0.4)
			.radius(5)
		)
    })	
	
    event.add("kubejs:luna/gold", vein => {
        vein.weight(40)
        vein.clusterSize(25)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.biomes("gcyr:moon")
        vein.heightRangeUniform(10, 60)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(3).mat(GTMaterials.Magnetite).size(1, 3))
                .layer(l => l.weight(1).mat(GTMaterials.VanadiumMagnetite).size(1, 1))
				.layer(l => l.weight(5).mat(GTMaterials.Gold).size(1, 4))
            )
        )
		vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Gold)
			.placement("above")
			.density(0.4)
			.radius(5)
		)
    })

    event.add("kubejs:luna/manganese", vein => {
        vein.weight(30)
        vein.clusterSize(70)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.biomes("gcyr:moon")
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
    })	
	
    event.add("kubejs:luna/molybdenum", vein => {
        vein.weight(20)
        vein.clusterSize(80)
        vein.density(0.6)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.biomes("gcyr:moon")
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
    })	
	
    event.add("kubejs:luna/quartz", vein => {
        vein.weight(40)
        vein.clusterSize(45)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.biomes("gcyr:moon")
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
			.density(0.4)
			.radius(5)
		)
    })

    event.add("kubejs:luna/rutil", vein => {
        vein.weight(30)
        vein.clusterSize(25)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.biomes("gcyr:moon")
        vein.heightRangeUniform(40, 80)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(1).mat(GTMaterials.Aluminium).size(1, 1))
                .layer(l => l.weight(6).mat(GTMaterials.Ilmenite).size(1, 4))
				.layer(l => l.weight(3).mat(GTMaterials.Bauxite).size(1, 3))
            )
        )
		vein.surfaceIndicatorGenerator(indicator => indicator
			.surfaceRock(GTMaterials.Ilmenite)
			.placement("above")
			.density(0.4)
			.radius(5)
		)
    })	
	
	event.add("kubejs:luna/tungsten", vein => {
        vein.weight(45)
        vein.clusterSize(25)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.biomes("gcyr:moon")
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
			.density(0.4)
			.radius(5)
		)
    })	
	
    event.add("kubejs:luna/tetrahedrite", vein => {
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.biomes("gcyr:moon")
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
			.density(0.4)
			.radius(5)
		)
    })

})


// Remove ore indicators, increase density

GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((id, vein) => {
        vein.density(0.8)
        vein.discardChanceOnAirExposure(0.3)
    })

})

//Remove Naquadah veins
GTCEuServerEvents.oreVeins(event => {
    event.remove("gtceu:naquadah_vein") 
})  
