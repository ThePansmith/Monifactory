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
        .itemOutputs(
            '64x gtceu:diamond_perfect',
            '64x gtceu:apatite_ore',
            '64x gtceu:tricalcium_phosphate_ore',
            '64x gtceu:quartzite_ore')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 8000))
        .duration(500)
        .EUt(500)

    event.recipes.gtceu.basic_microverse('kubejs:t_one_third')
        .itemInputs('kubejs:microminer_t1', 'kubejs:quantum_flux', 'minecraft:chest')
        .itemOutputs(
            '64x kubejs:dense_iron_ore',
            '64x gtceu:cassiterite_ore',
            '64x gtceu:redstone_ore',
            '64x gtceu:nickel_ore',
            '64x gtceu:ilmenite_ore',
            '64x gtceu:ilmenite_ore',
            '64x gtceu:ilmenite_ore',
            '64x gtceu:uraninite_ore',
            '64x gtceu:galena_ore',
            '64x gtceu:galena_ore',
            '64x gtceu:molybdenum_ore',
            '64x gcyr:moon_sand',
            '64x gtceu:dilithium_ore',
            '64x gtceu:salt_ore')
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
        .itemOutputs(
            '64x gtceu:endstone_bauxite_ore',
            '64x gtceu:endstone_pyrochlore_ore',
            '64x gtceu:endstone_pyrochlore_ore',
            '64x gtceu:endstone_copper_ore',
            '64x gtceu:endstone_sphalerite_ore',
            '64x gtceu:endstone_cassiterite_ore',
            '64x gtceu:endstone_scheelite_ore',
            '64x gtceu:endstone_scheelite_ore',
            '64x gtceu:endstone_scheelite_ore',
            '64x gtceu:endstone_tungstate_ore',
            '64x gtceu:endstone_tungstate_ore',
            '64x gtceu:endstone_tungstate_ore',
            '64x kubejs:radium_salt',
            '64x kubejs:radium_salt'
        )
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 12000))
        .duration(600)
        .EUt(1000)

    event.recipes.gtceu.basic_microverse('kubejs:t_two_third')
        .itemInputs('kubejs:microminer_t2', '4x gtceu:hv_electric_pump', '64x kubejs:cryotheum_dust')
        .itemOutputs(
            '10x kubejs:solidified_neon',
            '10x kubejs:solidified_krypton',
            '10x kubejs:solidified_xenon')
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 12000))
        .duration(700)
        .EUt(2000)


    event.recipes.gtceu.basic_microverse('kubejs:t_three_one')
        .itemInputs('kubejs:microminer_t3', '4x kubejs:quantum_flux', 'gtceu:mv_super_chest')
        .itemOutputs(
            '64x gtceu:netherrack_scheelite_ore',
            '64x gtceu:netherrack_scheelite_ore',
            '64x gtceu:netherrack_scheelite_ore',
            '64x gtceu:netherrack_scheelite_ore',
            '64x gtceu:netherrack_tungstate_ore',
            '64x gtceu:netherrack_tungstate_ore',
            '64x gtceu:netherrack_tungstate_ore',
            '64x gtceu:netherrack_tungstate_ore',
            '64x gtceu:netherrack_ilmenite_ore',
            '64x gtceu:netherrack_vanadium_magnetite_ore',
            '64x gtceu:netherrack_tetrahedrite_ore',
            '64x gtceu:netherrack_cassiterite_ore',
            '64x gtceu:netherrack_tin_ore',
            '64x gtceu:netherrack_redstone_ore',
            '64x gtceu:netherrack_certus_quartz_ore',
            '64x gtceu:netherrack_almandine_ore',
            '64x gtceu:netherrack_lepidolite_ore',
            '64x gtceu:netherrack_cobaltite_ore',
            '16x gtceu:netherrack_laurite_ore',
            '8x gtceu:netherrack_cuprorhodsite_ore',
        )
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 20000))
        .duration(700)
        .EUt(2000)

    event.recipes.gtceu.basic_microverse('kubejs:t_three_second')
        .itemInputs('kubejs:microminer_t3', '4x kubejs:quantum_flux', 'kubejs:gem_sensor')
        .itemOutputs(
            '64x gtceu:diamond_perfect',
            '32x gtceu:diamond_perfect',
            '64x gtceu:ruby_perfect',
            '48x gtceu:topaz_perfect',
            '32x gtceu:emerald_perfect',
            '64x gtceu:netherrack_sapphire_ore',
            '64x gtceu:netherrack_gold_ore',
            '64x gtceu:netherrack_silver_ore'
        )
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 20000))
        .duration(700)
        .EUt(2000)

    event.recipes.gtceu.basic_microverse('t_three_third')
        .itemInputs(
            'kubejs:microminer_t3',
            '4x kubejs:quantum_flux',
            'gtceu:hv_super_chest'
        )
        .inputFluids(Fluid.of('gtceu:rocket_fuel', 24000))
        .itemOutputs(
            '64x gtceu:netherrack_salt_ore',
            '64x gtceu:netherrack_salt_ore',
            '64x gtceu:netherrack_salt_ore',
            '64x gtceu:netherrack_salt_ore',
            '64x gtceu:netherrack_barite_ore',
            '64x gtceu:netherrack_barite_ore',
            '64x gtceu:netherrack_apatite_ore',
            '64x gtceu:netherrack_apatite_ore',
            '64x gtceu:netherrack_neodymium_ore',
            '64x gtceu:netherrack_chromite_ore',
            '64x gtceu:netherrack_chromite_ore',
            '64x gtceu:netherrack_chromite_ore',
            '64x gtceu:netherrack_pyrope_ore',
            '64x gtceu:netherrack_pyrope_ore'
        )
        .duration(800)
        .EUt(2000)
})

