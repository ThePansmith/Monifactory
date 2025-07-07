/** Pre Release */
ServerEvents.recipes(event => {
    event.recipes.gtceu.assembly_line("kubejs_fusion_crafting_core")
        .itemInputs("gtceu:hsse_frame", "6x gtceu:tungsten_carbide_plate", "4x kubejs:bathyal_energy_core", "4x minecraft:nether_star", "2x gtceu:iv_sensor", "#gtceu:circuits/iv", "8x #forge:storage_blocks/diamatine_empowered")
        .inputFluids("gtceu:soldering_alloy 1152")
        .itemOutputs("kubejs:dischargement_core")
        ["scannerResearch(java.util.function.UnaryOperator)"](b => b.researchStack("kubejs:bathyal_energy_core").EUt(480).duration(1200))
        .duration(1200)
        .EUt(30720)

    event.recipes.extendedcrafting.shaped_table("extendedcrafting:auto_flux_crafter", [
        "RPEPR",
        "PXCXP",
        "PCACP",
        "PXCXP",
        "RPEPR"
    ], {
        P: "gtceu:double_cryolobus_plate",
        R: "gtceu:luv_lapotronic_battery",
        X: "kubejs:cryolobus_casing",
        A: "gtceu:luv_charger_4x",
        E: "gtceu:luv_sensor",
        C: "#gtceu:circuits/luv"
    })

    event.recipes.extendedcrafting.shaped_table("extendedcrafting:flux_alternator", [
        " PEP ",
        " PCP ",
        " PCP ",
        "PPCPP",
        "XRRRX"
    ], {
        P: "gtceu:double_cryolobus_plate",
        R: "gtceu:luv_lapotronic_battery",
        X: "kubejs:cryolobus_casing",
        E: "gtceu:luv_emitter",
        C: "#gtceu:circuits/luv"
    })

    event.recipes.extendedcrafting.shaped_flux_crafter("kubejs:sculk_core", [
        "ABA",
        "BCB",
        "ABA"
    ], {
        A: "gtceu:cryolobus_ingot",
        B: "gtceu:tungsten_carbide_ingot",
        C: "minecraft:sculk_catalyst"
    }, 200000000).powerRate(200000000);

    event.recipes.gtceu.assembler("kubejs:empty_mesol_energy_core")
        .itemInputs("4x gtceu:cryolobus_plate", "2x gtceu:ruthenium_plate", "8x gtceu:niobium_titanium_bolt")
        .inputFluids("enderio:advanced_soldering_alloy 288")
        .itemOutputs("kubejs:empty_mesol_energy_core")
        .duration(100)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.discharger("kubejs:empty_bathyal_energy_core")
        .itemInputs("4x gtceu:cryolobus_plate", "2x gtceu:europium_plate", "8x gtceu:vanadium_gallium_bolt", "kubejs:mesol_energy_core")
        .itemOutputs("kubejs:empty_bathyal_energy_core")
        .duration(10)

    event.recipes.gtceu.discharger("kubejs:empty_abyssal_energy_core")
        .itemInputs("4x gtceu:cryococcus_plate", "2x gtceu:tritanium_plate", "8x gtceu:naquadah_alloy_bolt", "kubejs:stabilized_einsteinium", "kubejs:bathyal_energy_core")
        .itemOutputs("kubejs:empty_abyssal_energy_core")
        .duration(10)

    event.recipes.gtceu.discharger("kubejs:empty_hadal_energy_core")
        .itemInputs("4x gtceu:cryococcus_plate", "2x gtceu:neutronium_plate", "8x gtceu:omnium_bolt", "kubejs:hadal_shard", "kubejs:abyssal_energy_core")
        .itemOutputs("kubejs:empty_hadal_energy_core")
        .duration(10)

    // Energy core filling
    const energyCores = ["mesol", "bathyal", "abyssal", "hadal"]
    energyCores.forEach((tier, index) => {
        event.recipes.gtceu.canner(`${tier}_energy_core`)
            .itemInputs(`kubejs:empty_${tier}_energy_core`)
            .inputFluids(`gtceu:cryococcus ${288 * (index + 1)}`)
            .itemOutputs(`kubejs:${tier}_energy_core`)
            .duration(100)
            .EUt(GTValues.VA[GTValues.IV])
    })
})
