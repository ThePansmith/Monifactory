ServerEvents.recipes(event => {
    function DimensionalRockCrushing(namespace, output, EUt, dimension) {
        event.recipes.gtceu.rock_breaker(`${output}`)
            .notConsumable(`${namespace}:${output}`)
            .itemOutputs(`${namespace}:${output}`)
            .duration(16)
            .EUt(EUt)
            .addData("fluidA", "minecraft:lava")
            .addData("fluidB", "minecraft:water")
            .dimension(dimension)

        event.recipes.gtceu.rock_cycle_simulator(`${output}`)
            .notConsumable(`${namespace}:${output}`)
            .itemOutputs(`${namespace}:${output}`)
            .duration(16)
            .EUt(EUt)
            .dimension(dimension)
    }

    DimensionalRockCrushing("minecraft", "end_stone", GTValues.VA[GTValues.IV], "the_end")
    DimensionalRockCrushing("minecraft", "netherrack", GTValues.VA[GTValues.EV], "the_nether")
})