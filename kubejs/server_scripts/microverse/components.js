/**
 * Microminer components.
 * Each of these are a custom KubeJS item or block used in the creation of Micro Miners.
 */
ServerEvents.recipes(event => {
    // Basic Guidance
    event.shaped('kubejs:basic_micro_miner_guidance_system', [
        'GPG',
        'PCP',
        'CCC'
    ], {
        G: 'gtceu:lv_sensor',
        P: 'gtceu:double_steel_plate',
        C: '#gtceu:circuits/mv'
    })

    // Basic laser
    event.shaped('kubejs:basic_mining_laser', [
        ' R ',
        'QGQ',
        'QGQ'
    ], {
        R: 'minecraft:redstone_block',
        Q: 'minecraft:quartz',
        G: 'minecraft:glass'
    })

    // Reinforced Laser
    event.recipes.extendedcrafting.shaped_table('kubejs:reinforced_mining_laser', [
        ' R R ',
        'GAGAG',
        'GAGAG',
        'GBGBG',
        'QCECQ'
    ], {
        R: 'minecraft:redstone_block',
        G: 'minecraft:glass',
        A: 'kubejs:solidified_argon',
        B: 'minecraft:quartz_block',
        Q: 'minecraft:quartz',
        C: '#gtceu:circuits/hv',
        E: 'enderio:octadic_capacitor'
    })

    // Advanced Guidance
    event.shaped('kubejs:advanced_micro_miner_guidance_system', [
        'AWA',
        'WCW',
        'CCC'
    ], {
        A: 'gtceu:ev_sensor',
        W: 'gtceu:double_tungsten_carbide_plate',
        C: '#gtceu:circuits/ev'
    })

    // Warp Core
    event.shaped('kubejs:warp_core', [
        'LTL',
        'TNT',
        'LTL'
    ], {
        L: 'gtceu:lumium_block',
        N: 'gtceu:nether_star_block',
        T: 'gtceu:titanium_block'
    })

    // Warp Controller
    event.shaped('kubejs:warp_controller', [
        'SMS',
        'CHC',
        'SCS'
    ], {
        C: '#gtceu:circuits/ev',
        H: 'gtceu:ev_machine_hull',
        M: 'gtceu:computer_monitor_cover',
        S: 'gtceu:ev_sensor'
    })

    // Warp Core
    event.shaped('kubejs:universal_warp_core', [
        'LTL',
        'TNT',
        'LTL'
    ], {
        L: 'gtceu:void_empowered_block',
        N: 'kubejs:warp_core',
        T: 'kubejs:bathyal_energy_core'
    })

    // Warp Controller
    event.shaped('kubejs:universal_warp_controller', [
        'SMS',
        'CHC',
        'SFS'
    ], {
        C: '#gtceu:circuits/luv',
        H: 'kubejs:warp_controller',
        M: 'kubejs:abyssal_energy_core',
        F: 'extendedcrafting:the_ultimate_catalyst',
        S: 'gtceu:void_empowered_block'
    })

    // Warp engine
    event.recipes.gtceu.assembly_line('warp_engine')
        .itemInputs('gtceu:microversium_frame',
            '6x gtceu:enderium_plate',
            '8x ae2:quantum_ring',
            'ae2:quantum_link',
            '2x #forge:plates/crystal_matrix',
            '2x gtceu:iv_field_generator',
            'kubejs:fluxed_thruster',
            'kubejs:dark_soularium_thruster')
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack('ae2:quantum_ring').EUt(480).duration(1200))
        .itemOutputs('kubejs:warp_engine')
        .inputFluids('gtceu:soldering_alloy 1152')
        .duration(1800)
        .EUt(30720)

    // Supercharged laser array
    event.recipes.gtceu.chemical_reactor('supercharged_laser_array')
        .itemInputs('kubejs:reinforced_mining_laser')
        .inputFluids('gtceu:radon 1000')
        .itemOutputs('kubejs:supercharged_laser_array')
        .duration(200)
        .EUt(2000)

    // Universal Navigator
    event.recipes.gtceu.assembly_line('universal_navigator')
        .itemInputs('gtceu:microversium_frame',
            '24x gtceu:microversium_plate',
            'gtceu:gravi_star',
            '2x gtceu:uv_sensor',
            '2x gtceu:uv_robot_arm',
            '#gtceu:circuits/uhv',
            '2x gtceu:dense_naquadah_alloy_plate',
            '4x gtceu:enriched_naquadah_trinium_europium_duranide_quadruple_wire',
            '64x gtceu:fine_tritanium_wire')
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:naquadria 576')
        .itemOutputs('kubejs:universal_navigator')
        .stationResearch(b => b.researchStack('kubejs:stellar_creation_data').CWUt(96, 384000).EUt(491520))
        .duration(6000)
        .EUt(491520)

    // Extradimensional Navigator
    event.recipes.gtceu.assembly_line('extradimensional_navigator')
        .itemInputs('gtceu:infinity_frame',
            '4x kubejs:universal_navigator',
            '4x gtceu:uev_field_generator',
            '24x gtceu:holmium_plate',
            '4x #gtceu:circuits/uiv',
            '2x gtceu:uiv_sensor',
            '2x gtceu:uiv_emitter',
            '4x gtceu:dense_naquadah_alloy_plate',
            '8x gtceu:activated_netherite_quadruple_wire',
            '32x gtceu:fine_ruthenium_trinium_americium_neutronate_wire')
        .inputFluids('gtceu:soldering_alloy 11520', 'gtceu:crystal_matrix 5760', 'gtceu:naquadria 2304')
        .itemOutputs('kubejs:extradimensional_navigator')
        .stationResearch(b => b.researchStack('kubejs:universal_navigator').CWUt(160, 640000).EUt(3932160))
        .duration(6000)
        .EUt(3932160)

    // Electrum Engine Frame
    event.shaped('kubejs:electrum_micro_miner_frame', [
        'PRP',
        'R R',
        'PRP'
    ], {
        P: 'gtceu:electrum_plate',
        R: 'gtceu:electrum_rod',
    })

    // Signalum Engine Frame
    event.shaped('kubejs:signalum_micro_miner_frame', [
        'PRP',
        'R R',
        'PRP'
    ], {
        P: 'gtceu:signalum_plate',
        R: 'gtceu:signalum_rod',
    })

    // Enderium Engine Frame
    event.shaped('kubejs:enderium_micro_miner_frame', [
        'PRP',
        'R R',
        'PRP'
    ], {
        P: 'gtceu:enderium_plate',
        R: 'gtceu:enderium_rod',
    })

    // Electrum Engine Core
    event.recipes.gtceu.canner("electrum_micro_miner_core")
        .itemInputs("kubejs:electrum_micro_miner_frame", "2x minecraft:redstone_block")
        .itemOutputs("kubejs:electrum_micro_miner_core")
        .duration(500)
        .EUt(480)

    // Signalum Engine Core
    event.recipes.gtceu.canner("signalum_micro_miner_core")
        .itemInputs("kubejs:signalum_micro_miner_frame", "4x minecraft:redstone_block")
        .itemOutputs("kubejs:signalum_micro_miner_core")
        .duration(1000)
        .EUt(2000)

    // Enderium Engine Core
    event.recipes.gtceu.canner("enderium_micro_miner_core")
        .itemInputs("kubejs:enderium_micro_miner_frame", "8x minecraft:redstone_block")
        .itemOutputs("kubejs:enderium_micro_miner_core")
        .duration(2000)
        .EUt(8000)

    // Gemstone Sensor - Optical Sensor has been replaced with a Quantum Eye, which is slightly cheaper.
    event.shaped('kubejs:gem_sensor', [
        ' A ',
        'WCW',
        ' W '
    ], {
        A: 'gtceu:quantum_eye',
        W: 'gtceu:tungsten_carbide_plate',
        C: 'gtceu:iv_sensor'
    })
})
