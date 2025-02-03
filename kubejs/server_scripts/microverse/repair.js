/**
 * Recipe definitions for repairing microminers.
 */
ServerEvents.recipes(event => {
    /**
     * Starts a recipe builder for a given microminer tier. Must be completed with more chanced input items.
     * The miner tier determines the duration of the recipe.
     * @param {number|string} minerTier Miner tier index. Typically 1 through 12.
     * @param {string[]} doublePlateList List of the names of the double plate materials used to repair the hull.
     * @param {string[]} heavyPlatingList List of the names of the heavy plating materials used to repair the hull.
     */
    function repairing(minerTier, doublePlateList, heavyPlatingList) {
        var minerTierNumber;

        if(minerTier == '2half') minerTierNumber = 2.5;
        else if(minerTier == '4half') minerTierNumber = 4.5;
        else if(minerTier == '8half') minerTierNumber = 8.5;
        else minerTierNumber = minerTier;

        const duration = 20*(80+(20*minerTierNumber));

        const builder = event.recipes.gtceu.assembler(`kubejs:repair_t${minerTier}`)
            .itemInputs(`kubejs:damaged_microminer_t${minerTier}`)
            .itemOutputs(`kubejs:microminer_t${minerTier}`)
            .inputFluids(Fluid.of('gtceu:soldering_alloy', 36*minerTierNumber))
            .duration(duration)

        if(doublePlateList != undefined) {
            doublePlateList.forEach((name, index) => {
                builder.chancedInput(`2x gtceu:double_${name}_plate`, 9000-1000*index, -1000+200*index)
            })
        }

        if(heavyPlatingList != undefined) {
            heavyPlatingList.forEach((name, index) => {
                builder.chancedInput(`3x kubejs:${name}_heavy_plating`, 9000-1000*index, -1000+200*index)
            })
        }
        
        return builder;
    }

    repairing(1, ["steel"])
        .EUt(GTValues.VA[GTValues.HV])
        .chancedInput('kubejs:basic_mining_laser', 1200, -200)
        .chancedInput('kubejs:conductive_iron_thruster', 1000, -300)
        .chancedInput('kubejs:basic_micro_miner_guidance_system', 500, -200)

    repairing(2, ["titanium"])
        .EUt(GTValues.VHA[GTValues.EV])
        .chancedInput('kubejs:basic_mining_laser', 1400, -250)
        .chancedInput('kubejs:electrical_steel_thruster', 1500, -450)
        .chancedInput('kubejs:electrum_micro_miner_core', 900, -180)
        .chancedInput('kubejs:basic_micro_miner_guidance_system', 750, -300)

    repairing("2half", ["dark_steel"])
        .EUt(GTValues.VHA[GTValues.EV])
        .itemInputs('16x minecraft:arrow')
        .chancedInput('kubejs:hardened_thruster', 1000, -300)
        .chancedInput('minecraft:crossbow', 300, -40)
        .chancedInput('kubejs:basic_micro_miner_guidance_system', 750, -300)

    repairing(3, ["tungsten_carbide"])
        .EUt(GTValues.VA[GTValues.EV])
        .chancedInput('kubejs:reinforced_mining_laser', 1200, -200)
        .chancedInput('kubejs:reinforced_thruster', 1500, -450)
        .chancedInput('kubejs:electrum_micro_miner_core', 1800, -360)
        .chancedInput('kubejs:basic_micro_miner_guidance_system', 1000, -400)

    repairing(4, ["signalum", "tungsten_carbide"])
        .EUt(GTValues.VHA[GTValues.IV])
        .chancedInput('kubejs:reinforced_mining_laser', 1400, -250)
        .chancedInput('kubejs:energetic_thruster', 2000, -600)
        .chancedInput('kubejs:signalum_micro_miner_core', 1800, -360)
        .chancedInput('kubejs:basic_micro_miner_guidance_system', 1250, -500)

    repairing("4half", ["lumium", "tungsten_carbide"])
        .EUt(GTValues.VHA[GTValues.IV])
        .chancedInput('redstone_arsenal:flux_sword', 1400, -250)
        .chancedInput('kubejs:energetic_thruster', 1000, -300)
        .chancedInput('kubejs:signalum_micro_miner_core', 1800, -360)
        .chancedInput('kubejs:basic_micro_miner_guidance_system', 1500, -600)

    repairing(5, ["iridium", "signalum"])
        .EUt(GTValues.VA[GTValues.IV])
        .chancedInput('kubejs:supercharged_laser_array', 1200, -200)
        .chancedInput('kubejs:vibrant_thruster', 1500, -450)
        .chancedInput('kubejs:signalum_micro_miner_core', 1800, -360)
        .chancedInput('kubejs:advanced_micro_miner_guidance_system', 750, -500)

    repairing(6, ["enderium"])
        .EUt(GTValues.VHA[GTValues.LuV])
        .chancedInput('kubejs:supercharged_laser_array', 1400, -250)
        .chancedInput('kubejs:resonant_thruster', 1500, -450)
        .chancedInput('kubejs:enderium_micro_miner_core', 1800, -360)
        .chancedInput('kubejs:advanced_micro_miner_guidance_system', 1000, -400)

    repairing(7, ["cryolobus"])
        .EUt(GTValues.VA[GTValues.LuV])
        .chancedInput('kubejs:supercharged_laser_array', 2000, -300)
        .chancedInput('kubejs:bathyal_energy_core', 1000, -200)
        .chancedInput('kubejs:dark_soularium_thruster', 2000, -600)
        .chancedInput('kubejs:fluxed_thruster', 2000, -600)
        .chancedInput('kubejs:enderium_micro_miner_core', 1800, -360)
        .chancedInput('kubejs:advanced_micro_miner_guidance_system', 1250, -500)

    repairing(8, ["crystal_matrix", "tungsten_carbide", "iridium"])
        .EUt(GTValues.VA[GTValues.ZPM])
        .chancedInput('kubejs:supercharged_laser_array', 2400, -400)
        .chancedInput('kubejs:warp_engine', 1500, -450)
        .chancedInput('kubejs:warp_core', 1800, -360)
        .chancedInput('kubejs:advanced_micro_miner_guidance_system', 1500, -600)

    repairing("8half", ["trinium", "naquadah_alloy"])
        .EUt(GTValues.VA[GTValues.ZPM])
        .chancedInput('kubejs:supercharged_laser_array', 2400, -400)
        .chancedInput('kubejs:abyssal_energy_core', 2000, -400)
        .chancedInput('gtceu:zpm_emitter', 1500, -200)
        .chancedInput('kubejs:warp_engine', 1500, -450)
        .chancedInput('kubejs:warp_core', 1200, -240)
        .chancedInput('kubejs:advanced_micro_miner_guidance_system', 1500, -600)


    repairing(9, [], ["quantum_fluxed_eternium"])
        .EUt(GTValues.VA[GTValues.UV])
        .chancedInput('kubejs:hadal_energy_core', 1000, -200)
        .chancedInput('kubejs:warp_engine', 3000, -900)
        .chancedInput('kubejs:universal_warp_core', 2400, -480)
        .chancedInput('kubejs:universal_navigator', 2000, -400)

    repairing(10, [], ["universe_resistant_neutronium"])
        .EUt(GTValues.VA[GTValues.UHV])
        .chancedInput('kubejs:hadal_warp_engine', 3000, -900)
        .chancedInput('kubejs:universal_warp_core', 3000, -600)
        .chancedInput('kubejs:universal_warp_controller', 2400, -500)
        .chancedInput('kubejs:universal_navigator', 3000, -600)

    repairing(11, ["crystal_matrix"], ["elementally_infused_omnic_matrix"])
        .EUt(GTValues.VA[GTValues.UEV])
        .chancedInput('kubejs:hadal_warp_engine', 4500, -900)
        .chancedInput('kubejs:infinity_power_unit', 3000, -600)
        .chancedInput('gtceu:uev_robot_arm', 2000, -400)
        .chancedInput('kubejs:universal_warp_core', 3000, -600)
        .chancedInput('kubejs:universal_warp_controller', 2400, -500)
        .chancedInput('kubejs:universal_navigator', 3000, -600)

    repairing(12, [], ["dimensionally_stabilized_infinity", "universe_resistant_neutronium"])
        .EUt(GTValues.VA[GTValues.UIV])
        .chancedInput('kubejs:dimensional_stabilization_netherite_casing', 6000, -1200)
        .chancedInput('kubejs:field_stabilised_omnic_pulsar_compound', 5000, -1000)
        .chancedInput('kubejs:hadal_warp_engine', 4500, -1200)
        .chancedInput('kubejs:infinity_power_unit', 4500, -900)
        .chancedInput('kubejs:extradimensional_navigator', 4000, -600)
        .chancedInput('solarflux:sp_custom_infinity', 2500, -400)
})