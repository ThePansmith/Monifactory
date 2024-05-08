// /kjs inventory will be your friend.

JEIEvents.hideItems(event => {
        if (isNormalMode) {
    //GT Steam Age
    const gtMachines = ['extractor', 'macerator', 'compressor', 'forge_hammer', 'furnace', 'alloy_smelter']
    gtMachines.forEach(machine => {
        event.hide(['gtceu:lp_steam_' + machine, 'gtceu:hp_steam_' + machine])
    })
}

        if (isExpertMode) {
event.hide(/hostilenetworks/)
event.hide("watercondenser:watercondenser")
}

})