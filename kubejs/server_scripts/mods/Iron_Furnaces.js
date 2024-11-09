ServerEvents.recipes(event => {

    event.remove({ output: ['ironfurnaces:rainbow_plating', 'ironfurnaces:rainbow_core', 'ironfurnaces:million_furnace', 'ironfurnaces:augment_factory', 'ironfurnaces:iron_furnace', 'ironfurnaces:silver_furnace', 'ironfurnaces:copper_furnace', 'ironfurnaces:gold_furnace', 'ironfurnaces:diamond_furnace', 'ironfurnaces:obsidian_furnace', 'ironfurnaces:netherite_furnace'] })
    event.shaped(
        'ironfurnaces:iron_furnace', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'minecraft:iron_ingot',
            B: 'minecraft:furnace'
        }
    )

    event.shaped(
        'ironfurnaces:copper_furnace', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'minecraft:copper_ingot',
            B: 'ironfurnaces:iron_furnace'
        }
    )

    event.shaped(
        'ironfurnaces:silver_furnace', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'gtceu:silver_ingot',
            B: 'ironfurnaces:copper_furnace'
        }
    )

    event.shaped(
        'ironfurnaces:gold_furnace', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'minecraft:gold_ingot',
            B: 'ironfurnaces:silver_furnace'
        }
    )

    event.shaped(
        'ironfurnaces:diamond_furnace', [
            'AAA',
            'ABA',
            'AAA'
        ], {
            A: 'minecraft:diamond',
            B: 'ironfurnaces:gold_furnace'
        }
    )

    event.shaped(
        'ironfurnaces:obsidian_furnace', [
            'AAA',
            'BAB',
            'AAA'
        ], {
            A: 'minecraft:obsidian',
            B: 'ironfurnaces:diamond_furnace'
        }
    )

    event.shaped(
        'ironfurnaces:netherite_furnace', [
            'ABA',
            'BBB',
            'ABA'
        ], {
            A: 'minecraft:netherite_ingot',
            B: 'ironfurnaces:obsidian_furnace'
        }
    )

    event.shaped(
        'ironfurnaces:augment_factory', [
            'ACA',
            'BDB',
            'ACA'
        ], {
            A: 'gtceu:green_sapphire_plate',
            B: 'ironfurnaces:obsidian_furnace',
            C: '#gtceu:circuits/mv',
            D: 'gtceu:steel_gear'
        }
    )

    event.shaped(
        'ironfurnaces:item_copy', [
            ' I ',
            'SRS',
            'SSS'
        ], {
            S: '#forge:cobblestone/normal',
            R: "minecraft:redstone",
            I: "minecraft:iron_ingot"
        }
    )

    // Assembler Recipes for Iron Furnaces
    event.recipes.gtceu.assembler('kubejs:stone_to_iron_furnace')
    .itemInputs('minecraft:furnace', '4x gtceu:iron_plate')
    .itemOutputs('ironfurnaces:iron_furnace')
    .duration(200)
    .EUt(30)
    .circuit(8)

    const stonefurnaceupgrade = ['iron', 'copper', 'silver', 'gold', 'diamond']

    //Start from silver furnace
    for (let index = 2; index < stonefurnaceupgrade.length; index++) {
        let mat1 = stonefurnaceupgrade[index];
        let mat2 = stonefurnaceupgrade[index-1];
        let mat3 = stonefurnaceupgrade[index-2];

        event.recipes.gtceu.assembler('kubejs:stone_to_' + mat1 + '_furnace')
            .itemInputs('minecraft:furnace', `4x gtceu:${mat1}_plate`, `4x gtceu:${mat2}_plate`, `2x gtceu:${mat3}_plate`)
            .itemOutputs(`ironfurnaces:${mat1}_furnace`)
            .duration(300)
            .EUt(GTValues.VA[index-1])
            .circuit(8)
    }

    event.recipes.gtceu.assembler('kubejs:stone_to_obsidian_furnace')
    .itemInputs('2x minecraft:furnace', '4x gtceu:gold_plate', '8x gtceu:diamond_plate', '4x gtceu:obsidian_plate')
    .itemOutputs('ironfurnaces:obsidian_furnace')
    .duration(400)
    .EUt(GTValues.VA[GTValues.EV])
    .circuit(8)

    event.recipes.gtceu.assembler('kubejs:stone_to_netherite_furnace')
    .itemInputs('5x minecraft:furnace', '20x gtceu:diamond_plate', '20x gtceu:obsidian_plate', '4x minecraft:netherite_ingot')
    .itemOutputs('ironfurnaces:netherite_furnace')
    .duration(500)
    .EUt(GTValues.VA[GTValues.IV])
    .circuit(8)

    var furnaceupgrade = [
        ['copper', 'iron'],
        ['silver', 'copper'],
        ['gold', 'silver'],
        ['diamond', 'gold'],
    ]

    furnaceupgrade.forEach(([tier, mat1]) => {
        event.recipes.gtceu.assembler('kubejs:' + mat1 + '_to_' + tier + '_furnace')
        .itemInputs(`ironfurnaces:${mat1}_furnace`, `4x gtceu:${tier}_plate`)
        .itemOutputs(`ironfurnaces:${tier}_furnace`)
        .duration(300)
        .EUt(30)
        .circuit(4)
        })

    event.recipes.gtceu.assembler('kubejs:diamond_to_obsidian_furnace')
    .itemInputs('2x ironfurnaces:diamond_furnace', '4x gtceu:obsidian_plate')
    .itemOutputs('ironfurnaces:obsidian_furnace')
    .duration(200)
    .EUt(30)
    .circuit(4)

    event.recipes.gtceu.assembler('kubejs:obsidian_to_netherite_furnace')
    .itemInputs('5x ironfurnaces:obsidian_furnace', '4x minecraft:netherite_ingot')
    .itemOutputs('ironfurnaces:netherite_furnace')
    .duration(200)
    .EUt(30)
    .circuit(4)
})