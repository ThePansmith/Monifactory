GTCEuServerEvents.fluidVeins(event => {

    event.add('kubejs:void/oil', vein => {
        vein.dimensions('javd:void')
        vein.fluid(() => Fluid.of("gtceu:oil_medium").fluid)
        vein.weight(1000)
        vein.minimumYield(300)
        vein.maximumYield(300)
        vein.depletionAmount(0)
        vein.depletionChance(0)
        vein.depletedYield(300)
    })

// Luna fluid veins	
	event.add('kubejs:moon/deuterium', vein => {
        vein.dimensions('gcyr:luna')
        vein.fluid(() => Fluid.of("gtceu:deuterium").fluid)
        vein.weight(60)
        vein.minimumYield(10)
        vein.maximumYield(30)
        vein.depletionAmount(1)
        vein.depletionChance(50)
        vein.depletedYield(5)
    })
	
		event.add('kubejs:moon/helium_3', vein => {
        vein.dimensions('gcyr:luna')
        vein.fluid(() => Fluid.of("gtceu:helium_3").fluid)
        vein.weight(35)
        vein.minimumYield(5)
        vein.maximumYield(20)
        vein.depletionAmount(1)
        vein.depletionChance(50)
        vein.depletedYield(3)
    })
  
})