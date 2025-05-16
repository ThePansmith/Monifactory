// priority: -1000
/**
 * Unlike how screret showcases the functionality of this event in his discord messge:
 * https://discord.com/channels/914926812948234260/1229854271613436066/1279802878822711407
 * there is no "Map.of()" to create map objects out of varargs.
 *
 * Worse still, I could not find an analog to that function.
 * Therefore we declare empty maps and then populate them afterwards.
 */

GTCEuStartupEvents.craftingComponents(event => {

    // Make LuV+ electrolyzer wires not osmium for funsies :)
    let wireElectricMap = {};
    wireElectricMap[GTValues.LuV] = UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.VanadiumGallium);
    wireElectricMap[GTValues.ZPM] = UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.NaquadahAlloy);
    wireElectricMap[GTValues.UV] = UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.get("sculk_superconductor"));
    wireElectricMap[GTValues.UHV] = UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.get("activated_netherite"));
    wireElectricMap[GTValues.UEV] = UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.Holmium);
    wireElectricMap[GTValues.UIV] = UnificationEntry(TagPrefix.wireGtSingle, GTMaterials.get("monium"));
    event.modify(CraftingComponent.WIRE_ELECTRIC, wireElectricMap)

    // Omnium & Holmium for wires/cables
    let wireCableComponentPrefixes = [
        [TagPrefix.wireGtQuadruple, TagPrefix.wireGtQuadruple, CraftingComponent.WIRE_QUAD],
        [TagPrefix.wireGtOctal, TagPrefix.wireGtOctal, CraftingComponent.WIRE_OCT],
        [TagPrefix.wireGtHex, TagPrefix.wireGtHex, CraftingComponent.WIRE_HEX],
        [TagPrefix.cableGtSingle, TagPrefix.wireGtSingle, CraftingComponent.CABLE],
        [TagPrefix.cableGtDouble, TagPrefix.wireGtDouble, CraftingComponent.CABLE_DOUBLE],
        [TagPrefix.cableGtQuadruple, TagPrefix.wireGtQuadruple, CraftingComponent.CABLE_QUAD],
        [TagPrefix.cableGtOctal, TagPrefix.wireGtOctal, CraftingComponent.CABLE_OCT],
        // [TagPrefix.cableGtHex, TagPrefix.wireGtHex, CraftingComponent.CABLE_HEX] // Seems borked? Causes crashes when uncommented
    ]

    wireCableComponentPrefixes.forEach(prefixComponentPair => {
        let wireMap = {};
        wireMap[GTValues.UEV] = UnificationEntry(prefixComponentPair[0], GTMaterials.get("darconite"));
        wireMap[GTValues.UIV] = UnificationEntry(prefixComponentPair[0], GTMaterials.Holmium);
        wireMap[GTValues.MAX] = UnificationEntry(prefixComponentPair[1], GTMaterials.get("monium"));
        event.modify(prefixComponentPair[2], wireMap)
    })

    // Netherite, Holmium, and Monium for tier up wires/cables
    // Currently useless because GT only autogenerates transformer recipes up to UV.
    let wireCableTierUpComponentPrefixes = [
        [TagPrefix.wireGtSingle, CraftingComponent.CABLE_TIER_UP],
        [TagPrefix.wireGtDouble, CraftingComponent.CABLE_TIER_UP_DOUBLE],
        [TagPrefix.wireGtQuadruple, CraftingComponent.CABLE_TIER_UP_QUAD],
        // [TagPrefix.wireGtOctal, CraftingComponent.CABLE_TIER_UP_OCT], // Seems borked. Same here as above.
        [TagPrefix.wireGtHex, CraftingComponent.CABLE_TIER_UP_HEX]
    ]

    wireCableTierUpComponentPrefixes.forEach(prefixComponentPair => {
        let wireTierUpMap = {};
        wireTierUpMap[GTValues.UHV] = UnificationEntry(prefixComponentPair[0], GTMaterials.get("activated_netherite"));
        wireTierUpMap[GTValues.UEV] = UnificationEntry(prefixComponentPair[0], GTMaterials.Holmium);
        wireTierUpMap[GTValues.UIV] = UnificationEntry(prefixComponentPair[0], GTMaterials.get("monium"));
        event.modify(prefixComponentPair[1], wireTierUpMap)
    })

    // Pipes
    let pipeComponentPrefixes = [
        [TagPrefix.pipeNormalFluid, CraftingComponent.PIPE_NORMAL],
        [TagPrefix.pipeLargeFluid, CraftingComponent.PIPE_LARGE],
        [TagPrefix.pipeNonupleFluid, CraftingComponent.PIPE_NONUPLE]
    ]

    pipeComponentPrefixes.forEach(prefixComponentPair => {
        let pipeMap = {};
        pipeMap[GTValues.UHV] = UnificationEntry(prefixComponentPair[0], GTMaterials.Neutronium);
        pipeMap[GTValues.UEV] = UnificationEntry(prefixComponentPair[0], GTMaterials.get("activated_netherite"));
        pipeMap[GTValues.UIV] = UnificationEntry(prefixComponentPair[0], GTMaterials.Holmium);
        event.modify(prefixComponentPair[1], pipeMap)
    })

    // Glass
    let glassMap = {};
    glassMap[GTValues.UHV] = Item.of("gtceu:fusion_glass");
    glassMap[GTValues.UEV] = Item.of("gtceu:fusion_glass");
    glassMap[GTValues.UIV] = Item.of("gtceu:fusion_glass");
    event.modify(CraftingComponent.GLASS, glassMap)

    // Plates
    // Used in Hulls, Autoclave and Benders, among other things.
    let plateMap = {};
    plateMap[GTValues.UHV] = UnificationEntry(TagPrefix.plate, GTMaterials.get("manyullyn"))
    plateMap[GTValues.UEV] = UnificationEntry(TagPrefix.plate, GTMaterials.get("omnium"))
    plateMap[GTValues.UIV] = UnificationEntry(TagPrefix.plate, GTMaterials.get("infinity"))
    plateMap[GTValues.MAX] = UnificationEntry(TagPrefix.plate, GTMaterials.get("monium"))
    event.modifyUnificationEntry(CraftingComponent.PLATE, plateMap)

    // Hull plates
    // The plastic plate in hulls
    let hullPlateMap = {};
    hullPlateMap[GTValues.UHV] = UnificationEntry(TagPrefix.plate, GTMaterials.get("polybenzimidazole"))
    hullPlateMap[GTValues.UEV] = UnificationEntry(TagPrefix.plate, GTMaterials.get("polyethyl_cyanoacrylate"))
    hullPlateMap[GTValues.UIV] = UnificationEntry(TagPrefix.plate, GTMaterials.get("polyethyl_cyanoacrylate"))
    hullPlateMap[GTValues.MAX] = UnificationEntry(TagPrefix.plate, GTMaterials.get("polyethyl_cyanoacrylate"))
    event.modifyUnificationEntry(CraftingComponent.HULL_PLATE, hullPlateMap)

    // Rotors
    // Used in Chemical Reactors, Mixers, Ore Washers and Muffler Hatches
    // Usually same as Hull Material in later tiers
    let rotorMap = {};
    rotorMap[GTValues.UHV] = UnificationEntry(TagPrefix.rotor, GTMaterials.get("manyullyn"))
    rotorMap[GTValues.UEV] = UnificationEntry(TagPrefix.rotor, GTMaterials.get("activated_netherite"))
    rotorMap[GTValues.UIV] = UnificationEntry(TagPrefix.rotor, GTMaterials.Holmium)
    event.modifyUnificationEntry(CraftingComponent.ROTOR, rotorMap)

    // TODO: Sawblades (May require making tools for the material)

    // Resistive heating wires (typically, these match the EBF coil for that tier)
    // Used in Alloy Smelters, Electric Furnaces and Extruders
    let heatingCoilComponentPrefixes = [
        [TagPrefix.wireGtDouble, CraftingComponent.COIL_HEATING],
        [TagPrefix.wireGtQuadruple, CraftingComponent.COIL_HEATING_DOUBLE],
    ]

    heatingCoilComponentPrefixes.forEach(prefixComponentPair => {
        let heaterMap = {};
        heaterMap[GTValues.UHV] = UnificationEntry(prefixComponentPair[0], GTMaterials.get("omnium"));
        heaterMap[GTValues.UEV] = UnificationEntry(prefixComponentPair[0], GTMaterials.get("omnium"));
        heaterMap[GTValues.UIV] = UnificationEntry(prefixComponentPair[0], GTMaterials.get("omnium"));
        event.modify(prefixComponentPair[1], heaterMap)
    })

    // Electric Coils
    // Used in Electromagnetic Separators and Polarizers
    let electricCoilMap = {};
    electricCoilMap[GTValues.UHV] = UnificationEntry(TagPrefix.wireGtHex, GTMaterials.get("sculk_superconductor"))
    electricCoilMap[GTValues.UEV] = UnificationEntry(TagPrefix.wireGtHex, GTMaterials.get("activated_netherite"))
    electricCoilMap[GTValues.UIV] = UnificationEntry(TagPrefix.wireGtHex, GTMaterials.get("holmium"))
    event.modifyUnificationEntry(CraftingComponent.COIL_ELECTRIC, electricCoilMap)

    // Magnetic Rods
    // Possibly Unused?
    let magneticRodMap = {};
    magneticRodMap[GTValues.UV] = UnificationEntry(TagPrefix.rodLong, GTMaterials.SamariumMagnetic)
    magneticRodMap[GTValues.UHV] = UnificationEntry(TagPrefix.rodLong, GTMaterials.get("magnetic_iron_neodymium_terbium_neutronate"))
    magneticRodMap[GTValues.UEV] = UnificationEntry(TagPrefix.rodLong, GTMaterials.get("magnetic_iron_neodymium_terbium_neutronate"))
    magneticRodMap[GTValues.UIV] = UnificationEntry(TagPrefix.rodLong, GTMaterials.get("magnetic_iron_neodymium_terbium_neutronate"))
    event.modifyUnificationEntry(CraftingComponent.STICK_MAGNETIC, magneticRodMap)

    // Distillation Rods
    // Used in Distilleries
    let distillationRodMap = {};
    distillationRodMap[GTValues.UHV] = UnificationEntry(TagPrefix.spring, GTMaterials.Actinium)
    distillationRodMap[GTValues.UEV] = UnificationEntry(TagPrefix.spring, GTMaterials.get("sculk_bioalloy"))
    distillationRodMap[GTValues.UIV] = UnificationEntry(TagPrefix.spring, GTMaterials.get("eltz"))
    event.modifyUnificationEntry(CraftingComponent.STICK_DISTILLATION, distillationRodMap)

    // Electromagnetic Rods
    // Used in Electromagnetic Separators and Polarizers
    let electromagneticRodMap = {};
    electromagneticRodMap[GTValues.IV] = UnificationEntry(TagPrefix.rod, GTMaterials.Neodymium)
    electromagneticRodMap[GTValues.LuV] = UnificationEntry(TagPrefix.rod, GTMaterials.Samarium)
    electromagneticRodMap[GTValues.ZPM] = UnificationEntry(TagPrefix.rod, GTMaterials.Samarium)
    electromagneticRodMap[GTValues.UV] = UnificationEntry(TagPrefix.rod, GTMaterials.Samarium)
    electromagneticRodMap[GTValues.UHV] = UnificationEntry(TagPrefix.rod, GTMaterials.Terbium)
    electromagneticRodMap[GTValues.UEV] = UnificationEntry(TagPrefix.rod, GTMaterials.Terbium)
    electromagneticRodMap[GTValues.UIV] = UnificationEntry(TagPrefix.rod, GTMaterials.Terbium)
    event.modifyUnificationEntry(CraftingComponent.STICK_ELECTROMAGNETIC, electromagneticRodMap)

    // Chem reactor pipe ingredient
    let reactorPipeMap = {};
    reactorPipeMap[GTValues.UHV] = UnificationEntry(TagPrefix.pipeNormalFluid, GTMaterials.get("polyethyl_cyanoacrylate"))
    reactorPipeMap[GTValues.UEV] = UnificationEntry(TagPrefix.pipeLargeFluid, GTMaterials.get("polyethyl_cyanoacrylate"))
    reactorPipeMap[GTValues.UIV] = UnificationEntry(TagPrefix.pipeHugeFluid, GTMaterials.get("polyethyl_cyanoacrylate"))
    event.modifyUnificationEntry(CraftingComponent.PIPE_REACTOR, reactorPipeMap)

    // PIC ingredient
    // Used in Energy and Dynamo Hatches, and in Transformers
    let powerComponentMap = {};
    powerComponentMap[GTValues.UEV] = Item.of("kubejs:uxpic_chip")
    powerComponentMap[GTValues.UIV] = Item.of("kubejs:uxpic_chip")
    powerComponentMap[GTValues.MAX] = Item.of("kubejs:uxpic_chip")
    event.modifyItem(CraftingComponent.POWER_COMPONENT, powerComponentMap)

    // Spring
    // Used in Dynamo Hatches
    // Usually the same as Hull Cable
    let springMap = {};
    springMap[GTValues.UEV] = UnificationEntry(TagPrefix.spring, GTMaterials.get("activated_netherite"))
    springMap[GTValues.UIV] = UnificationEntry(TagPrefix.spring, GTMaterials.get("holmium"))
    springMap[GTValues.MAX] = UnificationEntry(TagPrefix.spring, GTMaterials.get("monium"))
    event.modifyUnificationEntry(CraftingComponent.SPRING, springMap)

    // Frame
    // Used in Dual Hatches
    // Usually the same as Hull Material
    let frameMap = {};
    frameMap[GTValues.UHV] = UnificationEntry(TagPrefix.frameGt, GTMaterials.get("manyullyn"))
    frameMap[GTValues.UEV] = UnificationEntry(TagPrefix.frameGt, GTMaterials.get("omnium"))
    frameMap[GTValues.UIV] = UnificationEntry(TagPrefix.frameGt, GTMaterials.get("infinity"))
    frameMap[GTValues.MAX] = UnificationEntry(TagPrefix.frameGt, GTMaterials.get("monium"))
    event.modifyUnificationEntry(CraftingComponent.FRAME, frameMap)
})
