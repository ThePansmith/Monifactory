ServerEvents.recipes(event => {
    if (isHardMode) {
        // Tungsten
        event.remove({id: 'gtceu:electrolyzer/tungstic_acid_electrolysis'})

        event.recipes.gtceu.extractor('kubejs:tungsten_trioxide_dust')
            .itemInputs('7x #forge:dusts/tungstic_acid')
            .itemOutputs('4x gtceu:tungsten_trioxide_dust')
            .outputFluids(Fluid.of('minecraft:water', 1000))
            .duration(160).EUt(16)

        event.recipes.gtceu.electric_blast_furnace('kubejs:hot_tungsten_ingot')
            .itemInputs('8x #forge:dusts/tungsten_trioxide', '3x #forge:dusts/carbon')
            .itemOutputs('2x gtceu:hot_tungsten_ingot')
            .outputFluids(Fluid.of('gtceu:carbon_dioxide', 3000))
            .blastFurnaceTemp(3600)
            .duration(2400).EUt(1920)

        event.recipes.gtceu.chemical_reactor('kubejs:tungsten_dust')
            .itemInputs('4x #forge:dusts/tungsten_trioxide')
            .inputFluids(Fluid.of('gtceu:hydrogen', 6000))
            .itemOutputs('gtceu:tungsten_dust')
            .outputFluids(Fluid.of('water', 3000))
            .duration(210).EUt(960)

        // Phthalic Anhydride
        event.remove({ id: 'gtceu:large_chemical_reactor/phthalic_acid_from_naphthalene' })
        event.remove({ id: 'gtceu:large_chemical_reactor/phthalic_acid_from_naphthalene_9' })

        event.recipes.gtceu.chemical_reactor('kubejs:phthalic_anhydride_dust')
            .itemInputs('#forge:tiny_dusts/vanadium_pentoxide')
            .inputFluids(Fluid.of('gtceu:naphthalene', 1000), Fluid.of('gtceu:oxygen', 5000))
            .itemOutputs('15x gtceu:phthalic_anhydride_dust')
            .outputFluids(Fluid.of('gtceu:carbon_dioxide', 1000))
            .duration(125).EUt(30)

        event.recipes.gtceu.large_chemical_reactor('kubejs:phthalic_anhydride_dust')
            .itemInputs('#forge:dusts/vanadium_pentoxide')
            .inputFluids(Fluid.of('gtceu:naphthalene', 9000), Fluid.of('gtceu:oxygen', 45000))
            .itemOutputs('64x gtceu:phthalic_anhydride_dust', '64x gtceu:phthalic_anhydride_dust', '7x gtceu:phthalic_anhydride_dust')
            .outputFluids(Fluid.of('gtceu:carbon_dioxide', 9000))
            .duration(1125).EUt(30)

        event.recipes.gtceu.chemical_reactor('kubejs:phthalic_acid')
            .itemInputs('15x #forge:dusts/phthalic_anhydride')
            .inputFluids(Fluid.of('water', 1000))
            .outputFluids(Fluid.of('gtceu:phthalic_acid', 1000))
            .duration(100).EUt(30)

        event.recipes.gtceu.distillery('kubejs:phthalic_acid')
            .inputFluids(Fluid.of('gtceu:phthalic_acid', 1000))
            .circuit(1)
            .itemOutputs('15x gtceu:phthalic_anhydride_dust')
            .outputFluids(Fluid.of('water', 1000))
            .duration(100).EUt(30)

        event.recipes.gtceu.large_chemical_reactor('kubejs:polytetrafluoroethylene')
            .inputFluids(Fluid.of('gtceu:tetrafluoroethylene', 2160), Fluid.of('gtceu:oxygen', 7500))
            .itemInputs('#forge:dusts/phthalic_anhydride')
            .circuit(7)
            .outputFluids(Fluid.of('gtceu:polytetrafluoroethylene', 4320))
            .duration(800).EUt(30)

        event.recipes.gtceu.large_chemical_reactor('kubejs:polyvinyl_chloride')
            .inputFluids(Fluid.of('gtceu:vinyl_chloride', 2160), Fluid.of('gtceu:oxygen', 7500))
            .itemInputs('#forge:dusts/phthalic_anhydride')
            .circuit(7)
            .outputFluids(Fluid.of('gtceu:polyvinyl_chloride', 4320))
            .duration(800).EUt(30)

        event.recipes.gtceu.large_chemical_reactor('kubejs:polyethylene')
            .inputFluids(Fluid.of('gtceu:ethylene', 2160), Fluid.of('gtceu:oxygen', 7500))
            .itemInputs('#forge:dusts/phthalic_anhydride')
            .circuit(7)
            .outputFluids(Fluid.of('gtceu:polyethylene', 4320))
            .duration(800).EUt(30)

        event.recipes.gtceu.large_chemical_reactor('kubejs:polyvinyl_acetate')
            .inputFluids(Fluid.of('gtceu:vinyl_acetate', 2160), Fluid.of('gtceu:oxygen', 7500))
            .itemInputs('#forge:dusts/phthalic_anhydride')
            .circuit(7)
            .outputFluids(Fluid.of('gtceu:polyvinyl_acetate', 4320))
            .duration(800).EUt(30)

        // Kapton K Wetwares
        event.recipes.gtceu.circuit_assembler('kubejs:circuit_assembler/wetware_hm')
            .itemInputs(
                '16x gcyr:kapton_k_plate',
                'gtceu:petri_dish',
                'gtceu:luv_electric_pump',
                'gtceu:iv_sensor',
                '#gtceu:circuits/iv',
                '16x gtceu:niobium_titanium_foil'
            )
            .inputFluids(Fluid.of('gtceu:sterilized_growth_medium', 4000))
            .itemOutputs('16x gtceu:wetware_circuit_board')
            .cleanroom(CleanroomType.CLEANROOM)
            .duration(1200)
            .EUt(30720)

        // Recipe conflict
        // Styrene
        event.remove({ id: 'gtceu:chemical_reactor/styrene_from_ethylbenzene' })

        event.recipes.gtceu.chemical_reactor('styrene_from_ethylbenzene_hm')
            .inputFluids('gtceu:ethylbenzene 1000')
            .circuit(1)
            .outputFluids('gtceu:styrene 1000', 'gtceu:hydrogen 2000')
            .duration(30).EUt(30)

        // Hydrazine Rocket Fuel
        event.recipes.gtceu.large_chemical_reactor('rocket_fuel_from_hydrazine')
            .inputFluids('gtceu:hydrazine 1000', 'gtceu:dimethylhydrazine 1000', 'gtceu:dinitrogen_tetroxide 2000')
            .outputFluids('gtceu:rocket_fuel 18000')
            .duration(60).EUt(16)

        // Beryllium Oxide
        event.recipes.gtceu.chemical_reactor('beryllium_oxide')
            .itemInputs('gtceu:beryllium_dust')
            .inputFluids('gtceu:oxygen 1000')
            .itemOutputs('gtceu:beryllium_oxide_ingot')
            .duration(640).EUt(30)

        // Graphene
        event.remove({ id: 'gtceu:mixer/graphene' })

        event.recipes.gtceu.assembler('magnetron')
            .itemInputs('64x gtceu:beryllium_oxide_ring', '64x gtceu:beryllium_oxide_ring', '6x gtceu:hsla_steel_plate', 'gtceu:vacuum_tube')
            .itemOutputs('kubejs:magnetron')
            .duration(600).EUt(61440)

        event.recipes.gtceu.chemical_reactor('graphene_magnetron')
            .itemInputs('gtceu:graphite_dust')
            .notConsumable('kubejs:magnetron')
            .inputFluids('gtceu:nitration_mixture 2000')
            .itemOutputs('gtceu:graphene_dust')
            .outputFluids('gtceu:diluted_sulfuric_acid 1000', 'gtceu:nitric_acid 1000')
            .duration(100).EUt(480)

        // Hydrogen Peroxide
        event.recipes.gtceu.chemical_reactor('ethylanthraquinone')
            .itemInputs('15x gtceu:phthalic_anhydride_dust')
            .inputFluids('gtceu:ethylbenzene 1000')
            .itemOutputs('30x gtceu:ethylanthraquinone_dust')
            .outputFluids('minecraft:water 1000')
            .duration(1000).EUt(1920)

        event.recipes.gtceu.large_chemical_reactor('hydrogen_peroxide')
            .inputFluids('gtceu:hydrogen 6000', 'gtceu:oxygen 6000')
            .notConsumable('gtceu:palladium_dust')
            .notConsumable('gtceu:ethylanthraquinone_dust')
            .outputFluids('gtceu:hydrogen_peroxide 3000')
            .duration(330).EUt(180)

        // Hydrazine
        event.recipes.gtceu.large_chemical_reactor('acetone_azine')
            .inputFluids('gtceu:hydrogen_peroxide 1000', 'gtceu:ammonia 2000', 'gtceu:acetone 2000')
            .circuit(5)
            .outputFluids('gtceu:acetone_azine 1000', 'minecraft:water 4000')
            .duration(40).EUt(480)

        event.recipes.gtceu.large_chemical_reactor('hydrazine')
            .inputFluids('gtceu:acetone_azine 1000', 'minecraft:water 2000', 'gtceu:sulfuric_acid 1000')
            .circuit(5)
            .outputFluids('gtceu:hydrazine 1000', 'gtceu:acetone 2000', 'gtceu:diluted_sulfuric_acid 1000')
            .duration(40).EUt(480)

        // Graphene from hydrazine
        event.recipes.gtceu.mixer('graphene_oxide')
            .itemInputs('5x gtceu:carbon_dust', 'gtceu:silicon_dust')
            .inputFluids('gtceu:oxygen 1000')
            .itemOutputs('gtceu:graphene_oxide_dust')
            .duration(100).EUt(480)

        event.recipes.gtceu.chemical_reactor('graphene_from_hydrazine')
            .itemInputs('gtceu:graphene_oxide_dust')
            .inputFluids('gtceu:hydrazine 100', 'gtceu:argon 50')
            .itemOutputs('gtceu:graphene_dust')
            .duration(100).EUt(480)

        // Niobium/Tantalum
        event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_pyrochlore' })
        event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_tantalite' })

        event.recipes.gtceu.chemical_bath('bathe_pyrochlore_dust')
            .itemInputs('11x gtceu:pyrochlore_dust')
            .inputFluids('gtceu:hydrofluoric_acid 2000')
            .itemOutputs('7x gtceu:niobium_pentoxide_dust', 'gtceu:tantalum_pentoxide_dust', '6x gcyr:fluorite_dust')
            .outputFluids('minecraft:water 2000')
            .duration(200).EUt(480)

        event.recipes.gtceu.chemical_bath('bathe_tantalite_dust')
            .itemInputs('9x gtceu:tantalite_dust')
            .inputFluids('gtceu:hydrofluoric_acid 2000')
            .itemOutputs('7x gtceu:tantalum_pentoxide_dust', 'gtceu:niobium_pentoxide_dust', '6x gtceu:manganese_difluoride_dust')
            .outputFluids('minecraft:water 1000')
            .duration(200).EUt(480)

        // Molybdenum
        event.remove([{ type: 'minecraft:smelting', output: 'gtceu:molybdenum_ingot' }, { type: 'minecraft:blasting', output: 'gtceu:molybdenum_ingot' }])
        event.smelting('gtceu:molybdenum_ingot', 'gtceu:molybdenum_dust')
        event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_molybdenite' })
        event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_powellite' })
        event.remove({ id: 'gtceu:electrolyzer/decomposition_electrolyzing_wulfenite' })

        event.recipes.gtceu.chemical_bath('bathe_powellite_dust')
            .itemInputs('6x gtceu:powellite_dust')
            .inputFluids('gtceu:hydrochloric_acid 2000')
            .itemOutputs('4x gtceu:molybdenum_trioxide_dust', '3x gtceu:calcium_chloride_dust')
            .outputFluids('minecraft:water 1000')
            .duration(200).EUt(480)

        event.recipes.gtceu.chemical_bath('bathe_wulfenite_dust')
            .itemInputs('6x gtceu:wulfenite_dust')
            .inputFluids('gtceu:hydrochloric_acid 2000')
            .itemOutputs('4x gtceu:molybdenum_trioxide_dust', '3x gtceu:lead_chloride_dust')
            .outputFluids('minecraft:water 1000')
            .duration(200).EUt(480)

        event.recipes.gtceu.arc_furnace('arc_molybdenite_dust')
            .itemInputs('3x gtceu:molybdenite_dust')
            .inputFluids('gtceu:oxygen 7000')
            .itemOutputs('4x gtceu:molybdenum_trioxide_dust')
            .outputFluids('gtceu:sulfur_dioxide 2000')
            .duration(800).EUt(30)

        event.recipes.gtceu.chemical_reactor('molybdenum_trioxide_to_molybdenum')
            .itemInputs('4x gtceu:molybdenum_trioxide_dust')
            .inputFluids('gtceu:hydrogen 6000')
            .itemOutputs('gtceu:molybdenum_dust')
            .outputFluids('minecraft:water 3000')
            .duration(200).EUt(480)

        // Pyromorphite to phosphate
        event.recipes.gtceu.electrolyzer('electrolyzing_pyromorphite')
            .itemInputs('9x gtceu:pyromorphite_dust')
            .itemOutputs('5x gtceu:lead_dust', '3x gtceu:phosphate_dust')
            .outputFluids('gtceu:chlorine 1000')
            .duration(288).EUt(60)

        // Vanadium
        event.recipes.gtceu.chemical_reactor('ammonium_chloride')
            .inputFluids('gtceu:ammonia 1000', 'gtceu:hydrochloric_acid 1000')
            .circuit(5)
            .itemOutputs('2x gtceu:ammonium_chloride_dust')
            .duration(120).EUt(7)

        event.recipes.gtceu.chemical_reactor('vanadium_pentoxide')
            .itemInputs('2x gtceu:vanadium_dust')
            .inputFluids('gtceu:oxygen 5000')
            .itemOutputs('7x gtceu:vanadium_pentoxide_dust')
            .duration(600).EUt(7)

        // H2SO4 require V2O5
        event.remove({ id: 'gtceu:chemical_reactor/sulfur_trioxide' })
        event.remove({ id: 'gtceu:large_chemical_reactor/sulfur_trioxide' })

        event.recipes.gtceu.chemical_reactor('sulfur_trioxide_hm')
            .inputFluids('gtceu:sulfur_dioxide 1000', 'gtceu:oxygen 1000')
            .notConsumable('gtceu:vanadium_pentoxide_dust')
            .outputFluids('gtceu:sulfur_trioxide 1000')
            .duration(200).EUt(7)

        event.remove({ id: 'gtceu:large_chemical_reactor/sulfuric_acid_from_sulfur' })

        event.recipes.gtceu.large_chemical_reactor('sulfuric_acid_from_sulfur_hm')
            .itemInputs('gtceu:sulfur_dust')
            .notConsumable('gtceu:vanadium_pentoxide_dust')
            .inputFluids('minecraft:water 4000')
            .circuit(24)
            .outputFluids('gtceu:sulfuric_acid 1000')
            .duration(320).EUt(480)

        // Fluoroantimonic Acid
        event.remove({ id: 'gtceu:chemical_reactor/fluoroantimonic_acid' })
        event.remove({ id: 'gtceu:large_chemical_reactor/fluoroantimonic_acid' })

        event.recipes.gtceu.chemical_reactor('antimony_pentafluoride')
            .itemInputs('4x gtceu:antimony_trifluoride_dust')
            .inputFluids('gtceu:fluorine 2000')
            .notConsumable('kubejs:aerotheum_dust')
            .outputFluids('gtceu:antimony_pentafluoride 1000')
            .duration(150).EUt(480)

        event.recipes.gtceu.chemical_reactor('fluoroantimonic_acid_hm')
            .inputFluids('gtceu:antimony_pentafluoride 1000', 'gtceu:hydrofluoric_acid 2000')
            .notConsumable('kubejs:petrotheum_dust')
            .outputFluids('gtceu:fluoroantimonic_acid 1000')
            .duration(150).EUt(480)

        // Neocryolite
        event.recipes.gtceu.chemical_reactor('naquadah_hydroxide')
            .itemInputs('gtceu:naquadah_dust', '9x gtceu:sodium_hydroxide_dust')
            .itemOutputs('7x gtceu:naquadah_hydroxide_dust', '3x gtceu:sodium_dust')
            .duration(480).EUt(480)

        event.recipes.gtceu.chemical_reactor('caesium_hydroxide')
            .itemInputs('gtceu:caesium_dust')
            .inputFluids('minecraft:water 1000')
            .itemOutputs('3x gtceu:caesium_hydroxide_dust')
            .duration(5).EUt(7)

        event.recipes.gtceu.large_chemical_reactor('neocryolite')
            .itemInputs('9x gtceu:caesium_hydroxide_dust', '3x gtceu:naquadah_hydroxide_dust', 'gtceu:signalum_dust')
            .inputFluids('gtceu:hydrofluoric_acid 6000')
            .outputFluids('gtceu:neocryolite 1000', 'minecraft:water 6000')
            .duration(250).EUt(7680)

        // Refined snowchestite maceration fix
        event.remove({ id: 'gtceu:macerator/macerate_snowchestite_refined_ore_to_dust' })

        event.recipes.gtceu.macerator('macerate_snowchestite_refined_ore_to_naquadah_hydroxide')
            .itemInputs('gtceu:refined_snowchestite_ore')
            .itemOutputs('gtceu:snowchestite_dust')
            .chancedOutput('gtceu:naquadah_hydroxide_dust', 1400, 850)
            .duration(400).EUt(2)

        // Naquadah

        event.recipes.gtceu.large_chemical_reactor('naquadah_oxide_petro_solution')
            .itemInputs('4x gtceu:snowchestite_dust')
            .inputFluids('kubejs:molten_petrotheum 3000')
            .itemOutputs('gtceu:pyromorphite_dust')
            .outputFluids('gtceu:naquadah_oxide_petro_solution 3000')
            .duration(100).EUt(3840)

        event.recipes.gtceu.chemical_reactor('naquadah_oxide_aero_solution')
            .itemInputs('4x kubejs:aerotheum_dust')
            .inputFluids('gtceu:naquadah_oxide_petro_solution 1000')
            .itemOutputs('4x kubejs:petrotheum_dust')
            .outputFluids('gtceu:naquadah_oxide_aero_solution 1000')
            .duration(300).EUt(240)

        event.recipes.gtceu.distillery('distill_naquadah_oxide_aero_solution_to_naquadah_oxide')
            .inputFluids('gtceu:naquadah_oxide_aero_solution 1000')
            .circuit(1)
            .itemOutputs('5x gtceu:naquadah_oxide_dust')
            .outputFluids('kubejs:molten_aerotheum 1000')
            .duration(300).EUt(240)

        event.recipes.gtceu.electric_blast_furnace('hot_naquadah_oxide_neocryolite_solution')
            .itemInputs('5x gtceu:naquadah_oxide_dust')
            .inputFluids('gtceu:neocryolite 4000')
            .outputFluids('gtceu:hot_naquadah_oxide_neocryolite_solution 4000')
            .duration(400).EUt(1920)
            .blastFurnaceTemp(4700)

        event.recipes.gtceu.electrolyzer('electrolyze_hot_naquadah_oxide_neocryolite_solution')
            .inputFluids('gtceu:hot_naquadah_oxide_neocryolite_solution 4000')
            .notConsumable('2x gtceu:ruthenium_rod')
            .itemOutputs('2x gtceu:naquadah_dust')
            .outputFluids('gtceu:neocryolite 3750', 'gtceu:oxygen 3000')
            .duration(250).EUt(7680)

        event.recipes.gtceu.chemical_bath('bathe_molten_aerotheum_to_aerotheum_dust')
            .inputFluids('kubejs:molten_aerotheum 250')
            .notConsumable('nuclearcraft:supercold_ice_block')
            .itemOutputs('kubejs:aerotheum_dust')
            .duration(100).EUt(7)

        // Supercold ice replacement recipe
        event.recipes.gtceu.vacuum_freezer('cryotheum_to_supercold_ice')
            .itemInputs('minecraft:ice')
            .inputFluids('kubejs:molten_cryotheum 1000')
            .itemOutputs('nuclearcraft:supercold_ice_block')
            .duration(600).EUt(1200)

        // Platinum Group
        event.remove({id: 'gtceu:centrifuge/pgs_separation'})
        event.remove({id: 'gtceu:electrolyzer/raw_platinum_separation'})
        event.remove({id: 'gtceu:chemical_reactor/raw_palladium_separation'})
        event.remove({id: 'gtceu:large_chemical_reactor/raw_palladium_separation'})
        event.remove({id: 'gtceu:chemical_reactor/inert_metal_mixture_separation'})
        event.remove({id: 'gtceu:large_chemical_reactor/inert_metal_mixture_separation'})
        event.remove({id: 'gtceu:chemical_reactor/ruthenium_tetroxide_separation'})
        event.remove({id: 'gtceu:large_chemical_reactor/ruthenium_tetroxide_separation'})
        event.remove({id: 'gtceu:electrolyzer/rhodium_sulfate_separation'})
        event.remove({id: 'gtceu:large_chemical_reactor/rarest_metal_mixture_separation'})
        event.remove({id: 'gtceu:centrifuge/iridium_metal_residue_separation'})
        event.remove({id: 'gtceu:chemical_reactor/iridium_chloride_separation'})
        event.remove({id: 'gtceu:large_chemical_reactor/iridium_chloride_separation'})
        event.remove({id: 'gtceu:distillation_tower/acidic_osmium_solution_separation'})
        event.remove({id: 'gtceu:distillery/acidic_osmium_solution_separation_to_hydrochloric_acid'})
        event.remove({id: 'gtceu:distillery/acidic_osmium_solution_separation_to_water'})
        event.remove({id: 'gtceu:chemical_reactor/osmium_tetroxide_separation'})
        event.remove({id: 'gtceu:large_chemical_reactor/osmium_tetroxide_separation'})
        event.remove({id: 'gtceu:centrifuge/decomposition_centrifuging__platinum_sludge_residue'})

        // Formic Acid
        event.recipes.gtceu.chemical_reactor('sodium_methoxide')
            .itemInputs('gtceu:sodium_dust')
            .inputFluids('gtceu:methanol 1000')
            .itemOutputs('6x gtceu:sodium_methoxide_dust')
            .outputFluids('gtceu:hydrogen 1000')
            .duration(10).EUt(30)

        event.recipes.gtceu.chemical_reactor('methyl_formate')
            .itemInputs('gtceu:tiny_sodium_methoxide_dust')
            .inputFluids('gtceu:methanol 1000', 'gtceu:carbon_dioxide 1000')
            .outputFluids('gtceu:methyl_formate 1000')
            .duration(16).EUt(30)

        event.recipes.gtceu.chemical_reactor('formic_acid')
            .inputFluids('gtceu:methyl_formate 1000', 'minecraft:water 3000')
            .outputFluids('gtceu:formic_acid 1000', 'gtceu:methanol 1000')
            .duration(16).EUt(30)

        // Potassium Pyrosulfate
        event.recipes.gtceu.chemical_bath('rock_salt_to_potassium_bisulfate')
            .itemInputs('2x gtceu:rock_salt_dust')
            .inputFluids('gtceu:sulfuric_acid 1000')
            .itemOutputs('7x gtceu:potassium_bisulfate_dust')
            .outputFluids('gtceu:hydrochloric_acid 1000')
            .duration(60).EUt(30)

        event.recipes.gtceu.chemical_bath('saltpeter_to_potassium_bisulfate')
            .itemInputs('5x gtceu:saltpeter_dust')
            .inputFluids('gtceu:sulfuric_acid 1000')
            .itemOutputs('7x gtceu:potassium_bisulfate_dust')
            .outputFluids('gtceu:nitric_acid 1000')
            .duration(60).EUt(30)

        event.recipes.gtceu.chemical_reactor('potassium_bisulfate_to_potassium_pyrosulfate')
            .itemInputs('14x gtceu:potassium_bisulfate_dust')
            .itemOutputs('11x gtceu:potassium_pyrosulfate_dust')
            .outputFluids('minecraft:water 1000')
            .duration(30).EUt(64)

        event.recipes.gtceu.chemical_reactor('potassium_sulfate_to_potassium_pyrosulfate')
            .itemInputs('7x gtceu:potassium_sulfate_dust')
            .inputFluids('gtceu:sulfur_trioxide 1000')
            .itemOutputs('11x gtceu:potassium_pyrosulfate_dust')
            .duration(30).EUt(64)

        // Sodium Peroxide
        event.recipes.gtceu.chemical_reactor('sodium_peroxide')
            .itemInputs('6x gtceu:sodium_hydroxide_dust')
            .inputFluids('gtceu:hydrogen_peroxide 7000')
            .itemOutputs('4x gtceu:sodium_peroxide_dust')
            .outputFluids('minecraft:water 8000', 'gtceu:oxygen 6000')
            .duration(100).EUt(30)

        // Sodium Nitrate
        event.recipes.gtceu.chemical_reactor('sodium_nitrate')
            .itemInputs('3x gtceu:sodium_hydroxide_dust')
            .inputFluids('gtceu:nitric_acid 1000')
            .itemOutputs('5x gtceu:sodium_nitrate_dust')
            .outputFluids('minecraft:water 1000')
            .duration(5).EUt(60)

        // Platinum Group Sludge
        event.recipes.gtceu.chemical_bath('bathe_platinum_group_sludge_dust')
            .itemInputs('2x gtceu:platinum_group_sludge_dust')
            .inputFluids('gtceu:aqua_regia 2000')
            .itemOutputs('gtceu:platinum_group_residue_dust', 'gtceu:platinum_sludge_residue_dust')
            .outputFluids('gtceu:platinum_palladium_leachate 1000')
            .duration(250).EUt(30)

        event.recipes.gtceu.chemical_bath('bathe_platinum_metallic_dust')
            .itemInputs('2x gtceu:platinum_metallic_dust')
            .inputFluids('gtceu:aqua_regia 2000')
            .itemOutputs('gtceu:platinum_group_residue_dust')
            .outputFluids('gtceu:platinum_palladium_leachate 1000')
            .duration(250).EUt(30)

        // Platinum Sludge Residue
        event.recipes.gtceu.centrifuge('centrifuge_platinum_sludge_residue_dust')
            .itemInputs('5x gtceu:platinum_sludge_residue_dust')
            .itemOutputs('2x gtceu:silicon_dioxide_dust', '2x gtceu:copper_dust')
            .chancedOutput('gtceu:gold_dust', 1000, 1000)
            .duration(938).EUt(30)

        // Platinum
        event.recipes.gtceu.chemical_reactor('platinum_palladium_leachate_separation')
            .itemInputs('8x gtceu:ammonium_chloride_dust')
            .inputFluids('gtceu:platinum_palladium_leachate 1000')
            .itemOutputs('9x gtceu:ammonium_hexachloroplatinate_dust', 'gtceu:crude_platinum_residue_dust')
            .outputFluids('gtceu:palladium_rich_ammonia 1000')
            .duration(1200).EUt(30)

        event.recipes.gtceu.electrolyzer('electrolyze_ammonium_hexachloroplatinate')
            .itemInputs('9x gtceu:ammonium_hexachloroplatinate_dust')
            .outputFluids('gtceu:ammonia 2000', 'gtceu:chloroplatinic_acid 1000')
            .duration(30).EUt(30)

        event.recipes.gtceu.distillery('distill_chloroplatinic_acid')
            .inputFluids('gtceu:chloroplatinic_acid 1000')
            .circuit(1)
            .itemOutputs('2x gtceu:platinum_raw_dust')
            .outputFluids('gtceu:hydrochloric_acid 4000')
            .duration(120).EUt(30)

        event.recipes.gtceu.autoclave('platinum_raw_dust_to_platinum')
            .itemInputs('3x gtceu:platinum_raw_dust', 'gtceu:calcium_dust')
            .inputFluids('gtceu:steam 3840')
            .itemOutputs('gtceu:platinum_dust', '3x gtceu:calcium_chloride_dust')
            .outputFluids('minecraft:water 24')
            .duration(30).EUt(30)

        event.recipes.gtceu.sifter('sift_crude_platinum_residue_dust')
            .itemInputs('gtceu:crude_platinum_residue_dust')
            .chancedOutput('gtceu:platinum_metallic_dust', 9500, 0)
            .duration(600).EUt(30)

        // Palladium
        event.recipes.gtceu.mixer('palladium_rich_ammonia')
            .itemInputs('2x gtceu:palladium_metallic_dust')
            .inputFluids('gtceu:ammonia 2000', 'gtceu:chlorine 2000')
            .outputFluids('gtceu:palladium_rich_ammonia 1000')
            .duration(250).EUt(30)

        event.recipes.gtceu.fluid_solidifier('solidify_palladium_rich_ammonia')
            .inputFluids('gtceu:palladium_rich_ammonia 500')
            .notConsumable('gtceu:ball_casting_mold')
            .itemOutputs('gtceu:crude_palladium_residue_dust')
            .duration(125).EUt(30)

        event.recipes.gtceu.chemical_reactor('palladium_metallic_dust_to_palladium_raw_dust')
            .itemInputs('2x gtceu:palladium_metallic_dust')
            .inputFluids('gtceu:palladium_rich_ammonia 1000')
            .itemOutputs('3x gtceu:crude_palladium_residue_dust', 'gtceu:palladium_raw_dust')
            .outputFluids('gtceu:ammonia 2000')
            .duration(250).EUt(30)

        event.recipes.gtceu.chemical_reactor('raw_palladium_dust_to_palladium_dust')
            .itemInputs('3x gtceu:palladium_raw_dust')
            .inputFluids('gtceu:formic_acid 1000')
            .itemOutputs('gtceu:palladium_dust')
            .outputFluids('gtceu:hydrochloric_acid 2000', 'gtceu:carbon_dioxide 1000')
            .duration(250).EUt(30)

        event.recipes.gtceu.sifter('sift_crude_palladium_residue_dust')
            .itemInputs('gtceu:crude_palladium_residue_dust')
            .chancedOutput('gtceu:palladium_metallic_dust', 9500, 0)
            .duration(600).EUt(30)

        // Rhodium
        event.recipes.gtceu.electric_blast_furnace('platinum_group_residue_to_iridium_group_sludge')
            .itemInputs('gtceu:platinum_group_residue_dust', '11x gtceu:potassium_pyrosulfate_dust')
            .itemOutputs('gtceu:rhodium_sulfate_dust', '14x gtceu:potassium_sulfate_dust', 'gtceu:iridium_group_sludge_dust')
            .duration(200).EUt(120)
            .blastFurnaceTemp(1048)

        event.recipes.gtceu.chemical_bath('bathe_rhodium_sulfate')
            .itemInputs('6x gtceu:rhodium_sulfate_dust')
            .inputFluids('minecraft:water 2000')
            .itemOutputs('gtceu:iridium_group_sludge_dust')
            .outputFluids('gtceu:rhodium_sulfate_solution 2000')
            .duration(300).EUt(30)

        event.recipes.gtceu.chemical_reactor('rhodium_sulfate_solution_to_crude_rhodium_residue_dust')
            .itemInputs('3x gtceu:zinc_dust')
            .inputFluids('gtceu:rhodium_sulfate_solution 1000')
            .itemOutputs('18x gtceu:zinc_sulfate_dust', 'gtceu:crude_rhodium_residue_dust')
            .duration(300).EUt(30)

        event.recipes.gtceu.electric_blast_furnace('crude_rhodium_residue_to_rhodium_salt')
            .itemInputs('gtceu:crude_rhodium_residue_dust', '4x gtceu:salt_dust')
            .inputFluids('gtceu:chlorine 6000')
            .itemOutputs('gtceu:rhodium_salt_dust')
            .outputFluids('gtceu:steam 9600')
            .duration(300).EUt(120)
            .blastFurnaceTemp(848)

        event.recipes.gtceu.chemical_reactor('rhodium_salt_to_rhodium_nitrate')
            .itemInputs('30x gtceu:sodium_nitrate_dust', 'gtceu:rhodium_salt_dust')
            .chancedFluidInput('minecraft:water 8000', 0, 0)
            .itemOutputs('26x gtceu:rhodium_nitrate_dust', '16x gtceu:salt_dust')
            .duration(300).EUt(30)

        event.recipes.gtceu.chemical_reactor('rhodium_nitrate_to_rhodium')
            .itemInputs('13x gtceu:rhodium_nitrate_dust', '3x gtceu:potassium_dust')
            .itemOutputs('gtceu:rhodium_dust', '15x gtceu:saltpeter_dust')
            .duration(300).EUt(30)

        // Ruthenium
        event.recipes.gtceu.electric_blast_furnace('iridium_group_sludge_to_sodium_ruthenate')
            .itemInputs('gtceu:iridium_group_sludge_dust', '2x gtceu:soda_ash_dust')
            .itemOutputs('2x gtceu:sodium_ruthenate_dust', 'gtceu:ash_dust', 'gtceu:rarest_metal_mixture_dust')
            .duration(200).EUt(120)
            .blastFurnaceTemp(1023)

        event.recipes.gtceu.chemical_reactor('sodium_ruthenate_to_ruthenium_tetroxide')
            .itemInputs('6x gtceu:sodium_ruthenate_dust')
            .inputFluids('gtceu:chlorine 2000', 'minecraft:water 2000')
            .itemOutputs('5x gtceu:ruthenium_tetroxide_dust')
            .outputFluids('gtceu:salt_water 2000')
            .duration(1575).EUt(480)

        event.recipes.gtceu.chemical_reactor('ruthenium_tetroxide_to_ruthenium')
            .itemInputs('5x gtceu:ruthenium_tetroxide_dust')
            .inputFluids('gtceu:hydrogen 8000')
            .itemOutputs('gtceu:ruthenium_dust')
            .outputFluids('minecraft:water 4000')
            .duration(300).EUt(30)

        // Osmium
        event.recipes.gtceu.chemical_bath('bathe_rarest_metal_mixture')
            .itemInputs('gtceu:rarest_metal_mixture_dust')
            .inputFluids('gtceu:hydrochloric_acid 1000')
            .itemOutputs('gtceu:iridium_metal_residue_dust')
            .outputFluids('gtceu:acidic_osmium_solution 1000')
            .duration(100).EUt(30)

        event.recipes.gtceu.distillation_tower('distill_acidic_osmium_solution')
            .inputFluids('gtceu:acidic_osmium_solution 2000')
            .itemOutputs('gtceu:osmium_tetroxide_dust')
            .outputFluids('gtceu:hydrochloric_acid 2000')
            .duration(150).EUt(7680)

        event.recipes.gtceu.chemical_reactor('osmium_tetroxide_to_osmium')
            .itemInputs('5x gtceu:osmium_tetroxide_dust')
            .inputFluids('gtceu:hydrogen 8000')
            .itemOutputs('gtceu:osmium_dust')
            .outputFluids('minecraft:water 4000')
            .duration(300).EUt(30)

        // Iridium
        event.recipes.gtceu.electric_blast_furnace('iridium_metal_residue_to_iridium_dioxide_residue')
            .itemInputs('4x gtceu:sodium_peroxide_dust', 'gtceu:iridium_metal_residue_dust')
            .itemOutputs('3x gtceu:iridium_dioxide_residue_dust', '2x gtceu:sodium_dust')
            .duration(200).EUt(120)
            .blastFurnaceTemp(1048)

        event.recipes.gtceu.mixer('acidic_iridium_dioxide_solution')
            .itemInputs('3x gtceu:iridium_dioxide_residue_dust')
            .inputFluids('gtceu:hydrochloric_acid 4000')
            .outputFluids('gtceu:acidic_iridium_dioxide_solution 4000')
            .duration(300).EUt(30)

        event.recipes.gtceu.chemical_reactor('ammonium_hexachloroiridiate')
            .itemInputs('gtceu:ammonium_chloride_dust')
            .inputFluids('gtceu:acidic_iridium_dioxide_solution 4000')
            .itemOutputs('2x gtceu:ammonium_hexachloroiridiate_dust', 'gtceu:small_platinum_group_residue_dust')
            .outputFluids('minecraft:water 2000')
            .duration(300).EUt(30)

        event.recipes.gtceu.chemical_reactor('ammonium_hexachloroiridiate_to_iridium')
            .itemInputs('9x gtceu:ammonium_hexachloroiridiate_dust')
            .inputFluids('gtceu:hydrogen 4000')
            .itemOutputs('gtceu:iridium_dust')
            .outputFluids('gtceu:hydrochloric_acid 6000', 'gtceu:ammonia 2000')
            .duration(150).EUt(7680)

        // Dioxygen Difluoride
        event.recipes.gtceu.large_chemical_reactor('dioxygen_difluoride')
            .inputFluids('gtceu:oxygen 2000', 'gtceu:fluorine 2000')
            .notConsumable('gtceu:void_empowered_gem')
            .outputFluids('gtceu:dioxygen_difluoride 1000')
            .duration(100).EUt(480)

        // Helium Hydride
        event.recipes.gtceu.chemical_reactor('tritium_hydride')
            .inputFluids('gtceu:hydrogen 1000', 'gtceu:tritium 1000')
            .outputFluids('gtceu:tritium_hydride 1000')
            .duration(160).EUt(1920)

        event.recipes.gtceu.distillation_tower('helium_hydride')
            .inputFluids('gtceu:tritium_hydride 10000')
            .outputFluids('gtceu:tritium_hydride 9900', 'gtceu:helium_hydride 100')
            .duration(800).EUt(192)

        // Stone Dust Processing
        event.remove({id: 'gtceu:centrifuge/stone_dust_separation'})

        event.recipes.gtceu.chemical_bath('stone_dust_to_dirty_hexafluorosilicic_acid')
            .itemInputs('24x gtceu:stone_dust')
            .inputFluids('gtceu:hydrofluoric_acid 6000')
            .itemOutputs('4x gtceu:quartzite_dust')
            .outputFluids('gtceu:dirty_hexafluorosilicic_acid 3000')
            .duration(40).EUt(120)

        event.recipes.gtceu.centrifuge('dirty_hexafluorosilic_acid_to_stone_residue')
            .inputFluids('gtceu:dirty_hexafluorosilicic_acid 3000')
            .itemOutputs('12x gtceu:stone_residue_dust')
            .outputFluids('gtceu:hexafluorosilicic_acid 1000')
            .duration(100).EUt(96)

        // 1/48 scale
        event.recipes.gtceu.centrifuge('centrifuging_stone_residue')
            .itemInputs('24x gtceu:stone_residue_dust', '3x gtceu:sodium_hydroxide_dust')
            .inputFluids('minecraft:water 8000')
            .itemOutputs('12x gtceu:potassium_feldspar_dust', '8x gtceu:sodalite_dust', '6x gtceu:biotite_dust', '4x gtceu:magnetite_dust', '3x gtceu:metal_mixture_dust', 'gtceu:uncommon_residue_dust')
            .duration(1000).EUt(96)

        event.recipes.gtceu.large_chemical_reactor('uncommon_residue_to_oxidised_residue')
            .itemInputs('gtceu:uncommon_residue_dust')
            .inputFluids('gtceu:dioxygen_difluoride 1000')
            .itemOutputs('gtceu:oxidised_residue_dust', '2x gtceu:ash_dust')
            .duration(80).EUt(96)

        // 1/480 scale
        event.recipes.gtceu.centrifuge('centrifuging_oxidised_residue')
            .itemInputs('10x gtceu:oxidised_residue_dust')
            .inputFluids('gtceu:distilled_water 10000')
            .itemOutputs('12x gtceu:garnet_sand_dust', '12x gtceu:basaltic_mineral_sand_dust', '8x gtceu:bauxite_dust', '4x gtceu:phosphorus_pentoxide_dust', '4x gtceu:ilmenite_dust', 'gtceu:refined_residue_dust')
            .outputFluids('gtceu:hydrofluoric_acid 2000', 'gtceu:sulfuric_copper_solution 1000', 'gtceu:lead_zinc_solution 250', 'gtceu:sulfuric_nickel_solution 250')
            .duration(1500).EUt(720)

        // 1/4800 scale
        event.recipes.gtceu.centrifuge('centrifuging_refined_residue')
            .itemInputs('10x gtceu:refined_residue_dust')
            .notConsumable('kubejs:bathyal_energy_core')
            .chancedFluidInput('gtceu:fluoroantimonic_acid 1000', 0, 0)
            .itemOutputs('10x gtceu:pitchblende_dust', '6x gtceu:borax_dust', '5x gtceu:rare_earth_dust', '4x gtceu:snowchestite_dust', '3x gtceu:diamond_dust', 'gtceu:clean_inert_residue_dust')
            .duration(2000).EUt(400)

        event.recipes.gtceu.mixer('ultraacidic_residue')
            .itemInputs('gtceu:clean_inert_residue_dust')
            .inputFluids('gtceu:helium_hydride 1000')
            .outputFluids('gtceu:ultraacidic_residue 1000')
            .duration(160).EUt(1920)

        // 1/9600
        event.recipes.gtceu.large_chemical_reactor('ultraacidic_residue_to_dusty_helium')
            .inputFluids('gtceu:xenon 1000', 'gtceu:oxygen 4000', 'gtceu:ultraacidic_residue 2000')
            .notConsumable('kubejs:abyssal_energy_core')
            .itemOutputs('2x gtceu:europium_dust', 'gtceu:kaemanite_dust', 'gtceu:small_osmiridiumyes_dust')
            .outputFluids('gtceu:xenic_acid 1000', 'gtceu:dusty_helium 2000')
            .duration(1000).EUt(1920)

        // Taranium
        event.recipes.gtceu.centrifuge('centrifuging_dusty_helium')
            .inputFluids('gtceu:dusty_helium 1000')
            .outputFluids('gtceu:taranium_enriched_helium 150', 'gtceu:taranium_depleted_helium 850')
            .duration(400).EUt(2880)

        event.recipes.gtceu.fusion_reactor('taranium_enriched_helium_and_helium_3_to_taranium_enriched_helium_plasma')
            .inputFluids('gtceu:taranium_enriched_helium 1000', 'gtceu:helium_3 1000')
            .outputFluids('gtceu:taranium_enriched_helium_plasma 3000')
            .duration(160).EUt(3840)
            .fusionStartEU(480000000)

        event.recipes.gtceu.centrifuge('centrifuging_taranium_enriched_helium_plasma')
            .inputFluids('gtceu:taranium_enriched_helium_plasma 3000')
            .notConsumable('kubejs:magnetron')
            .notConsumable('kubejs:cryotheum_dust')
            .itemOutputs('gtceu:taranium_dust', 'gtceu:small_clean_inert_residue_dust')
            .duration(100).EUt(30720)

        event.recipes.gtceu.centrifuge('centrifuging_taranium_depleted_helium')
            .inputFluids('gtceu:taranium_depleted_helium 2500')
            .itemOutputs('gtceu:clean_inert_residue_dust')
            .duration(320).EUt(1920)

        // Tributyl Phosphate
        event.recipes.gtceu.chemical_reactor('phosphorus_trichloride')
            .itemInputs('gtceu:phosphorus_dust')
            .inputFluids('gtceu:chlorine 3000')
            .outputFluids('gtceu:phosphorus_trichloride 1000')
            .duration(300).EUt(480)

        event.recipes.gtceu.large_chemical_reactor('phosphoryl_chloride')
            .itemInputs('7x gtceu:phosphorus_pentoxide_dust')
            .inputFluids('gtceu:phosphorus_trichloride 3000', 'gtceu:chlorine 6000')
            .outputFluids('gtceu:phosphoryl_chloride 5000')
            .duration(800).EUt(3840)

        event.recipes.gtceu.chemical_reactor('butanol')
            .inputFluids('gtceu:butyraldehyde 1000', 'gtceu:hydrogen 2000')
            .notConsumable('gtceu:nickel_dust')
            .outputFluids('gtceu:butanol 1000')
            .duration(300).EUt(480)

        event.recipes.gtceu.large_chemical_reactor('tributyl_phosphate')
            .inputFluids('gtceu:phosphoryl_chloride 1000', 'gtceu:butanol 3000')
            .outputFluids('gtceu:tributyl_phosphate 1000')
            .duration(600).EUt(23040)

        // Rare Earth
        event.recipes.gtceu.electrolyzer('electrolyzing_rare_earth_with_tributyl_phosphate')
            .itemInputs('gtceu:rare_earth_dust')
            .inputFluids('gtceu:tributyl_phosphate 150')
            .chancedOutput('gtceu:neodymium_dust', 1500, 0)
            .chancedOutput('gtceu:samarium_dust', 1500, 0)
            .chancedOutput('gtceu:yttrium_dust', 1500, 0)
            .chancedOutput('gtceu:lanthanum_dust', 1500, 0)
            .chancedOutput('gtceu:lutetium_dust', 600, 0)
            .chancedOutput('gtceu:europium_dust', 600, 0)
            .duration(50).EUt(1966080)

        // Quantum Flux Recipe
        event.recipes.gtceu.mixer('quantum_flux_hm')
            .itemInputs('redstone_arsenal:flux_gem')
            .inputFluids(Fluid.of('kubejs:molten_primal_mana', 250))
            .itemOutputs('8x kubejs:quantum_flux')
            .duration(100)
            .EUt(480)
        
        //Commented out in favor of GCYM's chain

        // event.recipes.gtceu.chemical_reactor('kubejs:chemical_reactor/durene_hm')
        // .inputFluids(Fluid.of('gtceu:dimethylbenzene', 1000), Fluid.of('gtceu:chloromethane', 1000))
        // .itemOutputs('24x gtceu:durene_dust')
        // .outputFluids(Fluid.of('gtceu:hydrochloric_acid', 1000))
        // .EUt(120)
        // .duration(120)

        // event.recipes.gtceu.chemical_reactor('kubejs:chemical_reactor/pyrom_hm')
        // .inputFluids(Fluid.of('gtceu:oxygen', 6000))
        // .itemInputs('24x gtceu:durene_dust')
        // .outputFluids(Fluid.of('minecraft:water', 3000))
        // .itemOutputs('9x gcyr:pyrometillic_dianhydride_dust')
        // .EUt(480)
        // .duration(100)

        // event.recipes.gtceu.chemical_reactor('kubejs:chemical_reactor/aminophenol_hm')
        // .inputFluids(Fluid.of('gtceu:nitrobenzene', 1000), Fluid.of('gtceu:hydrogen', 4000))
        // .outputFluids(Fluid.of('gtceu:aminophenol', 1000), Fluid.of('minecraft:water', 1000))
        // .circuit(1)
        // .EUt(30)
        // .duration(300)

        // event.recipes.gtceu.large_chemical_reactor("kubejs:large_chemical_reactor/oxydianiline_dust")
        // .notConsumable("gtceu:saltpeter_dust")
        // .inputFluids(Fluid.of('gtceu:aminophenol', 1000), Fluid.of('gtceu:nitrochlorobenzene', 1000), Fluid.of('gtceu:water', 1000))
        // .outputFluids(Fluid.of('gtceu:oxygen', 3000), Fluid.of('gtceu:hydrochloric_acid', 1000))
        // .itemOutputs('27x gtceu:oxydianiline_dust')
        // .duration(200)
        // .EUt(21000)

        // event.recipes.gtceu.alloy_smelter('kubejs:kaptonk')
        // .itemInputs('3x gtceu:oxydianiline_dust', '2x gcyr:pyrometillic_dianhydride_dust')
        // .itemOutputs('gtceu:kapton_k_ingot')
        // .duration(30)
        // .EUt(7680)
    }
});
