/**
 * Registration of elements & materials for Naquadah Fuel
 */

GTCEuStartupEvents.registry("gtceu:element", event => {
    event.create("quadium")
        .protons(1)
        .neutrons(3)
        .symbol("Qd")
        .isIsotope(true);

    event.create("hyperdegenerate_matter")
        .protons(250)
        .neutrons(1000)
        .symbol("Ω");
})

GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {
    event.create("hyperdegenerate_matter").parent(GTMaterialIconSet.RADIOACTIVE)
    event.create("naquadah_superfuel").parent(GTMaterialIconSet.RADIOACTIVE)
})

GTCEuStartupEvents.registry("gtceu:material", event => {
    event.create("quadium")
        .gas()
        .element(GTElements.get("quadium"))
        .color(0x7c5bff)

    event.create("hyperdegenerate_matter")
        .element(GTElements.get("hyperdegenerate_matter"))
        .color(0xffffff).iconSet("hyperdegenerate_matter")
        .liquid(new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())

    event.create("crude_naquadah_fuel")
        .liquid()
        .color(0xB9E364)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)

    /*
    event.create("crude_naquadah_fuel_depleted")
        .liquid()
        .color(0x323D1C)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    */

    event.create("naquadah_fuel")
        .liquid()
        .color(0x56F075)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    /*
    event.create("naquadah_fuel_depleted")
        .liquid()
        .color(0x123619)
        .flags(GTMaterialFlags.DISABLE_DECOMPOSITION)
    */

    event.create("naquadah_superfuel")
        .color(0xFFFFFF).iconSet("naquadah_superfuel")
        .liquid(new GTFluidBuilder().state(GTFluidState.PLASMA).customStill())

    /*
    event.create("naquadah_superfuel_depleted")
        .color(0x00002F)
        .liquid()
        .flags()
    */

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
})
