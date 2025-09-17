/**
 * Item Registry - defines ID, name, texture
 * and certain other properties of custom items.
 */
StartupEvents.registry("item", event => {
    const miners = [
        "1",
        "2",
        "2half",
        "2half_damaged",
        "3",
        "4",
        "4half",
        "4half_damaged",
        "5",
        "6",
        "6_damaged",
        "7",
        "7_damaged",
        "8",
        "8_damaged",
        "8half",
        "9",
        "10",
        "11",
        "12"
    ]

    const stabilized_miners = [
        "2half",
        "4half",
        "6",
        "7",
        "8",
    ]

    // Regular Microminers
    for (const tier of miners) {
        event.create(`microminer_t${tier}`)
            .maxStackSize(16)
            .texture(`kubejs:item/microverse/miner/microminer_t${tier}`)
    }

    // Stabilized Miners
    for (const tier of stabilized_miners) {
        event.create(`stabilized_microminer_t${tier}`)
            .maxStackSize(16)
            .texture(`kubejs:item/microverse/miner/microminer_t${tier}`)
            .glow(true);
    }

    // Microminer Components
    event.create("basic_mining_laser")
        .texture("kubejs:item/microverse/component/basic_mining_laser")
        .displayName("§eBasic Mining Laser")
    event.create("reinforced_mining_laser")
        .texture("kubejs:item/microverse/component/reinforced_mining_laser")
        .displayName("§bReinforced Mining Laser")
    event.create("supercharged_laser_array")
        .texture("kubejs:item/microverse/component/supercharged_laser_array")
        .displayName("§eSupercharged Laser Array")
    event.create("basic_micro_miner_guidance_system")
        .texture("kubejs:item/microverse/component/basic_micro_miner_guidance_system")
        .displayName("§eBasic Micro Miner Guidance System")
    event.create("advanced_micro_miner_guidance_system")
        .texture("kubejs:item/microverse/component/advanced_micro_miner_guidance_system")
        .displayName("§eAdvanced Micro Miner Guidance System")
    event.create("warp_engine")
        .texture("kubejs:item/microverse/component/warp_engine")
        .displayName("§dWarp Engine")
    event.create("hadal_warp_engine")
        .texture("kubejs:item/microverse/component/hadal_warp_engine")
        .displayName("§dHadal Warp Engine")
    event.create("universal_navigator")
        .texture("kubejs:item/microverse/component/universal_navigator")
        .displayName("§dUniversal Navigator")
    event.create("extradimensional_navigator")
        .texture("kubejs:item/microverse/component/extradimensional_navigator")
        .displayName("§dExtradimensional Navigator")

    // Quantum Flux & Universe Creation Data
    event.create("quantum_flux")
        .texture("kubejs:item/microverse/quantum_flux")
        .displayName("§dQuantum Flux")
    event.create("universe_creation_data")
        .displayName("§dUniverse Creation Data")

    // Miner kits
    event.create("gem_sensor")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/gem_sensor")
        .displayName("Gemstone Sensor")
    event.create("basic_drilling_kit")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/basic_drilling_kit")
    event.create("advanced_drilling_kit")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/advanced_drilling_kit")
    event.create("elite_drilling_kit")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/elite_drilling_kit")
    event.create("blasting_kit")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/blasting_kit")
    event.create("microversal_alchemy_kit")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/microversal_alchemy_kit")

    // T9+ Devices
    event.create("gravitational_amplifier")
        .maxStackSize(16)
    event.create("universal_collapse_device")
        .maxStackSize(16)
    event.create("field_stabilised_omnic_pulsar_compound")
        .maxStackSize(16)
        .texture("kubejs:item/microverse/kit/field_stabilised_prismatic_pulsar_compound")
        .displayName("Field-Stabilized Prismatic Pulsar Compound")

    // Heavy platings
    event.create("quantum_fluxed_eternium_heavy_plating")
        .displayName("§dQuantum Fluxed Eternium Heavy Plating")
        .texture("kubejs:item/heavy_plating/eternium")
    event.create("universe_resistant_neutronium_heavy_plating")
        .displayName("§dUniverse Resistant Neutronium Heavy Plating")
        .texture("kubejs:item/heavy_plating/neutronium")
    event.create("elementally_infused_omnic_matrix_heavy_plating")
        .displayName("§dElementally Infused Omnic Matrix Heavy Plating")
        .texture("kubejs:item/heavy_plating/omnic_matrix")
    event.create("dimensionally_stabilized_infinity_heavy_plating")
        .displayName("§dDimensionally Stabilized Infinity Heavy Plating")
        .texture("kubejs:item/heavy_plating/infinity")
    event.create("causality_exempt_monic_heavy_plating")
        .displayName("§9Causality Exempt Monic Heavy Plating")
        .texture("kubejs:item/heavy_plating/monium")

    // Monicoins
    if (doMonicoins) {
        event.create("moni_penny")
            .texture("kubejs:item/coins/monimoney/penny")
    }
    event.create("moni_nickel")
        .texture("kubejs:item/coins/monimoney/nickel")
    event.create("moni_quarter")
        .texture("kubejs:item/coins/monimoney/quarter")
    event.create("moni_dollar")
        .texture("kubejs:item/coins/monimoney/dollar")
        .glow(true)

    // Widgets
    event.create("wooden_widget")
        .texture("kubejs:item/coins/widget/wooden")
        .displayName("Wooden Widget")
    event.create("wooden_widget_left")
        .texture("kubejs:item/coins/widget/wooden_left")
        .displayName("Wooden Widget Left Part")
    event.create("wooden_widget_right")
        .displayName("Wooden Widget Right Part")
        .texture("kubejs:item/coins/widget/wooden_right")
    event.create("stone_widget")
        .texture("kubejs:item/coins/widget/stone")
        .displayName("Stone Widget")
    event.create("stone_widget_up")
        .texture("kubejs:item/coins/widget/stone_up")
        .displayName("Stone Widget Up Side")
    event.create("stone_widget_down")
        .texture("kubejs:item/coins/widget/stone_down")
        .displayName("Stone Widget Down Side")
    event.create("alloy_widget")
        .texture("kubejs:item/coins/widget/alloy")
        .displayName("Alloy Widget")
    event.create("ender_widget")
        .texture("kubejs:item/coins/widget/ender")
        .displayName("Ender Widget")

    // Magnetron
    if (doHarderProcessing) {
        event.create("magnetron")
            .texture("kubejs:item/magnetron")
    }

    // Spacefaring Items
    event.create("radiation_layer")
        .texture("kubejs:item/mod/ad_astra/space_suit/radiation_layer")
    event.create("pressure_layer")
        .texture("kubejs:item/mod/ad_astra/space_suit/pressure_layer")
    event.create("thermal_cloth")
        .texture("kubejs:item/mod/ad_astra/space_suit/thermal_cloth")
    event.create("unprepared_space_helmet")
        .texture("kubejs:item/mod/ad_astra/space_suit/unprepared_space_helmet")
    event.create("unprepared_space_suit")
        .texture("kubejs:item/mod/ad_astra/space_suit/unprepared_space_suit")
    event.create("unprepared_space_pants")
        .texture("kubejs:item/mod/ad_astra/space_suit/unprepared_space_pants")
    event.create("unprepared_space_boots")
        .texture("kubejs:item/mod/ad_astra/space_suit/unprepared_space_boots")

    // HNN Datas
    event.create("impossible_realm_data")
        .displayName("§bImpossible Realm Data")
    event.create("dragon_lair_data")
        .displayName("§dDragon Lair Data")
    event.create("wither_realm_data")
        .displayName("§dWither Realm Data")
    event.create("deep_dark_data")
        .displayName("§dDeep Dark Data")
    event.create("lair_of_the_warden_data")
        .displayName("§dLair Of The Warden Data")

    // Endgame Items
    event.create("neutron_emitter")
        .texture("kubejs:item/lines/actinium/neutron_emitter")
    event.create("heart_of_a_universe")
        .texture("kubejs:item/heart_of_a_universe")
        .displayName("§dHeart Of A Universe")
    event.create("quasi_stable_neutron_star")
        .texture("kubejs:item/quasi_stable_neutron_star")
        .displayName("Quasi-Stable Neutron Star")

    // INFINITY AND PRISMAC

    // APC
    event.create("inert_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/0_blank_core")
    event.create("red_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/1_red_core")
    event.create("yellow_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/2_yellow_core")
    event.create("green_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/3_green_core")
    event.create("cyan_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/4_cyan_core")
    event.create("blue_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/5_blue_core")
    event.create("active_prismatic_core")
        .rarity("rare")
        .texture("kubejs:item/lines/prismac/infinity/core/6_prismatic_core")

    // SPC
    event.create("orange_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/7_orange_core")
    event.create("lime_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/8_lime_core")
    event.create("teal_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/9_teal_core")
    event.create("azure_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/a_azure_core")
    event.create("indigo_prismatic_core")
        .rarity("uncommon")
        .texture("kubejs:item/lines/prismac/infinity/core/b_indigo_core")
    event.create("supercritical_prismatic_core")
        .rarity("epic")
        .texture("kubejs:item/lines/prismac/infinity/core/c_supercritical_prismatic_core")

    // Callibration Devices
    event.create("chromatic_stabilizer")
        .texture("kubejs:item/lines/prismac/stabilizer/chromatic_stabilizer")
    event.create("chromatic_capacitor_empty")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_empty")
        .displayName("Chromatic Capacitor: §7Empty§r")
    event.create("chromatic_capacitor_red")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_red")
        .displayName("Chromatic Capacitor: §4Red§r")
    event.create("chromatic_capacitor_yellow")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_yellow")
        .displayName("Chromatic Capacitor: §eYellow§r")
    event.create("chromatic_capacitor_green")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_green")
        .displayName("Chromatic Capacitor: §2Green§r")
    event.create("chromatic_capacitor_cyan")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_cyan")
        .displayName("Chromatic Capacitor: §bCyan§r")
    event.create("chromatic_capacitor_blue")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_blue")
        .displayName("Chromatic Capacitor: §1Blue§r")
    event.create("chromatic_capacitor_magenta")
        .texture("kubejs:item/lines/prismac/capacitor/chromatic_capacitor_magenta")
        .displayName("Chromatic Capacitor: §dMagenta§r")

    // Infinity Tools
    event.create("infinity_file")
        .rarity("epic")
        .maxStackSize(1)
    event.create("infinity_hammer")
        .rarity("epic")
        .maxStackSize(1)
    event.create("infinity_screwdriver")
        .rarity("epic")
        .maxStackSize(1)
    event.create("infinity_wrench")
        .rarity("epic")
        .maxStackSize(1)
    event.create("infinity_wire_cutter")
        .rarity("epic")
        .maxStackSize(1)

    // Optical Circuit intermediates
    event.create("sapphire_seed_crystal")
        .texture("kubejs:item/circuits/theme/optical/wafer/sapphire_seed_crystal")
    event.create("sapphire_boule")
        .texture("kubejs:item/circuits/theme/optical/wafer/sapphire_boule")
    event.create("sapphire_wafer")
        .texture("kubejs:item/circuits/theme/optical/wafer/sapphire_wafer")
    event.create("coated_sapphire_wafer")
        .texture("kubejs:item/circuits/theme/optical/wafer/coated_sapphire_wafer")
    event.create("engraved_sapphire_wafer")
        .texture("kubejs:item/circuits/theme/optical/wafer/engraved_sapphire_wafer")
    event.create("incomplete_sapphire_wafer")
        .texture("kubejs:item/circuits/theme/optical/wafer/incomplete_sapphire_wafer")
    event.create("completed_optical_wafer")
        .texture("kubejs:item/circuits/theme/optical/wafer/completed_optical_wafer")
    event.create("optical_chip")
        .texture("kubejs:item/circuits/theme/optical/wafer/optical_chip")
    event.create("electro_optic_modulator")
        .texture("kubejs:item/circuits/theme/optical/electro_optic_modulator")
    event.create("carbon_mesh_reinforced_circuit_board")
        .texture("kubejs:item/circuits/theme/optical/board/carbon_mesh_reinforced_circuit_board")
    event.create("carbon_mesh_reinforced_printed_circuit_board")
        .texture("kubejs:item/circuits/theme/optical/board/carbon_mesh_reinforced_printed_circuit_board")
    event.create("optical_processing_unit")

    // Solidified Elements
    const solidified_elements = [
        ["argon", "#12bc12"],
        ["chlorine", "#2d6d6d"],
        ["fluorine", "#4b7ba6"],
        ["helium", "#e8ea86"],
        ["hydrogen", "#12128a"],
        ["krypton", "#7ffe7f"],
        ["mercury", "#ad9dce"],
        ["neon", "#b88a8a"],
        ["nitrogen", "#129192"],
        ["oxygen", "#4494bc"],
        ["radon", "#bc38bc"],
        ["xenon", "#12bcbc"],
        ["experience", "#04ff00"]
    ]

    for (const [element, elemColor] of solidified_elements) {
        event.create(`solidified_${element}`)
            .textureJson({ layer0: "kubejs:item/solidified_element" })
            .color(0, elemColor);
    }

    // Stabilized Elements
    const stabilized_elements = [
        ["berkelium", "#a33f20"],
        ["neptunium", "#486d7b"],
        ["plutonium", "#ba2727"],
        ["uranium", "#1d891d"],
        ["curium", "#58307f"],
        ["californium", "#7d0222"],
        ["americium", "#287869"]
    ]

    for (const [element, elemColor] of stabilized_elements) {
        event.create(`stabilized_${element}`)
            .textureJson({ layer0: "kubejs:item/stabilized_element" })
            .color(0, elemColor);
    }

    // Misc Items
    event.create("ender_star")
        .texture("kubejs:item/ender_star")
        .glow(true)
    event.create("endest_star")
        .texture("kubejs:item/endest_star")
        .glow(true)
    event.create("grains_of_innocence")
        .texture("kubejs:item/mod/enderio/grains_of_innocence")
    event.create("radium_salt")
        .rarity("Epic")
        .texture("kubejs:item/radium_salt")

    // Thrusters
    const thrusters = ["conductive_iron","leadstone","electrical_steel","hardened","energetic","reinforced","resonant","vibrant","dark_soularium","fluxed"]

    thrusters.forEach(thruster => {
        event.create(`${thruster}_thruster`)
            .texture(`kubejs:item/microverse/component/thruster/${thruster}`)
    })

    // Planet dusts
    event.create("moon_dust")
        .texture("kubejs:item/mod/ad_astra/regolith_dust/moon_dust")
    event.create("mars_dust")
        .texture("kubejs:item/mod/ad_astra/regolith_dust/mars_dust")
    event.create("venus_dust")
        .texture("kubejs:item/mod/ad_astra/regolith_dust/venus_dust")
    event.create("mercury_dust")
        .texture("kubejs:item/mod/ad_astra/regolith_dust/mercury_dust")
    event.create("glacio_dust")
        .texture("kubejs:item/mod/ad_astra/regolith_dust/glacio_dust")


    // Thermal Series item ports
    event.create("aerotheum_dust")
        .texture("kubejs:item/mod/thermal/elemental_dusts/aerotheum_blend")
    event.create("cryotheum_dust")
        .texture("kubejs:item/mod/thermal/elemental_dusts/cryotheum_blend")
    event.create("petrotheum_dust")
        .texture("kubejs:item/mod/thermal/elemental_dusts/petrotheum_blend")
    event.create("pyrotheum_dust")
        .texture("kubejs:item/mod/thermal/elemental_dusts/pyrotheum_blend")
    event.create("primal_mana")
        .rarity("epic")
        .texture("kubejs:item/mod/thermal/elemental_dusts/primal_mana")

    event.create("destabilized_clathrate")
        .rarity("uncommon")
        .texture("kubejs:item/mod/thermal/clathrate/destabilized_clathrate")
    event.create("energized_clathrate")
        .rarity("uncommon")
        .texture("kubejs:item/mod/thermal/clathrate/energized_clathrate")
    event.create("resonant_clathrate")
        .rarity("rare")
        .texture("kubejs:item/mod/thermal/clathrate/resonant_clathrate")

    // Ender Spore
    if (!doHNN) {
        event.create("ender_spore")
            .texture("kubejs:item/ender_spore")
    }

    // Thermal Augments
    event.create("redstone_transmission_coil")
        .texture("kubejs:item/mod/thermal/redstone_transmission_coil")
    event.create("thermal:upgrade_augment_1");
    event.create("thermal:upgrade_augment_2");
    event.create("thermal:upgrade_augment_4");
    event.create("thermal:upgrade_augment_3");

    // Advanced Thermal Storage augments
    event.create("thermal:rf_coil_augment_advanced")
    event.create("thermal:rf_coil_storage_augment_advanced")
    event.create("thermal:rf_coil_xfer_augment_advanced")
    event.create("thermal:fluid_tank_augment_advanced")

    // Jetpack Units
    event.create("empty_fluxed_jetpack_unit")
        .texture("kubejs:item/mod/ironjetpacks/empty_fluxed_jetpack_unit")
    event.create("empty_soularium_jetpack_unit")
        .texture("kubejs:item/mod/ironjetpacks/empty_soularium_jetpack_unit")
    event.create("flight_control_unit")
        .texture("kubejs:item/mod/ironjetpacks/flight_control_unit")
    event.create("glowstone_elevation_unit")
        .texture("kubejs:item/mod/ironjetpacks/glowstone_elevation_unit")
    event.create("cryotheum_coolant_unit")
        .texture("kubejs:item/mod/ironjetpacks/cryotheum_coolant_unit")

    // EnderIO Capacitors
    // TODO: GIVE CAPACITORS LORE AND NBT FOR THEM TO WORK
    event.create("compressed_octadic_capacitor")
        .texture("kubejs:item/mod/enderio/compressed_octadic_capacitor")
    event.create("double_compressed_octadic_capacitor")
        .texture("kubejs:item/mod/enderio/double_compressed_octadic_capacitor")

    // Extra Utilities 2
    event.create("resonating_crystal")
        .texture("kubejs:item/mod/extrautils2/resonating_crystal")
    event.create("ender_shard")
        .texture("kubejs:item/mod/extrautils2/ender_shard")

    // Nether Star Crafting Components
    event.create("nether_star_north")
        .texture("kubejs:item/mod/thermal/nether_star_north")
        .displayName("Nether Star North Tip")
    event.create("nether_star_south")
        .texture("kubejs:item/mod/thermal/nether_star_south")
        .displayName("Nether Star South Tip")
    event.create("nether_star_east")
        .texture("kubejs:item/mod/thermal/nether_star_east")
        .displayName("Nether Star East Tip")
    event.create("nether_star_west")
        .texture("kubejs:item/mod/thermal/nether_star_west")
        .displayName("Nether Star West Tip")
    event.create("nether_star_center")
        .texture("kubejs:item/mod/thermal/nether_star_center")
        .displayName("Nether Star Center")

    // ArmorPlus monster drops
    event.create("guardian_scale")
        .rarity("rare")
        .texture("kubejs:item/lines/mob_guts/guardian_scale")
    event.create("ender_dragon_scale")
        .rarity("epic")
        .texture("kubejs:item/lines/mob_guts/ender_dragon_scale")
    event.create("ender_dragon_scale_dust")
        .texture("kubejs:item/lines/mob_guts/ender_dragon_scale_dust")
    event.create("wither_bone")
        .texture("kubejs:item/lines/mob_guts/wither_bone")
    event.create("the_ultimate_material")
        .texture("kubejs:item/lines/mob_guts/the_ultimate_material")

    // Crushed Shulker Shell (Shulker Shell recycling)
    event.create("crushed_shulker_shell")
        .texture("kubejs:item/lines/mob_guts/crushed_shulker_shell")
    event.create("niobium_palladium_grit")
        .texture("kubejs:item/lines/mob_guts/niobium_palladium_grit")

    // Pulsating Items
    event.create("pulsating_mesh")
        .texture("kubejs:item/mod/hostilenetworks/pulsating_mesh")
    event.create("pulsating_dust")
        .texture("kubejs:item/mod/hostilenetworks/pulsating_dust")

    // Sculk Items
    event.create("warden_horn")
        .texture("kubejs:item/lines/mob_guts/warden_horn")
    event.create("dischargement_core")
        .texture("kubejs:item/sculk/dischargement_core")
    event.create("warden_heart")
        .texture("kubejs:item/lines/mob_guts/warden_heart")
    event.create("hadal_shard")
        .texture("kubejs:item/sculk/hadal_shard")
    event.create("petri_dish_sterile")
    event.create("petri_dish_sculk")
        .texture("kubejs:item/lines/bioalloy/petri_dish_sculk")
    event.create("petri_dish_bacteria")
        .texture("kubejs:item/circuits/theme/wetware/petri_dish_bacteria")
    event.create("amalgamated_sculk")
        .texture("kubejs:item/lines/bioalloy/amalgamated_sculk")
    const energyCores = [
        ["bathyal", 2000000], // If changing values remember to also change tooltips
        ["abyssal", 4000000],
        ["hadal", 8000000]
    ]
    for (const [core, val] of energyCores) {
        let capacity = val
        event.create(`${core}_energy_core`)
            .attachCapability(CapabilityBuilder.ENERGY.customItemStack()
                .canReceive(i => true)
                .getEnergyStored(i => i.damageValue)
                .getMaxEnergyStored(i => capacity)
                .receiveEnergy((item, amount, sim) => {
                    let energy = item.damageValue
                    let recieved = Math.min(capacity - energy, amount)
                    if (!sim) {item.damageValue += recieved}
                    return recieved
                })
            )
            .maxStackSize(1)
            .barWidth(i => i.damageValue ? i.damageValue / capacity * 13 : 0)
            .barColor(i => Color.RED)
            .texture(`kubejs:item/sculk/core/${core}_energy_core`)
        event.create(`empty_${core}_energy_core`)
            .texture(`kubejs:item/sculk/core/${core}_energy_core`)
    }

    // Nethline intermediate products
    event.create("dusty_netherite_cluster")
        .texture("kubejs:item/lines/netherite/dusty_netherite_cluster")
    event.create("ardite_sponge")
        .texture("kubejs:item/lines/netherite/ardite_sponge")
    event.create("netherite_cluster")
        .texture("kubejs:item/lines/netherite/netherite_cluster")
    event.create("netherite_shards")
        .texture("kubejs:item/lines/netherite/netherite_shards")
    event.create("reactive_netherite_cluster")
        .texture("kubejs:item/lines/netherite/reactive_netherite_cluster")
    event.create("activated_netherite_scrap")
        .texture("kubejs:item/lines/netherite/pure_netherite_scrap")
        .glow(true);
    event.create("inert_nether_compound_ingot")
        .texture("kubejs:item/lines/netherite/inert_nether_compound_ingot")

    // Solid Naquadah Fuel Line
    event.create("empty_fuel_rod")
        .texture("kubejs:item/lines/naquadah_fuel/empty_fuel_rod")
    event.create("naquadah_fuel_mixture_dust")
    event.create("unsintered_naquadah_fuel_pellet")
    event.create("naquadah_fuel_pellet")
    event.create("naquadah_fuel_rod")
    event.create("hot_naquadah_fuel_rod")
    event.create("hot_depleted_naquadah_fuel_rod")
    event.create("depleted_naquadah_fuel_rod")
    event.create("depleted_naquadah_fuel_pellet")
    event.create("naquadah_waste")
    event.create("depleted_naquadah_fuel_dust")

    // Crystal Matrix Line
    event.create("raw_nanotube_substrate")
        .texture("kubejs:item/lines/matrix/raw_nanotube_substrate")
    event.create("prepared_nanotube_substrate")
        .texture("kubejs:item/lines/matrix/prepared_nanotube_substrate")
    event.create("graphite_electrode")
        .texture("kubejs:item/lines/matrix/graphite_electrode")
    event.create("nanotube_soot")
        .texture("kubejs:item/lines/matrix/nanotube_soot")
    event.create("grown_nanotube_substrate")
        .texture("kubejs:item/lines/matrix/grown_nanotube_substrate")
    event.create("carbon_nanotubes")
        .texture("kubejs:item/lines/matrix/carbon_nanotubes")
    event.create("adhered_matrix_mesh")
        .texture("kubejs:item/lines/matrix/adhered_matrix_mesh")

    // Terbium Line
    event.create("rare_earth_sulfate")
        .texture("kubejs:item/lines/terbium/rare_earth_sulfate")
    event.create("rare_earth_oxide")
        .texture("kubejs:item/lines/terbium/rare_earth_oxide")
    event.create("rare_earth_salt")
        .texture("kubejs:item/lines/terbium/rare_earth_salt")

    // Alien Scrapline
    event.create("alien_scrap")
        .texture("kubejs:item/lines/scrap/alien_scrap")
    event.create("ruined_hull")
        .texture("kubejs:item/lines/scrap/ruined_hull")
    event.create("ruined_machine_parts")
        .texture("kubejs:item/lines/scrap/ruined_machine_parts")
    event.create("ruined_capacitor")
        .texture("kubejs:item/lines/scrap/part/ruined_capacitor")
    event.create("ruined_sensor")
        .texture("kubejs:item/lines/scrap/part/ruined_sensor")
    event.create("ruined_emitter")
        .texture("kubejs:item/lines/scrap/part/ruined_emitter")
    event.create("crushed_capacitor")
        .texture("kubejs:item/lines/scrap/crushed_capacitor")
    event.create("magnetic_capacitor_dust")
        .texture("kubejs:item/lines/scrap/magnetic_capacitor_dust")
    event.create("crushed_sensor")
        .texture("kubejs:item/lines/scrap/crushed_sensor")
    event.create("necrosiderite_compound")
        .texture("kubejs:item/lines/scrap/necrosiderite_compound")
    event.create("necrosiderite_oxide_glass_dust")
        .texture("kubejs:item/lines/scrap/necrosiderite_oxide_glass_dust")

    // Photonic SoCs
    event.create("photonic_soc_base")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_base")
        .displayName("Photonic SoC Base")
    event.create("photonic_soc_inert")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_inert")
        .displayName("Photonic SoC: §7Inert§r")
    event.create("photonic_soc_red")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_r")
        .displayName("Photonic SoC: §4Red§r")
    event.create("photonic_soc_yellow")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_y")
        .displayName("Photonic SoC: §eYellow§r")
    event.create("photonic_soc_green")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_g")
        .displayName("Photonic SoC: §2Green§r")
    event.create("photonic_soc_cyan")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_c")
        .displayName("Photonic SoC: §bCyan§r")
    event.create("photonic_soc_blue")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_b")
        .displayName("Photonic SoC: §1Blue§r")
    event.create("photonic_soc_magenta")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_m")
        .displayName("Photonic SoC: §dMagenta§r")
    event.create("photonic_soc_active")
        .texture("kubejs:item/lines/prismac/psoc/photonic_soc_active")
        .displayName("Photonic SoC: Active")

    // Endgame Wafer items
    event.create("uxpic_wafer")
        .texture("kubejs:item/circuits/component/wafer/uxpic/wafer")
    event.create("uxpic_chip")
        .texture("kubejs:item/circuits/component/wafer/uxpic/chip")
        .displayName("UXPIC Chip")
    event.create("universe_boule")
        .texture("kubejs:item/circuits/component/wafer/heart_boule/boule")
        .displayName("Universe-doped Monocrystalline Silicon Boule")
    event.create("universe_wafer")
        .texture("kubejs:item/circuits/component/wafer/heart_boule/wafer")
        .displayName("Universe-doped Wafer")
    event.create("unactivated_multidimensional_cpu_wafer")
        .texture("kubejs:item/circuits/component/wafer/multidimensional_cpu/wafer_base")
        .displayName("Unactivated Multidimensional CPU Wafer")
    event.create("multidimensional_cpu_wafer")
        .texture("kubejs:item/circuits/component/wafer/multidimensional_cpu/wafer")
        .displayName("Multidimensional CPU Wafer")
    event.create("multidimensional_cpu_chip")
        .texture("kubejs:item/circuits/component/wafer/multidimensional_cpu/chip")
        .displayName("Multidimensional CPU Chip")
    event.create("hyperdynamic_ram_wafer")
        .texture("kubejs:item/circuits/component/wafer/hyperdynamic_ram/wafer")
        .displayName("Hyperdynamic RAM Wafer")
    event.create("hyperdynamic_ram_chip_base")
        .texture("kubejs:item/circuits/component/wafer/hyperdynamic_ram/chip_base")
        .displayName("Hyperdynamic RAM Chip Base")
    event.create("hyperdynamic_ram_chip")
        .texture("kubejs:item/circuits/component/wafer/hyperdynamic_ram/chip")
        .displayName("Hyperdynamic RAM Chip")

    // Complex SMDs
    const smds = [
        "transistor",
        "resistor",
        "capacitor",
        "diode",
        "inductor"
    ]

    for (const name of smds) {
        event.create(`complex_smd_${name}`).texture(`kubejs:item/circuits/component/smd/complex/${name}`)
    }

    // Extradim Circuit Intermediates
    event.create("miniature_microverse_container")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/miniature_microverse_container" })
    event.create("microverse_containment_unit")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/core/microverse_containment_unit"})
    event.create("extradimensional_quantum_cpu_core")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_quantum_cpu_core"})
    event.create("extradimensional_crystal_cpu_core")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_crystal_cpu_core"})
    event.create("extradimensional_wetware_cpu_core")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_wetware_cpu_core"})
    event.create("extradimensional_optical_cpu_core")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/core/microverse_containment_unit",
            layer1: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_optical_cpu_red",
            layer2: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_optical_cpu_green",
            layer3: "kubejs:item/circuits/theme/extradimensional/core/extradimensional_optical_cpu_blue"
        })

    // Post-tank circuits, circuit boards, processing units
    function Circuit(theme, type, volt) {
        event.create(`${theme}_${type}`)
            .textureJson({ layer0: `kubejs:item/circuits/theme/${theme}/circuit/${theme}_${type}` })
            .tag(`gtceu:circuits/${volt}`)
    }

    function Mainframe(theme, volt) {
        event.create(`${theme}_processor_mainframe`)
            .textureJson({ layer0: `kubejs:item/circuits/theme/${theme}/circuit/${theme}_processor_mainframe_base`, layer1: `kubejs:item/circuits/theme/${theme}/circuit/${theme}_processor_mainframe_lights` })
            .tag(`gtceu:circuits/${volt}`)
    }

    Circuit("optical", "processor", "zpm")
    Circuit("optical", "processor_assembly", "uv")
    Circuit("optical", "processor_computer", "uhv")
    Mainframe("optical", "uev")

    event.create("null_infused_circuit_board")
        .textureJson({ layer0: "kubejs:item/circuits/theme/extradimensional/board/null_infused_circuit_board" })
    event.create("null_infused_printed_circuit_board")
        .textureJson({
            layer0: "kubejs:item/circuits/theme/extradimensional/board/null_infused_circuit_board",
            layer1: "kubejs:item/circuits/theme/extradimensional/board/null_infused_printed_circuit_board"
        })
    event.create("extradimensional_processing_unit")
        .textureJson({
            layer0: "kubejs:item/circuits/theme/extradimensional/board/null_infused_circuit_board",
            layer1: "kubejs:item/circuits/theme/extradimensional/board/extradimensional_processing_unit"
        })
    Circuit("extradimensional", "processor", "uv")
    Circuit("extradimensional", "processor_assembly", "uhv")
    Circuit("extradimensional", "processor_computer", "uev")
    Mainframe("extradimensional", "max")

    // Smores
    const smoreHunger = [
        4, 10, 22, 46, 94, 190, 382
    ]
    const smoreSaturation = [
        12, 76, 379, 1675, 7032, 28805, 116587
    ]
    let effDuration = 300;

    for (let i = 0; i <= 6; i++) {
        event.create(`smore_${2 ** i}`).food(food => {
            food.hunger(smoreHunger[i] * 2);
            food.saturation(smoreSaturation[i] / (1 + 4 * smoreHunger[i]) * 2);
            food.effect("absorption", effDuration, 1, 1);
            food.effect("speed", effDuration, 1, 1);
            food.effect("haste", effDuration, 1, 1);

            if (i > 2) {
                food.effect("saturation", effDuration, 1, 1);
                food.effect("health_boost", effDuration, 1, 1);
            }

            food.alwaysEdible();

        }).texture(`kubejs:item/smore/smore_${2 ** i}`)

        effDuration *= 2;
    }

    // Universal Circuits
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev"]
    tiers.forEach((universal_circuit) => {
        event.create(`${universal_circuit}_universal_circuit`)
            .tag(`gtceu:circuits/${universal_circuit}`)
            .tag("gtceu:circuits/universal")
            .displayName(`${universal_circuit.toUpperCase()} Universal Circuit`)
            .tooltip("§7A Universal Circuit")
            .textureJson({ layer0: `kubejs:item/circuits/universal/${universal_circuit}_universal_circuit` })
    })

    // Phantom Paste
    event.create("framedblocks:phantom_paste")

    // Priscore Line
    event.create("chromatically_reactive_cluster")
        .texture("kubejs:item/lines/prismac/infinity/intermediates/chromatically_reactive_cluster")
        .displayName("Chromatically Reactive Cluster")
    event.create("chromatically_reactive_shard")
        .texture("kubejs:item/lines/prismac/infinity/intermediates/chromatically_reactive_shard")
        .displayName("Chromatically Reactive Shard")
    event.create("chromatically_inert_frame")
        .texture("kubejs:item/lines/prismac/infinity/intermediates/chromatically_inert_frame")
        .displayName("Chromatically Inert Frame")

    // Protomatter
    event.create("protomatter")
        .texture("kubejs:item/lines/antimatter/protomatter")

    // P.R.I.S.M. Panes
    event.create("prism_pane")
        .texture("kubejs:item/lines/prismac/psoc/prism_pane")
        .displayName("P.R.I.S.M. Glass Pane")
})
