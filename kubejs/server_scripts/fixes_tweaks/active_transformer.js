/**
 * Lowers the tiering of Active Transformers from LuV to EV.
 * - Replaces the Superconducting coil in the core of the Active Transformer with High Power casing
 * - Changes recipes of High Power Casings and the Active Transformer machine to make them accessible earlier
 */
let ActiveTransformerMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.ActiveTransformerMachine")
let SupplierMemoizer = Java.loadClass("com.gregtechceu.gtceu.utils.SupplierMemoizer")

// Function<MultiblockMachineDefinition, BlockPattern>
let pattern = (definition) => FactoryBlockPattern.start()
    .aisle("XXX", "XXX", "XXX")
    .aisle("XXX", "XCX", "XXX")
    .aisle("XXX", "XSX", "XXX")
    .where("S", Predicates.controller(Predicates.blocks(GTMultiMachines.ACTIVE_TRANSFORMER.get())))
    .where("X", Predicates.blocks(GTBlocks.HIGH_POWER_CASING.get()).setMinGlobalLimited(12)
        .or(ActiveTransformerMachine.getHatchPredicates()))
    .where("C", Predicates.blocks(GTBlocks.HIGH_POWER_CASING.get()))
    .build()

// Set the pattern for Active Transformer
GTMultiMachines.ACTIVE_TRANSFORMER.setPatternFactory(SupplierMemoizer.memoize(() => pattern.apply(GTMultiMachines.ACTIVE_TRANSFORMER)))

ServerEvents.recipes(event => {
    event.recipes.gtceu.assembler("high_power_casing")
        .itemInputs(
            "#forge:frames/iridium",
            "6x #forge:plates/iridium",
            "#gtceu:circuits/ev",
            "16x #forge:fine_wires/cobalt",
            "16x #forge:fine_wires/copper",
            "2x gtceu:platinum_single_wire",
        )
        .itemOutputs("2x gtceu:high_power_casing")
        .duration(100).EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.assembler("active_transformer")
        .itemInputs(
            "gtceu:iv_transformer_16a",
            "#gtceu:circuits/luv",
            "8x gtceu:samarium_iron_arsenic_oxide_single_wire",
            "2x gtceu:hpic_chip"
        )
        .inputFluids("gtceu:sodium_potassium 1000")
        .itemOutputs("gtceu:active_transformer")
        .duration(300).EUt(GTValues.VA[GTValues.IV])
})
