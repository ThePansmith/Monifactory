BlockEvents.modification(e => {
    e.modify('watercollector:watercollector', block => {
      block.destroySpeed = 0.3
    })
  })