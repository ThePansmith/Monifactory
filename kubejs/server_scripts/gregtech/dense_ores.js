/**
 * A tale of Dense ores and how you undensify them
 */

const ores = [
    ['redstone', 16],
    ['diamond', 16],
    ['emerald', 16],
    ['gold', 16],
    ['lapis', 16],
    ['iron', 16],
    ['coal', 16],
    ['nether_quartz', 32],
    ['copper', 16],
]

ServerEvents.recipes(event => {
    ores.forEach(([name, amount]) => {
        event.recipes.gtceu.chemical_reactor(`kubejs:undensify_${name}`)
            .itemInputs(`kubejs:dense_${name}_ore`)
            .itemOutputs(ChemicalHelper.get("raw", name, amount))
            .inputFluids(Fluid.of("gtceu:nitric_acid", 1000))
            .duration(200)
            .EUt(500)
    })

    event.recipes.gtceu.chemical_reactor("kubejs:undensify_oilsands")
        .itemInputs("kubejs:dense_oilsands_ore")
        .itemOutputs('16x gtceu:endstone_oilsands_ore')
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
