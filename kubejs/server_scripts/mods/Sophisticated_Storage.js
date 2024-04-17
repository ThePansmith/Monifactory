ServerEvents.recipes(event => {

    // Barrels

    // It refuse to replace these, so plan B it is
    // event.remove({ output: /iron_barrel/ })
    // event.replaceInput({ output: /gold_barrel/ }, 'minecraft:gold_ingot', 'minecraft:iron_ingot')
    // event.replaceInput({ output: /diamond_barrel/ }, 'minecraft:diamond', 'gtceu:vibrant_alloy_ingot')
    // event.replaceInput({ output: /netherite_barrel/ }, 'minecraft:netherite_ingot', 'gtceu:dark_soularium_ingot')

    event.remove({ output: /sophisticatedstorage:[A-Za-z]+_barrel/ })
    event.remove({ output: /sophisticatedstorage:[A-Za-z]+_chest/ })
    event.remove({ output: /limited_barrel/ })
    event.remove({ output: /sophisticatedstorage:[A-Za-z]+_to_[A-Za-z]+_tier_upgrade/ })
    event.remove({ input: 'minecraft:redstone_torch', mod: 'sophisticatedstorage'})
    
    var barrelupgrade = [
        [Item.of('sophisticatedstorage:gold_barrel', '{woodType:"oak"}'), 'minecraft:iron_ingot', 'minecraft:barrel', 'minecraft:barrel'],
        ['sophisticatedstorage:basic_to_gold_tier_upgrade', 'minecraft:iron_ingot', 'minecraft:barrel', 'minecraft:iron_ingot'],
        ['sophisticatedstorage:gold_to_diamond_tier_upgrade', 'gtceu:vibrant_alloy_ingot', 'gtceu:vibrant_alloy_ingot', 'sophisticatedstorage:basic_to_gold_tier_upgrade'],
        ['sophisticatedstorage:diamond_to_netherite_tier_upgrade', 'gtceu:dark_soularium_ingot', 'gtceu:dark_soularium_ingot', 'sophisticatedstorage:gold_to_diamond_tier_upgrade'],
    ]

    barrelupgrade.forEach(material => {
        event.shaped(material[0], [
            'III',
            'OUO',
            'III'
        ], {
            I: material[1],
            O: material[2],
            U: material[3]
        })
    })

    event.remove({ output: 'sophisticatedstorage:controller' })

    // Backpacks
    event.remove({ output: 'sophisticatedbackpacks:copper_backpack' })

    var backpacks = [
        ['sophisticatedbackpacks:backpack', 'minecraft:leather', 'gtceu:tin_ingot', '#forge:chests/wooden'],
        ['sophisticatedbackpacks:iron_backpack', 'minecraft:gold_nugget', 'gtceu:invar_ingot', 'sophisticatedbackpacks:copper_backpack'],
        ['sophisticatedbackpacks:iron_backpack', 'minecraft:gold_nugget', 'gtceu:invar_ingot', 'sophisticatedbackpacks:backpack'],
        ['sophisticatedbackpacks:gold_backpack', 'gtceu:electrum_nugget', 'gtceu:aluminium_ingot', 'sophisticatedbackpacks:iron_backpack'],
        ['sophisticatedbackpacks:diamond_backpack', 'gtceu:electrum_nugget', 'gtceu:signalum_ingot', 'sophisticatedbackpacks:gold_backpack'],
        ['sophisticatedbackpacks:netherite_backpack', 'gtceu:signalum_nugget', 'gtceu:enderium_ingot', 'sophisticatedbackpacks:diamond_backpack'],
    ]
    backpacks.forEach(material => {
        event.remove({ output: material[0] })
        event.shaped(material[0], [
            ' L ',
            'TCT',
            'L L'
        ], {
            L: material[1],
            T: material[2],
            C: material[3]
        }).modifyResult((grid, result) => { //Copy the contentsUuid tag to the new item to transfer the inventory over
					let item = grid.find(material[3])
					if (item.nbt && item.nbt.contentsUuid) {
						return result.withNBT({contentsUuid: item.nbt.contentsUuid})
					}
					return result;
				})
		})

    // Stack upgrades

    var stackupgrade = [
        ['stack_upgrade_tier_1', 'gtceu:vibrant_alloy', 'upgrade_base'],
        ['stack_upgrade_tier_2', 'gtceu:lumium', 'stack_upgrade_tier_1'],
        ['stack_upgrade_tier_3', 'gtceu:draconium', 'stack_upgrade_tier_2'],
        ['stack_upgrade_tier_4', 'gtceu:omnium', 'stack_upgrade_tier_3']
    ]
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_starter_tier' })
    event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_1_plus' })

    stackupgrade.forEach(material => {
        event.remove({ output: 'sophisticatedbackpacks:' + material[0] })
        event.shaped('sophisticatedbackpacks:' + material[0], [
            'III',
            'IUI',
            'BIB'
        ], {
            I: material[1] + '_ingot',
            B: material[1] + '_block',
            U: 'sophisticatedbackpacks:' + material[2]
        })

        event.remove({ output: 'sophisticatedstorage:' + material[0] })
        event.shaped('sophisticatedstorage:' + material[0], [
            'III',
            'IUI',
            'BIB'
        ], {
            I: material[1] + '_ingot',
            B: material[1] + '_block',
            U: 'sophisticatedstorage:' + material[2]
        })
    })


    event.remove({ output: 'sophisticatedstorage:hopper_upgrade' })
    event.shaped('4x sophisticatedstorage:hopper_upgrade', [
            ' H ',
            'IUI',
            'RRR'
        ], {
            U: 'sophisticatedstorage:upgrade_base',
            I: 'minecraft:iron_ingot',
            H: 'minecraft:hopper',
            R: 'gtceu:red_alloy_plate'
        })

        // Removed Upgrades
        var removeupgrades = [
            ['compacting_upgrade'],
            ['advanced_compacting_upgrade']
        ]
        removeupgrades.forEach(material => {
            event.remove({ output: 'sophisticatedbackpacks:'  + material[0] })
            event.remove({ output: 'sophisticatedstorage:'  + material[0] })
        })

        event.remove({ output: 'sophisticatedstorage:compression_upgrade' })




        // Misc upgrades
    var upgrades = [
        ['magnet_upgrade', 'pickup_upgrade', 'minecraft:iron_ingot', 'enderio:vacuum_chest']
    ]

    upgrades.forEach(material => {
        event.remove({ output: 'sophisticatedbackpacks:' + material[0] })
        event.shaped('sophisticatedbackpacks:' + material[0], [
            'IAI',
            'IUI',
            'IBI'
        ], {
            U: 'sophisticatedbackpacks:' + material[1],
            I: material[2],
            A: material[3],
            B: material[4]
        })

        upgrades.forEach(material => {
            event.remove({ output: 'sophisticatedstorage:' + material[0] })
            event.shaped('sophisticatedstorage:' + material[0], [
                'IAI',
                'IUI',
                'IBI'
            ], {
                U: 'sophisticatedstorage:' + material[1],
                I: material[2],
                A: material[3],
                B: material[4]
            })
        })
    })
})