/**
 * Crystal Matrix processing line
 */

ServerEvents.recipes(event => {

    // Acetylene
    event.recipes.gtceu.electric_blast_furnace('calcium_carbide')
        .itemInputs('2x gtceu:quicklime_dust', '3x gtceu:carbon_dust')
        .itemOutputs('3x gtceu:calcium_carbide_dust')
        .outputFluids('gtceu:carbon_monoxide 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
        .blastFurnaceTemp(5400)

    event.recipes.gtceu.autoclave('hydroxide_to_quicklime')
        .itemInputs('3x gtceu:calcium_hydroxide_dust')
        .itemOutputs('2x gtceu:quicklime_dust')
        .outputFluids('minecraft:water 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.large_chemical_reactor('acetylene')
        .itemInputs('3x gtceu:calcium_carbide_dust')
        .itemOutputs('3x gtceu:calcium_hydroxide_dust')
        .inputFluids('minecraft:water 2000')
        .outputFluids('gtceu:acetylene 1000')
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    // Crystal Matrix Line
    const wafers = [
        ['gtceu:', 'naquadah_wafer'],
        ['gtceu:', 'neutronium_wafer'],
        ['kubejs:', 'universe_wafer']
    ]

    wafers.forEach((wafer, index) => {
        event.recipes.gtceu.assembler(`raw_substrate_${wafer[1]}`)
            .itemInputs(wafer[0] + wafer[1], '4x gtceu:carbon_fibers', '4x gtceu:gold_foil', '4x gtceu:graphene_dust', '64x gtceu:diamond_dust')
            .itemOutputs(Item.of('kubejs:raw_nanotube_substrate', 4 ** (index + 1)))
            .inputFluids('gtceu:neon 10')
            .duration(320)
            .EUt((4 ** index) * GTValues.VA[GTValues.LuV])
            .cleanroom(CleanroomType.CLEANROOM)
    })

    event.recipes.gtceu.atomic_reconstruction('nanoparticle_reconstruction')
        .itemInputs('gtceu:cobalt_dust')
        .itemOutputs('kubejs:cobalt_nanoparticles')
        .duration(40)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.autoclave('substrate_preparation')
        .itemInputs('4x kubejs:raw_nanotube_substrate', 'kubejs:cobalt_nanoparticles')
        .itemOutputs('4x kubejs:prepared_nanotube_substrate')
        .inputFluids('gtceu:distilled_water 100')
        .duration(40)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.arc_furnace('nanotube_growing')
        .itemInputs('kubejs:prepared_nanotube_substrate')
        .itemOutputs('kubejs:grown_nanotube_substrate')
        .inputFluids('gtceu:acetylene 500')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.laser_engraver('nanotube_separation')
        .notConsumable('#forge:lenses/red')
        .itemInputs('kubejs:grown_nanotube_substrate')
        .itemOutputs('kubejs:carbon_nanotubes')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.chemical_bath('nanotube_bathing')
        .itemInputs('kubejs:carbon_nanotubes')
        .itemOutputs('kubejs:porous_matrix_mesh')
        .inputFluids('gtceu:nether_star 576')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])
        .cleanroom(CleanroomType.CLEANROOM)

    event.recipes.gtceu.compressor('mesh_compression')
        .itemInputs('kubejs:porous_matrix_mesh')
        .itemOutputs('kubejs:dense_matrix_mesh')
        .duration(120)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.electric_blast_furnace('matrix_blasting')
        .itemInputs('kubejs:dense_matrix_mesh')
        .itemOutputs('gtceu:hot_crystal_matrix_ingot')
        .inputFluids('gtceu:krypton 10')
        .duration(1000)
        .EUt(GTValues.VA[GTValues.ZPM])
        .blastFurnaceTemp(6800)
})
