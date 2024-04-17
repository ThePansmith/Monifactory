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

    //temp rubber wood
    event.replaceInput( { input: 'minecraft:oak_planks' }, 'minecraft:oak_planks', '#moni:oak_rubber_plank_temp' )
    
    
    event.remove({ id: /storagedrawer/ })

})