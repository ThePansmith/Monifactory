/**
 * Microverse Material Registry.
 * Used for registering Gregtech Materials
 * that are related Microverse projectors, Microminers, or Microminer missions.
 */
//? Keep in sync with
//? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsMicroverse.java

// Microverse Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("microversium")
        .ingot()
        .color(0x9b61b8).iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.DISABLE_DECOMPOSITION)
        .components('2x steel', 'glowstone', 'redstone', 'deuterium')
        .cableProperties(128, 4, 2, false)
})
