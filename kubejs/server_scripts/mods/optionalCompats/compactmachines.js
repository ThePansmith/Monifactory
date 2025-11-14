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
        const machineSizes = [
            { size: "tiny", material: "#forge:storage_blocks/copper" },
            { size: "small", material: "#forge:storage_blocks/iron" },
            { size: "normal", material: "#forge:storage_blocks/gold" },
            { size: "large", material: "minecraft:obsidian" },
            { size: "giant", material: "#forge:storage_blocks/diamond" },
            { size: "maximum", material: "#forge:storage_blocks/netherite" },
        ]

        machineSizes.forEach((value, index) => {
            event.recipes.gtceu.assembler(`compactmachines:machine_${value.size}`)
                .itemInputs(Item.of("compactmachines:wall", 4 * (index + 1)), (index > 2 ? "gtceu:tungsten_frame" : "gtceu:steel_frame"), value.material, `2x gtceu:${GTValues.VN[index + 1].toLowerCase()}_field_generator`, (index > 2 ? Item.of("gtceu:quantum_eye", 2 ** (index - 2)) : Item.of("minecraft:ender_eye", 2 ** index)))
                .inputFluids(`gtceu:styrene_butadiene_rubber ${144 * (index + 1)}`)
                .itemOutputs(`compactmachines:machine_${value.size}`)
                .duration(200)
                .EUt(GTValues.VA[index + 1])
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
                .itemInputs("2x compactmachines:wall", value.hatch, "gtceu:quantum_eye")
                .itemOutputs(Item.of("compactmachines:tunnel", 2, value.nbt))
                .duration(100)
                .EUt(GTValues.VHA[GTValues.HV])
        })

    })
    console.log("Compact Machines compat scripts successfully loaded!")
} else { console.log("Compact Machines not found, skipping its compat scripts.") }
