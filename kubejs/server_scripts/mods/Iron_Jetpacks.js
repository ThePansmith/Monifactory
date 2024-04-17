ServerEvents.recipes(event => {
    //
    // Thrusters
    //

    // Thermal

    // Generate thermal thruster recipes
    var thermalType = [
        ['leadstone', 'lead', 'lead', 'steamdynamo:steam_dynamo'],
        ['hardened', 'invar', 'invar', 'thermal:dynamo_magmatic'],
        ['reinforced', 'aluminium', 'electrum', 'thermal:dynamo_compression'],
        ['resonant', 'enderium', 'enderium', 'thermal:dynamo_numismatic']
    ]

    thermalType.forEach(material => {
        event.shaped(Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:' + material[0] + '"}'), [
            'PCP',
            'MDM',
            'BBB'
        ], {
            P: '#forge:plates/' + material[1],
            M: '#forge:plates/' + material[2],
            C: 'thermal:rf_coil',
            D: material[3],
            B: 'gtceu:red_alloy_plate'
        })
    })

    // Generate EnderIO thruster recipes
    var EIOType = [
        ['conductive_iron', 'conductive_alloy', 'conductive', 'kubejs:resonating_crystal', 'gtceu:red_alloy_plate'],
        ['electrical_steel', 'electrical_steel', 'conductive', 'enderio:pulsating_crystal', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:conductive_iron"}').weakNBT()],
        ['energetic', 'energetic_alloy', 'energetic', 'enderio:vibrant_crystal', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrical_steel"}').weakNBT()],
        ['vibrant', 'vibrant_alloy', 'vibrant', 'enderio:prescient_crystal', Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:energetic"}').weakNBT()]
    ]

    EIOType.forEach(material => {
        event.shaped(Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:' + material[0] + '"}'), [
            'PCP',
            'PRP',
            'BTB'
        ], {
            P: '#forge:plates/' + material[1],
            C: 'enderio:' + material[2] + '_conduit',
            R: material[3],
            T: material[4],
            B: 'gtceu:red_alloy_plate'
        })
    })

    // Special thrusters

    // Dark Soularium
    event.shaped(Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:dark_soularium"}'), [
        'ICI',
        'IFI',
        'TTT'
    ], {
        I: 'gtceu:dark_soularium_ingot',
        C: 'enderio:draconium_conduit',
        F: 'kubejs:flight_control_unit',
        T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:vibrant"}').weakNBT()
    })

    // Fluxed
    event.shaped(Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:fluxed"}'), [
        ' P ',
        'PGP',
        'STS'
    ], {
        P: 'redstone_arsenal:flux_plating',
        G: 'kubejs:glowstone_elevation_unit',
        S: 'gtceu:signalum_plate',
        T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:resonant"}').weakNBT()
    })

    //
    // Jetpacks
    //

		//Copies old jetpack nbt to the new jetpack
		const jetpackUpgradeModifyResult = function(grid, result) {
			let item = grid.find('ironjetpacks:jetpack')
			let nbt = {};
			if (item.nbt) {
				if (item.nbt.Energy) {
					nbt.Energy = item.nbt.Energy
				}
				if (item.nbt.Engine) {
					nbt.Engine = item.nbt.Engine
				}
				if (item.nbt.Hover) {
					nbt.Hover = item.nbt.Hover
				}
				if (item.nbt.Throttle) {
					nbt.Throttle = item.nbt.Throttle
				}
			}
			return result.withNBT(nbt);
		}

		const jetpackBase = [
			['leadstone', 'ironjetpacks:strap', 'lead', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:leadstone"}').weakNBT()],
      ['conductive_iron', 'ironjetpacks:strap', 'conductive_alloy', 'enderio:basic_capacitor']
		]

    const jetpackUpgrade = [
				['hardened', "leadstone", 'invar', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:hardened"}').weakNBT()],
        ['reinforced', "hardened", 'electrum', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:reinforced"}').weakNBT()],
        ['resonant', "reinforced", 'enderium', Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:resonant"}').weakNBT()],
        ['electrical_steel', "conductive_iron", 'electrical_steel', 'enderio:double_layer_capacitor'],
        ['energetic', "electrical_steel", 'energetic_alloy', 'enderio:octadic_capacitor'],
        ['vibrant', "energetic", 'vibrant_alloy', 'kubejs:compressed_octadic_capacitor']
    ]

		jetpackBase.forEach(material => {
			event.shaped(Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:' + material[0] + '"}'), [
					'PEP',
					'PSP',
					'T T'
			], {
					P: '#forge:plates/' + material[2],
					E: material[3],
					S: material[1],
					T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:' + material[0] + '"}').weakNBT()
			})
		})

    jetpackUpgrade.forEach(material => {
        event.shaped(Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:' + material[0] + '"}'), [
            'PEP',
            'PSP',
            'T T'
        ], {
            P: '#forge:plates/' + material[2],
            E: material[3],
            S: Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:'+material[1]+'"}').weakNBT(),
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:' + material[0] + '"}').weakNBT()
        }).modifyResult(jetpackUpgradeModifyResult)
    })

    event.recipes.gtceu.assembly_line('dark_soularium_jetpack')
        .itemInputs(Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:vibrant"}').weakNBT(), 'gtceu:dark_soularium_block', 'miniutilities:angel_ring', '2x enderio:ender_crystal', 'kubejs:double_compressed_octadic_capacitor', '4x #gtceu:circuits/luv', Item.of('ironjetpacks:thruster', 2, '{Id:"ironjetpacks:dark_soularium"}').weakNBT())
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs(Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:dark_soularium"}').weakNBT())
        .duration(3000)
        .EUt(30720)
				.modifyResult(jetpackUpgradeModifyResult)

     event.recipes.gtceu.assembly_line('fluxed_jetpack')
        .itemInputs(Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:resonant"}').weakNBT(), 'redstone_arsenal:flux_chestplate', 'kubejs:cryotheum_coolant_unit', 'miniutilities:angel_ring', '2x kubejs:compressed_octadic_capacitor', '4x #gtceu:circuits/luv', Item.of('ironjetpacks:thruster', 2, '{Id:"ironjetpacks:fluxed"}').weakNBT())
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs(Item.of('ironjetpacks:jetpack', '{Id:"ironjetpacks:fluxed"}').weakNBT())
        .duration(3000)
        .EUt(30720)
				.modifyResult(jetpackUpgradeModifyResult)

    //
    // Misc
    //

    event.recipes.gtceu.alloy_smelter('resonating_redstone')
        .itemInputs('minecraft:redstone_block', 'kubejs:ender_shard')
        .itemOutputs('kubejs:resonating_crystal')
        .duration(180)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter('resonating_restonia')
        .itemInputs('gtceu:restonia_gem', 'kubejs:ender_shard')
        .itemOutputs('kubejs:resonating_crystal')
        .duration(180)
        .EUt(16)

    event.shapeless('8x kubejs:ender_shard', ['minecraft:ender_pearl'])

    event.shaped('kubejs:empty_fluxed_jetpack_unit', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:electrum_flux_ingot',
        B: 'gtceu:signalum_ingot',
        C: 'enderio:fused_quartz'
    })

    event.shaped('kubejs:empty_soularium_jetpack_unit', [
        'ABA',
        'BCB',
        'ABA'
    ], {
        A: 'gtceu:dark_soularium_ingot',
        B: 'gtceu:electrical_steel_ingot',
        C: 'enderio:fused_quartz'
    })

    event.recipes.gtceu.alloy_smelter('flight_control_unit')
        .itemInputs('4x minecraft:ghast_tear', 'kubejs:empty_soularium_jetpack_unit')
        .itemOutputs('kubejs:flight_control_unit')
        .duration(100)
        .EUt(2000)

    event.recipes.gtceu.canner('glowstone_elevation_unit')
        .itemInputs('kubejs:empty_fluxed_jetpack_unit')
        .inputFluids('gtceu:glowstone 4032')
        .itemOutputs('kubejs:glowstone_elevation_unit')
        .duration(100)
        .EUt(7)

    event.recipes.gtceu.canner('cyrotheum_coolant_unit')
        .itemInputs('kubejs:empty_fluxed_jetpack_unit')
        .inputFluids('kubejs:molten_cryotheum 6000')
        .itemOutputs('kubejs:cryotheum_coolant_unit')
        .duration(100)
        .EUt(7)


    //Cells
    event.shaped(Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:leadstone"}').weakNBT(), [
        ' A ',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'gtceu:lead_ingot',
        C: 'minecraft:copper_ingot',
        D: 'gtceu:sulfur_dust'
    })

    event.shaped(Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:hardened"}').weakNBT(), [
        ' A ',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'gtceu:invar_ingot',
        C: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:leadstone"}').weakNBT(),
        D: 'gtceu:tin_ingot'
    })

    event.shaped(Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:reinforced"}').weakNBT(), [
        ' A ',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'gtceu:electrum_ingot',
        C: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:hardened"}').weakNBT(),
        D: '#enderio:fused_quartz'
    })

    event.shaped(Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:resonant"}').weakNBT(), [
        ' A ',
        'BCB',
        'ADA'
    ], {
        A: 'minecraft:redstone',
        B: 'gtceu:enderium_ingot',
        C: Item.of('ironjetpacks:cell', '{Id:"ironjetpacks:reinforced"}').weakNBT(),
        D: 'kubejs:pyrotheum_dust'
    })
})
