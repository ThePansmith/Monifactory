
/**
 * Item Registry - defines ID, name, texture
 * and certain other properties of custom items.
 */
StartupEvents.registry('item', event => {

    // Regular Microminers
    for (let index = 1; index <= 12; index++) {
        event.create('microminer_t' + index).maxStackSize(16).texture('kubejs:item/microverse/microminer_t' + index)
    }


    // HM/EM Microminers
    if (!isNormalMode) {
        event.create('microminer_t4half').maxStackSize(16).texture("kubejs:item/microverse/microminer_t4half")
        event.create('microminer_t8half').maxStackSize(16).texture("kubejs:item/microverse/microminer_t8half")
    }


    // Pristine Matters
    const pristine_matter = [
        ['1', '#c0c0b0'],
        ['2', '#f5f5f1'],
        ['3', '#736055'],
        ['4', '#f17d3d'],
        ['4half', '#eef487'],
        ['5', '#fccc6a'],
        ['6', '#58a14e'],
        ['7', '#173639'],
        ['8', '#dcdbe4'],
        ['8half', '#4ebcef']
    ]

    if (!isNormalMode) {
        for (const [tier, color] of pristine_matter) {
            event.create('stabilized_microminer_t' + tier)
                .maxStackSize(16)
                .texture('kubejs:item/microverse/microminer_t' + tier)
                .glow(true);
            event.create(`pristine_matter_t${tier}`)
                .textureJson({ layer0: 'kubejs:item/prediction' })
                .color(0, color)
                .glow(true);

        }
    }


    // Microminer Components
    event.create('basic_mining_laser').displayName("§eBasic Mining Laser")
    event.create('reinforced_mining_laser').displayName("§bReinforced Mining Laser")
    event.create('supercharged_laser_array').displayName("§eSupercharged Laser Array")
    event.create('basic_micro_miner_guidance_system').displayName("§eBasic Micro Miner Guidance System")
    event.create('advanced_micro_miner_guidance_system').displayName("§eAdvanced Micro Miner Guidance System")
    event.create('gem_sensor').displayName("Gemstone Sensor")
    event.create('warp_engine').displayName("§dWarp Engine")
    event.create('hadal_warp_engine').displayName("§dHadal Warp Engine")
    event.create('universal_navigator').displayName("§dUniversal Navigator")
    event.create('extradimensional_navigator').displayName("§dExtradimensional Navigator")
    event.create('quantum_flux').displayName("§dQuantum Flux")


    // Heavy platings
    event.create('quantum_fluxed_eternium_heavy_plating')
        .displayName("§dQuantum Fluxed Eternium Heavy Plating")
        .texture("kubejs:item/microverse/eternium_heavy_plating")
    event.create('universe_resistant_neutronium_heavy_plating')
        .displayName("§dUniverse Resistant Neutronium Heavy Plating")
        .texture("kubejs:item/microverse/neutronium_heavy_plating")
    event.create('elementally_infused_omnic_matrix_heavy_plating')
        .displayName("§dElementally Infused Omnic Matrix Heavy Plating")
        .texture("kubejs:item/microverse/omnic_matrix_heavy_plating")
    event.create('dimensionally_stabilized_infinity_heavy_plating')
        .displayName("§dDimensionally Stabilized Infinity Heavy Plating")
        .texture("kubejs:item/microverse/infinity_heavy_plating")
    event.create('timeless_monic_heavy_plating')
        .displayName("§dTimeless Monic Heavy Plating")
        .texture("kubejs:item/microverse/dormant_monic_heavy_plating")
    event.create('causality_exempt_monic_heavy_plating')
        .displayName("§1Causality Exempt Monic Heavy Plating")
        .texture("kubejs:item/microverse/monic_heavy_plating")


    // Monicoins
    if (isNormalMode) {
        event.create('moni_penny')
    }
    event.create('moni_nickel')
    event.create('moni_quarter')
    event.create('moni_dollar').glow(true)


    // Widgets
    event.create('wooden_widget').displayName("Wooden Widget")
    event.create('wooden_widget_left').displayName("Wooden Widget Left Part")
    event.create('wooden_widget_right').displayName("Wooden Widget Right Part")
    event.create('stone_widget').displayName("Stone Widget")
    event.create('stone_widget_up').displayName("Stone Widget Up Side")
    event.create('stone_widget_down').displayName("Stone Widget Down Side")
    event.create('alloy_widget').displayName("Alloy Widget")
    event.create('ender_widget').displayName("Ender Widget")


    // Magnetron
    if (!isNormalMode) {
        event.create('magnetron')
    }


    // Spacefaring Items
    event.create('radiation_layer')
    event.create('pressure_layer')
    event.create('thermal_cloth')
    event.create('unprepared_space_helmet')
    event.create('unprepared_space_chestpiece')
    event.create('unprepared_space_leggings')
    event.create('unprepared_space_boots')


    // Data
    event.create('impossible_realm_data').displayName("§bImpossible Realm Data")
    event.create('dragon_lair_data').displayName("§dDragon Lair Data")
    event.create('wither_realm_data').displayName("§dWither Realm Data")
    event.create('deep_dark_data').displayName("§dDeep Dark Data")
    event.create('lair_of_the_warden_data').displayName("§dLair Of The Warden Data")
    event.create('stellar_creation_data').displayName("§bStellar Creation Data")
    event.create('universe_creation_data').displayName("§dUniverse Creation Data")
    event.create('shattered_star_data').displayName("§dShattered Star Data")
    event.create('shattered_universe_data').displayName("§dShattered Universe Data")
    event.create('corrupted_universe_data').displayName("§dCorrupted Universe Data")


    // Creative Data
    event.create('creative_tank_data')
    event.create('creative_storage_data')
    event.create('creative_computation_data')
    event.create('creative_energy_data')
    if (!isNormalMode) event.create('omnic_data')

    //Infinity Fluid Cell Base
    event.create('infinity_cell_base').displayName("ME Infinity Cell Base")


    // Endgame Items
    event.create('diamond_lattice')
    event.create('ultimate_gem').displayName("§dUltimate Gem").glow(true)
    event.create('mote_of_omnium').displayName("Mote of Omnium").glow(true).rarity("epic")
    event.create('heart_of_a_universe').displayName("§dHeart Of A Universe")
    event.create('exotic_materials_catalyst').displayName("Exotic Materials Catalyst")
    event.create('eternal_catalyst').displayName("Eternal Catalyst")


    // Infinity
    event.create('infinity_catalyst').rarity("epic")
    event.create('dormant_furious_infinity_catalyst')
    event.create('furious_infinity_catalyst').rarity("epic")
    event.create('inert_serene_infinity_catalyst')
    event.create('serene_infinity_catalyst').rarity("epic")
    event.create('dormant_infinity_compound_ingot')


    // Monium
    event.create('field_stabilised_omnic_pulsar_compound')
    event.create('quasi_stable_neutron_star').displayName('Quasi-Stable Neutron Star')


    // Singularities
    event.create('singularity_containment_unit')
    event.create('contained_singularity')


    // Ultimate Tools
    event.create('ultimate_core').texture('kubejs:item/ultimate/core')
    event.create('ultimate_file').texture('kubejs:item/ultimate/file').rarity("epic").maxStackSize(1)
    event.create('ultimate_hammer').texture('kubejs:item/ultimate/hammer').rarity("epic").maxStackSize(1)
    event.create('ultimate_screwdriver').texture('kubejs:item/ultimate/screwdriver').rarity("epic").maxStackSize(1)
    event.create('ultimate_wrench').texture('kubejs:item/ultimate/wrench').rarity("epic").maxStackSize(1)
    event.create('ultimate_wire_cutter').texture('kubejs:item/ultimate/wire_cutter').rarity("epic").maxStackSize(1)


    // Infinity Tools
    event.create('infinity_power_unit').rarity("epic").maxStackSize(1)
    event.create('infinity_file').rarity("epic").maxStackSize(1)
    event.create('infinity_hammer').rarity("epic").maxStackSize(1)
    event.create('infinity_screwdriver').rarity("epic").maxStackSize(1)
    event.create('infinity_wrench').rarity("epic").maxStackSize(1)
    event.create('infinity_wire_cutter').rarity("epic").maxStackSize(1)


    // Solidified Elements
    const solidified_elements = [
        ['argon', '#12bc12'],
        ['chlorine', '#2d6d6d'],
        ['fluorine', '#4b7ba6'],
        ['helium', '#e8ea86'],
        ['hydrogen', '#12128a'],
        ['krypton', '#7ffe7f'],
        ['mercury', '#ad9dce'],
        ['neon', '#b88a8a'],
        ['nitrogen', '#129192'],
        ['oxygen', '#4494bc'],
        ['radon', '#bc38bc'],
        ['xenon', '#12bcbc'],
        ['bromine', '#7c1c05'],
        ['experience', '#04ff00']
    ]

    for (const [element, elemColor] of solidified_elements) {
        event.create(`solidified_${element}`)
            .textureJson({ layer0: 'kubejs:item/solidified_element' })
            .color(0, elemColor);
    }


    // Dense Hydrogen (Solidified Hydrogen is part of Solidified Elements section)
    event.create('dense_hydrogen').rarity('Uncommon')
    event.create('ultra_dense_hydrogen').rarity('Rare')


    // Stabilized Elements
    const stabilized_elements = [
        ['einsteinium', '#ce9f00'],
        ['berkelium', '#a33f20'],
        ['neptunium', '#486d7b'],
        ['plutonium', '#ba2727'],
        ['uranium', '#1d891d'],
        ['curium', '#58307f'],
        ['californium', '#7d0222'],
        ['americium', '#287869'],
        ['oganesson', '#443936']
    ]

    for (const [element, elemColor] of stabilized_elements) {
        event.create(`stabilized_${element}`)
            .textureJson({ layer0: 'kubejs:item/stabilized_element' })
            .color(0, elemColor);
    }


    // Misc Items
    event.create('dilithium_crystal')
    event.create('ender_star').glow(true)
    event.create('endest_star').glow(true)
    event.create('grains_of_innocence')
    event.create('radium_salt').rarity('Epic')

    // Thrusters
    const thrusters = ['conductive_iron','leadstone','electrical_steel','hardened','energetic','reinforced','resonant','vibrant','dark_soularium','fluxed']

    thrusters.forEach(thruster => {
    event.create(`${thruster}_thruster`).texture(`kubejs:item/thruster/${thruster}`)
    })

    // Planet dusts
    event.create('moon_dust')
    event.create('mars_dust')
    event.create('venus_dust')
    event.create('mercury_dust')


    // Thermal Series item ports
    event.create('aerotheum_dust').texture('kubejs:item/aerotheum_blend')
    event.create('cryotheum_dust').texture('kubejs:item/cryotheum_blend')
    event.create('petrotheum_dust').texture('kubejs:item/petrotheum_blend')
    event.create('pyrotheum_dust').texture('kubejs:item/pyrotheum_blend')
    event.create('primal_mana').rarity('epic')

    event.create('destabilized_clathrate').rarity('uncommon')
    event.create('energized_clathrate').rarity('uncommon')
    event.create('resonant_clathrate').rarity('rare')


    // Ender Spore
    if (!isNormalMode) {
        event.create('ender_spore')
    }


    // Thermal Augments
    event.create('redstone_transmission_coil')
    event.create('thermal:upgrade_augment_1');
    event.create('thermal:upgrade_augment_2');
    event.create('thermal:upgrade_augment_4');
    event.create('thermal:upgrade_augment_3');


    // Jetpack Units
    event.create('empty_fluxed_jetpack_unit')
    event.create('empty_soularium_jetpack_unit')
    event.create('flight_control_unit')
    event.create('glowstone_elevation_unit')
    event.create('cryotheum_coolant_unit')

    // EnderIO Capacitors
    // TODO: GIVE CAPACITORS LORE AND NBT FOR THEM TO WORK
    event.create('compressed_octadic_capacitor')
    event.create('double_compressed_octadic_capacitor')


    // Extra Utilities 2
    event.create('resonating_crystal')
    event.create('ender_shard')


    // Nether Star Crafting Components
    event.create('nether_star_north').displayName("Nether Star North Tip")
    event.create('nether_star_south').displayName("Nether Star South Tip")
    event.create('nether_star_east').displayName("Nether Star East Tip")
    event.create('nether_star_west').displayName("Nether Star West Tip")
    event.create('nether_star_center').displayName("Nether Star Center")


    // ArmorPlus monster drops
    event.create('guardian_scale').rarity('rare')
    event.create('ender_dragon_scale').rarity('epic')
    event.create('ender_dragon_scale_dust')
    event.create('wither_bone')
    event.create('the_ultimate_material')


    // Pulsating Items
    event.create('pulsating_mesh')
    event.create('pulsating_dust')


    // Sculk Items
    event.create('warden_horn')
    event.create('sculk_core')
    event.create('mesol_energy_core')
    event.create('bathyal_energy_core')
    event.create('abyssal_energy_core')
    event.create('hadal_energy_core')
    event.create('dischargement_core')
    event.create('warden_heart')
    event.create('hadal_shard')


    // Netherite Processing intermediate products
    event.create('crushed_ancient_debris').texture('kubejs:item/netherite/crushed_ancient_debris')
    event.create('purified_ancient_debris').texture('kubejs:item/netherite/purified_ancient_debris')
    event.create('refined_ancient_debris').texture('kubejs:item/netherite/refined_ancient_debris')
    event.create('impure_ancient_debris_dust').texture('kubejs:item/netherite/impure_ancient_debris_dust')
    event.create('purified_ancient_debris_dust').texture('kubejs:item/netherite/purified_ancient_debris_dust')
    event.create('processed_ancient_debris_dust').texture('kubejs:item/netherite/processed_ancient_debris_dust')
    event.create('inert_netherite_scrap').texture('kubejs:item/netherite/inert_netherite_scrap')
    event.create('inert_nether_compound_ingot').texture('kubejs:item/netherite/inert_nether_compound_ingot')


    // Alien Scrapline
    event.create('alien_scrap')
    event.create('ruined_hull')
    event.create('ruined_machine_parts')
    event.create('ruined_capacitor')
    event.create('ruined_sensor')
    event.create('ruined_emitter')
    event.create('crushed_capacitor')
    event.create('magnetic_capacitor_dust')
    event.create('crushed_sensor')
    event.create('holmium_compound')
    event.create('holmium_oxide_glass_dust')


    // Post-Tank Wafer items
    event.create('universe_boule').texture('kubejs:item/universalwafer/universal_boule').displayName('Universe-doped Monocrystalline Silicon Boule')
    event.create('universe_wafer').texture('kubejs:item/universalwafer/universal_wafer').displayName('Universe-doped Wafer')
    event.create('unactivated_multidimensional_cpu_wafer').texture('kubejs:item/multidimensionalcpu/unactivated_multidimensional_cpu_wafer').displayName('Unactivated Multidimensional CPU Wafer')
    event.create('multidimensional_cpu_wafer').texture('kubejs:item/multidimensionalcpu/multidimensional_cpu_wafer').displayName('Multidimensional CPU Wafer')
    event.create('multidimensional_cpu_chip').texture('kubejs:item/multidimensionalcpu/multidimensional_cpu_chip').displayName('Multidimensional CPU Chip')
    event.create('hyperdynamic_ram_wafer').texture('kubejs:item/hyperdynamicram/hyperdynamic_ram_wafer').displayName('Hyperdynamic RAM Wafer')
    event.create('hyperdynamic_ram_chip_base').texture('kubejs:item/hyperdynamicram/hyperdynamic_ram_chip').displayName('Hyperdynamic RAM Chip Base')
    event.create('hyperdynamic_ram_chip').texture('kubejs:item/hyperdynamicram/activated_hyperdynamic_ram_chip').displayName('Hyperdynamic RAM Chip')
    event.create('quantum_soc_wafer').texture('kubejs:item/quantumsoc/quantum_soc_wafer').displayName('Quantum SoC Wafer')
    event.create('quantum_soc_chip_base').texture('kubejs:item/quantumsoc/quantum_soc_chip_base').displayName('Quantum SoC Chip Base')
    event.create('quantum_soc_chip').texture('kubejs:item/quantumsoc/quantum_soc_chip').displayName('Quantum SoC Chip')


    // Complex SMDs
    const smds = [
        'transistor',
        'resistor',
        'capacitor',
        'diode',
        'inductor'
    ]

    for (const name of smds) {
        event.create(`complex_smd_${name}`)
    }


    // Post-tank circuits, circuit boards, processing units
    function Circuit(theme, type, volt) {
        event.create(`${theme}_${type}`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_${type}` })
            .tag(`gtceu:circuits/${volt}`)
    }

    function Mainframe(theme, volt) {
        event.create(`${theme}_processor_mainframe`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_processor_mainframe_base`, layer1: `kubejs:item/circuits/${theme}_processor_mainframe_lights` })
            .tag(`gtceu:circuits/${volt}`)
    }

    function Unit(theme) {
        event.create(`${theme}_processing_unit`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_processing_unit` })
        event.create(`${theme}_circuit_board`)
            .textureJson({ layer0: `kubejs:item/circuits/${theme}_circuit_board` })
    }

    Unit('matter')
    Circuit('matter', 'processor', "zpm")
    Circuit('matter', 'processor_assembly', "uv")
    Circuit('matter', 'processor_computer', "uhv")
    Mainframe('matter', "uev")

    Unit('dimensional')
    Circuit('dimensional', 'processor', "uv")
    Circuit('dimensional', 'processor_assembly', "uhv")
    Circuit('dimensional', 'processor_computer', "uev")
    Mainframe('dimensional', "uiv")

    Unit('monic')
    Circuit('monic', 'processor', "uhv")
    Circuit('monic', 'processor_assembly', "uev")
    Circuit('monic', 'processor_computer', "uiv")
    Mainframe('monic', "max")

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

        }).maxStackSize(64)

        effDuration *= 2;
    }

    //Universal Circuits
    const tiers = ["ulv", "lv", "mv", "hv", "ev", "iv", "luv", "zpm", "uv", "uhv", "uev", "uiv"]
    tiers.forEach((universal_circuit) => {
        event.create(universal_circuit + "_universal_circuit")
            .tag("gtceu:circuits/" + universal_circuit)
            .tag("gtceu:circuits/universal")
            .displayName(universal_circuit.toUpperCase() + " Universal Circuit")
            .tooltip("§7A Universal Circuit")
            .textureJson({ layer0: `kubejs:item/circuits/universal/${universal_circuit}_universal_circuit` })
    })
})
