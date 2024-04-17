// Small Microverse Projector Recipes
ServerEvents.recipes(event => {
    event.recipes.gtceu.basic_microverse('kubejs:t_one_first')
        .itemInputs('kubejs:microminer_t1', 'kubejs:ultra_dense_hydrogen')
        .itemOutputs('kubejs:stellar_creation_data')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 2000))
        .duration(100)
        .EUt(500)

    event.recipes.gtceu.basic_microverse('kubejs:t_one_second')
        .itemInputs('kubejs:microminer_t1', 'kubejs:quantum_flux', 'kubejs:gem_sensor')
        .itemOutputs('64x gtceu:diamond_perfect', '64x gtceu:apatite_ore', '64x gtceu:tricalcium_phosphate_ore', '64x gtceu:quartzite_ore')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 8000))
        .duration(500)
        .EUt(500)

    event.recipes.gtceu.basic_microverse('kubejs:t_one_third')
        .itemInputs('kubejs:microminer_t1', 'kubejs:quantum_flux', 'minecraft:chest')
        .itemOutputs('64x kubejs:dense_iron_ore', '64x gtceu:cassiterite_ore', '64x gtceu:redstone_ore', '64x gtceu:nickel_ore', '64x gtceu:ilmenite_ore', '64x gtceu:ilmenite_ore', '64x gtceu:ilmenite_ore', '64x gtceu:uraninite_ore', '64x gtceu:galena_ore', '64x gtceu:galena_ore', '64x gtceu:molybdenum_ore', '64x gcyr:moon_stone', '64x gtceu:dilithium_ore', '64x gtceu:salt_ore')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 8000))
        .duration(500)
        .EUt(500)

    event.recipes.gtceu.basic_microverse('kubejs:t_two_first')
        .itemInputs('kubejs:microminer_t2', '4x kubejs:ultra_dense_hydrogen')
        .itemOutputs('4x kubejs:stellar_creation_data')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 3000))
        .duration(120)
        .EUt(1000)

    event.recipes.gtceu.basic_microverse('kubejs:t_two_second')
        .itemInputs('kubejs:microminer_t2', '2x kubejs:quantum_flux')
        .itemOutputs('64x kubejs:dense_copper_ore', '64x gtceu:endstone_bauxite_ore', '64x gtceu:endstone_pyrochlore_ore', '64x gtceu:endstone_pyrochlore_ore', '64x gtceu:endstone_sphalerite_ore', '64x gtceu:endstone_cassiterite_ore', '64x gtceu:endstone_scheelite_ore', '64x gtceu:endstone_scheelite_ore', '64x gtceu:endstone_scheelite_ore', '64x gtceu:endstone_tungstate_ore', '64x gtceu:endstone_tungstate_ore', '64x gtceu:endstone_tungstate_ore', '64x kubejs:radium_salt', '64x kubejs:radium_salt')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 12000))
        .duration(600)
        .EUt(1000)


    event.recipes.gtceu.basic_microverse('kubejs:t_three_one')
        .itemInputs('kubejs:microminer_t3', '4x kubejs:quantum_flux', 'gtceu:mv_super_chest')
        .itemOutputs('64x gtceu:netherrack_scheelite_ore', '64x gtceu:netherrack_scheelite_ore', '64x gtceu:netherrack_scheelite_ore', '64x gtceu:netherrack_tungstate_ore', '64x gtceu:netherrack_tungstate_ore', '64x gtceu:netherrack_tungstate_ore', '64x gtceu:vanadium_magnetite_ore', '64x gtceu:tetrahedrite_ore', '64x gtceu:cassiterite_ore', '64x gtceu:tin_ore', '64x gtceu:redstone_ore', '64x gtceu:certus_quartz_ore', '64x gtceu:almandine_ore', '64x gtceu:lepidolite_ore', '64x gtceu:ilmenite_ore')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 20000))
        .duration(700)
        .EUt(2000)

    event.recipes.gtceu.basic_microverse('kubejs:t_three_second')
        .itemInputs('kubejs:microminer_t3', '4x kubejs:quantum_flux', 'kubejs:gem_sensor')
        .itemOutputs('64x gtceu:diamond_perfect', '32x gtceu:diamond_perfect', '64x gtceu:ruby_perfect', '48x gtceu:topaz_perfect', '32x gtceu:emerald_perfect', '64x gtceu:netherrack_sapphire_ore', '64x gtceu:netherrack_gold_ore', '64x gtceu:netherrack_silver_ore')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 20000))
        .duration(700)
        .EUt(2000)

    event.recipes.gtceu.basic_microverse('kubejs:t_two_third')
        .itemInputs('kubejs:microminer_t2', '4x gtceu:hv_electric_pump', '64x kubejs:cryotheum_dust')
        .itemOutputs('10x kubejs:solidified_neon', '10x kubejs:solidified_krypton', '10x kubejs:solidified_xenon')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 12000))
        .duration(700)
        .EUt(2000)
})
//ALL OF THE ABOVE IS DONE

