/**
 * Optional compat script for Modular Routers
 *
 * Midly gated behind LV circuits & alloys. Upgrades gated behind LV cutter.
 * Energy tx gated behind LV Autoclave & MV alloy wires.
 */
if (Platform.isLoaded('modularrouters')) {
    console.log("Modular Routers found, loading server compat scripts...")
    ServerEvents.recipes(event => {
        let replaceMultiple = function (which, arrRepl) {
            arrRepl.forEach(
                ([from, to]) => event.replaceInput(which, from, to)
            )
        }

        event.remove({ output: 'modularrouters:modular_router' })
        event.shaped('4x modularrouters:modular_router', [
            'PBP',
            'BCB',
            'PBP'
        ], {
            P: 'gtceu:dark_steel_plate',
            C: '#gtceu:circuits/lv',
            B: 'enderio:dark_steel_bars'
        })

        event.replaceInput(/modularrouters:(sender|puller)_module_2(_x4)?/, 'minecraft:ender_pearl', 'enderio:pulsating_crystal')

        replaceMultiple('modularrouters:energy_output_module', [
            ['minecraft:gold_ingot', 'gtceu:vibrant_alloy_single_wire'],
            ['#forge:storage_blocks/redstone', 'kubejs:resonating_crystal']
        ])

        replaceMultiple('modularrouters:energy_upgrade', [
            ['minecraft:gold_ingot', 'gtceu:conductive_alloy_double_wire'],
            ['#forge:storage_blocks/redstone', 'kubejs:resonating_crystal']
        ])

        replaceMultiple('modularrouters:speed_upgrade', [
            ['minecraft:gold_ingot', 'thermal:redstone_servo'],
            ['minecraft:gold_nugget', 'gtceu:electrum_plate']
        ])

        replaceMultiple('modularrouters:blank_module', [
            ['minecraft:redstone', '#gtceu:circuits/ulv'],
            ['minecraft:gold_nugget', 'gtceu:electrum_nugget']
        ])

        replaceMultiple('modularrouters:blank_upgrade', [
            ['minecraft:lapis_lazuli', 'gtceu:lapis_plate'],
            ['minecraft:gold_nugget', 'gtceu:electrum_nugget']
        ])

        replaceMultiple(/modularrouters:range_(up|down)_augment/, [
            ['#forge:rods/wooden', 'gtceu:electrum_rod'],
            ['minecraft:quartz', 'minecraft:ender_pearl']
        ])
    })
}
