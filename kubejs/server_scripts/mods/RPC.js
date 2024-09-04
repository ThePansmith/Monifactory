/** @private */
const ___TIER_QUEST_MAPPING = [
	// all of these are on the progression page
	'DEFAULT',
	'1A30472430354F1E', // lv
	'3B639F4061B00F1A', // mv
	'6169C04DF463502F', // hv
	'7E09D4E00BFA4970', // ev
	'39FD6F1076559156', // iv
	'4DB622A78605A2EB', // luv
	'521977C7165229F1', // zpm
	'115B96B2092D671E', // uv
	'01E542E1C9DAF5B4',  // uhv
	'07057CDE4E021BA7', // uev
	'1B1D3A66B847D129', // uiv
	'5601A05D8361551D', // max
	'63280C5F37A22345' // creative chest (end)
]

FTBQuestsEvents.completed(event => {
	const id = ___TIER_QUEST_MAPPING.findIndex(v => (v === event.object.codeString))
	if (id === -1) return;
	___updateTierRPC(id, event.player);
})

PlayerEvents.loggedIn(event => {
	const quests = FTBQuests.getServerDataFromPlayer(event.player);

	let highestLevel = 0;
	for (const key in ___TIER_QUEST_MAPPING) {
		let value = ___TIER_QUEST_MAPPING[key];
		if (value === "DEFAULT") continue;
		if (quests.isCompleted(value))
			highestLevel = key;
	}
	___updateTierRPC(highestLevel, event.player)
})

/**
 * @private
 * @param {number} tier
 * @param {Internal.Player} player
 */
const ___updateTierRPC = (tier, player) => {
	if (!player) {
		console.log("!! READ THIS SERVER.LOG DUMMY !!")
		console.log("!! DONT RIGHT CLICK -> 'COMPLETE INSTANTLY', IT WONT SEND THE PLAYER !!")
		return;
	}
	player.sendData('moni:rpc', { tier: tier });
	// console.log("SDRP Sent Update to client");
}
