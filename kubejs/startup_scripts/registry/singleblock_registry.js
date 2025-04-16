/**
 * Singleblock registry.
 * This is the place where the Atomic Reconstructor machine/recipe type is defined
 * and custom Parallel Control hatches.
 */
const $ParallelHatchPartMachine = Java.loadClass("com.gregtechceu.gtceu.common.machine.multiblock.part.ParallelHatchPartMachine")

// GT Atomic Reconstructor recipe type
GTCEuStartupEvents.registry("gtceu:recipe_type", event => {
    event.create("atomic_reconstruction")
        .category("reconstruction")
        .setEUIO("in")
        .setMaxIOSize(1, 1, 0, 0)
        .setSlotOverlay(false, false, GuiTextures.COMPRESSOR_OVERLAY)
        .setProgressBar(GuiTextures.PROGRESS_BAR_ARROW, FillDirection.LEFT_TO_RIGHT)
        .setSound(GTSoundEntries.ELECTROLYZER)
})

// GT Atomic Reconstructor machine
GTCEuStartupEvents.registry("gtceu:machine", event => {
    event.create("atomic_reconstructor", "simple")
        .tiers(GTValues.LV, GTValues.MV, GTValues.HV, GTValues.EV, GTValues.IV, GTValues.LuV, GTValues.ZPM, GTValues.UV, GTValues.UHV, GTValues.UEV, GTValues.UIV)
        .definition((tier, builder) =>
            builder
                .langValue(`${GTValues.VLVH[tier]} Atomic Reconstructor`)
                .recipeType("atomic_reconstruction")
                .workableTieredHullRenderer("gtceu:block/machines/reconstructor")
        )
})


// Giga, Omega, etc. Parallel Hatches
GTCEuStartupEvents.registry("gtceu:machine", event => {
    /**
     * @param {string} tierName
     * @param {number} tierNumber
     */
    function createParallelHatch(tierName, tierNumber) {
        event.create(tierName + "_parallel_hatch", "custom")
            .machine((holder, tier) => new $ParallelHatchPartMachine(holder, tier))
            .tiers(tierNumber)
            .definition((tier, builder) => builder
                .rotationState(RotationState.ALL)
                .abilities(PartAbility.PARALLEL_HATCH)
                .workableTieredHullRenderer(GTCEu.id("block/machines/parallel_hatch_mk" + tierNumber))
            )
    }
    createParallelHatch("uhv", GTValues.UHV)
    createParallelHatch("uev", GTValues.UEV)
    createParallelHatch("uiv", GTValues.UIV)
    createParallelHatch("max", GTValues.MAX)
})
