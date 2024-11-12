ServerEvents.tags('block', event => {
	// Makes you mine glass faster using a pickaxe
	event.add('minecraft:mineable/pickaxe', ['#forge:glass', '#forge:glass_panes']);
	event.add('minecraft:mineable/pickaxe', /xtonesreworked:glaxx_block_/);
	event.add('minecraft:mineable/pickaxe', /enderio:clear_glass/);
	event.add('minecraft:mineable/pickaxe', /enderio:fused_quartz/);
})