/** Bauxite line, new and better way to proces bauxite */

ServerEvents.recipes(event => {

    //Sodium Aluminate
    function sodiumaluminate(dust) {
        event.recipes.gtceu.large_chemical_reactor(`kubejs:${dust}_sodium_aluminate`)
            .itemInputs(`16x gtceu:${dust}_dust`, "48x gtceu:sodium_hydroxide_dust")
            .inputFluids("minecraft:water 4000")
            .itemOutputs("64x gtceu:sodium_aluminate_dust")
            .duration(400)
            .EUt(480)
            .circuit(24)
    }

    {
        sodiumaluminate("zeolite")
        sodiumaluminate("glauconite_sand")
        sodiumaluminate("lepidolite")
        sodiumaluminate("biotite")
        sodiumaluminate("lazurite")
        sodiumaluminate("sodalite")
        sodiumaluminate("mica")
        sodiumaluminate("aluminium")
    }

    //Aluminium Hydroxide
    event.recipes.gtceu.chemical_reactor("kubejs:aluminium_hydroxide")
        .itemInputs("4x gtceu:sodium_aluminate_dust")
        .inputFluids("minecraft:water 3000")
        .itemOutputs("4x gtceu:aluminium_hydroxide_dust", "3x gtceu:sodium_hydroxide_dust")
        .duration(50)
        .EUt(120)

    //Initial Bauxite Slurry
    event.recipes.gtceu.mixer("kubejs:bauxite_slurry_crushed")
        .itemInputs("32x gtceu:crushed_bauxite_ore", "9x gtceu:sodium_hydroxide_dust", "4x gtceu:quicklime_dust")
        .inputFluids("minecraft:water 5000")
        .outputFluids("gtceu:bauxite_slurry 8000")
        .duration(200)
        .EUt(120)
        .circuit(8)

    event.recipes.gtceu.mixer("kubejs:bauxite_slurry_purified")
        .itemInputs("32x gtceu:purified_bauxite_ore", "9x gtceu:sodium_hydroxide_dust", "4x gtceu:quicklime_dust")
        .inputFluids("minecraft:water 5000")
        .outputFluids("gtceu:bauxite_slurry 8000")
        .duration(200)
        .EUt(120)
        .circuit(8)

    //Heating Bauxite Slurry
    event.recipes.gtceu.fluid_heater("kubejs:bauxite_slurry_heating")
        .inputFluids("gtceu:bauxite_slurry 2000")
        .outputFluids("gtceu:heated_bauxite_slurry 2000")
        .duration(40)
        .EUt(480)
        .circuit(1)

    //Heated Bauxite Slurry Processing
    event.recipes.gtceu.large_chemical_reactor("kubejs:bauxite_slurry_processing")
        .itemInputs("gtceu:aluminium_hydroxide_dust")
        .inputFluids("gtceu:bauxite_slurry 8000", "gtceu:carbon_dioxide 5000")
        .itemOutputs("64x gtceu:alumina_dust", "16x gtceu:alumina_dust", "9x gtceu:soda_ash_dust", "10x gtceu:calcite_dust", "16x gtceu:bauxite_slag_dust")
        .outputFluids("gtceu:bauxite_sluice_juice 5000")
        .duration(300)
        .EUt(480)

    //Bauxite Slag Processing
    event.recipes.gtceu.centrifuge("kubejs:bauxite_slag_processing")
        .itemInputs("gtceu:bauxite_slag_dust")
        .itemOutputs("gtceu:rutile_dust")
        .chancedOutput("gtceu:gallium_dust", 3000, 0)
        .chancedOutput("gtceu:quicklime_dust", 2000, 0)
        .chancedOutput("gtceu:silicon_dioxide_dust", 9000, 0)
        .chancedOutput("gtceu:iron_dust", 8000, 0)
        .duration(40)
        .EUt(120)

    //Bauxite Sluice Processing
    event.recipes.gtceu.centrifuge("kubejs:bauxite_sluice_juice_processing")
        .inputFluids("gtceu:bauxite_sluice_juice 1000")
        .itemOutputs("gtceu:stone_dust")
        .chancedOutput("gtceu:iron_dust", 4000, 0)
        .chancedOutput("gtceu:copper_dust", 2000, 0)
        .chancedOutput("gtceu:tin_dust", 2000, 0)
        .chancedOutput("gtceu:nickel_dust", 2000, 0)
        .chancedOutput("gtceu:antimony_dust", 2000, 0)
        .outputFluids("minecraft:water 500")
        .duration(40)
        .EUt(120)

    event.recipes.gtceu.distillery("kubejs:bauxite_sluice_juice_processing")
        .inputFluids("gtceu:bauxite_sluice_juice 1000")
        .itemOutputs("gtceu:sluice_sand_dust")
        .outputFluids("minecraft:water 500")
        .duration(100)
        .EUt(16)

    event.recipes.gtceu.distillery("kubejs:bauxite_sluice_sand_processing")
        .itemInputs("gtceu:sluice_sand_dust")
        .chancedOutput("gtceu:iron_dust", 4000, 0)
        .chancedOutput("gtceu:neodymium_dust", 2000, 0)
        .chancedOutput("gtceu:chrome_dust", 2000, 0)
        .duration(200)
        .EUt(240)

})