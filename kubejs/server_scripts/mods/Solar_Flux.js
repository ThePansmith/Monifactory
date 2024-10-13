/**
 * Solar Flux mod script.
 * 
 * Adds recipes for:
 *  Solar Flux Solars
 *  Photovoltaic Cells
 *  Sunnarium
 *  GT <-> Solarflux conversion recipes
 * Does not add recipes for:
 *  Sculk Solars
 *  Neutronium & Infinity Solars
 */
ServerEvents.recipes(event => {

    // T1 (No photovoltaic cell)
    event.shaped(
        '2x solarflux:sp_1', [
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
    event.recipes.gtceu.assembler('sp_1')
        .itemInputs([
            Item.of('solarflux:mirror', 3),
            Item.of('gtceu:fine_copper_wire', 3),
            Item.of('minecraft:stone_slab', 2),
            Item.of('enderio:conductive_conduit', 1)
        ])
        .itemOutputs('2x solarflux:sp_1')
        .duration(2400)
        .EUt(2)
    
    // All the other panels follow a pattern until 7
    var solarCrafting = [
        ['gtceu:tin_single_cable', 'minecraft:redstone_block', 'gtceu:cupronickel_plate', 'enderio:energetic_conduit'],
        ['gtceu:electrical_steel_plate', 'gtceu:conductive_alloy_block', 'gtceu:electrical_steel_gear', 'enderio:vibrant_conduit'],
        ['gtceu:microversium_ingot', 'gtceu:end_steel_block', 'gtceu:microversium_ingot', 'enderio:endsteel_conduit'],
        ['gtceu:lumium_plate', 'gtceu:sunnarium_dust', 'gtceu:lumium_plate', 'enderio:lumium_conduit'],
        ['gtceu:signalum_plate', 'gtceu:enriched_sunnarium_dust', 'gtceu:signalum_plate', 'enderio:signalum_conduit']
    ]
    
    solarCrafting.forEach((ingredients, index) => {
        //Account for the first recipe, which doesn't use a photovoltaic cell
        var photovoltaic;
        if(index == 0) {
            photovoltaic = 'gtceu:tempered_glass'
        } else {
            photovoltaic = 'solarflux:photovoltaic_cell_' + index;
        }
        event.shaped(
            '2x solarflux:sp_' + (index+2), [
                'SCS',
                'WBW',
                'PEP'
            ], {
                S: 'solarflux:sp_' + (index+1),
                C: photovoltaic,
                W: ingredients[0],
                B: ingredients[1],
                P: ingredients[2],
                E: ingredients[3]
            }
        )
        //Account for when the same ingredients are used twice
        let assemblerInputs;
        if(ingredients[0] == ingredients[2]) {
            assemblerInputs = [
                '2x solarflux:sp_' + (index+1),
                Item.of(photovoltaic, 1),
                Item.of(ingredients[0], 4),
                Item.of(ingredients[1], 1),
                Item.of(ingredients[3], 1)
            ]
        } else {
            assemblerInputs = [
                '2x solarflux:sp_' + (index+1),
                Item.of(photovoltaic, 1),
                Item.of(ingredients[0], 2),
                Item.of(ingredients[1], 1),
                Item.of(ingredients[2], 2),
                Item.of(ingredients[3], 1)
            ]
        }
        event.recipes.gtceu.assembler('sp_' + (index+2))
            .itemInputs(assemblerInputs)
            .itemOutputs('2x solarflux:sp_' + (index+2))
            .duration(2400)
            .EUt(GTValues.VA[index])
    })

    // High tier solars

    // T7
    event.recipes.gtceu.assembler('sp_7')
    .itemInputs('2x solarflux:sp_6', '3x solarflux:photovoltaic_cell_5', '2x gtceu:osmium_plate', 'enderio:signalum_conduit')
    .inputFluids('gtceu:signalum 1296')
    .itemOutputs('2x solarflux:sp_7')
    .duration(2400)
    .EUt(GTValues.VA[GTValues.IV])

    // T8
    event.recipes.gtceu.assembly_line('sp_8')
    .itemInputs('2x solarflux:sp_7', '3x solarflux:photovoltaic_cell_6', '2x gtceu:osmiridium_plate', 'enderio:enderium_conduit')
    .inputFluids('gtceu:enderium 1296')
    .itemOutputs('2x solarflux:sp_8')
    ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('solarflux:sp_7').EUt(480).duration(1200))
    .duration(4800)
    .EUt(30720)

    //
    // Photovoltaic Cell Recipes
    //

    // Similar thing with the photovoltaic cells, cells 2-6 follow a pattern (1 uses mirror)

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

    // Photovoltaic Cell T1
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

    // Photovoltaic Cells T2-6
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


    // Sunnarium
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

    event.remove({ id: 'gtceu:macerator/macerate_sunnarium_plate'})


    // Enriched Sunnarium
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

    event.remove({ id: 'gtceu:macerator/macerate_enriched_sunnarium_plate'})
    event.remove({ id: 'gtceu:macerator/macerate_dense_enriched_sunnarium_plate'})
})


/* Gregtech Solar conversion/reversion */
ServerEvents.recipes(event => {
    event.remove({ id: /gtceu:shaped\/solar_panel_/ })

    // Basic conversion & reversion
    event.shapeless('2x gtceu:solar_panel', 'solarflux:sp_2').id('gtceu:solar_panel_basic_conversion')
    event.shapeless('solarflux:sp_2', '2x gtceu:solar_panel').id('gtceu:solar_panel_basic_reversion')

    // Generic conversion & reversion (Note the switch for Sculk solars)
    for (let index = 0; index <= 8; index++) {
        let tiername = TIER_ID_MAPPING[index].toLowerCase();
        let solarFluxPanel;
        if(index <= 5) {
            solarFluxPanel = `solarflux:sp_${index+3}`;
        } else {
            switch (index) {
                case 6:
                    solarFluxPanel = 'solarflux:sp_custom_bathyal'
                    break;
                case 7:
                    solarFluxPanel = 'solarflux:sp_custom_abyssal'
                    break;
                case 8:
                    solarFluxPanel = 'solarflux:sp_custom_hadal'
                    break;
                default:
                    break;
            }
        }
        event.shapeless(`gtceu:${tiername}_solar_panel`, solarFluxPanel).id(`gtceu:solar_panel_${tiername}_conversion`)
        event.shapeless(solarFluxPanel, `gtceu:${tiername}_solar_panel`).id(`gtceu:solar_panel_${tiername}_reversion`)
    }
})