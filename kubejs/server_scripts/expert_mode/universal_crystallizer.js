ServerEvents.recipes(event => {
    if (isExpertMode) {
        ////// Machine Recipe //////
        event.recipes.gtceu.assembly_line('universal_crystallizer')
            .itemInputs('24x gtceu:large_autoclave', '24x packagedexcrafting:combination_crafter', '24x gtceu:uv_emitter', '24x gtceu:uv_field_generator', '64x gtceu:wetware_processor_mainframe', '64x gtceu:tritanium_coil_block', '24x kubejs:reactor_stabilizer', '8x kubejs:abyssal_reaction_casing', '8x gtceu:infinity_plate')
            .inputFluids('kubejs:molten_cryotheum 36864', 'gtceu:diamatine_empowered 18432', 'gtceu:naquadria 63216', 'gtceu:taranium 4608')
            .itemOutputs('gtceu:universal_crystallizer')
            .stationResearch(b => b
                .researchStack('gtceu:tritanium_coil_block')
                .CWUt(128, 512000)
                .EUt(30720)
            )
            .duration(45)
            .EUt(1966080)
     
            
        ////// Crystallization recipes /////
        event.recipes.gtceu.universal_crystallizer('diamond_crystallization')
            .itemInputs('64x gtceu:carbon_dust', '64x gtceu:carbon_dust', '64x gtceu:carbon_dust', '64x gtceu:carbon_dust', '64x gtceu:carbon_dust', '64x gtceu:carbon_dust', '64x gtceu:carbon_dust', '64x gtceu:carbon_dust')
            .inputFluids('gtceu:enriched_naquadah 3')
            .itemOutputs('32x minecraft:diamond')
            .duration(60)
            .EUt(1179648)

        event.recipes.gtceu.universal_crystallizer('enori_crystallization')
            .itemInputs('63x gtceu:iron_dust')
            .inputFluids('gtceu:enriched_naquadah 3')
            .itemOutputs('7x gtceu:enori_empowered_block')
            .duration(7)
            .EUt(1000000)

        event.recipes.gtceu.universal_crystallizer('restonia_crystallization')
            .itemInputs('minecraft:redstone')
            .inputFluids('gtceu:enriched_naquadah 3')
            .itemOutputs('7x gtceu:restonia_empowered_block')
            .duration(7)
            .EUt(1000000)

        event.recipes.gtceu.universal_crystallizer('palis_crystallization')
            .itemInputs('63x gtceu:lapis_dust')
            .inputFluids('gtceu:enriched_naquadah 3')
            .itemOutputs('7x gtceu:palis_empowered_block')
            .duration(7)
            .EUt(1000000)
        
        event.recipes.gtceu.universal_crystallizer('void_crystallization')
            .itemInputs('63x gtceu:coal_dust')
            .inputFluids('gtceu:enriched_naquadah 3')
            .itemOutputs('7x gtceu:void_empowered_block')
            .duration(7)
            .EUt(1000000)

        event.recipes.gtceu.universal_crystallizer('diamatine_crystallization')
            .itemInputs('63x gtceu:diamond_dust')
            .inputFluids('gtceu:enriched_naquadah 3')
            .itemOutputs('7x gtceu:diamatine_empowered_block')
            .duration(7)
            .EUt(1000000)

        event.recipes.gtceu.universal_crystallizer('emeradic_crystallization')
            .itemInputs('63x gtceu:emerald_dust')
            .inputFluids('gtceu:enriched_naquadah 3')
            .itemOutputs('7x gtceu:emeradic_empowered_block')
            .duration(7)
            .EUt(1000000)

        event.recipes.gtceu.universal_crystallizer('matrix_crystallization')
            .itemInputs('3x gtceu:diamond_perfect', '9x minecraft:nether_star', '27x gtceu:diamond_plate', '27x minecraft:diamond')
            .inputFluids('gtceu:enriched_naquadah 3')
            .itemOutputs('1x gtceu:crystal_matrix_ingot')
            .duration(7)
            .EUt(1000000)

        // On ice until I get a reply from Pansmith/WithersChat
        // event.recipes.gtceu.universal_crystallizer('sculk_core_crystallization')
        //     .itemInputs('3x gtceu:diamond_perfect', '9x minecraft:nether_star', '27x gtceu:diamond_plate', '27x minecraft:diamond')
        //     .inputFluids('gtceu:enriched_naquadah 3')
        //     .itemOutputs('1x gtceu:crystal_matrix_ingot')
        //     .duration(7)
        //     .EUt(1000000)

        // event.recipes.gtceu.universal_crystallizer('echo_core_crystallization')
        //     .itemInputs('3x gtceu:diamond_perfect', '9x minecraft:nether_star', '27x gtceu:diamond_plate', '27x minecraft:diamond')
        //     .inputFluids('gtceu:enriched_naquadah 3')
        //     .itemOutputs('1x gtceu:crystal_matrix_ingot')
        //     .duration(7)
        //     .EUt(1000000)

        // event.recipes.gtceu.universal_crystallizer('resonant_core_crystallization')
        //     .itemInputs('3x gtceu:diamond_perfect', '9x minecraft:nether_star', '27x gtceu:diamond_plate', '27x minecraft:diamond')
        //     .inputFluids('gtceu:enriched_naquadah 3')
        //     .itemOutputs('1x gtceu:crystal_matrix_ingot')
        //     .duration(7)
        //     .EUt(1000000)

        // event.recipes.gtceu.universal_crystallizer('abyssal_core_crystallization')
        //     .itemInputs('3x gtceu:diamond_perfect', '9x minecraft:nether_star', '27x gtceu:diamond_plate', '27x minecraft:diamond')
        //     .inputFluids('gtceu:enriched_naquadah 3')
        //     .itemOutputs('1x gtceu:crystal_matrix_ingot')
        //     .duration(7)
        //     .EUt(1000000)
    }
})