ServerEvents.recipes(event => {
  // Fixes #860
  event.remove({ id: "redstone_arsenal:materials/flux_ingot_fire_charge" })
})
