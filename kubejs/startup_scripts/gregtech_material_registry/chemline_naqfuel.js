/**
 * Material Registry for Naquadah Fuel Processing
 */

GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
    event.create("naquadah_superfuel").parent(GTMaterialIconSet.RADIOACTIVE)
})

// Tweaks to Fusion reactors to allow for separate "particle acceleration" recipe type
GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    // Block scope so as to not conflict with the similar declaration in multiblock_registry.js
    const FusionReactorMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.electric.FusionReactorMachine")

    event.create("particle_acceleration")
        .category("multiblock")
        .setMaxIOSize(0, 0, 2, 1)
        .setEUIO("in")
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ARC)
        .setMaxTooltips(4)
        .setUiBuilder((a, b) => FusionReactorMachine.addEUToStartLabel(a, b))
})

StartupEvents.postInit(event => {
    // Do this with java methods since we can't in the KJS builder
    GTRecipeTypes.get("particle_acceleration").setOffsetVoltageText(true)

    // Apply the particle acceleration recipe type to Fusion Reactors
    GTMultiMachines.FUSION_REACTOR.forEach(fusionReactorTier => {
        if(fusionReactorTier != null) fusionReactorTier.setRecipeTypes([GTRecipeTypes.FUSION_RECIPES, GTRecipeTypes.get("particle_acceleration")])
    })
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("crude_naquadah_fuel")
        .liquid()
        .color(0xB9E364)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("naquadah_fuel")
        .liquid()
        .color(0x56F075)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("naquadah_superfuel")
        .color(0xFFFFFF).iconSet("naquadah_superfuel")
        .liquid(new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())

    event.create("raw_naquadah_solution")
        .liquid()
        .color(0x5E7855)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("piranha_solution")
        .liquid()
        .color(0xFFF382)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("tritium_radon_difluoride")
        .gas()
        .color(0xFF5462)
        .components("1x tritium", "1x radon", "2x fluorine")

    event.create("active_naquadah_blend")
        .liquid()
        .color(0xBBFF00)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("light_naquadah_isotope_fraction")
        .liquid()
        .color(0xDCFF7a)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("medium_naquadah_isotope_fraction")
        .liquid()
        .color(0xB0D93F)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("heavy_naquadah_isotope_fraction")
        .liquid()
        .color(0x698A11)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("naquadah_isotope_sludge")
        .liquid()
        .color(0x253005)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("cracked_light_naquadah_isotope_fraction")
        .liquid()
        .color(0xFFFF7A)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("cracked_medium_naquadah_isotope_fraction")
        .liquid()
        .color(0xD9D93F)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("cracked_heavy_naquadah_isotope_fraction")
        .liquid()
        .color(0x888811)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("cracked_naquadah_isotope_sludge")
        .liquid()
        .color(0x253003)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("heavy_atomic_residue")
        .liquid()
        .color(0xb4441F)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("superheavy_atomic_residue")
        .liquid()
        .color(0x990000)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("purified_heavy_residue")
        .liquid()
        .color(0xDE643B)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("purified_superheavy_residue")
        .liquid()
        .color(0xE60000)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("cracked_heavy_atomic_residue")
        .liquid()
        .color(0xe97023)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("cracked_superheavy_atomic_residue")
        .liquid()
        .color(0xFF3300)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("exotic_particle_solution")
        .liquid()
        .color(0xF8EBBE)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    event.create("quadium")
        .gas()
        .element(GTElements.get("quadium"))
        .color(0x7c5bff)

})
