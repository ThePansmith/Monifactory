ServerEvents.recipes(event => {


    event.recipes.gtceu.assembler('leptonic_charge')
        .itemInputs('8x ironfurnaces:obsidian_furnace', '4x armorplus:the_ultimate_material', '64x gtceu:gelled_toluene')
        .itemOutputs('kubejs:leptonic_charge')
        .duration(1200)
        .EUt(65520)

    // Glucon stuff
    event.recipes.gtceu.assembler('empty_glucon_cell')
        .itemInputs('5x gtceu:double_neutronium_plate', '5x gtceu:omnium_ring')
        .itemOutputs('kubejs:empty_glucon_cell')
        .duration(600)
        .EUt(16380)

        event.recipes.gtceu.centrifuge('glucon_centro') // cell chem. suffer. | Could add new multi for handling recipes with glucon
        .itemInputs('6x kubejs:quark_glucon_plasma_cell')
        .itemOutputs('4x kubejs:heavy_quark_cell', '2x kubejs:light_quark_cell','2x kubejs:glucon_cell' )
        .duration(600)
        .EUt(16380)

        event.recipes.gtceu.assembler('time_diliation_unit')
        .itemInputs('8x draconicevolution:chaotic_core', '8x kubejs:eternal_catalyst', '6x gtceu:dense_netherite_plate', '4x draconicevolution:energy_core_stabilizer', '2x #gtceu:circuits/uhv')
        .itemOutputs('kubejs:time_diliation_unit')
        .duration(600)
        .EUt(16380)

        event.recipes.gtceu.assembler('quantum_chromodynamic_charge')
        .itemInputs('kubejs:time_diliation_unit', 'kubejs:leptonic_charge', 'kubejs:glucon_cell', '2x draconicevolution:reactor_core', '32x gtceu:holmium_foil')
        .itemOutputs('kubejs:quantum_chromodynamic_charge')
        .duration(600)
        .EUt(16380)
})