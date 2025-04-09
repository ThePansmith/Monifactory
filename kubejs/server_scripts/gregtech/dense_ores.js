/**
 * A tale of Dense ores and how you undensify them
 */

const ores = [
    ["redstone", 4],
    ["diamond", 4],
    ["emerald", 4],
    ["gold", 4],
    ["lapis", 4],
    ["iron", 4],
    ["coal", 4],
    ["nether_quartz", 2],
    ["copper", 4]
]

ServerEvents.recipes(event => {
    ores.forEach(([name, amount]) => {
        event.recipes.gtceu.chemical_reactor(`kubejs:undensify_${name}`)
            .itemInputs(`${amount}x kubejs:dense_${name}_ore`)
            .itemOutputs(ChemicalHelper.get("raw", name, 64))
            .inputFluids(Fluid.of("gtceu:nitric_acid", 1000))
            .duration(200)
            .EUt(500)
    })

    event.recipes.gtceu.chemical_reactor("kubejs:undensify_oilsands")
        .itemInputs("4x kubejs:dense_oilsands_ore")
        .itemOutputs("64x gtceu:endstone_oilsands_ore")
        .inputFluids(Fluid.of("gtceu:nitric_acid", 1000))
        .duration(200)
        .EUt(500)

    event.recipes.gtceu.chemical_reactor("kubejs:undensify_magma")
        .itemInputs("4x kubejs:dense_magma_block")
        .itemOutputs("64x minecraft:magma_block")
        .inputFluids(Fluid.of("gtceu:nitric_acid", 1000))
        .duration(200)
        .EUt(500)
})
