ServerEvents.recipes(event => {
    event.shaped(
        'shrink:shrinking_device', [
        'PFP',
        'ETS',
        'PPP'
    ], {
        P: 'gtceu:steel_plate',
        S: 'gtceu:lv_sensor',
        E: 'gtceu:lv_emitter',
        F: 'gtceu:lv_field_generator',
        T: 'gtceu:terminal'
    }).id("kubejs:shrink/shrinking_device")
})