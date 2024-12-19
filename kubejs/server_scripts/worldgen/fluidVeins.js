const Registries = Java.loadClass('net.minecraft.core.registries.Registries')
const ResourceKey = Java.loadClass('net.minecraft.resources.ResourceKey')

GTCEuServerEvents.fluidVeins(event => {

    // Void dim oil
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
        vein.dimensions('ad_astra:moon')
        vein.fluid(() => Fluid.of("gtceu:deuterium").fluid)
        vein.weight(60)
        vein.minimumYield(10)
        vein.maximumYield(30)
        vein.depletionAmount(1)
        vein.depletionChance(50)
        vein.depletedYield(5)
    })
	
	event.add('kubejs:moon/helium_3', vein => {
        vein.dimensions('ad_astra:moon')
        vein.fluid(() => Fluid.of("gtceu:helium_3").fluid)
        vein.weight(35)
        vein.minimumYield(5)
        vein.maximumYield(20)
        vein.depletionAmount(1)
        vein.depletionChance(50)
        vein.depletedYield(3)
    })

    // Mars fluid veins (haha water on Mars)
    event.add('kubejs:mars/ice', vein => {
        vein.dimensions('ad_astra:mars')
        vein.fluid(() => Fluid.of("gtceu:ice").fluid)
        vein.weight(0)
        vein.minimumYield(10)
        vein.maximumYield(30)
        vein.depletionAmount(1)
        vein.depletionChance(50)
        vein.depletedYield(3)
    })

    // Venus fluid veins
    event.add('kubejs:venus/sulfuric_acid', vein => {
        vein.dimensions('ad_astra:venus')
        vein.fluid(() => Fluid.of("gtceu:sulfuric_acid").fluid)
        vein.weight(1)
        vein.minimumYield(10)
        vein.maximumYield(40)
        vein.depletionAmount(1)
        vein.depletionChance(30)
        vein.depletedYield(5)
    })

    //Mercury fluid veins (Haha Mercury is made of Mercury)
    event.add('kubejs:mercury/mercury', vein => {
        vein.dimensions('ad_astra:mercury')
        vein.fluid(() => Fluid.of("gtceu:mercury").fluid)
        vein.weight(1)
        vein.minimumYield(10)
        vein.maximumYield(15)
        vein.depletionAmount(0)
        vein.depletionChance(0)
        vein.depletedYield(2)
    })
})