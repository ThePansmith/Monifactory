// THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE

ServerEvents.recipes(event => {
    const carbonSources = ["gtceu:coal_dust", "gtceu:charcoal_dust", "gtceu:carbon_dust"]
    const gtMachines = ['extractor', 'macerator', 'compressor', 'forge_hammer', 'furnace', 'alloy_smelter']
    if (isNormalMode) {
        // Moni Steel
        event.remove({ type: "gtceu:electric_blast_furnace", output: "gtceu:steel_ingot" })
        event.smelting("gtceu:steel_ingot", "gtceu:steel_dust")

        carbonSources.forEach(carbonSource => {
            event.recipes.gtceu.alloy_smelter("steel_" + carbonSource.replace(/\W/g, '')) // The replace line removes non alphanumeric chars, regex is magic
                .itemInputs("#forge:ingots/iron", carbonSource)
                .itemOutputs("gtceu:steel_ingot")
                .duration(150)
                .EUt(16)

            event.recipes.gtceu.alloy_smelter("steel_wrought_" + carbonSource.replace(/\W/g, '')) // The replace line removes non alphanumeric chars, regex is magic
                .itemInputs("#forge:ingots/wrought_iron", carbonSource)
                .itemOutputs("gtceu:steel_ingot")
                .duration(100)
                .EUt(16)

            event.shapeless("gtceu:steel_dust", ["gtceu:wrought_iron_dust", carbonSource])
        })

        // Wrought iron per ingot
        event.remove({ type: "minecraft:smelting", output: "gtceu:wrought_iron_nugget" })
        event.smelting("gtceu:wrought_iron_ingot", "minecraft:iron_ingot")

        // Dust hydration
        event.shapeless("minecraft:clay", ["kubejs:dust", "minecraft:water_bucket"])

        // Make clay electrolysis an LV recipe
        event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_clay" })
        event.recipes.gtceu.electrolyzer("clay_electrolysis_lv")
            .itemInputs("13x gtceu:clay_dust")
            .itemOutputs("2x gtceu:sodium_dust", "2x gtceu:silicon_dust", "gtceu:lithium_dust", "2x gtceu:aluminium_dust")
            .outputFluids("minecraft:water 6000")
            .duration(364)
            .EUt(15)

        // Alternative LV piston recipe
        event.shaped(
            "gtceu:lv_electric_piston", [
            'PPP',
            'CRR',
            'CMG'
        ], {
            P: "gtceu:wrought_iron_plate",
            C: "gtceu:tin_single_cable",
            R: "gtceu:wrought_iron_rod",
            M: "gtceu:lv_electric_motor",
            G: "gtceu:wrought_iron_gear"
        }
        )

        // Steam multis
        event.shaped(
            "gtceu:steam_oven", [
            'BGB',
            'FCF',
            'BGB'
        ], {
            B: "gtceu:steam_machine_casing",
            G: "gtceu:invar_gear",
            F: "gtceu:bronze_firebox_casing",
            C: "ironfurnaces:copper_furnace"
        }
        )

        event.shaped(
            "gtceu:steam_grinder", [
            'BGB',
            'BDB',
            'BGB'
        ], {
            B: "gtceu:steam_machine_casing",
            G: "gtceu:potin_gear",
            D: "#forge:gems/diamond"
        }
        )

        event.shaped(
            "steamadditions:steam_foundry", [
            'BGB',
            'BDB',
            'BGB'
        ], {
            B: "gtceu:steam_machine_casing",
            G: "gtceu:bronze_gear",
            D: "gtceu:lv_alloy_smelter"
        }
        )

        // Handmade rubber - no match for the power of the factory
        event.shaped(
            "gtceu:rubber_plate", [
            ' H ',
            ' R ',
            ' R '
        ], {
            H: "#forge:tools/hammers",
            R: "gtceu:sticky_resin"
        }
        )

        // Compressor rubber - better, but not perfect - that's chemical reactor rubber
        event.recipes.gtceu.compressor("compressor_rubber_sheet")
            .itemInputs("gtceu:sticky_resin")
            .itemOutputs("gtceu:rubber_plate")
            .duration(20)
            .EUt(8)

        // Monify LV motors
        event.remove({ id: "gtceu:shaped/electric_motor_lv_steel" })
        event.remove({ id: "gtceu:shaped/electric_motor_lv_iron" })
        event.remove({ id: "gtceu:assembler/electric_motor_lv_steel" })
        event.remove({ id: "gtceu:assembler/electric_motor_lv_iron" })

        event.shaped(
            "gtceu:lv_electric_motor", [
            'CWR',
            'WMW',
            'RWC'
        ], {
            C: "gtceu:tin_single_cable",
            W: "gtceu:fine_copper_wire",
            R: "gtceu:iron_rod",
            M: "gtceu:magnetic_iron_rod"
        }
        )

        event.remove({ id: "watercollector:watercollector" })
        event.shaped(
            "watercollector:watercollector", [
            "AAA",
            "B B",
            "AAA"
        ], {
            A: "gtceu:wrought_iron_plate",
            B: "minecraft:water_bucket"
        }
        )
        event.recipes.gtceu.assembler("lv_motor")
            .itemInputs("2x gtceu:tin_single_cable", "2x gtceu:iron_rod", "gtceu:magnetic_iron_rod", "4x gtceu:fine_copper_wire")
            .itemOutputs("gtceu:lv_electric_motor")
            .duration(100)
            .EUt(30)

        // Glass tube
        event.shaped("gtceu:glass_tube", [
            '   ',
            'PPP',
            'PPP'
        ], {
            P: '#forge:glass_panes'
        }).id('nomi:glass_tube')

        //TODO: AE2 crystal growth accelerator goes here

        // Monified distill tower
        event.shaped(
            "gtceu:distillation_tower", [
            'LPL',
            'CHC',
            'LPL'
        ], {
            L: "gtceu:stainless_steel_large_fluid_pipe",
            P: "gtceu:hv_electric_pump",
            C: "#gtceu:circuits/hv",
            H: "gtceu:hv_machine_hull"
        }
        ).id('gtceu:shaped/distillation_tower')


        event.remove({ id: 'gtceu:assembler/cover_infinite_water' })
        event.recipes.gtceu.assembler("kubejs:infinite_water_cover")
            .itemInputs("2x gtceu:mv_electric_pump", "thermal:device_water_gen", "#gtceu:circuits/mv")
            .itemOutputs('gtceu:infinite_water_cover')
            .duration(100)
            .EUt(128)

        event.remove({ type: "minecraft:smelting", output: "gtceu:firebrick" })

        //GT Steam Age
        gtMachines.forEach(machine => {
            event.remove({ output: ['gtceu:lp_steam_' + machine, 'gtceu:hp_steam_' + machine] })
        })
    }

    event.shaped(
        'thermal:dynamo_numismatic', [
        ' A ',
        'BCB',
        'DED'
    ], {
        A: 'kubejs:excitationcoil',
        B: 'gtceu:vibrant_alloy_plate',
        C: 'ironfurnaces:diamond_furnace',
        D: 'enderio:vibrant_gear',
        E: 'kubejs:redstone_transmission_coil'
    }
    )

    event.remove({ id: "thermal:device_rock_gen" })
    event.shaped(
        "thermal:device_rock_gen", [
        'PPP',
        'B B',
        'PPP'
    ], {
        P: "gtceu:steel_plate",
        B: "minecraft:bucket"
    }
    )
})
