ServerEvents.recipes(event => {
        /* Remove uncessary recipes */
        event.remove({ id: 'projectred_core:red_iron_comp' })
        event.remove({ id: 'projectred_core:red_ingot' })
        event.remove({ id: 'projectred_core:electrotine_iron_comp' })
        event.remove({ id: 'projectred_core:electrotine_ingot' })
        event.remove({ id: 'projectred_core:sand_coal_comp' })
        event.remove({ id: 'projectred_core:boule' })
        event.remove({ id: 'projectred_core:silicon' })
        event.remove({ id: 'projectred_core:draw_plate' })
        event.remove({ id: 'projectred_core:screwdriver' })
        event.remove({ id: 'projectred_core:copper_coil' })
        event.remove({ id: 'projectred_core:iron_coil' })
        event.remove({ id: 'projectred_core:gold_coil' })
        event.remove({ id: 'projectred_core:motor' })
        event.remove({ id: 'projectred_core:woven_cloth' })
        event.remove({ id: 'projectred_core:sail' })
        event.remove({ id: 'projectred_core:electrotine_silicon_comp' })
        event.remove({ id: 'projectred_core:electrotine_silicon' })
        event.remove({ id: 'projectred_core:electrotine_generator' })

        /* Remove Transmission power cable recipes */
        event.remove({ id: 'projectred_transmission:low_load_power_wire' })
        event.remove({ id: 'projectred_transmission:low_load_framed_power_wire' })

        /* Circuit plates using GT cutter and saw */
        event.remove({ id: 'projectred_core:plate' })
        event.shaped('2x projectred_core:plate', [
                ' S ',
                ' B ',
                '   '
        ], {
                S: '#forge:tools/saws',
                B: 'minecraft:smooth_stone'
        })

        event.recipes.gtceu.cutter("projectred_circuit")
                .itemInputs("minecraft:smooth_stone")
                .inputFluids(Fluid.of('minecraft:water', 80))
                .itemOutputs("8x projectred_core:plate")
                .duration(200)
                .EUt(32)

        event.recipes.gtceu.cutter("projectred_circuit_distilled")
                .itemInputs("minecraft:smooth_stone")
                .inputFluids(Fluid.of('gtceu:distilled_water', 60))
                .itemOutputs("8x projectred_core:plate")
                .duration(200)
                .EUt(32)

        event.recipes.gtceu.cutter("projectred_circuit_lubricant")
                .itemInputs("minecraft:smooth_stone")
                .inputFluids(Fluid.of('gtceu:lubricant', 20))
                .itemOutputs("8x projectred_core:plate")
                .duration(200)
                .EUt(32)

        /* Red Alloy Wire */
        event.remove({ id: 'projectred_transmission:red_alloy_wire' })
        event.shaped('12x projectred_transmission:red_alloy_wire', [
                ' R ',
                ' R ',
                ' R '
        ], {
                R: 'gtceu:red_alloy_single_wire'
        })

        /* Insulated Red Alloy Wire */
        const dyeColors = [
                'white', 'black', 'purple', 'red', 'orange', 'green', 'lime',
                'blue', 'light_blue', 'pink', 'cyan', 'magenta', 'yellow', 'gray', 'light_gray', 'brown'
        ];
        dyeColors.forEach(color => {
                event.remove({ id: `projectred_transmission:${color}_insulated_wire` });
        });

        event.shaped('projectred_transmission:black_insulated_wire', [
                'WR ',
                '   '
        ], {
                W: 'projectred_transmission:red_alloy_wire',
                R: 'gtceu:rubber_plate'
        })

        /* Bundled Wire using moar rubba' mate as a second unsulation mimicking multi-core cable instead of String */
        event.remove({ id: 'projectred_transmission:neutral_bundled_wire' })
        event.shaped('projectred_transmission:neutral_bundled_wire', [
                'SWS',
                'WWW',
                'SWS'
        ], {
                W: '#projectred_transmission:insulated_wire',
                S: 'gtceu:rubber_plate'
        })

        /* Insulated Wire & Bundled Wire using Assembly Machine */
        event.recipes.gtceu.assembler("projectred_black_insulated_wire_rubber")
                .itemInputs("1x projectred_transmission:red_alloy_wire")
                .inputFluids(Fluid.of('gtceu:rubber', 144))
                .itemOutputs("1x projectred_transmission:black_insulated_wire")
                .duration(50)
                .EUt(7)

        event.recipes.gtceu.assembler("projectred_black_insulated_wire_styrene_rubber")
                .itemInputs("1x projectred_transmission:red_alloy_wire")
                .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 36))
                .itemOutputs("1x projectred_transmission:black_insulated_wire")
                .duration(50)
                .EUt(7)

        event.recipes.gtceu.assembler("projectred_black_insulated_wire_silicone_rubber")
                .itemInputs("1x projectred_transmission:red_alloy_wire")
                .inputFluids(Fluid.of('gtceu:silicone_rubber', 72))
                .itemOutputs("1x projectred_transmission:black_insulated_wire")
                .duration(50)
                .EUt(7)

        event.recipes.gtceu.assembler("projectred_bundled_wire_rubber")
                .itemInputs("5x projectred_transmission:red_alloy_wire")
                .inputFluids(Fluid.of('gtceu:rubber', 432))
                .itemOutputs("1x projectred_transmission:neutral_bundled_wire")
                .duration(50)
                .EUt(7)
                .circuit(9)

        event.recipes.gtceu.assembler("projectred_bundled_wire_styrene_rubber")
                .itemInputs("5x projectred_transmission:red_alloy_wire")
                .inputFluids(Fluid.of('gtceu:styrene_butadiene_rubber', 144))
                .itemOutputs("1x projectred_transmission:neutral_bundled_wire")
                .duration(50)
                .EUt(7)
                .circuit(9)

        event.recipes.gtceu.assembler("projectred_bundled_wire_silicone_rubber")
                .itemInputs("5x projectred_transmission:red_alloy_wire")
                .inputFluids(Fluid.of('gtceu:silicone_rubber', 288))
                .itemOutputs("1x projectred_transmission:neutral_bundled_wire")
                .duration(50)
                .EUt(7)
                .circuit(9)

        /* Silicon compounds using GT silicon wafers */
        event.remove({ id: 'projectred_core:red_silicon_comp' })
        event.shaped('projectred_core:red_silicon_comp', [
                'SSS',
                'SCS',
                'SSS'
        ], {
                C: 'gtceu:silicon_wafer',
                S: 'minecraft:redstone'
        })

        event.remove({ id: 'projectred_core:glow_silicon_comp' })
        event.shaped('projectred_core:glow_silicon_comp', [
                'SSS',
                'SCS',
                'SSS'
        ], {
                C: 'gtceu:silicon_wafer',
                S: 'minecraft:glowstone_dust'
        })
})