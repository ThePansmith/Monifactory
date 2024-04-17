// Recipe Types
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('atomic_reconstruction')
        .category('reconstruction')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)

    event.create('resonator')
        .category('resonator')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.PORTAL_CLOSING)
})

// Machines
GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Atomic Reconstructor
    event.create('atomic_reconstructor', 'simple', GTValues.MV)
        .recipeType('atomic_reconstruction', true, true)
        .workableTieredHullRenderer('gtceu:block/machines/reconstructor')

    event.create('resonator', 'simple', GTValues.MV)
        .recipeType('resonator', true, true)
        .workableTieredHullRenderer('gtceu:block/machines/resonator')
})