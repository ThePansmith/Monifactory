/**
 * Makes recipes harder in.. hard mode
 */

ServerEvents.recipes(event => {
    if (doHarderProcessing) {
        // Tungsten
        event.remove({ id: "gtceu:electrolyzer/tungstic_acid_electrolysis" })

        event.recipes.gtceu.extractor("kubejs:tungsten_trioxide_dust")
            .itemInputs("7x #forge:dusts/tungstic_acid")
            .itemOutputs("4x gtceu:tungsten_trioxide_dust")
            .outputFluids(Fluid.of("minecraft:water", 1000))
            .duration(160).EUt(16)

        event.recipes.gtceu.electric_blast_furnace("kubejs:hot_tungsten_ingot")
            .itemInputs("8x #forge:dusts/tungsten_trioxide", "3x #forge:dusts/carbon")
            .itemOutputs("2x gtceu:hot_tungsten_ingot")
            .outputFluids(Fluid.of("gtceu:carbon_dioxide", 3000))
            .blastFurnaceTemp(3600)
            .duration(2400).EUt(1920)

        event.recipes.gtceu.chemical_reactor("kubejs:tungsten_dust")
            .itemInputs("4x #forge:dusts/tungsten_trioxide")
            .inputFluids(Fluid.of("gtceu:hydrogen", 6000))
            .itemOutputs("gtceu:tungsten_dust")
            .outputFluids(Fluid.of("water", 3000))
            .duration(210).EUt(960)

        // Phthalic Anhydride
        event.remove({ id: "gtceu:large_chemical_reactor/phthalic_acid_from_naphthalene" })
        event.remove({ id: "gtceu:large_chemical_reactor/phthalic_acid_from_naphthalene_9" })

        event.recipes.gtceu.chemical_reactor("kubejs:phthalic_anhydride_dust")
            .itemInputs("#forge:tiny_dusts/vanadium_pentoxide")
            .inputFluids(Fluid.of("gtceu:naphthalene", 1000), Fluid.of("gtceu:oxygen", 5000))
            .itemOutputs("15x gtceu:phthalic_anhydride_dust")
            .outputFluids(Fluid.of("gtceu:carbon_dioxide", 1000))
            .duration(125).EUt(30)

        event.recipes.gtceu.large_chemical_reactor("kubejs:phthalic_anhydride_dust")
            .itemInputs("#forge:dusts/vanadium_pentoxide")
            .inputFluids(Fluid.of("gtceu:naphthalene", 9000), Fluid.of("gtceu:oxygen", 45000))
            .itemOutputs("64x gtceu:phthalic_anhydride_dust", "64x gtceu:phthalic_anhydride_dust", "7x gtceu:phthalic_anhydride_dust")
            .outputFluids(Fluid.of("gtceu:carbon_dioxide", 9000))
            .duration(1125).EUt(30)

        event.recipes.gtceu.chemical_reactor("kubejs:phthalic_acid")
            .itemInputs("15x #forge:dusts/phthalic_anhydride")
            .inputFluids(Fluid.of("water", 1000))
            .outputFluids(Fluid.of("gtceu:phthalic_acid", 1000))
            .duration(100).EUt(30)

        event.recipes.gtceu.distillery("kubejs:phthalic_acid")
            .inputFluids(Fluid.of("gtceu:phthalic_acid", 1000))
            .circuit(1)
            .itemOutputs("15x gtceu:phthalic_anhydride_dust")
            .outputFluids(Fluid.of("water", 1000))
            .duration(100).EUt(30)

        event.recipes.gtceu.large_chemical_reactor("kubejs:polytetrafluoroethylene")
            .inputFluids(Fluid.of("gtceu:tetrafluoroethylene", 2160), Fluid.of("gtceu:oxygen", 7500))
            .itemInputs("#forge:dusts/phthalic_anhydride")
            .circuit(7)
            .outputFluids(Fluid.of("gtceu:polytetrafluoroethylene", 4320))
            .duration(800).EUt(30)

        event.recipes.gtceu.large_chemical_reactor("kubejs:polyvinyl_chloride")
            .inputFluids(Fluid.of("gtceu:vinyl_chloride", 2160), Fluid.of("gtceu:oxygen", 7500))
            .itemInputs("#forge:dusts/phthalic_anhydride")
            .circuit(7)
            .outputFluids(Fluid.of("gtceu:polyvinyl_chloride", 4320))
            .duration(800).EUt(30)

        event.recipes.gtceu.large_chemical_reactor("kubejs:polyethylene")
            .inputFluids(Fluid.of("gtceu:ethylene", 2160), Fluid.of("gtceu:oxygen", 7500))
            .itemInputs("#forge:dusts/phthalic_anhydride")
            .circuit(7)
            .outputFluids(Fluid.of("gtceu:polyethylene", 4320))
            .duration(800).EUt(30)

        event.recipes.gtceu.large_chemical_reactor("kubejs:polyvinyl_acetate")
            .inputFluids(Fluid.of("gtceu:vinyl_acetate", 2160), Fluid.of("gtceu:oxygen", 7500))
            .itemInputs("#forge:dusts/phthalic_anhydride")
            .circuit(7)
            .outputFluids(Fluid.of("gtceu:polyvinyl_acetate", 4320))
            .duration(800).EUt(30)

        // Kapton K Wetwares
        event.remove({ id: "gtceu:circuit_assembler/wetware_board" })
        event.recipes.gtceu.circuit_assembler("kubejs:circuit_assembler/wetware_hm")
            .itemInputs(
                "16x gtceu:kapton_k_plate",
                "gtceu:petri_dish",
                "gtceu:luv_electric_pump",
                "gtceu:iv_sensor",
                "#gtceu:circuits/iv",
                "16x gtceu:niobium_titanium_foil"
            )
            .inputFluids(Fluid.of("gtceu:sterilized_growth_medium", 4000))
            .itemOutputs("16x gtceu:wetware_circuit_board")
            .cleanroom(CleanroomType.STERILE_CLEANROOM)
            .duration(1200)
            .EUt(30720)

        // Recipe conflict
        // Styrene
        event.remove({ id: "gtceu:chemical_reactor/styrene_from_ethylbenzene" })

        event.recipes.gtceu.chemical_reactor("styrene_from_ethylbenzene_hm")
            .inputFluids("gtceu:ethylbenzene 1000")
            .circuit(1)
            .outputFluids("gtceu:styrene 1000", "gtceu:hydrogen 2000")
            .duration(30).EUt(30)

        // Hydrazine Rocket Fuel
        event.recipes.gtceu.large_chemical_reactor("rocket_fuel_from_hydrazine")
            .inputFluids("gtceu:hydrazine 1000", "gtceu:dimethylhydrazine 1000", "gtceu:dinitrogen_tetroxide 2000")
            .outputFluids("gtceu:rocket_fuel 18000")
            .duration(60).EUt(16)

        // Beryllium Oxide
        event.recipes.gtceu.chemical_reactor("beryllium_oxide")
            .itemInputs("gtceu:beryllium_dust")
            .inputFluids("gtceu:oxygen 1000")
            .itemOutputs("gtceu:beryllium_oxide_ingot")
            .duration(640).EUt(30)

        // Graphene
        event.remove({ id: "gtceu:mixer/graphene" })

        event.recipes.gtceu.assembler("magnetron")
            .itemInputs("64x gtceu:beryllium_oxide_ring", "64x gtceu:beryllium_oxide_ring", "6x gtceu:hsla_steel_plate", "gtceu:vacuum_tube")
            .itemOutputs("kubejs:magnetron")
            .duration(600).EUt(61440)

        event.recipes.gtceu.chemical_reactor("graphene_magnetron")
            .itemInputs("gtceu:graphite_dust")
            .notConsumable("kubejs:magnetron")
            .inputFluids("gtceu:nitration_mixture 2000")
            .itemOutputs("gtceu:graphene_dust")
            .outputFluids("gtceu:diluted_sulfuric_acid 1000", "gtceu:nitric_acid 1000")
            .duration(100).EUt(480)

        // Hydrogen Peroxide
        event.recipes.gtceu.chemical_reactor("ethylanthraquinone")
            .itemInputs("15x gtceu:phthalic_anhydride_dust")
            .inputFluids("gtceu:ethylbenzene 1000")
            .itemOutputs("30x gtceu:ethylanthraquinone_dust")
            .outputFluids("minecraft:water 1000")
            .duration(1000).EUt(1920)

        event.recipes.gtceu.large_chemical_reactor("hydrogen_peroxide")
            .inputFluids("gtceu:hydrogen 6000", "gtceu:oxygen 6000")
            .notConsumable("gtceu:palladium_dust")
            .notConsumable("gtceu:ethylanthraquinone_dust")
            .outputFluids("gtceu:hydrogen_peroxide 3000")
            .duration(330).EUt(180)

        // Hydrazine
        event.recipes.gtceu.large_chemical_reactor("acetone_azine")
            .inputFluids("gtceu:hydrogen_peroxide 1000", "gtceu:ammonia 2000", "gtceu:acetone 2000")
            .circuit(5)
            .outputFluids("gtceu:acetone_azine 1000", "minecraft:water 4000")
            .duration(40).EUt(480)

        event.recipes.gtceu.large_chemical_reactor("hydrazine")
            .inputFluids("gtceu:acetone_azine 1000", "minecraft:water 2000", "gtceu:sulfuric_acid 1000")
            .circuit(5)
            .outputFluids("gtceu:hydrazine 1000", "gtceu:acetone 2000", "gtceu:diluted_sulfuric_acid 1000")
            .duration(40).EUt(480)

        // Graphene from hydrazine
        event.recipes.gtceu.mixer("graphene_oxide")
            .itemInputs("5x gtceu:carbon_dust", "gtceu:silicon_dust")
            .inputFluids("gtceu:oxygen 1000")
            .itemOutputs("gtceu:graphene_oxide_dust")
            .duration(100).EUt(480)

        event.recipes.gtceu.chemical_reactor("graphene_from_hydrazine")
            .itemInputs("gtceu:graphene_oxide_dust")
            .inputFluids("gtceu:hydrazine 100", "gtceu:argon 50")
            .itemOutputs("gtceu:graphene_dust")
            .duration(100).EUt(480)

        // Niobium/Tantalum
        event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_pyrochlore" })
        event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_tantalite" })

        event.recipes.gtceu.chemical_bath("bathe_pyrochlore_dust")
            .itemInputs("11x gtceu:pyrochlore_dust")
            .inputFluids("gtceu:hydrofluoric_acid 4000")
            .itemOutputs("7x gtceu:niobium_pentoxide_dust", "gtceu:tantalum_pentoxide_dust", "6x gtceu:fluorite_dust")
            .outputFluids("minecraft:water 2000")
            .duration(200).EUt(480)

        event.recipes.gtceu.chemical_bath("bathe_tantalite_dust")
            .itemInputs("9x gtceu:tantalite_dust")
            .inputFluids("gtceu:hydrofluoric_acid 2000")
            .itemOutputs("7x gtceu:tantalum_pentoxide_dust", "gtceu:niobium_pentoxide_dust", "3x gtceu:manganese_difluoride_dust")
            .outputFluids("minecraft:water 1000")
            .duration(200).EUt(480)

        // Molybdenum
        event.remove([{ type: "minecraft:smelting", output: "gtceu:molybdenum_ingot" }, { type: "minecraft:blasting", output: "gtceu:molybdenum_ingot" }])
        event.smelting("gtceu:molybdenum_ingot", "gtceu:molybdenum_dust")
        event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_molybdenite" })
        event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_powellite" })
        event.remove({ id: "gtceu:electrolyzer/decomposition_electrolyzing_wulfenite" })

        event.recipes.gtceu.chemical_bath("bathe_powellite_dust")
            .itemInputs("6x gtceu:powellite_dust")
            .inputFluids("gtceu:hydrochloric_acid 2000")
            .itemOutputs("4x gtceu:molybdenum_trioxide_dust", "3x gtceu:calcium_chloride_dust")
            .outputFluids("minecraft:water 1000")
            .duration(200).EUt(480)

        event.recipes.gtceu.chemical_bath("bathe_wulfenite_dust")
            .itemInputs("6x gtceu:wulfenite_dust")
            .inputFluids("gtceu:hydrochloric_acid 2000")
            .itemOutputs("4x gtceu:molybdenum_trioxide_dust", "3x gtceu:lead_chloride_dust")
            .outputFluids("minecraft:water 1000")
            .duration(200).EUt(480)

        event.recipes.gtceu.arc_furnace("arc_molybdenite_dust")
            .itemInputs("3x gtceu:molybdenite_dust")
            .inputFluids("gtceu:oxygen 7000")
            .itemOutputs("4x gtceu:molybdenum_trioxide_dust")
            .outputFluids("gtceu:sulfur_dioxide 2000")
            .duration(800).EUt(30)

        event.recipes.gtceu.chemical_reactor("molybdenum_trioxide_to_molybdenum")
            .itemInputs("4x gtceu:molybdenum_trioxide_dust")
            .inputFluids("gtceu:hydrogen 6000")
            .itemOutputs("gtceu:molybdenum_dust")
            .outputFluids("minecraft:water 3000")
            .duration(200).EUt(480)

        // Pyromorphite to phosphate
        event.recipes.gtceu.electrolyzer("electrolyzing_pyromorphite")
            .itemInputs("9x gtceu:pyromorphite_dust")
            .itemOutputs("5x gtceu:lead_dust", "3x gtceu:phosphate_dust")
            .outputFluids("gtceu:chlorine 1000")
            .duration(288).EUt(60)

        // Vanadium
        event.recipes.gtceu.chemical_reactor("ammonium_chloride")
            .inputFluids("gtceu:ammonia 1000", "gtceu:hydrochloric_acid 1000")
            .circuit(5)
            .itemOutputs("2x gtceu:ammonium_chloride_dust")
            .duration(120).EUt(7)

        event.recipes.gtceu.chemical_reactor("vanadium_pentoxide")
            .itemInputs("2x gtceu:vanadium_dust")
            .inputFluids("gtceu:oxygen 5000")
            .itemOutputs("7x gtceu:vanadium_pentoxide_dust")
            .duration(600).EUt(7)

        // H2SO4 require V2O5
        event.remove({ id: "gtceu:chemical_reactor/sulfur_trioxide" })
        event.remove({ id: "gtceu:large_chemical_reactor/sulfur_trioxide" })

        event.recipes.gtceu.chemical_reactor("sulfur_trioxide_hm")
            .inputFluids("gtceu:sulfur_dioxide 1000", "gtceu:oxygen 1000")
            .notConsumable("gtceu:vanadium_pentoxide_dust")
            .outputFluids("gtceu:sulfur_trioxide 1000")
            .duration(200).EUt(7)

        event.remove({ id: "gtceu:large_chemical_reactor/sulfuric_acid_from_sulfur" })

        event.recipes.gtceu.large_chemical_reactor("sulfuric_acid_from_sulfur_hm")
            .itemInputs("gtceu:sulfur_dust")
            .notConsumable("gtceu:vanadium_pentoxide_dust")
            .inputFluids("minecraft:water 4000")
            .circuit(24)
            .outputFluids("gtceu:sulfuric_acid 1000")
            .duration(320).EUt(480)

        // Fluoroantimonic Acid
        event.remove({ id: "gtceu:chemical_reactor/fluoroantimonic_acid" })
        event.remove({ id: "gtceu:large_chemical_reactor/fluoroantimonic_acid" })

        event.recipes.gtceu.chemical_reactor("antimony_pentafluoride")
            .itemInputs("4x gtceu:antimony_trifluoride_dust")
            .inputFluids("gtceu:fluorine 2000")
            .notConsumable("kubejs:aerotheum_dust")
            .outputFluids("gtceu:antimony_pentafluoride 1000")
            .duration(150).EUt(480)

        event.recipes.gtceu.chemical_reactor("fluoroantimonic_acid_hm")
            .inputFluids("gtceu:antimony_pentafluoride 1000", "gtceu:hydrofluoric_acid 2000")
            .notConsumable("kubejs:petrotheum_dust")
            .outputFluids("gtceu:fluoroantimonic_acid 1000")
            .duration(150).EUt(480)

        // Neocryolite
        event.recipes.gtceu.chemical_reactor("naquadah_hydroxide")
            .itemInputs("gtceu:naquadah_dust", "9x gtceu:sodium_hydroxide_dust")
            .itemOutputs("7x gtceu:naquadah_hydroxide_dust", "3x gtceu:sodium_dust")
            .duration(480).EUt(480)

        event.recipes.gtceu.chemical_reactor("caesium_hydroxide")
            .itemInputs("gtceu:caesium_dust")
            .inputFluids("minecraft:water 3000")
            .itemOutputs("3x gtceu:caesium_hydroxide_dust")
            .outputFluids("gtceu:hydrogen 3000")
            .duration(5).EUt(7)

        event.recipes.gtceu.large_chemical_reactor("neocryolite")
            .itemInputs("4x gtceu:caesium_hydroxide_dust", "3x gtceu:naquadah_hydroxide_dust")
            .notConsumable("gtceu:signalum_dust")
            .inputFluids("gtceu:hydrofluoric_acid 6000")
            .outputFluids("gtceu:neocryolite 1000", "minecraft:water 6000")
            .duration(250).EUt(7680)

        // Naquadah

        event.recipes.gtceu.large_chemical_reactor("naquadah_oxide_petro_solution")
            .itemInputs("4x gtceu:snowchestite_dust")
            .inputFluids("kubejs:molten_petrotheum 3000")
            .itemOutputs("gtceu:pyromorphite_dust")
            .outputFluids("gtceu:naquadah_oxide_petro_solution 3000")
            .duration(100).EUt(3840)

        event.recipes.gtceu.chemical_reactor("naquadah_oxide_aero_solution")
            .itemInputs("4x kubejs:aerotheum_dust")
            .inputFluids("gtceu:naquadah_oxide_petro_solution 1000")
            .itemOutputs("4x kubejs:petrotheum_dust")
            .outputFluids("gtceu:naquadah_oxide_aero_solution 1000")
            .duration(300).EUt(240)

        event.recipes.gtceu.distillery("distill_naquadah_oxide_aero_solution_to_naquadah_oxide")
            .inputFluids("gtceu:naquadah_oxide_aero_solution 1000")
            .circuit(1)
            .itemOutputs("5x gtceu:naquadah_oxide_dust")
            .outputFluids("kubejs:molten_aerotheum 1000")
            .duration(300).EUt(240)

        event.recipes.gtceu.electric_blast_furnace("hot_naquadah_oxide_neocryolite_solution")
            .itemInputs("5x gtceu:naquadah_oxide_dust")
            .inputFluids("gtceu:neocryolite 4000")
            .outputFluids("gtceu:hot_naquadah_oxide_neocryolite_solution 4000")
            .duration(400).EUt(1920)
            .blastFurnaceTemp(4700)

        event.recipes.gtceu.electrolyzer("electrolyze_hot_naquadah_oxide_neocryolite_solution")
            .inputFluids("gtceu:hot_naquadah_oxide_neocryolite_solution 4000")
            .notConsumable("2x gtceu:ruthenium_rod")
            .itemOutputs("2x gtceu:naquadah_dust")
            .outputFluids("gtceu:neocryolite 3750", "gtceu:oxygen 3000")
            .duration(250).EUt(7680)

        event.recipes.gtceu.chemical_bath("bathe_molten_aerotheum_to_aerotheum_dust")
            .inputFluids("kubejs:molten_aerotheum 250")
            .notConsumable("nuclearcraft:supercold_ice_block")
            .itemOutputs("kubejs:aerotheum_dust")
            .duration(100).EUt(7)

        // Supercold ice replacement recipe
        event.recipes.gtceu.vacuum_freezer("cryotheum_to_supercold_ice")
            .itemInputs("minecraft:ice")
            .inputFluids("kubejs:molten_cryotheum 1000")
            .itemOutputs("nuclearcraft:supercold_ice_block")
            .duration(600).EUt(1200)

        // Tributyl Phosphate
        event.recipes.gtceu.chemical_reactor("phosphorus_trichloride")
            .itemInputs("gtceu:phosphorus_dust")
            .inputFluids("gtceu:chlorine 3000")
            .outputFluids("gtceu:phosphorus_trichloride 1000")
            .duration(300).EUt(480)

        event.recipes.gtceu.large_chemical_reactor("phosphoryl_chloride")
            .itemInputs("7x gtceu:phosphorus_pentoxide_dust")
            .inputFluids("gtceu:phosphorus_trichloride 3000", "gtceu:chlorine 6000")
            .outputFluids("gtceu:phosphoryl_chloride 5000")
            .duration(800).EUt(3840)

        event.recipes.gtceu.chemical_reactor("butanol")
            .inputFluids("gtceu:butyraldehyde 1000", "gtceu:hydrogen 2000")
            .notConsumable("gtceu:nickel_dust")
            .outputFluids("gtceu:butanol 1000")
            .duration(300).EUt(480)

        event.recipes.gtceu.large_chemical_reactor("tributyl_phosphate")
            .inputFluids("gtceu:phosphoryl_chloride 1000", "gtceu:butanol 3000")
            .outputFluids("gtceu:tributyl_phosphate 1000")
            .duration(600).EUt(23040)

        // Rare Earth
        event.recipes.gtceu.electrolyzer("electrolyzing_rare_earth_with_tributyl_phosphate")
            .itemInputs("gtceu:rare_earth_dust")
            .inputFluids("gtceu:tributyl_phosphate 150")
            .chancedOutput("gtceu:neodymium_dust", 1500, 0)
            .chancedOutput("gtceu:samarium_dust", 1500, 0)
            .chancedOutput("gtceu:yttrium_dust", 1500, 0)
            .chancedOutput("gtceu:lanthanum_dust", 1500, 0)
            .chancedOutput("gtceu:lutetium_dust", 600, 0)
            .chancedOutput("gtceu:europium_dust", 600, 0)
            .duration(50).EUt(GTValues.VA[GTValues.UV])

        // Quantum Flux Recipe
        event.recipes.gtceu.mixer("quantum_flux_hm")
            .itemInputs("redstone_arsenal:flux_gem")
            .inputFluids(Fluid.of("gtceu:mana", 250))
            .itemOutputs("8x kubejs:quantum_flux")
            .duration(100)
            .EUt(480)

        event.recipes.gtceu.chemical_reactor("kubejs:omnic_quantum_flux")
            .itemInputs("redstone_arsenal:flux_gem", "4x kubejs:primal_mana", "gtceu:nether_star_dust")
            .inputFluids("gtceu:dragon_breath 500")
            .itemOutputs("64x kubejs:quantum_flux")
            .duration(50)
            .EUt(GTValues.VA[GTValues.EV])

        // Rocketry
        event.recipes.gtceu.chemical_reactor("kubejs:chemical_reactor/durene_hm")
            .inputFluids(Fluid.of("gtceu:dimethylbenzene", 1000), Fluid.of("gtceu:chloromethane", 1000))
            .itemOutputs("24x gtceu:durene_dust")
            .outputFluids(Fluid.of("gtceu:hydrochloric_acid", 1000))
            .EUt(120)
            .duration(120)

        event.recipes.gtceu.chemical_reactor("dimethylformamide")
            .inputFluids("gtceu:carbon_monoxide 1000", "gtceu:dimethylamine 1000")
            .outputFluids("gtceu:dimethylformamide 1000")
            .duration(200).EUt(480);

        event.recipes.gtceu.chemical_reactor("pyrometillic_dianhydride")
            .inputFluids("gtceu:durene 250", "gtceu:oxygen 1500")
            .outputFluids("gtceu:pyromellitic_dianhydride 250", "minecraft:water 1500")
            .duration(400).EUt(480);

        event.recipes.gtceu.chemical_reactor("manganese_acetate")
            .itemInputs("gtceu:manganese_dust")
            .inputFluids("gtceu:acetic_acid 1000")
            .outputFluids("gtceu:manganese_acetate 1000")
            .duration(60).EUt(480);

        event.recipes.gtceu.chemical_reactor("chloronitrobenzene")
            .inputFluids("gtceu:chlorobenzene 1000", "gtceu:nitric_acid 1000")
            .outputFluids("gtceu:nitrochlorobenzene 1000", "minecraft:water 1000")
            .duration(400).EUt(480);

        event.recipes.gtceu.chemical_reactor("oxydianiline_sludge")
            .inputFluids("gtceu:aminophenol 1000", "gtceu:nitrochlorobenzene 1000", "gtceu:dimethylformamide 1000")
            .itemInputs("1x gtceu:potassium_carbonate_dust")
            .outputFluids("gtceu:oxydianiline_sludge 250", "minecraft:water 1500")
            .duration(400).EUt(480);

        event.recipes.gtceu.distillation_tower("distill_oxydianiline_sludge")
            .inputFluids("gtceu:oxydianiline_sludge 1000")
            .outputFluids("gtceu:dimethylformamide 1000", "gtceu:oxydianiline 144")
            .duration(200).EUt(480);

        event.recipes.gtceu.chemical_reactor("pyromellitic_dianhydride")
            .inputFluids("gtceu:durene 250", "gtceu:oxygen 1500")
            .outputFluids("gtceu:pyromellitic_dianhydride 250", "minecraft:water 1500")
            .duration(400).EUt(480);

        event.recipes.gtceu.chemical_reactor("kapton_k")
            .inputFluids("gtceu:pyromellitic_dianhydride 1000", "gtceu:oxydianiline 1000")
            .outputFluids("gtceu:kapton_k 1000")
            .duration(400).EUt(480);
    }
});
