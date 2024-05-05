ServerEvents.recipes(event => {

    event.recipes.extendedcrafting.shaped_table(
        'gtceu:omnic_forge', [
            'ASESA',
            'SCRCS',
            'EVTVE',
            'SCRCS',
            'ASESA'
        ], {
            A: '#gtceu:circuits/uhv',
            S: 'gtceu:double_neutronium_plate',
            E: 'gtceu:uv_field_generator',
            C: 'kubejs:omnic_matrix_machine_casing',
            R: 'gtceu:uv_robot_arm',
            V: 'gtceu:uv_conveyor_module',
            T: 'gtceu:uv_machine_hull'
        }, 2
    )
    event.recipes.gtceu.assembler('kubejs:omnic_matrix_machine_casing')
        .itemInputs('12x gtceu:omnium_plate', '2x gtceu:crystal_matrix_frame', '2x gtceu:zpm_field_generator', '2x #gtceu:circuits/uv')
        .itemOutputs('2x kubejs:omnic_matrix_machine_casing')
        .duration(4000)
        .EUt(65520)
    
    event.recipes.gtceu.omnic_forge('kubejs:omnic_matrix_machine_casing_forge')
        .itemInputs('6x gtceu:omnium_plate', 'gtceu:crystal_matrix_frame', 'gtceu:zpm_field_generator', '#gtceu:circuits/uv')
        .itemOutputs('2x kubejs:omnic_matrix_machine_casing')
        .duration(4000)
        .EUt(65520)
})
