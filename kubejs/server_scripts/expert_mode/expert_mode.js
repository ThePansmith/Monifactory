// THIS FILE IS FOR RANDOM RECIPES THAT DOESNT REQUIRE THEIR OWN FILE

ServerEvents.recipes(event => {
    if (isExpertMode) {
    event.remove({ type: "minecraft:smelting", output: "minecraft:charcoal" }) 
    event.remove({ type: "minecraft:smelting", output: "gtceu:firebrick" })
    event.recipes.minecraft.smelting("gtceu:firebrick", "gtceu:fireclay_dust")

    // Table with various burn time lengths
    const pbfTimes = [
        // material | fuel | length in ticks
        ["wrought_iron", "coal", 400],
        ["wrought_iron", "charcoal", 400],
        ["wrought_iron", "coke", 600],
        ["iron", "coal", 900],
        ["iron", "charcoal", 900],
        ["iron", "coke", 1500]
    ]

    for (const [material, fuel, time] of pbfTimes) {
        let efficient = (fuel === "coke");
        // Ingot form
        event.recipes.gtceu.primitive_blast_furnace(`pbf_${material}_${fuel}`)
            .itemInputs(`${efficient ? '2x ' : ''}#forge:ingots/${material}`, [`#forge:gems/${fuel}`, `#forge:dusts/${fuel}`])
            .itemOutputs(`${efficient ? '2x ' : ''}gtceu:steel_ingot`, `gtceu:tiny_${efficient ? "" : "dark_"}ash_dust`)
            .duration(time)

        // Block form
        event.recipes.gtceu.primitive_blast_furnace(`pbf_block_${material}_${fuel}`)
            .itemInputs(`${efficient ? '2x ' : ''}#forge:storage_blocks/${material}`, `#forge:storage_blocks/${fuel}`)
            .itemOutputs(`${efficient ? '2x ' : ''}gtceu:steel_block`, `gtceu:${efficient ? "" : "dark_"}ash_dust`)
            .duration(time * 9)
    }


        event.remove({ id: /hostilenetworks/ })

        const xpjuice = [
            ["enderio:pulsating_powder", 2240],
            ["enderio:vibrant_powder", 4480],
            ["kubejs:grains_of_innocence", 6720],
            ["enderio:precient_powder", 8960],
            ["enderio:ender_crystal_powder", 11200],
        ]
    
        for (const [input, output] of xpjuice) {
            event.recipes.gtceu.mixer('kubejs:xpjuice_' + output)
            .inputFluids(Fluid.of('kubejs:molten_primal_mana', 250))
            .itemInputs(input)
            .outputFluids(Fluid.of('enderio:xp_juice', output))
            .EUt(480)
            .duration(100)
        }
    
        event.replaceInput({ output: 'buildinggadgets2:gadget_exchanging' }, 'minecraft:redstone', 'gtceu:iv_emitter')

        event.remove({ id: "watercollector:watercollector" })
        event.shaped(
            "watercollector:watercollector", [
                "AAA",
                "B B",
                "AAA"
            ], {
                A: "gtceu:double_steel_plate",
                B: "minecraft:water_bucket"
            }
        )
       
        event.remove({ id: "thermal:device_rock_gen" })
        event.shaped(
            "thermal:device_rock_gen", [
            'PPP',
            'B B',
            'PPP'
        ], {
            P: "gtceu:black_steel_plate",
            B: "minecraft:bucket"
        }
        )

        event.shaped(
            'thermal:dynamo_numismatic', [
                ' A ',
                'BCB',
                'DED'
            ], {
                A: 'kubejs:excitationcoil',
                B: 'gtceu:zeron_100_plate',
                C: 'ironfurnaces:diamond_furnace',
                D: 'enderio:vibrant_gear',
                E: 'kubejs:redstone_transmission_coil'
            }
        )

        event.remove({id: "gtceu:large_chemical_reactor/radon_from_uranium_238"})
        event.remove({id: "gtceu:electric_blast_furnace/blast_draconium_gas"})

        event.remove({id: "gtceu:circuit_assembler/wetware_board"})

}


})
