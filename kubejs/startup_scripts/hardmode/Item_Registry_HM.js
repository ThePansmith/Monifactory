// HM exclusive items

StartupEvents.registry('item', event => {
    if (!isHardMode) {
        return;
    }
    event.create('magnetron')
    event.create('omnic_data')

    // Microverse Pristine Matter
    const pristine_matter = [
        ['1', '#c0c0b0'],
        ['2', '#f5f5f1'],
        ['3', '#736055'],
        ['4', '#f17d3d'],
        ['4half', '#eef487'],
        ['5', '#fccc6a'],
        ['6', '#58a14e'],
        ['7', '#173639'],
        ['8', '#dcdbe4'],
        ['8half', '#4ebcef']
    ]

    for (const [tier, color] of pristine_matter) {
        event.create(`pristine_matter_t${tier}`)
            .textureJson({ layer0: 'kubejs:item/prediction' })
            .color(0, color)
            .glow(true);
    }
    // Microverse Pristine Matter


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
})