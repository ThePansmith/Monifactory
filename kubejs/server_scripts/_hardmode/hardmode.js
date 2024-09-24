// THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE

ServerEvents.recipes(event => {
    if (isHardMode) {

        event.remove({ id: /hostilenetworks/ })

        const xpjuice = [
            ["enderio:pulsating_powder", 2240],
            ["enderio:vibrant_powder", 4480],
            ["kubejs:grains_of_innocence", 17920],
            ["enderio:prescient_powder", 35840],
            ["enderio:ender_crystal_powder", 44800],
        ]
    
        for (const [input, output] of xpjuice) {
            event.recipes.gtceu.mixer('kubejs:xpjuice_' + output)
            .inputFluids(Fluid.of('kubejs:molten_primal_mana', 250))
            .itemInputs(input)
            .outputFluids(Fluid.of('enderio:xp_juice', output))
            .EUt(480)
            .duration(100)
        }

        event.remove({ output: 'gtceu:extractor/tank_data' })
        event.recipes.gtceu.extractor('omnicdata')
        .itemInputs('kubejs:heart_of_a_universe')
        .itemOutputs('kubejs:omnic_data')
        .duration(1000).EUt(180000)

        event.remove({ output: 'systeams:stirling_boiler' })
        event.remove({ id: "bountiful:crafting/bountyboard" })

        event.shaped(
            'thermal:dynamo_numismatic', [
                ' A ',
                'BCB',
                'DED'
            ], {
                A: 'kubejs:excitationcoil',
                B: 'gtceu:zeron_100_plate',
                C: 'ironfurnaces:diamond_furnace',
                D: 'enderio:vibrant_gear',
                E: 'kubejs:redstone_transmission_coil'
            }
        )

        event.remove({id: "gtceu:large_chemical_reactor/radon_from_uranium_238"})
        event.remove({id: "gtceu:electric_blast_furnace/blast_cryolobus_gas"})
        event.remove({id: "gtceu:circuit_assembler/wetware_board"})
        event.remove({id: "enderio:stick"})
		
		// Processing for Ender Spores
		event.custom({
			'type': 'thermal:insolator',
			'ingredient': {
				'item': 'kubejs:ender_spore'
			},
			'result': [
				{
					'item': 'kubejs:ender_spore',
					'chance': 2.0
				}
			],
			'energy_mod': 3.0
		})
		
		event.shapeless('kubejs:ender_spore', ['minecraft:chorus_flower', 'minecraft:ender_pearl', 'thermal:phytogro', 'minecraft:experience_bottle'])
		event.smelting('minecraft:ender_pearl', 'kubejs:ender_spore')

		event.recipes.gtceu.greenhouse(`kubejs:greenhouse_boosted_ender_spore`)
            .circuit(2)
            .notConsumable('kubejs:ender_spore')
            .itemInputs('4x gtceu:fertilizer')
            .inputFluids(Fluid.of('minecraft:water'))
            .itemOutputs('8x kubejs:ender_spore')
            .duration(640)
            .EUt(120)
}})

// HM Ore Gen

GTCEuServerEvents.oreVeins(event => {
	if (isHardMode) {
		// Fluorite is not registerd in NM
		event.add("kubejs:luna/fluorite", vein => {
        vein.weight(40)
        vein.clusterSize(25)
        vein.density(0.7)
        vein.discardChanceOnAirExposure(0)
        vein.layer("moon")
        vein.dimensions("gcyr:luna")
        vein.biomes("gcyr:moon")
        vein.heightRangeUniform(-40, 50)
			vein.layeredVeinGenerator(generator => generator
				.buildLayerPattern(pattern => pattern
					.layer(l => l.weight(5).mat(GTMaterials.get('fluorite')).size(1, 1))
					.layer(l => l.weight(3).mat(GTMaterials.Sphalerite).size(2, 4))
					.layer(l => l.weight(2).mat(GTMaterials.Bastnasite).size(2, 4))
				)
			)
		})
	}
})
