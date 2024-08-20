const isNormalMode = !!global.isNormalMode;
const isHardMode = !!global.isHardMode;
const isHarderMode = !!global.isHarderMode;

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

    event.removeGameStage('mode_normal')
    event.removeGameStage('mode_hard')
    event.removeGameStage('mode_harder')

    event.addGameStage(`mode_${global.packmode}`);
})