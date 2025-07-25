// priority: 0
/**
 * NuclearCraft configuration
 */

// Live Fuel decomp
// Could also use this to change how these fuels are created?
ServerEvents.recipes(event => {

    function decomp(name, fuel, ing1, ing2) {
        event.recipes.gtceu.thermal_centrifuge(`kubejs:${name}_decomp`)
            .itemInputs(fuel)
            .itemOutputs(ing1, ing2)
            .duration(3200)
            .EUt(48)
    }

    function decomp_single(name, fuel, ing) {
        event.recipes.gtceu.thermal_centrifuge(`kubejs:${name}_decomp`)
            .itemInputs(fuel)
            .itemOutputs(ing)
            .duration(3200)
            .EUt(48)
    }

    decomp_single("thorium_tbu_232", "nuclearcraft:fuel_thorium_tbu", "9x gtceu:thorium_dust");
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

    function decompdepleted(fuelType, out, out2, out3, out4, voltageTier) {

        event.recipes.gtceu.centrifuge(`${fuelType}decompdepleted`)
            .itemInputs(`nuclearcraft:depleted_fuel_${fuelType}`)
            .itemOutputs(out, out2, out3, out4)
            .duration(400)
            .EUt(GTValues.VHA[voltageTier])
    }


    decompdepleted("thorium_tbu", "2x nuclearcraft:uranium_233", "8x gtceu:uranium_235_nugget", "nuclearcraft:neptunium_236", "4x nuclearcraft:neptunium_237", GTValues.EV)
    decompdepleted("uranium_leu_233", "4x nuclearcraft:plutonium_242", "4x gtceu:plutonium_nugget", "4x gtceu:plutonium_241_nugget", "3x nuclearcraft:americium_243", GTValues.IV)
    decompdepleted("uranium_heu_233", "4x nuclearcraft:neptunium_236", "nuclearcraft:neptunium_237", "2x nuclearcraft:plutonium_242", "nuclearcraft:americium_242", GTValues.IV)
    decompdepleted("uranium_leu_235", "nuclearcraft:neptunium_237", "40x gtceu:uranium_nugget", "8x gtceu:plutonium_nugget", "8x gtceu:plutonium_241_nugget", GTValues.IV)
    decompdepleted("uranium_heu_235", "2x nuclearcraft:neptunium_237", "20x gtceu:uranium_nugget", "4x gtceu:plutonium_nugget", "3x nuclearcraft:plutonium_242", GTValues.IV)
    decompdepleted("neptunium_len_236", "nuclearcraft:neptunium_237", "3x nuclearcraft:plutonium_242", "nuclearcraft:americium_241", "3x nuclearcraft:americium_243", GTValues.IV)
    decompdepleted("neptunium_hen_236", "nuclearcraft:plutonium_238", "16x gtceu:plutonium_nugget", "2x nuclearcraft:americium_242", "3x nuclearcraft:plutonium_242", GTValues.IV)
    decompdepleted("plutonium_lep_239", "3x nuclearcraft:plutonium_242", "nuclearcraft:curium_243", "8x gtceu:plutonium_nugget", "3x nuclearcraft:berkelium_247", GTValues.LuV)
    decompdepleted("plutonium_hep_239", "nuclearcraft:americium_243", "3x nuclearcraft:plutonium_242", "nuclearcraft:curium_245", "3x nuclearcraft:berkelium_248", GTValues.LuV)
    decompdepleted("plutonium_lep_241", "nuclearcraft:plutonium_242", "nuclearcraft:berkelium_248", "nuclearcraft:americium_243", "5x nuclearcraft:berkelium_247", GTValues.LuV)
    decompdepleted("plutonium_hep_241", "nuclearcraft:americium_243", "3x nuclearcraft:curium_245", "3x nuclearcraft:berkelium_247", "nuclearcraft:berkelium_248", GTValues.LuV)
    decompdepleted("americium_lea_242", "nuclearcraft:curium_243", "5x nuclearcraft:curium_245", "nuclearcraft:californium_251", "nuclearcraft:californium_252", GTValues.LuV)
    decompdepleted("americium_hea_242", "2x nuclearcraft:curium_245", "4x nuclearcraft:californium_251", "nuclearcraft:californium_252", "nuclearcraft:californium_250", GTValues.LuV)

    function cansolid(name, input) {
        event.remove({ output: `nuclearcraft:${name}_heat_sink` })
        event.recipes.gtceu.canner(name)
            .itemInputs("nuclearcraft:empty_heat_sink", `16x ${input}`)
            .itemOutputs(`nuclearcraft:${name}_heat_sink`)
            .duration(400)
            .EUt(2)
    }

    function canfluid(name, input) {
        event.remove({ output: `nuclearcraft:${name}_heat_sink` })
        event.recipes.gtceu.canner(`${name}_heat_sink`)
            .itemInputs("nuclearcraft:empty_heat_sink")
            .inputFluids(Fluid.of(input, 1000))
            .itemOutputs(`nuclearcraft:${name}_heat_sink`)
            .duration(400)
            .EUt(2)
    }

    function canmod(name, input) {
        event.remove({ output: `nuclearcraft:${name}_block` })
        event.recipes.gtceu.canner(`${name}_heat_sink`)
            .itemInputs("nuclearcraft:empty_heat_sink", `9x ${input}`)
            .itemOutputs(`nuclearcraft:${name}_block`)
            .duration(400)
            .EUt(2)
    }

    canfluid("water", "minecraft:water")
    cansolid("redstone", "minecraft:redstone")
    cansolid("quartz", "gtceu:nether_quartz_dust")
    cansolid("glowstone", "minecraft:glowstone_dust")
    cansolid("lapis", "gtceu:lapis_dust")
    canfluid("liquid_helium", "gtceu:liquid_helium")
    cansolid("enderium", "gtceu:enderium_dust")
    canfluid("cryotheum", "kubejs:molten_cryotheum")
    cansolid("emerald", "gtceu:emerald_dust")
    cansolid("copper", "gtceu:copper_dust")
    cansolid("magnesium", "gtceu:magnesium_dust")
    cansolid("boron", "gtceu:boron_dust")
    cansolid("tin", "gtceu:tin_dust")
    cansolid("aluminum", "gtceu:aluminium_dust")
    cansolid("manganese", "gtceu:manganese_dust")
    canmod("graphite", "gtceu:graphite_dust")
    canmod("beryllium", "gtceu:beryllium_dust")

    event.remove({ id: "nuclearcraft:empty_heat_sink" })
    event.shaped("nuclearcraft:empty_heat_sink", [
        "TST",
        "S S",
        "TST"
    ], {
        T: "nuclearcraft:tough_alloy_ingot",
        S: "gtceu:steel_ingot"
    })

    event.remove({ output: "nuclearcraft:plate_basic" })
    event.shaped("2x nuclearcraft:plate_basic", [
        "TST",
        "SDS",
        "TST"
    ], {
        T: "nuclearcraft:tough_alloy_ingot",
        S: "gtceu:tungsten_plate",
        D: "gtceu:double_steel_plate"
    })

    event.remove({ id: "nuclearcraft:plate_advanced" })
    event.shaped("2x nuclearcraft:plate_advanced", [
        "TST",
        "SDS",
        "TST"
    ], {
        T: "nuclearcraft:hard_carbon_ingot",
        S: "gtceu:yttrium_barium_cuprate_plate",
        D: "nuclearcraft:plate_basic"
    })

    event.remove({ id: "nuclearcraft:plate_du" })
    event.recipes.gtceu.alloy_smelter("du_plating")
        .itemInputs("nuclearcraft:plate_advanced", "kubejs:stabilized_uranium")
        .itemOutputs("2x nuclearcraft:plate_du")
        .duration(400)
        .EUt(2000)

    event.remove({ id: "nuclearcraft:plate_elite" })
    event.shaped("2x nuclearcraft:plate_elite", [
        "TST",
        "SDS",
        "TST"
    ], {
        T: "nuclearcraft:rhodochrosite_dust",
        S: "gtceu:enderium_plate",
        D: "nuclearcraft:plate_du"
    })


    event.remove({ id: "nuclearcraft:fission_reactor_casing" })
    event.shaped("8x nuclearcraft:fission_reactor_casing", [
        "DDD",
        "DFD",
        "DDD"
    ], {
        F: "gtceu:robust_machine_casing",
        D: "nuclearcraft:plate_basic"
    })

    event.remove({ id: "nuclearcraft:fission_reactor_solid_fuel_cell" })
    event.shaped("nuclearcraft:fission_reactor_solid_fuel_cell", [
        "TST",
        "S S",
        "TST"
    ], {
        T: "nuclearcraft:tough_alloy_ingot",
        S: "gtceu:tempered_glass"
    })

    event.remove({ id: "nuclearcraft:fission_reactor_controller" })
    event.shaped("nuclearcraft:fission_reactor_controller", [
        "DED",
        "EFE",
        "DED"
    ], {
        F: "gtceu:robust_machine_casing",
        E: "#gtceu:circuits/ev",
        D: "nuclearcraft:plate_advanced"
    })

    event.remove({ id: "nuclearcraft:fission_reactor_port" })
    event.shapeless("nuclearcraft:fission_reactor_port", ["nuclearcraft:fission_reactor_casing", "minecraft:hopper"])

    event.recipes.gtceu.chemical_reactor("rhodochrosite_dust")
        .itemInputs("12x gtceu:raw_redstone")
        .inputFluids("gtceu:sulfuric_acid 6000")
        .itemOutputs("nuclearcraft:rhodochrosite_dust")
        .outputFluids("gtceu:redstone 15840")
        .EUt(2000)
        .duration(200)

    event.recipes.gtceu.thermal_centrifuge("thoriumdecomp")
        .itemInputs("gtceu:thorium_dust")
        .itemOutputs("nuclearcraft:thorium_232")
        .duration(1100)
        .EUt(48)

    event.remove({
        output: [
            "nuclearcraft:fuel_thorium_tbu",
            "nuclearcraft:fuel_uranium_leu_233",
            "nuclearcraft:fuel_uranium_heu_233",
            "nuclearcraft:fuel_uranium_leu_235",
            "nuclearcraft:fuel_uranium_heu_235",
            "nuclearcraft:fuel_neptunium_len_236",
            "nuclearcraft:fuel_americium_hea_242",
            "nuclearcraft:fuel_americium_lea_242",
            "nuclearcraft:fuel_plutonium_hep_241",
            "nuclearcraft:fuel_plutonium_lep_241",
            "nuclearcraft:fuel_plutonium_hep_239",
            "nuclearcraft:fuel_plutonium_lep_239",
            "nuclearcraft:fuel_neptunium_hen_236",
        ]
    })

    event.remove({
        output: [
            "nuclearcraft:depleted_fuel_thorium_tbu",
            "nuclearcraft:depleted_fuel_uranium_leu_233",
            "nuclearcraft:depleted_fuel_uranium_heu_233",
            "nuclearcraft:depleted_fuel_uranium_leu_235",
            "nuclearcraft:depleted_fuel_uranium_heu_235",
            "nuclearcraft:depleted_fuel_neptunium_len_236",
            "nuclearcraft:depleted_fuel_americium_hea_242",
            "nuclearcraft:depleted_fuel_americium_lea_242",
            "nuclearcraft:depleted_fuel_plutonium_hep_241",
            "nuclearcraft:depleted_fuel_plutonium_lep_241",
            "nuclearcraft:depleted_fuel_plutonium_hep_239",
            "nuclearcraft:depleted_fuel_plutonium_lep_239",
            "nuclearcraft:depleted_fuel_neptunium_hen_236",
        ],
        type: "minecraft:smelting"
    })

    event.remove({
        output: [
            "nuclearcraft:neptunium_236",
            "nuclearcraft:neptunium_237",
            "nuclearcraft:curium_245",
            "nuclearcraft:curium_243",
            "nuclearcraft:berkelium_247",
            "nuclearcraft:berkelium_248",
            "nuclearcraft:uranium_233",
            "nuclearcraft:americium_241",
            "nuclearcraft:americium_242",
            "nuclearcraft:americium_243",
            "nuclearcraft:plutonium_238",
            "nuclearcraft:plutonium_242",
            "nuclearcraft:californium_250",
            "nuclearcraft:californium_251",
            "nuclearcraft:californium_252"
        ], type: "minecraft:smelting"
    })


    event.shaped("nuclearcraft:fuel_thorium_tbu", ["AAA", "AAA", "AAA"], { A: "gtceu:thorium_dust" })
    event.shaped("nuclearcraft:fuel_uranium_leu_233", ["ABB", "BBB", "BBB"], { A: "nuclearcraft:uranium_233", B: "gtceu:uranium_ingot" })
    event.shaped("nuclearcraft:fuel_uranium_heu_233", ["AAA", "ABB", "BBB"], { A: "nuclearcraft:uranium_233", B: "gtceu:uranium_ingot" })
    event.shaped("nuclearcraft:fuel_uranium_leu_235", ["ABB", "BBB", "BBB"], { A: "gtceu:uranium_235_ingot", B: "gtceu:uranium_ingot" })
    event.shaped("nuclearcraft:fuel_uranium_heu_235", ["AAA", "ABB", "BBB"], { A: "gtceu:uranium_235_ingot", B: "gtceu:uranium_ingot" })
    event.shaped("nuclearcraft:fuel_neptunium_len_236", ["ABB", "BBB", "BBB"], { A: "nuclearcraft:neptunium_236", B: "nuclearcraft:neptunium_237" })
    event.shaped("nuclearcraft:fuel_neptunium_hen_236", ["AAA", "ABB", "BBB"], { A: "nuclearcraft:neptunium_236", B: "nuclearcraft:neptunium_237" })
    event.shaped("nuclearcraft:fuel_plutonium_lep_239", ["ABB", "BBB", "BBB"], { A: "gtceu:plutonium_ingot", B: "nuclearcraft:plutonium_242" })
    event.shaped("nuclearcraft:fuel_plutonium_hep_239", ["AAA", "ABB", "BBB"], { A: "gtceu:plutonium_ingot", B: "nuclearcraft:plutonium_242" })
    event.shaped("nuclearcraft:fuel_plutonium_lep_241", ["ABB", "BBB", "BBB"], { A: "gtceu:plutonium_241_ingot", B: "nuclearcraft:plutonium_242" })
    event.shaped("nuclearcraft:fuel_plutonium_hep_241", ["AAA", "ABB", "BBB"], { A: "gtceu:plutonium_241_ingot", B: "nuclearcraft:plutonium_242" })
    event.shaped("nuclearcraft:fuel_americium_lea_242", ["ABB", "BBB", "BBB"], { A: "nuclearcraft:americium_242", B: "nuclearcraft:americium_243" })
    event.shaped("nuclearcraft:fuel_americium_hea_242", ["AAA", "ABB", "BBB"], { A: "nuclearcraft:americium_242", B: "nuclearcraft:americium_243" })

    event.recipes.gtceu.distillery("distill_tech_water")
        .inputFluids("gtceu:distilled_water 20")
        .circuit(5)
        .outputFluids("nuclearcraft:technical_water 20")
        .duration(20).EUt(120)

    function rtg(name, input) {
        event.remove({ output: `nuclearcraft:${name}_rtg` })
        event.recipes.gtceu.assembler(name)
            .itemInputs("4x gtceu:graphite_plate", "4x nuclearcraft:plate_advanced", `4x ${input}`)
            .itemOutputs(`nuclearcraft:${name}_rtg`)
            .duration(200)
            .EUt(1920)
    }

    rtg("americium", "nuclearcraft:americium_241")
    rtg("plutonium", "nuclearcraft:plutonium_238")
    rtg("uranium", "nuclearcraft:uranium_233")
    rtg("californium", "nuclearcraft:californium_250")

    function coils(name) {
        event.remove({ output: `nuclearcraft:coil_${name}` })
        event.recipes.gtceu.assembler(name)
            .itemInputs("1x gtceu:magnetic_steel_rod", `16x gtceu:fine_${name}_wire`)
            .itemOutputs(`nuclearcraft:coil_${name}`)
            .circuit(1)
            .duration(200)
            .EUt(480)
    }

    coils("copper")
    coils("magnesium_diboride")

    event.replaceInput({ input: "nuclearcraft:bioplastic" }, "nuclearcraft:bioplastic", "#forge:plastic_plates")
    event.replaceInput({ input: "nuclearcraft:basic_electronic_circuit" }, "nuclearcraft:basic_electric_circuit", "#gtceu:circuits/hv")
    event.replaceInput({ input: "nuclearcraft:gelatin" }, "nuclearcraft:gelatin", "#forge:rubber_plates")
    event.replaceInput({ input: "nuclearcraft:lithium_ion_cell" }, "nuclearcraft:lithium_ion_cell", "#gtceu:batteries/hv")
    event.replaceInput({ output: /nuclearcraft:hev/ }, "nuclearcraft:plate_extreme", "nuclearcraft:plate_advanced")

    event.remove({ id: "nuclearcraft:heavy_shielding" })
    event.shaped("nuclearcraft:heavy", [
        "BBB",
        "MPM",
        "DDD"
    ], {
        B: "#forge:plates/beryllium",
        M: "nuclearcraft:medium",
        P: "#forge:plastic_plates",
        D: "nuclearcraft:plate_du"
    })

    // Fix fission boiling recipe
    event.custom(
        {
            "type": "nuclearcraft:fission_boiling",
            "heatRequired": 1.0,
            "inputFluids": [
                {
                    "amount": 1,
                    "tag": "minecraft:water"
                }
            ],
            "outputFluids": [
                {
                    "amount": 160,
                    "fluid": "gtceu:steam"
                }
            ]
        }
    ).id("nuclearcraft:fission_boiling/water-steam")

    // High Pressure Steam Turbine recipe.
    // High Pressure steam is 16x more energy dense than regular steam,
    // and is 60% more efficient on the fuel spent to get that energy
    event.recipes.gtceu.steam_turbine("high_pressure_steam")
        .inputFluids("nuclearcraft:high_pressure_steam 40")
        .outputFluids("nuclearcraft:technical_water 40")
        .duration(0.5 * 20)
        .EUt(-GTValues.V[GTValues.LV])
});

ServerEvents.tags("item", event => {

    event.add("forge:plastic_plates", "gtceu:polyvinyl_chloride_plate")
    event.add("forge:plastic_plates", "gtceu:polybenzimidazole_plate")
    event.add("forge:plastic_plates", "gtceu:polyethylene_plate")
    event.add("forge:plastic_plates", "gtceu:polytetrafluoroethylene_plate")
    event.add("forge:plastic_plates", "gtceu:polyethyl_cyanoacrylate_plate")

    event.add("forge:rubber_plates", "gtceu:silicone_rubber_plate")
    event.add("forge:rubber_plates", "gtceu:styrene_butadiene_rubber_plate")
    event.add("forge:rubber_plates", "gtceu:rubber_plate")
});
