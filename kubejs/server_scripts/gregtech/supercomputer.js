/**
 * Simulation Supercomputer multiblock
 */
ServerEvents.recipes(event => {
    function supercomp(model, prediction, EUt) {
        event.recipes.gtceu.simulation_supercomputer(`kubejs:${model}`)
            .notConsumable(Item.of("hostilenetworks:data_model", `{data_model:{id:"hostilenetworks:${model}"}}`).weakNBT())
            .itemInputs("hostilenetworks:prediction_matrix")
            .itemOutputs(`hostilenetworks:${prediction}_prediction`)
            .chancedOutput(Item.of("hostilenetworks:prediction", `{data_model:{id:"hostilenetworks:${model}"}}`), 5000, 0)
            .duration(15.05 * 20) // same for all recipes
            .EUt(EUt)
    }
    if (doHNN) {
        // //// Machine Recipe //////

        event.recipes.gtceu.assembler("kubejs:black_steel_casing")
            .itemInputs("6x gtceu:black_steel_plate", "gtceu:black_steel_frame")
            .itemOutputs("2x kubejs:black_steel_casing")
            .duration(50)
            .circuit(6)
            .EUt(16)

        event.shaped("gtceu:simulation_supercomputer", [
            "BPB",
            "CSC",
            "BCB"
        ], {
            B: "gtceu:dark_steel_plate",
            C: "#gtceu:circuits/ev",
            P: "gtceu:ev_emitter",
            S: "hostilenetworks:sim_chamber",
        }).id("gtceu:shaped/simulation_supercomputer")

        event.recipes.gtceu.assembly_line("simulation_quantumcomputer")
            .itemInputs("gtceu:atomic_casing", "6x gtceu:trinaquadalloy_plate", "16x hostilenetworks:sim_chamber", "kubejs:heart_of_a_universe", "4x #gtceu:circuits/uhv", "2x gtceu:uv_robot_arm", "2x gtceu:uv_field_generator", "kubejs:abyssal_energy_core")
            .inputFluids("gtceu:soldering_alloy 1152")
            .itemOutputs("gtceu:simulation_quantumcomputer")
            .stationResearch(b => b
                .researchStack("gtceu:simulation_supercomputer")
                .EUt(1966080)
                .CWUt(128, 512000)
            )
            .duration(1200)
            .EUt(1966080)
        // //// Computer Recipes //////

        supercomp("thermal/thermal_elemental", "overworld", 256)
        supercomp("shulker", "end", 128)
        supercomp("wither_skeleton", "nether", 256)
        supercomp("ender_dragon", "end", 1666)
        supercomp("slime", "overworld", 16)
        supercomp("skeleton", "overworld", 16)
        supercomp("blaze", "nether", 256)
        supercomp("zombie", "overworld", 16)
        supercomp("witch", "overworld", 128)
        supercomp("guardian", "overworld", 256)
        supercomp("spider", "overworld", 16)
        supercomp("ghast", "nether", 256)
        supercomp("wither", "nether", 1666)
        supercomp("creeper", "overworld", 16)
        supercomp("enderman", "end", 512)
        supercomp("warden", "overworld", 1666)
    }
})
