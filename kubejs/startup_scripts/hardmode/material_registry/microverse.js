GTCEuStartupEvents.registry('gtceu:material', event => {
    if (!isHardMode) {
        return;
    }

event.create("fluorite") // Hardmode only
.dust().ore()
.color(0xFFFC9E).iconSet('rough')
.components('calcium', '2x fluorine')
.addOreByproducts('sphalerite', 'bastnasite', 'topaz')

// event.create("snowchestite") // Hardmode only
// .dust().ore()
// .color(0x274c9f).iconSet('shiny')
// .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
// .components('3x naquadah_oxide', 'pyromorphite')
// .addOreByproducts('chalcopyrite', 'vanadium_magnetite', 'naquadah') // Naquadah is replaced with naquadah hydroxide in expert_processing.js

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