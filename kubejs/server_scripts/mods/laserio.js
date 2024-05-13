ServerEvents.recipes(event => {
    
    event.remove({ output: "laserio:laser_connector" })
    event.shaped(
        "4x laserio:laser_connector", [
            " E ",
            "RCR",
            "SSS"
        ], {
            S: 'gtceu:steel_plate',
            E: 'gtceu:lv_emitter',
            C: '#gtceu:circuits/mv',
            R: 'gtceu:red_alloy_plate'
        }
    )

    event.replaceInput({ id: /laserio/ }, 'laserio:logic_chip', '#gtceu:circuits/lv')
})