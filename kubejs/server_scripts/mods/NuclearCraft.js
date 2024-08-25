// priority: 0

ServerEvents.recipes(event => {

    //HUGE REWORK NUCLEARCRAFT
    event.remove({ output: ["nuclearcraft:supercooler", "nuclearcraft:rock_crusher", "nuclearcraft:decay_hastener", "nuclearcraft:irradiator", "nuclearcraft:nuclear_furnace", "nuclearcraft:extractor", "nuclearcraft:electrolyzer", "nuclearcraft:pressurizer", "nuclearcraft:alloy_smelter", "nuclearcraft:centrifuge", "nuclearcraft:manufactory", "nuclearcraft:gas_scrubber", "nuclearcraft:fluid_enricher", "nuclearcraft:isotope_separator", "nuclearcraft:fluid_infuser", "nuclearcraft:chemical_reactor", "nuclearcraft:analyzer", "nuclearcraft:ingot_former", "nuclearcraft:pump", "nuclearcraft:fuel_reprocessor", "nuclearcraft:leacher", "nuclearcraft:crystallizer", "nuclearcraft:assembler", "nuclearcraft:steam_turbine", "nuclearcraft:melter"] })
    event.remove({ output: ["nuclearcraft:nitrogen_collector", "nuclearcraft:compact_nitrogen_collector", "nuclearcraft:lava_collector", "nuclearcraft:dense_nitrogen_collector", "nuclearcraft:compact_helium_collector", "nuclearcraft:helium_collector", "nuclearcraft:dense_helium_collector"] })
    event.remove({ output: ["nuclearcraft:foursmore", "nuclearcraft:evenmoresmore", "nuclearcraft:moresmore", "nuclearcraft:smore"] })
})

