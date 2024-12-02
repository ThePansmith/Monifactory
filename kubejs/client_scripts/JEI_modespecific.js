// /kjs inventory will be your friend.

JEIEvents.hideItems(event => {
    const gtMachines = ['extractor', 'macerator', 'compressor', 'forge_hammer', 'furnace', 'alloy_smelter']
    if (isNormalMode) {
    //GT Steam Age
    gtMachines.forEach(machine => {
        event.hide(['gtceu:lp_steam_' + machine, 'gtceu:hp_steam_' + machine])
    })
    event.hide(['gtceu:firebrick', 'gtceu:firebricks', 'gtceu:primitive_blast_furnace'])
    event.hide(/fireclay/)
    event.hide('kubejs:meowni_plush')
    
    //Bronze tier storage
    event.hide('sophisticatedstorage:iron_barrel')
    event.hide('sophisticatedstorage:iron_chest')
    event.hide('sophisticatedstorage:iron_shulker_box')
    event.hide(/^sophisticatedstorage:.*iron.*tier_upgrade$/)
    
}
    if (isHardMode) {
        event.hide(/hostilenetworks/)
        event.hide("watercollector:watercollector")
    }

    if (isExpertMode) {
        event.hide(/gtceu:[A-Za-z0-9]+_[A-Za-z0-9]+_energy_converter/)
    }
})
