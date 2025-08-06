/** Pre Release */
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line("kubejs_fusion_crafting_core")
        .itemInputs("gtceu:hsse_frame", "6x gtceu:tungsten_carbide_plate", "4x minecraft:nether_star", "2x gtceu:iv_sensor", "#gtceu:circuits/iv", "8x #forge:storage_blocks/diamatine", Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT(), Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT(), Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT(), Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT())
        .inputFluids("gtceu:soldering_alloy 1152")
        .itemOutputs("kubejs:dischargement_core")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack(Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT()).EUt(480).duration(1200))
        .duration(1200)
        .EUt(30720)

    // event.recipes.extendedcrafting.shaped_table("extendedcrafting:auto_flux_crafter", [
    //     "RPEPR",
    //     "PXCXP",
    //     "PCACP",
    //     "PXCXP",
    //     "RPEPR"
    // ], {
    //     P: "gtceu:double_cryolobus_plate",
    //     R: "gtceu:luv_lapotronic_battery",
    //     X: "monilabs:cryolobus_casing",
    //     A: "gtceu:luv_charger_4x",
    //     E: "gtceu:luv_sensor",
    //     C: "#gtceu:circuits/luv"
    // })

    event.recipes.extendedcrafting.shaped_table("extendedcrafting:flux_alternator", [
        " PEP ",
        " PCP ",
        " PCP ",
        "PPCPP",
        "XRRRX"
    ], {
        P: "gtceu:double_cryolobus_plate",
        R: "gtceu:luv_lapotronic_battery",
        X: "monilabs:cryolobus_casing",
        E: "gtceu:luv_emitter",
        C: "#gtceu:circuits/luv"
    })

    event.recipes.gtceu.assembler("kubejs:empty_bathyal_energy_core")
        .itemInputs("4x gtceu:cryolobus_plate", "2x gtceu:europium_plate", "8x gtceu:vanadium_gallium_bolt")
        .inputFluids("gtceu:soldering_alloy 288")
        .itemOutputs("kubejs:empty_bathyal_energy_core")
        .duration(10)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.discharger("kubejs:empty_abyssal_energy_core")
        .itemInputs("4x gtceu:cryococcus_plate", "2x gtceu:tritanium_plate", "8x gtceu:naquadah_alloy_bolt", "kubejs:stabilized_californium", Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT())
        .inputFluids("gtceu:advanced_soldering_alloy 576")
        .itemOutputs("kubejs:empty_abyssal_energy_core")
        .duration(10)

    event.recipes.gtceu.discharger("kubejs:empty_hadal_energy_core")
        .itemInputs("4x gtceu:cryococcus_plate", "2x gtceu:neutronium_plate", "8x gtceu:omnium_bolt", Item.of("kubejs:abyssal_energy_core", "{Damage:4000000}").weakNBT())
        .inputFluids("gtceu:advanced_soldering_alloy 864")
        .itemOutputs("kubejs:empty_hadal_energy_core")
        .duration(10)

    // Energy core filling
    event.recipes.gtceu.canner("bathyal_energy_core")
        .itemInputs("kubejs:empty_bathyal_energy_core")
        .inputFluids("gtceu:sculk 500")
        .itemOutputs("kubejs:bathyal_energy_core")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.canner("abyssal_energy_core")
        .itemInputs("kubejs:empty_abyssal_energy_core")
        .inputFluids("gtceu:sculk 1000")
        .itemOutputs("kubejs:abyssal_energy_core")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.canner("hadal_energy_core")
        .itemInputs("kubejs:empty_hadal_energy_core")
        .inputFluids("kubejs:hadal_sculk 2000")
        .itemOutputs("kubejs:hadal_energy_core")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])
})
