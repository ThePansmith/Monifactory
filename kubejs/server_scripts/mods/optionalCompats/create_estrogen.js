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
        event.remove({ output: "estrogen:uwu" })
        event.remove([
            { output: "estrogen:estrogen_pill" },
            { output: "estrogen:crystal_estrogen_pill"},
            { output: "estrogen:estrogen_patches" },
            { output: "estrogen:filtrated_horse_urine" },
            { output: "estrogen:centrifuge" }
        ])

        // Replaces create flour with GT flour
        event.replaceInput(
            { input: "create:wheat_flour" },
            "create:wheat_flour",
            "gtceu:wheat_dust"
        )

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
            .inputFluids(Fluid.of("estrogen:gender_fluid", 250))
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
            .inputFluids(Fluid.of("estrogen:liquid_estrogen", 1000))
            .itemOutputs("4x estrogen:estrogen_pill")
            .duration(200)
            .EUt(48)

        event.recipes.gtceu.assembler("estrogen_patches")
            .itemInputs("minecraft:paper", "create:super_glue")
            .inputFluids(Fluid.of("estrogen:liquid_estrogen", 1000))
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
    })

    console.log("Create: Estrogen Loaded!")
}
