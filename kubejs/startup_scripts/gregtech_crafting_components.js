const Map = Java.loadClass("java.util.Map");

GTCEuStartupEvents.craftingComponents(event => {

    //Make LuV+ electrolyzer wires not osmium for funsies :)
    let wireElectricMap = {};
    event.modify(CraftingComponent.WIRE_ELECTRIC, Map.of(
        GTValues.LuV, UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.VanadiumGallium),
        GTValues.ZPM, UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.NaquadahAlloy),
        GTValues.UV, UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.get('sculk_superconductor')),
        GTValues.UHV, UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.get('activated_netherite')),
        GTValues.UEV, UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.Holmium),
        GTValues.UIV, UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.get('monium')),
    ));

    //Omnium & Holmium for wires/cables
    let wireCableComponentPrefixes = [
        [TagPrefix.wireGtQuadruple, TagPrefix.wireGtQuadruple, CraftingComponent.WIRE_QUAD],
        [TagPrefix.wireGtOctal, TagPrefix.wireGtOctal, CraftingComponent.WIRE_OCT],
        [TagPrefix.wireGtHex, TagPrefix.wireGtHex, CraftingComponent.WIRE_HEX],
        [TagPrefix.cableGtSingle, TagPrefix.wireGtSingle, CraftingComponent.CABLE],
        [TagPrefix.cableGtDouble, TagPrefix.wireGtDouble, CraftingComponent.CABLE_DOUBLE],
        [TagPrefix.cableGtQuadruple, TagPrefix.wireGtQuadruple, CraftingComponent.CABLE_QUAD],
        [TagPrefix.cableGtOctal, TagPrefix.wireGtOctal, CraftingComponent.CABLE_OCT],
        //[TagPrefix.wireGtHex, TagPrefix.cableGtHex, CraftingComponent.CABLE_HEX] // Seems borked? Causes crashes when uncommented
    ]

    wireCableComponentPrefixes.forEach(prefixComponentPair => {
        event.modify(prefixComponentPair[2], Map.of(
            GTValues.UEV, UnificationEntry(prefixComponentPair[0], GTMaterials.get('omnium')),
            GTValues.UIV, UnificationEntry(prefixComponentPair[1], GTMaterials.Holmium),
        ));
    });

    //Netherite, Holmium, and Monium for tier up wires/cables
    //Currently useless because GT only autogenerates transformer recipes up to UV.
    let wireCableTierUpComponentPrefixes = [
        [TagPrefix.wireGtSingle, CraftingComponent.CABLE_TIER_UP],
        [TagPrefix.wireGtDouble, CraftingComponent.CABLE_TIER_UP_DOUBLE],
        [TagPrefix.wireGtQuadruple, CraftingComponent.CABLE_TIER_UP_QUAD],
        //[TagPrefix.wireGtOctal, CraftingComponent.CABLE_TIER_UP_OCT], // Seems borked. Same here as above.
        [TagPrefix.wireGtHex, CraftingComponent.CABLE_TIER_UP_HEX]
    ]

    wireCableTierUpComponentPrefixes.forEach(prefixComponentPair => {
        event.modify(prefixComponentPair[1], Map.of(
            GTValues.UHV, UnificationEntry(prefixComponentPair[0], GTMaterials.get('activated_netherite')),
            GTValues.UEV, UnificationEntry(prefixComponentPair[0], GTMaterials.Holmium),
            GTValues.UIV, UnificationEntry(prefixComponentPair[0], GTMaterials.get('monium')),
        ));
    });

    // Pipes
    let pipeComponentPrefixes = [
        [TagPrefix.pipeNormalFluid, CraftingComponent.PIPE_NORMAL],
        [TagPrefix.pipeLargeFluid, CraftingComponent.PIPE_LARGE],
        [TagPrefix.pipeNonupleFluid, CraftingComponent.PIPE_NONUPLE]
    ]

    pipeComponentPrefixes.forEach(prefixComponentPair => {
        event.modify(prefixComponentPair[1], Map.of(
            GTValues.UHV, UnificationEntry(prefixComponentPair[0], GTMaterials.Neutronium),
            GTValues.UEV, UnificationEntry(prefixComponentPair[0], GTMaterials.get('activated_netherite')),
            GTValues.UIV, UnificationEntry(prefixComponentPair[0], GTMaterials.Holmium),
        ));
    });

    // Glass
    event.modify(CraftingComponent.GLASS, Map.of(
        GTValues.UHV, Item.of('gtceu:fusion_glass'),
        GTValues.UEV, Item.of('gtceu:fusion_glass'),
        GTValues.UIV, Item.of('gtceu:fusion_glass'),
    ));

    // Plates
    event.modifyUnificationEntry(CraftingComponent.PLATE, Map.of(
        GTValues.UEV, UnificationEntry(TagPrefix.plate, GTMaterials.get('omnium')),
        GTValues.UIV, UnificationEntry(TagPrefix.plate, GTMaterials.get('infinity')),
        GTValues.MAX, UnificationEntry(TagPrefix.plate, GTMaterials.get('holmium')),
    ));

    // Hull plates
    event.modifyUnificationEntry(CraftingComponent.HULL_PLATE, Map.of(
        GTValues.UEV, UnificationEntry(TagPrefix.plate, GTMaterials.get('polyethyl_cyanoacrylate')),
        GTValues.UIV, UnificationEntry(TagPrefix.plate, GTMaterials.get('polyethyl_cyanoacrylate')),
        GTValues.MAX, UnificationEntry(TagPrefix.plate, GTMaterials.get('polyethyl_cyanoacrylate')),
    ));

    // Rotors
    event.modifyUnificationEntry(CraftingComponent.ROTOR, Map.of(
        GTValues.UHV, UnificationEntry(TagPrefix.rotor, GTMaterials.Neutronium),
        GTValues.UEV, UnificationEntry(TagPrefix.rotor, GTMaterials.get('activated_netherite')),
        GTValues.UIV, UnificationEntry(TagPrefix.rotor, GTMaterials.Holmium),
    ));

    // TODO: Sawblades (May require making tools for the material)

    // Resistive heating wires (typically, these match the EBF coil for that tier)
    let heatingCoilComponentPrefixes = [
        [TagPrefix.wireGtDouble, CraftingComponent.COIL_HEATING],
        [TagPrefix.wireGtQuadruple, CraftingComponent.COIL_HEATING_DOUBLE],
    ]

    heatingCoilComponentPrefixes.forEach(prefixComponentPair => {
        event.modify(prefixComponentPair[1], Map.of(
            GTValues.UHV, UnificationEntry(prefixComponentPair[0], GTMaterials.get('omnium')),
            GTValues.UEV, UnificationEntry(prefixComponentPair[0], GTMaterials.get('omnium')),
            GTValues.UIV, UnificationEntry(prefixComponentPair[0], GTMaterials.get('omnium')),
        ));
    });

    // Electric Coils
    event.modifyUnificationEntry(CraftingComponent.COIL_ELECTRIC, Map.of(
        GTValues.UHV, UnificationEntry(TagPrefix.wireGtHex, GTMaterials.get('sculk_superconductor')),
        GTValues.UEV, UnificationEntry(TagPrefix.wireGtHex, GTMaterials.get('activated_netherite')),
        GTValues.UIV, UnificationEntry(TagPrefix.wireGtHex, GTMaterials.get('holmium')),
    ));

    // Magnetic Rods
    event.modifyUnificationEntry(CraftingComponent.STICK_MAGNETIC, Map.of(
        GTValues.UV, UnificationEntry(TagPrefix.rodLong, GTMaterials.SamariumMagnetic),
        GTValues.UHV, UnificationEntry(TagPrefix.rodLong, GTMaterials.get('magnetic_terbium')),
        GTValues.UEV, UnificationEntry(TagPrefix.rodLong, GTMaterials.get('magnetic_terbium')),
        GTValues.UIV, UnificationEntry(TagPrefix.rodLong, GTMaterials.get('magnetic_terbium')),
    ));

    // Distillation Rods
    event.modifyUnificationEntry(CraftingComponent.STICK_DISTILLATION, Map.of(
        GTValues.UHV, UnificationEntry(TagPrefix.spring, GTMaterials.Actinium),
        GTValues.UEV, UnificationEntry(TagPrefix.spring, GTMaterials.get('sculk_bioalloy')),
        GTValues.UIV, UnificationEntry(TagPrefix.spring, GTMaterials.get('eltz')),
    ));

    // Electromagnetic Rods
    event.modifyUnificationEntry(CraftingComponent.STICK_ELECTROMAGNETIC, Map.of(
        GTValues.IV, UnificationEntry(TagPrefix.rod, GTMaterials.Neodymium),
        GTValues.LuV, UnificationEntry(TagPrefix.rod, GTMaterials.Samarium),
        GTValues.ZPM, UnificationEntry(TagPrefix.rod, GTMaterials.Samarium),
        GTValues.UV, UnificationEntry(TagPrefix.rod, GTMaterials.Samarium),
        GTValues.UHV, UnificationEntry(TagPrefix.rod, GTMaterials.Terbium),
        GTValues.UEV, UnificationEntry(TagPrefix.rod, GTMaterials.Terbium),
        GTValues.UIV, UnificationEntry(TagPrefix.rod, GTMaterials.Terbium),
    ));

    // Chem reactor pipe ingredient
    event.modifyUnificationEntry(CraftingComponent.PIPE_REACTOR, Map.of(
        GTValues.UHV, UnificationEntry(TagPrefix.pipeNormalFluid, GTMaterials.Polybenzimidazole),
        GTValues.UEV, UnificationEntry(TagPrefix.pipeLargeFluid, GTMaterials.Polybenzimidazole),
        GTValues.UIV, UnificationEntry(TagPrefix.pipeLargeFluid, GTMaterials.Polybenzimidazole),
    ));

    // PIC ingredient
    event.modifyItem(CraftingComponent.POWER_COMPONENT, Map.of(
        GTValues.UEV, Item.of('kubejs:uxpic_chip'),
        GTValues.UIV, Item.of('kubejs:uxpic_chip'),
    ));

    // Spring
    let springMap = {};
    event.modifyUnificationEntry(CraftingComponent.SPRING, Map.of(
        GTValues.UEV, UnificationEntry(TagPrefix.spring, GTMaterials.get('activated_netherite')),
        GTValues.UIV, UnificationEntry(TagPrefix.spring, GTMaterials.get('holmium')),
    ));

    // Frame
    event.modifyUnificationEntry(CraftingComponent.FRAME, Map.of(
        GTValues.UHV, UnificationEntry(TagPrefix.frameGt, GTMaterials.Neutronium),
        GTValues.UEV, UnificationEntry(TagPrefix.frameGt, GTMaterials.get('omnium')),
        GTValues.UIV, UnificationEntry(TagPrefix.frameGt, GTMaterials.get('infinity')),
    ));
});
