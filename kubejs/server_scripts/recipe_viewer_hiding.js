/**
 * Hide items, fluids, and recipes in EMI.
 * "/kjs inventory" and "/kjs hand" are your friends for finding item and fluid IDs.
 *
 * If you seek to both hide an item/fluid and remove it from all recipes and tags, then look into
 * KubeJS/startup_scripts/nukeLists/item.js and KubeJS/startup_scripts/nukeLists/fluid.js
 */

ServerEvents.tags('item', event => {
    let hideItem = itemID => {
        event.add('c:hidden_from_recipe_viewers', itemID)
        event.add('forge:viewers/hidden_from_recipe', itemID)
    }

    let hideItemList = itemIDList => {
        itemIDList.forEach(hideItem)
    }

    hideItem("ae2:facade")
    hideItem(/^ae2:facade/)

    // Hide excess permutations of EnderIO Clear glass, Fused Quartz
    hideItem(/^enderio:clear_glass_.*_.*/)
    hideItem(/^enderio:fused_quartz_.*_.*/)

    // snad
    hideItem("snad:soul_snad")
    if (!doSnad) {
        hideItemList(["snad:snad", "snad:red_snad"])
    }

    // fluxbore
    if (!doFluxbore) {
        hideItem("thermal:flux_drill")
    }

    // Simple Compacting Drawers (TEMPORARY UNTIL BUG FIXED)
    if (doCompacting) {
        hideItem("functionalstorage:simple_compacting_drawer")
        hideItem("functionalstorage:framed_simple_compacting_drawer")
    }

    // Hide GT ores to prevent clutter
    GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
        hideItemList([
            `gtceu:granite_${id.name}_ore`,
            `gtceu:diorite_${id.name}_ore`,
            `gtceu:andesite_${id.name}_ore`,
            `gtceu:red_granite_${id.name}_ore`,
            `gtceu:marble_${id.name}_ore`,
            `gtceu:deepslate_${id.name}_ore`,
            `gtceu:tuff_${id.name}_ore`,
            `gtceu:sand_${id.name}_ore`,
            `gtceu:red_sand_${id.name}_ore`,
            `gtceu:gravel_${id.name}_ore`,
            `gtceu:basalt_${id.name}_ore`,
            `gtceu:blackstone_${id.name}_ore`,
            `gtceu:moon_${id.name}_ore`,
            `gtceu:venus_${id.name}_ore`,
            `gtceu:mercury_${id.name}_ore`,
            `gtceu:mars_${id.name}_ore`,
            `gtceu:glacio_${id.name}_ore`
        ])
    })

    // Mode-specific hiding

    const gtMachines = ["extractor", "macerator", "compressor", "forge_hammer", "furnace", "alloy_smelter"]
    if (!doSteamAge) {
        // Hide GT Steam Age items
        gtMachines.forEach(machine => {
            hideItemList([`gtceu:lp_steam_${machine}`, `gtceu:hp_steam_${machine}`])
        })
        hideItemList(["gtceu:firebrick", "gtceu:firebricks", "gtceu:primitive_blast_furnace"])
        hideItem(/fireclay/)

        // Hide Bronze tier storage
        hideItem("sophisticatedstorage:iron_barrel")
        hideItem("sophisticatedstorage:iron_chest")
        hideItem("sophisticatedstorage:iron_shulker_box")
        hideItem(/^sophisticatedstorage:.*iron.*tier_upgrade$/)

    }
    // Sophisticated compacting upgrades
    if (!doCompacting) {
        hideItemList(/^sophisticated.*(compacting|compression)_upgrade$/)
        hideItemList(/^functionalstorage:.*compacting.*_drawer$/)
    }
    if(!doMeowniPlush) {
        hideItem("kubejs:meowni_plush")
    }
    if (!doHNN) {
        hideItem(/^hostilenetworks/)
    }
    if(doHarderRecipes) {
        hideItem("watercollector:watercollector")
    }
    if (!doLaserIO) {
        hideItemList(/^laserio:laser/)
        hideItemList(/^laserio:filter/)
        hideItemList(/^laserio:card_/)
        hideItem("laserio:overclocker_node")
        hideItem("laserio:overclocker_card")
    }
    if(!doConverters) {
        hideItem(/^gtceu:[A-Za-z0-9]+_[A-Za-z0-9]+_energy_converter$/)
        hideItem(/^gtceu:[A-Za-z0-9]+_[A-Za-z0-9]+_energy_converter$/)
    }
})

// hiding NuclearCraft Fluids
// get all nc fluids from index
let ncFluids = Fluid.getTypes().filter(id => id.includes("nuclearcraft"))

// list of used fluids to not remove
let ncUsedFluid = ["nuclearcraft:hydrated_gelatin", "nuclearcraft:gelatin", "nuclearcraft:sugar", "nuclearcraft:marshmallow", "nuclearcraft:cocoa_butter", "nuclearcraft:pasteurized_milk", "nuclearcraft:chocolate_liquor", "nuclearcraft:unsweetened_chocolate", "nuclearcraft:dark_chocolate", "nuclearcraft:milk_chocolate", "nuclearcraft:technical_water", "nuclearcraft:high_pressure_steam", "nuclearcraft:exhaust_steam"]

// adds flowing fluid variants to the list so they aren't hidden
ncUsedFluid.forEach(fluid => { ncUsedFluid.push(`${fluid}_flowing`) })

// remove used fluids from the full list
ncFluids = ncFluids.filter((el) => !ncUsedFluid.includes(el))

// Hide Ad Astra fluids
let fluidsToHide = ncFluids.concat(Fluid.getTypes().filter(id=>id.includes("ad_astra")))


// Hide Thermal fluids
fluidsToHide.push("thermal:creosote")
fluidsToHide.push("cofh_core:experience")
fluidsToHide.push("thermal:glowstone")
fluidsToHide.push("thermal:redstone")

// Hide Soph Core fluids
fluidsToHide.push("sophisticatedcore:xp_still")

// Hide nukelist fluids
fluidsToHide = fluidsToHide.concat(global.fluidNukeList)

fluidsToHide.forEach(fluidID => {
    ServerEvents.tags('fluid', event => {
        event.add('c:hidden_from_recipe_viewers', fluidID)
        event.add('forge:viewers/hidden_from_recipe', fluidID)
    })

    ServerEvents.tags('item', event => {
        event.add('c:hidden_from_recipe_viewers', fluidID.concat("_bucket"))
        event.add('forge:viewers/hidden_from_recipe', fluidID.concat("_bucket"))
    })
})