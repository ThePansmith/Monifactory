/**
 * unify chipped since they dont do that anymore
 * @private
 * @param {TagEvent.Item & TagEvent.Block} event
 */
const unifyChisel = (event) => {
    // regex here means
    // `^` = beginning, `$` = end, `.+` = anything that isnt whitespace, any length

    const IRON_BLOCKLIKES = /^chipped:(?!.+_raw_).+_iron_block$/;
    const GOLD_BLOCKLIKES = /^chipped:(?!.+_raw_).+_gold_block$/;
    // event.add('forge:glass/colorless', /^chipped:.+_glass$/) // most of the glass here only have fancy trims, but they are all not dyed
    event.add('forge:cobblestone/normal', /^chipped:.+(?!_mossy)_cobblestone(_bricks)?$/)
    event.add('forge:cobblestone/mossy', /^chipped:.+_mossy_cobblestone(_bricks)?$/)
    event.add('forge:cobblestone', /^chipped:.+_cobblestone(_bricks)?$/)
    event.add('forge:storage_blocks/glowstone', /^chipped:.+_glowstone$/)
    event.add('forge:storage_blocks/redstone', /^chipped:.+_redstone_block$/)
    event.add('forge:storage_blocks/iron', IRON_BLOCKLIKES)
    event.add('forge:storage_blocks/gold', GOLD_BLOCKLIKES)
    event.add('forge:storage_blocks/diamond', /^chipped:.+_diamond_block$/);
    event.add('forge:storage_blocks/emerald', /^chipped:.+_emerald_block$/);
    event.add('forge:storage_blocks/lapis', /^chipped:.+_lapis_block$/);

    event.add('minecraft:planks', /^chipped:.+_planks$/)

    event.add('forge:glass', /^chipped:.+_glass(_pillar)?$/)
    event.add('forge:storage_blocks', [IRON_BLOCKLIKES, GOLD_BLOCKLIKES, /^chipped:.+_diamond_block$/, /^chipped:.+_emerald_block$/, /^chipped:.+_glowstone$/, /^chipped:.+_lapis_block$/, /^chipped:.+_redstone_block$/])
    event.add('minecraft:piglin_loved', GOLD_BLOCKLIKES)
}

ServerEvents.tags('item', event => {
    event.add('ae2:all_fluix', 'gtceu:fluix_gem')
    event.add('ae2:all_certus_quartz', 'gtceu:charged_certus_quartz_gem')
    event.add('forge:gems/certus_quartz', 'gtceu:charged_certus_quartz_gem')
    event.add('forge:singularities/ultimate', 'kubejs:mote_of_omnium')
    event.add('forge:singularities/ultimate', 'extendedcrafting:ultimate_singularity')
    event.add('forge:ingots/electrum_flux', 'redstone_arsenal:flux_ingot')
    event.add('forge:dusts/electrum_flux', 'redstone_arsenal:flux_dust')
    event.add('forge:nuggets/electrum_flux', 'redstone_arsenal:flux_nugget')
    event.add('forge:gears/electrum_flux', 'redstone_arsenal:flux_gear')
    event.add('forge:dusts/quartz', 'gtceu:nether_quartz_dust')
    event.removeAllTagsFrom('ae2:certus_quartz_crystal')
    event.removeAllTagsFrom('ae2:charged_certus_quartz_crystal')
    event.removeAllTagsFrom('ae2:fluix_crystal')
    event.removeAllTagsFrom('ae2:fluix_dust')
    event.remove('forge:ingots/aluminum', 'nuclearcraft:aluminum_ingot')
    event.add('forge:ingots/aluminium', 'nuclearcraft:aluminum_ingot')

    // can't replace tags in recipes so we just add the tag to the item instead
    event.add('forge:ingots/redstone_alloy', 'gtceu:red_alloy_ingot')
    event.add('forge:ingots/copper_alloy', 'gtceu:electrical_steel_ingot')

    event.remove('forge:gears/wood', 'enderio:wood_gear')
    event.remove('forge:gears/stone', 'enderio:stone_gear')
    event.remove('forge:gears/iron', 'enderio:iron_gear')
    event.remove('forge:gears/dark_steel', 'enderio:dark_bimetal_gear')

    // NOT pulsating iron ingot
    event.add('forge:dusts/pulsating', 'kubejs:pulsating_dust')

    // Endgame tools
    event.add('forge:tools/files', 'kubejs:infinity_file')
    event.add('forge:tools/hammers', 'kubejs:infinity_hammer')
    event.add('forge:tools/screwdrivers', 'kubejs:infinity_screwdriver')
    event.add('forge:tools/wrenches', 'kubejs:infinity_wrench')
    event.add('forge:tools/wire_cutters', 'kubejs:infinity_wire_cutter')

    // generic unification
    event.add('forge:dusts', ['kubejs:pulsating_dust'])

    // enderio!!!!
    event.add('forge:heads', 'enderio:enderman_head')

    event.add('forge:microminers', '/kubejs:microminer_t/')
    event.add('forge:microminers', '/kubejs:stabilized_microminer_t/')

    // For stonecutting Marble
    event.add('moni:marble', /^(gtceu:(marble|polished_marble|marble_bricks|cracked_marble_bricks|chiseled_marble|marble_tile|marble_small_tile|marble_windmill_a|marble_windmill_b|small_marble_bricks|square_marble_bricks))$/)

    unifyChisel(event);
})

