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

    ////// Shortcut Recipes //////
    if(!isHarderMode) {
        //Rubber Wood
        event.shaped("24x gtceu:rubber_slab", [
            'WWW'
        ], {
            W: "gtceu:rubber_log"
        }).id("utilitarian:utility/rubber_logs_to_slabs");
        event.shaped("16x gtceu:rubber_stairs", [
            'W  ',
            'WW ',
            'WWW'
        ], {
            W: "gtceu:rubber_log"
        }).id("utilitarian:utility/rubber_logs_to_stairs");
        event.shaped("4x gtceu:rubber_pressure_plate", [
            'WW'
        ], {
            W: "gtceu:rubber_log"
        }).id("utilitarian:utility/rubber_logs_to_pressure_plates");
        event.shaped("12x gtceu:rubber_door", [
            'WW',
            'WW',
            'WW'
        ], {
            W: "gtceu:rubber_log"
        }).id("utilitarian:utility/rubber_logs_to_doors");
        event.shaped("12x gtceu:rubber_trapdoor", [
            'WWW',
            'WWW'
        ], {
            W: "gtceu:rubber_log"
        }).id("utilitarian:utility/rubber_logs_to_trapdoors");

        //Rubberwood
        event.shaped("24x thermal:rubberwood_slab", [
            'WWW'
        ], {
            W: "thermal:rubberwood_log"
        }).id("utilitarian:utility/rubberwood_logs_to_slabs");
        event.shaped("16x thermal:rubberwood_stairs", [
            'W  ',
            'WW ',
            'WWW'
        ], {
            W: "thermal:rubberwood_log"
        }).id("utilitarian:utility/rubberwood_logs_to_stairs");
        event.shaped("4x thermal:rubberwood_pressure_plate", [
            'WW'
        ], {
            W: "thermal:rubberwood_log"
        }).id("utilitarian:utility/rubberwood_logs_to_pressure_plates");
        event.shaped("12x thermal:rubberwood_door", [
            'WW',
            'WW',
            'WW'
        ], {
            W: "thermal:rubberwood_log"
        }).id("utilitarian:utility/rubberwood_logs_to_doors");
        event.shaped("12x thermal:rubberwood_trapdoor", [
            'WWW',
            'WWW'
        ], {
            W: "thermal:rubberwood_log"
        }).id("utilitarian:utility/rubberwood_logs_to_trapdoors");
        event.shaped("4x thermal:rubberwood_boat", [
            'W W',
            'WWW'
        ], {
            W: "thermal:rubberwood_log"
        }).id("utilitarian:utility/rubberwood_logs_to_boats");
    }
})