ServerEvents.recipes( event => {
    event.remove({id: 'buildinggadgets2:gadget_building'})
    event.shaped(
        'buildinggadgets2:gadget_building', [
            'PEP',
            'CMC',
            'PBP'
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
                'PEP',
                'CMC',
                'PBP'
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
                'PEP',
                'CMC',
                'PBP'
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
            'EPS',
            'CMC',
            'PBP'
        ], {
            M: 'gtceu:computer_monitor_cover',
            P: 'gtceu:iron_plate',
            E: 'gtceu:mv_emitter',
            S: 'gtceu:mv_sensor',
            C: '#gtceu:circuits/mv',
            B: '#gtceu:batteries/mv'
        }
    )

    event.remove({id: 'buildinggadgets2:gadget_cut_paste'})
    event.shaped(
        'buildinggadgets2:gadget_cut_paste', [
            'EPS',
            'CMC',
            'PBP'
        ], {
            M: 'gtceu:computer_monitor_cover',
            P: 'gtceu:steel_plate',
            E: 'gtceu:mv_emitter',
            S: 'gtceu:mv_sensor',
            C: '#gtceu:circuits/mv',
            B: '#gtceu:batteries/hv'
        }
    )

    event.remove({id: 'buildinggadgets2:gadget_destruction'})
    event.shaped(
        'buildinggadgets2:gadget_destruction', [
            'PEP',
            'CMC',
            'PBP'
        ], {
            M: 'gtceu:computer_monitor_cover',
            P: 'gtceu:steel_plate',
            E: 'gtceu:lv_emitter',
            C: '#gtceu:circuits/lv',
            B: '#gtceu:batteries/mv'
        }
    )
})