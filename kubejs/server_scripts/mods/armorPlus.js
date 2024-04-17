ServerEvents.recipes(event => {

    event.remove({ id: 'armorplus:crafting/shaped/redstone/redstone_helmet' });
    event.remove({ id: 'armorplus:crafting/shaped/redstone/redstone_helmet_alt' });
    event.remove({ id: 'armorplus:crafting/shaped/redstone/redstone_chestplate' });
    event.remove({ id: 'armorplus:crafting/shaped/redstone/redstone_leggings' });
    event.remove({ id: 'armorplus:crafting/shaped/redstone/redstone_boots' });
    event.remove({ id: 'armorplus:crafting/shaped/redstone/redstone_boots_alt' });

    event.remove({ id: 'armorplus:crafting/shaped/lapis/lapis_helmet' });
    event.remove({ id: 'armorplus:crafting/shaped/lapis/lapis_helmet_alt' });
    event.remove({ id: 'armorplus:crafting/shaped/lapis/lapis_chestplate' });
    event.remove({ id: 'armorplus:crafting/shaped/lapis/lapis_leggings' });
    event.remove({ id: 'armorplus:crafting/shaped/lapis/lapis_boots' });
    event.remove({ id: 'armorplus:crafting/shaped/lapis/lapis_boots_alt' });

    const materials = [
        "redstone",
        'lapis',
        'manyullyn',
        'cobalt',
        'ardite'
    ];

    materials.forEach(material => {
        event.shaped('armorplus:' + material + "_helmet", [
			'   ',
			'AAA',
			'A A'
		], { A: 'gtceu:' + material + "_plate" })
		.id("kubejs:armorplus/"+material+"_helmet");

        event.shaped('armorplus:' + material + "_chestplate",[
			'A A',
			'AAA',
			'AAA'
		], { A: 'gtceu:' + material + "_plate" })
		.id("kubejs:armorplus/"+material+"_chestplate");

        event.shaped('armorplus:' + material + "_leggings", [
			'AAA',
			'A A',
			'A A'
		], { A: 'gtceu:' + material + "_plate" })
		.id("kubejs:armorplus/"+material+"_leggings");

        event.shaped('armorplus:' + material + "_boots", [
			'   ',
			'A A',
			'A A'
		], { A: 'gtceu:' + material + "_plate" })
		.id("kubejs:armorplus/"+material+"_boots");
    });

    event.shaped('armorplus:knight_slime_helmet', [
		'AAA',
        'ABA',
        '   '
	], {
        A: "gtceu:titanium_carbide_plate",
        B: "minecraft:slime_block"
    }).id("kubejs:armorplus/knight_slime_helmet");

    event.shaped('armorplus:knight_slime_chestplate', [
		'ABA',
        'AAA',
        'AAA'
	], {
        A: "gtceu:titanium_carbide_plate",
        B: "minecraft:slime_block"
    }).id("kubejs:armorplus/knight_slime_chestplate");

    event.shaped('armorplus:knight_slime_leggings',[
		'AAA',
        'ABA',
        'A A'
	], {
        A: "gtceu:titanium_carbide_plate",
		B: "minecraft:slime_block"
    }).id("kubejs:armorplus/knight_slime_leggings");

    event.shaped('armorplus:knight_slime_boots',[
		'ABA',
        'A A',
        '   '
	], {
        A: "gtceu:titanium_carbide_plate",
        B: "minecraft:slime_block"
    }).id("kubejs:armorplus/knight_slime_boots");

    // Fix buggy recipes
    event.remove( { id: 'armorplus:crafting/shapeless/storage/infused_frost_crystal_to_item' } )
    event.remove( { id: 'armorplus:crafting/shapeless/storage/block_infused_frost_crystal_to_item' } )

    // Lava Crystal
    event.recipes.gtceu.chemical_reactor("kubejs:armorplus/infused_lava_crystal")
        .itemInputs('minecraft:quartz')
        .inputFluids('minecraft:lava 1000')
        .itemOutputs('armorplus:infused_lava_crystal')
        .duration(100)
        .EUt(15)

    // Ultimate Material
    event.recipes.gtceu.assembly_line("kubejs:armorplus/the_ultimate_material")
        .itemInputs('draconicevolution:dragon_heart', '4x armorplus:guardian_scale', '8x armorplus:wither_bone', '12x armorplus:ender_dragon_scale')
        .itemOutputs('armorplus:the_ultimate_material')
        .duration(600)
        .EUt(491520)
});
