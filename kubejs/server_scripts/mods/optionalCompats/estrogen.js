/**
 *
 * Compatibility Script for Create: Estrogen.
 * TRANS MOTHERFUCKING RIGHTS!!!
 *
 */

if (Platform.isLoaded("estrogen")) {
    console.log("Create: Estrogen detected, loading compat script...")

    ServerEvents.recipes(event => {
        // Recipe Removal
        event.remove({ type: "estrogen:centrifuging" })
        event.remove([
            { output: "estrogen:estrogen_pill" },
            { output: "estrogen:crystal_estrogen_pill"},
            { output: "estrogen:estrogen_patches" },
            { output: "estrogen:uwu" },
            { output: "estrogen:centrifuge" }
        ])

        // :3
        event.recipes.extendedcrafting.shaped_table("estrogen:uwu", [
            "DDDDDDD",
            "DBBBABD",
            "DACDCAD",
            "DBDEABD",
            "DACDCAD",
            "DBBBABD",
            "DDDDDDD"
        ], {
            A: "gtceu:silicone_rubber_plate",
            B: "gtceu:uranium_triplatinum_hex_wire",
            C: "gtceu:ev_robot_arm",
            D: "estrogen:estrogen_pill_block",
            E: "#gtceu:circuits/iv"
        })

        // Simple Recipes
        event.recipes.gtceu.compressor("estrogen_pill_block")
            .itemInputs("9x estrogen:estrogen_pill")
            .itemOutputs("estrogen:estrogen_pill_block")
            .duration(40)
            .EUt(28)

        event.recipes.gtceu.canner("gender_change_potion")
            .itemInputs("minecraft:glass_bottle")
            .inputFluids("estrogen:gender_fluid 250")
            .itemOutputs("estrogen:gender_change_potion")
            .duration(20)
            .EUt(8)

        event.recipes.gtceu.assembler("moth_elytra")
            .itemInputs("estrogen:moth_fuzz", "minecraft:elytra")
            .itemOutputs("estrogen:moth_elytra")
            .duration(200)
            .EUt(64)

        event.recipes.gtceu.mixer("dormant_dream_block")
            .itemInputs("gtceu:ender_pearl_dust", "minecraft:tinted_glass")
            .itemOutputs("estrogen:dormant_dream_block")
            .duration(100)
            .EUt(64)

        event.recipes.gtceu.mixer("estrogen_pill")
            .itemInputs("#forge:dough", "minecraft:cocoa_beans")
            .inputFluids("estrogen:liquid_estrogen")
            .itemOutputs("4x estrogen:estrogen_pill")
            .duration(200)
            .EUt(48)

        event.recipes.gtceu.assembler("estrogen_patches")
            .itemInputs("minecraft:paper", "create:super_glue")
            .inputFluids("estrogen:liquid_estrogen 1000")
            .itemOutputs("estrogen:estrogen_patches")
            .duration(200)
            .EUt(56)

        event.recipes.gtceu.mixer("crystal_estrogen_pill")
            .itemInputs("4x estrogen:estrogen_pill", "gtceu:amethyst_dust")
            .itemOutputs("4x estrogen:crystal_estrogen_pill")
            .duration(40)
            .EUt(28)

        event.recipes.gtceu.atomic_reconstruction("moth_fuzz")
            .itemInputs("#minecraft:wool")
            .itemOutputs("estrogen:moth_fuzz")
            .duration(100)
            .EUt(30)

        // ------------------------------------------------------------------ \\
        //                           Testosterone                             \\
        // ------------------------------------------------------------------ \\

        event.recipes.gtceu.centrifuge("small_cholestrol_dust")
            .itemInputs("2x gtceu:meat_dust")
            .itemOutputs("gtceu:small_cholestrol_dust")
            .duration(100)
            .EUt(36)

        event.recipes.gtceu.chemical_reactor("small_testosterone_dust")
            .itemInputs("gtceu:small_cholestrol_dust")
            .inputFluids("gtceu:oxygen", "gtceu:hydrogen", "gtceu:ethanol")
            .itemOutputs("gtceu:small_testosterone_dust")
            .duration(100)
            .EUt(40)
            .cleanroom(CleanroomType.CLEANROOM)

        event.recipes.gtceu.chemical_reactor("testosterone_dust")
            .itemInputs("gtceu:cholestrol_dust")
            .inputFluids("gtceu:oxygen 4000", "gtceu:hydrogen 4000", "gtceu:ethanol 4000")
            .itemOutputs("gtceu:small_testosterone_dust")
            .duration(100)
            .EUt(40)
            .cleanroom(CleanroomType.CLEANROOM)

        // ------------------------------------------------------------------ \\
        //                          Estrogen Line                             \\
        // ------------------------------------------------------------------ \\

        event.recipes.gtceu.fermenter("boldione")
            .inputFluids("gtceu:fermented_biomass 50")
            .outputFluids("gtceu:boldione 50")
            .duration(150)
            .EUt(2)
            .cleanroom(CleanroomType.CLEANROOM)

        event.recipes.gtceu.chemical_reactor("tetralin")
            .itemInputs("gtceu:nickel_dust")
            .inputFluids("gtceu:naphthalene", "gtceu:hydrogen")
            .outputFluids("gtceu:tetralin")
            .duration(100)
            .EUt(16)
            .cleanroom(CleanroomType.CLEANROOM)

        event.recipes.gtceu.chemical_reactor("impure_estrogen")
            .inputFluids("gtceu:boldione", "gtceu:tetralin")
            .outputFluids("gtceu:impure_estrogen")
            .duration(100)
            .EUt(16)
            .cleanroom(CleanroomType.CLEANROOM)

        event.recipes.gtceu.large_chemical_reactor("impure_estrogen_lcr")
            .itemInputs("4x gtceu:nickel_dust")
            .inputFluids("gtceu:boldione", "gtceu:naphthalene", "gtceu:hydrogen 4000")
            .outputFluids("gtceu:impure_estrogen")
            .circuit(24)
            .duration(150)
            .EUt(48)
            .cleanroom(CleanroomType.CLEANROOM)

        event.recipes.gtceu.centrifuge("liquid_estrogen")
            .inputFluids("gtceu:impure_estrogen 1000")
            .outputFluids("estrogen:liquid_estrogen 1000", "gtceu:naphthalene 900")
            .duration(100)
            .EUt(16)
            .cleanroom(CleanroomType.CLEANROOM)

        // ------------------------------------------------------------------ \\

        event.recipes.gtceu.brewery("gender_fluid")
            .inputFluids("estrogen:liquid_estrogen")
            .itemInputs("gtceu:small_testosterone_dust")
            .outputFluids("estrogen:gender_fluid")
            .duration(200)
            .EUt(16)

        event.recipes.gtceu.brewery("gender_fluid_compress")
            .inputFluids("estrogen:liquid_estrogen 4000")
            .itemInputs("gtceu:testosterone_dust")
            .outputFluids("estrogen:gender_fluid 4000")
            .duration(200)
            .EUt(16)
    })

    console.log("Create: Estrogen Loaded!")
}
