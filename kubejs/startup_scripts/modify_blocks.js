/**
 * Block modification.
 * Only used for one thing at the moment.
 */
BlockEvents.modification(event => {
    event.modify('watercollector:watercollector', block => {
        block.destroySpeed = 0.3
    })
})
