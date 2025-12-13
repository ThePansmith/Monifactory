// SFM compact script. Gated behind HV circuits and some chemistry, but recipes can be made in MV machines
if (Platform.isLoaded('sfm')) {
    console.log('SuperFactoryManager found, loading compat scripts...');

    ServerEvents.recipes((event) => {
        // Remove most SFM recipes
        for (const recipe of [
            'sfm:manager',
            'sfm:cable',
            'sfm:fancy_cable',
            'sfm:water_tank',
            'sfm:disk',
            'sfm:labelgun',
            'sfm:network_tool',
            'sfm:xp_goop',
        ]) {
            event.remove({ output: recipe });
        }

        // Remove copying of enchanted books
        event.remove({ id: 'sfm:enchanted_book_copy' });

        // Re-add Inventory Cable
        event.recipes.gtceu
            .assembler('kubejs:sfm_cable')
            .itemOutputs('8x sfm:cable')
            .itemInputs([
                'gtceu:cupronickel_large_item_pipe',
                'gtceu:aluminium_large_fluid_pipe',
                '4x minecraft:iron_bars',
            ])
            .inputFluids(Fluid.of('gtceu:black_steel', 288))
            .duration(100)
            .EUt(120);

        event.shapeless('sfm:fancy_cable', ['sfm:cable']).id(`kubejs:fancy_cable`)
        event.shapeless('sfm:cable', ['sfm:fancy_cable']).id(`kubejs:cable`)

        // Factory Manager
        event.recipes.gtceu
            .assembler('kubejs:sfm_manager')
            .itemOutputs('1x sfm:manager')
            .itemInputs([
                '4x sfm:cable',
                '2x gtceu:mv_fluid_regulator',
                '2x gtceu:mv_robot_arm',
                '2x #gtceu:circuits/hv',
            ])
            .duration(200)
            .EUt(120);

        // Factory Manager Program Disk
        event.recipes.gtceu
            .circuit_assembler('kubejs:sfm_disk')
            .itemOutputs('4x sfm:disk')
            .itemInputs([
                'gtceu:ruby_plate',
                '4x gtceu:ram_chip',
                '2x gtceu:cpu_chip',
                'kubejs:resonating_crystal',
                '16x gtceu:fine_red_alloy_wire',
            ])
            .duration(200)
            .EUt(120);

        // Label Gun
        event.shaped('sfm:labelgun', [' EC', ' RS', 'R  '], {
            E: 'gtceu:mv_emitter',
            C: 'gtceu:terminal',
            R: 'gtceu:aluminium_rod',
            S: 'gtceu:mv_sensor',
        });

        // Networking Tool
        event.shaped('sfm:network_tool', [' T ', 'PSP', 'PCP'], {
            T: 'gtceu:terminal',
            P: '#forge:plates/black_steel',
            C: 'gtceu:aluminium_single_wire',
            S: 'gtceu:mv_sensor',
        });
    });

    console.log('SFM compat scripts successfully loaded!');
}
