/**
 * Fixes the Thermal Systeams' dynamo conversion mechanic to use Steam Dynamo instead of Stirling Dynamo
 */

const ConversionKitItem = Java.loadClass("chiefarug.mods.systeams.ConversionKitItem")
const ThermalCore = Java.loadClass("cofh.thermal.core.ThermalCore")
const ThermalIDs = Java.loadClass("cofh.thermal.lib.util.ThermalIDs")
const SysteamsRegistry = Java.loadClass("chiefarug.mods.systeams.SysteamsRegistry")
const SteamDynamoRegistry = Java.loadClass("dev.joshument.steamdynamo.Registry")

StartupEvents.postInit(() => {
    // Remove entry for base Thermal dynamo
    ConversionKitItem.dynamoBoilerMap.remove(ThermalCore.BLOCKS["get(java.lang.String)"](ThermalIDs.ID_DYNAMO_STIRLING))

    // Add entry for new Steam dynamo
    ConversionKitItem.dynamoBoilerMap.put(SteamDynamoRegistry.Blocks.DYNAMO_STEAM.get(), SysteamsRegistry.Boilers.STIRLING.block())
})
