ServerEvents.recipes(event => {

    ////// Machine Recipe //////

    event.shaped(
        'gtceu:greenhouse',
        ['AWA',
            'ASA',
            'WAW'],
        {
            A: '#gtceu:circuits/mv',
            W: 'gtceu:copper_single_cable',
            S: 'gtceu:solid_machine_casing'
        }
    ).id('kubejs:shaped/greenhouse')


    ////// Greenhouse Recipes //////

    function Greenhouse(id, input, fluid, output, boosted) {
        if (boosted) {
            event.recipes.gtceu.greenhouse(`kubejs:${id}`)
                .circuit(2)
                .notConsumable(InputItem.of(input))
                .itemInputs('4x gtceu:fertilizer')
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(640)
                .EUt(120)
        } else {
            event.recipes.gtceu.greenhouse(`kubejs:${id}`)
                .circuit(1)
                .notConsumable(InputItem.of(input))
                .inputFluids(Fluid.of('minecraft:water', fluid))
                .itemOutputs(output)
                .duration(1280)
                .EUt(120)
        }
    }


    ////// Trees //////

    // Rubber
    Greenhouse('rubber_sapling', 'gtceu:rubber_sapling', 1000, ['32x gtceu:rubber_log', '8x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], false)
    Greenhouse('rubber_sapling_boosted', 'gtceu:rubber_sapling', 1000, ['64x gtceu:rubber_log', '16x gtceu:sticky_resin', '4x gtceu:rubber_sapling'], true)

    // Oak
    Greenhouse('oak_sapling', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '4x minecraft:oak_sapling'], false)
    Greenhouse('oak_sapling_boosted', 'minecraft:oak_sapling', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:oak_sapling'], true)

    // Dark Oak
    Greenhouse('dark_oak_sapling', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], false)
    Greenhouse('dark_oak_sapling_boosted', 'minecraft:dark_oak_sapling', 1000, ['64x minecraft:dark_oak_log', '64x minecraft:dark_oak_log', '4x minecraft:dark_oak_sapling'], true)

    // Spruce
    Greenhouse('spruce_sapling', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], false)
    Greenhouse('spruce_sapling_boosted', 'minecraft:spruce_sapling', 1000, ['64x minecraft:spruce_log', '64x minecraft:spruce_log', '4x minecraft:spruce_sapling'], true)

    // Birch
    Greenhouse('birch_sapling', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '4x minecraft:birch_sapling'], false)
    Greenhouse('birch_sapling_boosted', 'minecraft:birch_sapling', 1000, ['64x minecraft:birch_log', '64x minecraft:birch_log', '4x minecraft:birch_sapling'], true)

    // Acacia
    Greenhouse('acacia_sapling', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], false)
    Greenhouse('acacia_sapling_boosted', 'minecraft:acacia_sapling', 1000, ['64x minecraft:acacia_log', '64x minecraft:acacia_log', '4x minecraft:acacia_sapling'], true)

    // Jungle
    Greenhouse('jungle_sapling', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], false)
    Greenhouse('jungle_sapling_boosted', 'minecraft:jungle_sapling', 1000, ['64x minecraft:jungle_log', '64x minecraft:jungle_log', '4x minecraft:jungle_sapling'], true)

    // Azalea
    Greenhouse('azalea_sapling', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:azalea'], false)
    Greenhouse('azalea_boosted', 'minecraft:azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:azalea'], true)

    // Flowering Azalea
    Greenhouse('flowering_azalea', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '4x minecraft:flowering_azalea'], false)
    Greenhouse('flowering_azalea_boosted', 'minecraft:flowering_azalea', 1000, ['64x minecraft:oak_log', '64x minecraft:oak_log', '4x minecraft:flowering_azalea'], true)

    // Cherry
    Greenhouse('cherry_sapling', 'minecraft:cherry_sapling', 1000, ['64x minecraft:cherry_log', '4x minecraft:cherry_sapling'], false)
    Greenhouse('cherry_sapling_boosted', 'minecraft:cherry_sapling', 1000, ['64x minecraft:cherry_log', '64x minecraft:cherry_log', '4x minecraft:cherry_sapling'], true)

    // Mangrove
    Greenhouse('mangrove_propagule', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], false)
    Greenhouse('mangrove_propagule_boosted', 'minecraft:mangrove_propagule', 1000, ['64x minecraft:mangrove_log', '64x minecraft:mangrove_log', '4x minecraft:mangrove_propagule'], true)
    
    // Chorus
    Greenhouse('chorus', 'minecraft:chorus_flower', 1000, ['32x minecraft:chorus_fruit', '4x minecraft:chorus_flower'], false)
    Greenhouse('chorus_boosted', 'minecraft:chorus_flower', 1000, ['64x minecraft:chorus_fruit', '4x minecraft:chorus_flower'], true)

    ////// Crops //////

    // Sugarcane
    Greenhouse('sugar_cane', 'minecraft:sugar_cane', 1000, '24x minecraft:sugar_cane', false)
    Greenhouse('sugar_cane_boosted', 'minecraft:sugar_cane', 1000, '48x minecraft:sugar_cane', true)

    // Kelp
    Greenhouse('kelp', 'minecraft:kelp', 2000, '24x minecraft:kelp', false)
    Greenhouse('kelp_boosted', 'minecraft:kelp', 2000, '48x minecraft:kelp', true)

    // Bamboo
    Greenhouse('bamboo', 'minecraft:bamboo', 1000, '24x minecraft:bamboo', false)
    Greenhouse('bamboo_boosted', 'minecraft:bamboo', 1000, '48x minecraft:bamboo', true)

    // Cactus
    Greenhouse('cactus', 'minecraft:cactus', 1000, '24x minecraft:cactus', false)
    Greenhouse('cactus_boosted', 'minecraft:cactus', 1000, '48x minecraft:cactus', true)

    // Wheat
    Greenhouse('wheat', 'minecraft:wheat_seeds', 1000, '24x minecraft:wheat', false)
    Greenhouse('wheat_boosted', 'minecraft:wheat_seeds', 1000, '48x minecraft:wheat', true)

    // Carrot
    Greenhouse('carrot', 'minecraft:carrot', 1000, '24x minecraft:carrot', false)
    Greenhouse('carrot_boosted', 'minecraft:carrot', 1000, '48x minecraft:carrot', true)

    // Potato
    Greenhouse('potato', 'minecraft:potato', 1000, '24x minecraft:potato', false)
    Greenhouse('potato_boosted', 'minecraft:potato', 1000, '48x minecraft:potato', true)

    // Beetroot
    Greenhouse('beetroot', 'minecraft:beetroot_seeds', 1000, '24x minecraft:beetroot', false)
    Greenhouse('beetroot_boosted', 'minecraft:beetroot_seeds', 1000, '48x minecraft:beetroot', true)

    // Mellon
    Greenhouse('melon', 'minecraft:melon_seeds', 1000, '12x minecraft:melon', false)
    Greenhouse('melon_boosted', 'minecraft:melon_seeds', 1000, '24x minecraft:melon', true)

    // Pumpkin
    Greenhouse('pumpkin', 'minecraft:pumpkin_seeds', 1000, '12x minecraft:pumpkin', false)
    Greenhouse('pumpkin_boosted', 'minecraft:pumpkin_seeds', 1000, '24x minecraft:pumpkin', true)

    // Nether Wart
    Greenhouse('nether_wart', 'minecraft:nether_wart', 1000, '12x minecraft:nether_wart', false)
    Greenhouse('nether_wart_boosted', 'minecraft:nether_wart', 1000, '24x minecraft:nether_wart', true)

    // Red Mushroom
    Greenhouse('red_mushroom', 'minecraft:red_mushroom', 1000, '12x minecraft:red_mushroom', false)
    Greenhouse('red_mushroom_boosted', 'minecraft:red_mushroom', 1000, '24x minecraft:red_mushroom', true)

    // Brown Mushroom
    Greenhouse('brown_mushroom', 'minecraft:brown_mushroom', 1000, '12x minecraft:brown_mushroom', false)
    Greenhouse('brown_mushroom_boosted', 'minecraft:brown_mushroom', 1000, '24x minecraft:brown_mushroom', true)


    // Flowers

    // Wither Rose
    Greenhouse('wither_rose', 'minecraft:wither_rose', 1000, '12x minecraft:wither_rose', false)
    Greenhouse('wither_rose_boosted', 'minecraft:wither_rose', 1000, '24x minecraft:wither_rose', true)

    // Cornflower
    Greenhouse('cornflower', 'minecraft:cornflower', 1000, '12x minecraft:cornflower', false)
    Greenhouse('cornflower_boosted', 'minecraft:cornflower', 1000, '24x minecraft:cornflower', true)

    // Torchflower
    Greenhouse('torchflower', 'minecraft:torchflower', 1000, '12x minecraft:torchflower', false)
    Greenhouse('torchflower_boosted', 'minecraft:torchflower', 1000, '24x minecraft:torchflower', true)

    // Sunflower
    Greenhouse('sunflower', 'minecraft:sunflower', 1000, '12x minecraft:sunflower', false)
    Greenhouse('sunflower_boosted', 'minecraft:sunflower', 1000, '24x minecraft:sunflower', true)

    // Peony
    Greenhouse('peony', 'minecraft:peony', 1000, '12x minecraft:peony', false)
    Greenhouse('peony_boosted', 'minecraft:peony', 1000, '24x minecraft:peony', true)

    // Red Tulip
    Greenhouse('red_tulip', 'minecraft:red_tulip', 1000, '12x minecraft:red_tulip', false)
    Greenhouse('red_tulip_boosted', 'minecraft:red_tulip', 1000, '24x minecraft:red_tulip', true)

    // Poppy
    Greenhouse('poppy', 'minecraft:poppy', 1000, '12x minecraft:poppy', false)
    Greenhouse('poppy_boosted', 'minecraft:poppy', 1000, '24x minecraft:poppy', true)

    // Rose Bush
    Greenhouse('rose_bush', 'minecraft:rose_bush', 1000, '12x minecraft:rose_bush', false)
    Greenhouse('rose_bush_boosted', 'minecraft:rose_bush', 1000, '24x minecraft:rose_bush', true)

    // Blue Orchid
    Greenhouse('blue_orchid', 'minecraft:blue_orchid', 1000, '12x minecraft:blue_orchid', false)
    Greenhouse('blue_orchid_boosted', 'minecraft:blue_orchid', 1000, '24x minecraft:blue_orchid', true)

    // Orange Tulip
    Greenhouse('orange_tulip', 'minecraft:orange_tulip', 1000, '12x minecraft:orange_tulip', false)
    Greenhouse('orange_tulip_boosted', 'minecraft:orange_tulip', 1000, '24x minecraft:orange_tulip', true)

    // Dandelion
    Greenhouse('dandelion', 'minecraft:dandelion', 1000, '12x minecraft:dandelion', false)
    Greenhouse('dandelion_boosted', 'minecraft:dandelion', 1000, '24x minecraft:dandelion', true)

    // Pink Tulip
    Greenhouse('pink_tulip', 'minecraft:pink_tulip', 1000, '12x minecraft:pink_tulip', false)
    Greenhouse('pink_tulip_boosted', 'minecraft:pink_tulip', 1000, '24x minecraft:pink_tulip', true)

    // Pink Petals
    Greenhouse('pink_petals', 'minecraft:pink_petals', 1000, '12x minecraft:pink_petals', false)
    Greenhouse('pink_petals_boosted', 'minecraft:pink_petals', 1000, '24x minecraft:pink_petals', true)

    // Allium
    Greenhouse('allium', 'minecraft:allium', 1000, '12x minecraft:allium', false)
    Greenhouse('allium_boosted', 'minecraft:allium', 1000, '24x minecraft:allium', true)

    // Lilac
    Greenhouse('lilac', 'minecraft:lilac', 1000, '12x minecraft:lilac', false)
    Greenhouse('lilac_boosted', 'minecraft:lilac', 1000, '24x minecraft:lilac', true)

    // Lily of the Valley
    Greenhouse('lily_of_the_valley', 'minecraft:lily_of_the_valley', 1000, '12x minecraft:lily_of_the_valley', false)
    Greenhouse('lily_of_the_valley_boosted', 'minecraft:lily_of_the_valley', 1000, '24x minecraft:lily_of_the_valley', true)

    // Oxeye Daisy
    Greenhouse('oxeye_daisy', 'minecraft:oxeye_daisy', 1000, '12x minecraft:oxeye_daisy', false)
    Greenhouse('oxeye_daisy_boosted', 'minecraft:oxeye_daisy', 1000, '24x minecraft:oxeye_daisy', true)

    // Azure Bluet
    Greenhouse('azure_bluet', 'minecraft:azure_bluet', 1000, '12x minecraft:azure_bluet', false)
    Greenhouse('azure_bluet_boosted', 'minecraft:azure_bluet', 1000, '24x minecraft:azure_bluet', true)

    // White Tulip
    Greenhouse('white_tulip', 'minecraft:white_tulip', 1000, '12x minecraft:white_tulip', false)
    Greenhouse('white_tulip_boosted', 'minecraft:white_tulip', 1000, '24x minecraft:white_tulip', true)  

    // Pitcher Plant
    Greenhouse('pitcher_plant', 'minecraft:pitcher_plant', 1000, '6x minecraft:pitcher_plant', false)
    Greenhouse('pitcher_plant_boosted', 'minecraft:pitcher_plant', 1000, '12x minecraft:pitcher_plant', true)  
    
    //Cosmetic Stuff
    // Lily Pad
    Greenhouse('lily_pad', 'minecraft:lily_pad', 1000, '12x minecraft:lily_pad', false)
    Greenhouse('lily_pad_boosted', 'minecraft:lily_pad', 1000, '24x minecraft:lily_pad', true)   

    // Vine
    Greenhouse('vine', 'minecraft:vine', 1000, '12x minecraft:vine', false)
    Greenhouse('vine_boosted', 'minecraft:vine', 1000, '24x minecraft:vine', true)
    
    // Moss
    Greenhouse('moss_block', 'minecraft:moss_block', 1000, '12x minecraft:moss_block', false)
    Greenhouse('moss_block_boosted', 'minecraft:moss_block', 1000, '24x minecraft:moss_block', true) 
	
})

