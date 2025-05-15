// ! Hardcore mode chemicals
/**
 * Gregtech Chemical Materials Registry: Hardmode+
 * This file is for custom fluids (And some solids!)
 * used in custom chemlines specific to Hardmode like expert Titanium and Graphite.
 */

// Custom Naquadah Fuel Iconset
GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
    if (doHarderNaqFuel) {
        event.create("naquadah_superfuel").parent(GTMaterialIconSet.RADIOACTIVE)
    }
})

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

        event.create("hydrogen_peroxide")
            .liquid()
            .color(0xd2ffff)
            .components("2x hydrogen", "2x oxygen")

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

    if(doHarderNaqFuel) {
        // Liquid Naquadah Fuels and their ingredients (HM+ Only)
        event.create("naq_fuel_t1")
            .liquid()
            .color(0xB9E364)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("naq_fuel_t1_depleted")
            .liquid()
            .color(0x323D1C)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("naq_fuel_t2")
            .liquid()
            .color(0x56F075)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("naq_fuel_t2_depleted")
            .liquid()
            .color(0x123619)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("naquadah_superfuel")
            .color(0xFFFFFF).iconSet("naquadah_superfuel")
            .liquid(new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())

        event.create("naquadah_superfuel_depleted")
            .color(0x00002F)
            .liquid()
            .flags()

        event.create("raw_naquadah_solution")
            .liquid()
            .color(0x5E7855)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("piranha_solution")
            .liquid()
            .color(0xFFF382)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("hot_piranha_solution")
            .liquid()
            .color(0xFFC582)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("tritium_radon_difluoride")
            .gas()
            .color(0xFF5462)
            .components("1x tritium", "1x radon", "2x fluorine")

        event.create("inert_naquadah_blend")
            .liquid()
            .color(0x80D463)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("active_naquadah_blend")
            .liquid()
            .color(0xBBFF00)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("light_naquadah_isotope_fraction")
            .liquid()
            .color(0xDCFF7a)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("medium_naquadah_isotope_fraction")
            .liquid()
            .color(0xB0D93F)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("heavy_naquadah_isotope_fraction")
            .liquid()
            .color(0x698A11)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("naquadah_isotope_sludge")
            .liquid()
            .color(0x253005)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("cracked_light_naquadah_isotope_fraction")
            .liquid()
            .color(0xFFFF7A)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("cracked_medium_naquadah_isotope_fraction")
            .liquid()
            .color(0xD9D93F)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("cracked_heavy_naquadah_isotope_fraction")
            .liquid()
            .color(0x888811)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("cracked_naquadah_isotope_sludge")
            .liquid()
            .color(0x253003)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("heavy_atomic_residue")
            .liquid()
            .color(0xb4441F)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("superheavy_atomic_residue")
            .liquid()
            .color(0x990000)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("purified_heavy_residue")
            .liquid()
            .color(0xDE643B)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("purified_superheavy_residue")
            .liquid()
            .color(0xE60000)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

        event.create("exotic_particle_solution")
            .liquid()
            .color(0xF8EBBE)
            .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    }
})
