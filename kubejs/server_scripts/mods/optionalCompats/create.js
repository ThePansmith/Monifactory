if(Platform.isLoaded('create')){
    console.log("create found and scripts loaded")
    ServerEvents.recipes(event => {

        // Removes any machines related to processing, the point of this compat is fun not functionality, 
        event.remove({output: 'create:millstone'})
        event.remove({output: 'create:crushing_wheel'})
        event.remove({output: 'create:mechanical_plough'})
        event.remove({output: 'create:mechanical_crafter'})
        event.remove({output: 'create:mechanical_mixer'})
        event.remove({output: 'create:mechanical_saw'})
        event.remove({output: 'create:mechanical_drill'})
        event.remove({output: 'create:mechanical_harvester'})
        event.remove({output: 'create:mechanical_press'})
        event.remove({output: 'create:mechanical_roller'})

        /* Removes recipes for machines that were not removed, deployers and mechanical crafters are fun!
        Most recipe categories that are removed machines are hidden in 
        kubejs/assets/emi/recipe/filters/hidecategories.json as opposed to removing the actual recipes */
        event.remove({ type: 'create:deploying' })
        event.remove({ type: 'create:millstone' })
        event.remove({ type: 'create:crushing' })

        // Adds some create recipes to gt machines
        event.recipes.gtceu.mixer("create:andesite_alloy_iron")
            .itemInputs('#forge:nuggets/iron', 'minecraft:andesite')
            .itemOutputs('create:andesite_alloy')
            .duration(100)
            .EUt(16)
        event.recipes.gtceu.mixer("create:andesite_alloy_zinc")
            .itemInputs('#forge:nuggets/zinc', 'minecraft:andesite')
            .itemOutputs('create:andesite_alloy')
            .duration(100)
            .EUt(16)
        
        // Sequenced assembly but awesome
        event.recipes.gtceu.assembler("create:incomplete_precision_mechanism0")
            .itemInputs('#forge:plates/gold', 'create:cogwheel', 'create:large_cogwheel', '#forge:nuggets/iron')
            .itemOutputs(Item.of('create:incomplete_precision_mechanism', '{SequencedAssembly:{Progress:0.2f,Step:3,id:"create:sequenced_assembly/precision_mechanism"}}'))
            .duration(60)
            .EUt(16)
        
        let progNbt = 0.4
        let stepNbt = 6
        for(let i = 0; i < 3; i++){
            event.recipes.gtceu.assembler("create:incomplete_precision_mechanism" + (i + 1))
                .itemInputs(Item.of('create:incomplete_precision_mechanism', '{SequencedAssembly:{Progress:'+(progNbt+0.2)+'f,Step:'+(stepNbt-3)+',id:"create:sequenced_assembly/precision_mechanism"}}').strongNBT(), 'create:cogwheel', 'create:large_cogwheel', '#forge:nuggets/iron')
                .itemOutputs(Item.of('create:incomplete_precision_mechanism', '{SequencedAssembly:{Progress:'+progNbt+'f,Step:'+stepNbt+',id:"create:sequenced_assembly/precision_mechanism"}}'))
                .duration(60)
                .EUt(16)
            progNbt += 0.2
            stepNbt += 3
        }
        event.recipes.gtceu.assembler("create:precision_mechanism")
            .itemInputs(Item.of('create:incomplete_precision_mechanism', '{SequencedAssembly:{Progress:0.8f,Step:12,id:"create:sequenced_assembly/precision_mechanism"}}').strongNBT(), 'create:cogwheel', 'create:large_cogwheel', '#forge:nuggets/iron')
            .itemOutputs('create:precision_mechanism')
            .duration(60)
            .EUt(16)
        // That was actually not that awesome this hurts to look at

        // adding mechanical crafter stuff
        event.recipes.gtceu.assembler("create:extendo_grip")
            .itemInputs('create:precision_mechanism', 'create:brass_hand', '6x minecraft:stick', '#forge:ingots/brass')
            .itemOutputs('create:extendo_grip')
            .duration(600)
            .EUt(16)
        event.recipes.gtceu.assembler("create:potato_cannon")
            .itemInputs('create:precision_mechanism', 'create:andesite_alloy', '3x create:fluid_pipe', '2x #forge:ingots/copper')
            .itemOutputs('create:potato_cannon')
            .duration(600)
            .EUt(16)
        event.recipes.gtceu.assembler("create:wand_of_symmetry")
            .itemInputs('create:precision_mechanism', 'minecraft:obsidian', '3x minecraft:glass', '#forge:ingots/brass', 'minecraft:ender_pearl')
            .itemOutputs('create:wand_of_symmetry')
            .duration(600)
            .EUt(16)

        event.recipes.gtceu.mixer("create:rose_quartz")
            .itemInputs('8x minecraft:redstone', 'minecraft:quartz')
            .itemOutputs('create:rose_quartz')
            .duration(200)
            .EUt(16)
        event.recipes.gtceu.sifter("create:polished_rose_quartz")
            .itemInputs('create:rose_quartz')
            .itemOutputs('create:polished_rose_quartz')
            .duration(200)
            .EUt(16)
    })
}
else{console.log("create not found")}