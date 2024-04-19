ServerEvents.recipes(event => {
// Milk Chocolate Making

event.smelting('nuclearcraft:roasted_cocoa_beans', 'minecraft:cocoa_beans')
event.recipes.gtceu.macerator("Nibs")
    .itemInputs('nuclearcraft:roasted_cocoa_beans')
    .itemOutputs('nuclearcraft:ground_cocoa_nibs')
    .EUt(20)
    .duration(100)

event.recipes.gtceu.electric_blast_furnace('gtceu:chocolate_liquor')
    .itemInputs('nuclearcraft:ground_cocoa_nibs')
    .itemOutputs('gtceu:tiny_carbon_dust')
    .outputFluids(Fluid.of('nuclearcraft:chocolate_liquor', 144))
    .duration(100)
    .blastFurnaceTemp(307)
    .EUt(120)

event.recipes.gtceu.extractor('Butter')
    .itemInputs('nuclearcraft:ground_cocoa_nibs')
    .itemOutputs('nuclearcraft:cocoa_solids')
    .outputFluids(Fluid.of('nuclearcraft:cocoa_butter', 144))
    .EUt(2)
    .duration(32)

event.recipes.gtceu.mixer('nuclearcraft:unsweetened_chocolate')
    .inputFluids(Fluid.of('nuclearcraft:chocolate_liquor', 144), Fluid.of('nuclearcraft:cocoa_butter', 144))
    .outputFluids(Fluid.of('nuclearcraft:unsweetened_chocolate', 288))
    .EUt(30)
    .duration(100)

    event.recipes.gtceu.chemical_reactor('milk_pasteurization')
    .inputFluids(Fluid.of('gtceu:milk', 1000), Fluid.of('gtceu:steam', 500))//TODO Change to forge tags for steam
    .itemInputs('2x gtceu:stainless_steel_plate')
    .itemOutputs('2x gtceu:stainless_steel_plate')
    .outputFluids(Fluid.of('nuclearcraft:pasteurized_milk', 1000))
    .EUt(480)
    .duration(250)

event.recipes.gtceu.mixer('nuclearcraft:dark_chocolate')
    .inputFluids(Fluid.of('nuclearcraft:unsweetened_chocolate', 144), Fluid.of('nuclearcraft:sugar', 72))
    .outputFluids(Fluid.of('nuclearcraft:dark_chocolate', 144))
    .EUt(30)
    .duration(100)

event.recipes.gtceu.mixer('nuclearcraft:milk_chocolate')
    .inputFluids(Fluid.of('nuclearcraft:dark_chocolate', 144), Fluid.of('nuclearcraft:pasteurized_milk', 250))
    .outputFluids(Fluid.of('nuclearcraft:milk_chocolate',288))
    .EUt(30)
    .duration(80)

event.recipes.gtceu.fluid_solidifier('solid_chocolate')
    .inputFluids(Fluid.of('nuclearcraft:milk_chocolate', 144))
    .itemOutputs('nuclearcraft:milk_chocolate')
    .notConsumable('gtceu:plate_casting_mold')
    .duration(100)
    .EUt(16)

    //Grham Cracker
event.recipes.gtceu.compressor('ghramCracker')
    .itemInputs('2x gtceu:wheat_dust')
    .itemInputs('nuclearcraft:graham_cracker')
    .EUt(20)
    .duration(200)
event.recipes.gtceu.macerator('wheatToDust')
    .itemInputs('minecraft:wheat')
    .itemOutputs('gtceu:wheat_dust')
})
