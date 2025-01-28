/**
 * Adds exoskeleton legs that help players get places quicker.
 */

const UUID = Java.loadClass('java.util.UUID');
/**
 * Item definitions for exoskeleton Curios
 */
StartupEvents.registry("item", event => {
    const exoskeletonTiers = ['lv', 'mv', 'hv', 'ev', 'iv']
    exoskeletonTiers.forEach((tier) => {
        event.create(`${tier}_exoskeleton_legs`)
            .tag("curios:exoskeleton_legs")
            .texture(`kubejs:item/exoskeleton/${tier}_exoskeleton_legs`)
            .maxStackSize(1)
    })
})

const ExoskeletonLegsEffects = [
    {itemID: "lv_exoskeleton_legs", step_height_change: 0.5, movement_speed_boost: 0.2},
    {itemID: "mv_exoskeleton_legs", step_height_change: 0.5, movement_speed_boost: 0.4},
    {itemID: "hv_exoskeleton_legs", step_height_change: 0.5, movement_speed_boost: 0.6},
    {itemID: "ev_exoskeleton_legs", step_height_change: 0.5, movement_speed_boost: 0.8},
    {itemID: "iv_exoskeleton_legs", step_height_change: 0.5, movement_speed_boost: 1.0}
]

const step_modifier_UUID = UUID.fromString("9397bcb0-29f3-4bb2-8b4e-d46db405e777");
const speed_modifier_UUID = UUID.fromString("06a5b5df-361a-404f-9892-2fd98157f40b");

// Apply effects based on exoskeleton
const applyExoskeletonLegsEffects = (player, exoskeleton) => {
    ExoskeletonLegsEffects.forEach((value) => {
        if(exoskeleton.split(':')[1] == value.itemID) {
            player.modifyAttribute("forge:step_height_addition", step_modifier_UUID, value.step_height_change, "ADDITION")
            player.modifyAttribute("minecraft:generic.movement_speed", speed_modifier_UUID, value.movement_speed_boost, "MULTIPLY_BASE")
        }
    })
}

// Remove effects based on old exoskeleton
const removeExoskeletonLegsEffects = (player, exoskeleton) => {
    ExoskeletonLegsEffects.forEach((value) => {
        if(exoskeleton.split(':')[1] == value.itemID) {
            player.modifyAttribute("forge:step_height_addition", step_modifier_UUID, 0, "ADDITION")
            player.modifyAttribute("minecraft:generic.movement_speed", speed_modifier_UUID, 0, "MULTIPLY_BASE")
        }
    })
}

// Event for equipping/unequipping the curio
ForgeEvents.onEvent("top.theillusivec4.curios.api.event.CurioChangeEvent", event => {
    const oldItem = event.getFrom().id;
    const newItem = event.getTo().id;

    if(event.getIdentifier() === "exoskeleton_legs") {
        if(oldItem) removeExoskeletonLegsEffects(event.entity, oldItem)
        if(newItem) applyExoskeletonLegsEffects(event.entity, newItem)
    }
})
