ServerEvents.recipes(event => {
    //Disable in Hard Mode
    if (isHarderMode) {
        event.remove({ output: /laserio/ })
        return
    } 
    
    //Replace Logic chips with circuits.
    event.remove({ output: ['laserio:logic_chip_raw', 'laserio:logic_chip'] })
    event.replaceInput({ mod: 'laserio', not: [{ id: 'laserio:card_item' }, { id: 'laserio:card_fluid' }, { id: 'laserio:card_energy' }, { id: 'laserio:card_redstone' }]}, 'laserio:logic_chip', '#gtceu:circuits/lv')
    event.replaceInput([{ id: 'laserio:card_item' }, { id: 'laserio:card_fluid' }, { id: 'laserio:card_energy' }, { id: 'laserio:card_redstone' }], 'laserio:logic_chip', '#gtceu:circuits/ulv')

    //Gate Energy card to Lumium, where equivalent throughput can be achieved through Conduits.
    event.replaceInput({ id: 'laserio:card_energy' }, '#forge:storage_blocks/redstone', 'gtceu:lumium_foil')

    //Laser Connectors
    event.shaped("4x laserio:laser_connector", [
            " E ",
            "RCR",
            "SSS"
        ], {
            S: 'gtceu:steel_plate',
            E: 'gtceu:lv_emitter',
            C: '#gtceu:circuits/lv',
            R: 'gtceu:red_alloy_plate'
        }
    ).id('laserio:laser_connector')
    event.shaped("laserio:laser_connector_advanced", [
            " E ",
            "RCR",
            "FFF"
        ], {
            F: 'gtceu:electrum_flux_plate',
            E: 'gtceu:luv_emitter',
            C: '#gtceu:circuits/luv',
            R: 'gtceu:red_alloy_plate'
        }
    ).id('laserio:laser_connector_advanced')

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