JEIEvents.hideItems(event => {
    const excludedItems = ['kubejs:dislocation_inhibitor', 'kubejs:sculk_compound_chest', 'kubejs:generator', 'kubejs:dislocator_pedestal', 'kubejs:creative_op_capacitor', 'kubejs:particle_generator', 'kubejs:grinder', 'kubejs:flux_gate', 'kubejs:reactor_prt_rotor_full', 'kubejs:fluid_gate', 'kubejs:crafting_core', 'kubejs:sculk_reaction_casing', 'kubejs:echo_reaction_casing', 'kubejs:resonant_reaction_casing', 'kubejs:abyssal_reaction_casing', 'kubejs:energy_core', 'kubejs:energy_core_stabilizer', 'kubejs:energy_pylon', 'kubejs:reactor_core', 'kubejs:reactor_stabilizer', 'kubejs:infused_obsidian', 'kubejs:sculk_core', 'kubejs:echo_core', 'kubejs:resonant_core', 'kubejs:abyssal_core', 'kubejs:echo_energy_core', 'kubejs:resonant_energy_core', 'kubejs:dragon_heart', 'kubejs:chaos_shard', 'kubejs:large_chaos_frag', 'kubejs:medium_chaos_frag', 'kubejs:small_chaos_frag', 'kubejs:reactor_prt_stab_frame', 'kubejs:reactor_prt_in_rotor', 'kubejs:reactor_prt_out_rotor', 'kubejs:reactor_prt_focus_ring', 'kubejs:magnet', 'kubejs:advanced_magnet', Item.of('kubejs:dislocator', '{Damage:0}'), 'kubejs:advanced_dislocator', 'kubejs:echo_capacitor', 'kubejs:kubejs_capacitor', 'kubejs:creative_capacitor']
    const regexPattern = new RegExp(`^(?!(${excludedItems.join('|')})$)kubejs:`, 'i')

    event.hide(regexPattern)
})

// Unification regexes are definited in startup script _initial.js
JEIEvents.hideItems(event => {
    event.hide(global.unificationPattern)
    event.hide(global.manualUnification)
    event.hide(global.nuclearcraftFuelPattern)
    event.hide(global.nuclearcraftMaterialPattern)
})