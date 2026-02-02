/**
 * Registration of Monicoin trades for ores
 */

ServerEvents.recipes(event => {
    if (doMonicoins) {
        // moniPENNY RECIPES
        event.shaped(Item.of("minecraft:clay_ball", 64), [
            "AAA",
            "  A",
            "   "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:pitchblende_ore", 32), [
            "A  ",
            "AAA",
            "  A"
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:saltpeter_ore", 32), [
            " A ",
            "AAA",
            "  A"
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:graphite_ore", 32), [
            "  A",
            "AAA",
            "  A"
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:powellite_ore", 32), [
            " A ",
            "AAA",
            "A  "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:oilsands_ore", 32), [
            "A  ",
            "AAA",
            " A "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:tricalcium_phosphate_ore", 32), [
            "   ",
            "AAA",
            " AA"
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:apatite_ore", 32), [
            "A  ",
            "  A",
            "AAA"
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:beryllium_ore", 32), [
            "AA ",
            "   ",
            "AAA"
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:salt_ore", 32), [
            " A ",
            "  A",
            "AAA"
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:rock_salt_ore", 32), [
            "   ",
            " AA",
            "AAA"
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:lazurite_ore", 32), [
            "AA ",
            "  A",
            "AA "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:vanadium_magnetite_ore", 32), [
            "AA ",
            " AA",
            "A  "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:calcite_ore", 32), [
            "AA ",
            "AAA",
            "   "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:sodalite_ore", 32), [
            "AAA",
            "   ",
            " AA"
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:lapis_ore", 32), [
            "AAA",
            "   ",
            "AA "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:coal_ore", 32), [
            "AAA",
            " AA",
            "   "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:cinnabar_ore", 32), [
            "AAA",
            "A  ",
            "  A"
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:redstone_ore", 32), [
            "AAA",
            "A  ",
            " A "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:talc_ore", 32), [
            "AAA",
            "A  ",
            "A  "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:pyrope_ore", 32), [
            "AAA",
            "A A",
            "   "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:soapstone_ore", 32), [
            "AAA",
            "AA ",
            "   "
        ], {
            A: "kubejs:moni_penny"
        }).noMirror().noShrink()

        // moniNICKEL RECIPES
        event.shaped(Item.of("gtceu:rubber_sapling", 32), [
            "A A",
            "A  ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:green_sapphire_ore", 32), [
            "AAA",
            "A A",
            " A "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:sapphire_ore", 32), [
            "AAA",
            "AA ",
            "  A"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:cobaltite_ore", 32), [
            "AAA",
            "AA ",
            " A "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:neodymium_ore", 32), [
            "AAA",
            "AA ",
            "A  "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:realgar_ore", 32), [
            "AAA",
            "AA ",
            "A A"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:electrotine_ore", 32), [
            "AAA",
            "AA ",
            "AAA"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:tantalite_ore", 32), [
            " A ",
            "AAA",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:sphalerite_ore", 32), [
            "AA ",
            "   ",
            " A "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:uraninite_ore", 32), [
            "AA ",
            "   ",
            "  A"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:silver_ore", 32), [
            "AA ",
            "  A",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:spessartine_ore", 32), [
            "AA ",
            "   ",
            "A  "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:lead_ore", 32), [
            "AA ",
            " A ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:molybdenite_ore", 32), [
            "AAA",
            "A  ",
            "A  "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:bastnasite_ore", 32), [
            "AAA",
            "A A",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:monazite_ore", 32), [
            "AAA",
            "AA ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:tetrahedrite_ore", 32), [
            "AAA",
            "  A",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:topaz_ore", 32), [
            "   ",
            "AAA",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:ruby_ore", 32), [
            "AAA",
            " A ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:stibnite_ore", 32), [
            "AAA",
            "A  ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:thorium_ore", 32), [
            "AA ",
            "A  ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:malachite_ore", 32), [
            "AAA",
            "   ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:pyrite_ore", 32), [
            "AAA",
            "AAA",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:galena_ore", 32), [
            "   ",
            "   ",
            "AA "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:almandine_ore", 32), [
            "A A",
            "   ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:garnierite_ore", 32), [
            "A  ",
            "A  ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:nickel_ore", 32), [
            "A  ",
            " A ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:barite_ore", 32), [
            "A  ",
            "  A",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:lepidolite_ore", 32), [
            " A ",
            "   ",
            " A "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:bentonite_ore", 32), [
            "A  ",
            "   ",
            " A "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:aluminium_ore", 32), [
            "A  ",
            "   ",
            "  A"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:bauxite_ore", 32), [
            " AA",
            "   ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:grossular_ore", 32), [
            " A ",
            "A  ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:pyrolusite_ore", 32), [
            " A ",
            " A ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:magnesite_ore", 32), [
            " A ",
            "  A",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:olivine_ore", 32), [
            " A ",
            "   ",
            "A  "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:tin_ore", 32), [
            "   ",
            " A ",
            " A "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:cassiterite_ore", 32), [
            " A ",
            "   ",
            "  A"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:lithium_ore", 32), [
            "  A",
            "A  ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:spodumene_ore", 32), [
            "  A",
            " A ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:chalcopyrite_ore", 32), [
            "  A",
            "  A",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:copper_ore", 32), [
            "  A",
            "   ",
            "A  "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:sulfur_ore", 32), [
            "  A",
            "   ",
            " A "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:quartzite_ore", 32), [
            "  A",
            "   ",
            "  A"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:nether_quartz_ore", 32), [
            "   ",
            "AA ",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:certus_quartz_ore", 32), [
            "   ",
            "A A",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:pentlandite_ore", 32), [
            "   ",
            "A  ",
            "A  "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:glauconite_sand_ore", 32), [
            "   ",
            "A  ",
            " A "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        /* event.shaped(

          Item.of('gtceu:brown_limonite_ore', 32),
          [
            'A  ',
            ' A ',
            '   '
          ],
          {
            A: 'kubejs:moni_nickel'
          }).noMirror().noShrink()*/

        event.shaped(Item.of("gtceu:yellow_limonite_ore", 32), [
            "   ",
            "A  ",
            "  A"
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:iron_ore", 32), [
            "   ",
            " AA",
            "   "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:magnetite_ore", 32), [
            "   ",
            " A ",
            "A  "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:gypsum_ore", 32), [
            "   ",
            "  A",
            "A  "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()

        // moniQUARTER RECIPES
        event.shaped(Item.of("gtceu:gold_ore", 32), [
            "A A",
            "   ",
            "   "
        ], {
            A: "kubejs:moni_quarter"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:emerald_ore", 32), [
            " A ",
            "   ",
            " A "
        ], {
            A: "kubejs:moni_quarter"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:palladium_ore", 32), [
            "A  ",
            "   ",
            " A "
        ], {
            A: "kubejs:moni_quarter"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:molybdenum_ore", 32), [
            " AA",
            "AA ",
            "A  "
        ], {
            A: "kubejs:moni_nickel"
        }).noMirror().noShrink()


        event.shaped(Item.of("gtceu:ilmenite_ore", 32), [
            "A  ",
            " A ",
            "   "
        ], {
            A: "kubejs:moni_quarter"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:platinum_ore", 32), [
            "A  ",
            "A  ",
            "   "
        ], {
            A: "kubejs:moni_quarter"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:cooperite_ore", 32), [
            "A  ",
            "AA ",
            "   "
        ], {
            A: "kubejs:moni_quarter"
        }).noMirror().noShrink()

        event.shaped(Item.of("gtceu:diamond_ore", 32), [
            "   ",
            "  A",
            "A  "
        ], {
            A: "kubejs:moni_quarter"
        }).noMirror().noShrink()
    }
})
