// Recipe Types
GTCEuStartupEvents.registry('gtceu:recipe_type', event => {
    event.create('atomic_reconstruction')
        .category('reconstruction')
        .setEUIO('in')
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// Machines
GTCEuStartupEvents.registry('gtceu:machine', event => {
    // Atomic Reconstructor
    event.create('atomic_reconstructor', 'simple', GTValues.MV, GTValues.EV, GTValues.LuV, GTValues.UV, GTValues.UEV)
        .langValue("Atomic Reconstructor")
        .recipeType('atomic_reconstruction', true, true)
        .workableTieredHullRenderer('gtceu:block/machines/reconstructor')
})