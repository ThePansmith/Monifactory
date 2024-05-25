// HM exclusive items

StartupEvents.registry('item', event => {
    if (!isHardMode) {
        return;
    }
    event.create('magnetron')
})