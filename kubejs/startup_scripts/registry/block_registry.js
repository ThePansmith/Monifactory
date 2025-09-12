/**
 * Block Registry - defines ID, name,
 * block properties, and block tags of custom blocks.
 */
StartupEvents.registry("block", event => {

    // Compressed Blocks
    event.create("compressed_sand")
        .displayName("Compressed Sand")
        .soundType("sand")
        .resistance(1).hardness(1)
        .tagBlock("mineable/shovel").requiresTool(true)
        .property(BlockProperties.FALLING);

    event.create("double_compressed_sand")
        .displayName("Double Compressed Sand")
        .soundType("sand")
        .resistance(2).hardness(2)
        .tagBlock("mineable/shovel").requiresTool(true)
        .property(BlockProperties.FALLING);

    event.create("compressed_red_sand")
        .displayName("Compressed Red Sand")
        .soundType("sand")
        .resistance(1).hardness(1)
        .tagBlock("mineable/shovel").requiresTool(true)
        .property(BlockProperties.FALLING);

    event.create("double_compressed_red_sand")
        .displayName("Double Compressed Red Sand")
        .soundType("sand")
        .resistance(2).hardness(2)
        .tagBlock("mineable/shovel").requiresTool(true)
        .property(BlockProperties.FALLING);


    // Micro Miner Cores/Frames
    event.create("electrum_micro_miner_core")
        .displayName("Electrum Micro Miner Engine Core")
        .soundType("metal")
        .resistance(3)
        .hardness(3)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .defaultCutout();

    event.create("signalum_micro_miner_core")
        .displayName("Signalum Micro Miner Engine Core")
        .soundType("metal")
        .resistance(4)
        .hardness(4)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .defaultCutout();

    event.create("enderium_micro_miner_core")
        .displayName("Enderium Micro Miner Engine Core")
        .soundType("metal")
        .resistance(5)
        .hardness(5)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .defaultCutout();

    event.create("electrum_micro_miner_frame")
        .displayName("Electrum Micro Miner Engine Frame")
        .soundType("metal")
        .resistance(3)
        .hardness(3)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .defaultCutout();

    event.create("signalum_micro_miner_frame")
        .displayName("Signalum Micro Miner Engine Frame")
        .soundType("metal")
        .resistance(4)
        .hardness(4)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .defaultCutout();

    event.create("enderium_micro_miner_frame")
        .displayName("Enderium Micro Miner Engine Frame")
        .soundType("metal")
        .resistance(5)
        .hardness(5)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true)
        .defaultCutout();

    event.create("warp_core")
        .displayName("Warp Core")
        .soundType("metal")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true);

    event.create("warp_controller")
        .displayName("Warp Controller")
        .soundType("metal")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true);

    event.create("universal_warp_core")
        .displayName("Universal Warp Core")
        .soundType("metal")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true);

    event.create("universal_warp_controller")
        .displayName("Universal Warp Controller")
        .soundType("metal")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true);


    // Dense Ores
    const ores = [
        "redstone",
        "diamond",
        "emerald",
        "gold",
        "lapis",
        "iron",
        "coal",
        "copper",
        "nether_quartz",
        "oilsands"
    ]

    ores.forEach(ore => {
        event.create(`dense_${ore}_ore`)
            .soundType("stone")
            .resistance(6)
            .hardness(5)
            .tagBlock("mineable/pickaxe")
            .tagBoth("forge:ores/dense")
            .tagBoth(`forge:ores/dense/${ore}`)
            .requiresTool(true);
    });

    event.create("dense_magma_block")
        .soundType("stone")
        .resistance(6)
        .hardness(5)
        .tagBlock("mineable/pickaxe")
        .tagBoth("forge:ores/dense")
        .tagBoth("forge:ores/dense/magma")
        .requiresTool(true)
        .lightLevel(1.0);


    // Machine Casings
    const casings = [
        "dark_soularium",
        "omnic_matrix_machine",
    ]

    casings.forEach(casing => {
        event.create(`${casing}_casing`)
            .soundType("metal")
            .resistance(6).hardness(5)
            .tagBlock("mineable/pickaxe")
            .tagBlock("forge:mineable/wrench")
            .requiresTool(true);
    });

    // UEV Hermetic Casing
    event.create("gtceu:uev_hermetic_casing")
        .displayName("Hermetic Casing X")
        .soundType("metal")
        .renderType("cutout")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true);

    // Misc
    event.create("starry_diamond_block")
        .displayName("Starry Diamatine Block")
        .soundType("metal")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe").requiresTool(true)
        .textureAll("kubejs:block/microverse/starry_diamond_block")

    event.create("dust", "falling")
        .soundType("sand")
        .resistance(0.4).hardness(0.4)
        .tag("mineable/shovel").displayName("Dust Block")
        .property(BlockProperties.FALLING);

    event.create("dark_steel_machine_hull")
        .displayName("Dark Steel Machine Hull")
        .soundType("metal")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true);

    event.create("excitationcoil", "cardinal")
        .displayName("Excitation Coil")
        .soundType("metal")
        .renderType("cutout")
        .box(3, 0, 3, 13, 1, 13)
        .box(4, 1, 4, 12, 9, 12)
        .tag("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .requiresTool(true);

    event.create("lyso_ce_glass")
        .displayName("Cerium-doped Lutetium Yttrium Oxyorthosilicate Glass")
        .soundType("glass")
        .renderType("cutout")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .textureAll("kubejs:block/prismac/lyso_ce_glass")
        .defaultCutout()

    event.create("red_aligned_glass")
        .soundType("glass")
        .renderType("cutout")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .textureAll("kubejs:block/prismac/red_aligned_glass")
        .defaultCutout()

    event.create("green_aligned_glass")
        .soundType("glass")
        .renderType("cutout")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .textureAll("kubejs:block/prismac/green_aligned_glass")
        .defaultCutout()

    event.create("blue_aligned_glass")
        .soundType("glass")
        .renderType("cutout")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .textureAll("kubejs:block/prismac/blue_aligned_glass")
        .defaultCutout()

    event.create("prism_glass")
        .displayName("P.R.I.S.M. Glass")
        .soundType("glass")
        .renderType("cutout")
        .resistance(6).hardness(5)
        .tagBlock("mineable/pickaxe")
        .defaultCutout()

    event.create("omnic_matrix_coil_block", "gtceu:coil")
        .temperature(12600)
        .level(16)
        .energyDiscount(16)
        .tier(8)
        .coilMaterial(() => GTMaterials.get("omnium"))
        .hardness(5)
        .requiresTool(true)
        .tagBlock("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .soundType("metal")

    event.create("meowni_plush", "cardinal")
        .displayName("Meowni Plush")
        .soundType("wool")
        .renderType("cutout")
        .tag("mineable/pickaxe")
        .tagBlock("forge:mineable/wrench")
        .defaultCutout()
});
