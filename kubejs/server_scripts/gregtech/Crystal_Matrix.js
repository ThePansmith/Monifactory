/**
 * Crystal Matrix processing line
 */

ServerEvents.recipes(event => {

    // Acetylene
    event.recipes.gtceu.electric_blast_furnace("calcium_carbide")
        .itemInputs("2x gtceu:quicklime_dust", "3x gtceu:carbon_dust")
        .itemOutputs("3x gtceu:calcium_carbide_dust")
        .outputFluids("gtceu:carbon_monoxide 1000")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
        .blastFurnaceTemp(5400)

    event.recipes.gtceu.autoclave("hydroxide_to_quicklime")
        .itemInputs("3x gtceu:calcium_hydroxide_dust")
        .itemOutputs("2x gtceu:quicklime_dust")
        .outputFluids("minecraft:water 1000")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.large_chemical_reactor("acetylene")
        .itemInputs("3x gtceu:calcium_carbide_dust")
        .itemOutputs("3x gtceu:calcium_hydroxide_dust")
        .inputFluids("minecraft:water 2000")
        .outputFluids("gtceu:acetylene 1000")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    // Crystal Matrix Line
    const wafers = [
        ["gtceu:", "naquadah_wafer"],
        ["gtceu:", "neutronium_wafer"],
        ["kubejs:", "universe_wafer"]
    ]

    wafers.forEach((wafer, index) => {
        event.recipes.gtceu.assembler(`raw_substrate_${wafer[1]}`)
            .itemInputs(wafer[0] + wafer[1], "4x gtceu:gold_foil", "4x gtceu:graphene_dust", "32x gtceu:diamond_dust")
            .inputFluids("gtceu:nichrome 288")
            .itemOutputs(Item.of("kubejs:raw_nanotube_substrate", 4 ** (index + 1)))
            .duration(320)
            .EUt((4 ** index) * GTValues.VA[GTValues.LuV])
            .cleanroom(CleanroomType.CLEANROOM)
    })

    event.recipes.gtceu.forming_press("graphite_electrode")
        .notConsumable("gtceu:rod_extruder_mold")
        .itemInputs("1x gtceu:graphite_dust", "1x gtceu:small_cobalt_dust")
        .itemOutputs("kubejs:graphite_electrode")
        .duration(7 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.replaceInput({ id: /^gtceu:shaped\/\w+_arc_/, not: [{id: "gtceu:shaped/lv_arc_furnace"}, {id: "gtceu:shaped/mv_arc_furnace"}, {id: "gtceu:shaped/hv_arc_furnace"}] }, "gtceu:graphite_dust", "kubejs:graphite_electrode")

    event.recipes.gtceu.arc_furnace("nanotube_arcing")
        .chancedInput("2x kubejs:graphite_electrode", 1200, 0)
        .inputFluids("gtceu:helium 50")
        .itemOutputs("kubejs:nanotube_soot")
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.autoclave("substrate_preparation")
        .itemInputs("kubejs:raw_nanotube_substrate", "kubejs:nanotube_soot")
        .itemOutputs("kubejs:prepared_nanotube_substrate")
        .inputFluids("gtceu:distilled_water 100")
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.HV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.chemical_reactor("nanotube_growing")
        .itemInputs("kubejs:prepared_nanotube_substrate")
        .itemOutputs("kubejs:grown_nanotube_substrate")
        .inputFluids("gtceu:acetylene 750", "gtceu:nitrogen 1000")
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.laser_engraver("nanotube_separation")
        .notConsumable("#forge:lenses/red")
        .itemInputs("kubejs:grown_nanotube_substrate")
        .itemOutputs("kubejs:carbon_nanotubes")
        .duration(120)
        .EUt(GTValues.VA[GTValues.IV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.chemical_bath("nanotube_bathing")
        .itemInputs("kubejs:carbon_nanotubes")
        .itemOutputs("kubejs:adhered_matrix_mesh")
        .inputFluids("gtceu:nether_star 144")
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.electric_blast_furnace("matrix_blasting")
        .itemInputs("kubejs:adhered_matrix_mesh")
        .itemOutputs("monilabs:hot_crystal_matrix_ingot")
        .duration(750)
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(3823)
        .circuit(1)

    event.recipes.gtceu.electric_blast_furnace("matrix_blasting_gas")
        .itemInputs("kubejs:adhered_matrix_mesh")
        .itemOutputs("monilabs:hot_crystal_matrix_ingot")
        .inputFluids("gtceu:krypton 10")
        .duration(500)
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(3823)
        .circuit(2)

    event.recipes.gtceu.macerator("matrix_macerating")
        .itemInputs("kubejs:adhered_matrix_mesh")
        .itemOutputs("monilabs:crystal_matrix_dust")
        .duration(0.6 * 20)
        .EUt(GTValues.VA[GTValues.LV])
})
