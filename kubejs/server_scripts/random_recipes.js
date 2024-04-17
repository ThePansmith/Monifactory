// THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE

ServerEvents.recipes(event => {

    // snad
    event.shapeless('snad:snad', ['2x kubejs:double_compressed_sand', 'enderio:pulsating_crystal']).id('snad:snadrecipe')
    event.shapeless('snad:red_snad', ['2x kubejs:double_compressed_red_sand', 'enderio:pulsating_crystal']).id('snad:red_snad')

    // snaded sand snad
	comapcting(event, 'kubejs:compressed_sand', 'minecraft:sand');
	comapcting(event, 'kubejs:double_compressed_sand', 'kubejs:compressed_sand');

    // red snaded red sand red snad
	comapcting(event, 'kubejs:compressed_red_sand', 'minecraft:red_sand');
	comapcting(event, 'kubejs:double_compressed_red_sand', 'kubejs:compressed_red_sand');

    // Glider
    event.replaceInput({ id: "hangglider:glider_framework" }, 'minecraft:iron_ingot', 'gtceu:iron_rod')
    event.replaceInput({ id: "gtceu:shaped/basic_circuit_board" }, 'gtceu:copper_single_wire', 'gtceu:fine_copper_wire')
    event.shapeless('16x gtceu:fireclay_dust', ['gtceu:clay_dust', 'gtceu:brick_dust'])
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
        .circuit(1)
        .EUt(16)
        .duration(200)

    // Netherrack
    event.recipes.gtceu.chemical_reactor('dust_to_netherrack')
        .itemInputs('kubejs:dust')
        .inputFluids(Fluid.of('minecraft:lava', 1000))
        .itemOutputs('minecraft:netherrack')
        .duration(20)
        .EUt(32)

    // Infinity Dust Blocks
	comapcting(event, 'kubejs:infinity_dust_block', 'enderio:grains_of_infinity');
	comapcting(event, 'kubejs:compressed_infinity_dust_block', 'kubejs:infinity_dust_block');
	comapcting(event, 'kubejs:double_compressed_infinity_dust_block', 'kubejs:compressed_infinity_dust_block');

    // Blazerod Shenanigans
    event.shapeless('minecraft:blaze_rod', 'minecraft:brewing_stand')
    event.replaceInput({ input: 'gtceu:wood_plate' }, 'gtceu:wood_plate', '#minecraft:planks')

    // Moni Steel
    event.remove({ type: "gtceu:electric_blast_furnace", output: "gtceu:steel_ingot" })

    const carbonSources = ["gtceu:coal_dust", "gtceu:charcoal_dust", "gtceu:carbon_dust"]
    // Alloy smelter steel
    carbonSources.forEach(carbonSource => {
        event.recipes.gtceu.alloy_smelter("steel_" + carbonSource.replace(/\W/g, '')) // The replace line removes non alphanumeric chars, regex is magic
            .itemInputs("#forge:ingots/wrought_iron", carbonSource)
            .itemOutputs("gtceu:steel_ingot")
            .duration(150)
            .EUt(16)
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

    // Steam oven & grinder
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

    // Moni-style firebricks
    event.remove({ type: "minecraft:smelting", output: "gtceu:firebrick" })
    event.recipes.minecraft.smelting("gtceu:firebrick", "gtceu:fireclay_dust")

    // Complete PBF recipe replacement
    event.remove({ type: "gtceu:primitive_blast_furnace" })

    // Table with various burn time lengths
    const pbfTimes = [
		// material | fuel | length in ticks
        ["wrought_iron", "coal", 400],
        ["wrought_iron", "charcoal", 400],
        ["wrought_iron", "coke", 600],
        ["iron", "coal", 900],
        ["iron", "charcoal", 900],
        ["iron", "coke", 1500]
    ]

	for (const [material, fuel, time] of pbfTimes) {
		let efficient = (fuel === "coke");
        // Ingot form
        event.recipes.gtceu.primitive_blast_furnace(`pbf_${material}_${fuel}`)
            .itemInputs(`${efficient ? '2x ' : ''}#forge:ingots/${material}`, [`#forge:gems/${fuel}`, `#forge:dusts/${fuel}`])
            .itemOutputs(`${efficient ? '2x ' : ''}gtceu:steel_ingot`, `gtceu:tiny_${efficient ? "" : "dark_"}ash_dust`)
            .duration(time)

        // Block form
        event.recipes.gtceu.primitive_blast_furnace(`pbf_block_${material}_${fuel}`)
			.itemInputs(`${efficient ? '2x ' : ''}#forge:storage_blocks/${material}`, `#forge:storage_blocks/${fuel}`)
            .itemOutputs(`${efficient ? '2x ' : ''}gtceu:steel_block`, `gtceu:${efficient ? "" : "dark_"}ash_dust`)
            .duration(time * 9)
	}

    // Data Stuff
    event.recipes.gtceu.extractor("tank_data")
        .itemInputs("kubejs:heart_of_a_universe")
        .itemOutputs("kubejs:creative_portable_tank_mold")
        .duration(1000)
        .EUt(180000)

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

    event.recipes.gtceu.assembler("lv_motor")
        .itemInputs("2x gtceu:tin_single_cable", "2x gtceu:iron_rod", "gtceu:magnetic_iron_rod", "4x gtceu:fine_copper_wire")
        .itemOutputs("gtceu:lv_electric_motor")
        .duration(100)
        .EUt(30)

    // Glass tube
    event.shaped(
        "gtceu:glass_tube", [
            '   ',
            'PPP',
            'PPP'
        ], {
            P: "#forge:panes/glass"
        }
    )

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

    // NC cobble gen replaced with thermal for now, make buckets empty but indicate how it must be placed, also remove easy auto deepslate and friends
    event.remove({ type: "thermal:rock_gen", not: { output: "minecraft:cobblestone" } })
    event.shaped(
        "thermal:device_rock_gen", [
            'PPP',
            'B B',
            'PPP'
        ], {
            P: "gtceu:steel_plate",
            B: "minecraft:bucket"
        }
    ).id('thermal:device_rock_gen')

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

    // Implement draconium smelting
    event.remove({ id: "gtceu:electric_blast_furnace/blast_draconium" })

    const draconiumFuels = [
        [2000, "gtceu:cetane_boosted_diesel"],
        [2000, "gtceu:gasoline"],
        [500, "gtceu:high_octane_gasoline"]
    ]

	for (const [mB, id] of draconiumFuels) {
        event.recipes.gtceu.electric_blast_furnace("draconium_" + id.replace(/\W/g, ''))
            .itemInputs("gtceu:draconium_dust")
            .inputFluids(`${id} ${mB}`)
            .itemOutputs("gtceu:hot_draconium_ingot")
            .duration(10000)
            .blastFurnaceTemp(6800)
            .EUt(120)

        event.recipes.gtceu.electric_blast_furnace("draconium_scale_" + id.replace(/\W/g, ''))
            .itemInputs("4x armorplus:ender_dragon_scale")
			.inputFluids(`${id} ${mB * 4}`)
            .itemOutputs("2x gtceu:hot_draconium_ingot")
            .duration(20000)
            .blastFurnaceTemp(6800)
            .EUt(120)
	}

    // Diamond -> carbon
    event.recipes.gtceu.electrolyzer("diamond_decomposition")
        .itemInputs("gtceu:diamond_dust")
        .itemOutputs("16x gtceu:carbon_dust")
        .duration(768)
        .EUt(30)

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
    event.remove({ input: "gtceu:mega_vaccum_freezer" })
    event.recipes.gtceu.arc_furnace("bbc_recycling")
        .itemInputs("gtceu:mega_vaccum_freezer")
        .inputFluids("gtceu:oxygen 26976")
        .itemOutputs("18x gtceu:naquadah_alloy_ingot", "12x gtceu:stainless_steel_ingot", "12x gtceu:electrum_ingot", "gtceu:steel_block")
        .duration(26976)
        .EUt(30)

    event.recipes.gtceu.macerator("bbc_crushing")
        .itemInputs("gtceu:mega_vaccum_freezer")
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
	event.remove( {id: "armorplus:crafting/shapeless/wooden_rod" })
	event.shaped(
		'2x armorplus:wooden_rod', [
			'SS',
			'SS'
		], {
			S: 'minecraft:stick'
		}
	).id('kubejs:not_a_wood_gear')

	//Bounty board recipes only accept oak. The dev has stated this is intended. https://github.com/ejektaflex/Bountiful/issues/271
	event.replaceInput( { id:"bountiful:crafting/bountyboard"}, "minecraft:oak_log", "#minecraft:logs")
	event.replaceInput( { id:"bountiful:crafting/bountyboard"}, "minecraft:oak_planks", "#minecraft:planks")

	// avaritia ext crafting table (unused, doesnt exist in 1.12)
	event.remove({ output: "avaritia:extreme_crafting_table" })
	event.remove({ output: "avaritia:record_fragment" })
})
