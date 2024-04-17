ServerEvents.recipes(event => {

    event.remove({ output: ["telepastries:nether_cake", 'telepastries:overworld_cake', 'telepastries:end_cake'] })

    // cake base
    event.shaped(
        'enderio:cake_base', [
            'SMS',
            'WWW'
        ], {
            W: 'gtceu:wheat_dust',
            S: 'minecraft:sugar',
            M: "minecraft:milk_bucket"
        }
    )

    //Overworld Cake
    event.shaped(
        'telepastries:overworld_cake', [
            'NKN',
            'OBO',
            'SAS'
        ], {
            N: 'minecraft:redstone',
            O: '#minecraft:saplings',
            B: "enderio:cake_base",
            S: 'gtceu:plant_ball',
            A: 'minecraft:diamond',
            K: 'gtceu:gold_dust'
        }
    )



    // Nether cake
    event.shaped(
        "telepastries:nether_cake", [
            'NNN',
            'OBO',
            'SSS'
        ], {
            N: "gtceu:netherrack_dust",
            O: "minecraft:obsidian",
            B: "enderio:cake_base",
            S: "minecraft:soul_sand"
        }
    )

    //End Cake

    event.shaped(
        'telepastries:end_cake', [
            'NNN',
            'OBO',
            'SSS'
        ], {
            N: 'gtceu:endstone_dust',
            O: 'minecraft:ender_eye',
            B: "enderio:cake_base",
            S: 'gtceu:black_steel_plate'
        }
    )

    //Void Cake

    event.shaped(
        'telepastries:custom_cake', [
            'ABC',
            'DED',
            'FFF'
        ], {
            A: 'gtceu:restonia_gem',
            B: 'gtceu:palis_gem',
            C: 'gtceu:emeradic_gem',
            D: 'kubejs:pulsating_dust',
            E: 'enderio:cake_base',
            F: 'gtceu:aluminium_plate'
        }
    )
})