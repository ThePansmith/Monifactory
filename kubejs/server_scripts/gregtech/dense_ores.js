const ores = [
    "redstone_ore",
    'diamond_ore',
    'emerald_ore',
    'gold_ore',
    'lapis_ore',
    'iron_ore',
    'coal_ore',
    'nether_quartz_ore',
    'copper_ore'
]

ServerEvents.recipes(event => {
    function unDensify(name) {
        event.recipes.gtceu.chemical_reactor(`kubejs:undensify_${name}`)
            .itemInputs(`kubejs:dense_${name}`)
            .itemOutputs(`16x gtceu:${name}`)
            .inputFluids(Fluid.of("gtceu:nitric_acid", 1000))
            .duration(200)
            .EUt(500)
    }

    ores.forEach(ore => {
        unDensify(ore);
    })

    event.recipes.gtceu.chemical_reactor("kubejs:undensify_oilsands")
        .itemInputs("kubejs:dense_oilsands_ore")
        .itemOutputs('16x ' + "gtceu:endstone_oilsands_ore")
        .inputFluids(Fluid.of("gtceu:nitric_acid", 1000))
        .duration(200)
        .EUt(500)
})

ServerEvents.tags('item', event => {
    // dense ore mod is gone, so we tag it
    ores.forEach(ore => {
        event.add("forge:ores", `kubejs:dense_${ore}`);
        // event.add('forge:dense_ores', "kubejs:dense_" + ore);
    })
})

ServerEvents.tags('block', event => {
    // might as well
    ores.forEach(ore => {
        event.add("forge:ores", `kubejs:dense_${ore}`);
    })
})

