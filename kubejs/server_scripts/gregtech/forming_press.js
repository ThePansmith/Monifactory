/**
 * Additional forming press recipes.
 */

ServerEvents.recipes(event => {
    const materials = [
        "aluminium",
        "iron",
        "titanium",
        "neutronium",
        "duranium",
        "bronze",
        "diamond",
        "invar",
        "sterling_silver",
        "rose_gold",
        "stainless_steel",
        "steel",
        "ultimet",
        "wrought_iron",
        "tungsten_carbide",
        "damascus_steel",
        "tungsten_steel",
        "cobalt_brass",
        "vanadium_steel",
        "naquadah_alloy",
        "red_steel",
        "blue_steel",
        "hsse"
    ]

    materials.forEach((materialName) => {
        event.recipes.gtceu.forming_press(`${materialName}_drill_head`)
            .itemInputs("2x gtceu:double_steel_plate", `4x gtceu:${materialName}_plate`)
            .itemOutputs(`gtceu:${materialName}_drill_head`)
            .duration(500)
            .EUt(GTValues.VA[GTValues.MV])
    })
})
