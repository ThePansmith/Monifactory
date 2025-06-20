/**
 * Anything that is an extended crafting recipe comes here
 ! DO NOT PUT CREATIVE STUFF, PUT IT ON END_GAME.js
 ? For end game intermediates (ingots plates..) that uses ectendedcrafting, put it here
 */

ServerEvents.recipes(event => {
    // ETERNAL CATALYST
    event.recipes.extendedcrafting.shaped_table("kubejs:eternal_catalyst", [
        "    A    ",
        " A  A  A ",
        "  AAPAA  ",
        "  ARWEA  ",
        "AAVXUYDAA",
        "  AEZRA  ",
        "  AAIAA  ",
        " A  A  A ",
        "    A    "
    ], {
        A: "gtceu:omnium_nugget",
        P: "gtceu:palis_empowered_gear",
        R: "gtceu:restonia_empowered_gear",
        V: "gtceu:void_empowered_gear",
        E: "gtceu:emeradic_empowered_gear",
        I: "gtceu:enori_empowered_gear",
        D: "gtceu:diamatine_empowered_gear",
        W: "kubejs:ender_star",
        X: "gtceu:gravi_star",
        Z: "gtceu:quantum_star",
        Y: "kubejs:endest_star",
        U: "kubejs:the_ultimate_material"
    }).id("kubejs:extended/eternal_catalyst");

    // INFINITY CATALYST
    event.recipes.extendedcrafting.shaped_table("kubejs:infinity_catalyst", [
        "PPPPEPPPP",
        "PEPPEPPEP",
        "PPEEEEEPP",
        "PPEECEEPP",
        "EEECHCEEE",
        "PPEECEEPP",
        "PPEEEEEPP",
        "PEPPEPPEP",
        "PPPPEPPPP",
    ], {
        P: "gtceu:tiny_neutronium_dust",
        E: "kubejs:eternal_catalyst",
        C: "kubejs:hadal_energy_core",
        H: "kubejs:heart_of_a_universe"
    }).id("kubejs:extended/infinity_catalyst");

    // infinity ingot
    event.recipes.extendedcrafting.shaped_table("kubejs:dormant_infinity_compound_ingot", [
        "         ",
        "     BAAA",
        "  BAAADCA",
        "AAACDCCDA",
        "ACDDCDDCA",
        "ADCCDCAAA",
        "ACDAAAB  ",
        "AAAB     ",
        "         "
    ], {
        A: "gtceu:neutronium_ingot",
        B: "gtceu:neutronium_nugget",
        C: "gtceu:activated_netherite_ingot",
        D: "kubejs:eternal_catalyst"
    }).id("kubejs:extended/infinity_compound")

    event.recipes.gtceu.electric_blast_furnace("infinity_ingot_activation")
        .itemInputs("kubejs:dormant_infinity_compound_ingot", "kubejs:infinity_catalyst")
        .inputFluids(Fluid.of("gtceu:omnium", 576))
        .itemOutputs("gtceu:infinity_ingot")
        .duration(400)
        .EUt(50000)
        .blastFurnaceTemp(12500)

    event.recipes.gtceu.electric_blast_furnace("infinity_ingot_activation_t2")
        .itemInputs("4x kubejs:dormant_infinity_compound_ingot", "kubejs:furious_infinity_catalyst")
        .inputFluids(Fluid.of("gtceu:omnium", 576))
        .itemOutputs("4x gtceu:infinity_ingot", "kubejs:dormant_furious_infinity_catalyst")
        .duration(300)
        .EUt(250000)
        .blastFurnaceTemp(12500)

    event.recipes.gtceu.electric_blast_furnace("infinity_ingot_activation_t3")
        .itemInputs("16x kubejs:dormant_infinity_compound_ingot", "kubejs:serene_infinity_catalyst")
        .inputFluids(Fluid.of("gtceu:omnium", 576))
        .itemOutputs("16x gtceu:infinity_ingot", "kubejs:inert_serene_infinity_catalyst")
        .duration(200)
        .EUt(1000000)
        .blastFurnaceTemp(12500)

    // exotic material catalyst
    event.recipes.extendedcrafting.shaped_table("kubejs:exotic_materials_catalyst", [
        "A  B  C",
        " D E F ",
        "  GHI  ",
        "JKLMNOP",
        "  QRS  ",
        " T U V ",
        "W  X  Y"
    ], {
        A: "gtceu:nichrome_ingot",
        B: "gtceu:red_steel_ingot",
        C: "gtceu:kanthal_ingot",
        D: "gtceu:magnalium_ingot",
        E: "gtceu:mythril_ingot",
        F: "gtceu:manyullyn_ingot",
        G: "gtceu:enderium_ingot",
        H: "gtceu:blue_steel_ingot",
        I: "gtceu:microversium_ingot",
        J: "gtceu:vanadium_steel_ingot",
        K: "gtceu:rhodium_plated_palladium_ingot",
        L: "gtceu:electrum_flux_ingot",
        M: "gtceu:dark_soularium_ingot",
        N: "gtceu:crystal_matrix_ingot",
        O: "gtceu:end_steel_ingot",
        P: "gtceu:electrical_steel_ingot",
        Q: "gtceu:signalum_ingot",
        R: "gtceu:vibrant_alloy_ingot",
        S: "gtceu:soularium_ingot",
        T: "gtceu:hsse_ingot",
        U: "gtceu:dark_steel_ingot",
        V: "gtceu:hssg_ingot",
        W: "gtceu:ruridit_ingot",
        X: "gtceu:hsss_ingot",
        Y: "gtceu:energetic_alloy_ingot"
    }).id("kubejs:extended/exotic_materials_catalyst")

    // Angel Ring
    event.recipes.extendedcrafting.shaped_table("better_angel_ring:angel_ring", [
        " AAA ",
        "A B A",
        "AC CA",
        "A B A",
        " AAA "
    ], {
        A: "gtceu:rose_gold_ingot",
        B: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:energetic"}').weakNBT(),
        C: Item.of("ironjetpacks:jetpack", '{Id:"ironjetpacks:reinforced"}').weakNBT(),
    }).id("kubejs:extended/angel_ring")
})
