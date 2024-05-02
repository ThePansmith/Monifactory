//? Keep in sync with
//? https://github.com/Nomi-CEu/Nomi-Labs/blob/main/src/main/java/com/nomiceu/nomilabs/gregtech/material/registry/register/LabsThermal.java

// Thermal Materials
GTCEuStartupEvents.registry('gtceu:material', event => {
    event.create("ardite")
        .ingot().fluid()
        .color(0xad2f05).iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE)
		.components('3x red_steel', 'blaze')

    event.create("mana")
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
        .element(GTElements.get("mana")) // TODO check

    event.create("manyullyn")
        .ingot().fluid()
        .color(0x9949cc).iconSet('metallic')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.NO_SMELTING, GTMaterialFlags.GENERATE_DENSE)
		.components('4x ardite', '4x cobalt', 'mana')

    event.create("signalum")
        .ingot().fluid()
        .color(0xff7f0f).iconSet('shiny')
        .blastTemp(4000, 'mid')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_GEAR)
		.components('4x annealed_copper', '2x ardite', '2x red_alloy')
        .cableProperties(32768, 1, 0, true)

    event.create("lumium")
        .ingot().fluid()
        .color(0xf6ff99).iconSet('bright')
        .blastTemp(4500, 'mid')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
		.components('4x tin_alloy', '2x sterling_silver')
        .cableProperties(8192, 1, 0, true)
        .fluidPipeProperties(4500, 256, true, true, true, false)

    event.create("enderium")
        .ingot().fluid()
        .color(0x1f6b62).iconSet('shiny')
        .blastTemp(6400, 'highest')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR, GTMaterialFlags.GENERATE_FINE_WIRE)
		.components('4x lead', '2x platinum', 'blue_steel', 'osmium')
        .cableProperties(131072, 1, 0, true)

    event.create("electrum_flux")
        .ingot().fluid()
        .color(0xf7be20).iconSet('bright')
        .blastTemp(1100, 'low')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
		.components('6x electrum', 'lumium', 'signalum');

	event.create("mythril") // mithril
        .ingot()
        .color(0x428fdb).iconSet('dull')
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_GEAR)
		.components('titanium', 'mana');
})