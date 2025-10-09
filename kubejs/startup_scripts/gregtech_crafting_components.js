// priority: -1000
/**
 * materials
 */

GTCEuStartupEvents.craftingComponents(event => {

    event.setItems("better_circuit", {
        UEV: "kubejs:extradimensional_processor_mainframe"
    })

    // Make LuV+ electrolyzer wires not osmium for funsies :)
    event.setMaterialEntries("wire_single", {
        LuV: "wireGtSingle:vanadium_gallium",
        ZPM: "wireGtSingle:naquadah_alloy",
        UV: "wireGtSingle:europium",
        UHV: "wireGtSingle:omnium",
        UEV: "wireGtSingle:necrosiderite",
    })


    // Necrosiderite, and Monium for wires/cables
    let setWireCable = (component, prefix0, prefix1) =>
        event.setMaterialEntries(component, {
            UEV: prefix0 + ":darconite",
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


    // Necrosiderite for wires/cables
    let wireCableComponents = [
        [TagPrefix.wireGtQuadruple, TagPrefix.wireGtQuadruple, GTCraftingComponents.WIRE_QUAD],
        [TagPrefix.wireGtOctal, TagPrefix.wireGtOctal, GTCraftingComponents.WIRE_OCT],
        [TagPrefix.wireGtHex, TagPrefix.wireGtHex, GTCraftingComponents.WIRE_HEX],
        [TagPrefix.cableGtSingle, TagPrefix.wireGtSingle, GTCraftingComponents.CABLE],
        [TagPrefix.cableGtDouble, TagPrefix.wireGtDouble, GTCraftingComponents.CABLE_DOUBLE],
        [TagPrefix.cableGtQuadruple, TagPrefix.wireGtQuadruple, GTCraftingComponents.CABLE_QUAD],
        [TagPrefix.cableGtOctal, TagPrefix.wireGtOctal, GTCraftingComponents.CABLE_OCT],
        [TagPrefix.cableGtHex, TagPrefix.wireGtHex, GTCraftingComponents.CABLE_HEX]
    ]

    wireCableComponents.forEach(prefixComponentPair => {
        let wireMap = {};
        wireMap[GTValues.UEV] = prefixComponentPair[0] + ":darconite";
        wireMap[GTValues.MAX] = prefixComponentPair[1] + ":monium";
        event.setMaterialEntries(prefixComponentPair[2], wireMap)
    })

    // Netherite, Necrosiderite, and Monium for tier up wires/cables
    // Currently useless because GT only autogenerates transformer recipes up to UV.
    let wireCableTierUpComponentPrefixes = [
        [TagPrefix.wireGtSingle, GTCraftingComponents.CABLE_TIER_UP],
        [TagPrefix.wireGtDouble, GTCraftingComponents.CABLE_TIER_UP_DOUBLE],
        [TagPrefix.wireGtQuadruple, GTCraftingComponents.CABLE_TIER_UP_QUAD],
        [TagPrefix.wireGtOctal, GTCraftingComponents.CABLE_TIER_UP_OCT],
        [TagPrefix.wireGtHex, GTCraftingComponents.CABLE_TIER_UP_HEX]
    ]

    let setCableTierUp = (component, prefix) =>
        event.setMaterialEntries(component, {
            UHV: prefix + ":darconite",
            UEV: prefix + ":necrosiderite",
        })

    setCableTierUp("cable_tier_up_single", "wireGtSingle")
    setCableTierUp("cable_tier_up_double", "wireGtDouble")
    setCableTierUp("cable_tier_up_quad", "wireGtQuadruple")
    setCableTierUp("cable_tier_up_oct", "wireGtOctal")
    setCableTierUp("cable_tier_up_hex", "wireGtHex")

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
            // Eltz?
        })

    setPipe("normal_pipe", "pipeNormalFluid")
    setPipe("large_pipe", "pipeLargeFluid")
    setPipe("nonuple_pipe", "pipeNonupleFluid")

    event.setItems("glass", {
        UHV: Item.of("gtceu:fusion_glass"),
        UEV: Item.of("monilabs:prism_glass"),
    })

    event.setMaterialEntries("plate", {
        UHV: "plate:manyullyn",
        UEV: "plate:infinity",
        MAX: "plate:monium",
    })

    event.setMaterialEntries("hull_plate", {
        UHV: "plate:polybenzimidazole",
        UEV: "plate:polyethyl_cyanoacrylate",
        MAX: "plate:polyethyl_cyanoacrylate"
    })

    event.setMaterialEntries("rotor", {
        UHV: "rotor:neutronium",
        UEV: "rotor:activated_netherite",
        // Eltz?
    })

    // TODO: Grinder, Sawblade (May require making tools for Sawblades)

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
        })
    }

    setCoils("coil_heating", "wireGtDouble")
    setCoils("coil_heating_double", "wireGtQuadruple")

    event.setMaterialEntries("coil_electric", {
        UEV: "wireGtHex:darconite",
    })

    const magTerbium = "longRod:magnetic_terbium"
    event.setMaterialEntries("rod_magnetic", {
        UV: "longRod:magnetic_samarium",
        UHV: magTerbium,
        UEV: magTerbium,
    })

    event.setMaterialEntries("rod_distillation", {
        UV: "spring:trinium",
        UHV: "spring:tritanium",
        UEV: "spring:omnium",
    })

    const samRod = "rod:samarium"
    const terbRod = "rod:terbium"

    event.setMaterialEntries("rod_electromagnetic", {
        IV: "rod:neodymium",
        LuV: samRod,
        ZPM: samRod,
        UV: samRod,
        UHV: terbRod,
        UEV: terbRod,
    })

    event.setMaterialEntries("pipe_reactor", {
        UHV: "pipeNormalFluid:polyethyl_cyanoacrylate",
        UEV: "pipeLargeFluid:polyethyl_cyanoacrylate",
    })

    event.setItems("power_component", {
        UEV: "kubejs:uxpic_chip",
        MAX: "kubejs:uxpic_chip",
    })

    // Voltage Coils go here

    event.setMaterialEntries("spring", {
        UEV: "spring:darconite",
        UIV: "spring:necrosiderite",
        MAX: "spring:monium",
    })

    // //////////////////////////////////////////////////////

    event.setMaterialEntries("frame", {
        UHV: "frame:manyullyn",
        UEV: "frame:infinity",
        MAX: "frame:monium",
    })

    // Crate, Drum go here

    event.setMaterialEntries("small_spring_transformer", {
        UHV: "smallSpring:europium",
        UEV: "smallSpring:darconite"
    })

    event.setMaterialEntries("spring_transformer", {
        UV: "spring:europium",
        UHV: "spring:darconite",
        UEV: "spring:necrosiderite",
    })
})
