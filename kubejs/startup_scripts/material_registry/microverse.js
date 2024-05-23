//? Keep in sync with
//? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsMicroverse.java

// Microverse Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("microversium")
        .ingot()
        .color(0x9b61b8).iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME)
        .cableProperties(128, 4, 2, false)

    event.create("osmiridiumyes")
        .dust().ore()
        .iconSet('dull')
        .components('8x osmium', '2x iridium')
        .addOreByproducts('osmium', 'iridium', 'ruthenium')

    event.create("iridosmineyes")
        .dust().ore()
        .iconSet('dull')
        .components('8x iridium', '2x osmium')
        .addOreByproducts('iridium', 'osmium', 'rhodium')

    event.create("kaemanite")
        .dust().ore()
        .color(0xe7413c).iconSet('bright')
        .components('trinium', 'tantalum', '4x oxygen')
		.addOreByproducts('niobium', 'trinium_sulfide', 'trinium')

    event.create("fluorite") // Hardmode only
        .dust().ore()
        .color(0xFFFC9E).iconSet('rough')
		.components('calcium', '2x fluorine')
        .addOreByproducts('sphalerite', 'bastnasite', 'topaz')

    event.create("snowchestite") // Hardmode only
        .dust().ore()
        .color(0x274c9f).iconSet('shiny')
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
	    .components('3x naquadah_oxide', 'pyromorphite')
        .addOreByproducts('chalcopyrite', 'vanadium_magnetite', 'naquadah') // Naquadah is replaced with naquadah hydroxide in expert_processing.js

    event.create("darmstadtite") // Hardmode only
        .dust().ore(2, 1)
        .iconSet('dull')
	    .components('2x darmstadtium', '3x sulfur')
        .addOreByproducts('rare_earth', 'rhodium_sulfate', 'darmstadtium')

    event.create("dulysite") // Hardmode only
        .dust().ore(2, 1)
        .iconSet('ruby')
	    .components('duranium', '3x chlorine')
        .addOreByproducts('sphalerite', 'duranium', 'europium')

        event.create("laurite")
        .dust().ore()
        .color(0x6f2c23).iconSet('diamond')
	    .components('ruthenium', '2x sulfur')
        .addOreByproducts('pyrite', 'ruthenium', 'rhodium')

        event.create("cuprorhodsite")
        .dust().ore()
        .color(0xc1aa82).iconSet('bright')
	    .components('copper', 'iron', '4x rhodium', '8x sulfur')
        .addOreByproducts('chalcocite', 'platinum', 'ruthenium')
})
