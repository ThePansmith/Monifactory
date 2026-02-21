/**
 * Recipes and such for Project Red.
 */
ServerEvents.recipes(event => {
    /* Circuit plates using GT cutter and saw */
    event.remove({ id: "projectred_core:plate" })
    event.shaped("3x projectred_core:plate", [
        "S",
        "B"
    ], {
        S: "#forge:tools/saws",
        B: "minecraft:smooth_stone"
    })

    event.recipes.gtceu.cutter("projectred_circuit")
        .itemInputs("minecraft:smooth_stone_slab")
        .inputFluids(Fluid.of("minecraft:water", 40))
        .itemOutputs("4x projectred_core:plate")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.cutter("projectred_circuit_distilled")
        .itemInputs("minecraft:smooth_stone_slab")
        .inputFluids(Fluid.of("gtceu:distilled_water", 30))
        .itemOutputs("4x projectred_core:plate")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.cutter("projectred_circuit_lubricant")
        .itemInputs("minecraft:smooth_stone_slab")
        .inputFluids(Fluid.of("gtceu:lubricant", 10))
        .itemOutputs("4x projectred_core:plate")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LV])

    /* Red Alloy Wire */
    event.remove({ id: "projectred_transmission:red_alloy_wire" })
    event.shaped("12x projectred_transmission:red_alloy_wire", [
        "R",
        "R",
        "R"
    ], {
        R: "gtceu:red_alloy_single_wire"
    })

    const dyeColors = [
        "white", "black", "purple", "red", "orange", "green", "lime", "blue",
        "light_blue", "pink", "cyan", "magenta", "yellow", "gray", "light_gray", "brown"
    ];
    dyeColors.forEach(color => {
        /* Insulated Red Alloy Wire */
        event.shapeless(`projectred_transmission:${color}_insulated_wire`, [
            "2x projectred_transmission:red_alloy_wire",
            "#forge:wool/" + color
        ]).id(`projectred_transmission:${color}_insulated_wire`)
        /* Illumar */
        event.recipes.gtceu.mixer(color + "_illumar_mixing")
            .itemInputs("#forge:dusts/glowstone", "#forge:dyes/" + color)
            .itemOutputs(`projectred_core:${color}_illumar`)
            .duration(30)
            .EUt(GTValues.VA[GTValues.ULV])
    });

    event.shapeless("4x projectred_transmission:black_insulated_wire", [
        "4x projectred_transmission:red_alloy_wire",
        "#forge:rubber_plates"
    ])

    /* Bundled Wire using moar rubba' mate as a second insulation mimicking multi-core cable instead of String */
    event.shapeless("2x projectred_transmission:neutral_bundled_wire", [
        "8x #projectred_transmission:insulated_wire",
        "#forge:rubber_plates"
    ])

    const rubber_types = [
        { name: "rubber", amount: 144 },
        { name: "silicone_rubber", amount: 72 },
        { name: "styrene_butadiene_rubber", amount: 36 },
    ]

    /* Insulated Wire & Bundled Wire using Assembly Machine */
    rubber_types.forEach(type => {
        event.recipes.gtceu.assembler("projectred_black_insulated_wire_" + type.name)
            .itemInputs("1x projectred_transmission:red_alloy_wire")
            .inputFluids(Fluid.of("gtceu:" + type.name, type.amount / 4))
            .itemOutputs("1x projectred_transmission:black_insulated_wire")
            .duration(20)
            .EUt(GTValues.VA[GTValues.ULV])

        event.recipes.gtceu.assembler("projectred_bundled_wire_" + type.name)
            .itemInputs("8x projectred_transmission:red_alloy_wire")
            .inputFluids(Fluid.of("gtceu:" + type.name, type.amount * 3))
            .itemOutputs("2x projectred_transmission:neutral_bundled_wire")
            .duration(50)
            .EUt(GTValues.VA[GTValues.ULV])
            .circuit(9)
    })

    const silicon_dopants = [
        {item: "redstone", color: "red", effect: "infused"},
        {item: "glowstone", color: "glow", effect: "energized"},
        {item: "electrotine", color: "electrotine", effect: "electrotine"}
    ]
    silicon_dopants.forEach(dopant => {
        /* Silicon compounds using GT silicon wafers */
        event.shaped(`projectred_core:${dopant.color}_silicon_comp`, [
            "DDD",
            "DSD",
            "DDD"
        ], {
            D: "#forge:dusts/" + dopant.item,
            S: "#moni:wafers"
        })

        /* Shortcut recipe using Alloy Smelter */
        event.recipes.gtceu.alloy_smelter(`${dopant.effect}_silicon`)
            .itemInputs("#moni:wafers", Item.of("#forge:dusts/" + dopant.item, 6))
            .itemOutputs(`projectred_core:${dopant.effect}_silicon`)
            .duration(160)
            .EUt(GTValues.VA[GTValues.LV])
    })

    /**
     * Screwdriver
     * Useful for rotating logic gates.
     * Can't figure out an easy way to make GT screwdrivers do the same.
     */
    event.shapeless("projectred_core:screwdriver", [
        "#forge:rods/iron",
        "#forge:plastic_plates",
        "#forge:dyes/blue"
    ]).id("projectred_core:screwdriver")

    /* Multimeter */
    // Apparently this does fuckall, actually
    /*
    event.shaped("projectred_core:multimeter", [
        "TGT",
        "BSR"
    ], {
        T: "gtceu:tin_bolt",
        G: "#forge:glass_panes",
        B: "projectred_transmission:black_insulated_wire",
        R: "projectred_transmission:red_insulated_wire",
        S: "#forge:plates/steel"
    }).id("projectred_core:multimeter")
    */
})

ServerEvents.tags("item", event => {
    // Add silicon Wafers to a tag so we can use them in ProjectRed's Doped Silicon recipes
    event.add("moni:wafers", ["gtceu:silicon_wafer", "gtceu:phosphorus_wafer", "gtceu:naquadah_wafer", "gtceu:neutronium_wafer", "kubejs:null_wafer"])
})