// Advanced Microverse Projector Recipes
ServerEvents.recipes(event => {

    //Post-Tank
    event.recipes.gtceu.advanced_microverse('kubejs:t_three_third')
        .itemInputs('kubejs:microminer_t3', '16x kubejs:quantum_flux', '32x kubejs:wither_realm_data')
        .itemOutputs(
            '16x minecraft:ancient_debris',
            '64x kubejs:dense_nether_quartz_ore'
        )
        .duration(600)
        .EUt(7500)

        event.recipes.gtceu.advanced_microverse('kubejs:t_four_first')
        .itemInputs('kubejs:microminer_t4', '8x kubejs:quantum_flux', '4x kubejs:wither_realm_data', '64x kubejs:petrotheum_dust')
        .itemOutputs(
            '64x gtceu:raw_cooperite',
            '64x gtceu:raw_cooperite',
            '64x gtceu:raw_cooperite',
            '64x gtceu:raw_cooperite',
            '64x gtceu:raw_cooperite',
            '64x gtceu:raw_cooperite',
            '64x gtceu:platinum_group_sludge_dust',
            '64x gtceu:rock_salt_dust',
            '64x gtceu:rock_salt_dust'
        )
        .duration(800)
        .EUt(3750)

    event.recipes.gtceu.advanced_microverse('kubejs:t_four_second')
        .itemInputs('kubejs:microminer_t4', '8x kubejs:quantum_flux', 'kubejs:gem_sensor', '64x kubejs:petrotheum_dust')
        .itemOutputs(
            '64x kubejs:dense_lapis_ore',
            '64x kubejs:dense_diamond_ore',
            '64x kubejs:dense_diamond_ore',
            '64x kubejs:dense_coal_ore',
            '32x kubejs:dense_emerald_ore',
            '32x kubejs:dense_redstone_ore'
        )
        .duration(800)
        .EUt(3750)

    event.recipes.gtceu.advanced_microverse('kubejs:t_four_third')
        .itemInputs('kubejs:microminer_t4', '8x kubejs:quantum_flux', 'gtceu:advanced_power_thruster', '64x kubejs:petrotheum_dust')
        .itemOutputs(
            '64x kubejs:dense_oilsands_ore',
            '64x kubejs:dense_oilsands_ore',
            '32x kubejs:compressed_infinity_dust_block'
        )
        .duration(800)
        .EUt(3750)

    if (isNormalMode) {
        event.recipes.gtceu.advanced_microverse('kubejs:t_five_first')
            .itemInputs('kubejs:microminer_t5', '16x kubejs:quantum_flux', '32x kubejs:stabilized_plutonium')
            .itemOutputs(
                '64x gtceu:endstone_cooperite_ore',
                '64x gtceu:endstone_cooperite_ore',
                '64x gtceu:naquadah_ore',
                '64x gtceu:naquadah_ore',
                '64x gtceu:naquadah_ore',
                '48x gtceu:kaemanite_ore'
            )
            .duration(1000)
            .EUt(7500)
    } else  {
        event.recipes.gtceu.advanced_microverse('kubejs:t_five_first')
            .itemInputs('kubejs:microminer_t5', '16x kubejs:quantum_flux', '32x kubejs:stabilized_plutonium')
            .itemOutputs(
                '64x gtceu:pollucite_ore',
                '64x gtceu:pollucite_ore',
                '64x gtceu:snowchestite_ore',
                '64x gtceu:snowchestite_ore',
                '64x gtceu:snowchestite_ore',
                '64x gtceu:snowchestite_ore',
                '48x gtceu:kaemanite_ore'
            )
            .duration(1000)
            .EUt(7500)
    }

    event.recipes.gtceu.advanced_microverse('kubejs:t_five_second')
        .itemInputs('kubejs:microminer_t5', '16x kubejs:quantum_flux', '32x kubejs:stabilized_uranium')
        .itemOutputs(
            '64x gtceu:uraninite_ore',
            '64x gtceu:palladium_ore',
            '64x gtceu:realgar_ore',
            '64x gtceu:bastnasite_ore',
            '64x gtceu:sphalerite_ore',
            '64x gtceu:monazite_ore',
            '64x gtceu:ender_pearl_block',
            '16x gtceu:osmiridiumyes_ore',
            '64x gtceu:boron_dust',
            '64x gtceu:molybdenite_ore',
            '64x gtceu:beryllium_ore'
        )
        .duration(1000)
        .EUt(7500)

    event.recipes.gtceu.advanced_microverse('kubejs:t_six_first')
        .itemInputs('kubejs:microminer_t6', '16x kubejs:quantum_flux', '32x kubejs:stabilized_uranium', '16x kubejs:wither_realm_data')
        .itemOutputs(
            '64x gtceu:uraninite_ore',
            '64x gtceu:uraninite_ore',
            '64x gtceu:uraninite_ore',
            '64x gtceu:uraninite_ore',
            '64x gtceu:osmiridiumyes_ore',
            '64x gtceu:osmiridiumyes_ore',
            '64x gtceu:osmiridiumyes_ore',
            '64x gtceu:iridosmineyes_ore',
            '64x gtceu:iridosmineyes_ore'
        )
        .duration(1250)
        .EUt(18750)

    event.recipes.gtceu.advanced_microverse('kubejs:t_six_second')
        .itemInputs('kubejs:microminer_t6', '16x kubejs:quantum_flux', '32x kubejs:stabilized_plutonium', '64x kubejs:wither_realm_data')
        .itemOutputs('32x kubejs:stabilized_einsteinium')
        .duration(1250)
        .EUt(18750)

    event.recipes.gtceu.advanced_microverse('kubejs:t_six_third')
        .itemInputs('kubejs:microminer_t6', '16x kubejs:quantum_flux', '32x kubejs:stabilized_plutonium', '16x kubejs:dragon_lair_data')
        .itemOutputs('64x minecraft:dragon_egg',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x minecraft:dragon_breath'
        )
        .duration(1250)
        .EUt(18750)
})


