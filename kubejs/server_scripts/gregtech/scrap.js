/**
 * Alien scrap processing line
 */
ServerEvents.recipes(event => {
    // Scrap
    event.recipes.gtceu.sifter('scrap_sifting')
        .itemInputs('kubejs:alien_scrap')
        .itemOutputs('kubejs:ruined_machine_parts')
        .chancedOutput('kubejs:ruined_machine_parts', 3300, 200)
        .itemOutputs('kubejs:ruined_hull')
        .chancedOutput('kubejs:ruined_hull', 5000, 200)
        .chancedOutput('kubejs:ruined_hull', 3300, 200)
        .chancedOutput('gtceu:ruthenium_trinium_americium_neutronate_dust', 3300, 0)
        .duration(400)
        .EUt(16380)

    // Ruined Machine Parts
    event.recipes.gtceu.sifter('ruined_machine_sifting')
        .itemInputs('kubejs:ruined_machine_parts')
        .itemOutputs('gtceu:neutronium_dust')
        .chancedOutput('gtceu:graphene_dust', 5000, 0)
        .chancedOutput('gtceu:yttrium_barium_cuprate_dust', 5000, 0)
        .chancedOutput('kubejs:ruined_capacitor', 5000, 0)
        .chancedOutput('kubejs:ruined_sensor', 5000, 0)
        .chancedOutput('kubejs:ruined_emitter', 5000, 0)
        .duration(400)
        .EUt(16380)

    // Ruined Hull
    event.recipes.gtceu.centrifuge('ruined_hull_maceration')
        .itemInputs('kubejs:ruined_hull')
        .itemOutputs('5x gtceu:neutronium_dust')
        .itemOutputs('3x gtceu:tritanium_dust')
        .itemOutputs('4x gtceu:crystal_matrix_dust')
        .chancedOutput('kubejs:crushed_sensor', 3300, 0)
        .chancedOutput('kubejs:magnetic_capacitor_dust', 3300, 0)
        .chancedOutput('kubejs:holmium_oxide_glass_dust', 3300, 0)
        .duration(400)
        .EUt(16380)

    // Supercap
    // A simple "crush the thing and get the good stuff"
    event.recipes.gtceu.macerator('alien_scrap_supercap_crushing')
        .itemInputs('kubejs:ruined_capacitor')
        .chancedOutput('kubejs:crushed_capacitor', 9500, 0)
        .chancedOutput('gtceu:enriched_naquadah_trinium_europium_duranide_dust', 3300, 0)
        .duration(100)
        .EUt(16380)

    event.recipes.gtceu.electromagnetic_separator('alien_scrap_supercap_electro')
        .itemInputs('kubejs:crushed_capacitor')
        .chancedOutput('kubejs:magnetic_capacitor_dust', 9500, 0)
        .chancedOutput('gtceu:carbon_dust', 3300, 850) // Finally, an easy way to get carbon!
        .duration(100)
        .EUt(16380)

    event.recipes.gtceu.centrifuge('alien_scrap_supercap_dust_centrifuge')
        .itemInputs('5x kubejs:magnetic_capacitor_dust')
        .itemOutputs('gtceu:holmium_dust')
        .chancedOutput('gtceu:iron_dust', 3300, 850)
        .duration(100)
        .EUt(16380)

    // Sensor
    // Ion exchange
    event.recipes.gtceu.macerator('alien_scrap_sensor_crushing')
        .itemInputs('kubejs:ruined_sensor')
        .chancedOutput('kubejs:crushed_sensor', 9500, 0)
        .chancedOutput('gtceu:neutronium_dust', 3300, 850)
        .duration(600)
        .EUt(16380)

    event.recipes.gtceu.thermal_centrifuge('alien_scrap_sensor_centrifuge')
        .itemInputs('kubejs:crushed_sensor')
        .chancedOutput('kubejs:holmium_compound', 9500, 0)
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
        .itemInputs('kubejs:ruined_emitter')
        .chancedOutput('kubejs:holmium_oxide_glass_dust', 9500, 0)
        .chancedOutput('gtceu:trinium_dust', 3300, 850)
        .duration(400)
        .EUt(16380)

    event.recipes.gtceu.centrifuge('holmium_oxide_glass_centro')
        .itemInputs('kubejs:holmium_oxide_glass_dust')
        .itemOutputs('gtceu:holmium_oxide_dust', 'gtceu:glass_dust')
        .duration(400)
        .EUt(16380)
})
