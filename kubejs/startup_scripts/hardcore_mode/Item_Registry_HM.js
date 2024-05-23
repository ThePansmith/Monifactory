// HM exclusive items

StartupEvents.registry('item', event => {
    if (!isExpertMode) {
        return;
    }
    event.create('magnetron')
})