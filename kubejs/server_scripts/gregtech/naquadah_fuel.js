ServerEvents.recipes(event => {

    //Liquid Fuel recipes 
    if (!isNormalMode) {

        // Piranha Solution
        event.recipes.gtceu.mixer("piranha_solution")
            .inputFluids('gtceu:hydrogen_peroxide 1000', 'gtceu:sulfuric_acid 3000')
            .outputFluids('gtceu:piranha_solution 4000')
            .duration(80)
            .EUt(480)

            event.recipes.gtceu.fluid_heater("hot_piranha_solution")
            .inputFluids('gtceu:piranha_solution 100')
            .outputFluids('gtceu:hot_piranha_solution 100')
            .duration(40)
            .EUt(30)

        //Tritium Radon Difluoride
        event.recipes.gtceu.large_chemical_reactor('tritium_radon_difluoride')
            .notConsumable('gtceu:blacklight')
            .inputFluids('gtceu:tritium 1000', 'gtceu:radon 1000', 'gtceu:fluorine 2000')
            .outputFluids('gtceu:tritium_radon_difluoride 1000')
            .duration(160)
            .EUt(1920)

        // Naquadah Fuel Feedstock
        event.recipes.gtceu.electric_blast_furnace("raw_naquadah_solution")
            .itemInputs('10x gtceu:naquadah_dust')
            .itemOutputs('kubejs:naquadah_waste')
            .inputFluids('gtceu:helium_hydride 500')
            .outputFluids('gtceu:raw_naquadah_solution 1000')
            .duration(400)
            .EUt(30720)
            .blastFurnaceTemp(10800)

        event.recipes.gtceu.large_chemical_reactor("inert_naquadah_blend")
            .itemInputs('4x gtceu:thorium_dust', 'gtceu:naquadria_dust')
            .inputFluids('gtceu:raw_naquadah_solution 1000', 'gtceu:hot_piranha_solution 1000')
            .outputFluids('gtceu:inert_naquadah_blend 1000')
            .duration(300)
            .EUt(30720)

        // Naquadah Activation 
        event.recipes.gtceu.fusion_reactor('naquadah_activation')
            .inputFluids('gtceu:inert_naquadah_blend 20', 'gtceu:tritium_radon_difluoride 20')
            .outputFluids('gtceu:active_naquadah_blend 20')
            .duration(40).EUt(30720)
            .fusionStartEU(400000000)

        // Naquadah Distillation
        event.recipes.gtceu.distillation_tower('naquadah_isotope_distillation')
            .inputFluids('gtceu:active_naquadah_blend 1000')
            .chancedOutput('kubejs:naquadah_waste', 1000, 0)
            .outputFluids('gtceu:naquadah_isotope_sludge 100', 'gtceu:heavy_naquadah_isotope_fraction 300', 'gtceu:medium_naquadah_isotope_fraction 400', 'gtceu:light_naquadah_isotope_fraction 200')
            .duration(200)
            .EUt(15360)

        // Refinery Recipes 
        event.recipes.gtceu.naquadah_refinery('t1_naquadah_fuel')
            .itemInputs('4x kubejs:naquadah_fuel_dust', '4x gtceu:duranium_dust', '6x gtceu:enriched_sunnarium_dust', '16x gtceu:omnic_acid_dust', '4x gtceu:neutronium_dust')
            .inputFluids('gtceu:medium_naquadah_isotope_fraction 400', 'gtceu:light_naquadah_isotope_fraction 200', 'gtceu:jean_gasoline 10000', 'gtceu:plutonium_241 1000')
            .outputFluids('gtceu:naq_fuel_t1 12000')
            .duration(800)
            .EUt(491520)

        event.recipes.gtceu.naquadah_refinery('t2_naquadah_fuel')
            .notConsumable('kubejs:eternal_catalyst')
            .itemInputs('2x kubejs:ultimate_gem', '8x kubejs:hadal_shard', '4x kubejs:quasi_stable_neutron_star', '32x gtceu:enriched_naquadah_dust',  '8x gtceu:trinium_dust')
            .inputFluids('gtceu:naq_fuel_t1 12000', 'gtceu:oganesson 800', 'gtceu:exotic_particle_solution 300', 'gtceu:einsteinium 1000')
            .outputFluids('gtceu:naq_fuel_t2 12000')
            .duration(800)
            .EUt(1966080)

        event.recipes.gtceu.naquadah_refinery('naquadah_superfuel')
            .notConsumable('kubejs:infinity_catalyst')
            .itemInputs('gtceu:infinity_dust', '12x gtceu:activated_netherite_dust', '32x gtceu:crystal_matrix_dust', '16x kubejs:naquadah_fuel_dust', '64x gtceu:naquadria_dust', '64x gtceu:neutronium_dust')
            .inputFluids('gtceu:hyperdegenerate_matter 200', 'gtceu:naq_fuel_t2 12000', 'gtceu:taranium 576', 'gtceu:quadium 600')
            .outputFluids('gtceu:naquadah_superfuel 24000')
            .duration(800)
            .EUt(8388608)

        // Cracker Recipes 

        event.recipes.gtceu.cracker('light_isotope_cracking')
            .inputFluids('gtceu:light_naquadah_isotope_fraction 1000', 'gtceu:neutronium 100')
            .outputFluids('gtceu:cracked_light_naquadah_isotope_fraction 1000')
            .duration(80)
            .EUt(122880)
        
        event.recipes.gtceu.cracker('medium_isotope_cracking')
            .inputFluids('gtceu:medium_naquadah_isotope_fraction 1000', 'gtceu:neutronium 100')
            .outputFluids('gtceu:cracked_medium_naquadah_isotope_fraction 1000')
            .duration(80)
            .EUt(122880)

        event.recipes.gtceu.cracker('heavy_isotope_cracking')
            .inputFluids('gtceu:heavy_naquadah_isotope_fraction 1000', 'gtceu:neutronium 100')
            .outputFluids('gtceu:cracked_heavy_naquadah_isotope_fraction 1000')
            .duration(80)
            .EUt(122880)

        event.recipes.gtceu.cracker('sludge_cracking')
            .inputFluids('gtceu:naquadah_isotope_sludge 1000', 'gtceu:neutronium 100')
            .outputFluids('gtceu:cracked_naquadah_isotope_sludge 1000')
            .duration(80)
            .EUt(122880)

        event.recipes.gtceu.distillation_tower('light_isotope_distillation')
            .inputFluids('gtceu:cracked_light_naquadah_isotope_fraction 1000')
            .chancedOutput('gtceu:europium_dust', 1000, 0)
            .outputFluids('gtceu:medium_naquadah_isotope_fraction 250', 'gtceu:radon 200', 'gtceu:quadium 300', 'gtceu:helium 150', 'gtceu:tritium 150')
            .duration(200)
            .EUt(15360)

        event.recipes.gtceu.distillation_tower('medium_isotope_distillation')
            .inputFluids('gtceu:cracked_medium_naquadah_isotope_fraction')
            .chancedOutput('gtceu:lead_dust', 2500, 0)
            .outputFluids('gtceu:heavy_naquadah_isotope_fraction 200', 'gtceu:light_naquadah_isotope_fraction 250', 'gtceu:oganesson 400', 'gtceu:plutonium 150')
            .duration(200)
            .EUt(15360)
        
        event.recipes.gtceu.distillation_tower('heavy_isotope_distillation')
            .inputFluids('gtceu:cracked_heavy_naquadah_isotope_fraction')
            .outputFluids('gtceu:naquadah_isotope_sludge 200', 'gtceu:medium_naquadah_isotope_fraction 200', 'gtceu:heavy_atomic_residue 300', 'gtceu:einsteinium 150', 'gtceu:tritanium 100')
            .duration(200)
            .EUt(15360)

        event.recipes.gtceu.distillation_tower('sludge_distillation')
            .inputFluids('gtceu:cracked_naquadah_isotope_sludge 1000')
            .itemOutputs('kubejs:naquadah_waste')
            .outputFluids('gtceu:superheavy_atomic_residue 600', 'gtceu:heavy_naquadah_isotope_fraction 200', 'gtceu:neutronium 200')
            .duration(200)
            .EUt(15360)

        // Superheavy Chemical Processing

        event.recipes.gtceu.large_chemical_reactor('heavy_residue_purification')
            .notConsumable('kubejs:magnetron')
            .inputFluids('gtceu:heavy_atomic_residue 200')
            .itemInputs('8x gtceu:activated_carbon_dust', '4x gtceu:omnic_acid_dust')
            .inputFluids('gtceu:hydrobromic_acid 2000', 'gtceu:distilled_water 4000')
            .outputFluids('gtceu:purified_heavy_residue 200')
            .duration(40)
            .EUt(8388608)

            event.recipes.gtceu.large_chemical_reactor('superheavy_residue_purification')
            .notConsumable('kubejs:magnetron')
            .inputFluids('gtceu:superheavy_atomic_residue 200')
            .itemInputs('8x gtceu:activated_carbon_dust', '4x gtceu:omnic_acid_dust')
            .inputFluids('gtceu:hydrobromic_acid 2000', 'gtceu:distilled_water 4000')
            .outputFluids('gtceu:purified_superheavy_residue 200')
            .duration(40)
            .EUt(8388608)

        event.recipes.gtceu.fusion_reactor('exotic_particle_activation')
            .inputFluids('gtceu:purified_heavy_residue 50', 'gtceu:oganesson 150')
            .outputFluids('gtceu:exotic_particle_solution 50')
            .duration(10).EUt(2097152)
            .fusionStartEU(640000000)

        event.recipes.gtceu.fusion_reactor('hyperdegenerate_activation')
            .inputFluids('gtceu:purified_superheavy_residue 50', 'gtceu:americium_plasma 144')
            .outputFluids('gtceu:hyperdegenerate_matter 25')
            .duration(10).EUt(8388608)
            .fusionStartEU(640000000)

        // Liquid Waste Processing
        
        event.recipes.gtceu.centrifuge('t1_waste_processing')
            .inputFluids('gtceu:naq_fuel_t1_depleted 12000')
            .outputFluids('gtceu:plutonium_241 200', )
            .itemOutputs('12x gtceu:lead_dust', 'gtceu:sunnarium_dust', )
            .chancedOutput('3x gtceu:thorium_dust', 5000, 0)
            .chancedOutput('gtceu:neutronium_dust', 3300, 0)
            .chancedOutput('gtceu:duranium_dust', 3300, 0)
            .chancedOutput('3x kubejs:naquadah_waste', 6600, 0)
            .chancedFluidOutput('gtceu:americium 100', 3300,0)
            .duration(1200)
            .EUt(122800)

        event.recipes.gtceu.centrifuge('t2_waste_processing')
            .inputFluids('gtceu:naq_fuel_t2_depleted 12000')
            .outputFluids('gtceu:einsteinium 200')
            .itemOutputs('12x gtceu:lead_dust', 'gtceu:trinium_dust')
            .chancedOutput('16x gtceu:enriched_naquadah_dust', 5000, 0)
            .chancedOutput('3x kubejs:naquadah_waste', 6600, 0)
            .chancedFluidOutput('gtceu:exotic_particle_solution 100', 3300, 0)
            .duration(1200)
            .EUt(491520)

        event.recipes.gtceu.centrifuge('superfuel_waste_processing')
            .inputFluids('gtceu:naquadah_superfuel_depleted 12000')
            .itemOutputs('12x gtceu:lead_dust', '3x gtceu:activated_netherite_dust')
            .chancedOutput('gtceu:infinity_dust', 5000, 0)
            .chancedOutput('3x kubejs:naquadah_waste', 6600, 0)
            .chancedOutput('16x gtceu:naquadria_dust', 5000, 0)
            .chancedFluidOutput('gtceu:taranium 288', 5000, 0)
            .chancedFluidOutput('gtceu:hyperdegenerate_matter 100', 3300, 0)
            .duration(1200)
            .EUt(1966080)
    }
    
    //Solid Fuel Recipes

    event.recipes.gtceu.assembler('fuel_rod')
        .itemInputs('gtceu:fluid_cell', '2x gtceu:rhodium_plated_palladium_ring', '2x gtceu:neutron_reflector', '2x gtceu:rhodium_plated_palladium_plate')
        .inputFluids('gtceu:lead 288')
        .itemOutputs('kubejs:empty_fuel_rod')
        .duration(200)
        .EUt(122880)

    event.recipes.gtceu.canner('naquadah_fuel_rod')
        .itemInputs('kubejs:empty_fuel_rod', '4x kubejs:naquadah_fuel_pellet')
        .itemOutputs('kubejs:naquadah_fuel_rod')
        .duration(200)
        .EUt(30720)

    event.recipes.gtceu.canner('depleted_naquadah_fuel_rod')
        .itemInputs('kubejs:depleted_naquadah_fuel_rod')
        .itemOutputs('kubejs:empty_fuel_rod', '4x kubejs:depleted_naquadah_fuel_pellet')
        .duration(200)
        .EUt(30720)

    event.recipes.gtceu.vacuum_freezer('fuel_rod_cooling')
        .itemInputs('kubejs:hot_depleted_naquadah_fuel_rod')
        .itemOutputs('kubejs:depleted_naquadah_fuel_rod')
        .inputFluids('kubejs:molten_cryotheum 1000')
        .duration(100)
        .EUt(30720)

    event.recipes.gtceu.arc_furnace('pellet_sintering')
        .itemInputs('kubejs:unsintered_naquadah_fuel_pellet')
        .itemOutputs('kubejs:naquadah_fuel_pellet')
        .inputFluids('gtceu:xenon 500')
        .duration(100)
        .EUt(30720)

    event.recipes.gtceu.forming_press('pellet_pressing')
        .notConsumable('kubejs:pellet_extruder_mold')
        .itemInputs('kubejs:naquadah_fuel_dust')
        .itemOutputs('kubejs:unsintered_naquadah_fuel_pellet')
        .duration(100)
        .EUt(122880)

    event.recipes.gtceu.atomic_reconstruction('naquadah_fuel_activation')
        .itemInputs('kubejs:inactivated_naquadah_fuel_dust')
        .itemOutputs('kubejs:naquadah_fuel_dust')
        .duration(100)
        .EUt(122880)

    event.recipes.gtceu.autoclave('naquadah_fuel_enrichment')
        .itemInputs('kubejs:raw_naquadah_fuel_dust', 'gtceu:omnium_dust')
        .inputFluids('gtceu:radon 500')
        .itemOutputs('kubejs:inactivated_naquadah_fuel_dust')
        .duration(150)
        .EUt(61440)

    event.recipes.gtceu.macerator('depleted_fuel_maceration')
        .itemInputs('kubejs:depleted_naquadah_fuel_pellet')
        .itemOutputs('kubejs:depleted_naquadah_fuel_dust')
        .duration(80)
        .EUt(30720)

    event.recipes.gtceu.mixer('crude_naquadah_blend')
        .itemInputs('gtceu:dilithium_dust', '2x gtceu:naquadria_dust', 'gtceu:plutonium_dust', 'gtceu:uranium_235_dust', '2x kubejs:primal_mana', '2x gtceu:neutronium_dust')
        .inputFluids('gtceu:jean_gasoline 4000')
        .itemOutputs('4x kubejs:crude_naquadah_fuel_blend')
        .duration(300)
        .EUt(491520)

    event.recipes.gtceu.electric_blast_furnace('naquadah_fuel_crystal')
        .itemInputs('kubejs:crude_naquadah_fuel_blend')
        .inputFluids('gtceu:americium_plasma 72')
        .itemOutputs('kubejs:hot_naquadah_fuel_crystal')
        .duration(150)
        .EUt(200000)
        .blastFurnaceTemp(10800)

    event.recipes.gtceu.vacuum_freezer('naquadah_fuel_chilling')
        .itemInputs('kubejs:hot_naquadah_fuel_crystal')
        .inputFluids('kubejs:molten_cryotheum 1000')
        .itemOutputs('kubejs:naquadah_fuel_crystal')
        .duration(100)
        .EUt(30720)

    event.recipes.gtceu.macerator('naquadah_crystal_maceration')
        .itemInputs('kubejs:naquadah_fuel_crystal')
        .itemOutputs('kubejs:naquadah_fuel_mixture_dust')
        .duration(80)
        .EUt(30720)

    event.recipes.gtceu.centrifuge('fuel_mixture_centrifuging')
        .itemInputs('4x kubejs:naquadah_fuel_mixture_dust')
        .inputFluids('gtceu:hydrobromic_acid 1000')
        .itemOutputs('4x kubejs:raw_naquadah_fuel_dust', 'kubejs:naquadah_waste')
        .duration(100)
        .EUt(122880)

    event.shaped(
            "kubejs:pellet_extruder_mold", [
            '   ',
            ' MC',
            '   '
        ], {
            M: "gtceu:cell_extruder_mold",
            C: "#forge:tools/wire_cutters",
        }
        ).id('kubejs:pellet_mold')

    // Solid Waste Processing
    event.recipes.gtceu.centrifuge('naquadah_waste_centrifuging')
        .itemInputs('4x kubejs:naquadah_waste')
        .inputFluids('gtceu:hydrofluoric_acid 2000')
        .itemOutputs('4x gtceu:lead_dust')
        .itemOutputs('2x gtceu:naquadah_dust')
        .chancedOutput('gtceu:naquadria_dust', 5000, 0)
        .chancedOutput('gtceu:tritanium_dust', 3300, 0)
        .chancedOutput('gtceu:small_neutronium_dust', 5000, 0)
        .duration(200)
        .EUt(30720)

    event.recipes.gtceu.sifter('depleted_fuel_sifting')
        .itemInputs('kubejs:depleted_naquadah_fuel_dust')
        .chancedOutput('kubejs:naquadah_waste', 3300, 0)
        .chancedOutput('kubejs:naquadah_waste', 3300, 0)
        .chancedOutput('kubejs:naquadah_waste', 3300, 0)
        .chancedOutput('kubejs:naquadah_waste', 3300, 0)
        .duration(80)
        .EUt(30720)

        


        














































})