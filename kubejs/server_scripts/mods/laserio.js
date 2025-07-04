/**
 * Custom recipes for the LaserIO mod
 */

ServerEvents.recipes(event => {
    // Disable LIO transportation in Expert (Cards are used in recipes)
    if (!doLaserIO) {
        event.remove({ id: /laserio:laser_/ })
        event.remove({ id: /laserio:card_/ })
    }

    // Harder recipes in Hard Mode
    const cardChip = doHarderRecipes ? "#gtceu:circuits/lv" : "#gtceu:circuits/ulv"

    // Replace Logic chips with circuits.
    event.remove({ output: ["laserio:logic_chip_raw", "laserio:logic_chip"] })
    event.replaceInput({ mod: "laserio", not: [{ id: "laserio:card_item" }, { id: "laserio:card_fluid" }, { id: "laserio:card_energy" }, { id: "laserio:card_redstone" }] }, "laserio:logic_chip", cardChip)

    const Cards = [
        ["item", "gtceu:pulsating_alloy_plate"],
        ["fluid", "gtceu:lazurite_plate"],
        ["energy", "gtceu:gold_plate"],
        ["redstone", "gtceu:red_alloy_plate"]
    ]

    if (doLaserIO) {
        // Cards
        Cards.forEach(card => {
            event.shaped(`laserio:card_${card[0]}`, [
                "TNT",
                "TCT",
                "GGG"
            ], {
                N: card[1],
                C: cardChip,
                G: "minecraft:gold_nugget",
                T: "gtceu:tin_plate"
            }).id(`laserio:card_${card[0]}`)
        })

        // Overclockers
        event.remove({ output: ["laserio:overclocker_card", "laserio:overclocker_node"] })
        event.shaped("laserio:overclocker_card", [
            "E",
            "P",
            "A"
        ], {
            E: "#forge:double_plates/electrical_steel",
            P: "#forge:plates/electrum",
            A: "ae2:basic_card"
        })
        event.shaped("laserio:overclocker_node", [
            "E",
            "P",
            "A"
        ], {
            E: "#forge:double_plates/electrical_steel",
            P: "enderio:pulsating_crystal",
            A: "ae2:advanced_card"
        })

        // Laser Connectors
        event.shaped("4x laserio:laser_connector", [
            " E ",
            "RRR",
            "SSS"
        ], {
            S: "gtceu:steel_plate",
            E: "gtceu:glass_tube",
            R: "gtceu:red_alloy_plate"
        }).id("laserio:laser_connector")
        event.shaped("laserio:laser_node", [
            "PGP",
            "GRG",
            "PGP"
        ], {
            P: "gtceu:steel_plate",
            G: "#forge:glass_panes/colorless",
            R: "laserio:laser_connector"
        }).id("laserio:laser_node")

        event.shaped("2x laserio:laser_connector_advanced", [
            " E ",
            "RCR",
            "FFF"
        ], {
            F: "gtceu:electrum_flux_plate",
            E: "gtceu:ev_emitter",
            C: "#gtceu:circuits/iv",
            R: "gtceu:red_alloy_plate"
        }).id("laserio:laser_connector_advanced")
    }


    // Energy Overclockers  //
    let overclocker_mats = [
        ["conductive", "conductive_alloy"],
        ["energetic", "energetic_alloy"],
        ["vibrant", "vibrant_alloy"],
        ["endsteel", "end_steel"],
        ["lumium", "lumium"],
        ["signalum", "signalum"],
        ["enderium", "enderium"],
        ["cryolobus", "cryolobus"],
        ["sculk_superconductor", "sculk_superconductor"]
    ]

    overclocker_mats.forEach((value, index) => {
        if(index == 0) {
            event.shaped(`3x laserio:energy_overclocker_card_tier_${index + 1}`, [
                "AAA",
                "BBB",
                "AAA"
            ], {
                A: "gtceu:iron_plate",
                B: `gtceu:${value[1]}_double_wire`
            }).id(`kubejs:${value[0]}_card`)

            event.recipes.gtceu.assembler(`kubejs:${value[0]}_card`)
                .itemInputs(`3x gtceu:${value[1]}_double_wire`, "6x gtceu:iron_plate")
                .itemOutputs(`4x laserio:energy_overclocker_card_tier_${index + 1}`)
                .duration(80)
                .EUt(GTValues.VHA[Math.floor(index / 2) + 1])
        } else {
            event.shaped(`3x laserio:energy_overclocker_card_tier_${index + 1}`, [
                "AAA",
                "BCB",
                "AAA"
            ], {
                A: "gtceu:iron_plate",
                B: `gtceu:${value[1]}_double_wire`,
                C: `laserio:energy_overclocker_card_tier_${index}`
            }).id(`kubejs:${value[0]}_card`)

            event.recipes.gtceu.assembler(`kubejs:${value[0]}_card`)
                .itemInputs(`2x gtceu:${value[1]}_double_wire`, `laserio:energy_overclocker_card_tier_${index}`, "6x gtceu:iron_plate")
                .itemOutputs(`4x laserio:energy_overclocker_card_tier_${index + 1}`)
                .duration(80)
                .EUt(GTValues.VHA[Math.floor(index / 2) + 1])
        }
    })
})
