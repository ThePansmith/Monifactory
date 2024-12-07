GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isHardMode) {
        return;
    }

    event.create("darmstadtite") // Hardmode only
        .dust().ore(2, 1)
        .iconSet('dull')
        .components('2x darmstadtium', '3x sulfur')
        .addOreByproducts('rare_earth', 'rhodium_sulfate', 'darmstadtium')

    event.create("dulysite") // Hardmode only
        .dust().ore(2, 1)
        .iconSet('dull')
        .components('duranium', '3x chlorine')
        .addOreByproducts('sphalerite', 'duranium', 'europium')

    // Snowchestite is in naqline.js
})