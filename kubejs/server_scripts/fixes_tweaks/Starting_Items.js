PlayerEvents.loggedIn(event => {
    // Check if player doesn't have "starting_items" stage yet
    if (!event.player.stages.has('starting_items')) {
      // Add the stage
      event.player.stages.add('starting_items')
      // remove the TOP note
      event.player.inventory.clear()
      // Give qb to player
      event.player.give('ftbquests:book')
    }
  })