// Advanced Microverse II Recipes
ServerEvents.recipes(event => {

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_two_fourth')
        .itemInputs(
            'kubejs:microminer_t2',
            'gtceu:advanced_power_thruster',
            'kubejs:gem_sensor',
            '64x kubejs:quantum_flux'
        )
        .itemOutputs('64x gtceu:endstone_dilithium_ore',
            '64x gtceu:endstone_dilithium_ore',
            '64x gtceu:endstone_dilithium_ore',
            '64x gtceu:endstone_dilithium_ore',
            '64x gtceu:endstone_certus_quartz_ore',
            '64x gtceu:endstone_nether_quartz_ore',
            '64x gtceu:endstone_monazite_ore',
        )
        .duration(600)
        .EUt(62500)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_five_third')
        .itemInputs('kubejs:microminer_t5',
            '4x gtceu:uhv_electric_pump',
            '16x kubejs:stabilized_americium',
            '16x kubejs:quantum_flux',
            '8x kubejs:shattered_star_data', )
        .itemOutputs('32x kubejs:stabilized_oganesson')
        .duration(900)
        .EUt(180000)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_seven_first')
        .itemInputs(
            'kubejs:microminer_t7',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            'kubejs:gem_sensor',
            '64x kubejs:deep_dark_data',
            '64x kubejs:deep_dark_data',
            '64x kubejs:deep_dark_data',
            '64x kubejs:deep_dark_data'
        )
        .itemOutputs('kubejs:lair_of_the_warden_data')
        .duration(1500)
        .EUt(31250)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_seven_second')
        .itemInputs(
            'kubejs:microminer_t7',
            '32x kubejs:quantum_flux',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '32x kubejs:deep_dark_data'
        )
        .itemOutputs(
            '32x kubejs:warden_heart',
            '64x minecraft:sculk_catalyst',
            '64x minecraft:sculk_catalyst',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x minecraft:gold_block',
            '64x minecraft:gold_block',
            '64x minecraft:gold_block',
            '64x gtceu:silver_block',
            '64x gtceu:silver_block',
            '64x minecraft:diamond_block',
            '64x minecraft:diamond_block',
            '64x gtceu:platinum_block',
            '16x gtceu:ruthenium_block'
        )
        .duration(1500)
        .EUt(31250)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_eight_first')
        .itemInputs(
            'kubejs:microminer_t8',
            '64x kubejs:quantum_flux',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            'kubejs:lair_of_the_warden_data'
        )
        .itemOutputs(
            '4x kubejs:hadal_shard',
            '64x minecraft:sculk_catalyst',
            '64x minecraft:sculk_catalyst',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn'
        )
        .duration(1500)
        .EUt(62500)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_eight_second')
        .itemInputs(
            'kubejs:microminer_t8',
            '64x kubejs:quantum_flux',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dragon_lair_data'
        )
        .itemOutputs(
            '64x minecraft:dragon_egg',
            '64x minecraft:dragon_egg',
            '64x minecraft:dragon_egg',
            '64x minecraft:dragon_egg',
            '64x minecraft:dragon_egg',
            '64x minecraft:dragon_egg',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x kubejs:ender_dragon_scale',
            '64x minecraft:dragon_breath',
            '64x minecraft:dragon_breath',
            '64x minecraft:dragon_breath',
            '64x minecraft:dragon_breath'
        )
        .duration(1750)
        .EUt(62500)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_eight_third')
        .itemInputs(
            'kubejs:microminer_t8',
            '64x kubejs:quantum_flux',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:wither_realm_data',
            '64x kubejs:wither_realm_data'
        )
        .itemOutputs(
            '32x gtceu:quantum_star',
            '64x gtceu:quantum_eye',
            '16x gtceu:neutronium_ingot',
            'gtceu:gravi_star'
        )
        .duration(2000)
        .EUt(62500)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_nine_first')
        .itemInputs(
            'kubejs:microminer_t9',
            '4x gtceu:cryococcus_block',
            '64x kubejs:stellar_creation_data',
            '64x kubejs:stellar_creation_data',
            '64x kubejs:stellar_creation_data',
            '64x kubejs:stellar_creation_data'
        )
        .itemOutputs('kubejs:universe_creation_data')
        .duration(3000)
        .EUt(250000)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_nine_second')
        .itemInputs(
            'kubejs:microminer_t9', 
            '8x gtceu:neutron_reflector', 
            '4x gtceu:cryococcus_block', 
            'kubejs:stellar_creation_data'
        )
        .itemOutputs(
            '64x gtceu:neutronium_ingot',
            '32x gtceu:neutronium_ingot'
        )
        .duration(3000)
        .EUt(250000)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_nine_third')
        .itemInputs(
            'kubejs:microminer_t9',
            '64x gtceu:gravi_star',
            '64x gtceu:gravi_star',
            '16x kubejs:shattered_star_data'
        )
        .itemOutputs('32x kubejs:quasi_stable_neutron_star')
        .duration(900)
        .EUt(194387)



    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_ten_first')
        .itemInputs(
            'kubejs:microminer_t10',
            '8x gtceu:cryococcus_block',
            'kubejs:universe_creation_data'
        )
        .itemOutputs('kubejs:heart_of_a_universe')
        .duration(6000)
        .EUt(1000000)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_ten_second')
        .itemInputs(
            'kubejs:microminer_t10',
            '16x #forge:storage_blocks/activated_netherite',
            '64x kubejs:stellar_creation_data'
        )
        .itemOutputs('kubejs:creative_storage_data')
        .duration(3000)
        .EUt(1000000)

    event.recipes.gtceu.advanced_microverse_ii('kubejs:t_ten_third')
        .itemInputs(
            'kubejs:microminer_t10',
            'kubejs:infinity_catalyst',
            '8x gtceu:network_switch',
            '8x gtceu:data_bank',
            '16x gtceu:advanced_data_access_hatch',
            '16x gtceu:computation_receiver_hatch',
            '64x kubejs:stellar_creation_data'
        )
        .itemOutputs('kubejs:creative_computation_data')
        .duration(3000)
        .EUt(1000000)

})

