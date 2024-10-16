ServerEvents.recipes(event => {
    if (!isExpertMode) {
        event.remove({ id: /item_import_bus_/})
        event.remove({ id: /item_export_bus_/})
        event.remove({ id: /fluid_hatch_/, type: 'gtceu:assembler'})
        event.remove({ id: /fluid_export_hatch_/, type: 'gtceu:assembler'})

        var hatchtier = ['ulv', 'lv','mv','hv','ev','iv','luv','zpm','uv','uhv','uev','uiv', 'max']
        hatchtier.forEach(volt => {

            event.shaped(`gtceu:${volt}_input_bus`, [' S ',' T ', '   ' ], { S: '#forge:chests/wooden', T: `gtceu:${volt}_machine_hull` })
            event.shaped(`gtceu:${volt}_output_bus`, [ '   ', ' T ', ' S ' ], {S: '#forge:chests/wooden', T: `gtceu:${volt}_machine_hull` })
            event.shaped(`gtceu:${volt}_input_hatch`, [' S ', ' T ', '   ' ], { S: '#forge:glass', T: `gtceu:${volt}_machine_hull` })
            event.shaped(`gtceu:${volt}_output_hatch`, [ '   ', ' T ', ' S ' ], { S: '#forge:glass', T: `gtceu:${volt}_machine_hull` })
})}})
