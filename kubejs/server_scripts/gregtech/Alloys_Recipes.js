//alloys go brrr - ima go insane :)


ServerEvents.recipes(event => {
	/**
	 * util helper for alloys
	 * @param {InputItem_[]} inputA any possible inputs
	 * @param {InputItem_[]} inputB and possible secondary inputs
	 * @param {OutputItem_} result
	 * @param {number} duration in seconds
	 * @param {number} eut
	 */
	const alloySmeltingVariant = (inputA, inputB, result, duration, eut) => {
		// do not const anything here, weird optimization happening with the js vm
		for (let itemA of inputA) {
			for (let itemB of inputB) {
				// the a here is so that it gets sorted on top, jei sorts by recipe id
				let id = `kubejs:a_${Item.of(result).idLocation.path}_${Item.of(itemA).idLocation.path}_${Item.of(itemB).idLocation.path}`
				event.recipes.gtceu.alloy_smelter(id)
					.itemInputs(itemA, itemB)
					.itemOutputs(result)
					.duration(duration*20)
					.EUt(eut)
				console.log(`[AS]: Registered ${id}`)
			}
		}
	}

	alloySmeltingVariant(
		['#forge:ingots/steel', '#forge:dusts/steel'],
		["#forge:obsidian", '#forge:dusts/obsidian', '#forge:gems/void'],
		'gtceu:dark_steel_ingot', 12, 16);

	alloySmeltingVariant(
		['#forge:ingots/iron', '#forge:dusts/iron'],
		['#forge:dusts/redstone'],
		'gtceu:conductive_alloy_ingot', 7.5, 16);

	alloySmeltingVariant(
		['#forge:ingots/iron', '#forge:dusts/iron'],
		['kubejs:pulsating_dust'],
		'gtceu:pulsating_alloy_ingot', 7.5, 16);

	alloySmeltingVariant(
		['#forge:ingots/steel', '#forge:dusts/steel'],
		['#forge:dusts/silicon'],
		'gtceu:electrical_steel_ingot', 6, 16);

	alloySmeltingVariant(
		['#forge:ingots/dark_steel', '#forge:dusts/dark_steel'],
		['minecraft:end_stone', '#forge:dusts/endstone'], // apparently we have dusts/end_stone (doesnt work)
		'gtceu:end_steel_ingot', 15, 120);

	alloySmeltingVariant(
		['#forge:ingots/steel', '#forge:dusts/steel'],
		['#forge:dusts/boron'],
		'2x nuclearcraft:ferroboron_ingot', 15, 120);

    event.recipes.gtceu.alloy_smelter('kubejs:tough_alloy_ingot')
        .itemInputs('#forge:ingots/ferroboron', '#forge:dusts/lithium')
        .itemOutputs('2x nuclearcraft:tough_alloy_ingot')
        .duration(300)
        .EUt(16)
    event.recipes.gtceu.alloy_smelter('kubejs:hard_carbon_ingot')
        .itemInputs('#forge:gems/diamond', '2x #forge:ingots/steel') // was flipped
        .itemOutputs('2x nuclearcraft:hard_carbon_ingot')
        .duration(300)
        .EUt(500)
    event.recipes.gtceu.alloy_smelter('kubejs:sunnarium_dust')
        .itemInputs('kubejs:stabilized_plutonium', 'kubejs:stabilized_curium')
        .itemOutputs('gtceu:sunnarium_dust')
        .duration(2000)
        .EUt(4000)
    event.recipes.gtceu.alloy_smelter('kubejs:fission_reactor_glass')
        .itemInputs('nuclearcraft:fission_reactor_casing', '#forge:glass/colorless')
        .itemOutputs('nuclearcraft:fission_reactor_glass')
        .duration(50)
        .EUt(16)

    event.remove({ id: "minecraft:nuclearcraft_ferroboron_plate" }) // minecraft??
    event.remove({ id: "minecraft:nuclearcraft_ferroboron_dust" })
    event.remove([{ id: "nuclearcraft:blast_ferroboron_dust" }, { id: "nuclearcraft:fission_reactor_glass" }])
})


