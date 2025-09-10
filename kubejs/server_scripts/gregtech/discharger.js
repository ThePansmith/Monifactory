/**
 * Draconic Evolution Fusion recipes
 */

ServerEvents.recipes(event => {
    event.shaped("gtceu:discharger", [
        "PLP",
        "CFC",
        "PHP"
    ], {
        P: "gtceu:cryolobus_plate",
        F: "kubejs:dischargement_core",
        C: "gtceu:niobium_titanium_single_cable",
        L: "gtceu:iv_field_generator",
        H: "gtceu:hsse_frame"
    }).id("kubejs:shaped/discharger")

    event.recipes.gtceu.assembly_line("gtceu:sculk_biocharger")
        .itemInputs("gtceu:discharger", "4x #gtceu:circuits/uev", "4x monilabs:bioalloy_casing", "16x kubejs:dischargement_core")
        .inputFluids("gtceu:advanced_soldering_alloy 11520", "gtceu:omnium 5760", "gtceu:polyethyl_cyanoacrylate 3456")
        .itemOutputs("gtceu:sculk_biocharger")
        .duration(3000)
        .EUt(1966000)
        .stationResearch(b => b
            .researchStack("gtceu:discharger")
            .CWUt(160, 1024000)
            .EUt(1200000)
        )

    event.recipes.gtceu.assembler("monilabs:cryolobus_casing")
        .itemInputs("6x gtceu:cryolobus_plate", "gtceu:cryolobus_frame")
        .itemOutputs("2x monilabs:cryolobus_casing")
        .duration(50)
        .circuit(6)
        .EUt(16)

    function Discharge(id, output, input, refund) {
        event.recipes.gtceu.discharger(`kubejs:${id}`)
            .itemInputs(input)
            .itemOutputs(output)
            .duration(10) // wip
        // .EUt(-(refund / 4)) Enable once that gets fixed.
    }

    const bathyal = Item.of("kubejs:bathyal_energy_core", "{Damage:2000000}").weakNBT()
    const abyssal = Item.of("kubejs:abyssal_energy_core", "{Damage:4000000}").weakNBT()
    const hadal = Item.of("kubejs:hadal_energy_core", "{Damage:8000000}").weakNBT()

    Discharge("hadal_solar", "2x solarflux:sp_custom_hadal", ["2x solarflux:sp_custom_abyssal", hadal, abyssal], 1000000)
    Discharge("nt_solar", "solarflux:sp_custom_neutronium", ["solarflux:sp_custom_hadal", "4x gtceu:sculk_superconductor_single_wire", "2x gtceu:omnium_block", hadal, hadal], 100000000)
    Discharge("abyssal_solar", "2x solarflux:sp_custom_abyssal", ["2x solarflux:sp_custom_bathyal", "4x laserio:energy_overclocker_card_tier_9", hadal, bathyal], 20000000)
    Discharge("bathyal_solar", "2x solarflux:sp_custom_bathyal", ["2x solarflux:sp_8", "4x laserio:energy_overclocker_card_tier_8", "2x gtceu:cryolobus_block", bathyal], 20000000)
    Discharge("cryococcus_block", "5x gtceu:cryococcus_block", ["5x gtceu:cryolobus_block", "2x kubejs:warden_heart", bathyal, bathyal], 40000000)
    Discharge("hadal_warp_engine", "kubejs:hadal_warp_engine", ["gtceu:cryococcus_frame", "kubejs:warp_engine", "gtceu:cryococcus_plate", "2x gtceu:cryolobus_plate", "gtceu:zpm_field_generator", "kubejs:hadal_shard", hadal, abyssal], 40000000)

    // event.recipes.gtceu.charger("kubejs:sculk_core_charge")
    //     .itemInputs(["4x gtceu:cryolobus_ingot", "4x gtceu:tungsten_carbide_ingot", "minecraft:sculk_catalyst"])
    //     .itemOutputs("kubejs:sculk_core")
    //     .EUt(500000 / 16)
    //     .duration(100 * 4)
})
