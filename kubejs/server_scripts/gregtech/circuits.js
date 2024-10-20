// Function for replacing items in circuit assembler recipes without changing the order
function replaceCircassItem(event, idRegex, tagOrItem, toReplace, replaceWith) {
    // Get all GTCEu Circuit Assembler recipes with an ID matching the regex
    event.forEachRecipe({ id: idRegex, type: "gtceu:circuit_assembler" }, circuit_recipe => {
        // Get the JSON array object representing all of the item ingredients
        let itemIngredients = circuit_recipe.json.getAsJsonObject("inputs").getAsJsonArray("item")
        for (let i = 0; i < itemIngredients.size(); i++) {
            // Item ingredient to alter
            let curItemIngredient = itemIngredients.get(i).getAsJsonObject("content").getAsJsonObject("ingredient")

            if(curItemIngredient.getAsJsonPrimitive(tagOrItem) != null && curItemIngredient.getAsJsonPrimitive(tagOrItem).asString == toReplace) {
                // Change item ingredient if it does match
                curItemIngredient.remove(tagOrItem)
                curItemIngredient["addProperty(java.lang.String,java.lang.String)"](tagOrItem, replaceWith)   
            }
        }
    })
}

ServerEvents.recipes(event => {

    // Replace some computer components with magical metals
    replaceCircassItem(event, /workstation_ev/, "tag", "forge:bolts/blue_alloy", "forge:bolts/vibrant_alloy")
    replaceCircassItem(event, /nano_computer_iv/, "tag", "forge:fine_wires/electrum", "forge:fine_wires/lumium")
    replaceCircassItem(event, /crystal_computer_zpm/, "tag", "forge:fine_wires/niobium_titanium", "forge:fine_wires/enderium")


    // Complex SMDs
    const smds = [
        ['transistor', 'gtceu:enriched_naquadah_foil', '8x gtceu:fine_holmium_wire', 2],
        ['resistor', 'gtceu:crystal_matrix_dust', '4x gtceu:fine_holmium_wire', 4],
        ['capacitor', 'gtceu:polybenzimidazole_foil', 'gtceu:holmium_foil', 1],
        ['diode', 'gtceu:indium_gallium_phosphide_dust', '8x gtceu:fine_holmium_wire', 2],
        ['inductor', 'gtceu:tritanium_ring', '4x gtceu:fine_holmium_wire', 2]
    ]
    
    for (const [item, primary, secondary, foil_amount] of smds) {
        event.recipes.gtceu.assembler(`complex_smd_${item}`)
        //PECA foil is used since other electronic component recipes use fluid polymers
        .itemInputs(primary, secondary, Item.of('gtceu:polyethyl_cyanoacrylate_foil', foil_amount))
        .itemOutputs(`32x kubejs:complex_smd_${item}`)
        .duration(160)
        .EUt(245760)
    }


    // Wetware tweaks are more invasive than a 1-item swapout
    event.remove({output: 'gtceu:neuro_processing_unit'})
    event.recipes.gtceu.circuit_assembler('neuro_processing_unit')
        .itemInputs('gtceu:wetware_printed_circuit_board', '4x gtceu:stem_cells', '8x gtceu:polybenzimidazole_small_fluid_pipe', '4x gtceu:enderium_plate', '16x gtceu:silicone_rubber_foil', '8x gtceu:hsse_bolt')
        .inputFluids('gtceu:sterilized_growth_medium 100')
        .itemOutputs('gtceu:neuro_processing_unit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(600)
        .EUt(80000)


    // WIP: Matter Circuits
    event.recipes.gtceu.circuit_assembler('matter_circuit_board')
        .itemInputs('16x gtceu:omnium_plate', '32x gtceu:activated_netherite_foil', '32x gtceu:crystal_matrix_foil', '#gtceu:circuits/luv', 'gtceu:iv_emitter', 
            '8x gtceu:omnic_acid_dust')
        .inputFluids('minecraft:water 500')
        .itemOutputs('16x kubejs:matter_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(250000)

    event.recipes.gtceu.circuit_assembler('matter_processing_unit')
        .itemInputs('2x kubejs:matter_circuit_board', '2x gtceu:crystal_matrix_plate', '2x gtceu:activated_netherite_double_wire', 'gtceu:highly_advanced_soc')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x kubejs:matter_processing_unit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(100)
        .EUt(250000)

    event.recipes.gtceu.circuit_assembler('matter_processor')
        .itemInputs(
            'kubejs:matter_processing_unit',
            '2x kubejs:multidimensional_cpu_chip',
            '10x gtceu:advanced_smd_resistor',
            '10x gtceu:advanced_smd_capacitor',
            '10x gtceu:advanced_smd_transistor', 
            '4x gtceu:fine_naquadria_wire'
        )
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('2x kubejs:matter_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(160)
        .EUt(250000)

    event.recipes.gtceu.circuit_assembler('matter_processor_assembly')
        .itemInputs('kubejs:matter_processing_unit',
            '2x kubejs:matter_processor', 
            '8x gtceu:advanced_smd_inductor',
            '8x gtceu:advanced_smd_capacitor',
            '32x gtceu:ram_chip',
            '16x gtceu:fine_europium_wire'
        )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x kubejs:matter_processor_assembly')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(160)
        .EUt(250000)

    event.recipes.gtceu.assembly_line('matter_processor_computer')
        .itemInputs(
            'kubejs:matter_processing_unit',
            '2x kubejs:matter_processor_assembly',
            '12x gtceu:advanced_smd_diode',
            '24x gtceu:nor_memory_chip',
            '8x gtceu:uhpic_chip',
            '24x gtceu:fine_europium_wire',
            '8x gtceu:polyethyl_cyanoacrylate_foil',
            '4x gtceu:crystal_matrix_plate'
        )
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 144')
        .itemOutputs('kubejs:matter_processor_computer')
        .duration(200)
        .EUt(250000)

    event.recipes.gtceu.assembly_line('matter_processor_mainframe')
        .itemInputs('2x gtceu:activated_netherite_frame',
            '2x kubejs:matter_processor_computer',
            '32x gtceu:advanced_smd_diode',
            '32x gtceu:advanced_smd_capacitor', 
            '32x gtceu:advanced_smd_transistor',
            '32x gtceu:advanced_smd_resistor',
            '32x gtceu:advanced_smd_inductor', 
            '32x gtceu:ram_chip',
            '16x gtceu:ruthenium_trinium_americium_neutronate_double_wire',
            '16x gtceu:polyethyl_cyanoacrylate_foil',
            '8x gtceu:crystal_matrix_plate') // could replace with omnium frame
        .inputFluids('gtceu:soldering_alloy 4320', 'gtceu:omnium 288')
        .itemOutputs('kubejs:matter_processor_mainframe')
        .duration(1200)
        .EUt(1000000)


    // WIP: Dimensional Circuits
    event.recipes.gtceu.circuit_assembler('dimensional_circuit_board')
        .itemInputs('16x kubejs:matter_circuit_board', '32x gtceu:holmium_foil', '#gtceu:circuits/zpm', 'gtceu:luv_field_generator', 
            '8x gtceu:nether_star_lens')
        .inputFluids('gtceu:omnium 288')
        .itemOutputs('16x kubejs:dimensional_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(500000)

    event.recipes.gtceu.circuit_assembler('dimensional_processing_unit')
        .itemInputs('4x kubejs:dimensional_circuit_board', 'gtceu:infinity_plate', '4x kubejs:the_ultimate_material', 
            '4x gtceu:activated_netherite_double_wire', '2x gtceu:flawless_monazite_gem',  '2x gtceu:flawless_glass_gem')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x kubejs:dimensional_processing_unit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(100)
        .EUt(1966080)

    event.recipes.gtceu.circuit_assembler('dimensional_processor')
        .itemInputs(
            'kubejs:dimensional_processing_unit',
            '4x kubejs:multidimensional_cpu_chip',
            '4x kubejs:complex_smd_resistor',
            '4x kubejs:complex_smd_capacitor',
            '4x kubejs:complex_smd_transistor', 
            '2x gtceu:fine_holmium_wire'
        )
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('2x kubejs:dimensional_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(160)
        .EUt(1966080)

    event.recipes.gtceu.circuit_assembler('dimensional_processor_assembly')
        .itemInputs(
            'kubejs:dimensional_processing_unit',
            '2x kubejs:dimensional_processor',
            '4x kubejs:complex_smd_inductor',
            '4x kubejs:complex_smd_capacitor',
            '4x kubejs:hyperdynamic_ram_chip',
            '16x gtceu:fine_activated_netherite_wire'
        )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x kubejs:dimensional_processor_assembly')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(160)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('dimensional_processor_computer')
        .itemInputs(
            'kubejs:dimensional_processing_unit',
            '2x kubejs:dimensional_processor_assembly',
            '8x kubejs:complex_smd_diode',
            '32x gtceu:nor_memory_chip',
            '16x kubejs:hyperdynamic_ram_chip',
            '16x gtceu:uhpic_chip',
            '24x gtceu:fine_activated_netherite_wire',
            '16x gtceu:polyethyl_cyanoacrylate_foil',
            '4x gtceu:holmium_plate'
        )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:dimensional_processor_computer')
        .duration(200)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('dimensional_processor_mainframe')
        .itemInputs(
            '2x gtceu:infinity_frame',
            '2x kubejs:dimensional_processor_computer',
            '32x kubejs:complex_smd_diode',
            '32x kubejs:complex_smd_capacitor', 
            '32x kubejs:complex_smd_transistor',
            '32x kubejs:complex_smd_resistor',
            '32x kubejs:complex_smd_inductor', 
            '32x gtceu:nand_memory_chip',
            '32x kubejs:hyperdynamic_ram_chip',
            '16x gtceu:activated_netherite_double_wire',
            '16x gtceu:polyethyl_cyanoacrylate_foil',
            '8x gtceu:holmium_plate'
        )
        .inputFluids('gtceu:soldering_alloy 4320', 'gtceu:omnium 576')
        .itemOutputs('kubejs:dimensional_processor_mainframe')
        .duration(1200)
        .EUt(3932160)


    // Monic Circuits
    event.recipes.gtceu.circuit_assembler('monic_circuit_board')
        .itemInputs('16x kubejs:dimensional_circuit_board', '16x gtceu:activated_netherite_plate', '8x gtceu:holmium_plate', 
            '#gtceu:circuits/uv', 'gtceu:zpm_field_generator', '4x kubejs:quasi_stable_neutron_star')
        .inputFluids('gtceu:omnium 576')
        .itemOutputs('16x kubejs:monic_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(2000000)

    event.recipes.gtceu.circuit_assembler('monic_processing_unit')
        .itemInputs('8x kubejs:monic_circuit_board', '1x gtceu:monium_plate', '16x gtceu:holmium_double_wire', '4x kubejs:ultimate_gem',  
            '4x gtceu:exquisite_glass_gem')
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x kubejs:monic_processing_unit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(100)
        .EUt(3932160)

    event.recipes.gtceu.circuit_assembler('monic_processor')
        .itemInputs(
            'kubejs:monic_processing_unit',
            'kubejs:contained_singularity',
            '8x kubejs:complex_smd_resistor',
            '8x kubejs:complex_smd_capacitor',
            '8x kubejs:complex_smd_transistor',
            '16x gtceu:fine_holmium_wire'
        )
        .inputFluids('gtceu:soldering_alloy 288')
        .itemOutputs('2x kubejs:monic_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(160)
        .EUt(1966080)

    event.recipes.gtceu.circuit_assembler('monic_processor_assembly')
        .itemInputs(
            'kubejs:monic_processing_unit',
            '2x kubejs:monic_processor',
            '8x kubejs:complex_smd_inductor',
            '8x kubejs:complex_smd_capacitor',
            '8x kubejs:hyperdynamic_ram_chip',
            '16x gtceu:fine_holmium_wire'
        )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x kubejs:monic_processor_assembly')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(160)
        .EUt(3932160)

    event.recipes.gtceu.assembly_line('monic_processor_computer')
        .itemInputs(
            'kubejs:monic_processing_unit',
            '2x kubejs:monic_processor_assembly',
            '4x kubejs:contained_singularity', 
            '16x kubejs:complex_smd_diode',
            '48x gtceu:nor_memory_chip',
            '24x kubejs:hyperdynamic_ram_chip',
            '16x kubejs:quantum_soc_chip',
            '24x gtceu:uhpic_chip',
            '24x gtceu:fine_holmium_wire', 
            '32x gtceu:polyethyl_cyanoacrylate_foil',
            '4x gtceu:infinity_plate'
        )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('2x kubejs:monic_processor_computer')
        .duration(200)
        .EUt(3932160)

    event.recipes.gtceu.assembly_line('monic_processor_mainframe')
        .itemInputs(
            '4x gtceu:monium_frame',
            '2x kubejs:monic_processor_computer',
            '64x kubejs:complex_smd_diode',
            '64x kubejs:complex_smd_capacitor',
            '64x kubejs:complex_smd_transistor',
            '64x kubejs:complex_smd_resistor',
            '64x kubejs:complex_smd_inductor', 
            '64x kubejs:contained_singularity',
            '64x gtceu:nor_memory_chip',
            '64x gtceu:nand_memory_chip',
            '64x kubejs:multidimensional_cpu_chip', 
            '64x kubejs:hyperdynamic_ram_chip',
            '64x kubejs:quantum_soc_chip',
            '16x gtceu:holmium_double_wire',
            '16x gtceu:polyethyl_cyanoacrylate_foil',
            '8x gtceu:infinity_plate'
        )
        .inputFluids('gtceu:soldering_alloy 4320', 'gtceu:omnium 1152')
        .itemOutputs('kubejs:monic_processor_mainframe')
        .duration(1200)
        .EUt(134217728)
})
