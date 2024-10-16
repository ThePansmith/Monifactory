/**
 * Gate travellers' boots recipes behind GT progression (up to EV, as the Quantumsuit is IV-ish)
 */
ServerEvents.recipes(event => {
    event.replaceInput({ id: 'travellersbootsreloaded:travellers_boots_tier2' }, '#forge:storage_blocks/gold', '#forge:ingots/brass')
    event.replaceInput({ id: 'travellersbootsreloaded:travellers_boots_tier3' }, '#forge:storage_blocks/diamond', '#forge:ingots/blue_steel')
    event.replaceInput({ id: 'travellersbootsreloaded:travellers_boots_tier4' }, '#forge:storage_blocks/emerald', '#forge:ingots/incoloy_ma_956')
})