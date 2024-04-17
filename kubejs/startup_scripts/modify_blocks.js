BlockEvents.modification(e => {
    e.modify('watercondenser:watercondenser', block => {
      block.destroySpeed = 0.3
    })
  })