/** THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE */

ServerEvents.recipes(event => {

    // Snad
    if (doSnad) {
        if (doHarderRecipes) {
            event.shapeless("snad:snad", ["2x kubejs:double_compressed_sand", "enderio:pulsating_crystal"]).id("snad:snad")
            event.shapeless("snad:red_snad", ["2x kubejs:double_compressed_red_sand", "enderio:pulsating_crystal"]).id("snad:red_snad")
        } else {
            event.shapeless("snad:snad", ["2x kubejs:double_compressed_sand"]).id("snad:snad")
            event.shapeless("snad:red_snad", ["2x kubejs:double_compressed_red_sand"]).id("snad:red_snad")

            // If Snad is obtainable pre-autoclave, so must be the Vacuum Chest.
            event.replaceInput({ id: "enderio:vacuum_chest" }, "enderio:pulsating_crystal", "gtceu:tin_rotor")
        }
    } else {
        event.remove({ id: "snad:snad" })
        event.remove({ id: "snad:red_snad" })
    }


    // snaded sand snad
    compacting(event, "kubejs:compressed_sand", "minecraft:sand");
    compacting(event, "kubejs:double_compressed_sand", "kubejs:compressed_sand");

    // red snaded red sand red snad
    compacting(event, "kubejs:compressed_red_sand", "minecraft:red_sand");
    compacting(event, "kubejs:double_compressed_red_sand", "kubejs:compressed_red_sand");

    // Glider
    event.replaceInput({ id: "hangglider:glider_framework" }, "minecraft:iron_ingot", "gtceu:iron_rod")
    event.replaceInput({ id: "gtceu:shaped/basic_circuit_board" }, "gtceu:copper_single_wire", "gtceu:fine_copper_wire")

    // Void Air (normal air)
    event.recipes.gtceu.gas_collector("void_air")
        .dimension("javd:void")
        .outputFluids(Fluid.of("gtceu:air", 10000))
        .circuit(4)
        .EUt(16)
        .duration(200)

    // Lost Cities Air (normal air)
    event.recipes.gtceu.gas_collector("lc_air")
        .dimension("lostcities:lostcities")
        .outputFluids(Fluid.of("gtceu:air", 10000))
        .circuit(5)
        .EUt(16)
        .duration(200)

    // Netherrack
    event.recipes.gtceu.chemical_reactor("dust_to_netherrack")
        .itemInputs("kubejs:dust")
        .inputFluids(Fluid.of("minecraft:lava", 1000))
        .itemOutputs("minecraft:netherrack")
        .duration(20)
        .EUt(32)

    // Lava from Magma
    event.recipes.gtceu.chemical_reactor("lava_from_magma")
        .itemInputs("minecraft:magma_block")
        .outputFluids(Fluid.of("minecraft:lava", 1000))
        .EUt(32)
        .duration(120)

    // Slime ball from plant ball
    event.smelting("2x minecraft:slime_ball", "gtceu:plant_ball")

    // Infinity Dust Blocks
    compacting(event, "kubejs:infinity_dust_block", "enderio:grains_of_infinity");
    compacting(event, "kubejs:compressed_infinity_dust_block", "kubejs:infinity_dust_block");
    compacting(event, "kubejs:double_compressed_infinity_dust_block", "kubejs:compressed_infinity_dust_block");

    // Blazerod Shenanigans
    event.shapeless("minecraft:blaze_rod", "minecraft:brewing_stand")
    event.replaceInput({ input: "gtceu:wood_plate" }, "gtceu:wood_plate", "#minecraft:planks")

    // Sculk LCR recipes

    event.recipes.gtceu.large_chemical_reactor("sculk_catalyst")
        .notConsumable("minecraft:sculk_catalyst")
        .itemInputs("4x #forge:stone")
        .inputFluids("enderio:xp_juice 4000", "gtceu:plutonium 144")
        .itemOutputs("4x minecraft:sculk_catalyst")
        .duration(1000)
        .EUt(2000)

    event.recipes.gtceu.large_chemical_reactor("sculk_catalyst_boosted")
        .notConsumable("minecraft:sculk_catalyst")
        .itemInputs("16x #forge:stone")
        .inputFluids("enderio:xp_juice 4000", "gtceu:berkelium 144")
        .itemOutputs("16x minecraft:sculk_catalyst")
        .duration(1000)
        .EUt(2000)

    event.recipes.gtceu.large_chemical_reactor("sculk_vein")
        .chancedInput("minecraft:sculk_catalyst", 500, 0)
        .itemInputs("16x minecraft:vine")
        .inputFluids("enderio:xp_juice 2000")
        .itemOutputs("16x minecraft:sculk_vein")
        .duration(1000)
        .EUt(2000)

    event.recipes.gtceu.large_chemical_reactor("sculk_block")
        .chancedInput("minecraft:sculk_catalyst", 500, 0)
        .itemInputs("64x minecraft:moss_block")
        .inputFluids("enderio:xp_juice 2000")
        .itemOutputs("64x minecraft:sculk")
        .duration(1000)
        .EUt(2000)

    // Processing for Ender Spores
    if (!doHNN) {
        event.shapeless("kubejs:ender_spore", ["minecraft:chorus_flower", "minecraft:ender_pearl", "thermal:phytogro", "minecraft:experience_bottle"])
        event.smelting("minecraft:ender_pearl", "kubejs:ender_spore")

        event.custom({
            "type": "thermal:insolator",
            "ingredient": {
                "item": "kubejs:ender_spore"
            },
            "result": [
                {
                    "item": "kubejs:ender_spore",
                    "chance": 2.0
                }
            ],
            "energy_mod": 3.0
        })

        event.recipes.gtceu.greenhouse("kubejs:greenhouse_boosted_ender_spore")
            .circuit(2)
            .notConsumable("kubejs:ender_spore")
            .itemInputs("4x gtceu:fertilizer")
            .inputFluids(Fluid.of("minecraft:water"))
            .itemOutputs("8x kubejs:ender_spore")
            .duration(640)
            .EUt(120)
    }

    // Change recipes for LV and MV macerators
    event.shaped("gtceu:lv_macerator", [
        "PMB",
        "WWH",
        "CCW"
    ], {
        P: "gtceu:lv_electric_piston",
        M: "gtceu:lv_electric_motor",
        B: "gtceu:wrought_iron_buzz_saw_blade",
        W: "gtceu:tin_single_cable",
        H: "gtceu:lv_machine_hull",
        C: "#gtceu:circuits/lv"
    }).id("gtceu:shaped/lv_macerator")

    event.shaped("gtceu:mv_macerator", [
        "PMB",
        "WWH",
        "CCW"
    ], {
        P: "gtceu:mv_electric_piston",
        M: "gtceu:mv_electric_motor",
        B: "gtceu:steel_buzz_saw_blade",
        W: "gtceu:copper_single_cable",
        H: "gtceu:mv_machine_hull",
        C: "#gtceu:circuits/mv"
    }).id("gtceu:shaped/mv_macerator")

    // Change recipes for end game diodes to use complex smd diodes
    event.findRecipes({ id: /gtceu:shaped\/(uiv|max)_diode/ }).forEach(recipe => {
        recipe.replaceInput("gtceu:advanced_smd_diode", "kubejs:complex_smd_diode")
    })

    // Data Stuff
    event.recipes.gtceu.extractor("omnic_data")
        .itemInputs("kubejs:heart_of_a_universe")
        .itemOutputs("kubejs:omnic_data")
        .duration(1000)
        .EUt(180000)

    // Crystal Chip shit
    event.recipes.gtceu.autoclave("starter_enderium_chip")
        .itemInputs(["gtceu:exquisite_olivine_gem", "gtceu:exquisite_emerald_gem"])
        .inputFluids("gtceu:enderium 144")
        .chancedOutput("gtceu:raw_crystal_chip", 900, 1800)
        .duration(12000)
        .EUt(320)
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.autoclave("enderium_chip")
        .itemInputs("gtceu:raw_crystal_chip_parts")
        .inputFluids("gtceu:enderium 144")
        .chancedOutput("gtceu:raw_crystal_chip", 900, 250)
        .duration(12000)
        .EUt(320)
        .cleanroom(CleanroomType.CLEANROOM)

    // TODO: AE2 crystal growth accelerator goes here

    // Implement Cryolobus smelting
    event.remove({ id: "gtceu:electric_blast_furnace/blast_cryolobus" })
    event.remove({ id: "gtceu:electric_blast_furnace/blast_cryolobus_gas" })
    const cryolobusFuels = [
        [2000, 1800, "gtceu:cetane_boosted_diesel"],
        [2000, 1800, "gtceu:gasoline"],
        [500, 1200, "gtceu:high_octane_gasoline"],
        [400, 900, "gtceu:jean_gasoline"]
    ]

    for (const [mB, duration, id] of cryolobusFuels) {
        event.recipes.gtceu.electric_blast_furnace(`cryolobus_${id.replace(/\W/g, "")}`)
            .itemInputs("gtceu:cryolobus_dust")
            .inputFluids(`${id} ${mB}`)
            .itemOutputs("gtceu:hot_cryolobus_ingot")
            .duration(duration)
            .blastFurnaceTemp(6800)
            .EUt(30720)

        event.recipes.gtceu.electric_blast_furnace(`cryolobus_scale_${id.replace(/\W/g, "")}`)
            .itemInputs("4x kubejs:warden_horn")
            .inputFluids(`${id} ${mB * 4}`)
            .itemOutputs("2x gtceu:hot_cryolobus_ingot")
            .duration(duration * 2)
            .blastFurnaceTemp(6800)
            .EUt(30720)
    }

    // Cryolobus Vac Freezer recipe
    event.remove({ id: "gtceu:vacuum_freezer/cool_hot_cryolobus_ingot" })
    event.recipes.gtceu.vacuum_freezer("cryolobus_ingot_cooling")
        .itemInputs("gtceu:hot_cryolobus_ingot")
        .itemOutputs("gtceu:cryolobus_ingot")
        .inputFluids(Fluid.of("kubejs:molten_cryotheum", 250))
        .duration(600)
        .EUt(1920)

    // Alternative hv cutter
    event.shaped("gtceu:hv_cutter", [
        "WCG",
        "DHS",
        "CGM"
    ], {
        W: "gtceu:gold_single_cable",
        C: "#gtceu:circuits/hv",
        G: "gtceu:tempered_glass",
        D: "gtceu:hv_conveyor_module",
        H: "gtceu:hv_machine_hull",
        S: "gtceu:end_steel_gear", // TODO: FIX (likely requires registering end steel as a tool material, and idk how to do that)
        M: "gtceu:hv_electric_motor"
    })

    // Atmospheric Accumulator
    event.shaped("gtceu:atmospheric_accumulator", [
        "WRW",
        "THT",
        "COC"
    ], {
        W: "gtceu:tungsten_single_cable",
        C: "#gtceu:circuits/iv",
        T: "gtceu:tungsten_large_fluid_pipe",
        H: "gtceu:iv_gas_collector",
        R: "gtceu:tungsten_steel_rotor",
        O: "gtceu:iv_electric_pump"
    }).id("gtceu:shaped/atmospheric_accumulator")

    // Matter Alterator
    event.shaped("gtceu:matter_alterator", [
        "WEW",
        "THT",
        "PCV"
    ], {
        W: "gtceu:tungsten_single_cable",
        C: "#gtceu:circuits/iv",
        T: "gtceu:restonia_empowered_plate",
        H: "gtceu:iv_atomic_reconstructor",
        E: "gtceu:iv_emitter",
        P: "gtceu:iv_electric_piston",
        V: "gtceu:iv_conveyor_module"
    }).id("gtceu:shaped/matter_alterator")

    // Prevent cleanroom casings from being usable for free resources
    event.remove({ input: "gtceu:sterilizing_filter_casing" })
    event.recipes.gtceu.arc_furnace("sterile_filter_recycling")
        .itemInputs("gtceu:sterilizing_filter_casing")
        .inputFluids("gtceu:oxygen 1265")
        .itemOutputs("1x gtceu:iridium_ingot", "4x gtceu:tritanium_nugget", "6x gtceu:small_ash_dust")
        .duration(691)
        .EUt(30)

    event.recipes.gtceu.macerator("sterile_filter_crushing")
        .itemInputs("gtceu:sterilizing_filter_casing")
        .itemOutputs("3x gtceu:polybenzimidazole_dust", "gtceu:iridium_dust", "gtceu:small_tritanium_dust")
        .duration(696)
        .EUt(32)

    // Tantalum-catalysed ethanol->butadiene
    event.recipes.gtceu.large_chemical_reactor("ethanol_to_butadiene")
        .notConsumable("gtceu:tantalum_dust")
        .inputFluids("gtceu:ethanol 2000")
        .outputFluids("gtceu:butadiene 1000")
        .circuit(25)
        .duration(300)
        .EUt(7680)

    // Ass control casing
    event.shaped("4x gtceu:assembly_line_unit", [
        "CHC",
        "SFE",
        "CMC"
    ], {
        C: "#gtceu:circuits/luv",
        H: "gtceu:hpic_chip",
        S: "gtceu:iv_sensor",
        F: "gtceu:tungsten_steel_frame",
        E: "gtceu:iv_emitter",
        M: "gtceu:iv_electric_motor"
    }).id("gtceu:shaped/casing_assembly_line")

    // Netherstar Crafting
    event.shaped("kubejs:nether_star_south", [
        "ADA",
        "ADA",
        " A "
    ], {
        A: "minecraft:quartz",
        D: "kubejs:petrotheum_dust"
    })

    event.shaped("kubejs:nether_star_north", [
        " A ",
        "ADA",
        "ADA"
    ], {
        A: "minecraft:quartz",
        D: "kubejs:aerotheum_dust"
    })

    event.shaped("kubejs:nether_star_west", [
        " AA",
        "ADD",
        " AA"
    ], {
        A: "minecraft:quartz",
        D: "kubejs:cryotheum_dust"
    })

    event.shaped("kubejs:nether_star_east", [
        "AA ",
        "DDA",
        "AA "
    ], {
        A: "minecraft:quartz",
        D: "kubejs:pyrotheum_dust"
    })

    event.shaped("4x kubejs:nether_star_center", [
        "ABA",
        "CDE",
        "AFA"
    ], {
        A: "minecraft:quartz",
        B: "thermal:blitz_rod",
        C: "thermal:blizz_rod",
        D: "extendedcrafting:luminessence_block",
        E: "minecraft:blaze_rod",
        F: "thermal:basalz_rod"
    })

    event.shaped("minecraft:nether_star", [
        " A ",
        "DEB",
        " C "
    ], {
        A: "kubejs:nether_star_north",
        B: "kubejs:nether_star_east",
        C: "kubejs:nether_star_south",
        D: "kubejs:nether_star_west",
        E: "kubejs:nether_star_center"
    })

    // Obby grinding
    event.recipes.gtceu.macerator("obsidian_dust")
        .itemInputs("minecraft:obsidian")
        .itemOutputs("gtceu:obsidian_dust")
        .duration(40)
        .EUt(2)

    event.remove({ id: "gtceu:macerator/macerate_sandstone" });
    event.recipes.gtceu.macerator("saltpeter_dust")
        .itemInputs("4x #forge:sandstone")
        .itemOutputs("gtceu:saltpeter_dust")
        .duration(300)
        .EUt(30)

    // UHV+ Parallel Control Hatch
    event.shaped("gtceu:uhv_uhv_parallel_hatch", [
        "SCE",
        "CHC",
        "WCW"
    ], {
        H: "gtceu:uhv_machine_hull",
        S: "gtceu:uhv_sensor",
        C: "#gtceu:circuits/uev",
        E: "gtceu:uhv_emitter",
        W: "gtceu:activated_netherite_quadruple_wire"
    })

    event.shaped("gtceu:uev_uev_parallel_hatch", [
        "SCE",
        "CHC",
        "WCW"
    ], {
        H: "gtceu:uev_machine_hull",
        S: "gtceu:uev_sensor",
        C: "#gtceu:circuits/uiv",
        E: "gtceu:uev_emitter",
        W: "gtceu:necrosiderite_quadruple_wire"
    })

    //
    // Recycling below here
    //

    // RHF
    event.remove({ input: "gtceu:mega_blast_furnace" })
    event.recipes.gtceu.arc_furnace("rhf_recycling")
        .itemInputs("gtceu:mega_blast_furnace")
        .inputFluids("gtceu:oxygen 20786")
        .itemOutputs("20x gtceu:naquadah_alloy_ingot", "4x gtceu:invar_ingot", "2x gtceu:uranium_rhodium_dinaquadide_ingot", "gtceu:tin_ingot")
        .duration(20786)
        .EUt(30)

    event.recipes.gtceu.macerator("rhf_crushing")
        .itemInputs("gtceu:mega_blast_furnace")
        .itemOutputs("24x gtceu:stone_dust", "20x gtceu:naquadah_alloy_dust", "4x gtceu:invar_dust", "2x gtceu:rubber_dust")
        .duration(20786)
        .EUt(30)

    // BBC
    event.remove({ input: "gtceu:mega_vacuum_freezer" })
    event.recipes.gtceu.arc_furnace("bbc_recycling")
        .itemInputs("gtceu:mega_vacuum_freezer")
        .inputFluids("gtceu:oxygen 26976")
        .itemOutputs("18x gtceu:naquadah_alloy_ingot", "12x gtceu:stainless_steel_ingot", "12x gtceu:electrum_ingot", "gtceu:steel_block")
        .duration(26976)
        .EUt(30)

    event.recipes.gtceu.macerator("bbc_crushing")
        .itemInputs("gtceu:mega_vacuum_freezer")
        .itemOutputs("18x gtceu:naquadah_alloy_dust", "50x gtceu:small_rubber_dust", "49x gtceu:small_steel_dust", "12x gtceu:stainless_steel_dust")
        .duration(25408)
        .EUt(302)


    // Ender Chest and Tank (gives the full slot version)
    event.remove({ output: ["endertanks:ender_tank", "enderchests:ender_chest"] })

    // Chest
    event.shaped("enderchests:ender_chest", [
        "ABA",
        "DED",
        "AFA"
    ], {
        A: "minecraft:blaze_rod",
        B: "minecraft:white_wool",
        D: "minecraft:obsidian",
        E: "gtceu:steel_crate",
        F: "minecraft:ender_pearl"
    })

    // Tank
    event.shaped("endertanks:ender_tank", [
        "ABA",
        "DED",
        "AFA"
    ], {
        A: "minecraft:blaze_rod",
        B: "minecraft:white_wool",
        D: "minecraft:obsidian",
        E: "enderio:pressurized_fluid_tank",
        F: "gtceu:ender_pearl_block"
    })

    // Strings Recipe
    event.shaped("6x minecraft:string", [
        " A ",
        "ABA",
        " A "
    ], {
        A: "#minecraft:saplings",
        B: "#minecraft:swords"
    }).damageIngredient("#minecraft:swords")

    // Avaritia Replacement recipes
    compacting(event, "gtceu:neutronium_ingot", "gtceu:neutronium_nugget")

    // Dense Gasses conversion
    compacting(event, "kubejs:dense_hydrogen", "kubejs:solidified_hydrogen");
    compacting(event, "kubejs:ultra_dense_hydrogen", "kubejs:dense_hydrogen");

    compacting(event, "kubejs:dense_helium", "kubejs:solidified_helium");
    compacting(event, "kubejs:ultra_dense_helium", "kubejs:dense_helium");

    // Recipe from Radium salt to Radium and Rock Salt
    event.recipes.gtceu.electrolyzer("radium_salt_to_radium_and_salt")
        .itemInputs("kubejs:radium_salt")
        .itemOutputs("gtceu:rock_salt_dust")
        .outputFluids(Fluid.of("gtceu:radon", 1000))
        .duration(200)
        .EUt(2000)

    // Add the Fluid Tag Filter
    event.shaped(Item.of("gtceu:fluid_tag_filter", 1), [
        "ZZZ",
        "ZLZ",
        "ZZZ"
    ], {
        Z: "gtceu:zinc_foil",
        L: "gtceu:lead_plate"
    })
    // Making ABS take aluminium rather than osmium so it's obtainable in EV
    event.replaceInput({ id: "gtceu:shaped/blast_alloy_smelter" }, "gtceu:osmium_quadruple_wire", "gtceu:aluminium_single_cable")

    // Resonating Crystal recipes
    event.recipes.gtceu.alloy_smelter("kubejs:resonating_redstone")
        .itemInputs("minecraft:redstone_block", "kubejs:ender_shard")
        .itemOutputs("kubejs:resonating_crystal")
        .duration(180)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter("kubejs:resonating_restonia")
        .itemInputs("gtceu:restonia_gem", "kubejs:ender_shard")
        .itemOutputs("kubejs:resonating_crystal")
        .duration(180)
        .EUt(16)

    event.recipes.gtceu.autoclave("kubejs:resonating_pearl_autoclave")
        .itemInputs("minecraft:ender_pearl")
        .inputFluids("gtceu:redstone 1152")
        .itemOutputs("12x kubejs:resonating_crystal")
        .duration(900)
        .EUt(480)

    event.recipes.gtceu.autoclave("kubejs:resonating_pulsating_autoclave")
        .itemInputs("kubejs:pulsating_dust")
        .inputFluids("gtceu:redstone 1152")
        .itemOutputs("12x kubejs:resonating_crystal")
        .duration(900)
        .EUt(480)

    event.recipes.gtceu.autoclave("kubejs:resonating_ender_dust_autoclave")
        .itemInputs("#forge:dusts/ender_pearl")
        .inputFluids("gtceu:redstone 1152")
        .itemOutputs("12x kubejs:resonating_crystal")
        .duration(900)
        .EUt(480)

    // Ender Shard
    event.shapeless("8x kubejs:ender_shard", ["minecraft:ender_pearl"]).id("kubejs:ender_pearl")
    event.recipes.gtceu.forge_hammer("kubejs:ender_pearl_shattering")
        .itemInputs("minecraft:ender_pearl")
        .itemOutputs("8x kubejs:ender_shard")
        .duration(40)
        .EUt(12)

    // Waterframes
    event.shaped("waterframes:frame", [
        "IGI",
        "GSG",
        "IGI"
    ], {
        I: "gtceu:iron_plate",
        S: "gtceu:steel_plate",
        G: "#forge:glass_panes"
    }).id("waterframes:frame")

    event.shaped("waterframes:projector", [
        "III",
        "IFG",
        "III"
    ], {
        F: "waterframes:frame",
        I: "gtceu:iron_plate",
        G: "#forge:glass_panes"
    }).id("waterframes:projector")

    event.shaped("waterframes:tv", [
        "III",
        "GFG",
        "III"
    ], {
        F: "waterframes:frame",
        I: "gtceu:iron_plate",
        G: "#forge:glass_panes"
    }).id("waterframes:tv")

    event.shaped("waterframes:big_tv", [
        "III",
        "GFG",
        "III"
    ], {
        F: "waterframes:tv",
        I: "gtceu:iron_plate",
        G: "#forge:glass_panes"
    }).id("waterframes:big_tv")

    event.shaped("waterframes:remote", [
        "IRI",
        "ICI",
        "ICI"
    ], {
        R: "minecraft:redstone",
        I: "gtceu:iron_plate",
        C: "gtceu:copper_plate"
    }).id("waterframes:remote")

    // Stonecut p2p tunnels, attunement sucks
    const p2p = ["redstone", "item", "fluid", "fe", "light"]
    p2p.forEach(type => {
        event.stonecutting(`ae2:${type}_p2p_tunnel`, "ae2:me_p2p_tunnel")
    })
    const mae2_p2p = ["pattern", "eu"]
    mae2_p2p.forEach(type => {
        event.stonecutting(`mae2:${type}_p2p_tunnel`, "ae2:me_p2p_tunnel")
    })
    const multi_p2p = ["pattern", "redstone", "fluid", "fe", "eu"]
    multi_p2p.forEach(type => {
        event.stonecutting(`mae2:${type}_multi_p2p_tunnel`, "mae2:item_multi_p2p_tunnel")
    })

    // Stonecutting CCI blocks
    let sameItemsTags = ["#chisel_chipped_integration:factory_block", "#chisel_chipped_integration:technical_block", "#chisel_chipped_integration:laboratory_block", "#chisel_chipped_integration:tyrian"]; // What item tags to go through (change this so you have your tags)
    sameItemsTags.forEach(tag => {
        let sameItems = Ingredient.of(tag).stacks; // Get all of the items with that tag
        sameItems.forEach(input => {
            sameItems.forEach(output => { // Loop through the items so all combination of input and output are met
                if (input != output) // Ignore recipes where input and output are the same item
                    event.stonecutting(output, input); // Make the recipe
            });
        });
    });

    // Stonecut GTCEU warning blocks into each other
    let hazardNames = [
        "acid", "antimatter", "bio", "boss", "causality", "explosion", "fire",
        "generic", "gregification", "high_pressure", "high_temperature", "high_voltage",
        "laser", "magic", "magnetic", "mob_infestation", "mob_spawner", "noise",
        "radioactive", "spatial_storage", "turret", "void"
    ];
    for (let hazardName of hazardNames) {
        let hazard = `gtceu:${hazardName}_hazard_sign_block`
        event.stonecutting(hazard, "gtceu:solid_machine_casing")
        event.stonecutting("gtceu:solid_machine_casing", hazard)
    }

    // Stonecutting Marble
    let MarbleTag = ["#moni:marble"]; // What item tags to go through (change this so you have your tags)
    MarbleTag.forEach(tag => {
        let Marbles = Ingredient.of(tag).stacks; // Get all of the items with that tag
        Marbles.forEach(input => {
            Marbles.forEach(output => { // Loop through the items so all combination of input and output are met
                if (input != output) // Ignore recipes where input and output are the same item
                    event.stonecutting(output, input); // Make the recipe
            });
        });
    });


    event.remove({ id: "gtceu:shaped/mega_blast_furnace" })
    event.recipes.gtceu.assembly_line("kubejs:assembly_line/mega_blast_furnace")
        .itemInputs("gtceu:electric_blast_furnace", "4x #gtceu:circuits/zpm", "4x gtceu:luv_field_generator", "4x gtceu:naquadah_alloy_spring", "4x gtceu:dense_naquadah_alloy_plate", "4x gtceu:uranium_rhodium_dinaquadide_quadruple_wire")
        .inputFluids("gtceu:soldering_alloy 9216")
        .itemOutputs("gtceu:mega_blast_furnace")
        .duration(3000)
        .EUt(30720)
        .stationResearch(b => b.researchStack("gtceu:electric_blast_furnace").CWUt(16, 64000).EUt(30720))

    event.remove({ id: "gtceu:shaped/mega_vacuum_freezer" })
    event.recipes.gtceu.assembly_line("kubejs:assembly_line/mega_vacuum_freezer")
        .itemInputs("gtceu:vacuum_freezer", "4x #gtceu:circuits/zpm", "4x gtceu:luv_field_generator", "4x gtceu:naquadah_normal_fluid_pipe", "4x gtceu:dense_naquadah_alloy_plate", "4x gtceu:uranium_rhodium_dinaquadide_quadruple_wire")
        .inputFluids("gtceu:soldering_alloy 9216")
        .itemOutputs("gtceu:mega_vacuum_freezer")
        .duration(3000)
        .EUt(30720)
        .stationResearch(b => b.researchStack("gtceu:vacuum_freezer").CWUt(16, 64000).EUt(30720))

    event.recipes.minecraft.smelting("kubejs:pulsating_dust", ["gtceu:uraninite_dust"])
    event.recipes.minecraft.smelting("kubejs:pulsating_dust", ["kubejs:resonant_clathrate"])

    // Electrum
    event.replaceInput({ id: /redstone_arsenal/ }, "redstone_arsenal:flux_metal_block", "gtceu:electrum_flux_block")

    // Advanced Soldering Alloy
    event.recipes.gtceu.mixer("soldering_alloy")
        .itemInputs("15x gtceu:bismuth_dust", "11x gtceu:tin_dust", "9x gtceu:zinc_dust", "4x gtceu:germanium_dust")
        .itemOutputs("39x gtceu:soldering_alloy_dust")
        .duration(700)
        .EUt(480)
        .circuit(2)

    // Neutronium Buff
    event.remove({ id: "gtceu:fusion_reactor/americium_and_naquadria_to_neutronium_plasma" })
    event.recipes.gtceu.fusion_reactor("neutronium_buffed")
        .inputFluids("gtceu:americium 128", "gtceu:naquadah 128")
        .outputFluids("gtceu:neutronium 32")
        .duration(130)
        .EUt(98304)
        .fusionStartEU(600000000)

    // Resonant Clathrate
    event.recipes.gtceu.chemical_reactor("resonant_clathrate")
        .itemInputs("minecraft:quartz")
        .inputFluids(Fluid.of("thermal:ender", 250))
        .itemOutputs("kubejs:resonant_clathrate")
        .duration(120)
        .EUt(75)

    event.recipes.gtceu.extractor("resonant_ender_from_pearl")
        .itemInputs("1x minecraft:ender_pearl")
        .outputFluids(Fluid.of("thermal:ender", 250))
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.fluid_solidifier("pearl_from_resonant_ender")
        .notConsumable("gtceu:ball_casting_mold")
        .inputFluids(Fluid.of("thermal:ender", 250))
        .itemOutputs("1x minecraft:ender_pearl")
        .duration(100)
        .EUt(GTValues.VHA[GTValues.LV])

    // Cleanroom Hatch
    event.remove({ id: "gtceu:shaped/maintenance_hatch_cleaning" })
    event.shaped("gtceu:cleaning_maintenance_hatch", [
        "CMC",
        "RHR",
        "WCW"
    ], {
        R: "gtceu:iv_robot_arm",
        W: "gtceu:graphene_single_cable",
        M: "gtceu:auto_maintenance_hatch",
        H: "gtceu:iv_machine_hull",
        C: "#gtceu:circuits/iv"
    })

    // Cleanroom Hatch Decomp fix
    event.replaceOutput({ id: "gtceu:arc_furnace/arc_cleaning_maintenance_hatch" }, "gtceu:darmstadtium_ingot", "8x gtceu:tungsten_steel_ingot")
    event.replaceOutput({ id: "gtceu:arc_furnace/arc_cleaning_maintenance_hatch" }, "gtceu:yttrium_barium_cuprate_ingot", "2x gtceu:graphene_ingot")
    event.replaceOutput({ id: "gtceu:macerator/macerate_cleaning_maintenance_hatch" }, "gtceu:darmstadtium_dust", "8x gtceu:tungsten_steel_dust")
    event.replaceOutput({ id: "gtceu:macerator/macerate_cleaning_maintenance_hatch" }, "gtceu:yttrium_barium_cuprate_dust", "2x gtceu:graphene_dust")

    // ZPM Field Gen
    event.remove({ id: "gtceu:assembly_line/field_generator_zpm" })
    event.recipes.gtceu.assembly_line("kubejs:assembly_line/zpm_field_generator")
        .itemInputs("gtceu:naquadah_alloy_frame", "6x gtceu:naquadah_alloy_plate", "gtceu:quantum_star", "2x gtceu:zpm_emitter", "2x #gtceu:circuits/zpm", "64x gtceu:fine_uranium_rhodium_dinaquadide_wire", "64x gtceu:fine_uranium_rhodium_dinaquadide_wire", "4x gtceu:vanadium_gallium_single_cable")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:cryococcus 1152")
        .itemOutputs("gtceu:zpm_field_generator")
        .duration(600)
        .EUt(24000)
        .stationResearch(b => b.researchStack("gtceu:luv_field_generator").CWUt(4, 16000).EUt(30720))

    // Dragon Scaleline
    event.recipes.gtceu.macerator("dragon_scale_crushing")
        .itemInputs("kubejs:ender_dragon_scale")
        .itemOutputs("kubejs:ender_dragon_scale_dust")
        .chancedOutput("kubejs:ender_dragon_scale_dust", 1000, 500)
        .chancedOutput("gtceu:graphite_dust", 1400, 850)
        .chancedOutput("gtceu:small_ilmenite_dust", 1400, 850)
        .duration(200)
        .EUt(120)

    event.recipes.gtceu.mixer("scale_dust_acid_mix")
        .itemInputs("4x kubejs:ender_dragon_scale_dust")
        .inputFluids("gtceu:hydrochloric_acid 2000")
        .outputFluids("gtceu:hydrochloric_dragon_scale_solution 2000")
        .duration(240)
        .EUt(120)

    event.recipes.gtceu.centrifuge("scale_acid_centrifuge")
        .inputFluids("gtceu:hydrochloric_dragon_scale_solution 1000")
        .itemOutputs("gtceu:graphitic_tantalum_dust")
        .outputFluids("gtceu:hydrochloric_manganese_solution 1000")
        .duration(120)
        .EUt(120)

    event.recipes.gtceu.electrolyzer("manganese_acid_separation")
        .inputFluids("gtceu:hydrochloric_manganese_solution 1000")
        .itemOutputs("gtceu:manganese_dust")
        .outputFluids("gtceu:hydrogen 1000", "gtceu:chlorine 1000")
        .duration(240)
        .EUt(120)

    event.recipes.gtceu.mixer("graphitic_tantalum_acid_mix")
        .itemInputs("4x gtceu:graphitic_tantalum_dust")
        .inputFluids("gtceu:hydrofluoric_acid 2000")
        .outputFluids("gtceu:hydrofluoric_graphitic_tantalum_solution 2000")
        .duration(240)
        .EUt(120)

    event.recipes.gtceu.centrifuge("tantalum_acid_graphite_centrifuge")
        .inputFluids("gtceu:hydrofluoric_graphitic_tantalum_solution 1000")
        .itemOutputs("gtceu:graphite_dust")
        .outputFluids("gtceu:hydrofluoric_tantalum_solution 1000")
        .duration(120)
        .EUt(120)

    event.recipes.gtceu.electrolyzer("tantalum_acid_separation")
        .inputFluids("gtceu:hydrofluoric_tantalum_solution 1000")
        .itemOutputs("gtceu:tantalum_dust")
        .outputFluids("gtceu:hydrogen 1000", "gtceu:fluorine 1000")
        .duration(240)
        .EUt(120)

    // Guardian Scale recycling
    event.recipes.gtceu.mixer("guardian_scale_slurry_mix")
        .itemInputs("2x kubejs:guardian_scale")
        .inputFluids("gtceu:aqua_regia 4000")
        .outputFluids("gtceu:guardian_scale_slurry 4000")
        .duration(280)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.centrifuge("guardian_scale_slurry_centrifuge")
        .inputFluids("gtceu:guardian_scale_slurry 4000")
        .itemOutputs("2x gtceu:malachite_dust")
        .chancedOutput("gtceu:arsenic_trioxide_dust", 3000, 700)
        .chancedOutput("gtceu:ruthenium_tetroxide_dust", 2000, 500)
        .outputFluids("gtceu:nitrosyl_chloride 1000", "minecraft:water 2000")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.HV])

    // Quantum Ring Assembler Recipes
    event.recipes.gtceu.assembler("kubejs:quantum_ring")
        .itemInputs("4x gtceu:stainless_steel_plate", "2x ae2:calculation_processor", "2x ae2:engineering_processor", "gtceu:quantum_star")
        .itemOutputs("ae2:quantum_ring")
        .duration(100)
        .EUt(30)

    event.recipes.gtceu.assembler("kubejs:quantum_link")
        .itemInputs("4x ae2:fluix_pearl", "4x ae2:quartz_glass", "gtceu:certus_quartz_plate")
        .itemOutputs("ae2:quantum_link")
        .duration(100)
        .EUt(30)

    // Dragon Breath canning and uncanning
    event.recipes.gtceu.canner("dragon_breath_unbottling")
        .itemInputs("minecraft:dragon_breath")
        .itemOutputs("minecraft:glass_bottle")
        .outputFluids("gtceu:dragon_breath 250")
        .duration(400)
        .EUt(2)

    event.recipes.gtceu.canner("dragon_breath_bottling")
        .itemInputs("minecraft:glass_bottle")
        .inputFluids("gtceu:dragon_breath 250")
        .itemOutputs("minecraft:dragon_breath")
        .duration(400)
        .EUt(2)

    // JEAN Gasoline consumption
    event.recipes.gtceu.combustion_generator("jean_gasoline_generator")
        .inputFluids("gtceu:jean_gasoline 1")
        .duration(2560)
        .EUt(-32)

    // JEAN Gasoline
    event.recipes.gtceu.large_chemical_reactor("kubejs:jean_gasoline")
        .itemInputs("3x gtceu:netherrack_dust")
        .inputFluids("gtceu:high_octane_gasoline 8000", "gtceu:rocket_fuel 5000", "gtceu:chlorine_triflouride 2000", "gtceu:tetraethyllead 1000", "gtceu:dragon_breath 500")
        .outputFluids("gtceu:jean_gasoline 16000")
        .duration(200)
        .EUt(7680)
        .circuit(24)

    event.recipes.gtceu.chemical_reactor("kubejs:chloroethane")
        .inputFluids("gtceu:ethylene 1000", "gtceu:hydrochloric_acid 1000")
        .outputFluids("gtceu:chloroethane 1000")
        .duration(60)
        .EUt(30)
        .circuit(4)

    event.recipes.gtceu.chemical_reactor("kubejs:tetraethyllead")
        .itemInputs("8x gtceu:sodium_lead_alloy_dust")
        .inputFluids("gtceu:chloroethane 4000")
        .outputFluids("gtceu:tetraethyllead 1000")
        .itemOutputs("8x gtceu:salt_dust", "3x gtceu:lead_dust")
        .duration(300)
        .EUt(480)

    event.recipes.gtceu.chemical_reactor("kubejs:chlorine_triflouride")
        .inputFluids("gtceu:fluorine 3000", "gtceu:chlorine 1000")
        .outputFluids("gtceu:chlorine_triflouride 1000")
        .duration(60)
        .EUt(7)

    event.recipes.gtceu.mixer("kubejs:sodium_lead_alloy")
        .itemInputs("gtceu:sodium_dust", "gtceu:lead_dust")
        .itemOutputs("2x gtceu:sodium_lead_alloy_dust")
        .duration(200)
        .EUt(7)

    // Clay synthesis from Dust
    event.recipes.gtceu.forge_hammer("dust")
        .itemInputs("minecraft:sand")
        .itemOutputs("kubejs:dust")
        .duration(16)
        .EUt(10)

    event.recipes.gtceu.chemical_reactor("gt_clay")
        .itemInputs("kubejs:dust")
        .itemOutputs("minecraft:clay")
        .inputFluids("water")
        .duration(20)
        .EUt(15)

    // Break Clay blocks into balls
    event.shapeless("4x minecraft:clay_ball", ["minecraft:clay"]);

    // Parallel Implosion Compressor
    event.recipes.gtceu.assembly_line("gtceu:assembly_line/implosion_collider")
        .itemInputs("4x enderio:reinforced_obsidian_block", "2x #gtceu:circuits/zpm", "gtceu:solid_machine_casing", "3x gtceu:niobium_nitride_double_cable", "2x gtceu:zpm_electric_piston")
        .inputFluids("gtceu:soldering_alloy 1152", "gtceu:osmium 1152")
        .itemOutputs("gtceu:implosion_collider")
        .duration(900)
        .EUt(32000)
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("gtceu:implosion_compressor").EUt(6000).duration(1800))

    // Froglights
    event.recipes.gtceu.atomic_reconstruction("ochre_froglight")
        .itemInputs("minecraft:magma_block")
        .itemOutputs("minecraft:ochre_froglight")
        .duration(20)
        .EUt(15)

    event.recipes.gtceu.atomic_reconstruction("verdant_froglight")
        .itemInputs("minecraft:ochre_froglight")
        .itemOutputs("minecraft:verdant_froglight")
        .duration(20)
        .EUt(15)

    event.recipes.gtceu.atomic_reconstruction("pearlescent_froglight")
        .itemInputs("minecraft:verdant_froglight")
        .itemOutputs("minecraft:pearlescent_froglight")
        .duration(20)
        .EUt(15)

    // Sodium to Sodium Hydroxide
    event.recipes.gtceu.chemical_reactor("na_to_naoh")
        .itemInputs("gtceu:sodium_dust")
        .inputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:sodium_hydroxide_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .duration(50)
        .EUt(120)

    // Patchouli Books that needed tweaking
    event.shapeless(Item.of("patchouli:guide_book", '{"patchouli:book":"laserio:laseriobook"}'), ["minecraft:book", "laserio:card_item"]).id("laserio:my_book_recipe_shapeless")

    // Chipped tinker's table
    event.replaceInput({ id: "chipped:benches/mechanist_workbench" }, "minecraft:tnt", "#forge:chests")

    // Phantom Paste
    event.shaped("framedblocks:phantom_paste", [
        "SSS",
        "SCS",
        "SSS"
    ], {
        S: "#forge:slimeballs",
        C: "minecraft:chorus_fruit",
    })

    // Let Oilsands have multiple types of oil
    event.remove({ id: "gtceu:centrifuge/oilsands_dust_separation" })
    event.recipes.gtceu.centrifuge("oilsands_to_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 5000, 5000)
        .outputFluids("gtceu:oil 1000")
        .duration(200)
        .EUt(30)
        .circuit(3)

    event.recipes.gtceu.centrifuge("oilsands_to_light_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 5000, 5000)
        .outputFluids("gtceu:oil_light 500")
        .duration(200)
        .EUt(30)
        .circuit(4)

    event.recipes.gtceu.centrifuge("oilsands_to_heavy_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 5000, 5000)
        .outputFluids("gtceu:oil_heavy 2000")
        .duration(200)
        .EUt(30)
        .circuit(2)

    event.recipes.gtceu.centrifuge("oilsands_to_raw_oil")
        .itemInputs("gtceu:oilsands_dust")
        .chancedOutput("minecraft:sand", 5000, 5000)
        .outputFluids("gtceu:oil_medium 1000")
        .duration(200)
        .EUt(30)
        .circuit(1)

    // Fix ilmenite -> rutile stoich
    event.remove({ id: "gtceu:electric_blast_furnace/rutile_from_ilmenite" })

    event.recipes.gtceu.electric_blast_furnace("rutile_from_ilmenite")
        .itemInputs("10x gtceu:ilmenite_dust", "2x gtceu:carbon_dust")
        .itemOutputs("2x gtceu:wrought_iron_ingot", "6x gtceu:rutile_dust")
        .outputFluids("gtceu:carbon_dioxide 2000")
        .duration(1600)
        .blastFurnaceTemp(1700)
        .EUt(480)

    // 64A energy converters recipe fix
    event.replaceInput({ output: "gtmutils:uev_64a_energy_converter" }, "gtceu:europium_hex_cable", "gtceu:activated_netherite_hex_wire")
    event.replaceInput({ output: "gtmutils:uiv_64a_energy_converter" }, "gtceu:europium_hex_cable", "gtceu:necrosiderite_hex_wire")
    event.replaceInput({ output: "gtmutils:max_64a_energy_converter" }, "gtceu:europium_hex_cable", "gtceu:monium_hex_wire")

    // Large Boilers fuel rebalance
    // Balance is based on adjusting to be an improvement over singeblock boilers
    // High Pressure Steam Boiler consumes 1 coal in 960s, produces 15mb/t, total production = 288,000 mb steam
    // By Defualt: Large Bronze Boiler consumes 1 coal in 1s, producing 800mb/t, total production = 16,000 mb steam
    // This is a factor of 18x, we chose x16 for balancing to make Large Boilers 11.1% less efficient as a tradeoff for the extra speed.
    event.findRecipes({ id: /^gtceu:large_boiler\/.*/, type: "gtceu:large_boiler" }).forEach(large_boiler_recipe => {

        let recipe_duration = large_boiler_recipe.json.getAsJsonPrimitive("duration").asInt

        large_boiler_recipe.json.remove("duration")
        large_boiler_recipe.json.add("duration", recipe_duration * 16)
    })
})
