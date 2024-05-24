// HM exclusive items

StartupEvents.registry('item', event => {
    if (!isExpertMode) {
        return;
    }
    event.create('magnetron')

    // Microverse Pristine Matter
    event.create('pristine_matter_t1')
    event.create('pristine_matter_t2')
    event.create('pristine_matter_t3')
    event.create('pristine_matter_t4')
    event.create('pristine_matter_t4half')
    event.create('pristine_matter_t5')
    event.create('pristine_matter_t6')
    event.create('pristine_matter_t7')
    event.create('pristine_matter_t8')
    event.create('pristine_matter_t8half')

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
    event.create('stabilized_microminer_t8half').maxStackSize(16).texture("kubejs:item/microverse/microminer_t8half").glow(true)

    event.create('microminer_trobbie').maxStackSize(16).texture("kubejs:item/microverse/microminer_trobbie").glow(false)
})