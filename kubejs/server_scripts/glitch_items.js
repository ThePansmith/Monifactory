// //! Functions for glitcharmor and stuff

// Commented until it works without flooding console

// /**
//  * @private
//  * @param {Internal.PlayerEventJS} ev
//  */
// const glitchArmorCallback = (ev) => {
// 	const { player } = ev;
//     const glitchArmorEquipped = player.headArmorItem === 'kubejs:glitch_infused_helmet' &&
//         player.chestArmorItem === 'kubejs:glitch_infused_chestplate' &&
//         player.legsArmorItem === 'kubejs:glitch_infused_leggings' &&
//         player.feetArmorItem === 'kubejs:glitch_infused_boots'

//     if (!player.abilities.mayfly && (glitchArmorEquipped || player.isCreative())) {
//         player.abilities.mayfly = true
//         player.onUpdateAbilities()
// 		return;
//     }
// 	if (player.abilities.mayfly && !glitchArmorEquipped && !player.isCreative()) {
//         player.abilities.mayfly = false
//         player.abilities.flying = false
//         player.onUpdateAbilities()
//     }
// }
// // Notice: this wont update if you swap gamemode, you have to move glitch armor around your inventory!
// PlayerEvents.inventoryChanged('kubejs:glitch_infused_helmet', glitchArmorCallback);
// PlayerEvents.inventoryChanged('kubejs:glitch_infused_chestplate', glitchArmorCallback);
// PlayerEvents.inventoryChanged('kubejs:glitch_infused_leggings', glitchArmorCallback);
// PlayerEvents.inventoryChanged('kubejs:glitch_infused_boots', glitchArmorCallback);
// PlayerEvents.respawned(glitchArmorCallback); // if the armor has an enchant that keeps it
// PlayerEvents.loggedIn(glitchArmorCallback);

// /**
//  * @private
//  * @param {Internal.BlockRightClickedEventJS} ev
//  */
// const glitchHeartCallback = (ev) => {
// 	const { item, block, player } = ev;
// 	if (!item || item !== 'kubejs:glitch_heart') return;
// 	if (!player.isCreative()) {
// 		item.setCount(item.count - 1);
// 	}
// 	block.popItem('3x kubejs:glitch_fragment');
// }
// BlockEvents.rightClicked('obsidian', glitchHeartCallback);
// BlockEvents.rightClicked('crying_obsidian', glitchHeartCallback);

// ServerEvents.recipes(event => {
// 	event.shaped('kubejs:glitch_infused_helmet', [
// 		'   ',
// 		'AAA',
// 		'A A'
// 	], { A: 'kubejs:glitch_infused_ingot' });
// 	event.shaped('kubejs:glitch_infused_chestplate', [
// 		'A A',
// 		'AAA',
// 		'AAA'
// 	], { A: 'kubejs:glitch_infused_ingot' });
// 	event.shaped('kubejs:glitch_infused_leggings', [
// 		'AAA',
// 		'A A',
// 		'A A'
// 	], { A: 'kubejs:glitch_infused_ingot' });
// 	event.shaped('kubejs:glitch_infused_boots', [
// 		'   ',
// 		'A A',
// 		'A A'
// 	], { A: 'kubejs:glitch_infused_ingot' });
// })