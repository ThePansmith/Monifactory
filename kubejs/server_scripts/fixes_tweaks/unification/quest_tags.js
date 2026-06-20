/**
 * Item tags for the Quest Book
 */
ServerEvents.tags("item", event => {
    // Multiblock components for giving players a BOM in the QB
    event.add("moni:heating_coil", /(?!molybdenum_disilicide)[\w]*_coil_block$/)
    event.add("moni:rotor_holder", /^gtceu:[\w]+_rotor_holder$/)
    event.add("moni:parallel_hatch", /^gtceu:[\w]+_parallel_hatch$/)
    event.add("moni:maintenance_hatch", /^gtceu:[\w_]*maintenance_hatch$/)
    event.add("moni:muffler_hatch", /^gtceu:[\w]+_muffler_hatch$/)
    event.add("moni:input_bus", /^gtceu:(?!steam)(?!me).{1,3}_input_bus$/)
    event.add("moni:output_bus", /^gtceu:(?!steam)(?!me).{1,3}_output_bus$/)
    event.add("moni:input_hatch", /^gtceu:(?!steam)(?!me).{1,3}_input_hatch$/); // ($) we dont want to get output_hatch_hv
    event.add("moni:output_hatch", /^gtceu:(?!steam)(?!me).{1,3}_output_hatch$/); // nor do we want hv_energy_input_hatch
    event.add("moni:energy_hatch", /^gtceu:[\w]+_energy_input_hatch/)
    event.add("moni:dynamo_hatch", /^gtceu:[\w]+_energy_output_hatch/)
    event.add("moni:substation_input_hatch", /^gtceu:[\w]+_substation_input_hatch/)
    event.add("moni:substation_output_hatch", /^gtceu:[\w]+_substation_output_hatch/)
    event.add("moni:laser_source_hatch", /^gtceu:[\w]+_laser_source_hatch/)
    event.add("moni:laser_target_hatch", /^gtceu:[\w]+_laser_target_hatch/)

    // 'moni_quest:backpack'
    event.add("moni_quest:backpack", ["sophisticatedbackpacks:backpack", "sophisticatedbackpacks:copper_backpack", "sophisticatedbackpacks:iron_backpack", "sophisticatedbackpacks:gold_backpack", "sophisticatedbackpacks:diamond_backpack", "sophisticatedbackpacks:netherite_backpack"])

    // Monicoin, mostly cosmetic
    event.add("moni:coins", ["kubejs:moni_penny", "kubejs:moni_nickel", "kubejs:moni_quarter", "kubejs:moni_dollar"])
})
