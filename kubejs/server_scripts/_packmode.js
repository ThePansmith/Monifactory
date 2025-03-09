/**
 * Server-side pack mode management.
 * This file adds a set of constant booleans for convenience in determining if a feature is enabled
 * and enables gamestages to toggle feature-specific FTBQuests quests if the respective content is also enabled.
 */

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

// Add gamestages for quest dependencies to trigger
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

    if (doBoilers) {
        event.removeGameStage("dontBoilers")
        event.addGameStage("doBoilers")
    } else {
        event.removeGameStage("doBoilers")
        event.addGameStage("dontBoilers")
    }
    if (doCompacting) {
        event.removeGameStage("dontCompacting")
        event.addGameStage("doCompacting")
    } else {
        event.removeGameStage("doCompacting")
        event.addGameStage("dontCompacting")
    }
    if (doConverters) {
        event.removeGameStage("dontConverters")
        event.addGameStage("doConverters")
    } else {
        event.removeGameStage("doConverters")
        event.addGameStage("dontConverters")
    }
    if (doCreativeTank) {
        event.removeGameStage("dontCreativeTank")
        event.addGameStage("doCreativeTank")
    } else {
        event.removeGameStage("doCreativeTank")
        event.addGameStage("dontCreativeTank")
    }
    if (doHarderProcessing) {
        event.removeGameStage("dontHarderProcessing")
        event.addGameStage("doHarderProcessing")
    } else {
        event.removeGameStage("doHarderProcessing")
        event.addGameStage("dontHarderProcessing")
    }
    if (doHarderRecipes) {
        event.removeGameStage("dontHarderRecipes")
        event.addGameStage("doHarderRecipes")
    } else {
        event.removeGameStage("doHarderRecipes")
        event.addGameStage("dontHarderRecipes")
    }
    if (doHardGlassRecipesWarning) {
        event.removeGameStage("dontHardGlassRecipesWarning")
        event.addGameStage("doHardGlassRecipesWarning")
    } else {
        event.removeGameStage("doHardGlassRecipesWarning")
        event.addGameStage("dontHardGlassRecipesWarning")
    }
    if (doHNN) {
        event.removeGameStage("dontHNN")
        event.addGameStage("doHNN")
    } else {
        event.removeGameStage("doHNN")
        event.addGameStage("dontHNN")
    }
    if (doLaserIO) {
        event.removeGameStage("dontLaserIO")
        event.addGameStage("doLaserIO")
    } else {
        event.removeGameStage("doLaserIO")
        event.addGameStage("dontLaserIO")
    }
    if (doMonicoins) {
        event.removeGameStage("dontMonicoins")
        event.addGameStage("doMonicoins")
    } else {
        event.removeGameStage("doMonicoins")
        event.addGameStage("dontMonicoins")
    }
    if (doSnad) {
        event.removeGameStage("dontSnad")
        event.addGameStage("doSnad")
    } else {
        event.removeGameStage("doSnad")
        event.addGameStage("dontSnad")
    }
    if (doStabMiners) {
        event.removeGameStage("dontStabMiners")
        event.addGameStage("doStabMiners")
    } else {
        event.removeGameStage("doStabMiners")
        event.addGameStage("dontStabMiners")
    }
    if (doSteamAge) {
        event.removeGameStage("dontSteamAge")
        event.addGameStage("doSteamAge")
    } else {
        event.removeGameStage("doSteamAge")
        event.addGameStage("dontSteamAge")
    }
})
