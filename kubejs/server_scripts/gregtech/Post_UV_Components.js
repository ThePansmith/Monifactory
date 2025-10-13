/**
 * Recipes for post-UV GT components
 */

ServerEvents.recipes(event => {
    const converter = [
        ["uev", "cable", "darconite", "hyperdegenerate_darconite", 1966080],
        ["max", "wire", "monium", "monium", 80000000],
    ]
    const transformer = [
        ["uhv", "darconite", "lanthanum_gold_cadmium_curium_sulfate"],
        ["uev", "necrosiderite", "darconite"]
    ]

    converter.forEach(([tier, mat1, mat2, mat3, eut]) => {
        event.remove({ output: [`gtceu:${tier}_1a_energy_converter`, `gtceu:${tier}_4a_energy_converter`, `gtceu:${tier}_8a_energy_converter`, `gtceu:${tier}_16a_energy_converter`] })
        event.shaped(Item.of(`gtceu:${tier}_1a_energy_converter`), [
            " BB",
            "AHC",
            " BB"
        ], {
            A: "gtceu:red_alloy_single_cable",
            B: `gtceu:${mat2}_single_${mat1}`,
            H: `gtceu:${tier}_machine_hull`,
            C: `#gtceu:circuits/${tier}`
        })


        event.shaped(Item.of(`gtceu:${tier}_4a_energy_converter`), [
            " BB",
            "AHC",
            " BB"
        ], {
            A: "gtceu:red_alloy_quadruple_cable",
            B: `gtceu:${mat2}_quadruple_${mat1}`,
            H: `gtceu:${tier}_machine_hull`,
            C: `#gtceu:circuits/${tier}`
        })

        event.shaped(Item.of(`gtceu:${tier}_8a_energy_converter`), [
            " BB",
            "AHC",
            " BB"
        ], {
            A: "gtceu:red_alloy_octal_cable",
            B: `gtceu:${mat2}_octal_${mat1}`,
            H: `gtceu:${tier}_machine_hull`,
            C: `#gtceu:circuits/${tier}`
        })

        event.shaped(Item.of(`gtceu:${tier}_16a_energy_converter`), [
            " BB",
            "AHC",
            " BB"
        ], {
            A: "gtceu:red_alloy_hex_cable",
            B: `gtceu:${mat2}_hex_${mat1}`,
            H: `gtceu:${tier}_machine_hull`,
            C: `#gtceu:circuits/${tier}`
        })
    })

    transformer.forEach(([tier, mat1, mat2]) => {
        event.shaped(Item.of(`gtceu:${tier}_transformer_1a`), [
            "WBB",
            "AH ",
            "WBB"
        ], {
            A: `gtceu:${mat1}_single_cable`,
            B: `gtceu:${mat2}_single_cable`,
            H: `gtceu:${tier}_machine_hull`,
            W: "kubejs:uxpic_chip"
        })

        event.shaped(Item.of(`gtceu:${tier}_transformer_2a`), [
            "WBB",
            "AH ",
            "WBB"
        ], {
            A: `gtceu:${mat1}_double_cable`,
            B: `gtceu:${mat2}_double_cable`,
            H: `gtceu:${tier}_machine_hull`,
            W: "kubejs:uxpic_chip"
        })

        event.shaped(Item.of(`gtceu:${tier}_transformer_4a`), [
            "WBB",
            "AH ",
            "WBB"
        ], {
            A: `gtceu:${mat1}_quadruple_cable`,
            B: `gtceu:${mat2}_quadruple_cable`,
            H: `gtceu:${tier}_machine_hull`,
            W: "kubejs:uxpic_chip"
        })

        event.shaped(Item.of(`gtceu:${tier}_transformer_16a`), [
            "WBB",
            "AH ",
            "WBB"
        ], {
            A: `gtceu:${mat1}_hex_cable`,
            B: `gtceu:${mat2}_hex_cable`,
            H: `gtceu:${tier}_machine_hull`,
            W: "gtceu:uhpic_chip"
        })
    })

    // UHV components
    const plateFix = [
        /gtceu:.*casing_uhv/,
        "gtceu:shaped/hermetic_casing_max",
        /gtceu:shaped\/quantum_.*_uhv/
    ]
    plateFix.forEach((value) => {
        event.replaceInput({ id: `${value}`}, "gtceu:neutronium_plate", "gtceu:manyullyn_plate" )
    })

    const hullMaterials = [
        { tier: "uev", material1: "gtceu:infinity", material2: "monilabs:sculk_bioalloy", wire: "darconite_single_cable", plastic: "polyethyl_cyanoacrylate" },
        { tier: "max", material1: "gtceu:monium", material2: "gtceu:meta_null", wire: "monium_single_wire", plastic: "polyethyl_cyanoacrylate" },
    ]

    hullMaterials.forEach((value) => {
        event.shaped(`gtceu:${value.tier}_machine_casing`, [
            "QPQ",
            "PWP",
            "QPQ"
        ], {
            P: `${value.material1}_plate`,
            Q: `${value.material2}_plate`,
            W: "#forge:tools/wrenches"
        }).id(`shaped/casing_${value.tier}`)

        event.recipes.gtceu.assembler(`casing_${value.tier}`)
            .itemInputs(`4x ${value.material1}_plate`, `4x ${value.material2}_plate`)
            .itemOutputs(`gtceu:${value.tier}_machine_casing`)
            .circuit(8)
            .duration(50)
            .EUt(GTValues.VHA[GTValues.LV])

        event.recipes.gtceu.assembler(`hull_${value.tier}`)
            .itemInputs(`gtceu:${value.tier}_machine_casing`, `2x gtceu:${value.wire}`)
            .inputFluids(`gtceu:${value.plastic} 288`)
            .itemOutputs(`gtceu:${value.tier}_machine_hull`)
            .duration(50)
            .EUt(GTValues.VHA[GTValues.LV])
    })

    const rotorHolderMaterials = [
        { tier: "uhv", large_gear: "actinium", small_gear: "manyullyn" },
        { tier: "uev", large_gear: "sculk_bioalloy", small_gear: "infinity" },
    ]

    rotorHolderMaterials.forEach((value) => {
        event.shaped(`gtceu:${value.tier}_rotor_holder`, [
            "SLS",
            "LHL",
            "SLS"
        ], {
            S: `gtceu:small_${value.small_gear}_gear`,
            L: `gtceu:${value.large_gear}_gear`,
            H: `gtceu:${value.tier}_machine_hull`
        }).id(`shaped/rotor_holder_${value.tier}`)
    })

    // Voltage Coils
    event.recipes.gtceu.assembler("uhv_voltage_coil")
        .itemInputs("gtceu:magnetic_terbium_rod", "16x gtceu:fine_darconite_wire")
        .itemOutputs("kubejs:uhv_voltage_coil")
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])
    event.recipes.gtceu.assembler("uev_voltage_coil")
        .itemInputs("gtceu:magnetic_terbium_rod", "16x gtceu:fine_necrosiderite_wire")
        .itemOutputs("kubejs:uev_voltage_coil")
        .circuit(1)
        .duration(200)
        .EUt(GTValues.VA[GTValues.UEV])

    // Dynamo Hatches
    event.remove({ id:"gtceu:assembly_line/dynamo_hatch_uhv"})
    event.recipes.gtceu.assembly_line("dynamo_hatch_uhv")
        .itemInputs("gtceu:uhv_machine_hull", "4x gtceu:europium_spring", "16x gtceu:uhpic_chip", "#gtceu:circuits/uhv", "2x kubejs:uhv_voltage_coil")
        .inputFluids("gtceu:sodium_potassium 12000", "gtceu:advanced_soldering_alloy 576")
        .itemOutputs("gtceu:uhv_energy_output_hatch")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b
            .researchStack("gtceu:uv_energy_output_hatch")
            .CWUt(96, 384000)
            .EUt(GTValues.VA[GTValues.UV])
        )

    event.recipes.gtceu.assembly_line("dynamo_hatch_uev")
        .itemInputs("gtceu:uev_machine_hull", "4x gtceu:darconite_spring", "16x kubejs:uxpic_chip", "#gtceu:circuits/uev", "2x kubejs:uev_voltage_coil")
        .inputFluids("gtceu:sodium_potassium 12000", "gtceu:omnium 1152", "gtceu:advanced_soldering_alloy 576")
        .itemOutputs("gtceu:uev_energy_output_hatch")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b
            .researchStack("gtceu:uhv_energy_output_hatch")
            .CWUt(128, 512000)
            .EUt(GTValues.VA[GTValues.UHV])
        )

    event.recipes.gtceu.assembly_line("dynamo_hatch_max")
        .itemInputs("gtceu:max_machine_hull", "4x gtceu:monium_spring", "16x kubejs:uxpic_chip", "#gtceu:circuits/max")
        .inputFluids("gtceu:sodium_potassium 12000", "gtceu:omnium 1152", "gtceu:living_soldering_alloy 576")
        .itemOutputs("gtceu:max_energy_output_hatch")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UIV])
        .stationResearch(b => b
            .researchStack("gtceu:uev_energy_output_hatch")
            .CWUt(160, 640000)
            .EUt(GTValues.VA[GTValues.UEV])
        )

    // Energy Hatches
    event.remove({ id:"gtceu:assembly_line/energy_hatch_uhv"})
    event.recipes.gtceu.assembly_line("energy_hatch_uhv")
        .itemInputs("gtceu:uhv_machine_hull", "4x gtceu:europium_single_cable", "16x gtceu:uhpic_chip", "#gtceu:circuits/uhv", "2x kubejs:uhv_voltage_coil")
        .inputFluids("gtceu:sodium_potassium 12000", "gtceu:advanced_soldering_alloy 576")
        .itemOutputs("gtceu:uhv_energy_input_hatch")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b
            .researchStack("gtceu:uv_energy_input_hatch")
            .CWUt(96, 384000)
            .EUt(GTValues.VA[GTValues.UV])
        )

    event.recipes.gtceu.assembly_line("energy_hatch_uev")
        .itemInputs("gtceu:uev_machine_hull", "4x gtceu:darconite_single_cable", "16x kubejs:uxpic_chip", "#gtceu:circuits/uev", "2x kubejs:uev_voltage_coil")
        .inputFluids("gtceu:sodium_potassium 12000", "gtceu:omnium 1152", "gtceu:advanced_soldering_alloy 576")
        .itemOutputs("gtceu:uev_energy_input_hatch")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UEV])
        .stationResearch(b => b
            .researchStack("gtceu:uhv_energy_input_hatch")
            .CWUt(128, 512000)
            .EUt(GTValues.VA[GTValues.UHV])
        )

    event.recipes.gtceu.assembly_line("energy_hatch_max")
        .itemInputs("gtceu:max_machine_hull", "4x gtceu:monium_single_wire", "16x kubejs:uxpic_chip", "#gtceu:circuits/max")
        .inputFluids("gtceu:sodium_potassium 12000", "gtceu:omnium 1152", "gtceu:living_soldering_alloy 576")
        .itemOutputs("gtceu:max_energy_input_hatch")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UIV])
        .stationResearch(b => b
            .researchStack("gtceu:uev_energy_input_hatch")
            .CWUt(160, 640000)
            .EUt(GTValues.VA[GTValues.UEV])
        )

    // Motors
    event.recipes.gtceu.assembly_line("uhv_motor")
        .itemInputs("gtceu:long_magnetic_terbium_rod", "8x gtceu:long_actinium_rod", "8x gtceu:actinium_ring", "16x gtceu:actinium_round", "64x gtceu:fine_darconite_wire", "64x gtceu:fine_darconite_wire", "32x gtceu:fine_darconite_wire", "2x gtceu:europium_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:lubricant 2000", "monilabs:crystal_matrix 576")

        .itemOutputs("gtceu:uhv_electric_motor")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_electric_motor")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_motor")
        .itemInputs("gtceu:long_magnetic_terbium_rod", "8x monilabs:long_sculk_bioalloy_rod", "8x monilabs:sculk_bioalloy_ring", "16x monilabs:sculk_bioalloy_round", "64x gtceu:fine_necrosiderite_wire", "64x gtceu:fine_necrosiderite_wire", "48x gtceu:fine_necrosiderite_wire", "2x gtceu:darconite_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:lubricant 3000", "gtceu:neutronium 576")
        .itemOutputs("gtceu:uev_electric_motor")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_electric_motor")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    // Pistons
    event.recipes.gtceu.assembly_line("uhv_piston")
        .itemInputs("gtceu:uhv_electric_motor", "4x gtceu:actinium_plate", "4x gtceu:actinium_ring", "16x gtceu:actinium_round", "4x gtceu:actinium_rod", "gtceu:actinium_gear", "2x gtceu:small_actinium_gear", "2x gtceu:europium_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:lubricant 2000", "monilabs:crystal_matrix 576")
        .itemOutputs("gtceu:uhv_electric_piston")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_electric_piston")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_piston")
        .itemInputs("gtceu:uev_electric_motor", "4x monilabs:sculk_bioalloy_plate", "4x monilabs:sculk_bioalloy_ring", "16x monilabs:sculk_bioalloy_round", "4x monilabs:sculk_bioalloy_rod", "monilabs:sculk_bioalloy_gear", "2x monilabs:small_sculk_bioalloy_gear", "2x gtceu:darconite_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:lubricant 3000", "gtceu:neutronium 576")
        .itemOutputs("gtceu:uev_electric_piston")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_electric_piston")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    // Robot Arms
    event.recipes.gtceu.assembly_line("uhv_robot_arm")
        .itemInputs("4x gtceu:long_actinium_rod", "gtceu:actinium_gear", "3x gtceu:small_actinium_gear", "3x gtceu:uhv_electric_motor", "gtceu:uhv_electric_piston", "#gtceu:circuits/uhv", "2x #gtceu:circuits/uv", "4x #gtceu:circuits/zpm", "4x gtceu:europium_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:lubricant 2000", "monilabs:crystal_matrix 576")
        .itemOutputs("gtceu:uhv_robot_arm")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_robot_arm")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_robot_arm")
        .itemInputs("4x monilabs:long_sculk_bioalloy_rod", "monilabs:sculk_bioalloy_gear", "3x monilabs:small_sculk_bioalloy_gear", "3x gtceu:uev_electric_motor", "gtceu:uev_electric_piston", "#gtceu:circuits/uev", "2x #gtceu:circuits/uhv", "4x #gtceu:circuits/uv", "4x gtceu:darconite_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:lubricant 3000", "gtceu:neutronium 576")
        .itemOutputs("gtceu:uev_robot_arm")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_robot_arm")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    // Sensors
    event.recipes.gtceu.assembly_line("uhv_sensor")
        .itemInputs("gtceu:manyullyn_frame", "gtceu:uhv_electric_motor", "4x gtceu:actinium_plate", "2x gtceu:gravi_star", "#gtceu:circuits/uhv", "64x monilabs:crystal_matrix_foil", "32x monilabs:crystal_matrix_foil", "4x gtceu:europium_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "monilabs:crystal_matrix 576")
        .itemOutputs("gtceu:uhv_sensor")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_sensor")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_sensor")
        .itemInputs("monilabs:sculk_bioalloy_frame", "gtceu:uev_electric_motor", "4x monilabs:sculk_bioalloy_plate", "kubejs:quasi_stable_neutron_star", "#gtceu:circuits/uev", "64x monilabs:transcendental_matrix_foil", "32x monilabs:transcendental_matrix_foil", "4x gtceu:darconite_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:neutronium 576")
        .itemOutputs("gtceu:uev_sensor")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_sensor")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    // Emitters
    event.recipes.gtceu.assembly_line("uhv_emitter")
        .itemInputs("gtceu:manyullyn_frame", "gtceu:uhv_electric_motor", "4x gtceu:long_actinium_rod", "2x gtceu:gravi_star", "#gtceu:circuits/uhv", "64x monilabs:crystal_matrix_foil", "32x monilabs:crystal_matrix_foil", "4x gtceu:europium_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "monilabs:crystal_matrix 576")
        .itemOutputs("gtceu:uhv_emitter")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_emitter")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_emitter")
        .itemInputs("monilabs:sculk_bioalloy_frame", "gtceu:uev_electric_motor", "4x monilabs:long_sculk_bioalloy_rod", "kubejs:quasi_stable_neutron_star", "#gtceu:circuits/uev", "64x monilabs:transcendental_matrix_foil", "32x monilabs:transcendental_matrix_foil", "4x gtceu:darconite_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:neutronium 576")
        .itemOutputs("gtceu:uev_emitter")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_emitter")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    // Field Generators
    event.recipes.gtceu.assembly_line("uhv_field_generator")
        .itemInputs("gtceu:manyullyn_frame", "6x gtceu:actinium_plate", "2x gtceu:gravi_star", "2x gtceu:uhv_emitter", "2x #gtceu:circuits/uhv", "64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire", "64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire", "4x gtceu:europium_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "monilabs:crystal_matrix 576")
        .itemOutputs("gtceu:uhv_field_generator")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_field_generator")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_field_generator")
        .itemInputs("monilabs:sculk_bioalloy_frame", "6x monilabs:sculk_bioalloy_plate", "kubejs:quasi_stable_neutron_star", "2x gtceu:uev_emitter", "2x #gtceu:circuits/uev", "64x gtceu:fine_hyperdegenerate_darconite_wire", "64x gtceu:fine_hyperdegenerate_darconite_wire", "4x gtceu:darconite_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:neutronium 576")
        .itemOutputs("gtceu:uev_field_generator")
        .duration(600)
        .EUt(1966080)


        .stationResearch(b => b
            .researchStack("gtceu:uhv_field_generator")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    // Conveyors
    event.recipes.gtceu.assembly_line("uhv_conveyor")
        .itemInputs("2x gtceu:uhv_electric_motor", "2x gtceu:actinium_plate", "4x gtceu:actinium_ring", "16x gtceu:actinium_round", "4x gtceu:actinium_screw", "2x gtceu:europium_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:lubricant 2000", "gtceu:styrene_butadiene_rubber 5760", "monilabs:crystal_matrix 576")
        .itemOutputs("gtceu:uhv_conveyor_module")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_conveyor_module")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_conveyor")
        .itemInputs("2x gtceu:uev_electric_motor", "2x monilabs:sculk_bioalloy_plate", "4x monilabs:sculk_bioalloy_ring", "16x monilabs:sculk_bioalloy_round", "4x monilabs:sculk_bioalloy_screw", "2x gtceu:darconite_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:lubricant 3000", "gtceu:styrene_butadiene_rubber 5760", "gtceu:neutronium 576")
        .itemOutputs("gtceu:uev_conveyor_module")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_conveyor_module")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    // Pumps
    event.recipes.gtceu.assembly_line("uhv_pump")
        .itemInputs("gtceu:uhv_electric_motor", "gtceu:neutronium_large_fluid_pipe", "2x gtceu:actinium_plate", "8x gtceu:actinium_screw", "16x gtceu:silicone_rubber_ring", "gtceu:neutronium_rotor", "2x gtceu:europium_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:lubricant 2000", "monilabs:crystal_matrix 576")
        .itemOutputs("gtceu:uhv_electric_pump")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_electric_pump")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_pump")
        .itemInputs("gtceu:uev_electric_motor", "gtceu:meta_null_large_fluid_pipe", "2x monilabs:sculk_bioalloy_plate", "8x monilabs:sculk_bioalloy_screw", "16x gtceu:silicone_rubber_ring", "gtceu:meta_null_rotor", "2x gtceu:darconite_single_cable")
        .inputFluids("gtceu:advanced_soldering_alloy 5760", "gtceu:lubricant 3000", "gtceu:neutronium 576")
        .itemOutputs("gtceu:uev_electric_pump")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_electric_pump")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    // Fluid Regulators
    event.recipes.gtceu.assembler("uhv_fluid_regulator")
        .itemInputs("gtceu:uhv_electric_pump", "2x #gtceu:circuits/uhv")
        .circuit(1)
        .itemOutputs("gtceu:uhv_fluid_regulator")
        .duration(50)
        .EUt(1966080)

    event.recipes.gtceu.assembler("uev_fluid_regulator")
        .itemInputs("gtceu:uev_electric_pump", "2x #gtceu:circuits/uev")
        .circuit(1)
        .itemOutputs("gtceu:uev_fluid_regulator")
        .duration(50)
        .EUt(3932160)

    // Cables
    // UHV+ cables are made only with SBR and PEEK, UHV cables require neutronium, UEV+ cables require meta_null
    const endgameCables = ["europium", "lanthanum_gold_cadmium_curium_sulfate", "omnium", "darconite", "necrosiderite"];
    const cablematsUEV = ["omnium", "darconite", "necrosiderite"];

    endgameCables.forEach(mat => event.remove({ id: new RegExp(`cover_${mat}_wire_gt_.*_silicone`) }));
    endgameCables.forEach(mat => event.replaceInput({ id: new RegExp(`cover_${mat}_wire_gt_.*_styrene_butadiene`) }, "gtceu:polyvinyl_chloride_foil", "gtceu:polyether_ether_ketone_foil"));
    endgameCables.forEach(mat => event.replaceInput({ id: new RegExp(`cover_${mat}_wire_gt_.*_styrene_butadiene`) }, "gtceu:polyphenylene_sulfide_foil", "gtceu:neutronium_foil"));
    cablematsUEV.forEach(mat => event.replaceInput({ id: new RegExp(`cover_${mat}_wire_gt_.*_styrene_butadiene`) }, "gtceu:neutronium_foil", "gtceu:meta_null_foil"));
})
