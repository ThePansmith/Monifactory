/** Infinity Toolset recipes and subrecipes */


ServerEvents.recipes(event => {

    // Infinity File
    event.recipes.extendedcrafting.shaped_table("kubejs:infinity_file", [
        "  A      ",
        " BCA     ",
        "ACBCA    ",
        " ACBCA   ",
        "  ACBCE  ",
        "   ACDE  ",
        "    EEEE ",
        "      EEE",
        "       EE",
    ], {
        A: "gtceu:neutronium_plate",
        B: "gtceu:infinity_plate",
        C: "gtceu:eltz_plate",
        D: "kubejs:infinity_power_unit",
        E: "gtceu:omnium_ingot"
    });

    // Infinity Hammer
    event.recipes.extendedcrafting.shaped_table("kubejs:infinity_hammer", [
        "    B    ",
        "   BCA   ",
        "  BCBCA  ",
        "   ACBCA ",
        "   EDCBCB",
        "  EEEACB ",
        " EEE  B  ",
        "EEE      ",
        "EE       ",
    ], {
        A: "gtceu:neutronium_ingot",
        B: "gtceu:infinity_ingot",
        C: "gtceu:eltz_ingot",
        D: "kubejs:infinity_power_unit",
        E: "gtceu:omnium_ingot"
    });

    // Infinity Screwdriver
    event.recipes.extendedcrafting.shaped_table("kubejs:infinity_screwdriver", [
        "       BC",
        "      BCB",
        "     BCB ",
        "    BCB  ",
        "  AACB   ",
        " ECDA    ",
        " ECCA    ",
        "EEEE     ",
        "EE       ",
    ], {
        A: "gtceu:neutronium_rod",
        B: "gtceu:infinity_rod",
        C: "gtceu:eltz_rod",
        D: "kubejs:infinity_power_unit",
        E: "gtceu:omnium_ingot"
    });

    // Infinity Wrench
    event.recipes.extendedcrafting.shaped_table("kubejs:infinity_wrench", [
        "    A  A ",
        "   AB  BA",
        "   AB  BA",
        "   ABDBCA",
        "   ACCCA ",
        "  ACAAA  ",
        " ACA     ",
        "ACA      ",
        "CA       ",
    ], {
        A: "gtceu:neutronium_plate",
        B: "gtceu:infinity_plate",
        C: "gtceu:eltz_plate",
        D: "kubejs:infinity_power_unit"
    });

    // Infinity Wire Cutter
    event.recipes.extendedcrafting.shaped_table("kubejs:infinity_wire_cutter", [
        "  AA AA  ",
        " ACB BCA ",
        " ACB BCA ",
        " ACB BCA ",
        " ACBABCA ",
        "  AADAA  ",
        "  EEEEE  ",
        " EEE EEE ",
        " EE   EE ",
    ], {
        A: "gtceu:neutronium_plate",
        B: "gtceu:infinity_plate",
        C: "gtceu:eltz_plate",
        D: "kubejs:infinity_power_unit",
        E: "gtceu:omnium_ingot"
    });

    // Infinity Power Unit
    event.recipes.gtceu.assembly_line("infinity_toolset/infinity_power_unit")
        .itemInputs("kubejs:infinity_catalyst", "32x gtceu:polyethyl_cyanoacrylate_plate", "16x gtceu:darmstadtium_plate", "16x gtceu:enriched_naquadah_trinium_europium_duranide_plate", "16x #gtceu:circuits/uhv", "8x #gtceu:circuits/uev", "12x kubejs:hadal_energy_core", "2x gtceu:max_battery", "8x gtceu:ruthenium_trinium_americium_neutronate_quadruple_wire", "16x gtceu:uev_electric_motor")
        .inputFluids("gtceu:soldering_alloy 5760", "gtceu:polybenzimidazole 1152", "gtceu:omnium 5760", "gtceu:crystal_matrix 1152")
        .itemOutputs("kubejs:infinity_power_unit")
        .duration(1200)
        .EUt(1966080)

    // Dense Obsidian Plate for Reinforced Obsidian
    // TODO IN 0.13: REMOVE BENDER RECIPE
    event.recipes.gtceu.implosion_compressor("infinity_toolset/dense_obsidian_plate")
        .itemInputs("9x gtceu:obsidian_plate", "minecraft:tnt")
        .itemOutputs("gtceu:dense_obsidian_plate")
        .duration(20)
        .EUt(30)

    event.remove({ output: "enderio:dark_steel_bars" })

    // Get greg'd idiot
    event.shaped("3x enderio:dark_steel_bars", [
        " H ",
        "RRR",
        "RRR"
    ], {
        R: "gtceu:dark_steel_rod",
        H: "#forge:tools/hammers"
    })
    event.recipes.gtceu.assembler("dark_steel_bars")
        .itemInputs("6x gtceu:dark_steel_rod")
        .itemOutputs("3x enderio:dark_steel_bars")
        .duration(300)
        .EUt(4)

    event.shaped("enderio:reinforced_obsidian_block", [
        "IBI",
        "BPB",
        "IBI"
    ], {
        P: "gtceu:dense_obsidian_plate",
        B: "enderio:dark_steel_bars",
        I: "gtceu:double_titanium_tungsten_carbide_plate"
    })
})
