ServerEvents.recipes(event => {
    
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
            .itemInputs('10x gtceu:naquadria_dust')
            .itemOutputs()
            .inputFluids('gtceu:helium_hydride 500')
            .outputFluids('gtceu:raw_naquadah_solution 500')
            .duration(600)
            .EUt(7680)
            .blastFurnaceTemp(7200)

        event.recipes.gtceu.large_chemical_reactor("inert_naquadah_blend")
            .itemInputs('4x gtceu:thorium_dust', 'gtceu:naquadah_dust')
            .inputFluids('gtceu:raw_naquadah_solution 1000', 'gtceu:hot_piranha_solution 1000')
            .outputFluids('gtceu:inert_naquadah_blend 1000')
            .duration(300)
            .EUt(30720)

        // Naquadah Activation 
        event.recipes.gtceu.fusion_reactor('naquadah_activation')
            .inputFluids('gtceu:inert_naquadah_blend 20', 'gtceu:tritium_radon_difluoride 20')
            .outputFluids('gtceu:active_naquadah_blend 20')
            .duration(40).EUt(3840)
            .fusionStartEU(80000000)

        // Naquadah Distillation
        event.recipes.gtceu.distillation_tower('naquadah_isotope_distillation')
            .inputFluids('gtceu:active_naquadah_blend 100')
            .chancedOutput('gtceu:nuclear_waste', 1000, 0)
            .outputFluids('gtceu:naquadah_isotope_sludge 10', 'gtceu:heavy_naquadah_isotope_fraction 20', 'gtceu:medium_naquadah_isotope_fraction 40', 'gtceu:light_naquadah_isotope_fraction 30')
            .duration(80).EUt(3840)
        

        // Tier 1 Crude fuel 
        event.recipes.gtceu.mixer("t1_naquadah_fuel")
            .itemInputs('gtceu:uranium_235_dust')
            .inputFluids('gtceu:inert_naquadah_blend 1000', 'gtceu:jean_gasoline 8000')
            .outputFluids('gtceu:naq_fuel_t1 2000')
            .duration(40)
            .EUt(7680)

        // Refinery Recipes 
        event.recipes.gtceu.naquadah_refinery('t2_naquadah_fuel')
            .itemInputs('4x kubejs:pyrotheum_dust', 'gtceu:nether_star_dust', 'gtceu:omnic_acid_dust')
            .inputFluids('gtceu:medium_naquadah_isotope_fraction 400', 'gtceu:light_naquadah_isotope_fraction 200')
            .outputFluids('gtceu:naq_fuel_t2 1000')
            .duration(400)
            .EUt(30720)
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
        .itemInputs('kubejs:naquadah_fuel_dust')
        .notConsumable('kubejs:pellet_extruder_mold')
        .itemOutputs('kubejs:unsintered_naquadah_fuel_pellet')
        .duration(100)
        .EUt(122880)

    event.recipes.gtceu.atomic_reconstruction('naquadah_fuel_activation')
        .itemInputs('kubejs:inactivated_naquadah_fuel_dust')
        .itemOutputs('kubejs:naquadah_fuel_dust')
        .duration(100)
        .EUt(122880)

    event.recipes.gtceu.autoclave('naquadah_fuel_enrichment')
        .itemInputs('kubejs:raw_naquadah_fuel_dust', 'gtceu:tiny_omnium_dust')
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
        .inputFluids('gcyr:hydrobromic_acid 1000')
        .itemOutputs('4x kubejs:raw_naquadah_fuel_dust', 'kubejs:nuclear_waste')
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

    event.recipes.gtceu.centrifuge('nuclear_waste_centrifuging')
        .itemInputs('4x kubejs:nuclear_waste')
        .inputFluids('gtceu:hydrofluoric_acid 2000')
        .itemOutputs('2x gtceu:naquadah_dust')
        .outputFluids('gtceu:einsteinium 8')
        .chancedOutput('gtceu:naquadria_dust', 5000, 0)
        .chancedOutput('gtceu:tritanium_dust', 3300, 0)
        .chancedOutput('gtceu:small_neutronium_dust', 5000, 0)
        .duration(200)
        .EUt(30720)

    event.recipes.gtceu.sifter('depleted_fuel_sifting')
        .itemInputs('kubejs:depleted_naquadah_fuel_dust')
        .chancedOutput('kubejs:nuclear_waste', 3300, 0)
        .chancedOutput('kubejs:nuclear_waste', 3300, 0)
        .chancedOutput('kubejs:nuclear_waste', 3300, 0)
        .chancedOutput('kubejs:nuclear_waste', 3300, 0)
        .duration(80)
        .EUt(30720)

        


        














































})