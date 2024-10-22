
ServerEvents.recipes(event => {
    const modids = ["sophisticatedstorage", "sophisticatedbackpacks"]

    //Remove default backpack recipe (Loot it!)
    event.remove({ output: 'sophisticatedbackpacks:backpack' })

    //Remove XP pump upgrades
    event.remove({ id: "sophisticatedstorage:xp_pump_upgrade"})
    event.remove({ id: "sophisticatedbackpacks:xp_pump_upgrade"})
    
    //Standard backpack recipe if you don't want to loot it
    event.shaped(
        'sophisticatedbackpacks:backpack', 
        [
            ' N ',
            'ICI',
            'N N'
        ], {
            "N": '#forge:leather',
            "I": '#forge:plates/wood',
            "C": '#forge:chests/wooden'
        }
    )

    // Backpack and Barrel Upgrading
    const sophMaterials = [
        ["", null, null],
        ['copper_', 'bronze', null],
        ['iron_', 'steel', 'invar'],
        ['gold_', 'aluminium', 'electrum'],
        ['diamond_', 'stainless_steel', 'signalum'],
        ['netherite_', 'tungsten_steel', 'enderium']
    ]
    const sophStorageTypes = [
        ['', 'barrel'],
        ['limited_', 'barrel_1'],
        ['limited_', 'barrel_2'],
        ['limited_', 'barrel_3'],
        ['limited_', 'barrel_4'],
        ['', 'chest'],
        ['', 'shulker_box']
    ]
    sophMaterials.forEach((material, index) => {
        if(index == 0) return;
        //Works for upgrades as the recipe type implies, but doesn't work for making new backpacks from scratch
        let outputBackpack = `sophisticatedbackpacks:${material[0]}backpack`
        let inputBackpack = `sophisticatedbackpacks:${sophMaterials[index-1][0]}backpack`
        event.remove({ mod: 'sophisticatedbackpacks', output: outputBackpack })
        event.custom({
            "type": "sophisticatedbackpacks:backpack_upgrade",
            "conditions": [
                {
                    "type": "sophisticatedcore:item_enabled",
                    "itemRegistryName": outputBackpack
                }
            ],
            "pattern": [
                " N ",
                "ICI",
                "N N"
            ],
            "key": {
                "N": {
                    "tag": ('forge:nuggets/' + material[1])
                },
                "I": {
                    "tag": index == 1 ? 'forge:leather' : ('forge:ingots/' + material[2]),
                },
                "C": {
                    "item": inputBackpack
                }
            },
            "result": {
                "item": outputBackpack
            }
        });

        sophStorageTypes.forEach(storageType => {
            //Works for upgrades as the recipe type implies, but doesn't work for making new barrels/chests/boxes from scratch
            let outputStorage = 'sophisticatedstorage:' + storageType[0] + material[0] + storageType[1]
            let inputStorage = 'sophisticatedstorage:' + storageType[0] + sophMaterials[index-1][0] + storageType[1]
            event.remove({ mod: 'sophisticatedstorage', output: outputStorage })
            event.custom({
                "type": "sophisticatedstorage:storage_tier_upgrade",
                "conditions": [
                    {
                        "type": "sophisticatedcore:item_enabled",
                        "itemRegistryName": outputStorage
                    }
                ],
                "pattern": [
                    "IPI",
                    "ICI",
                    "IPI"
                ],
                "key": {
                    "I": {
                        "tag": ('forge:ingots/' + material[1])
                    },
                    "P": {
                        "tag": index == 1 ? 'forge:plates/wood' : ('forge:plates/' + material[2])
                    },
                    "C": {
                        "item": inputStorage
                    }
                },
                "result": {
                    "item": outputStorage
                }
            });
        })
    })

    event.remove({ output: 'sophisticatedstorage:controller' })

            event.shaped(
                'sophisticatedstorage:controller', [
                'III',
                'CDC',
                'IEI'
            ], {
                I: "#forge:plates/steel",
                C: "#gtceu:circuits/lv",
                D: "#sophisticatedstorage:base_tier_wooden_storage",
                E: "#forge:storage_blocks/diamond"
            })
            event.shaped(
                'sophisticatedstorage:controller', [
                'III',
                'CDC',
                'IEI'
            ], {
                I: "#forge:plates/steel",
                C: "#gtceu:circuits/lv",
                D: "#sophisticatedstorage:base_tier_wooden_storage",
                E: "#forge:storage_blocks/emerald"
            })
            event.shaped(
                'sophisticatedstorage:storage_input', [
                'III',
                'CDC',
                'IEI'
            ], {
                I: "#forge:plates/steel",
                C: "#gtceu:circuits/lv",
                D: "#sophisticatedstorage:base_tier_wooden_storage",
                E: "#forge:storage_blocks/gold"
            })
            event.shaped(
                'sophisticatedstorage:storage_output', [
                'IEI',
                'CDC',
                'III'
            ], {
                I: "#forge:plates/steel",
                C: "#gtceu:circuits/lv",
                D: "#sophisticatedstorage:base_tier_wooden_storage",
                E: "#forge:storage_blocks/gold"
            })

            event.shaped(
                'sophisticatedstorage:storage_io', [
                'III',
                'SDT',
                'III'
            ], {
                I: "#forge:plates/steel",
                S: "sophisticatedstorage:storage_input",
                T: "sophisticatedstorage:storage_output",
                D: "#sophisticatedstorage:base_tier_wooden_storage",
        })

    // Stack upgrades
    var stackupgrade = [
        ['stack_upgrade_tier_1', 'gtceu:energetic_alloy', 'upgrade_base'],
        ['stack_upgrade_tier_2', 'gtceu:stainless_steel', 'stack_upgrade_tier_1'],
        ['stack_upgrade_tier_3', 'gtceu:tungsten_steel', 'stack_upgrade_tier_2'],
        ['stack_upgrade_tier_4', 'gtceu:osmiridium', 'stack_upgrade_tier_3']
    ]
    event.remove({ output: 'sophisticatedbackpacks:stack_upgrade_starter_tier' })
    event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_1_plus' })

    stackupgrade.forEach(material => {
        modids.forEach(mod => {
            event.remove({ output: mod + ':' + material[0] })
            event.shaped(mod + ':' + material[0], [
                'III',
                'IUI',
                'BIB'
            ], {
                I: material[1] + '_plate',
                B: material[1] + '_gear',
                U: mod + ':' + material[2]
            })
        })
    })

    event.remove({ output: 'sophisticatedstorage:stack_upgrade_tier_5'})
    event.shaped('sophisticatedstorage:stack_upgrade_tier_5', [
        'III',
        'IUI',
        'BIB'
    ], {
        I: 'gtceu:naquadah_alloy_plate',
        B: 'gtceu:naquadah_alloy_gear',
        U: 'sophisticatedstorage:stack_upgrade_tier_4'
    }),


    // Upgrades
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


    // Compression upgrades are removed in EM like Compacting Drawers
    if(isExpertMode) {
        event.remove({ output: /^sophisticated.*(compacting|compression)_upgrade$/})
    }


    // Magnet upgrades
    modids.forEach(mod => {
        event.remove({ output: mod + ':magnet_upgrade' })
        event.shaped(mod + ':magnet_upgrade', [
            'IAI',
            'IUI',
            'I I'
        ], {
            U: mod + ':pickup_upgrade',
            I: 'minecraft:iron_ingot',
            A: 'enderio:vacuum_chest',
        })
    })
})
