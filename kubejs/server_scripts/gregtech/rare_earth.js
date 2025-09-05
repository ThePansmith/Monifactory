/**
*Line for rare earths with actual chemistry
*/
ServerEvents.recipes(event => {

    event.recipes.gtceu.mixer("re_digestion_mixer")
        .itemInputs("1x gtceu:rare_earth_dust")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer("monazite_digestion_mixer")
        .itemInputs("2x gtceu:crushed_monazite_ore")
        .inputFluids("gtceu:sulfuric_acid 1000")
        .outputFluids("gtceu:rare_earth_sulfate_solution 1000")
        .duration(60)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.large_chemical_reactor("rare_earth_oxalates_lcr")
        .inputFluids("gtceu:rare_earth_sulfate_solution 1000", "gtceu:oxalic_acid_solution 1000")
        .itemOutputs("1x gtceu:thorium_dust")
        .outputFluids("gtceu:re_oxalate_solution 1000")
        .duration(160)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.mixer("oxidizer_rare_earth_mixer")
        .inputFluids("gtceu:re_oxalate_solution 1000", "gtceu:hydrogen_peroxide 200")
        .itemOutputs("5x gtceu:oxidized_re_sludge_dust")
        .duration(120)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.centrifuge("rare_earth_mass_separation")
        .itemInputs("4x gtceu:oxidized_re_sludge_dust")
        .inputFluids("gtceu:nitric_acid 2000")
        .outputFluids("gtceu:light_rare_earths 500", "gtceu:heavy_rare_earths 750", "gtceu:oxalic_acid_solution 750")
        .duration(160)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.centrifuge("separate_light_rare_earths")
        .inputFluids("gtceu:light_rare_earths 250")
        .chancedOutput("gtceu:small_neodymium_dust", 6500, 0)
        .chancedOutput("gtceu:small_samarium_dust", 5000, 0)
        .chancedOutput("gtceu:small_yttrium_dust", 5000, 0)
        .chancedOutput("gtceu:small_lanthanum_dust", 4000, 0)
        .chancedOutput("gtceu:small_cerium_dust", 7500, 0)
        .chancedOutput("gtceu:small_cadmium_dust", 5000, 0)
        .duration(40)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.distillation_tower("distill_heavy_rare_earths")
        .inputFluids("gtceu:heavy_rare_earths 1000")
        .itemOutputs("3x gtceu:europium_oxide_dust")
        .outputFluids("gtceu:terbium_solution 200", "gtceu:lutetium_solution 500")
        .duration(160)
        .EUt(GTValues.VA[GTValues.IV])
// Terbium
    event.recipes.gtceu.electric_blast_furnace("blast_terbium_solution")
        .inputFluids("gtceu:terbium_solution 1000")
        .outputFluids("gtceu:steam 9600")
        .itemOutputs("5x gtceu:terbium_oxide_dust")
        .duration(120).EUt(30720)
        .blastFurnaceTemp(10800)

    event.recipes.gtceu.large_chemical_reactor("terbium_oxide_lcr")
        .itemInputs("5x gtceu:terbium_oxide_dust", "12x gtceu:cuprous_chloride_dust")
        .itemOutputs("8x gtceu:terbium_salt_dust", "9x gtceu:cuprous_oxide_dust")
        .duration(40)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.autoclave("terbium_salt_autoclave")
        .itemInputs("4x gtceu:terbium_salt_dust", "6x gtceu:calcium_dust")
        .inputFluids(Fluid.of("gtceu:steam", 9600))
        .itemOutputs("1x gtceu:terbium_dust", "9x gtceu:calcium_chloride_dust")
        .outputFluids(Fluid.of("water", 100))
        .duration(160)
        .EUt(GTValues.VA[GTValues.HV])

// Lutetium
    event.recipes.gtceu.large_chemical_reactor("lutetium_solution_acid_wash")
         .inputFluids("gtceu:lutetium_solution 1000", "gtceu:hydrofluoric_acid 6000")
         .itemOutputs("8x gtceu:lutetium_fluoride_dust")
         .outputFluids("minecraft:water 3000")
         .duration(160)
         .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.electric_blast_furnace("lutetium_fluoride_blast")
        .itemInputs("8x gtceu:lutetium_fluoride_dust", "3x gtceu:calcium_dust")
        .itemOutputs("2x gtceu:lutetium_dust", "9x gtceu:fluorite_dust")
        .duration(120).EUt(7680)
        .blastFurnaceTemp(2300)

// Europium
    event.recipes.gtceu.large_chemical_reactor("europium_oxide_reduction_lcr")
        .itemInputs("5x gtceu:europium_oxide_dust", "1x gtceu:zinc_dust")
        .itemOutputs("4x gtceu:europium_ii_oxide_dust", "2x gtceu:zincite_dust")
        .duration(160)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.electric_blast_furnace("ebf_europium_oxide_reduction")
        .itemInputs("6x gtceu:europium_ii_oxide_dust", "2x gtceu:aluminium_dust")
        .itemOutputs("3x gtceu:europium_dust", "5x gtceu:bauxite_dust")
        .duration(120).EUt(30720)
        .blastFurnaceTemp(9001)

})