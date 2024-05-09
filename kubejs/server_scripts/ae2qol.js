ServerEvents.recipes(event => {

    const colors = ['black', 'blue', 'brown', 'cyan', 'gray', 'green', 'light_blue', 'light_gray', 'lime','magenta', 'orange', 'pink', 'purple', 'red', 'white', 'yellow']

    function washToFluix(wash) {
        event.shaped(
            `8x ae2:fluix_${wash}_cable`,
            [
                'CCC',
                'CDC',
                'CCC'
            ], {
                C: `#ae2:${wash}_cable`,
                D: '#ae2:can_remove_color'
            }
        )
    }
    
    function coloredCoveredCable(color) {
        event.shapeless(
            `ae2:${color}_covered_cable`,
            [
              `ae2:${color}_glass_cable`,
              `minecraft:${color}_wool`
            ]
          )
    }

    function coveredDenseCable(color) {
        event.shaped(
            `ae2:${color}_covered_dense_cable`, 
            [
                'CC',
                'CC'
            ], {
                C: `ae2:${color}_covered_cable`
            }
        )
    }

    function smartDenseCable(color) {
        event.shaped(
            `ae2:${color}_smart_dense_cable`, 
            [
                'CC',
                'CC'
            ], {
                C: `ae2:${color}_smart_cable`
            }
        )
    }

    washToFluix('covered')
    washToFluix('covered_dense')
    washToFluix('smart_dense')
    washToFluix('glass')
    washToFluix('smart')

    colors.forEach(coloredCoveredCable)
    colors.forEach(coveredDenseCable)
    colors.forEach(smartDenseCable)
})