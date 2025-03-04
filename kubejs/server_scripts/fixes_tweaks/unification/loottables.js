/**
 * Modify AE2 crystal certus mechanic to use GT items
 */

ServerEvents.blockLootTables(event => {
    event.addSimpleBlock("ae2:quartz_cluster", "4x gtceu:certus_quartz_gem") // To drop a different item
})
LootJS.modifiers((event) => {
    event.addBlockLootModifier(/ae2:.*quartz_bud/)
        .replaceLoot("ae2:certus_quartz_dust", "gtceu:certus_quartz_dust")
})
