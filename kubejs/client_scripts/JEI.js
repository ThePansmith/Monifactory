/**
 * Hide items, fluids, and recipes in EMI/JEI.
 * "/kjs inventory" and "/kjs hand" are your friends for finding item and fluid IDs.
 *
 * If you seek to both hide an item/fluid and remove it from all recipes and tags, then look into
 * KubeJS/startup_scripts/nukeLists/item.js and KubeJS/startup_scripts/nukeLists/fluid.js
 */

JEIEvents.hideItems(event => {

    // Hide excess permutations of AE2 Facades
    event.hide("ae2:facade")
    event.hide(/ae2:facade/)

    // Hide excess permutations of EnderIO Clear glass, Fused Quartz
    event.hide(/enderio:clear_glass_.*_.*/)
    event.hide(/enderio:fused_quartz_.*_.*/)

    // snad
    event.hide("snad:soul_snad")
    if (!doSnad) {
        event.hide(["snad:snad", "snad:red_snad"])
    }

    // fluxbore
    if (!doFluxbore) {
        event.hide("thermal:flux_drill")
    }

    // Simple Compacting Drawers (TEMPORARY UNTIL BUG FIXED)
    if (doCompacting) {
        event.hide("functionalstorage:simple_compacting_drawer")
        event.hide("functionalstorage:framed_simple_compacting_drawer")
    }

    // NuclearCraft
    event.hide(["nuclearcraft:diosmeter", "nuclearcraft:steel_frame", "nuclearcraft:rock_crusher", "nuclearcraft:decay_hastener", "nuclearcraft:irradiator", "nuclearcraft:nuclear_furnace", "nuclearcraft:extractor", "nuclearcraft:electrolyzer", "nuclearcraft:pressurizer", "nuclearcraft:alloy_smelter", "nuclearcraft:centrifuge", "nuclearcraft:manufactory", "nuclearcraft:gas_scrubber", "nuclearcraft:fluid_enricher", "nuclearcraft:isotope_separator", "nuclearcraft:fluid_infuser", "nuclearcraft:chemical_reactor", "nuclearcraft:analyzer", "nuclearcraft:ingot_former", "nuclearcraft:pump", "nuclearcraft:fuel_reprocessor", "nuclearcraft:leacher", "nuclearcraft:crystallizer", "nuclearcraft:assembler", "nuclearcraft:steam_turbine", "nuclearcraft:melter"])
    event.hide(["nuclearcraft:nitrogen_collector", "nuclearcraft:compact_nitrogen_collector", "nuclearcraft:lava_collector", "nuclearcraft:dense_nitrogen_collector", "nuclearcraft:compact_helium_collector", "nuclearcraft:helium_collector", "nuclearcraft:dense_helium_collector"])
    event.hide(["nuclearcraft:magnesium_deepslate_ore", "nuclearcraft:thorium_deepslate_ore", "nuclearcraft:uranium_deepslate_ore", "nuclearcraft:magnesium_ore", "nuclearcraft:boron_deepslate_ore", "nuclearcraft:cobalt_ore", "nuclearcraft:platinum_deepslate_ore", "nuclearcraft:silver_deepslate_ore", "nuclearcraft:lead_ore", "nuclearcraft:lithium_ore", "nuclearcraft:thorium_ore", "nuclearcraft:tin_ore", "nuclearcraft:cobalt_deepslate_ore", "nuclearcraft:silver_ore", "nuclearcraft:uranium_ore", "nuclearcraft:zinc_ore", "nuclearcraft:boron_ore", "nuclearcraft:lithium_deepslate_ore"])
    event.hide(["nuclearcraft:foursmore", "nuclearcraft:evenmoresmore", "nuclearcraft:moresmore", "nuclearcraft:smore"])
    event.hide(/^nuclearcraft:.*_bucket/)
    event.hide(/nuclearcraft:upgrade_.*/)
    // Hides all unused isotopes and fuels
    event.hide(["nuclearcraft:fuel_mixed_mix_239", "nuclearcraft:fuel_mixed_mix_241", "nuclearcraft:thorium_230", "nuclearcraft:plutonium_241", "nuclearcraft:lithium_6", "nuclearcraft:lithium_7", "nuclearcraft:boron_10", "nuclearcraft:boron_11", "nuclearcraft:plutonium_239", "nuclearcraft:uranium_235", "nuclearcraft:uranium_238",])
    // Hides unused or duplicate machines
    event.hide(/nuclearcraft:solar_panel.*/)
    event.hide(/nuclearcraft:.*_voltaic_pile/)
    event.hide(/nuclearcraft:.*_battery/)
    event.hide(/nuclearcraft:.*_barrel/)
    event.hide(/nuclearcraft:.*bscco.*/)
    event.hide(/nuclearcraft:turbine.*/)
    event.hide(/nuclearcraft:.*_container/)
    event.hide(/nuclearcraft:niobium_tin_.*/)
    event.hide(/nuclearcraft:fusion.*/)
    event.hide(/water_collector/);
    event.hide(/nuclearcraft:.*electromagnet.*/)
    // Hides all unused blocks
    event.hide(["nuclearcraft:empty_active_heat_sink", "nuclearcraft:villiaumite_heat_sink", "nuclearcraft:carobbiite_heat_sink", "nuclearcraft:empty_frame", "nuclearcraft:supercooler", "nuclearcraft:steel_block", "nuclearcraft:electrum_block", "nuclearcraft:supercold_ice_block", "nuclearcraft:magnesium_block", "nuclearcraft:cobalt_block", "nuclearcraft:aluminum_block", "nuclearcraft:lead_block", "nuclearcraft:bronze_block", "nuclearcraft:californium250_block", "nuclearcraft:lithium_block", "nuclearcraft:platinum_block", "nuclearcraft:thorium_block", "nuclearcraft:americium241_block", "nuclearcraft:plutonium238_block", "nuclearcraft:tin_block", "nuclearcraft:uranium238_block", "nuclearcraft:silver_block", "nuclearcraft:uranium_block", "nuclearcraft:zirconium_block", "nuclearcraft:zinc_block", "nuclearcraft:boron_block",])
    // Hides all unused items
    event.hide(["nuclearcraft:quantum_flux_regulator", "nuclearcraft:chamber_port", "nuclearcraft:fission_reactor_irradiation_chamber", "nuclearcraft:chamber_terminal", "nuclearcraft:event_horizon_stabilizer", "nuclearcraft:quantum_transformer", "nuclearcraft:black_hole", "nuclearcraft:neutronium_frame", "nuclearcraft:photon_concentrator", "nuclearcraft:redstone_dimmer", "nuclearcraft:rad_x", "nuclearcraft:research_paper", "nuclearcraft:plate_extreme", "nuclearcraft:gelatin", "nuclearcraft:actuator", "nuclearcraft:basic_electric_circuit", "nuclearcraft:sic_fiber", "nuclearcraft:tough_helmet", "nuclearcraft:tough_chest", "nuclearcraft:tough_pants", "nuclearcraft:tough_boots", "nuclearcraft:spaxelhoe_tough", "nuclearcraft:spaxelhoe_thorium", "nuclearcraft:multitool", "nuclearcraft:qnp", "nuclearcraft:lithium_ion_cell", "nuclearcraft:dps", "nuclearcraft:servo", "nuclearcraft:bioplastic", "nuclearcraft:empty_sink", "nuclearcraft:radaway_slow", "nuclearcraft:motor", "nuclearcraft:salt", "nuclearcraft:cocoa_butter", "nuclearcraft:sawdust", "nuclearcraft:flour", "nuclearcraft:dominos", "nuclearcraft:radaway"])

    // Hide GT ores to prevent clutter
    GTMaterialRegistry.getRegisteredMaterials().forEach(id => {
        event.hide([
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
})

JEIEvents.addItems(event => {
    // Add example AE2 facade after failing to hide all other facade permutations
    event.add(Item.of("ae2:facade", { item: "gtceu:infinity_block" }))

    // Iron Jetpacks' Cells are hard to selectively remove due to NBT shenanigans
    event.add(Item.of("ironjetpacks:cell", {Id: "ironjetpacks:hardened"}))
    event.add(Item.of("ironjetpacks:cell", {Id: "ironjetpacks:reinforced"}))
    event.add(Item.of("ironjetpacks:cell", {Id: "ironjetpacks:resonant"}))

    // NuclearCraft
    event.add(["nuclearcraft:tough_alloy_ingot", "nuclearcraft:hard_carbon_ingot", "nuclearcraft:ferroboron_ingot", "nuclearcraft:rhodochrosite_dust"])

    // Thermal
    event.add("thermal:nuke_tnt")
})

JEIEvents.hideFluids(event => {
    // hiding NuclearCraft Fluids
    // get all nc fluids from index
    let ncFluids = Fluid.getTypes().filter(id => id.includes("nuclearcraft"))

    // list of used fluids to not remove
    let ncUsedFluid = ["nuclearcraft:hydrated_gelatin", "nuclearcraft:gelatin", "nuclearcraft:sugar", "nuclearcraft:marshmallow", "nuclearcraft:cocoa_butter", "nuclearcraft:pasteurized_milk", "nuclearcraft:chocolate_liquor", "nuclearcraft:unsweetened_chocolate", "nuclearcraft:dark_chocolate", "nuclearcraft:milk_chocolate", "nuclearcraft:technical_water", "nuclearcraft:high_pressure_steam", "nuclearcraft:exhaust_steam"]

    // adds flowing fluid variants to the list so they aren't hidden
    ncUsedFluid.forEach(fluid => { ncUsedFluid.push(`${fluid}_flowing`) })

    // remove used fluids from the full list
    ncFluids = ncFluids.filter((el) => !ncUsedFluid.includes(el))

    // loops through the list and hides all the unwanted fluids for nc
    ncFluids.forEach(element => {
        event.hide(element)
    })

    // Hide Ad Astra fluids
    Fluid.getTypes().filter(id=>id.includes("ad_astra")).forEach(id => event.hide(id))

    // Hide Thermal fluids
    event.hide("thermal:creosote")
    event.hide("cofh_core:experience")
    event.hide("thermal:glowstone")
    event.hide("thermal:redstone")

    // Hide Soph Core fluids
    event.hide("sophisticatedcore:xp_still")
})
