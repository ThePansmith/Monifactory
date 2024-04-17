/** @private */
const ___TIER_QUEST_MAPPING = [
	// all of these are on the progression page
	'DEFAULT',
	'5B6811964444497F', // lv
	'1510DC51CDC3F609', // mv
	'01CC71429CFCAE0B', // hv
	'22B3F2351CB4B7D8', // ev
	'2179B83440CEF343', // iv
	'536CEDA3142BCE63', // luv
	'0472A05CFBF4A2F0', // zpm
	'519A11FDC6A7EF21', // uv
	'0C50D78D8F63CAFE'  // uhv
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
