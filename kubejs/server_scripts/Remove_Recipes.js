/**
 * Recipe removals that don't belong in other files.
 *
 * If you seek to both hide an item/fluid and remove it from all recipes and tags, then look into
 * KubeJS/startup_scripts/nukeLists/item.js and KubeJS/startup_scripts/nukeLists/fluid.js
 */

ServerEvents.recipes(event => {
    // Snad
    event.remove("snad:snadrecipe")
    event.remove("snad:red_snad")

    // GT
    event.remove({ id: "minecraft:lapis_lazuli_from_smelting_deepslate_lapis_ore" })
    event.remove({ id: "gtceu:mixer/rhodium_plated_palladium" })

    // Redstone arsenal
    event.remove({ id: "redstone_arsenal:materials/flux_dust" })
    event.remove({ id: "redstone_arsenal:materials/flux_ingot_fire_charge_from_dust" })
    event.remove({ id: "redstone_arsenal:materials/flux_ingot_fire_charge" })
    event.remove({ id: "redstone_arsenal:smelting/flux_ingot_from_dust_blasting" })
    event.remove({ id: "redstone_arsenal:smelting/flux_ingot_from_dust_smelting" })
    event.remove({ id: "redstone_arsenal:storage/flux_ingot_from_block" })
    event.remove({ id: "redstone_arsenal:storage/flux_metal_block" })

    // Water Collector
    event.remove({ output: /water_collector/ });

    // Remove Thermal gunpowder recipes - they use empty tags a Mixer recipe already exists
    event.remove({ id: /^thermal:gunpowder/ })
})
