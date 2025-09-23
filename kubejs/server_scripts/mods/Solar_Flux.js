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
    event.shaped("2x solarflux:sp_1", [
        "MMM",
        "WWW",
        "SCS"
    ], {
        M: "solarflux:mirror",
        W: "gtceu:fine_copper_wire",
        S: "minecraft:stone_slab",
        C: "laserio:energy_overclocker_card_tier_1"
    })
    event.recipes.gtceu.assembler("sp_1")
        .itemInputs([
            Item.of("solarflux:mirror", 3),
            Item.of("gtceu:fine_copper_wire", 3),
            Item.of("minecraft:stone_slab", 2),
            Item.of("laserio:energy_overclocker_card_tier_1", 1)
        ])
        .itemOutputs("2x solarflux:sp_1")
        .duration(2400)
        .EUt(2)

    // All the other panels follow a pattern until 7
    let solarCrafting = [
        ["gtceu:tin_single_cable", "minecraft:redstone_block", "gtceu:cupronickel_plate", "laserio:energy_overclocker_card_tier_2"],
        ["gtceu:electrical_steel_plate", "gtceu:conductive_alloy_block", "gtceu:electrical_steel_gear", "laserio:energy_overclocker_card_tier_3"],
        ["gtceu:microversium_ingot", "gtceu:end_steel_block", "gtceu:microversium_ingot", "laserio:energy_overclocker_card_tier_4"],
        ["gtceu:lumium_plate", "gtceu:sunnarium_dust", "gtceu:lumium_plate", "laserio:energy_overclocker_card_tier_5"],
        ["gtceu:signalum_plate", "gtceu:enriched_sunnarium_dust", "gtceu:signalum_plate", "laserio:energy_overclocker_card_tier_6"]
    ]

    solarCrafting.forEach((ingredients, index) => {
        // Account for the first recipe, which doesn't use a photovoltaic cell
        let photovoltaic = index == 0 ?
            "gtceu:tempered_glass"
            : `solarflux:photovoltaic_cell_${index}`
        event.shaped(`2x solarflux:sp_${index + 2}`, [
            "SCS",
            "WBW",
            "PEP"
        ], {
            S: `solarflux:sp_${index + 1}`,
            C: photovoltaic,
            W: ingredients[0],
            B: ingredients[1],
            P: ingredients[2],
            E: ingredients[3]
        })
        // Account for when the same ingredients are used twice
        let assemblerInputs;
        if (ingredients[0] == ingredients[2]) {
            assemblerInputs = [
                `2x solarflux:sp_${index + 1}`,
                Item.of(photovoltaic, 1),
                Item.of(ingredients[0], 4),
                Item.of(ingredients[1], 1),
                Item.of(ingredients[3], 1)
            ]
        } else {
            assemblerInputs = [
                `2x solarflux:sp_${index + 1}`,
                Item.of(photovoltaic, 1),
                Item.of(ingredients[0], 2),
                Item.of(ingredients[1], 1),
                Item.of(ingredients[2], 2),
                Item.of(ingredients[3], 1)
            ]
        }
        event.recipes.gtceu.assembler(`sp_${index + 2}`)
            .itemInputs(assemblerInputs)
            .itemOutputs(`2x solarflux:sp_${index + 2}`)
            .duration(2400)
            .EUt(GTValues.VA[index])
    })

    // High tier solars

    // T7
    event.recipes.gtceu.assembler("sp_7")
        .itemInputs("2x solarflux:sp_6", "3x solarflux:photovoltaic_cell_5", "2x gtceu:osmium_plate", "laserio:energy_overclocker_card_tier_7")
        .inputFluids("gtceu:signalum 1296")
        .itemOutputs("2x solarflux:sp_7")
        .duration(2400)
        .EUt(GTValues.VA[GTValues.IV])

    // T8
    event.recipes.gtceu.assembly_line("sp_8")
        .itemInputs("2x solarflux:sp_7", "3x solarflux:photovoltaic_cell_6", "2x gtceu:osmiridium_plate", "laserio:energy_overclocker_card_tier_8")
        .inputFluids("gtceu:enderium 1296")
        .itemOutputs("2x solarflux:sp_8")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("solarflux:sp_7").EUt(480).duration(1200))
        .duration(4800)
        .EUt(30720)

    //
    // Photovoltaic Cell Recipes
    //

    // Similar thing with the photovoltaic cells, cells 2-6 follow a pattern (1 uses mirror)

    // Mirror
    event.shaped("solarflux:mirror", [
        "GGG",
        "SSS",
        "   "
    ], {
        G: "minecraft:glass_pane",
        S: "gtceu:silver_plate"
    })

    // Photovoltaic Cell T1
    event.shaped("6x solarflux:photovoltaic_cell_1", [
        "LLL",
        "MMM",
        "FFF"
    ], {
        L: "gtceu:lapis_plate",
        M: "solarflux:mirror",
        F: "gtceu:fluix_plate"
    })

    // Photovoltaic Cells T2-6
    let cellCrafting = [
        [2, "enderio:photovoltaic_plate", "gtceu:battery_alloy_plate"],
        [3, "gtceu:germanium_plate", "gtceu:annealed_copper_plate"],
        [4, "gtceu:light_blue_glass_lens", "gtceu:vibrant_alloy_plate"],
        [5, "gtceu:sunnarium_plate", "gtceu:sunnarium_plate"],
        [6, "gtceu:enriched_sunnarium_plate", "gtceu:enriched_sunnarium_plate"]
    ]

    cellCrafting.forEach(cell => {
        event.shaped(`6x solarflux:photovoltaic_cell_${cell[0]}`, [
            "TTT",
            "PPP",
            "BBB"
        ], {
            T: cell[1],
            P: `solarflux:photovoltaic_cell_${cell[0] - 1}`,
            B: cell[2]
        })
    })


    // Sunnarium
    event.shaped("3x gtceu:sunnarium_dust", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "kubejs:stabilized_plutonium",
        B: "kubejs:stabilized_americium",
        C: "minecraft:glowstone"
    })
    event.recipes.gtceu.mixer("kubejs:sunnarium_dust_mixer_239")
        .inputFluids("gtceu:plutonium 144", "gtceu:americium 72")
        .itemInputs("minecraft:glowstone_dust")
        .itemOutputs("2x gtceu:sunnarium_dust")
        .duration(300)
        .EUt(GTValues.VHA[GTValues.IV]);
    event.recipes.gtceu.mixer("kubejs:sunnarium_dust_mixer_241")
        .inputFluids("gtceu:plutonium_241 72", "gtceu:americium 72")
        .itemInputs("minecraft:glowstone_dust")
        .itemOutputs("2x gtceu:sunnarium_dust")
        .duration(300)
        .EUt(GTValues.VHA[GTValues.IV]);

    event.remove({ id: "gtceu:macerator/macerate_sunnarium_plate" })


    // Enriched Sunnarium
    event.shaped("4x gtceu:enriched_sunnarium_dust", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "kubejs:stabilized_neptunium",
        B: "kubejs:stabilized_curium",
        C: "gtceu:sunnarium_dust"
    })
    event.recipes.gtceu.mixer("kubejs:enriched_sunnarium_dust_mixer")
        .inputFluids("gtceu:neptunium 288", "gtceu:curium 144")
        .itemInputs("gtceu:sunnarium_dust")
        .itemOutputs("6x gtceu:enriched_sunnarium_dust")
        .duration(2400)
        .EUt(GTValues.VHA[GTValues.LuV]);

    event.remove({ id: "gtceu:macerator/macerate_enriched_sunnarium_plate" })
    event.remove({ id: "gtceu:macerator/macerate_dense_enriched_sunnarium_plate" })
})

