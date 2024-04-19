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

    event.remove({ output: "thermal:device_water_gen" })
    event.shaped(
        "thermal:device_water_gen", [
            'BBB',
            'BCB',
            'BBB'
        ], {
            B: "enderio:fused_quartz",
            C: "watercondenser:watercondenser"
        }
    )

    // Temp until classic boiler has these built in
    event.remove({ output: 'systeams:stirling_boiler' })
    event.shapeless('systeams:stirling_boiler', ['steamdynamo:steam_dynamo', 'systeams:boiler_pipe'])
    
	// Temp rubber wood recipes
    event.shaped(
        "3x minecraft:oak_sign", [
            'PPP',
            'PPP',
            ' C '
        ], {
            P: "gtceu:rubber_planks",
            C: "minecraft:stick"
        }
    )

    event.shaped(
        "6x minecraft:oak_slab", [
            '   ',
            'PPP',
            '   '
        ], {
            P: "gtceu:rubber_planks"
        }
    )

    event.remove({ id: /storagedrawer/ })

})
