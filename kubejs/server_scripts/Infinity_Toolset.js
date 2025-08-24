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
        C: "monilabs:eltz_plate",
        D: "kubejs:supercritical_prismatic_core",
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
        C: "monilabs:eltz_ingot",
        D: "kubejs:supercritical_prismatic_core",
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
        C: "monilabs:eltz_rod",
        D: "kubejs:supercritical_prismatic_core",
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
        C: "monilabs:eltz_plate",
        D: "kubejs:supercritical_prismatic_core"
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
        C: "monilabs:eltz_plate",
        D: "kubejs:supercritical_prismatic_core",
        E: "gtceu:omnium_ingot"
    });
})
