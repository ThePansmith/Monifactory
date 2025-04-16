/** Bauxite line, new and better way to proces bauxite */

ServerEvents.recipes(event => {

    //Initial Bauxite Slurry
    event.recipes.gtceu.mixer("kubejs:bauxite_slurry_crushed")
        .itemInputs("24x gtceu:crushed_bauxite_ore", "12x gtceu:sodium_hydroxide_dust", "4x gtceu:quicklime_dust")
        .inputFluids("minecraft:water 12000")
        .outputFluids("gtceu:bauxite_slurry 12000")
        .duration(200)
        .EUt(120)
        .circuit(8)

    event.recipes.gtceu.mixer("kubejs:bauxite_slurry_purified")
        .itemInputs("24x gtceu:purified_bauxite_ore", "12x gtceu:sodium_hydroxide_dust", "4x gtceu:quicklime_dust")
        .inputFluids("minecraft:water 12000")
        .outputFluids("gtceu:bauxite_slurry 12000")
        .duration(200)
        .EUt(120)
        .circuit(8)

    //Heating Bauxite Slurry
    event.recipes.gtceu.fluid_heater("kubejs:bauxite_slurry_heating")
        .inputFluids("gtceu:bauxite_slurry 4000")
        .outputFluids("gtceu:heated_bauxite_slurry 4000")
        .duration(40)
        .EUt(480)

    //Heated Bauxite Slurry Processing
    event.recipes.gtceu.centrifuge("kubejs:bauxite_slurry_processing")
        .inputFluids("gtceu:heated_bauxite_slurry 12000")
        .outputFluids("gtceu:red_mud 4000", "gtceu:bauxite_aluminosilicate_solution 8000")
        .duration(300)
        .EUt(480)

    //Red Mud Processing
    event.recipes.gtceu.centrifuge("kubejs:red_mud_processing")
    .inputFluids("gtceu:red_mud 1000")
        .itemOutputs("3x gtceu:rutile_dust")
        .itemOutputs("5x gtceu:hematite_dust")
        .itemOutputs("2x gtceu:quicklime_dust")
        .chancedOutput("2x gtceu:alumina_dust", 3000, 0)
        .chancedOutput("2x gtceu:vanadium_dust", 700, 0)
        .outputFluids("minecraft:water 1000")
        .duration(500)
        .EUt(120)

    //Bauxite Sluice Processing
    event.recipes.gtceu.centrifuge("kubejs:bauxite_aluminosilicate_solution_processing")
        .inputFluids("gtceu:bauxite_aluminosilicate_solution 8000")
        .itemOutputs("32x gtceu:sodium_aluminate_dust")
        .chancedOutput("3x gtceu:silicon_dioxide_dust", 3000, 0)
        .chancedOutput("gtceu:gallium_dust", 3000, 0)
        .outputFluids("minecraft:water 4000")
        .duration(40)
        .EUt(120)

    //Aluminium Hydroxide
    event.recipes.gtceu.chemical_reactor("kubejs:sodium_aluminate_to_aluminium_hydroxide")
        .itemInputs("8x gtceu:sodium_aluminate_dust")
        .inputFluids("minecraft:water 3000", "gtceu:carbon_dioxide 1000")
        .itemOutputs("14x gtceu:aluminium_hydroxide_dust", "6x gtceu:soda_ash_dust")
        .duration(200)
        .EUt(120)

    event.recipes.gtceu.electric_blast_furnace("kubejs:aluminium_hydroxide_to_alumina")
        .itemInputs("14x gtceu:aluminium_hydroxide_dust")
        .itemOutputs("5x gtceu:alumina_dust")
        .outputFluids(Fluid.of("minecraft:water", 3000))
        .blastFurnaceTemp(1100)
        .duration(200).EUt(120)
    
    //Alumina Processing
    event.recipes.gtceu.electric_blast_furnace("kubejs:alumina_to_aluminium")
        .itemInputs("10x gtceu:alumina_dust","3x gtceu:carbon_dust")
        .itemOutputs("4x gtceu:aluminium_ingot")
        .outputFluids(Fluid.of("minecraft:carbon_dioxide", 3000))
        .blastFurnaceTemp(1100)
        .duration(1200).EUt(120)

    event.recipes.gtceu.electrolyzer("kubejs:alumina_to_aluminium_lazy_version")
        .itemInputs("5x gtceu:alumina_dust")
        .itemOutputs("2x gtceu:aluminium_dust")
        .outputFluids(Fluid.of("gtceu:oxygen", 3000))
        .duration(100)
        .EUt(480)

    /*
    event.recipes.gtceu.distillery("kubejs:bauxite_sluice_juice_processing")
        .inputFluids("gtceu:bauxite_sluice_juice 1000")
        .itemOutputs("gtceu:sluice_sand_dust")
        .outputFluids("minecraft:water 500")
        .duration(100)
        .EUt(16)

    event.recipes.gtceu.electromagnetic_separator("kubejs:bauxite_sluice_sand_processing")
        .itemInputs("gtceu:sluice_sand_dust")
        .chancedOutput("gtceu:iron_dust", 4000, 0)
        .chancedOutput("gtceu:neodymium_dust", 2000, 0)
        .chancedOutput("gtceu:chromium_dust", 2000, 0)
        .duration(200)
        .EUt(240)
    */

})