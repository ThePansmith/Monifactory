/**
 * Custom recipes for the Thermal Series
 */
ServerEvents.recipes(event => {
    event.remove({ output: ["systeams:steam_dynamo", "steamdynamo:steam_dynamo", "systeams:boiler_pipe", "thermal:rf_coil"] })
    event.remove({ output: ["thermal:dynamo_throttle_augment", "thermal:upgrade_augment_1", "thermal:upgrade_augment_2", "thermal:upgrade_augment_3"] })
    event.remove({ output: ["thermal:machine_frame", "thermal:energy_cell_frame"] })
    event.remove({ output: ["thermal:machine_furnace", "thermal:machine_sawmill", "thermal:machine_pulverizer", "thermal:machine_smelter", "thermal:machine_centrifuge", "thermal:machine_crucible", "thermal:machine_chiller", "thermal:machine_refinery", "thermal:machine_pyrolyzer", "thermal:machine_bottler", "thermal:machine_brewer", "thermal:machine_crystallizer"] })

    event.remove({ id: /thermal:[A-Za-z]+_dust_/ }) // I don't even know what recipes this line of code is supposed to target
    event.remove({ id: /thermal:.*_cast/ })
    event.remove({ id: /^thermal:dynamo_/}) // Remove non-downgrade recipes for Thermal dynamos
    event.remove({ id: "thermal:fire_charge/obsidian_glass_2" })
    event.remove({ id: "thermal:fire_charge/signalum_glass_2" })
    event.remove({ id: "thermal:fire_charge/lumium_glass_2" })
    event.remove({ id: "thermal:fire_charge/enderium_glass_2" })

    // Unify Thermal with GT rubber
    event.smelting("gtceu:sticky_resin", "thermal:tar")
    event.replaceInput({ id: /thermal:*/ }, ["thermal:cured_rubber"], ["#forge:rubber_plates"])
    // Unify Thermal dies

    event.shaped("thermal:press_packing_2x2_die", [
        " A ",
        "BCB",
        " A "
    ], {
        A: "gtceu:invar_plate",
        B: "gtceu:cupronickel_plate",
        C: "#minecraft:planks"
    }).id("thermal:press_packing_2x2_die")

    event.shaped("thermal:press_packing_3x3_die", [
        " B ",
        "ACA",
        " B "
    ], {
        A: "gtceu:invar_plate",
        B: "gtceu:cupronickel_plate",
        C: "#minecraft:planks"
    }).id("thermal:press_packing_3x3_die")

    event.shaped("thermal:press_unpacking_die", [
        "B A",
        " C ",
        "A B"
    ], {
        A: "gtceu:invar_plate",
        B: "gtceu:cupronickel_plate",
        C: "#minecraft:planks"
    }).id("thermal:press_unpacking_die")


    // Hardened Glass recipes
    event.recipes.gtceu.alloy_smelter("kubejs:hardened_glass")
        .itemInputs("1x #forge:dusts/lead", "4x #forge:dusts/obsidian")
        .itemOutputs("2x thermal:obsidian_glass")
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.alloy_smelter("kubejs:signalum_glass")
        .itemInputs("1x #forge:dusts/signalum", "2x thermal:obsidian_glass")
        .itemOutputs("2x thermal:signalum_glass")
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.alloy_smelter("kubejs:lumium_glass")
        .itemInputs("1x #forge:dusts/lumium", "2x thermal:obsidian_glass")
        .itemOutputs("2x thermal:lumium_glass")
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV])
    event.recipes.gtceu.alloy_smelter("kubejs:enderium_glass")
        .itemInputs("1x #forge:dusts/enderium", "2x thermal:obsidian_glass")
        .itemOutputs("2x thermal:enderium_glass")
        .duration(40)
        .EUt(GTValues.VA[GTValues.HV])


    // Centrifuging Recipes for Arboreal Extractor products
    event.recipes.gtceu.centrifuge("kubejs:latex_centrifuging")
        .inputFluids(Fluid.of("thermal:latex", 500))
        .itemOutputs("2x gtceu:raw_rubber_dust")
        .outputFluids(Fluid.of("minecraft:water", 400))
        .duration(60).EUt(6)

    event.recipes.gtceu.centrifuge("kubejs:resin_centrifuging")
        .inputFluids(Fluid.of("thermal:resin", 400))
        .itemOutputs("gtceu:sticky_resin")
        .chancedOutput("thermal:rosin", 6000, 0)
        .outputFluids(Fluid.of("minecraft:water", 150), Fluid.of("thermal:tree_oil", 100))
        .duration(200).EUt(20)

    event.recipes.gtceu.centrifuge("kubejs:sap_centrifuging")
        .inputFluids(Fluid.of("thermal:sap", 200))
        .chancedOutput("minecraft:sugar", 300, 0)
        .outputFluids(Fluid.of("minecraft:water", 190), Fluid.of("thermal:syrup", 10))
        .duration(2000).EUt(2)

    event.remove({ id: "thermal:redstone_servo" });
    event.shaped("thermal:redstone_servo", [
        "ABA",
        " B ",
        "ABA"
    ], {
        A: "kubejs:resonating_crystal",
        B: "#forge:plates/electrical_steel"
    }).id("kubejs:redstone_servo");

    // Coil Ingredients
    event.shaped("thermal:rf_coil", [
        " BA",
        "BAB",
        "AB "
    ], {
        A: "gtceu:gold_rod",
        B: "minecraft:redstone"
    })
    event.recipes.gtceu.assembler("thermal:rf_coil_assembly")
        .itemInputs("#forge:rods/gold", "2x #forge:rings/gold", "3x #forge:dusts/redstone")
        .itemOutputs("thermal:rf_coil")
        .duration(200)
        .EUt(30)

    event.shaped("kubejs:redstone_transmission_coil", [
        " BA",
        "BAB",
        "AB "
    ], {
        A: "gtceu:silver_rod",
        B: "minecraft:redstone"
    })
    event.recipes.gtceu.assembler("kubejs:rf_transmission_coil_assembly")
        .itemInputs("#forge:rods/silver", "2x #forge:rings/silver", "3x #forge:dusts/redstone")
        .itemOutputs("kubejs:redstone_transmission_coil")
        .duration(200)
        .EUt(30)

    /* === AUGMENTS/UPGRADES ===*/
    event.shaped(Item.of("thermal:upgrade_augment_1", '{AugmentData:{BaseMod:1.5f,Type:"Upgrade"}}'), [
        "ABA",
        "RGR",
        "ABA"
    ], {
        A: "gtceu:invar_screw",
        B: "gtceu:double_invar_plate",
        G: "gtceu:electrical_steel_gear",
        R: "gtceu:fine_red_alloy_wire"
    })

    event.shaped(Item.of("thermal:upgrade_augment_2", '{AugmentData:{BaseMod:2.5f,Type:"Upgrade"}}'), [
        "PGP",
        "BCB",
        "PGP"
    ], {
        B: "gtceu:cobalt_brass_gear",
        P: "gtceu:double_electrum_plate",
        G: "thermal:obsidian_glass",
        C: "thermal:upgrade_augment_1"
    })

    event.shaped(Item.of("thermal:upgrade_augment_4", '{AugmentData:{BaseMod:5.0f,Type:"Upgrade"}}'), [
        "RSR",
        "SCS",
        "RSR"
    ], {
        R: "gtceu:restonia_gem",
        S: "gtceu:signalum_plate",
        C: "thermal:upgrade_augment_2"
    })

    event.shaped(Item.of("thermal:upgrade_augment_3", '{AugmentData:{BaseMod:10.0f,Type:"Upgrade"}}'), [
        "ABG",
        "BCB",
        "GBA"
    ], {
        A: "gtceu:double_cryolobus_plate",
        B: "gtceu:enderium_plate",
        C: "thermal:upgrade_augment_4",
        G: "gtceu:small_tungsten_carbide_gear"
    })

    // Advanced Thermal Storage augments
    event.shaped(Item.of("thermal:rf_coil_augment_advanced", '{AugmentData:{RFMax:8.0f,RFXfer:8.0f,Type:"RF"}}'), [
        " G ",
        "SCS",
        " G "
    ], {
        S: "gtceu:sterling_silver_plate",
        C: "thermal:rf_coil",
        G: "gtceu:rose_gold_plate"
    })

    event.shaped(Item.of("thermal:rf_coil_storage_augment_advanced", '{AugmentData:{RFMax:10.0f,RFXfer:4.0f,Type:"RF"}}'), [
        " S ",
        "GCG",
        " G "
    ], {
        S: "gtceu:sterling_silver_plate",
        C: "thermal:rf_coil",
        G: "gtceu:rose_gold_plate"
    })

    event.shaped(Item.of("thermal:rf_coil_xfer_augment_advanced", '{AugmentData:{RFMax:4.0f,RFXfer:10.0f,Type:"RF"}}'), [
        " S ",
        "SCS",
        " G "
    ], {
        S: "gtceu:sterling_silver_plate",
        C: "thermal:rf_coil",
        G: "gtceu:rose_gold_plate"
    })

    event.shaped(Item.of("thermal:fluid_tank_augment_advanced", '{AugmentData:{FluidMax:10.0f,Type:"Fluid"}}'), [
        " P ",
        "RSR",
        " G "
    ], {
        P: "#forge:plastic_plates",
        R: "gtceu:silicone_rubber_ring",
        G: "#thermal:glass/hardened",
        S: "gtceu:stainless_steel_normal_fluid_pipe"
    })

    // Machine and Dynamo augments
    event.shaped("thermal:dynamo_fuel_augment", [
        "PIP",
        "GCG",
        "PIP"
    ], {
        I: "#forge:ingots/wrought_iron",
        P: "gtceu:wrought_iron_plate",
        C: "thermal:rf_coil",
        G: "gtceu:small_copper_gear"
    }).id("thermal:augments/dynamo_fuel_augment")

    event.shaped("thermal:dynamo_output_augment", [
        "SEI",
        "ECE",
        "IES"
    ], {
        S: "#forge:ingots/sterling_silver",
        E: "#forge:ingots/energetic_alloy",
        I: "#forge:storage_blocks/conductive_alloy",
        C: "kubejs:redstone_transmission_coil"
    }).id("thermal:augments/dynamo_output_augment");

    event.shaped("thermal:machine_speed_augment", [
        "NGN",
        "PCP",
        "NGN"
    ], {
        N: "#forge:nuggets/mythril",
        G: "#forge:gears/black_steel",
        P: "#forge:plates/electrum",
        C: "thermal:rf_coil"
    }).id("thermal:augments/machine_speed_augment");

    event.shaped("thermal:machine_efficiency_augment", [
        "NGN",
        "PCP",
        "NGN"
    ], {
        N: "#forge:nuggets/mythril",
        G: "#forge:gears/nickel",
        P: "#forge:plates/lumium",
        C: "thermal:rf_coil"
    }).id("thermal:augments/machine_efficiency_augment");

    event.shaped("thermal:machine_output_augment", [
        "MGM",
        "PCP",
        "MGM"
    ], {
        M: "#forge:ingots/mythril",
        G: "#forge:gears/bronze",
        P: "#forge:plates/invar",
        C: "thermal:redstone_servo"
    }).id("thermal:augments/machine_output_augment");

    event.shaped("thermal:machine_null_augment", [
        "ONO",
        "NCN",
        "ONO"
    ], {
        O: "#forge:plates/obsidian",
        N: "#forge:nuggets/mythril",
        C: "minecraft:cactus" // since we use cactus to delete items now
    }).id("thermal:augments/machine_null_augment");

    event.shaped("thermal:dynamo_throttle_augment", [
        "SES",
        "NCN",
        "SES"
    ], {
        S: "#forge:plates/stainless_steel",
        E: "#forge:ingots/electrum",
        N: "#forge:springs/lead",
        C: "kubejs:excitationcoil"
    }).id("thermal:augments/dynamo_throttle_augment");

    event.shaped("thermal:machine_catalyst_augment", [
        " A ",
        "BCB",
        " A "
    ], {
        A: "gtceu:cupronickel_spring",
        B: "gtceu:lead_plate",
        C: "thermal:redstone_servo"
    }).id("thermal:augments/machine_catalyst_augment")

    event.shaped("thermal:machine_cycle_augment", [
        "DAD",
        "BCB",
        "DAD"
    ], {
        A: "gtceu:signalum_gear",
        B: "gtceu:bronze_plate",
        C: "thermal:redstone_servo",
        D: "gtceu:silver_plate"
    }).id("thermal:augments/machine_cycle_augment")

    event.replaceInput({ id: "thermal:augments/item_filter_augment" }, "#forge:ingots/signalum", "gtceu:item_filter")
    event.replaceInput({ id: "thermal:augments/fluid_filter_augment" }, "#forge:ingots/signalum", "gtceu:fluid_filter")

    // Dynamos
    event.shaped("kubejs:excitationcoil", [
        " B ",
        "BAB",
        "BAB"
    ], {
        A: "thermal:rf_coil",
        B: "gtceu:red_alloy_plate"
    })
    event.recipes.gtceu.assembler("kubejs:excitationcoil_assembly")
        .itemInputs("thermal:rf_coil", "2x gtceu:red_alloy_plate")
        .itemOutputs("kubejs:excitationcoil")
        .duration(180)
        .EUt(30)

    event.shaped("steamdynamo:steam_dynamo", [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "kubejs:excitationcoil",
        B: "gtceu:copper_plate",
        C: "ironfurnaces:iron_furnace",
        D: "gtceu:wrought_iron_gear",
        E: "kubejs:redstone_transmission_coil"
    })

    if (doBoilers) {
        event.shaped("systeams:steam_dynamo", [
            " A ",
            "BCB",
            "DED"
        ], {
            A: "kubejs:excitationcoil",
            B: "gtceu:copper_plate",
            C: "ironfurnaces:iron_furnace",
            D: "gtceu:wrought_iron_gear",
            E: "systeams:boiler_pipe"
        })

        event.shaped("systeams:boiler_pipe", [
            " C ",
            "ABA",
            " D "
        ], {
            A: "gtceu:copper_plate",
            B: "minecraft:bucket",
            C: "gtceu:iron_gear",
            D: "#enderio:fused_quartz"
        })

        // Steam Dynamo upgrade (Does not work with the systeams:upgrade_shapeless recipe type sadly,
        // so we recreate the special recipe stuff using KJS here)
        event.shapeless("systeams:stirling_boiler", ["steamdynamo:steam_dynamo", "systeams:boiler_pipe"])
            .modifyResult((grid, result) => {
                let input = grid.find("steamdynamo:steam_dynamo")
                return result.withNBT(input.nbt)
            })
            .replaceIngredient("steamdynamo:steam_dynamo", "thermal:rf_coil")
            .id("systeams:boiler/upgrades/stirling_upgrade")


        // Steam Dynamo downgrade
        event.custom(
            {
                "type": "systeams:upgrade_shapeless",
                "ingredients": [
                    {"item":"systeams:stirling_boiler"},
                    {"item":"thermal:rf_coil"}
                ],
                "result": {
                    "item": "steamdynamo:steam_dynamo"
                },
                "replacement": "systeams:boiler_pipe"
            }
        )

        // Remove recipes for boilers that aren't the upgrade from dynamo recipe
        event.remove({ id: /^systeams:boilers\/(?!upgrade)/ })
    }

    event.shaped("thermal:dynamo_magmatic", [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "kubejs:excitationcoil",
        B: "gtceu:dark_steel_plate",
        C: "ironfurnaces:copper_furnace",
        D: "enderio:dark_bimetal_gear",
        E: "kubejs:redstone_transmission_coil"
    })

    event.shaped("thermal:dynamo_compression", [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "kubejs:excitationcoil",
        B: "gtceu:energetic_alloy_plate",
        C: "ironfurnaces:gold_furnace",
        D: "enderio:energized_gear",
        E: "kubejs:redstone_transmission_coil"
    })

    event.shaped("thermal:dynamo_gourmand", [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "kubejs:excitationcoil",
        B: "gtceu:blue_alloy_plate",
        C: "ironfurnaces:silver_furnace",
        D: "enderio:iron_gear",
        E: "kubejs:redstone_transmission_coil"
    })

    // Machines
    event.shaped("thermal:machine_frame", [
        "SSS",
        "SMS",
        "III"
    ], {
        M: "#forge:gears/mythril",
        S: "#forge:plates/stainless_steel",
        I: "#forge:ingots/invar"
    })

    event.remove({ id: "thermal:machine_press" })
    event.shaped("thermal:machine_press", [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "minecraft:piston",
        B: "#forge:ingots/bronze",
        C: "thermal:machine_frame",
        D: "#forge:gears/copper",
        E: "thermal:rf_coil"
    }).id("kubejs:machine_press");

    // energetic infuser
    event.remove({ id: "thermal:charge_bench" });
    event.shaped("thermal:charge_bench", [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "#forge:gears/lead",
        B: "kubejs:redstone_transmission_coil",
        C: "thermal:machine_frame",
        D: "#forge:gears/copper",
        E: "thermal:rf_coil"
    }).id("kubejs:charge_bench")

    // Phytogenic Insolator
    event.remove({ id: "thermal:machine_insolator" })
    event.shaped("thermal:machine_insolator", [
        " A ",
        "SBS",
        "CRC"
    ], {
        A: "gtceu:double_steel_plate",
        B: "minecraft:bucket",
        S: "#minecraft:saplings",
        R: "thermal:rf_coil",
        C: "#forge:gears/copper"
    }).id("thermal:machine_insolator")

    event.shaped("thermal:device_potion_diffuser", [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "enderio:fused_quartz",
        B: "gtceu:silver_ingot",
        C: "thermal:machine_frame",
        D: "gtceu:iron_gear",
        E: "thermal:redstone_servo"
    }).id("thermal:device_potion_diffuser")

    // energy cell
    event.shaped("thermal:energy_cell_frame", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "#forge:plates/lead",
        B: "#forge:rods/electrum",
        C: "enderio:vibrant_crystal"
    }).id("kubejs:energy_cell_frame")

    event.remove("thermal:energy_cell");
    event.recipes.gtceu.canner("kubejs:energy_cell")
        .itemInputs("thermal:energy_cell_frame", "#forge:storage_blocks/redstone")
        .itemOutputs("thermal:energy_cell")
        .duration(500)
        .EUt(30);

    // Diamond as Fuel
    event.recipes.thermal.numismatic_fuel("minecraft:diamond").energy(1200000)
    event.recipes.thermal.numismatic_fuel("gtceu:topaz_gem").energy(200000)
    event.recipes.thermal.numismatic_fuel("gtceu:malachite_gem").energy(200000)
    event.recipes.thermal.numismatic_fuel("minecraft:emerald").energy(200000)
    event.recipes.thermal.numismatic_fuel("minecraft:prismarine_shard").energy(150000)
    event.recipes.thermal.numismatic_fuel("minecraft:quartz").energy(40000)
    event.recipes.thermal.numismatic_fuel("gtceu:sapphire_gem").energy(200000)
    event.recipes.thermal.numismatic_fuel("gtceu:ruby_gem").energy(200000)
    event.recipes.thermal.numismatic_fuel("gtceu:apatite_gem").energy(40000)
    event.recipes.thermal.numismatic_fuel("redstone_arsenal:flux_gem").energy(1500000)
    event.recipes.thermal.numismatic_fuel("minecraft:lapis_lazuli").energy(80000)

    // Thermal Essences
    event.recipes.gtceu.chemical_reactor("elemental_reduction_fluid")
        .itemInputs("kubejs:pulsating_dust")
        .inputFluids(Fluid.of("gtceu:hydrofluoric_acid", 1000))
        .outputFluids("gtceu:elemental_reduction_fluid 1000")
        .duration(80)
        .EUt(90)

    // transformation
    event.recipes.gtceu.chemical_reactor("elemental_reduction_bazalz")
        .itemInputs("gtceu:coal_dust")
        .inputFluids(Fluid.of("gtceu:elemental_reduction_fluid", 100))
        .itemOutputs("thermal:basalz_powder")
        .duration(80)
        .EUt(90)

    event.recipes.gtceu.chemical_reactor("elemental_reduction_blaze")
        .itemInputs("gtceu:netherrack_dust")
        .inputFluids(Fluid.of("gtceu:elemental_reduction_fluid", 100))
        .itemOutputs("minecraft:blaze_powder")
        .duration(80)
        .EUt(90)

    event.recipes.gtceu.chemical_reactor("elemental_reduction_blitz")
        .itemInputs("gtceu:endstone_dust")
        .inputFluids(Fluid.of("gtceu:elemental_reduction_fluid", 100))
        .itemOutputs("thermal:blitz_powder")
        .duration(80)
        .EUt(90)

    event.recipes.gtceu.chemical_reactor("elemental_reduction_blizz")
        .itemInputs("gtceu:ice_dust")
        .inputFluids(Fluid.of("gtceu:elemental_reduction_fluid", 100))
        .itemOutputs("thermal:blizz_powder")
        .duration(80)
        .EUt(90)

    event.shaped("4x kubejs:primal_mana", [
        "AAB",
        "DEB",
        "DCC"
    ], {
        A: "kubejs:aerotheum_dust",
        B: "kubejs:pyrotheum_dust",
        C: "kubejs:petrotheum_dust",
        D: "kubejs:cryotheum_dust",
        E: "gtceu:diamond_dust"
    })

    event.recipes.gtceu.mixer("mixer_primal_mana")
        .itemInputs("2x kubejs:petrotheum_dust", "2x kubejs:pyrotheum_dust", "2x kubejs:aerotheum_dust", "2x kubejs:cryotheum_dust", "1x gtceu:diamond_dust")
        .itemOutputs("4x kubejs:primal_mana")
        .duration(100)
        .EUt(100)

    event.shaped("2x kubejs:petrotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "thermal:basalz_powder",
        B: "minecraft:redstone",
        C: "gtceu:obsidian_dust"
    }).noMirror().noShrink()

    event.recipes.gtceu.mixer("mixer_petrotheum")
        .itemInputs("2x thermal:basalz_powder", "minecraft:redstone", "gtceu:obsidian_dust")
        .itemOutputs("2x kubejs:petrotheum_dust")
        .duration(40)
        .EUt(20)

    event.shaped("2x kubejs:pyrotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "minecraft:blaze_powder",
        B: "minecraft:redstone",
        C: "gtceu:sulfur_dust"
    }).noMirror().noShrink()

    event.recipes.gtceu.mixer("mixer_pyrotheum")
        .itemInputs("2x minecraft:blaze_powder", "minecraft:redstone", "gtceu:sulfur_dust")
        .itemOutputs("2x kubejs:pyrotheum_dust")
        .duration(40)
        .EUt(20)

    event.shaped("2x kubejs:aerotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "thermal:blitz_powder",
        B: "minecraft:redstone",
        C: "gtceu:saltpeter_dust"
    }).noMirror().noShrink()

    event.recipes.gtceu.mixer("mixer_aerotheum")
        .itemInputs("2x thermal:blitz_powder", "minecraft:redstone", "gtceu:saltpeter_dust")
        .itemOutputs("2x kubejs:aerotheum_dust")
        .duration(40)
        .EUt(20)

    event.shaped("2x kubejs:cryotheum_dust", [
        "AA ",
        "BC ",
        "   "
    ], {
        A: "thermal:blizz_powder",
        B: "minecraft:redstone",
        C: "minecraft:snowball"
    }).noMirror().noShrink()

    event.recipes.gtceu.mixer("mixer_cryotheum")
        .itemInputs("2x thermal:blizz_powder", "minecraft:redstone", "minecraft:snowball")
        .itemOutputs("2x kubejs:cryotheum_dust")
        .duration(40)
        .EUt(20)

    // Clathrates
    event.recipes.gtceu.chemical_reactor("resonant_clathrate")
        .itemInputs("minecraft:quartz")
        .inputFluids(Fluid.of("thermal:ender", 250))
        .itemOutputs("kubejs:resonant_clathrate")
        .duration(120)
        .EUt(75)

    event.recipes.gtceu.chemical_reactor("energized_clathrate")
        .itemInputs("minecraft:quartz")
        .inputFluids(Fluid.of("gtceu:glowstone", 288))
        .itemOutputs("kubejs:energized_clathrate")
        .duration(120)
        .EUt(75)

    event.recipes.gtceu.chemical_reactor("destabilized_clathrate")
        .itemInputs("minecraft:quartz")
        .inputFluids(Fluid.of("gtceu:redstone", 288))
        .itemOutputs("kubejs:destabilized_clathrate")
        .duration(120)
        .EUt(75)

    // Thermal Dusts
    event.recipes.gtceu.macerator("dust_blitz")
        .itemInputs("thermal:blitz_rod")
        .itemOutputs("4x thermal:blitz_powder")
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.macerator("dust_blizz")
        .itemInputs("thermal:blizz_rod")
        .itemOutputs("4x thermal:blizz_powder")
        .duration(200)
        .EUt(16)

    event.recipes.gtceu.macerator("dust_bazalz")
        .itemInputs("thermal:basalz_rod")
        .itemOutputs("4x thermal:basalz_powder")
        .duration(200)
        .EUt(16);

    // Thermal Mobdrops (for HM nether star recipe mostly)
    event.recipes.gtceu.compressor("blitz_rod")
        .itemInputs("4x thermal:blitz_powder")
        .itemOutputs("thermal:blitz_rod")
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.compressor("blizz_rod")
        .itemInputs("4x thermal:blizz_powder")
        .itemOutputs("thermal:blizz_rod")
        .duration(200)
        .EUt(2)

    event.recipes.gtceu.compressor("basalz_rod")
        .itemInputs("4x thermal:basalz_powder")
        .itemOutputs("thermal:basalz_rod")
        .duration(200)
        .EUt(2)

    // Devices
    event.remove({ type: "thermal:rock_gen", not: { output: "minecraft:cobblestone" } })

    event.remove({ id: "thermal:device_nullifier" });
    event.shaped("thermal:device_nullifier", [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "minecraft:lava_bucket",
        B: "#chipped:bricks",
        C: "thermal:machine_frame", // casing
        D: "gtceu:iron_gear",
        E: "thermal:redstone_servo"
    }).id("kubejs:device_nullifier");

    event.remove({ id: "thermal:device_collector" });
    event.shaped("thermal:device_collector", [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "minecraft:hopper",
        B: "#forge:ingots/tin",
        C: "enderio:vacuum_chest", // casing
        D: "gtceu:iron_gear",
        E: "thermal:redstone_servo"
    }).id("kubejs:device_collector");

    event.remove({ id: "thermal:device_fisher" });
    event.shaped("thermal:device_fisher", [
        "DAD",
        "BCB",
        "DED"
    ], {
        A: "minecraft:fishing_rod",
        B: "#forge:glass",
        C: "thermal:machine_frame", // casing
        D: "#minecraft:planks",
        E: "thermal:redstone_servo"
    }).id("thermal:device_fisher");

    event.remove({ output: ["thermal:item_filter_augment"] })
    event.shaped("thermal:item_filter_augment", [
        " I ",
        "IVI",
        " I "
    ], {
        I: "gtceu:invar_nugget",
        V: "gtceu:item_filter",
    })

    /* === THERMAL TOOLS ===*/
    event.remove({ id: "thermal:tools/wrench" })
    event.shaped("thermal:wrench", [
        "A A",
        " B ",
        " A "
    ], {
        A: "#forge:ingots/iron",
        B: "#forge:ingots/tin"
    }).id("kubejs:tools/wrench");

    // detonator, locked to mv
    event.replaceInput({ id: "thermal:tools/detonator" }, ["#forge:gears/signalum"], ["#gtceu:circuits/mv"])

    // Fluxbore
    event.remove([{ id: "thermal:drill_head" }, { id: "thermal:flux_drill" }])
    if (doFluxbore) {
        if (doHarderFluxBore) {
            event.shaped("thermal:flux_drill", [
                " A ",
                "BCB",
                "DED"
            ], {
                A: "gtceu:stainless_steel_drill_head",
                B: "#forge:ingots/silver",
                C: "gtceu:mv_power_unit",
                D: "#forge:ingots/tin",
                E: "gtceu:iron_gear"
            }).id("kubejs:flux_drill");
        } else {
            event.shaped("thermal:flux_drill", [
                " A ",
                "BCB",
                "DED"
            ], {
                A: "gtceu:vanadium_steel_drill_head",
                B: "#forge:ingots/silver",
                C: "gtceu:lv_power_unit",
                D: "#forge:ingots/tin",
                E: "gtceu:iron_gear"
            }).id("kubejs:flux_drill");
        }
    }

    event.remove([{ id: "thermal:saw_blade" }, { id: "thermal:flux_saw" }])
    event.shaped("thermal:flux_saw", [
        " A ",
        "BCB",
        "DED"
    ], {
        A: "gtceu:vanadium_steel_buzz_saw_blade",
        B: "#forge:ingots/silver",
        C: "gtceu:lv_power_unit",
        D: "#forge:ingots/tin",
        E: "gtceu:iron_gear"
    }).id("kubejs:flux_saw");

    event.remove({ id: "thermal:flux_capacitor" });
    event.shaped("thermal:flux_capacitor", [
        " A ",
        "BCB",
        "ADA"
    ], {
        A: "#forge:dusts/redstone",
        B: "#forge:ingots/lead",
        C: "#forge:ingots/copper",
        D: "#forge:dusts/sulfur"
    }).id("kubejs:flux_capacitor");

    // revert this change so it only requires redstone
    event.replaceInput({ id: "thermal:flux_magnet" }, ["thermal:rf_coil"], ["#forge:dusts/redstone"]);

    // lock
    event.remove({ id: "thermal:tools/lock" });
    event.shaped("thermal:lock", [
        " A ",
        "ABA",
        "AAA"
    ], {
        A: "#forge:nuggets/signalum",
        B: "#forge:ingots/signalum"
    }).id("kubejs:lock");

    // Workbench
    event.replaceInput({ id: "thermal:tinker_bench" }, "minecraft:crafting_table", "gtceu:lv_machine_hull")

    /* === misc thermals ===*/
    event.remove({ output: "thermal:phytogro" });
    event.shapeless("16x thermal:phytogro", [
        "2x #forge:dusts/wood",
        "#forge:dusts/charcoal",
        "#forge:dusts/saltpeter",
        "2x #forge:gems/apatite" // ok idk HOW thermal manages to make tag recipe requirement AND regular item
    ]).id("kubejs:phytogro_charcoal_gems_apatite");
    event.shapeless("16x thermal:phytogro", [
        "2x #forge:dusts/wood",
        "#forge:dusts/charcoal",
        "#forge:dusts/saltpeter",
        "2x #forge:dusts/apatite"
    ]).id("kubejs:phytogro_charcoal_dusts_apatite");
    event.shapeless("16x thermal:phytogro", [
        "2x #forge:dusts/wood",
        "#forge:dusts/coal",
        "#forge:dusts/saltpeter",
        "2x #forge:gems/apatite"
    ]).id("kubejs:phytogro_coal_gems_apatite");
    event.shapeless("16x thermal:phytogro", [
        "2x #forge:dusts/wood",
        "#forge:dusts/coal",
        "#forge:dusts/saltpeter",
        "2x #forge:dusts/apatite"
    ]).id("kubejs:phytogro_coal_dusts_apatite");
});
