StartupEvents.registry('fluid', event => {
    event.create('molten_pyrotheum')
		.bucketColor(Color.rgba(247, 219, 58, 255))
		.displayName('§6Blazing Pyrotheum')// BUG: components aren't working! (this should be gold)
		.temperature(273*3000)
		.stillTexture('kubejs:block/pyrotheum_still')
		.flowingTexture('kubejs:block/pyrotheum_flow');
    event.create('molten_cryotheum')
		.bucketColor(Color.rgba(67, 244, 247, 255))
		.displayName('§bGelid Cryotheum') // aqua
		.temperature(5)
		.stillTexture('kubejs:block/cryotheum_still')
		.flowingTexture('kubejs:block/cryotheum_flow');
    event.create('molten_petrotheum')
		.bucketColor(Color.rgba(26, 19, 16, 255))
		.displayName('§8Tectonic Petrotheum') // darkGray
		.stillTexture('kubejs:block/petrotheum_still')
		.flowingTexture('kubejs:block/petrotheum_flow');
    event.create('molten_aerotheum')
		.bucketColor(Color.rgba(200, 218, 148, 255))
		.displayName('§7Zephyrean Aerotheum') // gray
		.stillTexture('kubejs:block/aerotheum_still')
		.flowingTexture('kubejs:block/aerotheum_flow');
    event.create("molten_primal_mana")
		.bucketColor(Color.rgba(0, 72, 112, 255))
		.displayName('§dPrimal Mana') // lightPurple
		.stillTexture('kubejs:block/mana_still')
		.flowingTexture('kubejs:block/mana_flow');
    event.create('resonant_ender')
		.bucketColor(Color.rgba(43, 79, 79, 255))
		.displayName('Resonant Ender')
		.stillTexture('kubejs:block/ender_still')
		.flowingTexture('kubejs:block/ender_flow');
})
