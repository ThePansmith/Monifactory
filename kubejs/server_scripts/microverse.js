// Recipes for micro miners and stuff
// Not to be confused with gregtech/microverse_recipes.js, that defines what is mined, this file defines how to make things

ServerEvents.recipes(event => {

    //
    // Miners
    //

    // T1 Microminer

    event.shaped(
        'kubejs:microminer_t1', [
            ' G ',
            'LAL',
            'TMT'
        ], {
            G: 'kubejs:basic_micro_miner_guidance_system',
            L: 'kubejs:basic_mining_laser',
            A: 'gtceu:lv_field_generator',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:conductive_iron"}').weakNBT(),
            M: 'gtceu:lv_combustion'
        }
    )

    // T2 Microminer
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t2', [
            '  G  ',
            ' PAP ',
            'LBFBL',
            'PPCPP',
            ' TTT '
        ], {
            G: 'kubejs:basic_micro_miner_guidance_system',
            P: 'gtceu:double_titanium_plate',
            A: 'gtceu:stainless_steel_crate',
            L: 'kubejs:basic_mining_laser',
            B: 'gtceu:lv_field_generator',
            F: 'kubejs:electrum_micro_miner_core',
            C: 'gtceu:mv_combustion',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:electrical_steel"}').weakNBT()
        }, 2
    )

    // T3 Microminer

    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t3', [
            '  G G  ',
            '  PPP  ',
            '  ABA  ',
            ' LPBPL ',
            'PPFBFPP',
            'PPPCPPP',
            '  TTT  '
        ], {
            G: 'kubejs:basic_micro_miner_guidance_system',
            P: 'gtceu:double_tungsten_carbide_plate',
            A: 'gtceu:mv_field_generator',
            B: 'gtceu:titanium_crate',
            L: 'kubejs:reinforced_mining_laser',
            F: 'kubejs:electrum_micro_miner_core',
            C: 'gtceu:hv_combustion',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:reinforced"}').weakNBT()
        }, 3
    )

    // T4 Microminer

    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t4', [
            '   G   ',
            '  LWL  ',
            ' SAWAS ',
            ' SBWBS ',
            ' SFWFS ',
            ' TDWDT ',
            '  T T  '
        ], {
            G: 'kubejs:basic_micro_miner_guidance_system',
            L: 'kubejs:reinforced_mining_laser',
            W: 'gtceu:double_tungsten_carbide_plate',
            S: 'gtceu:double_signalum_plate',
            A: 'gtceu:tungsten_steel_crate',
            B: 'gtceu:hv_field_generator',
            F: 'kubejs:signalum_micro_miner_core',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:energetic"}').weakNBT(),
            D: 'thermal:dynamo_magmatic' // TODO: replace with reactant dynamo when possible
        }, 3
    )

    // T5 Microminer
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t5', [
            '  G G  ',
            '  I I  ',
            ' SILIS ',
            'SSABASS',
            ' IFCFI ',
            'IIIPIII',
            '  TTT  '
        ], {
            G: 'kubejs:advanced_micro_miner_guidance_system',
            I: 'gtceu:double_iridium_plate',
            S: 'gtceu:double_signalum_plate',
            L: 'kubejs:supercharged_laser_array',
            A: 'gtceu:ev_field_generator',
            B: 'gtceu:mv_super_chest',
            F: 'kubejs:signalum_micro_miner_core',
            C: 'nuclearcraft:fission_reactor_controller',
            P: 'nuclearcraft:fission_reactor_port',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:vibrant"}').weakNBT()
        }, 3
    )

    // T6 Microminer
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t6', [
            ' LG GL ',
            'LEE EEL',
            'EEEEEEE',
            ' EAFAE ',
            'EBFCFBE',
            ' EPPPE ',
            ' ETTTE '
        ], {
            L: 'kubejs:supercharged_laser_array',
            G: 'kubejs:advanced_micro_miner_guidance_system',
            E: 'gtceu:double_enderium_plate',
            A: 'gtceu:mv_super_chest',
            F: 'kubejs:enderium_micro_miner_core',
            B: 'gtceu:iv_field_generator',
            C: 'nuclearcraft:fission_reactor_controller',
            P: 'nuclearcraft:fission_reactor_port',
            T: Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:resonant"}').weakNBT()
        }, 3
    )

    // T7 Microminer
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t7', [
            ' L  D  L ',
            ' DDDGDDD ',
            'LDDDDDDDL',
            'DDDDPDDDD',
            'DDDAEADDD',
            'DDDDPDDDD',
            'D DDDDD D',
            'D DDDDD D',
            'D WW WW D'
        ], {
            L: 'kubejs:supercharged_laser_array',
            D: 'gtceu:double_draconium_plate',
            G: 'kubejs:advanced_micro_miner_guidance_system',
            P: 'draconicevolution:particle_generator',
            A: 'gtceu:luv_field_generator',
            E: 'kubejs:ender_energy_manipulator', // TODO: REPLACE WITH REAL DE COMPONENT
            W: 'kubejs:warp_engine'
        }, 4
    )

    // T8 Microminer
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t8', [
            ' G C C G ',
            ' WCCLCCW ',
            ' WCIIICW ',
            'LCIIIIICL',
            'WCAABAACW',
            'WCWWIWWCW',
            'WDCCICCDW',
            'WMWWIWWMW',
            ' E     E '
        ], {
            G: 'kubejs:advanced_micro_miner_guidance_system',
            C: 'gtceu:double_crystal_matrix_plate',
            W: 'gtceu:double_tungsten_carbide_plate',
            L: 'kubejs:supercharged_laser_array',
            I: 'gtceu:double_iridium_plate',
            A: 'gtceu:hv_super_chest',
            B: 'gtceu:zpm_field_generator',
            D: 'kubejs:warp_core',
            M: 'kubejs:warp_controller',
            E: 'kubejs:warp_engine'
        }, 4
    )

    // T9 Microminer

    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t9', [
            '    Q    ',
            '   QQQ   ',
            '   QUQ   ',
            '  QQAQQ  ',
            ' QQQQQQQ ',
            'QQBQRQBQQ',
            ' QQQCQQQ ',
            ' QQQQQQQ ',
            'QQ W W QQ'
        ], {
            Q: 'kubejs:quantum_fluxed_eternium_heavy_plating',
            U: 'kubejs:universal_navigator',
            A: 'gtceu:uv_field_generator',
            B: 'gtceu:ev_super_chest',
            R: 'draconicevolution:reactor_stabilizer', // TODO: REPLACE WITH THE REAL DE COMPONENT
            C: 'draconicevolution:reactor_core', // TODO: REPLACE WITH THE REAL DE COMPONENT
            W: 'kubejs:warp_engine'
        }
    )

    // T10 Microminer

    event.recipes.extendedcrafting.shaped_table(
        'kubejs:microminer_t10', [
            '  N   N  ',
            ' NUN NUN ',
            ' NNN NNN ',
            ' NNN NNN ',
            ' NCNNNCN ',
            'PNRN NRNP',
            'NNNNANNNN',
            ' N NNN N ',
            'N  W W  N'
        ], {
            N: 'gtceu:double_neutronium_plate',
            U: 'kubejs:universal_navigator',
            C: 'draconicevolution:reactor_core', // TODO: REPLACE WITH THE REAL DE COMPONENT
            P: 'solarflux:sp_avaritia.neutronium',
            R: 'draconicevolution:energy_core_stabilizer', // TODO: REPLACE WITH THE REAL DE COMPONENT
            A: 'gtceu:iv_quantum_chest',
            W: 'kubejs:warp_engine'
        }
    )

    //
    // Miner Components
    //

    // Basic Guidance

    event.shaped(
        'kubejs:basic_micro_miner_guidance_system', [
            'GPG',
            'PCP',
            'CCC'
        ], {
            G: 'minecraft:glass',
            P: 'gtceu:double_steel_plate',
            C: '#gtceu:circuits/mv'
        }
    )

    // Basic laser

    event.shaped(
        'kubejs:basic_mining_laser', [
            ' R ',
            'QGQ',
            'QGQ'
        ], {
            R: 'minecraft:redstone_block',
            Q: 'minecraft:quartz',
            G: 'minecraft:glass'
        }
    )

    // Reinforced Laser
    event.recipes.extendedcrafting.shaped_table(
        'kubejs:reinforced_mining_laser', [
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
            E: 'enderio:advanced_capacitor_bank'
        }
    )

    // Advanced Guidance
    event.shaped(
        'kubejs:advanced_micro_miner_guidance_system', [
            'AWA',
            'WCW',
            'CCC'
        ], {
            A: 'gtceu:ev_sensor',
            W: 'gtceu:double_tungsten_carbide_plate',
            C: '#gtceu:circuits/ev'
        }
    )

    // Warp Core
    event.shaped(
        'kubejs:warp_core', [
            'LTL',
            'TNT',
            'LTL'
        ], {
            L: 'gtceu:lumium_block',
            N: 'gtceu:nether_star_block',
            T: 'gtceu:titanium_block'
        }
    )

    // Warp Controller
    event.shaped(
        'kubejs:warp_controller', [
            'SMS',
            'CHC',
            'SCS'
        ], {
            C: '#gtceu:circuits/ev',
            H: 'gtceu:ev_machine_hull',
            M: 'gtceu:computer_monitor_cover',
            S: 'gtceu:ev_sensor'
        }
    )

    // Warp engine
    event.recipes.gtceu.assembly_line('warp_engine')
        .itemInputs('gtceu:microversium_frame',
            '6x gtceu:enderium_plate',
            'draconicevolution:dislocation_inhibitor', /* Item dislocation inhibitor */
            'draconicevolution:advanced_magnet', /* DE Magnet */
            '2x #forge:plates/crystal_matrix',
            '2x gtceu:iv_field_generator',
            Item.of('2x ironjetpacks:thruster', '{Id:"ironjetpacks:fluxed"}').weakNBT(),
            Item.of('ironjetpacks:thruster', '{Id:"ironjetpacks:dark_soularium"}').weakNBT())
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
        .duration(6000)
        .EUt(491520)

    // Electrum Engine Frame
    event.shaped(
        'kubejs:electrum_micro_miner_frame', [
            'PRP',
            'R R',
            'PRP'
        ], {
            P: 'gtceu:electrum_plate',
            R: 'gtceu:electrum_rod',
        }
    )

    // Signalum Engine Frame
    event.shaped(
        'kubejs:signalum_micro_miner_frame', [
            'PRP',
            'R R',
            'PRP'
        ], {
            P: 'gtceu:signalum_plate',
            R: 'gtceu:signalum_rod',
        }
    )

    // Enderium Engine Frame
    event.shaped(
        'kubejs:enderium_micro_miner_frame', [
            'PRP',
            'R R',
            'PRP'
        ], {
            P: 'gtceu:enderium_plate',
            R: 'gtceu:enderium_rod',
        }
    )

    // Electrum Engine Core
    event.recipes.gtceu.alloy_smelter("electrum_micro_miner_core")
        .itemInputs("2x minecraft:redstone_block", "kubejs:electrum_micro_miner_frame")
        .itemOutputs("kubejs:electrum_micro_miner_core")
        .duration(500)
        .EUt(480)

    // Signalum Engine Core
    event.recipes.gtceu.alloy_smelter("signalum_micro_miner_core")
        .itemInputs("4x minecraft:redstone_block", "kubejs:signalum_micro_miner_frame")
        .itemOutputs("kubejs:signalum_micro_miner_core")
        .duration(1000)
        .EUt(2000)

    // Enderium Engine Core
    event.recipes.gtceu.alloy_smelter("enderium_micro_miner_core")
        .itemInputs("8x minecraft:redstone_block", "kubejs:enderium_micro_miner_frame")
        .itemOutputs("kubejs:enderium_micro_miner_core")
        .duration(2000)
        .EUt(8000)

    // Gemstone Sensor - Optical Sensor has been replaced with a Quantum Eye, which is slightly cheaper.
    event.shaped(
        'kubejs:gem_sensor', [
            ' A ',
            'WCW',
            ' W '
        ], {
            A: 'gtceu:quantum_eye',
            W: 'gtceu:tungsten_carbide_plate',
            C: 'gtceu:iv_sensor'
        }
    )

})