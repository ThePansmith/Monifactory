/**
 * Compat for the computercraft addon Advanced Peripherals
 */

const modid = "advancedperipherals"

if (Platform.isLoaded(modid) && Platform.isLoaded("computercraft")) {
    console.log("Advanced peripherals found, loading compat scripts...")
    ServerEvents.recipes(event => {
        const replaceRecipe = (output, shape, dictionary) => {
            const id = `${modid}:${output}`
            event.remove({ id: id })
            event.shaped(id, shape, dictionary)
        }

        replaceRecipe("peripheral_casing", [
            "CMC",
            "SLS",
            "CMC"
        ], {
            C: "computercraft:cable",
            M: "computercraft:wired_modem",
            S: "#gtceu:circuits/mv",
            L: "gtceu:mv_machine_hull"
        })

        replaceRecipe("chat_box", [
            "BEB",
            "PCP",
            "ASA"
        ], {
            B: "minecraft:book",
            E: "gtceu:mv_emitter",
            P: "minecraft:ender_pearl",
            C: `${modid}:peripheral_casing`,
            A: "minecraft:paper",
            S: "gtceu:mv_sensor"
        })

        replaceRecipe("energy_detector", [
            "C C",
            "TPT",
            "C C"
        ], {
            C: "gtceu:copper_single_cable",
            T: "gtceu:mv_transformer_1a",
            P: `${modid}:peripheral_casing`
        })

        event.remove({ id: `${modid}:environment_detector` })
        const envDetectorRecipe = (plate) => {
            event.shaped(`${modid}:environment_detector`, [
                "PSP",
                "SCS",
                "DSD"
            ], {
                P: plate,
                S: "gtceu:lv_sensor",
                C: `${modid}:peripheral_casing`,
                D: "minecraft:dirt"
            })
        }
        envDetectorRecipe("gtceu:nether_quartz_plate")
        envDetectorRecipe("gtceu:certus_quartz_plate")
        envDetectorRecipe("gtceu:quartzite_plate")

        replaceRecipe("player_detector", [
            "OSO",
            "PCP",
            "MSM"
        ], {
            O: "minecraft:observer",
            S: "gtceu:mv_sensor",
            P: "minecraft:ender_pearl",
            C: `${modid}:peripheral_casing`,
            M: "minecraft:smooth_stone"
        })

        replaceRecipe("inventory_manager", [
            "WEW",
            "RPR",
            "FCF"
        ], {
            W: "ae2:wireless_receiver",
            E: "minecraft:ender_pearl",
            R: "gtceu:hv_robot_arm",
            P: `${modid}:peripheral_casing`,
            F: "gtceu:hv_field_generator",
            C: "minecraft:chest"
        })

        replaceRecipe("block_reader", [
            "PSP",
            "ECM",
            "PSP"
        ], {
            P: "gtceu:steel_plate",
            S: "gtceu:steel_screw",
            E: "gtceu:mv_emitter",
            C: `${modid}:peripheral_casing`,
            M: "gtceu:mv_sensor"
        })

        replaceRecipe("nbt_storage", [
            "PMP",
            "SRS",
            "PCP"
        ], {
            P: "gtceu:steel_plate",
            M: "computercraft:wired_modem",
            S: "#gtceu:circuits/mv",
            R: `${modid}:peripheral_casing`,
            C: "minecraft:chest"
        })

        replaceRecipe("geo_scanner", [
            "SPS",
            "CRC",
            "SDS"
        ], {
            S: "gtceu:steel_screw",
            P: "gtceu:prospector.lv",
            C: "#gtceu:circuits/mv",
            R: `${modid}:peripheral_casing`,
            D: "minecraft:diamond"
        })

        replaceRecipe("me_bridge", [
            "GIG",
            "SCS",
            "GTG"
        ], {
            G: "ae2:fluix_glass_cable",
            I: "ae2:interface",
            S: "#gtceu:circuits/mv",
            C: `${modid}:peripheral_casing`,
            T: "ae2:pattern_provider"
        })
    })
    console.log("Advacned peripherals compat scripts successfully loaded!")
} else { console.log("Advanced peripherals not found, skipping compat scripts. ") }
