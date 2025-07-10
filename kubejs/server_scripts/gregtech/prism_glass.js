/**
 * Non-Prismatic Crucible steps to P.R.I.S.M. glass
 */
ServerEvents.recipes(event => {
    // LYSO:Ce line
    event.recipes.gtceu.chemical_reactor("yttria")
        .itemInputs("2x gtceu:yttrium_dust")
        .inputFluids("gtceu:hydrogen_peroxide 3000")
        .itemOutputs("5x gtceu:yttria_dust")
        .outputFluids("minecraft:water 3000")
        .duration(15 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.chemical_reactor("cerium_nitrate")
        .itemInputs("1x gtceu:cerium_dust")
        .inputFluids("gtceu:nitric_acid 1000")
        .itemOutputs("1x gtceu:cerium_nitrate_dust")
        .outputFluids("gtceu:hydrogen 1000")
        .duration(7.5 * 20)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.electrolyzer("decomposition_electrolyzing_cerium_nitrate")
        .itemInputs("1x gtceu:cerium_nitrate_dust")
        .itemOutputs("1x gtceu:cerium_dust")
        .outputFluids("gtceu:nitrogen_dioxide 1000", "gtceu:oxygen 1000")
        .duration(4.5 * 20)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.mixer("lyso_ce_dust")
        .itemInputs("5x gtceu:yttria_dust", "10x gtceu:silicon_dioxide_dust", "1x gtceu:cerium_nitrate_dust")
        .inputFluids("gtceu:lutetium 432")
        .itemOutputs("16x gtceu:lyso_ce_dust")
        .outputFluids("gtceu:nitric_oxide 1000")
        .duration(12 * 20)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.alloy_smelter("lyso_ce_glass")
        .notConsumable("gtceu:block_casting_mold")
        .itemInputs("4x gtceu:lyso_ce_dust")
        .itemOutputs("kubejs:lyso_ce_glass")
        .duration(6 * 20)
        .EUt(GTValues.VA[GTValues.LV])

    event.recipes.gtceu.macerator("macerate_lyso_ce_glass")
        .itemInputs("1x kubejs:lyso_ce_glass")
        .itemOutputs("1x gtceu:lyso_ce_dust")
        .duration(1 * 20)
        .EUt(GTValues.VA[GTValues.ULV])
        .category("gtceu:macerator_recycling")

    // PrismaC steps from Prismatic_Crucible.js happen here

    event.recipes.gtceu.atomic_reconstruction("prism_conversion")
        .itemInputs("kubejs:blue_aligned_glass")
        .itemOutputs("kubejs:prism_glass")
        .duration(20)
        .EUt(GTValues.VA[GTValues.UV])
})
