StartupEvents.registry('item', event => {
    if (!isExpertMode) {
        return;
    }
    
    // Microminers
    event.create('microminer_t4half').maxStackSize(16).texture("kubejs:item/microverse/microminer_t4half")
    event.create('microminer_t8half').maxStackSize(16).texture("kubejs:item/microverse/microminer_t8half")

    event.create('stabilized_microminer_t1').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t1")
    event.create('stabilized_microminer_t2').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t2")
    event.create('stabilized_microminer_t3').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t3")
    event.create('stabilized_microminer_t4').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t4")
    event.create('stabilized_microminer_t4half').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t4half")
    event.create('stabilized_microminer_t5').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t5")
    event.create('stabilized_microminer_t6').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t6")
    event.create('stabilized_microminer_t7').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t7")
    event.create('stabilized_microminer_t8').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t8")
    event.create('stabilized_microminer_t8half').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t8half")
    event.create('stabilized_microminer_t9').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t9")
    event.create('stabilized_microminer_t10').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t10")
    event.create('stabilized_microminer_t11').maxStackSize(16).parentModel("kubejs:item/microverse/stabilized_microminer_t11").texture("kubejs:item/microverse/stabilized_microminer_t11_base")
    event.create('stabilized_microminer_t12').maxStackSize(16).texture("kubejs:item/microverse/stabilized_microminer_t12")
    
})