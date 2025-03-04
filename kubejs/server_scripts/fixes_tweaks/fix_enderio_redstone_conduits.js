/**
 * Temporary fix for EnderIO redstone conduits not connecting to various blocks
 * see https://github.com/Team-EnderIO/EnderIO/issues/852#issuecomment-2395092479
 */
ServerEvents.tags("block", event => {
    const list = [
        // All GT tiered blocks
        /^gtceu:(steam|u?lv|mv|hv|ev|iv|luv|zpm|uv|uhv|uev|uiv|max|creative)_.*$/,

        // All GT Large variants (turbines & multis) + power substation
        /^gtceu:.*(_large|large_|_large_|mega_).*$/,
        "gtceu:power_substation",

        // Thermal/Systeams dynamos & boilers
        "#thermal:dynamos",
        "steamdynamo:steam_dynamo",
        "systeams:steam_dynamo",
        /^systeams:.*_boiler$/,

        // NC:Neoteric controller & io port
        "nuclearcraft:fission_reactor_controller",
        "nuclearcraft:fission_reactor_port",

        // Snad
        "snad:snad",
        "snad:red_snad",

        // Modded lamps
        /^gtceu:.*_lamp$/,
        /^quark:.*_lamp$/,
        /^chipped:.*_lamp$/,
        "xtonesreworked:flat_lamp",
    ]

    event.add("enderio:redstone_connectable", list)
})
