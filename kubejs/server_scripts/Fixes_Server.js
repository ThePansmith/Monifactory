// Issue 187 - https://github.com/ThePansmith/Monifactory/issues/187

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

MoreJSEvents.enchantmentTableEnchant(event => {
    //event.server.tell("Enchanted with cost: " + event.getCosts());
    event.setXp(getTrueXp(event.player.getXpLevel(), event, false))
})

// some mod tags the charcoal recipe incorrectly
ServerEvents.recipes(event => {
	event.replaceInput({id: 'minecraft:coal_block'}, '#minecraft:coals', 'minecraft:coal')

	event.replaceOutput({id: 'minecraft:charcoal'}, '#minecraft:coals', 'minecraft:charcoal')
	// thanks greg
	event.replaceOutput({id: 'gtceu:shapeless/block_decompress_charcoal'}, 'minecraft:coal', 'minecraft:charcoal')
	event.replaceOutput({id: 'thermal:storage/charcoal_from_block'}, 'minecraft:coal', 'minecraft:charcoal')
	event.replaceOutput({id: 'thermal:machines/press/unpacking/press_charcoal_unpacking'}, 'minecraft:coal', 'minecraft:charcoal')
	event.replaceOutput({type: 'gtceu:pyrolyse_oven'}, 'minecraft:coal', '20x minecraft:charcoal');
	event.replaceOutput({id: 'gtceu:forge_hammer/hammer_charcoal_block_to_gem'}, 'minecraft:coal', '9x minecraft:charcoal')
	event.replaceOutput({id: 'gtceu:coke_oven/log_to_charcoal'}, 'minecraft:coal', 'minecraft:charcoal')
})
