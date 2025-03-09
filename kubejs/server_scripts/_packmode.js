/** Server-side pack mode management. */
// The !! is to cast the types into boolean since they got transformed into Java Objects from being globals
const doAssemblyLineOrderingWarning = !!global.doAssemblyLineOrderingWarning;
const doBoilers = !!global.doBoilers;
const doCompacting = !!global.doCompacting;
const doConduits = !!global.doConduits;
const doConverters = !!global.doConverters;
const doCreativeTank = !!global.doCreativeTank;
const doHarderPrintedSilicon = !!global.doHarderPrintedSilicon;
const doHarderProcessing = !!global.doHarderProcessing;
const doHarderRecipes = !!global.doHarderRecipes;
const doHardGlassRecipesWarning = !!global.doHardGlassRecipesWarning;
const doHatchRevert = !!global.doHatchRevert;
const doHNN = !!global.doHNN;
const doLaserIO = !!global.doLaserIO;
const doMeowniPlush = !!global.doMeowniPlush;
const doMonicoins = !!global.doMonicoins;
const doSnad = !!global.doSnad;
const doStabMiners = !!global.doStabMiners;
const doSteamAge = !!global.doSteamAge;
const doStoneline = !!global.doStoneline;


PlayerEvents.loggedIn(event => {
    // devmode stuff so we can switch modes in runtime (not recommended)
    // let foundOldGameStage = false;
    // event.player.stages.all.filter(e => e.includes('mode_')).forEach(ev => {
    //     if (ev === `mode_${global.packmode}`) return;
    //     event.removeGameStage(ev) // remove old stages
    //     foundOldGameStage = true;
    // });
    // if (foundOldGameStage) {
    //     event.player.tell(Text.yellow('Pack mode swapped'))
    // }

    event.removeGameStage("mode_normal")
    event.removeGameStage("mode_hard")
    event.removeGameStage("mode_expert")

    event.addGameStage(`mode_${global.packmode.toLowerCase()}`);
})
