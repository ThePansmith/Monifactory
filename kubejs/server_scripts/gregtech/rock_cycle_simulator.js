/**
 * Rock Cycle Simulator multiblock
 */
ServerEvents.recipes(event => {

    // Recipe
    event.shaped("gtceu:rock_cycle_simulator", [
        "PMP",
        "CHC",
        "UWU"
    ], {
        P: "gtceu:iv_electric_piston",
        C: "#gtceu:circuits/iv",
        U: "gtceu:iv_electric_pump",
        M: "gtceu:iv_electric_motor",
        W: "gtceu:platinum_single_cable",
        H: "gtceu:iv_rock_crusher"
    }).id("kubejs:shaped/rock_cycle_simulator")

    // Recipe Function
    function RockCycle(id, input, output, EUt) {
        event.recipes.gtceu.rock_cycle_simulator(`kubejs:${id}`)
            .notConsumable(Item.of(input))
            .itemOutputs(output)
            .duration(16)
            .EUt(EUt)
    }

    RockCycle("stone", "minecraft:stone", "minecraft:stone", 7)
    RockCycle("cobble", "minecraft:cobblestone", "minecraft:cobblestone", 7)
    RockCycle("diorite", "minecraft:diorite", "minecraft:diorite", 60)
    RockCycle("andesite", "minecraft:andesite", "minecraft:andesite", 60)
    RockCycle("granite", "minecraft:granite", "minecraft:granite", 60)
    RockCycle("basalt", "minecraft:basalt", "minecraft:basalt", 240)
    RockCycle("blackstone", "minecraft:blackstone", "minecraft:blackstone", 240)
    RockCycle("obsidian", "minecraft:redstone", "minecraft:obsidian", 240)
    RockCycle("marble", "gtceu:marble", "gtceu:marble", 240)
    RockCycle("red_granite", "gtceu:red_granite", "gtceu:red_granite", 960)
    RockCycle("deepslate", "minecraft:deepslate", "minecraft:deepslate", 960)
    RockCycle("calcite", "minecraft:calcite", "minecraft:calcite", 60)
    RockCycle("tuff", "minecraft:tuff", "minecraft:tuff", 60)
    RockCycle("jasper", "quark:jasper", "quark:jasper", 60)
    RockCycle("limestone", "quark:limestone", "quark:limestone", 60)
    RockCycle("permafrost", "quark:permafrost", "quark:permafrost", 60)
    RockCycle("shale", "quark:shale", "quark:shale", 60)
    RockCycle("myalite", "quark:myalite", "quark:myalite", 60)

    // Ad Astra Recipe Function
    function AdAstraRockCycle(id, input, output, EUt, dimension) {
        event.recipes.gtceu.rock_cycle_simulator(`kubejs:${id}`)
            .notConsumable(Item.of(input))
            .itemOutputs(output)
            .duration(16)
            .EUt(EUt)
            .dimension(dimension)
    }

    AdAstraRockCycle("moonstone", "ad_astra:moon_stone", "ad_astra:moon_stone", 240, "ad_astra:moon")
    AdAstraRockCycle("moondeepslate", "ad_astra:moon_deepslate", "ad_astra:moon_deepslate", 240, "ad_astra:moon")
    AdAstraRockCycle("marsstone", "ad_astra:mars_stone", "ad_astra:mars_stone", 240, "ad_astra:mars")
    AdAstraRockCycle("conglomerate", "ad_astra:conglomerate", "ad_astra:conglomerate", 240, "ad_astra:mars")
    AdAstraRockCycle("venusstone", "ad_astra:venus_stone", "ad_astra:venus_stone", 960, "ad_astra:venus")
    AdAstraRockCycle("infernalspireblock", "ad_astra:infernal_spire_block", "ad_astra:infernal_spire_block", 960, "ad_astra:venus")
    AdAstraRockCycle("mercurystone", "ad_astra:mercury_stone", "ad_astra:mercury_stone", 960, "ad_astra:mercury")
    AdAstraRockCycle("glaciostone", "ad_astra:glacio_stone", "ad_astra:glacio_stone", 2160, "ad_astra:glacio")
    AdAstraRockCycle("permafrostadastra", "ad_astra:permafrost", "ad_astra:permafrost", 2160, "ad_astra:glacio")

})
