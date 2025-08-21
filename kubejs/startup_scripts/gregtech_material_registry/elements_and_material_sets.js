// priority: 2
/**
 * Material Registry for custom elements and material sets.
 */


// Elements

GTCEuStartupEvents.registry("gtceu:element", event => {

    // Sculk

    event.create("cryolobus")
        .protons(-1)
        .neutrons(401)
        .symbol("ᛋ")
    event.create("cryococcus")
        .protons(-1)
        .neutrons(441)
        .symbol("ᛋ*")
    event.create("bioalloy")
        .protons(-1)
        .neutrons(481)
        .symbol("ᛋ**")
    event.create("sculk_supercondutcor")
        .protons(-2)
        .neutrons(442)
        .symbol("ᛊ")

    // Prismatic Crucible

    event.create("transcendental_matrix")
        .protons(6)
        .neutrons(32)
        .symbol("ᛝ")
    event.create("infinity")
        .protons(168)
        .neutrons(316)
        .symbol("∞")
    event.create("mana")
        .symbol("ᛗ")
    event.create("meta_null")
        .protons(0)
        .neutrons(0)
        .symbol("∅")
    event.create("monium")
        .protons(169)
        .neutrons(317)
        .symbol("Mu")

    // Netherite & Co. (Literally just Crystal Matrix since none of the others have elements)

    event.create("crystal_matrix")
        .protons(6)
        .neutrons(6)
        .symbol("C🞱")

    // Eltz

    event.create("eltz")
        .protons(15)
        .neutrons(15)
        .symbol("Ez")

    // Necrosiderite

    event.create("necrosiderite")
        .protons(67)
        .neutrons(-26)
        .symbol("Ns")

    // Omnium

    event.create("omnium")
        .protons(130)
        .neutrons(234)
        .symbol("Nm")

    // Naqfuel

    event.create("hyperdegenerate_matter")
        .protons(250)
        .neutrons(1000)
        .symbol("Ω")
    event.create("quadium")
        .protons(1)
        .neutrons(3)
        .symbol("Qd")
        .isIsotope(true)

    // Dilithium
    // Why does this need to be an element?

    event.create("dilithium")
        .protons(119)
        .neutrons(229)
        .symbol("Dl")

    // Taranium (HM Exclusive)

    if (doStoneline) {
        event.create("taranium")
            .protons(149)
            .neutrons(264)
            .symbol("Tn");
    }
})


// Material Sets

GTCEuStartupEvents.registry("gtceu:material_icon_set", event => {

    // Generic
    event.create("crystal").parent(GTMaterialIconSet.SHINY)
    event.create("magic").parent(GTMaterialIconSet.METALLIC)
    event.create("dilithium").parent(GTMaterialIconSet.DULL)

    // Sculk
    event.create("sculk_alloy").parent(GTMaterialIconSet.DULL)

    // Prismatic Crucible
    event.create("infinity").parent(GTMaterialIconSet.SHINY)
    event.create("meta_null").parent(GTMaterialIconSet.SHINY)
    event.create("monium").parent(GTMaterialIconSet.SHINY)

    // Eltz
    event.create("eltz").parent(GTMaterialIconSet.SHINY)

    // Miscellaneous
    event.create("mana").parent(GTMaterialIconSet.SHINY)
    event.create("necrosiderite").parent(GTMaterialIconSet.METALLIC)
    event.create("omnium").parent(GTMaterialIconSet.SHINY)
    event.create("hyperdegenerate_darconite").parent(GTMaterialIconSet.SHINY)

    // Only exists for a custom fluid texture?
    event.create("hyperdegenerate_matter").parent(GTMaterialIconSet.RADIOACTIVE)
})
