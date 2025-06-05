/**
 * Processing lines for post-tank Wafers
 */
ServerEvents.recipes(event => {
    // Post-tank PIC
    event.recipes.gtceu.laser_engraver("uxpic_wafer_neutronium")
        .itemInputs("gtceu:neutronium_wafer")
        .notConsumable("#forge:lenses/lime")
        .itemOutputs("kubejs:uxpic_wafer")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.laser_engraver("uxpic_wafer_universe")
        .itemInputs("kubejs:universe_wafer")
        .notConsumable("#forge:lenses/lime")
        .itemOutputs("2x kubejs:uxpic_wafer")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(25 * 20)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.cutter("uxpic_chip")
        .itemInputs("kubejs:uxpic_wafer")
        .itemOutputs("1x kubejs:uxpic_chip")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(45 * 20)
        .EUt(GTValues.VHA[GTValues.ZPM])

    // WIP: Post Tank Boule
    event.recipes.gtceu.electric_blast_furnace("universe_doped_boule")
        .itemInputs("kubejs:heart_of_a_universe", "64x gtceu:silicon_block", "16x kubejs:stabilized_oganesson")
        .inputFluids("kubejs:molten_pyrotheum 16000")
        .itemOutputs("kubejs:universe_boule")
        .duration(18000)
        .EUt(250000)
        .blastFurnaceTemp(11000)

    event.recipes.gtceu.cutter("universe_wafer")
        .itemInputs("kubejs:universe_boule")
        .inputFluids(Fluid.of("minecraft:water", 1000))
        .itemOutputs("64x kubejs:universe_wafer", "64x kubejs:universe_wafer")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(7200)
        .EUt(128000)

    event.recipes.gtceu.cutter("universe_wafer_distilled")
        .itemInputs("kubejs:universe_boule")
        .inputFluids(Fluid.of("gtceu:distilled_water", 750))
        .itemOutputs("64x kubejs:universe_wafer", "64x kubejs:universe_wafer")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(4800)
        .EUt(128000)

    event.recipes.gtceu.cutter("universe_wafer_lubricant")
        .itemInputs("kubejs:universe_boule")
        .inputFluids(Fluid.of("gtceu:lubricant", 250))
        .itemOutputs("64x kubejs:universe_wafer", "64x kubejs:universe_wafer")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(3600)
        .EUt(128000)

    function UniverseEngrave(name, lens, wafer, time) {
        event.recipes.gtceu.laser_engraver(name)
            .itemInputs("kubejs:universe_wafer")
            .notConsumable(lens)
            .itemOutputs(wafer)
            .duration(time)
            .cleanroom(CleanroomType.CLEANROOM)
            .EUt(16000)
    }

    UniverseEngrave("ilc_wafer", "#forge:lenses/red", "32x gtceu:ilc_wafer", 20);
    UniverseEngrave("ram_wafer", "#forge:lenses/green", "32x gtceu:ram_wafer", 20);
    UniverseEngrave("cpu_wafer", "#forge:lenses/light_blue", "32x gtceu:cpu_wafer", 20);
    UniverseEngrave("lpic_wafer", "gtceu:orange_glass_lens", "32x gtceu:lpic_wafer", 20);
    UniverseEngrave("mpic_wafer", "gtceu:brown_glass_lens", "32x gtceu:mpic_wafer", 100);
    UniverseEngrave("simple_soc_wafer", "gtceu:cyan_glass_lens", "32x gtceu:simple_soc_wafer", 20);
    UniverseEngrave("hasoc_wafer", "gtceu:black_glass_lens", "4x gtceu:highly_advanced_soc_wafer", 500);
    UniverseEngrave("ulpic_wafer", "#forge:lenses/blue", "32x gtceu:ulpic_wafer", 20);
    UniverseEngrave("soc_wafer", "gtceu:yellow_glass_lens", "16x gtceu:soc_wafer", 100);
    UniverseEngrave("asoc_wafer", "#forge:lenses/purple", "8x gtceu:advanced_soc_wafer", 200);
    UniverseEngrave("nand_wafer", "gtceu:gray_glass_lens", "16x gtceu:nand_memory_wafer", 100);
    UniverseEngrave("nor_wafer", "gtceu:pink_glass_lens", "16x gtceu:nor_memory_wafer", 100);

    // Multidimensional CPU

    event.recipes.gtceu.laser_engraver("unactivated_dimensional_cpu_wafer")
        .itemInputs("kubejs:universe_wafer")
        .notConsumable("gtceu:light_gray_glass_lens")
        .itemOutputs("kubejs:unactivated_multidimensional_cpu_wafer")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.large_chemical_reactor("multidimensional_cpu_wafer")
        .itemInputs("16x kubejs:unactivated_multidimensional_cpu_wafer", "64x kubejs:quantum_flux", "kubejs:quasi_stable_neutron_star")
        .inputFluids(Fluid.of("gtceu:xenon", 1000))
        .itemOutputs("16x kubejs:multidimensional_cpu_wafer")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(900)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.cutter("multidimensional_cpu_chip")
        .itemInputs("kubejs:multidimensional_cpu_wafer")
        .inputFluids(Fluid.of("minecraft:water", 1000))
        .itemOutputs("16x kubejs:multidimensional_cpu_chip")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1800)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.cutter("multidimensional_cpu_chip_distilled")
        .itemInputs("kubejs:multidimensional_cpu_wafer")
        .inputFluids(Fluid.of("gtceu:distilled_water", 750))
        .itemOutputs("16x kubejs:multidimensional_cpu_chip")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.cutter("multidimensional_cpu_chip_lubricant")
        .itemInputs("kubejs:multidimensional_cpu_wafer")
        .inputFluids(Fluid.of("gtceu:lubricant", 250))
        .itemOutputs("16x kubejs:multidimensional_cpu_chip")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(900)
        .EUt(GTValues.VA[GTValues.IV])

    // Hyperdynamic RAM
    event.recipes.gtceu.laser_engraver("hyperdynamic_ram_wafer")
        .itemInputs("kubejs:universe_wafer")
        .notConsumable("gtceu:magenta_glass_lens")
        .itemOutputs("kubejs:hyperdynamic_ram_wafer")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.cutter("hyperdynamic_ram_chip")
        .itemInputs("kubejs:hyperdynamic_ram_wafer")
        .inputFluids(Fluid.of("minecraft:water", 1000))
        .itemOutputs("12x kubejs:hyperdynamic_ram_chip_base")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1800)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.cutter("hyperdynamic_ram_chip_distilled")
        .itemInputs("kubejs:hyperdynamic_ram_wafer")
        .inputFluids(Fluid.of("gtceu:distilled_water", 750))
        .itemOutputs("12x kubejs:hyperdynamic_ram_chip_base")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.cutter("hyperdynamic_ram_chip_lubricant")
        .itemInputs("kubejs:hyperdynamic_ram_wafer")
        .inputFluids(Fluid.of("gtceu:lubricant", 250))
        .itemOutputs("12x kubejs:hyperdynamic_ram_chip_base")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(900)
        .EUt(GTValues.VA[GTValues.IV])

    event.recipes.gtceu.circuit_assembler("activated_hyperdynamic_ram_chip")
        .itemInputs("4x kubejs:hyperdynamic_ram_chip_base", "2x kubejs:matter_processing_unit", "4x gtceu:advanced_smd_transistor", "12x gtceu:fine_necrosiderite_wire")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("4x kubejs:hyperdynamic_ram_chip")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(300)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.circuit_assembler("activated_hyperdynamic_ram_chip_complex")
        .itemInputs("4x kubejs:hyperdynamic_ram_chip_base", "2x kubejs:matter_processing_unit", "1x kubejs:complex_smd_transistor", "12x gtceu:fine_necrosiderite_wire")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("4x kubejs:hyperdynamic_ram_chip")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(150)
        .EUt(GTValues.VA[GTValues.UV])

    // Quantum SoC
    event.recipes.gtceu.laser_engraver("quantum_soc_wafer")
        .itemInputs("kubejs:universe_wafer")
        .notConsumable("gtceu:nether_star_lens")
        .itemOutputs("kubejs:quantum_soc_wafer")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.cutter("quantum_soc_chip")
        .itemInputs("kubejs:quantum_soc_wafer")
        .inputFluids(Fluid.of("minecraft:water", 1000))
        .itemOutputs("6x kubejs:quantum_soc_chip_base")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1800)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.cutter("quantum_soc_chip_distilled")
        .itemInputs("kubejs:quantum_soc_wafer")
        .inputFluids(Fluid.of("gtceu:distilled_water", 750))
        .itemOutputs("6x kubejs:quantum_soc_chip_base")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(1200)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.cutter("quantum_soc_chip_lubricant")
        .itemInputs("kubejs:quantum_soc_wafer")
        .inputFluids(Fluid.of("gtceu:lubricant", 250))
        .itemOutputs("6x kubejs:quantum_soc_chip_base")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(900)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.circuit_assembler("activated_quantum_soc_chip")
        .itemInputs("8x kubejs:quantum_soc_chip_base", "4x kubejs:complex_smd_transistor", "4x kubejs:complex_smd_resistor", "4x kubejs:complex_smd_capacitor", "4x kubejs:complex_smd_diode", "4x kubejs:complex_smd_inductor")
        .inputFluids("gtceu:soldering_alloy 144")
        .itemOutputs("8x kubejs:quantum_soc_chip")
        .cleanroom(CleanroomType.CLEANROOM)
        .duration(300)
        .EUt(GTValues.VA[GTValues.UIV])
})