ServerEvents.recipes(event => {
    //Different Steel Recipe
    event.remove({ id: "gtceu:centrifuge/decomposition_centrifuging__black_steel" })
    event.remove({ id: "gtceu:mixer/black_steel" })

	event.shapeless('gtceu:conductive_alloy_dust', ['#forge:dusts/iron', '#forge:dusts/redstone']).id('kubejs:conductive_alloy_dust_handcraft')

    event.recipes.gtceu.mixer("kubejs:black_steel_dust")
        .itemInputs('3x #forge:dusts/steel', '2x #forge:dusts/black_bronze', '2x gtceu:void_gem', '2x gtceu:coal_perfect')
        .itemOutputs('9x gtceu:black_steel_dust')
        .duration(200)
        .EUt(15)

    event.recipes.gtceu.mixer("kubejs:black_steel_dust_alternate")
        .itemInputs('15x #forge:dusts/steel', '6x #forge:dusts/copper', '2x #forge:dusts/gold', '2x #forge:dusts/silver', '10x #forge:gems/void', '10x gtceu:coal_perfect')
        .itemOutputs('45x gtceu:black_steel_dust')
        .duration(375)
        .EUt(240)

    event.recipes.gtceu.mixer("kubejs:vibrant_alloy_dust")
        .itemInputs('#forge:dusts/energetic_alloy', '#forge:dusts/ender_pearl')
        .itemOutputs('gtceu:vibrant_alloy_dust')
        .duration(260)
        .EUt(30)

    event.recipes.gtceu.mixer("kubejs:energetic_alloy_dust")
        .itemInputs('2x #forge:dusts/gold', '#forge:dusts/redstone', '#forge:dusts/glowstone')
        .itemOutputs('2x gtceu:energetic_alloy_dust')
        .duration(140)
        .EUt(30)

    event.recipes.gtceu.mixer("kubejs:glowstone_dust")
        .itemInputs('gtceu:tricalcium_phosphate_dust', '#forge:dusts/gold')
        .itemOutputs('2x minecraft:glowstone_dust')
        .duration(80)
        .EUt(15)

    event.recipes.gtceu.mixer("kubejs:mana_infused_dust")
        .itemInputs('kubejs:primal_mana', '#forge:dusts/titanium')
        .itemOutputs('gtceu:mana_infused_metal_dust')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.mixer("kubejs:lumium_dust")
        .itemInputs('4x #forge:dusts/tin_alloy', '2x #forge:dusts/sterling_silver', '2x extendedcrafting:luminessence', 'kubejs:energized_clathrate')
        .itemOutputs('4x gtceu:lumium_dust')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 1000))
        .duration(300)
        .EUt(1920)

    event.recipes.gtceu.mixer("kubejs:signalum_dust")
        .itemInputs('4x #forge:dusts/annealed_copper', '2x #forge:dusts/ardite', '2x #forge:dusts/red_alloy', 'kubejs:destabilized_clathrate')
        .itemOutputs('4x gtceu:signalum_dust')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 1000))
        .duration(300)
        .EUt(1920)

    event.recipes.gtceu.mixer("kubejs:rhodium_plated_palladium_dust")
        .itemInputs('3x gtceu:palladium_dust', 'gtceu:rhodium_dust', '2x gtceu:lumium_dust')
        .itemOutputs('6x gtceu:rhodium_plated_palladium_dust')
        .duration(400)
        .EUt(7680)
        .circuit(1)

    event.recipes.gtceu.mixer("kubejs:enderium_dust")
        .itemInputs('4x gtceu:lead_dust', '2x gtceu:platinum_dust', 'gtceu:blue_steel_dust', 'gtceu:osmium_dust', 'kubejs:resonant_clathrate')
        .itemOutputs('4x gtceu:enderium_dust')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 1000))
        .duration(300)
        .EUt(1920)

    event.recipes.gtceu.mixer("kubejs:ardite_dust")
        .itemInputs('3x gtceu:red_steel_dust', 'minecraft:blaze_powder')
        .itemOutputs('4x gtceu:ardite_dust')
        .duration(200)
        .EUt(30)

    event.recipes.gtceu.mixer("kubejs:manyullyn_dust")
        .itemInputs('4x gtceu:ardite_dust', '4x gtceu:cobalt_dust', 'kubejs:primal_mana')
        .itemOutputs('4x gtceu:manyullyn_dust')
        .duration(400)
        .EUt(30)
})

