// Random small tags that don't fit anywhere else
ServerEvents.tags('item', event => {
})

ServerEvents.tags('block', event => {
    event.add('gtceu:cleanroom_floors', 'enderio:travel_anchor');
    event.add('gtceu:cleanroom_floors', '#elevatorid:elevators');
})
