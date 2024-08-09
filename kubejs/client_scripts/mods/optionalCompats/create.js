if (Platform.isLoaded('create')) {
    let decor = ['create:millstone', 'create:mechanical_mixer', 'create:mechanical_press', 'create:crushing_wheel']
    
    ItemEvents.tooltip(event => {
        decor.forEach(id => {
            event.addAdvanced(id, (item, advanced, text) => {
                text.add(Text.darkRed('USES DISABLED'))
                text.add(Text.darkRed('PURELY DECOR'))
            })
        })
    })

    ItemEvents.tooltip(event => {
        event.addAdvanced(/.*kinetic_mixer.*/, (item, advanced, text) => {
            text.add(Text.aqua('got you curious?'))
            text.add(Text.darkRed('too bad.'))
        })
    }) 
}