// Advanced Microverse Projector Recipes
ServerEvents.recipes(event => {
    event.recipes.gtceu.advanced_microverse('kubejs:t_four_first')
        .itemInputs('kubejs:microminer_t4', '8x kubejs:quantum_flux', '4x kubejs:wither_realm_data', '64x kubejs:petrotheum_dust')
        .itemOutputs('64x gtceu:iridosmineyes_ore', '64x gtceu:iridosmineyes_ore', '16x gtceu:osmiridiumyes_ore')
        .duration(800)
        .EUt(3750)

    event.recipes.gtceu.advanced_microverse('kubejs:t_four_second')
        .itemInputs('kubejs:microminer_t4', '8x kubejs:quantum_flux', 'kubejs:gem_sensor', '64x kubejs:petrotheum_dust')
        .itemOutputs('64x kubejs:dense_lapis_ore', '64x kubejs:dense_diamond_ore', '64x kubejs:dense_diamond_ore', '64x kubejs:dense_coal_ore', '32x kubejs:dense_emerald_ore', '16x kubejs:dense_redstone_ore')
        .duration(800)
        .EUt(3750)

    event.recipes.gtceu.advanced_microverse('kubejs:t_four_third')
        .itemInputs('kubejs:microminer_t4', '8x kubejs:quantum_flux', 'gtceu:advanced_power_thruster', '64x kubejs:petrotheum_dust')
        .itemOutputs('64x kubejs:dense_oilsands_ore', '64x kubejs:dense_oilsands_ore', '32x kubejs:compressed_infinity_dust_block')
        .duration(800)
        .EUt(3750)

    event.recipes.gtceu.advanced_microverse('kubejs:t_five_first')
        .itemInputs('kubejs:microminer_t5', '16x kubejs:quantum_flux', '32x kubejs:stabilized_plutonium')
        .itemOutputs('64x gtceu:endstone_cooperite_ore', '64x gtceu:endstone_cooperite_ore', '64x gtceu:naquadah_ore', '64x gtceu:naquadah_ore', '64x gtceu:naquadah_ore', '48x gtceu:kaemanite_ore')
        .duration(1000)
        .EUt(7500)

    event.recipes.gtceu.advanced_microverse('kubejs:t_five_second')
        .itemInputs('kubejs:microminer_t5', '16x kubejs:quantum_flux', '32x kubejs:stabilized_uranium')
        .itemOutputs('64x gtceu:uraninite_ore', '64x gtceu:palladium_ore', '64x gtceu:realgar_ore', '64x gtceu:bastnasite_ore', '64x gtceu:bastnasite_ore', '64x gtceu:monazite_ore', '64x gtceu:ender_pearl_block', '16x gtceu:osmiridiumyes_ore', '64x gtceu:boron_dust', '64x gtceu:molybdenite_ore', '64x gtceu:beryllium_ore', '64x gtceu:beryllium_ore')
        .duration(1000)
        .EUt(7500)

    event.recipes.gtceu.advanced_microverse('kubejs:t_six_first')
        .itemInputs('kubejs:microminer_t3', '16x kubejs:quantum_flux', '32x kubejs:stabilized_uranium', '16x kubejs:wither_realm_data')
        .itemOutputs('64x gtceu:uraninite_ore', '64x gtceu:uraninite_ore', '64x gtceu:uraninite_ore', '64x gtceu:uraninite_ore', '64x gtceu:osmiridiumyes_ore', '64x gtceu:osmiridiumyes_ore', '64x gtceu:osmiridiumyes_ore', '64x gtceu:iridosmineyes_ore', '64x gtceu:iridosmineyes_ore')
        .duration(1250)
        .EUt(18750)

    event.recipes.gtceu.advanced_microverse('kubejs:t_six_second')
        .itemInputs('kubejs:microminer_t6', '16x kubejs:quantum_flux', '32x kubejs:stabilized_plutonium', '64x kubejs:wither_realm_data')
        .itemOutputs('32x kubejs:stabilized_einsteinium')
        .duration(1250)
        .EUt(18750)

    event.recipes.gtceu.advanced_microverse('kubejs:t_six_third')
        .itemInputs('kubejs:microminer_t6', '16x kubejs:quantum_flux', '32x kubejs:stabilized_plutonium', '16x kubejs:dragon_lair_data')
        .itemOutputs('32x minecraft:dragon_egg')
        .duration(1250)
        .EUt(18750)
})


