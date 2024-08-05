ServerEvents.recipes(event => {

    // Ultimate Material
    event.recipes.gtceu.assembly_line("kubejs:the_ultimate_material")
        .itemInputs('kubejs:warden_heart', '4x kubejs:guardian_scale', '8x kubejs:wither_bone', '12x kubejs:ender_dragon_scale')
        .itemOutputs('kubejs:the_ultimate_material')
        .duration(600)
        .EUt(491520)

        .stationResearch(b => b
            .researchStack('kubejs:warden_heart')
            .CWUt(96, 384000)
            .EUt(491520)
        )
});
