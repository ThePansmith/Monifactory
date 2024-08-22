// Recipe Types
const $ParallelHatchPartMachine = Java.loadClass('com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine')

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
    event.create('atomic_reconstructor', 'simple', GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .langValue("Atomic Reconstructor")
        .recipeType('atomic_reconstruction', true, true)
        .workableTieredHullRenderer('gtceu:block/machines/reconstructor')

    })
    // Parallel Hatch, is a little jank to get textures to work properly
    GTCEuStartupEvents.registry('gtceu:machine',event =>{
        event.create(
                "uhv_parallel_hatch",
                "custom",
                (holder, tier) => {
                    return new $ParallelHatchPartMachine(holder, tier);
                },
                GTValues.UHV
            )
            //.rotatationState(RotationState.NON_Y_AXIS)
            .abilities(PartAbility.PARALLEL_HATCH)
            .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_mk9"))

            event.create(
                "uev_parallel_hatch",
                "custom",
                (holder, tier) => {
                    return new $ParallelHatchPartMachine(holder, tier);
                },
                GTValues.UEV
            )
            //.rotatationState(RotationState.NON_Y_AXIS)
            .abilities(PartAbility.PARALLEL_HATCH)
            .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_mk10"))


})




    

