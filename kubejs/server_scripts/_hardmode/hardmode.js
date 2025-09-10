/** THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE */

ServerEvents.recipes(event => {
    if (!doHNN) {
        event.remove({ id: /hostilenetworks/ })

        // Mixer for recipes that fit in singleblocks
        const xpjuice_small = [
            ["enderio:pulsating_powder", 6720],
            ["enderio:vibrant_powder", 8960],
            ["kubejs:grains_of_innocence", 16000]
        ]

        for (const [input, output] of xpjuice_small) {
            event.recipes.gtceu.mixer(`kubejs:xpjuice_${output}`)
                .inputFluids(Fluid.of("gtceu:mana", 250))
                .itemInputs(input)
                .outputFluids(Fluid.of("enderio:xp_juice", output))
                .EUt(GTValues.VA[GTValues.HV])
                .duration(100)
        }

        // LCR needed for larger recipes
        const xpjuice_large = [
            ["enderio:ender_crystal_powder", 35840],
            ["enderio:prescient_powder", 44800]
        ]

        for (const [input, output] of xpjuice_large) {
            event.recipes.gtceu.large_chemical_reactor(`kubejs:xpjuice_${output}`)
                .inputFluids(Fluid.of("gtceu:mana", 500))
                .itemInputs(input)
                .outputFluids(Fluid.of("enderio:xp_juice", output))
                .EUt(GTValues.VA[GTValues.EV])
                .duration(100)
        }
    }

    if (doHarderRecipes) {
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

    if (doMeowniPlush) {
        event.recipes.gtceu.forming_press("kubejs:meowni_plush")
            .itemInputs("64x kubejs:moni_dollar", "64x kubejs:moni_dollar", "64x kubejs:moni_dollar", "16x kubejs:moni_dollar",) // Not exact atm, I don't run linux (so i cant use the awk script) and this value is gonna change regardless.
            .itemOutputs("kubejs:meowni_plush")
            .duration(2000)
            .EUt(65520)
    }

    if (!doMonicoins) {
        event.remove({ id: "bountiful:crafting/bountyboard" })
        event.remove({ id: "bountiful:crafting/decree" })
    }
})
