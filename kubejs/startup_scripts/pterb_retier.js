/**
 * Re-tiers the PTERB to late LuV - script 1 of 2.
 * - Replaces the neutronium frames with europium frames.
 */

let PTERBMachine = Java.loadClass("net.neganote.gtutilities.common.machine.multiblock.PTERBMachine")
let GTMemoizer = Java.loadClass("com.gregtechceu.gtceu.utils.memoization.GTMemoizer")

StartupEvents.postInit(event => {
    let UtilMachines = Java.loadClass("net.neganote.gtutilities.common.machine.UtilMachines");
    let pterb_pattern = (definition) => FactoryBlockPattern.start()
        .aisle("###XXX###", "####F####", "#########", "####H####", "####H####", "####H####", "####H####", "####H####")
        .aisle("#XXXXXXX#", "###FHF###", "####H####", "####H####", "####H####", "####F####", "#########", "#########")
        .aisle("#XXHHHXX#", "#########", "#########", "#########", "####F####", "####F####", "#########", "#########")
        .aisle("XXHHHHHXX", "#F#####F#", "#########", "####S####", "###SSS###", "###SSS###", "###S#S###", "#########")
        .aisle("XXHHHHHXX", "FH##H##HF", "#H##C##H#", "HH#SSS#HH", "HHFSSSFHH", "HFFSSSFFH", "H#######H", "H#######H")
        .aisle("XXHHHHHXX", "#F#####F#", "#########", "####S####", "###SSS###", "###SSS###", "###S#S###", "#########")
        .aisle("#XXHHHXX#", "#########", "#########", "#########", "####F####", "####F####", "#########", "#########")
        .aisle("#XXXXXXX#", "###FHF###", "####H####", "####H####", "####H####", "####F####", "#########", "#########")
        .aisle("###XXX###", "####F####", "#########", "####H####", "####H####", "####H####", "####H####", "####H####")
        .where("#", Predicates.any())
        .where("X", Predicates.blocks("gtceu:palladium_substation").setMinGlobalLimited(30).or(PTERBMachine.getHatchPredicates()))
        .where("S", Predicates.blocks("gtceu:superconducting_coil"))
        .where("H", Predicates.blocks("gtceu:high_power_casing"))
        .where("C", Predicates.controller(Predicates.blocks(UtilMachines.PTERB_MACHINE.getBlock())))
        .where("F", Predicates.frames(GTMaterials.Europium))
        .build()
    UtilMachines.PTERB_MACHINE.setPatternFactory(GTMemoizer.memoize(() => pterb_pattern.apply(UtilMachines.PTERB_MACHINE)));
})
