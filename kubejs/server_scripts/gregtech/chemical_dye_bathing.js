ServerEvents.recipes(event => {
    const dye_table = [
        "white_dye",
        "light_gray_dye",
        "gray_dye",
        "black_dye",
        "brown_dye",
        "red_dye",
        "orange_dye",
        "yellow_dye",
        "lime_dye",
        "green_dye",
        "cyan_dye",
        "light_blue_dye",
        "blue_dye",
        "purple_dye",
        "magenta_dye",
        "pink_dye"
    ]

    dye_table.forEach((dye_name) => {
        var minecraft_dye = "minecraft:" + dye_name
        var gt_fluid_dye = "gtceu:" + dye_name
        event.recipes.gtceu.chemical_bath("dye_bathing_" + dye_name)
            .inputFluids(gt_fluid_dye + " 72")
            .itemInputs("1x minecraft:slime_ball")
            .itemOutputs("1x " + minecraft_dye)
            .duration(160)
            .EUt(GTValues.VA[GTValues.LV])
    })
})