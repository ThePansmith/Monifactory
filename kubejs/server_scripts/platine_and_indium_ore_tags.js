/**
Platline and Indium related ore tags for easier tag bus filtering.
 */

ServerEvents.tags("item", (event) => {
    event.add("gtceu:purified_platline_ores", ["gtceu:purified_chalcopyrite_ore", "gtceu:purified_cooperite_ore", "gtceu:purified_pentlandite_ore", "gtceu:purified_bornite_ore", "gtceu:purified_chalcocite_ore", "gtceu:purified_tetrahedrite_ore"]);
    event.add("gtceu:purified_indium_ores", ["gtceu:purified_sphalerite_ore", "gtceu:purified_galena_ore"]);
});
