ServerEvents.recipes(event => {
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev' })
    event.remove({ id: 'gtceu:circuit_assembler/workstation_ev_soldering_alloy' })

    //Using event.replaceInput on gregtech recipes causes the ingredient order to be mixed up.
    //We redeclare the recipe instead to preserve ingredient order
    event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/workstation_ev')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            '2x gtceu:micro_processor_assembly',
            '4x #gtceu:diodes',
            '4x gtceu:ram_chip',
            '16x #forge:fine_wires/electrum',
            '16x #forge:bolts/vibrant_alloy'
        )
        .inputFluids(Fluid.of('gtceu:tin', 288))
        .itemOutputs('gtceu:micro_processor_computer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(120)
    event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/workstation_ev_soldering_alloy')
        .itemInputs(
            'gtceu:plastic_printed_circuit_board',
            '2x gtceu:micro_processor_assembly',
            '4x #gtceu:diodes',
            '4x gtceu:ram_chip',
            '16x #forge:fine_wires/electrum',
            '16x #forge:bolts/vibrant_alloy'
        )
        .inputFluids(Fluid.of('gtceu:soldering_alloy', 144))
        .itemOutputs('gtceu:micro_processor_computer')
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(400)
        .EUt(120)
})