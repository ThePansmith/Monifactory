ServerEvents.recipes(event => {
    const reconstructedItems = [
        ['minecraft:redstone', 'gtceu:restonia_gem', 128, 'restonia'],
        ['minecraft:iron_ingot', 'gtceu:enori_gem', 128, 'enori'],
        ['minecraft:coal', 'gtceu:void_gem', 128, 'void'],
        ['minecraft:lapis_lazuli', 'gtceu:palis_gem', 128, 'palis'],
        ['minecraft:diamond', 'gtceu:diamatine_gem', 128, 'diamatine'],
        ['minecraft:emerald', 'gtceu:emeradic_gem', 128, 'emeradic'],
        ['minecraft:coal_block', 'gtceu:void_block', 128, 'void_block'],
        ['#forge:storage_blocks/redstone', 'gtceu:restonia_block', 128, 'restonia_block'],
        ['#forge:storage_blocks/lapis', 'gtceu:palis_block', 128, 'palis_block'],
        ['#forge:storage_blocks/diamond', 'gtceu:diamatine_block', 128, 'diamatine_block'],
        ['#forge:storage_blocks/emerald', 'gtceu:emeradic_block', 128, 'emeradic_block'],
        ['#forge:storage_blocks/iron', 'gtceu:enori_block', 128, 'enori_block'],
        ['minecraft:sand', 'minecraft:soul_sand', 128, 'soul_sand'],
        ['minecraft:red_mushroom', 'minecraft:nether_wart', 32, 'nether_wart'],
        ['minecraft:quartz', 'minecraft:prismarine_shard', 128, 'prismarine_shard'],
        ['minecraft:rotten_flesh', 'minecraft:leather', 32, 'leather'],
        ['gtceu:topaz_gem', 'minecraft:prismarine_crystals', 128, 'prismarine_crystals'],
        ['gtceu:steel_ingot', 'gtceu:damascus_steel_ingot', 128, 'damascus_steel'],
        ['gtceu:diamatine_block', 'kubejs:starry_diamond_block', 128, 'starry_diamond'],
        ['gtceu:coke_gem', 'gtceu:coal_perfect', 128, 'perfect_coal'],
        ['gtceu:obsidian_dust', 'enderio:grains_of_infinity', 32, 'temp_grains'],
        ['minecraft:poppy', 'minecraft:red_mushroom', 32, 'red_mushroom'],
        ['minecraft:dried_kelp', 'minecraft:wither_rose', 32, 'wither_rose'],
        ['gtceu:plant_ball', 'minecraft:kelp', 32, 'kelp'],
        ['minecraft:obsidian', 'minecraft:crying_obsidian', 32, 'crying_obsidian'],
        ['#forge:dyes/black', 'minecraft:ink_sac', 32, 'ink_sac'],
        ['minecraft:ink_sac', 'minecraft:glow_ink_sac', 32, 'glow_ink_sac']
    ]

    const crystals = ['enori', 'void', 'palis', 'diamatine', 'restonia', 'emeradic']
    crystals.forEach(crystal => {
        event.remove({ id: 'gtceu:shaped/gear_' + crystal })
        event.remove({ id: 'gtceu:shaped/gear_' + crystal + '_empowered' })
    })
    // Black Quartz
    event.recipes.gtceu.electrolyzer("kubejs:black_quartz_dust")
        .itemInputs("4x gtceu:quartzite_dust")
        .itemOutputs("gtceu:black_quartz_dust")
        .duration(400)
        .EUt(90)
    event.recipes.gtceu.autoclave('kubejs:black_quartz_gem__water')
        .itemInputs('gtceu:black_quartz_dust')
        .inputFluids(Fluid.of('minecraft:water', 250))
        .itemOutputs('gtceu:black_quartz_gem')
        .duration(1200)
        .EUt(24)
    event.recipes.gtceu.autoclave('kubejs:black_quartz_gem__distilled')
        .itemInputs('gtceu:black_quartz_dust')
        .inputFluids(Fluid.of('gtceu:distilled_water', 50))
        .itemOutputs('gtceu:black_quartz_gem')
        .duration(600)
        .EUt(24)

    // Reconstruction
    reconstructedItems.forEach(([input, output, eut, id]) => {
        event.recipes.gtceu.atomic_reconstruction('kubejs:' + id)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(20)
            .EUt(eut)
    })

    // Universal Circuits
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"]
        tiers.forEach((level) => {
        event.recipes.gtceu.atomic_reconstruction("kubejs:" + level + "_universal_circuit")
            .itemInputs("#gtceu:circuits/" + level)
            .itemOutputs("kubejs:" + level + "_universal_circuit")
            .EUt(32)
            .duration(5)
    })

    const reconstructorrecipe = [
        ['lv', 'lead'],
        ['mv', 'rose_gold'],
        ['hv', 'beryllium'],
        ['ev', 'rhodium'],
        ['iv', 'platinum'],
        ['luv', 'osmiridium'],
        ['zpm', 'naquadah'],
        ['uv', 'duranium'],
        ['uhv', 'tritanium'],
        ['uev', 'omnium'],
        ['uiv', 'holmium']
    ]
    reconstructorrecipe.forEach(([tier, plate]) => {
    event.shaped(
        `gtceu:${tier}_atomic_reconstructor`, [
        'CPC',
        'EHE',
        'PPM'
    ], {
        P: `gtceu:${plate}_plate`,
        E: `gtceu:${tier}_emitter`,
        H: `gtceu:${tier}_machine_hull`,
        C: `#gtceu:circuits/${tier}`,
        M: `gtceu:${tier}_electric_motor`
    }).id(`kubejs:shaped/${tier}_atomic_reconstructor`)
    })

    //Crystal Gears
    crystals.forEach(crystal => {
        event.recipes.gtceu.extruder("kubejs:" + crystal + "_gear")
            .itemInputs('4x gtceu:' + crystal + '_gem')
            .itemOutputs('gtceu:' + crystal + '_gear')
            .notConsumable('gtceu:gear_extruder_mold')
            .duration(80)
            .EUt(56)
    })

    // Flower cycle convenience recipes
    const flowerCycle = [
        'dandelion',
        'poppy',
        'blue_orchid',
        'allium',
        'azure_bluet',
        'red_tulip',
        'orange_tulip',
        'white_tulip',
        'pink_tulip',
        'oxeye_daisy',
        'cornflower',
        'lily_of_the_valley',
        //'sunflower',  //Flowers that give 2x as much dye are excluded. Sorry!
        //'lilac',
        //'rose_bush',
        //'peony',
        'spore_blossom',
        'wither_rose',
        'dead_bush'
    ] 
    flowerCycle.forEach((flower, index) => {
        let curFlower = flowerCycle[index];
        let nextFlower = flowerCycle[(index+1)%flowerCycle.length];
        event.recipes.gtceu.atomic_reconstruction("gtceu:" + curFlower + "_to_" + nextFlower)
            .itemInputs("minecraft:" + curFlower)
            .itemOutputs("minecraft:" + nextFlower)
            .EUt(GTValues.VA[GTValues.LV])
            .duration(30)
    })
})
