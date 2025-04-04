/** THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE */

ServerEvents.recipes(event => {
    if (isHardMode) {

        event.remove({ id: /hostilenetworks/ })

        const xpjuice = [
            ["enderio:pulsating_powder", 2240],
            ["enderio:vibrant_powder", 4480],
            ["kubejs:grains_of_innocence", 17920],
            ["enderio:prescient_powder", 35840],
            ["enderio:ender_crystal_powder", 44800],
        ]

        for (const [input, output] of xpjuice) {
            event.recipes.gtceu.mixer(`kubejs:xpjuice_${output}`)
                .inputFluids(Fluid.of("gtceu:mana", 250))
                .itemInputs(input)
                .outputFluids(Fluid.of("enderio:xp_juice", output))
                .EUt(480)
                .duration(100)
        }

        event.remove({ output: "systeams:stirling_boiler" })
        event.remove({ id: "bountiful:crafting/bountyboard" })

        event.shaped("thermal:dynamo_numismatic", [
            " A ",
            "BCB",
            "DED"
        ], {
            A: "kubejs:excitationcoil",
            B: "gtceu:zeron_100_plate",
            C: "ironfurnaces:diamond_furnace",
            D: "enderio:vibrant_gear",
            E: "kubejs:redstone_transmission_coil"
        })

        event.remove({ id: "gtceu:large_chemical_reactor/radon_from_uranium_238" })
        event.remove({ id: "gtceu:electric_blast_furnace/blast_cryolobus_gas" })
        event.remove({ id: "gtceu:circuit_assembler/wetware_board" })
        event.remove({ id: "enderio:stick" })

        event.recipes.gtceu.omnic_forge("kubejs:meowni_plush")
            .itemInputs("64x kubejs:moni_dollar", "64x kubejs:moni_dollar", "64x kubejs:moni_dollar", "16x kubejs:moni_dollar",) // Not exact atm, I don't run linux (so i cant use the awk script) and this value is gonna change regardless.
            .itemOutputs("kubejs:meowni_plush")
            .duration(2000)
            .EUt(65520)

        // Mob Heads
        event.shaped("minecraft:skeleton_skull", [
            " A ",
            "ABA",
            " A "
        ], {
            A: "minecraft:bone",
            B: "kubejs:solidified_experience"
        })

        event.shaped("minecraft:wither_skeleton_skull", [
            " A ",
            "ABA",
            " A "
        ], {
            A: "kubejs:wither_bone",
            B: "kubejs:solidified_experience"
        })

        event.shaped("minecraft:zombie_head", [
            " A ",
            "ABA",
            " A "
        ], {
            A: "minecraft:rotten_flesh",
            B: "minecraft:skeleton_skull"
        })

        event.shaped("minecraft:creeper_head", [
            " A ",
            "ABA",
            " A "
        ], {
            A: "minecraft:gunpowder",
            B: "minecraft:skeleton_skull"
        })

        event.shaped("minecraft:dragon_head", [
            " A ",
            "ABA",
            " A "
        ], {
            A: "kubejs:ender_dragon_scale",
            B: "kubejs:solidified_experience"
        })

        event.shaped("enderio:enderman_head", [
            " A ",
            "ABA",
            " A "
        ], {
            A: "minecraft:ender_pearl",
            B: "minecraft:skeleton_skull"
        })
    }
})
