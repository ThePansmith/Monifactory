GTCEuServerEvents.fluidVeins(event => {

    event.add('gtceu:custom_bedrock_fluid_vein', vein => {
        vein.dimensions('javd:void')
        vein.fluid(() => Fluid.of("gtceu:oil_medium").fluid)
        vein.weight(1000)
        vein.minimumYield(300)
        vein.maximumYield(300)
        vein.depletionAmount(0)
        vein.depletionChance(0)
        vein.depletedYield(300)
    })
  
})
