ServerEvents.recipes(event => {
event.recipes.gtceu.chemical_reactor('chloronitrobenzene')
    .inputFluids('gtceu:chlorobenzene 1000', 'gtceu:nitric_acid 1000')
    .outputFluids('gtceu:nitrochlorobenzene 1000', 'minecraft:water 1000')
    .duration(400).EUt(480);

event.recipes.gtceu.chemical_reactor('dimethylformamide')
    .inputFluids('gtceu:carbon_monoxide 1000', 'gtceu:dimethylamine 1000')
    .outputFluids('gtceu:dimethylformamide 1000')
    .duration(200).EUt(480);

event.recipes.gtceu.chemical_reactor('pyrometillic_dianhydride')
    .inputFluids('gtceu:durene 250', 'gtceu:oxygen 1500')
    .outputFluids('gtceu:pyromellitic_dianhydride 250', 'minecraft:water 1500')
    .duration(400).EUt(480);

event.recipes.gtceu.chemical_reactor('potassium_hydroxide')
    .inputFluids('gtceu:durene 250', 'gtceu:oxygen 1500')
    .outputFluids('gtceu:pyromellitic_dianhydride 250', 'minecraft:water 1500')
    .duration(400).EUt(480);

event.recipes.gtceu.chemical_reactor('oxydianiline_sludge')
    .inputFluids('gtceu:aminophenol 1000', 'gtceu:nitrochlorobenzene 1000', 'gtceu:dimethylformamide 1000')
    .itemInputs('gtceu:potassium_carbonate_dust 1')
    .outputFluids('gtceu:oxydianiline_sludge 250', 'minecraft:water 1500')
    .duration(400).EUt(480);

event.recipes.gtceu.distillation('distill_oxydianiline_sludge')
    .inputFluids('gtceu:oxydianiline_sludge 1000')
    .outputFluids('gtceu:dimethylformamide 1000', 'gtceu:oxydianiline 144')
    .duration(200).EUt(480);

event.recipes.gtceu.chemical_reactor('kapton_k')
    .inputFluids('gtceu:pyromellitic_dianhydride 1000', 'gtceu:oxydianiline 1000')
    .outputFluids('gtceu:kapton_k 1000')
    .duration(400).EUt(480);

event.recipes.gtceu.chemical_reactor('cobalt_bromide')
    .itemInputs('gtceu:cobalt_dust 1')
    .inputFluids('gtceu:bromine 1000', 'gtceu:acetic_acid 1000')
    .outputFluids('gtceu:cobalt_bromide 1000')
    .duration(60).EUt(480);

event.recipes.gtceu.chemical_reactor('manganese_bromide')
    .itemInputs('gtceu:manganese_dust 1')
    .inputFluids('gtceu:bromine 1000', 'gtceu:acetic_acid 1000')
    .outputFluids('gtceu:manganese_bromide 1000')
    .duration(60).EUt(480);

event.recipes.gtceu.chemical_reactor('manganese_acetate')
    .itemInputs('gtceu:manganese_dust 1')
    .inputFluids('gtceu:acetic_acid 1000')
    .outputFluids('gtceu:manganese_acetate 1000')
    .duration(60).EUt(480);

event.recipes.gtceu.chemical_reactor('hydrobromic_acid')
    .notConsumable('gtceu:platinum_dust 1')
    .inputFluids('gtceu:hydrogen 1000', 'gtceu:bromine 1000', 'minecraft:water 1000')
    .outputFluids('gtceu:hydrobromic_acid 1000')
    .duration(60).EUt(480);

event.recipes.gtceu.chemical_reactor('co_mn_br_catalyst')
    .inputFluids('gtceu:cobalt_bromide 1000', 'gtceu:manganese_bromide 1000', 'gtceu:manganese_acetate 1000', 'gtceu:hydrobromic_acid 1000')
    .outputFluids('gtceu:co_mn_br_catalyst 4000')
    .duration(100).EUt(480);

event.recipes.gtceu.chemical_reactor('bis_trichloromethyl_benzene')
    .inputFluids('gtceu:paraxylene 1000', 'gtceu:chlorine 12000')
    .outputFluids('gtceu:bis_trichloromethyl_benzene 1000', 'gtceu:hydrochloric_acid 6000')
    .duration(60).EUt(480);

event.recipes.gtceu.chemical_reactor('therephthalic_acid')
    .inputFluids('gtceu:paraxylene 1000', 'gtceu:oxygen 2000', 'gtceu:co_mn_br_catalyst 1000')
    .outputFluids('gtceu:terephthalic_acid 1000', 'minecraft:water 1000')
    .duration(60).EUt(480);

event.recipes.gtceu.chemical_reactor('terephthaloyl_chloride')
    .inputFluids('gtceu:bis_trichloromethyl_benzene 1000', 'gtceu:terephthalic_acid 1000')
    .outputFluids('gtceu:terephthaloyl_chloride 2000', 'gtceu:hydrochloric_acid 2000')
    .duration(60).EUt(480);

event.recipes.gtceu.chemical_reactor('nitroaniline')
    .inputFluids('gtceu:nitrochlorobenzene 1000', 'gtceu:ammonia 2000')
    .outputFluids('gtceu:nitroaniline 1000')
    .itemOutputs('gtceu:ammonium_chloride_dust 1')
    .duration(60).EUt(480);

event.recipes.gtceu.chemical_reactor('para_phenylenediamine')
    .inputFluids('gtceu:nitroaniline 1000', 'gtceu:hydrogen 6000')
    .outputFluids('gtceu:para_phenylenediamine 1000', 'minecraft:water 3000')
    .duration(60).EUt(480);

event.recipes.gtceu.chemical_reactor('para_aramid')
    .inputFluids('gtceu:para_phenylenediamine 1000', 'gtceu:terephthaloyl_chloride 1000')
    .outputFluids('gtceu:para_aramid 1000', 'gtceu:hydrochloric_acid 2000')
    .duration(200).EUt(480);
})