ServerEvents.tags('block', event => {
    // snad
    const compacted_sand = ['kubejs:compressed_sand', 'kubejs:double_compressed_sand', 'kubejs:compressed_red_sand', 'kubejs:double_compressed_red_sand'];
    event.add('minecraft:dead_bush_may_place_on', compacted_sand);
    event.add('minecraft:bamboo_plantable_on', compacted_sand);
    event.add('minecraft:azalea_grows_on', compacted_sand);
    event.add('framedblocks:camo_sustain_plant', compacted_sand);

    unifyChisel(event);
})

ServerEvents.tags('fluid', event => {
    // removing tags from nc fluids so they stop showing up in ae2 and emi
    // reused code from JEI hiding script
    // get all nc fluids from index
    let ncFluids = Fluid.getTypes().filter(id=>id.includes("nuclearcraft"))
    // list of used fluids to not remove
    let ncUsedFluid = ['nuclearcraft:hydrated_gelatin', 'nuclearcraft:gelatin', 'nuclearcraft:sugar', 'nuclearcraft:marshmallow', 'nuclearcraft:cocoa_butter',     'nuclearcraft:chocolate_liquor', 'nuclearcraft:unsweetened_chocolate', 'nuclearcraft:dark_chocolate', 'nuclearcraft:milk_chocolate', 'nuclearcraft:technical_water', 'nuclearcraft:high_pressure_steam', 'nuclearcraft:exhaust_steam']
    // remove used fluids from the full list
    ncFluids = ncFluids.filter((el) => !ncUsedFluid.includes(el))
    // loops through the list and hides all the unwanted fluids for nc
    ncFluids.forEach(element => {
        event.removeAllTagsFrom(element)
    })

    //Remove tags from other unused non-GT fluids
    event.removeAllTagsFrom('thermal:creosote')
    event.removeAllTagsFrom('thermal:experience')
    event.removeAllTagsFrom('sophisticatedcore:xp_still')
})

// Unification regexes are definited in startup script _initial.js
ServerEvents.tags('item', event => {
    event.removeAllTagsFrom(global.unificationPattern)
    event.removeAllTagsFrom(global.manualUnification)
    event.removeAllTagsFrom(global.nuclearcraftFuelPattern)
    event.removeAllTagsFrom(global.nuclearcraftMaterialPattern)
})

ServerEvents.recipes(event => {
    event.remove({ output: global.unificationPattern })
    event.remove({ output: global.manualUnification })
    event.remove({ output: global.nuclearcraftFuelPattern })
    event.remove({ output: global.nuclearcraftMaterialPattern })
})
