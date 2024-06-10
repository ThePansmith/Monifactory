// THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE

ServerEvents.recipes(event => {

    // snad


    // snaded sand snad
    comapcting(event, 'kubejs:compressed_sand', 'minecraft:sand');
    comapcting(event, 'kubejs:double_compressed_sand', 'kubejs:compressed_sand');

    // red snaded red sand red snad
    comapcting(event, 'kubejs:compressed_red_sand', 'minecraft:red_sand');
    comapcting(event, 'kubejs:double_compressed_red_sand', 'kubejs:compressed_red_sand');

    // Glider
    event.replaceInput({ id: "hangglider:glider_framework" }, 'minecraft:iron_ingot', 'gtceu:iron_rod')
    event.replaceInput({ id: "gtceu:shaped/basic_circuit_board" }, 'gtceu:copper_single_wire', 'gtceu:fine_copper_wire')
    event.remove({ id: "gtceu:shapeless/credit_platinum" })
    event.remove({ id: "gtceu:shapeless/credit_platinum_alt" })

    event.recipes.gtceu.extractor('fluid_platinum')
        .outputFluids(Fluid.of('gtceu:platinum', 48))
        .itemInputs('gtceu:platinum_credit')
        .duration(40)
        .EUt(7)

    // Void Air (normal air)
    event.recipes.gtceu.gas_collector('void_air')
        .dimension('javd:void')
        .outputFluids(Fluid.of('gtceu:air', 10000))
        .circuit(4)
        .EUt(16)
        .duration(200)

    // Lost Cities Air (normal air)
    event.recipes.gtceu.gas_collector('lc_air')
        .dimension('lostcities:lostcities')
        .outputFluids(Fluid.of('gtceu:air', 10000))
        .circuit(5)
        .EUt(16)
        .duration(200)

    // Netherrack
    event.recipes.gtceu.chemical_reactor('dust_to_netherrack')
        .itemInputs('kubejs:dust')
        .inputFluids(Fluid.of('minecraft:lava', 1000))
        .itemOutputs('minecraft:netherrack')
        .duration(20)
        .EUt(32)

    // Lava from Magma
    event.recipes.gtceu.chemical_reactor('lava_from_magma')
        .itemInputs('minecraft:magma_block')
        .outputFluids(Fluid.of('minecraft:lava', 1000))
        .EUt(32)
        .duration(120)

    // Infinity Dust Blocks
    comapcting(event, 'kubejs:infinity_dust_block', 'enderio:grains_of_infinity');
    comapcting(event, 'kubejs:compressed_infinity_dust_block', 'kubejs:infinity_dust_block');
    comapcting(event, 'kubejs:double_compressed_infinity_dust_block', 'kubejs:compressed_infinity_dust_block');

    // Blazerod Shenanigans
    event.shapeless('minecraft:blaze_rod', 'minecraft:brewing_stand')
    event.replaceInput({ input: 'gtceu:wood_plate' }, 'gtceu:wood_plate', '#minecraft:planks')

    // Dust hydration
    event.shapeless("minecraft:clay", ["kubejs:dust", "minecraft:water_bucket"])

    // Change recipes for LV and MV macerators
    event.shaped(
        "gtceu:lv_macerator", [
        'PMB',
        'WWH',
        'CCW'
    ], {
        P: "gtceu:lv_electric_piston",
        M: "gtceu:lv_electric_motor",
        B: "gtceu:wrought_iron_buzz_saw_blade",
        W: "gtceu:tin_single_cable",
        H: "gtceu:lv_machine_hull",
        C: "#gtceu:circuits/lv"
    }
    ).id('gtceu:shaped/lv_macerator')

    event.shaped(
        "gtceu:mv_macerator", [
        'PMB',
        'WWH',
        'CCW'
    ], {
        P: "gtceu:mv_electric_piston",
        M: "gtceu:mv_electric_motor",
        B: "gtceu:steel_buzz_saw_blade",
        W: "gtceu:copper_single_cable",
        H: "gtceu:mv_machine_hull",
        C: "#gtceu:circuits/mv"
    }
    ).id('gtceu:shaped/mv_macerator')
    // Data Stuff
    event.recipes.gtceu.extractor("tank_data")
        .itemInputs("kubejs:heart_of_a_universe")
        .itemOutputs("kubejs:creative_tank_data")
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

    //TODO: AE2 crystal growth accelerator goes here

    // Implement Sculk Compound smelting
    event.remove({ id: "gtceu:electric_blast_furnace/blast_sculk_compound" })
    event.remove({ id: "gtceu:electric_blast_furnace/blast_sculk_compound_gas" })
    const sculk_compoundFuels = [
        [2000, "gtceu:cetane_boosted_diesel"],
        [2000, "gtceu:gasoline"],
    ]

    for (const [mB, id] of sculk_compoundFuels) {
        event.recipes.gtceu.electric_blast_furnace("sculk_compound_" + id.replace(/\W/g, ''))
            .itemInputs("gtceu:sculk_compound_dust")
            .inputFluids(`${id} ${mB}`)
            .itemOutputs("gtceu:hot_sculk_compound_ingot")
            .duration(1800)
            .blastFurnaceTemp(6800)
            .EUt(30720)

        event.recipes.gtceu.electric_blast_furnace("sculk_compound_scale_" + id.replace(/\W/g, ''))
            .itemInputs("4x kubejs:warden_horn")
            .inputFluids(`${id} ${mB * 4}`)
            .itemOutputs("2x gtceu:hot_sculk_compound_ingot")
            .duration(3600)
            .blastFurnaceTemp(6800)
            .EUt(30720)

    }
    
    //HOG Sculk Compound Recipes
    event.recipes.gtceu.electric_blast_furnace("sculk_compound_hog")
        .itemInputs("gtceu:sculk_compound_dust")
        .inputFluids("gtceu:high_octane_gasoline 500")
        .itemOutputs("gtceu:hot_sculk_compound_ingot")
        .duration(1200)
        .blastFurnaceTemp(6800)
        .EUt(30720)

    event.recipes.gtceu.electric_blast_furnace("sculk_compound_scale_hog")
        .itemInputs("4x kubejs:warden_horn")
        .inputFluids("gtceu:high_octane_gasoline 2000")
        .itemOutputs("2x gtceu:hot_sculk_compound_ingot")
        .duration(2400)
        .blastFurnaceTemp(6800)
        .EUt(30720)


    //Sculk Compound Vac Freezer recipe
    event.remove({ id: "gtceu:vacuum_freezer/cool_hot_sculk_compound_ingot" }) 
    event.recipes.gtceu.vacuum_freezer("sculk_compound_ingot_cooling")
        .itemInputs('gtceu:hot_sculk_compound_ingot')
        .itemOutputs('gtceu:sculk_compound_ingot')
        .inputFluids(Fluid.of('kubejs:molten_cryotheum', 2000))
        .duration(600)
        .EUt(1920)

    // Alternative hv cutter
    event.shaped(
        "gtceu:hv_cutter", [
        'WCG',
        'DHS',
        'CGM'
    ], {
        W: "gtceu:gold_single_cable",
        C: "#gtceu:circuits/hv",
        G: "gtceu:tempered_glass",
        D: "gtceu:hv_conveyor_module",
        H: "gtceu:hv_machine_hull",
        S: "gtceu:end_steel_gear", // TODO: FIX (likely requires registering end steel as a tool material, and idk how to do that)
        M: "gtceu:hv_electric_motor"
    }
    )

    // Prevent cleanroom casings from being usable for free resources
    event.remove({ input: "gtceu:sterilizing_filter_casing" })
    event.recipes.gtceu.arc_furnace("sterile_filter_recycling")
        .itemInputs("gtceu:sterilizing_filter_casing")
        .inputFluids("gtceu:oxygen 1265")
        .itemOutputs("4x gtceu:iridium_ingot", "2x gtceu:black_steel_ingot", "6x gtceu:small_ash_dust")
        .duration(691)
        .EUt(30)

    event.recipes.gtceu.macerator("sterile_filter_crushing")
        .itemInputs("gtceu:sterilizing_filter_casing")
        .itemOutputs("12x gtceu:polybenzimidazole_dust", "4x gtceu:iridium_dust", "2x gtceu:black_steel_dust")
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
    event.shaped(
        "4x gtceu:assembly_line_unit", [
        'CHC',
        'SFE',
        'CMC'
    ], {
        C: "#gtceu:circuits/luv",
        H: "gtceu:hpic_chip",
        S: "gtceu:iv_sensor",
        F: "gtceu:tungsten_steel_frame",
        E: "gtceu:iv_emitter",
        M: "gtceu:iv_electric_motor"
    }
    ).id('gtceu:shaped/casing_assembly_line')

    // Mixer naquadah enrichment
    event.recipes.gtceu.mixer("mixer_enriched_naquadah")
        .itemInputs("2x gtceu:naquadah_dust", "4x enderio:grains_of_infinity", "kubejs:grains_of_innocence", "enderio:pulsating_powder")
        .inputFluids("gtceu:pulsating_alloy 576", "gtceu:neptunium 144")
        .itemOutputs("gtceu:enriched_naquadah_dust")
        .duration(400)
        .EUt(8000)

    event.recipes.gtceu.mixer("mixer_naquadria")
        .itemInputs("2x gtceu:naquadah_dust", "enderio:prescient_powder", "4x enderio:vibrant_powder", "enderio:ender_crystal_powder")
        .inputFluids("gtceu:enderium 576", "gtceu:curium 144")
        .itemOutputs("gtceu:naquadria_dust")
        .duration(400)
        .EUt(30000)

    //Netherstar Crafting
    event.shaped('kubejs:nether_star_south', [
        "ADA",
        "ADA",
        " A "
    ], {
        A: "minecraft:quartz",
        D: 'kubejs:petrotheum_dust'
    })

    event.shaped('kubejs:nether_star_north', [
        " A ",
        "ADA",
        "ADA"
    ], {
        A: "minecraft:quartz",
        D: 'kubejs:aerotheum_dust'
    })

    event.shaped('kubejs:nether_star_west', [
        " AA",
        "ADD",
        " AA"
    ], {
        A: "minecraft:quartz",
        D: 'kubejs:cryotheum_dust'
    })

    event.shaped('kubejs:nether_star_east', [
        "AA ",
        "DDA",
        "AA "
    ], {
        A: "minecraft:quartz",
        D: 'kubejs:pyrotheum_dust'
    })

    event.shaped('4x kubejs:nether_star_center', [
        "ABA",
        "CDE",
        "AFA"
    ], {
        A: "minecraft:quartz",
        B: 'thermal:blitz_rod',
        C: 'thermal:blizz_rod',
        D: 'extendedcrafting:luminessence_block',
        E: 'minecraft:blaze_rod',
        F: 'thermal:basalz_rod'
    })

    event.shaped(
        'minecraft:nether_star', [
        ' A ',
        'DEB',
        ' C '
    ], {
        A: 'kubejs:nether_star_north',
        B: 'kubejs:nether_star_east',
        C: 'kubejs:nether_star_south',
        D: 'kubejs:nether_star_west',
        E: 'kubejs:nether_star_center'
    }
    )

    // Obby grinding
    event.recipes.gtceu.macerator('obsidian_dust')
        .itemInputs('minecraft:obsidian')
        .itemOutputs('gtceu:obsidian_dust')
        .duration(40)
        .EUt(2)

        event.recipes.gtceu.macerator("saltpeter_dust")
        .itemInputs("4x #forge:sandstone")
        .itemOutputs("gtceu:saltpeter_dust")
        .duration(300)
        .EUt(30)

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


    //Ender Chest and Tank (gives the full slot version)
    event.remove({ output: ['endertanks:ender_tank', 'enderchests:ender_chest'] })

    //Chest
    event.shaped(
        'enderchests:ender_chest', [ // these default to 000 anyways
        'ABA',
        'DED',
        'AFA'
    ], {
        A: 'minecraft:blaze_rod',
        B: 'minecraft:white_wool',
        D: 'minecraft:obsidian',
        E: 'gtceu:steel_crate',
        F: 'minecraft:ender_pearl'
    }
    )

    //Tank
    event.shaped(
        'endertanks:ender_tank', [
        'ABA',
        'DED',
        'AFA'
    ], {
        A: 'minecraft:blaze_rod',
        B: 'minecraft:white_wool',
        D: 'minecraft:obsidian',
        E: 'enderio:pressurized_fluid_tank',
        F: 'gtceu:ender_pearl_block'
    }
    )

    //Strings Recipe
    event.shaped(
        '6x minecraft:string', [
        ' A ',
        'ABA',
        ' A '
    ], {
        A: '#minecraft:saplings',
        B: '#minecraft:swords'
    }
    ).damageIngredient('#minecraft:swords')

    //Wooden rods from armor plus are easy to accidentally craft instead of wood gears. Turn it into a shaped recipe
    event.remove({ id: "armorplus:crafting/shapeless/wooden_rod" })
    event.shaped(
        '2x armorplus:wooden_rod', [
        'SS',
        'SS'
    ], {
        S: 'minecraft:stick'
    }
    ).id('kubejs:not_a_wood_gear')

    //Avaritia Replacement recipes
    comapcting(event, 'gtceu:neutronium_ingot', 'gtceu:neutronium_nugget')

    //Dense Hydrogen conversion
    comapcting(event, 'kubejs:dense_hydrogen', 'kubejs:solidified_hydrogen');
    comapcting(event, 'kubejs:ultra_dense_hydrogen', 'kubejs:dense_hydrogen');

    //Recipe from Radium salt to Radium and Rock Salt
    event.recipes.gtceu.electrolyzer("radium_salt_to_radium_and_salt")
        .itemInputs("kubejs:radium_salt")
        .itemOutputs("gtceu:rock_salt_dust")
        .outputFluids(Fluid.of('gtceu:radon', 1000))
        .duration(200)
        .EUt(2000)

    //Add the Fluid Tag Filter
    event.shaped(
        Item.of('gtceu:fluid_tag_filter', 1),
        [
            'ZZZ',
            'ZLZ',
            'ZZZ'
        ], {
        Z: 'gtceu:zinc_foil',
        L: 'gtceu:lead_plate'
    })
    //Making ABS take aluminium rather than osmium so it's obtainable in EV
    event.replaceInput({ id: "gtceu:shaped/blast_alloy_smelter" }, "gtceu:osmium_quadruple_wire", "gtceu:aluminium_single_cable")

    event.recipes.gtceu.alloy_smelter('kubejs:resonating_redstone')
        .itemInputs('minecraft:redstone_block', 'kubejs:ender_shard')
        .itemOutputs('kubejs:resonating_crystal')
        .duration(180)
        .EUt(16)

    event.recipes.gtceu.alloy_smelter('kubejs:resonating_restonia')
        .itemInputs('gtceu:restonia_gem', 'kubejs:ender_shard')
        .itemOutputs('kubejs:resonating_crystal')
        .duration(180)
        .EUt(16)

    event.shapeless('8x kubejs:ender_shard', ['minecraft:ender_pearl']).id('kubejs:ender_pearl')

    // Waterframes
    event.shaped(
        'waterframes:frame', [
        'IGI',
        'GSG',
        'IGI'
    ], {
        I: 'gtceu:iron_plate',
        S: 'gtceu:steel_plate',
        G: '#forge:glass_panes'
    }
    ).id('waterframes:frame')

    event.shaped(
        'waterframes:projector', [
        'III',
        'IFG',
        'III'
    ], {
        F: 'waterframes:frame',
        I: 'gtceu:iron_plate',
        G: '#forge:glass_panes'
    }
    ).id('waterframes:projector')

    event.shaped(
        'waterframes:tv', [
        'III',
        'GFG',
        'III'
    ], {
        F: 'waterframes:frame',
        I: 'gtceu:iron_plate',
        G: '#forge:glass_panes'
    }
    ).id('waterframes:tv')

    event.shaped(
        'waterframes:big_tv', [
            'III',
            'GFG',
            'III'
        ], {
            F: 'waterframes:tv',
            I: 'gtceu:iron_plate',
            G: '#forge:glass_panes'
    }
    ).id('waterframes:big_tv')

    event.shaped(
        'waterframes:remote', [
            'IRI',
            'ICI',
            'ICI'
        ], {
            R: 'minecraft:redstone',
            I: 'gtceu:iron_plate',
            C: 'gtceu:copper_plate'
    }
    ).id('waterframes:remote')

    // Stonecut p2p tunnels, attunement sucks
    const p2p = ["redstone", "item", "fluid", "fe", "light"]
    p2p.forEach(type => {
        event.stonecutting('ae2:'+type+'_p2p_tunnel', 'ae2:me_p2p_tunnel')
    })

    // Stonecutting CCI blocks
    let sameItemsTags = ['#chisel_chipped_integration:factory_block', '#chisel_chipped_integration:technical_block', '#chisel_chipped_integration:laboratory_block', '#chisel_chipped_integration:tyrian']; // What item tags to go through (change this so you have your tags)
    sameItemsTags.forEach(tag => {
        let sameItems = Ingredient.of(tag).stacks; // Get all of the items with that tag
        sameItems.forEach(input => {
            sameItems.forEach(output => { // Loop through the items so all combination of input and output are met
                if (input != output) // Ignore recipes where input and output are the same item
                    event.stonecutting(output, input); // Make the recipe
            });
        });
    }); 

    //LUV Components
    event.remove({ id: 'gtceu:assembly_line/electric_motor_luv'})
    event.recipes.gtceu.assembly_line('gtceu:assembly_line/electric_motor_luv')
        .itemInputs('gtceu:long_magnetic_samarium_rod',Item.of('gtceu:long_hsss_rod',2),Item.of('gtceu:hsss_ring',2),Item.of('gtceu:hsss_round',4),Item.of('gtceu:fine_ruridit_wire',64),Item.of('gtceu:niobium_titanium_single_cable',2))
        .inputFluids(Fluid.of('gtceu:soldering_alloy',144),Fluid.of('gtceu:lubricant',250))
        .itemOutputs('gtceu:luv_electric_motor')
        .duration(600)
        .EUt(6000)
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:iv_electric_motor').EUt(480).duration(4800))
    
    event.remove({ id: 'gtceu:assembly_line/electric_pump_luv'})
    event.recipes.gtceu.assembly_line('gtceu:assembly_line/electric_pump_luv')
        .itemInputs(Item.of('gtceu:luv_electric_motor',1),Item.of('gtceu:niobium_titanium_small_fluid_pipe',1),Item.of('gtceu:hsss_plate',2),Item.of('gtceu:hsss_screw',8),Item.of('gtceu:silicone_rubber_ring',4),Item.of('gtceu:hsss_rotor',1),Item.of('gtceu:niobium_titanium_single_cable',2))
        .inputFluids(Fluid.of('gtceu:soldering_alloy',144),Fluid.of('gtceu:lubricant',250))
        .itemOutputs('gtceu:luv_electric_pump')
        . duration(600)
        .EUt(6000)
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:iv_electric_pump').EUt(480).duration(4800))
   
    event.remove({ id: 'gtceu:assembly_line/conveyor_module_luv'})
    event.recipes.gtceu.assembly_line('gtceu:assembly_line/conveyor_module_luv')
        .itemInputs(Item.of('gtceu:luv_electric_motor',2),Item.of('gtceu:hsss_round',16),Item.of('gtceu:hsss_plate',2),Item.of('gtceu:hsss_screw',4),Item.of('gtceu:hsss_ring',4) , Item.of('gtceu:niobium_titanium_single_cable',2))
        .inputFluids(Fluid.of('gtceu:soldering_alloy',144),Fluid.of('gtceu:lubricant',250), Fluid.of('gtceu:styrene_butadiene_rubber',1000))
        .itemOutputs('gtceu:luv_conveyor_module')
        .duration(600)
        .EUt(6000)
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:iv_conveyor_module').EUt(480).duration(4800))

    
    event.remove({ id: 'gtceu:assembly_line/electric_piston_luv'})
    event.recipes.gtceu.assembly_line('gtceu:assembly_line/electric_piston_luv')
            .itemInputs(Item.of('gtceu:luv_electric_motor',1),Item.of('gtceu:hsss_plate',4),Item.of('gtceu:hsss_ring',2),Item.of('gtceu:hsss_round',16),Item.of('gtceu:hsss_rod',4),Item.of('gtceu:hsss_gear',1),Item.of('gtceu:small_hsss_gear',2),Item.of('gtceu:niobium_titanium_single_cable',2))
            .inputFluids(Fluid.of('gtceu:soldering_alloy',144),Fluid.of('gtceu:lubricant',250))
            .itemOutputs('gtceu:luv_electric_piston')
            .duration(600)
            .EUt(6000)
            ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:iv_electric_piston').EUt(480).duration(4800))
        
    event.remove({ id: 'gtceu:assembly_line/dynamo_hatch_luv'})
    event.recipes.gtceu.assembly_line('gtceu:assembly_line/dynamo_hatch_luv')
            .itemInputs(Item.of('gtceu:long_hsss_rod',4),Item.of('gtceu:hsss_gear',1),Item.of('gtceu:small_hsss_gear',3), Item.of('gtceu:hpic_chip',2),Item.of('#gtceu:circuits/luv',1),Item.of('gtceu:luv_voltage_coil',1))
            .inputFluids(Fluid.of('gtceu:sodium_potassium',6000),Fluid.of('gtceu:soldering_alloy',720))
            .itemOutputs('gtceu:luv_energy_output_hatch')
            .duration(400)
            .EUt(30720)
            ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:iv_energy_output_hatch').EUt(480).duration(4800))

            event.remove({ id: 'gtceu:assembly_line/robot_arm_luv'})
    event.recipes.gtceu.assembly_line('gtceu:assembly_line/robot_arm_luv')
            .itemInputs(Item.of('gtceu:luv_machine_hull',1),Item.of('gtceu:niobium_titanium_spring',4),Item.of('gtceu:small_hsss_gear',3), Item.of('gtceu:luv_electric_motor',2),Item.of('gtceu:luv_electric_piston',1),Item.of('#gtceu:circuits/luv',1),Item.of('#gtceu:circuits/iv',2),Item.of('#gtceu:circuits/ev',2),Item.of('gtceu:niobium_titanium_single_cable',4))
            .inputFluids(Fluid.of('gtceu:soldering_alloy',576),Fluid.of('gtceu:lubricant',250))
            .itemOutputs('gtceu:luv_robot_arm')
            .duration(600)
            .EUt(6000)
            ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('gtceu:iv_robot_arm').EUt(480).duration(4800))
            event.remove({ id: 'gtceu:shaped/mega_blast_furnace'})
    event.recipes.gtceu.assembly_line('kubejs:assembly_line/mega_blast_furnace')
        .itemInputs(Item.of('gtceu:electric_blast_furnace',16),Item.of('gtceu:dense_naquadah_alloy_plate',8),Item.of('gtceu:naquadah_spring',8),Item.of('gtceu:ruthenium_trinium_americium_neutronate_octal_wire',2),Item.of('gtceu:zpm_field_generator',4),Item.of('#gtceu:circuits/zpm',4))
        .inputFluids('gtceu:soldering_alloy 9216')
        .itemOutputs(Item.of('gtceu:mega_blast_furnace'))
        .duration(3000)
        .EUt(30720)
        .stationResearch(b => b.researchStack(Item.of('gtceu:electric_blast_furnace')).EUt(30720).CWUt(16,64000))
    event.remove({ id: 'gtceu:shaped/mega_vacuum_freezer'})
    event.recipes.gtceu.assembly_line('kubejs:assembly_line/mega_vacuum_freezer')
        .itemInputs(Item.of('gtceu:vacuum_freezer',16),Item.of('gtceu:dense_rhodium_plated_palladium_plate',8),Item.of('gtceu:niobium_titanium_normal_fluid_pipe',8),Item.of('gtceu:ruthenium_trinium_americium_neutronate_octal_wire',2),Item.of('gtceu:zpm_field_generator',4),Item.of('#gtceu:circuits/zpm',4))
        .inputFluids('gtceu:soldering_alloy 9216')
        .itemOutputs(Item.of('gtceu:mega_vacuum_freezer'))
        .duration(3000)
        .EUt(30720)
        .stationResearch(b => b.researchStack(Item.of('gtceu:electric_blast_furnace')).EUt(30720).CWUt(16,64000))

    event.recipes.minecraft.smelting('kubejs:pulsating_dust', ['gtceu:uraninite_dust'])
    event.recipes.minecraft.smelting('kubejs:pulsating_dust', ['kubejs:resonant_clathrate'])
})
