/**
 * unify chisel since they dont do that anymore
 * @private
 * @param {TagEvent.Item & TagEvent.Block} event
 */
const unifyChisel = (event) => {
    // regex here means
    // `^` = beginning, `$` = end, `.+` = anything that isnt whitespace, any length
    event.add('forge:glass/colorless', /^chisel:.+\/glass$/) // most of the glass here only have fancy trims, but they are all not dyed
    event.add('forge:cobblestone/normal', /^chisel:.+\/cobblestone$/)
    event.add('forge:cobblestone', /^chisel:.+\/cobblestone$/)
    event.add('forge:storage_blocks/glowstone', /^chisel:.+\/glowstone$/)
    event.add('forge:storage_blocks/redstone', /^chisel:.+\/redstone_block$/)
    event.add('forge:storage_blocks/iron', /^chisel:.+\/iron_block$/)
    event.add('forge:storage_blocks/gold', /^chisel:.+\/gold_block$/)
    event.add('forge:storage_blocks/diamond', /^chisel:.+\/diamond_block$/)
    event.add('forge:storage_blocks/emerald', /^chisel:.+\/emerald_block$/)
    event.add('forge:storage_blocks/lapis', /^chisel:.+\/lapis_block$/)

    event.add('minecraft:planks', [/^chisel:.+\/oak_planks$/, /^chisel:.+\/dark_oak_planks$/, /^chisel:.+\/acacia_planks$/, /^chisel:.+\/birch_planks$/, /^chisel:.+\/jungle_planks$/])

    event.add('forge:glass', /^chisel:.+\/glass$/)
    event.add('forge:storage_blocks', [/^chisel:.+\/iron_block$/, /^chisel:.+\/gold_block$/, /^chisel:.+\/diamond_block$/, /^chisel:.+\/emerald_block$/, /^chisel:.+\/glowstone$/, /^chisel:.+\/lapis_block$/, /^chisel:.+\/redstone_block$/])
    event.add('minecraft:piglin_loved', /^chisel:.+\/gold_block$/)
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

    // endgame mats
    // neutronium
    event.add('forge:ingots/neutronium', 'avaritia:neutronium_ingot')
    event.add('forge:nuggets/neutronium', 'avaritia:neutronium_nugget')
    event.add('forge:tiny_dusts/neutronium', 'avaritia:pile_of_neutrons')
    event.add('forge:storage_blocks/neutronium', 'avaritia:neutronium_block')
        // crystal matrix
    event.add('forge:ingots/crystal_matrix', 'avaritia:crystal_matrix_ingot')
    event.add('forge:storage_blocks/crystal_matrix', 'avaritia:crystal_matrix_block')
    event.add('forge:plates/crystal_matrix', 'kubejs:crystal_matrix_plate')
        // omnium
    event.add('forge:ingots/the_ultimate', 'kubejs:omnium_ingot') // this sucks!
    event.add('forge:ingots/omnium', 'kubejs:omnium_ingot')
        // HACK: remove extreme crafting tags
    event.add('forge:nuggets/omnium', 'extendedcrafting:the_ultimate_nugget')
    event.add('forge:storage_blocks/omnium', 'extendedcrafting:the_ultimate_block')
        // infinity
    event.add('forge:ingots/infinity', 'avaritia:infinity_ingot')
    event.add('forge:storage_blocks/infinity', 'avaritia:infinity_block')
    event.add('forge:plates/infinity', 'kubejs:infinity_plate')

    // generic unification
    event.add('forge:storage_blocks', ['avaritia:neutronium_block', 'avaritia:crystal_matrix_block', 'avaritia:infinity_block'])
    event.add('forge:nuggets', ['extendedcrafting:the_ultimate_nugget', 'avaritia:neutronium_nugget'])
    event.add('forge:plates', ['kubejs:crystal_matrix_plate', 'kubejs:infinity_plate'])
    event.add('forge:dusts', ['kubejs:pulsating_dust'])

	// enderio!!!!
	event.add('forge:heads', 'enderio:enderman_head')

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










// Hacky Drac Reactor stuff
// This will be removed when it becomes a proper post tank multi in favor of just including the injectors in it's recipe or something
ServerEvents.tags('item', event => {
    event.add('moni:basic_injector_tier', 'draconicevolution:basic_crafting_injector')
    event.add('moni:basic_injector_tier', 'draconicevolution:wyvern_crafting_injector')
    event.add('moni:basic_injector_tier', 'draconicevolution:awakened_crafting_injector')
    event.add('moni:basic_injector_tier', 'draconicevolution:chaotic_crafting_injector')
    event.add('moni:wyvern_injector_tier', 'draconicevolution:wyvern_crafting_injector')
    event.add('moni:wyvern_injector_tier', 'draconicevolution:awakened_crafting_injector')
    event.add('moni:wyvern_injector_tier', 'draconicevolution:chaotic_crafting_injector')
    event.add('moni:awakened_injector_tier', 'draconicevolution:awakened_crafting_injector')
    event.add('moni:awakened_injector_tier', 'draconicevolution:chaotic_crafting_injector')
    event.add('moni:chaotic_injector_tier', 'draconicevolution:chaotic_crafting_injector')
})

// Temp rubberplank stuff
ServerEvents.tags('item', event => {
    event.add('moni:oak_rubber_plank_temp', 'minecraft:oak_planks')
    event.add('moni:oak_rubber_plank_temp', 'gtceu:rubber_planks')
})