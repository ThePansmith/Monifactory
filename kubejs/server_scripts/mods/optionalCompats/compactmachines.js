/**
 * Optional compat script for Compact Machines
 *
 * Modeled after Nomifactory CEu's script for the same.
 * Gated to HV, with more unlocked at IV.
 *
 * Replaces or modifies the recipe for every item in the mod.
 */
if (Platform.isLoaded("compactmachines")) {
    console.log("Compact Machines found, loading compat scripts...")
    ServerEvents.recipes(event => {

        // Recipe modification for Personal Shrinking Device
        event.replaceInput({ id: "compactmachines:personal_shrinking_device" }, "#forge:glass_panes", "gtceu:computer_monitor_cover")

        // Compact Machine Wall recipes. HV recipe + more efficient EV recipe
        event.remove({ output: "compactmachines:wall" })
        event.recipes.gtceu.assembler("compactmachines:wall")
            .itemInputs("9x gtceu:blue_steel_plate", "1x gtceu:ultimet_frame", "1x gtceu:mv_sensor")
            .itemOutputs("4x compactmachines:wall")
            .duration(40)
            .EUt(GTValues.VHA[GTValues.HV])
        event.recipes.gtceu.assembler("compactmachines:wall_alt")
            .itemInputs("9x gtceu:maraging_steel_300_plate", "2x gtceu:ultimet_frame", "1x gtceu:hv_sensor")
            .itemOutputs("16x compactmachines:wall")
            .duration(40)
            .EUt(GTValues.VHA[GTValues.IV])

        // Recipes for all tiers of Compact Machine
        const machineSizes = ["tiny", "small", "normal", "large", "giant", "maximum"]

        const framesByIndex = ["stainless_steel", "titanium", "tungsten_steel", "ruridit", "iridium", "naquadah_alloy"]
        const platesByIndex = ["stainless_steel", "titanium", "tungsten_steel", "rhodium_plated_palladium", "naquadah_alloy", "darmstadtium"]

        const plasticForTier = tier => {
            if (tier <= GTValues.EV) return "polyethylene"
            if (tier <= GTValues.LuV) return "polytetrafluoroethylene"
            return "polybenzimidazole"
        }

        machineSizes.forEach((size, index) => {
            const tier = GTValues.HV + index
            const tierName = GTValues.VN[tier].toLowerCase()
            event.recipes.gtceu.assembler(`compactmachines:machine_${size}`)
                .itemInputs(
                    Item.of("compactmachines:wall", 4 * (index + 1)),
                    `gtceu:${framesByIndex[index]}_frame`,
                    `gtceu:${platesByIndex[index]}_plate`,
                    `2x gtceu:${tierName}_field_generator`,
                    `2x gtceu:${tierName}_emitter`
                )
                .inputFluids(`gtceu:${plasticForTier(tier)} ${144 * (index + 1)}`)
                .itemOutputs(`compactmachines:machine_${size}`)
                .duration(200)
                .EUt(GTValues.VA[tier])
        })

        // Recipes for tunnels
        const tunnelTypes = [
            { type: "item", hatch: "gtceu:hv_item_passthrough_hatch", nbt: '{definition:{id:"compactmachines:item"}}' },
            { type: "fluid", hatch: "gtceu:hv_fluid_passthrough_hatch", nbt: '{definition:{id:"compactmachines:fluid"}}' },
            { type: "energy", hatch: "gtceu:hv_diode", nbt: '{definition:{id:"compactmachines:energy"}}' },
            // {type: "redstone", hatch: "ae2:redstone_p2p", nbt: '{definition:{id:"compactmachines:redstone"}}'}    // Redstone tunnel NYI :(
        ]

        tunnelTypes.forEach(value => {
            event.remove({ id: `compactmachines:tunnels/${value.type}` })
            event.recipes.gtceu.assembler(`compactmachines:tunnel_${value.type}`)
                .itemInputs("2x compactmachines:wall", value.hatch, "minecraft:ender_eye")
                .itemOutputs(Item.of("compactmachines:tunnel", 2, value.nbt))
                .duration(100)
                .EUt(GTValues.VHA[GTValues.HV])
        })

    })
    console.log("Compact Machines compat scripts successfully loaded!")
} else { console.log("Compact Machines not found, skipping its compat scripts.") }
