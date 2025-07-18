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
        X: "monilabs:cryolobus_casing",
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
        X: "monilabs:cryolobus_casing",
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

    event.recipes.gtceu.assembler("kubejs:bathyal_energy_core")
        .itemInputs("kubejs:sculk_core", "4x gtceu:enori_empowered_gem", "gtceu:palis_empowered_block")
        .inputFluids("enderio:xp_juice 100")
        .itemOutputs("kubejs:bathyal_energy_core")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.assembler("kubejs:abyssal_energy_core")
        .itemInputs("2x kubejs:bathyal_energy_core", "4x gtceu:restonia_empowered_gem", "gtceu:cryococcus_block", "kubejs:stabilized_einsteinium")
        .inputFluids("enderio:xp_juice 1000")
        .itemOutputs("1x kubejs:abyssal_energy_core")
        .duration(100)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.assembler("kubejs:hadal_energy_core")
        .itemInputs("3x kubejs:abyssal_energy_core", "kubejs:hadal_shard", "gtceu:void_empowered_block", "2x gtceu:neutronium_plate", "16x gtceu:omnium_bolt")
        .inputFluids("enderio:xp_juice 1000")
        .itemOutputs("kubejs:hadal_energy_core")
        .duration(100)
        .EUt(GTValues.VA[GTValues.UV])
})
