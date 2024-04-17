function getTrueXp(level, event, debug) {

    let xpReq = event.player.getXpNeededForNextLevel()
    let currentProg

    if (level >= 0 && level <= 15) currentProg = (2 * level + 7) * event.player.experienceProgress
    if (level >= 16 && level <= 30) currentProg =  (5 * level - 38) * event.player.experienceProgress
    if (level >= 31) currentProg = (9 * level - 158) * event.player.experienceProgress

    if (debug === "true") {
        event.server.tell(" ")
        event.server.tell("Xp Req: " + xpReq)
        event.server.tell("Current Prog: " + currentProg)
    }

    if (level >= 0 && level < 17) return (Math.pow(level, 2) + 6*level + currentProg)
    if (level >= 17 && level < 32) return (2.5*Math.pow(level, 2) - 40.5*level+360 + currentProg)
    if (level >= 32) return (4.5*Math.pow(level, 2) - 162.5*level + 2220 + currentProg)

}

ItemEvents.rightClicked('kubejs:debug_laser', event => {
	if (!event.player.isShiftKeyDown()) {
		event.server.tell(" ")
		event.server.tell("Current XP: " + event.player.getXp())
		event.server.tell("Current XP levels: " + event.player.getXpLevel())
	} else {
		event.server.tell(" ")
		event.server.tell("Setting XP based on current levels and progress: " + getTrueXp(event.player.getXpLevel(), event, false))
		event.player.setXp(getTrueXp(event.player.getXpLevel(), event, true))
	}
})