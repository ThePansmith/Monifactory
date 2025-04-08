/**
 * 3x3 and Extended Crafting Recipes for Micro Miners
 * Not to be confused with other files that that define what these miners mine.
 */

ServerEvents.recipes(event => {
    // T1 Microminer
    event.shaped("kubejs:microminer_t1", [
        " G ",
        "LAL",
        "TMT"
    ], {
        G: "kubejs:basic_micro_miner_guidance_system",
        L: "kubejs:basic_mining_laser",
        A: "gtceu:lv_field_generator",
        T: "kubejs:conductive_iron_thruster",
        M: "gtceu:lv_combustion"
    })

    // T2 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t2", [
        "  G  ",
        " PAP ",
        "LBFBL",
        "PPCPP",
        " TTT "
    ], {
        G: "kubejs:basic_micro_miner_guidance_system",
        P: "gtceu:double_titanium_plate",
        A: "gtceu:stainless_steel_crate",
        L: "kubejs:basic_mining_laser",
        B: "gtceu:lv_field_generator",
        F: "kubejs:electrum_micro_miner_core",
        C: "gtceu:mv_combustion",
        T: "kubejs:electrical_steel_thruster"
    })

    // T3 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t3", [
        "  G G  ",
        "  PPP  ",
        "  ABA  ",
        "LPPBPPL",
        "PPFBFPP",
        "P PCP P",
        "  TTT  "
    ], {
        G: "kubejs:basic_micro_miner_guidance_system",
        P: "gtceu:double_tungsten_carbide_plate",
        A: "gtceu:mv_field_generator",
        B: "gtceu:titanium_crate",
        L: "kubejs:reinforced_mining_laser",
        F: "kubejs:electrum_micro_miner_core",
        C: "gtceu:hv_combustion",
        T: "kubejs:reinforced_thruster"
    })

    // T4 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t4", [
        "   G   ",
        "  LWL  ",
        " SAWAS ",
        " SBWBS ",
        " SFWFS ",
        " TDWDT ",
        "  T T  "
    ], {
        G: "kubejs:basic_micro_miner_guidance_system",
        L: "kubejs:reinforced_mining_laser",
        W: "gtceu:double_tungsten_carbide_plate",
        S: "gtceu:double_signalum_plate",
        A: "gtceu:tungsten_steel_crate",
        B: "gtceu:hv_field_generator",
        F: "kubejs:signalum_micro_miner_core",
        T: "kubejs:energetic_thruster",
        D: "thermal:dynamo_compression"
    })

    // T5 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t5", [
        "  G G  ",
        "  I I  ",
        " SILIS ",
        "SSABASS",
        " IFCFI ",
        "IIIPIII",
        "  TTT  "
    ], {
        G: "kubejs:advanced_micro_miner_guidance_system",
        I: "gtceu:double_iridium_plate",
        S: "gtceu:double_signalum_plate",
        L: "kubejs:supercharged_laser_array",
        A: "gtceu:ev_field_generator",
        B: "gtceu:mv_super_chest",
        F: "kubejs:signalum_micro_miner_core",
        C: "nuclearcraft:fission_reactor_controller",
        P: "nuclearcraft:fission_reactor_port",
        T: "kubejs:vibrant_thruster",
    })

    // T6 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t6", [
        " LG GL ",
        "LEE EEL",
        "EEAEAEE",
        " EFEFE ",
        "EBECEBE",
        "EEPPPEE",
        "  TTT  "
    ], {
        L: "kubejs:supercharged_laser_array",
        G: "kubejs:advanced_micro_miner_guidance_system",
        E: "gtceu:double_enderium_plate",
        A: "gtceu:mv_super_chest",
        F: "kubejs:enderium_micro_miner_core",
        B: "gtceu:iv_field_generator",
        C: "nuclearcraft:fission_reactor_controller",
        P: "nuclearcraft:fission_reactor_port",
        T: "kubejs:resonant_thruster"
    })

    // T7 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t7", [
        " L G G L ",
        " D DDD D ",
        "LDNDDDNDL",
        "NDDFPFDDN",
        "DNDAEADND",
        "DNDNPNDND",
        "DNNDFDNND",
        "D NDDDN D",
        "D WW WW D"
    ], {
        L: "kubejs:supercharged_laser_array",
        D: "gtceu:double_cryolobus_plate",
        N: "gtceu:double_naquadah_plate",
        G: "kubejs:advanced_micro_miner_guidance_system",
        P: "kubejs:bathyal_energy_core",
        A: "gtceu:luv_field_generator",
        E: "kubejs:dischargement_core",
        F: "kubejs:enderium_micro_miner_core",
        W: "kubejs:warp_engine"
    })

    // T8 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t8", [
        " G C C G ",
        " WCCLCCW ",
        " WCIIICW ",
        "LCIIIIICL",
        "WCAABAACW",
        "WCWWIWWCW",
        "WMCCICCMW",
        "WDWWIWWDW",
        " E     E "
    ], {
        G: "kubejs:advanced_micro_miner_guidance_system",
        C: "gtceu:double_crystal_matrix_plate",
        W: "gtceu:double_rhodium_plated_palladium_plate",
        L: "kubejs:supercharged_laser_array",
        I: "gtceu:double_duranium_plate",
        A: "gtceu:hv_super_chest",
        B: "gtceu:zpm_field_generator",
        D: "kubejs:warp_core",
        M: "kubejs:warp_controller",
        E: "kubejs:warp_engine"
    })

    // T9 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t9", [
        "    Q    ",
        "    Q    ",
        "   QUQ   ",
        "   QAQ   ",
        "  QPQPQ  ",
        " QQTCTQQ ",
        "QQBHRHBQQ",
        " QQQQQQQ ",
        "QQ W W QQ"
    ], {
        Q: "kubejs:quantum_fluxed_eternium_heavy_plating",
        U: "kubejs:universal_navigator",
        A: "gtceu:uv_field_generator",
        B: "gtceu:ev_super_chest",
        P: "gtceu:plasma_large_turbine",
        R: "kubejs:universal_warp_core",
        T: "gtceu:tungstensteel_gearbox",
        C: "kubejs:universal_warp_controller",
        H: "gtceu:uv_rotor_holder",
        W: "kubejs:hadal_warp_engine"
    })

    // T10 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t10", [
        "   N N   ",
        "  NN NN  ",
        "  NN NN  ",
        "  NN NN  ",
        " NUNNNUN ",
        "PNCNENCNP",
        "NNRNANRNN",
        " NNNNNNN ",
        "NW W W WN"
    ], {
        N: "kubejs:universe_resistant_neutronium_heavy_plating",
        U: "kubejs:universal_navigator",
        R: "kubejs:universal_warp_core",
        C: "kubejs:universal_warp_controller",
        P: "solarflux:sp_custom_neutronium",
        E: "gtceu:energy_cluster",
        A: "gtceu:iv_quantum_chest",
        W: "kubejs:hadal_warp_engine"
    })

    // T11 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t11", [
        "   A M A   ",
        "   O M O   ",
        "  OO M OO  ",
        " POOMMMOOP ",
        " OONMMMNOO ",
        "POOMMCMMOOP",
        "OODMMIMMDOO",
        "OOBMOOOMBOO",
        "OOOOW WOOOO",
        " OOW   WOO ",
        " W       W "
    ], {
        O: "kubejs:elementally_infused_omnic_matrix_heavy_plating",
        M: "gtceu:double_crystal_matrix_plate",
        P: "solarflux:sp_custom_neutronium",
        W: "kubejs:hadal_warp_engine",
        A: "gtceu:uev_robot_arm",
        C: "gtceu:uhv_quantum_chest",
        N: "kubejs:universal_navigator",
        I: "kubejs:infinity_power_unit",
        B: "kubejs:universal_warp_core",
        D: "kubejs:universal_warp_controller"
    })

    // T12 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t12", [
        "     I     ",
        "    IEI    ",
        "    III    ",
        "   IISII   ",
        "  PISQSIP  ",
        "  IIJSJII  ",
        " IIIJCJIII ",
        "PIIDJJJDIIP",
        "IIIJJ JJIII",
        "IIWW   WWII",
        "IW       WI"
    ], {
        I: "kubejs:dimensionally_stabilized_infinity_heavy_plating",
        J: "kubejs:universe_resistant_neutronium_heavy_plating",
        E: "kubejs:extradimensional_navigator",
        P: "solarflux:sp_custom_infinity",
        C: "gtceu:uhv_quantum_chest",
        W: "kubejs:hadal_warp_engine",
        D: "kubejs:infinity_power_unit",
        S: "kubejs:dimensional_stabilization_netherite_casing",
        Q: "kubejs:field_stabilised_omnic_pulsar_compound"
    })

    //
    // Half Tier Microminers
    //
    // T2.5 Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t2half", [
        "  G  ",
        " CQC ",
        "PPAPP",
        "PMBMP",
        " T T ",
    ], {
        G: "kubejs:basic_micro_miner_guidance_system",
        P: "gtceu:double_dark_steel_plate",
        A: "gtceu:mv_field_generator",
        C: "minecraft:crossbow",
        Q: "thermal:potion_quiver",
        B: "gtceu:bronze_crate",
        T: "kubejs:hardened_thruster",
        M: "thermal:dynamo_magmatic"
    })

    // T4.5  Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t4half", [
        "  LGL  ",
        "F ltl F",
        "AllcllA",
        " llfll ",
        "ltctctl",
        "ldlfldl",
        "  TTT  "
    ], {
        L: "kubejs:reinforced_mining_laser",
        G: "kubejs:basic_micro_miner_guidance_system",
        F: "redstone_arsenal:flux_sword",
        l: "gtceu:double_lumium_plate",
        t: "gtceu:double_hsse_plate",
        A: "gtceu:hv_robot_arm",
        c: "kubejs:signalum_micro_miner_core",
        f: "gtceu:hv_field_generator",
        d: "thermal:dynamo_compression",
        T: "kubejs:energetic_thruster"
    }).id("kubejs:microminer/t4half")

    // T8.5  Microminer
    event.recipes.extendedcrafting.shaped_table("kubejs:microminer_t8half", [
        "   AAA   ",
        "  ANNNA  ",
        " GNTTTNG ",
        " NNTFTNN ",
        " NTECETN ",
        "NNTSFSTNN",
        "NTTQWQTTN",
        "NTTYWYTTN",
        " XXX XXX "
    ], {
        A: "kubejs:supercharged_laser_array",
        N: "gtceu:double_naquadah_alloy_plate",
        G: "kubejs:advanced_micro_miner_guidance_system",
        T: "gtceu:double_trinium_plate",
        F: "gtceu:zpm_field_generator",
        E: "gtceu:zpm_emitter",
        C: "kubejs:abyssal_energy_core",
        S: "gtceu:naquadah_alloy_frame",
        Q: "gtceu:luv_quantum_chest",
        W: "kubejs:warp_core",
        Y: "kubejs:warp_controller",
        X: "kubejs:warp_engine"
    }).id("kubejs:microminer/t8half")
})
