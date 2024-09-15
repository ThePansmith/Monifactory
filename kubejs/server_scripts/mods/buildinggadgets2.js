ServerEvents.recipes( event => {
    event.remove({id: 'buildinggadgets2:template_manager'})
    event.shaped(
        'buildinggadgets2:template_manager', [
            'PMP',
            'CGC',
            'PLP'
        ], {
            M: 'minecraft:paper',
            P: 'gtceu:iron_plate',
            G: 'gtceu:restonia_gear',
            C: '#gtceu:circuits/lv',
            L: '#forge:plates/lapis'
        }
    )

    event.remove({id: 'buildinggadgets2:gadget_building'})
    event.shaped(
        'buildinggadgets2:gadget_building', [
            'PE',
            'CM',
            'PB'
        ], {
            M: 'gtceu:computer_monitor_cover',
            P: 'gtceu:iron_plate',
            E: 'gtceu:lv_emitter',
            C: '#gtceu:circuits/lv',
            B: '#gtceu:batteries/lv'
        }
    )

    event.remove({id: 'buildinggadgets2:gadget_exchanging'})
    if (isHardMode) {
        event.shaped(
            'buildinggadgets2:gadget_exchanging', [
                'PE',
                'CM',
                'PB'
            ], {
                M: 'gtceu:computer_monitor_cover',
                P: 'gtceu:iron_plate',
                E: 'gtceu:iv_emitter',
                C: '#gtceu:circuits/mv',
                B: '#gtceu:batteries/lv'
            }
        )
    } else {
        event.shaped(
            'buildinggadgets2:gadget_exchanging', [
                'PE',
                'CM',
                'PB'
            ], {
                M: 'gtceu:computer_monitor_cover',
                P: 'gtceu:iron_plate',
                E: 'gtceu:mv_emitter',
                C: '#gtceu:circuits/mv',
                B: '#gtceu:batteries/lv'
            }
        )
    }

    event.remove({id: 'buildinggadgets2:gadget_copy_paste'})
    event.shaped(
        'buildinggadgets2:gadget_copy_paste', [
            'SE',
            'CM',
            'PB'
        ], {
            M: 'gtceu:computer_monitor_cover',
            P: 'gtceu:iron_plate',
            E: 'gtceu:lv_emitter',
            S: 'gtceu:lv_sensor',
            C: '#gtceu:circuits/mv',
            B: '#gtceu:batteries/mv'
        }
    )

    event.remove({id: 'buildinggadgets2:gadget_cut_paste'})
    event.shaped(
        'buildinggadgets2:gadget_cut_paste', [
            'SE',
            'CM',
            'PB'
        ], {
            M: 'gtceu:computer_monitor_cover',
            P: 'gtceu:steel_plate',
            E: 'gtceu:lv_emitter',
            S: 'gtceu:lv_sensor',
            C: '#gtceu:circuits/lv',
            B: '#gtceu:batteries/hv'
        }
    )

    event.remove({id: 'buildinggadgets2:gadget_destruction'})
    event.shaped(
        'buildinggadgets2:gadget_destruction', [
            'PE',
            'CM',
            'PB'
        ], {
            M: 'gtceu:computer_monitor_cover',
            P: 'gtceu:steel_plate',
            E: 'gtceu:lv_emitter',
            C: '#gtceu:circuits/lv',
            B: '#gtceu:batteries/mv'
        }
    )
})