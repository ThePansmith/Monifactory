/**
 * Removes the Sterilizing Filter Casing from the Cleanroom multiblock entirely.
 */

let CleanroomFilterType = Java.loadClass("com.gregtechceu.gtceu.common.block.CleanroomFilterType")

StartupEvents.postInit(event => {
    GTCEuAPI.CLEANROOM_FILTERS.remove(CleanroomFilterType.FILTER_CASING_STERILE)
})
