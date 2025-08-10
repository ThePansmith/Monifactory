/**
 * Custom recipes for the Building Gadgets mod
 */
ServerEvents.recipes(event => {
    if (doHarderRecipes) {
        event.remove({ id: /buildinggadgets2/ })
        // Template Manager
        event.shaped("buildinggadgets2:template_manager", [
            "PMP",
            "CGC",
            "PLP"
        ], {
            M: "minecraft:paper",
            P: "gtceu:iron_plate",
            G: "gtceu:restonia_gem",
            C: "#gtceu:circuits/mv",
            L: "#forge:plates/lapis"
        })
        // Gadgets
        event.shaped("buildinggadgets2:gadget_building", [
            "PE",
            "CM",
            "PB"
        ], {
            M: "#forge:plates/glass",
            P: "gtceu:iron_plate",
            E: "gtceu:lv_emitter",
            C: "#gtceu:circuits/lv",
            B: "#gtceu:batteries/lv"
        })

        event.shaped("buildinggadgets2:gadget_exchanging", [
            "PE",
            "CM",
            "PB"
        ], {
            M: "#forge:plates/glass",
            P: "gtceu:iron_plate",
            E: "gtceu:mv_emitter",
            C: "#gtceu:circuits/mv",
            B: "#gtceu:batteries/lv"
        })
        event.shaped("buildinggadgets2:gadget_copy_paste", [
            "SE",
            "CM",
            "PB"
        ], {
            M: "#forge:plates/glass",
            P: "gtceu:iron_plate",
            E: "gtceu:lv_emitter",
            S: "gtceu:lv_sensor",
            C: "#gtceu:circuits/mv",
            B: "#gtceu:batteries/mv"
        })
        event.shaped("buildinggadgets2:gadget_cut_paste", [
            "SE",
            "CM",
            "PB"
        ], {
            M: "#forge:plates/glass",
            P: "gtceu:steel_plate",
            E: "gtceu:lv_emitter",
            S: "gtceu:lv_sensor",
            C: "#gtceu:circuits/lv",
            B: "#gtceu:batteries/hv"
        })
        event.shaped("buildinggadgets2:gadget_destruction", [
            "PE",
            "CM",
            "PB"
        ], {
            M: "#forge:plates/glass",
            P: "gtceu:steel_plate",
            E: "gtceu:lv_emitter",
            C: "#gtceu:circuits/lv",
            B: "#gtceu:batteries/mv"
        })
    } else {
        // Slight nerf in NM because its stupid good for mining lol
        event.remove({ id: "buildinggadgets2:gadget_exchanging" })
        event.shaped("buildinggadgets2:gadget_exchanging", [
            "PE",
            "CM",
            "PB"
        ], {
            M: "#forge:plates/glass",
            P: "gtceu:iron_plate",
            E: "gtceu:lv_emitter",
            C: "#gtceu:circuits/mv",
            B: "#gtceu:batteries/lv"
        })
    }
})
