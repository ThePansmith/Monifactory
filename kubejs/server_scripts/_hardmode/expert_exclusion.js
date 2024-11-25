//

ServerEvents.recipes(event => {
    if (!isExpertMode) {
        // Recipes that are the same in both normal and hardmode, but shouldn't exist in Expert
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
