// 

ServerEvents.recipes(event => {
    if (!isHarderMode) {
        // Recipes that are the same in both normal and hardmode, but shouldn't exist in Harder
        event.shapeless('snad:snad', ['2x kubejs:double_compressed_sand', 'enderio:pulsating_crystal']).id('snad:snadrecipe')
        event.shapeless('snad:red_snad', ['2x kubejs:double_compressed_red_sand', 'enderio:pulsating_crystal']).id('snad:red_snad')

        event.shapeless('systeams:stirling_boiler', ['steamdynamo:steam_dynamo', 'systeams:boiler_pipe'])
        event.shaped(
            'systeams:boiler_pipe', [
                ' C ',
                'ABA',
                ' D '
            ], {
                A: 'gtceu:copper_plate',
                B: 'minecraft:bucket',
                C: 'gtceu:iron_gear',
                D: '#enderio:fused_quartz'
            }
        )


}


})
