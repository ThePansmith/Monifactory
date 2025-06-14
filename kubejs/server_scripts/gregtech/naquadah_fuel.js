/**
 * Naquadah fuel processing line
 *
 * Notes for future maintainers:
 * The general idea for liquid fuel is that it resembles a simplified version of Petrochem from way back in HV.
 * However, unlike Hydrogen/Steam cracking which separates long hydrocarbons into shorter ones, (heavy -> light)
 * Neutronium cracking fuses elements into heavier ones, (light -> heavy) which is why a fusion reactor is more efficient.
 * Like fusion reactors, heavier isotope fractions are harder to fuse (gated later in progression)
 * but provide access to heavier elements normally acquired exclusively through Fusion.
 *
 * Solid waste leaves Naquadah Waste in the fuel rod even while it's in the reactor,
 * but liquid fuel purges it out beforehand through a more complex process.
 */
ServerEvents.recipes(event => {
    // Faster, cheaper helium plasma from quadium (a byproduct)
    event.recipes.gtceu.fusion_reactor("helium_plasma_quadium")
        .inputFluids("gtceu:hydrogen 125", "gtceu:quadium 125")
        .outputFluids("gtceu:helium_plasma 125")
        .duration(12)
        .EUt(GTValues.VA[GTValues.IV])
        .fusionStartEU(20000000)

    // Liquid Fuel recipes

    // Piranha Solution
    event.recipes.gtceu.mixer("piranha_solution")
        .inputFluids("gtceu:hydrogen_peroxide 1000", "gtceu:sulfuric_acid 3000")
        .outputFluids("gtceu:piranha_solution 4000")
        .duration(80)
        .EUt(GTValues.VA[GTValues.HV])

    event.recipes.gtceu.fluid_heater("hot_piranha_solution")
        .inputFluids("gtceu:piranha_solution 100")
        .outputFluids("gtceu:hot_piranha_solution 100")
        .duration(40)
        .EUt(GTValues.VA[GTValues.LV])

    // Tritium Radon Difluoride
    event.recipes.gtceu.large_chemical_reactor("tritium_radon_difluoride")
        .notConsumable("gtceu:blacklight")
        .inputFluids("gtceu:tritium 1000", "gtceu:radon 1000", "gtceu:fluorine 2000")
        .outputFluids("gtceu:tritium_radon_difluoride 1000")
        .duration(160)
        .EUt(GTValues.VA[GTValues.EV])

    // Naquadah Fuel Feedstock
    event.recipes.gtceu.electric_blast_furnace("raw_naquadah_solution")
        .itemInputs("10x gtceu:naquadah_dust")
        .inputFluids("gtceu:helium_hydride 500")
        .itemOutputsRanged("kubejs:naquadah_waste", 0, 3)
        .outputFluids("gtceu:raw_naquadah_solution 5000")
        .duration(400)
        .EUt(GTValues.VA[GTValues.IV])
        .blastFurnaceTemp(10800)

    let raw_fissile_elements = [
        ["thorium", 22],
        ["uranium", 18],
        ["uranium_235", 4],
        ["plutonium", 6],
        ["plutonium_241", 1],
    ]

    raw_fissile_elements.forEach(fissile_element => {
        event.recipes.gtceu.large_chemical_reactor(`inert_naquadah_blend_${fissile_element[0]}`)
            .itemInputs(`${fissile_element[1]}x gtceu:small_${fissile_element[0]}_dust`, "3x gtceu:naquadria_dust")
            .inputFluids("gtceu:raw_naquadah_solution 2000", "gtceu:hot_piranha_solution 1000")
            .outputFluids("gtceu:inert_naquadah_blend 6000")
            .duration(300)
            .EUt(GTValues.VA[GTValues.EV])
    })

    // Naquadah Activation
    event.recipes.gtceu.fusion_reactor("naquadah_activation")
        .inputFluids("gtceu:inert_naquadah_blend 375", "gtceu:tritium_radon_difluoride 125")
        .outputFluids("gtceu:active_naquadah_blend 375")
        .duration(32)
        .EUt(GTValues.VA[GTValues.LuV])
        .fusionStartEU(210000000)

    // Naquadah Distillation
    event.recipes.gtceu.distillation_tower("naquadah_isotope_distillation")
        .inputFluids("gtceu:active_naquadah_blend 800")
        .chancedOutput("kubejs:naquadah_waste", 2000, 0)
        .outputFluids("gtceu:naquadah_isotope_sludge 100", "gtceu:heavy_naquadah_isotope_fraction 200", "gtceu:medium_naquadah_isotope_fraction 400", "gtceu:light_naquadah_isotope_fraction 300")
        .duration(200)
        .EUt(GTValues.VHA[GTValues.ZPM])

    // Refinery Recipes
    event.recipes.gtceu.naquadah_refinery("crude_naquadah_fuel_mixture")
        .itemInputs("1x kubejs:naquadah_fuel_mixture_dust")
        .inputFluids("gtceu:medium_naquadah_isotope_fraction 800", "gtceu:heavy_naquadah_isotope_fraction 400")
        .outputFluids("gtceu:crude_naquadah_fuel 2000")
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.naquadah_refinery("crude_naquadah_fuel_jean")
        .inputFluids("gtceu:medium_naquadah_isotope_fraction 700", "gtceu:heavy_naquadah_isotope_fraction 500", "gtceu:jean_gasoline 1200")
        .outputFluids("gtceu:crude_naquadah_fuel 2000")
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.naquadah_refinery("crude_naquadah_fuel_fission")
        .inputFluids("gtceu:medium_naquadah_isotope_fraction 1000", "gtceu:heavy_naquadah_isotope_fraction 200", "gtceu:plutonium 500", "gtceu:uranium 1000", "gtceu:neptunium 800")
        .outputFluids("gtceu:crude_naquadah_fuel 2000")
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.naquadah_refinery("crude_naquadah_fuel_plasma")
        .inputFluids("gtceu:medium_naquadah_isotope_fraction 700", "gtceu:heavy_naquadah_isotope_fraction 500", "gtceu:helium_plasma 1200")
        .outputFluids("gtceu:crude_naquadah_fuel 2000")
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.naquadah_refinery("naquadah_fuel")
        .itemInputs("32x gtceu:enriched_naquadah_dust")
        .inputFluids("gtceu:light_naquadah_isotope_fraction 2000", "gtceu:medium_naquadah_isotope_fraction 4000", "gtceu:heavy_naquadah_isotope_fraction 2000", "gtceu:exotic_particle_solution 300")
        .outputFluids("gtceu:naquadah_fuel 12000")
        .duration(1600)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.naquadah_refinery("naquadah_fuel_from_crude")
        .itemInputs("24x gtceu:enriched_naquadah_dust")
        .inputFluids("gtceu:light_naquadah_isotope_fraction 3000", "gtceu:crude_naquadah_fuel 10000", "gtceu:exotic_particle_solution 400")
        .outputFluids("gtceu:naquadah_fuel 12000")
        .duration(1200)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.naquadah_refinery("naquadah_superfuel")
        .itemInputs("1x gtceu:infinity_dust", "20x kubejs:naquadah_fuel_mixture_dust", "14x gtceu:naquadria_dust")
        .inputFluids("gtceu:hyperdegenerate_matter 200", "gtceu:naquadah_fuel 11000", (doStoneline ? "gtceu:taranium 576" : "gtceu:actinium 576"), "gtceu:quadium 400")
        .outputFluids("gtceu:naquadah_superfuel 20000")
        .duration(2000)
        .EUt(GTValues.VA[GTValues.UHV])

    // Cracker Recipes
    // Put tha "Naquadah" in "Naquadah Fuel" except when you use neutronium lmao
    let isotopes = [
        ["light", "light_naquadah_isotope_fraction"],
        ["medium", "medium_naquadah_isotope_fraction"],
        ["heavy", "heavy_naquadah_isotope_fraction"],
        ["sludge", "naquadah_isotope_sludge"],
    ]

    let cracking_mats = [
        ["naquadah", 96],
        ["naquadria", 48],
        ["enriched_naquadah", 32],
        ["neutronium", 16],
    ]

    isotopes.forEach(isotope => {
        cracking_mats.forEach((cracking_mat, mat_tier) => {
            event.recipes.gtceu.cracker(`${isotope[0]}_isotope_cracking_cracker_${cracking_mat[0]}`)
                .inputFluids(`gtceu:${isotope[1]} 1000`, `gtceu:${cracking_mat[0]} ${cracking_mat[1] * 9}`)
                .outputFluids(`gtceu:cracked_${isotope[1]} 500`)
                .duration(120)
                .EUt(GTValues.VA[GTValues.EV + Math.floor(mat_tier / 2)])

            event.recipes.gtceu.fusion_reactor(`${isotope[0]}_isotope_cracking_fusion_${cracking_mat[0]}`)
                .inputFluids(`gtceu:${isotope[1]} 125`, `gtceu:${cracking_mat[0]} ${cracking_mat[1]}`)
                .outputFluids(`gtceu:cracked_${isotope[1]} 125`)
                .duration(32)
                .EUt(GTValues.VA[GTValues.IV + Math.floor(mat_tier / 2)])
                .fusionStartEU(120000000 * (Math.floor(mat_tier / 2) + 1))
        })
    })

    // Fraction Distillation
    event.recipes.gtceu.distillation_tower("light_isotope_distillation")
        .inputFluids("gtceu:cracked_light_naquadah_isotope_fraction")
        .chancedOutput("gtceu:lead_dust", 1000, 0)
        .outputFluids("gtceu:medium_naquadah_isotope_fraction 300", "gtceu:radon 250", "gtceu:quadium 200", "gtceu:helium_3 150", "gtceu:tritium 150")
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.distillation_tower("medium_isotope_distillation")
        .inputFluids("gtceu:cracked_medium_naquadah_isotope_fraction")
        .chancedOutput("gtceu:cerium_dust", 2500, 0)
        .outputFluids("gtceu:heavy_naquadah_isotope_fraction 250", "gtceu:americium 200", "gtceu:europium 300", "gtceu:lutetium 150", "gtceu:light_naquadah_isotope_fraction 150")
        .duration(200)
        .EUt(GTValues.VA[GTValues.UV])

    event.recipes.gtceu.distillation_tower("heavy_isotope_distillation")
        .inputFluids("gtceu:cracked_heavy_naquadah_isotope_fraction")
        .chancedOutput("gtceu:trinium_dust", 3000, 0)
        .outputFluids("gtceu:naquadah_isotope_sludge 200", "gtceu:heavy_atomic_residue 300", "gtceu:tritanium 200", "gtceu:darmstadtium 200", "gtceu:medium_naquadah_isotope_fraction 100")
        .duration(200)
        .EUt(GTValues.VA[GTValues.UHV])

    event.recipes.gtceu.distillation_tower("sludge_distillation")
        .inputFluids("gtceu:cracked_naquadah_isotope_sludge")
        .chancedOutput("kubejs:naquadah_waste", 5000, 0)
        .outputFluids("gtceu:superheavy_atomic_residue 450", "gtceu:neutronium 250", "gtceu:einsteinium 150", "gtceu:heavy_naquadah_isotope_fraction 150")
        .duration(200)
        .EUt(GTValues.VA[GTValues.UEV])

    // Superheavy Chemical Processing
    event.recipes.gtceu.large_chemical_reactor("heavy_residue_purification")
        .notConsumable("kubejs:magnetron")
        .inputFluids("gtceu:heavy_atomic_residue 200")
        .itemInputs("8x gtceu:activated_carbon_dust")
        .inputFluids("gtceu:distilled_water 4000", "gtceu:omnic_acid 4000")
        .outputFluids("gtceu:purified_heavy_residue 200")
        .chancedOutput("kubejs:naquadah_waste", 6600, 0)
        .duration(400)
        .EUt(GTValues.VA[GTValues.LuV])

    event.recipes.gtceu.large_chemical_reactor("superheavy_residue_purification")
        .notConsumable("kubejs:magnetron")
        .inputFluids("gtceu:superheavy_atomic_residue 200")
        .inputFluids("gtceu:distilled_water 4000", "gtceu:omnic_acid 4000")
        .outputFluids("gtceu:purified_superheavy_residue 200")
        .chancedOutput("kubejs:naquadah_waste", 9000, 0)
        .duration(400)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.fusion_reactor("exotic_particle_activation")
        .inputFluids("gtceu:purified_heavy_residue 50", "gtceu:einsteinium 150")
        .outputFluids("gtceu:exotic_particle_solution 50")
        .duration(128)
        .EUt(GTValues.VA[GTValues.UV])
        .fusionStartEU(200000000)

    event.recipes.gtceu.fusion_reactor("hyperdegenerate_activation")
        .inputFluids("gtceu:purified_superheavy_residue 50", "gtceu:americium_plasma 144")
        .outputFluids("gtceu:hyperdegenerate_matter 25")
        .duration(128)
        .EUt(GTValues.VA[GTValues.UHV])
        .fusionStartEU(640000000)

    /*
    // Liquid Waste Processing
    event.recipes.gtceu.centrifuge("crude_waste_processing")
        .inputFluids("gtceu:crude_naquadah_fuel_depleted 12000")
        .outputFluids("gtceu:neptunium 200",)
        .itemOutputs("4x gtceu:lead_dust", "gtceu:sunnarium_dust",)
        .chancedOutput("3x gtceu:thorium_dust", 5000, 0)
        .chancedOutput("3x kubejs:naquadah_waste", 6600, 0)
        .chancedFluidOutput("gtceu:americium 100", 3300, 0)
        .duration(1200)
        .EUt(122800)

    event.recipes.gtceu.centrifuge("liquid_waste_processing")
        .inputFluids("gtceu:naquadah_fuel_depleted 12000")
        .outputFluids("gtceu:einsteinium 200")
        .itemOutputs("6x gtceu:lead_dust", "gtceu:actinium_dust")
        .chancedOutput("4x gtceu:enriched_naquadah_dust", 5000, 0)
        .chancedOutput("3x kubejs:naquadah_waste", 6600, 0)
        .chancedFluidOutput("gtceu:exotic_particle_solution 100", 3300, 0)
        .duration(1200)
        .EUt(491520)

    event.recipes.gtceu.centrifuge("superfuel_waste_processing")
        .inputFluids("gtceu:naquadah_superfuel_depleted 12000")
        .itemOutputs("6x gtceu:lead_dust", "8x gtceu:neutronium_dust")
        .chancedOutput("1x gtceu:infinity_dust", 3300, 0)
        .chancedOutput("3x kubejs:naquadah_waste", 6600, 0)
        .chancedOutput("16x gtceu:naquadria_dust", 5000, 0)
        .chancedFluidOutput((doStoneline ? "gtceu:taranium 228" : "gtceu:actinium 228"), 5000, 0)
        .chancedFluidOutput("gtceu:hyperdegenerate_matter 100", 3300, 0)
        .duration(1200)
        .EUt(1966080)
    */

    // Solid Fuel Recipes
    event.recipes.gtceu.assembler("fuel_rod")
        .itemInputs("gtceu:fluid_cell", "2x gtceu:rhodium_plated_palladium_ring", "2x gtceu:neutron_reflector", "2x gtceu:rhodium_plated_palladium_plate")
        .inputFluids("gtceu:lead 288")
        .itemOutputs("kubejs:empty_fuel_rod")
        .duration(200)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.mixer("naquadah_fuel_mixture")
        .itemInputs("12x gtceu:enriched_naquadah_dust", "3x gtceu:naquadria_dust", "4x gtceu:cerium_dust", "1x gtceu:omnium_dust")
        .inputFluids("gtceu:helium_3 750", "gtceu:radon 500")
        .itemOutputs("21x kubejs:naquadah_fuel_mixture_dust")
        .duration(800)
        .EUt(GTValues.VA[GTValues.ZPM])

    event.recipes.gtceu.forming_press("pellet_pressing")
        .notConsumable("gtceu:pill_casting_mold")
        .itemInputs("kubejs:naquadah_fuel_mixture_dust")
        .itemOutputs("4x kubejs:unsintered_naquadah_fuel_pellet")
        .duration(100)
        .EUt(GTValues.VA[GTValues.LuV])

    event.smelting("kubejs:naquadah_fuel_pellet", "kubejs:unsintered_naquadah_fuel_pellet")

    event.recipes.gtceu.canner("naquadah_fuel_rod")
        .itemInputs("kubejs:empty_fuel_rod", "16x kubejs:naquadah_fuel_pellet")
        .itemOutputs("kubejs:naquadah_fuel_rod")
        .duration(400)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.vacuum_freezer("fuel_rod_cooling")
        .itemInputs("kubejs:hot_naquadah_fuel_rod")
        .itemOutputs("kubejs:naquadah_fuel_rod")
        .inputFluids("gtceu:liquid_helium 250")
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.vacuum_freezer("depleted_fuel_rod_cooling")
        .itemInputs("kubejs:hot_depleted_naquadah_fuel_rod")
        .itemOutputs("kubejs:depleted_naquadah_fuel_rod")
        .inputFluids("gtceu:liquid_helium 250")
        .duration(100)
        .EUt(GTValues.VA[GTValues.EV])

    event.recipes.gtceu.canner("depleted_naquadah_fuel_rod")
        .itemInputs("kubejs:depleted_naquadah_fuel_rod")
        .itemOutputs("kubejs:empty_fuel_rod", "16x kubejs:depleted_naquadah_fuel_pellet")
        .duration(200)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.macerator("depleted_fuel_maceration")
        .itemInputs("4x kubejs:depleted_naquadah_fuel_pellet")
        .itemOutputs("kubejs:depleted_naquadah_fuel_dust")
        .duration(80)
        .EUt(GTValues.VA[GTValues.MV])

    event.recipes.gtceu.sifter("depleted_fuel_sifting")
        .itemInputs("kubejs:depleted_naquadah_fuel_dust")
        .itemOutputsRanged("kubejs:naquadah_waste", 1, 4)
        .duration(80)
        .EUt(GTValues.VA[GTValues.HV])

    // Solid Waste Processing
    event.recipes.gtceu.centrifuge("naquadah_waste_centrifuging")
        .itemInputs("8x kubejs:naquadah_waste")
        .inputFluids("gtceu:hydrofluoric_acid 1000")
        .itemOutputs("3x gtceu:plutonium_dust")
        .itemOutputs("2x gtceu:enriched_naquadah_dust")
        .itemOutputs("1x gtceu:naquadria_dust")
        .itemOutputs("2x gtceu:lead_dust")
        .chancedOutput("gtceu:trinium_dust", 5000, 0)
        .chancedOutput("gtceu:duranium_dust", 3300, 0)
        .duration(200)
        .EUt(GTValues.VA[GTValues.LuV])
})
