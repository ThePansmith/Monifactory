ServerEvents.recipes(event => {
    event.remove({ id: "gtceu:shaped/solar_panel_basic" })
    event.remove({ id: "gtceu:shaped/solar_panel_ulv" })
    event.remove({ id: "gtceu:shaped/solar_panel_lv" })

    event.remove({ id: "gtceu:electric_blast_furnace/blast_gallium_arsenide" })
    event.remove({ id: "gtceu:electric_blast_furnace/blast_gallium_arsenide_gas" })
    //removed this since it can mess with boule autocrafting attempts and gallium arsenide ingots are useless w/o the standard GT recipes

    event.shapeless('2x gtceu:solar_panel', 'solarflux:sp_2').id('gtceu:solar_panel_basic_conversion')
    event.shapeless('gtceu:ulv_solar_panel', 'solarflux:sp_3').id('gtceu:solar_panel_ulv_conversion')
    event.shapeless('gtceu:lv_solar_panel', 'solarflux:sp_4').id('gtceu:solar_panel_lv_conversion')
    event.shapeless('gtceu:mv_solar_panel', 'solarflux:sp_5').id('gtceu:solar_panel_mv_conversion')
    event.shapeless('gtceu:hv_solar_panel', 'solarflux:sp_6').id('gtceu:solar_panel_hv_conversion')
    event.shapeless('gtceu:ev_solar_panel', 'solarflux:sp_7').id('gtceu:solar_panel_ev_conversion')
    event.shapeless('gtceu:iv_solar_panel', 'solarflux:sp_8').id('gtceu:solar_panel_iv_conversion')
    event.shapeless('2x gtceu:iv_solar_panel', 'solarflux:sp_custom_echo').id('gtceu:solar_panel_iv_conversion_echo')
    event.shapeless('2x gtceu:luv_solar_panel', 'solarflux:sp_custom_resonant').id('gtceu:solar_panel_luv_conversion')
    event.shapeless('gtceu:zpm_solar_panel', 'solarflux:sp_custom_abyssal').id('gtceu:solar_panel_zpm_conversion')
    event.shapeless('4x gtceu:uv_solar_panel', 'solarflux:sp_custom_neutronium').id('gtceu:solar_panel_uv_conversion_neutronium')
    event.shapeless('8x gtceu:uv_solar_panel', 'solarflux:sp_custom_infinity').id('gtceu:solar_panel_uv_conversion_infinity')

})