ServerEvents.recipes(event => {

    event.remove({ id: "thermal:machine_insolator" })

    event.shaped(
        "thermal:machine_insolator", [
        " A ",
        "SBS",
        "CRC"
    ], {
        A: "gtceu:steel_plate",
        B: "minecraft:bucket",
        S: '#minecraft:saplings',
        R: 'thermal:rf_coil',
        C: '#forge:gears/copper'
    }
    ).id("thermal:machine_insolator")

    event.custom({
        type: 'thermal:insolator',
        "ingredient": {
            "item": "gtceu:rubber_sapling"
        },
        "result": [
            {
                "item": "gtceu:rubber_log",
                "chance": 6.0
            },
            {
                "item": "gtceu:sticky_resin",
                "chance": 1.25
            },
            {
                "item": "gtceu:rubber_sapling",
                "chance": 1.1
            }
        ],
        "energy_mod": 3.0,
        "water_mod": 3.0
    }).id('kubejs:thermal/insolator/rubber_sapling')

    event.custom({
        type: 'thermal:insolator',
        "ingredient": {
            "item": "minecraft:pink_petals",
        },
        "result": [
            {
                "item": "minecraft:pink_petals",
                "chance": 2.0
            }
        ],
        "energy_mod": 1.0,
        "water_mod": 1.0
    }).id('kubejs:thermal/insolator/pink_petals')
})