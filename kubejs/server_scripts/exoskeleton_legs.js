ServerEvents.recipes(event => {
    for(var i = 1; i <= 5; i++) {
        var tier = GTValues.VN[i].toLowerCase()
        event.shaped(
            `kubejs:${tier}_exoskeleton_legs`, [
                "MDM",
                "PCP",
                "L L"
            ], {
                M: `gtceu:${tier}_electric_motor`,
                P: `gtceu:${tier}_electric_piston`,
                C: `#gtceu:circuits/${tier}`,
                L: "#forge:plates/tin_alloy",
                D: "#forge:double_plates/tin_alloy",
        })
    }
})
