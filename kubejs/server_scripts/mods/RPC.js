/** @private */
const ___TIER_QUEST_MAPPING = [
    // all of these are on the progression page
    "DEFAULT",
    "61CC4AD6FAE15248", // lv
    "6C028CD89745098E", // mv
    "48CAEBEE83D7C791", // hv
    "30AAFB97813DEB6C", // ev
    "6E27637A9C94A0AA", // iv
    "646B8CD10787D899", // luv
    "11B25506F679ACBD", // zpm
    "4B497D256FB3983F", // uv
    "0A34290F579BB4E2", // uhv
    "63812416270292A4", // uev
    "1A6F087E10DC036E", // max
    "2EBB9A154522348F" // creative chest (end)
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
    player.sendData("moni:rpc", { tier: tier });
    // console.log("SDRP Sent Update to client");
}
