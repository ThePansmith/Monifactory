/**
 * A tale of Dense ores and how you undensify them
 */

const ores = [
    {name: 'redstone', mod: 'gtceu'},
    {name: 'diamond', mod: 'gtceu'},
    {name: 'emerald', mod: 'gtceu'},
    {name: 'lapis', mod: 'gtceu'},
    {name: 'coal', mod: 'gtceu'},
    {name: 'nether_quartz', mod: 'gtceu'},
    {name: 'iron', mod: 'minecraft'},
    {name: 'gold', mod: 'minecraft'},
    {name: 'copper', mod: 'minecraft'},
]

ServerEvents.recipes(event => {
    ores.forEach(ore => {
        event.recipes.gtceu.chemical_reactor(`kubejs:undensify_${ore.name}`)
            .itemInputs(`kubejs:dense_${ore.name}_ore`)
            .itemOutputs(`16x ${ore.mod}:raw_${ore.name}`)
            .inputFluids(Fluid.of("gtceu:nitric_acid", 1000))
            .duration(200)
            .EUt(500)
    })

    event.recipes.gtceu.chemical_reactor("kubejs:undensify_oilsands")
        .itemInputs("kubejs:dense_oilsands_ore")
        .itemOutputs('16x gtceu:raw_oilsands')
        .inputFluids(Fluid.of("gtceu:nitric_acid", 1000))
        .duration(200)
        .EUt(500)

    event.recipes.gtceu.chemical_reactor("kubejs:undensify_magma")
        .itemInputs("kubejs:dense_magma_block")
        .itemOutputs('16x minecraft:magma_block')
        .inputFluids(Fluid.of("gtceu:nitric_acid", 1000))
        .duration(200)
        .EUt(500)
})

ServerEvents.tags('item', event => {
    // dense ore mod is gone, so we tag it
    ores.forEach(ore => {
        event.add("forge:ores/dense", `forge:ores/dense/${ore.name}`, `kubejs:dense_${ore.name}`);
        // event.add('forge:dense_ores', `kubejs:dense_${ore}`);
    })
})

ServerEvents.tags('block', event => {
    // might as well
    ores.forEach(ore => {
        event.add("forge:ores/dense", `forge:ores/dense/${ore.name}`, `kubejs:dense_${ore.name}`);
    })
})
