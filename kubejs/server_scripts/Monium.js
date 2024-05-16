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


        //quF ield_Stabilised_Omnic compound
        event.recipes.gtceu.omnic_forge('fieldstabilizedCompound')
        .itemInputs('5x gtceu:uiv_field_generator', '12x gtceu:omnic_acid_dust', '3x gtceu:uhv_field_generator', '4x gtceu:uev_field_generator', '10x kubejs:Quasi-Stable_Neutron_Star')      
        .itemOutputs('kubejs:Field_Stabilised_Omnic-Pulsar_Compound')       
        .duration(255)
        .EUt(16380)

        event.recipes.gtceu.advanced_microverse_iii('neutronstars')
        .itemInputs ('kubejs:microminer_t9', '40x gtceu:gravi_star', '10x kubejs:shattered_star_data')
        .itemOutputs( '10x kubejs:Quasi-Stable_Neutron_Star')
        .duration(900)
        .EUt(194387)

        event.recipes.gtceu.subatomic_digital_assembly("shatteredstardata")
        .itemInputs('64x kubejs:stellar_creation_data')
        .itemOutputs('64x kubejs:shattered_star_data')
        .EUt(662600)
        .duration(500)
        
})