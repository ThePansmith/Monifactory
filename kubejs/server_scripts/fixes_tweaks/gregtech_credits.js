/*
Creates Forming Press recipes for all tiers of Gregtech Credits,
replacing the singular one for Cupronickel.
*/
ServerEvents.recipes(event => {
    // Remove the one forming press recipe for Cupronickel
    event.remove({ id: 'gtceu:forming_press/credit_cupronickel' })

    const metals = [
        'copper',
        'cupronickel',
        'silver',
        'gold',
        'platinum',
        'osmium',
        'naquadah',
        'neutronium'
    ]

    for (let index = 0; index < metals.length; index++) {
        // Total energy cost (default 1600 EU for Cupronickel)
        let energyIn = 1600 * Math.pow(4, index);

        // Create recipes for all coin types
        event.recipes.gtceu.forming_press(`gtceu:forming_press/${metals[index]}_credit`)
            .notConsumable('gtceu:credit_casting_mold')
            .itemInputs(`gtceu:${metals[index]}_plate`)
            .itemOutputs(`4x gtceu:${metals[index]}_credit`)
            .EUt(energyIn / (20 * 5))
            .duration(20 * 5)
    }
})
