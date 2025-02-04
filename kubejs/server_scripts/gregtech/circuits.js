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

    // Recipe categories seem to be separate when not using builders
    replaceGTRecipeAmount(event, "gtceu:chemical_reactor", /wetware_circuit_board/, "tag", "forge:foils/niobium_titanium", 0.75)
    replaceGTRecipeAmount(event, "gtceu:large_chemical_reactor", /wetware_circuit_board/, "tag", "forge:foils/niobium_titanium", 0.75)


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
            // PECA foil is used since other electronic component recipes use fluid polymers
            .itemInputs(primary, secondary, Item.of('gtceu:polyethyl_cyanoacrylate_foil', foil_amount))
            .itemOutputs(`64x kubejs:complex_smd_${item}`)
            .duration(160)
            .EUt(245760)
    }

    for (const javaRecipe of event.findRecipes({ mod: "gtceu" })) {
        /** @type {import("../../dx/typings/GTJSONRecipe.d.mts").GTJSONRecipe} */
        let recipe = JSON.parse(javaRecipe.json.toString())

        // Filter out non-GT-machine recipes
        if(!recipe?.type.startsWith("gtceu:"))
            continue

        // Filter out non-item recipes
        if (!(recipe.duration && recipe.inputs?.item && recipe.outputs))
            continue

        // Filter out recipes without advanced smd
        if(!recipe.inputs.item.some(i =>
            i.content.type === "gtceu:sized" &&
            "item" in i.content.ingredient &&
            i.content.ingredient.item.startsWith("gtceu:advanced_smd_")
        )) continue

        // Filter out recipes without eu
        if(!recipe.tickInputs?.eu)
            continue
        let eut = recipe.tickInputs.eu[0].content
        if(!eut)
            continue

        // Extract inputs and outputs data
        let [newInputItems, newOutputItems] = [recipe.inputs.item, recipe.outputs?.item].map(items =>
            items && items.map(i => {
                let c = i.content
                if (c.type !== "gtceu:sized" || "type" in c.ingredient)
                    throw new Error("Cannot generate complex SMD recipes")
                let ing = c.ingredient
                return {
                    id: "tag" in ing? "#"+ing.tag : ing.item,
                    amount: c.count
                }
            })
        )
        let [newInputFluids, newOutputFluids] = [recipe.inputs.fluid, recipe.outputs?.fluid].map(items =>
            items && items.map(i => {
                let c = i.content
                let [val] = c.value
                return {
                    id: "tag" in val? "gtceu:"+val.tag.split(":")[1] : val.fluid,
                    amount: c.amount
                }
            })
        )
        let {duration, recipeConditions} = recipe

        /** @param {number} by */
        let multiplyRecipe = by => {
            duration *= by
            eut *= by
            for(let matters of [newInputItems, newOutputItems, newInputFluids, newOutputFluids])
                if(matters)
                    for(let matter of matters)
                        matter.amount *= by
        }
        /** @param {number} by */
        let isRecipeDivisible = by =>
            duration % by === 0 &&
            eut % by === 0 &&
            [newInputItems, newOutputItems, newInputFluids, newOutputFluids]
                .filter(matters => matters)
                .every(matters => matters.every(
                    matter => matter.amount % by === 0
                ))

        multiplyRecipe(4)
        // Replace all advanced smd by complex smd
        for(let inp of newInputItems) {
            let match = inp.id.match(/^gtceu:advanced(_smd_.*)$/)
            if(!match) continue
            inp.id = "kubejs:complex"+match[1]
            inp.amount /= 4
        }
        // Divide recipe back as much as possible
        while(isRecipeDivisible(2))
            multiplyRecipe(0.5)

        let [,machineName] = recipe.type.split(':')
        let newRecipe = event.recipes.gtceu[machineName]('complex_smd_recipe_'+javaRecipe.hashCode())
        if(newInputItems)
            newRecipe = newRecipe.itemInputs.apply(newRecipe, newInputItems.map(i => `${i.amount}x ${i.id}`))
        if(newInputFluids)
            newRecipe = newRecipe.inputFluids.apply(newRecipe, newInputFluids.map(i => `${i.id} ${i.amount}`))
        if(newOutputItems)
            newRecipe = newRecipe.itemOutputs.apply(newRecipe, newOutputItems.map(i => `${i.amount}x ${i.id}`))
        if(newOutputFluids)
            newRecipe = newRecipe.outputFluids.apply(newRecipe, newOutputFluids.map(i => `${i.id} ${i.amount}`))
        newRecipe = newRecipe.EUt(eut).duration(duration)

        let cleanroomCondition = recipeConditions.find(cond => cond.type === "cleanroom")
        if(cleanroomCondition)
            newRecipe = newRecipe.cleanroom(CleanroomType[cleanroomCondition.cleanroom.toUpperCase()])

        let researchCondition = recipeConditions.find(cond => cond.type === "research")
        if(researchCondition) {
            let research = researchCondition.research[0]
            newRecipe = newRecipe.researchWithoutRecipe(research.researchId, research.dataItem.id)
        }
    }

    // Wetware tweaks are more invasive than a 1-item swapout

    // Wetware printed circuit board
    event.remove({ output: 'gtceu:wetware_printed_circuit_board' })
    event.recipes.gtceu.large_chemical_reactor("kubejs:wetware_printed_circuit_board")
        .itemInputs('gtceu:wetware_circuit_board', '24x minecraft:sculk_vein', '8x gtceu:stem_cells')
        .inputFluids('gtceu:sodium_persulfate 3000', 'gtceu:iron_iii_chloride 1500', 'enderio:xp_juice 1000')
        .itemOutputs('gtceu:wetware_printed_circuit_board')
        .EUt(480)
        .duration(1800)
        .cleanroom(CleanroomType.CLEANROOM)

    // NPU
    event.remove({ output: 'gtceu:neuro_processing_unit' })
    event.recipes.gtceu.circuit_assembler('neuro_processing_unit')
        .itemInputs('gtceu:wetware_printed_circuit_board', '4x gtceu:stem_cells', '8x gtceu:polybenzimidazole_small_fluid_pipe', '4x gtceu:enderium_plate', '16x gtceu:silicone_rubber_foil', '8x gtceu:hsse_bolt')
        .inputFluids('gtceu:sterilized_growth_medium 100')
        .itemOutputs('gtceu:neuro_processing_unit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(600)
        .EUt(80000)


    // WIP: Matter Circuits
    let plasticBoard;
    if (isNormalMode) plasticBoard = '16x gtceu:polyethyl_cyanoacrylate_plate'
    else plasticBoard = '16x gtceu:kapton_k_plate'
    event.recipes.gtceu.circuit_assembler('matter_circuit_board')
        .itemInputs(
            plasticBoard,
            '16x gtceu:omnium_plate',
            '#gtceu:circuits/luv',
            'gtceu:iv_emitter',
            '2x gtceu:omnic_acid_dust',
            '3x gtceu:flawless_monazite_gem'
        )
        .inputFluids('gtceu:distilled_water 500')
        .itemOutputs('32x kubejs:matter_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(250000)

    event.recipes.gtceu.large_chemical_reactor('matter_processing_unit')
        .itemInputs('1x kubejs:matter_circuit_board', '10x gtceu:activated_netherite_foil', '6x gtceu:crystal_matrix_foil')
        .inputFluids('gtceu:iron_iii_chloride 7500')
        .itemOutputs('1x kubejs:matter_processing_unit')
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
        .duration(10 * 20)
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
        .duration(20 * 20)
        .EUt(250000)

    event.recipes.gtceu.assembly_line('matter_processor_computer')
        .itemInputs(
            'kubejs:matter_processing_unit',
            '2x kubejs:matter_processor_assembly',
            '12x gtceu:advanced_smd_diode',
            '24x gtceu:nor_memory_chip',
            '8x kubejs:uxpic_chip',
            '24x gtceu:fine_europium_wire',
            '8x gtceu:polyethyl_cyanoacrylate_foil',
            '4x gtceu:crystal_matrix_plate'
        )
        .inputFluids('gtceu:soldering_alloy 1152', 'gtceu:omnium 144')
        .itemOutputs('kubejs:matter_processor_computer')
        .duration(20 * 20)
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
            '16x kubejs:multidimensional_cpu_chip',
            '16x gtceu:ruthenium_trinium_americium_neutronate_double_wire',
            '16x gtceu:polyethyl_cyanoacrylate_foil',
            '8x gtceu:crystal_matrix_plate') // could replace with omnium frame
        .inputFluids('gtceu:soldering_alloy 4320', 'gtceu:omnium 288')
        .itemOutputs('kubejs:matter_processor_mainframe')
        .duration(2400)
        .EUt(GTValues.VA[GTValues.UHV])


    // WIP: Dimensional Circuits
    event.recipes.gtceu.circuit_assembler('dimensional_circuit_board')
        .itemInputs(
            '32x gtceu:polyethyl_cyanoacrylate_plate',
            '4x gtceu:infinity_plate',
            '#gtceu:circuits/zpm',
            'gtceu:luv_sensor',
            '3x kubejs:the_ultimate_material',
            '2x gtceu:nether_star_lens'
        )
        .inputFluids('gtceu:omnium 288')
        .itemOutputs('32x kubejs:dimensional_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(500000)

    event.recipes.gtceu.large_chemical_reactor('dimensional_processing_unit')
        .itemInputs('1x kubejs:dimensional_circuit_board', '12x gtceu:holmium_foil', '6x gtceu:activated_netherite_foil')
        .inputFluids('gtceu:iron_iii_chloride 10000')
        .itemOutputs('1x kubejs:dimensional_processing_unit')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(100)
        .EUt(1966080)

    event.recipes.gtceu.circuit_assembler('dimensional_processor')
        .itemInputs(
            'kubejs:dimensional_processing_unit',
            '3x kubejs:multidimensional_cpu_chip',
            '4x kubejs:complex_smd_resistor',
            '4x kubejs:complex_smd_capacitor',
            '4x kubejs:complex_smd_transistor',
            '2x gtceu:fine_holmium_wire'
        )
        .inputFluids('gtceu:soldering_alloy 144')
        .itemOutputs('2x kubejs:dimensional_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(10 * 20)
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
        .duration(20 * 20)
        .EUt(1966080)

    event.recipes.gtceu.assembly_line('dimensional_processor_computer')
        .itemInputs(
            'kubejs:dimensional_processing_unit',
            '2x kubejs:dimensional_processor_assembly',
            '8x kubejs:complex_smd_diode',
            '32x gtceu:nor_memory_chip',
            '12x kubejs:multidimensional_cpu_chip',
            '16x kubejs:hyperdynamic_ram_chip',
            '16x kubejs:uxpic_chip',
            '24x gtceu:fine_activated_netherite_wire',
            '16x gtceu:polyethyl_cyanoacrylate_foil',
            '4x gtceu:holmium_plate'
        )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('kubejs:dimensional_processor_computer')
        .duration(20 * 20)
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
            '24x kubejs:multidimensional_cpu_chip',
            '32x kubejs:hyperdynamic_ram_chip',
            '16x gtceu:activated_netherite_double_wire',
            '16x gtceu:polyethyl_cyanoacrylate_foil',
            '8x gtceu:holmium_plate'
        )
        .inputFluids('gtceu:soldering_alloy 4320', 'gtceu:omnium 576')
        .itemOutputs('kubejs:dimensional_processor_mainframe')
        .duration(2400)
        .EUt(GTValues.VA[GTValues.UEV])


    // Monic Circuits
    event.recipes.gtceu.circuit_assembler('monic_circuit_board')
        .itemInputs('32x kubejs:dimensional_circuit_board',
            '2x gtceu:monium_plate',
            '#gtceu:circuits/uv',
            'gtceu:zpm_field_generator',
            '1x kubejs:quasi_stable_neutron_star',
            '2x kubejs:ultimate_gem'
        )
        .inputFluids('gtceu:omnium 576')
        .itemOutputs('32x kubejs:monic_circuit_board')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(2000000)

    event.recipes.gtceu.large_chemical_reactor('monic_processing_unit')
        .itemInputs('1x kubejs:monic_circuit_board', '6x gtceu:monium_single_wire', '8x gtceu:holmium_foil')
        .inputFluids('gtceu:iron_iii_chloride 12000')
        .itemOutputs('1x kubejs:monic_processing_unit')
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
        .duration(10 * 20)
        .EUt(3932160)

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
        .duration(20 * 20)
        .EUt(3932160)

    event.recipes.gtceu.assembly_line('monic_processor_computer')
        .itemInputs(
            'kubejs:monic_processing_unit',
            '2x kubejs:monic_processor_assembly',
            '4x kubejs:contained_singularity',
            '16x kubejs:complex_smd_diode',
            '48x gtceu:nor_memory_chip',
            '16x kubejs:multidimensional_cpu_chip',
            '24x kubejs:hyperdynamic_ram_chip',
            '16x kubejs:quantum_soc_chip',
            '24x kubejs:uxpic_chip',
            '24x gtceu:fine_holmium_wire',
            '32x gtceu:polyethyl_cyanoacrylate_foil',
            '4x gtceu:infinity_plate'
        )
        .inputFluids('gtceu:soldering_alloy 1152')
        .itemOutputs('1x kubejs:monic_processor_computer')
        .duration(20 * 20)
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
        .duration(3200)
        .EUt(GTValues.VA[GTValues.UIV])

    // SoC recipe for cheaper matter processor
    event.recipes.gtceu.circuit_assembler('matter_processor_soc')
        .itemInputs(
            'kubejs:matter_processing_unit',
            'kubejs:quantum_soc_chip',
            '8x gtceu:fine_ruthenium_trinium_americium_neutronate_wire',
            '8x gtceu:activated_netherite_bolt'
        )
        .itemOutputs('4x kubejs:matter_processor')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(5 * 20)
        .EUt(3932160)

})
