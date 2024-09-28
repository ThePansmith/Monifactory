ServerEvents.recipes( event => {
    event.remove({id: /buildinggadgets2/})

    //Template Manager
    event.shaped(
        'buildinggadgets2:template_manager', [
            'PMP',
            'CGC',
            'PLP'
        ], {
            M: 'minecraft:paper',
            P: 'gtceu:iron_plate',
            G: 'gtceu:restonia_gear',
            C: '#gtceu:circuits/mv',
            L: '#forge:plates/lapis'
        }
    )

    //Gadgets
    event.shaped(
        'buildinggadgets2:gadget_building', [
            'PE',
            'CM',
            'PB'
        ], {
            M: '#forge:plates/glass',
            P: 'gtceu:iron_plate',
            E: 'gtceu:lv_emitter',
            C: '#gtceu:circuits/lv',
            B: '#gtceu:batteries/lv'
        }
    )
    //Exchanging gadgets use an IV emitter in HM/EM
    if (isHardMode) {
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
    } else {
        event.shaped(
            'buildinggadgets2:gadget_exchanging', [
                'PE',
                'CM',
                'PB'
            ], {
                M: '#forge:plates/glass',
                P: 'gtceu:iron_plate',
                E: 'gtceu:mv_emitter',
                C: '#gtceu:circuits/mv',
                B: '#gtceu:batteries/lv'
            }
        )
    }
    event.shaped(
        'buildinggadgets2:gadget_copy_paste', [
            'SE',
            'CM',
            'PB'
        ], {
            M: '#forge:plates/glass',
            P: 'gtceu:iron_plate',
            E: 'gtceu:lv_emitter',
            S: 'gtceu:lv_sensor',
            C: '#gtceu:circuits/mv',
            B: '#gtceu:batteries/mv'
        }
    )
    event.shaped(
        'buildinggadgets2:gadget_cut_paste', [
            'SE',
            'CM',
            'PB'
        ], {
            M: '#forge:plates/glass',
            P: 'gtceu:steel_plate',
            E: 'gtceu:lv_emitter',
            S: 'gtceu:lv_sensor',
            C: '#gtceu:circuits/lv',
            B: '#gtceu:batteries/hv'
        }
    )
    event.shaped(
        'buildinggadgets2:gadget_destruction', [
            'PE',
            'CM',
            'PB'
        ], {
            M: '#forge:plates/glass',
            P: 'gtceu:steel_plate',
            E: 'gtceu:lv_emitter',
            C: '#gtceu:circuits/lv',
            B: '#gtceu:batteries/mv'
        }
    )
})