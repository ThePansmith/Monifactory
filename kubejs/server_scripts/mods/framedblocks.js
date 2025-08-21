/**
 * Allows framed doors to be used for the cleanroom
 */

ServerEvents.tags("item", event => {
    // Make Framed Blocks doors act as cleanroom doors
    event.add("gtceu:cleanroom_doors", "framedblocks:framed_door")
})

ServerEvents.tags("block", event => {
    // Make Framed Blocks doors act as cleanroom doors
    event.add("gtceu:cleanroom_doors", "framedblocks:framed_door")
})
