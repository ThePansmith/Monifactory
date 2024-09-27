ServerEvents.recipes(event => {
    // only hard mode gets a gregified recipe
    if (isHardMode) {
        event.remove({ id: 'buildinggadgets2:gadget_exchanging' })
        event.shaped(
            'buildinggadgets2:gadget_exchanging', [
            'PE',
            'CM',
            'PB'
        ], {
            M: '#forge:plates/glass',
            P: 'gtceu:iron_plate',
            E: 'gtceu:iv_emitter',
            C: '#gtceu:circuits/mv',
            B: '#gtceu:batteries/lv'
        }
        )
    }
})
