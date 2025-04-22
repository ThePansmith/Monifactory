// priority: 0
/*GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("omnium")
        .protons(130)
        .neutrons(234)
        .symbol("Nm");
    event.create("infinity")
        .protons(168)
        .neutrons(316)
        .symbol("∞");
})*/


GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("manyullyn")
        .ingot().fluid()
        .color(0xc05cff).secondaryColor(0xff00e0).iconSet("magic")
        .blastTemp(9200, "highest")
        .components("4x ardite", "4x cobalt", "mana")
        .flags(GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_FRAME, GTMaterialFlags.GENERATE_DENSE, GTMaterialFlags.GENERATE_SMALL_GEAR, GTMaterialFlags.GENERATE_ROTOR)

})