// Live Fuel decomp
// Could also use this to change how these fuels are created? 
ServerEvents.recipes(event => {

    function decomp(name, fuel, ing1, ing2) {
        event.recipes.gtceu.thermal_centrifuge(name + "decomp")
            .itemInputs(fuel)
            .itemOutputs(ing1, ing2)
            .duration(3200)
            .EUt(48)
    }

    function decomp_single(name, fuel, ing) {
        event.recipes.gtceu.thermal_centrifuge(name + "decomp")
            .itemInputs(fuel)
            .itemOutputs(ing)
            .duration(3200)
            .EUt(48)
    }

    decomp_single("thorium_tbu_232", "nuclearcraft:fuel_thorium_tbu", "9x nuclearcraft:thorium_232");
    decomp("uranium_leu_233", "nuclearcraft:fuel_uranium_leu_233", "8x gtceu:uranium_dust", "nuclearcraft:uranium_233");
    decomp("uranium_heu_233", "nuclearcraft:fuel_uranium_heu_233", "5x gtceu:uranium_dust", "4x nuclearcraft:uranium_233");
    decomp("uranium_leu_235", "nuclearcraft:fuel_uranium_leu_235", "8x gtceu:uranium_dust", "gtceu:uranium_235_dust");
    decomp("uranium_heu_235", "nuclearcraft:fuel_uranium_heu_235", "5x gtceu:uranium_dust", "4x gtceu:uranium_235_dust");
    decomp("neptunium_len_236", "nuclearcraft:fuel_neptunium_len_236", "8x nuclearcraft:neptunium_237", "nuclearcraft:neptunium_236");
    decomp("neptunium_hen_236", "nuclearcraft:fuel_neptunium_hen_236", "5x nuclearcraft:neptunium_237", "4x nuclearcraft:neptunium_236");
    decomp("plutonium_lep_239", "nuclearcraft:fuel_plutonium_lep_239", "8x nuclearcraft:plutonium_242", "gtceu:plutonium_dust");
    decomp("plutonium_hep_239", "nuclearcraft:fuel_plutonium_hep_239", "5x nuclearcraft:plutonium_242", "4x gtceu:plutonium_dust");
    decomp("plutonium_lep_241", "nuclearcraft:fuel_plutonium_lep_241", "8x nuclearcraft:plutonium_242", "gtceu:plutonium_241_dust");
    decomp("plutonium_hep_241", "nuclearcraft:fuel_plutonium_hep_241", "5x nuclearcraft:plutonium_242", "4x gtceu:plutonium_241_dust");
    decomp("americium_lea_242", "nuclearcraft:fuel_americium_lea_242", "8x nuclearcraft:americium_243", "nuclearcraft:americium_242");
    decomp("americium_hea_242", "nuclearcraft:fuel_americium_hea_242", "5x nuclearcraft:americium_243", "4x nuclearcraft:americium_242");
    decomp("curium_lecm_243", "nuclearcraft:fuel_curium_lecm_243", "8x nuclearcraft:curium_246", "nuclearcraft:curium_243");
    decomp("curium_hecm_243", "nuclearcraft:fuel_curium_hecm_243", "5x nuclearcraft:curium_246", "4x nuclearcraft:curium_243");
    decomp("curium_lecm_245", "nuclearcraft:fuel_curium_lecm_245", "8x nuclearcraft:curium_246", "nuclearcraft:curium_245");
    decomp("curium_hecm_245", "nuclearcraft:fuel_curium_hecm_245", "5x nuclearcraft:curium_246", "4x nuclearcraft:curium_245");
    decomp("curium_lecm_247", "nuclearcraft:fuel_curium_lecm_247", "8x nuclearcraft:curium_246", "nuclearcraft:curium_247");
    decomp("curium_hecm_247", "nuclearcraft:fuel_curium_hecm_247", "5x nuclearcraft:curium_246", "4x nuclearcraft:curium_247");
    decomp("berkelium_leb_248", "nuclearcraft:fuel_berkelium_leb_248", "8x nuclearcraft:berkelium_247", "nuclearcraft:berkelium_248");
    decomp("berkelium_heb_248", "nuclearcraft:fuel_berkelium_heb_248", "5x nuclearcraft:berkelium_247", "4x nuclearcraft:berkelium_248");
    decomp("californium_lecf_249", "nuclearcraft:fuel_californium_lecf_249", "8x nuclearcraft:californium_252", "nuclearcraft:californium_249");
    decomp("californium_hecf_249", "nuclearcraft:fuel_californium_hecf_249", "5x nuclearcraft:californium_252", "4x nuclearcraft:californium_249");
    decomp("californium_lecf_251", "nuclearcraft:fuel_californium_lecf_251", "8x nuclearcraft:californium_252", "nuclearcraft:californium_251");
    decomp("californium_hecf_251", "nuclearcraft:fuel_californium_hecf_251", "5x nuclearcraft:californium_252", "4x nuclearcraft:californium_251");


    function decompdepleted(name, inputdepletedufuel, out, out2, out3, out4) {
        event.recipes.gtceu.centrifuge(name + "decompdepleted")
            .itemInputs(inputdepletedufuel)
            .itemOutputs(out, out2, out3, out4)
            .chancedOutput((out, out2, out3, out4), 5000, 500)
            .chancedOutput((out, out2, out3, out4), 5000, 500)
            .duration(3200)
            .EUt(48)
    }


    decompdepleted('depleted_californium_hecf_251', 'nuclearcraft:depleted_fuel_californium_hecf_251', '2x nuclearcraft:californium_251', '2x nuclearcraft:californium_252', '2x nuclearcraft:californium_252', '2x nuclearcraft:californium_252')
    decompdepleted('depleted_neptunium_len_236', 'nuclearcraft:depleted_fuel_neptunium_len_236', 'nuclearcraft:neptunium_237', '4x nuclearcraft:plutonium_242', 'nuclearcraft:americium_242', '3x nuclearcraft:americium_243')
    decompdepleted('depleted_thorium_tbu', 'nuclearcraft:depleted_fuel_thorium_tbu', '2x nuclearcraft:uranium_233', '8x gtceu:uranium_235_nugget', 'nuclearcraft:neptunium_236', '4x nuclearcraft:neptunium_237')
    decompdepleted('depleted_uranium_leu_233', 'nuclearcraft:depleted_fuel_uranium_leu_233', '4x nuclearcraft:plutonium_242', '4x gtceu:plutonium_nugget', '4x gtceu:plutonium_241_nugget', '3x nuclearcraft:americium_243')
    decompdepleted('depleted_uranium_heu_233', 'nuclearcraft:depleted_fuel_uranium_heu_233', '4x nuclearcraft:neptunium_236', 'nuclearcraft:neptunium_237', '2x nuclearcraft:plutonium_242', 'nuclearcraft:americium_243')
    decompdepleted('depleted_uranium_leu_235', 'nuclearcraft:depleted_fuel_uranium_leu_235', 'nuclearcraft:neptunium_237', '40x gtceu:uranium_nugget', '8x gtceu:plutonium_nugget', '8x gtceu:plutonium_241_nugget')
    decompdepleted('depleted_uranium_heu_235', 'nuclearcraft:depleted_fuel_uranium_heu_235', '2x nuclearcraft:neptunium_237', '20x gtceu:uranium_nugget', '4x gtceu:plutonium_nugget', '3x nuclearcraft:plutonium_242')
    decompdepleted('depleted_neptunium_hen_236', 'nuclearcraft:depleted_fuel_neptunium_hen_236', 'nuclearcraft:plutonium_238', '16x gtceu:uranium_nugget', '8x gtceu:plutonium_nugget', '4x nuclearcraft:plutonium_242')
    decompdepleted('depleted_plutonium_lep_239', 'nuclearcraft:depleted_fuel_plutonium_lep_239', '3x nuclearcraft:plutonium_242', 'nuclearcraft:curium_243', '8x gtceu:plutonium_nugget', '3x nuclearcraft:curium_246')
    decompdepleted('depleted_plutonium_hep_239', 'nuclearcraft:depleted_fuel_plutonium_hep_239', 'nuclearcraft:americium_241', '3x nuclearcraft:americium_242', 'nuclearcraft:curium_245', '3x nuclearcraft:curium_246')
    decompdepleted('depleted_plutonium_lep_241', 'nuclearcraft:depleted_fuel_plutonium_lep_241', 'nuclearcraft:plutonium_242', 'nuclearcraft:plutonium_242', 'nuclearcraft:americium_243', '6x nuclearcraft:curium_246')
    decompdepleted('depleted_plutonium_hep_241', 'nuclearcraft:depleted_fuel_plutonium_hep_241', 'nuclearcraft:americium_241', 'nuclearcraft:curium_245', '3x nuclearcraft:curium_246', '3x nuclearcraft:curium_247')
    decompdepleted('depleted_americium_lea_242', 'nuclearcraft:depleted_fuel_americium_lea_242', 'nuclearcraft:curium_243', 'nuclearcraft:curium_245', '5x nuclearcraft:curium_246', 'nuclearcraft:curium_247')
    decompdepleted('depleted_americium_hea_242', 'nuclearcraft:depleted_fuel_americium_hea_242', '2x nuclearcraft:curium_245', '4x nuclearcraft:curium_246', 'nuclearcraft:curium_247', 'nuclearcraft:berkelium_247')
    decompdepleted('depleted_curium_lecm_243', 'nuclearcraft:depleted_fuel_curium_lecm_243', '4x nuclearcraft:curium_246', '2x nuclearcraft:berkelium_247', 'nuclearcraft:berkelium_248', 'nuclearcraft:californium_249')
    decompdepleted('depleted_curium_hecm_243', 'nuclearcraft:depleted_fuel_curium_hecm_243', '3x nuclearcraft:curium_246', '3x nuclearcraft:berkelium_247', 'nuclearcraft:berkelium_248', 'nuclearcraft:californium_249')
    decompdepleted('depleted_curium_lecm_245', 'nuclearcraft:depleted_fuel_curium_lecm_245', '5x nuclearcraft:berkelium_247', 'nuclearcraft:berkelium_248', 'nuclearcraft:californium_249', '2x nuclearcraft:californium_252')
    decompdepleted('depleted_curium_hecm_245', 'nuclearcraft:depleted_fuel_curium_hecm_245', '6x nuclearcraft:berkelium_247', 'nuclearcraft:berkelium_248', 'nuclearcraft:californium_249', 'nuclearcraft:californium_251')
    decompdepleted('depleted_curium_lecm_247', 'nuclearcraft:depleted_fuel_curium_lecm_247', '3x nuclearcraft:berkelium_247', 'nuclearcraft:berkelium_248', 'nuclearcraft:californium_251', '4x nuclearcraft:californium_252')
    decompdepleted('depleted_curium_hecm_247', 'nuclearcraft:depleted_fuel_curium_hecm_247', 'nuclearcraft:berkelium_248', 'nuclearcraft:californium_249', '3x nuclearcraft:californium_251', '3x nuclearcraft:californium_252')
    decompdepleted('depleted_berkelium_leb_248', 'nuclearcraft:depleted_fuel_berkelium_leb_248', 'nuclearcraft:californium_249', 'nuclearcraft:californium_251', '3x nuclearcraft:californium_252', '3x nuclearcraft:californium_252')
    decompdepleted('depleted_berkelium_heb_248', 'nuclearcraft:depleted_fuel_berkelium_heb_248', 'nuclearcraft:californium_250', 'nuclearcraft:californium_251', '3x nuclearcraft:californium_252', '3x nuclearcraft:californium_252')
    decompdepleted('depleted_californium_lecf_249', 'nuclearcraft:depleted_fuel_californium_lecf_249', '2x nuclearcraft:californium_250', 'nuclearcraft:californium_251', '2x nuclearcraft:californium_252', '2x nuclearcraft:californium_252')
    decompdepleted('deplered_californium_hecf_249', 'nuclearcraft:depleted_fuel_californium_hecf_249', '4x nuclearcraft:californium_250', '2x nuclearcraft:californium_251', 'nuclearcraft:californium_252', 'nuclearcraft:californium_252')
    decompdepleted('depleted_californium_lecf_251', 'nuclearcraft:depleted_fuel_californium_lecf_251', 'nuclearcraft:californium_251', '2x nuclearcraft:californium_252', '2x nuclearcraft:californium_252', '2x nuclearcraft:californium_252')



    function cansolid(name, input) {
        event.remove({ output: `nuclearcraft:${name}_heat_sink` })
        event.recipes.gtceu.canner(name)
            .itemInputs('nuclearcraft:empty_heat_sink', `16x ${input}`)
            .itemOutputs(`nuclearcraft:${name}_heat_sink`)
            .duration(400)
            .EUt(2)
    }

    function canfluid(name, input) {
        event.remove({ output: `nuclearcraft:${name}_heat_sink` })
        event.recipes.gtceu.canner(name)
            .itemInputs('nuclearcraft:empty_heat_sink')
            .inputFluids(Fluid.of(input, 1000))
            .itemOutputs(`nuclearcraft:${name}_heat_sink`)
            .duration(400)
            .EUt(2)
    }

    function canmod(name, input) {
        event.remove({ output: `nuclearcraft:${name}_block` })
        event.recipes.gtceu.canner(name)
            .itemInputs('nuclearcraft:empty_heat_sink', `9x ${input}`)
            .itemOutputs(`nuclearcraft:${name}_block`)
            .duration(400)
            .EUt(2)
    }

    canfluid('water', "minecraft:water")
    cansolid('redstone', "minecraft:redstone")
    cansolid('quartz', "gtceu:nether_quartz_dust")
    cansolid('gold', "gtceu:gold_dust")
    cansolid('glowstone', "minecraft:glowstone")
    cansolid('lapis', "gtceu:lapis_dust")
    cansolid('diamond', "gtceu:diamond_dust")
    canfluid('liquid_helium', "gtceu:helium")
    cansolid('enderium', "gtceu:enderium_dust")
    canfluid('cryotheum', "kubejs:molten_cryotheum")
    cansolid('iron', "gtceu:iron_dust")
    cansolid('emerald', "gtceu:emerald_dust")
    cansolid('copper', "gtceu:copper_dust")
    cansolid('magnesium', "gtceu:magnesium_dust")
    cansolid('slime', "minecraft:slime_ball")
    cansolid('netherite', "minecraft:netherite_scrap")
    cansolid('end_stone', "gtceu:endstone_dust")
    cansolid('prismarine', "minecraft:prismarine_crystals")
    cansolid('obsidian', "gtceu:obsidian_dust")
    cansolid('purpur', "minecraft:popped_chorus_fruit")
    cansolid('nether_brick', "minecraft:nether_brick")
    cansolid('lithium', "gtceu:lithium_dust")
    cansolid('arsenic', "gtceu:arsenic_dust")
    cansolid('lead', "gtceu:lead_dust")
    cansolid('boron', "gtceu:boron_dust")
    cansolid('silver', "gtceu:silver_dust")
    canfluid('liquid_nitrogen', "gtceu:nitrogen")
    cansolid('fluorite', "gcyr:fluorite_dust")
    cansolid('tin', "gtceu:tin_dust")
    cansolid('aluminum', "gtceu:aluminium_dust")
    cansolid('manganese', "gtceu:manganese_dust")
    canmod('graphite', "gtceu:graphite_dust")
    canmod('beryllium', "gtceu:beryllium_dust")

    event.remove({ id: "nuclearcraft:empty_heat_sink" })
    event.shaped(
        "nuclearcraft:empty_heat_sink", [
            "TST",
            "S S",
            "TST"
        ], {
            T: 'nuclearcraft:tough_alloy_ingot',
            S: 'gtceu:steel_ingot'
        }
    )

    event.remove({ output: "nuclearcraft:plate_basic" })
    event.shaped(
        "nuclearcraft:plate_basic", [
            "TST",
            "SDS",
            "TST"
        ], {
            T: 'nuclearcraft:tough_alloy_ingot',
            S: 'gtceu:tungsten_plate',
            D: 'gtceu:double_steel_plate'
        }
    )

    event.remove({ id: "nuclearcraft:plate_advanced" })
    event.shaped(
        "nuclearcraft:plate_advanced", [
            "TST",
            "SDS",
            "TST"
        ], {
            T: 'nuclearcraft:hard_carbon_ingot',
            S: 'gtceu:yttrium_barium_cuprate_plate',
            D: 'nuclearcraft:plate_basic'
        }
    )

	event.remove({ id: 'nuclearcraft:plate_du'})
    event.recipes.gtceu.alloy_smelter('du_plating')
        .itemInputs('nuclearcraft:plate_advanced', 'kubejs:stabilized_uranium')
        .itemOutputs('2x nuclearcraft:plate_du')
        .duration(400)
        .EUt(2000)

	event.remove({ id: "nuclearcraft:plate_elite" })
    event.shaped(
        "nuclearcraft:plate_elite", [
            "TST",
            "SDS",
            "TST"
        ], {
            T: 'nuclearcraft:rhodochrosite_dust',
            S: 'gtceu:enderium_plate',
            D: 'nuclearcraft:plate_du'
        }
    )


    event.remove({ id: "nuclearcraft:fission_reactor_casing" })
    event.shaped(
        "8x nuclearcraft:fission_reactor_casing", [
            "DDD",
            "DFD",
            "DDD"
        ], {
            F: 'gtceu:robust_machine_casing',
            D: 'nuclearcraft:plate_basic'
        }
    )

    event.remove({ id: 'nuclearcraft:fission_reactor_solid_fuel_cell' })
    event.shaped(
        'nuclearcraft:fission_reactor_solid_fuel_cell', [
            "TST",
            "S S",
            "TST"
        ], {
            T: 'nuclearcraft:tough_alloy_ingot',
            S: 'gtceu:tempered_glass'
        }
    )

    event.remove({ id: 'nuclearcraft:fission_reactor_controller' })
    event.shaped(
        'nuclearcraft:fission_reactor_controller', [
            "DED",
            "EFE",
            "DED"
        ], {
            F: 'gtceu:robust_machine_casing',
            E: '#gtceu:circuits/ev',
            D: 'nuclearcraft:plate_advanced'
        }
    )

    event.remove({ id: 'nuclearcraft:fission_reactor_port' })
    event.shapeless('nuclearcraft:fission_reactor_port', ['nuclearcraft:fission_reactor_casing', "minecraft:hopper"])

    event.recipes.gtceu.chemical_reactor('rhodochrosite_dust')
        .itemInputs('12x gtceu:redstone_ore')
        .inputFluids('gtceu:sulfuric_acid 6000')
        .itemOutputs('nuclearcraft:rhodochrosite_dust')
        .outputFluids('gtceu:redstone 19008')
        .EUt(2000)
        .duration(200)

        event.recipes.gtceu.thermal_centrifuge("thoriumdecomp")
            .itemInputs('gtceu:thorium_dust')
            .itemOutputs('nuclearcraft:thorium_232')
            .duration(1100)
            .EUt(48)

    event.remove({
        output: [
            'nuclearcraft:fuel_thorium_tbu',
            'nuclearcraft:fuel_uranium_leu_233',
            'nuclearcraft:fuel_uranium_heu_233',
            'nuclearcraft:fuel_uranium_leu_235',
            'nuclearcraft:fuel_uranium_heu_235',
            'nuclearcraft:fuel_neptunium_len_236',
            'nuclearcraft:fuel_americium_hea_242',
            'nuclearcraft:fuel_americium_lea_242',
            'nuclearcraft:fuel_plutonium_hep_241',
            'nuclearcraft:fuel_plutonium_lep_241',
            'nuclearcraft:fuel_plutonium_hep_239',
            'nuclearcraft:fuel_plutonium_lep_239',
            'nuclearcraft:fuel_neptunium_hen_236',
            'nuclearcraft:fuel_curium_lecm_243',
            'nuclearcraft:fuel_curium_hecm_243',
            'nuclearcraft:fuel_curium_lecm_245',
            'nuclearcraft:fuel_curium_hecm_245',
            'nuclearcraft:fuel_curium_lecm_247',
            'nuclearcraft:fuel_curium_hecm_247',
            'nuclearcraft:fuel_berkelium_leb_248',
            'nuclearcraft:fuel_californium_hecf_251',
            'nuclearcraft:fuel_californium_lecf_251',
            'nuclearcraft:fuel_californium_hecf_249',
            'nuclearcraft:fuel_californium_lecf_249',
            'nuclearcraft:fuel_berkelium_heb_248'
        ]
    })

    event.remove({
        output: [
            'nuclearcraft:depleted_fuel_thorium_tbu',
            'nuclearcraft:depleted_fuel_uranium_leu_233',
            'nuclearcraft:depleted_fuel_uranium_heu_233',
            'nuclearcraft:depleted_fuel_uranium_leu_235',
            'nuclearcraft:depleted_fuel_uranium_heu_235',
            'nuclearcraft:depleted_fuel_neptunium_len_236',
            'nuclearcraft:depleted_fuel_americium_hea_242',
            'nuclearcraft:depleted_fuel_americium_lea_242',
            'nuclearcraft:depleted_fuel_plutonium_hep_241',
            'nuclearcraft:depleted_fuel_plutonium_lep_241',
            'nuclearcraft:depleted_fuel_plutonium_hep_239',
            'nuclearcraft:depleted_fuel_plutonium_lep_239',
            'nuclearcraft:depleted_fuel_neptunium_hen_236',
            'nuclearcraft:depleted_fuel_curium_lecm_243',
            'nuclearcraft:depleted_fuel_curium_hecm_243',
            'nuclearcraft:depleted_fuel_curium_lecm_245',
            'nuclearcraft:depleted_fuel_curium_lecm_247',
            'nuclearcraft:depleted_fuel_curium_hecm_247',
            'nuclearcraft:depleted_fuel_curium_hecm_245',
            'nuclearcraft:depleted_fuel_berkelium_leb_248',
            'nuclearcraft:depleted_fuel_californium_hecf_251',
            'nuclearcraft:depleted_fuel_californium_lecf_251',
            'nuclearcraft:depleted_fuel_californium_hecf_249',
            'nuclearcraft:depleted_fuel_californium_lecf_249',
            'nuclearcraft:depleted_fuel_berkelium_heb_248'
        ],
        type: "minecraft:smelting"
    })

    event.remove({ output: ['nuclearcraft:californium_251', 'nuclearcraft:plutonium_241', 'nuclearcraft:americium_243', 'nuclearcraft:plutonium_238', 'nuclearcraft:boron_10', 'nuclearcraft:boron_11', 'nuclearcraft:plutonium_239', 'nuclearcraft:neptunium_236', 'nuclearcraft:neptunium_237', 'nuclearcraft:curium_246', 'nuclearcraft:curium_247', 'nuclearcraft:curium_245', 'nuclearcraft:curium_243', 'nuclearcraft:berkelium_247', 'nuclearcraft:berkelium_248', 'nuclearcraft:uranium_235', 'nuclearcraft:uranium_238', 'nuclearcraft:uranium_233', 'nuclearcraft:lithium_6', 'nuclearcraft:lithium_7', 'nuclearcraft:americium_241', 'nuclearcraft:americium_242', 'nuclearcraft:plutonium_242', 'nuclearcraft:californium_250', 'nuclearcraft:californium_249', 'nuclearcraft:thorium_230', 'nuclearcraft:thorium_232', 'nuclearcraft:californium_252'], type: "minecraft:smelting" })


    event.shaped('nuclearcraft:fuel_thorium_tbu', ['AAA', 'AAA', 'AAA'], { A: 'nuclearcraft:thorium_232' })
    event.shaped('nuclearcraft:fuel_uranium_heu_233', ['AAA', 'ABB', 'BBB'], { A: 'nuclearcraft:uranium_233', B: 'gtceu:uranium_ingot' })
    event.shaped('nuclearcraft:fuel_uranium_leu_233', ['ABB', 'BBB', 'BBB'], { A: 'nuclearcraft:uranium_233', B: 'gtceu:uranium_ingot' })
    event.shaped('nuclearcraft:fuel_uranium_leu_235', ['ABB', 'BBB', 'BBB'], { A: 'gtceu:uranium_235_ingot', B: 'gtceu:uranium_ingot' })
    event.shaped('nuclearcraft:fuel_uranium_heu_235', ['AAA', 'ABB', 'BBB'], { A: 'gtceu:uranium_235_ingot', B: 'gtceu:uranium_ingot' })
    event.shaped('nuclearcraft:fuel_neptunium_hen_236', ['AAA', 'ABB', 'BBB'], { A: 'nuclearcraft:neptunium_236', B: 'nuclearcraft:neptunium_237' })
    event.shaped('nuclearcraft:fuel_neptunium_len_236', ['ABB', 'BBB', 'BBB'], { A: 'nuclearcraft:neptunium_236', B: 'nuclearcraft:neptunium_237' })
    event.shaped('nuclearcraft:fuel_plutonium_lep_239', ['ABB', 'BBB', 'BBB'], { A: 'gtceu:plutonium_ingot', B: 'nuclearcraft:plutonium_242' })
    event.shaped('nuclearcraft:fuel_plutonium_lep_241', ['ABB', 'BBB', 'BBB'], { A: 'gtceu:plutonium_241_ingot', B: 'nuclearcraft:plutonium_242' })
    event.shaped('nuclearcraft:fuel_plutonium_hep_239', ['AAA', 'ABB', 'BBB'], { A: 'gtceu:plutonium_ingot', B: 'nuclearcraft:plutonium_242' })
    event.shaped('nuclearcraft:fuel_plutonium_hep_241', ['AAA', 'ABB', 'BBB'], { A: 'gtceu:plutonium_241_ingot', B: 'nuclearcraft:plutonium_242' })
    event.shaped('nuclearcraft:fuel_americium_lea_242', ['ABB', 'BBB', 'BBB'], { A: 'nuclearcraft:americium_242', B: 'nuclearcraft:americium_243' })
    event.shaped('nuclearcraft:fuel_americium_hea_242', ['AAA', 'ABB', 'BBB'], { A: 'nuclearcraft:americium_242', B: 'nuclearcraft:americium_243' })
	event.shaped('nuclearcraft:fuel_curium_lecm_243', ['ABB', 'BBB', 'BBB'], { A: 'nuclearcraft:curium_243', B: 'nuclearcraft:curium_246' })   
	event.shaped('nuclearcraft:fuel_curium_hecm_243', ['AAA', 'ABB', 'BBB'], { A: 'nuclearcraft:curium_243', B: 'nuclearcraft:curium_246' })
    event.shaped('nuclearcraft:fuel_curium_lecm_245', ['ABB', 'BBB', 'BBB'], { A: 'nuclearcraft:curium_245', B: 'nuclearcraft:curium_246' })
    event.shaped('nuclearcraft:fuel_curium_lecm_247', ['ABB', 'BBB', 'BBB'], { A: 'nuclearcraft:curium_247', B: 'nuclearcraft:curium_245' })
    event.shaped('nuclearcraft:fuel_curium_hecm_245', ['AAA', 'ABB', 'BBB'], { A: 'nuclearcraft:curium_245', B: 'nuclearcraft:curium_246' })
    event.shaped('nuclearcraft:fuel_curium_hecm_247', ['AAA', 'ABB', 'BBB'], { A: 'nuclearcraft:curium_247', B: 'nuclearcraft:curium_246' })
    event.shaped('nuclearcraft:fuel_berkelium_leb_248', ['ABB', 'BBB', 'BBB'], { A: 'nuclearcraft:berkelium_248', B: 'nuclearcraft:berkelium_247' })
    event.shaped('nuclearcraft:fuel_berkelium_heb_248', ['AAA', 'ABB', 'BBB'], { A: 'nuclearcraft:berkelium_248', B: 'nuclearcraft:berkelium_247' })
    event.shaped('nuclearcraft:fuel_californium_lecf_249', ['ABB', 'BBB', 'BBB'], { A: 'nuclearcraft:californium_249', B: 'nuclearcraft:californium_252' })
    event.shaped('nuclearcraft:fuel_californium_lecf_251', ['ABB', 'BBB', 'BBB'], { A: 'nuclearcraft:californium_251', B: 'nuclearcraft:californium_252' })
    event.shaped('nuclearcraft:fuel_californium_hecf_249', ['AAA', 'ABB', 'BBB'], { A: 'nuclearcraft:californium_249', B: 'nuclearcraft:californium_252' })
    event.shaped('nuclearcraft:fuel_californium_hecf_251', ['AAA', 'ABB', 'BBB'], { A: 'nuclearcraft:californium_251', B: 'nuclearcraft:californium_252' })

        event.recipes.gtceu.steam_turbine("steam_hp")
        .inputFluids('nuclearcraft:high_pressure_steam 160')
        .outputFluids('gtceu:distilled_water 1')
            .duration(10)
            .EUt(-512)

        event.recipes.gtceu.distillery('distill_tech_water')
            .inputFluids('gtceu:distilled_water 20')
            .circuit(5)
            .outputFluids('nuclearcraft:technical_water 20')
            .duration(20).EUt(120)
			
	function rtg(name, input) {
		event.remove({ output: `nuclearcraft:${name}_rtg` })
		event.recipes.gtceu.assembler(name)
			.itemInputs('4x gtceu:graphite_plate', '4x nuclearcraft:plate_advanced', `4x ${input}`)
			.itemOutputs(`nuclearcraft:${name}_rtg`)
			.duration(200)
			.EUt(1920)
	}
	
	rtg('americium', 'nuclearcraft:americium_241')
	rtg('plutonium', 'nuclearcraft:plutonium_238')
	rtg('uranium', 'gtceu:uranium_ingot')
	rtg('californium', 'nuclearcraft:californium_250')
	
	function coils(name) {
		event.remove({ output: `nuclearcraft:coil_${name}` })
		event.recipes.gtceu.assembler(name)
			.itemInputs('1x gtceu:magnetic_steel_rod', `16x gtceu:fine_${name}_wire`)
			.itemOutputs(`nuclearcraft:coil_${name}`)
			.circuit(1)
			.duration(200)
			.EUt(480)
	}
	
	coils('copper')
	coils('magnesium_diboride')
	
	event.replaceInput({ input: 'nuclearcraft:bioplastic' }, 'nuclearcraft:bioplastic', '#forge:plastic_plates')
	event.replaceInput({ input: 'nuclearcraft:basic_electronic_circuit' }, 'nuclearcraft:basic_electric_circuit', '#gtceu:circuits/hv')
	event.replaceInput({ input: 'nuclearcraft:gelatin' }, 'nuclearcraft:gelatin', '#forge:rubber_plates')
	event.replaceInput({ input: 'nuclearcraft:lithium_ion_cell' }, 'nuclearcraft:lithium_ion_cell', '#gtceu:batteries/hv')
	event.replaceInput({ output: /nuclearcraft:hev/ }, 'nuclearcraft:plate_extreme', 'nuclearcraft:plate_advanced')
	
	event.remove({ id: 'nuclearcraft:heavy_shielding' })
	event.shaped(
        'nuclearcraft:heavy', [
            "BBB",
            "MPM",
            "DDD"
        ], {
            B: '#forge:plates/beryllium',
            M: 'nuclearcraft:medium',
            P: '#forge:plastic_plates',
            D: 'nuclearcraft:plate_du'
        }
    )
	
	event.remove({
        output: [
            'nuclearcraft:motor',
            'nuclearcraft:plate_extreme',
            'nuclearcraft:actuator',
            'nuclearcraft:tough_helmet',
            'nuclearcraft:tough_chest',
            'nuclearcraft:tough_pants',
            'nuclearcraft:tough_boots',
			'nuclearcraft:solar_panel_basic',
			'nuclearcraft:solar_panel_advanced',
			'nuclearcraft:solar_panel_du',
			'nuclearcraft:solar_panel_elite',
			'nuclearcraft:basic_voltaic_pile',
			'nuclearcraft:elite_voltaic_pile',
			'nuclearcraft:advanced_voltaic_pile',
			'nuclearcraft:du_voltaic_pile',
			'nuclearcraft:basic_storage_container',
			'nuclearcraft:elite_storage_container',
			'nuclearcraft:advanced_storage_container',
			'nuclearcraft:du_storage_container',
			'nuclearcraft:empty_frame',
			'nuclearcraft:dps',
			'nuclearcraft:rad_x',
			'nuclearcraft:servo',
			'nuclearcraft:bscco_electromagnet',
			'nuclearcraft:bscco_rf_amplifier',
			'nuclearcraft:niobium_tin_electromagnet',
			'nuclearcraft:niobium_tin_rf_amplifier',
			'nuclearcraft:lithium_ion_cell',
			'nuclearcraft:basic_lithium_ion_battery',
			'nuclearcraft:advanced_lithium_ion_battery',
			'nuclearcraft:du_lithium_ion_battery',
			'nuclearcraft:elite_lithium_ion_battery',
			'nuclearcraft:basic_barrel',
			'nuclearcraft:elite_barrel',
			'nuclearcraft:advanced_barrel',
			'nuclearcraft:du_barrel'
        ]
    })
    
});

ServerEvents.tags('item', event => {
	
	event.add('forge:plastic_plates', 'gtceu:polyvinyl_chloride_plate')
	event.add('forge:plastic_plates', 'gtceu:polybenzimidazole_plate')
	event.add('forge:plastic_plates', 'gtceu:polyethylene_plate')
	event.add('forge:plastic_plates', 'gtceu:polytetrafluoroethylene_plate')
	
	event.add('forge:rubber_plates', 'gtceu:silicone_rubber_plate')
	event.add('forge:rubber_plates', 'gtceu:styrene_butadiene_rubber_plate')
	event.add('forge:rubber_plates', 'gtceu:rubber_plate')
	
});