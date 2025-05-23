// priority: -1000
/**
 * materials
 */

GTCEuStartupEvents.craftingComponents(event => {

    // Make LuV+ electrolyzer wires not osmium for funsies :)
    event.setMaterialEntries("wire_single", {
        LuV: "wireGtSingle:vanadium_gallium",
        ZPM: "wireGtSingle:naquadah_alloy",
        UV: "wireGtSingle:sculk_superconductor",
        UHV: "wireGtSingle:darconite",
        UEV: "wireGtSingle:holmium",
        UIV: "wireGtSingle:monium",
    })


    // Omnium, Holmium, and Monium for wires/cables
    let setWireCable = (component, prefix0, prefix1) =>
        event.setMaterialEntries(component, {
            UEV: prefix0 + ":darconite",
            UIV: prefix1 + ":holmium",
            MAX: prefix1 + ":monium",
        })

    let setWire = (component, prefix) => setWireCable(component, prefix, prefix)

    setWire("wire_quad", "wireGtQuadruple")
    setWire("wire_oct", "wireGtOctal")
    setWire("wire_hex", "wireGtHex")
    setWireCable("cable_single", "cableGtSingle", "wireGtSingle")
    setWireCable("cable_double", "cableGtDouble", "wireGtDouble")
    setWireCable("cable_quad", "cableGtQuadruple", "wireGtQuadruple")
    setWireCable("cable_oct", "cableGtOctal", "wireGtOctal")
    setWireCable("cable_hex", "cableGtHex", "wireGtOctal")


    // Omnium & Holmium for wires/cables
    let wireCableComponentPrefixes = [
        [TagPrefix.wireGtQuadruple, TagPrefix.wireGtQuadruple, GTCraftingComponents.WIRE_QUAD],
        [TagPrefix.wireGtOctal, TagPrefix.wireGtOctal, GTCraftingComponents.WIRE_OCT],
        [TagPrefix.wireGtHex, TagPrefix.wireGtHex, GTCraftingComponents.WIRE_HEX],
        [TagPrefix.cableGtSingle, TagPrefix.wireGtSingle, GTCraftingComponents.CABLE],
        [TagPrefix.cableGtDouble, TagPrefix.wireGtDouble, GTCraftingComponents.CABLE_DOUBLE],
        [TagPrefix.cableGtQuadruple, TagPrefix.wireGtQuadruple, GTCraftingComponents.CABLE_QUAD],
        [TagPrefix.cableGtOctal, TagPrefix.wireGtOctal, GTCraftingComponents.CABLE_OCT],
        // [TagPrefix.cableGtHex, TagPrefix.wireGtHex, CraftingComponent.CABLE_HEX] // Seems borked? Causes crashes when uncommented
    ]

    wireCableComponentPrefixes.forEach(prefixComponentPair => {
        let wireMap = {};
        wireMap[GTValues.UEV] = UnificationEntry(prefixComponentPair[0], GTMaterials.get("omnium"));
        wireMap[GTValues.UIV] = UnificationEntry(prefixComponentPair[1], GTMaterials.Holmium);
        wireMap[GTValues.MAX] = UnificationEntry(prefixComponentPair[1], GTMaterials.get("monium"));
        event.modify(prefixComponentPair[2], wireMap)
    })

    // Netherite, Holmium, and Monium for tier up wires/cables
    // Currently useless because GT only autogenerates transformer recipes up to UV.
    let wireCableTierUpComponentPrefixes = [
        [TagPrefix.wireGtSingle, GTCraftingComponents.CABLE_TIER_UP],
        [TagPrefix.wireGtDouble, GTCraftingComponents.CABLE_TIER_UP_DOUBLE],
        [TagPrefix.wireGtQuadruple, GTCraftingComponents.CABLE_TIER_UP_QUAD],
        [TagPrefix.wireGtOctal, CraftingComponent.CABLE_TIER_UP_OCT], // Seems borked. Same here as above.
        [TagPrefix.wireGtHex, GTCraftingComponents.CABLE_TIER_UP_HEX]
    ]

    let setCableTierUp = (component, prefix) =>
        event.setMaterialEntries(component, {
            UHV: prefix + ":activated_netherite",
            UEV: prefix + ":holmium",
            UIV: prefix + ":monium",
        })

    setCableTierUp("cable_tier_up_single", "wireGtSingle")
    setCableTierUp("cable_tier_up_double", "wireGtDouble")
    setCableTierUp("cable_tier_up_quad", "wireGtQuadruple")
    setCableTierUp("cable_tier_up_oct", "wireGtOctal")
    setCableTierUp("cable_tier_up_hex", "wireGtHex")


    // wireCableTierUpComponentPrefixes.forEach(prefixComponentPair => {
    //     event.setMaterialEntry(prefixComponentPair[1], GTValues.UHV, new MaterialEntry(prefixComponentPair[0], GTMaterials.get("activated_netherite")))
    //     event.setMaterialEntry(prefixComponentPair[1], GTValues.UEV, new MaterialEntry(prefixComponentPair[0], GTMaterials.Holmium))
    //     event.setMaterialEntry(prefixComponentPair[1], GTValues.UIV, new MaterialEntry(prefixComponentPair[0], GTMaterials.get("monium")))
    //     // let wireTierUpMap = {};
    //     // wireTierUpMap[GTValues.UHV] = MaterialEntry(prefixComponentPair[0], GTMaterials.get("activated_netherite"));
    //     // wireTierUpMap[GTValues.UEV] = MaterialEntry(prefixComponentPair[0], GTMaterials.Holmium);
    //     // wireTierUpMap[GTValues.UIV] = MaterialEntry(prefixComponentPair[0], GTMaterials.get("monium"));
    //     // event.modify(prefixComponentPair[1], wireTierUpMap)
    // })


    // Pipes
    let pipeComponentPrefixes = [
        [TagPrefix.pipeNormalFluid, GTCraftingComponents.PIPE_NORMAL],
        [TagPrefix.pipeLargeFluid, GTCraftingComponents.PIPE_LARGE],
        [TagPrefix.pipeNonupleFluid, GTCraftingComponents.PIPE_NONUPLE]
    ]

    let setPipe = (component, prefix) =>
        event.setMaterialEntries(component, {
            UHV: prefix + ":neutronium",
            UEV: prefix + ":activated_netherite",
            UIV: prefix + ":holmium",
        })

    setPipe("normal_pipe", "pipeNormalFluid")
    setPipe("large_pipe", "pipeLargeFluid")
    setPipe("nonuple_pipe", "pipeNonupleFluid")

    // pipeComponentPrefixes.forEach(prefixComponentPair => {
    //     event.setMaterialEntry(prefixComponentPair[1], GTValues.UHV, new MaterialEntry(prefixComponentPair[0], GTMaterials.Neutronium))
    //     event.setMaterialEntry(prefixComponentPair[1], GTValues.UEV, new MaterialEntry(prefixComponentPair[0], GTMaterials.get("activated_netherite")))
    //     event.setMaterialEntry(prefixComponentPair[1], GTValues.UIV, new MaterialEntry(prefixComponentPair[0], GTMaterials.Holmium))
    //     // let pipeMap = {};
    //     // pipeMap[GTValues.UHV] = MaterialEntry(prefixComponentPair[0], GTMaterials.Neutronium);
    //     // pipeMap[GTValues.UEV] = MaterialEntry(prefixComponentPair[0], GTMaterials.get("activated_netherite"));
    //     // pipeMap[GTValues.UIV] = MaterialEntry(prefixComponentPair[0], GTMaterials.Holmium);
    //     // event.modify(prefixComponentPair[1], pipeMap)
    // })

    event.setItems("glass", {
        UHV: "gtceu:fusion_glass",
        UEV: "gtceu:fusion_glass",
        UIV: "gtceu:fusion_glass",
    })
    // event.setItem(GTCraftingComponents.GLASS, GTValues.UHV, Item.of("gtceu:fusion_glass"))
    // event.setItem(GTCraftingComponents.GLASS, GTValues.UEV, Item.of("gtceu:fusion_glass"))
    // event.setItem(GTCraftingComponents.GLASS, GTValues.UIV, Item.of("gtceu:fusion_glass"))

    // Glass
    // let glassMap = {};
    // glassMap[GTValues.UHV] = Item.of("gtceu:fusion_glass");
    // glassMap[GTValues.UEV] = Item.of("gtceu:fusion_glass"); // Prism
    // glassMap[GTValues.UIV] = Item.of("gtceu:fusion_glass"); // Prism
    // event.modify(CraftingComponent.GLASS, glassMap)

    event.setMaterialEntries("plate", {
        UHV: "plate:manyullyn",
        UEV: "plate:omnium",
        UIV: "plate:infinity",
        MAX: "plate:monium",
    })

    event.setMaterialEntry(GTCraftingComponents.PLATE, GTValues.UEV, new MaterialEntry(TagPrefix.plate, GTMaterials.get("omnium")))
    event.setMaterialEntry(GTCraftingComponents.PLATE, GTValues.UIV, new MaterialEntry(TagPrefix.plate, GTMaterials.get("infinity")))
    event.setMaterialEntry(GTCraftingComponents.PLATE, GTValues.MAX, new MaterialEntry(TagPrefix.plate, GTMaterials.get("monium")))

    // Plates
    // let plateMap = {};
    // plateMap[GTValues.UEV] = MaterialEntry(TagPrefix.plate, GTMaterials.get("omnium"))
    // plateMap[GTValues.UIV] = MaterialEntry(TagPrefix.plate, GTMaterials.get("infinity"))
    // plateMap[GTValues.MAX] = MaterialEntry(TagPrefix.plate, GTMaterials.get("monium"))
    // event.modifyMaterialEntry(CraftingComponent.PLATE, plateMap)

    const PECA = "plate:polyethyl_cyanoacrylate"
    const PBI = "plate:polybenzimidazole"
    event.setMaterialEntries("hull_plate", {
        UHV: PBI,
        UEV: PECA,
        UIV: PECA,
        MAX: PECA
    })

    // event.setMaterialEntry(GTCraftingComponents.HULL_PLATE, GTValues.UEV, new MaterialEntry(TagPrefix.plate, GTMaterials.get("polyethyl_cyanoacrylate")))
    // event.setMaterialEntry(GTCraftingComponents.HULL_PLATE, GTValues.UIV, new MaterialEntry(TagPrefix.plate, GTMaterials.get("polyethyl_cyanoacrylate")))
    // event.setMaterialEntry(GTCraftingComponents.HULL_PLATE, GTValues.MAX, new MaterialEntry(TagPrefix.plate, GTMaterials.get("polyethyl_cyanoacrylate")))

    // Hull plates
    // let hullPlateMap = {};
    // plateMap[GTValues.UEV] = MaterialEntry(TagPrefix.plate, GTMaterials.get("polyethyl_cyanoacrylate"))
    // plateMap[GTValues.UIV] = MaterialEntry(TagPrefix.plate, GTMaterials.get("polyethyl_cyanoacrylate"))
    // plateMap[GTValues.MAX] = MaterialEntry(TagPrefix.plate, GTMaterials.get("polyethyl_cyanoacrylate"))
    // event.modifyMaterialEntry(CraftingComponent.HULL_PLATE, hullPlateMap)

    event.setMaterialEntries("rotor", {
        UHV: "rotor:neutronium",
        UEV: "rotor:activated_netherite",
        UIV: "rotor:holmium",
    })

    // event.setMaterialEntry(GTCraftingComponents.ROTOR, GTValues.UHV, new MaterialEntry(TagPrefix.rotor, GTMaterials.Neutronium))
    // event.setMaterialEntry(GTCraftingComponents.ROTOR, GTValues.UEV, new MaterialEntry(TagPrefix.rotor, GTMaterials.get("activated_netherite")))
    // event.setMaterialEntry(GTCraftingComponents.ROTOR, GTValues.UIV, new MaterialEntry(TagPrefix.rotor, GTMaterials.Holmium))

    // Rotors
    // let rotorMap = {};
    // rotorMap[GTValues.UHV] = MaterialEntry(TagPrefix.rotor, GTMaterials.Neutronium)
    // rotorMap[GTValues.UEV] = MaterialEntry(TagPrefix.rotor, GTMaterials.get("activated_netherite"))
    // rotorMap[GTValues.UIV] = MaterialEntry(TagPrefix.rotor, GTMaterials.Holmium)
    // event.modifyMaterialEntry(CraftingComponent.ROTOR, rotorMap)

    // TODO: Sawblades (May require making tools for the material)

    // Resistive heating wires (typically, these match the EBF coil for that tier)
    // Used in Alloy Smelters, Electric Furnaces and Extruders
    let heatingCoilComponentPrefixes = [
        [TagPrefix.wireGtDouble, GTCraftingComponents.COIL_HEATING],
        [TagPrefix.wireGtQuadruple, GTCraftingComponents.COIL_HEATING_DOUBLE],
    ]

    let setCoils = (component, prefix) => {
        const entry = prefix + ":omnium"
        event.setMaterialEntries(component, {
            UHV: entry,
            UEV: entry,
            UIV: entry,
        })
    }

    setCoils("coil_heating", "wireGtDouble")
    setCoils("coil_heating_double", "wireGtQuadruple")

    // heatingCoilComponentPrefixes.forEach(prefixComponentPair => {
    //     event.setMaterialEntry(prefixComponentPair[1], GTValues.UHV, new MaterialEntry(prefixComponentPair[0], GTMaterials.get("omnium")))
    //     event.setMaterialEntry(prefixComponentPair[1], GTValues.UEV, new MaterialEntry(prefixComponentPair[0], GTMaterials.get("omnium")))
    //     event.setMaterialEntry(prefixComponentPair[1], GTValues.UIV, new MaterialEntry(prefixComponentPair[0], GTMaterials.get("omnium")))
    //     // let heaterMap = {};
    //     // heaterMap[GTValues.UHV] = MaterialEntry(prefixComponentPair[0], GTMaterials.get("omnium"));
    //     // heaterMap[GTValues.UEV] = MaterialEntry(prefixComponentPair[0], GTMaterials.get("omnium"));
    //     // heaterMap[GTValues.UIV] = MaterialEntry(prefixComponentPair[0], GTMaterials.get("omnium"));
    //     // event.modify(prefixComponentPair[1], heaterMap)
    // })

    event.setMaterialEntries("coil_electric", {
        UHV: "wireGtHex:sculk_superconductor",
        UEV: "wireGtHex:activated_netherite",
        UIV: "wireGtHex:holmium",
    })

    // event.setMaterialEntry(GTCraftingComponents.COIL_ELECTRIC, GTValues.UHV, new MaterialEntry(TagPrefix.wireGtHex, GTMaterials.get("sculk_superconductor")))
    // event.setMaterialEntry(GTCraftingComponents.COIL_ELECTRIC, GTValues.UEV, new MaterialEntry(TagPrefix.wireGtHex, GTMaterials.get("activated_netherite")))
    // event.setMaterialEntry(GTCraftingComponents.COIL_ELECTRIC, GTValues.UIV, new MaterialEntry(TagPrefix.wireGtHex, GTMaterials.get("holmium")))

    // Electric Coils
    // let electricCoilMap = {};
    // electricCoilMap[GTValues.UHV] = MaterialEntry(TagPrefix.wireGtHex, GTMaterials.get("sculk_superconductor"))
    // electricCoilMap[GTValues.UEV] = MaterialEntry(TagPrefix.wireGtHex, GTMaterials.get("activated_netherite"))
    // electricCoilMap[GTValues.UIV] = MaterialEntry(TagPrefix.wireGtHex, GTMaterials.get("holmium"))
    // event.modifyMaterialEntry(CraftingComponent.COIL_ELECTRIC, electricCoilMap)

    const magTerbium = "longRod:magnetic_iron_neodymium_terbium_neutronate"
    event.setMaterialEntries("rod_magnetic", {
        UV: "longRod:magnetic_samarium",
        UHV: magTerbium,
        UEV: magTerbium,
        UIV: magTerbium,
    })

    // event.setMaterialEntry(GTCraftingComponents.ROD_MAGNETIC, GTValues.UV, new MaterialEntry(TagPrefix.rodLong, GTMaterials.SamariumMagnetic))
    // event.setMaterialEntry(GTCraftingComponents.ROD_MAGNETIC, GTValues.UHV, new MaterialEntry(TagPrefix.rodLong, GTMaterials.get("magnetic_terbium")))
    // event.setMaterialEntry(GTCraftingComponents.ROD_MAGNETIC, GTValues.UEV, new MaterialEntry(TagPrefix.rodLong, GTMaterials.get("magnetic_terbium")))
    // event.setMaterialEntry(GTCraftingComponents.ROD_MAGNETIC, GTValues.UIV, new MaterialEntry(TagPrefix.rodLong, GTMaterials.get("magnetic_terbium")))

    // Magnetic Rods
    // let magneticRodMap = {};
    // magneticRodMap[GTValues.UV] = MaterialEntry(TagPrefix.rodLong, GTMaterials.SamariumMagnetic)
    // magneticRodMap[GTValues.UHV] = MaterialEntry(TagPrefix.rodLong, GTMaterials.get("magnetic_terbium"))
    // magneticRodMap[GTValues.UEV] = MaterialEntry(TagPrefix.rodLong, GTMaterials.get("magnetic_terbium"))
    // magneticRodMap[GTValues.UIV] = MaterialEntry(TagPrefix.rodLong, GTMaterials.get("magnetic_terbium"))
    // event.modifyMaterialEntry(CraftingComponent.STICK_MAGNETIC, magneticRodMap)

    event.setMaterialEntries("rod_distillation", {
        UHV: "spring:actinium",
        UEV: "spring:sculk_bioalloy",
        UIV: "spring:eltz",
    })

    // event.setMaterialEntry(GTCraftingComponents.ROD_DISTILLATION, GTValues.UHV, new MaterialEntry(TagPrefix.spring, GTMaterials.Actinium))
    // event.setMaterialEntry(GTCraftingComponents.ROD_DISTILLATION, GTValues.UEV, new MaterialEntry(TagPrefix.spring, GTMaterials.get("sculk_bioalloy")))
    // event.setMaterialEntry(GTCraftingComponents.ROD_DISTILLATION, GTValues.UIV, new MaterialEntry(TagPrefix.spring, GTMaterials.get("eltz")))

    // Distillation Rods
    // let distillationRodMap = {};
    // distillationRodMap[GTValues.UHV] = MaterialEntry(TagPrefix.spring, GTMaterials.Actinium)
    // distillationRodMap[GTValues.UEV] = MaterialEntry(TagPrefix.spring, GTMaterials.get("sculk_bioalloy"))
    // distillationRodMap[GTValues.UIV] = MaterialEntry(TagPrefix.spring, GTMaterials.get("eltz"))
    // event.modifyMaterialEntry(CraftingComponent.STICK_DISTILLATION, distillationRodMap)

    const samRod = "rod:samarium"
    const terbRod = "rod:terbium"

    event.setMaterialEntries("rod_electromagnetic", {
        IV: "rod:neodymium",
        LuV: samRod,
        ZPM: samRod,
        UV: samRod,
        UHV: terbRod,
        UEV: terbRod,
        UIV: terbRod,
    })

    // event.setMaterialEntry(GTCraftingComponents.ROD_ELECTROMAGNETIC, GTValues.IV, new MaterialEntry(TagPrefix.rod, GTMaterials.Neodymium))
    // event.setMaterialEntry(GTCraftingComponents.ROD_ELECTROMAGNETIC, GTValues.LuV, new MaterialEntry(TagPrefix.rod, GTMaterials.Samarium))
    // event.setMaterialEntry(GTCraftingComponents.ROD_ELECTROMAGNETIC, GTValues.ZPM, new MaterialEntry(TagPrefix.rod, GTMaterials.Samarium))
    // event.setMaterialEntry(GTCraftingComponents.ROD_ELECTROMAGNETIC, GTValues.UV, new MaterialEntry(TagPrefix.rod, GTMaterials.Samarium))
    // event.setMaterialEntry(GTCraftingComponents.ROD_ELECTROMAGNETIC, GTValues.UHV, new MaterialEntry(TagPrefix.rod, GTMaterials.Terbium))
    // event.setMaterialEntry(GTCraftingComponents.ROD_ELECTROMAGNETIC, GTValues.UEV, new MaterialEntry(TagPrefix.rod, GTMaterials.Terbium))
    // event.setMaterialEntry(GTCraftingComponents.ROD_ELECTROMAGNETIC, GTValues.UIV, new MaterialEntry(TagPrefix.rod, GTMaterials.Terbium))

    // Electromagnetic Rods
    // let electromagneticRodMap = {};
    // electromagneticRodMap[GTValues.IV] = MaterialEntry(TagPrefix.rod, GTMaterials.Neodymium)
    // electromagneticRodMap[GTValues.LuV] = MaterialEntry(TagPrefix.rod, GTMaterials.Samarium)
    // electromagneticRodMap[GTValues.ZPM] = MaterialEntry(TagPrefix.rod, GTMaterials.Samarium)
    // electromagneticRodMap[GTValues.UV] = MaterialEntry(TagPrefix.rod, GTMaterials.Samarium)
    // electromagneticRodMap[GTValues.UHV] = MaterialEntry(TagPrefix.rod, GTMaterials.Terbium)
    // electromagneticRodMap[GTValues.UEV] = MaterialEntry(TagPrefix.rod, GTMaterials.Terbium)
    // electromagneticRodMap[GTValues.UIV] = MaterialEntry(TagPrefix.rod, GTMaterials.Terbium)
    // event.modifyMaterialEntry(CraftingComponent.STICK_ELECTROMAGNETIC, electromagneticRodMap)

    event.setMaterialEntries("pipe_reactor", {
        UHV: "pipeNormalFluid:polyethyl_cyanoacrylate",
        UEV: "pipeLargeFluid:polyethyl_cyanoacrylate",
        UIV: "pipeHugeFluid:polyethyl_cyanoacrylate",
    })

    // event.setMaterialEntry(GTCraftingComponents.PIPE_REACTOR, GTValues.UHV, new MaterialEntry(TagPrefix.pipeNormalFluid, GTMaterials.get("polyethyl_cyanoacrylate")))
    // event.setMaterialEntry(GTCraftingComponents.PIPE_REACTOR, GTValues.UEV, new MaterialEntry(TagPrefix.pipeLargeFluid, GTMaterials.get("polyethyl_cyanoacrylate")))
    // event.setMaterialEntry(GTCraftingComponents.PIPE_REACTOR, GTValues.UIV, new MaterialEntry(TagPrefix.pipeHugeFluid, GTMaterials.get("polyethyl_cyanoacrylate")))

    // Chem reactor pipe ingredient
    // let reactorPipeMap = {};
    // reactorPipeMap[GTValues.UHV] = MaterialEntry(TagPrefix.pipeNormalFluid, GTMaterials.get("polyethyl_cyanoacrylate"))
    // reactorPipeMap[GTValues.UEV] = MaterialEntry(TagPrefix.pipeLargeFluid, GTMaterials.get("polyethyl_cyanoacrylate"))
    // reactorPipeMap[GTValues.UIV] = MaterialEntry(TagPrefix.pipeHugeFluid, GTMaterials.get("polyethyl_cyanoacrylate"))
    // event.modifyMaterialEntry(CraftingComponent.PIPE_REACTOR, reactorPipeMap)

    event.setItems("power_component", {
        UEV: "kubejs:uxpic_chip",
        UIV: "kubejs:uxpic_chip",
        MAX: "kubejs:uxpic_chip",
    })

    // event.setItem(GTCraftingComponents.POWER_COMPONENT, GTValues.UEV, Item.of("kubejs:uxpic_chip"))
    // event.setItem(GTCraftingComponents.POWER_COMPONENT, GTValues.UIV, Item.of("kubejs:uxpic_chip"))
    // event.setItem(GTCraftingComponents.POWER_COMPONENT, GTValues.MAX, Item.of("kubejs:uxpic_chip"))

    // PIC ingredient
    // let powerComponentMap = {};
    // powerComponentMap[GTValues.UEV] = Item.of("kubejs:uxpic_chip")
    // powerComponentMap[GTValues.UIV] = Item.of("kubejs:uxpic_chip")
    // powerComponentMap[GTValues.MAX] = Item.of("kubejs:uxpic_chip")
    // event.modifyItem(CraftingComponent.POWER_COMPONENT, powerComponentMap)


    // ////////////////////////////////////////

    event.setMaterialEntries("spring", {
        UEV: "spring:activated_netherite",
        UIV: "spring:holmium",
        MAX: "spring:monium",
    })

    // event.setMaterialEntry(GTCraftingComponents.SPRING, GTValues.UEV, new MaterialEntry(TagPrefix.spring, GTMaterials.get("activated_netherite")))
    // event.setMaterialEntry(GTCraftingComponents.SPRING, GTValues.UIV, new MaterialEntry(TagPrefix.spring, GTMaterials.get("holmium")))
    // event.setMaterialEntry(GTCraftingComponents.SPRING, GTValues.MAX, new MaterialEntry(TagPrefix.spring, GTMaterials.get("monium")))

    // Spring
    // let springMap = {};
    // springMap[GTValues.UEV] = MaterialEntry(TagPrefix.spring, GTMaterials.get("activated_netherite"))
    // springMap[GTValues.UIV] = MaterialEntry(TagPrefix.spring, GTMaterials.get("holmium"))
    // springMap[GTValues.MAX] = MaterialEntry(TagPrefix.spring, GTMaterials.get("monium"))
    // event.modifyMaterialEntry(CraftingComponent.SPRING, springMap)

    // //////////////////////////////////////////////////////

    event.setMaterialEntries("frame", {
        UHV: "frame:manyullyn",
        UEV: "frame:omnium",
        UIV: "frame:infinity",
        MAX: "frame:monium",
    })

    // event.setMaterialEntry(GTCraftingComponents.FRAME, GTValues.UHV, new MaterialEntry(TagPrefix.frameGt, GTMaterials.Neutronium))
    // event.setMaterialEntry(GTCraftingComponents.FRAME, GTValues.UEV, new MaterialEntry(TagPrefix.frameGt, GTMaterials.get("omnium")))
    // event.setMaterialEntry(GTCraftingComponents.FRAME, GTValues.UIV, new MaterialEntry(TagPrefix.frameGt, GTMaterials.get("infinity")))
    // event.setMaterialEntry(GTCraftingComponents.FRAME, GTValues.MAX, new MaterialEntry(TagPrefix.frameGt, GTMaterials.get("monium")))

    // Frame
    // let frameMap = {};
    // frameMap[GTValues.UHV] = MaterialEntry(TagPrefix.frameGt, GTMaterials.Neutronium)
    // frameMap[GTValues.UEV] = MaterialEntry(TagPrefix.frameGt, GTMaterials.get("omnium"))
    // frameMap[GTValues.UIV] = MaterialEntry(TagPrefix.frameGt, GTMaterials.get("infinity"))
    // frameMap[GTValues.MAX] = MaterialEntry(TagPrefix.frameGt, GTMaterials.get("monium"))
    // event.modifyMaterialEntry(CraftingComponent.FRAME, frameMap)
})
