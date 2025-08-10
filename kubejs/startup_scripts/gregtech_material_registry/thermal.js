// priority: 1
/**
 * Thermal Material Registry.
 * Used for registering Gregtech Materials
 * that are related to Thermal or its 1.12 version.
 */
// ? Keep in sync with
// ? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsThermal.java

GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
    event.create("magic").parent(GTMaterialIconSet.METALLIC)
})


GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("ardite")
        .ingot().fluid()
        .color(0xad2f05).secondaryColor(0x823c08)
        .iconSet("dull")
        .blastTemp(9200, "highest", GTValues.VHA[GTValues.UV], 1000)
        .flags(GTMaterialFlags.GENERATE_PLATE)

    event.create("lumium")
        .ingot().fluid()
        .color(0xf6ff99).secondaryColor(0xff7400)
        .iconSet("magic")
        .blastTemp(4500, "mid", GTValues.VA[GTValues.EV], 1000)
        .cableProperties(8192, 3, 0, true)
        .fluidPipeProperties(4500, 256, true, true, true, false)
        .components("4x tin_alloy", "2x sterling_silver", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create("signalum")
        .ingot().fluid()
        .color(0xff6b0f).secondaryColor(0xc32e00)
        .iconSet("magic")
        .blastTemp(4000, "high", GTValues.VA[GTValues.IV], 1400)
        .cableProperties(32768, 3, 0, true)
        .components("4x annealed_copper", "2x red_steel", "2x red_alloy", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)

    event.create("enderium")
        .ingot().fluid()
        .color(0x1f6b62).secondaryColor(0x16455f)
        .iconSet("magic")
        .blastTemp(6400, "highest", GTValues.VA[GTValues.LuV], 1600)
        .cableProperties(131072, 4, 0, true)
        .components("4x lead", "2x platinum", "blue_steel", "osmium", "tantalum", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)

    event.create("electrum_flux")
        .ingot().fluid()
        .color(0xf7be20).secondaryColor(0xffc400)
        .iconSet("metallic")
        .blastTemp(1100, "low")
        .components("6x electrum", "lumium", "signalum")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)

    // Mythril
    event.create("mythril")
        .ingot().liquid()
        .color(0x00d5ff).secondaryColor(0x0067ff)
        .iconSet("magic")
        .blastTemp(2141, null)
        .components("titanium", "mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FRAME)

})
