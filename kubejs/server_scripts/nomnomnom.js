/**
 * meme change of EBF recipe in Insanity Mode
 */

if(doComplexProcessing) {
    /** Nomnomnmonmonmonom */
    ServerEvents.recipes(event => {
        event.remove({ id: "gtceu:shaped/electric_blast_furnace"})

        // Nomnomonmonmonmeowww
        event.recipes.gtceu.shaped("gtceu:electric_blast_furnace", [
            "FFF",
            "MIM",
            "TMT"
        ], {
            F: "gtceu:lv_electric_furnace",
            M: "#gtceu:circuits/mv",
            I: "gtceu:heatproof_machine_casing",
            T: "gtceu:tin_single_cable"
        }).id("gtceu:shaped/electric_blast_furnace")

        // NOOOOM
        event.remove({ type: "gtceu:primitive_blast_furnace", input: "minecraft:iron_ingot"})
        event.remove({ type: "gtceu:primitive_blast_furnace", input: "#forge:storage_blocks/iron"})
    })
}
