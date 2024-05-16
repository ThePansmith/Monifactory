StartupEvents.registry('item', event => {
    if (!isExpertMode) {
        return;
    }
    
    // Microminers
    event.create('microminer_t4half').maxStackSize(16).texture("kubejs:item/microverse/microminer_t4half")
    event.create('microminer_t8half').maxStackSize(16).texture("kubejs:item/microverse/microminer_t8half")

    event.create('stabilized_microminer_t1').maxStackSize(16).texture("kubejs:item/microverse/microminer_t1").glow(true) // temporarily make stabilized miners just glow until new textures are made
    event.create('stabilized_microminer_t2').maxStackSize(16).texture("kubejs:item/microverse/microminer_t2").glow(true)
    event.create('stabilized_microminer_t3').maxStackSize(16).texture("kubejs:item/microverse/microminer_t3").glow(true)
    event.create('stabilized_microminer_t4').maxStackSize(16).texture("kubejs:item/microverse/microminer_t4").glow(true)
    event.create('stabilized_microminer_t4half').maxStackSize(16).texture("kubejs:item/microverse/microminer_t4half").glow(true)
    event.create('stabilized_microminer_t5').maxStackSize(16).texture("kubejs:item/microverse/microminer_t5").glow(true)
    event.create('stabilized_microminer_t6').maxStackSize(16).texture("kubejs:item/microverse/microminer_t6").glow(true)
    event.create('stabilized_microminer_t7').maxStackSize(16).texture("kubejs:item/microverse/microminer_t7").glow(true)
    event.create('stabilized_microminer_t8').maxStackSize(16).texture("kubejs:item/microverse/microminer_t8").glow(true)

    event.create('microminer_trobbie').maxStackSize(16).texture("kubejs:item/microverse/microminer_trobbie").glow(false)
})