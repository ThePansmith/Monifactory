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
        vein.weight(20)
        vein.clusterSize(30)
        vein.density(0.25)
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
        vein.weight(30)
        vein.clusterSize(30)
        vein.density(0.25)
        vein.discardChanceOnAirExposure(0)
        vein.layer("stone")
        vein.dimensions("minecraft:overworld")
        vein.biomes("#minecraft:is_overworld")
        vein.heightRangeUniform(60, 120)
        vein.layeredVeinGenerator(generator => generator
            .buildLayerPattern(pattern => pattern
                .layer(l => l.weight(2).mat(GTMaterials.Tetrahedrite).size(1, 1))
                .layer(l => l.weight(2).mat(GTMaterials.Copper).size(2, 4))
                .layer(l => l.weight(1).mat(GTMaterials.Stibnite).size(1, 4))
            )
        )
    })
})


// Remove ore indicators

GTCEuServerEvents.oreVeins(event => {
    event.modifyAll((id, vein) => {
        vein.indicatorGenerators().clear()
    })
})  