// Advanced Microverse II Recipes
ServerEvents.recipes(event => {
    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_seven_first')
        .itemInputs('kubejs:microminer_t7', '64x kubejs:dilithium_crystal', '64x kubejs:dilithium_crystal', 'kubejs:gem_sensor', '64x kubejs:wither_realm_data', '64x kubejs:wither_realm_data', '64x kubejs:wither_realm_data', '64x kubejs:wither_realm_data')
        .itemOutputs('kubejs:lair_of_the_chaos_guardian_data')
        .duration(1500)
        .EUt(31250)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_seven_second')
        .itemInputs('kubejs:microminer_t7', '32x kubejs:quantum_flux', '64x kubejs:dilithium_crystal', '64x kubejs:dilithium_crystal', '32x kubejs:dragon_lair_data')
        .itemOutputs('32x draconicevolution:dragon_heart', '64x minecraft:dragon_egg', '64x minecraft:dragon_egg', '64x minecraft:dragon_breath', '64x armorplus:ender_dragon_scale', '64x armorplus:ender_dragon_scale', '64x armorplus:ender_dragon_scale', '64x minecraft:gold_block', '64x minecraft:gold_block', '64x minecraft:gold_block', '64x gtceu:silver_block', '64x gtceu:silver_block', '64x minecraft:diamond_block', '64x minecraft:diamond_block', '64x gtceu:platinum_block', '16x gtceu:ruthenium_block')
        .duration(1500)
        .EUt(31250)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_eight_first')
        .itemInputs('kubejs:microminer_t8', '64x kubejs:quantum_flux', '64x kubejs:dilithium_crystal', '64x kubejs:dilithium_crystal', '64x kubejs:dilithium_crystal', '64x kubejs:dilithium_crystal', 'kubejs:lair_of_the_chaos_guardian_data')
        .itemOutputs('4x draconicevolution:chaos_shard', '64x minecraft:dragon_egg', '64x minecraft:dragon_egg', '64x minecraft:dragon_egg', '64x minecraft:dragon_egg')
        .duration(1500)
        .EUt(62500)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_eight_second')
        .itemInputs('kubejs:microminer_t8', '64x kubejs:quantum_flux', '64x kubejs:dilithium_crystal', '64x kubejs:dilithium_crystal', '64x kubejs:dilithium_crystal', '64x kubejs:dilithium_crystal', '64x kubejs:wither_realm_data', '64x kubejs:wither_realm_data',)
        .itemOutputs('32x gtceu:quantum_star', '64x gtceu:quantum_eye', '16x avaritia:neutronium_ingot', 'gtceu:gravi_star')
        .duration(2000)
        .EUt(62500)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_nine_first')
        .itemInputs('kubejs:microminer_t9', '4x gtceu:draconium_awakened_block', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data')
        .itemOutputs('kubejs:universe_creation_data')
        .duration(3000)
        .EUt(250000)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_nine_second')
        .itemInputs('kubejs:microminer_t9', '4x gtceu:neutron_reflector', '4x gtceu:draconium_awakened_block', 'kubejs:stellar_creation_data')
        .itemOutputs('64x avaritia:neutronium_nugget', '64x avaritia:neutronium_nugget', '64x avaritia:neutronium_nugget', '64x avaritia:neutronium_nugget', '64x avaritia:neutronium_nugget', '64x avaritia:neutronium_nugget', '64x avaritia:neutronium_nugget', '64x avaritia:neutronium_nugget', '64x avaritia:neutronium_nugget', '64x avaritia:neutronium_nugget')
        .duration(3000)
        .EUt(250000)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_ten_first')
        .itemInputs('kubejs:microminer_t10', 'kubejs:universe_creation_data', '8x gtceu:draconium_awakened_block')
        .itemOutputs('kubejs:heart_of_a_universe')
        .duration(6000)
        .EUt(1000000)
})

// ALMOST COMPLETED DONT TOUCH ILL FIX TOMMORROW - NEMEZANEVEM
//STFU YOU FUCKING LIAR - CLOWN (Written a Month later)
// lol - Pansmith

// Microversium
ServerEvents.recipes(event => {

    event.recipes.gtceu.electric_blast_furnace("kubejs:microversium_ingot")
        .itemInputs('2x gtceu:steel_ingot', "minecraft:redstone", "minecraft:glowstone_dust")
        .inputFluids('gtceu:deuterium 100')
        .itemOutputs('gtceu:microversium_ingot')
        .duration(600)
        .blastFurnaceTemp(1700)
        .EUt(120)

    event.shaped(
        '2x kubejs:microverse_casing', [
        'PPP',
        'PWP',
        'PPP'
    ], {
        P: 'gtceu:microversium_plate',
        W: '#forge:tools/wrenches'
    }).id('kubejs:shapeless/microverse_casing')
    event.recipes.gtceu.assembler("kubejs:microverse_casing")
        .itemInputs("4x gtceu:microversium_plate")
        .itemOutputs("kubejs:microverse_casing")
        .duration(50)
        .circuit(6)
        .EUt(16)

    var projector = [
        ['basic_microverse_projector', '#gtceu:circuits/hv'],
        ['advanced_microverse_projector', '#gtceu:circuits/ev'],
        ['advanced_microverse_projector_ii', '#gtceu:circuits/iv'],
    ]

    projector.forEach(projector => {
        event.shaped(
            `gtceu:${projector[0]}`, [
            'CMC',
            'MAM',
            'CMC'
        ], {
            C: projector[1],
            M: 'kubejs:microverse_casing',
            A: 'gtceu:computer_monitor_cover'
        }
        ).id(`kubejs:${projector[0]}`)
    })
})