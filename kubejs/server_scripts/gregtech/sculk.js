/**
 * Recipes for Liquid Sculk, Sculk Catalyst, Sculk Core, and so on.
 */
ServerEvents.recipes(event => {
    event.recipes.gtceu.autoclave("echo_shard")
        .inputFluids("gtceu:sculk 144")
        .itemInputs("1x gtceu:quartzite_dust")
        .itemOutputs("1x minecraft:echo_shard")
        .duration(20 * 5)
        .EUt(GTValues.VA[GTValues.EV])

    // Synthesis/recycling recipes for Sculk Vein
    event.recipes.gtceu.forge_hammer("sculk_vein")
        .itemInputs("minecraft:sculk")
        .itemOutputs("9x minecraft:sculk_vein")
        .duration(20 * 2)
        .EUt(GTValues.VA[GTValues.ULV])

    event.recipes.gtceu.extractor("extract_sculk_vein")
        .itemInputs("1x minecraft:sculk_vein")
        .outputFluids("gtceu:sculk 16")
        .duration(24)
        .EUt(GTValues.VA[GTValues.LV])
        .category("gtceu:extractor_recycling")

    event.recipes.gtceu.macerator("macerate_sculk_vein")
        .itemInputs("1x minecraft:sculk_vein")
        .itemOutputs("1x gtceu:tiny_sculk_dust")
        .duration(24)
        .EUt(GTValues.VA[GTValues.ULV])
        .category("gtceu:macerator_recycling")

    // Sculk Catalyst Synthesis
    event.recipes.gtceu.large_chemical_reactor("sculk_catalyst")
        .notConsumable("minecraft:sculk_catalyst")
        .itemInputs("1x #chipped:deepslate", "1x minecraft:bone_block")
        .inputFluids("gtceu:sculk 288", "enderio:xp_juice 1000", "gtceu:plutonium 36")
        .itemOutputs("1x minecraft:sculk_catalyst")
        .duration(250)
        .EUt(GTValues.VA[GTValues.EV])
        .biome("minecraft:deep_dark")

    event.recipes.gtceu.large_chemical_reactor("sculk_catalyst_boosted")
        .notConsumable("minecraft:sculk_catalyst")
        .itemInputs("4x #chipped:deepslate", "4x minecraft:bone_block")
        .inputFluids("gtceu:sculk 576", "enderio:xp_juice 2000", "gtceu:berkelium 36")
        .itemOutputs("4x minecraft:sculk_catalyst")
        .duration(1000)
        .EUt(GTValues.VA[GTValues.EV])
        .biome("minecraft:deep_dark")
})

/*
Add a custom tag to all the items whose blocks can be used to grow Sculk
for use in the Svat recipe that grows sculk
*/
ServerEvents.tags("item", event => {
    event.add("moni:sculk_growable", Block.getTaggedIds("minecraft:sculk_replaceable"))
})
