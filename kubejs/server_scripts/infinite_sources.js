ServerEvents.recipes(event => {
    event.remove({ id: "watercollector:watercollector" })
    event.remove({ id: "thermal:device_water_gen" })
    event.remove({ id: "thermal:device_rock_gen" })

    if (isNormalMode) {
        event.shaped(
            "watercollector:watercollector", [
                "AAA",
                "B B",
                "AAA"
            ], {
                A: "gtceu:wrought_iron_plate",
                B: "minecraft:water_bucket"
            }
        )
        event.shaped(
            "thermal:device_water_gen", [
                ' B ',
                'CWC',
                'GSG'
            ], {
                G: "#forge:gears/iron",
                B: "minecraft:bucket",
                W: "watercollector:watercollector",
                S: "enderio:fused_quartz",
                C: "#forge:ingots/copper"
            }
        ).id('kubejs:device_water_gen');
        event.shaped(
            "thermal:device_rock_gen", [
                ' P ',
                'PNP',
                'GHG'
            ], {
                G: "#forge:gears/iron",
                P: "#forge:plates/steel",
                N: "#forge:pistons",
                H: "minecraft:hopper"
            }
        ).id('kubejs:device_rock_gen');
    } else {
        event.shaped(
            "thermal:device_water_gen", [
                ' B ',
                'CWC',
                'GSG'
            ], {
                G: "#forge:gears/iron",
                B: "minecraft:bucket",
                W: "#enderio:fused_quartz",
                S: "thermal:redstone_servo",
                C: "#forge:ingots/copper"
            }
        ).id('kubejs:device_water_gen');
        event.shaped(
            "thermal:device_rock_gen", [
                ' P ',
                'INI',
                'GSG'
            ], {
                G: "#forge:gears/iron",
                S: "thermal:redstone_servo",
                P: "#forge:plates/steel",
                I: "#forge:plates/invar",
                N: "#forge:pistons"
            }
        ).id('kubejs:device_rock_gen');
    }

    //Infinite Cobble/Water cells
    event.remove({ id: 'expatternprovider:water_cell' })
    event.recipes.gtceu.assembler("kubejs:infinite_water_cell")
            .itemInputs("3x #forge:plates/mythril", "3x minecraft:water_bucket", "ae2:cell_component_16k", "2x ae2:quartz_vibrant_glass")
            .itemOutputs(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:f",id:"minecraft:water"}}'))
            .duration(800)
            .EUt(512)

    event.remove({ id: 'expatternprovider:cobblestone_cell' })
    event.recipes.gtceu.assembler("kubejs:infinite_cobblestone_cell")
            .itemInputs("3x #forge:plates/mythril", "2x minecraft:water_bucket", "1x minecraft:lava_bucket", "ae2:cell_component_16k", "2x ae2:quartz_vibrant_glass")
            .itemOutputs(Item.of('expatternprovider:infinity_cell', '{record:{"#c":"ae2:i",id:"minecraft:cobblestone"}}'))
            .duration(800)
            .EUt(512)

})