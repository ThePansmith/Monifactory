/**
 * Material Registry for harder Processing Lines that register enough materials to get their own registry file.
 */

// Harder Tungsten Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    if (doHarderProcessing) {
        event.create("tungsten_trioxide")
            .dust()
            .color(0xC7D300).iconSet("dull")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("tungsten", "3x oxygen")
    }
})

// Magnetron Components
GTCEuStartupEvents.registry("gtceu:material", event => {

    if (doHarderProcessing) {
        event.create("beryllium_oxide")
            .ingot()
            .color(0x54C757).iconSet("dull")
            .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_RING)
            .components("beryllium", "oxygen")
    }
})

// Harder Tantalite/Pyrochlore Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    if (doHarderProcessing) {
        event.create("niobium_pentoxide")
            .dust()
            .color(0xBAB0C3).iconSet("rough")
            .components("2x niobium", "5x oxygen")

        event.create("manganese_difluoride")
            .dust()
            .color(0xEF4B3D).iconSet("rough")
            .components("manganese", "2x fluorine")

        event.create("iron_ii_fluoride")
            .dust()
            .color(0xFFEBEE).iconSet("rough")
            .components("iron", "2x fluorine")
    }
})

// Harder Molybdenite/Wulfenite/Powellite Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    if (doHarderProcessing) {
        event.create("molybdenum_trioxide")
            .dust()
            .color(0xCBCFDA).iconSet("rough")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("molybdenum", "3x oxygen")
    }
})

// Vanadium Pentoxide
GTCEuStartupEvents.registry("gtceu:material", event => {

    if (doHarderProcessing) {
        event.create("vanadium_pentoxide")
            .dust()
            .color(0xffcf33).iconSet("rough")
            .components("2x vanadium", "5x oxygen")
    }
})

// Harder Graphene Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    if (doHarderProcessing) {
        event.create("phthalic_anhydride")
            .dust()
            .color(0xeeaaee).iconSet("dull")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("8x carbon", "4x hydrogen", "3x oxygen")
            .formula("C6H4(CO)2O");

        event.create("ethylanthraquinone")
            .dust()
            .color(0xf1e181)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("16x carbon", "12x hydrogen", "2x oxygen")
            .formula("C6H4(CO)2C6H3(CH2CH3)");

        event.create("hydrazine") // is this a reference to the book 'Ignition! An Informal History of Liquid Rocket Propellants.' no way
            .fluid()
            .color(0xb50707)
            .components("2x nitrogen", "4x hydrogen")

        event.create("acetone_azine")
            .fluid()
            .color(0xa1e1e1)
            .components("6x carbon", "12x hydrogen", "2x nitrogen")
            .formula("((CH3)2(CN))2");

        event.create("graphene_oxide")
            .dust()
            .color(0x777777).iconSet("rough")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("graphene", "oxygen")
    }
})

// Harder Fluoroantiamonic Acid Processing
GTCEuStartupEvents.registry("gtceu:material", event => {

    if (doHarderProcessing) {
        event.create("antimony_pentafluoride")
            .fluid()
            .color(0xe3f1f1)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("antimony", "5x fluorine")

        event.create("lead_metasilicate")
            .dust()
            .color(0xF7F7E7).iconSet("dull")
            .components("lead", "silicon", "3x oxygen")
    }
})
