/**
 * Stoneline.
 * A hardmode-exclusive processing line to generate Taranium and a wealth of byproducts from Stone Dust.
 * Replaces regular GregTech Stone Dust centrifuging.
 */
ServerEvents.recipes(event => {
    if(doStoneline) {
        // Dioxygen Difluoride
        event.recipes.gtceu.large_chemical_reactor("dioxygen_difluoride")
            .inputFluids("gtceu:oxygen 2000", "gtceu:fluorine 2000")
            .notConsumable("gtceu:enori_gem")
            .outputFluids("gtceu:dioxygen_difluoride 1000")
            .duration(100).EUt(GTValues.VA[GTValues.HV])

        // Helium Hydride
        event.recipes.gtceu.chemical_reactor("tritium_hydride")
            .inputFluids("gtceu:hydrogen 1000", "gtceu:tritium 1000")
            .outputFluids("gtceu:tritium_hydride 1000")
            .duration(160).EUt(GTValues.VA[GTValues.EV])

        event.recipes.gtceu.distillation_tower("helium_hydride")
            .inputFluids("gtceu:tritium_hydride 10000")
            .outputFluids("gtceu:tritium_hydride 9900", "gtceu:helium_hydride 100")
            .duration(800).EUt(192)

        // Stone Dust Processing
        event.remove({ id: "gtceu:centrifuge/stone_dust_separation" })

        event.recipes.gtceu.chemical_bath("stone_dust_to_dirty_hexafluorosilicic_acid")
            .itemInputs("24x gtceu:stone_dust")
            .inputFluids("gtceu:hydrofluoric_acid 5000")
            .itemOutputs("6x gtceu:quartzite_dust", "6x gtceu:potassium_feldspar_dust", "5x gtceu:mirabilite_dust", "3x gtceu:redrock_dust")
            .outputFluids("gtceu:dirty_hexafluorosilicic_acid 6000")
            .duration(40).EUt(GTValues.VA[GTValues.MV])

        // 8:3 stone dust per stone residue dust
        event.recipes.gtceu.centrifuge("dirty_hexafluorosilic_acid_to_stone_residue")
            .inputFluids("gtceu:dirty_hexafluorosilicic_acid 6000")
            .itemOutputs("9x gtceu:stone_residue_dust")
            .outputFluids("gtceu:hexafluorosilicic_acid 1000")
            .duration(100).EUt(GTValues.VA[GTValues.HV])

        // 24:1 stone residue dust per uncommon residue dust
        event.recipes.gtceu.centrifuge("centrifuging_stone_residue")
            .itemInputs("27x gtceu:stone_residue_dust", "3x gtceu:sodium_hydroxide_dust")
            .inputFluids("minecraft:water 8000")
            .itemOutputs("16x gtceu:marble_dust", "8x gtceu:biotite_dust", "6x gtceu:metal_mixture_dust", "4x gtceu:sodalite_dust", "3x gtceu:uncommon_residue_dust")
            .duration(400).EUt(GTValues.VA[GTValues.HV])

        // 24:1 stone dust per oxidised residue dust
        event.recipes.gtceu.large_chemical_reactor("uncommon_residue_to_oxidised_residue")
            .itemInputs("gtceu:uncommon_residue_dust")
            .inputFluids("gtceu:dioxygen_difluoride 1000")
            .itemOutputs("gtceu:oxidised_residue_dust", "2x gtceu:ash_dust")
            .duration(80).EUt(GTValues.VA[GTValues.MV])

        // 240:1 stone dust per refined residue dust
        event.recipes.gtceu.centrifuge("centrifuging_oxidised_residue")
            .itemInputs("10x gtceu:oxidised_residue_dust")
            .inputFluids("gtceu:distilled_water 10000")
            .itemOutputs("6x gtceu:garnet_sand_dust", "6x gtceu:basaltic_mineral_sand_dust", "5x gtceu:granitic_mineral_sand_dust", "4x gtceu:clay_dust", "gtceu:refined_residue_dust")
            .outputFluids("gtceu:sulfuric_copper_solution 1000", "gtceu:sulfuric_nickel_solution 500", "gtceu:lead_zinc_solution 250")
            .duration(500).EUt(720)

        // 2400:1 stone dust per clean inert residue dust
        event.recipes.gtceu.centrifuge("centrifuging_refined_residue")
            .itemInputs("10x gtceu:refined_residue_dust")
            .notConsumable(Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT())
            .notConsumableFluid("gtceu:fluoroantimonic_acid 1000")
            .itemOutputs("10x gtceu:pitchblende_dust", "6x gtceu:borax_dust", "5x gtceu:rare_earth_dust", "4x gtceu:snowchestite_dust", "3x gtceu:diamond_dust", "gtceu:clean_inert_residue_dust")
            .duration(2000).EUt(GTValues.VA[GTValues.LuV])

        event.recipes.gtceu.mixer("ultraacidic_residue")
            .itemInputs("gtceu:clean_inert_residue_dust")
            .inputFluids("gtceu:helium_hydride 1000")
            .outputFluids("gtceu:ultraacidic_residue 1000")
            .duration(160).EUt(GTValues.VA[GTValues.EV])

        // 2400:1 stone dust per bucket of dusty helium
        event.recipes.gtceu.large_chemical_reactor("ultraacidic_residue_to_dusty_helium")
            .inputFluids("gtceu:xenon 1000", "gtceu:oxygen 4000", "gtceu:ultraacidic_residue 2000")
            .notConsumable(Item.of("kubejs:abyssal_energy_core", "{Damage:4000000}").weakNBT())
            .itemOutputs("2x gtceu:europium_dust", "gtceu:kaemanite_dust", "gtceu:small_osmiridium_dust")
            .outputFluids("gtceu:xenic_acid 1000", "gtceu:dusty_helium 2000")
            .duration(1000).EUt(GTValues.VA[GTValues.EV])

        // Taranium
        event.recipes.gtceu.centrifuge("centrifuging_dusty_helium")
            .inputFluids("gtceu:dusty_helium 1000")
            .outputFluids("gtceu:taranium_enriched_helium 150", "gtceu:taranium_depleted_helium 850")
            .duration(400).EUt(2880)

        event.recipes.gtceu.fusion_reactor("taranium_enriched_helium_and_helium_3_to_taranium_enriched_helium_plasma")
            .inputFluids("gtceu:taranium_enriched_helium 1000", "gtceu:helium_3 1000")
            .outputFluids("gtceu:taranium_enriched_helium_plasma 3000")
            .duration(160).EUt(GTValues.VHA[GTValues.IV])
            .fusionStartEU(480000000)

        event.recipes.gtceu.centrifuge("centrifuging_taranium_enriched_helium_plasma")
            .inputFluids("gtceu:taranium_enriched_helium_plasma 3000")
            .notConsumable("kubejs:magnetron")
            .notConsumable("kubejs:cryotheum_dust")
            .itemOutputs("gtceu:taranium_dust", "gtceu:small_clean_inert_residue_dust")
            .duration(100).EUt(GTValues.VA[GTValues.ZPM])

        event.recipes.gtceu.centrifuge("centrifuging_taranium_depleted_helium")
            .inputFluids("gtceu:taranium_depleted_helium 2500")
            .itemOutputs("gtceu:clean_inert_residue_dust")
            .outputFluids("gtceu:helium 2000")
            .duration(320).EUt(GTValues.VA[GTValues.EV])
    }
})
