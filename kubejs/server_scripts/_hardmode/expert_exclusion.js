/** Removes recipes that are the same in both normal and hardmode, but shouldn't exist in Expert */

ServerEvents.recipes(event => {
    if (doBoilers) {
        event.shapeless("systeams:stirling_boiler", ["steamdynamo:steam_dynamo", "systeams:boiler_pipe"])
        event.shaped("systeams:boiler_pipe", [
            " C ",
            "ABA",
            " D "
        ], {
            A: "gtceu:copper_plate",
            B: "minecraft:bucket",
            C: "gtceu:iron_gear",
            D: "#enderio:fused_quartz"
        })
    }
})
