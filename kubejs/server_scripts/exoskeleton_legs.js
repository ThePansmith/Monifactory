/**
 * Register all exoskeleton legs tiers recipes
 */
ServerEvents.recipes(event => {
    for(let i = 1; i <= 5; i++) {
        let tier = GTValues.VN[i].toLowerCase()
        event.shapeless(`gtexolegs:${tier}_exoskeleton_legs`,[`kubejs:${tier}_exoskeleton_legs`])
    }
})
