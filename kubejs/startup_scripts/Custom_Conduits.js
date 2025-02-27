/**
 * Define custom EnderIO conduit tiers and their flow rate
 * using KubeJS-EnderIO.
 */
EnderIOEvents.conduits(event => {
    event.registerEnergyConduit("conductive_conduit", "Conductive Iron Energy Conduit", 512)
    event.registerEnergyConduit("energetic_conduit", "Energetic Alloy Energy Conduit", 2048)
    event.registerEnergyConduit("vibrant_conduit", "Vibrant Alloy Energy Conduit", 8192)
    event.registerEnergyConduit("endsteel_conduit", "End Steel Energy Conduit", 32768)
    event.registerEnergyConduit("lumium_conduit", "Lumium Energy Conduit", 131072)
    event.registerEnergyConduit("signalum_conduit", "Signalum Energy Conduit", 524288)
    event.registerEnergyConduit("enderium_conduit", "Enderium Energy Conduit", 2097152)
    event.registerEnergyConduit("cryolobus_conduit", "Cryolobus Energy Conduit", 8388608)
    event.registerEnergyConduit("sculk_superconductor_conduit", "Sculk Superconductor Energy Conduit", 134217728)
})
