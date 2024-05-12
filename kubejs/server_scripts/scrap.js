ServerEvents.recipes(event => {



    
    // Scrap
    event.recipes.gtceu.sifter('scrap_sifting')
        .itemInputs('kubejs:alien_scrap')
        .chancedOutput('gtceu:stone_dust', 3300, 0)
        .chancedOutput('gtceu:concrete_dust', 3300, 0)
        .chancedOutput('gtceu:carbon_dust', 3300, 0)
        .chancedOutput('kubejs:alien_scrap_emitter', 1000, 0)
        .chancedOutput('kubejs:alien_scrap_supercap', 1000, 0)
        .chancedOutput('kubejs:alien_scrap_sensor', 1000, 0)
        .chancedOutput('kubejs:alien_scrap_emitter', 1000, 0)
        .duration(400)
        .EUt(16380)

// Supercap
// A simple "crush the thing and get the good stuff"
event.recipes.gtceu.macerator('alien_scrap_supercap_crushing')
.itemInputs('kubejs:alien_scrap_supercap')
.itemOutputs('kubejs:crushed_supercap')
.chancedOutput('gtceu:enriched_naquadah_trinium_europium_duranide_dust', 3300, 0)
.duration(100)
.EUt(16380)

event.recipes.gtceu.electromagnetic_separator('alien_scrap_supercap_electro')
.itemInputs('kubejs:crushed_supercap')
.itemOutputs('kubejs:magnetic_supercap_dust')
.chancedOutput('gtceu:carbon_dust', 3300, 850) // Finally, an easy way to get carbon!
.duration(100)
.EUt(16380)

event.recipes.gtceu.centrifuge('alien_scrap_supercap_dust_centrifuge')
.itemInputs('5x kubejs:magnetic_supercap_dust')
.itemOutputs('gtceu:holmium_dust')
.chancedOutput('gtceu:iron_dust', 3300, 850)
.duration(100)
.EUt(16380)

// Sensor
// Ion exchange
event.recipes.gtceu.macerator('alien_scrap_sensor_crushing')
.itemInputs('kubejs:alien_scrap_sensor')
.itemOutputs('kubejs:crushed_alien_sensor')
.chancedOutput('gtceu:neutronium_dust', 3300, 850)
.duration(600)
.EUt(16380)

event.recipes.gtceu.thermal_centrifuge('alien_scrap_sensor_centrifuge')
.itemInputs('kubejs:crushed_alien_sensor')
.itemOutputs('kubejs:holmium_compound')
.chancedOutput('gtceu:silver_dust', 3300, 850)
.duration(600)
.EUt(16380)

event.recipes.gtceu.autoclave('holmium_compound_autoclave')
.itemInputs('3x kubejs:holmium_compound')
.inputFluids('gtceu:polytetrafluoroethylene 100') // Maybe Polystyrene instead?
.itemOutputs('gtceu:holmium_dust')
.duration(600)
.EUt(16380)


// Emitter
// Has Glass containing holmium oxide
event.recipes.gtceu.macerator('alien_scrap_emitter_crushing')
.itemInputs('kubejs:alien_scrap_emitter')
.itemOutputs('kubejs:holmium_oxide_glass_dust')
.chancedOutput('gtceu:trinium_dust', 3300, 850)
.duration(400)
.EUt(16380)

event.recipes.gtceu.centrifuge('holmium_oxide_glass_centro')
.itemInputs('kubejs:holmium_oxide_glass_dust')
.itemOutputs('gtceu:holmium_oxide_dust', 'gtceu:glass_dust')
.duration(400)
.EUt(16380)
})