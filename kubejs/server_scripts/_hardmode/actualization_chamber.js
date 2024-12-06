ServerEvents.recipes(event => {
    if (isHardMode) {
        ////// Machine Recipe //////
        event.recipes.extendedcrafting.shaped_table(
            'gtceu:actualization_chamber', [
                'PPPPP',
                'PEBSP',
                'PCFCP',
                'PSBEP',
                'PPPPP'
            ], {
                P: 'gtceu:americium_plate',
                E: 'gtceu:uv_emitter',
                B: 'gtceu:fusion_coil',
                S: 'gtceu:uv_sensor',
                F: 'gtceu:uv_field_generator',
                C: '#gtceu:circuits/uv'
            }
        )
        ////// Actualization recipes /////
        event.recipes.gtceu.actualization_chamber('pristine_t1_one')
            .itemInputs('kubejs:pristine_matter_t1')
            .circuit(1)
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
                '64x gtceu:salt_ore'
            )
            .duration(780)
            .EUt(30720)
        
        event.recipes.gtceu.actualization_chamber('pristine_t1_two')
            .itemInputs('kubejs:pristine_matter_t1')
            .circuit(2)
            .itemOutputs(
                '64x gtceu:diamond_perfect', 
                '64x gtceu:apatite_ore', 
                '64x gtceu:tricalcium_phosphate_ore', 
                '64x gtceu:quartzite_ore'
            )
            .duration(780)
            .EUt(30720)
        
        event.recipes.gtceu.actualization_chamber('pristine_t1_three')
            .itemInputs('kubejs:pristine_matter_t1')
            .circuit(3)
            .itemOutputs('kubejs:stellar_creation_data')
            .duration(780)
            .EUt(30720)
        
        event.recipes.gtceu.actualization_chamber('pristine_t2_one')
            .itemInputs('kubejs:pristine_matter_t2')
            .circuit(1)
            .itemOutputs(
                '64x gtceu:endstone_bauxite_ore', 
                '64x gtceu:endstone_pyrochlore_ore', 
                '64x gtceu:endstone_pyrochlore_ore',
                '64x gtceu:endstone_tantalite_ore', // replace with dense copper? idk wait for response
                '64x gtceu:endstone_copper_ore', 
                '64x gtceu:endstone_copper_ore', 
                '64x gtceu:endstone_copper_ore',
                '64x gtceu:endstone_sphalerite_ore', 
                '64x gtceu:endstone_cassiterite_ore', 
                '64x gtceu:endstone_scheelite_ore', 
                '64x gtceu:endstone_scheelite_ore',
                '64x gtceu:endstone_tungstate_ore', 
                '64x kubejs:radium_salt'
            )
            .duration(780)
            .EUt(30720)
        
        event.recipes.gtceu.actualization_chamber('pristine_t2_two')
            .itemInputs('kubejs:pristine_matter_t2')
            .circuit(2)
            .itemOutputs('4x kubejs:stellar_creation_data')
            .duration(780)
            .EUt(30720)
        
        event.recipes.gtceu.actualization_chamber('pristine_t3_one')
            .itemInputs('kubejs:pristine_matter_t3')
            .circuit(1)
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
            .duration(780)
            .EUt(30720)
        
        event.recipes.gtceu.actualization_chamber('pristine_t3_two')
            .itemInputs('kubejs:pristine_matter_t3')
            .circuit(2)
            .itemOutputs(
                '64x gtceu:netherrack_scheelite_ore',
                '64x gtceu:netherrack_scheelite_ore',
                '64x gtceu:netherrack_scheelite_ore',
                '64x gtceu:netherrack_scheelite_ore', // need to add an extra stack to 
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
                '8x gtceu:netherrack_cuprorhodsite_ore'
            )
            .duration(780)
            .EUt(30720)
        
        event.recipes.gtceu.actualization_chamber('pristine_t3_three')
            .itemInputs('kubejs:pristine_matter_t3')
            .circuit(3)
            .itemOutputs(
                '64x kubejs:dense_magma_block',
                '64x kubejs:dense_magma_block'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t4_one')
            .itemInputs('kubejs:pristine_matter_t4')
            .circuit(1)
            .itemOutputs(
                '64x kubejs:dense_oilsands_ore',
                '64x kubejs:dense_oilsands_ore',
                'kubejs:compressed_infinity_dust_block'                
            )
            .duration(780)
            .EUt(30720)
        
        event.recipes.gtceu.actualization_chamber('pristine_t4_two')
            .itemInputs('kubejs:pristine_matter_t4')
            .circuit(2)
            .itemOutputs(
                '64x kubejs:dense_lapis_ore',
                '64x kubejs:dense_diamond_ore',
                '64x kubejs:dense_diamond_ore',
                '64x kubejs:dense_coal_ore',
                '32x kubejs:dense_emerald_ore',
                '16x kubejs:dense_redstone_ore'
            )
            .duration(780)
            .EUt(30720)
        
        event.recipes.gtceu.actualization_chamber('pristine_t4_three')
            .itemInputs('kubejs:pristine_matter_t4')
            .circuit(3)
            .itemOutputs(
                '64x gtceu:netherrack_pentlandite_ore',
                '64x gtceu:netherrack_pentlandite_ore',
                '64x gtceu:netherrack_chalcocite_ore',
                '64x gtceu:netherrack_chalcocite_ore',
                '64x gtceu:netherrack_chalcocite_ore',
                '64x gtceu:netherrack_cooperite_ore'
            )
            .duration(780)
            .EUt(30720)
        
        event.recipes.gtceu.actualization_chamber('pristine_t4half_one')
            .itemInputs('kubejs:pristine_matter_t4half')
            .circuit(1)
            .itemOutputs(
                '48x minecraft:skeleton_skull',
                '64x minecraft:bone',
                '64x minecraft:bone',
                '64x minecraft:bone',
                '48x minecraft:zombie_head',
                '64x minecraft:rotten_flesh',
                '64x minecraft:rotten_flesh',
                '64x minecraft:rotten_flesh',
                '48x minecraft:creeper_head',
                '64x minecraft:gunpowder',
                '64x minecraft:slime_block',
                '64x kubejs:guardian_scale'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t4half_two')
            .itemInputs('kubejs:pristine_matter_t4half')
            .circuit(2)
            .itemOutputs(
                '50x minecraft:blaze_rod',
                '50x minecraft:blaze_rod',
                '50x thermal:blizz_rod',
                '50x thermal:blizz_rod',
                '50x thermal:blitz_rod',
                '50x thermal:blitz_rod',
                '50x thermal:basalz_rod',
                '50x thermal:basalz_rod',
                '64x minecraft:ghast_tear',
                '48x minecraft:wither_skeleton_skull',
                '64x kubejs:wither_bone',
                '64x kubejs:wither_bone', // drops of evil aren't in the pack
                '64x minecraft:magma_cream',
                '64x minecraft:magma_cream'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t4half_three')
            .itemInputs('kubejs:pristine_matter_t4half')
            .circuit(3)
            .itemOutputs(
                '48x enderio:enderman_head',
                '64x gtceu:ender_pearl_block',
                '64x minecraft:shulker_shell',
                '64x minecraft:shulker_shell' // shulker pearls aren't in the pack
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t4half_four')
            .itemInputs('kubejs:pristine_matter_t4half')
            .circuit(4)
            .itemOutputs(
                '64x kubejs:dragon_lair_data',
                '64x kubejs:dragon_lair_data',
                '64x kubejs:dragon_lair_data',
                '64x kubejs:dragon_lair_data',
                '64x minecraft:dragon_breath',
                '64x minecraft:dragon_breath',
                'minecraft:dragon_head'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t4half_five')
            .itemInputs('kubejs:pristine_matter_t4half')
            .circuit(5)
            .itemOutputs(
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
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t4half_six')
            .itemInputs('kubejs:pristine_matter_t4half')
            .circuit(6)
            .itemOutputs(
                '64x kubejs:wither_realm_data',
                '64x kubejs:wither_realm_data',
                '48x gtceu:nether_star_block'
            )
            .duration(780)
            .EUt(30720)
        
        event.recipes.gtceu.actualization_chamber('pristine_t4half_seven')
            .itemInputs('kubejs:pristine_matter_t4half')
            .circuit(7)
            .itemOutputs(
                '64x kubejs:deep_dark_data',
                '64x kubejs:deep_dark_data',
                '32x kubejs:warden_horn'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t5_one')
            .itemInputs('kubejs:pristine_matter_t5')
            .circuit(1)
            .itemOutputs(
                '64x gtceu:uraninite_ore',
                '64x gtceu:palladium_ore',
                '64x gtceu:realgar_ore',
                '64x gtceu:bastnasite_ore',
                '64x gtceu:sphalerite_ore',
                '64x gtceu:monazite_ore',
                '64x gtceu:monazite_ore',
                '64x gtceu:ender_pearl_block',
                '6x gtceu:osmiridiumyes_ore',
                '6x gtceu:iridosmineyes_ore',
                '64x gtceu:boron_dust',
                '64x gtceu:molybdenite_ore',
                '64x gtceu:beryllium_ore',
                '64x gtceu:beryllium_ore',
                '64x gcyr:fluorite_ore'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t5_two')
            .itemInputs('kubejs:pristine_matter_t5')
            .circuit(2)
            .itemOutputs(
                '64x gtceu:pollucite_ore', // why is this replaced with cooperite? shouldn't be end either
                '64x gtceu:pollucite_ore',
                '64x gtceu:snowchestite_ore', // why is THIS replaced with naq? 
                '64x gtceu:snowchestite_ore',
                '64x gtceu:snowchestite_ore',
                '64x gtceu:snowchestite_ore',
                '24x gtceu:kaemanite_ore'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t6_one')
            .itemInputs('kubejs:pristine_matter_t6')
            .circuit(1)
            .itemOutputs(
                '64x gtceu:endstone_uraninite_ore',
                '64x gtceu:endstone_uraninite_ore',
                '64x gtceu:endstone_cooperite_ore',
                '64x gtceu:endstone_cooperite_ore',
                '64x gtceu:endstone_cooperite_ore',
                '64x gtceu:endstone_cooperite_ore',
                '24x gtceu:iridosmineyes_ore'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t6_two')
            .itemInputs('kubejs:pristine_matter_t6')
            .circuit(2)
            .itemOutputs(
                '32x kubejs:stabilized_einsteinium'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t6_three')
            .itemInputs('kubejs:pristine_matter_t6')
            .circuit(3)
            .itemOutputs(
                '32x minecraft:dragon_egg',
                '64x kubejs:ender_dragon_scale',
                '64x kubejs:ender_dragon_scale',
                '64x minecraft:dragon_breath'
            )
            .duration(780)
            .EUt(30720)
        
            event.recipes.gtceu.actualization_chamber('pristine_t6_five')
            .itemInputs('kubejs:pristine_matter_t6')
            .circuit(5)
            .itemOutputs(
                'minecraft:sculk_catalyst'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t7_one')
            .itemInputs('kubejs:pristine_matter_t7')
            .circuit(1)
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
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t7_two')
            .itemInputs('kubejs:pristine_matter_t7')
            .circuit(2)
            .itemOutputs(
                'kubejs:lair_of_the_warden_data'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t8_one')
            .itemInputs('kubejs:pristine_matter_t8')
            .circuit(1)
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
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t8_two')
            .itemInputs('kubejs:pristine_matter_t8')
            .circuit(2)
            .itemOutputs(
                '64x minecraft:dragon_egg', 
                '64x minecraft:dragon_egg', 
                '64x minecraft:dragon_egg', 
                '64x minecraft:dragon_egg', 
                '64x minecraft:dragon_egg', 
                '64x minecraft:dragon_egg', 
                '64x kubejs:ender_dragon_scale'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t8_three')
            .itemInputs('kubejs:pristine_matter_t8')
            .circuit(3)
            .itemOutputs(
                '32x gtceu:quantum_star', 
                '64x gtceu:quantum_eye', 
                '16x gtceu:neutronium_ingot', 
                'gtceu:gravi_star'
            )
            .duration(780)
            .EUt(30720)

        event.recipes.gtceu.actualization_chamber('pristine_t8half_one')
            .itemInputs(
                'kubejs:pristine_matter_t8half'
            )
            .itemOutputs(
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore',
                '64x gtceu:endstone_darmstadtite_ore'
            )
            .duration(780)
            .EUt(30720)

    event.recipes.gtceu.advanced_microverse_iii('pristine_t8half_two')
            .itemInputs(
                'kubejs:pristine_matter_t8half'
            )
            .itemOutputs(
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore',
                '64x gtceu:endstone_dulysite_ore'
            )
            .duration(780)
            .EUt(30720)
    }
})