ServerEvents.recipes(event => {
    event.recipes.gtceu.electric_blast_furnace("kubejs:mana_infused_metal")
        .itemInputs('gtceu:mana_infused_metal_dust')
        .itemOutputs('gtceu:mana_infused_metal_ingot')
        .inputFluids(Fluid.of('kubejs:molten_primal_mana', 250))
        .duration(400)
        .EUt(400)
        .blastFurnaceTemp(2141)
})

ServerEvents.recipes(event => {
    event.remove('gtceu:alloy_blast_smelter/red_alloy')
    event.recipes.gtceu.alloy_blast_smelter("kubejs:red_alloy_fluid")
        .itemInputs('2x gtceu:copper_dust', '3x #forge:dusts/redstone')
        .outputFluids(Fluid.of('gtceu:red_alloy', 288))
        .duration(75)
        .EUt(16)
        .circuit(5)
        .blastFurnaceTemp(1400)
    event.recipes.gtceu.alloy_blast_smelter("kubejs:conductive_alloy_fluid")
        .itemInputs('#forge:dusts/iron', '#forge:dusts/redstone')
        .outputFluids(Fluid.of('gtceu:conductive_alloy', 144))
        .duration(112)
        .EUt(16)
        .circuit(2)
        .blastFurnaceTemp(1400)

    event.recipes.gtceu.alloy_blast_smelter("kubejs:energetic_alloy_fluid")
        .itemInputs('2x gtceu:gold_dust', '#forge:dusts/redstone', 'minecraft:glowstone_dust')
        .outputFluids(Fluid.of('gtceu:energetic_alloy', 576))
        .duration(1200)
        .EUt(120)
        .circuit(3)
        .blastFurnaceTemp(1250)

    event.recipes.gtceu.alloy_blast_smelter("kubejs:energetic_alloy_fluid_from_gold_dust")
        .itemInputs('2x gtceu:gold_dust', '#forge:dusts/redstone', 'minecraft:glowstone_dust')
        .inputFluids(Fluid.of('gtceu:nitrogen', 4000))
        .outputFluids(Fluid.of('gtceu:energetic_alloy', 576))
        .duration(804)
        .EUt(120)
        .circuit(13)
        .blastFurnaceTemp(1250)

    event.recipes.gtceu.alloy_blast_smelter("kubejs:vibrant_alloy_fluid")
        .itemInputs('gtceu:energetic_alloy_dust', 'gtceu:ender_pearl_dust')
        .outputFluids(Fluid.of('gtceu:vibrant_alloy', 288))
        .duration(600) // 30s
        .EUt(120)
        .circuit(2)
        .blastFurnaceTemp(1350)

    event.recipes.gtceu.alloy_blast_smelter("kubejs:vibrant_alloy_fluid_from_energetic_dust")
        .itemInputs('gtceu:energetic_alloy_dust', 'gtceu:ender_pearl_dust')
        .inputFluids(Fluid.of('gtceu:nitrogen', 2000))
        .outputFluids(Fluid.of('gtceu:vibrant_alloy', 288))
        .duration(402) // 20.1s
        .EUt(120)
        .circuit(12)
        .blastFurnaceTemp(1350)

	// soularium
    event.recipes.gtceu.alloy_blast_smelter('kubejs:soularium_fluid')
        .itemInputs('#forge:dusts/gold', 'soul_sand')
		.circuit(2)
        .outputFluids(Fluid.of('gtceu:soularium', 144))
        .duration(90) // 4.5s
        .EUt(16)
        .blastFurnaceTemp(1200)

	// moni ceu 1.7 normal
	event.recipes.gtceu.electric_blast_furnace('kubejs:dark_soularium_ingot')
		.itemInputs('#forge:ingots/soularium', '#forge:ingots/dark_steel')
		.inputFluids(Fluid.of('gtceu:tritium', 1000))
		.itemOutputs('gtceu:dark_soularium_ingot')
		.duration(1200) // 60 sec
		.EUt(32000)
		.blastFurnaceTemp(8600)
})