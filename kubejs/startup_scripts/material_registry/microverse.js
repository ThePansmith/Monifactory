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
        .components('8x osmium', '2x iridium')
        .iconSet('dull')
        .addOreByproducts('osmium', 'iridium', 'ruthenium')

    event.create("iridosmineyes")
        .dust().ore()
        .components('8x iridium', '2x osmium')
        .iconSet('dull')
        .addOreByproducts('iridium', 'osmium', 'rhodium')

    event.create("kaemanite")
        .dust().ore()
		.components('trinium', 'tantalum', '4x oxygen')
        .color(0xe7413c)
        .iconSet('bright')
		.addOreByproducts('niobium', 'trinium_sulfide', 'trinium')

    event.create("fluorite")
        .dust().ore()
        .color(0xFFFC9)
        .iconSet('rough')
		.components('calcium', '2x fluorine')

    event.create("darmstadtite")
        .dust().ore()
        .iconSet('dull')
		.components('2x darmstadtium', '3x sulfur')

    event.create("dulysite")
        .dust().ore()
        .iconSet('ruby')
		.components('duranium', '3x chlorine')
})
