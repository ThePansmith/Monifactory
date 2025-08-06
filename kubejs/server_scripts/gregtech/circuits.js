/**
 * Custom GT circuit recipes
 */

// Function for replacing items in circuit assembler recipes without changing the order
function replaceCircassItem(event, idRegex, tagOrItem, toReplace, replaceWith) {
    // Get all GTCEu Circuit Assembler recipes with an ID matching the regex
    event.forEachRecipe({ id: idRegex, type: "gtceu:circuit_assembler" }, circuit_recipe => {
        // Get the JSON array object representing all of the item ingredients
        let itemIngredients = circuit_recipe.json.getAsJsonObject("inputs").getAsJsonArray("item")
        for (let i = 0; i < itemIngredients.size(); i++) {
            // Item ingredient to alter
            let curItemIngredient = itemIngredients.get(i).getAsJsonObject("content").getAsJsonObject("ingredient")

            if (curItemIngredient.getAsJsonPrimitive(tagOrItem) != null && curItemIngredient.getAsJsonPrimitive(tagOrItem).asString == toReplace) {
                // Change item ingredient if it does match
                curItemIngredient.remove(tagOrItem)
                curItemIngredient["addProperty(java.lang.String,java.lang.String)"](tagOrItem, replaceWith)
            }
        }
    })
}

function replaceGTRecipeAmount(event, recipeType, idRegex, tagOrItem, toAlter, multiplier) {
    // Get all GTCEu Circuit Assembler recipes with an ID matching the regex
    event.forEachRecipe({ id: idRegex, type: recipeType }, circuit_recipe => {
        // Get the JSON array object representing all of the item ingredients
        let itemIngredients = circuit_recipe.json.getAsJsonObject("inputs").getAsJsonArray("item")
        for (let i = 0; i < itemIngredients.size(); i++) {
            // Item ingredient to alter
            let curItemContent = itemIngredients.get(i).getAsJsonObject("content")
            let curItemIngredient = curItemContent.getAsJsonObject("ingredient")


            if (curItemIngredient.getAsJsonPrimitive(tagOrItem) != null && curItemIngredient.getAsJsonPrimitive(tagOrItem).asString == toAlter) {
                // Change item ingredient if it does match
                let prevCount = curItemContent.getAsJsonPrimitive("count").asInt
                curItemContent.remove("count")
                curItemContent["addProperty(java.lang.String,java.lang.Number)"]("count", prevCount * multiplier)
            }
        }
    })
}

