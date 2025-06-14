// ! Hardcore mode chemicals
/**
 * Gregtech Chemical Materials Registry: Hardmode+
 * This file is for custom fluids (And some solids!)
 * used in custom chemlines specific to Hardmode like expert Titanium and Graphite.
 */

GTCEuStartupEvents.registry("gtceu:material", event => {
    if (doHarderProcessing) {
        event.create("tungsten_trioxide")
            .dust()
            .color(0xC7D300).iconSet("dull")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("tungsten", "3x oxygen")

        event.create("beryllium_oxide")
            .ingot()
            .color(0x54C757).iconSet("dull")
            .flags(GTMaterialFlags.GENERATE_ROD, GTMaterialFlags.GENERATE_RING)
            .components("beryllium", "oxygen")

        event.create("niobium_pentoxide")
            .dust()
            .color(0xBAB0C3).iconSet("rough")
            .components("2x niobium", "5x oxygen")

        event.create("tantalum_pentoxide")
            .dust()
            .color(0x72728A).iconSet("rough")
            .components("2x tantalum", "5x oxygen")

        event.create("manganese_difluoride")
            .dust()
            .color(0xEF4B3D).iconSet("rough")
            .components("manganese", "2x fluorine")

        event.create("molybdenum_trioxide")
            .dust()
            .color(0xCBCFDA).iconSet("rough")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("molybdenum", "3x oxygen")

        event.create("wollastonite")
            .dust()
            .color(0xF7F7E7).iconSet("bright")
            .components("calcium", "silicon", "3x oxygen")

        event.create("sodium_metavanadate")
            .dust()
            .color(0xe6bb22).iconSet("dull")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("sodium", "vanadium", "3x oxygen")

        event.create("vanadium_pentoxide")
            .dust()
            .color(0xffcf33).iconSet("rough")
            .components("2x vanadium", "5x oxygen")

        event.create("ammonium_metavanadate")
            .dust()
            .color(0xf7e37e).iconSet("dull")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("nitrogen", "4x hydrogen", "vanadium", "3x oxygen")

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

        // Harder Fluorantimonic Acid
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

    if (doHarderRecipes) {
        // Kapton K
        event.create("durene")
            .dust()
            .fluid()
            .color(0x336040).iconSet("fine")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("10x carbon", "14x hydrogen")
            .formula("C6H2(CH3)4");

        event.create("pyromellitic_dianhydride")
            .dust()
            .fluid()
            .color(0xB48C63)
            .components("10x carbon", "2x hydrogen", "6x oxygen")
            .formula("C6H2(C2O3)2");

        event.create("dimethylformamide")
            .fluid()
            .color(0x42bdff)
            .components("3x carbon", "7x hydrogen", "nitrogen", "oxygen")

        event.create("oxydianiline")
            .dust()
            .fluid()
            .color(0xf0e130).iconSet("dull")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("12x carbon", "12x hydrogen", "2x nitrogen", "oxygen")
            .formula("O(C6H4NH2)2");

        event.create("oxydianiline_sludge")
            .fluid()
            .color(0xD9CCBF)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
            .components("1x oxydianiline", "1x dimethylformamide")

        event.create("kapton_k")
            .polymer()
            .fluid()
            .color(0x915A23)
            .components("1x pyromellitic_dianhydride", "1x oxydianiline")
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION, GTMaterialFlags.GENERATE_PLATE, GTMaterialFlags.STICKY)
    }
})
