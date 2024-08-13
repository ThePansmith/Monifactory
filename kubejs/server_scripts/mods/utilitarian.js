ServerEvents.recipes(event => {
    //Remove No Soliciting Carpets
    event.remove({ id: /utilitarian:.*_soliciting_carpet/ })
    
    //Remove snad & variants
    event.remove({ output: ['utilitarian:snad', 'utilitarian:red_snad', 'utilitarian:soul_snad', 'utilitarian:fluid_hopper', 'utilitarian:no_soliciting_banner']})

    //Remove utility recipes when they overshadow GT recipes
    event.remove({ id: 'utilitarian:utility/logs_to_hopper'})
    if(isHardMode) {
        event.remove({ id: 'utilitarian:utility/charcoal_from_campfire'})
    }
    if(isHarderMode) {
        event.remove({ id: 'utilitarian:utility/logs_to_ladders'})
        event.remove({ id: 'utilitarian:utility/logs_to_chests'})
        event.remove({ id: 'utilitarian:utility/logs_to_sticks'})
        event.remove({ id: 'utilitarian:utility/logs_to_bowls'})
        event.remove({ id: /utilitarian:.*_logs_to_.*/})
    }
})