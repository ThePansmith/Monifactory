ServerEvents.recipes(event => {
    // Ender Pearls
    event.recipes.gtceu.alloy_smelter("pulsating_ender_pearl")
        .itemInputs('#forge:gems/diamond', "#forge:dusts/pulsating")
        .itemOutputs("minecraft:ender_pearl")
        .duration(300)
        .EUt(16)

    // May as well remove ender dust usage while we're at it
    event.remove({ id: "miniutilities:ender_dust_to_ender_pearl" })

    const plantMaterial = ["#minecraft:leaves", "#minecraft:saplings", "minecraft:vine"]
    plantMaterial.forEach(ballIngredient => {
        event.shaped(
            "gtceu:plant_ball", [
            'AAA',
            'A A',
            'AAA'
        ], { A: ballIngredient })
    });

    // Hand-crushing
    event.shapeless("minecraft:gravel", ['#forge:cobblestone/normal', "#forge:tools/mortars"])
    event.shapeless("minecraft:sand", ["minecraft:gravel", "#forge:tools/hammers"])
    event.shapeless("kubejs:dust", ["minecraft:sand", "#forge:tools/hammers"])

    // EIO Solar
    event.recipes.gtceu.alloy_smelter("photovoltaic_plate")
        .itemInputs("2x enderio:photovoltaic_composite", "gtceu:electrical_steel_plate")
        .itemOutputs("enderio:photovoltaic_plate")
        .duration(180)
        .EUt(16)

    // Solar composite
    event.shapeless("3x enderio:photovoltaic_composite", ["gtceu:lapis_dust", "gtceu:coal_dust", "gtceu:silicon_dust"]).id('enderio:photovoltaic_composite')

    event.remove({ id: 'gtceu:assembler/phenolic_board' })
    event.recipes.gtceu.chemical_reactor('phenolic_board')
        .itemInputs('gtceu:resin_circuit_board')
        .inputFluids('gtceu:phenol 100')
        .itemOutputs('gtceu:phenolic_circuit_board')
        .duration(100)
        .EUt(8)

    //phenol

	let steam = new JSONObject()
	steam.add('amount', 4000)
	steam.add('value', {tag:'forge:steam'})

		//JSON object and FluidIngredientJS are loaded in server script _initial.js
    event.recipes.gtceu.pyrolyse_oven('phenol_coal')
        .itemInputs('16x minecraft:coal')
        .inputFluids(FluidIngredientJS.of(steam))
        .itemOutputs('20x gtceu:coke_gem')
        .outputFluids('gtceu:phenol 1000')
        .circuit(14)
        .duration(600)
        .EUt(30)

    event.recipes.gtceu.pyrolyse_oven('phenol_coal_dust')
        .itemInputs('16x gtceu:coal_dust')
        .inputFluids(FluidIngredientJS.of(steam))
        .itemOutputs('20x gtceu:coke_dust')
        .outputFluids('gtceu:phenol 1000')
        .circuit(14)
        .duration(600)
        .EUt(30)

    // Pyro Oven
    event.shaped(
        'gtceu:pyrolyse_oven', [
        'PCW',
        'CHC',
        'PUW'
    ], {
        P: 'gtceu:lv_electric_piston',
        C: '#gtceu:circuits/lv',
        U: 'gtceu:lv_electric_pump',
        W: 'gtceu:cupronickel_quadruple_wire',
        H: 'gtceu:ulv_machine_hull'
    }
    ).id('gtceu:shaped/pyrolyse_oven')

    //Toolbelts
    event.replaceInput({ output: 'toolbelt:pouch' }, 'minecraft:gold_ingot', 'gtceu:steel_ingot')

	// early canning (using this explicitly as it has types)
	// lithium, cadmium, sodium
	event.recipes.minecraft.crafting_shapeless('gtceu:lv_lithium_battery', [
		'gtceu:lv_battery_hull', '2x #forge:dusts/lithium'
	]).id('moni:lv_lithium_battery')
	event.recipes.minecraft.crafting_shapeless('gtceu:lv_cadmium_battery', [
		'gtceu:lv_battery_hull', '2x #forge:dusts/cadmium'
	]).id('moni:lv_cadmium_battery')
	event.recipes.minecraft.crafting_shapeless('gtceu:lv_sodium_battery', [
		'gtceu:lv_battery_hull', '2x #forge:dusts/sodium'
	]).id('moni:lv_sodium_battery')
})