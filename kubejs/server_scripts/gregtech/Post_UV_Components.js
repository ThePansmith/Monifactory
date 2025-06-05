/**
 * Recipes for post-UV GT components
 */

ServerEvents.recipes(event => {
    const converter = [
        ["uev", "cable", "darconite", "darconite", "1966080"],
        ["uiv", "cable", "necrosiderite", "necrosiderite", "3932160"],
        ["max", "wire", "monium", "monium", "80000000"],
    ]
    const transformer = [
        ["uhv", "europium", "omnium"],
        ["uev", "omnium", "necrosiderite"],
        ["uiv", "necrosiderite", "necrosiderite"],
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


        event.recipes.gtceu.assembly_line(`gtceu:${tier}_energy_output_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, `4x gtceu:${mat2}_spring`, "2x kubejs:uxpic_chip", `#gtceu:circuits/${tier}`, `2x gtceu:${mat3}_double_wire`)
            .itemOutputs(`gtceu:${tier}_energy_output_hatch`)
            .inputFluids("gtceu:crystal_matrix 11520", "gtceu:soldering_alloy 5760")
            .duration(1000)
            .EUt(eut)

        event.recipes.gtceu.assembly_line(`gtceu:${tier}_energy_input_hatch`)
            .itemInputs(`gtceu:${tier}_machine_hull`, `4x gtceu:${mat2}_single_${mat1}`, "16x kubejs:uxpic_chip", `#gtceu:circuits/${tier}`, `2x gtceu:${mat3}_double_wire`)
            .itemOutputs(`gtceu:${tier}_energy_input_hatch`)
            .inputFluids("gtceu:sodium_potassium 12000", "gtceu:omnium 1152", "gtceu:soldering_alloy 576")
            .duration(100)
            .EUt(eut)
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
        { tier: "uev", material: "omnium", wire: "darconite_single_cable", plastic: "polyethyl_cyanoacrylate" },
        { tier: "uiv", material: "infinity", wire: "necrosiderite_single_cable", plastic: "polyethyl_cyanoacrylate" },
        { tier: "max", material: "monium", wire: "monium_single_wire", plastic: "polyethyl_cyanoacrylate" },
    ]

    hullMaterials.forEach((value) => {
        event.shaped(`gtceu:${value.tier}_machine_casing`, [
            "PPP",
            "PWP",
            "PPP"
        ], {
            P: `gtceu:${value.material}_plate`,
            W: "#forge:tools/wrenches"
        }).id(`shaped/casing_${value.tier}`)

        event.recipes.gtceu.assembler(`casing_${value.tier}`)
            .itemInputs(`8x gtceu:${value.material}_plate`)
            .itemOutputs(`gtceu:${value.tier}_machine_casing`)
            .circuit(8)
            .duration(50)
            .EUt(GTValues.VHA[GTValues.LV])

        event.recipes.gtceu.assembler(`hull_${value.tier}`)
            .itemInputs(`gtceu:${value.tier}_machine_casing`, `2x gtceu:${value.wire}`, `2x gtceu:${value.plastic}_plate`)
            .itemOutputs(`gtceu:${value.tier}_machine_hull`)
            .duration(50)
            .EUt(GTValues.VHA[GTValues.LV])
    })

    event.shaped("gtceu:max_machine_hull", [
        "PMP",
        "WCW"
    ], {
        P: "gtceu:monium_plate",
        M: "gtceu:monium_plate",
        W: "gtceu:monium_single_wire",
        C: "gtceu:max_machine_casing"
    }).id("shaped/hull_max")


    const rotorHolderMaterials = [
        { tier: "uhv", large_gear: "actinium", small_gear: "manyullyn" },
        { tier: "uev", large_gear: "sculk_bioalloy", small_gear: "omnium" },
        { tier: "uiv", large_gear: "eltz", small_gear: "infinity" }
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

    // Motors
    event.recipes.gtceu.assembly_line("uhv_motor")
        .itemInputs("gtceu:long_magnetic_iron_neodymium_terbium_neutronate_rod", "8x gtceu:long_actinium_rod", "8x gtceu:actinium_ring", "16x gtceu:actinium_round", "64x gtceu:fine_darconite_wire", "64x gtceu:fine_darconite_wire", "32x gtceu:fine_darconite_wire", "2x gtceu:europium_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 2000", "gtceu:crystal_matrix 1152", "gtceu:naquadria 576")
        .itemOutputs("gtceu:uhv_electric_motor")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_electric_motor")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_motor")
        .itemInputs("gtceu:long_magnetic_iron_neodymium_terbium_neutronate_rod", "8x gtceu:long_sculk_bioalloy_rod", "8x gtceu:sculk_bioalloy_ring", "16x gtceu:sculk_bioalloy_round", "64x gtceu:fine_activated_netherite_wire", "64x gtceu:fine_activated_netherite_wire", "48x gtceu:fine_activated_netherite_wire", "2x gtceu:darconite_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 3000", "gtceu:crystal_matrix 5760", "gtceu:naquadria 1152")
        .itemOutputs("gtceu:uev_electric_motor")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_electric_motor")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line("uiv_motor")
        .itemInputs("gtceu:long_magnetic_iron_neodymium_terbium_neutronate_rod", "12x gtceu:long_eltz_rod", "12x gtceu:eltz_ring", "24x gtceu:eltz_round", "64x gtceu:fine_necrosiderite_wire", "64x gtceu:fine_necrosiderite_wire", "64x gtceu:fine_necrosiderite_wire", "2x gtceu:necrosiderite_single_cable")
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:lubricant 4000", "gtceu:crystal_matrix 5760", "gtceu:naquadria 2304")
        .itemOutputs("gtceu:uiv_electric_motor")
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack("gtceu:uev_electric_motor")
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Pistons
    event.recipes.gtceu.assembly_line("uhv_piston")
        .itemInputs("gtceu:uhv_electric_motor", "4x gtceu:actinium_plate", "4x gtceu:actinium_ring", "16x gtceu:actinium_round", "4x gtceu:actinium_rod", "gtceu:actinium_gear", "2x gtceu:small_actinium_gear", "2x gtceu:europium_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 2000", "gtceu:crystal_matrix 1152", "gtceu:naquadria 576")
        .itemOutputs("gtceu:uhv_electric_piston")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_electric_piston")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_piston")
        .itemInputs("gtceu:uev_electric_motor", "4x gtceu:sculk_bioalloy_plate", "4x gtceu:sculk_bioalloy_ring", "16x gtceu:sculk_bioalloy_round", "4x gtceu:sculk_bioalloy_rod", "gtceu:sculk_bioalloy_gear", "2x gtceu:small_sculk_bioalloy_gear", "2x gtceu:darconite_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 3000", "gtceu:crystal_matrix 5760", "gtceu:naquadria 1152")
        .itemOutputs("gtceu:uev_electric_piston")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_electric_piston")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line("uiv_piston")
        .itemInputs("gtceu:uiv_electric_motor", "4x gtceu:eltz_plate", "4x gtceu:eltz_ring", "16x gtceu:eltz_round", "4x gtceu:eltz_rod", "gtceu:eltz_gear", "2x gtceu:small_eltz_gear", "2x gtceu:necrosiderite_single_cable")
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:lubricant 4000", "gtceu:crystal_matrix 5760", "gtceu:naquadria 2304")
        .itemOutputs("gtceu:uiv_electric_piston")
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack("gtceu:uev_electric_piston")
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Robot Arms
    event.recipes.gtceu.assembly_line("uhv_robot_arm")
        .itemInputs("4x gtceu:long_actinium_rod", "gtceu:actinium_gear", "3x gtceu:small_actinium_gear", "3x gtceu:uhv_electric_motor", "gtceu:uhv_electric_piston", "#gtceu:circuits/uhv", "2x #gtceu:circuits/uv", "4x #gtceu:circuits/zpm", "4x gtceu:europium_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 2000", "gtceu:crystal_matrix 1152", "gtceu:naquadria 576")
        .itemOutputs("gtceu:uhv_robot_arm")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_robot_arm")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_robot_arm")
        .itemInputs("4x gtceu:long_sculk_bioalloy_rod", "gtceu:sculk_bioalloy_gear", "3x gtceu:small_sculk_bioalloy_gear", "3x gtceu:uev_electric_motor", "gtceu:uev_electric_piston", "#gtceu:circuits/uev", "2x #gtceu:circuits/uhv", "4x #gtceu:circuits/uv", "4x gtceu:darconite_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 3000", "gtceu:crystal_matrix 5760", "gtceu:naquadria 1152")
        .itemOutputs("gtceu:uev_robot_arm")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_robot_arm")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line("uiv_robot_arm")
        .itemInputs("4x gtceu:long_eltz_rod", "gtceu:eltz_gear", "3x gtceu:small_eltz_gear", "3x gtceu:uiv_electric_motor", "gtceu:uiv_electric_piston", "#gtceu:circuits/uiv", "2x #gtceu:circuits/uev", "4x #gtceu:circuits/uhv", "4x gtceu:necrosiderite_single_cable")
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:lubricant 4000", "gtceu:crystal_matrix 5760", "gtceu:naquadria 2304")
        .itemOutputs("gtceu:uiv_robot_arm")
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack("gtceu:uev_robot_arm")
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Sensors
    event.recipes.gtceu.assembly_line("uhv_sensor")
        .itemInputs("gtceu:manyullyn_frame", "gtceu:uhv_electric_motor", "4x gtceu:actinium_plate", "2x gtceu:gravi_star", "#gtceu:circuits/uhv", "64x gtceu:crystal_matrix_foil", "32x gtceu:crystal_matrix_foil", "4x gtceu:europium_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:crystal_matrix 1152", "gtceu:naquadria 576")
        .itemOutputs("gtceu:uhv_sensor")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_sensor")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_sensor")
        .itemInputs("gtceu:omnium_frame", "gtceu:uev_electric_motor", "4x gtceu:sculk_bioalloy_plate", "kubejs:quasi_stable_neutron_star", "#gtceu:circuits/uev", "64x gtceu:crystal_matrix_foil", "32x gtceu:crystal_matrix_foil", "4x gtceu:darconite_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:crystal_matrix 5760", "gtceu:naquadria 1152")
        .itemOutputs("gtceu:uev_sensor")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_sensor")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line("uiv_sensor")
        .itemInputs("gtceu:infinity_frame", "gtceu:uiv_electric_motor", "4x gtceu:eltz_plate", "2x kubejs:quasi_stable_neutron_star", "#gtceu:circuits/uiv", "64x gtceu:crystal_matrix_foil", "32x gtceu:crystal_matrix_foil", "4x gtceu:necrosiderite_single_cable")
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:crystal_matrix 5760", "gtceu:naquadria 2304")
        .itemOutputs("gtceu:uiv_sensor")
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack("gtceu:uev_sensor")
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Emitters
    event.recipes.gtceu.assembly_line("uhv_emitter")
        .itemInputs("gtceu:manyullyn_frame", "gtceu:uhv_electric_motor", "4x gtceu:long_actinium_rod", "2x gtceu:gravi_star", "#gtceu:circuits/uhv", "64x gtceu:crystal_matrix_foil", "32x gtceu:crystal_matrix_foil", "4x gtceu:europium_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:crystal_matrix 1152", "gtceu:naquadria 576")
        .itemOutputs("gtceu:uhv_emitter")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_emitter")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_emitter")
        .itemInputs("gtceu:omnium_frame", "gtceu:uev_electric_motor", "4x gtceu:long_sculk_bioalloy_rod", "kubejs:quasi_stable_neutron_star", "#gtceu:circuits/uev", "64x gtceu:lutetium_foil", "32x gtceu:lutetium_foil", "4x gtceu:darconite_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:crystal_matrix 5760", "gtceu:naquadria 1152")
        .itemOutputs("gtceu:uev_emitter")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_emitter")
            .CWUt(128, 512000)
            .EUt(524288)
        )


    event.recipes.gtceu.assembly_line("uiv_emitter")
        .itemInputs("gtceu:infinity_frame", "gtceu:uiv_electric_motor", "4x gtceu:long_eltz_rod", "2x kubejs:quasi_stable_neutron_star", "#gtceu:circuits/uiv", "64x gtceu:neutronium_foil", "32x gtceu:neutronium_foil", "4x gtceu:necrosiderite_single_cable")
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:crystal_matrix 5760", "gtceu:naquadria 2304")
        .itemOutputs("gtceu:uiv_emitter")
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack("gtceu:uev_emitter")
            .CWUt(144, 576000)
            .EUt(1048576)
        )


    // Field Generators
    event.recipes.gtceu.assembly_line("uhv_field_generator")
        .itemInputs("gtceu:manyullyn_frame", "6x gtceu:actinium_plate", "2x gtceu:gravi_star", "2x gtceu:uhv_emitter", "2x #gtceu:circuits/uhv", "64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire", "64x gtceu:fine_ruthenium_trinium_americium_neutronate_wire", "4x gtceu:europium_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:crystal_matrix 1152", "gtceu:naquadria 576")
        .itemOutputs("gtceu:uhv_field_generator")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_field_generator")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_field_generator")
        .itemInputs("gtceu:omnium_frame", "6x gtceu:sculk_bioalloy_plate", "kubejs:quasi_stable_neutron_star", "2x gtceu:uev_emitter", "2x #gtceu:circuits/uev", "64x gtceu:fine_osmium_tantalum_einsteinium_caesium_omnide_wire", "64x gtceu:fine_osmium_tantalum_einsteinium_caesium_omnide_wire", "4x gtceu:darconite_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:crystal_matrix 5760", "gtceu:naquadria 1152")
        .itemOutputs("gtceu:uev_field_generator")
        .duration(600)
        .EUt(1966080)


        .stationResearch(b => b
            .researchStack("gtceu:uhv_field_generator")
            .CWUt(128, 512000)
            .EUt(524288)
        )


    event.recipes.gtceu.assembly_line("uiv_field_generator")
        .itemInputs("gtceu:infinity_frame", "6x gtceu:eltz_plate", "2x kubejs:quasi_stable_neutron_star", "2x gtceu:uiv_emitter", "2x #gtceu:circuits/uiv", "64x gtceu:fine_eltic_neptunium_antimony_terbium_germanium_carbide_wire", "64x gtceu:fine_eltic_neptunium_antimony_terbium_germanium_carbide_wire", "4x gtceu:necrosiderite_single_cable")
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:crystal_matrix 5760", "gtceu:naquadria 2304")
        .itemOutputs("gtceu:uiv_field_generator")
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack("gtceu:uev_field_generator")
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Conveyors
    event.recipes.gtceu.assembly_line("uhv_conveyor")
        .itemInputs("2x gtceu:uhv_electric_motor", "2x gtceu:actinium_plate", "4x gtceu:actinium_ring", "16x gtceu:actinium_round", "4x gtceu:actinium_screw", "2x gtceu:europium_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 2000", "gtceu:styrene_butadiene_rubber 5760", "gtceu:naquadria 576")
        .itemOutputs("gtceu:uhv_conveyor_module")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_conveyor_module")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_conveyor")
        .itemInputs("2x gtceu:uev_electric_motor", "2x gtceu:sculk_bioalloy_plate", "4x gtceu:sculk_bioalloy_ring", "16x gtceu:sculk_bioalloy_round", "4x gtceu:sculk_bioalloy_screw", "2x gtceu:darconite_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 3000", "gtceu:styrene_butadiene_rubber 5760", "gtceu:naquadria 1152")
        .itemOutputs("gtceu:uev_conveyor_module")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_conveyor_module")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line("uiv_conveyor")
        .itemInputs("2x gtceu:uiv_electric_motor", "2x gtceu:infinity_plate", "4x gtceu:eltz_ring", "16x gtceu:eltz_round", "4x gtceu:eltz_screw", "2x gtceu:necrosiderite_single_cable")
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:lubricant 4000", "gtceu:styrene_butadiene_rubber 5760", "gtceu:naquadria 2304")
        .itemOutputs("gtceu:uiv_conveyor_module")
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack("gtceu:uev_conveyor_module")
            .CWUt(144, 576000)
            .EUt(1048576)
        )

    // Pumps
    event.recipes.gtceu.assembly_line("uhv_pump")
        .itemInputs("gtceu:uhv_electric_motor", "gtceu:neutronium_large_fluid_pipe", "2x gtceu:actinium_plate", "8x gtceu:actinium_screw", "16x gtceu:silicone_rubber_ring", "gtceu:neutronium_rotor", "2x gtceu:europium_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 2000", "gtceu:crystal_matrix 1152", "gtceu:naquadria 576")
        .itemOutputs("gtceu:uhv_electric_pump")
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack("gtceu:uv_electric_pump")
            .CWUt(96, 384000)
            .EUt(368640)
        )

    event.recipes.gtceu.assembly_line("uev_pump")
        .itemInputs("gtceu:uev_electric_motor", "gtceu:activated_netherite_large_fluid_pipe", "2x gtceu:sculk_bioalloy_plate", "8x gtceu:sculk_bioalloy_screw", "16x gtceu:silicone_rubber_ring", "gtceu:activated_netherite_rotor", "2x gtceu:darconite_single_cable")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:lubricant 3000", "gtceu:crystal_matrix 5760", "gtceu:naquadria 1152")
        .itemOutputs("gtceu:uev_electric_pump")
        .duration(600)
        .EUt(1966080)

        .stationResearch(b => b
            .researchStack("gtceu:uhv_electric_pump")
            .CWUt(128, 512000)
            .EUt(524288)
        )

    event.recipes.gtceu.assembly_line("uiv_pump")
        .itemInputs("gtceu:uiv_electric_motor", "gtceu:meta_null_large_fluid_pipe", "2x gtceu:eltz_plate", "8x gtceu:eltz_screw", "16x gtceu:silicone_rubber_ring", "gtceu:meta_null_rotor", "2x gtceu:necrosiderite_single_cable")
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:lubricant 4000", "gtceu:crystal_matrix 5760", "gtceu:naquadria 2304")
        .itemOutputs("gtceu:uiv_electric_pump")
        .duration(1200)
        .EUt(3932160)

        .stationResearch(b => b
            .researchStack("gtceu:uev_electric_pump")
            .CWUt(144, 576000)
            .EUt(1048576)
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

    event.recipes.gtceu.assembler("uiv_fluid_regulator")
        .itemInputs("gtceu:uiv_electric_pump", "2x #gtceu:circuits/uiv")
        .circuit(1)
        .itemOutputs("gtceu:uiv_fluid_regulator")
        .duration(50)
        .EUt(15728640)

    // Cables
    // UV+ cables are made only with SBR, UHV+ cables require PEEK, UIV cables require meta_null
    const cablematsUV = ["tritanium", "yttrium_barium_cuprate", "naquadah_alloy", "europium", "omnium", "darconite", "necrosiderite"];
    const cablematsUHV = ["europium", "omnium", "darconite", "necrosiderite"];

    cablematsUV.forEach(mat => event.remove({ id: new RegExp(`cover_${mat}_wire_gt_.*_silicone`) }));
    cablematsUHV.forEach(mat => event.replaceInput({ id: new RegExp(`cover_${mat}_wire_gt_.*_styrene_butadiene`) }, "gtceu:polyvinyl_chloride_foil", "gtceu:polyether_ether_ketone_foil"));
    event.replaceInput({ id: /cover_necrosiderite_wire_gt_.*_styrene_butadiene/ }, "gtceu:polyphenylene_sulfide_foil", "gtceu:meta_null_foil");
})
