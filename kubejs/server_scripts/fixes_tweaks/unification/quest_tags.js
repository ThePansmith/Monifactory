/**
 * Item tags for the Quest Book
 */
ServerEvents.tags('item', event => {
    // Input Hatches
    event.add('moni:input_hatch', /^gtceu:(?!steam)(?!me).{1,3}_input_hatch$/); // ($) we dont want to get output_hatch_hv
    // Output Hatches
    event.add('moni:output_hatch', /^gtceu:(?!steam)(?!me).{1,3}_output_hatch$/); // nor do we want hv_energy_input_hatch
    // Input buses
    event.add('moni:input_bus', /^gtceu:(?!steam)(?!me).{1,3}_input_bus$/)
    // Output busses
    event.add('moni:output_bus', /^gtceu:(?!steam)(?!me).{1,3}_output_bus$/)

    // 'moni_quest:backpack'
    event.add('moni_quest:backpack', ['sophisticatedbackpacks:backpack', 'sophisticatedbackpacks:copper_backpack', 'sophisticatedbackpacks:iron_backpack', 'sophisticatedbackpacks:gold_backpack', 'sophisticatedbackpacks:diamond_backpack', 'sophisticatedbackpacks:netherite_backpack'])

    // Monicoin, mostly cosmetic
    event.add('moni:coins', ['kubejs:moni_penny', 'kubejs:moni_nickel', 'kubejs:moni_quarter', 'kubejs:moni_dollar'])
})
