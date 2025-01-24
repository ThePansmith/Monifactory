/**
 * Microverse Material Registry.
 * Used for registering Gregtech Materials
 * that are related Microverse projectors, Microminers, or Microminer missions.
 */
// ? Keep in sync with
// ? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsMicroverse.java

// Microverse Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("microversium")
        .ingot()
        .color(0x9b61b8).iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x steel', 'glowstone', 'redstone', 'deuterium')
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
