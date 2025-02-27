/**
 * Discord RPC status
 */

global.tier = 0; // this is clientside tier anyways
ClientEvents.loggedIn(() => {
    SDRP.setState("sdrp.ulv", "ULV", "ulv")
})

ClientEvents.loggedOut(() => {
    global.tier = 0;
})

NetworkEvents.dataReceived("moni:rpc", (e) => {
    global.tier = Number(e.data.tier ?? TIER_ULV);
    let tierID = TIER_ID_MAPPING[Math.round(global.tier)]; // putting val inside the global var turns it into float
    SDRP.setState(`sdrp.${tierID.toLowerCase()}`, tierID, tierID.toLowerCase())
    // console.log("SDRP Update Client By Network")
    // console.log(`New tier: ${global.tier} ${tierID}`)
})

// this event is slightly delayed when running an integrated server
sdrp.dimension_change(ev => {
    let tierID = TIER_ID_MAPPING[Math.round(global.tier)];
    ev.updateSDRPState(`sdrp.${tierID.toLowerCase()}`, tierID, tierID.toLowerCase())
    // console.log("SDRP Update Client By Dim")
})