/* Gregtech Solar conversion/reversion */
ServerEvents.recipes(event => {
    event.remove({ id: /gtceu:shaped\/solar_panel_/ })

    // Basic conversion & reversion
    event.shapeless("2x gtceu:solar_panel", "solarflux:sp_3").id("gtceu:solar_panel_basic_conversion")
    event.shapeless("solarflux:sp_3", "2x gtceu:solar_panel").id("gtceu:solar_panel_basic_reversion")

    // Generic conversion & reversion (Note the switch for Sculk solars)
    for (let index = 0; index <= 8; index++) {
        let tiername = TIER_ID_MAPPING[index].toLowerCase();
        let solarFluxPanel;
        if (index <= 4) {
            solarFluxPanel = `solarflux:sp_${index + 4}`;
        } else {
            switch (index) {
            case 5:
                solarFluxPanel = "solarflux:sp_custom_bathyal"
                break;
            case 6:
                solarFluxPanel = "solarflux:sp_custom_abyssal"
                break;
            case 7:
                solarFluxPanel = "solarflux:sp_custom_hadal"
                break;
            case 8:
                solarFluxPanel = "solarflux:sp_custom_neutronium"
                break;
            default:
                break;
            }
        }
        event.recipes.gtceu.atomic_reconstruction(`gtceu:solar_panel_${tiername}_conversion`)
            .itemInputs(solarFluxPanel)
            .itemOutputs(`gtceu:${tiername}_solar_panel`)
            .duration(5)
            .EUt(32)
        event.recipes.gtceu.atomic_reconstruction(`gtceu:solar_panel_${tiername}_reversion`)
            .itemInputs(`gtceu:${tiername}_solar_panel`)
            .itemOutputs(solarFluxPanel)
            .duration(5)
            .EUt(32)
    }
})
