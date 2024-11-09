ServerEvents.recipes(event => {

    // Need some kind of teleportation, this mod will do for now
    event.remove({ output: 'waystones:warp_stone' })
    event.recipes.gtceu.autoclave("warp_stone")
        .itemInputs(["minecraft:chorus_flower"])
        .inputFluids("gtceu:vibrant_alloy 288")
        .itemOutputs('waystones:warp_stone')
        .duration(320)
        .EUt(32)

    event.replaceInput({ output: 'waystones:warp_plate' }, 'minecraft:gravel', 'waystones:warp_stone')

    event.shapeless('betterp2p:advanced_memory_card', ['ae2:memory_card', 'ae2:network_tool'])

})
