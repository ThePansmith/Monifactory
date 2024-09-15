ServerEvents.recipes(event => {
    //Disable in Hard Mode
    if (isHarderMode) {
        event.remove({ output: /laserio/ })
        return
    } 

    //LaserIO is not to be used for Energy or wireless transport.
    event.remove({ output: ['laserio:card_energy', 'laserio:laser_connector_advanced'] })
    
    //Replace Logic chips with circuits.
    event.remove({ output: ['laserio:logic_chip_raw', 'laserio:logic_chip'] })
    event.replaceInput({ id: /laserio/ }, 'laserio:logic_chip', '#gtceu:circuits/lv')

    //Laser Connector
    event.remove({ output: 'laserio:laser_connector' })
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

    //Overclockers
    event.remove({ output: ['laserio:overclocker_card', 'laserio:overclocker_node']})
    event.shaped(
        "laserio:overclocker_card", [
            "E",
            "P",
            "A"
        ], {
            E: '#forge:double_plates/electrical_steel',
            P: '#forge:plates/electrum',
            A: 'ae2:basic_card'
        }
    )
    event.shaped(
        "laserio:overclocker_node", [
            "E",
            "P",
            "A"
        ], {
            E: '#forge:double_plates/electrical_steel',
            P: 'enderio:pulsating_crystal',
            A: 'ae2:advanced_card'
        }
    )
})