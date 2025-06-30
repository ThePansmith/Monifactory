/**
 * Various end-game recipes
 */

ServerEvents.recipes(event => {

    event.recipes.gtceu.assembler("neutron_emitter")
        .itemInputs("4x gtceu:double_neutronium_plate", "6x gtceu:graphene_foil", "4x gtceu:polybenzimidazole_plate")
        .inputFluids("gtceu:tin_alloy 4608")
        .itemOutputs("kubejs:neutron_emitter")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.chemical_bath("uranic_solution_uraninite")
        .inputFluids("gtceu:hypochlorous_acid 1000")
        .itemInputs("2x gtceu:purified_uraninite_ore")
        .outputFluids("gtceu:uranic_solution 1000")
        .duration(320)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.chemical_bath("uranic_solution_pitchblende")
        .inputFluids("gtceu:hypochlorous_acid 1000")
        .itemInputs("2x gtceu:purified_pitchblende_ore")
        .outputFluids("gtceu:uranic_solution 1000")
        .duration(320)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.chemical_bath("uranic_solution_thorium")
        .inputFluids("gtceu:hypochlorous_acid 1000")
        .itemInputs("2x gtceu:purified_thorium_ore")
        .outputFluids("gtceu:uranic_solution 1000")
        .duration(320)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.electrolyzer("actinium_from_uranic_solution")
        .inputFluids("gtceu:uranic_solution 2000")
        .chancedInput("kubejs:neutron_emitter", 50, 0)
        .chancedOutput("gtceu:actinium_dust", 2000, 0)
        .chancedOutput("gtceu:thorium_dust", 3333, 0)
        .chancedOutput("3x gtceu:uraninite_dust", 5000, 0)
        .chancedItemOutputLogic(ChanceLogic.XOR)
        .outputFluids("minecraft:water 1000")
        .itemOutputs("3x gtceu:lead_chloride_dust")
        .duration(160)
        .EUt(GTValues.VHA[GTValues.ZPM])

    // Assembly Line
    // Dimensional Superassembler
    event.recipes.gtceu.assembly_line("dimensional_superassembler")
        .itemInputs("gtceu:assembly_line", "4x #gtceu:circuits/uev", "16x gtceu:infinity_plate", "4x kubejs:dimensional_stabilization_netherite_casing", "16x kubejs:omnic_matrix_machine_casing", "6x gtceu:uev_conveyor_module", "4x gtceu:uev_robot_arm", "4x gtceu:uev_emitter", "2x gtceu:infinity_frame")
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:omnium 5760", "gtceu:polyethyl_cyanoacrylate 3456")
        .itemOutputs("gtceu:dimensional_superassembler")
        .duration(6000)
        .EUt(13920000)

        .stationResearch(b => b
            .researchStack("gtceu:assembly_line")
            .CWUt(160, 1024000)
            .EUt(1200000)
        )


    event.recipes.gtceu.assembly_line("gtceu:mega_alloy_blast_smelter")
        .itemInputs("gtceu:alloy_blast_smelter", "4x #gtceu:circuits/uhv", "4x gtceu:uv_field_generator", "4x #forge:springs/yttrium_barium_cuprate", "4x #forge:dense_plates/neutronium", "4x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire")
        .inputFluids("gtceu:soldering_alloy 9216", "gtceu:omnium 5760")
        .itemOutputs("gtceu:mega_alloy_blast_smelter")
        .duration(4000)
        .EUt(GTValues.VA[GTValues.UHV])
        .stationResearch(b => b
            .researchStack("gtceu:alloy_blast_smelter")
            .CWUt(128, 768000)
            .EUt(GTValues.VA[GTValues.UHV])
        )

    // Helical Fusion Reactor
    event.recipes.gtceu.assembly_line("gtceu:helical_fusion_reactor")
        .itemInputs("gtceu:uv_fusion_reactor", "4x #gtceu:circuits/uev", "gtceu:gravi_star", "2x gtceu:double_activated_netherite_plate", "4x gtceu:uhv_field_generator", "64x kubejs:multidimensional_cpu_chip", "64x kubejs:multidimensional_cpu_chip", "64x gtceu:ruthenium_trinium_americium_neutronate_single_wire")
        .inputFluids("gtceu:soldering_alloy 11520", "gtceu:omnium 5760", "gtceu:polyethyl_cyanoacrylate 3456")
        .itemOutputs("gtceu:helical_fusion_reactor")
        .duration(6000)
        .EUt(13920000)
        .stationResearch(b => b
            .researchStack("gtceu:uv_fusion_reactor")
            .CWUt(160, 1024000)
            .EUt(1200000)
        )


    // Blacklight
    event.shaped("gtceu:blacklight", [
        "BPB",
        " S ",
        "CPW"
    ], {
        B: "gtceu:tungsten_carbide_screw",
        C: "#gtceu:circuits/iv",
        P: "gtceu:tungsten_carbide_plate",
        S: "gtceu:hssg_spring",
        W: "gtceu:platinum_single_cable"
    }).id("gtceu:shaped/blacklight")

    // Trinaquadalloy Mixer Recipe
    event.recipes.gtceu.mixer("mixer_trinaquadalloy")
        .itemInputs("6x gtceu:trinium_dust", "2x gtceu:naquadah_dust", "gtceu:carbon_dust")
        .itemOutputs("9x gtceu:trinaquadalloy_dust")
        .circuit(1)
        .duration(300)
        .EUt(491250)

    // Fluxed Electrum Mixer Recipe
    event.recipes.gtceu.mixer("mixer_electrum_flux")
        .itemInputs("6x gtceu:electrum_dust", "gtceu:lumium_dust", "gtceu:signalum_dust")
        .itemOutputs("8x gtceu:electrum_flux_dust")
        .circuit(2)
        .duration(300)
        .EUt(129)

    // Atomic Casings
    event.shaped("2x gtceu:atomic_casing", [
        "PHP",
        "PFP",
        "PWP"
    ], {
        P: "gtceu:trinaquadalloy_plate",
        H: "#forge:tools/hammers",
        W: "#forge:tools/wrenches",
        F: "gtceu:naquadah_alloy_frame",
    }).id("gtceu:shaped/atomic_casing")

    event.recipes.gtceu.assembler("atomic_casing")
        .itemInputs("6x gtceu:trinaquadalloy_plate", "gtceu:naquadah_alloy_frame")
        .itemOutputs("2x gtceu:atomic_casing")
        .duration(100)
        .EUt(16)
        .circuit(6)

    // Sterilising Filter Casing
    event.shaped("4x gtceu:sterilizing_filter_casing", [
        "PEP",
        "FBF",
        "MSR"
    ], {
        B: "gtceu:blacklight",
        E: "gtceu:luv_emitter",
        F: "gtceu:item_filter",
        M: "gtceu:luv_electric_motor",
        P: "gtceu:polybenzimidazole_large_fluid_pipe",
        R: "gtceu:iridium_rotor",
        S: "gtceu:tritanium_frame"
    }).id("gtceu:shaped/filter_casing_sterile")

    // FLux Gem
    event.remove({ id: "redstone_arsenal:materials/flux_gem" })
    event.recipes.gtceu.autoclave("flux_gem")
        .itemInputs("minecraft:diamond")
        .inputFluids("gtceu:redstone 720")
        .itemOutputs("redstone_arsenal:flux_gem")
        .duration(200)
        .EUt(400)

    // Ultimate Material
    event.recipes.gtceu.assembly_line("kubejs:the_ultimate_material")
        .itemInputs("kubejs:warden_heart", "4x kubejs:guardian_scale", "8x kubejs:wither_bone", "12x kubejs:ender_dragon_scale")
        .itemOutputs("kubejs:the_ultimate_material")
        .duration(600)
        .EUt(491520)
        .stationResearch(b => b
            .researchStack("kubejs:warden_heart")
            .CWUt(96, 384000)
            .EUt(491520)
        )

    // Flux Plating
    event.shaped("4x redstone_arsenal:flux_plating", [
        " P ",
        "PGP",
        " P "
    ], {
        G: "redstone_arsenal:flux_gem",
        P: "gtceu:electrum_flux_plate"
    }).id("redstone_arsenal:materials/flux_plating")

    event.recipes.gtceu.assembler("kubejs:flux_plating_assembly")
        .itemInputs("redstone_arsenal:flux_gem", "4x gtceu:electrum_flux_plate")
        .itemOutputs("4x redstone_arsenal:flux_plating")
        .duration(60)
        .EUt(GTValues.VA[GTValues.EV])

    // Vacuum Freezer
    // Sculk Superconductor Wire
    event.recipes.gtceu.vacuum_freezer("sculk_superconductor")
        .itemInputs("gtceu:cryococcus_ingot")
        .itemOutputs("gtceu:sculk_superconductor_double_wire")
        .inputFluids(Fluid.of("gtceu:nether_star", 144))
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace("hyperdegenerate_darconite")
        .itemInputs("gtceu:darconite_ingot")
        .notConsumable("gtceu:wire_extruder_mold")
        .itemOutputs("gtceu:hyperdegenerate_darconite_double_wire")
        .inputFluids(Fluid.of("gtceu:hyperdegenerate_matter", 40))
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(10600)

    // Chemical Reactor

    event.recipes.gtceu.chemical_reactor("cryolobus_dust")
        .itemInputs("gtceu:red_steel_dust", "minecraft:sculk_catalyst")
        .itemOutputs("gtceu:cryolobus_dust")
        .duration(500)
        .EUt(2000)

    // Kubejs Stem Cells
    event.remove({ id: "gtceu:chemical_reactor/stem_cells" })
    event.remove({ id: "gtceu:large_chemical_reactor/stem_cells" })
    event.recipes.gtceu.chemical_reactor("kubejs_stem_cells")
        .itemInputs("minecraft:dragon_egg")
        .chancedInput("minecraft:sculk_catalyst", 500, 0)
        .inputFluids("gtceu:sterilized_growth_medium 500", "gtceu:bacteria 500", "enderio:xp_juice 2000")
        .itemOutputs("64x gtceu:stem_cells")
        .itemOutputsRanged("gtceu:stem_cells", 0, 64)
        .outputFluids("gtceu:bacterial_sludge 500")
        .duration(6000)
        .EUt(30720)
        .cleanroom(CleanroomType.CLEANROOM)


    event.recipes.extendedcrafting.shaped_table("gtceu:zero_point_module", [
        "  PPPPP  ",
        "  PBCBP  ",
        "  PCBCP  ",
        "  PBCBP  ",
        "   ZZZ   ",
        "   ZFZ   ",
        "   ZFZ   ",
        "   ZZZ   ",
        "   PPP   "
    ], {
        B: "kubejs:stabilized_berkelium",
        C: "kubejs:stabilized_californium",
        F: "gtceu:zpm_field_generator",
        P: "nuclearcraft:plate_elite",
        Z: "#gtceu:circuits/zpm"
    })

    // World Accelerators
    event.remove({ id: "gtceu:shaped/lv_world_accelerator" })
    event.remove({ id: "gtceu:shaped/mv_world_accelerator" })
    event.remove({ id: "gtceu:shaped/hv_world_accelerator" })
    event.remove({ id: "gtceu:shaped/ev_world_accelerator" })
    event.remove({ id: "gtceu:shaped/iv_world_accelerator" })
    event.remove({ id: "gtceu:shaped/luv_world_accelerator" })
    event.remove({ id: "gtceu:shaped/zpm_world_accelerator" })

    event.recipes.gtceu.assembly_line("hv_world_accelerator")
        .itemInputs("gtceu:luv_machine_hull", "48x gtceu:luv_field_generator", "20x gtceu:luv_sensor", "20x gtceu:luv_emitter", "16x #gtceu:circuits/luv", "4x gtceu:double_iridium_plate", "2x gtceu:dense_cryolobus_plate")
        .inputFluids("gtceu:enderium 1152", "gtceu:soldering_alloy 1152")
        .itemOutputs("gtceu:hv_world_accelerator")
        .stationResearch(b => b.researchStack("minecraft:clock").CWUt(4, 16000))
        .duration(6000)
        .EUt(30720)

    event.recipes.gtceu.assembly_line("ev_world_accelerator")
        .itemInputs("gtceu:zpm_machine_hull", "48x gtceu:zpm_field_generator", "20x gtceu:zpm_sensor", "20x gtceu:zpm_emitter", "16x #gtceu:circuits/zpm", "4x gtceu:double_europium_plate", "2x gtceu:dense_cryolobus_plate")
        .inputFluids("gtceu:enderium 1152", "gtceu:soldering_alloy 1152")
        .itemOutputs("gtceu:ev_world_accelerator")
        .duration(6000)
        .EUt(122880)
        .stationResearch(b => b
            .researchStack("gtceu:hv_world_accelerator")
            .CWUt(32, 128000)
            .EUt(122880)
        )

    event.recipes.gtceu.assembly_line("iv_world_accelerator")
        .itemInputs("gtceu:uv_machine_hull", "48x gtceu:uv_field_generator", "20x gtceu:uv_sensor", "20x gtceu:uv_emitter", "16x #gtceu:circuits/uv", "4x gtceu:double_europium_plate", "2x gtceu:dense_neutronium_plate")
        .inputFluids("gtceu:enderium 1152", "gtceu:soldering_alloy 1152")
        .itemOutputs("gtceu:iv_world_accelerator")
        .duration(6000)
        .EUt(491520)
        .stationResearch(b => b
            .researchStack("gtceu:ev_world_accelerator")
            .CWUt(64, 256000)
            .EUt(491520)
        )

    event.recipes.gtceu.assembly_line("luv_world_accelerator")
        .itemInputs("gtceu:uhv_machine_hull", "48x gtceu:uhv_field_generator", "20x gtceu:uhv_sensor", "20x gtceu:uhv_emitter", "16x #gtceu:circuits/uhv", "4x gtceu:double_activated_netherite_plate", "2x gtceu:dense_neutronium_plate")
        .inputFluids("gtceu:omnium 1152", "gtceu:soldering_alloy 1152")
        .itemOutputs("gtceu:luv_world_accelerator")
        .duration(6000)
        .EUt(1966080)
        .stationResearch(b => b
            .researchStack("gtceu:iv_world_accelerator")
            .CWUt(128, 512000)
            .EUt(1966080)
        )

    // Beyond this point we could probably just treat these like joke items
    event.recipes.gtceu.assembly_line("zpm_world_accelerator")
        .itemInputs("gtceu:uev_machine_hull", "48x gtceu:uev_field_generator", "20x gtceu:uev_sensor", "20x gtceu:uev_emitter", "16x #gtceu:circuits/uev", "4x gtceu:double_necrosiderite_plate", "2x gtceu:dense_infinity_plate")
        .inputFluids("gtceu:omnium 1152", "gtceu:soldering_alloy 1152")
        .itemOutputs("gtceu:zpm_world_accelerator")
        .duration(6000)
        .EUt(7864320)
        .stationResearch(b => b
            .researchStack("gtceu:luv_world_accelerator")
            .CWUt(128, 512000)
            .EUt(7864320)
        )

    // ! Creative Items !//

    // Creative Jetpack
    event.recipes.extendedcrafting.shaped_table(Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:creative"}').weakNBT(), [
        "  C   L  ",
        " CCC LLL ",
        " CVCFLEL ",
        " CVCILEL ",
        " CVCDLEL ",
        " CVC LEL ",
        " SSS HHH ",
        "  N   R  ",
        " NNN RRR "
    ], {
        C: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:conductive_iron"}').weakNBT(),
        D: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:dark_soularium"}').weakNBT(),
        E: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:resonant"}').weakNBT(),
        F: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:fluxed"}').weakNBT(),
        H: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:hardened"}').weakNBT(),
        I: "kubejs:infinity_catalyst",
        L: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:leadstone"}').weakNBT(),
        N: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:energetic"}').weakNBT(),
        R: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:reinforced"}').weakNBT(),
        S: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:electrical_steel"}').weakNBT(),
        V: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:vibrant"}').weakNBT()
    })

    // Creative Solar Panel
    event.recipes.extendedcrafting.shaped_table("solarflux:sp_custom_infinity", [
        "SNNNNNNNS",
        "NPPPNPPPN",
        "NPPPNPPPN",
        "NPPPNPPPN",
        "NNNNINNNN",
        "NPPPNPPPN",
        "NPPPNPPPN",
        "NPPPNPPPN",
        "SNNNNNNNS"
    ], {
        I: "kubejs:infinity_catalyst",
        N: "gtceu:neutronium_plate",
        P: "gtceu:infinity_plate",
        S: "solarflux:sp_custom_neutronium"
    })

    // Creative Chest
    event.recipes.extendedcrafting.shaped_table("2x gtceu:creative_chest", [
        "BMMMMMMMMMB",
        "MIWOPPPOYIM",
        "MIFNNNNNFIM",
        "MINCSSSCNIM",
        "RUSSAQASSUR",
        "REEMGHGMEER",
        "RUTTAQATTUR",
        "MINCTTTCNIM",
        "MIFNNNNNFIM",
        "MIXPPZPPVIM",
        "BMMMMMMMMMB"
    ], {
        A: "kubejs:furious_infinity_catalyst",
        B: "gtceu:monium_block",
        C: "kubejs:serene_infinity_catalyst",
        E: "solarflux:sp_custom_infinity",
        F: "gtceu:uev_field_generator",
        G: "gtceu:monium_gear",
        H: "gtceu:max_machine_hull",
        I: "kubejs:elementally_infused_omnic_matrix_heavy_plating",
        M: "kubejs:causality_exempt_monic_heavy_plating",
        N: "kubejs:dimensionally_stabilized_infinity_heavy_plating",
        O: "gtceu:uev_sensor",
        P: "kubejs:monic_processor_mainframe",
        Q: "kubejs:field_stabilised_omnic_pulsar_compound",
        R: "gtceu:uev_robot_arm",
        S: "megacells:bulk_cell_component",
        T: "kubejs:omnic_data",
        U: "gtceu:subatomic_digital_assembler",
        V: "kubejs:infinity_file",
        W: "kubejs:infinity_screwdriver",
        X: "kubejs:infinity_wrench",
        Y: "kubejs:infinity_hammer",
        Z: "kubejs:infinity_wire_cutter"
    })

    event.recipes.gtceu.canner("contained_singularity")
        .itemInputs("kubejs:singularity_containment_unit", "ae2:singularity")
        .itemOutputs("kubejs:contained_singularity")
        .duration(20)
        .EUt(GTValues.VA[GTValues.UEV])

    // Knowledge Transmission Array
    event.recipes.gtceu.assembly_line("knowledge_transmission_array")
        .itemInputs("2x gtceu:sculk_bioalloy_frame", "16x gtceu:europium_double_cable", "16x gtceu:uhv_emitter", "16x gtceu:data_transmitter_hatch", "2x #gtceu:circuits/uhv", "32x gtceu:normal_optical_pipe", "16x gtceu:ruthenium_trinium_americium_neutronate_single_wire", "2x gtceu:network_switch", "32x gtceu:rhodium_foil")
        .inputFluids("gtceu:advanced_soldering_alloy 1152", "gtceu:omnium 2304", "gtceu:polyethyl_cyanoacrylate 1152")
        .itemOutputs("monilabs:knowledge_transmission_array")
        .duration(2000)
        .EUt(7864320)
        .stationResearch(b => b
            .researchStack("gtceu:data_transmitter_hatch")
            .CWUt(96, 57600)
            .EUt(1966080)
        )

    // Omniscience Research Beacon
    event.recipes.gtceu.assembly_line("omniscience_research_beacon")
        .itemInputs("gtceu:computation_receiver_hatch", "8x gtceu:europium_hex_cable", "4x gtceu:research_station", "16x gtceu:advanced_computer_casing", "16x #gtceu:circuits/uhv", "3x gtceu:uhv_sensor", "kubejs:universal_navigator", "4x gtceu:uhv_field_generator", "4x gtceu:sculk_bioalloy_plate", "64x gtceu:normal_optical_pipe", "64x gtceu:fine_ruridit_wire", "32x gtceu:ruthenium_trinium_americium_neutronate_single_wire")
        .inputFluids("gtceu:advanced_soldering_alloy 2304", "gtceu:omnium 4608", "gtceu:polyethyl_cyanoacrylate 2304")
        .itemOutputs("gtceu:creative_data_multi")
        .duration(4000)
        .EUt(7864320)
        .stationResearch(b => b
            .researchStack("gtceu:research_station")
            .CWUt(96, 57600)
            .EUt(1966080)
        )

    // Chromodynamic Conduction Casing
    event.recipes.gtceu.assembler("chromodynamic_conduction_casing")
        .itemInputs("gtceu:activated_netherite_frame", "2x gtceu:normal_laser_pipe", "8x gtceu:omnium_single_wire", "#gtceu:circuits/luv")
        .itemOutputs("monilabs:chromodynamic_conduction_casing")
        .duration(50)
        .EUt(GTValues.VHA[GTValues.UV])
    // Coils
    event.recipes.gtceu.assembler("kubejs:omnic_matrix_coil")
        .itemInputs("8x gtceu:omnium_double_wire", "8x gtceu:crystal_matrix_foil")
        .itemOutputs("kubejs:omnic_matrix_coil_block")
        .inputFluids("gtceu:neutronium 144")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.UHV])

    // Casings
    event.recipes.gtceu.assembler("kubejs:omnic_matrix_machine_casing")
        .itemInputs("6x gtceu:omnium_plate", "gtceu:crystal_matrix_frame", "gtceu:zpm_field_generator", "#gtceu:circuits/uv")
        .itemOutputs("2x kubejs:omnic_matrix_machine_casing")
        .duration(100)
        .EUt(65520)

    event.recipes.gtceu.assembler("kubejs:netherite_casing")
        .itemInputs("8x gtceu:neutronium_plate", "8x gtceu:large_scale_assembler_casing", "2x gtceu:dense_activated_netherite_plate", "6x gtceu:tungsten_steel_rod")
        .itemOutputs("4x kubejs:dimensional_stabilization_netherite_casing")
        .duration(100)
        .EUt(65520)

    event.recipes.gtceu.assembler("kubejs:bioalloy_casing")
        .itemInputs("4x gtceu:sculk_bioalloy_plate", "2x gtceu:cryolobus_frame", "4x kubejs:warden_horn", "6x gtceu:actinium_rod")
        .itemOutputs("2x kubejs:bioalloy_casing")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.assembler("kubejs:bioalloy_fusion_casing")
        .itemInputs("gtceu:uhv_machine_hull", "2x kubejs:bioalloy_casing", "12x gtceu:cryococcus_plate", "4x gtceu:fusion_casing_mk3", "gtceu:uhv_field_generator")
        .itemOutputs("4x kubejs:bioalloy_fusion_casing")
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.assembler("singularity_containment_unit")
        .itemInputs("4x gtceu:monium_plate", "4x gtceu:neutron_reflector", "1x gtceu:uev_sensor", "2x gtceu:uhv_sensor", "gtceu:uev_field_generator")
        .itemOutputs("64x kubejs:singularity_containment_unit")
        .duration(300)
        .EUt(16380)

    event.recipes.gtceu.assembler("fieldstabilizedcompound")
        .itemInputs("gtceu:uev_field_generator", "gtceu:uhv_field_generator", "kubejs:supercritical_prismatic_core", "10x kubejs:quasi_stable_neutron_star", "kubejs:dimensionally_stabilized_infinity_heavy_plating")
        .itemOutputs("kubejs:field_stabilised_omnic_pulsar_compound")
        .duration(255)
        .EUt(GTValues.VA[GTValues.UEV])

    // Shortcut recipes for thrusters
    event.recipes.gtceu.assembler("kubejs:assembler_dark_soularium_thruster")
        .itemInputs("4x gtceu:dark_soularium_plate", "6x gtceu:vibrant_alloy_plate", "2x enderio:weather_crystal", "2x enderio:prescient_crystal", "laserio:energy_overclocker_card_tier_8", "kubejs:flight_control_unit")
        .itemOutputs("kubejs:dark_soularium_thruster")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.assembler("kubejs:assembler_flux_thruster")
        .itemInputs("3x redstone_arsenal:flux_plating", "4x gtceu:enderium_plate", "2x gtceu:signalum_plate", "thermal:dynamo_numismatic", "thermal:rf_coil", "kubejs:glowstone_elevation_unit")
        .itemOutputs("kubejs:fluxed_thruster")
        .duration(70)
        .EUt(GTValues.VA[GTValues.IV])
})
