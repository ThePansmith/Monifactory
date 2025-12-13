// SFM compact script. Hides removed experience shard, experience goop, and water tank
if (Platform.isLoaded('sfm')) {
    console.log('SuperFactoryManager found, loading client compat scripts...');

    JEIEvents.hideItems(event => {
        // Hide removed SFM items.
        event.hide([
            'sfm:water_tank',
            'sfm:xp_shard',
            'sfm:xp_goop'
        ])
    })
}