ServerEvents.recipes(event => {

event.remove({ id: 'wirelesschargers:basic_wireless_block_charger' })
event.remove({ id: 'wirelesschargers:advanced_wireless_block_charger' })

event.remove({ id: 'wirelesschargers:basic_wireless_player_charger' })
event.shaped(
    Item.of('wirelesschargers:basic_wireless_player_charger'), [
        'SES',
        'CHC',
        'SSS'
    ], {
        S: 'gtceu:steel_plate',
        E: 'gtceu:lv_emitter',
        H: 'gtceu:lv_machine_hull',
        C: 'gtceu:tin_quadruple_wire',
    }
)

event.remove({ id: 'wirelesschargers:advanced_wireless_player_charger' })
event.shaped(
    Item.of('wirelesschargers:advanced_wireless_player_charger'), [
        'SES',
        'CHC',
        'SSS'
    ], {
        S: 'gtceu:stainless_steel_plate',
        E: 'gtceu:hv_emitter',
        H: 'gtceu:hv_machine_hull',
        C: 'gtceu:gold_quadruple_wire',
    }
)

})