// Advanced Microverse III
ServerEvents.recipes(event => {
    event.recipes.gtceu.advanced_microverse_iii('kubejs:t_six_fourth')
        .itemInputs(
            'kubejs:microminer_t6',
            '16x kubejs:stabilized_californium',
            'kubejs:gem_sensor',
            '16x kubejs:quantum_flux',
        )
        .itemOutputs(
            '64x gtceu:diamond_perfect',
            '64x gtceu:diamond_perfect',
            '64x gtceu:diamond_perfect',
            '64x gtceu:diamond_perfect',
            '64x gtceu:diamond_perfect',
            '64x gtceu:ruby_perfect',
            '64x gtceu:ruby_perfect',
            '64x gtceu:ruby_perfect',
            '64x gtceu:ruby_perfect',
            '64x gtceu:cinnabar_perfect',
            '64x gtceu:cinnabar_perfect'
        )
        .duration(500)
        .EUt(62500)

    event.recipes.gtceu.advanced_microverse_iii('kubejs:t_eight_fourth')
        .itemInputs(
            'kubejs:microminer_t8',
            '64x kubejs:quantum_flux',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x kubejs:dilithium_crystal',
            '64x minecraft:sculk_catalyst',
            'kubejs:corrupted_universe_data',
            'kubejs:lair_of_the_warden_data')
        .itemOutputs(
            '64x kubejs:hadal_shard',
            '64x kubejs:warden_heart',
            '64x kubejs:warden_horn',
            '64x kubejs:warden_horn'
        )
        .duration(2000)
        .EUt(180000)

    event.recipes.gtceu.advanced_microverse_iii('kubejs:t_nine_forth')
        .itemInputs(
            'kubejs:microminer_t9',
            'kubejs:shattered_universe_data',
            '64x kubejs:shattered_star_data'
        )
        .itemOutputs('kubejs:corrupted_universe_data')
        .duration(1000)
        .EUt(194387)

    event.recipes.gtceu.advanced_microverse_iii('kubejs:t_ten_second')
        .itemInputs('kubejs:microminer_t10', '8x kubejs:infinity_catalyst', 'kubejs:corrupted_universe_data')
        .itemOutputs('16x kubejs:heart_of_a_universe')
        .duration(3000)
        .EUt(2000000)

    event.recipes.gtceu.advanced_microverse_iii('kubejs:t_ten_third')
        .itemInputs('kubejs:microminer_t10', '64x kubejs:singularity_containment_unit', 'kubejs:shattered_universe_data', ) // could be increased
        .itemOutputs('64x kubejs:contained_singularity')
        .duration(400)
        .EUt(2000000)

    event.recipes.gtceu.advanced_microverse_iii('kubejs:t_eleven_first')
        .itemInputs('kubejs:microminer_t11', 'kubejs:infinity_catalyst', 'kubejs:shattered_universe_data', )
        .itemOutputs('64x kubejs:alien_scrap', '64x kubejs:alien_scrap', '64x kubejs:alien_scrap', '64x kubejs:alien_scrap', '64x kubejs:alien_scrap', '64x kubejs:alien_scrap')
        .duration(600)
        .EUt(2000000)

    event.recipes.gtceu.advanced_microverse_iii('kubejs:t_four_fourth')
        .itemInputs('kubejs:microminer_t4', '64x kubejs:ultra_dense_hydrogen', '64x kubejs:ultra_dense_hydrogen', '64x kubejs:ultra_dense_hydrogen', '64x kubejs:ultra_dense_hydrogen', '1x gtceu:data_module', '1x gtceu:uhv_sensor')
        .itemOutputs('64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data')
        .duration(600)
        .EUt(180000)

    event.recipes.gtceu.advanced_microverse_iii('kubejs:t_eleven_second')
        .itemInputs('kubejs:microminer_t11','4x gtceu:max_battery', '2x solarflux:sp_custom_infinity', 'gtceu:uiv_4096a_laser_source_hatch','4x kubejs:universe_creation_data',  '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data', '64x kubejs:stellar_creation_data') // could be increased
        .itemOutputs('kubejs:creative_energy_data')
        .duration(1200)
        .EUt(8000000)

    event.recipes.gtceu.advanced_microverse_iii('kubejs:t_eleven_third')
        .itemInputs(
            'kubejs:microminer_t11',
            '64x gtceu:gravi_star',
            '64x gtceu:gravi_star',
            '64x gtceu:gravi_star',
            '64x gtceu:gravi_star',
            'kubejs:corrupted_universe_data')
        .itemOutputs(
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star',
            '64x kubejs:quasi_stable_neutron_star')
        .duration(600)
        .EUt(1000000)

    event.recipes.gtceu.advanced_microverse_iii('kubejs:t_twelve_first')
        .itemInputs('kubejs:microminer_t12', '64x gtceu:infinity_ingot', '4x kubejs:universe_creation_data')
        .itemOutputs('64x gtceu:monium_ingot')
        .duration(1200)
        .EUt(32000000)

    event.recipes.gtceu.advanced_microverse_iii('kubejs:t_twelve_second')
        .itemInputs('kubejs:microminer_t12', '8x kubejs:timeless_monic_heavy_plating', '4x kubejs:universe_creation_data', '2x kubejs:shattered_universe_data', '2x kubejs:corrupted_universe_data')
        .itemOutputs('4x kubejs:causality_exempt_monic_heavy_plating')
        .duration(800)
        .EUt(128000000)
})

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
        ['advanced_microverse_projector_ii', '#gtceu:circuits/iv']
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

    event.recipes.extendedcrafting.shaped_table(
        'gtceu:hyperbolic_microverse_projector', [
            'EPFPE',
            'PALAP',
            'FLRLF',
            'PALAP',
            'EPFPE'
        ], {
            E: 'gtceu:uv_field_generator',
            P: 'gtceu:double_microversium_plate',
            F: 'gtceu:uhv_emitter',
            L: 'kubejs:microverse_casing',
            A: '#gtceu:circuits/uev',
            R: 'gtceu:computer_monitor_cover'
        }
    ).id('kubejs:shaped/hyperbolic_microverse_projector')

})
