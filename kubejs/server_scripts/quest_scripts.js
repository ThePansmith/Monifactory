FTBQuestsEvents.customReward('24FE5D5A412EA666', event => {
	// auto complete when you unlock genisis (free cake custom trigger)
	FTBQuests.getServerDataFromPlayer(event.getPlayer()).complete('138B92A597D63C12')
})

// timer task 'component'
FTBQuestsEvents.customTask(event => {
	if (event.task.hasTag('moni_timer_60')) {
		event.setMaxProgress(60*cake_reset_time);
	} else if (event.task.hasTag('moni_timer_30')) {
		event.setMaxProgress(30*cake_reset_time);
	}

	if (event.task.hasTag('moni_timer')) {
		event.setCheckTimer(20);
		event.check = (task) => {
			task.addProgress(1);
		}
	}
})