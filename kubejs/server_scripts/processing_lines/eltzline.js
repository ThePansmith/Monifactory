/**
 * Stoneline.
 * A processing line to generate Eltz from otherwise-useless dusts.
 */
ServerEvents.recipes(event => {
    // SiO2 + 6HF -> H2SiF6 + 2H2O
    event.recipes.gtceu.chemical_reactor("hexafluorosilicic_acid")
        .itemInputs("3x gtceu:silicon_dioxide_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .outputFluids("gtceu:hexafluorosilicic_acid 1000", "minecraft:water 2000")
        .duration(6 * 20)
        .EUt(GTValues.VA[GTValues.MV])


    // "Common" dusts to Dirty Hexafluorosilicic Acid Solution

    // 2KAlSi3O8 + 36HF -> 2KOH + Al2O3 + 6H2SiF6 + 11H2O
    // This one takes 1.5x as long because Stone Dust can be centrifuged to make Potassium Feldspar en-masse
    event.recipes.gtceu.chemical_reactor("potassium_feldspar_digestion")
        .itemInputs("22x gtceu:potassium_feldspar_dust")
        .inputFluids("gtceu:hydrofluoric_acid 36000", "minecraft:water 1000")
        .itemOutputs("5x gtceu:bauxite_dust", "6x gtceu:potassium_hydroxide_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 18000")
        .duration((18 * 2 * 20 + 5 * 20) * 1.5)

    /*
    // CaAl2Si2O8 + 12HF -> Ca(OH)2 + Al2O3 + 2H2SiF6 + 3H2O
    event.recipes.gtceu.chemical_reactor("anorthite_digestion")
        .itemInputs("13x gtceu:anorthite_dust")
        .inputFluids("gtceu:hydrofluoric_acid 12000", "minecraft:water 1000")
        .itemOutputs("5x gtceu:bauxite_dust", "3x gtceu:calcium_hydroxide_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 6000")
        .duration(6 * 2 * 20 + 5 * 20)
    */

    // Cs2Al2Si4(H2O)2O12 + 24HF -> 2CsOH + Al2O3 + 4H2SiF6 + 9H2O
    event.recipes.gtceu.chemical_reactor("pollucite_digestion")
        .itemInputs("11x gtceu:pollucite_dust")
        .inputFluids("gtceu:hydrofluoric_acid 24000")
        .itemOutputs("5x gtceu:bauxite_dust", "6x gtceu:caesium_hydroxide_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 12000", "minecraft:water 1000")
        .duration(11 * 2 * 20 + 5 * 20)

    // 2NaCa4Si27Al9(H2O)28O72 + 324HF -> 2NaOH + 8Ca(OH)2 + 9Al2O3 + 54H2SiF6 + 155H2O
    event.recipes.gtceu.large_chemical_reactor("zeolite_digestion")
        .itemInputs("44x gtceu:zeolite_dust")
        .inputFluids("gtceu:hydrofluoric_acid 36000")
        .itemOutputs("5x gtceu:bauxite_dust", "3x gtceu:calcium_hydroxide_dust", "6x gtceu:tiny_sodium_hydroxide_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 18000", "minecraft:water 5500")
        .duration(18 * 2 * 20 + 5 * 20)

    // 1Al2SiO5 + 6HF -> 1H2SiF6 + 2H2O + 1Al2O3
    event.recipes.gtceu.chemical_reactor("kyanite_digestion")
        .itemInputs("8x gtceu:kyanite_dust")
        .inputFluids("gtceu:hydrofluoric_acid 6000")
        .itemOutputs("5x gtceu:bauxite_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 3000")
        .duration(3 * 2 * 20 + 5 * 20)

    // 2LiAlSi2O6 + 24HF -> 4H2SiF6 + 8H2O + 1Al2O3 + 1Li2O
    event.recipes.gtceu.chemical_reactor("spodumene_digestion")
        .itemInputs("20x gtceu:spodumene_dust")
        .inputFluids("gtceu:hydrofluoric_acid 24000")
        .itemOutputs("5x gtceu:bauxite_dust", "3x gtceu:lithium_oxide_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 12000")
        .duration(12 * 2 * 20 + 5 * 20)

    // 2KAl3Si3F2O10 + 32HF -> 6H2SiF6 + 9H2O + 3Al2O3 + 2KOH
    event.recipes.gtceu.chemical_reactor("mica_digestion")
        .itemInputs("38x gtceu:mica_dust")
        .inputFluids("gtceu:hydrofluoric_acid 32000", "minecraft:water 3000")
        .itemOutputs("15x gtceu:bauxite_dust", "3x gtceu:potassium_hydroxide_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 18000")
        .duration(18 * 2 * 20 + 15 * 20)

    // Be3Al2Si6O18 + 36HF -> 6H2SiF6 + 1Al2O3 + 12H2O + 3BeO
    event.recipes.gtceu.chemical_reactor("emerald_digestion")
        .itemInputs("29x gtceu:emerald_dust")
        .inputFluids("gtceu:hydrofluoric_acid 36000")
        .itemOutputs("5x gtceu:bauxite_dust", "6x gtceu:beryllium_oxide_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 18000")
        .duration(18 * 2 * 20 + 5 * 20)

    // Al2Mg3Si3O12 + 18HF -> 3H2SiF6 + 1Al2O3 + 6H2O + 3MgO
    event.recipes.gtceu.chemical_reactor("pyrope_digestion")
        .itemInputs("20x gtceu:pyrope_dust")
        .inputFluids("gtceu:hydrofluoric_acid 18000")
        .itemOutputs("5x gtceu:bauxite_dust", "6x gtceu:magnesia_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 9000")
        .duration(9 * 2 * 20 + 5 * 20)

    // Al2Fe3Si3O12 + 18HF -> 3H2SiF6 + 1Al2O3 + 6H2O + 3FeO
    event.recipes.gtceu.chemical_reactor("almandine_digestion")
        .itemInputs("20x gtceu:almandine_dust")
        .inputFluids("gtceu:hydrofluoric_acid 18000")
        .itemOutputs("5x gtceu:bauxite_dust", "6x gtceu:ferrous_oxide_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 9000")
        .duration(9 * 2 * 20 + 5 * 20)

    // Al2Mn3Si3O12 + 18HF -> 3H2SiF6 + 1Al2O3 + 6H2O + 3MnO
    event.recipes.gtceu.chemical_reactor("spessartine_digestion")
        .itemInputs("20x gtceu:spessartine_dust")
        .inputFluids("gtceu:hydrofluoric_acid 18000")
        .itemOutputs("5x gtceu:bauxite_dust", "6x gtceu:manganese_oxide_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 9000")
        .duration(9 * 2 * 20 + 5 * 20)

    // Ca3Al2Si3O12 + 18HF -> 3H2SiF6 + 1Al2O3 + 6H2O + 3CaO
    event.recipes.gtceu.chemical_reactor("grossular_digestion")
        .itemInputs("20x gtceu:grossular_dust")
        .inputFluids("gtceu:hydrofluoric_acid 18000")
        .itemOutputs("5x gtceu:bauxite_dust", "6x gtceu:quicklime_dust")
        .outputFluids("gtceu:dirty_hexafluorosilicic_solution 9000")
        .duration(9 * 2 * 20 + 5 * 20)

    // Dirty Hexafluorosilicic Acid distillation
    event.recipes.gtceu.distillation_tower("distill_dirty_hexafluorosilicic_solution")
        .inputFluids("gtceu:dirty_hexafluorosilicic_solution 30000")
        .outputFluids("gtceu:hexafluorosilicic_acid 10000", "minecraft:water 20000")
        .chancedOutput("gtceu:aluminosilicate_residue_dust", 3333, 0)
        .duration(30 * 20)
        .EUt(GTValues.VA[GTValues.MV])
        .disableDistilleryRecipes(true)

    event.recipes.gtceu.chemical_bath("bathe_aluminosilicate_residue")
        .itemInputs("gtceu:aluminosilicate_residue_dust")
        .inputFluids("gtceu:helium_plasma 1000")
        .itemOutputs("gtceu:small_bauxite_dust", "gtceu:small_silicon_dioxide_dust", "gtceu:small_garnet_sand_dust")
        .outputFluids("gtceu:dusty_helium 1250")
        .duration(150)
        .EUt(GTValues.VHA[GTValues.IV])

    event.recipes.gtceu.centrifuge("centrifuging_dusty_helium")
        .inputFluids("gtceu:dusty_helium 1000")
        .outputFluids("gtceu:eltz-enriched_helium 150", "gtceu:eltz-depleted_helium 850")
        .duration(400)
        .EUt(GTValues.VHA[GTValues.EV])

    event.recipes.gtceu.centrifuge("centrifuging_eltz-depleted_helium")
        .inputFluids("gtceu:eltz-depleted_helium 1000")
        .itemOutputs("gtceu:small_metal_mixture_dust")
        .chancedOutput("gtceu:fly_ash_aluminosilicate_dust", 1000, 0)
        .outputFluids("gtceu:helium 725")
        .duration(320)
        .EUt(GTValues.VA[GTValues.MV])

    // Bootstrap recipe to start the Eltz Crystal growing from Tiny Eltz Dust + Eltic Sludge
    event.recipes.gtceu.centrifuge("centrifuging_eltz-enriched_helium")
        .inputFluids("gtceu:eltz-enriched_helium 1500")
        .notConsumable("kubejs:magnetron")
        .itemOutputs("monilabs:eltz_dust")
        .outputFluids("gtceu:helium 500")
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.mixer("mixing_eltic_sludge")
        .inputFluids("gtceu:eltz-enriched_helium 1000", "gtceu:dirty_hexafluorosilicic_solution 3000")
        .itemInputs("4x gtceu:aluminosilicate_residue_dust")
        .itemOutputs("8x gtceu:eltic_sludge_dust")
        .duration(5 * 8 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    /*
    In the event that this turns out to be a bad or boring idea,
    consider the option of making Eltz grow from a Flawed Budding Crystal akin to Amethyst or Certus
    with repair recipes that need to be ran when the budding crystal gets too damaged.
    This would strongly resemble an advanced AE2 Certus Quartz Crystal farm as showin in the AE2 guide.

    Example of an implementation of a budding crystal in KJS is shown here:
    https://discord.com/channels/303440391124942858/1178779065822482543
    */
    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "minecraft:amethyst_shard"
            },
            {
                "item": "gtceu:eltic_sludge_dust"
            },
            {
                "item": "monilabs:tiny_eltz_dust"
            }
        ],
        "result": {
            "count": 1,
            "item": "gtceu:flawless_impure_eltic_gem"
        }
    })
    event.custom({
        "type": "ae2:transform",
        "circumstance": {
            "type": "fluid",
            "tag": "minecraft:water"
        },
        "ingredients": [
            {
                "item": "gtceu:charged_certus_quartz_gem"
            },
            {
                "item": "gtceu:eltic_sludge_dust"
            },
            {
                "item": "monilabs:tiny_eltz_dust"
            }
        ],
        "result": {
            "count": 1,
            "item": "gtceu:flawless_impure_eltic_gem"
        }
    })

    event.recipes.gtceu.electric_blast_furnace("eltz_from_impure_eltic_gem")
        .itemInputs("3x gtceu:impure_eltic_gem", "1x gtceu:carbon_dust")
        .itemOutputs("1x monilabs:eltz_ingot", "gtceu:ferrosilite_dust", "6x gtceu:aluminium_nugget")
        // .chancedOutput("1x gtceu:ash_dust", 1111, 0)
        .outputFluids("gtceu:carbon_monoxide 1000")
        .duration(1540)
        .blastFurnaceTemp(10600)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.electric_blast_furnace("eltz_from_impure_eltic_dust")
        .itemInputs("3x gtceu:impure_eltic_dust", "1x gtceu:carbon_dust")
        .itemOutputs("1x monilabs:eltz_ingot", "gtceu:ferrosilite_dust", "6x gtceu:aluminium_nugget")
        // .chancedOutput("1x gtceu:ash_dust", 1111, 0)
        .outputFluids("gtceu:carbon_monoxide 1000")
        .duration(1540)
        .blastFurnaceTemp(10600)
        .EUt(GTValues.VA[GTValues.UV])
})
