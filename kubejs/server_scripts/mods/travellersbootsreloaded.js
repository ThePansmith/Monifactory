/**
 * Travellers' Boots are deprecated. Switch to Exoskeleton legs!
 */
const travellers_boots = ["travellersbootsreloaded:travellers_boots_tier1", "travellersbootsreloaded:travellers_boots_tier2", "travellersbootsreloaded:travellers_boots_tier3", "travellersbootsreloaded:travellers_boots_tier4", "travellersbootsreloaded:travellers_boots_tier5"]

// Remove recipes for travellers' boots, add conversion recipes to exoskeleton legs
ServerEvents.recipes(event => {
    travellers_boots.forEach((item, tier) => {
        event.remove({ output: item })
        event.shapeless(`kubejs:${GTValues.VN[tier+1].toLowerCase()}_exoskeleton_legs`, [item])
    })
})