ServerEvents.recipes(event => {

    // Replace some computer components with magical metals
    replaceCircassItem(event, /workstation_ev/, "tag", "forge:bolts/blue_alloy", "forge:bolts/vibrant_alloy")
    replaceCircassItem(event, /nano_computer_iv/, "tag", "forge:fine_wires/electrum", "forge:fine_wires/lumium")
    replaceCircassItem(event, /crystal_computer_zpm/, "tag", "forge:fine_wires/niobium_titanium", "forge:fine_wires/enderium")

    // Replace some processors' capacitors with resistors so that each circuit theme uses all SMD component types
    replaceCircassItem(event, /quantum_processor_ev/, "item", "gtceu:smd_capacitor", "gtceu:smd_resistor")
    replaceCircassItem(event, /quantum_processor_ev/, "item", "gtceu:advanced_smd_capacitor", "gtceu:advanced_smd_resistor")
    replaceCircassItem(event, /crystal_processor_iv/, "item", "gtceu:advanced_smd_capacitor", "gtceu:advanced_smd_resistor")
    replaceCircassItem(event, /wetware_processor_luv/, "item", "gtceu:advanced_smd_capacitor", "gtceu:advanced_smd_resistor")

    // Recipe categories seem to be separate when not using builders
    replaceGTRecipeAmount(event, "gtceu:chemical_reactor", /wetware_circuit_board/, "tag", "forge:foils/niobium_titanium", 0.75)
    replaceGTRecipeAmount(event, "gtceu:large_chemical_reactor", /wetware_circuit_board/, "tag", "forge:foils/niobium_titanium", 0.75)


    // Complex SMDs
    const smds = [
        ["transistor", "gtceu:enriched_naquadah_foil", "8x gtceu:fine_necrosiderite_wire", 72],
        ["resistor", "gtceu:crystal_matrix_dust", "4x gtceu:fine_necrosiderite_wire", 144],
        ["capacitor", "gtceu:polybenzimidazole_foil", "gtceu:necrosiderite_foil", 36],
        ["diode", "gtceu:indium_gallium_phosphide_dust", "8x gtceu:fine_necrosiderite_wire", 72],
        ["inductor", "gtceu:terbium_ring", "4x gtceu:fine_necrosiderite_wire", 72]
    ]

    for (const [item, primary, secondary, plastic_amount] of smds) {
        event.recipes.gtceu.assembler(`complex_smd_${item}`)
            .itemInputs(primary, secondary)
            .inputFluids(`gtceu:polyethyl_cyanoacrylate ${plastic_amount}`)
            .itemOutputs(`64x kubejs:complex_smd_${item}`)
            .duration(160)
            .EUt(245760)
    }

    // Wetware tweaks are more invasive than a 1-item swapout

    // Wetware printed circuit board
    event.remove({ output: "gtceu:wetware_printed_circuit_board" })
    event.recipes.gtceu.large_chemical_reactor("kubejs:wetware_printed_circuit_board_iron3")
        .itemInputs("gtceu:wetware_circuit_board", "24x minecraft:sculk_vein", "8x gtceu:stem_cells")
        .inputFluids("gtceu:sodium_persulfate 3000", "gtceu:iron_iii_chloride 1500", "enderio:xp_juice 1000")
        .itemOutputs("gtceu:wetware_printed_circuit_board")
        .EUt(480)
        .duration(1800)
        .cleanroom(CleanroomType.CLEANROOM)

    // NPU
    event.remove({ output: "gtceu:neuro_processing_unit" })
    event.recipes.gtceu.circuit_assembler("neuro_processing_unit")
        .itemInputs("gtceu:wetware_printed_circuit_board", "4x gtceu:stem_cells", "8x gtceu:polybenzimidazole_small_fluid_pipe", "4x gtceu:enderium_plate", "16x gtceu:silicone_rubber_foil", "8x gtceu:hsse_bolt")
        .inputFluids("gtceu:sterilized_growth_medium 100")
        .itemOutputs("gtceu:neuro_processing_unit")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(600)
        .EUt(80000)

    // Wetware Mainframe (Abnormally expensive in base game since it's the last circuit made cheaper here)
    event.remove({ output: "gtceu:wetware_processor_mainframe" })
    event.recipes.gtceu.assembly_line("wetware_mainframe_uhv")
        .itemInputs(
            "2x gtceu:tritanium_frame",
            "2x gtceu:wetware_processor_computer",
            "8x gtceu:advanced_smd_inductor",
            "16x gtceu:advanced_smd_capacitor",
            "12x gtceu:advanced_smd_diode",
            "24x gtceu:ram_chip",
            "4x gtceu:uhpic_chip",
            "8x gtceu:enriched_naquadah_trinium_europium_duranide_double_wire",
            "8x gtceu:europium_plate"
        )
        .inputFluids("gtceu:advanced_soldering_alloy 2304", "gtceu:polybenzimidazole 1152")
        .itemOutputs("gtceu:wetware_processor_mainframe")
        .EUt(GTValues.VA[GTValues.ZPM]).duration(2000)
        .stationResearch(b => b
            .researchStack("gtceu:wetware_processor_computer")
            .CWUt(96)
            .EUt(GTValues.VA[GTValues.ZPM])
        )

    event.recipes.gtceu.circuit_assembler("optical_processor")
        .itemInputs(
            "1x kubejs:optical_processing_unit",
            "1x kubejs:optical_chip",
            "2x kubejs:electro_optic_modulator",
            "10x gtceu:advanced_smd_resistor",
            "10x gtceu:advanced_smd_transistor",
            "4x gtceu:fine_naquadah_wire"
        )
        .inputFluids("gtceu:advanced_soldering_alloy 144")
        .itemOutputs("2x kubejs:optical_processor")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(10 * 20)
        .EUt(150000)

    event.recipes.gtceu.assembly_line("matter_processor_assembly")
        .itemInputs(
            "kubejs:optical_processing_unit",
            "2x kubejs:optical_processor",
            "8x gtceu:advanced_smd_inductor",
            "16x gtceu:advanced_smd_capacitor",
            "8x gtceu:rhodium_foil",
            "32x gtceu:ram_chip",
            "16x gtceu:fine_naquadah_wire"
        )
        .inputFluids("gtceu:advanced_soldering_alloy 288")
        .itemOutputs("2x kubejs:optical_processor_assembly")
        .duration(20 * 20)
        .EUt(150000)
        .stationResearch(b => b
            .researchStack("kubejs:optical_processor")
            .CWUt(16)
            .EUt(GTValues.VA[GTValues.LuV])
        )

    event.recipes.gtceu.assembly_line("matter_processor_computer")
        .itemInputs(
            "kubejs:optical_processing_unit",
            "2x kubejs:optical_processor_assembly",
            "12x gtceu:advanced_smd_diode",
            "24x gtceu:nor_memory_chip",
            "40x gtceu:ram_chip",
            "24x gtceu:fine_naquadah_wire",
            "32x gtceu:polyethyl_cyanoacrylate_foil",
            "6x gtceu:crystal_matrix_plate"
        )
        .inputFluids("gtceu:advanced_soldering_alloy 1152", "gtceu:omnium 144")
        .itemOutputs("kubejs:optical_processor_computer")
        .duration(20 * 20)
        .EUt(150000)
        .stationResearch(b => b
            .researchStack("kubejs:optical_processor_assembly")
            .CWUt(96)
            .EUt(GTValues.VA[GTValues.ZPM])
        )

    event.recipes.gtceu.assembly_line("matter_processor_mainframe")
        .itemInputs(
            "2x gtceu:activated_netherite_frame",
            "2x kubejs:optical_processor_computer",
            "12x gtceu:advanced_smd_inductor",
            "24x gtceu:advanced_smd_capacitor",
            "16x gtceu:advanced_smd_diode",
            "32x gtceu:ram_chip",
            "8x kubejs:uxpic_chip",
            "12x gtceu:ruthenium_trinium_americium_neutronate_double_wire",
            "12x gtceu:crystal_matrix_plate")
        .inputFluids("gtceu:advanced_soldering_alloy 4320", "gtceu:polyethyl_cyanoacrylate 1152", "gtceu:omnium 288")
        .itemOutputs("kubejs:optical_processor_mainframe")
        .duration(2400)
        .EUt(GTValues.VA[GTValues.UV])
        .stationResearch(b => b
            .researchStack("kubejs:optical_processor_computer")
            .CWUt(128)
            .EUt(GTValues.VA[GTValues.UV])
        )

    // SoC recipe for cheaper Optical Processor
    event.recipes.gtceu.circuit_assembler("optical_processor_soc")
        .itemInputs(
            "kubejs:optical_processing_unit",
            "kubejs:photonic_soc_active",
            "8x gtceu:fine_naquadah_wire",
            "8x gtceu:necrosiderite_bolt"
        )
        .inputFluids("gtceu:advanced_soldering_alloy 72")
        .itemOutputs("4x kubejs:optical_processor")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(5 * 20)
        .EUt(600000)

    // Monic Circuits
    event.recipes.gtceu.circuit_assembler("monic_circuit_board")
        .itemInputs("32x kubejs:carbon_mesh_reinforced_printed_circuit_board",
            "2x gtceu:monium_plate",
            "#gtceu:circuits/uv",
            "gtceu:zpm_field_generator",
            "1x kubejs:quasi_stable_neutron_star",
            "3x minecraft:nether_star"
        )
        .inputFluids("gtceu:omnium 576")
        .itemOutputs("32x kubejs:monic_circuit_board")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(2000000)

    event.recipes.gtceu.large_chemical_reactor("monic_processing_unit")
        .itemInputs("1x kubejs:monic_circuit_board", "6x gtceu:monium_single_wire", "8x gtceu:necrosiderite_foil")
        .inputFluids("gtceu:iron_iii_chloride 12000")
        .itemOutputs("1x kubejs:monic_processing_unit")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(100)
        .EUt(3932160)

    event.recipes.gtceu.circuit_assembler("monic_processor")
        .itemInputs(
            "kubejs:monic_processing_unit",
            "kubejs:contained_singularity",
            "8x kubejs:complex_smd_resistor",
            "8x kubejs:complex_smd_capacitor",
            "8x kubejs:complex_smd_transistor",
            "16x gtceu:fine_necrosiderite_wire"
        )
        .inputFluids("gtceu:living_soldering_alloy 288")
        .itemOutputs("2x kubejs:monic_processor")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(10 * 20)
        .EUt(3932160)

    event.recipes.gtceu.circuit_assembler("monic_processor_assembly")
        .itemInputs(
            "kubejs:monic_processing_unit",
            "2x kubejs:monic_processor",
            "8x kubejs:complex_smd_inductor",
            "8x kubejs:complex_smd_capacitor",
            "8x kubejs:hyperdynamic_ram_chip",
            "16x gtceu:fine_necrosiderite_wire"
        )
        .inputFluids("gtceu:living_soldering_alloy 1152")
        .itemOutputs("2x kubejs:monic_processor_assembly")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(20 * 20)
        .EUt(3932160)

    event.recipes.gtceu.assembly_line("monic_processor_computer")
        .itemInputs(
            "kubejs:monic_processing_unit",
            "2x kubejs:monic_processor_assembly",
            "4x kubejs:contained_singularity",
            "16x kubejs:complex_smd_diode",
            "48x gtceu:nor_memory_chip",
            "16x kubejs:multidimensional_cpu_chip",
            "24x kubejs:hyperdynamic_ram_chip",
            "16x kubejs:quantum_soc_chip",
            "24x kubejs:uxpic_chip",
            "24x gtceu:fine_necrosiderite_wire",
            "4x gtceu:infinity_plate"
        )
        .inputFluids("gtceu:living_soldering_alloy 1152", "gtceu:polyethyl_cyanoacrylate 1152")
        .itemOutputs("1x kubejs:monic_processor_computer")
        .duration(20 * 20)
        .EUt(3932160)

    event.recipes.gtceu.assembly_line("monic_processor_mainframe")
        .itemInputs(
            "4x gtceu:monium_frame",
            "2x kubejs:monic_processor_computer",
            "64x kubejs:complex_smd_diode",
            "64x kubejs:complex_smd_capacitor",
            "64x kubejs:complex_smd_transistor",
            "64x kubejs:complex_smd_resistor",
            "64x kubejs:complex_smd_inductor",
            "64x kubejs:contained_singularity",
            "64x gtceu:nor_memory_chip",
            "64x gtceu:nand_memory_chip",
            "64x kubejs:multidimensional_cpu_chip",
            "64x kubejs:hyperdynamic_ram_chip",
            "64x kubejs:quantum_soc_chip",
            "16x gtceu:necrosiderite_double_wire",
            "8x gtceu:infinity_plate"
        )
        .inputFluids("gtceu:living_soldering_alloy 4320", "gtceu:polyethyl_cyanoacrylate 576", "gtceu:omnium 1152")
        .itemOutputs("kubejs:monic_processor_mainframe")
        .duration(3200)
        .EUt(GTValues.VA[GTValues.UIV])
})
