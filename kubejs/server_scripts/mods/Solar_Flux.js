/**
 * Solar Flux mod script.
 * 
 * Removes every recipe in preparation for removal
 */
ServerEvents.recipes(event => {
    event.remove({ output: /^solarflux:.*/})
})
