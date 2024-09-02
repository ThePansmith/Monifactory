// Solar Panels

ServerEvents.recipes(event => {

    // Recipes have already been disabled in the SolarFlux config

    //
    // Solar Panel Recipes
    //

    // T1
    event.shaped(
        'solarflux:sp_1', [
            'MMM',
            'WWW',
            'SCS'
        ], {
            M: 'solarflux:mirror',
            W: 'gtceu:fine_copper_wire',
            S: 'minecraft:stone_slab',
            C: 'enderio:conductive_conduit'
        }
    )
    
    // All the other panels follow a pattern until 7
    var solarCrafting = [
        [2, 'gtceu:tin_single_cable', 'minecraft:redstone_block', 'gtceu:cupronickel_plate', 'enderio:energetic_conduit', 1, 1],
        [3, 'gtceu:electrical_steel_plate', 'gtceu:conductive_alloy_block', 'gtceu:electrical_steel_gear', 'enderio:vibrant_conduit', 1, 1],
        [4, 'gtceu:microversium_ingot', 'gtceu:end_steel_block', 'gtceu:microversium_ingot', 'enderio:endsteel_conduit', 2, 2],
        [5, 'gtceu:lumium_plate', 'gtceu:sunnarium_dust', 'gtceu:lumium_plate', 'enderio:lumium_conduit', 4, 3],
        [6, 'gtceu:signalum_plate', 'gtceu:enriched_sunnarium_dust', 'gtceu:signalum_plate', 'enderio:signalum_conduit', 4, 4]
    ]
    
    solarCrafting.forEach(solar => {
        event.shaped(
            solar[5] + 'x solarflux:sp_' + solar[0], [
                'SCS',
                'WBW',
                'PEP'
            ], {
                S: 'solarflux:sp_' + (solar[0] - 1),
                C: 'solarflux:photovoltaic_cell_' + solar[6],
                W: solar[1],
                B: solar[2],
                P: solar[3],
                E: solar[4]
            }
        )
    })

    // High tier solars

    // T7
    event.recipes.gtceu.assembler('sp_7')
    .itemInputs('2x solarflux:sp_6', '3x solarflux:photovoltaic_cell_5', '2x gtceu:osmium_plate', 'enderio:signalum_conduit')
    .inputFluids('gtceu:signalum 1296')
    .itemOutputs('4x solarflux:sp_7')
    .duration(2400)
    .EUt(7680)

    // T8
    event.recipes.gtceu.assembly_line('sp_8')
    .itemInputs('2x solarflux:sp_7', '3x solarflux:photovoltaic_cell_6', '2x gtceu:osmiridium_plate', 'enderio:enderium_conduit')
    .inputFluids('gtceu:enderium 1296')
    .itemOutputs('4x solarflux:sp_8')
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('solarflux:sp_7').EUt(480).duration(1200))
    .duration(4800)
    .EUt(30720)

    //
    // Photo Cell Recipes
    //

    // Similar thing with the photo cells, cells 2-6 follow a pattern (1 uses mirror)

    // Mirror
    event.shaped(
        'solarflux:mirror', [
            'GGG',
            'SSS',
            '   '
        ], {
            G: 'minecraft:glass_pane',
            S: 'gtceu:silver_plate'
        }
    )

    // T1
    event.shaped(
        '6x solarflux:photovoltaic_cell_1', [
            'LLL',
            'MMM',
            'FFF'
        ], {
            L: 'gtceu:lapis_plate',
            M: 'solarflux:mirror',
            F: 'gtceu:fluix_plate'
        }
    )

    // T2-6
    var cellCrafting = [
        [2, 'enderio:photovoltaic_plate', 'gtceu:battery_alloy_plate'],
        [3, 'minecraft:ender_pearl' /* Temporary, TODO: add lens as type of ender pearl material */, 'gtceu:annealed_copper_plate'],
        [4, 'gtceu:light_blue_glass_lens', 'gtceu:vibrant_alloy_plate'],
        [5, 'gtceu:sunnarium_plate', 'gtceu:sunnarium_plate'],
        [6, 'gtceu:enriched_sunnarium_plate', 'gtceu:enriched_sunnarium_plate']
    ]

    cellCrafting.forEach(cell => {
        event.shaped(
            '6x solarflux:photovoltaic_cell_' + cell[0], [
                'TTT',
                'PPP',
                'BBB'
            ], {
                T: cell[1],
                P: 'solarflux:photovoltaic_cell_' + (cell[0] - 1),
                B: cell[2]
            }
        )
    })

    //Sunnarium
    event.shaped(
        '3x gtceu:sunnarium_dust', [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'kubejs:stabilized_plutonium',
            B: 'kubejs:stabilized_curium',
            C: 'minecraft:glowstone'
        }
    )
    event.recipes.gtceu.mixer('kubejs:sunnarium_dust_mixer')
        .inputFluids('gtceu:plutonium 144', 'gtceu:curium 72')
        .itemInputs('minecraft:glowstone_dust')
        .itemOutputs('2x gtceu:sunnarium_dust')
        .duration(4000)
        .EUt(4000);
    event.recipes.gtceu.mixer('kubejs:sunnarium_dust_mixer_alt')
        .inputFluids('gtceu:plutonium_241 144', 'gtceu:curium 72')
        .itemInputs('minecraft:glowstone_dust')
        .itemOutputs('2x gtceu:sunnarium_dust')
        .duration(4000)
        .EUt(4000);

    //Enriched Sunnarium
    event.shaped(
        '4x gtceu:enriched_sunnarium_dust', [
            'ABA',
            'BCB',
            'ABA'
        ], {
            A: 'kubejs:stabilized_neptunium',
            B: 'kubejs:stabilized_americium',
            C: 'gtceu:sunnarium_dust'
        }
    )
    event.recipes.gtceu.mixer('kubejs:enriched_sunnarium_dust_mixer')
        .inputFluids('gtceu:neptunium 288', 'gtceu:americium 144')
        .itemInputs('gtceu:sunnarium_dust')
        .itemOutputs('6x gtceu:enriched_sunnarium_dust')
        .duration(2000)
        .EUt(16000);
})